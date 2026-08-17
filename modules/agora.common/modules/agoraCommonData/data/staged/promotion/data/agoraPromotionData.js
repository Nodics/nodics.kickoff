/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/promotion/data/agoraPromotionData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description Agora sample promotion rules consumed by Commerce cart calculation. */
module.exports = {
  record0: {
    code: 'agoraWelcome10',
    tenant: 'default',
    name: 'Agora Welcome 10',
    status: 'ACTIVE',
    priority: 100,
    conditions: {
      minimumSubtotal: '100.00',
      customerGroups: ['customerUserGroup', 'anonymousCustomerGroup']
    },
    actions: {
      discountAmount: '10.00',
      reasonCode: 'AGORA_WELCOME_10',
      message: 'Save USD 10 when your cart reaches USD 100.',
      exclusionGroup: 'cartSubtotalDiscount'
    },
    validFrom: '2026-01-01T00:00:00.000Z',
    validTo: '2027-01-01T00:00:00.000Z',
    revision: 0
  },
  record1: {
    code: 'agoraBagsBundle15',
    tenant: 'default',
    name: 'Agora Bags Bundle 15',
    status: 'ACTIVE',
    priority: 80,
    conditions: {
      minimumSubtotal: '150.00',
      productCodes: ['agoraLeatherTote', 'agoraCanvasCrossbody']
    },
    actions: {
      discountAmount: '15.00',
      reasonCode: 'AGORA_BAGS_BUNDLE_15',
      message: 'Save USD 15 on eligible bag edits.',
      exclusionGroup: 'cartSubtotalDiscount'
    },
    validFrom: '2026-01-01T00:00:00.000Z',
    validTo: '2027-01-01T00:00:00.000Z',
    revision: 0
  }
};
