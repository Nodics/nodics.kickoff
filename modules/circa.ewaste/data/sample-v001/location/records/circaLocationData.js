/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/location/circaLocationData @description Supplies explicit local Circa sample location records. @layer data @owner circa.ewaste */
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
            "label": "Daily 09:00\u201320:00"
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
        "latitude": 25.1067,
        "longitude": 55.1713,
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
            "label": "Daily 09:00\u201320:00"
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
            "label": "Daily 09:00\u201320:00"
        },
        "revision": 1,
        "presentation": {
            "sample": true
        },
        "active": true
    }
};
