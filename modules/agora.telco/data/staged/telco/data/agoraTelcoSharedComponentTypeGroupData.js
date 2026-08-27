/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/data/staged/telco/data/agoraTelcoSharedComponentTypeGroupData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.telco
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agora.telco */

/** @description Agora storefront authoring component group. */
module.exports = {
  record0: {
    code: 'agoraStorefrontDiscoveryGroup',
    name: 'Agora Storefront Journey Components',
    description: 'Allowlisted Home, listing, search, PDP, cart, checkout, order and lifecycle composition components rendered by nodics.agora.',
    componentTypeCodes: [
      'agoraHeaderType',
      'agoraFooterType',
      'agoraHeroBannerType',
      'agoraCategoryRailType',
      'agoraProductRailType',
      'agoraProductListingType',
      'agoraSearchListingType',
      'agoraProductDetailType',
      'agoraCartSummaryType',
      'agoraCheckoutFlowType',
      'agoraOrderConfirmationType',
      'agoraOrderHistoryType',
      'agoraOrderLifecycleType',
      'agoraServicePromiseType',
      'agoraBreadcrumbType',
      'agoraRichTextType'
    ],
    status: 'ACTIVE',
    sortOrder: 10,
    active: true
  }
};
