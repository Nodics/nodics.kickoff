/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
const wcmsSearchRuntimeModules = ["search", "elastic"];
const wcmsAuthorityModules = [
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
];

/** @module wcmsStagedServer/config/properties @description Defines Local WCMS Staged role, coordinates, persistence, and Online target connection. */
module.exports = {
  httpHardening: {
    cors: {
      allowedOrigins: ["http://localhost:3100", "http://127.0.0.1:3100"],
      deniedOrigins: ["http://localhost:3200", "http://127.0.0.1:3200"],
    },
  },
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultCmsDocumentationAccessPolicyService",
      "DefaultCmsDocumentationDashboardService",
      "DefaultCmsDocumentationNavigationService",
      "DefaultCmsDocumentationNodeService",
      "DefaultCmsDocumentationPageService",
      "DefaultCmsDocumentationProductService",
      "DefaultCmsDocumentationPublicationStateService",
      "DefaultCmsDocumentationSearchMetadataService",
    ],
    modules: {
      "cms": true,
      "editorial": true,
      "import": true,
      "media": true,
      "publish": true,
      "search": true,
      "system": true,
      "token": true,
      "validator": true
    },
    serviceNames: [
      "DefaultEmsFailedMessagesService",
      "DefaultWorkflow2SchemaService"
    ],
  },
  activeModules: {
    groups: [],
    modules: [
      "circa.ewaste",
      ...wcmsSearchRuntimeModules,
      ...wcmsAuthorityModules,
      "cmsStaged",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nexus.web",
      {"$config":"ref","path":["agoraDomains","projectPacks"],"spread":true},
      "kickoffLocal",
      "wcmsStagedServer",
    ],
  },
  publishEnabled: true,
  runtimeRole: { code: "WCMS_STAGED", publication: "STAGED" },
  runtimeAuthorityContexts: {
    modules: {
  "cms": "wcms.staged",
  "editorial": "wcms.staged",
  "media": "wcms.staged",
  "publish": "wcms.staged",
  "wcmsExperience": "wcms.staged",
  "discoveryConfig": "wcms.staged",
  "discoveryMapping": "wcms.staged",
  "discoveryProjection": "wcms.staged",
  "discoveryPublication": "wcms.staged",
  "discoveryQuery": "wcms.staged",
  "discoveryRanking": "wcms.staged",
  "discoveryRuntime": "wcms.staged",
  "discoverySource": "wcms.staged"
},
  },
  search: {
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    wcmsExperience: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["WCMS_STAGED"],
      initializationProfiles: {
        localWcmsFoundation: {
          enabled: true,
          label: "Local WCMS foundation",
          description:
            "Install the required initialization and core releases for the Local Staged content runtime.",
          completionMessage:
            "The Staged content foundation is ready. You can review content in Axis and submit approved versions for Online publication.",
          steps: [{ dataType: "init" }, { dataType: "core" }],
        },
        localDocumentationFoundation: {
          enabled: true,
          label: "Local Documentation foundation",
          description:
            "Install the WCMS initialization releases required before documentation content packs can be reviewed and published.",
          completionMessage:
            "The Local Documentation foundation is ready. Import documentation packs through Setup and Accelerators or the Documentation dashboard, then publish approved content Online.",
          steps: [
            {
              dataType: "init",
              releaseCodes: [
                "axis:axisBaseline",
                "cms:init-v001",
                "wcms:init-v001",
              ],
            },
          ],
        },
      },
      contributions: [
        { moduleName: "axis", sections: ["axisBaseline", "core-v002"] },
      ],
    },
  },
  database: {
    default: {
      mongodb: {
        master: {
          URI: "mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal",
          databaseName: "kickoffLocalWcmsStaged",
        },
      },
    },
  },
  cms: {
    publication: {
      enabled: true,
      runtimeRole: "STAGED",
      baselines: {
        axis: {
          releaseCode: "axis:axisBaseline",
          releaseVersion: "0.0.0",
          rootType: "site",
          rootCode: "axisCmsSite",
          sourceVersion: "0",
        },
        axisassistant: {
          releaseCode: "axis:core-v002",
          releaseVersion: "0.0.1",
          dataType: "core",
          rootType: "site",
          rootCode: "axisCmsSite",
          sourceVersion: "0",
        },
        nexus: {
          releaseCode: "nexus.web:nexusCorporateSite",
          releaseVersion: "0.0.20",
          dataType: "sample",
          rootType: "site",
          rootCode: "nexusCorporateSite",
          sourceVersion: "0",
        },
        nexusupdate: {
          releaseCode: "nexus.web:nexusCorporateSiteUpdate",
          releaseVersion: "0.0.0",
          dataType: "sample",
          rootType: "site",
          rootCode: "nexusCorporateSite",
          sourceVersion: "0",
        },
        nexusecosystemrepair: {
          releaseCode: "nexus.web:nexusCorporateEcosystemComponentRepair",
          releaseVersion: "0.0.0",
          dataType: "sample",
          rootType: "site",
          rootCode: "nexusCorporateSite",
          sourceVersion: "0",
        },
        nexusincremental: {
          releaseCode: "nexus.web:nexusCorporateIncrementalProof",
          releaseVersion: "0.0.0",
          dataType: "sample",
          rootType: "site",
          rootCode: "nexusCorporateSite",
          sourceVersion: "0",
        },
        nexusprofessionalcopy: {
          releaseCode: "nexus.web:nexusCorporateProfessionalCopyUpdate",
          releaseVersion: "0.0.0",
          dataType: "sample",
          rootType: "site",
          rootCode: "nexusCorporateSite",
          sourceVersion: "0",
        },
        agoraapparel: {
          releaseCode: "agora.apparel:agoraApparelContentCatalog",
          releaseVersion: "0.0.7",
          dataType: "sample",
          rootType: "site",
          rootCode: "agoraApparelSite",
          sourceVersion: "0",
        },
        agoraelectronics: {
          releaseCode: "agora.electronics:agoraElectronicsContentCatalog",
          releaseVersion: "0.0.2",
          dataType: "sample",
          rootType: "site",
          rootCode: "agoraElectronicsSite",
          sourceVersion: "0",
        },
        agoratelco: {
          releaseCode: "agora.telco:agoraTelcoContentCatalog",
          releaseVersion: "0.0.2",
          dataType: "sample",
          rootType: "site",
          rootCode: "agoraTelcoSite",
          sourceVersion: "0",
        },
        frameworkdocs: {
          contentPackCode: "nodicsDocumentation",
          releaseVersion: "0.16.12",
          rootType: "site",
          rootCode: "nodicsDocumentationSite",
          sourceVersion: "0",
        },
        axisdocs: {
          contentPackCode: "axisDocumentation",
          releaseVersion: "0.0.3",
          rootType: "site",
          rootCode: "axisDocumentationSite",
          sourceVersion: "0",
        },
        kickoffdocs: {
          contentPackCode: "kickoffDocumentation",
          releaseVersion: "0.0.2",
          rootType: "site",
          rootCode: "kickoffDocumentationSite",
          sourceVersion: "0",
        },
      },
      workflow: {
        target: {
          moduleName: "process",
          connectionName: "process",
          connectionType: "abstract",
          timeoutMs: 10000,
          maxAttempts: 2,
        },
      },
      targetTransportProvider: "DefaultCmsPublicationModuleTransportService",
      target: {
        moduleName: "cms",
        connectionName: "cmsOnline",
      },
    },
  },
  editorial: {
    workflow: { processBaseUrl: "http://127.0.0.1:4330" },
    publication: {
      targetTransportProvider:
        "DefaultEditorialPublicationModuleTransportService",
      target: {
        moduleName: "editorial",
        connectionName: "cmsOnline",
        connectionType: "abstract",
      },
    },
  },
  servers: {
    default: {
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
    cmsOnline: {
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
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4330,
        httpsHost: "localhost",
        httpsPort: 4331,
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
