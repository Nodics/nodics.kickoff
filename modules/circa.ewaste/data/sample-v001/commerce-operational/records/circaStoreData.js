/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v001/commerce-operational/records/circaStoreData.js
 * @description Supplies the unified Circa customer demonstration dataset through canonical owner imports.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor release for customer-specific sample data; preserve installed transactions.
 */
module.exports = {
  "record0": {
    "tenant": "default",
    "enterpriseCode": "default",
    "revision": 1,
    "active": true,
    "code": "circaMainStore",
    "name": "Circa eWaste",
    "status": "ACTIVE",
    "defaultCurrency": "POINTS",
    "defaultLocale": "en",
    "timezone": "Asia/Dubai"
  },
  "record1": {
    "tenant": "default",
    "enterpriseCode": "GREENPERKS_RETAIL",
    "revision": 1,
    "active": true,
    "code": "greenperks-cafe",
    "name": "GreenPerks Hills Cafe",
    "status": "ACTIVE",
    "defaultCurrency": "AED",
    "defaultLocale": "en",
    "timezone": "Asia/Dubai",
    "primaryLocationRef": {
      "moduleName": "locationCore",
      "schemaName": "location",
      "code": "greenperks-cafe-location"
    },
    "enterpriseRef": {
      "moduleName": "profile",
      "schemaName": "enterprise",
      "code": "GREENPERKS_RETAIL"
    }
  },
  "record2": {
    "tenant": "default",
    "enterpriseCode": "GREENPERKS_RETAIL",
    "revision": 1,
    "active": true,
    "code": "greenperks-bistro",
    "name": "GreenPerks Hills Bistro",
    "status": "ACTIVE",
    "defaultCurrency": "AED",
    "defaultLocale": "en",
    "timezone": "Asia/Dubai",
    "primaryLocationRef": {
      "moduleName": "locationCore",
      "schemaName": "location",
      "code": "greenperks-bistro-location"
    },
    "enterpriseRef": {
      "moduleName": "profile",
      "schemaName": "enterprise",
      "code": "GREENPERKS_RETAIL"
    }
  }
};
