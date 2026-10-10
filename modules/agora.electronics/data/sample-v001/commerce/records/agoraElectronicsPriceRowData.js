/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.electronics/data/agoraElectronicsPriceRowData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.electronics
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraElectronicsNovaPhonePrice",
    tenant: "default",
    priceBookCode: "agoraElectronicsRetailAed",
    productCode: "agoraElectronicsNovaPhone",
    unitAmount: "2999.00",
    currency: "AED",
    minQuantity: "1",
    validFrom: "2026-01-01T00:00:00.000Z",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraElectronicsAirLaptopPrice",
    tenant: "default",
    priceBookCode: "agoraElectronicsRetailAed",
    productCode: "agoraElectronicsAirLaptop",
    unitAmount: "5499.00",
    currency: "AED",
    minQuantity: "1",
    validFrom: "2026-01-01T00:00:00.000Z",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
