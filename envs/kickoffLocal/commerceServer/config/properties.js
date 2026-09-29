module.exports = {
  "pricing": {
    "publication": {
      "runtimeRole": "ONLINE",
      "sourceAuthority": {
        "moduleName": "pricing",
        "connectionName": "commerceStaged",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE_STAGED"
      }
    }
  },
  "tax": {
    "publication": {
      "runtimeRole": "ONLINE",
      "sourceAuthority": {
        "moduleName": "tax",
        "connectionName": "commerceStaged",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE_STAGED"
      }
    }
  },
  "inventory": {
    "publication": {
      "runtimeRole": "ONLINE",
      "sourceAuthority": {
        "moduleName": "inventory",
        "connectionName": "commerceStaged",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE_STAGED"
      }
    }
  },
  "promotion": {
    "publication": {
      "runtimeRole": "ONLINE",
      "sourceAuthority": {
        "moduleName": "promotion",
        "connectionName": "commerceStaged",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE_STAGED"
      }
    }
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
      "vMongodb",
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
  "schemaPolicies": {
    "product": {
      "catalogueVersioned": {
        "isVersionedEnabled": true,
        "versionedReadMode": "CURRENT"
      }
    }
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
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalCommerce"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4350,
        "httpsPort": 4351
      }
    }
  }
};
