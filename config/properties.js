/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer module
 * @owner kickoff
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = Object.freeze({
    data: Object.freeze({
        contentPacks: Object.freeze({
            packs: Object.freeze({
                kickoffDocumentation: Object.freeze({
                    enabled: true,
                    manifestPack: 'nodics.kickoff',
                    source: Object.freeze({
                        type: 'LOCAL_PROJECT',
                        contentPath: 'data/core-v001',
                        manifestPath: 'data/manifest.json',
                        manifestSection: 'documentation'
                    }),
                    updatePolicy: Object.freeze({
                        allowDowngrade: false,
                        sameVersionContentChange: 'REJECT'
                    }),
                    presentation: Object.freeze({
                        title: 'Nodics Kickoff documentation',
                        unavailableMessage: 'Kickoff documentation has not been installed for this environment.',
                        disabledMessage: 'Documentation imports are not enabled for this environment.',
                        importAction: 'Import Kickoff documentation',
                        updateAction: 'Update Kickoff documentation',
                        retryAction: 'Retry import'
                    })
                })
            })
        })
    }),
    backofficeCapabilities: Object.freeze({
        'nodics.kickoff': Object.freeze({
            enabled: true,
            capabilityId: 'nodics-kickoff-documentation',
            displayName: 'Nodics Kickoff',
            category: 'project',
            icon: 'content',
            contractVersion: 0,
            minimumClientContractVersion: 0,
            roles: Object.freeze(['UI_COMPOSITION_PROVIDER']),
            documentation: Object.freeze([
                Object.freeze({
                    id: 'nodics-kickoff',
                    label: 'Nodics Kickoff',
                    type: 'CMS',
                    route: '/docs/nodics-kickoff',
                    order: 400,
                    connectionModule: 'cms',
                    site: 'kickoffDocumentationSite',
                    catalog: 'documentationContentCatalog',
                    defaultPage: '/docs/nodics-kickoff',
                    packCode: 'kickoffDocumentation',
                    initializationProfile: 'kickoffdocs',
                    dashboard: Object.freeze({
                        kind: 'Customer project guide',
                        icon: 'content',
                        summary: 'Reference project setup, local runtime topology, project modules, and safe customer customization guidance.',
                        audiences: Object.freeze(['architect', 'developer', 'operator', 'partner']),
                        coverage: Object.freeze({
                            score: 55,
                            status: 'PARTIAL',
                            signals: Object.freeze(['Project ownership', 'Local runtime topology', 'Customization boundary']),
                            gaps: Object.freeze(['More sample business flows', 'More production deployment guidance'])
                        })
                    })
                })
            ]),
            navigation: Object.freeze([
                Object.freeze({
                    id: 'documentation-nodics-kickoff',
                    parentId: 'documentation',
                    parentModuleName: 'backoffice',
                    label: 'Nodics Kickoff',
                    route: '/docs/nodics-kickoff',
                    icon: 'content',
                    order: 140,
                    group: Object.freeze({ id: 'documentation', label: 'Documentation', order: 1600 }),
                    perspectives: Object.freeze(['operations']),
                    contexts: Object.freeze(['environment', 'tenant', 'enterprise']),
                    featureState: 'ACTIVE'
                })
            ])
        })
    })
});
