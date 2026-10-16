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
        "code": "EWASTE_ITEM_COUNT",
        "name": {
            "en": "E-Waste Item Count"
        },
        "formulaType": "QUANTITY_FACTOR",
        "metricRules": [
            {
                "metricCode": "EWASTE_ITEM_COUNT",
                "factor": 1,
                "unitOfMeasure": "EACH"
            }
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record1": {
        "code": "EWASTE_WEIGHT_ESTIMATE",
        "name": {
            "en": "E-Waste Weight Estimate"
        },
        "formulaType": "WEIGHT_FACTOR",
        "metricRules": [
            {
                "metricCode": "EWASTE_WEIGHT_KG",
                "factor": 1,
                "unitOfMeasure": "KG"
            },
            {
                "metricCode": "DIVERTED_FROM_LANDFILL_KG",
                "factor": 1,
                "unitOfMeasure": "KG"
            }
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record2": {
        "code": "EWASTE_BATTERY_COUNT",
        "name": {
            "en": "E-Waste Battery Count"
        },
        "formulaType": "QUANTITY_FACTOR",
        "metricRules": [
            {
                "metricCode": "BATTERY_ITEM_COUNT",
                "factor": 1,
                "unitOfMeasure": "EACH"
            }
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record3": {
        "code": "EWASTE_ENVIRONMENTAL_ESTIMATE",
        "name": {
            "en": "E-Waste environmental estimate"
        },
        "formulaType": "EXTERNAL_PROVIDER",
        "metadata": {
            "publicClaimAllowed": false,
            "assessmentUse": "ADVISORY_SUBMISSION_GATE"
        },
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "circa_CIRCA_EWASTE_ESTIMATE": {
        "code": "CIRCA_EWASTE_ESTIMATE",
        "name": {
            "en": "Circa illustrative impact estimate"
        },
        "formulaType": "EXTERNAL_PROVIDER",
        "status": "ACTIVE",
        "revision": 1,
        "metadata": {
            "sample": true,
            "publicClaimAllowed": false
        },
        "active": true
    },
    "circa_CIRCA_VERIFIED_DEVICE_RECOVERY": {
        "code": "CIRCA_VERIFIED_DEVICE_RECOVERY",
        "name": {
            "en": "Kickoff Verified Device Recovery"
        },
        "formulaType": "WEIGHT_FACTOR",
        "metricRules": [
            {
                "metricCode": "EWASTE_WEIGHT_KG",
                "factor": 1,
                "unitOfMeasure": "KG"
            },
            {
                "metricCode": "RECOVERABLE_MATERIAL_ESTIMATE_KG",
                "factor": 0.72,
                "unitOfMeasure": "KG"
            }
        ],
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    }
};
