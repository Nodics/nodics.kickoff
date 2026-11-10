/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffLocal/wcmsStagedServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffLocal/wcmsStagedServer */
const circaNative = require("../../config/circaRuntimeOverrides.json");

module.exports = {
  // Local governed-file acceptance: retain export.run and separate Media delivery authorization.
  apiExposure: {
    categories: {
      dataExport: { enabled: true },
    },
  },
  data: { dataReleases: { initializationProfiles: {
    localWcmsFoundation: {
      template: "foundation",
      label: "Content authoring foundation",
      description: "Review the initialization and reference releases available on the content authoring runtime.",
      completionMessage: "The authoring foundation is current. Review publication and Online delivery separately.",
    },
        localDocumentationFoundation: {
          enabled: true,
          label: "Local Documentation foundation",
          description:
            "Install the WCMS initialization releases required before documentation content packs can be reviewed and published.",
          completionMessage:
            "The Local Documentation foundation is ready. Import documentation packs through Setup and Accelerators or the Documentation dashboard, then publish approved content Online.",
          template: "axisDocumentationFoundation",
        },
  } } },
  // Controlled local qualification; retained/versioned Media forbids physical cleanup.
  media: {
    customerUploads: {
      enabled: true,
    },
    publication: {
      versionProviderEnabled: true,
      target: {
        connectionName: "cmsOnline",
      },
    },
  },
  publish: {
    setup: { observation: { enabled: true } },
    approvalWorkflow: {
      target: { connectionName: "process" },
    },
  },
  activeModules: {
    groups: ["nexus"],
    modules: [
      "vMongodb",
      "redisCache",
      "axis",
      "circa.ewaste",
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
      "cmsStaged",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nexus.web",
      {
        $config: "composition",
        name: "agora",
        field: "projectPacks",
        spread: true,
      },
    ],
  },
  runtimeRole: {
    code: "WCMS_STAGED",
    publication: "STAGED",
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
        httpPort: 4312,
        httpsPort: 4313,
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
  profileExternalIdentity: circaNative.profileExternalIdentity,
  bidding: {
    enabled: true,
    policyVersion: "circa-digital-bids-v1",
    amountScale: 0,
    maximumAmount: "100000",
    stores: {
      circaMainStore: {
        enterpriseCode: "GREENPERKS_ONLINE",
        currency: "POINTS",
        locale: "en",
        orderCodePrefix: "CIRCA_ORDER_BID_",
        allowOwnerReference: true,
      },
    },
  },
  waste: {
    operations: {
      requireScopes: true,
      requireVerification: true,
    },
  },
  eWaste: circaNative.eWaste,
  promotion: {
    legacyTokenHashPolicies: ["TENANT_COLON_UPPERCASE_SHA256"],
  },
  digitalCore: {
    merchantRedemption: {
      enabled: true,
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
