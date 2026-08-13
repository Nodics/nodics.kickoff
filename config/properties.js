'use strict';

module.exports = Object.freeze({
    project: Object.freeze({ code: 'nodics.kickoff' }),
    data: Object.freeze({
        contentPacks: Object.freeze({
            packs: Object.freeze({
                kickoffDocumentation: Object.freeze({
                    enabled: true,
                    manifestPack: 'nodics.kickoff',
                    source: Object.freeze({
                        type: 'LOCAL_PROJECT',
                        contentPath: 'data/core',
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
            contractVersion: 1,
            minimumClientContractVersion: 1,
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
                    group: Object.freeze({ id: 'documentation', label: 'Documentation', order: 650 }),
                    perspectives: Object.freeze(['operations']),
                    contexts: Object.freeze(['environment', 'tenant', 'enterprise']),
                    featureState: 'ACTIVE'
                })
            ])
        })
    })
});
