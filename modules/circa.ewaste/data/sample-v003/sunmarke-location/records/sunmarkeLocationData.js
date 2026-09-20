'use strict';

// User-requested local Sunmarke School collection-centre registration.
module.exports = {
  "record0": {
    "code": "cc-dxb-sunmarke-jvt-location",
    "name": {
      "en": "Sunmarke School, JVT"
    },
    "categoryCode": "WASTE_COLLECTION",
    "typeCode": "COLLECTION_CENTRE",
    "status": "ACTIVE",
    "latitude": 25.0469679,
    "longitude": 55.193292,
    "addressRef": {
      "module": "profile",
      "schema": "address",
      "code": "cc-dxb-sunmarke-jvt-address"
    },
    "sourceRef": {
      "module": "wasteCollection",
      "schema": "wasteCollectionPoint",
      "code": "cc-dxb-sunmarke-jvt"
    },
    "visibility": {
      "public": true,
      "access": "PUBLIC"
    },
    "revision": 1,
    "presentation": {
      "sample": true
    },
    "active": true
  }
};
