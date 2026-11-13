/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/wasteServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/wasteServer */
module.exports = {
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffDockerLocalWaste",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpHost: "0.0.0.0",
        httpPort: 4370,
        httpsHost: "0.0.0.0",
        httpsPort: 4371,
      },
      browserEndpoint: {
        httpHost: "localhost",
        httpPort: 5370,
      },
      abstractEndpoint: {
        httpHost: "waste",
        httpPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpPort",
        },
        httpsHost: "waste",
        httpsPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpsPort",
        },
      },
    },
  },
  activeModules: {
    groups: [],
    modules: [
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

      "discoveryRuntime",
      "discoveryQuery",

      "copilotProvider",
      "ollamaProvider",
      "openAiProvider",
      "redisCache",
    ],
  },
  runtimeAuthorityContexts: {
    modules: {
      waste: "waste.operational",
    },
  },
  runtimeRole: {
    code: "WASTE",
    publication: "OPERATIONAL",
  },
  rulesEngine: {
    approval: {
      processTarget: {
        connectionName: "process",
      },
      actionAuthority: {
        connectionName: "process",
      },
    },
  },
  eWaste: {
    journey: {
      arrivalRadiusMetres: {
        $config: "env",
        name: "CIRCA_EWASTE_ARRIVAL_RADIUS_METRES",
        type: "number",
      },
      reviewAssignment: {
        queueCode: "CIRCA_EWASTE_REVIEW",
        label: "Circa review team",
      },
      depositInstruction:
        "Please place your item in the designated eWaste bin at {centreName}, following the centre's handling instructions.",
    },
    rewardValuation: {
      version: "circa-weight-rewards-v2",
      illustrative: true,
      programCode: "circa",
      pointsRewardTypeCode: "points",
      carbonRewardTypeCode: "circaCarbon",
      pointsPerKg: 10,
      carbonUnitsPerEstimatedKg: 1,
    },
    application: {
      enabled: true,
    },
    channelAuthentication: {
      enabled: true,
      channels: {
        TELEGRAM: {
          enabled: true,
          applicationCode: "circa.ewaste",
          seamlessSignIn: true,
        },
      },
    },
    outcomeCommunication: {
      enabled: true,
      connectionName: "engagement",
      detailLinks: {
        IN_APP: {
          url: "http://localhost:6600/mobile",
          parameter: "submission",
        },
        TELEGRAM: {
          url: "https://t.me/nodics_ewaste_circa_local_bot",
          parameter: "startapp",
        },
      },
    },
    marketplace: {
      priceBookCode: "circaPointsPriceBook",
      warehouseCode: "circaDigitalRegistry",
      transferPolicyCode: "CIRCA_LOCAL_DIGITAL_OWNERSHIP_V1",
      storeCode: "circaMainStore",
      catalogVersion: "circaStaged",
      currency: "POINTS",
      programCode: "circa",
      rewardTypeCode: "points",
      jurisdiction: "CIRCA_SAMPLE",
      saleMode: "DIGITAL_OWNERSHIP",
      autoPublishListings: true,
      listingPresentation: {
        description:
          "Sample digital asset ownership. No physical delivery is included.",
        imageUrl: "/nodics/media/v0/content/circa-asset-laptop",
        sample: true,
      },
      orderCodePrefix: "CIRCA_ORDER_",
    },
    conversation: {
      rewardGuidance:
        "Approval rewards are added only after review. Potential CO₂e savings are estimates, not issued carbon credits. Certificates, rewards, material value and carbon holdings are separate. Only selected realized and available carbon credits transfer in a bundle; original contributor entitlements stay with the contributor.",
      project: "circa.ewaste",
      adapter: "ollama",
    },
  },
  order: {
    disputes: {
      enabled: true,
      orderCodePrefixes: ["CIRCA_ORDER_"],
    },
    refunds: {
      enabled: true,
      orderCodePrefixes: ["CIRCA_ORDER_"],
    },
  },
  wasteImpact: {
    calculation: {
      providerProfile: "eWasteEnvironmentalAssessment",
    },
  },
  copilot: {
    providers: {
      enabled: true,
      default: {
        maximumRequestBytes: 8000000,
      },
      adapters: {
        openai: {
          enabled: true,
          credential: {
            secretRef: "credentials:openai.circa",
          },
          model: {
            name: "gpt-5.6-luna",
          },
          generation: {
            reasoningEffort: "none",
          },
          connection: {
            timeoutMs: 85000,
          },
        },
        ollama: {
          enabled: true,
          model: {
            name: "gemma3:4b",
          },
          generation: {
            numPredict: 1200,
          },
        },
      },
      profiles: {
        structuredTool: {
          maximumOutputTokens: 1200,
        },
      },
    },
  },
  wasteSubmission: {
    metadataSuggestion: {
      enabled: true,
      adapter: "openai",
    },
  },
};
