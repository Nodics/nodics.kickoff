/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

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
  }
};
