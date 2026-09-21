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
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-commerce-1",
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
      "name": "NODICS_COMMERCE_API_KEY",
      "fallback": null
    }
  },
  "localResetProvider": {
    "requiredServiceNames": [
      "DefaultCommerceOrderService",
      "DefaultProductService",
      "DefaultPaymentTransactionService",
      "DefaultCartService"
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
      "redisCache"
    ]
  },
  "runtimeRole": {
    "code": "COMMERCE",
    "publication": "OPERATIONAL"
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
    "default": "commerce.operational"
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
    "publication": {
      "searchEnrichment": {
        "domains": {
          "missingBehavior": "error"
        }
      }
    },
    "discovery": {
      "catalogue": {
        "enabled": true,
        "dimensions": {
          "collections": {
            "paths": [
              "collectionCodes",
              "localizedAttributes.collection"
            ]
          },
          "availability": {
            "labels": {
              "IN_STOCK": "Available",
              "OUT_OF_STOCK": "Not available",
              "PREORDER": "Pre-order"
            }
          }
        },
        "saleCollectionCodes": [
          "agoraPromotion",
          "agoraSale"
        ]
      },
      "mediaDeliveryBaseUrl": "http://127.0.0.1:4314/nodics/media/v0/content"
    }
  },
  "fulfillmentCore": {
    "customerShipping": {
      "methods": {
        "$config": "replace",
        "value": [
          {
            "code": "STANDARD",
            "label": "Standard",
            "price": "0.00",
            "currency": "USD",
            "promise": "3-5 business days",
            "requiresAddress": true,
            "returnEligible": true
          },
          {
            "code": "STANDARD_AED",
            "label": "Standard",
            "price": "0.00",
            "currency": "AED",
            "promise": "3-5 business days",
            "requiresAddress": true,
            "returnEligible": true
          }
        ]
      },
      "returnMethods": {
        "$config": "replace",
        "value": [
          {
            "code": "PICKUP",
            "label": "Pickup from address",
            "requiresAddress": true
          },
          {
            "code": "DROP_OFF",
            "label": "Drop off",
            "requiresAddress": false
          },
          {
            "code": "STORE_RETURN",
            "label": "Store return",
            "requiresAddress": false
          }
        ]
      }
    }
  },
  "cart": {
    "customerApi": {
      "defaultJurisdiction": "AE",
      "defaultCurrency": "AED"
    }
  },
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localCommerceFoundation": {
          "enabled": true,
          "label": "Local Commerce foundation",
          "description": "Install required operational Commerce core releases for product, cart, pricing, inventory, tax, checkout, fulfillment, payment, and discovery services.",
          "completionMessage": "The Local Commerce foundation is ready. Commerce runtime can accept governed catalogue and storefront data.",
          "steps": {
            "$config": "replace",
            "value": [
              {
                "dataType": "core"
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
          "databaseName": "kickoffLocalCommerce"
        }
      }
    }
  },
  "stripeProvider": {
    "enabled": true
  },
  "servers": {
    "waste": {
      "remoteOnly": true
    },
    "default": {
      "endpoint": {
        "httpPort": 4350,
        "httpsPort": 4351
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
      "code": "commerce",
      "script": "start:commerce",
      "order": 9
    }
  }
};
