/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/commerce/circaPromotionData @description Owns illustrative Circa catalogue authoring data. @layer data @owner circa.ewaste @lifecycle PUBLISHABLE @destination COMMERCE_STAGED */
module.exports = {
    "record0": {
        "tenant": "default",
        "enterpriseCode": "default",
        "revision": 1,
        "active": true,
        "code": "CIRCA_COUPON_CPN-GRN-30_PROMO",
        "name": "AED 30 repair credit",
        "status": "ACTIVE",
        "priority": 25,
        "conditions": {
            "couponRequired": true,
            "customerOwnsCouponCode": true,
            "sourceProductCode": "CIRCA_COUPON_CPN-GRN-30"
        },
        "actions": {
            "discountType": "AMOUNT",
            "discountValue": "1",
            "discountAmount": "1",
            "reasonCode": "CIRCA_SAMPLE_OFFER"
        },
        "budget": {
            "limit": "1000",
            "spent": "0"
        },
        "validFrom": "2026-01-01T00:00:00.000Z",
        "validTo": "2026-12-31T23:59:59.000Z"
    },
    "record1": {
        "tenant": "default",
        "enterpriseCode": "default",
        "revision": 1,
        "active": true,
        "code": "CIRCA_COUPON_CPN-ECO-15_PROMO",
        "name": "15% recycled accessories offer",
        "status": "ACTIVE",
        "priority": 25,
        "conditions": {
            "couponRequired": true,
            "customerOwnsCouponCode": true,
            "sourceProductCode": "CIRCA_COUPON_CPN-ECO-15"
        },
        "actions": {
            "discountType": "AMOUNT",
            "discountValue": "1",
            "discountAmount": "1",
            "reasonCode": "CIRCA_SAMPLE_OFFER"
        },
        "budget": {
            "limit": "1000",
            "spent": "0"
        },
        "validFrom": "2026-01-01T00:00:00.000Z",
        "validTo": "2026-11-15T23:59:59.000Z"
    },
    "record2": {
        "tenant": "default",
        "enterpriseCode": "default",
        "revision": 1,
        "active": true,
        "code": "CIRCA_COUPON_CPN-SVC-50_PROMO",
        "name": "AED 50 device diagnosis",
        "status": "ACTIVE",
        "priority": 25,
        "conditions": {
            "couponRequired": true,
            "customerOwnsCouponCode": true,
            "sourceProductCode": "CIRCA_COUPON_CPN-SVC-50"
        },
        "actions": {
            "discountType": "AMOUNT",
            "discountValue": "1",
            "discountAmount": "1",
            "reasonCode": "CIRCA_SAMPLE_OFFER"
        },
        "budget": {
            "limit": "1000",
            "spent": "0"
        },
        "validFrom": "2026-01-01T00:00:00.000Z",
        "validTo": "2027-01-20T23:59:59.000Z"
    }
};
