/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.apparel/data/agoraApparelCommerceSearchRuleData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.apparel
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraWomenRanking",
    tenant: "default",
    name: "Agora Women Category Ranking",
    storeCode: "agoraMainStore",
    locale: "en",
    scopeType: "CATEGORY",
    categoryCode: "agoraWomen",
    status: "APPROVED",
    validFrom: "2026-01-01T00:00:00.000Z",
    actions: [
      {
        actionType: "PIN",
        productCode: "agoraLinenWrapDress",
        position: 1,
        priority: 100,
      },
      {
        actionType: "BOOST",
        productCode: "agoraSatinMidiDress",
        priority: 90,
      },
      {
        actionType: "BURY",
        productCode: "agoraSilkScarf",
        priority: 10,
      },
    ],
    priority: 100,
    revision: 1,
    evidence: {
      source: "agora.apparel",
      intent:
        "Demonstrate business-controlled category ranking for Product discovery.",
    },
    active: true,
    enterpriseCode: "default",
  },
});
