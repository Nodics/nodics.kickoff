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
// Reviewed pre-refactor authority snapshot; this fixture is not runtime grant configuration.
const runtimePermissions = require("./fixtures/kickoffNativeRuntimePermissions.json");
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
      assert.equal(runtimePermissions[server].includes("publish.setup.observe"), false);
  }
  for (const server of ["wcmsOnlineServer", "engagementServer"])
    assert.equal(loadRuntime(server, "kickoffLocal").publish.setup.observation.enabled, false);
  assert.notEqual(loadRuntime("platformServer", "kickoffDockerLocal").publish?.setup?.observation?.enabled, true);
});

test("reviewed Platform assignment fixture preserves the exact observer grant without configuration authority", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal");
  const permissions = runtimePermissions.platformServer;
  assert.deepEqual(permissions, [...beforePermissions, "publish.setup.observe", "commerce.digital.notification.read"]);
  assert.deepEqual(platform.publish.setup.observation.profilePlans, { circa: planCode });
});

test("Circa identity authority remains separate while the role successor requires observation review", () => {
  const runtime = loadRuntime("platformServer", "kickoffLocal");
  const config = runtime.backofficeApplicationInitialization;
  const profile = { ...config.profiles.circa, target: { ...config.target, ...config.profiles.circa.target } };
  assert.notEqual(observer.digest(profile), plan.profileDigest);
  assert(!observer.configuredSteps(profile).some(step => step.code === "circa.ewaste:circaEnterpriseRoles"));
  const identity = runtime.data.dataReleases.initializationProfiles.circaIdentityAuthority;
  assert.equal(identity.enabled, true);
  assert.match(identity.description, /Fresh Circa installations require.*before demo setup/);
  assert.deepEqual(identity.steps, [{ dataType: "init", releaseCodes: ["digitalCore:bundleParticipantPermissions", "digitalCore:participantAccessGroups", "loyaltyWallet:participantAccessGroups", "loyaltyWallet:specialAccessGroups", "loyaltyWallet:specialAccessRoles", "wasteCarbon:participantAccessGroups", "wasteReward:participantAccessGroups", "import:specialAccessGroups", "import:specialAccessRoles", "inventory:specialAccessGroups", "inventory:specialAccessRoles", "order:specialAccessGroups", "order:specialAccessRoles"] }]);
  assert.equal(loadRuntime("wasteServer", "kickoffLocal").data.dataReleases.initializationProfiles.circaIdentityAuthority, undefined);
});

test("retained observation plan cannot qualify the changed role setup profile", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal");
  const config = platform.backofficeApplicationInitialization, raw = config.profiles.circa;
  const profile = { ...raw, target: { ...config.target, ...raw.target } };
  assert.notEqual(plan.profileDigest, observer.digest(profile));
  assert.equal(plan.tenant, platform.defaultTenant);
  assert.equal(plan.baselineCode, profile.baselineCode);
  const steps = observer.configuredSteps(profile);
  assert(!steps.some(step => /circaRetailParticipant/.test(step.code)));
  assert(plan.stages.some(stage => /circaRetailParticipant/.test(stage.code)), "historical plan is not rewritten");
  for (const code of ["digitalCore:enterpriseParticipationAccess", "loyaltyWallet:enterpriseParticipationAccess"]) {
    assert(steps.some(step => step.code === code));
    assert(!plan.stages.some(stage => stage.code === code));
  }
  assert.equal(plan.baseline.server, "wcmsStagedServer");
  assert.equal(plan.stages.find(stage => stage.descriptor.type === "MEDIA_ASSET_MANIFEST").assets.length,18);
});

test("complete role setup is inherited once and keeps definitions before additive assignment", () => {
  const local = loadRuntime("platformServer", "kickoffLocal");
  const profile = local.backofficeApplicationInitialization.profiles.circa;
  const overlay = require("../envs/kickoffLocal/platformServer/config/properties")
    .backofficeApplicationInitialization.runtimeRoleProfiles.PLATFORM.profiles.circa;
  assert.equal(overlay.dataPackages, undefined);
  const backoffice = require(path.join(frameworkRoot,
    "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = backoffice.preparationSteps(profile);
  assert.equal(new Set(steps.map(step=>step.code)).size,steps.length);
  const identity = steps.find(step => step.code === "circa.ewaste:operations");
  const assignment = steps.find(step => step.code === "circa.ewaste:circaCommerceStaffAssignments");
  assert(identity.order < assignment.order);
  const definitions = require("../modules/circa.ewaste/config/properties")
    .backofficeApplicationInitialization.profiles.circa.dataPackages.value.filter(pack=>pack.order===90);
  for (const definition of definitions) {
    const selected = steps.filter(step=>step.code===definition.code);
    assert.equal(selected.length,1);
    assert.equal(selected[0].dataType,"init");
    assert.equal(selected[0].required,true);
    assert(selected[0].order < assignment.order);
  }
  assert(!steps.some(step=>/circaRetailParticipant|circaRetailPromotionDraft/.test(step.code)));
});
test("Local catalogue publication selects the consolidated baseline without correction stages", () => {
  const profile = loadRuntime("platformServer", "kickoffLocal").backofficeApplicationInitialization.profiles.circa;
  const steps = observer.configuredSteps(profile);
  const catalogue = steps.filter(step => step.code === "circa.ewaste:circaCataloguePublicationPlan");
  assert.equal(catalogue.length, 1);
  assert.equal(catalogue[0].type, "GOVERNED_PUBLICATIONS");
  assert.equal(catalogue[0].phase, "AFTER_PUBLICATION");
  assert.equal(catalogue[0].operatorEnterpriseCode, "GREENPERKS_ONLINE");
  assert.deepEqual(catalogue[0].publicationPlan,
    require("../modules/circa.ewaste/data/sample-v001/publication/catalogue/records/publicationPlan.json"));
  assert(steps.some(step => step.code === "circa.ewaste:commerce"));
  const removed = ["circaAssetClassification", "circaAssetClassificationPublicationPlan",
    "circaCatalogueCurrentPublicationPlan", "circaProductMediaReferences",
    "circaProductMediaPublicationPlan", "circaCatalogueMediaCurrentPublicationPlan"];
  for (const code of removed) assert(!steps.some(step => step.code === `circa.ewaste:${code}`));
  for (const issuer of ["GreenPerks", "RenewWorks", "LoopCycle"])
    assert(steps.some(step => step.code === `circa.ewaste:circa${issuer}PublicationPlan`));
});

test("native Platform import timeout is a deployment selection outside the sealed profile", () => {
  const native = loadRuntime("platformServer", "kickoffLocal").backofficeApplicationInitialization;
  assert.equal(native.dataReleaseTimeoutMs, 360000);
  assert.equal(native.profiles.circa.dataReleaseTimeoutMs, undefined);
  const profile = { ...native.profiles.circa, target: { ...native.target, ...native.profiles.circa.target } };
  const digest = observer.digest(profile);
  native.dataReleaseTimeoutMs = 120000;
  assert.equal(observer.digest(profile), digest, "transport timeout cannot alter the profile digest");
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
