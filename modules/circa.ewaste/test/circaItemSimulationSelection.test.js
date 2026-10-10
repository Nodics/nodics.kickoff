/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
"use strict";
/** @module circa.ewaste/test/circaItemSimulationSelection @description Checks the approved native-local simulation selection and all 29 application bundles through framework consumers, not installed provider, issuance or real-delivery acceptance. @layer test @owner circa.ewaste */
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

test("native Local explicitly selects simulation while Docker and framework defaults remain unqualified", () => {
  for (const server of ["commerceServer", "commerceStagedServer"]) {
    const native = loadRuntime(server, "kickoffLocal");
    const docker = loadRuntime(server, "kickoffDockerLocal");
    assert.equal(native.environment.class, "LOCAL");
    assert.equal(native.promotion.merchantBenefits.itemEvidenceMode, "LOCAL_SIMULATION");
    assert.equal(native.promotion.merchantBenefits.itemEvidenceService, "DefaultFulfillmentItemSimulationService");
    assert.equal(native.promotion.merchantBenefits.qualified, server === "commerceServer");
    assert.deepEqual(native.fulfillmentCore.itemSimulation.environmentAllowlist, ["kickoffLocal"]);
    assert.equal(native.fulfillmentCore.itemSimulation.enabled, true);
    assert.equal(docker.promotion.merchantBenefits.itemEvidenceMode, "VERIFIED");
    assert.equal(docker.fulfillmentCore.itemSimulation.enabled, false);
  }
});

test("all 29 Circa ITEM promises retain their exact quantities and produce only unverified simulations", async t => {
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
      const result = await itemOwner.validate(request, original, coupon);
      assert.equal(result.simulated, true, campaign.code);
      assert.equal(result.verified, false, campaign.code);
      assert.equal(result.sourceStage, "SIMULATED_ITEMS");
      assert.equal(result.storeCode, storeCode);
      assert.equal(result.deliveredAt, undefined);
      assert.deepEqual(result.items, itemOwner.items(campaign.actions.items));
    }
  }
  assert.deepEqual(campaigns, before);
});

test("only native Online Commerce selects reviewed coupon, monetary and ownership admission", () => {
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
    assert.equal(p.promotion.merchantBenefits.qualified, selected);
    assert.equal(p.promotion.merchantBenefits.pricedSource.qualified, selected);
    assert.equal(p.digitalCore.merchantRedemption.pricedProvider.qualified, selected);
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
