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
const root = path.resolve(__dirname, "..");
const receivers = ["platformServer", "processServer", "commerceServer", "commerceStagedServer",
  "wcmsStagedServer", "wasteServer"];
const planCode = "circa-native-reviewed";
const selectedFile = "config/setup-observation/circa-native-reviewed-revision-23.json";
const bytes = fs.readFileSync(path.join(root, "modules/circa.ewaste", selectedFile));
const plan = JSON.parse(bytes);
const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
test("six native receivers adopt the same confined exact plan and unchanged deployment principal", () => {
  for (const server of receivers) {
    const runtime = loadRuntime(server, "kickoffLocal");
    const policy = runtime.publish.setup.observation;
    assert.equal(policy.enabled, true);
    assert(activeModuleNames(runtime).includes("publish"));
    assert.deepEqual(policy.plans[planCode], {
      moduleName: "circa.ewaste", path: selectedFile, checksum, revision: plan.revision,
    });
    assert.deepEqual(policy.callers, { nativePlatform: {
      tenant: "default", enterpriseCode: "default", serviceId: "apiAdmin", projectCode: "nodics.kickoff",
      environmentCode: "kickoffLocal", serverCode: "platformServer", instanceCode: "kickoff-local-platform-1",
      assignmentCode: "kickoff-local-platform-runtime-deployment", plans: [planCode],
    } });
    if (server !== "platformServer") assert.deepEqual(policy.profilePlans, {});
    else assert.deepEqual(policy.profilePlans, { circa: planCode });
    if (server !== "commerceServer") assert.deepEqual(policy.targetObservers, {});
  }
  for (const server of ["wcmsOnlineServer"])
    assert.equal(loadRuntime(server, "kickoffLocal").publish.setup.observation.enabled, false);
});

test("Circa identity authority remains separate from observation", () => {
  const runtime = loadRuntime("platformServer", "kickoffLocal");
  const config = runtime.backofficeApplicationInitialization;
  const profile = { ...config.profiles.circa, target: { ...config.target, ...config.profiles.circa.target } };
  assert.equal(observer.digest(profile), plan.profileDigest);
  assert(!observer.configuredSteps(profile).some(step => step.code === "circa.ewaste:circaEnterpriseRoles"));
  const releases = runtime.data.dataReleases;
  const identity = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService")).initializationProfiles.call({ configuration: () => releases }).circaIdentityAuthority;
  assert.equal(runtime.data.dataReleases.initializationProfiles.circaIdentityAuthority.template, "circaIdentityAuthority");
  assert.equal(identity.enabled, true);
  assert.match(identity.description, /Fresh Circa installations require.*before demo setup/);
  assert.deepEqual(identity.steps, [{ dataType: "init", releaseCodes: [
    "profile:enterpriseRoles", "cms:accessGroups", "cms:enterpriseRoles", "cms:businessAccessRoles",
    "store:accessGroups", "product:enterpriseRoles", "product:businessAccessRoles", "promotion:enterpriseRoles",
    "promotion:businessAccessRoles", "order:enterpriseRoles", "order:businessAccessRoles",
    "digitalCore:enterpriseRoles", "wasteCore:enterpriseRoles", "wasteCore:businessAccessRoles",
    "digitalCore:bundleParticipantPermissions", "digitalCore:participantAccessGroups", "loyaltyWallet:participantAccessGroups", "loyaltyWallet:specialAccessGroups", "loyaltyWallet:specialAccessRoles", "wasteCarbon:participantAccessGroups", "wasteReward:participantAccessGroups", "import:specialAccessGroups", "import:specialAccessRoles", "inventory:specialAccessGroups", "inventory:specialAccessRoles", "order:specialAccessGroups", "order:specialAccessRoles"] }]);
  const waste = loadRuntime("wasteServer", "kickoffLocal");
  assert.equal(waste.data.dataReleases.initializationProfiles.circaIdentityAuthority, undefined);
  assert.equal(waste.publish.setup.observation.profilePlans.circa, undefined);
});

