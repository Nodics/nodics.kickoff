/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal */
module.exports = {
  runtimeConfigurationSchemas: {
    runtimeRoleProfiles: {
      COMMERCE: {
        telegramExternalIdentity: {
          fields: [
            {
              credentialReference: "telegram.bot.circa",
            },
          ],
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      LOCATION: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      LOYALTY: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      PLATFORM: {
        telegramExternalIdentity: {
          fields: [
            {
              credentialReference: "telegram.bot.circa",
            },
          ],
        },
      },
      PROCESS: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      WASTE: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      WCMS_STAGED: {
        telegramExternalIdentity: {
          fields: [
            {
              credentialReference: "telegram.bot.circa",
            },
          ],
        },
      },
    },
  },
  product: {
    runtimeRoleProfiles: {
      COMMERCE_STAGED: {
        marketplaceAuthoring: {
          enabled: true,
          catalogVersion: "circaStaged",
          locales: ["en", "ar"],
        },
      },
    },
  },
  cart: {
    runtimeRoleProfiles: {
      COMMERCE: {
        customerApi: {
          defaultJurisdiction: "AE",
          defaultCurrency: "AED",
        },
      },
    },
  },
  fulfillmentCore: {
    runtimeRoleProfiles: {
      COMMERCE: {
        customerShipping: {
          methods: {
            $config: "replace",
            value: [
              {
                code: "STANDARD",
                label: "Standard",
                price: "0.00",
                currency: "USD",
                promise: "3-5 business days",
                requiresAddress: true,
                returnEligible: true,
              },
              {
                code: "STANDARD_AED",
                label: "Standard",
                price: "0.00",
                currency: "AED",
                promise: "3-5 business days",
                requiresAddress: true,
                returnEligible: true,
              },
            ],
          },
          returnMethods: {
            $config: "replace",
            value: [
              {
                code: "PICKUP",
                label: "Pickup from address",
                requiresAddress: true,
              },
              {
                code: "DROP_OFF",
                label: "Drop off",
                requiresAddress: false,
              },
              {
                code: "STORE_RETURN",
                label: "Store return",
                requiresAddress: false,
              },
            ],
          },
        },
        physicalOperations: {
          enabled: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "apparel",
            value: true,
            otherwise: false,
          },
        },
      },
    },
  },
  order: {
    runtimeRoleProfiles: {
      COMMERCE: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
          storeCodes: {
            agoraMainStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: true,
            },
          },
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
          storeCodes: {
            agoraMainStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: true,
            },
          },
          ownerByStore: {
            agoraMainStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: "fulfillmentCore",
            },
          },
        },
      },
      COMMERCE_STAGED: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      ENGAGEMENT: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      LOCATION: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      LOYALTY: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      PLATFORM: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      PROCESS: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      WASTE: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      WCMS_ONLINE: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      WCMS_STAGED: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
    },
  },
  promotion: {
    runtimeRoleProfiles: {
      COMMERCE: {
        legacyTokenHashPolicies: ["TENANT_COLON_UPPERCASE_SHA256"],
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  digitalCore: {
    runtimeRoleProfiles: {
      COMMERCE: {
        merchantRedemption: {
          enabled: true,
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  profileExternalIdentity: {
    runtimeRoleProfiles: {
      COMMERCE: {
        enabled: true,
        applications: {
          "circa.ewaste": {
            enabled: true,
            provider: "TELEGRAM",
            enterpriseCode: "default",
            credentialReference: "telegram.bot.circa",
            requireBrowserHandoff: true,
          },
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  bidding: {
    runtimeRoleProfiles: {
      COMMERCE: {
        enabled: true,
        policyVersion: "circa-digital-bids-v1",
        amountScale: 0,
        maximumAmount: "100000",
        stores: {
          circaMainStore: {
            enterpriseCode: "default",
            currency: "POINTS",
            locale: "en",
            orderCodePrefix: "CIRCA_ORDER_BID_",
            allowOwnerReference: true,
          },
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  media: {
    runtimeRoleProfiles: {
      COMMERCE: {
        customerUploads: {
          enabled: true,
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  waste: {
    runtimeRoleProfiles: {
      COMMERCE: {
        operations: {
          requireScopes: true,
          requireVerification: true,
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  wasteImpact: {
    runtimeRoleProfiles: {
      COMMERCE: {
        calculation: {
          providerService: "DefaultEWasteOpenAiImpactProviderService",
          fallbackProviderServices: {
            $config: "replace",
            value: ["DefaultEWasteWarmImpactProviderService"],
          },
          timeoutMs: 90000,
          failureMode: "RESULT",
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  eWaste: {
    runtimeRoleProfiles: {
      COMMERCE: {
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
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      ENGAGEMENT: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      PROCESS: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
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
          project: "circa.ewaste",
          adapter: "ollama",
        },
      },
      WCMS_ONLINE: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  copilot: {
    runtimeRoleProfiles: {
      WASTE: {
        providers: {
          enabled: true,
          default: {
            maximumRequestBytes: 8000000,
          },
          adapters: {
            openai: {
              enabled: true,
              credential: {
                mode: "SECRET_REFERENCE",
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
    },
  },
  wasteSubmission: {
    runtimeRoleProfiles: {
      WASTE: {
        metadataSuggestion: {
          enabled: true,
          adapter: "openai",
        },
      },
    },
  },

  credentials: {
    "telegram.bot.circa": {
      value: null,
      label: "Circa Telegram bot token",
      status: "UNCONFIGURED",
      secret: true,
      credentialKind: "BOT_TOKEN",
    },
    "openai.circa": {
      value: null,
      label: "Circa OpenAI provider token",
      status: "UNCONFIGURED",
      secret: true,
      credentialKind: "API_TOKEN",
    },
  },
  database: {
    default: {
      mongodb: {
        master: {
          URI: {
            $config: "env",
            name: "NODICS_MONGODB_URI",
          },
          databaseName: {
            $config: "env",
            name: "NODICS_DATABASE_NAME",
          },
        },
      },
    },
  },
  cache: {
    default: {
      engines: {
        redis: {
          enabled: true,
          options: {
            url: {
              $config: "env",
              name: "REDIS_URL",
            },
            host: null,
            port: null,
            password: {
              $config: "env",
              name: "REDIS_PASSWORD",
            },
            sentinel: {
              enabled: true,
              name: "nodics",
              password: {
                $config: "env",
                name: "REDIS_PASSWORD",
              },
              endpoints: [
                {
                  host: "redis-sentinel",
                  port: 26379,
                },
              ],
              connectTimeout: 5000,
              commandTimeout: 3000,
            },
          },
        },
      },
    },
  },
  tooling: {
    acceptance: {
      platformCommand: "acceptance:local",
      commerceCommand: "acceptance:agora-commerce",
      commerceDataCommand: "acceptance:agora-commerce-data",
      commercePublicationCommand: "acceptance:agora-commerce-publication",
      environmentUrls: {
        NEXUS_CMS_URL: "wcmsOnline",
      },
      urls: {
        platform: { server: "platformServer" },
        wcmsStaged: { server: "wcmsStagedServer" },
        wcmsOnline: { server: "wcmsOnlineServer" },
        process: { server: "processServer" },
        engagement: { server: "engagementServer" },
        loyalty: { server: "loyaltyServer" },
        commerceStaged: { server: "commerceStagedServer" },
        commerce: { server: "commerceServer" },
        waste: { server: "wasteServer" },
        location: { server: "locationServer" },
      },
    },
    container: {
      composeProjectName: "nodics-kickoff-docker-local",
      composeFile: "envs/kickoffDockerLocal/docker/compose.yaml",
      generatedDirectory: "envs/kickoffDockerLocal/generated",
      environmentFile: "docker.env",
      replicaSet: "nodicsDockerLocal",
      mongodbHost: "mongodb",
      redisPrimaryHost: "redis-primary",
      hostPorts: [
        {
          $config: "runtime",
          name: "platformServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "wcmsStagedServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "wcmsOnlineServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "processServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "engagementServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "commerceServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "commerceStagedServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "loyaltyServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "wasteServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
        {
          $config: "runtime",
          name: "locationServer",
          path: "servers.default.browserEndpoint.httpPort",
        },
      ],
      nativeIsolationPorts: [
        4300, 4312, 4314, 4330, 4340, 4350, 4352, 4360, 4370, 4380,
      ],
      resilience: {
        backupDirectory: "envs/kickoffDockerLocal/generated/backups",
        restoreConfirmationToken: "--confirm-replace-docker-local-data",
        containers: {
          mongodb: "nodics-kickoff-docker-local-mongodb-1",
          redisPrimary: "nodics-kickoff-docker-local-redis-primary-1",
        },
        volumes: {
          redis: "nodics-kickoff-docker-local-redis",
          mediaStaged: "nodics-kickoff-docker-local-media-staged",
          mediaOnline: "nodics-kickoff-docker-local-media-online",
        },
      },
      qualification: {
        environmentContract: "test/dockerLocalEnvironmentContract.test.mjs",
        runtimePrepare: "test/dockerLocalRuntimePrepare.test.js",
        runtimePorts: [
          {
            $config: "runtime",
            name: "platformServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wcmsStagedServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wcmsOnlineServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "processServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "engagementServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "commerceServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "commerceStagedServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "loyaltyServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wasteServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "locationServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
        ],
        readLoadPorts: [
          {
            $config: "runtime",
            name: "wcmsOnlineServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "platformServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
        ],
        readLoadRequests: 50,
        containerPrefix: "nodics-kickoff-docker-local-",
        containers: {
          mongodb: "nodics-kickoff-docker-local-mongodb-1",
          redisPrimary: "nodics-kickoff-docker-local-redis-primary-1",
          redisSentinel: "nodics-kickoff-docker-local-redis-sentinel-1",
          elasticsearch: "nodics-kickoff-docker-local-elasticsearch-1",
        },
        hardenedContainers: [
          "platform",
          "wcms-staged",
          "wcms-online",
          "process",
          "engagement",
          "loyalty",
          "commerce",
          "commerce-staged",
          "waste",
          "location",
        ],
        networkSeparation: {
          applicationContainers: {
            $config: "ref",
            path: "tooling.container.qualification.hardenedContainers",
          },
          requiredNetworks: [
            "nodics-kickoff-docker-local-application",
            "nodics-kickoff-docker-local-data",
          ],
          forbiddenNetworks: ["nodics-kickoff-docker-local-public"],
        },
      },
      soak: {
        durationSeconds: 1800,
        publicationIntervalSeconds: 300,
        concurrency: 12,
        requestIntervalMs: 1000,
        readinessPorts: [
          {
            $config: "runtime",
            name: "platformServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wcmsStagedServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wcmsOnlineServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "processServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "engagementServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "commerceServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "commerceStagedServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "loyaltyServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wasteServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "locationServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
        ],
        acceptanceCommand: "docker-local:acceptance",
      },
      resilienceQualification: {
        acceptanceCommand: "docker-local:acceptance",
        restoreConfirmationToken: "--confirm-replace-docker-local-data",
        readyPorts: [
          {
            $config: "runtime",
            name: "platformServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wcmsStagedServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wcmsOnlineServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "processServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "engagementServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "commerceServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "commerceStagedServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "loyaltyServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "wasteServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
          {
            $config: "runtime",
            name: "locationServer",
            path: "servers.default.browserEndpoint.httpPort",
          },
        ],
        readLoad: {
          total: 1000,
          concurrency: 40,
          ports: [
            {
              $config: "runtime",
              name: "wcmsOnlineServer",
              path: "servers.default.browserEndpoint.httpPort",
            },
            {
              $config: "runtime",
              name: "platformServer",
              path: "servers.default.browserEndpoint.httpPort",
            },
          ],
        },
        containers: {
          redisPrimary: "nodics-kickoff-docker-local-redis-primary-1",
          redisSentinel: "nodics-kickoff-docker-local-redis-sentinel-1",
          redisReplica: "nodics-kickoff-docker-local-redis-replica-1",
        },
      },
      code: "dockerLocal",
    },
  },
  search: {
    default: {
      elastic: {
        connection: {
          hosts: [
            {
              $config: "env",
              name: "NODICS_ELASTICSEARCH_URL",
              fallback: "http://elasticsearch:9200",
            },
          ],
        },
      },
    },
  },
  log: {
    level: {
      $config: "env",
      name: "NODICS_LOG_LEVEL",
      fallback: "info",
    },
  },
  httpHardening: {
    securityHeaders: {
      headers: {
        "Cross-Origin-Resource-Policy": "cross-origin",
      },
    },
    cors: {
      originEndpoints: {
        axis: {
          port: 4100,
        },
        nexus: {
          port: 4200,
        },
        agora: {
          port: 6300,
        },
        agoraElectronics: {
          port: 6400,
        },
        agoraTelco: {
          port: 6500,
        },
        circa: {
          port: 6600,
        },
      },
    },
  },
  profileCustomerBrowserSession: {
    enabled: true,
    refreshCookieName: "nodics_docker_customer_refresh",
    csrfCookieName: "nodics_docker_customer_csrf",
    allowInsecureLoopback: true,
    sameSite: "Lax",
  },
  profileBrowserSession: {
    enabled: true,
    refreshCookieName: "nodics_docker_axis_refresh",
    csrfCookieName: "nodics_docker_axis_csrf",
    allowInsecureLoopback: true,
    sameSite: "Lax",
  },
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffDockerLocal"],
    allowMissingModelServices: true,
    enabledRuntimeRoles: ["WASTE", "LOCATION"],
  },
};
