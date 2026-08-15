/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora business-managed Commerce Search ranking rules for the first discovery slice. */
module.exports = {
  record0: {
    code: 'agoraWomenRanking',
    tenant: 'default',
    name: 'Agora Women Category Ranking',
    storeCode: 'agoraMainStore',
    locale: 'en',
    scopeType: 'CATEGORY',
    categoryCode: 'agoraWomen',
    status: 'APPROVED',
    validFrom: '2026-01-01T00:00:00.000Z',
    actions: [
      { actionType: 'PIN', productCode: 'agoraLinenWrapDress', position: 1, priority: 100 },
      { actionType: 'BOOST', productCode: 'agoraSatinMidiDress', priority: 90 },
      { actionType: 'BURY', productCode: 'agoraSilkScarf', priority: 10 }
    ],
    priority: 100,
    revision: 1,
    evidence: { source: 'agoraData', intent: 'Demonstrate business-controlled category ranking for Product discovery.' },
    active: true
  }
};
