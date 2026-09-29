/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.apparel/data/agoraApparelPromotionData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.apparel
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraStylePass5PercentRule",
    tenant: "default",
    name: "Agora Style Pass 5 Percent Discount",
    status: "ACTIVE",
    priority: 25,
    conditions: {
      couponRequired: true,
      customerOwnsCouponCode: true,
      sourceProductCode: "agoraStylePass5Coupon",
      sourceDigitalDeliveryType: "COUPON_CODE",
    },
    actions: {
      discountType: "PERCENT",
      discountValue: "5",
      discountAmount: "5.00",
      reasonCode: "AGORA_STYLE_PASS_5",
    },
    budget: {
      limit: "500.00",
      spent: "0.00",
    },
    analytics: {
      source: "agoraCouponMarketplaceE2E",
      expectedIssuedCodes: 100,
    },
    validFrom: "2026-01-01T00:00:00.000Z",
    validTo: "2027-01-01T00:00:00.000Z",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraCapsuleEdit10PercentRule",
    tenant: "default",
    name: "Agora Capsule Edit 10 Percent Discount",
    status: "ACTIVE",
    priority: 30,
    conditions: {
      couponRequired: true,
      customerOwnsCouponCode: true,
      sourceProductCode: "agoraCapsuleEdit10Coupon",
      sourceDigitalDeliveryType: "COUPON_CODE",
    },
    actions: {
      discountType: "PERCENT",
      discountValue: "10",
      discountAmount: "10.00",
      reasonCode: "AGORA_CAPSULE_EDIT_10",
    },
    budget: {
      limit: "500.00",
      spent: "0.00",
    },
    analytics: {
      source: "agoraCouponMarketplaceE2E",
      expectedIssuedCodes: 50,
    },
    validFrom: "2026-01-01T00:00:00.000Z",
    validTo: "2027-01-01T00:00:00.000Z",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record2: {
    code: "agoraPrivateSale20PercentRule",
    tenant: "default",
    name: "Agora Private Sale 20 Percent Discount",
    status: "ACTIVE",
    priority: 35,
    conditions: {
      couponRequired: true,
      customerOwnsCouponCode: true,
      sourceProductCode: "agoraPrivateSale20Coupon",
      sourceDigitalDeliveryType: "COUPON_CODE",
    },
    actions: {
      discountType: "PERCENT",
      discountValue: "20",
      discountAmount: "20.00",
      reasonCode: "AGORA_PRIVATE_SALE_20",
    },
    budget: {
      limit: "400.00",
      spent: "0.00",
    },
    analytics: {
      source: "agoraCouponMarketplaceE2E",
      expectedIssuedCodes: 20,
    },
    validFrom: "2026-01-01T00:00:00.000Z",
    validTo: "2027-01-01T00:00:00.000Z",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
