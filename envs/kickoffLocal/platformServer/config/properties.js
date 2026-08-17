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
    backofficeApplicationInitialization: {
        profiles: {
            nexus: {
                code: 'nexus',
                type: 'WEBSITE_BUNDLE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexus',
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            nexusupdate: {
                code: 'nexusupdate',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexusWebData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusupdate',
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            frameworkdocs: {
                code: 'frameworkdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.docs',
                applicationCode: 'axis', siteCode: 'nodicsDocumentationSite', baselineCode: 'frameworkdocs', contentPackCode: 'nodicsDocumentation',
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            axisdocs: {
                code: 'axisdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'axis',
                applicationCode: 'axis', siteCode: 'axisDocumentationSite', baselineCode: 'axisdocs', contentPackCode: 'axisDocumentation',
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            },
            kickoffdocs: {
                code: 'kickoffdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.kickoff',
                applicationCode: 'axis', siteCode: 'kickoffDocumentationSite', baselineCode: 'kickoffdocs', contentPackCode: 'kickoffDocumentation',
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
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
            'axis',
            'kickoffLocal',
            'platformServer'
        ]
    },
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
