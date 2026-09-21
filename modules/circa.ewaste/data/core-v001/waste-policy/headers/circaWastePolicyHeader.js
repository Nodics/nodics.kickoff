/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/core-v001/waste-policy/headers/circaWastePolicyHeader @description Imports Circa-owned Waste policy records into nodics.waste schemas. @layer data-header @owner circa.ewaste */
const entry = (schemaName, dataFilePrefix) => ({
    options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix },
    query: { code: '$code' }
});

module.exports = {
    wasteMaterial: {
        circaWastePolicyCategoryData: entry('wasteCategory', 'circaWastePolicyCategoryData')
    },
    wasteCollection: {
        circaWastePolicyCollectionPresetData: entry('wasteCollectionPreset', 'circaWastePolicyCollectionPresetData'),
        circaWastePolicyAcceptanceRuleData: entry('wasteCollectionAcceptanceRule', 'circaWastePolicyAcceptanceRuleData')
    },
    wasteImpact: {
        circaWastePolicyImpactProfileData: entry('wasteImpactProfile', 'circaWastePolicyImpactProfileData')
    }
};
