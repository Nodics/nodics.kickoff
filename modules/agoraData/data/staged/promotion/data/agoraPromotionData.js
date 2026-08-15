/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

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
