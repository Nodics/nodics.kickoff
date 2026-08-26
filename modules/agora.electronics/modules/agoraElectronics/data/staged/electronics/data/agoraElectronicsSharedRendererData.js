/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.electronics/modules/agoraElectronics/data/staged/electronics/data/agoraElectronicsSharedRendererData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraElectronics
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraElectronics */

/** @description Agora logical renderer mappings. Executable renderers belong in nodics.agora. */
module.exports = {
  record0: { code: 'agoraHomePageType', renderer: 'agora.page.home', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record1: { code: 'agoraListingPageType', renderer: 'agora.page.listing', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record2: { code: 'agoraProductDetailPageType', renderer: 'agora.page.product-detail', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record3: { code: 'agoraCartPageType', renderer: 'agora.page.cart', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record4: { code: 'agoraCheckoutPageType', renderer: 'agora.page.checkout', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record5: { code: 'agoraOrderConfirmationPageType', renderer: 'agora.page.order-confirmation', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record6: { code: 'agoraOrderHistoryPageType', renderer: 'agora.page.order-history', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record7: { code: 'agoraHeaderType', renderer: 'agora.header', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record8: { code: 'agoraFooterType', renderer: 'agora.footer', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record9: { code: 'agoraHeroBannerType', renderer: 'agora.heroBanner', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record10: { code: 'agoraCategoryRailType', renderer: 'agora.categoryRail', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record11: { code: 'agoraProductRailType', renderer: 'agora.productRail', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record12: { code: 'agoraProductListingType', renderer: 'agora.productListing', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record13: { code: 'agoraSearchListingType', renderer: 'agora.searchListing', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record14: { code: 'agoraProductDetailType', renderer: 'agora.productDetail', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record15: { code: 'agoraCartSummaryType', renderer: 'agora.cartSummary', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record16: { code: 'agoraCheckoutFlowType', renderer: 'agora.checkoutFlow', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record17: { code: 'agoraOrderConfirmationType', renderer: 'agora.orderConfirmation', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record18: { code: 'agoraOrderHistoryType', renderer: 'agora.orderHistory', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record19: { code: 'agoraOrderLifecycleType', renderer: 'agora.orderLifecycle', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record20: { code: 'agoraServicePromiseType', renderer: 'agora.servicePromiseStrip', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record21: { code: 'agoraBreadcrumbType', renderer: 'agora.breadcrumb', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record22: { code: 'agoraRichTextType', renderer: 'agora.richText', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record23: { code: 'agoraHeroCarouselType', renderer: 'agora.heroCarousel', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record24: { code: 'agoraServiceTickerType', renderer: 'agora.serviceTicker', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record25: { code: 'agoraCollectionGridType', renderer: 'agora.collectionGrid', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record26: { code: 'agoraPromoGridType', renderer: 'agora.promoGrid', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record27: { code: 'agoraServicePromiseGridType', renderer: 'agora.servicePromiseGrid', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record28: { code: 'agoraTestimonialGridType', renderer: 'agora.testimonialGrid', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record29: { code: 'agoraMediaGalleryType', renderer: 'agora.mediaGallery', contractVersion: 0, channels: ['web'], deprecated: false, active: true },
  record30: { code: 'agoraSpecialOfferSplitType', renderer: 'agora.specialOfferSplit', contractVersion: 0, channels: ['web'], deprecated: false, active: true }
};