test("the active plan pins the complete effective profile and preserves revision 18", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal");
  const config = platform.backofficeApplicationInitialization, raw = config.profiles.circa;
  const profile = { ...raw, target: { ...config.target, ...raw.target } };
  const previous = fs.readFileSync(path.join(root,
    "modules/circa.ewaste/config/setup-observation/history/circa-native-reviewed-revision-18.json"));
  assert.equal(crypto.createHash("sha256").update(previous).digest("hex"),
    "482e39186b177e578f9382cb20aa7441f3bd6c95e83c21ef1751f4798723db45");
  assert.notEqual(JSON.parse(previous).profileDigest, observer.digest(profile));
  assert.equal(plan.profileDigest, observer.digest(profile));
  assert.equal(plan.tenant, platform.defaultTenant);
  assert.equal(plan.baselineCode, profile.baselineCode);
  assert.deepEqual(plan.stages.map(stage => stage.descriptor),
    observer.configuredSteps(profile).map(step => observer.stepIdentity(step)));
  assert.equal(plan.baseline.server, "wcmsStagedServer");
  assert.equal(plan.stages.find(stage => stage.descriptor.type === "MEDIA_ASSET_MANIFEST").assets.length, 18);
});

test("revision 19 adds the nine Platform role releases to the reviewed stage list", () => {
  const previous = require("../modules/circa.ewaste/config/setup-observation/history/circa-native-reviewed-revision-18.json");
  const successor = require("../modules/circa.ewaste/config/setup-observation/history/circa-native-reviewed-revision-19.json");
  const retained = new Set(previous.stages.map(stage => stage.code));
  assert.equal(successor.revision, previous.revision + 1);
  assert.deepEqual(successor.stages.filter(stage => retained.has(stage.code)), previous.stages);
  assert.deepEqual(successor.baseline, previous.baseline);
  const added = successor.stages.filter(stage => !retained.has(stage.code));
  assert.deepEqual(added.map(stage => stage.code), [
    "profile:enterpriseRoles", "cms:accessGroups", "cms:enterpriseRoles",
    "cms:businessAccessRoles", "store:accessGroups", "product:businessAccessRoles",
    "order:businessAccessRoles", "wasteCore:enterpriseRoles", "wasteCore:businessAccessRoles",
  ]);
  for (const stage of added) {
    assert.equal(stage.server, "platformServer");
    assert.equal(stage.enterpriseCode, "default");
    assert.equal(stage.descriptor.phase, "BEFORE_PUBLICATION");
    assert.equal(stage.release.dataType, "init");
  }
});

test("revision 20 changes only two owner-confirmed participation release pins", () => {
  const previous = require("../modules/circa.ewaste/config/setup-observation/history/circa-native-reviewed-revision-19.json");
  const retainedFile = path.join(root, "modules/circa.ewaste/config/setup-observation/circa-native-reviewed.json");
  const retainedBytes = fs.readFileSync(retainedFile);
  assert.equal(crypto.createHash("sha256").update(retainedBytes).digest("hex"),
    "64bf7c8082b44296d65a1f78b8b4b3a38e9f35aa6eb57b26a326988a7cc0b42e");
  const plan = JSON.parse(retainedBytes);
  assert.equal(plan.revision, previous.revision + 1);
  assert.deepEqual(plan.baseline, previous.baseline);
  assert.equal(plan.profileDigest, previous.profileDigest);
  assert.equal(plan.stages.length, previous.stages.length);
  const changes = [];
  for (const [index, stage] of plan.stages.entries()) {
    const original = previous.stages[index];
    if (stage.release?.checksum === original.release?.checksum) {
      assert.deepEqual(stage, original);
      continue;
    }
    changes.push(stage.code);
    assert.deepEqual(stage, {
      ...original,
      release: { ...original.release, checksum: stage.release.checksum, prerequisites: stage.release.prerequisites },
    });
    const current = stage.release.prerequisites.find(item => item.sectionCode === "participantTransactionAccess");
    const retained = original.release.prerequisites.find(item => item.sectionCode === "participantTransactionAccess");
    assert(current && retained && current.checksum !== retained.checksum);
  }
  assert.deepEqual(changes.sort(), ["digitalCore:enterpriseParticipationAccess", "loyaltyWallet:enterpriseParticipationAccess"]);
});

