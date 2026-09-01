/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelCouponBatchData
 * @description Defines Agora Apparel coupon batches that back coupon marketplace products.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

module.exports = Object.freeze({
  record0: {
    code: 'agoraStylePass5Batch001',
    tenant: 'default',
    promotionCode: 'agoraStylePass5PercentRule',
    status: 'ACTIVE',
    issuedCount: 100,
    reservedCount: 0,
    tokenHashPolicy: 'TENANT_UPPERCASE_SHA256',
    sourceReference: 'agoraStylePass5Coupon',
    revision: 1,
    active: true
  },
  record1: {
    code: 'agoraCapsuleEdit10Batch001',
    tenant: 'default',
    promotionCode: 'agoraCapsuleEdit10PercentRule',
    status: 'ACTIVE',
    issuedCount: 50,
    reservedCount: 0,
    tokenHashPolicy: 'TENANT_UPPERCASE_SHA256',
    sourceReference: 'agoraCapsuleEdit10Coupon',
    revision: 1,
    active: true
  },
  record2: {
    code: 'agoraPrivateSale20Batch001',
    tenant: 'default',
    promotionCode: 'agoraPrivateSale20PercentRule',
    status: 'ACTIVE',
    issuedCount: 20,
    reservedCount: 0,
    tokenHashPolicy: 'TENANT_UPPERCASE_SHA256',
    sourceReference: 'agoraPrivateSale20Coupon',
    revision: 1,
    active: true
  }
});
