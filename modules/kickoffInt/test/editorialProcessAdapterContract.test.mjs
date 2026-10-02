/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** Verifies the reference runtimes select the framework's remote Editorial protocol. */
import assert from "node:assert/strict";
import { test } from "node:test";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration.js");
test("Local and Docker Process select protocol names and deployment connections", () => {
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const config = loadRuntime("processServer", environment);
    assert.deepEqual(config.runtimeRole, { code: "PROCESS", publication: "OPERATIONAL" });
    assert.equal(config.activeModules.modules.includes("kickoffInt"), true);
    assert.equal(config.activeModules.modules.includes("workflow"), true);
    assert.deepEqual(config.data.dataReleases.contributions.filter(item => item.moduleName === "editorial"),
      [{ moduleName: "editorial", sections: ["editorialWorkflows"] }]);
    const transitions = config.process.definitionContributions.ownershipTransitions;
    if (environment === "kickoffLocal") {
      assert.deepEqual(transitions.map(item => item.definitionCode), ["editorialApproval", "editorialPublication"]);
      assert(transitions.every(item => item.mode === "RETAIN" && item.source.releaseCode === "processServer:init-v001" &&
        item.target.releaseCode === "editorial:editorialWorkflows" && /^[a-f0-9]{64}$/.test(item.publishedChecksum)));
    } else assert.deepEqual(transitions, [], "Local evidence cannot authorize Docker adoption");
    assert.deepEqual(config.process.actionAdapters.allowedActions, [
      "nodics.process.noop",
      "editorial.applyDecision",
      "editorial.publishApproved",
      "cms.applyPublicationDecision",
      "rulesApi.applyDecision",
      ...(environment === "kickoffLocal" ? [
        "product.applyPublicationDecision",
        "pricing.applyPublicationDecision",
        "promotion.applyPublicationDecision",
        "inventory.applyPublicationDecision",
        "tax.applyPublicationDecision",
        "media.applyPublicationDecision",
        "profile.applyEmployeeApplicationDecision",
      ] : []),
    ]);
    assert.equal(
      config.process.publicationDecisionCallback.target.moduleName,
      "cms",
    );
    assert.equal(
      config.process.publicationDecisionCallback.target.connectionName,
      "cmsStaged",
    );
    assert.equal(
      config.process.remoteActions.targets.editorial.connectionName,
      "cmsStaged",
    );
    assert.equal(config.editorialProcessAdapter, undefined);
    assert.equal(config.activeModules.modules.includes("editorial"), false);
  }
  assert.equal(
    fs.existsSync(
      new URL(
        "../src/service/defaultKickoffEditorialProcessAdapterService.js",
        import.meta.url,
      ),
    ),
    false,
  );
});

test("customer reviewer policy consumes Editorial graphs while retaining the released Local payload", () => {
  const payload = require(path.join(frameworkRoot,
    "nodics.wcms/modules/editorial/data/init-v002/records/process/editorialWorkflowDefinitionData.js"));
  const legacyPath = new URL("../../../envs/kickoffLocal/processServer/data/init-v001/records/process/defaultEditorialProcessDefinitionContributionData.js", import.meta.url);
  assert.equal(crypto.createHash("sha256").update(fs.readFileSync(legacyPath)).digest("hex"),
    "17a8035e71bf114b72406c555cf32bc5cb5fe052de2d844b6d25af04053c00f0");
  const legacy = require(legacyPath.pathname);
  const owner = require(path.join(frameworkRoot,
    "nodics.process/modules/workflow/src/service/definition/defaultProcessDefinitionContributionService.js"));
  const customerPolicy = require("../config/properties.js").process.definitionContributions.reviewerAssignments;
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const config = loadRuntime("processServer", environment);
    assert.deepEqual(config.process.definitionContributions.reviewerAssignments, customerPolicy);
    assert.equal(fs.existsSync(new URL("../../../envs/" + environment +
      "/processServer/src/service/defaultProcessDefinitionContributionService.js", import.meta.url)), false);
    const adapter = { ...owner, getPolicy: () => config.process.definitionContributions };
    const effective = payload.definitions.map(definition => adapter.customizeDefinition(
      structuredClone(definition), { moduleName: "editorial" }));
    assert.deepEqual(effective, legacy.definitions);
    const unrelated = structuredClone(payload.definitions[0]);
    assert.deepEqual(adapter.customizeDefinition(unrelated, { moduleName: "other" }), payload.definitions[0]);
    assert.equal(config.runtimeRole.code, "PROCESS");
    assert.equal(config.activeModules.modules.includes("editorial"), false);
  }
  assert.equal(payload.definitions[0].graph.nodes.find(node => node.code === "editorialReview").assignee, undefined);
});

