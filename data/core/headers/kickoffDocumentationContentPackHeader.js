'use strict';

/** @description Nodics Kickoff core-import header for project documentation. */
module.exports = {
  catalog: {
    kickoffDocumentationCatalogData: { options: { enabled: true, schemaName: 'catalog', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationCatalogData' }, query: { code: '$code' } },
  },
  cms: {
    kickoffDocumentationSiteData: { options: { enabled: true, schemaName: 'cmsSite', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationSiteData' }, query: { code: '$code' } },
    kickoffDocumentationTypeCodeData: { options: { enabled: true, schemaName: 'cmsTypeCode', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationTypeCodeData' }, query: { code: '$code' } },
    kickoffDocumentationRendererData: { options: { enabled: true, schemaName: 'cmsTypeCode2Renderer', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationRendererData' }, query: { code: '$code' } },
    kickoffDocumentationSlotData: { options: { enabled: true, schemaName: 'cmsSlotDefinition', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationSlotData' }, query: { code: '$code' } },
    kickoffDocumentationTemplateData: { options: { enabled: true, schemaName: 'cmsPageTemplate', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationTemplateData' }, query: { code: '$code' } },
    kickoffDocumentationComponentData: { options: { enabled: true, schemaName: 'cmsComponent', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationComponentData' }, query: { code: '$code' } },
    kickoffDocumentationPageData: { options: { enabled: true, schemaName: 'cmsPage', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationPageData' }, query: { code: '$code' } },
    kickoffDocumentationRouteData: { options: { enabled: true, schemaName: 'cmsPageRoute', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationRouteData' }, query: { code: '$code' } },
  },
};
