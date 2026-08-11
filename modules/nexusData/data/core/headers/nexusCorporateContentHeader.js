/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @description Core import header for the Nodics Nexus corporate content release. */
module.exports = {
    catalog: {
        nexusCatalogData: { options: { enabled: true, schemaName: 'catalog', operation: 'saveAll', dataFilePrefix: 'nexusCatalogData' }, query: { code: '$code' } }
    },
    cms: {
        nexusSiteData: { options: { enabled: true, schemaName: 'cmsSite', operation: 'saveAll', dataFilePrefix: 'nexusSiteData' }, query: { code: '$code' } },
        nexusTypeCodeData: { options: { enabled: true, schemaName: 'cmsTypeCode', operation: 'saveAll', dataFilePrefix: 'nexusTypeCodeData' }, query: { code: '$code' } },
        nexusRendererData: { options: { enabled: true, schemaName: 'cmsTypeCode2Renderer', operation: 'saveAll', dataFilePrefix: 'nexusRendererData' }, query: { code: '$code' } },
        nexusComponentTypeGroupData: { options: { enabled: true, schemaName: 'cmsComponentTypeGroup', operation: 'saveAll', dataFilePrefix: 'nexusComponentTypeGroupData' }, query: { code: '$code' } },
        nexusSlotData: { options: { enabled: true, schemaName: 'cmsSlotDefinition', operation: 'saveAll', dataFilePrefix: 'nexusSlotData' }, query: { code: '$code' } },
        nexusTemplateData: { options: { enabled: true, schemaName: 'cmsPageTemplate', operation: 'saveAll', dataFilePrefix: 'nexusTemplateData' }, query: { code: '$code' } },
        nexusComponentData: { options: { enabled: true, schemaName: 'cmsComponent', operation: 'saveAll', dataFilePrefix: 'nexusComponentData' }, query: { code: '$code' } },
        nexusPageData: { options: { enabled: true, schemaName: 'cmsPage', operation: 'saveAll', dataFilePrefix: 'nexusPageData' }, query: { code: '$code' } },
        nexusRouteData: { options: { enabled: true, schemaName: 'cmsPageRoute', operation: 'saveAll', dataFilePrefix: 'nexusRouteData' }, query: { code: '$code' } },
        nexusNavigationData: { options: { enabled: true, schemaName: 'cmsNavigationNode', operation: 'saveAll', dataFilePrefix: 'nexusNavigationData' }, query: { code: '$code' } }
    }
};
