/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const backofficeApplicationVisual = {
    "mediaCode": "agora-owned-electronics-hero-connected-work-v2",
    "alt": "Agora Electronics connected workspace"
};

/**
 * @module agora.electronics/config/properties
 * @description Defines customer application configuration for agora.electronics.
 * @layer config
 * @owner agora.electronics
 * @override Project, environment, server, node, tenant, or customer layers may override these defaults through Nodics configuration layering.
 */
module.exports = {
    "cms": {
        "runtimeRoleProfiles": {
            "WCMS_STAGED": {
                "publication": {
                    "baselines": {
                        "agoraelectronics": {
                            "releaseCode": "agora.electronics:agoraElectronicsContentCatalog",
                            "releaseVersion": "0.0.1",
                            "dataType": "sample",
                            "rootType": "site",
                            "rootCode": "agoraElectronicsSite",
                            "sourceVersion": "0"
                        }
                    }
                }
            }
        }
    },
    "backofficeApplicationVisual": backofficeApplicationVisual,
    "backofficeApplicationInitialization": {
        "runtimeRoleProfiles": {
            "PLATFORM": {
                "profiles": {
                    "agoraelectronics": {
                        "code": "agoraelectronics",
                        "type": "STOREFRONT_DOMAIN_BUNDLE",
                        "owner": "agora.electronics",
                        "applicationCode": "agora",
                        "siteCode": "agoraElectronicsSite",
                        "baselineCode": "agoraelectronics",
                        "presentation": {
                            "title": "Agora Electronics",
                            "visual": backofficeApplicationVisual,
                            "kind": "PROJECT",
                            "category": "application",
                            "order": 220,
                            "summary": "Electronics customer storefront application over the reusable electronics accelerator.",
                            "requiredServers": [
                                "Platform",
                                "WCMS Staged",
                                "WCMS Online",
                                "Process",
                                "Commerce",
                                "Discovery"
                            ],
                            "requiredFunctionalModules": [
                                {
                                    "code": "nodics.commerce",
                                    "label": "Commerce capability"
                                },
                                {
                                    "code": "nodics.discovery",
                                    "label": "Discovery capability"
                                }
                            ],
                            "activationPolicy": {
                                "approvalRequiredForOnline": true,
                                "requiredDataTrigger": "USER",
                                "sampleDataTrigger": "USER"
                            }
                        },
                        "dataPackages": {
                            "$config": "replace",
                            "value": [
                                {
                                    "code": "agora.electronics:agoraElectronicsContentCatalog",
                                    "kind": "Storefront content",
                                    "required": true,
                                    "trigger": "USER",
                                    "dataType": "sample",
                                    "targetServer": "wcmsStaged",
                                    "targetRuntimeRole": "WCMS_STAGED"
                                },
                                {
                                    "code": "agora.electronics:agoraElectronicsMediaAssets",
                                    "type": "MEDIA_ASSET_MANIFEST",
                                    "kind": "Storefront media files",
                                    "required": true,
                                    "trigger": "USER",
                                    "targetServer": "wcmsStaged",
                                    "targetRuntimeRole": "WCMS_STAGED",
                                    "manifestModule": "agora.electronics",
                                    "manifestPath": "data/sample-v001/content/assets/agora-cms-media/assetManifest.js",
                                    "businessPurpose": "AGORA_STOREFRONT_CONTENT"
                                },
                                {
                                    "code": "agora.electronics:agoraElectronicsCommerceCatalog",
                                    "kind": "Commerce catalog",
                                    "required": true,
                                    "trigger": "USER",
                                    "dataType": "sample",
                                    "targetServer": "commerceStaged",
                                    "targetRuntimeRole": "COMMERCE_STAGED"
                                }
                            ]
                        }
                    }
                }
            }
        }
    }
};
