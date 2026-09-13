/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";



/** @module kickoffLocal/wasteServer/config/properties @description Defines isolated local Waste Management coordinates and runtime configuration. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own waste accelerator, database, and endpoint configuration. */
module.exports = {
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultWasteSubmissionService",
      "DefaultWasteAssetService",
      "DefaultWasteImpactResultService",
    ],
    modules: {
      "import": true,
      "search": true,
      "system": true,
      "token": true,
      "validator": true,
      "wasteCollection": true,
      "wasteCompliance": true,
      "wasteCore": true,
      "wasteImpact": true,
      "wasteMaterial": true,
      "wasteMovement": true,
      "wasteReceipt": true,
      "wasteSubmission": true,
      "wasteVerification": true
    },
    serviceNames: [
      "DefaultCatalogService",
      "DefaultClassConfigurationService",
      "DefaultConfigurationActivationLogService",
      "DefaultConfigurationActivationRequestService",
      "DefaultEmsFailedMessagesService",
      "DefaultPipelineService",
      "DefaultPublicationAuditService",
      "DefaultPublicationRequestService",
      "DefaultRouterConfigurationService",
      "DefaultSchemaAccessPolicyService",
      "DefaultSchemaConfigurationService",
      "DefaultWorkflow2SchemaService"
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
  "kickoffLocal",
  "wasteServer",
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
  "openAiProvider"
],
  },
  runtimeRole: { code: "WASTE", publication: "OPERATIONAL" },
  runtimeAuthorityContexts: { modules: { waste: "waste.operational" } },
  apiExposure: {
    categories: {
      eWasteCustomer: { enabled: true },
      circaCustomer: { enabled: true },

      dataImport: { enabled: true },
      wasteInternal: { enabled: true },
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
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
          url: "http://localhost:3600/mobile",
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
    knowledge: {
      ingestion: { enabled: true, indexTenant: "default" },
      retrieval: { enabled: true },
      repositoryRoots: {
        "circa-help": {"$config":"path","base":"project","relative":"modules/circa.ewaste/docs/customer-knowledge"},
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
            allowedChannels: ["CUSTOMER"],
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
          model: { name: "gpt-5.6-luna" },
          generation: { reasoningEffort: "none" },
          connection: { timeoutMs: 60000 },
        },
        ollama: {
          enabled: true,
          model: { name: "gemma3:4b" },
          generation: { numPredict: 1200 },
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
    default: { mongodb: { master: { databaseName: "kickoffLocalWaste" } } },
    wasteCore: { mongodb: { master: { databaseName: "kickoffLocalWaste" } } },
    wasteMaterial: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
    },
    wasteCollection: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
    },
    wasteSubmission: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
    },
    wasteVerification: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
    },
    wasteReceipt: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
    },
    wasteImpact: { mongodb: { master: { databaseName: "kickoffLocalWaste" } } },
    wasteMovement: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
    },
    wasteCompliance: {
      mongodb: { master: { databaseName: "kickoffLocalWaste" } },
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

/** Explicit nSearch projections included in the governed Local reset. */
module.exports.localResetProvider.searchIndexes = [
  {
    moduleName: "discoveryProjection",
    indexName: "discoveryDocumentProjection",
  },
];
