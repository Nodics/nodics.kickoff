/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nodics.kickoff/modules/kickoffCore/config/properties
 * @description Nodics Kickoff core project-module configuration defaults.
 * @layer config
 * @owner kickoffCore
 * @override Later active modules may override these defaults through configuration layering.
 */
module.exports = {
  "communication": {
    "runtimeRoleProfiles": {
      "ENGAGEMENT": {
        "$config": "selected",
        "name": "employeeMail",
        "field": "domains",
        "includes": "employee",
        "value": {
          "trustedSourceModules": [
            "eWaste",
            "profile"
          ],
          "templateResources": {
            "modules": { "profile": true }
          }
        }
      }
    }
  },
  "tooling": {
    "acceptance": {
      // Apparel journey and composition-selected catalog fixtures remain customer-owned.
      // Publication evidence has no fallback: nImport release versions are not nPublish receipts.
      "commerceJourney": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "apparel",
        "value": {
          "productCode": "agoraLinenWrapDress",
          "variantCode": "agoraLinenWrapDressIvoryS",
          "secondaryProductCode": "agoraOxfordShirt",
          "secondaryVariantCode": "agoraOxfordShirtIvoryM",
          "categoryCode": "agoraWomen",
          "storeCode": "agoraMainStore",
          "locale": "en",
          "channelCode": "web",
          "jurisdiction": "AE",
          "currency": "USD",
          "promotionCode": "agoraAcceptanceWelcome10",
          "providerToken": {"$config":"env","name":"NODICS_STOREFRONT_PROVIDER_TOKEN","fallback":"tok_test_storefront_4242"},
          "shippingAddress": {
            "line1": "549 Oak St",
            "city": "Crystal Lake",
            "region": "IL",
            "postalCode": "60014",
            "country": "US"
          },
          "shippingMethod": "STANDARD",
          "paymentMethod": "CARD"
        },
        "otherwise": {}
      },
      "commercePublication": {
        "catalogs": {
          "$config": "replace",
          "value": [
            {
              "$config": "selected",
              "name": "agora",
              "field": "domains",
              "includes": "apparel",
              "value": {
                "catalogVersion": "agoraApparelStaged",
                "storeCode": "agoraMainStore",
                "locale": "en",
                "productCodes": [
                  "agoraLinenWrapDress"
                ],
                "mediaModules": [
                  "agora.apparel"
                ],
                "publications": {
                  "product": {
                    "code": {"$config":"env","name":"NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "pricing": {
                    "code": {"$config":"env","name":"NODICS_AGORA_APPAREL_PRICING_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_APPAREL_PRICING_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_APPAREL_PRICING_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "promotion": {
                    "code": {"$config":"env","name":"NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "inventory": {
                    "code": {"$config":"env","name":"NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "tax": {
                    "code": {"$config":"env","name":"NODICS_AGORA_APPAREL_TAX_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_APPAREL_TAX_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_APPAREL_TAX_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "media": {
                    "code": {"$config":"env","name":"NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_SOURCE_VERSION","fallback":""}
                  }
                }
              }
            },
            {
              "$config": "selected",
              "name": "agora",
              "field": "domains",
              "includes": "electronics",
              "value": {
                "catalogVersion": "agoraElectronicsStaged",
                "storeCode": "agoraElectronicsStore",
                "locale": "en",
                "productCodes": [
                  "agoraElectronicsNovaPhone"
                ],
                "mediaModules": [
                  "agora.electronics"
                ],
                "publications": {
                  "product": {
                    "code": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "pricing": {
                    "code": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "promotion": {
                    "code": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "inventory": {
                    "code": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "tax": {
                    "code": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "media": {
                    "code": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_SOURCE_VERSION","fallback":""}
                  }
                }
              }
            },
            {
              "$config": "selected",
              "name": "agora",
              "field": "domains",
              "includes": "telco",
              "value": {
                "catalogVersion": "agoraTelcoStaged",
                "storeCode": "agoraTelcoStore",
                "locale": "en",
                "productCodes": [
                  "agoraTelcoUnlimitedPostpaid"
                ],
                "mediaModules": [
                  "agora.telco"
                ],
                "publications": {
                  "product": {
                    "code": {"$config":"env","name":"NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "pricing": {
                    "code": {"$config":"env","name":"NODICS_AGORA_TELCO_PRICING_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_TELCO_PRICING_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_TELCO_PRICING_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "promotion": {
                    "code": {"$config":"env","name":"NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "inventory": {
                    "code": {"$config":"env","name":"NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "tax": {
                    "code": {"$config":"env","name":"NODICS_AGORA_TELCO_TAX_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_TELCO_TAX_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_TELCO_TAX_PUBLICATION_SOURCE_VERSION","fallback":""}
                  },
                  "media": {
                    "code": {"$config":"env","name":"NODICS_AGORA_TELCO_MEDIA_PUBLICATION_CODE","fallback":""},
                    "rootCode": {"$config":"env","name":"NODICS_AGORA_TELCO_MEDIA_PUBLICATION_ROOT_CODE","fallback":""},
                    "sourceVersion": {"$config":"env","name":"NODICS_AGORA_TELCO_MEDIA_PUBLICATION_SOURCE_VERSION","fallback":""}
                  }
                }
              }
            }
          ]
        }
      },
      "commerceLive": {
        "releaseModules": { "$config": "replace", "value": ["agora.apparel", "agora.electronics", "agora.telco"] }
      },
      "editorialLive": {
        "siteCode": "nexusCorporateSite",
        "contributionPath": "data/init-v001/records/process/defaultEditorialProcessDefinitionContributionData.js",
        "manifestPath": "data/manifest.json",
        "contributionSection": "init-v001",
        "contributionCode": "processServer:init-v001"
      },
      "localBootstrap": {
        "publicOriginKey": "nexus",
        "platformInitializationProfile": "localPlatformFoundation",
        "locationInitializationProfile": "localLocationFoundation",
        "verifyDefaultLocationMap": true,
        "requiredCapabilities": { "$config": "replace", "value": [
          "nodics.process", "nodics.communication", "nodics.location", "nodics.waste",
          "nodics.loyalty", "nodics.commerce", "nodics.discovery"
        ] },
        "applicationBundles": { "$config": "replace", "value": [
          { "profileCode": "nexus", "deliveryProbe": { "site": "nexusCorporateSite", "path": "/" } },
          { "profileCode": "circa", "deliveryProbe": { "site": "circaSite", "path": "/" } }
        ] },
        "applicationUpdates": { "$config": "replace", "value": [
          { "profileCode": "nexusupdate", "deliveryProbe": { "site": "nexusCorporateSite", "path": "/" }, "marker": "nexus-corporate-1.0.1" }
        ] },
        "rollbackDocumentationProfiles": { "$config": "replace", "value": ["frameworkdocs", "axisdocs"] },
        "journeyCommands": { "$config": "replace", "value": [
          { "command": "acceptance:agora-commerce-data", "args": ["--execute-install"] },
          { "command": "acceptance:agora-commerce-publication", "args": ["--execute", "--approve-publications"] }
        ] },
        "documentationPackCodes": {
          "$config": "replace",
          "value": ["nodicsDocumentation", "axisDocumentation", "kickoffDocumentation"]
        },
        "documentationPacks": {
          "kickoffDocumentation": {
            "code": "kickoffDocumentation",
            "profileCode": "kickoffdocs",
            "minimumRoutes": 4,
            "navigationComponent": "kickoffDocumentationNavigation",
            "site": "kickoffDocumentationSite",
            "path": "/docs/nodics-kickoff"
          }
        }
      },
      "guidedInitialization": {
        "publicationProfiles": {
          "$config": "replace",
          "value": [
            "nexus",
            "nexusupdate",
            "nexusecosystemrepair",
            "circa",
            "agoraapparel",
            "agoraelectronics",
            "agoratelco"
          ]
        }
      }
    }
  },
  "cms": {
    "runtimeRoleProfiles": {
      "WCMS_STAGED": {
        "publication": {
          "baselines": {
            "kickoffdocs": {
              "contentPackCode": "kickoffDocumentation",
              "releaseVersion": "0.8.6",
              "rootType": "site",
              "rootCode": "kickoffDocumentationSite",
              "sourceVersion": "0"
            }
          }
        }
      }
    }
  },
  "data": {
    "contentPacks": {
      "packs": {
        "kickoffDocumentation": {
          "source": {
            "manifestSection": "documentation"
          },
          "presentation": {
            "title": "Nodics Kickoff documentation"
          }
        }
      }
    },
    "dataReleases": {
      "runtimeRoleProfiles": {
        "WCMS_STAGED": {
          "initializationProfiles": {
            "localDocumentationFoundation": {
              "enabled": true,
              "label": "Local Documentation foundation",
              "description": "Install the WCMS initialization releases required before documentation content packs can be reviewed and published.",
              "completionMessage": "The Local Documentation foundation is ready. Import documentation packs through Setup and Accelerators or the Documentation dashboard, then publish approved content Online.",
              "template": "axisDocumentationFoundation"
            }
          }
        }
      }
    }
  },
  "activeModules": {
    "compositions": {
      "employeeMail": {
        "domains": [{ "code": "employee" }]
      },
      "agora": {
        "environmentVariable": "NODICS_AGORA_DOMAINS",
        "selection": "all",
        "domains": [
          {
            "code": "apparel",
            "frameworkGroup": "apparel",
            "projectPack": "agora.apparel",
            "productSearchContributor": {
              "serviceName": "DefaultApparelProductSearchEnrichmentService",
              "required": true
            },
            "publication": {
              "storeCode": "agoraMainStore",
              "catalogVersion": "agoraApparelStaged",
              "releaseCode": "agoraApparelCommerceCatalog",
              "recordPrefix": "agoraApparel"
            }
          },
          {
            "code": "electronics",
            "frameworkGroup": "electronics",
            "projectPack": "agora.electronics",
            "productSearchContributor": {
              "serviceName": "DefaultElectronicsProductSearchEnrichmentService",
              "required": true
            },
            "publication": {
              "storeCode": "agoraElectronicsStore",
              "catalogVersion": "agoraElectronicsStaged",
              "releaseCode": "agoraElectronicsCommerceCatalog",
              "recordPrefix": "agoraElectronics"
            }
          },
          {
            "code": "telco",
            "frameworkGroup": "telco",
            "projectPack": "agora.telco",
            "impliedProductSearchContributorDomains": [
              "electronics"
            ],
            "productSearchContributor": {
              "serviceName": "DefaultTelcoProductSearchEnrichmentService",
              "required": true
            },
            "publication": {
              "storeCode": "agoraTelcoStore",
              "catalogVersion": "agoraTelcoStaged",
              "releaseCode": "agoraTelcoCommerceCatalog",
              "recordPrefix": "agoraTelco"
            }
          }
        ],
        "sharedModules": [
          {
            "module": "domainCommerceCore",
            "minSelectedDomains": 2
          }
        ],
        "emptySelections": [
          "none",
          "commerce"
        ]
      }
    }
  },
  "localResetProvider": {
    "profiles": {
      "PLATFORM": {
        "modules": {
          "backoffice": true,
          "import": true,
          "localizationCore": true,
          "profile": true,
          "search": true,
          "system": true,
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultEmsFailedMessagesService",
            "DefaultWorkflow2SchemaService"
          ]
        },
        "searchIndexes": [
          {
            "moduleName": "discoveryProjection",
            "indexName": "discoveryDocumentProjection"
          }
        ]
      },
      "WCMS_STAGED": {
        "requiredServiceNames": [
          "DefaultCmsDocumentationAccessPolicyService",
          "DefaultCmsDocumentationDashboardService",
          "DefaultCmsDocumentationNavigationService",
          "DefaultCmsDocumentationNodeService",
          "DefaultCmsDocumentationPageService",
          "DefaultCmsDocumentationProductService",
          "DefaultCmsDocumentationPublicationStateService",
          "DefaultCmsDocumentationSearchMetadataService"
        ],
        "modules": {
          "cms": true,
          "editorial": true,
          "import": true,
          "media": true,
          "publish": true,
          "search": true,
          "system": true,
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultEmsFailedMessagesService",
            "DefaultWorkflow2SchemaService"
          ]
        },
        "searchIndexes": [
          {
            "moduleName": "discoveryProjection",
            "indexName": "discoveryDocumentProjection"
          }
        ]
      },
      "WCMS_ONLINE": {
        "requiredServiceNames": [
          "DefaultCmsDocumentationAccessPolicyService",
          "DefaultCmsDocumentationDashboardService",
          "DefaultCmsDocumentationNavigationService",
          "DefaultCmsDocumentationNodeService",
          "DefaultCmsDocumentationPageService",
          "DefaultCmsDocumentationProductService",
          "DefaultCmsDocumentationPublicationStateService",
          "DefaultCmsDocumentationSearchMetadataService"
        ],
        "modules": {
          "cms": true,
          "editorial": true,
          "import": true,
          "media": true,
          "publish": true,
          "search": true,
          "system": true,
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultEmsFailedMessagesService",
            "DefaultWorkflow2SchemaService"
          ]
        },
        "searchIndexes": [
          {
            "moduleName": "discoveryProjection",
            "indexName": "discoveryDocumentProjection"
          }
        ]
      },
      "PROCESS": {
        "modules": {
          "cronjob": true,
          "import": true,
          "system": true,
          "token": true,
          "validator": true,
          "workflow": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultEmsFailedMessagesService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultSearchService",
            "DefaultWorkflow2SchemaService"
          ]
        }
      },
      "ENGAGEMENT": {
        "requiredServiceNames": [
          "DefaultContactRequestService",
          "DefaultCommsIntentService"
        ],
        "modules": {
          "commsSchema": true,
          "contactSubmission": true,
          "customerFeedback": true,
          "customerReview": true,
          "engagementCore": true,
          "import": true,
          "publish": true,
          "system": true,
          "testimonial": true,
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultCronJobLogService",
            "DefaultCronJobService",
            "DefaultEmsFailedMessagesService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultPipelineService",
            "DefaultProcessAuditEventService",
            "DefaultProcessDefinitionService",
            "DefaultProcessDefinitionVersionService",
            "DefaultProcessIncidentService",
            "DefaultProcessInstanceService",
            "DefaultProcessTaskService",
            "DefaultProcessTriggerService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultSearchService",
            "DefaultWorkflow2SchemaService"
          ]
        }
      },
      "COMMERCE": {
        "requiredServiceNames": [
          "DefaultCommerceOrderService",
          "DefaultProductService",
          "DefaultPaymentTransactionService",
          "DefaultCartService"
        ],
        "modules": {
          "apparelProduct": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "apparel",
            "value": true,
            "otherwise": false
          },
          "bidding": true,
          "cart": true,
          "checkoutCore": true,
          "commerceSearchCore": true,
          "digitalCore": true,
          "discoveryConfig": true,
          "discoveryMapping": true,
          "discoveryProjection": true,
          "discoveryRanking": true,
          "discoverySource": true,
          "electronicsProduct": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "electronics",
            "value": true,
            "otherwise": {
              "$config": "selected",
              "name": "agora",
              "field": "domains",
              "includes": "telco",
              "value": true,
              "otherwise": false
            }
          },
          "fulfillmentCore": true,
          "import": true,
          "inventory": true,
          "order": true,
          "paymentCore": true,
          "pricing": true,
          "product": true,
          "promotion": true,
          "search": true,
          "shoppingList": true,
          "store": true,
          "system": true,
          "tax": true,
          "telcoCatalog": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "telco",
            "value": true,
            "otherwise": false
          },
          "telcoProvisioning": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "telco",
            "value": true,
            "otherwise": false
          },
          "telcoSubscription": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "telco",
            "value": true,
            "otherwise": false
          },
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultCronJobLogService",
            "DefaultCronJobService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultProcessAuditEventService",
            "DefaultProcessDefinitionService",
            "DefaultProcessDefinitionVersionService",
            "DefaultProcessIncidentService",
            "DefaultProcessInstanceService",
            "DefaultProcessTaskService",
            "DefaultProcessTriggerService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService"
          ]
        },
        "searchIndexes": [
          {
            "moduleName": "discoveryProjection",
            "indexName": "discoveryDocumentProjection"
          },
          {
            "moduleName": "product",
            "indexName": "productLocalized"
          },
          {
            "moduleName": "commerceSearchCore",
            "indexName": "commerceSearchRuleProjection"
          }
        ]
      },
      "COMMERCE_STAGED": {
        "requiredServiceNames": [
          "DefaultProductService",
          "DefaultProductPublicationService"
        ],
        "modules": {
          "apparelProduct": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "apparel",
            "value": true,
            "otherwise": false
          },
          "bidding": true,
          "cart": true,
          "checkoutCore": true,
          "commerceSearchCore": true,
          "digitalCore": true,
          "discoveryConfig": true,
          "discoveryMapping": true,
          "discoveryProjection": true,
          "discoveryRanking": true,
          "discoverySource": true,
          "electronicsProduct": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "electronics",
            "value": true,
            "otherwise": {
              "$config": "selected",
              "name": "agora",
              "field": "domains",
              "includes": "telco",
              "value": true,
              "otherwise": false
            }
          },
          "fulfillmentCore": true,
          "import": true,
          "inventory": true,
          "order": true,
          "paymentCore": true,
          "pricing": true,
          "product": true,
          "promotion": true,
          "search": true,
          "shoppingList": true,
          "store": true,
          "system": true,
          "tax": true,
          "telcoCatalog": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "telco",
            "value": true,
            "otherwise": false
          },
          "telcoProvisioning": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "telco",
            "value": true,
            "otherwise": false
          },
          "telcoSubscription": {
            "$config": "selected",
            "name": "agora",
            "field": "domains",
            "includes": "telco",
            "value": true,
            "otherwise": false
          },
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService"
          ]
        },
        "searchIndexes": [
          {
            "moduleName": "discoveryProjection",
            "indexName": "discoveryDocumentProjection"
          },
          {
            "moduleName": "product",
            "indexName": "productLocalized"
          },
          {
            "moduleName": "commerceSearchCore",
            "indexName": "commerceSearchRuleProjection"
          }
        ]
      },
      "LOYALTY": {
        "requiredServiceNames": [
          "DefaultLoyaltyWalletService",
          "DefaultRewardLedgerEntryService"
        ],
        "modules": {
          "import": true,
          "system": true,
          "token": true,
          "validator": true,
          "loyaltyCore": true,
          "loyaltyProgram": true,
          "loyaltyRewardType": true,
          "loyaltyWallet": true,
          "loyaltyLedger": true,
          "loyaltyRedemption": true,
          "loyaltyReservation": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultSearchService"
          ]
        }
      },
      "WASTE": {
        "requiredServiceNames": [
          "DefaultWasteSubmissionService",
          "DefaultWasteAssetService",
          "DefaultWasteImpactResultService",
          "DefaultWasteRewardAssessmentService"
        ],
        "modules": {
          "import": true,
          "search": true,
          "system": true,
          "token": true,
          "validator": true,
          "wasteCollection": true,
          "wasteCompliance": true,
          "wasteCore": true,
          "wasteImpact": true,
          "wasteReward": true,
          "wasteMaterial": true,
          "wasteMovement": true,
          "wasteReceipt": true,
          "wasteSubmission": true,
          "wasteVerification": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService"
          ]
        },
        "searchIndexes": [
          {
            "moduleName": "discoveryProjection",
            "indexName": "discoveryDocumentProjection"
          }
        ]
      },
      "LOCATION": {
        "requiredServiceNames": [
          "DefaultLocationMapProviderConfigurationService"
        ],
        "modules": {
          "import": true,
          "locationCore": true,
          "locationDraft": true,
          "locationMap": true,
          "locationProjection": true,
          "locationSearch": true,
          "locationType": true,
          "system": true,
          "token": true,
          "validator": true
        },
        "serviceNames": {
          "$config": "replace",
          "value": [
            "DefaultLocationApprovalService",
            "DefaultEmsFailedMessagesService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultSearchService",
            "DefaultWorkflow2SchemaService"
          ]
        }
      }
    }
  },
  "backofficeLocalReset": {
    "providers": {
      "$config": "replace",
      "value": [
        {
          "code": "wcmsStaged",
          "connectionName": "wcmsStaged",
          "targetAuthority": {
            "server": "wcmsStagedServer",
            "runtimeRole": {
              "code": "WCMS_STAGED",
              "publication": "STAGED"
            }
          }
        },
        {
          "code": "wcmsOnline",
          "connectionName": "wcmsOnline",
          "targetAuthority": {
            "server": "wcmsOnlineServer",
            "runtimeRole": {
              "code": "WCMS_ONLINE",
              "publication": "ONLINE"
            }
          }
        },
        {
          "code": "process",
          "connectionName": "process",
          "targetAuthority": {
            "server": "processServer",
            "runtimeRole": {
              "code": "PROCESS",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "location",
          "connectionName": "location",
          "targetAuthority": {
            "server": "locationServer",
            "runtimeRole": {
              "code": "LOCATION",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "commerce",
          "connectionName": "commerce",
          "targetAuthority": {
            "server": "commerceServer",
            "runtimeRole": {
              "code": "COMMERCE",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "commerceStaged",
          "connectionName": "commerceStaged",
          "targetAuthority": {
            "server": "commerceStagedServer",
            "runtimeRole": {
              "code": "COMMERCE_STAGED",
              "publication": "STAGED"
            }
          }
        },
        {
          "code": "engagement",
          "connectionName": "engagement",
          "targetAuthority": {
            "server": "engagementServer",
            "runtimeRole": {
              "code": "ENGAGEMENT",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "loyalty",
          "connectionName": "loyalty",
          "targetAuthority": {
            "server": "loyaltyServer",
            "runtimeRole": {
              "code": "LOYALTY",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "waste",
          "connectionName": "waste",
          "targetAuthority": {
            "server": "wasteServer",
            "runtimeRole": {
              "code": "WASTE",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "platform",
          "connectionName": "default",
          "targetAuthority": {
            "server": "platformServer",
            "runtimeRole": {
              "code": "PLATFORM",
              "publication": "OPERATIONAL"
            }
          }
        }
      ]
    }
  },
  "copilot": {
    "runtimeRoleProfiles": {
      "PLATFORM": {
        "core": {
          "customerProject": "kickoff",
          "environment": { "$config": "context", "name": "environmentCode" }
        },
        "api": {
          "enabled": true
        },
        "workbench": {
          "target": {
            "productModule": "product",
            "pricingModule": "pricing",
            "connectionName": "commerceStaged",
            "targetAuthority": {
              "runtimeRole": "COMMERCE_STAGED"
            }
          }
        },
        "knowledge": {
          "ingestion": {
            "enabled": {
              "$config": "env",
              "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
              "fallback": true,
              "type": "boolean"
            },
            "ingestOnStart": {
              "$config": "env",
              "name": "NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START",
              "fallback": true,
              "type": "boolean"
            },
            "startup": {
              "serviceId": "kickoff-local-knowledge-indexer",
              "logSummary": true
            },
            "indexTenant": "default"
          },
          "retrieval": {
            "enabled": {
              "$config": "env",
              "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
              "fallback": true,
              "type": "boolean"
            }
          },
          "repositoryRoots": {
            "nodics.ai": {
              "$config": "env",
              "name": "NODICS_COPILOT_NODICS_AI_ROOT",
              "fallback": {
                "$config": "path",
                "base": "framework",
                "relative": ""
              }
            },
            "nodics.kickoff": {
              "$config": "env",
              "name": "NODICS_COPILOT_KICKOFF_ROOT",
              "fallback": {
                "$config": "path",
                "base": "project",
                "relative": ""
              }
            },
            "nodics.axis": {
              "$config": "env",
              "name": "NODICS_COPILOT_AXIS_ROOT"
            }
          },
          "sourceRegistry": {
            "definitions": {
              "$config": "keyed",
              "key": "code",
              "entries": [
                {
                  "code": "nodics-framework-readme",
                  "repository": "nodics.ai",
                  "project": "nodics",
                  "module": "nodics.ai",
                  "owner": "nodics.ai",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "frameworkVersion"
                    }
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  },
                  "template": "employeeReadme"
                },
                {
                  "code": "nodics-framework-contracts",
                  "repository": "nodics.ai",
                  "project": "nodics",
                  "module": "nodics.ai",
                  "owner": "nodics.ai",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "frameworkVersion"
                    }
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  },
                  "template": "employeeContracts"
                },
                {
                  "code": "nodics-axis-readme",
                  "repository": "nodics.axis",
                  "project": "nodics",
                  "module": "nodics.axis",
                  "owner": "nodics.axis",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_AXIS_VERSION",
                    "fallback": "unversioned"
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      { "$config": "env", "name": "NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED", "fallback": false, "type": "boolean" },
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  },
                  "template": "employeeReadme"
                },
                {
                  "code": "nodics-axis-contracts",
                  "repository": "nodics.axis",
                  "project": "nodics",
                  "module": "nodics.axis",
                  "owner": "nodics.axis",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_AXIS_VERSION",
                    "fallback": "unversioned"
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      { "$config": "env", "name": "NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED", "fallback": false, "type": "boolean" },
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  },
                  "template": "employeeContracts"
                },
                {
                  "code": "kickoff-project-readme",
                  "repository": "nodics.kickoff",
                  "project": "kickoff",
                  "module": "nodics.kickoff",
                  "owner": "nodics.kickoff",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KICKOFF_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "projectVersion"
                    }
                  },
                  "tenantScopes": [
                    "default"
                  ],
                  "customerProjectScopes": [
                    "kickoff"
                  ],
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  },
                  "template": "customerReadme"
                },
                {
                  "code": "kickoff-project-contracts",
                  "repository": "nodics.kickoff",
                  "project": "kickoff",
                  "module": "nodics.kickoff",
                  "owner": "nodics.kickoff",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KICKOFF_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "projectVersion"
                    }
                  },
                  "tenantScopes": [
                    "default"
                  ],
                  "customerProjectScopes": [
                    "kickoff"
                  ],
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  },
                  "template": "customerContracts"
                },
                {
                  "code": "nodics-copilot-source",
                  "repository": "nodics.ai",
                  "project": "nodics",
                  "module": "nodics.copilot",
                  "owner": "nodics.copilot",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "frameworkVersion"
                    }
                  },
                  "paths": [
                    "nodics.copilot/**/*.js"
                  ],
                  "excludedPaths": [
                    "nodics.copilot/**/test",
                    "nodics.copilot/**/llm/generated"
                  ],
                  "allowedExtensions": [
                    ".js"
                  ],
                  "limits": {
                    "maximumFiles": 400,
                    "maximumFileBytes": 524288,
                    "maximumSourceBytes": 8388608
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      },
                      {
                        "$config": "all",
                        "values": [
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          },
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_FRAMEWORK_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          }
                        ]
                      }
                    ]
                  },
                  "template": "employeeSource"
                },
                {
                  "code": "nodics-discovery-source",
                  "repository": "nodics.ai",
                  "project": "nodics",
                  "module": "nodics.discovery",
                  "owner": "nodics.discovery",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "frameworkVersion"
                    }
                  },
                  "paths": [
                    "nodics.discovery/**/*.js"
                  ],
                  "excludedPaths": [
                    "nodics.discovery/**/test",
                    "nodics.discovery/**/llm/generated"
                  ],
                  "allowedExtensions": [
                    ".js"
                  ],
                  "limits": {
                    "maximumFiles": 400,
                    "maximumFileBytes": 524288,
                    "maximumSourceBytes": 8388608
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      },
                      {
                        "$config": "all",
                        "values": [
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          },
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_FRAMEWORK_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          }
                        ]
                      }
                    ]
                  },
                  "template": "employeeSource"
                },
                {
                  "code": "nodics-axis-assistant-source",
                  "repository": "nodics.axis",
                  "project": "nodics",
                  "module": "nodics.axis",
                  "owner": "nodics.axis",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_AXIS_VERSION",
                    "fallback": "unversioned"
                  },
                  "paths": [
                    "src/assistant/**/*.ts",
                    "src/assistant/**/*.tsx",
                    "src/cms/renderers/components/assistant/**/*.tsx"
                  ],
                  "excludedPaths": [
                    "src/**/__tests__",
                    "src/**/*.test.ts",
                    "src/**/*.test.tsx"
                  ],
                  "allowedExtensions": [
                    ".ts",
                    ".tsx"
                  ],
                  "limits": {
                    "maximumFiles": 200,
                    "maximumFileBytes": 524288,
                    "maximumSourceBytes": 4194304
                  },
                  "enabled": {
                    "$config": "all",
                    "values": [
                      { "$config": "env", "name": "NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED", "fallback": false, "type": "boolean" },
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      },
                      {
                        "$config": "all",
                        "values": [
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          },
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED",
                            "fallback": false,
                            "type": "boolean"
                          }
                        ]
                      }
                    ]
                  },
                  "template": "employeeSource"
                }
              ]
            }
          }
        },
        "providers": {
          "enabled": true,
          "default": {
            "adapter": "ollama"
          },
          "adapters": {
            "ollama": {
              "enabled": true
            }
          }
        }
      }
    }
  },
  "engagement": {
    "runtimeRoleProfiles": {
      "ENGAGEMENT": {
        "capabilities": { "testimonial": true, "customerReview": true, "customerFeedback": true }
      }
    }
  },
  "customerFeedback": {
    "runtimeRoleProfiles": {
      "ENGAGEMENT": { "enabled": true }
    }
  },
  "apiExposure": {
    "runtimeRoleProfiles": {
      "WCMS_STAGED": {
        "categories": {
          "dataExport": {
            "enabled": true
          }
        }
      },
      "WCMS_ONLINE": {
        "categories": {
          "schemaApi": {
            "enabled": false
          },
          "schemaMaintenance": {
            "enabled": false
          },
          "dataImport": {
            "enabled": false
          },
          "dataExport": {
            "enabled": false
          },
          "mediaManagement": {
            "enabled": false
          }
        }
      },
      "PROCESS": {
        "categories": {
          "dataExport": {
            "enabled": false
          }
        }
      }
    }
  },
  "backofficeApplicationInitialization": {
    "runtimeRoleProfiles": {
      "PLATFORM": {
        "projectCode": {
          "$config": "env",
          "name": "NODICS_PROJECT_CODE",
          "fallback": {
            "$config": "context",
            "name": "projectCode"
          }
        },
        "projectRoot": {
          "$config": "path",
          "base": "project",
          "relative": ""
        },
        "target": {
          "connectionName": "wcmsStaged"
        },
        "profiles": {
          "frameworkdocs": {
            "enabled": true
          },
          "axisdocs": {
            "enabled": true
          },
          "kickoffdocs": {
            "code": "kickoffdocs",
            "type": "DOCUMENTATION_BUNDLE",
            "owner": "nodics.kickoff",
            "applicationCode": "axis",
            "siteCode": "kickoffDocumentationSite",
            "baselineCode": "kickoffdocs",
            "contentPackCode": "kickoffDocumentation",
            "presentation": {
              "title": "Nodics Kickoff Documentation",
              "kind": "DOCUMENTATION",
              "category": "documentation",
              "order": 500,
              "summary": "Reference-project documentation content pack and Online delivery profile.",
              "requiredServers": [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process"
              ],
              "activationPolicy": {
                "approvalRequiredForOnline": true,
                "requiredDataTrigger": "USER",
                "sampleDataTrigger": "USER"
              }
            }
          }
        }
      }
    }
  },
  "backofficeFunctionalModuleActivationData": {
    "runtimeRoleProfiles": {
      "PLATFORM": {
        "modules": {
          "nodics.commerce": {
            "dataPackages": {
              "$config": "replace",
              "value": [
                {
                  "code": "baseCommerce:core-reference",
                  "targetModule": "baseCommerce",
                  "targetServer": "commerceServer"
                }
              ]
            }
          },
          "nodics.rulesEngine": {
            "dataPackages": {
              "$config": "replace",
              "value": [
                {
                  "code": "rulesApi:rulesPolicyApproval",
                  "targetModule": "workflow",
                  "targetServer": "processServer"
                }
              ]
            }
          },
          "nodics.loyalty": {
            "dataPackages": {
              "$config": "replace",
              "value": [
                {
                  "code": "loyaltyCore:core-enterprise-reference",
                  "targetModule": "profile",
                  "targetServer": "platformServer",
                  "targetDatabase": {
                    "$config": "runtime",
                    "name": "platformServer",
                    "path": "database.default.mongodb.master.databaseName"
                  }
                }
              ]
            }
          },
          "nodics.waste": {
            "dataPackages": {
              "$config": "replace",
              "value": [
                {
                  "code": "wasteCore:core-reference",
                  "targetModule": "profile",
                  "targetServer": "platformServer",
                  "targetDatabase": {
                    "$config": "runtime",
                    "name": "platformServer",
                    "path": "database.default.mongodb.master.databaseName"
                  }
                },
                {
                  "code": "wasteCollection:sample-profile-addresses",
                  "targetModule": "profile",
                  "targetServer": "platformServer",
                  "targetDatabase": {
                    "$config": "runtime",
                    "name": "platformServer",
                    "path": "database.default.mongodb.master.databaseName"
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
};
