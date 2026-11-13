/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/platformServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/platformServer */
module.exports = {
  runtimeConfigurationSchemas: {
    telegramExternalIdentity: {
      fields: [
        {
          credentialReference: "telegram.bot.circa",
        },
      ],
    },
  },

  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "agora.apparel",
      "agora.electronics",
      "agora.telco",
      "nexusCore",
      "axis",
      "search",
      "elastic",
      "ollamaProvider",
      "profile",
      "backoffice",
      "localizationCore",
      "localizationApi",
    ],
  },
  "runtimeRole": {
    "code": "PLATFORM",
    "publication": "OPERATIONAL",
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalPlatform",
        },
      },
    },
  },
  "backofficeApplicationInitialization": {
    "operatorOrigin": "http://localhost:4100",
  },
  backofficeFunctionalModuleActivationData: {
    modules: {
      "nodics.loyalty": {
        dataPackages: {
          $config: "keyed",
          key: "code",
          entries: [
            {
              code: "loyaltyProgram:partnerEligibilityAdministrationPermission",
              targetServer: "platformServer",
            },
          ],
        },
      },
    },
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4300,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4301,
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5300,
      },
      "abstractEndpoint": {
        "httpHost": "platform",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort",
        },
        "httpsHost": "platform",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort",
        },
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
    },
  },
  copilot: {
    core: {
      customerProject: "kickoff",
    },
    api: {
      enabled: true,
    },
    workbench: {
      target: {
        connectionName: "commerceStaged",
        targetAuthority: {
          publication: "STAGED",
        },
      },
    },
    knowledge: {
      ingestion: {
        enabled: {
          $config: "env",
          name: "NODICS_COPILOT_KNOWLEDGE_ENABLED",
          fallback: true,
          type: "boolean",
        },
        ingestOnStart: {
          $config: "env",
          name: "NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START",
          fallback: true,
          type: "boolean",
        },
        startup: {
          serviceId: "kickoff-local-knowledge-indexer",
          logSummary: true,
        },
      },
      retrieval: {
        enabled: {
          $config: "env",
          name: "NODICS_COPILOT_KNOWLEDGE_ENABLED",
          fallback: true,
          type: "boolean",
        },
      },
    },
    providers: {
      enabled: true,
      default: {
        adapter: "ollama",
      },
      adapters: {
        ollama: {
          enabled: true,
        },
      },
    },
  },
  data: {
    dataReleases: {
      contributions: {
        $config: "keyed",
        key: "moduleName",
        entries: [
          { moduleName: "cms", sections: ["accessGroups", "enterpriseRoles", "businessAccessRoles"] },
          { moduleName: "digitalCore", sections: ["bundleParticipantPermissions", "participantAccessGroups", "enterpriseParticipationAccess", "enterpriseRoles"] },
          { moduleName: "cart", sections: ["permissionCatalogue", "participantTransactionAccess"] },
          { moduleName: "checkoutCore", sections: ["permissionCatalogue", "participantTransactionAccess"] },
          { moduleName: "bidding", sections: ["permissionCatalogue", "participantTransactionAccess"] },
          { moduleName: "wasteCarbon", sections: ["participantAccessGroups"] },
          { moduleName: "wasteReward", sections: ["participantAccessGroups"] },
          { moduleName: "engagementCore", sections: ["accessGroups"] },
          { moduleName: "order", sections: ["permissionCatalogue", "participantTransactionAccess", "participantReadAccess", "enterpriseRoles", "businessAccessRoles"] },
          { moduleName: "product", sections: ["enterpriseRoles", "businessAccessRoles"] },
          { moduleName: "promotion", sections: ["enterpriseRoles", "businessAccessRoles"] },
          { moduleName: "publish", sections: ["accessGroups"] },
          { moduleName: "store", sections: ["accessGroups"] },
          { moduleName: "wasteCore", sections: ["enterpriseRoles", "businessAccessRoles"] },
          { moduleName: "loyaltyCore", sections: ["sample-enterprises"] },
          {
            moduleName: "pricing",
            sections: [
              "administrativeAuthoringPermission",
              "administrativePublicationPermission",
            ],
          },
        ],
      },
    },
  },
};
