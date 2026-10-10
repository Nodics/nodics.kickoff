/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaLocalDemoCreditPack @description Verifies the separate reviewed credit contribution without treating source selection as installed financial acceptance. @owner circa.ewaste @layer test */
const test = require("node:test"), assert = require("node:assert/strict"), path = require("node:path"), crypto = require("node:crypto");
const manifest = require("../data/manifest.json");
const payload = require("../data/sample-v001/operations/loyalty-credit/records/loyaltyCredits.json");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const releases = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));
const sourceRoot = path.resolve(__dirname, "../data");

test("credit is separate explicit Local sample data, not a rewritten wallet release", () => {
  const section = manifest.sections.circaLocalDemoCredit;
  assert.equal(section.dataType, "sample"); assert.equal(section.sourceRoot, "sample-v001"); assert.equal(section.version, "0.0.1");
  assert.equal(section.selectionPolicy, "EXPLICIT"); assert.equal(section.lifecycle, "OPERATIONAL_VERSIONED");
  assert.equal(section.destinationRole, "LOYALTY"); assert.deepEqual(section.environmentScope, ["LOCAL"]);
  assert.equal(section.installer, "LOYALTY_SAMPLE_CREDITS");
  assert.deepEqual(Object.keys(section.files), ["sample-v001/operations/loyalty-credit/records/loyaltyCredits.json"]);
  const actual = releases.sourceRootFiles(sourceRoot, "sample-v001");
  for (const [file, hash] of Object.entries(section.files)) assert.equal(actual[file], hash);
  const originalSections = ["profile", "location", "waste", "waste-policy", "loyalty", "content", "commerce",
    "operations", "circaCommerceStaffAssignments", "circaMerchantOutletAccess", "customer-workspace",
    "sunmarke-profile", "sunmarke-location", "sunmarke-waste", "circaPublicationPlan", "store",
    "circaGreenPerksBudget", "circaGreenPerksIssuance", "circaGreenPerksPublicationPlan",
    "circaRenewWorksBudget", "circaRenewWorksIssuance", "circaRenewWorksPublicationPlan",
    "circaLoopCycleBudget", "circaLoopCycleIssuance", "circaLoopCyclePublicationPlan",
    "circaCataloguePublicationPlan", "circaCatalogueCurrentPublicationPlan", "circaAssetClassification",
    "circaAssetClassificationPublicationPlan", "circaDigitalOwnershipPolicies"];
  const prior = Object.fromEntries(originalSections.map(code => [code, manifest.sections[code]]));
  assert.equal(crypto.createHash("sha256").update(JSON.stringify(prior)).digest("hex"), "ae2c254d458cfa2342fee95234cd5a60a4ab6e73cbc5545292cbd5a50dd71280");
});

test("instruction preserves exact original buyer counters and excludes carbon or replenishment", () => {
  assert.equal(payload.contractVersion, 1); assert.equal(payload.credits.length, 1);
  const row = payload.credits[0];
  const wallet = Object.values(require("../data/sample-v001/loyalty/records/circaLoyaltyWalletData")).find(record => record.code === row.walletCode);
  const balance = Object.values(require("../data/sample-v001/loyalty/records/circaLoyaltyWalletRewardBalanceData")).find(record => record.walletCode === row.walletCode && record.rewardTypeCode === row.rewardTypeCode);
  assert.equal(wallet.ownerType, "CUSTOMER"); assert.equal(wallet.ownerCode, row.customerCode);
  assert.equal(row.customerCode, "circa-customer"); assert.equal(row.programCode, "circa"); assert.equal(row.rewardTypeCode, "points");
  assert.equal(row.amount, "7645");
  for (const key of Object.keys(row.expectedBalance)) assert.equal(row.expectedBalance[key], balance[key]);
  assert.equal(Number(row.expectedBalance.available) + Number(row.amount), 7763);
  assert.deepEqual(Object.keys(payload).sort(), ["contractVersion", "credits"]);
});

test("only native Loyalty selects the exact qualified source and atomic provider", () => {
  const native = loadRuntime("loyaltyServer", "kickoffLocal");
  assert.equal(native.loyalty.transactions.enabled, true);
  assert.equal(native.loyalty.sampleCredits.enabled, true);
  assert.deepEqual(native.loyalty.sampleCredits.allowedEnvironments, ["kickoffLocal"]);
  assert.equal(native.databaseTransactions.enabled, true); assert.equal(native.databaseTransactions.failClosed, true);
  assert.equal(native.data.dataReleases.installers.LOYALTY_SAMPLE_CREDITS, "DefaultLoyaltySampleCreditContributionService");
  const previous = global.CONFIG;
  try {
    global.CONFIG = { get: key => key === "data" ? native.data : undefined };
    const release = releases.inspectManifest({ name: "circa.ewaste", index: 1001 }, "sample", path.join(sourceRoot, "manifest.json"), manifest.sections.circaLocalDemoCredit, "circaLocalDemoCredit", true);
    assert.deepEqual(native.loyalty.sampleCredits.approvedSources, [{
      environmentCode: "kickoffLocal", enterpriseCode: "GREENPERKS_ONLINE", releaseCode: release.releaseCode,
      version: release.version, checksum: release.checksum, instructionCode: payload.credits[0].code,
      approvalReference: payload.credits[0].approvalReference,
    }]);
  } finally { global.CONFIG = previous; }
  for (const [server, environment] of [["loyaltyServer", "kickoffDockerLocal"], ["commerceServer", "kickoffLocal"], ["wasteServer", "kickoffLocal"], ["platformServer", "kickoffLocal"]]) {
    const runtime = loadRuntime(server, environment);
    assert.notEqual(runtime.loyalty?.sampleCredits?.enabled, true, server + "/" + environment);
    assert.notEqual(runtime.loyalty?.transactions?.enabled, true, server + "/" + environment);
  }
});
