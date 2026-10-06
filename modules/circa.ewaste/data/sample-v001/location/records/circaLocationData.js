/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v001/location/records/circaLocationData.js
 * @description Supplies the unified Circa customer demonstration dataset through canonical owner imports.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor release for customer-specific sample data; preserve installed transactions.
 */
module.exports = {
  "record0": {
    "code": "cc-dxb-01-location",
    "name": {
      "en": "Circa Green Hub Al Quoz"
    },
    "categoryCode": "WASTE_COLLECTION",
    "typeCode": "COLLECTION_CENTRE",
    "status": "ACTIVE",
    "latitude": 25.1358,
    "longitude": 55.2274,
    "addressRef": {
      "module": "profile",
      "schema": "address",
      "code": "cc-dxb-01-address"
    },
    "sourceRef": {
      "module": "wasteCollection",
      "schema": "wasteCollectionPoint",
      "code": "cc-dxb-01"
    },
    "visibility": {
      "public": true,
      "access": "PUBLIC"
    },
    "openingHours": {
      "label": "Daily 09:00–20:00"
    },
    "revision": 1,
    "presentation": {
      "sample": true
    },
    "active": true
  },
  "record1": {
    "code": "cc-dxb-02-location",
    "name": {
      "en": "Emirates Circular Drop Box"
    },
    "categoryCode": "WASTE_COLLECTION",
    "typeCode": "COLLECTION_CENTRE",
    "status": "ACTIVE",
    "latitude": 25.0470694,
    "longitude": 55.243265,
    "addressRef": {
      "module": "profile",
      "schema": "address",
      "code": "cc-dxb-02-address"
    },
    "sourceRef": {
      "module": "wasteCollection",
      "schema": "wasteCollectionPoint",
      "code": "cc-dxb-02"
    },
    "visibility": {
      "public": true,
      "access": "PUBLIC"
    },
    "openingHours": {
      "label": "Daily 09:00–20:00"
    },
    "revision": 1,
    "presentation": {
      "sample": true
    },
    "active": true
  },
  "record2": {
    "code": "cc-dxb-03-location",
    "name": {
      "en": "TechCycle Collection Desk"
    },
    "categoryCode": "WASTE_COLLECTION",
    "typeCode": "COLLECTION_CENTRE",
    "status": "ACTIVE",
    "latitude": 25.2515,
    "longitude": 55.3194,
    "addressRef": {
      "module": "profile",
      "schema": "address",
      "code": "cc-dxb-03-address"
    },
    "sourceRef": {
      "module": "wasteCollection",
      "schema": "wasteCollectionPoint",
      "code": "cc-dxb-03"
    },
    "visibility": {
      "public": true,
      "access": "PUBLIC"
    },
    "openingHours": {
      "label": "Daily 09:00–20:00"
    },
    "revision": 1,
    "presentation": {
      "sample": true
    },
    "active": true
  },
  "record3": {
    "code": "greenperks-cafe-location",
    "name": {
      "en": "GreenPerks Hills Cafe"
    },
    "categoryCode": "COMMERCE",
    "typeCode": "STORE",
    "status": "ACTIVE",
    "latitude": 25.103718,
    "longitude": 55.2389015,
    "addressRef": {
      "module": "profile",
      "schema": "address",
      "code": "greenperks-cafe-address"
    },
    "sourceRef": {
      "module": "store",
      "schema": "store",
      "code": "greenperks-cafe"
    },
    "visibility": {
      "public": true,
      "access": "PUBLIC"
    },
    "revision": 1,
    "presentation": {
      "sample": true,
      "description": "Fictional demonstration outlet; not affiliated with the real venue at this test location."
    },
    "active": true
  },
  "record4": {
    "code": "greenperks-bistro-location",
    "name": {
      "en": "GreenPerks Hills Bistro"
    },
    "categoryCode": "COMMERCE",
    "typeCode": "STORE",
    "status": "ACTIVE",
    "latitude": 25.107142,
    "longitude": 55.2406982,
    "addressRef": {
      "module": "profile",
      "schema": "address",
      "code": "greenperks-bistro-address"
    },
    "sourceRef": {
      "module": "store",
      "schema": "store",
      "code": "greenperks-bistro"
    },
    "visibility": {
      "public": true,
      "access": "PUBLIC"
    },
    "revision": 1,
    "presentation": {
      "sample": true,
      "description": "Fictional demonstration outlet; not affiliated with the real venue at this test location."
    },
    "active": true
  }
};
