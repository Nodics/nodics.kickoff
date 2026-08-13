/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexusData */

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
