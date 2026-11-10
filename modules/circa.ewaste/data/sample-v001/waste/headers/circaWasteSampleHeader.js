/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Fresh-install sample transactions; references belong to the required Circa policy successor. @owner circa.ewaste @layer data-header */
module.exports = {
    "wasteCollection": {
        "circaWasteCollectionPointData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteCollectionPoint",
                "operation": "saveAll",
                "dataFilePrefix": "circaWasteCollectionPointData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "wasteSubmission": {
        "circaWasteSubmissionData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteSubmission",
                "operation": "saveAll",
                "dataFilePrefix": "circaWasteSubmissionData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaWasteEvidenceData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteEvidence",
                "operation": "saveAll",
                "dataFilePrefix": "circaWasteEvidenceData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "wasteVerification": {
        "circaWasteVerificationData": {
            "options": {
                "enabled": true,
                "schemaName": "wasteVerification",
                "operation": "saveAll",
                "dataFilePrefix": "circaWasteVerificationData"
            },
            "query": {
                "code": "$code"
            }
        }
    }
};
