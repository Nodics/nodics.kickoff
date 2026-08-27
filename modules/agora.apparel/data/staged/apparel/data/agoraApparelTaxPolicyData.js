/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/staged/apparel/data/agoraApparelTaxPolicyData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

/** @description Agora active tax policy required for checkout calculation in the local Commerce journey. */
module.exports = {
  record0: {
    code: 'agoraAeVatPolicy',
    tenant: 'default',
    jurisdiction: 'AE',
    taxCode: 'VAT',
    rate: '0.05',
    status: 'ACTIVE',
    revision: 1,
    active: true
  }
};
