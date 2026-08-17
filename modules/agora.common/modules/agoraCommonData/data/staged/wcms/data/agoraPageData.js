/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/data/agoraPageData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

/** @description Agora storefront CMS pages for the V1 customer commerce journey shells. */
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
      { target: 'agoraServicePromiseStrip', slot: 'main', index: 40, active: true },
      { target: 'agoraDiscoveryReadinessNote', slot: 'main', index: 50, active: true },
      { target: 'agoraProductionGateSummary', slot: 'main', index: 60, active: true },
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
  },
  record4: {
    code: 'agoraCartPage',
    name: 'Nodics Agora Cart',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraCartPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.cart',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraCartSummary', slot: 'main', index: 20, active: true },
      { target: 'agoraServicePromiseStrip', slot: 'main', index: 40, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record5: {
    code: 'agoraCheckoutPage',
    name: 'Nodics Agora Checkout',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraCheckoutPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.checkout',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraCheckoutFlow', slot: 'main', index: 20, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record6: {
    code: 'agoraOrderConfirmationPage',
    name: 'Nodics Agora Order Confirmation',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraOrderConfirmationPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.order-confirmation',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraOrderConfirmation', slot: 'main', index: 20, active: true },
      { target: 'agoraOrderLifecyclePanel', slot: 'main', index: 30, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record7: {
    code: 'agoraOrderHistoryPage',
    name: 'Nodics Agora Order History',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraOrderHistoryPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.order-history',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraOrderHistory', slot: 'main', index: 20, active: true },
      { target: 'agoraOrderLifecyclePanel', slot: 'main', index: 30, active: true },
      { target: 'agoraAccountCenter', slot: 'main', index: 40, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  },
  record8: {
    code: 'agoraAccountProfilePage',
    name: 'Nodics Agora Account Profile',
    active: true,
    cmsSite: ['agoraStorefrontSite'],
    typeCode: 'agoraOrderHistoryPageType',
    template: 'agoraStorefrontPageTemplate',
    renderer: 'agora.page.account-profile',
    cmsComponents: [
      { target: 'agoraGlobalHeader', slot: 'main', index: 0, active: true },
      { target: 'agoraAccountCenter', slot: 'main', index: 20, active: true },
      { target: 'agoraOrderHistory', slot: 'main', index: 30, active: true },
      { target: 'agoraGlobalFooter', slot: 'main', index: 90, active: true }
    ]
  }
};
