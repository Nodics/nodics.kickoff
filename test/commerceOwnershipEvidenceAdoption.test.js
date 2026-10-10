/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/commerceOwnershipEvidenceAdoption
 * @description Verifies Local exact owner selections against resolved deployment/configuration sources, not installed qualification.
 * @owner nodics.kickoff @layer test
 */
const test = require("node:test"), assert = require("node:assert/strict"), path = require("node:path");
const { loadRuntime, frameworkRoot, activeModuleNames } = require("./helpers/configuration");
const bootstrap = require(path.join(frameworkRoot, "nodics.platform/modules/profile/src/service/identity/defaultMandatoryIdentityBootstrapService"));
const startup = require(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/src/service/project/defaultProjectRuntimeStartService"));
const selected = {
  commerce: loadRuntime("commerceServer", "kickoffLocal"),
  waste: loadRuntime("wasteServer", "kickoffLocal"),
};

test("Local Commerce selects reviewed sale admission separately from financial acceptance", () => {
  const p = selected.commerce, policy = p.digitalCore.ownershipEvidence;
  assert.equal(p.apiExposure.categories.commerceOwnershipEvidence.enabled, true);
  assert.equal(policy.enabled, true); assert.equal(policy.runtimeRole, p.runtimeRole.code);
  assert.deepEqual(p.digitalCore.digitalOwnership, { enabled: true, qualified: true,
    owner: { moduleName: "eWaste", connectionName: "waste", targetAuthority: "WASTE", apiPrefix: "/internal/digital-sales" } });
  assert.equal(selected.waste.eWaste.marketplace.digitalOwnership.enabled, true);
  assert.equal(selected.waste.eWaste.marketplace.digitalOwnership.qualified, true);
  assert.equal(policy.callers.length, 2);
  const projectCode = startup.resolveProjectCode(path.resolve(__dirname, ".."));
  for (const [serverCode, runtime, kinds] of [
    ["wasteServer", selected.waste, ["LISTING", "BINDING", "PURCHASE", "REFUND"]],
    ["commerceServer", p, ["ADMIT_BINDING"]],
  ]) {
    const grant = policy.callers.find(item => item.serverCode === serverCode);
    assert.deepEqual(grant, {
      tenant: runtime.defaultTenant, principalEnterpriseCode: runtime.defaultEnterprise, enterpriseCode: "GREENPERKS_ONLINE",
      serviceId: "apiAdmin", projectCode, environmentCode: "kickoffLocal", serverCode,
      instanceCode: runtime.runtimeIdentity.instanceCode, assignmentCode: bootstrap.localRuntimeGrantCode("kickoffLocal", serverCode), kinds,
    });
  }
  assert.deepEqual(policy.bindingAdmission, { enabled: true, moduleName: "eWaste", connectionName: "waste",
    targetAuthority: { server: "wasteServer", runtimeRole: selected.waste.runtimeRole }, apiName: "/internal/digital-listings/plan" });
});

test("Local deployment grants retain original scope while adding only required remote owner permissions/modules", () => {
  const inherited = require("../envs/kickoffLocal/config/properties").identityGovernance.migration.localRuntimeDeploymentGrantPermissions.value;
  const commercePermissions = selected.commerce.identityGovernance.migration.localRuntimeDeploymentGrantPermissions;
  const wastePermissions = selected.waste.identityGovernance.migration.localRuntimeDeploymentGrantPermissions;
  assert.deepEqual(new Set(commercePermissions), new Set([...inherited,
    "loyalty.rewards.reserve", "loyalty.rewards.capture", "loyalty.rewards.release", "loyalty.rewards.reverse", "waste.asset.marketplace.project", "waste.asset.sale.transfer", "commerce.pricing.merchant.evidence"]));
  // envs/kickoffLocal/wasteServer explicitly selects the bounded Profile customer
  // evidence permission; Platform admits only this Waste deployment/business.
  assert.deepEqual(new Set(wastePermissions), new Set([...inherited, "profile.externalIdentity.prepare", "commerce.digital.own.read", "profile.customer.reference.read", "loyalty.rewards.earn", "loyalty.rewards.reverse"]));
  for (const permissions of [commercePermissions, wastePermissions]) assert.equal(new Set(permissions).size, permissions.length);
  assert.deepEqual(selected.commerce.runtimeIdentity.remoteModules,
    ["profile", "backoffice", "loyaltyCore", "loyaltyApi", "wasteCore", "media", "eWaste"]);
  assert.deepEqual(new Set(selected.waste.runtimeIdentity.remoteModules),
    new Set(["profile", "backoffice", "media", "cms", "editorial", "locationCore", "loyaltyCore", "loyaltyApi", "commerceCore", "engagementCore", "workflow", "digitalCore", "product"]));
  assert.equal(selected.waste.runtimeIdentity.remoteModules.length, new Set(selected.waste.runtimeIdentity.remoteModules).size);
  assert.equal(activeModuleNames(selected.commerce).includes("eWaste"), false, "Remote declaration must not activate Waste on Commerce");
  assert.equal(activeModuleNames(selected.waste).includes("digitalCore"), false, "Remote declaration must not activate Commerce on Waste");
  for (const server of ["commerceServer", "wasteServer"]) {
    const source = require("../envs/kickoffLocal/" + server + "/config/properties");
    assert.equal(source.identityGovernance.migration.localRuntimeDeploymentGrantPermissions.$config, "replace");
  }
  assert.equal(require("../envs/kickoffLocal/commerceServer/config/properties").digitalCore.ownershipEvidence.callers.$config, "replace");
});

test("evidence policy and permissions remain confined to native Local owner deployments", () => {
  for (const [server, environment] of [
    ["commerceStagedServer", "kickoffLocal"], ["platformServer", "kickoffLocal"], ["loyaltyServer", "kickoffLocal"],
    ["commerceServer", "kickoffDockerLocal"], ["wasteServer", "kickoffDockerLocal"],
  ]) {
    const p = loadRuntime(server, environment);
    assert.notEqual(p.apiExposure.categories.commerceOwnershipEvidence?.enabled, true, server + "/" + environment);
    assert.notEqual(p.digitalCore?.ownershipEvidence?.enabled, true, server + "/" + environment);
    assert.notEqual(p.digitalCore?.digitalOwnership?.enabled, true, server + "/" + environment);
    assert.notEqual(p.eWaste?.marketplace?.digitalOwnership?.enabled, true, server + "/" + environment);
    const permissions = p.identityGovernance.migration.localRuntimeDeploymentGrantPermissions;
    assert.equal(permissions.includes("commerce.digital.own.read"), false);
    assert.equal(permissions.includes("waste.asset.marketplace.project"), false);
    assert.equal(permissions.includes("profile.customer.reference.read"), false);
    for (const permission of ["waste.asset.sale.transfer", "loyalty.rewards.earn", "loyalty.rewards.reverse"])
      assert.equal(permissions.includes(permission), false, server + "/" + environment + ": " + permission);
  }
});

test("native asset sale grants preserve signed deployment identities and are not qualification flags", () => {
  for (const [server, runtime, additions] of [
    ["commerceServer", selected.commerce, ["waste.asset.sale.transfer"]],
    ["wasteServer", selected.waste, ["loyalty.rewards.earn", "loyalty.rewards.reverse"]],
  ]) {
    const identity = require("../envs/kickoffLocal/" + server + "/package.json").nodics.runtimeIdentity;
    assert.deepEqual(runtime.runtimeIdentity, identity);
    for (const permission of additions)
      assert.equal(runtime.identityGovernance.migration.localRuntimeDeploymentGrantPermissions.filter(value => value === permission).length, 1);
  }
  assert.equal(selected.commerce.identityGovernance.migration.localRuntimeDeploymentGrantPermissions.includes("loyalty.rewards.earn"), false);
  assert.equal(selected.waste.identityGovernance.migration.localRuntimeDeploymentGrantPermissions.includes("waste.asset.sale.transfer"), false);
  assert.equal(selected.commerce.digitalCore.digitalOwnership.qualified, true);
  assert.equal(selected.waste.eWaste.marketplace.digitalOwnership.qualified, true);
});
