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
