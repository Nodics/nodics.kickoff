/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/wcmsStagedServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/wcmsStagedServer */
module.exports = {
  activeModules: {
    groups: ["nexus"],
    modules: [
      "cmsStaged",
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "nexus.web",
      {
        $config: "composition",
        name: "agora",
        field: "projectPacks",
        spread: true,
      },
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
    ],
  },
  runtimeRole: {
    code: "WCMS_STAGED",
    publication: "STAGED",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffDockerLocalWcmsStaged",
        },
      },
    },
  },
  media: {
    storage: {
      providers: {
        local: {
          basePath: "/var/lib/nodics/media-staged",
        },
      },
    },
  },
  cms: {
    publication: {
      enabled: true,
      baselines: {
        axis: {
          releaseVersion: "0.0.2",
        },
        frameworkdocs: {
          contentPackCode: "nodicsDocumentation",
          releaseVersion: "0.0.2",
          sourceVersion: "0",
        },
        axisdocs: {
          contentPackCode: "axisDocumentation",
          releaseVersion: "0.0.1",
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
        httpHost: "0.0.0.0",
        httpPort: 4312,
        httpsHost: "0.0.0.0",
        httpsPort: 4313,
      },
      browserEndpoint: {
        httpHost: "localhost",
        httpPort: 5312,
      },
      abstractEndpoint: {
        httpHost: "wcms-staged",
        httpPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpPort",
        },
        httpsHost: "wcms-staged",
        httpsPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpsPort",
        },
      },
    },
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
  schemaPolicies: {
    runtimeRoleProfiles: {
      WCMS_STAGED: {
        media: {
          publicationVersioned: { isVersionedEnabled: false },
        },
      },
    },
  },
};
