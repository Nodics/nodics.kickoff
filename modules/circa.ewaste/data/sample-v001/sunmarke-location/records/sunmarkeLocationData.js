/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module circa.ewaste/data/sample-v001/sunmarke-location/records/sunmarkeLocationData
 * @description Declares the Sunmarke collection-centre location and its Profile address and Waste reference. Import only through the governed explicit sample release.
 * @owner circa.ewaste
 * @layer data
 * @override Keep reference values in this project; Profile, Location and Waste retain validation and runtime authority.
 */
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
