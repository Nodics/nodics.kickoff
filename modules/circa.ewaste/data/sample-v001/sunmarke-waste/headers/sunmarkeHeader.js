'use strict';

// User-requested local Sunmarke School collection-centre registration.
module.exports = {
  "wasteCollection": {
    "sunmarkeWasteCollectionPointData": {
      "options": {
        "enabled": true,
        "schemaName": "wasteCollectionPoint",
        "operation": "saveAll",
        "dataFilePrefix": "sunmarkeWasteCollectionPointData"
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
