/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/partnerSiteData/data/staged/wcms/headers/partnerNexusPageHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner partnerSiteData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner partnerSiteData */

/** @description Imports the independently checksummed partner Nexus page customization. */
module.exports = {
    cms: {
        partnerNexusPageData: {
            options: {
                enabled: true,
                schemaName: 'cmsPage',
                operation: 'saveAll',
                dataFilePrefix: 'partnerNexusPageData'
            },
            query: { code: '$code' }
        }
    }
};
