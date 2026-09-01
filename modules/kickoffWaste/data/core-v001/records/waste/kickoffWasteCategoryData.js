/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffWaste/data/core-v001/records/waste/kickoffWasteCategoryData @description Kickoff project category extension and override for Waste. @layer data @owner kickoffWaste */
module.exports = {
    record0: {
        code: 'MOBILE_DEVICE',
        familyCode: 'ELECTRONICS',
        name: { en: 'Kickoff Mobile Device' },
        itemTypeCodes: ['MOBILE_PHONE', 'SMARTPHONE', 'FEATURE_PHONE'],
        materialTypeCodes: ['LITHIUM_BATTERY', 'CIRCUIT_BOARD', 'PLASTIC_CASING', 'GLASS_SCREEN'],
        evidencePolicyCode: 'EWASTE_STANDARD_PHOTO',
        impactProfileCode: 'KICKOFF_VERIFIED_DEVICE_RECOVERY',
        hazardFlags: [],
        status: 'ACTIVE',
        revision: 2,
        active: true
    },
    record1: {
        code: 'SMART_HOME_DEVICE',
        familyCode: 'ELECTRONICS',
        name: { en: 'Smart Home Device' },
        itemTypeCodes: ['UNKNOWN_ELECTRONIC_ITEM'],
        materialTypeCodes: ['CIRCUIT_BOARD', 'COPPER', 'PLASTIC_CASING'],
        evidencePolicyCode: 'EWASTE_STANDARD_PHOTO',
        impactProfileCode: 'KICKOFF_VERIFIED_DEVICE_RECOVERY',
        hazardFlags: [],
        status: 'ACTIVE',
        revision: 1,
        active: true
    }
};
