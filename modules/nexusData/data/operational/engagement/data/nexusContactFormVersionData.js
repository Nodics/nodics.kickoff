/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle VERSIONED_OPERATIONAL @destination ENGAGEMENT_ONLINE @owner engagementCore */

/** @description Active Nexus public contact form version owned by Engagement. */
module.exports = {
    record0: {
        code: 'nexus-contact-v1',
        active: true,
        tenant: 'default',
        definitionCode: 'nexus-contact',
        version: 1,
        status: 'ACTIVE',
        structure: {
            fields: [
                { name: 'subject', label: 'Subject', type: 'text', required: true },
                { name: 'contactEmail', label: 'Business email', type: 'email', required: true },
                { name: 'contactPhone', label: 'Phone', type: 'tel', required: false },
                { name: 'type', label: 'Conversation type', type: 'text', required: false },
                { name: 'message', label: 'Message', type: 'textarea', required: true }
            ]
        },
        checksum: 'nexus-contact-v1-fields',
        validatedAt: new Date('2026-08-11T00:00:00.000Z'),
        activatedAt: new Date('2026-08-11T00:00:00.000Z'),
        correlationId: 'nexus-contact-form-version-v1'
    }
};
