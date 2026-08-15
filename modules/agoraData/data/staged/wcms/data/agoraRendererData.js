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
  record3: { code: 'agoraHeaderType', renderer: 'agora.header', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record4: { code: 'agoraFooterType', renderer: 'agora.footer', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record5: { code: 'agoraHeroBannerType', renderer: 'agora.heroBanner', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record6: { code: 'agoraCategoryRailType', renderer: 'agora.categoryRail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record7: { code: 'agoraProductRailType', renderer: 'agora.productRail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record8: { code: 'agoraProductListingType', renderer: 'agora.productListing', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record9: { code: 'agoraSearchListingType', renderer: 'agora.searchListing', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record10: { code: 'agoraProductDetailType', renderer: 'agora.productDetail', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record11: { code: 'agoraBreadcrumbType', renderer: 'agora.breadcrumb', contractVersion: 1, channels: ['web'], deprecated: false, active: true },
  record12: { code: 'agoraRichTextType', renderer: 'agora.richText', contractVersion: 1, channels: ['web'], deprecated: false, active: true }
};
