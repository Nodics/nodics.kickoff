/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaFixedExpiryOperationalInstructions @description Checks explicit reviewed new-offer instructions through existing Promotion and nImport owners; no live acceptance claim. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const moduleRoot = path.resolve(__dirname, "..");
const framework = path.resolve(moduleRoot, "../../../nodics.ai");
const manifest = require("../data/manifest.json");
const reviewed = require("./fixtures/circaFixedExpiryOperationalSelection.json");
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const section = phase => manifest.sections["circaGreenPerksFixedExpiry" + phase];
const payload = phase => JSON.parse(fs.readFileSync(path.join(moduleRoot, "data", Object.keys(section(phase).files)[0]), "utf8"));
const checksum = phase => sha(Object.entries(section(phase).files).sort().map(([name, hash]) => name + ":" + hash).join("|"));

test("new instructions preserve all reviewed identities, fingerprints, budgets and existing baseline selections", () => {
  const budget = payload("Budget"), issuance = payload("Issuance");
  const source = Object.values(require("../data/sample-v001/commerce/records/circaPromotionData"));
  assert.equal(reviewed.records.length, 35);
  assert.equal(new Set(reviewed.records.map(row => row.promotionCode)).size, 35);
  assert.equal(budget.campaigns.length, 35);
  assert.deepEqual(budget.couponBatches, []);
  assert.equal(reviewed.records.filter(row => row.budgetLimit === "0").length, 29);
  assert.equal(reviewed.records.reduce((total, row) => total + BigInt(row.budgetLimit), 0n), 14500n);
  for (const row of reviewed.records) {
    const original = source.find(item => item.code + "_FIXED20261108" === row.promotionCode);
    assert(original, row.promotionCode);
    assert.equal(row.budgetLimit, original.budget.limit);
    assert.equal(row.versionId, 3);
    assert.equal(row.revision, 3);
    assert.equal(original.couponOffer.expiry.at, reviewed.expiry);
    const instruction = budget.campaigns.find(item => item.promotionCode === row.promotionCode);
    assert.deepEqual(instruction, { promotionCode: row.promotionCode, storeCode: reviewed.storeCode,
      rootCode: row.promotionCode, policyFingerprint: row.policyFingerprint, commandReference: "opening-" + row.promotionCode });
    assert.match(row.policyFingerprint, /^[a-f0-9]{64}$/);
    assert.deepEqual(issuance.campaigns.find(item => item.promotionCode === row.promotionCode), {
      ...instruction, admissionContribution: { moduleName: "circa.ewaste",
        releaseCode: "circa.ewaste:circaGreenPerksFixedExpiryBudget", version: "0.0.1", checksum: checksum("Budget") }
    });
    assert.deepEqual(issuance.couponBatches.find(item => item.promotionCode === row.promotionCode), {
      promotionCode: row.promotionCode, batchCode: row.batchCode, quantity: 100, commandReference: "issue-" + row.promotionCode
    });
  }
  assert.equal(issuance.couponBatches.length, 35);
  assert.equal(new Set(issuance.couponBatches.map(row => row.batchCode)).size, 35);
  assert.equal(new Set(issuance.couponBatches.map(row => row.commandReference)).size, 35);
  for (const phase of ["Budget", "Issuance"]) {
    const selected = section(phase);
    assert.equal(selected.installer, "PROMOTION_CAMPAIGN_ISSUANCE");
    assert.equal(selected.selectionPolicy, "EXPLICIT");
    assert.equal(selected.destinationRole, "COMMERCE");
    assert.equal(selected.lifecycle, "OPERATIONAL_VERSIONED");
    assert.deepEqual(selected.environmentScope, ["LOCAL"]);
    for (const [file, hash] of Object.entries(selected.files)) assert.equal(sha(fs.readFileSync(path.join(moduleRoot, "data", file))), hash);
    const original = manifest.sections["circaGreenPerks" + phase];
    const originalPayload = JSON.parse(fs.readFileSync(path.join(moduleRoot, "data", Object.keys(original.files)[0]), "utf8"));
    assert(originalPayload.campaigns.every(row => !row.promotionCode.endsWith("_FIXED20261108")));
    for (const forbidden of ["spent", "budget", "sellerAuthorizations", "protectedToken", "tokenHash", "authData", "tenant", "enterpriseCode"])
      assert(!JSON.stringify(payload(phase)).includes('"' + forbidden + '"'), forbidden);
  }
});

test("actual nImport byte reader and Promotion parser accept only the exact new contribution", async t => {
  const prior = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, NODICS: global.NODICS, CLASSES: global.CLASSES };
  t.after(() => Object.assign(global, prior));
  const ports = require(path.join(framework, "nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution"))({
    modules: { "circa.ewaste": { name: "circa.ewaste", path: moduleRoot } }, runtimeRole: "COMMERCE", environment: "kickoffLocal" });
  global.CLASSES = { NodicsError: class extends Error { constructor(code, message) { super(message || code); this.code = code; } } };
  const get = CONFIG.get;
  CONFIG.get = key => key === "promotion" ? { budgetAdmission: { maximumCampaignsPerContribution: 50 } } : get(key);
  CONFIG.get("data").dataReleases.installers.PROMOTION_CAMPAIGN_ISSUANCE = "DefaultPromotionSetupContributionService";
  SERVICE.DefaultDataReleaseService = ports.service;
  const setup = require(path.join(framework, "nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionSetupContributionService"));
  const discovered = ports.service.discoverReleases("sample");
  for (const phase of ["Budget", "Issuance"]) {
    const contribution = discovered.find(row => row.sectionCode === "circaGreenPerksFixedExpiry" + phase);
    assert(contribution && !contribution.invalidManifest);
    assert.deepEqual(await setup.payload({ contribution }), payload(phase));
    await assert.rejects(() => setup.payload({ contribution: { ...contribution, checksum: "0".repeat(64) } }), /invalid|changed/);
  }
  assert.equal(ports.imports.length, 0);
  assert.equal(ports.installations.length, 0);
});
