/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/discovery/data/agoraDiscoveryIndexConfigurationData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

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
