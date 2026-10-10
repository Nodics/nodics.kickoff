/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDemoPolicyProposal @description Checks human-approved local-demo terms without importing operational authority or waiving independent owner gates. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const proposal = require("./fixtures/circaDemoPolicyProposal.json");
const campaigns = Object.values(require("../data/sample-v001/commerce/records/circaPromotionData"));
const assets = Object.values(require("../data/sample-v001/commerce/records/circaProductData"))
  .filter(row => row.code.startsWith("CIRCA_ASSET_")).map(row => row.code.replace("CIRCA_ASSET_", ""));
const manifest = require("../data/manifest.json");
const shortCode = row => row.code.replace("CIRCA_COUPON_", "").replace(/_PROMO$/, "");
test("human-approved local-demo terms stay outside importable data and grant no operational authority", () => {
  assert.equal(proposal.status, "APPROVED_LOCAL_DEMO_ONLY");
  assert.equal(proposal.operationalAuthority, false);
  assert.equal(proposal.scope, "FICTIONAL_NATIVE_KICKOFF_LOCAL_ONLY");
  assert.equal(proposal.replenishment, "NONE");
  assert(!JSON.stringify(manifest).includes("circaDemoPolicyProposal"));
  assert(!JSON.stringify(proposal).includes("sellerAuthorizations"));
  assert.equal(proposal.review.approvedOn, "2026-10-09");
  assert.equal(proposal.review.originalProposalSha256, "dd5e5d1fcbc984db2bd24069ac5455867c485098a444097bc7a53f78b4c009a1");
  assert.equal(proposal.review.terms, "COMPLETE_PROPOSAL_WITH_EXACT_FILE_QUANTITIES_AND_MONETARY_BUDGETS");
  assert.equal(proposal.review.customerOrProductionPolicy, false);
  assert.equal(proposal.review.independentOwnerGatesWaived, false);
  assert.equal(proposal.quantityPerCouponCampaign, 100);
  assert.deepEqual(proposal.greenPerks.monetaryBudgets, {
    "GP-B12": "2500", "GP-A07": "1000", "GP-A08": "2000", "GP-A09": "3000", "GP-A10": "2000", "GP-A11": "4000",
  });
  assert.deepEqual(proposal.originalOffers.map(row => [row.campaign, row.budget]), [
    ["CPN-GRN-30", "3000"], ["CPN-ECO-15", "3000"], ["CPN-SVC-50", "5000"],
  ]);
});
test("all 29 item campaigns have exact bounded SKU quantities and complete outlet partitions", () => {
  const green = proposal.greenPerks;
  const keys = Object.keys(green.itemsByCampaign).sort();
  assert.equal(keys.length, 29);
  assert.deepEqual(keys, campaigns.filter(row => row.actions.benefitType === "ITEM").map(shortCode).sort());
  const partition = [...green.cafeCampaigns, ...green.bistroCampaigns, ...green.eitherOutletCampaigns];
  assert.equal(new Set(partition).size, partition.length);
  assert.deepEqual(partition.sort(), keys);
  assert.equal(green.substitutions, "NONE");
  assert.equal(green.itemUnit, "EACH");
  assert.equal(green.itemMonetaryBudget, "0");
  for (const items of Object.values(green.itemsByCampaign)) {
    assert(items.length > 0 && items.length <= 20);
    assert.equal(new Set(items.map(item => item.sku)).size, items.length);
    for (const item of items) {
      assert.match(item.sku, /^GP_[A-Z_]+$/);
      assert(Number.isSafeInteger(item.quantity) && item.quantity > 0 && item.quantity <= 100);
    }
  }
});
test("all nine approved monetary offers retain their exact reviewed source liabilities without operational authority", () => {
  const original = new Map(proposal.originalOffers.map(row => [row.campaign, row]));
  const monetary = campaigns.filter(row => row.actions.benefitType !== "ITEM");
  assert.equal(monetary.length, 9);
  for (const row of monetary) {
    const code = shortCode(row), choice = original.get(code);
    const maximum = choice ? (choice.maximumDiscountAmount || choice.amount) :
      (row.actions.maximumDiscountAmount || row.actions.discountAmount);
    const budget = choice ? choice.budget : proposal.greenPerks.monetaryBudgets[code];
    assert.match(maximum, /^\d+(?:\.0+)?$/);
    assert.equal(BigInt(budget), BigInt(maximum.replace(/\.0+$/, "")) * BigInt(proposal.quantityPerCouponCampaign));
    if (choice) {
      assert.equal(choice.sellerEnterprise, proposal.marketplaceEnterprise);
      assert(choice.outlet);
      assert.equal(row.actions.discountValue, choice.percent || choice.amount);
      assert.deepEqual(row.budget, { limit: choice.budget });
    }
  }
});
test("five asset bindings remain quantity-one digital ownership with explicit custody and refund limits", () => {
  assert.deepEqual(proposal.assets.bindings.slice().sort(), assets.sort());
  assert.equal(proposal.assets.quantityPerAsset, 1);
  assert.equal(proposal.assets.reservationSeconds, 600);
  assert.equal(proposal.assets.delivery, "DIGITAL_OWNERSHIP_ONLY_NO_PHYSICAL_CUSTODY_CLAIM");
  assert.equal(proposal.assets.refund, "ORIGINAL_TRANSFER_REVERSAL_ONLY_BEFORE_ONWARD_TRANSFER");
  assert(proposal.requiredIndependentGates.includes("SIGNED_ISSUER_CONSENT"));
  assert(proposal.requiredIndependentGates.includes("CAPTURED_PAYMENT_AND_CANONICAL_ASSET_TRANSFER"));
});
