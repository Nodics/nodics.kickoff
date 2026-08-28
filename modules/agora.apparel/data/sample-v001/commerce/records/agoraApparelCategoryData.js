/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelCategoryData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

/** @description Agora Product category hierarchy source for the first discovery slice. */
module.exports = {
  record0: { code: 'agoraNewArrivals', tenant: 'default', name: 'New Arrivals', status: 'ACTIVE', revision: 1, active: true },
  record1: { code: 'agoraWomen', tenant: 'default', name: 'Women', status: 'ACTIVE', revision: 1, active: true },
  record2: { code: 'agoraMen', tenant: 'default', name: 'Men', status: 'ACTIVE', revision: 1, active: true },
  record3: { code: 'agoraWomenDresses', tenant: 'default', name: 'Women Dresses', parentCode: 'agoraWomen', status: 'ACTIVE', revision: 1, active: true },
  record4: { code: 'agoraWomenTops', tenant: 'default', name: 'Women Tops', parentCode: 'agoraWomen', status: 'ACTIVE', revision: 1, active: true },
  record5: { code: 'agoraWomenAccessories', tenant: 'default', name: 'Women Accessories', parentCode: 'agoraWomen', status: 'ACTIVE', revision: 1, active: true },
  record6: { code: 'agoraWomenBags', tenant: 'default', name: 'Women Bags', parentCode: 'agoraWomenAccessories', status: 'ACTIVE', revision: 1, active: true },
  record7: { code: 'agoraSale', tenant: 'default', name: 'Sale', status: 'ACTIVE', revision: 1, active: true },
  record8: { code: 'agoraMenShirts', tenant: 'default', name: 'Men Shirts', parentCode: 'agoraMen', status: 'ACTIVE', revision: 1, active: true },
  record9: { code: 'agoraMenTrousers', tenant: 'default', name: 'Men Trousers', parentCode: 'agoraMen', status: 'ACTIVE', revision: 1, active: true },
  record10: { code: 'agoraMenAccessories', tenant: 'default', name: 'Men Accessories', parentCode: 'agoraMen', status: 'ACTIVE', revision: 1, active: true }
};
