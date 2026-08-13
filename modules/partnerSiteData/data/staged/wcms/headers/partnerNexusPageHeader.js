/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

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
