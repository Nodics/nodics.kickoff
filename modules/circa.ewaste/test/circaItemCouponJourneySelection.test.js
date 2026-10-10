/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaItemCouponJourneySelection @description Verifies source-pinned application selections against actual Commerce records and inert owner-runner refusal; no native invocation or funding. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { test } = require("node:test");
const { frameworkRoot } = require("../../../test/helpers/configuration");
const fixture = require("./fixtures/circaItemCouponJourneySelection.json");
const { createCircaItemCouponJourneySelection: create, verifyCircaItemCouponSelectionSources: verify } = require("./fixtures/circaItemCouponJourneySelectionFactory");
const records = name => Object.values(require("../data/sample-v001/commerce/records/" + name));
const campaigns = records("circaPromotionData");
const prices = records("circaPriceRowData");
const products = records("circaProductData");
const variants = records("circaProductVariantData");
const reviewedPolicy = require("./fixtures/circaDemoPolicyProposal.json");
const options = () => ({
  approvalReference: "ISOLATED-SELECTION-TEST",
  runCode: "CIRCA_ORDER_ISOLATED_ITEM_01",
  customer: { ownerId: "isolated-buyer", enterpriseCode: "default" },
  walletCode: "isolated-existing-wallet",
  privateCaptureQualified: true,
  refundReview: { sessionKey: "refundReviewer", enterpriseCode: "default",
    comment: "Reviewed isolated unused coupon refund test.", reason: "Reviewed isolated unused coupon original payment refund." },
});

test("fixture is nonimportable and every source pin matches existing immutable bytes", () => {
  assert.equal(fixture.importable, false);
  assert.equal(fixture.operationalAuthority, false);
  assert.equal(fixture.independentOwnerGatesWaived, false);
  assert.equal(verify(), true);
  assert.equal(fixture.selection.priceSourceSha256, fixture.sourcePins.prices.sha256);
  assert.equal(fixture.selection.campaignSourceSha256, fixture.sourcePins.campaigns.sha256);
  assert(!JSON.stringify(require("../data/manifest.json")).includes("circaItemCouponJourneySelection"));
  assert(!fs.readFileSync(path.join(__dirname, "fixtures/circaItemCouponJourneySelectionFactory.js"), "utf8").includes("fetch("));
});

test("Circa run codes retain the actual Order policy prefix and owner-safe command boundaries without normalization", async () => {
  const policy = require("../config/properties").order;
  const dispute = require(path.join(frameworkRoot, "nodics.commerce/modules/checkout/modules/order/src/service/defaultOrderDisputeService"));
  const merchant = require(path.join(frameworkRoot, "nodics.commerce/modules/digitalCommerce/modules/digitalCore/src/service/defaultDigitalCommerceMerchantService"));
  const fail = message => { throw new Error(message); };
  const longest = Math.max(...[...fixture.selection.itemCases, fixture.selection.refundCase].map(c => c.caseCode.length));
  assert.equal(longest, 20);
  assert.deepEqual(policy.disputes.orderCodePrefixes, ["CIRCA_ORDER_"]);
  assert.deepEqual(policy.refunds.orderCodePrefixes, ["CIRCA_ORDER_"]);
  for (const runCode of ["CIRCA_ORDER_", options().runCode, "CIRCA_ORDER_Aa0._:-", "CIRCA_ORDER_" + "x".repeat(18)]) {
    const input = { ...options(), runCode }, selection = create(input);
    assert.equal(selection.runCode, runCode);
    assert.equal(input.runCode, runCode);
    for (const c of [...selection.itemCases, selection.refundCase]) {
      const identity = selection.runCode + ":" + c.caseCode;
      for (const selectedPolicy of [policy.disputes, policy.refunds]) {
        await dispute.policyAdmission.call({ fail }, {}, { code: identity + ":order" }, selectedPolicy);
      }
      for (const suffix of [":purchase", ":confirm", ":dispute", ":refund"]) {
        const key = identity + suffix;
        assert.equal(merchant.command.call({ fail }, { payload: { confirmed: true }, idempotencyKey: key }), key);
      }
    }
  }
  for (const runCode of ["ISOLATED-ITEM-01", "circa_order_item", "CIRCA_ORDER", "CIRCA_ORDER@ITEM", "CIRCA_ORDER_ITEM@",
    "CIRCA_ORDER_ITEM/", "CIRCA_ORDER_ITEM ", " CIRCA_ORDER_ITEM", "CIRCA_ORDER_ITEM\n", "CIRCA_ORDER_ITEM\r\n",
    "CIRCA_ORDER_" + "x".repeat(19)]) {
    const input = { ...options(), runCode };
    assert.throws(() => create(input), { code: "CIRCA_REVIEWED_SELECTION_REQUIRED" });
    assert.equal(input.runCode, runCode);
  }
});

