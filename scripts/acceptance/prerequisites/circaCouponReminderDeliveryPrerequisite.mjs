/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module scripts/acceptance/prerequisites/circaCouponReminderDeliveryPrerequisite
 * @description Verifies that Circa E12 selections are backed by a real inactive reminder job and configured Digital/Profile/Communication source bindings.
 * @layer project-acceptance
 * @owner nodics.kickoff
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const acceptanceNames = Object.freeze({
  digital: "circaDigitalCouponReminderSource",
  cron: "circaCouponExpiryReminderCron",
  communication: "circaCouponExpiryReminderCommunication",
});
const reminderTemplate = "DIGITAL_COUPON_EXPIRING_IN_APP";
const reminderAction = Object.freeze({ moduleName: "digitalCore", operation: "couponExpirySweep" });

function sourceFiles(root, predicate) {
  const files = [];
  if (!fs.existsSync(root)) return files;
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const target = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...sourceFiles(target, predicate));
    else if (predicate(target)) files.push(target);
  }
  return files;
}

function loadSource(file) {
  delete require.cache[require.resolve(file)];
  return require(file);
}

function processDefinitions(recordFiles) {
  const definitions = [];
  for (const file of recordFiles) {
    const source = loadSource(file);
    for (const value of Object.values(source || {})) {
      const rows = Array.isArray(value) ? value : [];
      for (const row of rows) {
        const actions = row?.graph?.nodes?.filter(node => node?.type === "ACTION") || [];
        if (actions.some(node => node.action?.moduleName === reminderAction.moduleName &&
            node.action?.operation === reminderAction.operation)) definitions.push(row);
      }
    }
  }
  return definitions;
}

/** Returns only governed Circa Cron records bound to a Process definition containing the Digital reminder action. */
export function circaCouponReminderJobs(projectRoot) {
  const dataRoot = path.join(projectRoot, "modules/circa.ewaste/data");
  const allFiles = sourceFiles(dataRoot, file => /\.(?:js|json)$/u.test(file));
  const records = allFiles.filter(file => file.includes(`${path.sep}records${path.sep}`));
  const definitions = processDefinitions(records);
  const definitionCodes = new Set(definitions.map(definition => definition.code));
  const jobs = [];

  for (const headerFile of allFiles.filter(file => file.includes(`${path.sep}headers${path.sep}`))) {
    const header = loadSource(headerFile);
    for (const [moduleName, definitions] of Object.entries(header || {})) {
      for (const definition of Object.values(definitions || {})) {
        const schema = definition?.options?.schemaName;
        const prefix = definition?.options?.dataFilePrefix;
        if (moduleName !== "cronjob" || schema !== "cronJob" || definition?.options?.enabled !== true ||
            typeof prefix !== "string") continue;
        for (const recordFile of records.filter(file => path.basename(file, path.extname(file)) === prefix)) {
          for (const record of Object.values(loadSource(recordFile) || {})) {
            if (definitionCodes.has(record?.jobDetail?.processTrigger?.triggerCode)) {
              jobs.push(structuredClone(record));
            }
          }
        }
      }
    }
  }
  return jobs;
}

function localBindings(projectRoot) {
  const environment = loadSource(path.join(projectRoot, "envs/kickoffLocal/config/properties.js"));
  const communication = environment?.communication?.runtimeRoleProfiles?.ENGAGEMENT;
  const digital = environment?.digitalCore?.runtimeRoleProfiles?.COMMERCE?.couponReminders;
  const profile = environment?.profile?.runtimeRoleProfiles?.PLATFORM?.profileCouponNotifications;
  const values = selection => Array.isArray(selection) ? selection : selection?.value;
  const selected = (selection, code) => selection?.[code] === true || selection?.value?.[code] === true;
  const trustedSources = values(communication?.trustedSourceModules);
  const sourceCallers = values(digital?.sourceCallers);
  return {
    digitalConfigured: digital?.enabled === true && Array.isArray(sourceCallers) && sourceCallers.length > 0,
    profileConfigured: profile?.enabled === true,
    communicationConfigured: Array.isArray(trustedSources) && trustedSources.includes("digitalCore") &&
      selected(communication?.templateResources?.modules, "digitalCore") &&
      selected(communication?.templateResources?.selections, reminderTemplate),
  };
}

function profileConsistency(profiles, jobs) {
  const digital = profiles?.[acceptanceNames.digital];
  const cron = profiles?.[acceptanceNames.cron];
  const communication = profiles?.[acceptanceNames.communication];
  const job = jobs.length === 1 ? jobs[0] : null;
  const commands = communication?.scenarios && Object.values(communication.scenarios)
    .map(scenario => scenario?.command);
  const communicationSourcesValid = Array.isArray(commands) && commands.length === 3 && commands.every(command =>
    command?.sourceType === "DIGITAL_COUPON_EXPIRING" && command?.purpose === "DIGITAL_COUPON_EXPIRING" &&
    command?.sourceModule === undefined && command?.templateCode === reminderTemplate &&
    command?.channel === "IN_APP" && command?.requiresSourceEligibility === true);
  return {
    digitalProfilePresent: Boolean(digital),
    cronProfilePresent: Boolean(cron),
    communicationProfilePresent: Boolean(communication),
    cronProfileMatchesJob: Boolean(job && cron?.jobCode === job.code &&
      cron?.expectedExpression === job.trigger?.expression),
    communicationProfileBoundToDigital: communication?.sourceModule === "digitalCore" && communicationSourcesValid,
  };
}

/**
 * Refuses E12 until source contains one inactive coupon-reminder job, the required
 * Digital/Profile/Communication bindings, and three project selections that point
 * back to those sources.
 */
export async function inspectCircaCouponReminderDeliveryPrerequisite({ projectRoot }) {
  const jobs = circaCouponReminderJobs(projectRoot);
  const projectProperties = loadSource(path.join(projectRoot, "modules/circa.ewaste/config/properties.js"));
  const bindings = localBindings(projectRoot);
  const profiles = profileConsistency(projectProperties?.tooling?.acceptance, jobs);
  const job = jobs.length === 1 ? jobs[0] : null;
  const evidence = Object.freeze({
    acceptanceNames,
    reminderJobCount: jobs.length,
    reminderJobInactive: Boolean(job && job.active === false && job.runOnInit === false),
    reminderJobExpressionPresent: Boolean(job && typeof job.trigger?.expression === "string" && job.trigger.expression.length > 0),
    ...bindings,
    ...profiles,
  });

  if (jobs.length !== 1 || !evidence.reminderJobInactive || !evidence.reminderJobExpressionPresent) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_COUPON_REMINDER_CRON_JOB_REQUIRED", evidence });
  }
  if (!bindings.digitalConfigured) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_COUPON_REMINDER_DIGITAL_BINDING_REQUIRED", evidence });
  }
  if (!bindings.profileConfigured) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_COUPON_REMINDER_PROFILE_BINDING_REQUIRED", evidence });
  }
  if (!bindings.communicationConfigured) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_COUPON_REMINDER_COMMUNICATION_BINDING_REQUIRED", evidence });
  }
  if (!profiles.digitalProfilePresent || !profiles.cronProfilePresent || !profiles.communicationProfilePresent) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_COUPON_REMINDER_ACCEPTANCE_PROFILES_REQUIRED", evidence });
  }
  if (!profiles.cronProfileMatchesJob || !profiles.communicationProfileBoundToDigital) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_COUPON_REMINDER_ACCEPTANCE_PROFILE_MISMATCH", evidence });
  }
  return Object.freeze({ ready: true, reasonCode: null, evidence });
}
