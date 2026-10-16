/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Circa immutable forward contribution using nImport source-key inheritance. @owner circa.ewaste @layer data-header */
module.exports = {
    "wasteMaterial": {
        "eWasteCategoryData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteCategory",
                "operation": "saveAll",
                "dataFilePrefix": "eWasteCategoryData"
            },
            "query": {
                "code": "$code"
            }
        },
        "eWasteItemTypeData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteItemType",
                "operation": "saveAll",
                "dataFilePrefix": "eWasteItemTypeData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "wasteCollection": {
        "eWasteCollectionPresetData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteCollectionPreset",
                "operation": "saveAll",
                "dataFilePrefix": "eWasteCollectionPresetData"
            },
            "query": {
                "code": "$code"
            }
        },
        "eWasteAcceptanceRuleData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteCollectionAcceptanceRule",
                "operation": "saveAll",
                "dataFilePrefix": "eWasteAcceptanceRuleData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "wasteImpact": {
        "eWasteImpactProfileData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteImpactProfile",
                "operation": "saveAll",
                "dataFilePrefix": "eWasteImpactProfileData"
            },
            "query": {
                "code": "$code"
            }
        }
    }
};