test("Native revision 21 changes only its nine reviewed Promotion stages", () => {
  const retainedFile = path.join(root, "modules/circa.ewaste/config/setup-observation/circa-native-reviewed-l08-20261110.json");
  const bytes = fs.readFileSync(retainedFile);
  const plan = JSON.parse(bytes);
  const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
  const retained = require("../modules/circa.ewaste/config/setup-observation/circa-native-reviewed.json");
  assert.equal(plan.revision, retained.revision + 1);
  assert.equal(checksum, "f800ff475030707f2b1d843bf643ed1eb99ad0ab5aa16cbaf87201d40014b359");
  assert.deepEqual(plan.baseline, retained.baseline);
  assert.equal(plan.stages.length, retained.stages.length);
  const replacements = plan.stages.filter((stage, index) => stage.code !== retained.stages[index].code);
  assert.equal(replacements.length, 9);
  for (const [index, stage] of plan.stages.entries()) {
    const original = retained.stages[index];
    if (stage.code === original.code) assert.deepEqual(stage, original);
    else {
      assert.match(stage.code, /^circa\.ewaste:circa(GreenPerks|RenewWorks|LoopCycle)L08(PublicationPlan|Budget|Issuance)$/);
      assert.equal(stage.code.replace("L08", ""), original.code);
      assert.equal(stage.enterpriseCode, original.enterpriseCode);
      assert.equal(stage.server, original.server);
    }
  }
});

test("Native revision 22 preserves reviewed stages while advancing release pins", () => {
  const plan = require("../modules/circa.ewaste/config/setup-observation/circa-native-reviewed-revision-22.json");
  const previous = require("../modules/circa.ewaste/config/setup-observation/circa-native-reviewed-l08-20261110.json");
  assert.equal(plan.revision, previous.revision + 1);
  const { revision, baseline, stages, ...policy } = plan;
  const { revision: oldRevision, baseline: oldBaseline, stages: oldStages, ...oldPolicy } = previous;
  assert.deepEqual(policy, oldPolicy);
  assert.equal(stages.length, oldStages.length);
  assert.deepEqual({ ...baseline, descriptorDigest: oldBaseline.descriptorDigest }, oldBaseline);
  const changed = [];
  for (const [index, stage] of stages.entries()) {
    const old = oldStages[index];
    if (stage.release?.version !== old.release?.version || stage.release?.checksum !== old.release?.checksum) {
      assert(stage.release && old.release);
      const { version, checksum, prerequisites, ...source } = stage.release;
      const { version: oldVersion, checksum: oldChecksum, prerequisites: oldPrerequisites, ...oldSource } = old.release;
      assert.deepEqual(source, oldSource, stage.code);
      assert.deepEqual(prerequisites.map(({moduleName, sectionCode, partition}) => ({moduleName, sectionCode, partition})),
        oldPrerequisites.map(({moduleName, sectionCode, partition}) => ({moduleName, sectionCode, partition})), stage.code);
      assert.deepEqual({ ...stage, release: old.release }, old);
      changed.push(stage.code);
    } else assert.deepEqual(stage, old);
  }
  assert.equal(changed.length, 37);
});

test("Native revision 23 records canonical selection metadata without changing actors, stages or release bytes", () => {
  const previous = require("../modules/circa.ewaste/config/setup-observation/circa-native-reviewed-revision-22.json");
  assert.equal(plan.revision, previous.revision + 1);
  const { revision, baseline, stages, ...policy } = plan;
  const { revision: oldRevision, baseline: oldBaseline, stages: oldStages, ...oldPolicy } = previous;
  assert.deepEqual(policy, oldPolicy);
  assert.deepEqual(baseline, oldBaseline);
  assert.equal(stages.length, oldStages.length);
  let selections = 0;
  for (const [index, stage] of stages.entries()) {
    const old = oldStages[index];
    if (!stage.release) {
      assert.deepEqual(stage, old);
      continue;
    }
    assert.deepEqual({ ...stage, release: old.release }, old);
    const { selectionPolicy, ...release } = stage.release;
    const { selectionPolicy: oldSelectionPolicy, ...oldRelease } = old.release;
    assert.deepEqual(release, oldRelease, stage.code);
    if (oldSelectionPolicy !== undefined) assert.equal(selectionPolicy, oldSelectionPolicy, stage.code);
    else {
      assert(["EXPLICIT", "DEFAULT"].includes(selectionPolicy), stage.code);
      if (release.dataType === "sample") assert.equal(selectionPolicy, "EXPLICIT", stage.code);
      selections++;
    }
  }
  assert.equal(selections, 85);
});

