/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module circa.ewaste/data/sample-v001/sunmarke-profile/headers/sunmarkeProfileHeader
 * @description Routes the optional sunmarke-profile sample through existing generated owner saveAll dispatch; selection does not execute an import.
 * @owner circa.ewaste
 * @layer data
 * @override Keep reference values in this project; Profile, Location and Waste retain validation and runtime authority.
 */
'use strict';

// User-requested local Sunmarke School collection-centre registration.
module.exports = {
  "profile": {
    "sunmarkeAddressData": {
      "options": {
        "enabled": true,
        "schemaName": "address",
        "operation": "saveAll",
        "dataFilePrefix": "sunmarkeAddressData"
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
