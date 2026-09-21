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
          "databaseName": "kickoffDockerLocalWaste"
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
    "wasteReward": {},
    "wasteMovement": {},
    "wasteCompliance": {},
    "rulesDefinition": {},
    "eWaste": {}
  },
  "servers": {
    "platform": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "platformServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnlineServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "processServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerce": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagement": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagementServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyalty": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyaltyServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "location": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "locationServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcms": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
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
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "waste",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true
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
      "nodics.waste",
      "nodics.rulesEngine",
      "rulesCore",
      "rulesDefinition",
      "rulesEvaluation",
      "rulesApi",
      "wasteCore",
      "wasteMaterial",
      "wasteCollection",
      "wasteSubmission",
      "wasteVerification",
      "wasteReceipt",
      "wasteImpact",
      "wasteReward",
      "wasteMovement",
      "wasteCompliance",
      "wasteApi",
      "waste",
      "eWaste",
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
    }
  },
  "runtimeRole": {
    "code": "WASTE",
    "publication": "OPERATIONAL"
  },
  "apiExposure": {
    "categories": {
      "circaCustomer": {
        "enabled": true
      },
      "serviceRegistry": {
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
                  "circa.ewaste:waste-policy"
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
  "rulesEngine": {
    "approval": {
      "processTarget": {
        "connectionName": "process"
      },
      "actionAuthority": {
        "connectionName": "process"
      }
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
    "conversation": {},
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
            "timeoutMs": 60000
          }
        },
        "ollama": {
          "enabled": true,
          "model": {
            "name": "gemma3:4b"
          },
          "generation": {
            "numPredict": 1200
          },
          "connection": {}
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
  }
};
