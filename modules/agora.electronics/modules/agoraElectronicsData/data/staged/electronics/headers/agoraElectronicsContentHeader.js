/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.electronics/modules/agoraElectronicsData/data/staged/electronics/headers/agoraElectronicsContentHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agoraElectronicsData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix) => ({ options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix }, query: { code: '$code' } }); module.exports = { catalog: { contentCatalog: entry('catalog', 'agoraElectronicsContentCatalogData') }, cms: { types: entry('cmsTypeCode', 'agoraElectronicsTypeCodeData'), renderers: entry('cmsTypeCode2Renderer', 'agoraElectronicsRendererData'), sites: entry('cmsSite', 'agoraElectronicsSiteData'), pages: entry('cmsPage', 'agoraElectronicsPageData'), routes: entry('cmsPageRoute', 'agoraElectronicsRouteData') } };
