/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

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
