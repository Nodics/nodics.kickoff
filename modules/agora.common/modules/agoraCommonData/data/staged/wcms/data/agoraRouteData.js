/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/data/agoraRouteData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

/** @description Agora storefront page routes for public discovery and customer commerce surfaces. */
module.exports = {
  record0: {
    code: 'agoraHomeRoute',
    path: '/',
    page: 'agoraHomePage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'PUBLIC',
    active: true
  },
  record1: {
    code: 'agoraCategoryListingRoute',
    path: '/c/:categoryCode',
    page: 'agoraCategoryListingPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'PUBLIC',
    active: true
  },
  record2: {
    code: 'agoraSearchRoute',
    path: '/search',
    page: 'agoraSearchPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'PUBLIC',
    active: true
  },
  record3: {
    code: 'agoraProductDetailRoute',
    path: '/p/:productCode',
    page: 'agoraProductDetailPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'PUBLIC',
    active: true
  },
  record4: {
    code: 'agoraCartRoute',
    path: '/cart',
    page: 'agoraCartPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'PUBLIC',
    active: true
  },
  record5: {
    code: 'agoraCheckoutRoute',
    path: '/checkout',
    page: 'agoraCheckoutPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'CUSTOMER',
    active: true
  },
  record6: {
    code: 'agoraOrderConfirmationRoute',
    path: '/order/confirmation',
    page: 'agoraOrderConfirmationPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'CUSTOMER',
    active: true
  },
  record7: {
    code: 'agoraOrderHistoryRoute',
    path: '/account/orders',
    page: 'agoraOrderHistoryPage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'CUSTOMER',
    active: true
  },
  record8: {
    code: 'agoraAccountProfileRoute',
    path: '/account/profile',
    page: 'agoraAccountProfilePage',
    site: 'agoraStorefrontSite',
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'CUSTOMER',
    active: true
  }
};
