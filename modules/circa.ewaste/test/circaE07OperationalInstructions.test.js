/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaE07OperationalInstructions @description Checks two reviewed E07 source selections against canonical capture and immutable contribution readers; never calls runtime APIs. @layer test @owner circa.ewaste */
const test = require("node:test"), assert = require("node:assert/strict");
const fs = require("node:fs"), path = require("node:path"), crypto = require("node:crypto");
const root = path.resolve(__dirname, ".."), framework = path.resolve(root, "../../../nodics.ai");
const owner = path.join(framework, "nodics.commerce/modules/baseCommerce/modules/promotion");
const publication = require(path.join(owner, "src/service/defaultPromotionPublicationService"));
const draft = require(path.join(owner, "src/service/defaultPromotionDraftService"));
const manifest = require("../data/manifest.json");
const selected = require("./fixtures/circaE07OperationalSelection.json");
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const section = phase => manifest.sections["circaE07" + phase];
const payload = s => JSON.parse(fs.readFileSync(path.join(root, "data", Object.keys(s.files)[0]), "utf8"));
const checksum = s => sha(Object.entries(s.files).sort().map(([file, hash]) => file + ":" + hash).join("|"));

test.beforeEach(t => {
  const saved = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, CLASSES: global.CLASSES, NODICS: global.NODICS };
  t.after(() => Object.assign(global, saved));
  global.CONFIG = { get: () => require(path.join(owner, "config/properties")).promotion };
  global.SERVICE = { DefaultCouponOfferService: require(path.join(owner, "src/service/defaultCouponOfferService")) };
  global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); this.code = code; } } };
});

test("two new E07 offers reproduce accepted publication hashes with exact zero-budget terms", () => {
  assert.equal(selected.importable, false);
  assert.equal(selected.issuerEnterpriseCode, "GREENPERKS_RETAIL");
  assert.equal(selected.sellerEnterpriseCode, "GREENPERKS_ONLINE");
  assert.deepEqual(selected.records.map(r => r.productCode), ["CIRCA_E07_CERTIFICATES_20261025", "CIRCA_E07_BOTH_20261025"]);
  for (const row of selected.records) {
    const type = row.productCode.includes("_CERTIFICATES_") ? "CERTIFICATES" : "BOTH";
    assert.equal(row.promotionCode, row.productCode + "_PROMO");
    assert.equal(row.priceRowCode, row.productCode + "_POINTS");
    assert.equal(row.unitAmount, type === "CERTIFICATES" ? "0" : "1");
    assert.equal(row.batchCode, row.productCode + "_BATCH");
    assert.equal(row.quantity, 100);
    assert.deepEqual(row.draft.budget, { limit: "0" });
    assert.equal(row.draft.couponOffer.requirements.type, type);
    assert.equal(row.draft.couponOffer.requirements.priceRef, type === "BOTH" ? row.priceRowCode : undefined);
    assert.deepEqual(row.draft.couponOffer.requirements.certificates, {
      quantity: 1, categoryCode: type === "CERTIFICATES" ? "TABLET" : "CABLE_CHARGER", milestoneCode: "CUSTOMER_HELD"
    });
    assert.deepEqual(row.draft.actions.items, [{ sku: "GP_BOTTLED_WATER", quantity: 1, unit: "EACH" }]);
    assert.equal(row.draft.actions.benefitType, "ITEM");
    assert.deepEqual(row.draft.couponOffer.supply, { mode: "LIMITED", quantity: 100 });
    assert.equal(row.draft.couponOffer.ownerLimit, 1);
    assert.deepEqual(row.draft.couponOffer.expiry, { mode: "FIXED", at: "2026-11-08T19:59:59.999Z" });
    const scope = { tenant: selected.tenant, enterpriseCode: selected.issuerEnterpriseCode };
    const ref = { moduleName: "profile", schemaName: "enterprise", code: scope.enterpriseCode };
    const policy = publication.capturePolicy("promotion", { ...draft.model(row.draft, true), ...scope,
      enterpriseRef: ref, issuerEnterpriseRef: ref, versionId: 3, revision: 3, status: "ACTIVE", active: true }, scope);
    assert.equal(publication.fingerprint(policy), row.policyFingerprint);
    assert.equal(publication.fingerprint({ ...scope, rootType: "promotion", rootCode: row.promotionCode,
      records: [{ schema: "promotion", policy }] }), row.sourceVersion);
    assert.notEqual(publication.fingerprint({ ...policy, revision: 4 }), row.policyFingerprint);
    assert.notEqual(publication.fingerprint({ ...policy, budget: { limit: "1" } }), row.policyFingerprint);
  }
});

