/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/media/data/agoraMediaReferenceData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

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
      approvalStatus: 'PENDING_ASSET_INTAKE',
      targetType: 'CONTENT_BANNER',
      approvedReferenceSiteAsset: false,
      checksumRequired: true,
      reviewerRequired: true,
      productionUseAllowed: false,
      requiredProof: ['original filename', 'source system', 'checksum', 'intake run'],
      approvalChecklist: ['license type', 'asset owner', 'reviewer', 'approval timestamp'],
      activationChecklist: ['target type', 'target code', 'usage scope', 'activation revision'],
      rollbackChecklist: ['previous reference', 'deactivation reason', 'audit trail', 'recovery note']
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
      approvalStatus: 'PENDING_ASSET_INTAKE',
      targetType: 'PRODUCT_PRIMARY_IMAGE',
      approvedReferenceSiteAsset: false,
      checksumRequired: true,
      reviewerRequired: true,
      productionUseAllowed: false,
      requiredProof: ['original filename', 'source system', 'checksum', 'intake run'],
      approvalChecklist: ['license type', 'asset owner', 'reviewer', 'approval timestamp'],
      activationChecklist: ['target type', 'target code', 'usage scope', 'activation revision'],
      rollbackChecklist: ['previous reference', 'deactivation reason', 'audit trail', 'recovery note']
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
      approvalStatus: 'PENDING_ASSET_INTAKE',
      targetType: 'PRODUCT_PRIMARY_IMAGE',
      approvedReferenceSiteAsset: false,
      checksumRequired: true,
      reviewerRequired: true,
      productionUseAllowed: false,
      requiredProof: ['original filename', 'source system', 'checksum', 'intake run'],
      approvalChecklist: ['license type', 'asset owner', 'reviewer', 'approval timestamp'],
      activationChecklist: ['target type', 'target code', 'usage scope', 'activation revision'],
      rollbackChecklist: ['previous reference', 'deactivation reason', 'audit trail', 'recovery note']
    }
  }
};
