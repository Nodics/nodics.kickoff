/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.telco/data/agoraTelcoInventoryBalanceData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.telco
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraTelcoWarehouse:AGORA-TEL-POST-ESIM",
    tenant: "default",
    warehouseCode: "agoraTelcoWarehouse",
    sku: "AGORA-TEL-POST-ESIM",
    onHand: "20",
    reserved: "0",
    allocated: "0",
    available: "20",
    priority: 1,
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraTelcoWarehouse:AGORA-TEL-PRE-SIM",
    tenant: "default",
    warehouseCode: "agoraTelcoWarehouse",
    sku: "AGORA-TEL-PRE-SIM",
    onHand: "20",
    reserved: "0",
    allocated: "0",
    available: "20",
    priority: 1,
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
