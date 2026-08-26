/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/modules/agoraTelco/data/staged/telco/headers/agoraTelcoContentHeader
 * @description Defines Kickoff project-owned import header records for this domain storefront content pack.
 * @layer data-header
 * @owner agoraTelco
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix, query = { code: '$code' }) => ({
  options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix },
  query
});

module.exports = {
  catalog: {
    contentCatalog: entry('catalog', 'agoraTelcoContentCatalogData')
  },
  media: {
    sharedMediaReferences: entry('mediaReference', 'agoraTelcoSharedMediaReferenceData', { code: '$code', tenant: '$tenant' })
  },
  cms: {
    sharedTypes: entry('cmsTypeCode', 'agoraTelcoSharedTypeCodeData'),
    types: entry('cmsTypeCode', 'agoraTelcoTypeCodeData'),
    sharedRenderers: entry('cmsTypeCode2Renderer', 'agoraTelcoSharedRendererData'),
    renderers: entry('cmsTypeCode2Renderer', 'agoraTelcoRendererData'),
    sharedComponentGroups: entry('cmsComponentTypeGroup', 'agoraTelcoSharedComponentTypeGroupData'),
    sharedSlots: entry('cmsSlotDefinition', 'agoraTelcoSharedSlotData'),
    sharedTemplates: entry('cmsPageTemplate', 'agoraTelcoSharedTemplateData'),
    sites: entry('cmsSite', 'agoraTelcoSiteData'),
    sharedComponents: entry('cmsComponent', 'agoraTelcoSharedComponentData'),
    sharedComponentMedia: entry('cmsComponentMedia', 'agoraTelcoSharedComponentMediaData', { componentMediaCode: '$componentMediaCode' }),
    pages: entry('cmsPage', 'agoraTelcoPageData'),
    routes: entry('cmsPageRoute', 'agoraTelcoRouteData')
  }
};
