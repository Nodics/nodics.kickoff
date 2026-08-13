'use strict';

/** @module wcmsStagedServer/config/properties @description Defines Local WCMS Staged role, coordinates, persistence, and Online target connection. */
module.exports = {
    httpHardening: { cors: { allowedOrigins: ['http://localhost:3100', 'http://127.0.0.1:3100'],
        deniedOrigins: ['http://localhost:3200', 'http://127.0.0.1:3200'] } },
    localResetProvider: { enabled: true, environmentAllowlist: ['kickoffLocal'], serviceNames: [
        'DefaultCmsComponentDetailService', 'DefaultCmsComponentLocalizationService', 'DefaultCmsComponentMediaService',
        'DefaultCmsNavigationNodeService', 'DefaultCmsPageRouteService', 'DefaultCmsRestrictionService',
        'DefaultCmsPublicationDeploymentReceiptService', 'DefaultCmsPublicationEventOutboxService', 'DefaultCmsOnlinePublicationPointerService',
        'DefaultCmsPublicationManifestService', 'DefaultPublicationAuditService', 'DefaultPublicationRequestService',
        'DefaultEditorialArticleLocalizationService', 'DefaultEditorialArticleTaxonomyService', 'DefaultEditorialCorrectionService',
        'DefaultEditorialOnlineArticleService', 'DefaultEditorialPublicationReceiptService', 'DefaultMediaReferenceService',
        'DefaultMediaSetEntryService', 'DefaultMediaSetService', 'DefaultMediaService', 'DefaultMediaFolderService', 'DefaultMediaFormatService',
        'DefaultCmsComponentService', 'DefaultCmsComponentTypeGroupService', 'DefaultCmsMigrationAuditService', 'DefaultCmsPageService',
        'DefaultCmsPageTemplateService', 'DefaultCmsRestrictionTypeService', 'DefaultCmsSiteService', 'DefaultCmsSlotDefinitionService',
        'DefaultCmsTypeCode2RendererService', 'DefaultCmsTypeCodeService', 'DefaultEditorialArticleService', 'DefaultEditorialAuthorService',
        'DefaultEditorialContentTypeService', 'DefaultEditorialSeriesService', 'DefaultEditorialTaxonomyTermService', 'DefaultCatalogService',
        'DefaultConfigurationService', 'DefaultDataInstallationService', 'DefaultEmsFailedMessagesService', 'DefaultEventListenerService',
        'DefaultImportDefinitionService', 'DefaultImportRunService', 'DefaultIndexService', 'DefaultIndexerLogService', 'DefaultIndexerService',
        'DefaultInterceptorService', 'DefaultSearchService', 'DefaultTokenService', 'DefaultValidatorService', 'DefaultWorkflow2SchemaService'
    ] },
    activeModules: {
        groups: [],
        modules: ['cmsStaged', 'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexusData', 'partnerSiteData',
            'kickoffLocal', 'wcmsStagedServer']
    },
    publishEnabled: true,
    runtimeRole: { code: 'WCMS_STAGED', publication: 'STAGED' },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['WCMS_STAGED'],
        contributions: [{ moduleName: 'axis', sections: ['axisBaseline'] }] } },
    database: { default: { mongodb: { master: {
        URI: 'mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal',
        databaseName: 'kickoffLocalWcmsStaged'
    } } } },
    cms: { publication: {
        enabled: true,
        runtimeRole: 'STAGED',
        baselines: { axis: { releaseCode: 'axis:axisBaseline', releaseVersion: '1.0.0',
            rootType: 'site', rootCode: 'axisCmsSite', sourceVersion: '0' },
        nexus: { releaseCode: 'nexusData:nexusCorporateSite', releaseVersion: '1.0.0', dataType: 'core',
            rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
        nexusupdate: { releaseCode: 'nexusData:nexusCorporateSiteUpdate', releaseVersion: '1.0.1', dataType: 'core',
            rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
        frameworkdocs: { contentPackCode: 'nodicsDocumentation', releaseVersion: '0.14.2',
            rootType: 'site', rootCode: 'nodicsDocumentationSite', sourceVersion: '0' },
        axisdocs: { contentPackCode: 'axisDocumentation', releaseVersion: '0.3.32',
            rootType: 'site', rootCode: 'axisDocumentationSite', sourceVersion: '0' },
        kickoffdocs: { contentPackCode: 'kickoffDocumentation', releaseVersion: '0.6.2',
            rootType: 'site', rootCode: 'kickoffDocumentationSite', sourceVersion: '0' } },
        workflow: { target: { moduleName: 'process', connectionName: 'process', connectionType: 'abstract',
            timeoutMs: 10000, maxAttempts: 2 } },
        targetTransportProvider: 'DefaultCmsPublicationModuleTransportService',
        target: { moduleName: 'cms', connectionName: 'cmsOnline', connectionType: 'abstract' }
    } },
    editorial: { workflow: { processBaseUrl: 'http://127.0.0.1:4330' } },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4312, httpsHost: '127.0.0.1', httpsPort: 4313 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4312, httpsHost: 'localhost', httpsPort: 4313 } },
        cmsOnline: { endpoint: { httpHost: '127.0.0.1', httpPort: 4314, httpsHost: '127.0.0.1', httpsPort: 4315 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4314, httpsHost: 'localhost', httpsPort: 4315 } },
        profile: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        process: { endpoint: { httpHost: '127.0.0.1', httpPort: 4330, httpsHost: '127.0.0.1', httpsPort: 4331 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4330, httpsHost: 'localhost', httpsPort: 4331 } }
    }
};