test("all 29 exact ITEM selections join real Product, SKU, issuer, outlet, price and original terms", () => {
  const s = create(options());
  assert.equal(s.expectedCampaignCount, 38);
  assert.equal(s.approvedUnitsPerCampaign, 100);
  assert.equal(reviewedPolicy.status, "APPROVED_LOCAL_DEMO_ONLY");
  assert.equal(s.approvedUnitsPerCampaign, reviewedPolicy.quantityPerCouponCampaign);
  assert.deepEqual(s.approvedCampaignCodes, campaigns.map(c => c.code));
  const actualItems = campaigns.filter(c => c.actions.benefitType === "ITEM");
  assert.equal(actualItems.length, 29);
  assert.equal(s.expectedItemCount, 29);
  assert.deepEqual(s.itemCases.map(c => c.promotionCode), actualItems.map(c => c.code));
  assert.equal(new Set(s.itemCases.map(c => c.caseCode)).size, 29);
  for (const c of s.itemCases) {
    const campaign = actualItems.find(p => p.code === c.promotionCode);
    const price = prices.filter(p => p.productCode === c.productCode && p.currency === "POINTS" && p.active);
    const variant = variants.filter(v => v.productCode === c.productCode && v.active && v.status === "ACTIVE");
    const product = products.find(p => p.code === c.productCode);
    assert.equal(c.productCode, campaign.conditions.sourceProductCode);
    assert.equal(product.enterpriseCode, "GREENPERKS_ONLINE");
    assert.equal(product.productType, "DIGITAL");
    assert.equal(variant.length, 1);
    assert.equal(c.sku, variant[0].sku);
    assert.equal(variant[0].digitalDeliveryType, "COUPON_CODE");
    assert.equal(variant[0].attributes.promotionCode, c.promotionCode);
    assert.equal(c.issuerEnterpriseCode, campaign.enterpriseCode);
    assert.equal(c.issuerEnterpriseCode, "GREENPERKS_RETAIL");
    assert(campaign.conditions.storeCodes.includes(c.outletStoreCode));
    assert.equal(c.staffSessionKey, c.outletStoreCode === "greenperks-cafe" ? "greenperksCafeOperator" : "greenperksBistroOperator");
    assert.equal(price.length, 1);
    assert.equal(price[0].priceBookCode, "circaPointsPriceBook");
    assert.equal(c.expectedTotal, price[0].unitAmount);
    assert.deepEqual(c.items, campaign.actions.items);
    assert.deepEqual(c.items, reviewedPolicy.greenPerks.itemsByCampaign[c.caseCode].map(item => ({ ...item, unit: "EACH" })));
    const terms = fixture.expectedTerms.campaigns.find(t => t.promotionCode === c.promotionCode);
    assert.deepEqual(terms.allowedOutletStoreCodes, campaign.conditions.storeCodes);
    assert.deepEqual(terms.items, c.items);
    assert.deepEqual(terms.terms, campaign.purchasedCouponPolicy.terms);
    assert.equal(terms.validityDays, 30);
    assert.equal(terms.validityDays, campaign.purchasedCouponPolicy.validityDays);
    assert.equal(terms.budget, "0");
    assert.equal(terms.budget, campaign.budget.limit);
  }
  assert.equal(s.itemCases.filter(c => c.outletStoreCode === "greenperks-cafe").length, 18);
  assert.equal(s.itemCases.filter(c => c.outletStoreCode === "greenperks-bistro").length, 11);
  for (const c of s.itemCases.filter(c => c.caseCode.startsWith("GP-A"))) assert.equal(c.outletStoreCode, "greenperks-cafe");
});

test("source verification refuses changed reviewed pins without regenerating or writing records", () => {
  const original = fixture.sourcePins.campaigns.sha256;
  try {
    fixture.sourcePins.campaigns.sha256 = "0".repeat(64);
    assert.throws(() => verify(), { code: "CIRCA_SELECTION_SOURCE_DRIFT" });
    assert.throws(() => create(options()), { code: "CIRCA_SELECTION_SOURCE_DRIFT" });
  } finally {
    fixture.sourcePins.campaigns.sha256 = original;
  }
  assert.equal(verify(), true);
});

test("actual marketplace and payment context stays POINTS with the existing zero sample Tax policy", () => {
  const s = create(options());
  const store = Object.values(require("../data/sample-v001/store/records/circaStoreData")).find(r => r.code === s.storeCode);
  const book = records("circaPriceBookData").find(r => r.code === "circaPointsPriceBook");
  const tax = records("circaTaxPolicyData").find(r => r.jurisdiction === s.jurisdiction);
  assert.equal(s.storeCode, "circaMainStore");
  assert.equal(s.currency, "POINTS");
  assert.equal(s.currency, store.defaultCurrency);
  assert.equal(s.currency, book.currency);
  assert.equal(s.locale, store.defaultLocale);
  assert.equal(s.channelCode, "web");
  assert.equal(tax.rate, "0");
  assert.equal(tax.code, "circaSamplePointsPolicy");
  assert.deepEqual(s.payment, { paymentMethod: "LOYALTY_REWARD", programCode: "circa", rewardTypeCode: "points",
    rewardCurrency: "POINTS", walletCode: options().walletCode });
});

