/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/wcmsStagedServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/wcmsStagedServer */
module.exports = {
  backofficeRegistration: {
    connectionName: "platform",
  },
  publish: {
    approvalWorkflow: {
      target: { connectionName: "process" },
    },
  },
  runtimeConfigurationSchemas: {
    telegramExternalIdentity: {
      fields: [{ credentialReference: "telegram.bot.circa" }],
    },
  },

  activeModules: {
    groups: ["nexus"],
    modules: [
      "cmsStaged",
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "nexus.web",
      {
        $config: "composition",
        name: "agora",
        field: "projectPacks",
        spread: true,
      },
      "search",
      "elastic",
      "catalog",
      "cms",
      "editorial",
      "media",
      "publish",
      "wcmsExperience",
      "discoveryConfig",
      "discoveryMapping",
      "discoveryProjection",
      "discoveryPublication",
      "discoveryQuery",
      "discoveryRanking",
      "discoveryRuntime",
      "discoverySource",
    ],
  },
  runtimeRole: {
    code: "WCMS_STAGED",
    publication: "STAGED",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffDockerLocalWcmsStaged",
        },
      },
    },
  },
  media: {
    publication: {
      versionProviderEnabled: true,
      target: { connectionName: "cmsOnline" },
    },
    storage: {
      providers: {
        local: {
          basePath: "/var/lib/nodics/media-staged",
        },
      },
    },
  },
  cms: {
    publication: {
      enabled: true,
      baselines: {
        kickoffdocs: {
          contentPackCode: "kickoffDocumentation",
          releaseVersion: "0.0.2",
          rootType: "site",
          rootCode: "kickoffDocumentationSite",
          sourceVersion: "0",
        },
        frameworkdocs: {
          contentPackCode: "nodicsDocumentation",
          releaseVersion: "0.0.6",
          sourceVersion: "0",
        },
        axisdocs: {
          contentPackCode: "axisDocumentation",
          releaseVersion: "0.0.2",
          sourceVersion: "0",
        },
      },
      workflow: {
        target: {
          connectionName: "process",
        },
      },
      target: {
        connectionName: "cmsOnline",
      },
    },
  },
  editorial: {
    workflow: {
      processConnectionName: "process",
    },
    publication: {
      target: {
        connectionName: "cmsOnline",
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpHost: "0.0.0.0",
        httpPort: 4312,
        httpsHost: "0.0.0.0",
        httpsPort: 4313,
      },
      browserEndpoint: {
        httpHost: "localhost",
        httpPort: 5312,
      },
      abstractEndpoint: {
        httpHost: "wcms-staged",
        httpPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpPort",
        },
        httpsHost: "wcms-staged",
        httpsPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpsPort",
        },
      },
    },
  },
  runtimeAuthorityContexts: {
    modules: {
      cms: true,
      editorial: true,
      media: true,
      publish: true,
      wcmsExperience: true,
      discoveryConfig: true,
      discoveryMapping: true,
      discoveryProjection: true,
      discoveryPublication: true,
      discoveryQuery: true,
      discoveryRanking: true,
      discoveryRuntime: true,
      discoverySource: true,
    },
    default: "wcms.staged",
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
  httpHardening: {
    cors: {
      originEndpointOverrides: {
        nexus: false,
      },
    },
  },
};
