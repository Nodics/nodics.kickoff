/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDeploymentPortability @description Verifies the current baseline and explicit deployment boundaries; historical bytes are not current source. @owner circa.ewaste @layer test */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const manifest = require("../data/manifest.json");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const releases = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));

test("current sources form one v001 baseline with exact checksums and no retained predecessors", () => {
  assert.equal(manifest.retainedRoots, undefined);
  const files = releases.sourceRootFiles(path.resolve(__dirname, "../data"), "sample-v001");
  const network = new Set(["network-enterprises", "network-addresses", "network-locations", "network-points"]);
  const dockerNetwork = new Set([...network].map(code => code + "-docker"));
  const localOnly = new Set([
    "circaLocalEnterpriseTestProgram", "waste-opening-impact", "waste-opening-assets",
    "circaGreenPerksFixedExpiryBudget", "circaGreenPerksFixedExpiryIssuance",
    "circaGreenPerksL08Budget", "circaGreenPerksL08Issuance",
    "circaRenewWorksL08Budget", "circaRenewWorksL08Issuance",
    "circaLoopCycleL08Budget", "circaLoopCycleL08Issuance",
    "circaCarbonMock", "circaMaterialValueMock", "circaE07Budget", "circaE07Issuance",
    "circaRenewWorksRemainingFixedExpiryBudget", "circaRenewWorksRemainingFixedExpiryIssuance",
    "circaRenewWorksRemainingFixedExpiryPublicationPlan", "circaLoopCycleRemainingFixedExpiryBudget",
    "circaLoopCycleRemainingFixedExpiryIssuance", "circaLoopCycleRemainingFixedExpiryPublicationPlan"]);
  for (const [code, section] of Object.entries(manifest.sections)) {
    assert.equal(section.sourceRoot, "sample-v001", code);
    assert.equal(section.selectionPolicy, "EXPLICIT", code);
    const expectedScope = dockerNetwork.has(code) ? ["LOCAL_PRODUCTION_SIMULATION"]
      : network.has(code) ? ["LOCAL", "DEVELOPMENT", "TEST"]
      : localOnly.has(code) ? ["LOCAL"] : ["ALL"];
    assert.deepEqual(section.environmentScope, expectedScope, code);
    for (const [file, hash] of Object.entries(section.files)) assert.equal(files[file], hash, file);
  }
  const docker = loadRuntime("platformServer", "kickoffDockerLocal");
  const selected = new Set(docker.backofficeApplicationInitialization.profiles.circa.dataPackages.map(step => step.code));
  for (const code of network) {
    assert.deepEqual(manifest.sections[code + "-docker"].files, manifest.sections[code].files);
    assert(selected.has("circa.ewaste:" + code + "-docker"));
    assert(!selected.has("circa.ewaste:" + code));
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

test("Local-only demo packs refuse other environments and publishable data refuses Online", t => {
  const original = global.CONFIG;
  t.after(() => { global.CONFIG = original; });
  const owner = { ...releases, configuration: () => ({}), error: (code, message) => Object.assign(new Error(message), { code }) };
  for (const section of Object.values(manifest.sections)) {
    const reject = (environmentClass, publication, reason) => {
      global.CONFIG = { get: key => key === "environment" ? { class: environmentClass } :
        key === "runtimeRole" ? { publication } : undefined };
      assert.throws(() => owner.validateDestination(section), err => err.code === "ERR_IMP_00004" && reason.test(err.message));
    };
    if (section.environmentScope.includes("LOCAL") && !section.environmentScope.includes("ALL"))
      for (const other of ["LOCAL_PRODUCTION_SIMULATION", "TEST", "STAGING", "PRODUCTION"])
        if (!section.environmentScope.includes(other)) reject(other, "STAGED", /not permitted for environment/);
    if (section.lifecycle === "PUBLISHABLE")
      reject("LOCAL", "ONLINE", /requires a Staged destination/);
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
  assert.equal(native.runtimeIdentity.instanceCode, "kickoff-local-commerce-staged-1");

});
