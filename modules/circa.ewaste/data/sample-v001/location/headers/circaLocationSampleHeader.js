/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v001/location/headers/circaLocationSampleHeader.js
 * @description Supplies the unified Circa customer demonstration dataset through canonical owner imports.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor release for customer-specific sample data; preserve installed transactions.
 */
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
