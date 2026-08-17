/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/discovery/data/agoraDiscoveryQueryProfileData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

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
