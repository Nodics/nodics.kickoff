/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';

/** @module kickoffDockerLocal/config/runtimeProperties @description Builds explicit server deltas without reading kickoffLocal configuration. */

const endpoint = (host, port) => ({ endpoint: { httpHost: '0.0.0.0', httpPort: port, httpsHost: '0.0.0.0', httpsPort: port + 1 },
    abstractEndpoint: { httpHost: host, httpPort: port, httpsHost: host, httpsPort: port + 1 } });
const platformConnections = { profile: endpoint('platform', 4300), backoffice: endpoint('platform', 4300) };
const publicationConnections = {
    wcmsStaged: endpoint('wcms-staged', 4312),
    cmsStaged: endpoint('wcms-staged', 4312), wcmsOnline: endpoint('wcms-online', 4314), cmsOnline: endpoint('wcms-online', 4314),
    process: endpoint('process', 4330)
};
const connections = { ...platformConnections, ...publicationConnections };
const projectModules = ['nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt'];
const database = name => ({ default: { mongodb: { master: { URI: process.env.NODICS_MONGODB_URI, databaseName: name } } } });
const dataReleases = (roles, contributions = []) => ({ lifecycleMetadataRequired: true, destinationEnforced: true,
    environmentClass: 'LOCAL_PRODUCTION_SIMULATION', allowedDestinationRoles: roles, contributions });
const distributedAuthCache = {
    channels: { auth: { enabled: true, engine: 'redis', fallback: false } },
    engines: {
        redis: {
            enabled: true,
            distributed: true,
            atomicConsume: true,
            options: {
                url: process.env.REDIS_URL, host: null, port: null, database: 0, prefix: 'kickoffCore',
                password: process.env.REDIS_PASSWORD,
                sentinel: {
                    enabled: true, name: 'nodics', password: process.env.REDIS_PASSWORD,
                    endpoints: [{ host: 'redis-sentinel', port: 26379 }],
                    connectTimeout: 5000, commandTimeout: 3000,
                    retryDelayMs: 250, maximumRetryDelayMs: 5000
                }
            }
        }
    }
};
const productionSimulationSecurity = {
    authSecurity: {
        jwt: { secret: process.env.AUTH_JWT_SECRET },
        apiKey: { pepper: process.env.AUTH_API_KEY_PEPPER },
        securityStamp: { enabled: true, failClosed: true, allowMissingStamp: false, cacheModuleName: 'kickoffCore' },
        refreshToken: { requireDistributedCache: true }
    },
    cache: {
        enabled: true,
        invalidation: { crossNode: true },
        kickoffCore: distributedAuthCache
    }
};

