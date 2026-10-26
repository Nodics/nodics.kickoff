/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
"use strict";
/** @module circa.ewaste/test/circaItemSimulationSelection @description Checks inherited standard staff-recording selection and refusal of unselected integrated delivery for 29 unchanged application bundles; not live redemption acceptance. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const path = require("node:path");
const { test } = require("node:test");
const { loadRuntime, frameworkRoot } = require("../../../test/helpers/configuration");
const service = file => require(path.join(frameworkRoot, file));
const itemOwner = service("nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionItemBenefitService");
const simulator = service("nodics.commerce/modules/fulfillment/modules/fulfillmentCore/src/service/defaultFulfillmentItemSimulationService");
const boundary = service("nodics.commerce/modules/fulfillment/modules/fulfillmentCore/src/service/defaultFulfillmentItemDeliveryEvidenceService");
const campaigns = Object.values(require("../data/sample-v001/commerce/records/circaPromotionData"))
  .filter(row => row.actions?.benefitType === "ITEM");

test("native Local and Docker inherit unselected integrated benefits and the standard merchant-screen provider", () => {
  for (const server of ["commerceServer", "commerceStagedServer"]) {
    const native = loadRuntime(server, "kickoffLocal");
    const docker = loadRuntime(server, "kickoffDockerLocal");
    assert.equal(native.environment.class, "LOCAL");
    assert.equal(native.promotion.merchantBenefits.enabled, false);
    assert.equal(native.digitalCore.merchantRedemption.providerService, "DefaultDigitalCommerceMerchantScreenProviderService");
    assert.equal(native.promotion.merchantBenefits.itemEvidenceMode, "VERIFIED");
    assert.equal(native.promotion.merchantBenefits.itemEvidenceService, null);
    assert.equal(native.promotion.merchantBenefits.qualified, false);
    assert.deepEqual(native.fulfillmentCore.itemSimulation.environmentAllowlist, ["kickoffLocal"]);
    assert.equal(native.fulfillmentCore.itemSimulation.enabled, true);
    assert.equal(docker.promotion.merchantBenefits.itemEvidenceMode, "VERIFIED");
    assert.equal(docker.fulfillmentCore.itemSimulation.enabled, false);
  }
});

test("all 29 Circa ITEM promises remain unchanged and cannot invoke unselected integrated delivery", async t => {
  const previous = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, CLASSES: global.CLASSES, NODICS: global.NODICS };
  t.after(() => Object.assign(global, previous));
  const configuration = loadRuntime("commerceServer", "kickoffLocal");
  global.CONFIG = { get: key => configuration[key] };
  global.NODICS = { getSelectedEnvironmentName: () => "kickoffLocal" };
  global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); this.code = code; } } };
  global.SERVICE = { DefaultFulfillmentItemSimulationService: simulator,
    DefaultFulfillmentItemDeliveryEvidenceService: boundary };
  const before = structuredClone(campaigns);
  assert.equal(campaigns.length, 29);
  for (const campaign of campaigns) {
    const original = { ...campaign, revision: 1 };
    const coupon = { code: "isolated:" + campaign.code, productCode: campaign.conditions.sourceProductCode,
      promotionCode: campaign.code, soldTo: "isolated-buyer", soldAt: new Date(Date.now() - 60000).toISOString(),
      issuerEnterpriseRef: campaign.issuerEnterpriseRef };
    for (const storeCode of campaign.conditions.storeCodes) {
      const request = { tenant: campaign.tenant, enterpriseCode: "GREENPERKS_ONLINE",
        storeCode, storeRevision: 1, targetCode: "isolated-redemption",
        payload: { merchantReceiptReference: "SIM:" + campaign.code + ":" + storeCode } };
      assert.equal(itemOwner.simulationSelected(), false);
      await assert.rejects(itemOwner.validate(request, original, coupon), { code: "ERR_PROMOTION_BENEFIT_UNCONFIRMED" });

    }
  }
  assert.deepEqual(campaigns, before);
});

test("native Online Commerce preserves coupon and ownership admission while integrated benefits remain unqualified", () => {
  for (const [server, environment] of [["commerceServer", "kickoffLocal"], ["commerceStagedServer", "kickoffLocal"],
    ["commerceServer", "kickoffDockerLocal"]]) {
    const p = loadRuntime(server, environment);
    const selected = server === "commerceServer" && environment === "kickoffLocal";
    assert.equal(p.promotion.sellerAuthorization.enabled, selected);
    assert.equal(p.promotion.sellerAuthorization.qualified, selected);
    assert.equal(p.promotion.purchasedRights.enabled, selected);
    assert.equal(p.promotion.purchasedRights.qualified, selected);
    assert.equal(p.digitalCore.merchantRedemption.enabled, true);
    assert.equal(p.digitalCore.merchantRedemption.storeScope.enabled, selected);
    assert.equal(p.digitalCore.merchantRedemption.storeScope.qualified, selected);
    assert.equal(p.apiExposure.categories.commerceSellerAuthorizationManagement.enabled, selected);
    assert.equal(p.promotion.merchantBenefits.qualified, false);
    assert.equal(p.promotion.merchantBenefits.pricedSource.qualified, false);
    assert.equal(p.digitalCore.merchantRedemption.pricedProvider.qualified, false);
    assert.equal(p.pricing.merchantEvidence.qualified, selected);
    assert.equal(p.digitalCore.digitalOwnership.qualified, selected);
    assert.deepEqual(p.promotion.setupPacing, selected
      ? { preflightDelayMs: 1200, issuanceDelayMs: 3600 }
      : { preflightDelayMs: 0, issuanceDelayMs: 0 });
    assert.equal(p.httpHardening.rateLimit.enabled, true);
    assert.equal(p.httpHardening.rateLimit.max, 600);
    assert.equal(p.httpHardening.rateLimit.windowMs, 60000);
  }
});
