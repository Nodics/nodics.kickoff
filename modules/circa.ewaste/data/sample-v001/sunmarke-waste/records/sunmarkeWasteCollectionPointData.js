/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module circa.ewaste/data/sample-v001/sunmarke-waste/records/sunmarkeWasteCollectionPointData
 * @description Declares the Waste-owned Sunmarke collection point and its cross-owner references. Import only through the governed explicit sample release.
 * @owner circa.ewaste
 * @layer data
 * @override Keep reference values in this project; Profile, Location and Waste retain validation and runtime authority.
 */
'use strict';

// User-requested local Sunmarke School collection-centre registration.
module.exports = {
  "record0": {
    "code": "cc-dxb-sunmarke-jvt",
    "name": {
      "en": "Sunmarke School, JVT"
    },
    "collectionPointType": "COLLECTION_CENTRE",
    "locationRef": {
      "module": "locationCore",
      "schema": "location",
      "code": "cc-dxb-sunmarke-jvt-location"
    },
    "operatorEnterpriseRef": {
      "module": "profile",
      "schema": "enterprise",
      "code": "default"
    },
    "operatingStatus": "ACTIVE",
    "publicVisibility": "PUBLIC",
    "status": "ACTIVE",
    "revision": 1,
    "acceptanceSummary": {
      "en": "Electronic waste collection."
    },
    "metadata": {
      "sample": true,
      "acceptedCategoryCodes": [
        "MOBILE_DEVICE",
        "LAPTOP_COMPUTER",
        "TABLET",
        "DESKTOP_COMPUTER",
        "MONITOR_DISPLAY",
        "CABLE_CHARGER",
        "SMALL_APPLIANCE",
        "LITHIUM_BATTERY",
        "POWER_BANK",
        "MIXED_ELECTRONICS",
        "CIRCA_MIX",
        "CIRCA_LARGE_HOUSEHOLD_APPLIANCES",
        "CIRCA_SMALL_HOUSEHOLD_APPLIANCES",
        "CIRCA_IT_EQUIPMENT_INCLUDING_MONITORS",
        "CIRCA_CONSUMER_ELECTRONICS_INCLUDING_TELEVISIONS",
        "CIRCA_TOYS",
        "CIRCA_TOOLS",
        "CIRCA_MONITORING_AND_CONTROL_INSTRUMENTS",
        "CIRCA_AUTOMATIC_DISPENSERS"
      ],
      "sourceUrl": "https://maps.app.goo.gl/85vtcWerfuqJxd9LA",
      "registrationBasis": "User-requested local collection centre"
    },
    "active": true
  }
};
