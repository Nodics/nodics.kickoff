/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Circa immutable forward contribution using nImport source-key inheritance. @owner circa.ewaste @layer data */
module.exports = {
    "record0": {
        "code": "EWASTE_DROP_OFF_STANDARD",
        "name": {
            "en": "Circa E-Waste Drop-Off"
        },
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
        "revision": 2
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
