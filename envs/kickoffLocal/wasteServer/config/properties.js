/**
 * @module kickoffLocal/wasteServer/config/properties
 * @description Selects Local Waste composition, customer journey policy and scoped owner API access.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected owners without bypassing Profile authorization.
 */
module.exports = {
  publish: { setup: { observation: { enabled: true } } },
  runtimePropertyGovernance: {
    persistence: { enabled: true },
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
      "discoverySource",
      "discoveryMapping",
      "discoveryProjection",
      "discoveryRuntime",
      "discoveryQuery",
      "discoveryConfig",
      "copilotProvider",
      "ollamaProvider",
      "openAiProvider",
      "redisCache",
    ],
  },
  runtimeRole: {
    code: "WASTE",
    publication: "OPERATIONAL",
  },
  runtimeAuthorityContexts: {
    modules: {
      waste: "waste.operational",
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
    marketplace: {
      listingHandoff: {
        enabled: true,
      },
      digitalOwnership: {
        // Admission only; every phase retains installed owner and original financial evidence checks.
        enabled: true,
        qualified: true,
        allowedServicePrincipals: { $config: "replace", value: ["apiAdmin"] },
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
    outcomeCommunication: {
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
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalWaste",
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
};
