/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/modules/agoraTelcoData/data/staged/telco/headers/agoraTelcoContentHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agoraTelcoData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix) => ({ options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix }, query: { code: '$code' } }); module.exports = { catalog: { contentCatalog: entry('catalog', 'agoraTelcoContentCatalogData') }, cms: { types: entry('cmsTypeCode', 'agoraTelcoTypeCodeData'), renderers: entry('cmsTypeCode2Renderer', 'agoraTelcoRendererData'), sites: entry('cmsSite', 'agoraTelcoSiteData'), pages: entry('cmsPage', 'agoraTelcoPageData'), routes: entry('cmsPageRoute', 'agoraTelcoRouteData') } };
