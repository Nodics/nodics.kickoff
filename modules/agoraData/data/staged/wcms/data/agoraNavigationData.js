/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora storefront navigation nodes for the first discovery slice. */
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
  }
};
