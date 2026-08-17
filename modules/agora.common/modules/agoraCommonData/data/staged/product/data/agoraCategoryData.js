/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/product/data/agoraCategoryData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description Agora Product category hierarchy source for the first discovery slice. */
module.exports = {
  record0: { code: 'agoraNewArrivals', tenant: 'default', name: 'New Arrivals', status: 'ACTIVE', revision: 1, active: true },
  record1: { code: 'agoraWomen', tenant: 'default', name: 'Women', status: 'ACTIVE', revision: 1, active: true },
  record2: { code: 'agoraMen', tenant: 'default', name: 'Men', status: 'ACTIVE', revision: 1, active: true },
  record3: { code: 'agoraWomenDresses', tenant: 'default', name: 'Women Dresses', parentCode: 'agoraWomen', status: 'ACTIVE', revision: 1, active: true },
  record4: { code: 'agoraWomenTops', tenant: 'default', name: 'Women Tops', parentCode: 'agoraWomen', status: 'ACTIVE', revision: 1, active: true },
  record5: { code: 'agoraWomenAccessories', tenant: 'default', name: 'Women Accessories', parentCode: 'agoraWomen', status: 'ACTIVE', revision: 1, active: true },
  record6: { code: 'agoraMenShirts', tenant: 'default', name: 'Men Shirts', parentCode: 'agoraMen', status: 'ACTIVE', revision: 1, active: true },
  record7: { code: 'agoraMenTrousers', tenant: 'default', name: 'Men Trousers', parentCode: 'agoraMen', status: 'ACTIVE', revision: 1, active: true },
  record8: { code: 'agoraMenAccessories', tenant: 'default', name: 'Men Accessories', parentCode: 'agoraMen', status: 'ACTIVE', revision: 1, active: true }
};
