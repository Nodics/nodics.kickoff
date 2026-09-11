/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
const environmentProfile = require("../nodics.environment.json");

/** @module kickoffDockerLocal/config/runtimeProperties @description Builds explicit server deltas without reading kickoffLocal configuration. */

function resolveAgoraDomainComposition(
  compositionConfig,
  value = process.env.NODICS_AGORA_DOMAINS ||
    compositionConfig.selection ||
    "all",
) {
  const supported = Object.fromEntries(
    (compositionConfig.domains || []).map((domain) => [domain.code, domain]),
  );
  const requested =
    value === "all"
      ? (compositionConfig.domains || []).map((domain) => domain.code)
      : value === "commerce" || value === "none"
        ? []
        : value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
  const domains = [...new Set(requested)];
  const unknown = domains.filter((domain) => !supported[domain]);
  if (unknown.length)
    throw new Error(`Unsupported NODICS_AGORA_DOMAINS: ${unknown.join(",")}`);
  const contributorDomains = new Set(domains);
  domains.forEach((domain) =>
    (supported[domain].impliedProductSearchContributorDomains || []).forEach(
      (item) => contributorDomains.add(item),
    ),
  );
  return Object.freeze({
    domains: Object.freeze(domains),
    frameworkGroups: Object.freeze(
      domains.map((domain) => supported[domain].frameworkGroup).filter(Boolean),
    ),
    sharedModules: Object.freeze(
      (compositionConfig.sharedModules || [])
        .filter(
          (rule) => domains.length >= Number(rule.minSelectedDomains || 0),
        )
        .map((rule) => rule.module)
        .filter(Boolean),
    ),
    projectPacks: Object.freeze(
      domains.map((domain) => supported[domain].projectPack).filter(Boolean),
    ),
    productSearchContributors: Object.freeze(
      Object.fromEntries(
        [...contributorDomains]
          .sort()
          .map((domain) => [
            domain,
            supported[domain]?.productSearchContributor,
          ])
          .filter(([, contributor]) => contributor),
      ),
    ),
  });
}

const agoraDomains = resolveAgoraDomainComposition(
  environmentProfile.composition.agora,
);
const endpoint = (host, port) => ({
  endpoint: {
    httpHost: "0.0.0.0",
    httpPort: port,
    httpsHost: "0.0.0.0",
    httpsPort: port + 1,
  },
  abstractEndpoint: {
    httpHost: host,
    httpPort: port,
    httpsHost: host,
    httpsPort: port + 1,
  },
});
const platformConnections = {
  platform: endpoint("platform", 4300),
  platformServer: endpoint("platform", 4300),
  profile: endpoint("platform", 4300),
  backoffice: endpoint("platform", 4300),
};
const publicationConnections = {
  wcmsStaged: endpoint("wcms-staged", 4312),
  wcmsStagedServer: endpoint("wcms-staged", 4312),
  cmsStaged: endpoint("wcms-staged", 4312),
  wcmsOnline: endpoint("wcms-online", 4314),
  wcmsOnlineServer: endpoint("wcms-online", 4314),
  cmsOnline: endpoint("wcms-online", 4314),
  process: endpoint("process", 4330),
  processServer: endpoint("process", 4330),
};
const commerceConnections = {
  commerce: endpoint("commerce", 4350),
  commerceServer: endpoint("commerce", 4350),
  commerceStaged: endpoint("commerce-staged", 4352),
  commerceStagedServer: endpoint("commerce-staged", 4352),
};
const engagementConnections = {
  engagement: endpoint("engagement", 4340),
  engagementServer: endpoint("engagement", 4340),
};
const loyaltyConnections = {
  loyalty: endpoint("loyalty", 4360),
  loyaltyServer: endpoint("loyalty", 4360),
};
const connections = {
  ...platformConnections,
  ...publicationConnections,
  ...commerceConnections,
  ...engagementConnections,
  ...loyaltyConnections,
  waste: endpoint("waste", 4370),
  wasteServer: endpoint("waste", 4370),
  location: endpoint("location", 4380),
  locationServer: endpoint("location", 4380),
};
const projectModules = [
  "nodics.kickoff",
  "kickoffCore",
  "kickoffApi",
  "kickoffInt",
  "circa.ewaste",
];
const distributedCacheModules = ["redisCache"];
const commerceSearchRuntimeModules = [
  "search",
  "elastic",
  "commerceSearchCore",
  "commerceSearch",
];
const digitalCommerceRuntimeModules = ["digitalCommerce"];
const database = (name) => ({
  default: {
    mongodb: {
      master: { URI: process.env.NODICS_MONGODB_URI, databaseName: name },
    },
  },
});
const elasticConnection = () => ({
  connection: {
    hosts: [
      process.env.NODICS_ELASTICSEARCH_URL || "http://elasticsearch:9200",
    ],
  },
});
const wcmsSearch = () =>
  Object.fromEntries(
    ["discoveryProjection", "wcmsExperience"].map((moduleName) => [
      moduleName,
      {
        options: { enabled: true, fallback: false, engine: "elastic" },
        elastic: elasticConnection(),
      },
    ]),
  );
