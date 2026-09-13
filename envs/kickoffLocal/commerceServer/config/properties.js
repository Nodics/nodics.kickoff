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

/** @module kickoffLocal/commerceServer/config/properties @description Defines isolated local Commerce coordinates. @layer environment-server-config @owner nodics.kickoff */
module.exports = {
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultCommerceOrderService",
      "DefaultProductService",
      "DefaultPaymentTransactionService",
      "DefaultCartService",
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
      "DefaultCronJobLogService",
      "DefaultCronJobService",
      "DefaultEmsFailedMessagesService",
      "DefaultPipelineService",
      "DefaultProcessAuditEventService",
      "DefaultProcessDefinitionService",
      "DefaultProcessDefinitionVersionService",
      "DefaultProcessIncidentService",
      "DefaultProcessInstanceService",
      "DefaultProcessTaskService",
      "DefaultProcessTriggerService",
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
      "circa.ewaste",
      ...commerceSearchRuntimeModules,
      ...digitalCommerceRuntimeModules,
      {"$config":"ref","path":["agoraDomains","sharedModules"],"spread":true},
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "kickoffLocal",
      "commerceServer",
    ],
  },
  runtimeRole: { code: "COMMERCE", publication: "OPERATIONAL" },
  runtimeAuthorityContexts: {
    modules: {
  "apparelProduct": "commerce.operational",
  "cart": "commerce.operational",
  "checkoutCore": "commerce.operational",
  "commerceSearchCore": "commerce.operational",
  "shoppingList": "commerce.operational",
  "digitalCore": "commerce.operational",
  "discoveryConfig": "commerce.operational",
  "discoveryMapping": "commerce.operational",
  "discoveryProjection": "commerce.operational",
  "discoveryRanking": "commerce.operational",
  "discoverySource": "commerce.operational",
  "electronicsProduct": "commerce.operational",
  "fulfillmentCore": "commerce.operational",
  "inventory": "commerce.operational",
  "order": "commerce.operational",
  "paymentCore": "commerce.operational",
  "pricing": "commerce.operational",
  "product": "commerce.operational",
  "promotion": "commerce.operational",
  "store": "commerce.operational",
  "tax": "commerce.operational",
  "telcoCatalog": "commerce.operational",
  "telcoProvisioning": "commerce.operational",
  "telcoSubscription": "commerce.operational"
},
  },
  apiExposure: {
    categories: {
      dataImport: { enabled: true },
      commerceCustomer: { enabled: true },
      commercePublicationIngestion: { enabled: true },
    },
  },
  search: {
    product: { options: { enabled: true, fallback: false, engine: "elastic" } },
    commerceSearchCore: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  product: {
    publication: {
      searchEnrichment: {
        domains: {
          contributors: {"$config":"ref","path":["agoraDomains","productSearchContributors"]},
          missingBehavior: "error",
        },
      },
    },
    discovery: {
      catalogue: {
        enabled: true,

        dimensions: {
          collections: {
            paths: ["collectionCodes", "localizedAttributes.collection"],
          },
          colors: {
            paths: ["apparel.options.colourCode", "apparel.options.colorCode"],
          },
          sizes: { paths: ["apparel.options.sizeCode"] },
          availability: {
            labels: {
              IN_STOCK: "Available",
              OUT_OF_STOCK: "Not available",
              PREORDER: "Pre-order",
            },
          },
        },
        saleCollectionCodes: ["agoraPromotion", "agoraSale"],
      },
      mediaDeliveryBaseUrl: "http://127.0.0.1:4314/nodics/media/v0/content",
    },
  },
  fulfillmentCore: {
    customerShipping: {
      methods: [
        {
          code: "STANDARD",
          label: "Standard",
          price: "0.00",
          currency: "USD",
          promise: "3-5 business days",
          requiresAddress: true,
          returnEligible: true,
        },
        {
          code: "STANDARD_AED",
          label: "Standard",
          price: "0.00",
          currency: "AED",
          promise: "3-5 business days",
          requiresAddress: true,
          returnEligible: true,
        },
      ],
    },
  },
  cart: {
    customerApi: {
      defaultJurisdiction: "AE",
      defaultCurrency: "AED",
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["COMMERCE"],
      initializationProfiles: {
        localCommerceFoundation: {
          enabled: true,
          label: "Local Commerce foundation",
          description:
            "Install required operational Commerce core releases for product, cart, pricing, inventory, tax, checkout, fulfillment, payment, and discovery services.",
          completionMessage:
            "The Local Commerce foundation is ready. Commerce runtime can accept governed catalogue and storefront data.",
          steps: [{ dataType: "core" }],
        },
      },
    },
  },
  database: {
    default: { mongodb: { master: { databaseName: "kickoffLocalCommerce" } } },
  },
  stripeProvider: {
    enabled: true,
    maturity: "OFFLINE_CONFORMANCE",
    sandboxOnly: true,
    liveQualified: false,
  },
  servers: {
    waste: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4370,
        httpsHost: "127.0.0.1",
        httpsPort: 4371,
      },
    },
    default: {
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
