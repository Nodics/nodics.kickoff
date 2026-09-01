/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const wasteRuntimeModules = [
    'nodics.waste',
    'wasteCore',
    'wasteMaterial',
    'wasteCollection',
    'wasteSubmission',
    'wasteVerification',
    'wasteReceipt',
    'wasteImpact',
    'wasteMovement',
    'wasteCompliance',
    'wasteApi',
    'waste',
    'eWaste',
    'kickoffWaste'
];

/** @module kickoffLocal/wasteServer/config/properties @description Defines isolated local Waste Management coordinates and runtime configuration. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own waste accelerator, database, and endpoint configuration. */
module.exports = {
    activeModules: { groups: [], modules: ['nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'wasteServer'].concat(wasteRuntimeModules) },
    runtimeRole: { code: 'WASTE', publication: 'OPERATIONAL' },
    runtimeAuthorityContexts: { modules: { waste: 'waste.operational' } },
    apiExposure: { categories: { serviceRegistry: { enabled: true }, dataImport: { enabled: true }, wasteInternal: { enabled: true } } },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['WASTE'],
        initializationProfiles: { localWasteFoundation: { enabled: true,
            label: 'Local Waste foundation',
            description: 'Install Waste Management reference releases for schema-driven family, category, material, collection, evidence, receipt, and impact presets.',
            completionMessage: 'The Local Waste foundation is ready. Operators can validate collection eligibility, submissions, evidence, receipts, and impact calculations.',
            steps: [{ dataType: 'core', releaseCodes: ['eWaste:core-reference', 'kickoffWaste:project-reference'] }] } } } },
    waste: {
        accelerator: {
            enabled: true,
            umbrella: 'waste',
            scenarioAccelerators: ['eWaste'],
            presetPackCodes: ['EWASTE_CORE_PRESETS']
        },
        capabilities: {
            materialCatalogue: true,
            collectionAcceptance: true,
            submissionLifecycle: true,
            evidencePolicy: true,
            verification: true,
            receipt: true,
            impactCalculation: true,
            movementTracking: true,
            complianceEvidence: true
        }
    },
    database: {
        default: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteCore: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteMaterial: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteCollection: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteSubmission: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteVerification: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteReceipt: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteImpact: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteMovement: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } },
        wasteCompliance: { mongodb: { master: { databaseName: 'kickoffLocalWaste' } } }
    },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4370, httpsHost: '127.0.0.1', httpsPort: 4371 }, abstractEndpoint: { httpHost: 'localhost', httpPort: 4370, httpsHost: 'localhost', httpsPort: 4371 } },
        profile: { remoteOnly: true, endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { remoteOnly: true, endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        process: { endpoint: { httpHost: '127.0.0.1', httpPort: 4330, httpsHost: '127.0.0.1', httpsPort: 4331 } }
    }
};