const productSearch = () => ({
  product: {
    options: { enabled: true, fallback: false, engine: "elastic" },
    elastic: elasticConnection(),
  },
  commerceSearchCore: {
    options: { enabled: true, fallback: false, engine: "elastic" },
    elastic: elasticConnection(),
  },
  discoveryProjection: {
    options: { enabled: true, fallback: false, engine: "elastic" },
    elastic: elasticConnection(),
  },
});
const dataReleases = (roles, contributions = []) => ({
  lifecycleMetadataRequired: true,
  destinationEnforced: true,
  environmentClass: "LOCAL_PRODUCTION_SIMULATION",
  allowedDestinationRoles: roles,
  contributions,
});
const distributedAuthCache = {
  channels: { auth: { enabled: true, engine: "redis", fallback: false } },
  engines: {
    redis: {
      enabled: true,
      distributed: true,
      atomicConsume: true,
      options: {
        url: process.env.REDIS_URL,
        host: null,
        port: null,
        database: 0,
        prefix: "kickoffCore",
        password: process.env.REDIS_PASSWORD,
        sentinel: {
          enabled: true,
          name: "nodics",
          password: process.env.REDIS_PASSWORD,
          endpoints: [{ host: "redis-sentinel", port: 26379 }],
          connectTimeout: 5000,
          commandTimeout: 3000,
          retryDelayMs: 250,
          maximumRetryDelayMs: 5000,
        },
      },
    },
  },
};
const productionSimulationSecurity = {
  authSecurity: {
    jwt: { secret: process.env.AUTH_JWT_SECRET },
    apiKey: { pepper: process.env.AUTH_API_KEY_PEPPER },
    securityStamp: {
      enabled: true,
      failClosed: true,
      allowMissingStamp: false,
      cacheModuleName: "kickoffCore",
    },
    refreshToken: { requireDistributedCache: true },
  },
  cache: {
    enabled: true,
    invalidation: { crossNode: true },
    kickoffCore: distributedAuthCache,
  },
};

