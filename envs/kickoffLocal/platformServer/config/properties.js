/**
 * @module kickoffLocal/platformServer/config/properties
 * @description Declares Local Platform composition and prerequisites for explicitly selected publication providers.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow application selections without replacing framework preparation or owner authorization.
 */
module.exports = {
  dynamoEnabled: true,
  runtimePropertyGovernance: {
    persistence: { enabled: true },
  },
  profileTenantProvisioning: {
    localRuntimeRemoteModuleExtensions: ["commsApi"],
  },
  identityGovernance: {
    migration: {
      localRuntimeDeploymentGrantPermissions: [
        "communication.request",
        "communication.verification.execute",
      ],
      assessment: {
        bootstrapReview: {
          enabled: {
            $config: "env",
            name: "NODICS_LOCAL_BOOTSTRAP_IDENTITY_REVIEW_ENABLED",
            type: "boolean",
            fallback: false,
          },
        },
      },
    },
  },
  // Local capture-only selection; installed owner qualification remains separate.
  enterpriseManagement: {
    setupContinuation: {
      inspectionQualified: {
        $config: "env",
        name: "NODICS_LOCAL_ENTERPRISE_SETUP_INSPECTION_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
      privateGuardsQualified: {
        $config: "env",
        name: "NODICS_LOCAL_ENTERPRISE_SETUP_PRIVACY_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
      resumeQualified: {
        $config: "env",
        name: "NODICS_LOCAL_ENTERPRISE_SETUP_RESUME_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
    },
    registration: {
      inventoryQualified: {
        $config: "env",
        name: "NODICS_LOCAL_REGISTRATION_INVENTORY_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
      assignmentClaimIndexQualified: {
        $config: "env",
        name: "NODICS_LOCAL_REGISTRATION_CLAIM_INDEX_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
      enabled: {
        $config: "env",
        name: "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
        type: "boolean",
        fallback: false,
      },
      mail: { allowInsecureLoopback: true },
    },
    accessAssignments: {
      registrationVerification: {
        enabled: {
          $config: "env",
          name: "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
          type: "boolean",
          fallback: false,
        },
        allowInsecureLoopback: true,
      },
    },
  },
  profileEmployeeRecovery: {
    enabled: {
      $config: "env",
      name: "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
      type: "boolean",
      fallback: false,
    },
    mail: { allowInsecureLoopback: true },
  },
  backofficeRegistration: {
    connectionName: "default",
  },
  backofficeApplicationInitialization: {
    operatorOrigin: "http://localhost:3100",
    runtimeRoleProfiles: {
      PLATFORM: {
        profiles: {
          circa: {
            preparation: {
              prerequisites: {
                $config: "replace",
                value: [
                  {
                    code: "product:productPublicationWorkflow",
                    kind: "Product publication approval workflow",
                    required: true,
                    trigger: "USER",
                    dataType: "init",
                    targetServer: "process",
                    targetRuntimeRole: "PROCESS",
                  },
                  {
                    code: "pricing:pricingPublicationWorkflow",
                    kind: "Pricing publication approval workflow",
                    required: true,
                    trigger: "USER",
                    dataType: "init",
                    targetServer: "process",
                    targetRuntimeRole: "PROCESS",
                  },
                  {
                    code: "tax:taxPublicationWorkflow",
                    kind: "Tax publication approval workflow",
                    required: true,
                    trigger: "USER",
                    dataType: "init",
                    targetServer: "process",
                    targetRuntimeRole: "PROCESS",
                  },
                  {
                    code: "promotion:promotionPublicationWorkflow",
                    kind: "Promotion publication approval workflow",
                    required: true,
                    trigger: "USER",
                    dataType: "init",
                    targetServer: "process",
                    targetRuntimeRole: "PROCESS",
                  },
                  {
                    code: "inventory:inventoryPublicationWorkflow",
                    kind: "Inventory publication approval workflow",
                    required: true,
                    trigger: "USER",
                    dataType: "init",
                    targetServer: "process",
                    targetRuntimeRole: "PROCESS",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  activeModules: {
    groups: ["nodics.discovery", "nodics.copilot"],
    modules: [
      "redisCache",
      "circa.ewaste",
      "agora.apparel",
      "agora.electronics",
      "agora.telco",
      "nexusCore",
      "search",
      "elastic",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "axis",
      "ollamaProvider",
    ],
  },
  runtimeRole: {
    code: "PLATFORM",
    publication: "OPERATIONAL",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalPlatform",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4300,
        httpsPort: 4301,
      },
    },
  },
};
