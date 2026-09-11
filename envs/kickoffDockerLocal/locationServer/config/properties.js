/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module locationServer/config/properties
 * @description Defines isolated local Location coordinates and runtime configuration.
 * @layer environment-server-config
 * @owner nodics.kickoff
 * @override Customer deployments provide their own location server database, provider, and endpoint configuration.
 */
const capabilities = {
  activeModules: {
    groups: [],
    modules: [
      "circa.ewaste",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "kickoffDockerLocal",
      "locationServer",
      "nodics.location",
      "locationCore",
      "locationType",
      "locationMap",
      "locationSearch",
      "locationDraft",
      "locationApproval",
      "locationProjection",
    ],
  },
  runtimeRole: { code: "LOCATION", publication: "OPERATIONAL" },
  runtimeAuthorityContexts: {
    modules: {
      locationCore: "location.operational",
      locationType: "location.operational",
      locationMap: "location.operational",
      locationSearch: "location.operational",
      locationDraft: "location.operational",
      locationApproval: "location.operational",
      locationProjection: "location.operational",
    },
  },
  apiExposure: {
    categories: {
      serviceRegistry: { enabled: true },
      schemaWorkbench: { enabled: true },
      dataImport: { enabled: true },
      locationInternal: { enabled: true },
    },
  },
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffDockerLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: ["DefaultLocationMapProviderConfigurationService"],
    serviceNames: [
      "DefaultLocationMapProviderService",
      "DefaultLocationMapUsageService",
      "DefaultLocationMapStylePresetService",
      "DefaultLocationMapControlPresetService",
      "DefaultLocationMapProviderConfigurationService",
      "DefaultLocationMapLayerService",
      "DefaultLocationService",
      "DefaultLocationTypeService",
      "DefaultLocationCategoryService",
      "DefaultLocationCapabilityService",
      "DefaultLocationSearchProjectionService",
      "DefaultLocationDraftService",
      "DefaultLocationApprovalService",
      "DefaultLocationMarkerProjectionService",
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
      "DefaultSearchService",
      "DefaultTokenService",
      "DefaultValidatorService",
      "DefaultWorkflow2SchemaService",
    ],
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL_PRODUCTION_SIMULATION",
      allowedDestinationRoles: ["LOCATION"],
      contributions: [
        { moduleName: "wasteCollection", sections: ["sample-locations"] },
      ],
      initializationProfiles: {
        localLocationFoundation: {
          enabled: true,
          label: "Local Location foundation",
          description:
            "Install Location reference releases for type registry, semantic places, map layers, nearby search, drafts, approval, and marker projections.",
          completionMessage:
            "The Local Location foundation is ready. Operators can validate reusable places, map views, search projections, and draft approval flows.",
          steps: [{ dataType: "init" }, { dataType: "core" }],
        },
      },
    },
  },
  location: {
    capabilities: {
      semanticPlace: true,
      typeRegistry: true,
      mapLayers: true,
      nearbySearch: true,
      draftCapture: true,
      approval: true,
      markerProjection: true,
    },
  },
  database: {
    default: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationCore: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationType: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationMap: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationSearch: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationDraft: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationApproval: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
    locationProjection: {
      mongodb: { master: { databaseName: "kickoffDockerLocalLocation" } },
    },
  },
  servers: {
    default: {
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
    commerce: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4350,
        httpsHost: "127.0.0.1",
        httpsPort: 4351,
      },
    },
    waste: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4370,
        httpsHost: "127.0.0.1",
        httpsPort: 4371,
      },
    },
  },
};

const runtime = require("../../config/runtime-properties")("locationServer");
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
