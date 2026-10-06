/**
 * @module kickoffLocal/commerceServer/config/properties
 * @description Selects Local Commerce deployment composition, publication and scoped reward-payment authority.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected capabilities without bypassing owner authorization.
 */
module.exports = {
  "identityGovernance": {
    "migration": {
      // Explicit security pin: preserve Local prerequisites; arrays otherwise merge positionally.
      "localRuntimeDeploymentGrantPermissions": {
        "$config": "replace",
        "value": [
          "auth.internal.token.read",
          "auth.internal.token.read.anyTenant",
          "profile.enterprise.search",
          "profile.tenant.namespace.bind",
          "profile.customer.register",
          "profile.address.reference.read",
          "profile.enterprise.reference.read",
          "location.location.read",
          "loyalty.wallet.open",
          "loyalty.wallet.read",
          "media.evidence.read",
          "media.customer.upload",
          "media.customer.read",
          "import.release.validate",
          "import.core.run",
          "publish.lifecycle.create",
          "publish.lifecycle.view",
          "publish.lifecycle.validate",
          "publish.lifecycle.requestApproval",
          "commerce.product.publish",
          "loyalty.rewards.reserve",
          "loyalty.rewards.capture",
          "loyalty.rewards.release",
          "loyalty.rewards.reverse"
        ]
      }
    }
  },
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