/** Returns the Docker-only configuration for one recognized server module. */
module.exports = function runtimeProperties(server) {
  const definitions = {
    platformServer: {
      activeModules: {
        groups: [],
        modules: [
          ...distributedCacheModules,
          ...projectModules,
          "axis",
          "kickoffDockerLocal",
          server,
        ],
      },
      runtimeRole: { code: "PLATFORM", publication: "OPERATIONAL" },
      database: database("kickoffDockerLocalPlatform"),
      profileCustomerBrowserSession: {
        enabled: true,
        refreshCookieName: "nodics_docker_customer_refresh",
        csrfCookieName: "nodics_docker_customer_csrf",
        secure: false,
        sameSite: "Lax",
      },
      profileBrowserSession: {
        enabled: true,
        refreshCookieName: "nodics_docker_axis_refresh",
        csrfCookieName: "nodics_docker_axis_csrf",
        cookiePath: "/nodics/profile/v0/employee/browser",
        csrfCookiePath: "/",
        sameSite: "Lax",
        secure: false,
        maximumAgeSeconds: 86400,
      },
      backofficeApplicationInitialization: {
        operatorOrigin: "http://localhost:4100",
        profiles: {
          nexus: {
            code: "nexus",
            type: "WEBSITE_BUNDLE",
            owner: "nexus.web",
            applicationCode: "nexus",
            siteCode: "nexusCorporateSite",
            baselineCode: "nexus",
            presentation: {
              title: "Nexus Corporate",
              kind: "PROJECT",
              category: "accelerator",
              order: 100,
              summary:
                "Corporate website accelerator published from WCMS Staged to Online.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "ACTIVATION",
                sampleDataTrigger: "USER",
              },
            },
            dataPackages: [
              {
                code: "nexus.web:nexusCorporateSite",
                kind: "Corporate site content",
                required: true,
                trigger: "ACTIVATION",
                dataType: "sample",
                targetServer: "wcmsStaged",
                targetRuntimeRole: "WCMS_STAGED",
              },
              {
                code: "nexus.web:nexusCorporateMediaReferences",
                kind: "Corporate media references",
                required: true,
                trigger: "ACTIVATION",
                dataType: "sample",
                targetServer: "wcmsStaged",
                targetRuntimeRole: "WCMS_STAGED",
              },
              {
                code: "nexus.web:nexusEditorialSource",
                kind: "News and blog source",
                required: true,
                trigger: "ACTIVATION",
                dataType: "sample",
                targetServer: "wcmsStaged",
                targetRuntimeRole: "WCMS_STAGED",
              },
              {
                code: "nexus.web:nexusCorporateMediaAssets",
                type: "MEDIA_ASSET_MANIFEST",
                kind: "Corporate media files",
                required: true,
                trigger: "ACTIVATION",
                targetServer: "wcmsStaged",
                targetRuntimeRole: "WCMS_STAGED",
                manifestPath:
                  "modules/nexus.web/data/sample-v001/content/assets/nexus-cms-media/assetManifest.js",
                businessPurpose: "NEXUS_CORPORATE_CONTENT",
              },
              {
                code: "nexus.web:nexusEngagementOperational",
                kind: "Contact and testimonial experience",
                required: true,
                trigger: "ACTIVATION",
                dataType: "sample",
                targetServer: "engagementServer",
                targetRuntimeRole: "ENGAGEMENT",
              },
            ],
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          nexusupdate: {
            code: "nexusupdate",
            type: "WEBSITE_BUNDLE_UPDATE",
            owner: "nexus.web",
            applicationCode: "nexus",
            siteCode: "nexusCorporateSite",
            baselineCode: "nexusupdate",
            presentation: { visible: false },
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          nexusecosystemrepair: {
            code: "nexusecosystemrepair",
            type: "WEBSITE_BUNDLE_UPDATE",
            owner: "nexus.web",
            applicationCode: "nexus",
            siteCode: "nexusCorporateSite",
            baselineCode: "nexusecosystemrepair",
            presentation: { visible: false },
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          agora: {
            code: "agora",
            type: "STOREFRONT_BUNDLE",
            owner: "domainCommerceCore",
            applicationCode: "agora",
            siteCode: "agoraStorefrontSite",
            baselineCode: "agora",
            presentation: {
              title: "Agora Storefront",
              kind: "PROJECT",
              category: "accelerator",
              order: 200,
              summary:
                "Commerce storefront accelerator. Domain-specific bundles will become separate business-facing accelerators.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
                "Commerce",
                "Discovery",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "ACTIVATION",
                sampleDataTrigger: "USER",
              },
            },
            dataPackages: [
              {
                code: "agora.apparel:agoraApparelContentCatalog",
                kind: "DOMAIN_CONTENT",
                required: true,
                trigger: "ACTIVATION",
              },
              {
                code: "agora.apparel:agoraApparelCommerceCatalog",
                kind: "DOMAIN_COMMERCE",
                required: true,
                trigger: "ACTIVATION",
              },
              {
                code: "agora.electronics:agoraElectronicsContentCatalog",
                kind: "DOMAIN_CONTENT",
                required: false,
                trigger: "USER",
              },
              {
                code: "agora.electronics:agoraElectronicsCommerceCatalog",
                kind: "DOMAIN_COMMERCE",
                required: false,
                trigger: "USER",
              },
              {
                code: "agora.telco:agoraTelcoContentCatalog",
                kind: "DOMAIN_CONTENT",
                required: false,
                trigger: "USER",
              },
              {
                code: "agora.telco:agoraTelcoCommerceCatalog",
                kind: "DOMAIN_COMMERCE",
                required: false,
                trigger: "USER",
              },
            ],
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          agoraapparel: {
            code: "agoraapparel",
            type: "STOREFRONT_DOMAIN_BUNDLE",
            owner: "agora.apparel",
            applicationCode: "agora",
            siteCode: "agoraApparelSite",
            baselineCode: "agoraapparel",
            presentation: {
              title: "Agora Apparel",
              kind: "PROJECT",
              category: "accelerator",
              order: 210,
              summary:
                "Apparel storefront accelerator as a complete business-facing domain bundle.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
                "Commerce",
                "Discovery",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "USER",
                sampleDataTrigger: "USER",
              },
            },
            dataPackages: [
              {
                code: "agora.apparel:agoraApparelContentCatalog",
                kind: "DOMAIN_CONTENT",
                required: true,
                trigger: "USER",
              },
              {
                code: "agora.apparel:agoraApparelCommerceCatalog",
                kind: "DOMAIN_COMMERCE",
                required: true,
                trigger: "USER",
              },
            ],
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          agoraelectronics: {
            code: "agoraelectronics",
            type: "STOREFRONT_DOMAIN_BUNDLE",
            owner: "agora.electronics",
            applicationCode: "agora",
            siteCode: "agoraElectronicsSite",
            baselineCode: "agoraelectronics",
            presentation: {
              title: "Agora Electronics",
              kind: "PROJECT",
              category: "accelerator",
              order: 220,
              summary:
                "Electronics storefront accelerator as a complete business-facing domain bundle.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
                "Commerce",
                "Discovery",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "USER",
                sampleDataTrigger: "USER",
              },
            },
            dataPackages: [
              {
                code: "agora.electronics:agoraElectronicsContentCatalog",
                kind: "DOMAIN_CONTENT",
                required: true,
                trigger: "USER",
              },
              {
                code: "agora.electronics:agoraElectronicsCommerceCatalog",
                kind: "DOMAIN_COMMERCE",
                required: true,
                trigger: "USER",
              },
            ],
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          agoratelco: {
            code: "agoratelco",
            type: "STOREFRONT_DOMAIN_BUNDLE",
            owner: "agora.telco",
            applicationCode: "agora",
            siteCode: "agoraTelcoSite",
            baselineCode: "agoratelco",
            presentation: {
              title: "Agora Telco",
              kind: "PROJECT",
              category: "accelerator",
              order: 230,
              summary:
                "Telco storefront accelerator as a complete business-facing domain bundle.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
                "Commerce",
                "Discovery",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "USER",
                sampleDataTrigger: "USER",
              },
            },
            dataPackages: [
              {
                code: "agora.telco:agoraTelcoContentCatalog",
                kind: "DOMAIN_CONTENT",
                required: true,
                trigger: "USER",
              },
              {
                code: "agora.telco:agoraTelcoCommerceCatalog",
                kind: "DOMAIN_COMMERCE",
                required: true,
                trigger: "USER",
              },
            ],
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          frameworkdocs: {
            code: "frameworkdocs",
            type: "DOCUMENTATION_BUNDLE",
            owner: "nodics.docs",
            applicationCode: "axis",
            siteCode: "nodicsDocumentationSite",
            baselineCode: "frameworkdocs",
            contentPackCode: "nodicsDocumentation",
            presentation: {
              title: "Framework Documentation",
              kind: "DOCUMENTATION",
              category: "documentation",
              order: 300,
              summary:
                "Framework documentation content pack and Online delivery profile.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "USER",
                sampleDataTrigger: "USER",
              },
            },
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          axisdocs: {
            code: "axisdocs",
            type: "DOCUMENTATION_BUNDLE",
            owner: "axis",
            applicationCode: "axis",
            siteCode: "axisDocumentationSite",
            baselineCode: "axisdocs",
            contentPackCode: "axisDocumentation",
            presentation: {
              title: "Nodics Axis Documentation",
              kind: "DOCUMENTATION",
              category: "documentation",
              order: 400,
              summary:
                "Axis product documentation content pack and Online delivery profile.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "USER",
                sampleDataTrigger: "USER",
              },
            },
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          kickoffdocs: {
            code: "kickoffdocs",
            type: "DOCUMENTATION_BUNDLE",
            owner: "nodics.kickoff",
            applicationCode: "axis",
            siteCode: "kickoffDocumentationSite",
            baselineCode: "kickoffdocs",
            contentPackCode: "kickoffDocumentation",
            presentation: {
              title: "Nodics Kickoff Documentation",
              kind: "DOCUMENTATION",
              category: "documentation",
              order: 500,
              summary:
                "Reference-project documentation content pack and Online delivery profile.",
              requiredServers: [
                "Platform",
                "WCMS Staged",
                "WCMS Online",
                "Process",
              ],
              activationPolicy: {
                approvalRequiredForOnline: true,
                requiredDataTrigger: "USER",
                sampleDataTrigger: "USER",
              },
            },
            target: {
              moduleName: "cms",
              connectionName: "wcmsStaged",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
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
                targetServer: "wcmsStagedServer",
                targetDatabase: "kickoffDockerLocalWcmsStaged",
                operation: "IMPORT",
              },
              {
                code: "wcms:sample-content",
                classification: "sample",
                owner: "nodics.wcms",
                required: false,
                trigger: "USER",
                targetModule: "cms",
                targetServer: "wcmsStagedServer",
                targetDatabase: "kickoffDockerLocalWcmsStaged",
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
                targetDatabase: "kickoffDockerLocalCommerce",
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
                targetDatabase: "kickoffDockerLocalCommerce",
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
                targetDatabase: "kickoffDockerLocalEngagement",
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
                targetDatabase: "kickoffDockerLocalEngagement",
                operation: "IMPORT_SAMPLE",
              },
            ],
          },
        },
      },
      backofficeRegistry: {
        clientEndpoints: {
          platform: "http://localhost:5300/",
          platformServer: "http://localhost:5300/",
          wcmsStaged: "http://localhost:5312/",
          wcmsStagedServer: "http://localhost:5312/",
          wcmsOnline: "http://localhost:5314/",
          wcmsOnlineServer: "http://localhost:5314/",
          process: "http://localhost:5330/",
          processServer: "http://localhost:5330/",
          engagement: "http://localhost:5340/",
          engagementServer: "http://localhost:5340/",
          loyalty: "http://localhost:5360/",
          loyaltyServer: "http://localhost:5360/",
          commerce: "http://localhost:5350/",
          commerceServer: "http://localhost:5350/",
          commerceStaged: "http://localhost:5352/",
          commerceStagedServer: "http://localhost:5352/",
        },
      },
      servers: { default: endpoint("platform", 4300), ...connections },
    },
    wcmsStagedServer: {
      search: wcmsSearch(),
      httpHardening: {
        cors: {
          allowedOrigins: ["http://localhost:4100", "http://127.0.0.1:4100"],
          deniedOrigins: ["http://localhost:4200", "http://127.0.0.1:4200"],
        },
      },
      activeModules: {
        groups: [],
        modules: [
          "cmsStaged",
          ...distributedCacheModules,
          ...projectModules,
          "nexus.web",
          ...agoraDomains.projectPacks,
          "kickoffDockerLocal",
          server,
        ],
      },
      publishEnabled: true,
      runtimeRole: { code: "WCMS_STAGED", publication: "STAGED" },
      apiExposure: {
        categories: {
          dataImport: { enabled: true },
          dataExport: { enabled: true },
          mediaManagement: { enabled: true },
        },
      },
      data: {
        dataReleases: dataReleases(
          ["WCMS_STAGED"],
          [{ moduleName: "axis", sections: ["axisBaseline"] }],
        ),
      },
      database: database("kickoffDockerLocalWcmsStaged"),
      media: {
        storage: {
          providers: { local: { basePath: "/var/lib/nodics/media-staged" } },
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
            nexus: {
              releaseCode: "nexus.web:nexusCorporateSite",
              releaseVersion: "0.0.19",
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
            agora: {
              releaseCode: "agora.apparel:agoraApparelContentCatalog",
              releaseVersion: "0.0.0",
              dataType: "sample",
              rootType: "site",
              rootCode: "agoraStorefrontSite",
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
              releaseVersion: "0.16.11",
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
          targetTransportProvider:
            "DefaultCmsPublicationModuleTransportService",
          workflow: {
            target: {
              moduleName: "process",
              connectionName: "process",
              connectionType: "abstract",
              timeoutMs: 10000,
              maxAttempts: 2,
            },
          },
          target: {
            moduleName: "cms",
            connectionName: "cmsOnline",
            connectionType: "abstract",
          },
        },
      },
      editorial: {
        workflow: { processBaseUrl: "http://process:4330" },
        publication: {
          runtimeRole: "STAGED",
          targetTransportProvider:
            "DefaultEditorialPublicationModuleTransportService",
          target: {
            moduleName: "editorial",
            connectionName: "cmsOnline",
            connectionType: "abstract",
          },
        },
      },
      servers: { default: endpoint("wcms-staged", 4312), ...connections },
    },
    wcmsOnlineServer: {
      search: wcmsSearch(),
      activeModules: {
        groups: [],
        modules: [
          ...distributedCacheModules,
          ...projectModules,
          "kickoffDockerLocal",
          server,
        ],
      },
      publishEnabled: false,
      runtimeRole: { code: "WCMS_ONLINE", publication: "ONLINE" },
      data: { dataReleases: dataReleases([]) },
      database: database("kickoffDockerLocalWcmsOnline"),
      media: {
        storage: {
          providers: { local: { basePath: "/var/lib/nodics/media-online" } },
        },
      },
      cms: {
        publication: {
          enabled: true,
          runtimeRole: "ONLINE",
          targetTransportProvider: null,
        },
        delivery: {
          mediaDeliveryBaseUrl: "http://localhost:5314/nodics/media/v0/content",
        },
      },
      editorial: {
        publication: { runtimeRole: "ONLINE", targetTransportProvider: null },
      },
      apiExposure: {
        categories: {
          schemaWorkbench: { enabled: false },
          schemaMaintenance: { enabled: false },
          dataImport: { enabled: false },
          dataExport: { enabled: false },
          mediaManagement: { enabled: false },
          mediaDelivery: { enabled: true },
        },
      },
      servers: { default: endpoint("wcms-online", 4314), ...connections },
    },
    processServer: {
      httpHardening: {
        cors: {
          allowedOrigins: ["http://localhost:4100", "http://127.0.0.1:4100"],
          deniedOrigins: ["http://localhost:4200", "http://127.0.0.1:4200"],
        },
      },
      activeModules: {
        groups: [],
        modules: [
          ...distributedCacheModules,
          ...projectModules,
          "kickoffDockerLocal",
          server,
        ],
      },
      runtimeRole: { code: "PROCESS", publication: "OPERATIONAL" },
      data: {
        dataReleases: {
          ...dataReleases(
            ["PROCESS"],
            [{ moduleName: "cms", sections: ["cmsPublicationApproval"] }],
          ),
          installers: {
            PROCESS_DEFINITION: "DefaultProcessDefinitionContributionService",
          },
        },
      },
      apiExposure: {
        categories: {
          serviceRegistry: { enabled: true },
          dataImport: { enabled: true },
          dataExport: { enabled: false },
        },
      },
      database: {
        ...database("kickoffDockerLocalProcess"),
        cronjob: {
          mongodb: {
            master: {
              URI: process.env.NODICS_MONGODB_URI,
              databaseName: "kickoffDockerLocalCron",
            },
          },
        },
      },
      process: {
        publicationDecisionCallback: {
          target: {
            moduleName: "cms",
            connectionName: "cmsStaged",
            connectionType: "abstract",
            timeoutMs: 10000,
            maxAttempts: 2,
          },
        },
        actionAdapters: {
          allowedActions: [
            {
              moduleName: "nodics.process",
              operation: "noop",
              description:
                "Safe no-op adapter for framework smoke tests and beginner demos",
            },
            {
              moduleName: "editorial",
              operation: "applyDecision",
              service: "DefaultKickoffEditorialProcessAdapterService",
              method: "applyDecision",
              description: "Delegates Editorial approval decisions to WCMS",
            },
            {
              moduleName: "editorial",
              operation: "publishApproved",
              service: "DefaultKickoffEditorialProcessAdapterService",
              method: "publishApproved",
              description: "Delegates approved Editorial publication to WCMS",
            },
            {
              moduleName: "cms",
              operation: "applyPublicationDecision",
              service: "DefaultProcessPublicationDecisionCallbackService",
              method: "applyPublicationDecision",
              description: "Returns publication decisions to WCMS Staged",
            },
          ],
        },
      },
      editorialProcessAdapter: { wcmsBaseUrl: "http://wcms-staged:4312" },
      servers: { default: endpoint("process", 4330), ...connections },
    },
    engagementServer: {
      activeModules: {
        groups: [],
        modules: [
          ...distributedCacheModules,
          ...projectModules,
          "nexus.web",
          "kickoffDockerLocal",
          server,
        ],
      },
      runtimeRole: { code: "ENGAGEMENT", publication: "OPERATIONAL" },
      data: { dataReleases: dataReleases(["ENGAGEMENT"]) },
      engagement: {
        capabilities: {
          contactSubmission: true,
          testimonial: true,
          customerReview: true,
          customerFeedback: true,
        },
      },
      customerFeedback: { enabled: true },
      database: database("kickoffDockerLocalEngagement"),
      servers: { default: endpoint("engagement", 4340), ...connections },
    },
    loyaltyServer: {
      activeModules: {
        groups: [],
        modules: [
          ...distributedCacheModules,
          ...projectModules,
          "kickoffDockerLocal",
          server,
        ],
      },
      runtimeRole: { code: "LOYALTY", publication: "OPERATIONAL" },
      data: { dataReleases: dataReleases(["LOYALTY"]) },
      apiExposure: {
        categories: {
          serviceRegistry: { enabled: true },
          dataImport: { enabled: true },
          loyaltyInternal: { enabled: true },
        },
      },
      loyalty: {
        capabilities: {
          wallet: true,
          rewardType: true,
          walletReward: true,
          ledger: true,
          earning: true,
          reservation: true,
          redemption: true,
          spendPolicy: true,
        },
      },
      database: database("kickoffDockerLocalLoyalty"),
      servers: { default: endpoint("loyalty", 4360), ...connections },
    },
    commerceServer: {
      activeModules: {
        groups: [...agoraDomains.frameworkGroups],
        modules: [
          ...distributedCacheModules,
          ...commerceSearchRuntimeModules,
          ...digitalCommerceRuntimeModules,
          ...agoraDomains.sharedModules,
          ...projectModules,
          "kickoffDockerLocal",
          server,
        ],
      },
      runtimeRole: { code: "COMMERCE", publication: "OPERATIONAL" },
      cart: {
        customerApi: {
          defaultStoreCode: "agoraMainStore",
          defaultChannelCode: "web",
          defaultLocale: "en",
          defaultJurisdiction: "AE",
          defaultCurrency: "AED",
        },
      },
      database: database("kickoffDockerLocalCommerce"),
      apiExposure: {
        categories: {
          serviceRegistry: { enabled: true },
          dataImport: { enabled: true },
          commerceCustomer: { enabled: true },
        },
      },
      data: { dataReleases: dataReleases(["COMMERCE"]) },
      search: productSearch(),
      product: {
        publication: {
          searchEnrichment: {
            domains: {
              enabled: true,
              contributors: agoraDomains.productSearchContributors,
              missingBehavior: "error",
            },
          },
        },
        discovery: {
          mediaDeliveryBaseUrl: "http://localhost:5314/nodics/media/v0/content",
        },
      },
      stripeProvider: {
        enabled: true,
        maturity: "OFFLINE_CONFORMANCE",
        sandboxOnly: true,
        liveQualified: false,
      },
      servers: { default: endpoint("commerce", 4350), ...connections },
    },
    commerceStagedServer: {
      activeModules: {
        groups: [...agoraDomains.frameworkGroups],
        modules: [
          ...distributedCacheModules,
          ...commerceSearchRuntimeModules,
          ...digitalCommerceRuntimeModules,
          ...agoraDomains.sharedModules,
          ...projectModules,
          ...agoraDomains.projectPacks,
          "kickoffDockerLocal",
          server,
        ],
      },
      runtimeRole: { code: "COMMERCE_STAGED", publication: "STAGED" },
      data: { dataReleases: dataReleases(["COMMERCE_STAGED"]) },
      apiExposure: {
        categories: {
          serviceRegistry: { enabled: true },
          dataImport: { enabled: true },
          commerceManagement: { enabled: true },
        },
      },
      database: database("kickoffDockerLocalCommerceStaged"),
      search: productSearch(),
      product: {
        publication: {
          searchEnrichment: {
            domains: {
              enabled: true,
              contributors: agoraDomains.productSearchContributors,
              missingBehavior: "error",
            },
          },
        },
      },
      stripeProvider: {
        enabled: false,
        maturity: "NOT_APPLICABLE_FOR_STAGED_CATALOG",
        sandboxOnly: true,
        liveQualified: false,
      },
      servers: {
        default: endpoint("commerce-staged", 4352),
        ...connections,
        commerce: endpoint("commerce", 4350),
      },
    },
  };

  Object.assign(
    definitions.platformServer.backofficeApplicationInitialization.profiles,
    require("./application-profiles"),
  );
  // The three domain applications replace the retired combined storefront.
  delete definitions.platformServer.backofficeApplicationInitialization.profiles
    .agora;
  Object.assign(
    definitions.platformServer.backofficeFunctionalModuleActivationData.modules,
    require("./activation-targets"),
  );
  definitions.platformServer.data = {
    dataReleases: dataReleases(
      ["PLATFORM"],
      [
        { moduleName: "wasteCore", sections: ["core-reference"] },
        {
          moduleName: "wasteCollection",
          sections: ["sample-profile-addresses"],
        },
        { moduleName: "loyaltyCore", sections: ["core-enterprise-reference"] },
      ],
    ),
  };
  Object.assign(definitions.platformServer.backofficeRegistry.clientEndpoints, {
    waste: "http://localhost:5370/",
    wasteServer: "http://localhost:5370/",
    location: "http://localhost:5380/",
    locationServer: "http://localhost:5380/",
  });
  definitions.commerceServer.product.discovery.catalogue =
    require("./commerce-presentation").catalogue;
  definitions.commerceServer.fulfillmentCore =
    require("./commerce-presentation").fulfillmentCore;
  const operationalConnections = Object.fromEntries(
    Object.entries(connections).map(([code, value]) => [
      code,
      {
        ...value,
        remoteOnly: true,
        endpoint: {
          ...value.endpoint,
          httpHost: value.abstractEndpoint.httpHost,
          httpsHost: value.abstractEndpoint.httpsHost,
        },
      },
    ]),
  );
  operationalConnections.wcms = operationalConnections.wcmsStaged;
  for (const [moduleName, host, port, databaseName] of [
    ["wasteServer", "waste", 4370, "kickoffDockerLocalWaste"],
    ["locationServer", "location", 4380, "kickoffDockerLocalLocation"],
  ]) {
    definitions[moduleName] = {
      ...productionSimulationSecurity,
      database: database(databaseName),
      servers: { ...operationalConnections, default: endpoint(host, port) },
      search: {
        discoveryProjection: {
          options: { enabled: true, fallback: false, engine: "elastic" },
          elastic: elasticConnection(),
        },
      },
    };
  }
  for (const profile of Object.values(
    definitions.platformServer.backofficeApplicationInitialization.profiles,
  )) {
    if (profile.target) {
      profile.target.timeoutMs = 120000;
      profile.target.maxAttempts = 1;
    }
  }
  const capabilityDefinitions = require("./runtime-capabilities");
  const localAliases = {
    platformServer: ["platform", "platformServer", "profile", "backoffice"],
    wcmsStagedServer: ["wcmsStaged", "wcmsStagedServer", "wcms"],
    wcmsOnlineServer: ["wcmsOnline", "wcmsOnlineServer", "wcms"],
    processServer: ["process", "processServer"],
    engagementServer: ["engagement", "engagementServer"],
    commerceServer: ["commerce", "commerceServer"],
    commerceStagedServer: ["commerceStaged", "commerceStagedServer"],
    loyaltyServer: ["loyalty", "loyaltyServer"],
    wasteServer: ["waste", "wasteServer"],
    locationServer: ["location", "locationServer"],
  };
  for (const [name, definition] of Object.entries(definitions)) {
    const configuredCapabilities = capabilityDefinitions[name];
    const domainModules = {
      apparelProduct: "apparel",
      electronicsProduct: "electronics",
      telcoCatalog: "telco",
      telcoSubscription: "telco",
      telcoProvisioning: "telco",
    };
    const enabledCapability = (code) =>
      (!domainModules[code] ||
        agoraDomains.domains.includes(domainModules[code])) &&
      (code !== "domainCommerceCore" ||
        agoraDomains.sharedModules.includes(code));
    const capabilities = {
      modules: configuredCapabilities.modules.filter(enabledCapability),
      authority:
        configuredCapabilities.authority &&
        Object.fromEntries(
          Object.entries(configuredCapabilities.authority).filter(([code]) =>
            enabledCapability(code),
          ),
        ),
    };
    definition.activeModules ||= { groups: [], modules: [] };
    definition.activeModules.modules = [
      ...new Set([
        ...definition.activeModules.modules,
        ...distributedCacheModules,
        ...projectModules,
        "kickoffDockerLocal",
        name,
        ...capabilities.modules,
      ]),
    ];
    if (capabilities.authority) {
      definition.runtimeAuthorityContexts = { modules: capabilities.authority };
    }
    const remoteEndpoints = Object.fromEntries(
      Object.entries(operationalConnections).filter(
        ([code]) => !localAliases[name].includes(code),
      ),
    );
    definition.servers = {
      ...remoteEndpoints,
      default: definition.servers.default,
    };
    // Schema owners share this runtime's isolated database, including owners
    // whose framework defaults declare a separate connection entry.
    const connection = definition.database.default;
    for (const code of capabilities.modules)
      definition.database[code] = connection;
  }
  if (!definitions[server])
    throw new Error("Unsupported kickoffDockerLocal server: " + server);
  return { ...productionSimulationSecurity, ...definitions[server] };
};
