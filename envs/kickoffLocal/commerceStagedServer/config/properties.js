/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
const commerceSearchRuntimeModules = [
  "search",
  "elastic",
  "commerceSearchCore",
  "commerceSearch",
];
const digitalCommerceRuntimeModules = ["digitalCommerce", "digitalCore"];

/** @module kickoffLocal/commerceStagedServer/config/properties @description Defines isolated local Commerce Staged coordinates and data-release enforcement for governed Product catalog imports. @layer environment-server-config @owner nodics.kickoff */
module.exports = {
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultProductService",
      "DefaultProductPublicationService",
    ],
    modules: {
      "apparelProduct": true,
      "bidding": true,
      "cart": true,
      "checkoutCore": true,
      "commerceSearchCore": true,
      "digitalCore": true,
      "discoveryConfig": true,
      "discoveryMapping": true,
      "discoveryProjection": true,
      "discoveryRanking": true,
      "discoverySource": true,
      "electronicsProduct": true,
      "fulfillmentCore": true,
      "import": true,
      "inventory": true,
      "order": true,
      "paymentCore": true,
      "pricing": true,
      "product": true,
      "promotion": true,
      "search": true,
      "shoppingList": true,
      "store": true,
      "system": true,
      "tax": true,
      "telcoCatalog": true,
      "telcoProvisioning": true,
      "telcoSubscription": true,
      "token": true,
      "validator": true
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
    groups: [{"$config":"ref","path":["agoraDomains","frameworkGroups"],"spread":true}],
    modules: [
      "circa.ewaste",
      ...commerceSearchRuntimeModules,
      ...digitalCommerceRuntimeModules,
      {"$config":"ref","path":["agoraDomains","sharedModules"],"spread":true},
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      {"$config":"ref","path":["agoraDomains","projectPacks"],"spread":true},
      "kickoffLocal",
      "commerceStagedServer",
    ],
  },
  runtimeRole: { code: "COMMERCE_STAGED", publication: "STAGED" },
  runtimeAuthorityContexts: {
    modules: {
  "apparelProduct": "commerce.staged",
  "cart": "commerce.staged",
  "checkoutCore": "commerce.staged",
  "commerceSearchCore": "commerce.staged",
  "shoppingList": "commerce.staged",
  "digitalCore": "commerce.staged",
  "discoveryConfig": "commerce.staged",
  "discoveryMapping": "commerce.staged",
  "discoveryProjection": "commerce.staged",
  "discoveryRanking": "commerce.staged",
  "discoverySource": "commerce.staged",
  "electronicsProduct": "commerce.staged",
  "fulfillmentCore": "commerce.staged",
  "inventory": "commerce.staged",
  "order": "commerce.staged",
  "paymentCore": "commerce.staged",
  "pricing": "commerce.staged",
  "product": "commerce.staged",
  "promotion": "commerce.staged",
  "store": "commerce.staged",
  "tax": "commerce.staged",
  "telcoCatalog": "commerce.staged",
  "telcoProvisioning": "commerce.staged",
  "telcoSubscription": "commerce.staged"
},
  },
  apiExposure: {
    categories: {
      dataImport: { enabled: true },

      commerceManagement: { enabled: true },
    },
  },
  search: {
    product: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    commerceSearchCore: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  product: {
    marketplaceAuthoring: {
      enabled: true,
      catalogVersion: "circaStaged",
      locales: ["en", "ar"],
    },
    publication: {
      searchEnrichment: {
        domains: {
          contributors: {"$config":"ref","path":["agoraDomains","productSearchContributors"]},
          missingBehavior: "error",
        },
      },
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["COMMERCE_STAGED"],
      initializationProfiles: {
        localCommerceStagedCatalogFoundation: {
          enabled: true,
          label: "Local Commerce Staged catalog foundation",
          description:
            "Install Staged Commerce sample catalog releases for Agora storefront validation, product search, categories, prices, and inventory previews.",
          completionMessage:
            "The Local Commerce Staged catalog foundation is ready. Review catalog content in Staged before publishing qualified storefront data.",
          steps: [{ dataType: "sample" }],
        },
      },
    },
  },
  database: {
    default: {
      mongodb: { master: { databaseName: "kickoffLocalCommerceStaged" } },
    },
  },
  stripeProvider: {
    enabled: false,
    maturity: "NOT_APPLICABLE_FOR_STAGED_CATALOG",
    sandboxOnly: true,
    liveQualified: false,
  },
  servers: {
    default: {
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
    commerce: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4350,
        httpsHost: "127.0.0.1",
        httpsPort: 4351,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4350,
        httpsHost: "localhost",
        httpsPort: 4351,
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
  {
    moduleName: "product",
    indexName: "productLocalized",
  },
  {
    moduleName: "commerceSearchCore",
    indexName: "commerceSearchRuleProjection",
  },
];
