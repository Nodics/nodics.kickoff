/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora storefront CMS components for the first discovery slice. */
module.exports = {
  record0: {
    code: 'agoraGlobalHeader',
    typeCode: 'agoraHeaderType',
    renderer: 'agora.header',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      logoText: 'Nodics Agora',
      navigationCode: 'agoraMainNavigation',
      searchEnabled: true,
      cartPreviewEnabled: false,
      accountPreviewEnabled: false
    }
  },
  record1: {
    code: 'agoraGlobalFooter',
    typeCode: 'agoraFooterType',
    renderer: 'agora.footer',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      copyrightText: 'Nodics Agora reference storefront',
      navigationCode: 'agoraFooterNavigation'
    }
  },
  record2: {
    code: 'agoraHomeHero',
    typeCode: 'agoraHeroBannerType',
    renderer: 'agora.heroBanner',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      kicker: 'Nodics Commerce',
      heading: 'Governed storefront discovery powered by Nodics.',
      body: 'Browse curated categories and product projections through customer-safe Commerce APIs.',
      primaryAction: { label: 'Browse new arrivals', href: '/c/new-arrivals' },
      secondaryAction: { label: 'Search products', href: '/search' },
      mediaReferenceCode: 'agoraHeroPlaceholder',
      imageAlt: 'Nodics Agora storefront hero placeholder'
    }
  },
  record3: {
    code: 'agoraHomeCategoryRail',
    typeCode: 'agoraCategoryRailType',
    renderer: 'agora.categoryRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Shop by category',
      resolverKey: 'commerce.category.navigation',
      fallbackItems: [
        { label: 'New arrivals', href: '/c/new-arrivals' },
        { label: 'Women', href: '/c/women' },
        { label: 'Men', href: '/c/men' }
      ]
    }
  },
  record4: {
    code: 'agoraHomeProductRail',
    typeCode: 'agoraProductRailType',
    renderer: 'agora.productRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Featured products',
      resolverKey: 'commerce.product.discovery',
      queryIntent: 'FEATURED',
      pageSize: 8
    }
  },
  record5: {
    code: 'agoraListingBreadcrumb',
    typeCode: 'agoraBreadcrumbType',
    renderer: 'agora.breadcrumb',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.category.breadcrumb'
    }
  },
  record6: {
    code: 'agoraCategoryListing',
    typeCode: 'agoraProductListingType',
    renderer: 'agora.productListing',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.product.discovery',
      listingMode: 'CATEGORY',
      pageSize: 12,
      allowedFacets: ['category', 'color', 'size', 'availability'],
      allowedSorts: ['relevance', 'newest', 'nameAsc']
    }
  },
  record7: {
    code: 'agoraSearchListing',
    typeCode: 'agoraSearchListingType',
    renderer: 'agora.searchListing',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.product.discovery',
      listingMode: 'SEARCH',
      pageSize: 12,
      allowedFacets: ['category', 'color', 'size', 'availability'],
      allowedSorts: ['relevance', 'newest', 'nameAsc']
    }
  },
  record8: {
    code: 'agoraProductDetail',
    typeCode: 'agoraProductDetailType',
    renderer: 'agora.productDetail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.product.detail',
      includeMedia: true,
      includeVariantSummary: true,
      includePrice: false,
      includeInventory: false,
      includeReviews: false
    }
  },
  record9: {
    code: 'agoraDiscoveryReadinessNote',
    typeCode: 'agoraRichTextType',
    renderer: 'agora.richText',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Discovery slice boundary',
      body: 'This storefront seed renders page composition only. Product, price, inventory, cart and checkout data are resolved through backend-owned customer APIs when those contracts are active.'
    }
  }
};
