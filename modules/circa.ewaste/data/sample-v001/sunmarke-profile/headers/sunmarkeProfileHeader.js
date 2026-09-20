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
