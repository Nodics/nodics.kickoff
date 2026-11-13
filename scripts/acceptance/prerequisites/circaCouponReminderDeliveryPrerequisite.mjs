/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module scripts/acceptance/prerequisites/circaCouponReminderDeliveryPrerequisite
 * @description Verifies that Circa E12 selections are backed by a real inactive reminder job and configured Digital/Profile/Communication source bindings.
 * @layer project-acceptance
 * @owner nodics.kickoff
 */
import { createHash } from "node:crypto";
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

function loadSource(file) {
  delete require.cache[require.resolve(file)];
  return require(file);
}

function localRuntime(projectRoot, frameworkRoot, server) {
  const probe = require(path.join(frameworkRoot, "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));
  return probe.read({ projectRoot, frameworkRoot, environment: "kickoffLocal", server, inheritEnvironment: true }).properties;
}

/** Reads the Digital owner records selected by the effective Process configuration. */
function selectedReminderJobs(processRuntime, frameworkRoot) {
  const selection = processRuntime.data?.dataReleases?.contributions?.find(entry => entry.moduleName === "digitalCore");
  const sections = ["couponReminderWorkflow", "couponReminderTrigger", "couponReminderSchedule"];
  if (!sections.every(section => selection?.sections.includes(section))) return [];
  const root = path.join(frameworkRoot, "nodics.commerce/modules/digitalCommerce/modules/digitalCore/data");
  const manifest = loadSource(path.join(root, "manifest.json"));
  const records = sections.map(code => {
    const section = manifest.sections[code];
    const files = Object.keys(section?.files || {}).filter(file =>
      /^init-v[0-9]+\/records\/(?:jobs|process)\/[A-Za-z0-9]+Data\.js$/u.test(file));
    if (section?.selectionPolicy !== "EXPLICIT" || files.length !== 1) return {};
    const file = path.join(root, files[0]);
    if (createHash("sha256").update(fs.readFileSync(file)).digest("hex") !== section.files[files[0]]) return {};
    return loadSource(file);
  });
  const [workflow, triggerData, scheduleData] = records;
  const trigger = triggerData.record1, job = scheduleData.record1;
  const definition = workflow.definitions?.find(row => row.code === trigger?.definitionCode);
  if (!definition?.graph.nodes.some(node => node.type === "ACTION" &&
      node.action?.moduleName === reminderAction.moduleName && node.action.operation === reminderAction.operation) ||
      trigger.triggerType !== "CRON" || job?.jobDetail?.processTrigger?.triggerCode !== trigger.code ||
      trigger.cronJobCode !== job.code) return [];
  return [job];
}

/** Resolves the project-installed owner and its explicit runtime selection. */
export function circaCouponReminderJobs(projectRoot, frameworkRoot = path.dirname(path.dirname(
  createRequire(path.join(projectRoot, "package.json")).resolve("nodics.foundation/package.json")))) {
  return selectedReminderJobs(localRuntime(projectRoot, frameworkRoot, "processServer"), frameworkRoot);
}

function localBindings(processRuntime, commerceRuntime, platformRuntime) {
  const communication = processRuntime.communication;
  const digital = commerceRuntime.digitalCore?.couponReminders;
  const profile = platformRuntime.profileCouponNotifications;
  const trustedSources = communication?.trustedSourceModules;
  const sourceCallers = digital?.sourceCallers;
  return {
    digitalConfigured: digital?.enabled === true && Array.isArray(sourceCallers) && sourceCallers.length > 0,
    profileConfigured: profile?.enabled === true,
    communicationConfigured: Array.isArray(trustedSources) && trustedSources.includes("digitalCore") &&
      communication?.templateResources?.modules?.digitalCore === true &&
      communication?.templateResources?.selections?.[reminderTemplate] === true,
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
export async function inspectCircaCouponReminderDeliveryPrerequisite({ projectRoot, frameworkRoot }) {
  const runtime = server => localRuntime(projectRoot, frameworkRoot, server);
  const processRuntime = runtime("processServer");
  const jobs = selectedReminderJobs(processRuntime, frameworkRoot);
  const projectProperties = loadSource(path.join(projectRoot, "modules/circa.ewaste/config/properties.js"));
  const bindings = localBindings(processRuntime, runtime("commerceServer"), runtime("platformServer"));
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
