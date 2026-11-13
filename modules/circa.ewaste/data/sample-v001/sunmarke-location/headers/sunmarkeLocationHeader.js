/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module circa.ewaste/data/sample-v001/sunmarke-location/headers/sunmarkeLocationHeader
 * @description Routes the optional sunmarke-location sample through existing generated owner saveAll dispatch; selection does not execute an import.
 * @owner circa.ewaste
 * @layer data
 * @override Keep reference values in this project; Profile, Location and Waste retain validation and runtime authority.
 */
'use strict';

// User-requested local Sunmarke School collection-centre registration.
module.exports = {
  "locationCore": {
    "sunmarkeLocationData": {
      "options": {
        "enabled": true,
        "schemaName": "location",
        "operation": "saveAll",
        "dataFilePrefix": "sunmarkeLocationData"
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
