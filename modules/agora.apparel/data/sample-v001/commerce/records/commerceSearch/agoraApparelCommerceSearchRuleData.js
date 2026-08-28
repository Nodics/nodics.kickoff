/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/commerceSearch/agoraApparelCommerceSearchRuleData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

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
    validFrom: new Date('2026-01-01T00:00:00.000Z'),
    actions: [
      { actionType: 'PIN', productCode: 'agoraLinenWrapDress', position: 1, priority: 100 },
      { actionType: 'BOOST', productCode: 'agoraSatinMidiDress', priority: 90 },
      { actionType: 'BURY', productCode: 'agoraSilkScarf', priority: 10 }
    ],
    priority: 100,
    revision: 1,
    evidence: { source: 'agora.apparel', intent: 'Demonstrate business-controlled category ranking for Product discovery.' },
    active: true
  }
};
