/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelPriceBookData.js
 * @description Defines Agora Apparel retail price books aligned with the shared storefront currency.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

module.exports = Object.freeze({
  "record0": {
    "code": "agoraApparelRetailUsd",
    "tenant": "default",
    "currency": "USD",
    "status": "ACTIVE",
    "validFrom": "2026-01-01T00:00:00.000Z",
    "revision": 1,
    "active": true
  }
});
