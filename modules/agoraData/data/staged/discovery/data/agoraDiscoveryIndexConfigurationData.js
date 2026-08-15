/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product Discovery index configuration for PLP/search. */
module.exports = {
  record0: {
    code: 'agoraProductDiscoveryIndex',
    tenant: 'default',
    name: 'Agora Product Discovery Index',
    ownerType: 'PRODUCT',
    indexType: 'SEARCH',
    engine: 'elastic',
    indexName: 'productLocalized',
    aliasName: 'agoraProductDiscovery',
    sourceMixCode: 'agoraProductDiscoverySourceMix',
    fieldMappingCode: 'agoraProductDiscoveryFieldMapping',
    queryProfileCode: 'agoraProductListingQuery',
    facetProfileCode: 'agoraProductListingFacets',
    rankingProfileCode: 'agoraProductRankingProfile',
    publicationPolicyCode: 'agoraProductDiscoveryPublication',
    scope: { storeCode: 'agoraMainStore', locale: 'en' },
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
