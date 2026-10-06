/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.electronics/data/agoraElectronicsProductVariantData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.electronics
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraElectronicsNovaPhone256",
    tenant: "default",
    productCode: "agoraElectronicsNovaPhone",
    sku: "AGORA-EL-NOVA-256",
    attributes: {
      storage: "256GB",
      colorCode: "black",
    },
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraElectronicsAirLaptop1TB",
    tenant: "default",
    productCode: "agoraElectronicsAirLaptop",
    sku: "AGORA-EL-AIR-1TB",
    attributes: {
      storage: "1TB",
      colorCode: "silver",
    },
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
