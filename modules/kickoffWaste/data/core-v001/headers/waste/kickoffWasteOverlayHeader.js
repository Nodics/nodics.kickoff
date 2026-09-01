/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffWaste/data/core-v001/headers/waste/kickoffWasteOverlayHeader @description Imports Kickoff-owned Waste overlay records into nodics.waste schemas. @layer data-header @owner kickoffWaste */
const entry = (schemaName, dataFilePrefix) => ({
    options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix },
    query: { code: '$code' }
});

module.exports = {
    wasteMaterial: {
        kickoffWasteCategoryData: entry('wasteCategory', 'kickoffWasteCategoryData')
    },
    wasteCollection: {
        kickoffWasteCollectionPresetData: entry('wasteCollectionPreset', 'kickoffWasteCollectionPresetData'),
        kickoffWasteAcceptanceRuleData: entry('wasteCollectionAcceptanceRule', 'kickoffWasteAcceptanceRuleData')
    },
    wasteImpact: {
        kickoffWasteImpactProfileData: entry('wasteImpactProfile', 'kickoffWasteImpactProfileData')
    }
};
