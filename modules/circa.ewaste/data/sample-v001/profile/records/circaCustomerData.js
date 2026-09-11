/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/profile/circaCustomerData @description Supplies explicit local Circa sample customer records. @layer data @owner circa.ewaste */
module.exports = {
    "record0": {
        "code": "circa-customer",
        "loginId": "customer@circa.local",
        "name": {
            "firstName": "Circa",
            "lastName": "Customer"
        },
        "password": {
            "password": "CircaDemo!2026",
            "confirmPassword": "CircaDemo!2026",
            "loginId": "customer@circa.local"
        },
        "metadata": {
            "sample": true,
            "applicationCode": "CIRCA_EWASTE"
        },
        "active": true
    },
    "record1": {
        "code": "circa-seller",
        "loginId": "seller@circa.local",
        "name": {
            "firstName": "Maya",
            "lastName": "Green"
        },
        "password": {
            "password": "CircaDemo!2026",
            "confirmPassword": "CircaDemo!2026",
            "loginId": "seller@circa.local"
        },
        "metadata": {
            "sample": true,
            "applicationCode": "CIRCA_EWASTE"
        },
        "active": true
    },
    "record2": {
        "code": "circa-recipient",
        "loginId": "recipient@circa.local",
        "name": {
            "firstName": "Sam",
            "lastName": "Circa"
        },
        "password": {
            "password": "CircaDemo!2026",
            "confirmPassword": "CircaDemo!2026",
            "loginId": "recipient@circa.local"
        },
        "metadata": {
            "sample": true,
            "applicationCode": "CIRCA_EWASTE"
        },
        "active": true
    }
};
