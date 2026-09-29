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
