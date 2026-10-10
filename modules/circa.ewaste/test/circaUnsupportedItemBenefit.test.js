/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
"use strict";
/** @module circa.ewaste/test/circaUnsupportedItemBenefit @description Verifies all Circa source ITEM campaigns consume the canonical typed eligibility guard, independently of monetary selection; no installed issuance or fulfillment. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const path = require("node:path");
const { test } = require("node:test");
const { frameworkRoot } = require("../../../test/helpers/configuration");
const promotion = require(path.join(frameworkRoot,
  "nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionOperationService"));
const campaigns = Object.values(require("../data/sample-v001/commerce/records/circaPromotionData"))
  .filter(row => row.actions?.benefitType === "ITEM");

for (const enabled of [false, true]) {
  test(`all 29 source ITEM campaigns refuse purchase and merchant admission with monetary ${enabled ? "enabled" : "disabled"}`, async t => {
    const previous = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, CLASSES: global.CLASSES };
    t.after(() => Object.assign(global, previous));
    class FixtureError extends Error {
      constructor(code, message) { super(message); this.code = code; }
    }
    const before = structuredClone(campaigns);
    let current, coupon, monetaryCalls = 0, writes = 0;
    global.CLASSES = { NodicsError: FixtureError };
    global.CONFIG = { get: () => ({ merchantBenefits: { enabled } }) };
    global.SERVICE = {
      DefaultCouponService: {
        get: async request => ({ code: "SUC_GET", result: Object.entries(request.query).every(([key, value]) => coupon[key] === value)
          ? [structuredClone(coupon)] : [] }),
        update: async () => { writes++; assert.fail("ITEM admission must precede persistence"); },
      },
      DefaultPromotionService: { get: async () => ({ code: "SUC_GET", result: [structuredClone(current)] }) },
      DefaultCouponBatchService: { get: async () => assert.fail("ITEM Product must fail before batch lookup") },
      DefaultPromotionMerchantBenefitService: { validate: async () => { monetaryCalls++; assert.fail("ITEM cannot reach monetary validation"); } },
    };
    assert.equal(campaigns.length, 29);
    const owner = { ...promotion, promotions: async () => [structuredClone(current)] };
    const refuses = error => error instanceof FixtureError && error.code === "ERR_PROMOTION_BENEFIT_UNCONFIRMED";
    for (current of campaigns) {
      coupon = { code: "isolated-unit", tenant: current.tenant, enterpriseCode: current.enterpriseCode,
        productCode: current.conditions.sourceProductCode,
        promotionCode: current.code, soldTo: "isolated-buyer", status: "DELIVERED" };
      const request = { tenant: current.tenant,
        enterpriseCode: current.enterpriseCode, ownerId: coupon.soldTo, couponCode: coupon.code,
        productCode: coupon.productCode, storeCode: current.conditions.storeCodes[0] };
      await assert.rejects(owner.validateMerchantCoupon(request), refuses, current.code);
      await assert.rejects(owner.couponPoolAvailability(request), refuses, current.code);
      const purchase = { ...request, idempotencyKey: "isolated-purchase", payload: { couponCode: coupon.code,
        productCode: coupon.productCode, batchCode: "isolated-batch", promotionCode: current.code, orderCode: "isolated-order" } };
      Object.assign(coupon, { status: "ACTIVE", revision: 1, batchCode: purchase.payload.batchCode });
      delete coupon.soldTo;
      await assert.rejects(owner.reserveCouponCodeForCheckout(purchase), refuses, current.code);
      await assert.rejects(owner.capturePurchasedRights(purchase, coupon, new Date()), refuses, current.code);
      Object.assign(coupon, { status: "RESERVED", reservedFor: purchase.ownerId,
        idempotencyKey: purchase.idempotencyKey, orderCode: purchase.payload.orderCode });
      await assert.rejects(owner.reserveCouponCodeForCheckout(purchase), refuses, current.code);
      await assert.rejects(owner.confirmCouponCodeSale(purchase), refuses, current.code);
    }
    assert.equal(monetaryCalls, 0);
    assert.equal(writes, 0);
    assert.deepEqual(campaigns, before);
  });
}
