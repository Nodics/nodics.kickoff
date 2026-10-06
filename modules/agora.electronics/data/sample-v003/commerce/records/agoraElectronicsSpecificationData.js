/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.electronics/data/agoraElectronicsSpecificationData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.electronics
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    active: true,
    code: "agoraElectronicsNovaPhoneSpec",
    tenant: "default",
    productCode: "agoraElectronicsNovaPhone",
    brandCode: "Nova",
    modelNumber: "N5G-256",
    specificationFamilyCode: "SMARTPHONE",
    specifications: {
      storage: "256GB",
      memory: "12GB",
      network: ["5G", "4G"],
      display: "6.7in",
    },
    compatibilityProfileCodes: ["agoraUsbC"],
    warrantyProfileCode: "agoraElectronicsStandardWarranty",
    status: "ACTIVE",
    revision: 1,
    enterpriseCode: "default",
  },
  record1: {
    active: true,
    code: "agoraElectronicsAirLaptopSpec",
    tenant: "default",
    productCode: "agoraElectronicsAirLaptop",
    brandCode: "Nova",
    modelNumber: "AIR-14",
    specificationFamilyCode: "LAPTOP",
    specifications: {
      storage: "1TB",
      memory: "16GB",
      display: "14in",
    },
    compatibilityProfileCodes: ["agoraUsbC"],
    warrantyProfileCode: "agoraElectronicsStandardWarranty",
    status: "ACTIVE",
    revision: 1,
    enterpriseCode: "default",
  },
});
