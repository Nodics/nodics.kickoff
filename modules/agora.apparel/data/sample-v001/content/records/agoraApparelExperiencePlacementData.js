/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/content/records/agoraApparelExperiencePlacementData
 * @description Defines Agora Apparel CMS Experience placements for targeted storefront journeys.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agora.apparel */

module.exports = {
  record0: {
    code: 'agoraApparelShopDefaultHeroPlacement',
    active: true,
    site: 'agoraApparelSite',
    pageType: 'PRODUCT_LISTING',
    slot: 'hero',
    targetType: 'DEFAULT',
    targetCode: '*',
    component: 'agoraApparelProductListingExperience',
    rendererKey: 'agora.productListing',
    contractVersion: 1,
    specificity: 0,
    priority: 10,
    locale: 'en',
    channel: 'web',
    publicationStatus: 'STAGED',
    deliveryStatus: 'ACTIVE',
    release: 'agora.apparel:agoraApparelContentCatalog:0.0.5',
    indexVersion: 'agora-apparel-wcms-experience-v0001',
    properties: {
      eyebrow: 'Shop the edit',
      heading: 'Apparel selected for now',
      summary: 'Browse live apparel products with editorial merchandising, filters, sorting, variants, price, media, and availability.',
      heroMediaCode: 'agora-owned-product-listing-wide-hero',
      primaryAction: { label: 'Shop new arrivals', collectionCode: 'agoraNewArrivals' },
      secondaryAction: { label: 'Explore collections', path: '/collections' },
      query: { page: '/shop' }
    }
  },
  record1: {
    code: 'agoraApparelShopNewArrivalsHeroPlacement',
    active: true,
    site: 'agoraApparelSite',
    pageType: 'PRODUCT_LISTING',
    slot: 'hero',
    targetType: 'COLLECTION',
    targetCode: 'agoraNewArrivals',
    component: 'agoraApparelProductListingExperience',
    rendererKey: 'agora.productListing',
    contractVersion: 1,
    specificity: 100,
    priority: 90,
    locale: 'en',
    channel: 'web',
    publicationStatus: 'STAGED',
    deliveryStatus: 'ACTIVE',
    release: 'agora.apparel:agoraApparelContentCatalog:0.0.5',
    indexVersion: 'agora-apparel-wcms-experience-v0001',
    properties: {
      eyebrow: 'New season edit',
      heading: 'Fresh styles just in',
      summary: 'A curated arrival story for shoppers landing from New in, powered by the same product listing search results.',
      heroMediaCode: 'agora-owned-collection-new-in',
      primaryAction: { label: 'Shop new in', collectionCode: 'agoraNewArrivals' },
      secondaryAction: { label: 'View all collections', path: '/collections' },
      query: { collection: 'agoraNewArrivals' }
    }
  },
  record2: {
    code: 'agoraApparelShopClothingHeroPlacement',
    active: true,
    site: 'agoraApparelSite',
    pageType: 'PRODUCT_LISTING',
    slot: 'hero',
    targetType: 'CATEGORY',
    targetCode: 'agoraWomen',
    component: 'agoraApparelProductListingExperience',
    rendererKey: 'agora.productListing',
    contractVersion: 1,
    specificity: 90,
    priority: 80,
    locale: 'en',
    channel: 'web',
    publicationStatus: 'STAGED',
    deliveryStatus: 'ACTIVE',
    release: 'agora.apparel:agoraApparelContentCatalog:0.0.5',
    indexVersion: 'agora-apparel-wcms-experience-v0001',
    properties: {
      eyebrow: 'Category story',
      heading: 'Clothing with quiet polish',
      summary: 'Category-aware merchandising for clothing pages while products remain resolved from indexed Commerce data.',
      heroMediaCode: 'agora-owned-collection-clothing',
      primaryAction: { label: 'Shop clothing', path: '/shop?category=agoraWomen' },
      secondaryAction: { label: 'New arrivals', collectionCode: 'agoraNewArrivals' },
      query: { category: 'agoraWomen' }
    }
  },
  record3: {
    code: 'agoraApparelCollectionsIndexHeroPlacement',
    active: true,
    site: 'agoraApparelSite',
    pageType: 'COLLECTION_INDEX',
    slot: 'hero',
    targetType: 'DEFAULT',
    targetCode: '*',
    component: 'agoraApparelCollectionIndexExperience',
    rendererKey: 'agora.collectionIndex',
    contractVersion: 1,
    specificity: 0,
    priority: 10,
    locale: 'en',
    channel: 'web',
    publicationStatus: 'STAGED',
    deliveryStatus: 'ACTIVE',
    release: 'agora.apparel:agoraApparelContentCatalog:0.0.5',
    indexVersion: 'agora-apparel-wcms-experience-v0001',
    properties: {
      eyebrow: 'Curated apparel edits',
      heading: 'Collections you might like',
      summary: 'Choose a category, brand-inspired edit, or seasonal collection. Each tile opens a live Commerce listing with backend-driven products and media.',
      heroMediaCode: 'agora-owned-home-hero-layered-edit',
      primaryAction: { label: 'Shop all products', path: '/shop' },
      secondaryAction: { label: 'Start from featured edit', collectionCode: 'agoraWomen' },
      query: { page: '/collections' }
    }
  },
  record4: {
    code: 'agoraApparelShopProjectedProductsPlacement',
    active: true,
    site: 'agoraApparelSite',
    pageType: 'PRODUCT_LISTING',
    slot: 'featuredCarousel',
    targetType: 'DEFAULT',
    targetCode: '*',
    component: 'agoraApparelProductListingExperience',
    rendererKey: 'agora.productListing.featuredCarousel',
    contractVersion: 1,
    specificity: 0,
    priority: 20,
    locale: 'en',
    channel: 'web',
    publicationStatus: 'STAGED',
    deliveryStatus: 'ACTIVE',
    release: 'agora.apparel:agoraApparelContentCatalog:0.0.5',
    indexVersion: 'agora-apparel-wcms-experience-v0001',
    properties: {
      eyebrow: 'Featured by Agora',
      heading: 'Pieces to project this week',
      summary: 'A business-curated carousel for campaign products, new arrivals, and premium edits before customers enter the full listing grid.',
      productCodes: [
        'agoraDoubleButtonTrench',
        'agoraRamiePocketShirt',
        'agoraStretchStrapTop',
        'agoraBeltWrapDress',
        'agoraSoftShoulderBag',
        'agoraCleanLineBlazer',
        'agoraFineKnitPolo',
        'agoraNeutralShoulderBag'
      ]
    }
  }
};
