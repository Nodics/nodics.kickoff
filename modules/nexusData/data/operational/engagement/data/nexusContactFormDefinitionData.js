/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle VERSIONED_OPERATIONAL @destination ENGAGEMENT_ONLINE @owner engagementCore */

/** @description Nexus public contact form definition owned by Engagement. */
module.exports = {
    record0: {
        code: 'nexus-contact',
        active: true,
        tenant: 'default',
        submissionType: 'CONTACT',
        targetCapability: 'contactSubmission',
        status: 'ACTIVE',
        currentVersion: 1,
        sites: ['nexusCorporateSite'],
        locales: ['en'],
        channels: ['web'],
        accessibilityPolicyCode: 'wcag-aa',
        validationPolicyCode: 'contactSubmission.default',
        correlationId: 'nexus-contact-form-definition-v1'
    }
};
