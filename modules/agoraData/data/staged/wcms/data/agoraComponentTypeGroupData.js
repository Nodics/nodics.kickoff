/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora storefront authoring component group. */
module.exports = {
  record0: {
    code: 'agoraStorefrontDiscoveryGroup',
    name: 'Agora Storefront Discovery Components',
    description: 'Allowlisted Home, listing, search and PDP composition components rendered by nodics.agora.',
    componentTypeCodes: [
      'agoraHeaderType',
      'agoraFooterType',
      'agoraHeroBannerType',
      'agoraCategoryRailType',
      'agoraProductRailType',
      'agoraProductListingType',
      'agoraSearchListingType',
      'agoraProductDetailType',
      'agoraBreadcrumbType',
      'agoraRichTextType'
    ],
    status: 'ACTIVE',
    sortOrder: 10,
    active: true
  }
};
