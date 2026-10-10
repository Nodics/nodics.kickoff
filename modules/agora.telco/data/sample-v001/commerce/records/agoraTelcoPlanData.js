/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.telco/data/agoraTelcoPlanData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.telco
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    active: true,
    code: "agoraTelcoUnlimitedPostpaidPlan",
    tenant: "default",
    productCode: "agoraTelcoUnlimitedPostpaid",
    planType: "POSTPAID",
    allowanceCodes: ["agoraTelco50GB", "agoraTelcoVoiceUnlimited"],
    billingCycle: "MONTHLY",
    minimumTermMonths: 12,
    compatibleDeviceProfileCodes: ["SMARTPHONE_5G"],
    simTypes: ["SIM", "ESIM"],
    status: "ACTIVE",
    revision: 1,
    enterpriseCode: "default",
  },
  record1: {
    active: true,
    code: "agoraTelcoFlexiPrepaidPlan",
    tenant: "default",
    productCode: "agoraTelcoFlexiPrepaid",
    planType: "PREPAID",
    allowanceCodes: ["agoraTelco50GB"],
    compatibleDeviceProfileCodes: ["SMARTPHONE_5G"],
    simTypes: ["SIM", "ESIM"],
    status: "ACTIVE",
    revision: 1,
    enterpriseCode: "default",
  },
});
