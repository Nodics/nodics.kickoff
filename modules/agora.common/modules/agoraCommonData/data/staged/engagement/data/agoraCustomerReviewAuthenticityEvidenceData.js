/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/engagement/data/agoraCustomerReviewAuthenticityEvidenceData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle OPERATIONAL_VERSIONED @destination ENGAGEMENT @owner agoraCommonData */

/** @description Synthetic authenticity evidence; no external review provider or copied source content. */
module.exports = {
  record0: {
    code: 'agoraReviewLinenWrapDress01Auth',
    active: true,
    tenant: 'default',
    reviewCode: 'agoraReviewLinenWrapDress01',
    interactionType: 'PURCHASE',
    verificationStatus: 'VERIFIED',
    sourceModule: 'order',
    sourceRecordCode: 'agoraSyntheticOrder01',
    incentiveType: 'NONE',
    sentimentConditioned: false,
    samplingDisclosure: 'Synthetic local seed for Agora storefront validation.',
    materialRelationship: 'NONE',
    aiAssistance: 'NONE',
    provenance: { source: 'agoraCommonData.synthetic', license: 'NODICS_SAMPLE_DATA' },
    policyVersion: 'agora-review-policy-v1',
    verifiedAt: '2026-08-01T10:05:00.000Z',
    correlationId: 'agora-review-linen-wrap-dress-01'
  }
};
