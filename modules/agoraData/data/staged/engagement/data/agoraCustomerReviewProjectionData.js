/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination ENGAGEMENT @owner agoraData */

/** @description Customer-safe public review projection for PDP rendering. */
module.exports = {
  record0: {
    code: 'agoraReviewLinenWrapDress01Projection',
    tenant: 'default',
    reviewCode: 'agoraReviewLinenWrapDress01',
    reviewVersion: 1,
    targetType: 'PRODUCT',
    targetCode: 'agoraLinenWrapDress',
    overallRating: 5,
    dimensionRatings: { fit: 5, quality: 5, value: 4 },
    title: 'Beautiful fabric',
    body: 'Soft linen, easy fit and polished enough for a dinner plan.',
    recommendation: true,
    media: [],
    authenticity: { verified: true, interactionType: 'PURCHASE' },
    disclosures: ['Synthetic local seed'],
    helpfulCount: 0,
    unhelpfulCount: 0,
    site: 'agora',
    locale: 'en',
    channel: 'ACCOUNT',
    status: 'PUBLISHED',
    publishedAt: '2026-08-01T10:15:00.000Z',
    policyVersion: 'agora-review-policy-v1',
    sourceHash: 'agora-review-linen-wrap-dress-01-public',
    correlationId: 'agora-review-linen-wrap-dress-01'
  }
};
