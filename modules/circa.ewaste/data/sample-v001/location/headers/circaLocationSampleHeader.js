/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/location/header @description Imports the Circa sample section through owning generated services. @layer data-header @owner circa.ewaste */
module.exports = {
    "locationCore": {
        "circaLocationData": {
            "options": {
                "enabled": true,
                "schemaName": "location",
                "operation": "saveAll",
                "dataFilePrefix": "circaLocationData"
            },
            "query": {
                "code": "$code"
            }
        }
    }
};