test("issuance references the exact new budget checksum and never selects prior campaigns", () => {
  const budget = payload(section("Budget")), issuance = payload(section("Issuance"));
  assert.deepEqual(budget.couponBatches, []);
  const expected = selected.records.map(row => ({ promotionCode: row.promotionCode, storeCode: selected.storeCode,
    rootCode: row.promotionCode, policyFingerprint: row.policyFingerprint, commandReference: "opening-" + row.promotionCode }));
  assert.deepEqual(budget.campaigns, expected);
  assert.deepEqual(issuance.campaigns, expected.map(row => ({ ...row, admissionContribution: {
    moduleName: "circa.ewaste", releaseCode: "circa.ewaste:circaE07Budget", version: "0.0.1", checksum: checksum(section("Budget"))
  } })));
  assert.deepEqual(issuance.couponBatches, selected.records.map(row => ({ promotionCode: row.promotionCode,
    batchCode: row.batchCode, quantity: 100, commandReference: "issue-" + row.promotionCode })));
  for (const [name, s] of Object.entries(manifest.sections)) {
    if (name.startsWith("circaE07") || s.installer !== "PROMOTION_CAMPAIGN_ISSUANCE") continue;
    const prior = payload(s);
    assert(!prior.campaigns.some(row => expected.some(newRow => newRow.promotionCode === row.promotionCode)));
  }
  for (const phase of ["Budget", "Issuance"]) {
    const s = section(phase);
    assert.equal(s.sourceRoot, "sample-v001"); assert.equal(s.version, "0.0.1");
    assert.equal(s.selectionPolicy, "EXPLICIT"); assert.deepEqual(s.environmentScope, ["LOCAL"]);
    assert.equal(s.installer, "PROMOTION_CAMPAIGN_ISSUANCE"); assert.equal(s.destinationRole, "COMMERCE");
    assert.equal(s.lifecycle, "OPERATIONAL_VERSIONED"); assert.equal(s.publicationPolicy, "NONE");
    for (const [file, hash] of Object.entries(s.files)) assert.equal(sha(fs.readFileSync(path.join(root, "data", file))), hash);
  }
});

test("actual nImport reader and Promotion parser verify new bytes without imports or runtime calls", async () => {
  const ports = require(path.join(framework, "nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution"))({
    modules: { "circa.ewaste": { name: "circa.ewaste", path: root } }, runtimeRole: "COMMERCE", environment: "kickoffLocal" });
  const get = CONFIG.get;
  CONFIG.get = key => key === "promotion" ? require(path.join(owner, "config/properties")).promotion : get(key);
  CONFIG.get("data").dataReleases.installers.PROMOTION_CAMPAIGN_ISSUANCE = "DefaultPromotionSetupContributionService";
  SERVICE.DefaultDataReleaseService = ports.service;
  const setup = require(path.join(owner, "src/service/defaultPromotionSetupContributionService"));
  const releases = ports.service.discoverReleases("sample");
  for (const phase of ["Budget", "Issuance"]) {
    const contribution = releases.find(row => row.sectionCode === "circaE07" + phase);
    assert(contribution && !contribution.invalidManifest);
    assert.equal(contribution.checksum, checksum(section(phase)));
    assert.deepEqual(await setup.payload({ contribution }), payload(section(phase)));
    await assert.rejects(setup.payload({ contribution: { ...contribution, checksum: "0".repeat(64) } }), error => error.code === "ERR_IMP_00003");
  }
  assert.equal(ports.imports.length, 0); assert.equal(ports.installations.length, 0);
});
