/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Complete explicitly selected Circa demo policy records. @owner circa.ewaste @layer data */
module.exports = {
    "record0": {
        "code": "EWASTE_DROP_OFF_MOBILE_DEVICE",
        "collectionPointType": "E_WASTE_DROP_OFF",
        "categoryCode": "MOBILE_DEVICE",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record1": {
        "code": "EWASTE_DROP_OFF_LAPTOP",
        "collectionPointType": "E_WASTE_DROP_OFF",
        "categoryCode": "LAPTOP_COMPUTER",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record2": {
        "code": "EWASTE_DROP_OFF_TABLET",
        "collectionPointType": "E_WASTE_DROP_OFF",
        "categoryCode": "TABLET",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record3": {
        "code": "EWASTE_DROP_OFF_CABLE_CHARGER",
        "collectionPointType": "E_WASTE_DROP_OFF",
        "categoryCode": "CABLE_CHARGER",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record4": {
        "code": "EWASTE_BIN_SMALL_ACCESSORIES",
        "collectionPointType": "E_WASTE_BIN",
        "categoryCode": "CABLE_CHARGER",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": false,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record5": {
        "code": "EWASTE_INSPECTION_DEVICE",
        "collectionPointType": "E_WASTE_INSPECTION_POINT",
        "categoryCode": "MOBILE_DEVICE",
        "decision": "ACCEPT",
        "requiresPreApproval": true,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record6": {
        "code": "EWASTE_PROCESSOR_MIXED",
        "collectionPointType": "E_WASTE_PROCESSOR",
        "categoryCode": "MIXED_ELECTRONICS",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "record7": {
        "code": "EWASTE_BIN_REJECT_LOOSE_BATTERY",
        "collectionPointType": "E_WASTE_BIN",
        "categoryCode": "LITHIUM_BATTERY",
        "decision": "REJECT",
        "requiresPreApproval": true,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    },
    "circa_CIRCA_DROP_OFF_SMART_HOME": {
        "code": "CIRCA_DROP_OFF_SMART_HOME",
        "collectionPointType": "E_WASTE_DROP_OFF",
        "categoryCode": "SMART_HOME_DEVICE",
        "decision": "ACCEPT",
        "requiresPreApproval": false,
        "requiresReceipt": true,
        "status": "ACTIVE",
        "revision": 1,
        "active": true
    }
};
