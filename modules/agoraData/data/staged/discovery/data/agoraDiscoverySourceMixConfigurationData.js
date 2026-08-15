/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product Discovery source mix configuration. */
module.exports = {
  record0: {
    code: 'agoraProductDiscoverySourceMix',
    tenant: 'default',
    ownerType: 'PRODUCT',
    sources: [
      { sourceCode: 'productSearchProjection', ownerModule: 'product', required: true },
      { sourceCode: 'customerPriceSummary', ownerModule: 'pricing', required: false },
      { sourceCode: 'customerAvailabilitySummary', ownerModule: 'inventory', required: false },
      { sourceCode: 'commerceSearchRules', ownerModule: 'commerceSearchCore', required: false }
    ],
    mergePolicy: { primarySource: 'productSearchProjection', failureBehavior: 'omit-optional' },
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
