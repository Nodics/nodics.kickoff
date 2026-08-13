/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @description Versioned operational Nexus form definitions and sanitized testimonial projections installed only through Engagement services. */
module.exports = {
    engagementCore: {
        nexusContactFormDefinitionData: { options: { enabled: true, schemaName: 'engagementFormDefinition', operation: 'saveAll', dataFilePrefix: 'nexusContactFormDefinitionData', userGroups: ['adminGroup'] }, query: { code: '$code' } },
        nexusContactFormVersionData: { options: { enabled: true, schemaName: 'engagementFormVersion', operation: 'saveAll', dataFilePrefix: 'nexusContactFormVersionData', userGroups: ['adminGroup'] }, query: { code: '$code' } }
    },
    testimonial: {
        nexusTestimonialProjectionData: { options: { enabled: true, schemaName: 'testimonialProjection', operation: 'saveAll', dataFilePrefix: 'nexusTestimonialProjectionData', userGroups: ['adminGroup'] }, query: { code: '$code' } }
    }
};
