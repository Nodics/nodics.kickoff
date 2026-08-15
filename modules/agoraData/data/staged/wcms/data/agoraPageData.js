/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora storefront CMS pages for Home, listing, search and PDP shells. */
module.exports = {
  record0: {
    code: 'agoraHomePage',
    name: 'Nodics Agora Home',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraHomePageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.home',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraHomeHero', slot: 'main', index: 10, active: true },
      { target: 'agoraHomeCategoryRail', slot: 'main', index: 20, active: true },
      { target: 'agoraHomeProductRail', slot: 'main', index: 30, active: true },
      { target: 'agoraDiscoveryReadinessNote', slot: 'main', index: 40, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record1: {
    code: 'agoraCategoryListingPage',
    name: 'Nodics Agora Category Listing',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraListingPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.listing',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraListingBreadcrumb', slot: 'main', index: 10, active: true },
      { target: 'agoraCategoryListing', slot: 'main', index: 20, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record2: {
    code: 'agoraSearchPage',
    name: 'Nodics Agora Search',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraListingPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.listing',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraSearchListing', slot: 'main', index: 20, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record3: {
    code: 'agoraProductDetailPage',
    name: 'Nodics Agora Product Detail',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraProductDetailPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.product-detail',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraListingBreadcrumb', slot: 'main', index: 10, active: true },
      { target: 'agoraProductDetail', slot: 'main', index: 20, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  }
};
