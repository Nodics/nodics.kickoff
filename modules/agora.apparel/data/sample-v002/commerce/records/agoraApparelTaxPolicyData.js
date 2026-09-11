/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.apparel/data/agoraApparelTaxPolicyData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.apparel
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraAeVatPolicy",
    tenant: "default",
    jurisdiction: "AE",
    taxCode: "VAT",
    rate: "0.05",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
