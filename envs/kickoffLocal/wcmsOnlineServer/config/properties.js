/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffLocal/wcmsOnlineServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffLocal/wcmsOnlineServer */
module.exports = {
  // Controlled local qualification; retained Media forbids physical cleanup.
  media: {
    publication: {
      versionProviderEnabled: true,
      source: { connectionName: "cmsStaged" },
    },
  },
  activeModules: {
    groups: [],
    modules: [
      "redisCache",
      "search",
      "elastic",
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
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
    ],
  },
  runtimeRole: {
    code: "WCMS_ONLINE",
    publication: "ONLINE",
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
    default: "wcms.online",
  },
  database: {
    default: {
      mongodb: {
        master: {
          URI: "mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal",
          databaseName: "kickoffLocalWcmsOnline",
        },
      },
    },
  },
  cms: {
    publication: {
      enabled: true,
    },
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4314,
        httpsPort: 4315,
      },
    },
  },
};
