/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Complete explicitly selected Circa demo policy records. @owner circa.ewaste @layer data */
module.exports = {
    "record0": {
        "code": "EWASTE_DROP_OFF_STANDARD",
        "name": {
            "en": "Circa E-Waste Drop-Off"
        },
        "collectionPointType": "E_WASTE_DROP_OFF",
        "operatingMode": "DROP_OFF",
        "receiptPolicyCode": "EWASTE_STANDARD_RECEIPT",
        "verificationPolicyCode": "EWASTE_STANDARD_VERIFICATION",
        "evidencePolicyCode": "EWASTE_STANDARD_PHOTO",
        "impactProfileCode": "CIRCA_VERIFIED_DEVICE_RECOVERY",
        "acceptanceRuleCodes": [
            "EWASTE_DROP_OFF_MOBILE_DEVICE",
            "EWASTE_DROP_OFF_LAPTOP",
            "CIRCA_DROP_OFF_SMART_HOME"
        ],
        "serviceCapabilities": [
            "DROP_OFF",
            "RECEIPT",
            "CIRCA_ONBOARDING"
        ],
        "status": "ACTIVE",
        "revision": 2,
        "active": true
    },
    "record1": {
        "code": "EWASTE_BIN_ACCESSORY_ONLY",
        "name": {
            "en": "E-Waste Accessory Bin"
        },
        "collectionPointType": "E_WASTE_BIN",
        "operatingMode": "BIN",
        "receiptPolicyCode": "EWASTE_ASSUMED_RECEIPT",
        "verificationPolicyCode": "EWASTE_STANDARD_VERIFICATION",
        "evidencePolicyCode": "EWASTE_STANDARD_PHOTO",
        "impactProfileCode": "EWASTE_WEIGHT_ESTIMATE",
        "acceptanceRuleCodes": [
            "EWASTE_BIN_SMALL_ACCESSORIES",
            "EWASTE_BIN_REJECT_LOOSE_BATTERY"
        ],
        "serviceCapabilities": [
            "DROP_OFF"
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record2": {
        "code": "EWASTE_INSPECTION_STANDARD",
        "name": {
            "en": "E-Waste Inspection Point"
        },
        "collectionPointType": "E_WASTE_INSPECTION_POINT",
        "operatingMode": "INSPECTION",
        "receiptPolicyCode": "EWASTE_STANDARD_RECEIPT",
        "verificationPolicyCode": "EWASTE_STANDARD_VERIFICATION",
        "evidencePolicyCode": "EWASTE_STANDARD_PHOTO",
        "impactProfileCode": "EWASTE_WEIGHT_ESTIMATE",
        "acceptanceRuleCodes": [
            "EWASTE_INSPECTION_DEVICE"
        ],
        "serviceCapabilities": [
            "DROP_OFF",
            "INSPECTION",
            "RECEIPT"
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record3": {
        "code": "EWASTE_PROCESSOR_STANDARD",
        "name": {
            "en": "E-Waste Processor"
        },
        "collectionPointType": "E_WASTE_PROCESSOR",
        "operatingMode": "PROCESSING",
        "receiptPolicyCode": "EWASTE_STANDARD_RECEIPT",
        "verificationPolicyCode": "EWASTE_STANDARD_VERIFICATION",
        "evidencePolicyCode": "EWASTE_STANDARD_PHOTO",
        "impactProfileCode": "EWASTE_WEIGHT_ESTIMATE",
        "acceptanceRuleCodes": [
            "EWASTE_PROCESSOR_MIXED"
        ],
        "serviceCapabilities": [
            "PROCESSING",
            "RECYCLER_RECEIPT"
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "circa_CIRCA_MALL_DROP_OFF": {
        "code": "CIRCA_MALL_DROP_OFF",
        "name": {
            "en": "Circa Mall Drop-Off"
        },
        "collectionPointType": "E_WASTE_DROP_OFF",
        "receiptPolicyCode": "EWASTE_STANDARD_RECEIPT",
        "verificationPolicyCode": "EWASTE_STANDARD_VERIFICATION",
        "evidencePolicyCode": "EWASTE_STANDARD_PHOTO",
        "impactProfileCode": "CIRCA_VERIFIED_DEVICE_RECOVERY",
        "acceptanceRuleCodes": [
            "EWASTE_DROP_OFF_MOBILE_DEVICE",
            "CIRCA_DROP_OFF_SMART_HOME"
        ],
        "serviceCapabilities": [
            "DROP_OFF",
            "RECEIPT",
            "PUBLIC_COUNTER"
        ],
        "operatingMode": "DROP_OFF",
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    }
};
