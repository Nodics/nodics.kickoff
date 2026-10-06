/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.telco/data/agoraTelcoProductVariantData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.telco
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraTelcoUnlimitedPostpaidEsim",
    tenant: "default",
    productCode: "agoraTelcoUnlimitedPostpaid",
    sku: "AGORA-TEL-POST-ESIM",
    attributes: {
      simType: "ESIM",
    },
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraTelcoFlexiPrepaidSim",
    tenant: "default",
    productCode: "agoraTelcoFlexiPrepaid",
    sku: "AGORA-TEL-PRE-SIM",
    attributes: {
      simType: "SIM",
    },
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
