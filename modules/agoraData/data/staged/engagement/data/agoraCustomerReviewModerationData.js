/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination ENGAGEMENT @owner agoraData */

/** @description Review moderation evidence for an approved synthetic PDP review. */
module.exports = {
  record0: {
    code: 'agoraReviewLinenWrapDress01Moderation01',
    tenant: 'default',
    reviewCode: 'agoraReviewLinenWrapDress01',
    reviewVersion: 1,
    action: 'APPROVE',
    fromStatus: 'PENDING_MODERATION',
    toStatus: 'APPROVED',
    reasonCode: 'SAMPLE_REVIEW_APPROVED',
    policyViolation: false,
    sentiment: 'POSITIVE',
    internalNotes: 'Synthetic seed reviewed for local Agora validation.',
    actorId: 'agora-review-moderator',
    evidence: { moderationMode: 'PRE', source: 'agoraData.synthetic' },
    correlationId: 'agora-review-linen-wrap-dress-01',
    occurredAt: '2026-08-01T10:10:00.000Z'
  }
};
