/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module kickoffLocal/wasteServer/config/properties @description Defines isolated local Waste Management coordinates and runtime configuration. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own waste accelerator, database, and endpoint configuration. */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-waste-1",
    "remoteModules": [
      "profile",
      "backoffice",
      "media",
      "cms",
      "editorial",
      "locationCore",
      "loyaltyCore",
      "loyaltyApi",
      "commerceCore",
      "engagementCore",
      "workflow"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_LOCAL_WASTE_API_KEY",
      "fallback": null
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
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
  "activeModules": {
    "groups": [],
    "modules": [
      "circa.ewaste",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
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
  "runtimeRole": {
    "code": "WASTE",
    "publication": "OPERATIONAL"
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "waste": "waste.operational"
    }
  },
  "apiExposure": {
    "categories": {
      "circaCustomer": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      }
    }
  },
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localWasteFoundation": {
          "enabled": true,
          "label": "Local Waste foundation",
          "description": "Install Waste Management reference releases for schema-driven family, category, material, collection, evidence, receipt, and impact presets.",
          "completionMessage": "The Local Waste foundation is ready. Operators can validate collection eligibility, submissions, evidence, receipts, and impact calculations.",
          "steps": {
            "$config": "replace",
            "value": [
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
          "url": "http://localhost:3600/mobile",
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
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true
      }
    }
  },
  "copilot": {
    "knowledge": {
      "ingestion": {
        "enabled": true,
        "indexTenant": "default"
      },
      "retrieval": {
        "enabled": true
      },
      "repositoryRoots": {
        "circa-help": {
          "$config": "path",
          "base": "project",
          "relative": "modules/circa.ewaste/docs/customer-knowledge"
        }
      },
      "sourceRegistry": {
        "definitions": {
          "$config": "replace",
          "value": [
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
            "secretRef": "env:OPENAI_EWASTE_API_KEY"
          },
          "model": {
            "name": "gpt-5.6-luna"
          },
          "generation": {
            "reasoningEffort": "none"
          },
          "connection": {
            "timeoutMs": 85000
          }
        },
        "ollama": {
          "enabled": true,
          "model": {
            "name": "gemma3:4b"
          },
          "generation": {
            "numPredict": 1200
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
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalWaste"
        }
      }
    },
    "wasteCore": {},
    "wasteMaterial": {},
    "wasteCollection": {},
    "wasteSubmission": {},
    "wasteVerification": {},
    "wasteReceipt": {},
    "wasteImpact": {},
    "wasteMovement": {},
    "wasteCompliance": {}
  },
  "servers": {
    "engagement": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "commerceStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.endpoint"
      }
    },
    "loyalty": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.endpoint",
        "fields": [
          "httpPort"
        ]
      },
      "remoteOnly": true
    },
    "wcms": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.endpoint",
        "fields": [
          "httpPort"
        ]
      },
      "remoteOnly": true
    },
    "commerce": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.endpoint",
        "fields": [
          "httpPort"
        ]
      },
      "remoteOnly": true
    },
    "default": {
      "endpoint": {
        "httpPort": 4370,
        "httpsPort": 4371
      }
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.endpoint"
      }
    },
    "location": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    }
  },
  "tooling": {
    "runtime": {
      "code": "waste",
      "script": "start:waste",
      "dependsOn": [
        "platform"
      ],
      "order": 7
    }
  }
};
