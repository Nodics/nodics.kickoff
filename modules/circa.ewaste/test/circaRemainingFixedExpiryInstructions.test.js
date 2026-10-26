/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaRemainingFixedExpiryInstructions @description Verifies three approved replacement selections and exact owner pins with isolated ports, never installed approval or financial authority. @layer test @owner circa.ewaste */
const test = require("node:test"), assert = require("node:assert/strict");
const fs = require("node:fs"), path = require("node:path"), crypto = require("node:crypto");
const root = path.resolve(__dirname, ".."), framework = path.resolve(root, "../../../nodics.ai");
const owner = path.join(framework, "nodics.commerce/modules/baseCommerce/modules/promotion");
const publication = require(path.join(owner, "src/service/defaultPromotionPublicationService"));
const draft = require(path.join(owner, "src/service/defaultPromotionDraftService"));
const manifest = require("../data/manifest.json");
const selected = require("./fixtures/circaRemainingFixedExpiryOperationalSelection.json");
const source = Object.values(require("../data/sample-v001/commerce/records/circaPromotionData"));
const prior35 = require("./fixtures/circaFixedExpiryOperationalSelection.json");
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const groups = [["RenewWorks", "RENEWWORKS_REPAIR_REUSE", 2], ["LoopCycle", "LOOPCYCLE_RECYCLING", 1]];
const section = (title, phase) => manifest.sections["circa" + title + "RemainingFixedExpiry" + phase];
const payload = s => JSON.parse(fs.readFileSync(path.join(root, "data", Object.keys(s.files)[0]), "utf8"));
const checksum = s => sha(Object.entries(s.files).sort().map(([file, hash]) => file + ":" + hash).join("|"));

test.beforeEach(t => {
  const saved = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, CLASSES: global.CLASSES };
  t.after(() => Object.assign(global, saved));
  global.CONFIG = { get: () => require(path.join(owner, "config/properties")).promotion };
  global.SERVICE = { DefaultCouponOfferService: require(path.join(owner, "src/service/defaultCouponOfferService")) };
  global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); this.code = code; } } };
});

test("remaining three preserve approved terms, issuer split, exact caps and no Retail replay", () => {
  assert.equal(selected.importable, false); assert.equal(selected.liveExecutionCompleted, false);
  assert.equal(selected.purpose, "APPROVED_LOCAL_PLANNED_COMMANDS_NOT_INSTALLED_EVIDENCE");
  assert.deepEqual(selected.budgetAdmission, { mode: "FIRST_TIME_EXISTING_APPROVED_CAPS", totalLimit: "11000",
    additionalAuthorizedAmount: "0", replenishment: false });
  assert.equal(selected.records.length, 3);
  assert.equal(selected.records.reduce((sum, row) => sum + BigInt(row.budgetLimit), 0n), 11000n);
  assert.equal(prior35.records.length, 35);
  for (const row of selected.records) {
    const original = source.find(item => item.code === row.originalPromotionCode);
    assert(original); assert.equal(original.enterpriseCode, row.issuerEnterpriseCode);
    assert.equal(row.promotionCode, original.code + "_FIXED20261108");
    assert.equal(row.budgetLimit, original.budget.limit);
    assert.equal(row.productCode, original.conditions.sourceProductCode + "_FIXED20261108");
    assert.equal(row.sku, row.productCode + "_SKU");
    assert.equal(row.batchCode, original.code.replace(/_PROMO$/, "_BATCH_FIXED20261108"));
    assert.equal(row.priceRowCode, original.couponOffer.requirements.priceRef + "_FIXED20261108");
    assert.deepEqual(row.draft.actions, original.actions);
    assert.deepEqual(row.draft.conditions, { ...original.conditions, sourceProductCode: row.productCode });
    assert.deepEqual(row.draft.budget, original.budget);
    assert.deepEqual(row.draft.couponOffer, { ...original.couponOffer,
      requirements: { ...original.couponOffer.requirements, priceRef: row.priceRowCode } });
    assert.deepEqual(row.draft.couponOffer.expiry, { mode: "FIXED", at: "2026-11-08T19:59:59.999Z" });
    assert.deepEqual(row.draft.couponOffer.supply, { mode: "LIMITED", quantity: 100 });
    assert.equal(row.draft.couponOffer.ownerLimit, 1); assert.equal(row.quantity, 100);
    assert.equal(row.draft.purchasedCouponPolicy, undefined);
    assert(!prior35.records.some(item => item.promotionCode === row.promotionCode));
  }
});

