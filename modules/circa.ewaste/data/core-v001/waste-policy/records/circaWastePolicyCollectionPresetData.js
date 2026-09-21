/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/core-v001/waste-policy/records/circaWastePolicyCollectionPresetData @description Circa collection preset extension and override for Waste. @layer data @owner circa.ewaste */
module.exports = {
    record0: {
        code: 'EWASTE_DROP_OFF_STANDARD',
        name: { en: 'Circa E-Waste Drop-Off' },
        collectionPointType: 'E_WASTE_DROP_OFF',
        receiptPolicyCode: 'EWASTE_STANDARD_RECEIPT',
        verificationPolicyCode: 'EWASTE_STANDARD_VERIFICATION',
        evidencePolicyCode: 'EWASTE_STANDARD_PHOTO',
        impactProfileCode: 'CIRCA_VERIFIED_DEVICE_RECOVERY',
        acceptanceRuleCodes: ['EWASTE_DROP_OFF_MOBILE_DEVICE', 'EWASTE_DROP_OFF_LAPTOP', 'CIRCA_DROP_OFF_SMART_HOME'],
        serviceCapabilities: ['DROP_OFF', 'RECEIPT', 'CIRCA_ONBOARDING'],
        operatingMode: 'DROP_OFF',
        status: 'ACTIVE',
        revision: 2,
        active: true
    },
    record1: {
        code: 'CIRCA_MALL_DROP_OFF',
        name: { en: 'Circa Mall Drop-Off' },
        collectionPointType: 'E_WASTE_DROP_OFF',
        receiptPolicyCode: 'EWASTE_STANDARD_RECEIPT',
        verificationPolicyCode: 'EWASTE_STANDARD_VERIFICATION',
        evidencePolicyCode: 'EWASTE_STANDARD_PHOTO',
        impactProfileCode: 'CIRCA_VERIFIED_DEVICE_RECOVERY',
        acceptanceRuleCodes: ['EWASTE_DROP_OFF_MOBILE_DEVICE', 'CIRCA_DROP_OFF_SMART_HOME'],
        serviceCapabilities: ['DROP_OFF', 'RECEIPT', 'PUBLIC_COUNTER'],
        operatingMode: 'DROP_OFF',
        status: 'ACTIVE',
        revision: 1,
        active: true
    }
};
