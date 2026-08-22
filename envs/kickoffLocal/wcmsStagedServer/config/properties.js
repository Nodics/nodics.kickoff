/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
const agoraDomains = require('../../../../config/agora-domain-composition').resolve();

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
        modules: ['cmsStaged', 'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexusWebData', 'partnerSiteData', 'agoraCommonData', ...agoraDomains.projectPacks,
            'kickoffLocal', 'wcmsStagedServer']
    },
    publishEnabled: true,
    runtimeRole: { code: 'WCMS_STAGED', publication: 'STAGED' },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['WCMS_STAGED'],
        initializationProfiles: { localWcmsFoundation: { enabled: true,
            label: 'Local WCMS foundation',
            description: 'Install the required initialization and core releases for the Local Staged content runtime.',
            completionMessage: 'The Staged content foundation is ready. You can review content in Axis and submit approved versions for Online publication.',
            steps: [{ dataType: 'init' }, { dataType: 'core' }] } },
        contributions: [{ moduleName: 'axis', sections: ['axisBaseline'] }] } },
    database: { default: { mongodb: { master: {
        URI: 'mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal',
        databaseName: 'kickoffLocalWcmsStaged'
    } } } },
    cms: { publication: {
        enabled: true,
        runtimeRole: 'STAGED',
        baselines: { axis: { releaseCode: 'axis:axisBaseline', releaseVersion: '0.0.0',
            rootType: 'site', rootCode: 'axisCmsSite', sourceVersion: '0' },
        nexusupdate: { releaseCode: 'nexusWebData:nexusCorporateSiteUpdate', releaseVersion: '0.0.0', dataType: 'core',
            rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
        nexusecosystemrepair: { releaseCode: 'nexusWebData:nexusCorporateEcosystemComponentRepair', releaseVersion: '0.0.0',
            dataType: 'core', rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
        nexusincremental: { releaseCode: 'nexusWebData:nexusCorporateIncrementalProof', releaseVersion: '0.0.0',
            dataType: 'core', rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
        nexusprofessionalcopy: { releaseCode: 'nexusWebData:nexusCorporateProfessionalCopyUpdate', releaseVersion: '0.0.0',
            dataType: 'core', rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
        agora: { releaseCode: 'agoraCommonData:agoraStorefrontSite', releaseVersion: '0.0.0', dataType: 'core',
            rootType: 'site', rootCode: 'agoraStorefrontSite', sourceVersion: '0' },
        agoraapparel: { releaseCode: 'agoraApparelData:agoraApparelContentCatalog', releaseVersion: '0.0.0', dataType: 'sample',
            rootType: 'site', rootCode: 'agoraApparelSite', sourceVersion: '0' },
        agoraelectronics: { releaseCode: 'agoraElectronicsData:agoraElectronicsContentCatalog', releaseVersion: '0.0.0', dataType: 'sample',
            rootType: 'site', rootCode: 'agoraElectronicsSite', sourceVersion: '0' },
        agoratelco: { releaseCode: 'agoraTelcoData:agoraTelcoContentCatalog', releaseVersion: '0.0.0', dataType: 'sample',
            rootType: 'site', rootCode: 'agoraTelcoSite', sourceVersion: '0' },
        frameworkdocs: { contentPackCode: 'nodicsDocumentation', releaseVersion: '0.0.0',
            rootType: 'site', rootCode: 'nodicsDocumentationSite', sourceVersion: '0' },
        axisdocs: { contentPackCode: 'axisDocumentation', releaseVersion: '0.0.0',
            rootType: 'site', rootCode: 'axisDocumentationSite', sourceVersion: '0' },
        kickoffdocs: { contentPackCode: 'kickoffDocumentation', releaseVersion: '0.0.0',
            rootType: 'site', rootCode: 'kickoffDocumentationSite', sourceVersion: '0' } },
        workflow: { target: { moduleName: 'process', connectionName: 'process', connectionType: 'abstract',
            timeoutMs: 10000, maxAttempts: 2 } },
        targetTransportProvider: 'DefaultCmsPublicationModuleTransportService',
        target: { moduleName: 'cms', connectionName: 'cmsOnline', connectionType: 'abstract' }
    } },
    editorial: { workflow: { processBaseUrl: 'http://127.0.0.1:4330' },
        publication: { runtimeRole: 'STAGED', targetTransportProvider: 'DefaultEditorialPublicationModuleTransportService',
            target: { moduleName: 'editorial', connectionName: 'cmsOnline', connectionType: 'abstract' } } },
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
