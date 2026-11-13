/**
 * @module kickoffLocal/wasteServer/config/properties
 * @description Selects Local Waste composition, customer journey policy and scoped owner API access.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected owners without bypassing Profile authorization.
 */
const circaNative = require("../../config/circaRuntimeOverrides.json");

module.exports = {
  data: { dataReleases: { initializationProfiles: {
    localWasteFoundation: { template: "localWasteFoundation" },
    localLocationFoundation: {
      label: "Location map references",
      description: "Install the provider, style and control references used by the collection centre map.",
      completionMessage: "Map references are current. Check the effective collection centre map configuration.",
      steps: [{ dataType: "core", releaseCodes: ["locationMap:core-map-reference"] }],
    },
  } } },
  wasteOpeningSamples: {
    reviewed: {
      "circa.ewaste:waste-opening-impact": { checksum: "7a73e70a1a98e07ef17c3c00315a5b1b529449bc77081fbc54ab1c814c9d1d15", tenant: "default", enterprise: "default",
        files: {"wasteImpactResult": "circaWasteImpactResultData.json"} },
      "circa.ewaste:waste-opening-assets": { checksum: "94b21da84f05722d642979e1adaf690ecb6b3f98cf22732fc08ab1edf10ead63", tenant: "default", enterprise: "default",
        files: {"wasteAsset": "circaWasteAssetData.json", "wasteAssetOwnershipEvent": "circaWasteAssetOwnershipEventData.json"} },
    },
  },

  publish: {
    setup: {
      observation: {
        enabled: true,
      },
    },
  },
  runtimePropertyGovernance: {
    persistence: {
      enabled: true,
    },
  },
  profileTenantProvisioning: {
    runtimeRemoteModuleExtensions: ["pricing"],
  },
  activeModules: {
    groups: [],
    modules: [
      "publish",
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
      "nodics.location",
      "locationCore",
      "locationType",
      "locationMap",
      "locationSearch",
      "locationDraft",
      "locationApproval",
      "locationProjection",
    ],
  },
  runtimeRole: {
    code: "WASTE",
    publication: "OPERATIONAL",
  },
  runtimeAuthorityContexts: {
    modules: {
      waste: "waste.operational",
      locationCore: "location.operational",
      locationType: "location.operational",
      locationMap: "location.operational",
      locationSearch: "location.operational",
      locationDraft: "location.operational",
      locationApproval: "location.operational",
      locationProjection: "location.operational",
    },
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
    ...circaNative.eWaste,
    outcomeCommunication: {
      ...circaNative.eWaste.outcomeCommunication,
      detailLinks: {
        IN_APP: {
          url: "http://localhost:3600/mobile",
          parameter: "submission",
        },
        TELEGRAM: {
          url: "https://t.me/nodics_ewaste_circa_local_bot",
          parameter: "startapp",
        },
      },
    },
    marketplace: {
      ...circaNative.eWaste.marketplace,
      listingHandoff: {
        enabled: true,
      },
      digitalOwnership: {
        enabled: true,
        qualified: true,
        allowedServicePrincipals: {
          $config: "replace",
          value: ["apiAdmin"],
        },
        businessCallers: {
          $config: "replace",
          value: [
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_ONLINE",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceServer",
              instanceCode: "kickoff-local-commerce-1",
              assignmentCode: "kickoff-local-commerce-runtime-deployment",
              permissions: [
                "waste.asset.marketplace.project",
                "waste.asset.sale.transfer",
              ],
            },
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_ONLINE",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceStagedServer",
              instanceCode: "kickoff-local-commerce-staged-1",
              assignmentCode:
                "kickoff-local-commerce-staged-runtime-deployment",
              permissions: ["waste.asset.listing.intent.read"],
            },
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_RETAIL",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceServer",
              instanceCode: "kickoff-local-commerce-1",
              assignmentCode: "kickoff-local-commerce-runtime-deployment",
              permissions: ["waste.asset.sale.transfer"],
            },
          ],
        },
      },
    },
    conversation: {
      ...circaNative.eWaste.conversation,
      project: "circa.ewaste",
      adapter: "ollama",
    },
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalWaste",
        },
      },
    },
    locationType: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    locationMap: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    locationSearch: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    locationDraft: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    locationApproval: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    locationProjection: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    "nodics.location": {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
    locationCore: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLocation",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4370,
        httpsPort: 4371,
      },
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
  profileExternalIdentity: circaNative.profileExternalIdentity,
  bidding: {
    enabled: true,
    policyVersion: "circa-digital-bids-v1",
    amountScale: 0,
    maximumAmount: "100000",
    stores: {
      circaMainStore: {
        enterpriseCode: "GREENPERKS_ONLINE",
        currency: "POINTS",
        locale: "en",
        orderCodePrefix: "CIRCA_ORDER_BID_",
        allowOwnerReference: true,
      },
    },
  },
  media: {
    customerUploads: {
      enabled: true,
    },
  },
  waste: {
    operations: {
      requireScopes: true,
      requireVerification: true,
    },
  },
  wasteImpact: {
    calculation: {
      providerProfile: "eWasteEnvironmentalAssessment",
    },
  },
  wasteSubmission: {
    metadataSuggestion: {
      enabled: true,
      adapter: "openai",
    },
  },
  promotion: {
    legacyTokenHashPolicies: ["TENANT_COLON_UPPERCASE_SHA256"],
  },
  digitalCore: {
    merchantRedemption: {
      enabled: true,
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
    knowledge: {
      ingestion: {
        enabled: true,
        ingestOnStart: true,
      },
      retrieval: {
        enabled: true,
      },
    },
  },
};
