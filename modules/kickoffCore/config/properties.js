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
  "tooling": {
    "acceptance": {
      "guidedInitialization": {
        "publicationProfiles": {
          "$config": "replace",
          "value": [
            "nexus",
            "nexusupdate",
            "nexusecosystemrepair",
            "agoraapparel",
            "agoraelectronics",
            "agoratelco"
          ]
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
          },
          "contributions": [
            {
              "moduleName": "axis",
              "sections": [
                "axisBaseline",
                "core-v002"
              ]
            }
          ]
        }
      }
    }
  },
  "activeModules": {
    "compositions": {
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
          "environment": "kickoffLocal"
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
              "name": "NODICS_COPILOT_AXIS_ROOT",
              "fallback": {
                "$config": "path",
                "base": "project",
                "relative": "../nodics.exp/nodics.axis"
              }
            }
          },
          "sourceRegistry": {
            "definitions": {
              "$config": "replace",
              "value": [
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
                  "sourceType": "README",
                  "classification": "INTERNAL",
                  "paths": [
                    "README.md",
                    "**/README.md"
                  ],
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.internal.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
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
                  }
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
                  "sourceType": "AGENTS_CONTRACT",
                  "classification": "RESTRICTED",
                  "paths": [
                    "AGENTS.md",
                    "**/AGENTS.md",
                    "**/llm/contracts/*.md"
                  ],
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.restricted.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
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
                  }
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
                    "fallback": "kickoff-local-development"
                  },
                  "sourceType": "README",
                  "classification": "INTERNAL",
                  "paths": [
                    "README.md",
                    "**/README.md"
                  ],
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.internal.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
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
                  }
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
                    "fallback": "kickoff-local-development"
                  },
                  "sourceType": "AGENTS_CONTRACT",
                  "classification": "RESTRICTED",
                  "paths": [
                    "AGENTS.md",
                    "**/AGENTS.md",
                    "**/llm/contracts/*.md"
                  ],
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.restricted.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
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
                  }
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
                  "sourceType": "CUSTOMER_PROJECT",
                  "classification": "CUSTOMER",
                  "paths": [
                    "README.md",
                    "**/README.md",
                    "docs/**/*.md"
                  ],
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
                  "tenantScopes": [
                    "default"
                  ],
                  "customerProjectScopes": [
                    "kickoff"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.customer.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
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
                  }
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
                  "sourceType": "CUSTOMER_PROJECT",
                  "classification": "CUSTOMER",
                  "paths": [
                    "AGENTS.md",
                    "**/AGENTS.md",
                    "**/llm/contracts/*.md"
                  ],
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
                  "tenantScopes": [
                    "default"
                  ],
                  "customerProjectScopes": [
                    "kickoff"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.customer.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
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
                  }
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
                  "sourceType": "SOURCE_CODE",
                  "classification": "RESTRICTED",
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
                  "requiredPermissions": [
                    "copilot.knowledge.restricted.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
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
                  }
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
                  "sourceType": "SOURCE_CODE",
                  "classification": "RESTRICTED",
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
                  "requiredPermissions": [
                    "copilot.knowledge.restricted.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
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
                  }
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
                    "fallback": "kickoff-local-development"
                  },
                  "sourceType": "SOURCE_CODE",
                  "classification": "RESTRICTED",
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
                  "requiredPermissions": [
                    "copilot.knowledge.restricted.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
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
                            "name": "NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "code": "kickoff-copilot-composition-source",
                  "repository": "nodics.kickoff",
                  "project": "kickoff",
                  "module": "platformServer",
                  "owner": "nodics.kickoff",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KICKOFF_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "projectVersion"
                    }
                  },
                  "sourceType": "SOURCE_CODE",
                  "classification": "RESTRICTED",
                  "paths": [
                    "envs/kickoffLocal/platformServer/**/*.js"
                  ],
                  "excludedPaths": [
                    "envs/kickoffLocal/platformServer/llm/generated"
                  ],
                  "allowedExtensions": [
                    ".js"
                  ],
                  "limits": {
                    "maximumFiles": 100,
                    "maximumFileBytes": 524288,
                    "maximumSourceBytes": 2097152
                  },
                  "tenantScopes": [
                    "default"
                  ],
                  "customerProjectScopes": [
                    "kickoff"
                  ],
                  "requiredPermissions": [
                    "copilot.knowledge.restricted.read"
                  ],
                  "secretScanPolicy": "REQUIRED",
                  "allowedChannels": [
                    "EMPLOYEE"
                  ],
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
                            "name": "NODICS_COPILOT_KICKOFF_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          }
                        ]
                      }
                    ]
                  }
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
          "agoraapparel": {
            "code": "agoraapparel",
            "type": "STOREFRONT_DOMAIN_BUNDLE",
            "owner": "agora.apparel",
            "applicationCode": "agora",
            "siteCode": "agoraApparelSite",
            "baselineCode": "agoraapparel",
            "presentation": {
              "title": "Agora Apparel",
              "kind": "PROJECT",
              "category": "accelerator",
              "order": 210,
              "summary": "Apparel storefront accelerator as a complete business-facing domain bundle.",
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
                  "manifestPath": "modules/agora.apparel/data/sample-v001/content/assets/agora-cms-media/assetManifest.js",
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
          },
          "agoraelectronics": {
            "code": "agoraelectronics",
            "type": "STOREFRONT_DOMAIN_BUNDLE",
            "owner": "agora.electronics",
            "applicationCode": "agora",
            "siteCode": "agoraElectronicsSite",
            "baselineCode": "agoraelectronics",
            "presentation": {
              "title": "Agora Electronics",
              "kind": "PROJECT",
              "category": "accelerator",
              "order": 220,
              "summary": "Electronics storefront accelerator as a complete business-facing domain bundle.",
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
                  "manifestPath": "modules/agora.electronics/data/sample-v002/content/assets/agora-cms-media/assetManifest.js",
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
          },
          "agoratelco": {
            "code": "agoratelco",
            "type": "STOREFRONT_DOMAIN_BUNDLE",
            "owner": "agora.telco",
            "applicationCode": "agora",
            "siteCode": "agoraTelcoSite",
            "baselineCode": "agoratelco",
            "presentation": {
              "title": "Agora Telco",
              "kind": "PROJECT",
              "category": "accelerator",
              "order": 230,
              "summary": "Telco storefront accelerator as a complete business-facing domain bundle.",
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
                  "manifestPath": "modules/agora.telco/data/sample-v002/content/assets/agora-cms-media/assetManifest.js",
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
          },
          "frameworkdocs": {
            "code": "frameworkdocs",
            "type": "DOCUMENTATION_BUNDLE",
            "owner": "nodics.docs",
            "applicationCode": "axis",
            "siteCode": "nodicsDocumentationSite",
            "baselineCode": "frameworkdocs",
            "contentPackCode": "nodicsDocumentation",
            "presentation": {
              "title": "Framework Documentation",
              "kind": "DOCUMENTATION",
              "category": "documentation",
              "order": 300,
              "summary": "Framework documentation content pack and Online delivery profile.",
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