test("GP-A01 unused refund is a separate 50-POINTS purchase before the 6280-POINTS ITEM spend", () => {
  const s = create(options()), original = s.itemCases.find(c => c.caseCode === "GP-A01");
  assert.equal(s.refundCase.caseCode, "GP-A01-UNUSED-REFUND");
  assert(!s.itemCases.some(c => c.caseCode === s.refundCase.caseCode));
  assert.deepEqual(s.refundCase, { caseCode: "GP-A01-UNUSED-REFUND", productCode: original.productCode,
    sku: original.sku, promotionCode: original.promotionCode, expectedTotal: "50" });
  const exact = require(path.join(frameworkRoot, "nodics.commerce/modules/baseCommerce/modules/pricing/src/service/defaultExactAmountService"));
  assert.equal(s.itemCases.reduce((sum, c) => exact.add(sum, c.expectedTotal), "0"), "6280");
  assert.equal(fixture.expectedTerms.itemSpendPoints, "6280");
  assert.equal(fixture.expectedTerms.unusedRefundFloatPoints, "50");
  assert.equal(fixture.expectedTerms.fundingIncluded, false);
  assert.equal(fixture.expectedTerms.deliveryVerified, false);
  assert.equal(fixture.expectedTerms.evidenceMode, "LOCAL_SIMULATION");
  assert.equal(fixture.expectedTerms.redeemedBenefitReversalsExecuted, false);
  assert.equal(s.allowRedeemedBenefitReversal, false);
});

test("factory produces fresh JSON objects without authority, credentials or mutable business overrides", () => {
  const input = options(), first = create(input), second = create(input);
  assert.deepEqual(JSON.parse(JSON.stringify(first)), first);
  first.itemCases[0].items[0].quantity = 999;
  first.customer.ownerId = "changed";
  first.payment.walletCode = "changed";
  assert.notDeepEqual(first, second);
  assert.deepEqual(second, create(input));
  for (const mutate of [
    x => { x.authorization = "Bearer NEVER_ACCEPT"; },
    x => { x.funding = "7645"; },
    x => { x.itemCases = []; },
    x => { x.privateCaptureQualified = false; },
    x => { x.customer.authData = {}; },
    x => { x.runCode = "x".repeat(51); },
    x => { x.refundReview.enterpriseCode = "FOREIGN"; },
    x => { x.refundReview.sessionKey = "customer"; },
    x => { x.refundReview.sessionKey = "greenperksCafeOperator"; },
    x => { x.refundReview.reason = "short"; },
  ]) {
    const bad = options(); mutate(bad);
    assert.throws(() => create(bad), { code: "CIRCA_REVIEWED_SELECTION_REQUIRED" });
  }
});

test("actual owner runner accepts the selection but refuses unfunded isolated execution before any HTTP or checkpoint", async () => {
  const runner = await import(pathToFileURL(path.join(frameworkRoot,
    "nodics.commerce/modules/checkout/modules/checkoutCore/src/service/acceptance/defaultCouponJourneyHttpAcceptanceService.mjs")).href);
  const s = create(options());
  const sessions = Object.fromEntries([
    ["customer", s.customer.enterpriseCode], ["greenperksCafeOperator", "GREENPERKS_RETAIL"],
    ["greenperksBistroOperator", "GREENPERKS_RETAIL"], [s.refundReview.sessionKey, s.customer.enterpriseCode],
  ].map(([key, enterpriseCode]) => [key, { enterpriseCode, authorization: "Bearer ISOLATED_TEST_ONLY" }]));
  const result = await runner.runCouponJourneyHttpAcceptance({ execute: true, baseUrl: "http://127.0.0.1:1",
    selection: s, sessions, fundingObservation: { available: "118", observedAt: new Date().toISOString(),
      walletCode: s.payment.walletCode, ownerId: s.customer.ownerId, enterpriseCode: s.customer.enterpriseCode,
      programCode: "circa", rewardTypeCode: "points" },
    fetch: () => assert.fail("Unfunded selection must never dispatch HTTP"),
    saveCheckpoint: () => assert.fail("Unfunded selection must never write a checkpoint"),
  });
  assert.equal(result.state, "FUNDING_REQUIRED");
  assert.equal(result.requiredAvailable, "6280");
  assert.equal(result.shortfall, "6162");
});
