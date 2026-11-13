/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module circa.ewaste/data/sample-v001/sunmarke-profile/records/sunmarkeAddressData
 * @description Declares the Profile-owned address reference for the optional Sunmarke collection centre. Import only through the governed explicit sample release.
 * @owner circa.ewaste
 * @layer data
 * @override Keep reference values in this project; Profile, Location and Waste retain validation and runtime authority.
 */
'use strict';

// User-requested local Sunmarke School collection-centre registration.
module.exports = {
  "record0": {
    "code": "cc-dxb-sunmarke-jvt-address",
    "type": "BUSINESS",
    "isPrimery": true,
    "addressLine1": "Sunmarke School, District 5 Block C, Jumeirah Village Triangle",
    "city": "Dubai",
    "state": "Dubai",
    "countryCode": "AE",
    "active": true,
    "postalCode": "00000"
  }
};
