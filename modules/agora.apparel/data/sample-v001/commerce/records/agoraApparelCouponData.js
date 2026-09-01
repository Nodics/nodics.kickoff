/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const crypto = require('node:crypto');

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelCouponData
 * @description Defines deterministic Agora Apparel coupon-code pool records for digital coupon product testing.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

const tenant = 'default';

const tokenHash = function (token) {
  return crypto.createHash('sha256').update([tenant, String(token || '').trim().toUpperCase()].join('|')).digest('hex');
};

const generateCouponRecords = function ({ batchCode, count, prefix, promotionCode }, startIndex) {
  return Array.from({ length: count }).map((_, offset) => {
    const sequence = String(offset + 1).padStart(4, '0');
    const token = `${prefix}-${sequence}`;
    return [`record${startIndex + offset}`, {
      code: `${batchCode}-${sequence}`,
      tenant,
      promotionCode,
      batchCode,
      tokenHash: tokenHash(token),
      protectedToken: token,
      status: 'ACTIVE',
      maxUses: 1,
      usedCount: 0,
      revision: 1,
      active: true,
      sourceProductCode: prefix === 'AGORA5' ? 'agoraStylePass5Coupon' : prefix === 'AGORA10' ? 'agoraCapsuleEdit10Coupon' : 'agoraPrivateSale20Coupon'
    }];
  });
};

const batches = [
  {
    batchCode: 'agoraStylePass5Batch001',
    count: 100,
    prefix: 'AGORA5',
    promotionCode: 'agoraStylePass5PercentRule'
  },
  {
    batchCode: 'agoraCapsuleEdit10Batch001',
    count: 50,
    prefix: 'AGORA10',
    promotionCode: 'agoraCapsuleEdit10PercentRule'
  },
  {
    batchCode: 'agoraPrivateSale20Batch001',
    count: 20,
    prefix: 'AGORA20',
    promotionCode: 'agoraPrivateSale20PercentRule'
  }
];

let index = 0;
const records = {};

batches.forEach((batch) => {
  generateCouponRecords(batch, index).forEach(([key, value]) => {
    records[key] = value;
  });
  index += batch.count;
});

module.exports = Object.freeze(records);
