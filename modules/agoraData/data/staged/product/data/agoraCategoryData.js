/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

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
