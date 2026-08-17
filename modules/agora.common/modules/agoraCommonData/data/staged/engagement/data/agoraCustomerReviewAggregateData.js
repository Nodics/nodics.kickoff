/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/engagement/data/agoraCustomerReviewAggregateData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination ENGAGEMENT @owner agoraCommonData */

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
