/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/engagement/data/agoraCustomerReviewModerationData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination ENGAGEMENT @owner agoraCommonData */

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
    evidence: { moderationMode: 'PRE', source: 'agoraCommonData.synthetic' },
    correlationId: 'agora-review-linen-wrap-dress-01',
    occurredAt: '2026-08-01T10:10:00.000Z'
  }
};
