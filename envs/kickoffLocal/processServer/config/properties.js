/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module kickoffLocal/processServer/config/properties
 * @description Defines only local Process server coordinates for the Kickoff reference environment.
 * @layer environment-server-config
 * @owner nodics.kickoff
 * @override Customer projects may change local host/port/topology without copying framework Process defaults.
 */
module.exports = {
    httpHardening: { cors: { allowedOrigins: ['http://localhost:3100', 'http://127.0.0.1:3100'],
        deniedOrigins: ['http://localhost:3200', 'http://127.0.0.1:3200'] } },
    apiExposure: { categories: { dataImport: { enabled: true }, dataExport: { enabled: false } } },
    localResetProvider: { enabled: true, environmentAllowlist: ['kickoffLocal'], serviceNames: [
        'DefaultProcessAuditEventService', 'DefaultProcessTaskService', 'DefaultProcessIncidentService', 'DefaultProcessInstanceService',
        'DefaultProcessTriggerService', 'DefaultProcessDefinitionVersionService', 'DefaultProcessDefinitionService',
        'DefaultCronJobLogService', 'DefaultCronJobService', 'DefaultCatalogService', 'DefaultConfigurationService',
        'DefaultDataInstallationService', 'DefaultEmsFailedMessagesService', 'DefaultEventListenerService', 'DefaultImportDefinitionService',
        'DefaultImportRunService', 'DefaultIndexService', 'DefaultIndexerLogService', 'DefaultIndexerService', 'DefaultInterceptorService',
        'DefaultSearchService', 'DefaultTokenService', 'DefaultValidatorService', 'DefaultWorkflow2SchemaService'
    ] },
    activeModules: {
        groups: [],
        modules: [
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'processServer'
        ]
    },
    runtimeRole: { code: 'PROCESS', publication: 'OPERATIONAL' },
    data: {
        dataReleases: {
            lifecycleMetadataRequired: true,
            destinationEnforced: true,
            environmentClass: 'LOCAL',
            allowedDestinationRoles: ['PROCESS'],
            contributions: [{ moduleName: 'cms', sections: ['cmsPublicationApproval'] }],
            installers: { PROCESS_DEFINITION: 'DefaultProcessDefinitionContributionService' }
        }
    },
    database: {
        default: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocalProcess'
                }
            }
        },
        cronjob: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocalCron'
                }
            }
        },
        workflow: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocalProcess'
                }
            }
        }
    },
    process: {
        publicationDecisionCallback: {
            target: { moduleName: 'cms', connectionName: 'cmsStaged', connectionType: 'abstract',
                timeoutMs: 10000, maxAttempts: 2 }
        },
        actionAdapters: {
            allowedActions: [
                {
                    moduleName: 'nodics.process',
                    operation: 'noop',
                    description: 'Safe no-op adapter for framework smoke tests and beginner demos'
                },
                {
                    moduleName: 'editorial',
                    operation: 'applyDecision',
                    service: 'DefaultKickoffEditorialProcessAdapterService',
                    method: 'applyDecision',
                    description: 'Delegates Editorial approval decisions from Process to the WCMS-owned Editorial API'
                },
                {
                    moduleName: 'editorial',
                    operation: 'publishApproved',
                    service: 'DefaultKickoffEditorialProcessAdapterService',
                    method: 'publishApproved',
                    description: 'Delegates approved Editorial publication from Process to the WCMS-owned Editorial API'
                },
                {
                    moduleName: 'cms',
                    operation: 'applyPublicationDecision',
                    service: 'DefaultProcessPublicationDecisionCallbackService',
                    method: 'applyPublicationDecision',
                    description: 'Returns the approved or rejected workflow decision to the WCMS Staged publication authority'
                }
            ]
        }
    },
    editorialProcessAdapter: {
        wcmsBaseUrl: 'http://127.0.0.1:4312'
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4330,
                httpsHost: '127.0.0.1',
                httpsPort: 4331
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4330,
                httpsHost: 'localhost',
                httpsPort: 4331
            }
        },
        profile: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            }
        },
        backoffice: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            }
        },
        cmsStaged: {
            endpoint: { httpHost: '127.0.0.1', httpPort: 4312, httpsHost: '127.0.0.1', httpsPort: 4313 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4312, httpsHost: 'localhost', httpsPort: 4313 }
        }
    }
};
