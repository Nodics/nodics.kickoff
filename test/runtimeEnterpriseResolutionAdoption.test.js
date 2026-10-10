/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/runtimeEnterpriseResolutionAdoption @description Checks exact resolved Local public-business placement selection without installed identity or publication qualification. @owner nodics.kickoff @layer test */
const test = require("node:test"), assert = require("node:assert/strict"), path = require("node:path");
const { loadRuntime, frameworkRoot } = require("./helpers/configuration");
const bootstrap = require(path.join(frameworkRoot, "nodics.platform/modules/profile/src/service/identity/defaultMandatoryIdentityBootstrapService"));
const startup = require(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/src/service/project/defaultProjectRuntimeStartService"));

test("Local namespace resolution admits only existing Commerce deployment and four reviewed businesses in the signed tenant", () => {
  const commerce = loadRuntime("commerceServer", "kickoffLocal"), platform = loadRuntime("platformServer", "kickoffLocal");
  assert.equal(commerce.enterpriseResolution.runtimeLookup.enabled, true);
  assert.equal(platform.profileRuntimeEnterpriseResolution.enabled, true);
  assert.equal(platform.profileRuntimeEnterpriseResolution.runtimeRole, platform.runtimeRole.code);
  assert.equal(platform.apiExposure.categories.profileManagement.enabled, true);
  assert.deepEqual(platform.profileRuntimeEnterpriseResolution.callers, [{
    tenant: commerce.defaultTenant, principalEnterpriseCode: commerce.defaultEnterprise, serviceId: "apiAdmin",
    projectCode: startup.resolveProjectCode(path.resolve(__dirname, "..")), environmentCode: "kickoffLocal", serverCode: "commerceServer",
    instanceCode: commerce.runtimeIdentity.instanceCode, assignmentCode: bootstrap.localRuntimeGrantCode("kickoffLocal", "commerceServer"),
    enterpriseCodes: ["GREENPERKS_ONLINE", "GREENPERKS_RETAIL", "RENEWWORKS_REPAIR_REUSE", "LOOPCYCLE_RECYCLING"],
  }]);
  assert(commerce.identityGovernance.migration.localRuntimeDeploymentGrantPermissions.includes("profile.enterprise.search"));
  assert(commerce.runtimeIdentity.remoteModules.includes("profile"));
  assert.equal(require("../envs/kickoffLocal/platformServer/config/properties").profileRuntimeEnterpriseResolution.callers.$config, "replace");
});

test("runtime business resolution stays default-off outside the selected Local consumer and authority", () => {
  for (const [server, environment] of [["commerceStagedServer", "kickoffLocal"], ["wasteServer", "kickoffLocal"],
    ["commerceServer", "kickoffDockerLocal"], ["platformServer", "kickoffDockerLocal"]]) {
    const p = loadRuntime(server, environment);
    assert.notEqual(p.enterpriseResolution?.runtimeLookup?.enabled, true);
    assert.notEqual(p.profileRuntimeEnterpriseResolution?.enabled, true);
  }
});
