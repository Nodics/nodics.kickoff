/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.apparel/data/agoraApparelCouponBatchData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.apparel
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraStylePass5Batch001",
    tenant: "default",
    promotionCode: "agoraStylePass5PercentRule",
    status: "ACTIVE",
    issuedCount: 100,
    reservedCount: 0,
    tokenHashPolicy: "TENANT_UPPERCASE_SHA256",
    sourceReference: "agoraStylePass5Coupon",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraCapsuleEdit10Batch001",
    tenant: "default",
    promotionCode: "agoraCapsuleEdit10PercentRule",
    status: "ACTIVE",
    issuedCount: 50,
    reservedCount: 0,
    tokenHashPolicy: "TENANT_UPPERCASE_SHA256",
    sourceReference: "agoraCapsuleEdit10Coupon",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record2: {
    code: "agoraPrivateSale20Batch001",
    tenant: "default",
    promotionCode: "agoraPrivateSale20PercentRule",
    status: "ACTIVE",
    issuedCount: 20,
    reservedCount: 0,
    tokenHashPolicy: "TENANT_UPPERCASE_SHA256",
    sourceReference: "agoraPrivateSale20Coupon",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
