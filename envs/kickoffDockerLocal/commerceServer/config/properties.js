/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares commerceServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
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
      "redisCache",
      "search",
      "elastic",
      "commerceSearchCore",
      "commerceSearch",
      "digitalCommerce",
      {
        "$config": "selected",
        "name": "agora",
        "field": "sharedModules",
        "includes": "domainCommerceCore",
        "value": "domainCommerceCore"
      },
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "kickoffDockerLocal",
      "commerceServer",
      "digitalCore",
      {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "apparel",
        "value": "apparelProduct"
      },
      "cart",
      "checkoutCore",
      "shoppingList",
      "discoveryConfig",
      "discoveryMapping",
      "discoveryProjection",
      "discoveryRanking",
      "discoverySource",
      {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "electronics",
        "value": "electronicsProduct"
      },
      "fulfillmentCore",
      "inventory",
      "order",
      "paymentCore",
      "pricing",
      "product",
      "promotion",
      "store",
      "tax",
      {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "telcoCatalog"
      },
      {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "telcoProvisioning"
      },
      {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "telcoSubscription"
      },
      "cardPayment",
      "walletPayment",
      "loyaltyRewardPayment",
      "cashOnDeliveryPayment",
      "bankTransferPayment",
      "paymentProviderCore",
      "stripeProvider",
      "paypalProvider",
      "cyberSourceProvider",
      "visaProvider",
      "loyaltyRewardProvider"
    ]
  },
  "runtimeRole": {
    "code": "COMMERCE",
    "publication": "OPERATIONAL"
  },
  "cart": {
    "customerApi": {
      "defaultChannelCode": "web",
      "defaultLocale": "en",
      "defaultJurisdiction": "AE",
      "defaultCurrency": "AED"
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalCommerce"
        }
      }
    },
    "circa.ewaste": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "search": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "elastic": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "commerceSearchCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "commerceSearch": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "digitalCommerce": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "digitalCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "domainCommerceCore": {
      "$config": "selected",
      "name": "agora",
      "field": "sharedModules",
      "includes": "domainCommerceCore",
      "value": {
        "$config": "ref",
        "path": [
          "database",
          "default"
        ]
      }
    },
    "apparelProduct": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "apparel",
      "value": {
        "$config": "ref",
        "path": [
          "database",
          "default"
        ]
      }
    },
    "cart": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "checkoutCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "shoppingList": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryConfig": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryMapping": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryProjection": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryRanking": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoverySource": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "electronicsProduct": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "electronics",
      "value": {
        "$config": "ref",
        "path": [
          "database",
          "default"
        ]
      }
    },
    "fulfillmentCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "inventory": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "order": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "paymentCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "pricing": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "product": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "promotion": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "store": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "tax": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "telcoCatalog": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
      "value": {
        "$config": "ref",
        "path": [
          "database",
          "default"
        ]
      }
    },
    "telcoProvisioning": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
      "value": {
        "$config": "ref",
        "path": [
          "database",
          "default"
        ]
      }
    },
    "telcoSubscription": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
      "value": {
        "$config": "ref",
        "path": [
          "database",
          "default"
        ]
      }
    },
    "cardPayment": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "walletPayment": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyRewardPayment": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "cashOnDeliveryPayment": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "bankTransferPayment": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "paymentProviderCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "stripeProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "paypalProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "cyberSourceProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "visaProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyRewardProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "apiExposure": {
    "categories": {
      "serviceRegistry": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      },
      "commerceCustomer": {
        "enabled": true
      }
    }
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "COMMERCE"
      ],
      "contributions": []
    }
  },
  "search": {
    "product": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
        }
      }
    },
    "commerceSearchCore": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
        }
      }
    },
    "discoveryProjection": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
        }
      }
    }
  },
  "product": {
    "publication": {
      "searchEnrichment": {
        "domains": {
          "enabled": true,
          "contributors": {
            "$config": "composition",
            "name": "agora",
            "field": "productSearchContributors"
          },
          "missingBehavior": "error"
        }
      }
    },
    "discovery": {
      "mediaDeliveryBaseUrl": "http://localhost:5314/nodics/media/v0/content",
      "catalogue": {
        "enabled": true,
        "maximumCandidates": 1000,
        "readPageSize": 100,
        "dimensions": {
          "brands": {
            "paths": [
              "brand",
              "localizedAttributes.brand"
            ]
          },
          "categories": {
            "paths": [
              "categoryCodes"
            ]
          },
          "collections": {
            "paths": [
              "collectionCodes",
              "localizedAttributes.collection"
            ]
          },
          "colors": {
            "paths": [
              "apparel.options.colourCode",
              "apparel.options.colorCode"
            ]
          },
          "sizes": {
            "paths": [
              "apparel.options.sizeCode"
            ]
          },
          "availability": {
            "paths": [
              "availability.status"
            ],
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
      }
    }
  },
  "stripeProvider": {
    "enabled": true,
    "maturity": "OFFLINE_CONFORMANCE",
    "sandboxOnly": true,
    "liveQualified": false
  },
  "servers": {
    "platform": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platform"
      ]
    },
    "platformServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platformServer"
      ]
    },
    "profile": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "profile"
      ]
    },
    "backoffice": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "backoffice"
      ]
    },
    "wcmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStaged"
      ]
    },
    "wcmsStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStagedServer"
      ]
    },
    "cmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsStaged"
      ]
    },
    "wcmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnline"
      ]
    },
    "wcmsOnlineServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnlineServer"
      ]
    },
    "cmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsOnline"
      ]
    },
    "process": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "process"
      ]
    },
    "processServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "processServer"
      ]
    },
    "commerceStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStaged"
      ]
    },
    "commerceStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStagedServer"
      ]
    },
    "engagement": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagement"
      ]
    },
    "engagementServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagementServer"
      ]
    },
    "loyalty": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyalty"
      ]
    },
    "loyaltyServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyaltyServer"
      ]
    },
    "waste": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "waste"
      ]
    },
    "wasteServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wasteServer"
      ]
    },
    "location": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "location"
      ]
    },
    "locationServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "locationServer"
      ]
    },
    "wcms": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcms"
      ]
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4350,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4351
      },
      "abstractEndpoint": {
        "httpHost": "commerce",
        "httpPort": 4350,
        "httpsHost": "commerce",
        "httpsPort": 4351
      }
    }
  },
  "fulfillmentCore": {
    "customerShipping": {
      "methods": [
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
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "apparelProduct": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "apparel",
        "value": "commerce.operational"
      },
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
      "electronicsProduct": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "electronics",
        "value": "commerce.operational"
      },
      "fulfillmentCore": "commerce.operational",
      "inventory": "commerce.operational",
      "order": "commerce.operational",
      "paymentCore": "commerce.operational",
      "pricing": "commerce.operational",
      "product": "commerce.operational",
      "promotion": "commerce.operational",
      "store": "commerce.operational",
      "tax": "commerce.operational",
      "telcoCatalog": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "commerce.operational"
      },
      "telcoProvisioning": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "commerce.operational"
      },
      "telcoSubscription": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "commerce.operational"
      }
    }
  }
};
