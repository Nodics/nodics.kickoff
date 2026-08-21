/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/headers/agoraStorefrontContentHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

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
    agoraComponentMediaData: {
      options: { enabled: true, schemaName: 'cmsComponentMedia', operation: 'saveAll', dataFilePrefix: 'agoraComponentMediaData' },
      query: { componentMediaCode: '$componentMediaCode' }
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
