/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora owned/replacement Media references for product and content targets. */
module.exports = {
  record0: {
    code: 'agoraHeroPrimaryMediaReference',
    tenant: 'default',
    ownerModule: 'cms',
    ownerSchema: 'cmsComponent',
    ownerCode: 'agoraHomeHero',
    mediaCode: 'agora-owned-hero-primary',
    relationType: 'CMS_ASSET',
    position: 0,
    status: 'INACTIVE',
    evidence: {
      source: 'NODICS_SAMPLE_DATA',
      rightsStatus: 'REPLACEMENT_REQUIRED',
      targetType: 'CONTENT_BANNER',
      approvedReferenceSiteAsset: false
    }
  },
  record1: {
    code: 'agoraLinenWrapDressPrimaryMediaReference',
    tenant: 'default',
    ownerModule: 'product',
    ownerSchema: 'product',
    ownerCode: 'agoraLinenWrapDress',
    mediaCode: 'agora-owned-product-linen-wrap-dress-primary',
    relationType: 'PRIMARY_IMAGE',
    position: 0,
    status: 'INACTIVE',
    evidence: {
      source: 'NODICS_SAMPLE_DATA',
      rightsStatus: 'REPLACEMENT_REQUIRED',
      targetType: 'PRODUCT_PRIMARY_IMAGE',
      approvedReferenceSiteAsset: false
    }
  },
  record2: {
    code: 'agoraLeatherTotePrimaryMediaReference',
    tenant: 'default',
    ownerModule: 'product',
    ownerSchema: 'product',
    ownerCode: 'agoraLeatherTote',
    mediaCode: 'agora-owned-product-leather-tote-primary',
    relationType: 'PRIMARY_IMAGE',
    position: 0,
    status: 'INACTIVE',
    evidence: {
      source: 'NODICS_SAMPLE_DATA',
      rightsStatus: 'REPLACEMENT_REQUIRED',
      targetType: 'PRODUCT_PRIMARY_IMAGE',
      approvedReferenceSiteAsset: false
    }
  }
};
