/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/nexus.web/modules/nexusWebData/data/staged/wcmsUpdate/headers/nexusCorporatePageUpdateHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner nexusWebData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexusWebData */

/** @description Imports the independently checksummed Nexus corporate v1.0.1 page delta. */
module.exports = {
  cms: {
    nexusPageUpdateData: {
      options: {
        enabled: true,
        schemaName: 'cmsPage',
        operation: 'saveAll',
        dataFilePrefix: 'nexusPageUpdateData',
      },
      query: { code: '$code' },
    },
  },
};