/** Returns the Docker-only configuration for one recognized server module. */
module.exports = function runtimeProperties(server) {
    const definitions = {
        platformServer: {
            activeModules: { groups: [], modules: [...projectModules, 'axis', 'partnerSiteData', 'kickoffDockerLocal', server] },
            runtimeRole: { code: 'PLATFORM', publication: 'OPERATIONAL' }, database: database('kickoffDockerLocalPlatform'),
            profileBrowserSession: { enabled: true, refreshCookieName: 'nodics_axis_refresh', csrfCookieName: 'nodics_axis_csrf',
                cookiePath: '/nodics/profile/v0/employee/browser', csrfCookiePath: '/', sameSite: 'Lax', secure: false, maximumAgeSeconds: 86400 },
            backofficeApplicationInitialization: { profiles: {
                nexus: { code: 'nexus', type: 'WEBSITE_BUNDLE', owner: 'nexusData', applicationCode: 'nexus', siteCode: 'nexusCorporateSite', baselineCode: 'nexus',
                    target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } },
                nexusupdate: { code: 'nexusupdate', type: 'WEBSITE_BUNDLE_UPDATE', owner: 'nexusData', applicationCode: 'nexus', siteCode: 'nexusCorporateSite', baselineCode: 'nexusupdate',
                    target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } },
                frameworkdocs: { code: 'frameworkdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.docs', applicationCode: 'axis', siteCode: 'nodicsDocumentationSite', baselineCode: 'frameworkdocs',
                    target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } },
                axisdocs: { code: 'axisdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'axis', applicationCode: 'axis', siteCode: 'axisDocumentationSite', baselineCode: 'axisdocs',
                    target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } },
                kickoffdocs: { code: 'kickoffdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.kickoff', applicationCode: 'axis', siteCode: 'kickoffDocumentationSite', baselineCode: 'kickoffdocs',
                    target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } }
            } },
            servers: { default: endpoint('platform', 4300), ...publicationConnections }
        },
        wcmsStagedServer: {
            httpHardening: { cors: { allowedOrigins: ['http://localhost:4100', 'http://127.0.0.1:4100'], deniedOrigins: ['http://localhost:4200', 'http://127.0.0.1:4200'] } },
            activeModules: { groups: [], modules: ['cmsStaged', ...projectModules, 'nexusData', 'partnerSiteData', 'kickoffDockerLocal', server] },
            publishEnabled: true, runtimeRole: { code: 'WCMS_STAGED', publication: 'STAGED' },
            apiExposure: { categories: { dataImport: { enabled: true }, dataExport: { enabled: true }, mediaManagement: { enabled: true } } },
            data: { dataReleases: dataReleases(['WCMS_STAGED'], [{ moduleName: 'axis', sections: ['axisBaseline'] }]) },
            database: database('kickoffDockerLocalWcmsStaged'),
            media: { storage: { providers: { local: { basePath: '/var/lib/nodics/media-staged' } } } },
            cms: { publication: { enabled: true, runtimeRole: 'STAGED', baselines: {
                axis: { releaseCode: 'axis:axisBaseline', releaseVersion: '1.0.0', rootType: 'site', rootCode: 'axisCmsSite', sourceVersion: '0' },
                nexus: { releaseCode: 'nexusData:nexusCorporateSite', releaseVersion: '1.0.0', dataType: 'core', rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
                nexusupdate: { releaseCode: 'nexusData:nexusCorporateSiteUpdate', releaseVersion: '1.0.1', dataType: 'core', rootType: 'site', rootCode: 'nexusCorporateSite', sourceVersion: '0' },
                frameworkdocs: { contentPackCode: 'nodicsDocumentation', releaseVersion: '0.15.0', rootType: 'site', rootCode: 'nodicsDocumentationSite', sourceVersion: '0' },
                axisdocs: { contentPackCode: 'axisDocumentation', releaseVersion: '0.3.32', rootType: 'site', rootCode: 'axisDocumentationSite', sourceVersion: '0' },
                kickoffdocs: { contentPackCode: 'kickoffDocumentation', releaseVersion: '0.7.0', rootType: 'site', rootCode: 'kickoffDocumentationSite', sourceVersion: '0' }
            }, targetTransportProvider: 'DefaultCmsPublicationModuleTransportService',
                workflow: { target: { moduleName: 'process', connectionName: 'process', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } },
                target: { moduleName: 'cms', connectionName: 'cmsOnline', connectionType: 'abstract' } } },
            editorial: { workflow: { processBaseUrl: 'http://process:4330' } },
            servers: { default: endpoint('wcms-staged', 4312), ...connections }
        },
        wcmsOnlineServer: {
            activeModules: { groups: [], modules: [...projectModules, 'kickoffDockerLocal', server] },
            publishEnabled: false, runtimeRole: { code: 'WCMS_ONLINE', publication: 'ONLINE' },
            data: { dataReleases: dataReleases([]) }, database: database('kickoffDockerLocalWcmsOnline'),
            media: { storage: { providers: { local: { basePath: '/var/lib/nodics/media-online' } } } },
            cms: { publication: { enabled: true, runtimeRole: 'ONLINE', targetTransportProvider: null } },
            apiExposure: { categories: { schemaWorkbench: { enabled: false }, schemaMaintenance: { enabled: false },
                dataImport: { enabled: false }, dataExport: { enabled: false }, mediaManagement: { enabled: false } } },
            servers: { default: endpoint('wcms-online', 4314), ...connections }
        },
        processServer: {
            httpHardening: { cors: { allowedOrigins: ['http://localhost:4100', 'http://127.0.0.1:4100'],
                deniedOrigins: ['http://localhost:4200', 'http://127.0.0.1:4200'] } },
            activeModules: { groups: [], modules: [...projectModules, 'kickoffDockerLocal', server] },
            runtimeRole: { code: 'PROCESS', publication: 'OPERATIONAL' }, data: { dataReleases: { ...dataReleases(['PROCESS'], [{ moduleName: 'cms', sections: ['cmsPublicationApproval'] }]),
                installers: { PROCESS_DEFINITION: 'DefaultProcessDefinitionContributionService' } } },
            apiExposure: { categories: { dataImport: { enabled: true }, dataExport: { enabled: false } } },
            database: { ...database('kickoffDockerLocalProcess'), cronjob: { mongodb: { master: { URI: process.env.NODICS_MONGODB_URI, databaseName: 'kickoffDockerLocalCron' } } } },
            process: { publicationDecisionCallback: { target: { moduleName: 'cms', connectionName: 'cmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 } },
                actionAdapters: { allowedActions: [
                    { moduleName: 'nodics.process', operation: 'noop', description: 'Safe no-op adapter for framework smoke tests and beginner demos' },
                    { moduleName: 'editorial', operation: 'applyDecision', service: 'DefaultKickoffEditorialProcessAdapterService', method: 'applyDecision', description: 'Delegates Editorial approval decisions to WCMS' },
                    { moduleName: 'editorial', operation: 'publishApproved', service: 'DefaultKickoffEditorialProcessAdapterService', method: 'publishApproved', description: 'Delegates approved Editorial publication to WCMS' },
                    { moduleName: 'cms', operation: 'applyPublicationDecision', service: 'DefaultProcessPublicationDecisionCallbackService', method: 'applyPublicationDecision', description: 'Returns publication decisions to WCMS Staged' }
                ] } },
            editorialProcessAdapter: { wcmsBaseUrl: 'http://wcms-staged:4312' },
            servers: { default: endpoint('process', 4330), ...connections }
        },
        engagementServer: {
            activeModules: { groups: [], modules: [...projectModules, 'nexusData', 'kickoffDockerLocal', server] },
            runtimeRole: { code: 'ENGAGEMENT', publication: 'OPERATIONAL' }, data: { dataReleases: dataReleases(['ENGAGEMENT']) },
            engagement: { capabilities: { contactSubmission: true, testimonial: true, customerReview: true, customerFeedback: true } },
            customerFeedback: { enabled: true }, database: database('kickoffDockerLocalEngagement'),
            servers: { default: endpoint('engagement', 4340), ...connections }
        },
        commerceServer: {
            activeModules: { groups: [], modules: [...projectModules, 'kickoffDockerLocal', server] },
            runtimeRole: { code: 'COMMERCE', publication: 'OPERATIONAL' }, database: database('kickoffDockerLocalCommerce'),
            stripeProvider: { enabled: true, maturity: 'OFFLINE_CONFORMANCE', sandboxOnly: true, liveQualified: false },
            servers: { default: endpoint('commerce', 4350), ...connections }
        }
    };
    if (!definitions[server]) throw new Error('Unsupported kickoffDockerLocal server: ' + server);
    return { ...productionSimulationSecurity, ...definitions[server] };
};
