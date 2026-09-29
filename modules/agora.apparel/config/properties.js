/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const backofficeApplicationVisual = {
    "mediaCode": "agora-owned-home-hero-summer-edit",
    "alt": "Agora Apparel summer collection"
};

/**
 * @module agora.apparel/config/properties
 * @description Defines customer application configuration for agora.apparel.
 * @layer config
 * @owner agora.apparel
 * @override Project, environment, server, node, tenant, or customer layers may override these defaults through Nodics configuration layering.
 */
module.exports = {
    "tooling": {
        "acceptance": {
            "loyaltyRewardCheckout": {
                "productCode": "agoraStylePass5Coupon",
                "variantCode": "agoraStylePass5CouponDigital",
                "programCode": "default",
                "rewardTypeCode": "points",
                "rewardCurrency": "POINTS",
                "providerCode": "loyalty-reward-points",
                "rewardScale": 2,
                "customerCode": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_CUSTOMER_CODE" },
                "walletCode": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_WALLET_CODE" },
                "maximumRewardAmount": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_MAXIMUM_REWARD_AMOUNT" },
                "cart": {
                    "storeCode": "agoraMainStore",
                    "channelCode": "web",
                    "locale": "en",
                    "jurisdiction": "AE",
                    "currency": "USD"
                },
                "customer": {
                    "email": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_CUSTOMER_EMAIL" },
                    "firstName": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_CUSTOMER_FIRST_NAME" },
                    "lastName": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_CUSTOMER_LAST_NAME" }
                },
                "shippingAddress": {
                    "line1": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_ADDRESS_LINE1" },
                    "city": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_ADDRESS_CITY" },
                    "region": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_ADDRESS_REGION" },
                    "postalCode": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_ADDRESS_POSTAL_CODE" },
                    "country": { "$config": "env", "name": "NODICS_LOYALTY_CHECKOUT_ADDRESS_COUNTRY" }
                }
            }
        }
    },
    "cms": {
        "runtimeRoleProfiles": {
            "WCMS_STAGED": {
                "publication": {
                    "baselines": {
                        "agoraapparel": {
                            "releaseCode": "agora.apparel:agoraApparelContentCatalog",
                            "releaseVersion": "0.0.8",
                            "dataType": "sample",
                            "rootType": "site",
                            "rootCode": "agoraApparelSite",
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
                    "agoraapparel": {
                        "code": "agoraapparel",
                        "type": "STOREFRONT_DOMAIN_BUNDLE",
                        "owner": "agora.apparel",
                        "applicationCode": "agora",
                        "siteCode": "agoraApparelSite",
                        "baselineCode": "agoraapparel",
                        "presentation": {
                            "title": "Agora Apparel",
                            "visual": backofficeApplicationVisual,
                            "kind": "PROJECT",
                            "category": "application",
                            "order": 210,
                            "summary": "Apparel customer storefront application over the reusable apparel accelerator.",
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
                                    "code": "agora.apparel:agoraApparelContentCatalog",
                                    "kind": "Storefront content",
                                    "required": true,
                                    "trigger": "USER",
                                    "dataType": "sample",
                                    "targetServer": "wcmsStaged",
                                    "targetRuntimeRole": "WCMS_STAGED"
                                },
                                {
                                    "code": "agora.apparel:agoraApparelMediaAssets",
                                    "type": "MEDIA_ASSET_MANIFEST",
                                    "kind": "Storefront media files",
                                    "required": true,
                                    "trigger": "USER",
                                    "targetServer": "wcmsStaged",
                                    "targetRuntimeRole": "WCMS_STAGED",
                                    "manifestModule": "agora.apparel",
                                    "manifestPath": "data/sample-v001/content/assets/agora-cms-media/assetManifest.js",
                                    "businessPurpose": "AGORA_STOREFRONT_CONTENT"
                                },
                                {
                                    "code": "agora.apparel:agoraApparelCommerceCatalog",
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
