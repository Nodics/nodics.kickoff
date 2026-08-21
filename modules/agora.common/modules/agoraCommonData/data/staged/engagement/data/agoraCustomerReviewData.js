/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/engagement/data/agoraCustomerReviewData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle OPERATIONAL_VERSIONED @destination ENGAGEMENT @owner agoraCommonData */

/** @description Synthetic Agora customer reviews for PDP/public-review journey validation. */
module.exports = {
  record0: {
    code: 'agoraReviewLinenWrapDress01',
    active: true,
    tenant: 'default',
    ownerId: 'agoraSyntheticCustomer01',
    targetType: 'PRODUCT',
    targetCode: 'agoraLinenWrapDress',
    orderCode: 'agoraSyntheticOrder01',
    orderEntryCode: 'agoraSyntheticOrder01Entry01',
    overallRating: 5,
    dimensionRatings: { fit: 5, quality: 5, value: 4 },
    title: 'Beautiful fabric',
    body: 'Soft linen, easy fit and polished enough for a dinner plan.',
    advantages: ['Soft hand-feel', 'Easy silhouette'],
    disadvantages: [],
    recommendation: true,
    mediaCodes: [],
    site: 'agora',
    locale: 'en',
    channel: 'ACCOUNT',
    status: 'APPROVED',
    moderationMode: 'PRE',
    submittedAt: '2026-08-01T10:00:00.000Z',
    revision: 1,
    correlationId: 'agora-review-linen-wrap-dress-01'
  }
};
