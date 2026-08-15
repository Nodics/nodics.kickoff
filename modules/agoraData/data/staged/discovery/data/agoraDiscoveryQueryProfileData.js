/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product Listing query profile. */
module.exports = {
  record0: {
    code: 'agoraProductListingQuery',
    tenant: 'default',
    ownerType: 'PRODUCT',
    searchableFields: [
      { field: 'payload.name', boost: 5 },
      { field: 'payload.description', boost: 2 },
      { field: 'payload.categoryCodes', boost: 3 }
    ],
    filters: ['categoryCode', 'availability', 'priceRange'],
    sorts: [
      { code: 'relevance', sort: undefined },
      { code: 'name-asc', sort: { 'payload.name': 1 } },
      { code: 'name-desc', sort: { 'payload.name': -1 } }
    ],
    defaultSort: 'relevance',
    pageSizeLimit: 48,
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
