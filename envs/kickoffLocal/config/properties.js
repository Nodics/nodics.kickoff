/**
 * @module kickoffLocal/config/properties
 * @description Declares Local deployment selections and explicitly scoped runtime policies.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow these selections without bypassing framework qualification or authorization.
 */
module.exports = {
  backofficeApplicationInitialization: {
    profiles: {
      circa: {
        dataPackages: {
          $config: "replace",
          value: require("../../../modules/circa.ewaste/data/sample-v001/setup/circa-setup-data-packages.json"),
        },
      },
    },
  },
  checkoutCore: {
    auction: {
      cartContexts: {
        circaMainStore: {
          tenant: "default",
          enterpriseCode: "GREENPERKS_ONLINE",
          currency: "POINTS",
          jurisdiction: "CIRCA_SAMPLE",
        },
      },
    },
  },
  wasteMaterialValue: {
    mock: { enabled: true },
    evidence: {
      valuationProviderService: "DefaultWasteMaterialValueMockProviderService",
      paymentProviderService: "DefaultWasteMaterialValueMockProviderService",
      allowSynthetic: true,
      qualificationRef: {
        module: "wasteReward",
        schema: "wasteMaterialValueMockEvidence",
        code: "circa-e16-valuation-mock-v001",
      },
    },
  },
  wasteCarbon: {
    mock: { enabled: true },
    evidence: {
      providerService: "DefaultWasteCarbonMockProviderService",
      allowSynthetic: true,
      qualificationRef: {
        module: "wasteCarbon",
        schema: "wasteCarbonMockEvidence",
        code: "circa-e15-carbon-mock-v001",
      },
    },
  },
  loyalty: {
    partnerRewardConversion: { enabled: true, mock: { enabled: true } },
    auctions: { enabled: true },
  },
  redisLocalResetMaintenance: {
    maximumKeys: 50000,
    maximumKeyBytes: 16777216,
    maximumScanPages: 4096,
    inventoryTimeoutMs: 120000,
  },
  publish: {
    setup: {
      observation: {
        plans: {
          "circa-native-reviewed": {
            moduleName: "circa.ewaste",
            path: "config/setup-observation/circa-native-reviewed-l08-20261110.json",
            checksum:
              "f800ff475030707f2b1d843bf643ed1eb99ad0ab5aa16cbaf87201d40014b359",
            revision: 21,
          },
        },
        callers: {
          nativePlatform: {
            tenant: "default",
            enterpriseCode: "default",
            serviceId: "apiAdmin",
            projectCode: "nodics.kickoff",
            environmentCode: "kickoffLocal",
            serverCode: "platformServer",
            instanceCode: "kickoff-local-platform-1",
            assignmentCode: "kickoff-local-platform-runtime-deployment",
            plans: ["circa-native-reviewed"],
          },
        },
      },
    },
    approvalWorkflow: {
      runtimeEnterpriseScope: {
        enabled: true,
        enterpriseCodes: [
          "GREENPERKS_ONLINE",
          "GREENPERKS_RETAIL",
          "RENEWWORKS_REPAIR_REUSE",
          "LOOPCYCLE_RECYCLING",
        ],
      },
    },
  },
  // Operator-selected only after the Local console and launch capture checks.
  log: {
    requestPrivacy: {
      qualified: {
        $config: "env",
        name: "NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
    },
  },
  fulfillmentCore: {
    itemSimulation: {
      enabled: true,
      environmentAllowlist: {
        $config: "replace",
        value: ["kickoffLocal"],
      },
    },
  },
  // Explicit Local service-grant allowlist; review inherited grant changes before extending this pin.
  identityGovernance: {
    migration: {
      assessment: {
        enabled: {
          $config: "env",
          name: "NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED",
          type: "boolean",
          fallback: false,
        },
      },
      runtimeDeploymentBootstrapEnabled: true,
    },
  },
  profileTenantProvisioning: {
    enabled: {
      $config: "env",
      name: "NODICS_LOCAL_TENANT_PROVISIONING_ENABLED",
      type: "boolean",
      fallback: false,
    },
    allowInsecureLoopback: true,
  },
  credentials: {
    "openai.circa": {
      value: {
        $config: "env",
        name: "OPENAI_API_KEY",
      },
      label: "Circa OpenAI provider token",
      status: "UNCONFIGURED",
      secret: true,
      credentialKind: "API_TOKEN",
    },
  },
  httpHardening: {
    cors: {
      allowedOrigins: [
        "http://localhost:3600",
        "https://telegram-circa-local.nodics.dev",
      ],
      originEndpoints: {
        agora: {
          port: 3300,
        },
        agoraElectronics: {
          port: 3400,
        },
        agoraTelco: {
          port: 3500,
        },
        circa: {
          port: 3600,
        },
      },
    },
  },
  profileCustomerBrowserSession: {
    enabled: true,
    allowInsecureLoopback: true,
    sameSite: "Lax",
  },
  profileCustomerRegistrationForm: { browser: { enabled: true } },
  profileBrowserSession: {
    enabled: true,
    allowInsecureLoopback: true,
    sameSite: "Lax",
  },
  authSecurity: {
    compatibility: {
      allowLocalBootstrapIdentity: true,
    },
  },
  cache: {
    default: {
      engines: {
        redis: {
          enabled: true,
          options: {
            prefix: "kickoffLocalRuntimeAuth",
          },
        },
      },
    },
  },
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
  },
  backofficeLocalReset: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
  },
  tooling: {
    acceptance: {
      guidedInitialization: {
        requestTimeoutMs: 60000,
      },
    },
  },
};
