/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/partnerSiteData/data/staged/wcms/data/partnerNexusPageData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner partnerSiteData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner partnerSiteData */

/** @description Partner-owned Nexus page version proving later-loaded customization. */
module.exports = {
    record0: {
        code: 'nexusHomePage',
        versionId: 5,
        name: 'Nodics Nexus Home [partner-site-1.0.5]',
        active: true
    }
};
