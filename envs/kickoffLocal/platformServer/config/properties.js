/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffLocal/platformServer/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner platformServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
    httpHardening: { cors: { allowedOrigins: ['http://localhost:3100', 'http://127.0.0.1:3100',
        'http://localhost:3200', 'http://127.0.0.1:3200',
        'http://localhost:3300', 'http://127.0.0.1:3300'] } },
    apiExposure: { categories: { dataExport: { enabled: true } } },
    backofficeRegistration: {
        connectionName: 'default'
    },
    backofficeApplicationInitialization: {
        profiles: {
            nexus: {
                code: 'nexus',
                type: 'WEBSITE_BUNDLE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexus',
                presentation: {
                    title: 'Nexus Corporate',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 100,
                    summary: 'Corporate website accelerator published from WCMS Staged to Online.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'ACTIVATION', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'nexusWebData:init', kind: 'INITIAL_DATA', required: true, trigger: 'ACTIVATION' },
                    { code: 'nexusWebData:sample', kind: 'SAMPLE_DATA', required: false, trigger: 'USER' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            nexusupdate: {
                code: 'nexusupdate',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusupdate',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            nexusecosystemrepair: {
                code: 'nexusecosystemrepair',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusecosystemrepair',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            nexusincremental: {
                code: 'nexusincremental',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusincremental',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            nexusprofessionalcopy: {
                code: 'nexusprofessionalcopy',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusprofessionalcopy',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            agora: {
                code: 'agora',
                type: 'STOREFRONT_BUNDLE',
                owner: 'agoraCommonData',
                applicationCode: 'agora',
                siteCode: 'agoraStorefrontSite',
                baselineCode: 'agora',
                presentation: {
                    title: 'Agora Storefront',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 200,
                    summary: 'Commerce storefront accelerator. Domain-specific bundles will become separate business-facing accelerators.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process', 'Commerce', 'Discovery'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'ACTIVATION', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'agoraCommonData:init', kind: 'INITIAL_DATA', required: true, trigger: 'ACTIVATION' },
                    { code: 'agoraCommonData:sample', kind: 'SAMPLE_DATA', required: false, trigger: 'USER' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            frameworkdocs: {
                code: 'frameworkdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.docs',
                applicationCode: 'axis', siteCode: 'nodicsDocumentationSite', baselineCode: 'frameworkdocs', contentPackCode: 'nodicsDocumentation',
                presentation: {
                    title: 'Framework Documentation',
                    kind: 'DOCUMENTATION',
                    category: 'documentation',
                    order: 300,
                    summary: 'Framework documentation content pack and Online delivery profile.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            axisdocs: {
                code: 'axisdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'axis',
                applicationCode: 'axis', siteCode: 'axisDocumentationSite', baselineCode: 'axisdocs', contentPackCode: 'axisDocumentation',
                presentation: {
                    title: 'Nodics Axis Documentation',
                    kind: 'DOCUMENTATION',
                    category: 'documentation',
                    order: 400,
                    summary: 'Axis product documentation content pack and Online delivery profile.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            kickoffdocs: {
                code: 'kickoffdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.kickoff',
                applicationCode: 'axis', siteCode: 'kickoffDocumentationSite', baselineCode: 'kickoffdocs', contentPackCode: 'kickoffDocumentation',
                presentation: {
                    title: 'Nodics Kickoff Documentation',
                    kind: 'DOCUMENTATION',
                    category: 'documentation',
                    order: 500,
                    summary: 'Reference-project documentation content pack and Online delivery profile.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            }
        }
    },
    backofficeFunctionalModuleActivationData: {
        modules: {
            'nodics.wcms': {
                dataPackages: [
                    { code: 'wcms:runtime-defaults', classification: 'runtime-default', owner: 'nodics.wcms', required: true, trigger: 'ACTIVATION', targetModule: 'cms', targetServer: 'wcmsStaged', targetDatabase: 'kickoffLocalWcmsStaged', operation: 'IMPORT' },
                    { code: 'wcms:sample-content', classification: 'sample', owner: 'nodics.wcms', required: false, trigger: 'USER', targetModule: 'cms', targetServer: 'wcmsStaged', targetDatabase: 'kickoffLocalWcmsStaged', operation: 'IMPORT_SAMPLE' }
                ]
            },
            'nodics.commerce': {
                dataPackages: [
                    { code: 'commerce:core-reference', classification: 'core', owner: 'nodics.commerce', required: true, trigger: 'ACTIVATION', targetModule: 'commerce', targetServer: 'commerceServer', targetDatabase: 'kickoffLocalCommerce', operation: 'IMPORT' },
                    { code: 'commerce:sample-catalog', classification: 'sample', owner: 'nodics.commerce', required: false, trigger: 'USER', targetModule: 'commerce', targetServer: 'commerceServer', targetDatabase: 'kickoffLocalCommerce', operation: 'IMPORT_SAMPLE' }
                ]
            },
            'nodics.communication': {
                dataPackages: [
                    { code: 'communication:runtime-defaults', classification: 'runtime-default', owner: 'nodics.communication', required: true, trigger: 'ACTIVATION', targetModule: 'communication', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT' },
                    { code: 'communication:sample-templates', classification: 'sample', owner: 'nodics.communication', required: false, trigger: 'USER', targetModule: 'communication', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT_SAMPLE' }
                ]
            }
        }
    },
    backofficeLocalReset: {
        enabled: true,
        environmentAllowlist: ['kickoffLocal'],
        providers: [
            { code: 'wcmsStaged', moduleName: 'system', connectionName: 'wcmsStaged' },
            { code: 'wcmsOnline', moduleName: 'system', connectionName: 'wcmsOnline' },
            { code: 'process', moduleName: 'system', connectionName: 'process' },
            { code: 'platform', moduleName: 'system', connectionName: 'default' }
        ]
    },
    localResetProvider: {
        enabled: true, environmentAllowlist: ['kickoffLocal'],
        serviceNames: ['DefaultAddressService', 'DefaultBackofficeAxisPolicyService', 'DefaultBackofficeContractActivationService',
            'DefaultBackofficeContractSnapshotService', 'DefaultBackofficeFunctionalModuleRegistrationService', 'DefaultCatalogService',
            'DefaultConfigurationService', 'DefaultContactService', 'DefaultCustomerService', 'DefaultDataInstallationService',
            'DefaultEmsFailedMessagesService', 'DefaultEnterpriseService', 'DefaultEventListenerService', 'DefaultIdentityMigrationAuditService',
            'DefaultImportDefinitionService', 'DefaultImportRunService', 'DefaultIndexService', 'DefaultIndexerLogService', 'DefaultIndexerService',
            'DefaultInterceptorService', 'DefaultLocalizationKeyService', 'DefaultLocalizationOnlinePointerService', 'DefaultLocalizationReleaseService',
            'DefaultLocalizationValueService', 'DefaultPrincipalScopeAssignmentService', 'DefaultSearchService', 'DefaultTenantService',
            'DefaultUserStateService', 'DefaultValidatorService', 'DefaultWorkflow2SchemaService', 'DefaultUserGroupService',
            'DefaultPasswordService', 'DefaultTokenService', 'DefaultEmployeeService']
    },
    activeModules: {
        groups: [],
        modules: [
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'partnerSiteData',
            'axis',
            'kickoffLocal',
            'platformServer'
        ]
    },
    runtimeRole: { code: 'PLATFORM', publication: 'OPERATIONAL' },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['PLATFORM'] } },
    profileBrowserSession: {
        enabled: true,
        refreshCookieName: 'nodics_axis_refresh',
        csrfCookieName: 'nodics_axis_csrf',
        cookiePath: '/nodics/profile/v0/employee/browser',
        csrfCookiePath: '/',
        sameSite: 'Lax',
        secure: false,
        maximumAgeSeconds: 86400
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4300,
                httpsHost: 'localhost',
                httpsPort: 4301
            }
        },
        wcmsStaged: {
            endpoint: { httpHost: '127.0.0.1', httpPort: 4312, httpsHost: '127.0.0.1', httpsPort: 4313 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4312, httpsHost: 'localhost', httpsPort: 4313 }
        },
        wcmsOnline: { endpoint: { httpHost: '127.0.0.1', httpPort: 4314, httpsHost: '127.0.0.1', httpsPort: 4315 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4314, httpsHost: 'localhost', httpsPort: 4315 } },
        process: { endpoint: { httpHost: '127.0.0.1', httpPort: 4330, httpsHost: '127.0.0.1', httpsPort: 4331 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4330, httpsHost: 'localhost', httpsPort: 4331 } }
    }
};
