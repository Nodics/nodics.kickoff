/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
const wcmsAuthorityModules = ['cms', 'editorial', 'media', 'publish'];

/** @module wcmsOnlineServer/config/properties @description Defines the non-versioned Local WCMS Online target and delivery boundary. */
module.exports = {
    httpHardening: { cors: { allowedOrigins: ['http://localhost:3100', 'http://127.0.0.1:3100',
        'http://localhost:3200', 'http://127.0.0.1:3200',
        'http://localhost:3300', 'http://127.0.0.1:3300'] } },
    localResetProvider: { enabled: true, environmentAllowlist: ['kickoffLocal'], allowMissingModelServices: true,
        requiredServiceNames: [
            'DefaultCmsDocumentationAccessPolicyService', 'DefaultCmsDocumentationDashboardService',
            'DefaultCmsDocumentationNavigationService', 'DefaultCmsDocumentationNodeService', 'DefaultCmsDocumentationPageService',
            'DefaultCmsDocumentationProductService', 'DefaultCmsDocumentationPublicationStateService',
            'DefaultCmsDocumentationSearchMetadataService'
        ], serviceNames: [
        'DefaultCmsComponentDetailService', 'DefaultCmsComponentLocalizationService', 'DefaultCmsComponentMediaService',
        'DefaultCmsNavigationNodeService', 'DefaultCmsPageRouteService', 'DefaultCmsRestrictionService',
        'DefaultCmsDocumentationAccessPolicyService', 'DefaultCmsDocumentationDashboardService',
        'DefaultCmsDocumentationNavigationService', 'DefaultCmsDocumentationNodeService', 'DefaultCmsDocumentationPageService',
        'DefaultCmsDocumentationProductService', 'DefaultCmsDocumentationPublicationStateService',
        'DefaultCmsDocumentationSearchMetadataService',
        'DefaultCmsPublicationDeploymentReceiptService', 'DefaultCmsPublicationEventOutboxService', 'DefaultCmsOnlinePublicationPointerService',
        'DefaultCmsPublicationManifestService', 'DefaultPublicationAuditService', 'DefaultPublicationRequestService',
        'DefaultEditorialArticleLocalizationService', 'DefaultEditorialArticleTaxonomyService', 'DefaultEditorialCorrectionService',
        'DefaultEditorialOnlineArticleService', 'DefaultEditorialPublicationReceiptService', 'DefaultMediaReferenceService',
        'DefaultMediaSetEntryService', 'DefaultMediaSetService', 'DefaultMediaService', 'DefaultMediaFolderService', 'DefaultMediaFormatService',
        'DefaultCmsComponentService', 'DefaultCmsComponentTypeGroupService', 'DefaultCmsMigrationAuditService', 'DefaultCmsPageService',
        'DefaultCmsPageTemplateService', 'DefaultCmsRestrictionTypeService', 'DefaultCmsSiteService', 'DefaultCmsSlotDefinitionService',
        'DefaultCmsTypeCode2RendererService', 'DefaultCmsTypeCodeService', 'DefaultEditorialArticleService', 'DefaultEditorialAuthorService',
        'DefaultEditorialContentTypeService', 'DefaultEditorialSeriesService', 'DefaultEditorialTaxonomyTermService',
        'DefaultConfigurationService', 'DefaultDataInstallationService', 'DefaultEmsFailedMessagesService', 'DefaultEventListenerService',
        'DefaultImportDefinitionService', 'DefaultImportRunService', 'DefaultIndexService', 'DefaultIndexerLogService', 'DefaultIndexerService',
        'DefaultInterceptorService', 'DefaultSearchService', 'DefaultTokenService', 'DefaultValidatorService', 'DefaultWorkflow2SchemaService'
    ] },
    activeModules: {
        groups: [],
        modules: ['nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'wcmsOnlineServer']
    },
    publishEnabled: false,
    runtimeRole: { code: 'WCMS_ONLINE', publication: 'ONLINE' },
    runtimeAuthorityContexts: { modules: Object.fromEntries(wcmsAuthorityModules.map(moduleName => [moduleName, 'wcms.online'])) },
    database: { default: { mongodb: { master: {
        URI: 'mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal',
        databaseName: 'kickoffLocalWcmsOnline'
    } } } },
    cms: { publication: { enabled: true, runtimeRole: 'ONLINE', targetTransportProvider: null },
        delivery: { mediaDeliveryBaseUrl: 'http://127.0.0.1:4314/nodics/media/v0/content' } },
    editorial: { publication: { runtimeRole: 'ONLINE', targetTransportProvider: null } },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: [] } },
    apiExposure: { categories: {
        schemaWorkbench: { enabled: false }, schemaMaintenance: { enabled: false },
        dataImport: { enabled: false }, dataExport: { enabled: false }, mediaManagement: { enabled: false },
        mediaDelivery: { enabled: true }
    } },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4314, httpsHost: '127.0.0.1', httpsPort: 4315 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4314, httpsHost: 'localhost', httpsPort: 4315 } },
        profile: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } }
    }
};
