/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares wasteServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalWaste"
        }
      }
    },
    "wasteCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteMaterial": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteCollection": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteSubmission": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteVerification": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteReceipt": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteImpact": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteMovement": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wasteCompliance": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "servers": {
    "platform": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platform"
      ]
    },
    "platformServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platformServer"
      ]
    },
    "profile": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "profile"
      ]
    },
    "backoffice": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "backoffice"
      ]
    },
    "wcmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStaged"
      ]
    },
    "wcmsStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStagedServer"
      ]
    },
    "cmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsStaged"
      ]
    },
    "wcmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnline"
      ]
    },
    "wcmsOnlineServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnlineServer"
      ]
    },
    "cmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsOnline"
      ]
    },
    "process": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "process"
      ]
    },
    "processServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "processServer"
      ]
    },
    "commerce": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerce"
      ]
    },
    "commerceServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceServer"
      ]
    },
    "commerceStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStaged"
      ]
    },
    "commerceStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStagedServer"
      ]
    },
    "engagement": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagement"
      ]
    },
    "engagementServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagementServer"
      ]
    },
    "loyalty": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyalty"
      ]
    },
    "loyaltyServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyaltyServer"
      ]
    },
    "location": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "location"
      ]
    },
    "locationServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "locationServer"
      ]
    },
    "wcms": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcms"
      ]
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4370,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4371
      },
      "abstractEndpoint": {
        "httpHost": "waste",
        "httpPort": 4370,
        "httpsHost": "waste",
        "httpsPort": 4371
      }
    }
  },
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
        }
      }
    }
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "circa.ewaste",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "kickoffDockerLocal",
      "wasteServer",
      "nodics.waste",
      "wasteCore",
      "wasteMaterial",
      "wasteCollection",
      "wasteSubmission",
      "wasteVerification",
      "wasteReceipt",
      "wasteImpact",
      "wasteMovement",
      "wasteCompliance",
      "wasteApi",
      "waste",
      "eWaste",
      "kickoffWaste",
      "wasteRecycling",
      "search",
      "elastic",
      "copilotPolicy",
      "copilotKnowledge",
      "copilotConversation",
      "discoverySource",
      "discoveryMapping",
      "discoveryProjection",
      "discoveryRuntime",
      "discoveryQuery",
      "discoveryConfig",
      "copilotProvider",
      "ollamaProvider",
      "openAiProvider",
      "redisCache"
    ]
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "waste": "waste.operational"
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffDockerLocal"
    ],
    "allowMissingModelServices": true,
    "requiredServiceNames": [
      "DefaultWasteSubmissionService",
      "DefaultWasteAssetService",
      "DefaultWasteImpactResultService"
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
      "wasteMaterial": true,
      "wasteMovement": true,
      "wasteReceipt": true,
      "wasteSubmission": true,
      "wasteVerification": true
    },
    "serviceNames": [
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
  "runtimeRole": {
    "code": "WASTE",
    "publication": "OPERATIONAL"
  },
  "apiExposure": {
    "categories": {
      "eWasteCustomer": {
        "enabled": true
      },
      "circaCustomer": {
        "enabled": true
      },
      "serviceRegistry": {
        "enabled": true
      },
      "schemaApi": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      },
      "wasteInternal": {
        "enabled": true
      }
    }
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "WASTE"
      ],
      "initializationProfiles": {
        "localWasteFoundation": {
          "enabled": true,
          "label": "Local Waste foundation",
          "description": "Install Waste Management reference releases for schema-driven family, category, material, collection, evidence, receipt, and impact presets.",
          "completionMessage": "The Local Waste foundation is ready. Operators can validate collection eligibility, submissions, evidence, receipts, and impact calculations.",
          "steps": [
            {
              "dataType": "core",
              "releaseCodes": [
                "wasteMaterial:core-v001",
                "eWaste:core-reference",
                "kickoffWaste:project-reference"
              ]
            }
          ]
        }
      }
    }
  },
  "wasteSubmission": {
    "metadataSuggestion": {
      "enabled": true,
      "adapter": "openai",
      "profile": "eWastePhotoMetadata"
    }
  },
  "eWaste": {
    "outcomeCommunication": {
      "detailLinks": {
        "IN_APP": {
          "url": "http://localhost:6600/mobile",
          "parameter": "submission"
        },
        "TELEGRAM": {
          "url": "https://t.me/nodics_ewaste_circa_local_bot",
          "parameter": "startapp"
        }
      }
    },
    "conversation": {
      "project": "circa.ewaste",
      "adapter": "ollama",
      "profile": "customerGuidance"
    }
  },
  "copilot": {
    "conversation": {
      "storage": "GENERATED_SERVICE",
      "allowVolatileLocalStorage": false
    },
    "knowledge": {
      "ingestion": {
        "enabled": true,
        "indexTenant": "default"
      },
      "retrieval": {
        "enabled": true
      },
      "repositoryRoots": {
        "circa-help": "/Users/himkardwivedi/Apps/HimkarPrj/nodicsRoot/nodics.kickoff/modules/circa.ewaste/docs/customer-knowledge"
      },
      "sourceRegistry": {
        "definitions": [
          {
            "code": "circa-customer-guidance-v1",
            "repository": "circa-help",
            "project": "circa.ewaste",
            "module": "circa.ewaste",
            "owner": "circa.ewaste",
            "version": "c8c3581bba2187d7a93f80ecf1d275fd4d400e411a18bda2795f3cdf954e3257",
            "sourceType": "CUSTOMER_PROJECT",
            "classification": "CUSTOMER",
            "paths": [
              "v1/journey.md"
            ],
            "allowedExtensions": [
              ".md"
            ],
            "allowedChannels": [
              "CUSTOMER"
            ],
            "tenantScopes": [
              "default"
            ],
            "enterpriseScopes": [
              "default"
            ],
            "customerProjectScopes": [
              "circa.ewaste"
            ],
            "requiredPermissions": [
              "waste.submission.create"
            ],
            "secretScanPolicy": "REQUIRED",
            "enabled": true
          }
        ]
      }
    },
    "providers": {
      "enabled": true,
      "default": {
        "maximumRequestBytes": 8000000
      },
      "adapters": {
        "openai": {
          "enabled": true,
          "credential": {
            "mode": "SECRET_REFERENCE",
            "secretRef": "env:OPENAI_EWASTE_API_KEY"
          },
          "model": {
            "name": "gpt-5.6-luna",
            "store": false
          },
          "generation": {
            "reasoningEffort": "none"
          },
          "connection": {
            "timeoutMs": 60000
          }
        },
        "ollama": {
          "enabled": true,
          "model": {
            "name": "gemma3:4b",
            "contextWindow": 4096
          },
          "generation": {
            "numPredict": 1200
          },
          "connection": {
            "timeoutMs": 120000
          }
        }
      },
      "profiles": {
        "eWastePhotoMetadata": {
          "maximumOutputTokens": 2400,
          "structuredOutput": true,
          "imageDetail": "high"
        },
        "structuredTool": {
          "maximumOutputTokens": 1200
        },
        "customerGuidance": {
          "temperature": 0.1,
          "topP": 0.9,
          "maximumOutputTokens": 500,
          "structuredOutput": true
        }
      }
    }
  },
  "waste": {
    "accelerator": {
      "enabled": true,
      "umbrella": "waste",
      "scenarioAccelerators": [
        "eWaste"
      ],
      "presetPackCodes": [
        "EWASTE_CORE_PRESETS"
      ]
    },
    "capabilities": {
      "materialCatalogue": true,
      "collectionAcceptance": true,
      "submissionLifecycle": true,
      "evidencePolicy": true,
      "verification": true,
      "receipt": true,
      "impactCalculation": true,
      "movementTracking": true,
      "complianceEvidence": true
    }
  }
};