test("planned draft normalization yields exact version-three publication and budget pins", () => {
  for (const [title, issuer, count] of groups) {
    const records = selected.records.filter(row => row.issuerEnterpriseCode === issuer);
    assert.equal(records.length, count);
    const plan = payload(section(title, "PublicationPlan")), budget = payload(section(title, "Budget"));
    const issuance = payload(section(title, "Issuance"));
    assert.equal(plan.items.length, count); assert.equal(budget.campaigns.length, count);
    assert.deepEqual(budget.couponBatches, []); assert.equal(issuance.couponBatches.length, count);
    for (const row of records) {
      const ref = { moduleName: "profile", schemaName: "enterprise", code: issuer };
      const normalized = draft.model(row.draft, true);
      const policy = publication.capturePolicy("promotion", { ...normalized, tenant: selected.tenant,
        enterpriseCode: issuer, enterpriseRef: ref, issuerEnterpriseRef: ref,
        versionId: 3, revision: 3, status: "ACTIVE", active: true }, { tenant: selected.tenant, enterpriseCode: issuer });
      const release = { tenant: selected.tenant, enterpriseCode: issuer, rootType: "promotion", rootCode: row.promotionCode,
        records: [{ schema: "promotion", policy }] };
      assert.equal(row.expectedVersionId, 3); assert.equal(row.expectedRevision, 3);
      assert.equal(publication.fingerprint(policy), row.policyFingerprint);
      assert.equal(publication.fingerprint(release), row.sourceVersion);
      assert.deepEqual(plan.items.find(item => item.rootCode === row.promotionCode), {
        code: row.publicationCode, domain: "promotion", rootType: "promotion", rootCode: row.promotionCode,
        sourceVersion: row.sourceVersion, input: { publicationCode: row.publicationCode, rootType: "promotion",
          rootCode: row.promotionCode, references: [{ schema: "promotion", code: row.promotionCode, versionId: 3 }] } });
      const command = { promotionCode: row.promotionCode, storeCode: selected.storeCode, rootCode: row.promotionCode,
        policyFingerprint: row.policyFingerprint, commandReference: "opening-" + row.promotionCode };
      assert.deepEqual(budget.campaigns.find(item => item.promotionCode === row.promotionCode), command);
      assert.deepEqual(issuance.campaigns.find(item => item.promotionCode === row.promotionCode), { ...command,
        admissionContribution: { moduleName: "circa.ewaste", releaseCode: "circa.ewaste:circa" + title + "RemainingFixedExpiryBudget",
          version: "0.0.1", checksum: checksum(section(title, "Budget")) } });
      assert.deepEqual(issuance.couponBatches.find(item => item.promotionCode === row.promotionCode), {
        promotionCode: row.promotionCode, batchCode: row.batchCode, quantity: 100, commandReference: "issue-" + row.promotionCode });
      assert.notEqual(publication.fingerprint({ ...policy, revision: 4 }), row.policyFingerprint);
      assert.notEqual(publication.fingerprint({ ...policy, budget: { limit: "5001" } }), row.policyFingerprint);
    }
  }
});

test("six new releases are exact-byte Local explicit v001 selections without grants or copied budgets", () => {
  for (const [title] of groups) for (const phase of ["PublicationPlan", "Budget", "Issuance"]) {
    const s = section(title, phase);
    assert.equal(s.sourceRoot, "sample-v001"); assert.equal(s.version, "0.0.1");
    assert.equal(s.selectionPolicy, "EXPLICIT"); assert.deepEqual(s.environmentScope, ["LOCAL"]);
    for (const [file, hash] of Object.entries(s.files)) assert.equal(sha(fs.readFileSync(path.join(root, "data", file))), hash);
    if (phase !== "PublicationPlan") {
      assert.equal(s.installer, "PROMOTION_CAMPAIGN_ISSUANCE"); assert.equal(s.destinationRole, "COMMERCE");
      for (const field of ["budget", "spent", "authData", "sellerAuthorizations", "tenant", "enterpriseCode", "protectedToken"])
        assert(!JSON.stringify(payload(s)).includes('"' + field + '"'));
    } else assert.equal(s.destinationRole, "COMMERCE_STAGED");
  }
});

test("actual nImport reader and Promotion parser accept only the new issuer instructions", async t => {
  const oldNodics = global.NODICS; t.after(() => { global.NODICS = oldNodics; });
  const ports = require(path.join(framework, "nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution"))({
    modules: { "circa.ewaste": { name: "circa.ewaste", path: root } }, runtimeRole: "COMMERCE", environment: "kickoffLocal" });
  const get = CONFIG.get;
  CONFIG.get = key => key === "promotion" ? { budgetAdmission: { maximumCampaignsPerContribution: 50 } } : get(key);
  CONFIG.get("data").dataReleases.installers.PROMOTION_CAMPAIGN_ISSUANCE = "DefaultPromotionSetupContributionService";
  SERVICE.DefaultDataReleaseService = ports.service;
  const setup = require(path.join(owner, "src/service/defaultPromotionSetupContributionService"));
  const releases = ports.service.discoverReleases("sample");
  for (const [title] of groups) for (const phase of ["Budget", "Issuance"]) {
    const contribution = releases.find(row => row.sectionCode === "circa" + title + "RemainingFixedExpiry" + phase);
    assert(contribution && !contribution.invalidManifest);
    assert.deepEqual(await setup.payload({ contribution }), payload(section(title, phase)));
    await assert.rejects(setup.payload({ contribution: { ...contribution, checksum: "0".repeat(64) } }), error => error.code === "ERR_IMP_00003");
  }
  assert.equal(ports.imports.length, 0); assert.equal(ports.installations.length, 0);
});

test("planned drafts cannot manufacture another issuer through a SuperAdmin body or header", () => {
  const workbench = require(path.join(owner, "src/service/defaultPromotionBusinessWorkbenchService"));
  SERVICE.DefaultSecuredRequestPipelineService = { hasAccessGroup: () => true, getGrantedPermissions: () => [], isPermissionGranted: () => true };
  const request = { tenant: "default", authData: { tenant: "default", entCode: "PLATFORM", tokenType: "access",
    principalType: "human", principalId: "superAdmin" } };
  assert.equal(workbench.context(request).enterpriseCode, "PLATFORM");
  for (const row of selected.records) {
    assert.throws(() => draft.model({ ...row.draft, enterpriseCode: row.issuerEnterpriseCode }, true));
    assert.throws(() => workbench.context({ ...request, httpRequest: { headers: { "x-enterprise-code": row.issuerEnterpriseCode } } }));
  }
});
