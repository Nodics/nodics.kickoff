/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora PLP facet profile. */
module.exports = {
  record0: {
    code: 'agoraProductListingFacets',
    tenant: 'default',
    ownerType: 'PRODUCT',
    facets: [
      { code: 'category', field: 'payload.categoryCodes.keyword', label: 'Category' },
      { code: 'availability', field: 'payload.availability.status.keyword', label: 'Availability' },
      { code: 'price', field: 'payload.price.unitAmount', label: 'Price' }
    ],
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
