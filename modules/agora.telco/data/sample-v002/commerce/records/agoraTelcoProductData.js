/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.telco/data/agoraTelcoProductData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.telco
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraTelcoUnlimitedPostpaid",
    tenant: "default",
    name: "Unlimited Postpaid Plan",
    status: "ACTIVE",
    catalogVersion: "agoraTelcoStaged",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraTelcoFlexiPrepaid",
    tenant: "default",
    name: "Flexi Prepaid Plan",
    status: "ACTIVE",
    catalogVersion: "agoraTelcoStaged",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
