/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module kickoff/test/circaCouponReminderSelection @description Qualifies exact Local reminder selections and the immutable Process contribution without executing jobs or importing business data. @owner nodics.kickoff @layer test */
const test = require("node:test"),
  assert = require("node:assert/strict"),
  path = require("node:path"),
  fs = require("node:fs"),
  crypto = require("node:crypto");
const {
  loadRuntime,
  activeModuleNames,
  frameworkRoot,
} = require("./helpers/configuration");
test("Local Engagement retains qualified reminder source and template selections after role projection", () => {
  const engagement = loadRuntime("engagementServer", "kickoffLocal");
  assert(engagement.communication.trustedSourceModules.includes("digitalCore"));
  assert(engagement.communication.trustedSourceModules.includes("eWaste"));
  assert(engagement.communication.trustedSourceModules.includes("profile"));
  assert.equal(
    engagement.communication.templateResources.modules.digitalCore,
    true,
  );
  assert.equal(
    engagement.communication.templateResources.selections
      .DIGITAL_COUPON_EXPIRING_IN_APP,
    true,
  );
  assert.equal(
    engagement.communication.sourceEligibilityTransport.allowInsecureLoopback,
    true,
  );
  assert.equal(activeModuleNames(engagement).includes("digitalCore"), false);
  assert.notEqual(
    loadRuntime(
      "engagementServer",
      "kickoffDockerLocal",
    ).communication.trustedSourceModules.includes("digitalCore"),
    true,
  );
});
test("Local reminder uses existing four runtimes, one entitlement and IN_APP-only owner selection", () => {
  const commerce = loadRuntime("commerceServer", "kickoffLocal"),
    engagement = loadRuntime("engagementServer", "kickoffLocal"),
    platform = loadRuntime("platformServer", "kickoffLocal"),
    process = loadRuntime("processServer", "kickoffLocal");
  const p = commerce.digitalCore.couponReminders;
  assert.equal(p.enabled, true);
  assert.equal(p.leadTimeSeconds, 1296000);
  assert.equal(p.delivery.channel, "IN_APP");
  for (const field of ["sourceCallers", "sweepCallers", "dispatchCallers"]) {
    assert.equal(p[field].length, 1);
    assert.equal(p[field][0].enterpriseCode, "GREENPERKS_ONLINE");
    assert.equal(p[field][0].principalEnterpriseCode, "default");
  }
  assert.equal(platform.profileCouponNotifications.enabled, true);
  assert.equal(activeModuleNames(engagement).includes("digitalCore"), false);
  assert.deepEqual(
    engagement.communication.dispatchEligibilityOwners.digitalCore
      .DIGITAL_COUPON_EXPIRING,
    {
      moduleName: "digitalCore",
      connectionName: "commerce",
      runtimeRole: "COMMERCE",
      apiName: "/internal/coupons/reminder-dispatch-eligibility",
    },
  );
  assert.equal(
    engagement.communication.templateResources.selections
      .DIGITAL_COUPON_EXPIRING_IN_APP,
    true,
  );
  assert(
    process.process.actionAdapters.allowedActions.includes(
      "digitalCore.couponExpirySweep",
    ),
  );
  const target = process.cronjob.scheduleDrafts.targets.find(
    (t) => t.code === "circaCouponExpiryReminder",
  );
  assert.equal(
    target.context.entitlementCode,
    "digitalEntitlement:89b1e6eec0696d231cb391663f31b8bd143c32bc",
  );
  assert.equal(target.runOnNode, process.nodeId);
  assert.equal(process.cronjob.runOnStartup, false);
});
test("optional v001 source passes actual nImport and Process graph contracts without activating a job", () => {
  const owner = {
    name: "processServer",
    path: path.resolve(__dirname, "../envs/kickoffLocal/processServer"),
  };
  const manifest = require(path.join(owner.path, "data/manifest.json")),
    section = manifest.sections.circaCouponReminder;
  const releases = Object.create(
    require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService",
      ),
    ),
  );
  releases.configuration = () =>
    require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nData/nImport/import/config/properties",
      ),
    ).data.dataReleases;
  releases.error = (c, m) => new Error(c + ": " + m);
  const descriptor = releases.inspectSourceManifest(
    owner,
    path.join(owner.path, "data/manifest.json"),
    section,
    "circaCouponReminder",
  );
  assert.equal(descriptor.invalidManifest, undefined);
  const file = Object.keys(section.files)[0],
    payload = require(path.join(owner.path, "data", file));
  assert.equal(
    crypto
      .createHash("sha256")
      .update(fs.readFileSync(path.join(owner.path, "data", file)))
      .digest("hex"),
    section.files[file],
  );
  global.CONFIG = { get: () => ({}) };
  global.CLASSES = { NodicsError: class extends Error {} };
  global.SERVICE = {
    DefaultProcessGraphValidationService: require(
      path.join(
        frameworkRoot,
        "nodics.process/modules/workflow/src/service/designer/defaultProcessGraphValidationService",
      ),
    ),
  };
  const ownerService = require(
    path.join(
      frameworkRoot,
      "nodics.process/modules/workflow/src/service/definition/defaultProcessDefinitionContributionService",
    ),
  );
  assert.equal(
    ownerService.validateContribution(descriptor, payload).length,
    1,
  );
  assert.equal(
    payload.definitions[0].graph.nodes.filter((n) => n.type === "ACTION")
      .length,
    1,
  );
});

test("Local reminder selects an installed Engagement connection without replacing Framework defaults", () => {
  const commerce = loadRuntime("commerceServer", "kickoffLocal");
  const selection =
    commerce.digitalCore.couponReminders.delivery.communicationConnectionName;
  assert.equal(selection, "engagement");
  assert(commerce.servers[selection]);
  assert.deepEqual(commerce.servers[selection], commerce.servers.engagement);
  const defaults = require(
    path.join(
      frameworkRoot,
      "nodics.commerce/modules/digitalCommerce/modules/digitalCore/config/properties",
    ),
  ).digitalCore;
  assert.equal(
    defaults.couponReminders.delivery.communicationConnectionName,
    "communication",
  );
});
