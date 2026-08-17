/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/discovery/data/agoraDiscoverySourceMixConfigurationData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description Agora Product Discovery source mix configuration. */
module.exports = {
  record0: {
    code: 'agoraProductDiscoverySourceMix',
    tenant: 'default',
    ownerType: 'PRODUCT',
    sources: [
      { sourceCode: 'productSearchProjection', ownerModule: 'product', required: true },
      { sourceCode: 'customerPriceSummary', ownerModule: 'pricing', required: false },
      { sourceCode: 'customerAvailabilitySummary', ownerModule: 'inventory', required: false },
      { sourceCode: 'commerceSearchRules', ownerModule: 'commerceSearchCore', required: false }
    ],
    mergePolicy: { primarySource: 'productSearchProjection', failureBehavior: 'omit-optional' },
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
