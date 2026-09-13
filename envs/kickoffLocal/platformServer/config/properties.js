/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module envs/kickoffLocal/platformServer/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner platformServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
  configurationValues: {"knowledge":{"kickoffRoot":{"$config":"env","name":"NODICS_COPILOT_KICKOFF_ROOT","fallback":{"$config":"path","base":"project","relative":""}},"nodicsAiRoot":{"$config":"env","name":"NODICS_COPILOT_NODICS_AI_ROOT","fallback":{"$config":"path","base":{"$config":"ref","path":["configurationValues","knowledge","kickoffRoot"]},"relative":"../nodics.ai"}},"axisRoot":{"$config":"env","name":"NODICS_COPILOT_AXIS_ROOT","fallback":{"$config":"path","base":{"$config":"ref","path":["configurationValues","knowledge","kickoffRoot"]},"relative":"../nodics.exp/nodics.axis"}},"copilotKnowledgeEnabled":{"$config":"env","name":"NODICS_COPILOT_KNOWLEDGE_ENABLED","fallback":true,"type":"boolean"},"nodicsAiVersion":{"$config":"env","name":"NODICS_COPILOT_NODICS_AI_VERSION","fallback":"kickoff-local-development"},"kickoffVersion":{"$config":"env","name":"NODICS_COPILOT_KICKOFF_VERSION","fallback":"kickoff-local-development"},"axisVersion":{"$config":"env","name":"NODICS_COPILOT_AXIS_VERSION","fallback":"kickoff-local-development"},"sourceCodeEnabled":{"$config":"env","name":"NODICS_COPILOT_SOURCE_CODE_ENABLED","fallback":true,"type":"boolean"},"frameworkSourceCodeEnabled":{"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","sourceCodeEnabled"]},{"$config":"env","name":"NODICS_COPILOT_FRAMEWORK_SOURCE_CODE_ENABLED","fallback":true,"type":"boolean"}]},"axisSourceCodeEnabled":{"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","sourceCodeEnabled"]},{"$config":"env","name":"NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED","fallback":true,"type":"boolean"}]},"kickoffSourceCodeEnabled":{"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","sourceCodeEnabled"]},{"$config":"env","name":"NODICS_COPILOT_KICKOFF_SOURCE_CODE_ENABLED","fallback":true,"type":"boolean"}]}}},
  httpHardening: {
    cors: {
      allowedOrigins: [
        "http://localhost:3100",
        "http://127.0.0.1:3100",
        "http://localhost:3200",
        "http://127.0.0.1:3200",
        "http://localhost:3300",
        "http://127.0.0.1:3300",
        "http://localhost:3400",
        "http://127.0.0.1:3400",
        "http://localhost:3500",
        "http://127.0.0.1:3500",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3600",
        "http://127.0.0.1:3600",
      ],
    },
  },
  apiExposure: {
    categories: {
      dataExport: { enabled: true },
      copilotApi: { enabled: true },
    },
  },
  copilot: {
    core: {
      enabled: true,
      customerProject: "kickoff",
      environment: "kickoffLocal",
    },
    api: { enabled: true },

    workbench: {
      target: {
        productModule: "product",
        pricingModule: "pricing",
        connectionName: "commerceStaged",
        targetAuthority: { runtimeRole: "COMMERCE_STAGED" },
      },
    },
    knowledge: {
      ingestion: {
        enabled: {"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]},
        ingestOnStart:
          {"$config":"env","name":"NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START","fallback":true,"type":"boolean"},
        indexTenant: "default",
      },
      retrieval: { enabled: {"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]} },
      repositoryRoots: {
        "nodics.ai": {"$config":"ref","path":["configurationValues","knowledge","nodicsAiRoot"]},
        "nodics.kickoff": {"$config":"ref","path":["configurationValues","knowledge","kickoffRoot"]},
        "nodics.axis": {"$config":"ref","path":["configurationValues","knowledge","axisRoot"]},
      },
      sourceRegistry: {
        definitions: [
          {
            code: "nodics-framework-readme",
            repository: "nodics.ai",
            project: "nodics",
            module: "nodics.ai",
            owner: "nodics.ai",
            version: {"$config":"ref","path":["configurationValues","knowledge","nodicsAiVersion"]},
            sourceType: "README",
            classification: "INTERNAL",
            paths: ["README.md", "**/README.md"],
            allowedChannels: ["EMPLOYEE"],
            requiredPermissions: ["copilot.knowledge.internal.read"],
            secretScanPolicy: "REQUIRED",
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]}]},
          },
          {
            code: "nodics-framework-contracts",
            repository: "nodics.ai",
            project: "nodics",
            module: "nodics.ai",
            owner: "nodics.ai",
            version: {"$config":"ref","path":["configurationValues","knowledge","nodicsAiVersion"]},
            sourceType: "AGENTS_CONTRACT",
            classification: "RESTRICTED",
            paths: ["AGENTS.md", "**/AGENTS.md", "**/llm/contracts/*.md"],
            allowedChannels: ["EMPLOYEE"],
            requiredPermissions: ["copilot.knowledge.restricted.read"],
            secretScanPolicy: "REQUIRED",
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]}]},
          },
          {
            code: "nodics-axis-readme",
            repository: "nodics.axis",
            project: "nodics",
            module: "nodics.axis",
            owner: "nodics.axis",
            version: {"$config":"ref","path":["configurationValues","knowledge","axisVersion"]},
            sourceType: "README",
            classification: "INTERNAL",
            paths: ["README.md", "**/README.md"],
            allowedChannels: ["EMPLOYEE"],
            requiredPermissions: ["copilot.knowledge.internal.read"],
            secretScanPolicy: "REQUIRED",
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]}]},
          },
          {
            code: "nodics-axis-contracts",
            repository: "nodics.axis",
            project: "nodics",
            module: "nodics.axis",
            owner: "nodics.axis",
            version: {"$config":"ref","path":["configurationValues","knowledge","axisVersion"]},
            sourceType: "AGENTS_CONTRACT",
            classification: "RESTRICTED",
            paths: ["AGENTS.md", "**/AGENTS.md", "**/llm/contracts/*.md"],
            allowedChannels: ["EMPLOYEE"],
            requiredPermissions: ["copilot.knowledge.restricted.read"],
            secretScanPolicy: "REQUIRED",
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]}]},
          },
          {
            code: "kickoff-project-readme",
            repository: "nodics.kickoff",
            project: "kickoff",
            module: "nodics.kickoff",
            owner: "nodics.kickoff",
            version: {"$config":"ref","path":["configurationValues","knowledge","kickoffVersion"]},
            sourceType: "CUSTOMER_PROJECT",
            classification: "CUSTOMER",
            paths: ["README.md", "**/README.md", "docs/**/*.md"],
            allowedChannels: ["EMPLOYEE"],
            tenantScopes: ["default"],
            customerProjectScopes: ["kickoff"],
            requiredPermissions: ["copilot.knowledge.customer.read"],
            secretScanPolicy: "REQUIRED",
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]}]},
          },
          {
            code: "kickoff-project-contracts",
            repository: "nodics.kickoff",
            project: "kickoff",
            module: "nodics.kickoff",
            owner: "nodics.kickoff",
            version: {"$config":"ref","path":["configurationValues","knowledge","kickoffVersion"]},
            sourceType: "CUSTOMER_PROJECT",
            classification: "CUSTOMER",
            paths: ["AGENTS.md", "**/AGENTS.md", "**/llm/contracts/*.md"],
            allowedChannels: ["EMPLOYEE"],
            tenantScopes: ["default"],
            customerProjectScopes: ["kickoff"],
            requiredPermissions: ["copilot.knowledge.customer.read"],
            secretScanPolicy: "REQUIRED",
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]}]},
          },
          {
            code: "nodics-copilot-source",
            repository: "nodics.ai",
            project: "nodics",
            module: "nodics.copilot",
            owner: "nodics.copilot",
            version: {"$config":"ref","path":["configurationValues","knowledge","nodicsAiVersion"]},
            sourceType: "SOURCE_CODE",
            classification: "RESTRICTED",
            paths: ["nodics.copilot/**/*.js"],
            excludedPaths: [
              "nodics.copilot/**/test",
              "nodics.copilot/**/llm/generated",
            ],
            allowedExtensions: [".js"],
            limits: {
              maximumFiles: 400,
              maximumFileBytes: 524288,
              maximumSourceBytes: 8388608,
            },
            requiredPermissions: ["copilot.knowledge.restricted.read"],
            secretScanPolicy: "REQUIRED",
            allowedChannels: ["EMPLOYEE"],
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]},{"$config":"ref","path":["configurationValues","knowledge","frameworkSourceCodeEnabled"]}]},
          },
          {
            code: "nodics-discovery-source",
            repository: "nodics.ai",
            project: "nodics",
            module: "nodics.discovery",
            owner: "nodics.discovery",
            version: {"$config":"ref","path":["configurationValues","knowledge","nodicsAiVersion"]},
            sourceType: "SOURCE_CODE",
            classification: "RESTRICTED",
            paths: ["nodics.discovery/**/*.js"],
            excludedPaths: [
              "nodics.discovery/**/test",
              "nodics.discovery/**/llm/generated",
            ],
            allowedExtensions: [".js"],
            limits: {
              maximumFiles: 400,
              maximumFileBytes: 524288,
              maximumSourceBytes: 8388608,
            },
            requiredPermissions: ["copilot.knowledge.restricted.read"],
            secretScanPolicy: "REQUIRED",
            allowedChannels: ["EMPLOYEE"],
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]},{"$config":"ref","path":["configurationValues","knowledge","frameworkSourceCodeEnabled"]}]},
          },
          {
            code: "nodics-axis-assistant-source",
            repository: "nodics.axis",
            project: "nodics",
            module: "nodics.axis",
            owner: "nodics.axis",
            version: {"$config":"ref","path":["configurationValues","knowledge","axisVersion"]},
            sourceType: "SOURCE_CODE",
            classification: "RESTRICTED",
            paths: [
              "src/assistant/**/*.ts",
              "src/assistant/**/*.tsx",
              "src/cms/renderers/components/assistant/**/*.tsx",
            ],
            excludedPaths: [
              "src/**/__tests__",
              "src/**/*.test.ts",
              "src/**/*.test.tsx",
            ],
            allowedExtensions: [".ts", ".tsx"],
            limits: {
              maximumFiles: 200,
              maximumFileBytes: 524288,
              maximumSourceBytes: 4194304,
            },
            requiredPermissions: ["copilot.knowledge.restricted.read"],
            secretScanPolicy: "REQUIRED",
            allowedChannels: ["EMPLOYEE"],
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]},{"$config":"ref","path":["configurationValues","knowledge","axisSourceCodeEnabled"]}]},
          },
          {
            code: "kickoff-copilot-composition-source",
            repository: "nodics.kickoff",
            project: "kickoff",
            module: "platformServer",
            owner: "nodics.kickoff",
            version: {"$config":"ref","path":["configurationValues","knowledge","kickoffVersion"]},
            sourceType: "SOURCE_CODE",
            classification: "RESTRICTED",
            paths: ["envs/kickoffLocal/platformServer/**/*.js"],
            excludedPaths: ["envs/kickoffLocal/platformServer/llm/generated"],
            allowedExtensions: [".js"],
            limits: {
              maximumFiles: 100,
              maximumFileBytes: 524288,
              maximumSourceBytes: 2097152,
            },
            tenantScopes: ["default"],
            customerProjectScopes: ["kickoff"],
            requiredPermissions: ["copilot.knowledge.restricted.read"],
            secretScanPolicy: "REQUIRED",
            allowedChannels: ["EMPLOYEE"],
            enabled: {"$config":"all","values":[{"$config":"ref","path":["configurationValues","knowledge","copilotKnowledgeEnabled"]},{"$config":"ref","path":["configurationValues","knowledge","kickoffSourceCodeEnabled"]}]},
          },
        ],
      },
    },
    providers: {
      enabled: true,
      default: { adapter: "ollama" },
      adapters: {
        ollama: { enabled: true, model: { name: "qwen2.5-coder:7b" } },
      },
    },
  },
  backofficeRegistration: {
    connectionName: "default",
  },
  search: {
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  backofficeApplicationInitialization: {
    operatorOrigin: "http://localhost:3100",
    projectCode:
      {"$config":"env","name":"NODICS_PROJECT_CODE","fallback":{"$config":"context","name":"projectCode"}},
    projectRoot: {"$config":"path","base":"project","relative":""},
    profiles: {
      nexus: {
        presentation: {
          summary:
            "Corporate website accelerator published from the latest qualified WCMS Staged baseline to Online.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
            "Engagement",
          ],
          requiredFunctionalModules: [
            { code: "nodics.communication", label: "Engagement capability" },
          ],
        },

        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      nexusupdate: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      nexusecosystemrepair: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      nexusincremental: {
        code: "nexusincremental",
        type: "WEBSITE_BUNDLE_UPDATE",
        owner: "nexus.web",
        applicationCode: "nexus",
        siteCode: "nexusCorporateSite",
        baselineCode: "nexusincremental",
        presentation: { visible: false },
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      nexusprofessionalcopy: {
        code: "nexusprofessionalcopy",
        type: "WEBSITE_BUNDLE_UPDATE",
        owner: "nexus.web",
        applicationCode: "nexus",
        siteCode: "nexusCorporateSite",
        baselineCode: "nexusprofessionalcopy",
        presentation: { visible: false },
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      agoraapparel: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      agoraelectronics: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      agoratelco: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      frameworkdocs: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      axisdocs: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
      kickoffdocs: {
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
    },
  },
  backofficeFunctionalModuleActivationData: {
    modules: {
      "nodics.wcms": {
        dataPackages: [
          {
            code: "wcms:runtime-defaults",
            classification: "runtime-default",
            owner: "nodics.wcms",
            required: true,
            trigger: "ACTIVATION",
            targetModule: "cms",
            targetServer: "wcmsStaged",
            targetDatabase: "kickoffLocalWcmsStaged",
            operation: "IMPORT",
          },
          {
            code: "wcms:sample-content",
            classification: "sample",
            owner: "nodics.wcms",
            required: false,
            trigger: "USER",
            targetModule: "cms",
            targetServer: "wcmsStaged",
            targetDatabase: "kickoffLocalWcmsStaged",
            operation: "IMPORT_SAMPLE",
          },
        ],
      },
      "nodics.commerce": {
        dataPackages: [
          {
            code: "baseCommerce:core-reference",
            classification: "core",
            owner: "nodics.commerce",
            required: true,
            trigger: "ACTIVATION",
            targetModule: "commerce",
            targetServer: "commerceServer",
            targetDatabase: "kickoffLocalCommerce",
            operation: "IMPORT",
          },
          {
            code: "commerce:sample-catalog",
            classification: "sample",
            owner: "nodics.commerce",
            required: false,
            trigger: "USER",
            targetModule: "commerce",
            targetServer: "commerceServer",
            targetDatabase: "kickoffLocalCommerce",
            operation: "IMPORT_SAMPLE",
          },
        ],
      },
      "nodics.communication": {
        dataPackages: [
          {
            code: "commsCore:runtime-defaults",
            classification: "runtime-default",
            owner: "nodics.communication",
            required: true,
            trigger: "ACTIVATION",
            targetModule: "commsCore",
            targetServer: "engagementServer",
            targetDatabase: "kickoffLocalEngagement",
            operation: "IMPORT",
          },
          {
            code: "commsCore:sample-templates",
            classification: "sample",
            owner: "nodics.communication",
            required: false,
            trigger: "USER",
            targetModule: "commsCore",
            targetServer: "engagementServer",
            targetDatabase: "kickoffLocalEngagement",
            operation: "IMPORT_SAMPLE",
          },
        ],
      },
      "nodics.loyalty": {
        dataPackages: [
          {
            code: "loyaltyCore:core-enterprise-reference",
            classification: "core",
            owner: "nodics.loyalty",
            required: true,
            trigger: "ACTIVATION",
            targetModule: "profile",
            targetServer: "platformServer",
            targetDatabase: "kickoffLocalPlatform",
            operation: "IMPORT",
          },
        ],
      },
      "nodics.waste": {
        dataPackages: [
          {
            code: "wasteCore:core-reference",
            classification: "core",
            owner: "nodics.waste",
            required: true,
            trigger: "ACTIVATION",
            targetModule: "profile",
            targetServer: "platformServer",
            targetDatabase: "kickoffLocalPlatform",
            operation: "IMPORT",
          },
          {
            code: "wasteCollection:sample-profile-addresses",
            classification: "sample",
            owner: "nodics.waste",
            required: false,
            trigger: "USER",
            targetModule: "profile",
            targetServer: "platformServer",
            targetDatabase: "kickoffLocalPlatform",
            operation: "IMPORT_SAMPLE",
          },
        ],
      },
    },
  },
  backofficeLocalReset: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    providers: [
      {
        code: "wcmsStaged",
        moduleName: "system",
        connectionName: "wcmsStaged",
        targetAuthority: {
          server: "wcmsStagedServer",
          runtimeRole: { code: "WCMS_STAGED", publication: "STAGED" },
        },
      },
      {
        code: "wcmsOnline",
        moduleName: "system",
        connectionName: "wcmsOnline",
        targetAuthority: {
          server: "wcmsOnlineServer",
          runtimeRole: { code: "WCMS_ONLINE", publication: "ONLINE" },
        },
      },
      {
        code: "process",
        moduleName: "system",
        connectionName: "process",
        targetAuthority: {
          server: "processServer",
          runtimeRole: { code: "PROCESS", publication: "OPERATIONAL" },
        },
      },
      {
        code: "location",
        moduleName: "system",
        connectionName: "location",
        targetAuthority: {
          server: "locationServer",
          runtimeRole: { code: "LOCATION", publication: "OPERATIONAL" },
        },
      },
      {
        code: "commerce",
        moduleName: "system",
        connectionName: "commerce",
        targetAuthority: {
          server: "commerceServer",
          runtimeRole: {
            code: "COMMERCE",
            publication: "OPERATIONAL",
          },
        },
      },
      {
        code: "commerceStaged",
        moduleName: "system",
        connectionName: "commerceStaged",
        targetAuthority: {
          server: "commerceStagedServer",
          runtimeRole: {
            code: "COMMERCE_STAGED",
            publication: "STAGED",
          },
        },
      },
      {
        code: "engagement",
        moduleName: "system",
        connectionName: "engagement",
        targetAuthority: {
          server: "engagementServer",
          runtimeRole: {
            code: "ENGAGEMENT",
            publication: "OPERATIONAL",
          },
        },
      },
      {
        code: "loyalty",
        moduleName: "system",
        connectionName: "loyalty",
        targetAuthority: {
          server: "loyaltyServer",
          runtimeRole: {
            code: "LOYALTY",
            publication: "OPERATIONAL",
          },
        },
      },
      {
        code: "waste",
        moduleName: "system",
        connectionName: "waste",
        targetAuthority: {
          server: "wasteServer",
          runtimeRole: {
            code: "WASTE",
            publication: "OPERATIONAL",
          },
        },
      },
      {
        code: "platform",
        moduleName: "system",
        connectionName: "default",
        targetAuthority: {
          server: "platformServer",
          runtimeRole: { code: "PLATFORM", publication: "OPERATIONAL" },
        },
      },
    ],
  },
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    modules: {
      "backoffice": true,
      "import": true,
      "localizationCore": true,
      "profile": true,
      "search": true,
      "system": true,
      "token": true,
      "validator": true
    },
    serviceNames: [
      "DefaultCatalogService",
      "DefaultEmsFailedMessagesService",
      "DefaultWorkflow2SchemaService"
    ],
  },
  activeModules: {
    groups: ["nodics.discovery", "nodics.copilot"],
    modules: [
      "circa.ewaste",
      "kickoffAdministration",
      "search",
      "elastic",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "axis",
      "ollamaProvider",
      "kickoffLocal",
      "platformServer",
    ],
  },
  runtimeRole: { code: "PLATFORM", publication: "OPERATIONAL" },
  database: {
    default: { mongodb: { master: { databaseName: "kickoffLocalPlatform" } } },
    backoffice: {
      mongodb: { master: { databaseName: "kickoffLocalPlatform" } },
    },
    localizationCore: {
      mongodb: { master: { databaseName: "kickoffLocalPlatform" } },
    },
    profile: { mongodb: { master: { databaseName: "kickoffLocalPlatform" } } },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["PLATFORM"],
      contributions: [
        { moduleName: "wasteCore", sections: ["core-reference"] },
        {
          moduleName: "wasteCollection",
          sections: ["sample-profile-addresses"],
        },
        { moduleName: "loyaltyCore", sections: ["core-enterprise-reference"] },
      ],
      initializationProfiles: {
        localPlatformFoundation: {
          enabled: true,
          label: "Local Platform foundation",
          description:
            "Install required Platform initialization and core releases for local BackOffice identity, catalogue, profile, authorization, and localization services.",
          completionMessage:
            "The Local Platform foundation is ready. Operators can sign in, review module lifecycle, and manage governed platform data.",
          steps: [{ dataType: "init" }, { dataType: "core" }],
        },
      },
    },
  },
  profileExternalIdentity: {
    enabled: true,
    applications: {
      "circa.ewaste": {
        enabled: true,
        provider: "TELEGRAM",
        enterpriseCode: "default",
        secretEnvironmentVariable: "CIRCA_TELEGRAM_BOT_TOKEN",
        requireBrowserHandoff: true,
      },
    },
  },
  profileCustomerBrowserSession: {
    enabled: true,
    secure: false,
    sameSite: "Lax",
  },
  profileBrowserSession: {
    enabled: true,

    sameSite: "Lax",
    secure: false,
  },
  servers: {
    default: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4300,
        httpsHost: "localhost",
        httpsPort: 4301,
      },
    },
    wcmsStaged: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4312,
        httpsHost: "127.0.0.1",
        httpsPort: 4313,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4312,
        httpsHost: "localhost",
        httpsPort: 4313,
      },
    },
    wcmsOnline: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4314,
        httpsHost: "127.0.0.1",
        httpsPort: 4315,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4314,
        httpsHost: "localhost",
        httpsPort: 4315,
      },
    },
    commerceStaged: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4352,
        httpsHost: "127.0.0.1",
        httpsPort: 4353,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4352,
        httpsHost: "localhost",
        httpsPort: 4353,
      },
    },
    engagementServer: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4340,
        httpsHost: "127.0.0.1",
        httpsPort: 4341,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4340,
        httpsHost: "localhost",
        httpsPort: 4341,
      },
    },
    loyalty: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4360,
        httpsHost: "127.0.0.1",
        httpsPort: 4361,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4360,
        httpsHost: "localhost",
        httpsPort: 4361,
      },
    },
    loyaltyServer: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4360,
        httpsHost: "127.0.0.1",
        httpsPort: 4361,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4360,
        httpsHost: "localhost",
        httpsPort: 4361,
      },
    },
    location: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4380,
        httpsHost: "127.0.0.1",
        httpsPort: 4381,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4380,
        httpsHost: "localhost",
        httpsPort: 4381,
      },
    },
    locationServer: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4380,
        httpsHost: "127.0.0.1",
        httpsPort: 4381,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4380,
        httpsHost: "localhost",
        httpsPort: 4381,
      },
    },
    process: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4330,
        httpsHost: "127.0.0.1",
        httpsPort: 4331,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4330,
        httpsHost: "localhost",
        httpsPort: 4331,
      },
    },
  },
};

// Governed application preparation may target Platform-owned sample releases.
module.exports.servers.platform = module.exports.servers.default;
module.exports.servers.platformServer = module.exports.servers.default;

/** Explicit nSearch projections included in the governed Local reset. */
module.exports.localResetProvider.searchIndexes = [
  {
    moduleName: "discoveryProjection",
    indexName: "discoveryDocumentProjection",
  },
];
