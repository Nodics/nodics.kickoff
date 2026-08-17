/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/discovery/data/agoraDiscoveryFacetProfileData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

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
