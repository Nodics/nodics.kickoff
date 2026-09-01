/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffWaste/data/core-v001/records/waste/kickoffWasteImpactProfileData @description Kickoff project impact-profile extension for Waste. @layer data @owner kickoffWaste */
module.exports = {
    record0: {
        code: 'KICKOFF_VERIFIED_DEVICE_RECOVERY',
        name: { en: 'Kickoff Verified Device Recovery' },
        formulaType: 'WEIGHT_FACTOR',
        metricRules: [
            { metricCode: 'EWASTE_WEIGHT_KG', factor: 1, unitOfMeasure: 'KG' },
            { metricCode: 'RECOVERABLE_MATERIAL_ESTIMATE_KG', factor: 0.72, unitOfMeasure: 'KG' }
        ],
        status: 'ACTIVE',
        revision: 1,
        active: true
    }
};
