/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora logical renderer mappings. Executable renderers belong in nodics.agora. */
module.exports = {
  record0: { code: 'agoraHomePageType', renderer: 'agora.page.home', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record1: { code: 'agoraListingPageType', renderer: 'agora.page.listing', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record2: { code: 'agoraProductDetailPageType', renderer: 'agora.page.product-detail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record3: { code: 'agoraCartPageType', renderer: 'agora.page.cart', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record4: { code: 'agoraCheckoutPageType', renderer: 'agora.page.checkout', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record5: { code: 'agoraOrderConfirmationPageType', renderer: 'agora.page.order-confirmation', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record6: { code: 'agoraOrderHistoryPageType', renderer: 'agora.page.order-history', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record7: { code: 'agoraHeaderType', renderer: 'agora.header', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record8: { code: 'agoraFooterType', renderer: 'agora.footer', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record9: { code: 'agoraHeroBannerType', renderer: 'agora.heroBanner', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record10: { code: 'agoraCategoryRailType', renderer: 'agora.categoryRail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record11: { code: 'agoraProductRailType', renderer: 'agora.productRail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record12: { code: 'agoraProductListingType', renderer: 'agora.productListing', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record13: { code: 'agoraSearchListingType', renderer: 'agora.searchListing', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record14: { code: 'agoraProductDetailType', renderer: 'agora.productDetail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record15: { code: 'agoraCartSummaryType', renderer: 'agora.cartSummary', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record16: { code: 'agoraCheckoutFlowType', renderer: 'agora.checkoutFlow', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record17: { code: 'agoraOrderConfirmationType', renderer: 'agora.orderConfirmation', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record18: { code: 'agoraOrderHistoryType', renderer: 'agora.orderHistory', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record19: { code: 'agoraOrderLifecycleType', renderer: 'agora.orderLifecycle', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record20: { code: 'agoraServicePromiseType', renderer: 'agora.servicePromiseStrip', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record21: { code: 'agoraBreadcrumbType', renderer: 'agora.breadcrumb', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record22: { code: 'agoraRichTextType', renderer: 'agora.richText', contractVersion: 1, channels: ['web'], deprecated: false, active: true }
};
