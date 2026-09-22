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
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalCommerceStaged"
        }
      }
    },
    "domainCommerceCore": {
      "$config": "selected",
      "name": "agora",
      "field": "sharedModules",
      "includes": "domainCommerceCore"
  },
    "apparelProduct": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "apparel"
  },
    "electronicsProduct": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "electronics"
  },
    "telcoCatalog": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco"
  },
    "telcoProvisioning": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco"
  },
    "telcoSubscription": {
      "$config": "selected",
      "name": "agora",
      "field": "domains",
      "includes": "telco",
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4352,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4353
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5352
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
