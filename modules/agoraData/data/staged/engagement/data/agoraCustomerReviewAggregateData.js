/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination ENGAGEMENT @owner agoraData */

/** @description Aggregate review score for Agora PDP public-review journey validation. */
module.exports = {
  record0: {
    code: 'agoraReviewAggregateLinenWrapDress',
    tenant: 'default',
    targetType: 'PRODUCT',
    targetCode: 'agoraLinenWrapDress',
    site: 'agora',
    locale: 'en',
    count: 1,
    sum: 5,
    average: 5,
    distribution: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 1 },
    dimensions: { fit: { average: 5 }, quality: { average: 5 }, value: { average: 4 } },
    verifiedCount: 1,
    unverifiedCount: 0,
    policyVersion: 'agora-review-policy-v1',
    calculationVersion: 'agora-review-calculation-v1',
    sourceHash: 'agora-review-aggregate-linen-wrap-dress-v1',
    calculatedAt: '2026-08-01T10:20:00.000Z',
    status: 'CURRENT',
    correlationId: 'agora-review-linen-wrap-dress-01'
  }
};
