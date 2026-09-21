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
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-commerce-staged-1",
    "remoteModules": [
      "profile",
      "backoffice",
      "loyaltyCore",
      "wasteCore",
      "media"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_COMMERCE_STAGED_API_KEY",
      "fallback": null
    }
  },
  "localResetProvider": {
    "requiredServiceNames": [
      "DefaultProductService",
      "DefaultProductPublicationService"
    ],
    "modules": {
      "apparelProduct": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "apparel",
        "value": true,
        "otherwise": false
      },
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
      "electronicsProduct": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "electronics",
        "value": true,
        "otherwise": {
          "$config": "selected",
          "name": "agora",
          "field": "domains",
          "includes": "telco",
          "value": true,
          "otherwise": false
        }
      },
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
      "telcoCatalog": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": true,
        "otherwise": false
      },
      "telcoProvisioning": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": true,
        "otherwise": false
      },
      "telcoSubscription": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": true,
        "otherwise": false
      },
      "token": true,
      "validator": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
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
      ]
    },
    "searchIndexes": [
      {
        "moduleName": "discoveryProjection",
        "indexName": "discoveryDocumentProjection"
      },
      {
        "moduleName": "product",
        "indexName": "productLocalized"
      },
      {
        "moduleName": "commerceSearchCore",
        "indexName": "commerceSearchRuleProjection"
      }
    ]
  },
  "activeModules": {
    "groups": [
      {
        "$config": "composition",
        "name": "agora",
        "field": "frameworkGroups",
        "spread": true
      }
    ],
    "modules": [
      "circa.ewaste",
      "search",
      "elastic",
      "commerceSearchCore",
      "commerceSearch",
      "digitalCommerce",
      "digitalCore",
      {
        "$config": "composition",
        "name": "agora",
        "field": "sharedModules",
        "spread": true
      },
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      {
        "$config": "composition",
        "name": "agora",
        "field": "projectPacks",
        "spread": true
      },
      "redisCache"
    ]
  },
  "runtimeRole": {
    "code": "COMMERCE_STAGED",
    "publication": "STAGED"
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "apparelProduct": true,
      "cart": true,
      "checkoutCore": true,
      "commerceSearchCore": true,
      "shoppingList": true,
      "digitalCore": true,
      "discoveryConfig": true,
      "discoveryMapping": true,
      "discoveryProjection": true,
      "discoveryRanking": true,
      "discoverySource": true,
      "electronicsProduct": true,
      "fulfillmentCore": true,
      "inventory": true,
      "order": true,
      "paymentCore": true,
      "pricing": true,
      "product": true,
      "promotion": true,
      "store": true,
      "tax": true,
      "telcoCatalog": true,
      "telcoProvisioning": true,
      "telcoSubscription": true
    },
    "default": "commerce.staged"
  },
  "search": {
    "product": {
      "options": {
        "enabled": true
      }
    },
    "commerceSearchCore": {
      "options": {
        "enabled": true
      }
    },
    "discoveryProjection": {
      "options": {
        "enabled": true
      }
    }
  },
  "product": {
    "marketplaceAuthoring": {
      "enabled": true,
      "catalogVersion": "circaStaged",
      "locales": [
        "en",
        "ar"
      ]
    },
    "publication": {
      "searchEnrichment": {
        "domains": {
          "missingBehavior": "error"
        }
      }
    }
  },
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localCommerceStagedCatalogFoundation": {
          "enabled": true,
          "label": "Local Commerce Staged catalog foundation",
          "description": "Install Staged Commerce sample catalog releases for Agora storefront validation, product search, categories, prices, and inventory previews.",
          "completionMessage": "The Local Commerce Staged catalog foundation is ready. Review catalog content in Staged before publishing qualified storefront data.",
          "steps": {
            "$config": "replace",
            "value": [
              {
                "dataType": "sample"
              }
            ]
          }
        }
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalCommerceStaged"
        }
      }
    }
  },
  "stripeProvider": {
    "enabled": false,
    "maturity": "NOT_APPLICABLE_FOR_STAGED_CATALOG"
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4352,
        "httpsPort": 4353
      }
    },
    "profile": {
      "remoteOnly": true
    },
    "backoffice": {
      "remoteOnly": true
    }
  },
  "tooling": {
    "runtime": {
      "code": "commerceStaged",
      "script": "start:commerce:staged",
      "order": 8
    }
  }
};
