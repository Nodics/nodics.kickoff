/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/data/agoraNavigationData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

/** @description Agora storefront navigation nodes for the V1 customer journey. */
module.exports = {
  record0: {
    code: 'agoraMainNavigation',
    site: 'agoraStorefrontSite',
    name: 'Agora Main Navigation',
    title: 'Shop',
    nodeType: 'CONTAINER',
    position: 10,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record1: {
    code: 'agoraNavHome',
    site: 'agoraStorefrontSite',
    parent: 'agoraMainNavigation',
    name: 'Home',
    title: 'Home',
    nodeType: 'ROUTE',
    targetRoute: 'agoraHomeRoute',
    position: 10,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record2: {
    code: 'agoraNavNewArrivals',
    site: 'agoraStorefrontSite',
    parent: 'agoraMainNavigation',
    name: 'New Arrivals',
    title: 'New arrivals',
    nodeType: 'ROUTE',
    targetRoute: 'agoraCategoryListingRoute',
    position: 20,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record3: {
    code: 'agoraNavSearch',
    site: 'agoraStorefrontSite',
    parent: 'agoraMainNavigation',
    name: 'Search',
    title: 'Search',
    nodeType: 'ROUTE',
    targetRoute: 'agoraSearchRoute',
    position: 30,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record4: {
    code: 'agoraNavCart',
    site: 'agoraStorefrontSite',
    parent: 'agoraMainNavigation',
    name: 'Cart',
    title: 'Cart',
    nodeType: 'ROUTE',
    targetRoute: 'agoraCartRoute',
    position: 40,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record5: {
    code: 'agoraNavOrders',
    site: 'agoraStorefrontSite',
    parent: 'agoraMainNavigation',
    name: 'My Orders',
    title: 'My Orders',
    nodeType: 'ROUTE',
    targetRoute: 'agoraOrderHistoryRoute',
    position: 50,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record6: {
    code: 'agoraNavAccount',
    site: 'agoraStorefrontSite',
    parent: 'agoraMainNavigation',
    name: 'Account',
    title: 'Account',
    nodeType: 'ROUTE',
    targetRoute: 'agoraAccountProfileRoute',
    position: 60,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record7: {
    code: 'agoraFooterNavigation',
    site: 'agoraStorefrontSite',
    name: 'Agora Footer Navigation',
    title: 'Support',
    nodeType: 'CONTAINER',
    position: 100,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  },
  record8: {
    code: 'agoraFooterReturns',
    site: 'agoraStorefrontSite',
    parent: 'agoraFooterNavigation',
    name: 'Returns & refunds',
    title: 'Returns & refunds',
    nodeType: 'ROUTE',
    targetRoute: 'agoraOrderHistoryRoute',
    position: 110,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
  }
};
