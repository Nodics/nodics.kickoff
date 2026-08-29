/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.electronics/data/sample-v001/content/headers/agoraElectronicsContentHeader
 * @description Defines Kickoff project-owned import header records for this domain storefront content pack.
 * @layer data-header
 * @owner agora.electronics
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix, query = { code: '$code' }) => ({
  options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix },
  query
});

module.exports = {
  catalog: {
    contentCatalog: entry('catalog', 'agoraElectronicsContentCatalogData')
  },
  media: {
    sharedMedia: entry('media', 'agoraElectronicsSharedMediaData'),
    sharedMediaReferences: entry('mediaReference', 'agoraElectronicsSharedMediaReferenceData', { code: '$code', tenant: '$tenant' })
  },
  cms: {
    sharedTypes: entry('cmsTypeCode', 'agoraElectronicsSharedTypeCodeData'),
    types: entry('cmsTypeCode', 'agoraElectronicsTypeCodeData'),
    sharedRenderers: entry('cmsTypeCode2Renderer', 'agoraElectronicsSharedRendererData'),
    renderers: entry('cmsTypeCode2Renderer', 'agoraElectronicsRendererData'),
    sharedComponentGroups: entry('cmsComponentTypeGroup', 'agoraElectronicsSharedComponentTypeGroupData'),
    sharedSlots: entry('cmsSlotDefinition', 'agoraElectronicsSharedSlotData'),
    sharedTemplates: entry('cmsPageTemplate', 'agoraElectronicsSharedTemplateData'),
    sites: entry('cmsSite', 'agoraElectronicsSiteData'),
    sharedComponents: entry('cmsComponent', 'agoraElectronicsSharedComponentData'),
    sharedComponentMedia: entry('cmsComponentMedia', 'agoraElectronicsSharedComponentMediaData', { componentMediaCode: '$componentMediaCode' }),
    pages: entry('cmsPage', 'agoraElectronicsPageData'),
    routes: entry('cmsPageRoute', 'agoraElectronicsRouteData')
  }
};
