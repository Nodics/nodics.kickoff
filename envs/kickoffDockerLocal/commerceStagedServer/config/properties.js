/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares commerceStagedServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
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
      {
        "$config": "composition",
        "name": "agora",
        "field": "projectPacks",
        "spread": true
      },
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
    "code": "COMMERCE_STAGED",
    "publication": "STAGED"
  },
  "data": {
    "dataReleases": {
      "contributions": {
        "$config": "replace",
        "value": []
      }
    }
  },
  "apiExposure": {
    "categories": {
      "serviceRegistry": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalCommerceStaged"
        }
      }
    },
    "circa.ewaste": {},
    "search": {},
    "elastic": {},
    "commerceSearchCore": {},
    "commerceSearch": {},
    "digitalCommerce": {},
    "digitalCore": {},
    "domainCommerceCore": {
      "$config": "selected",
      "name": "agora",
      "field": "sharedModules",
      "includes": "domainCommerceCore",
      "value": {}
    },
    "apparelProduct": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "apparel",
      "value": {}
    },
    "cart": {},
    "checkoutCore": {},
    "shoppingList": {},
    "discoveryConfig": {},
    "discoveryMapping": {},
    "discoveryProjection": {},
    "discoveryRanking": {},
    "discoverySource": {},
    "electronicsProduct": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "electronics",
      "value": {}
    },
    "fulfillmentCore": {},
    "inventory": {},
    "order": {},
    "paymentCore": {},
    "pricing": {},
    "product": {},
    "promotion": {},
    "store": {},
    "tax": {},
    "telcoCatalog": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
      "value": {}
    },
    "telcoProvisioning": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
      "value": {}
    },
    "telcoSubscription": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
      "value": {}
    },
    "cardPayment": {},
    "walletPayment": {},
    "loyaltyRewardPayment": {},
    "cashOnDeliveryPayment": {},
    "bankTransferPayment": {},
    "paymentProviderCore": {},
    "stripeProvider": {},
    "paypalProvider": {},
    "cyberSourceProvider": {},
    "visaProvider": {},
    "loyaltyRewardProvider": {}
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
    }
  },
  "stripeProvider": {
    "enabled": false,
    "maturity": "NOT_APPLICABLE_FOR_STAGED_CATALOG"
  },
  "servers": {
    "platform": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "platformServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnlineServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "processServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerce": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagement": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagementServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyalty": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyaltyServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "waste": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wasteServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "location": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "locationServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcms": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4352,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4353
      },
      "abstractEndpoint": {
        "httpHost": "commerce-staged",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "commerce-staged",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "apparelProduct": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "apparel",
        "value": "commerce.staged"
      },
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
      "electronicsProduct": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "electronics",
        "value": "commerce.staged"
      },
      "fulfillmentCore": true,
      "inventory": true,
      "order": true,
      "paymentCore": true,
      "pricing": true,
      "product": true,
      "promotion": true,
      "store": true,
      "tax": true,
      "telcoCatalog": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "commerce.staged"
      },
      "telcoProvisioning": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "commerce.staged"
      },
      "telcoSubscription": {
        "$config": "selected",
        "name": "agora",
        "field": "domains",
        "includes": "telco",
        "value": "commerce.staged"
      }
    },
    "default": "commerce.staged"
  }
};
