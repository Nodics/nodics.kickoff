/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const backofficeApplicationVisual = {
    "mediaCode": "agora-owned-telco-hero-connected-plans-v2",
    "alt": "Agora Telco connected plans"
};

/**
 * @module agora.telco/config/properties
 * @description Defines customer application configuration for agora.telco.
 * @layer config
 * @owner agora.telco
 * @override Project, environment, server, node, tenant, or customer layers may override these defaults through Nodics configuration layering.
 */
module.exports = {
    "cms": {
        "runtimeRoleProfiles": {
            "WCMS_STAGED": {
                "publication": {
                    "baselines": {
                        "agoratelco": {
                            "releaseCode": "agora.telco:agoraTelcoContentCatalog",
                            "releaseVersion": "0.0.1",
                            "dataType": "sample",
                            "rootType": "site",
                            "rootCode": "agoraTelcoSite",
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
                    "agoratelco": {
                        "code": "agoratelco",
                        "type": "STOREFRONT_DOMAIN_BUNDLE",
                        "owner": "agora.telco",
                        "applicationCode": "agora",
                        "siteCode": "agoraTelcoSite",
                        "baselineCode": "agoratelco",
                        "presentation": {
                            "title": "Agora Telco",
                            "visual": backofficeApplicationVisual,
                            "kind": "PROJECT",
                            "category": "application",
                            "order": 230,
                            "summary": "Telco customer storefront application over the reusable telco accelerator.",
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
                                    "code": "agora.telco:agoraTelcoContentCatalog",
                                    "kind": "Storefront content",
                                    "required": true,
                                    "trigger": "USER",
                                    "dataType": "sample",
                                    "targetServer": "wcmsStaged",
                                    "targetRuntimeRole": "WCMS_STAGED"
                                },
                                {
                                    "code": "agora.telco:agoraTelcoMediaAssets",
                                    "type": "MEDIA_ASSET_MANIFEST",
                                    "kind": "Storefront media files",
                                    "required": true,
                                    "trigger": "USER",
                                    "targetServer": "wcmsStaged",
                                    "targetRuntimeRole": "WCMS_STAGED",
                                    "manifestModule": "agora.telco",
                                    "manifestPath": "data/sample-v001/content/assets/agora-cms-media/assetManifest.js",
                                    "businessPurpose": "AGORA_STOREFRONT_CONTENT"
                                },
                                {
                                    "code": "agora.telco:agoraTelcoCommerceCatalog",
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
