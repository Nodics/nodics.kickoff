module.exports = {
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalWaste"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4370,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4371
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5370
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
  "runtimeRole": {
    "code": "WASTE",
    "publication": "OPERATIONAL"
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
