/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

const wasteRuntimeModules = [
  "nodics.waste",
  "wasteCore",
  "wasteMaterial",
  "wasteCollection",
  "wasteSubmission",
  "wasteVerification",
  "wasteReceipt",
  "wasteImpact",
  "wasteMovement",
  "wasteCompliance",
  "wasteApi",
  "waste",
  "eWaste",
  "kickoffWaste",
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
];

/** @module kickoffDockerLocal/wasteServer/config/properties @description Defines isolated local Waste Management coordinates and runtime configuration. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own waste accelerator, database, and endpoint configuration. */
const capabilities = {
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffDockerLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultWasteSubmissionService",
      "DefaultWasteAssetService",
      "DefaultWasteImpactResultService",
    ],
    serviceNames: [
      "DefaultCatalogService",
      "DefaultClassConfigurationService",
      "DefaultConfigurationActivationLogService",
      "DefaultConfigurationActivationRequestService",
      "DefaultConfigurationService",
      "DefaultDataInstallationService",
      "DefaultEmsFailedMessagesService",
      "DefaultEventListenerService",
      "DefaultImportDefinitionService",
      "DefaultImportRunService",
      "DefaultIndexService",
      "DefaultIndexerLogService",
      "DefaultIndexerService",
      "DefaultInterceptorService",
      "DefaultPipelineService",
      "DefaultPublicationAuditService",
      "DefaultPublicationRequestService",
      "DefaultRouterConfigurationService",
      "DefaultSchemaAccessPolicyService",
      "DefaultSchemaConfigurationService",
      "DefaultSearchService",
      "DefaultTokenService",
      "DefaultValidatorService",
      "DefaultWasteAssetCreationPolicyService",
      "DefaultWasteAssetMarketplaceProjectionService",
      "DefaultWasteAssetOwnershipEventService",
      "DefaultWasteAssetService",
      "DefaultWasteAssetTransferPolicyService",
      "DefaultWasteAssetTypeService",
      "DefaultWasteBatchService",
      "DefaultWasteCarbonSettlementPolicyService",
      "DefaultWasteCategoryService",
      "DefaultWasteCollectionAcceptanceRuleService",
      "DefaultWasteCollectionPointService",
      "DefaultWasteCollectionPointTypeService",
      "DefaultWasteCollectionPresetService",
      "DefaultWasteComplianceEvidenceService",
      "DefaultWasteComplianceProfileService",
      "DefaultWasteConditionGradeService",
      "DefaultWasteCouponRedemptionSettlementPolicyService",
      "DefaultWasteEvidencePolicyService",
      "DefaultWasteEvidenceService",
      "DefaultWasteFamilyService",
      "DefaultWasteImpactMetricService",
      "DefaultWasteImpactProfileService",
      "DefaultWasteImpactResultService",
      "DefaultWasteImpactSelectionService",
      "DefaultWasteItemTypeService",
      "DefaultWasteLifecyclePolicyService",
      "DefaultWasteMarketplaceEligibilityPolicyService",
      "DefaultWasteMaterialTypeService",
      "DefaultWasteMetadataSuggestionService",
      "DefaultWasteMovementService",
      "DefaultWasteReceiptPolicyService",
      "DefaultWasteReceiptService",
      "DefaultWasteRewardSettlementPolicyService",
      "DefaultWasteSubmissionService",
      "DefaultWasteVerificationPolicyService",
      "DefaultWasteVerificationService",
      "DefaultWorkflow2SchemaService",
    ],
  },
  activeModules: {
    groups: [],
    modules: [
      "circa.ewaste",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "kickoffDockerLocal",
      "wasteServer",
    ].concat(wasteRuntimeModules),
  },
  runtimeRole: { code: "WASTE", publication: "OPERATIONAL" },
  runtimeAuthorityContexts: { modules: { waste: "waste.operational" } },
  apiExposure: {
    categories: {
      eWasteCustomer: { enabled: true },
      circaCustomer: { enabled: true },
      serviceRegistry: { enabled: true },
      schemaWorkbench: { enabled: true },
      dataImport: { enabled: true },
      wasteInternal: { enabled: true },
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL_PRODUCTION_SIMULATION",
      allowedDestinationRoles: ["WASTE"],
      initializationProfiles: {
        localWasteFoundation: {
          enabled: true,
          label: "Local Waste foundation",
          description:
            "Install Waste Management reference releases for schema-driven family, category, material, collection, evidence, receipt, and impact presets.",
          completionMessage:
            "The Local Waste foundation is ready. Operators can validate collection eligibility, submissions, evidence, receipts, and impact calculations.",
          steps: [
            {
              dataType: "core",
              releaseCodes: [
                "wasteMaterial:core-v001",
                "eWaste:core-reference",
                "kickoffWaste:project-reference",
              ],
            },
          ],
        },
      },
    },
  },
  wasteSubmission: {
    metadataSuggestion: {
      enabled: true,
      adapter: "openai",
      profile: "eWastePhotoMetadata",
    },
  },
  eWaste: {
    outcomeCommunication: {
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
    conversation: {
      project: "circa.ewaste",
      adapter: "ollama",
      profile: "customerGuidance",
    },
  },
  search: {
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  copilot: {
    conversation: {
      storage: "GENERATED_SERVICE",
      allowVolatileLocalStorage: false,
    },
    knowledge: {
      ingestion: { enabled: true, indexTenant: "default" },
      retrieval: { enabled: true },
      repositoryRoots: {
        "circa-help": require("node:path").resolve(
          __dirname,
          "../../../../modules/circa.ewaste/docs/customer-knowledge",
        ),
      },
      sourceRegistry: {
        definitions: [
          {
            code: "circa-customer-guidance-v1",
            repository: "circa-help",
            project: "circa.ewaste",
            module: "circa.ewaste",
            owner: "circa.ewaste",
            version:
              "c8c3581bba2187d7a93f80ecf1d275fd4d400e411a18bda2795f3cdf954e3257",
            sourceType: "CUSTOMER_PROJECT",
            classification: "CUSTOMER",
            paths: ["v1/journey.md"],
            allowedExtensions: [".md"],
            allowedChannels: ["NEXUS_CUSTOMER"],
            tenantScopes: ["default"],
            enterpriseScopes: ["default"],
            customerProjectScopes: ["circa.ewaste"],
            requiredPermissions: ["waste.submission.create"],
            secretScanPolicy: "REQUIRED",
            enabled: true,
          },
        ],
      },
    },
    providers: {
      enabled: true,
      default: { maximumRequestBytes: 8000000 },
      adapters: {
        openai: {
          enabled: true,
          credential: {
            mode: "SECRET_REFERENCE",
            secretRef: "env:OPENAI_EWASTE_API_KEY",
          },
          model: { name: "gpt-5.6-luna", store: false },
          generation: { reasoningEffort: "none" },
          connection: { timeoutMs: 60000 },
        },
        ollama: {
          enabled: true,
          model: { name: "gemma3:4b", contextWindow: 4096 },
          generation: { numPredict: 1200 },
          connection: { timeoutMs: 120000 },
        },
      },
      profiles: {
        eWastePhotoMetadata: {
          maximumOutputTokens: 2400,
          structuredOutput: true,
          imageDetail: "high",
        },
        structuredTool: { maximumOutputTokens: 1200 },
        customerGuidance: {
          temperature: 0.1,
          topP: 0.9,
          maximumOutputTokens: 500,
          structuredOutput: true,
        },
      },
    },
  },
  waste: {
    accelerator: {
      enabled: true,
      umbrella: "waste",
      scenarioAccelerators: ["eWaste"],
      presetPackCodes: ["EWASTE_CORE_PRESETS"],
    },
    capabilities: {
      materialCatalogue: true,
      collectionAcceptance: true,
      submissionLifecycle: true,
      evidencePolicy: true,
      verification: true,
      receipt: true,
      impactCalculation: true,
      movementTracking: true,
      complianceEvidence: true,
    },
  },
  database: {
    default: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteCore: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteMaterial: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteCollection: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteSubmission: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteVerification: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteReceipt: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteImpact: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteMovement: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
    wasteCompliance: {
      mongodb: { master: { databaseName: "kickoffDockerLocalWaste" } },
    },
  },
  servers: {
    engagement: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4340,
        httpsHost: "127.0.0.1",
        httpsPort: 4341,
      },
    },
    commerceStaged: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4352,
        httpsHost: "127.0.0.1",
        httpsPort: 4353,
      },
    },
    loyalty: {
      remoteOnly: true,
      endpoint: { httpHost: "127.0.0.1", httpPort: 4360 },
    },
    wcms: {
      remoteOnly: true,
      endpoint: { httpHost: "127.0.0.1", httpPort: 4312 },
    },
    commerce: {
      remoteOnly: true,
      endpoint: { httpHost: "127.0.0.1", httpPort: 4350 },
    },
    default: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4370,
        httpsHost: "127.0.0.1",
        httpsPort: 4371,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4370,
        httpsHost: "localhost",
        httpsPort: 4371,
      },
    },
    profile: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
    },
    backoffice: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
    },
    process: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4330,
        httpsHost: "127.0.0.1",
        httpsPort: 4331,
      },
    },
    location: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4380,
        httpsHost: "127.0.0.1",
        httpsPort: 4381,
      },
    },
  },
};

const runtime = require("../../config/runtime-properties")("wasteServer");
module.exports = {
  ...runtime,
  ...capabilities,
  activeModules: {
    ...capabilities.activeModules,
    modules: [
      ...new Set([...capabilities.activeModules.modules, "redisCache"]),
    ],
  },
  database: Object.fromEntries(
    Object.keys(capabilities.database).map((name) => [
      name,
      runtime.database.default,
    ]),
  ),
  servers: runtime.servers,
  search: runtime.search,
};
