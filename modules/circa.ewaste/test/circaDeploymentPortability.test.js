/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDeploymentPortability @description Verifies the current baseline and explicit deployment boundaries; historical bytes are not current source. @owner circa.ewaste @layer test */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const manifest = require("../data/manifest.json");
const assignments = Object.values(require("../../kickoffCore/data/init-v001/runtime-assignments/records/nativeRuntimeAssignmentData"));
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const releases = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));

test("current sources form one v001 baseline with exact checksums and no retained predecessors", () => {
  assert.equal(manifest.retainedRoots, undefined);
  const files = releases.sourceRootFiles(path.resolve(__dirname, "../data"), "sample-v001");
  const localOnly = new Set(["circaLocalEnterpriseTestProgram",
    "circaGreenPerksFixedExpiryBudget", "circaGreenPerksFixedExpiryIssuance",
    "circaCarbonMock", "circaMaterialValueMock", "circaE07Budget", "circaE07Issuance",
    "circaRenewWorksRemainingFixedExpiryBudget", "circaRenewWorksRemainingFixedExpiryIssuance",
    "circaRenewWorksRemainingFixedExpiryPublicationPlan", "circaLoopCycleRemainingFixedExpiryBudget",
    "circaLoopCycleRemainingFixedExpiryIssuance", "circaLoopCycleRemainingFixedExpiryPublicationPlan"]);
  for (const [code, section] of Object.entries(manifest.sections)) {
    assert.equal(section.sourceRoot, "sample-v001", code);
    assert.equal(section.selectionPolicy, "EXPLICIT", code);
    assert.deepEqual(section.environmentScope, localOnly.has(code) ? ["LOCAL"] : ["ALL"], code);
    for (const [file, hash] of Object.entries(section.files)) assert.equal(files[file], hash, file);
  }
});

test("baseline CMS records carry their exact demo authoring scope", () => {
  for (const name of ["Component", "Group", "Page", "Renderer", "Route", "Slot", "Template", "Type"]) {
    const rows = require("../data/sample-v001/content/records/circaCms" + name + "Data");
    const expected = { enterpriseCode: "default", catalogCode: "circaContentCatalog" };
    if (["Page", "Route"].includes(name)) expected.siteCode = "circaSite";
    for (const row of Object.values(rows)) {
      assert.deepEqual(row.authoringScope, expected, row.code);
      const placements = name === "Page" ? row.cmsComponents : name === "Component" ? row.subComponents : undefined;
      for (const placement of placements || []) if (placement && typeof placement === "object")
        assert.deepEqual(placement.authoringScope, expected, row.code);
    }
  }
  for (const row of Object.values(require("../data/sample-v001/content/records/circaCmsSiteData"))) assert.equal(row.enterpriseCode, "default");
});

test("baseline Loyalty retains approved POINT transfers without importing test funding", () => {
  const program = Object.values(require("../data/sample-v001/loyalty/records/circaLoyaltyProgramData"))[0];
  assert.equal(program.code, "circa");
  assert.equal(program.transferEnabled, true);
  assert.deepEqual(program.transferRewardTypeCodes, ["points"]);
  assert.equal(program.testCreditRewardTypeCodes, undefined);
});

test("demo packs preserve destination and Local-only admission", t => {
  const original = global.CONFIG;
  t.after(() => { global.CONFIG = original; });
  const owner = { ...releases, configuration: () => ({ destinationEnforced: true }), error: (code, message) => Object.assign(new Error(message), { code }) };
  for (const environmentClass of ["LOCAL", "LOCAL_PRODUCTION_SIMULATION", "TEST", "STAGING", "PRODUCTION"]) {
    for (const section of Object.values(manifest.sections)) {
      let runtimeRole = section.destinationRole;
      global.CONFIG = { get: key => key === "environment" ? { class: environmentClass } : key === "runtimeRole" ? runtimeRole : undefined };
      if (section.environmentScope.includes("ALL") || section.environmentScope.includes(environmentClass)) assert.equal(owner.validateDestination(section), true);
      else assert.throws(() => owner.validateDestination(section), { code: "ERR_IMP_00004" });
      runtimeRole = "WRONG_OWNER";
      assert.throws(() => owner.validateDestination(section), { code: "ERR_IMP_00004" });
    }
  }
});

test("deployment bootstrap remains explicit while reviewed grants are owned by data", () => {
  const native = loadRuntime("commerceStagedServer", "kickoffLocal");
  const docker = loadRuntime("commerceStagedServer", "kickoffDockerLocal");
  assert.equal(native.identityGovernance.migration.runtimeDeploymentBootstrapEnabled, true);
  assert.equal(docker.identityGovernance.migration.runtimeDeploymentBootstrapEnabled, false);
  assert.deepEqual(native.profileTenantProvisioning.runtimeRemoteModuleExtensions, ["eWaste"]);
  assert.equal(native.profileTenantProvisioning.localRuntimeRemoteModuleExtensions, undefined);
  assert.equal(native.identityGovernance.migration.runtimeDeploymentGrantPermissions, undefined);
  const rows = assignments.filter(row => row.runtimeScope.projectCode === "nodics.kickoff" && row.runtimeScope.environmentCode === "kickoffLocal" && row.runtimeScope.serverCode === "commerceStagedServer");
  assert.equal(rows.length, 1);
  assert.equal(rows[0].runtimeScope.instanceCode, native.runtimeIdentity.instanceCode);
  assert.equal(rows[0].principalCode, "apiAdmin");
  assert(rows[0].runtimeScope.permissions.includes("waste.asset.listing.intent.read"));
  assert(rows[0].runtimeScope.permissions.includes("commerce.store.read"));
  assert.equal(rows[0].runtimeScope.permissions.includes("waste.asset.sale.transfer"), false);
});
