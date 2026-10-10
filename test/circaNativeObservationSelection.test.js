/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module test/circaNativeObservationSelection @description Verifies only the reviewed native customer observation selection; framework tests own generic authorization behavior. @owner nodics.kickoff @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { loadRuntime, activeModuleNames, frameworkRoot } = require("./helpers/configuration");
const observer = require(path.join(frameworkRoot, "nodics.foundation/modules/nPublish/src/service/defaultPublicationSetupObservationService"));
const bootstrap = require(path.join(frameworkRoot, "nodics.platform/modules/profile/src/service/identity/defaultMandatoryIdentityBootstrapService"));
const root = path.resolve(__dirname, "..");
const receivers = ["platformServer", "processServer", "commerceServer", "commerceStagedServer",
  "wcmsStagedServer", "loyaltyServer", "locationServer", "wasteServer"];
const planCode = "circa-native-reviewed";
const bytes = fs.readFileSync(path.join(root, "modules/circa.ewaste/config/setup-observation/circa-native-reviewed.json"));
const plan = JSON.parse(bytes);
const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
const beforePermissions = [
  "auth.internal.token.read",
  "auth.internal.token.read.anyTenant",
  "location.location.read",
  "profile.address.reference.read",
  "profile.enterprise.reference.read",
  "communication.request",
  "communication.verification.execute",
  "profile.enterprise.search",
  "profile.tenant.namespace.bind",
  "profile.customer.register",
  "loyalty.wallet.open",
  "loyalty.wallet.read",
  "media.evidence.read",
  "media.customer.upload",
  "media.customer.read",
  "import.release.validate",
  "import.core.run",
  "publish.lifecycle.create",
  "publish.lifecycle.view",
  "publish.lifecycle.validate",
  "publish.lifecycle.requestApproval",
  "commerce.product.publish"
];

test("eight native receivers adopt the same confined exact plan and unchanged deployment principal", () => {
  for (const server of receivers) {
    const runtime = loadRuntime(server, "kickoffLocal");
    const policy = runtime.publish.setup.observation;
    assert.equal(policy.enabled, true);
    assert(activeModuleNames(runtime).includes("publish"));
    assert.deepEqual(policy.plans[planCode], {
      moduleName: "circa.ewaste", path: "config/setup-observation/circa-native-reviewed.json", checksum, revision: plan.revision,
    });
    assert.deepEqual(policy.callers, { nativePlatform: {
      tenant: "default", enterpriseCode: "default", serviceId: "apiAdmin", projectCode: "nodics.kickoff",
      environmentCode: "kickoffLocal", serverCode: "platformServer", instanceCode: "kickoff-local-platform-1",
      assignmentCode: "kickoff-local-platform-runtime-deployment", plans: [planCode],
    } });
    if (server !== "platformServer") assert.deepEqual(policy.profilePlans, {});
    if (server !== "commerceServer") assert.deepEqual(policy.targetObservers, {});
    if (server !== "platformServer")
      assert.equal(bootstrap.runtimeGrantPermissions(runtime.identityGovernance.migration).includes("publish.setup.observe"), false);
  }
  for (const server of ["wcmsOnlineServer", "engagementServer"])
    assert.equal(loadRuntime(server, "kickoffLocal").publish.setup.observation.enabled, false);
  assert.notEqual(loadRuntime("platformServer", "kickoffDockerLocal").publish?.setup?.observation?.enabled, true);
});

test("Platform preserves all existing permissions and adds only the dedicated observer grant selection", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal");
  const permissions = bootstrap.runtimeGrantPermissions(platform.identityGovernance.migration);
  assert.deepEqual(permissions, [...beforePermissions, "publish.setup.observe"]);
  assert.deepEqual(platform.publish.setup.observation.profilePlans, { circa: planCode });
});

test("reviewed plan exactly matches the full current Platform profile without remote profile copies", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal");
  const config = platform.backofficeApplicationInitialization, raw = config.profiles.circa;
  const profile = { ...raw, target: { ...config.target, ...raw.target } };
  assert.equal(plan.profileDigest, observer.digest(profile));
  assert.equal(plan.tenant, platform.defaultTenant);
  assert.equal(plan.baselineCode, profile.baselineCode);
  const steps = observer.configuredSteps(profile);
  assert.equal(plan.stages.length, steps.length);
  for (const step of steps) {
    const stage = plan.stages.find(item => item.code === step.code);
    assert(stage);
    assert.equal(observer.digest(stage.descriptor), observer.digest(observer.stepIdentity(step)));
    if (step.operatorEnterpriseCode) assert.equal(stage.enterpriseCode, step.operatorEnterpriseCode);
    assert(receivers.includes(stage.server));
    assert.equal(stage.descriptor.targetRuntimeRole, loadRuntime(stage.server, "kickoffLocal").runtimeRole.code);
    if (stage.descriptor.type === "DATA_RELEASE") {
      assert(stage.release && stage.release.declaredFiles.length);
      assert.match(stage.release.checksum, /^[a-f0-9]{64}$/);
    }
    if (stage.descriptor.type === "GOVERNED_PUBLICATIONS") {
      assert.deepEqual(stage.online, { server: "commerceServer", runtimeRole: "COMMERCE" });
      assert.equal(stage.publications, undefined, "no copied final lifecycle claims");
    }
  }
  assert.equal(plan.baseline.server, "wcmsStagedServer");
  const media = plan.stages.find(stage => stage.descriptor.type === "MEDIA_ASSET_MANIFEST");
  assert.equal(media.assets.length, 18);
  assert.equal(media.enterpriseCode, "default");
  for (const server of ["commerceServer", "commerceStagedServer", "loyaltyServer", "locationServer", "wasteServer"]) {
    const remote = loadRuntime(server, "kickoffLocal").backofficeApplicationInitialization.profiles.circa;
    assert.notDeepEqual(remote, raw);
  }
});

test("native Platform import timeout is a deployment selection outside the sealed profile", () => {
  const native = loadRuntime("platformServer", "kickoffLocal").backofficeApplicationInitialization;
  assert.equal(native.dataReleaseTimeoutMs, 360000);
  assert.equal(native.profiles.circa.dataReleaseTimeoutMs, undefined);
  const profile = { ...native.profiles.circa, target: { ...native.target, ...native.profiles.circa.target } };
  assert.equal(observer.digest(profile), plan.profileDigest);
  assert.equal(loadRuntime("commerceServer", "kickoffLocal").backofficeApplicationInitialization.dataReleaseTimeoutMs, undefined);
  assert.equal(loadRuntime("platformServer", "kickoffDockerLocal").backofficeApplicationInitialization.dataReleaseTimeoutMs, 120000);
});

test("Online observer selects only target read hooks without source publication registrations", () => {
  const online = loadRuntime("commerceServer", "kickoffLocal").publish;
  assert.deepEqual(online.setup.observation.targetObservers, {
    product: "DefaultProductPublicationVersionProviderService", pricing: "DefaultPricingPublicationService",
    inventory: "DefaultInventoryPublicationService", tax: "DefaultTaxPublicationService", promotion: "DefaultPromotionPublicationService",
  });
  for (const key of ["domainAdapters", "versionProviders", "workflowProviders"])
    assert(Object.values(online.providers[key] || {}).every(value => !value), "Online has no selected source provider");
});
