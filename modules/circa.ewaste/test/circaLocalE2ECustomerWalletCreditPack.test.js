/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/**
 * @module circa.ewaste/test/circaLocalE2ECustomerWalletCreditPack
 * @description Verifies the immutable kickoffLocal E2E customer-wallet funding successor and its exact deployment admission.
 * @owner circa.ewaste
 * @layer test
 */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const manifest = require("../data/manifest.json");
const payload = require("../data/sample-v001/operations/loyalty-e2e-credit/records/loyaltyCredits.json");
const localPlatform = require("../../../envs/kickoffLocal/platformServer/config/properties");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const releases = require(path.join(
  frameworkRoot,
  "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService",
));
const loyaltyDefaults = require(path.join(
  frameworkRoot,
  "nodics.loyalty/modules/loyaltyWallet/config/properties",
));
const sourceRoot = path.resolve(__dirname, "../data");
const sectionCode = "circaLocalE2ECustomerWalletCredit";

test("successor is an immutable explicit Loyalty sample release with exact source bytes", () => {
  const section = manifest.sections[sectionCode];
  assert.equal(section.dataType, "sample");
  assert.equal(section.sourceRoot, "sample-v001");
  assert.equal(section.version, "0.0.1");
  assert.equal(section.selectionPolicy, "EXPLICIT");
  assert.equal(section.lifecycle, "OPERATIONAL_VERSIONED");
  assert.equal(section.destinationRole, "LOYALTY");
  assert.deepEqual(section.environmentScope, ["ALL"]);
  assert.equal(section.versioningPolicy, "IMMUTABLE");
  assert.equal(section.installer, "LOYALTY_SAMPLE_CREDITS");
  assert.deepEqual(Object.keys(section.files), [
    "sample-v001/operations/loyalty-e2e-credit/records/loyaltyCredits.json",
  ]);
  const sourceFiles = releases.sourceRootFiles(sourceRoot, "sample-v001");
  for (const [file, checksum] of Object.entries(section.files)) {
    assert.equal(sourceFiles[file], checksum);
  }
});

test("successor guards the observed customer POINTS balance without replaying history", () => {
  assert.equal(payload.contractVersion, 1);
  assert.equal(payload.credits.length, 1);
  const instruction = payload.credits[0];
  assert.deepEqual(instruction, {
    code: "CIRCA_KICKOFF_LOCAL_E2E_CUSTOMER_POINTS_20261020",
    customerCode: "circa-customer",
    walletCode: "WALLET_ED16C8FCF19E1FE586E3DA5D",
    programCode: "circa",
    rewardTypeCode: "points",
    amount: "7645",
    approvalReference: "CIRCA_KICKOFF_LOCAL_E2E_FUNDING_20261020",
    expectedBalance: {
      available: "0.00",
      reserved: "0.00",
      earned: "7763.00",
      spent: "7763.00",
      expired: "0.00",
      reversed: "82.00",
      revision: 86,
    },
  });
  const historical = require("../data/sample-v001/operations/loyalty-credit/records/loyaltyCredits.json");
  assert.notEqual(instruction.code, historical.credits[0].code);
  assert.notEqual(instruction.approvalReference, historical.credits[0].approvalReference);
});

test("kickoffLocal admits both exact sources and selects only the fresh-demo credit", () => {
  const runtime = loadRuntime("loyaltyServer", "kickoffLocal");
  const previous = global.CONFIG;
  try {
    global.CONFIG = { get: key => (key === "data" ? runtime.data : undefined) };
    const release = releases.inspectManifest(
      { name: "circa.ewaste", index: 1001 },
      "sample",
      path.join(sourceRoot, "manifest.json"),
      manifest.sections[sectionCode],
      sectionCode,
      true,
    );
    assert.equal(release.checksum, "639d05972d3ae328f5b0a903d7ed51b953603eb8d9fbde1ecb5ec73071bc0b90");
    assert.deepEqual(runtime.loyalty.sampleCredits.approvedSources[1], {
      environmentCode: "kickoffLocal",
      enterpriseCode: "GREENPERKS_ONLINE",
      releaseCode: release.releaseCode,
      version: release.version,
      checksum: release.checksum,
      instructionCode: payload.credits[0].code,
      approvalReference: payload.credits[0].approvalReference,
    });
  } finally {
    global.CONFIG = previous;
  }

  const packages =
    localPlatform.backofficeApplicationInitialization.runtimeRoleProfiles.PLATFORM.profiles.circa.preparation.prerequisites.value;
  assert.equal(packages.filter(row => row.code === `circa.ewaste:${sectionCode}`).length, 0);
  assert.equal(packages.filter(row => row.code === "circa.ewaste:circaLocalDemoCredit").length, 1);
  assert.deepEqual(loyaltyDefaults.loyalty.sampleCredits, {
    enabled: false,
    maximumInstructions: 100,
    allowedEnvironments: [],
    approvedSources: [],
  });
});
