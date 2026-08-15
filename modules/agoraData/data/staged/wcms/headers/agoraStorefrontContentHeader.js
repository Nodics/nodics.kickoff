/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Core import header for the Nodics Agora storefront discovery content release. */
module.exports = {
  catalog: {
    agoraCatalogData: {
      options: { enabled: true, schemaName: 'catalog', operation: 'saveAll', dataFilePrefix: 'agoraCatalogData' },
      query: { code: '$code' }
    }
  },
  cms: {
    agoraSiteData: {
      options: { enabled: true, schemaName: 'cmsSite', operation: 'saveAll', dataFilePrefix: 'agoraSiteData' },
      query: { code: '$code' }
    },
    agoraTypeCodeData: {
      options: { enabled: true, schemaName: 'cmsTypeCode', operation: 'saveAll', dataFilePrefix: 'agoraTypeCodeData' },
      query: { code: '$code' }
    },
    agoraRendererData: {
      options: { enabled: true, schemaName: 'cmsTypeCode2Renderer', operation: 'saveAll', dataFilePrefix: 'agoraRendererData' },
      query: { code: '$code' }
    },
    agoraComponentTypeGroupData: {
      options: { enabled: true, schemaName: 'cmsComponentTypeGroup', operation: 'saveAll', dataFilePrefix: 'agoraComponentTypeGroupData' },
      query: { code: '$code' }
    },
    agoraSlotData: {
      options: { enabled: true, schemaName: 'cmsSlotDefinition', operation: 'saveAll', dataFilePrefix: 'agoraSlotData' },
      query: { code: '$code' }
    },
    agoraTemplateData: {
      options: { enabled: true, schemaName: 'cmsPageTemplate', operation: 'saveAll', dataFilePrefix: 'agoraTemplateData' },
      query: { code: '$code' }
    },
    agoraComponentData: {
      options: { enabled: true, schemaName: 'cmsComponent', operation: 'saveAll', dataFilePrefix: 'agoraComponentData' },
      query: { code: '$code' }
    },
    agoraPageData: {
      options: { enabled: true, schemaName: 'cmsPage', operation: 'saveAll', dataFilePrefix: 'agoraPageData' },
      query: { code: '$code' }
    },
    agoraRouteData: {
      options: { enabled: true, schemaName: 'cmsPageRoute', operation: 'saveAll', dataFilePrefix: 'agoraRouteData' },
      query: { code: '$code' }
    },
    agoraNavigationData: {
      options: { enabled: true, schemaName: 'cmsNavigationNode', operation: 'saveAll', dataFilePrefix: 'agoraNavigationData' },
      query: { code: '$code' }
    }
  }
};
