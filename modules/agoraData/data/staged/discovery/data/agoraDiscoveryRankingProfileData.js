/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product ranking profile. */
module.exports = {
  record0: {
    code: 'agoraProductRankingProfile',
    tenant: 'default',
    ownerType: 'PRODUCT',
    rules: [{ ownerModule: 'commerceSearchCore', schemaName: 'commerceSearchRuleProjection' }],
    conflictPolicy: 'PRIORITY_THEN_STABLE_ORDER',
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
