/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** Exercises operator-visible Kickoff setup through canonical nConfig projection and nImport catalogue/plan owners. */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const projectRoot = path.resolve(__dirname, "..");
const {loadEnvironment, loadRuntime, frameworkRoot, activeModuleNames} = require("./helpers/configuration");
const probe = require(path.join(frameworkRoot,"nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));

test("operator entry points resolve complete plans on the selected Local runtime", async () => {
  const topology = loadEnvironment("kickoffLocal");
  const tooling = await import(path.join(frameworkRoot,"nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs"));
  const {locationSetupRuntime} = await import(path.join(frameworkRoot,"nodics.platform/modules/backoffice/src/service/acceptance/defaultApplicationBootstrapAcceptanceService.mjs"));
  const platform = loadRuntime("platformServer");
  const bootstrap = platform.tooling.acceptance.localBootstrap;
  const guided = tooling.projectRuntimeAcceptance(projectRoot, topology, {role:"WCMS_STAGED"}).guidedInitialization;
  const staged = tooling.projectRuntime(topology, guided.runtime);
  const stagedProfile = tooling.projectInitializationProfile(staged, guided.profileCode, guided.profileTemplate);
  const maps = locationSetupRuntime(topology, bootstrap.locationInitializationProfile);
  assert.equal(maps.server, "wasteServer");
  const expected = {
    platformServer: {[bootstrap.platformInitializationProfile]: ["init","core"], circaIdentityAuthority:["init"], localAxisIdentityDefinitions:["init"], localContentAccessDefinitions:["init"]},
    [staged.server]: {[stagedProfile]:["init","core"],localDocumentationFoundation:["init"]},
    [maps.server]: {[bootstrap.locationInitializationProfile]:["core"],localWasteFoundation:["core","sample"]},
  };
  for (const runtime of topology.topology.groups.backends) {
    const advertised = runtime.initializationProfiles.map(row => row.code).sort();
    const shapes = expected[runtime.server] || {};
    assert.deepEqual(advertised, Object.keys(shapes).sort(), runtime.server);
    if (!advertised.length) continue;
    await probe.resolve({projectRoot,frameworkRoot,environment:"kickoffLocal",server:runtime.server,
      variables:{NODICS_BOOTSTRAP_ADMIN_PASSWORD:"fixture-admin-password-for-offline-plan",
        NODICS_BOOTSTRAP_SERVICE_PASSWORD:"fixture-service-password-for-offline-plan",
        NODICS_API_KEY:"fixture-runtime-proof-for-offline-plan-only"}});
    const owner = {...SERVICE.DefaultDataReleaseService, getInstallations:async () => [],
      error:(code,message)=>Object.assign(new Error(message),{code})};
    const request = {tenant:"default"};
    const catalogue = await owner.getInitializationProfiles(request);
    assert.deepEqual(catalogue.data.map(row=>row.profileCode).sort(), advertised);
    for (const item of catalogue.data) {
      const input = {...request, profileCode:item.profileCode};
      const {data:plan} = await owner.getInitializationProfile(input);
      assert.equal(plan.publicationContext, CONFIG.get("runtimeRole").publication);
      assert.deepEqual(plan.steps.map(step=>step.dataType), shapes[item.profileCode]);
      for (const field of ["label","description","completionMessage"]) assert(plan[field]?.trim());
      assert.equal(plan.blocked,false,item.profileCode);
      assert(plan.steps.some(step=>step.releases.length),item.profileCode);
      const codes = plan.steps.flatMap(step=>step.releases.map(release=>release.releaseCode));
      if (item.profileCode === bootstrap.platformInitializationProfile) {
        assert(codes.includes("profile:init-v001"),"Platform setup must include the Profile foundation");
        assert(codes.includes("loyaltyProgram:partnerEligibilityAdministrationPermission"),
          "Platform setup must discover the Loyalty owner's default permission release");
      }
      if (item.profileCode === "localDocumentationFoundation")
        assert.deepEqual(codes.sort(),["axis:axisBaseline","cms:init-v001"]);
      if (item.profileCode === "localAxisIdentityDefinitions") {
        assert(codes.includes("axis:accessGroups"));
        assert(!codes.includes("profile:enterpriseRoles"), "definition selection must not install responsibility records");
        assert(!codes.includes("axis:axisBaseline"), "access definitions must not install CMS content");
      }
      if (item.profileCode === "localContentAccessDefinitions") {
        assert(codes.includes("cms:businessAccessGroups"));
        assert(!codes.includes("cms:businessAccessRoles"), "tenant group preparation must not install authority role definitions");
        assert(!codes.includes("cms:init-v001"), "group preparation must not install content foundations");
        assert(!codes.some(code => code.startsWith("nexus.web:")), "access definitions must not initialize an application");
      }
      if (item.profileCode === bootstrap.locationInitializationProfile)
        assert.deepEqual(codes,["locationMap:core-map-reference"]);
      if (item.profileCode === "localWasteFoundation")
        assert.deepEqual(codes.sort(),["circa.ewaste:waste-policy","eWaste:core-reference","wasteMaterial:core-v001"]);
      if (item.profileCode !== "localWasteFoundation") assert(!plan.steps.some(step=>step.dataType === "sample"));
      await assert.rejects(owner.runInitializationProfile(input,true),{code:"ERR_AUTH_00003"});
    }
  }
});

test("consolidation preserves owner contributions, business activation and reachable preparation targets", () => {
const commerceRuntime = loadRuntime("commerceServer");
assert.equal(
  commerceRuntime.servers.loyalty.endpoint.httpPort,
  4350,
  "commerceServer must know the Loyalty runtime endpoint",
);
assert.equal(
  require("./helpers/configuration").moduleConfiguration(commerceRuntime,"commerceServer").abstractEndpoint.httpHost,
  "localhost",
  "commerceServer must expose abstract Loyalty routing",
);

const platformRuntime = loadRuntime("platformServer");
const platformServerPackage = require(
  path.join(
    projectRoot,
    "envs",
    "kickoffLocal",
    "platformServer",
    "package.json",
  ),
);
for (const root of ["nodics.platform","nodics.waste","nodics.loyalty","nodics.commerce","nodics.docs","nodics.accelerators/modules/nexus"])
  assert(platformServerPackage.nodics.runtimeModuleRoots.includes(root),root);
assert.equal(
  platformRuntime.servers.loyalty.endpoint.httpPort,
  4350,
  "platformServer must publish the Loyalty runtime endpoint",
);
assert.equal(
  require("./helpers/configuration").moduleConfiguration(platformRuntime,"commerceServer").abstractEndpoint.httpPort,
  4350,
  "platformServer must publish abstract Loyalty routing",
);
// Optional source discovery must still expose the selected sections at their actual receiver.
for (const { moduleName, sections } of platformRuntime.data.dataReleases.contributions) {
  assert.equal(new Set(sections).size, sections.length, moduleName);
}
for (const [owner, section] of [["wasteCarbon","participantAccessGroups"], ["pricing","administrativeAuthoringPermission"],
    ["pricing","administrativePublicationPermission"], ["loyaltyWallet","specialAccessRoles"]]) {
  assert(platformRuntime.data.dataReleases.contributions.some(source => source.moduleName === owner && source.sections.includes(section)),
    owner + ":" + section);
}
assert.equal(
  platformRuntime.activeModules.modules.includes("wasteCollection"),
  false,
  "platformServer must not activate Waste modules while discovering their data contributions",
);
assert.equal(
  platformRuntime.activeModules.modules.includes("loyaltyCore"),
  false,
  "platformServer must not activate Loyalty modules while discovering their data contributions",
);
assert.equal(
  platformRuntime.backofficeFunctionalModuleActivationData.modules["nodics.loyalty"]?.dataPackages?.some(
    item => /enterprise-reference|sample-enterprises|wasteCore:core-reference|sample-profile-addresses/.test(item.code),
  ) || false,
  false,
  "Functional activation excludes demo enterprises and addresses",
);
assert.deepEqual(
  platformRuntime.backofficeFunctionalModuleActivationData.modules["nodics.loyalty"].dataPackages.find(
    item => item.code === "loyaltyProgram:partnerEligibilityAdministrationPermission",
  ),
  {
    code: "loyaltyProgram:partnerEligibilityAdministrationPermission",
    targetServer: "platformServer",
  },
  "Loyalty activation routes the permission release to the Platform Profile owner",
);
assert.deepEqual(
  platformRuntime.backofficeFunctionalModuleActivationData.modules[
    "nodics.rulesEngine"
  ].dataPackages,
  [
    {
      code: "rulesApi:rulesPolicyApproval",
      targetModule: "workflow",
      targetServer: "processServer",
    },
  ],
  "Rules Engine activation must install the approval workflow through the Process runtime",
);
assert.deepEqual(
  platformRuntime.backofficeFunctionalModuleActivationData.modules[
    "nodics.waste"
  ]?.dependencies,
  undefined,
  "Waste activation must preserve optional Location composition instead of forcing another functional module",
);
assert.equal(
  platformRuntime.backofficeFunctionalModuleActivationData.modules["nodics.waste"]?.dataPackages?.some(
    item => /enterprise-reference|sample-enterprises|wasteCore:core-reference|sample-profile-addresses/.test(item.code),
  ) || false,
  false,
  "Functional activation excludes demo enterprises and addresses",
);

const loyaltyRuntime = loadRuntime("commerceServer");
assert.equal(
  loyaltyRuntime.servers.commerce.endpoint.httpPort,
  4350,
  "loyaltyServer must know the Commerce runtime endpoint",
);
assert.equal(
  activeModuleNames(loyaltyRuntime).includes("loyaltyLedger"),
  true,
  "Loyalty explicitly selects its ledger module",
);
assert.equal(
  activeModuleNames(loyaltyRuntime).includes("loyaltyReservation"),
  true,
  "Loyalty explicitly selects its reservation module",
);
assert.equal(
  loyaltyRuntime.loyalty.capabilities,
  undefined,
  "Unconsumed capability maps must not masquerade as feature enforcement",
);

const wasteRuntime = loadRuntime("wasteServer");
assert.equal(
  wasteRuntime.servers.default.endpoint.httpPort,
  4370,
  "wasteServer must own the Waste runtime endpoint",
);
assert.equal(
  wasteRuntime.apiExposure.categories.schemaApi.enabled,
  true,
  "wasteServer must expose Schema Workbench for standalone BackOffice inspection",
);
for (const moduleName of ["waste", "eWaste", "circa.ewaste"]) {
  assert(
    activeModuleNames(wasteRuntime).includes(moduleName),
    `wasteServer must activate the selected ${moduleName} module`,
  );
}
assert.equal(wasteRuntime.waste.accelerator, undefined);
assert.equal(wasteRuntime.waste.projectOverlay, undefined);
assert.deepEqual(
  wasteRuntime.data.dataReleases.initializationProfileDefaults.localWasteFoundation
    .steps[0].releaseCodes,
  [
    "wasteMaterial:core-v001",
    "eWaste:core-reference",
  ],
  "Framework core references must remain independent of optional demo policy",
);
assert.deepEqual(
  wasteRuntime.data.dataReleases.initializationProfileDefaults.localWasteFoundation.steps[1],
  { dataType: "sample", releaseCodes: ["circa.ewaste:waste-policy"] },
  "The selected Circa demo policy must use an explicit separate sample step",
);

const locationRuntime = loadRuntime("wasteServer");
assert.equal(
  locationRuntime.servers.default.endpoint.httpPort,
  4370,
  "locationServer must own the Location runtime endpoint",
);
assert.equal(
  locationRuntime.servers.profile.remoteOnly,
  true,
  "locationServer must reach Profile remotely through topology",
);
assert.equal(
  locationRuntime.apiExposure.categories.schemaApi.enabled,
  true,
  "locationServer must expose Schema Workbench for standalone BackOffice inspection",
);
assert.equal(
  activeModuleNames(locationRuntime).includes("locationCore"),
  true,
  "Location explicitly selects its semantic place owner",
);
assert.deepEqual(
  locationRuntime.data.dataReleases.contributions.find(source => source.moduleName === "wasteCollection"),
  { moduleName: "wasteCollection", sections: ["collection-capabilities"] },
  "locationServer must expose Waste-owned collection capabilities as Location-targeted contributions",
);
const wastePolicy = require("../modules/circa.ewaste/data/manifest.json")
  .sections["waste-policy"];
assert.equal(wastePolicy.destinationRole, "WASTE");
assert.equal(wastePolicy.dataType, "sample");
assert.equal(wastePolicy.selectionPolicy, "EXPLICIT");



// Application preparation must have a concrete connection for each destination.
const circaPackages =
  platformRuntime.backofficeApplicationInitialization.profiles.circa
    .dataPackages;
for (const pack of circaPackages) {
  assert(
    require("./helpers/configuration").moduleConfiguration(platformRuntime, pack.targetServer).abstractEndpoint,
    `Missing Circa preparation connection: ${pack.targetServer}`,
  );
}
assert.deepEqual(
  platformRuntime.servers.wasteServer,
  platformRuntime.servers.waste,
);
assert.equal(platformRuntime.servers.wasteServer.endpoint.httpPort, 4370);

});
