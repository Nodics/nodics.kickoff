/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product Discovery publication policy. */
module.exports = {
  record0: {
    code: 'agoraProductDiscoveryPublication',
    tenant: 'default',
    ownerType: 'PRODUCT',
    batchSize: 100,
    sourceStatus: 'ACTIVE',
    targetStatus: 'CURRENT',
    aliasSwitch: true,
    rollbackEnabled: true,
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