test("revision 17 to 18 retains its reviewed checksum differences", () => {
  const successor = require("../modules/circa.ewaste/config/setup-observation/history/circa-native-reviewed-revision-18.json");
  const previous = require("../modules/circa.ewaste/config/setup-observation/history/circa-native-reviewed-revision-17.json");
  const fixture = require("../modules/circa.ewaste/test/fixtures/circaUnreleasedObservationSourceDifferences.json");
  const differences = {};
  for (const stage of successor.stages.filter(stage => stage.release)) {
    const old = previous.stages.find(row => row.code === stage.code)?.release;
    if (old && old.checksum !== stage.release.checksum)
      differences[stage.code] = { retained: old.checksum, current: stage.release.checksum };
  }
  assert.deepEqual(fixture.stages, differences);
});

test("each native receiver admits its pinned source on the resolved deployment graph", async () => {
  const projection = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));
  for (const server of receivers) {
    await projection.resolve({ projectRoot: root, frameworkRoot, server, environment: "kickoffLocal" });
    const owner = SERVICE.DefaultPublicationSetupObservationService;
    const imports = SERVICE.DefaultDataReleaseService;
    assert.equal(owner.resolvePlan(planCode).checksum, checksum);
    if (server === "platformServer") {
      const setup = SERVICE.DefaultBackofficeApplicationInitializationService;
      assert.equal(setup.setupObservationPlan(setup.profile("circa"), { tenant: plan.tenant }).checksum, checksum);
    }
    if (server === plan.baseline.server) {
      const descriptor = SERVICE.DefaultCmsPublicationBaselineService.descriptor(plan.baselineCode);
      assert.equal(owner.digest(descriptor), plan.baseline.descriptorDigest);
    }
    for (const stage of plan.stages.filter(stage => stage.server === server)) {
      assert.equal(stage.descriptor.targetRuntimeRole, CONFIG.get("runtimeRole").code, stage.code);
      if (stage.release) {
        const pin = stage.release, actual = imports.discoverManifestRelease(pin, pin.dataType);
        for (const key of Object.keys(pin)) assert.deepEqual(actual[key], pin[key], stage.code + "/" + key);
        assert.equal(imports.validateDestination(actual), true, stage.code);
        const snapshot = owner.sourceSnapshot(actual);
        const hashes = Object.fromEntries(actual.declaredFiles.map(name => [
          name, crypto.createHash("sha256").update(snapshot.files.get(name)).digest("hex"),
        ]));
        assert.equal(imports.releaseFileChecksum(hashes, actual.prerequisites), pin.checksum, stage.code);
      }
      if (stage.manifest) owner.bytes(stage.manifest);
    }
  }
});

test("complete role setup is inherited once and keeps definitions before additive assignment", () => {
  const local = loadRuntime("platformServer", "kickoffLocal");
  const profile = local.backofficeApplicationInitialization.profiles.circa;
  const overlay = require("../envs/kickoffLocal/platformServer/config/properties")
    .backofficeApplicationInitialization.profiles.circa;
  assert.equal(overlay.dataPackages.$config, "replace");
  const backoffice = require(path.join(frameworkRoot,
    "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = backoffice.preparationSteps(profile);
  assert.equal(new Set(steps.map(step=>step.code)).size,steps.length);
  const identity = steps.find(step => step.code === "circa.ewaste:operations");
  const assignment = steps.find(step => step.code === "circa.ewaste:circaCommerceStaffAssignments");
  assert(identity.order < assignment.order);
  const definitions = require("../config/circa-setup-data-packages.json").filter(pack => pack.order === 90);
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
    assert(steps.some(step => step.code === `circa.ewaste:circa${issuer}L08PublicationPlan`));
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