test("actual Local/Docker package projection and selected profiles never automatically install future Editorial definitions", () => {
  const probe = `
    const path = require('node:path');
    const input = JSON.parse(process.argv[1]);
    require(path.join(input.frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectConfigurationProbeService')).resolve(input);
    global.CLASSES = { NodicsError: class extends Error { constructor(code, message) { super(message); this.code = code; } } };
    const registration = require(path.join(input.frameworkRoot, 'nodics.foundation/modules/nService/src/service/module/defaultModuleRegistrationAgentService'));
    const releases = require(path.join(input.frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService'));
    global.SERVICE = { ...global.SERVICE,
      DefaultCustomerRegistrationService: require(path.join(input.frameworkRoot, 'nodics.platform/modules/profile/src/service/customer/defaultCustomerRegistrationService')) };
    // Only persistence ports are isolated; discovery, selection and profile construction are the actual owners.
    const service = { ...releases, getInstallations: async () => [],
      executePreparedPlan: async (request, plan) => ({ plannedCodes: plan.releases.map(release => release.releaseCode) }) };
    (async () => {
      const profiles = await service.getInitializationProfiles({ tenant: 'default' });
      const startup = await service.installStartupReleases({ tenant: 'default' });
      process.stdout.write(JSON.stringify({
        role: CONFIG.get('runtimeRole').code,
        editorialActive: NODICS.getActiveModules().includes('editorial'),
        packages: registration.buildActivationDataPackages('editorial', NODICS.getRawModule('editorial')),
        discoverable: service.discoverReleases('init').some(release => release.releaseCode === 'editorial:editorialWorkflows'),
        profiles: profiles.data.map(profile => ({ code: profile.code, codes: profile.steps.flatMap(step => step.releases.map(release => release.releaseCode)) })),
        startup
      }));
    })().catch(error => { console.error(error); process.exitCode = 1; });
  `;
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    for (const [server, role] of [["processServer", "PROCESS"], ["wcmsStagedServer", "WCMS_STAGED"], ["wcmsOnlineServer", "WCMS_ONLINE"]]) {
      const result = JSON.parse(execFileSync(process.execPath, ["-e", probe, JSON.stringify({
        projectRoot: fileURLToPath(new URL("../../../", import.meta.url)), frameworkRoot, environment, server,
      })], { encoding: "utf8", timeout: 30000, maxBuffer: 16 * 1024 * 1024 }));
      assert.equal(result.role, role);
      const optional = result.packages.find(pack => pack.code === "editorial:editorialWorkflows");
      if (optional) {
        assert.equal(optional.required, false);
        assert.equal(optional.trigger, "USER");
        const baseline = result.packages.find(pack => pack.code === "editorial:init-v001");
        assert.equal(baseline.required, true);
        assert.equal(baseline.trigger, "ACTIVATION");
      }
      assert.equal(result.discoverable, role === "PROCESS" || result.editorialActive);
      if (server === "processServer") {
        assert.equal(result.editorialActive, environment === "kickoffDockerLocal",
          "Docker currently discovers Editorial transitively; inactivity is not the opt-in guard");
      }
      for (const profile of result.profiles) assert.equal(profile.codes.includes("editorial:editorialWorkflows"), false);
      assert.equal((result.startup.plannedCodes || []).includes("editorial:editorialWorkflows"), false);
      if (server === "wcmsStagedServer") {
        assert.ok(result.profiles.some(profile => profile.codes.includes("editorial:init-v001")));
        assert.ok(result.startup.plannedCodes.includes("editorial:init-v001"));
      }
    }
  }
});
