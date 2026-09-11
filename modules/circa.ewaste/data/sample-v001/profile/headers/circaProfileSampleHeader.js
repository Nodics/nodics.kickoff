/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/profile/header @description Imports the Circa sample section through owning generated services. @layer data-header @owner circa.ewaste */
module.exports = {
    "profile": {
        "circaCustomerData": {
            "options": {
                "enabled": true,
                "schemaName": "customer",
                "operation": "signUpAll",
                "dataFilePrefix": "circaCustomerData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaAddressData": {
            "options": {
                "enabled": true,
                "schemaName": "address",
                "operation": "saveAll",
                "dataFilePrefix": "circaAddressData"
            },
            "query": {
                "code": "$code"
            }
        }
    }
};
