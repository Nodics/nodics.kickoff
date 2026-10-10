/**
 * @module kickoffLocal/commerceServer/config/properties
 * @description Selects Local Commerce deployment composition, publication and scoped reward-payment authority.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected capabilities without bypassing owner authorization.
 */
module.exports = {
  order: {
    refunds: {
      policyExceptions: {
        enabled: true,
        environmentNames: ["kickoffLocal"],
        approvals: [{
          tenant: "default",
          enterpriseCode: "GREENPERKS_ONLINE",
          ownerId: "customer@circa.local",
          orderCode: "CIRCA_ORDER_261009:GP-A01-UNUSED-REFUND:order",
          caseCode: "ORDER_REVIEW_EBAABBBC41098AF799F44B680CDDD130",
          amount: "50.00",
          currency: "POINTS",
          entitlementCode: "digitalEntitlement:5ea8973f942b650766948c9ef9b163fbe84a4a28",
          couponCode: "CIRCA_COUPON_GP-A01_BATCH:1",
        }],
      },
    },
  },
  "databaseTransactions": { "enabled": true, "failClosed": true, "maximumCommitTimeMs": 10000 },
  enterpriseResolution: { runtimeLookup: { enabled: true } },
  "publish": { "setup": { "observation": {
    "enabled": true,
    "targetObservers": {
      "product": "DefaultProductPublicationVersionProviderService",
      "pricing": "DefaultPricingPublicationService",
      "inventory": "DefaultInventoryPublicationService",
      "tax": "DefaultTaxPublicationService",
      "promotion": "DefaultPromotionPublicationService"
    }
  } } },
  "digitalCore": {
    "merchantRedemption": { "pricedProvider": { "qualified": true } },
    // Local admission for the reviewed original-sale test, not financial acceptance evidence.
    "digitalOwnership": {
      "enabled": true,
      "qualified": true,
      "owner": {
        "moduleName": "eWaste",
        "connectionName": "waste",
        "targetAuthority": "WASTE",
        "apiPrefix": "/internal/digital-sales"
      }
    },
    "ownershipEvidence": {
      "enabled": true,
      "runtimeRole": "COMMERCE",
      "callers": {
        "$config": "replace",
        "value": [
          {
            "tenant": "default",
            "principalEnterpriseCode": "default",
            "enterpriseCode": "GREENPERKS_ONLINE",
            "serviceId": "apiAdmin",
            "projectCode": "nodics.kickoff",
            "environmentCode": "kickoffLocal",
            "serverCode": "wasteServer",
            "instanceCode": "kickoff-local-waste-1",
            "assignmentCode": "kickoff-local-waste-runtime-deployment",
            "kinds": ["LISTING", "BINDING", "PURCHASE", "REFUND"]
          },
          {
            "tenant": "default",
            "principalEnterpriseCode": "default",
            "enterpriseCode": "GREENPERKS_ONLINE",
            "serviceId": "apiAdmin",
            "projectCode": "nodics.kickoff",
            "environmentCode": "kickoffLocal",
            "serverCode": "commerceServer",
            "instanceCode": "kickoff-local-commerce-1",
            "assignmentCode": "kickoff-local-commerce-runtime-deployment",
            "kinds": ["ADMIT_BINDING"]
          }
        ]
      },
      "bindingAdmission": {
        "enabled": true,
        "moduleName": "eWaste",
        "connectionName": "waste",
        "targetAuthority": {
          "server": "wasteServer",
          "runtimeRole": { "code": "WASTE", "publication": "OPERATIONAL" }
        },
        "apiName": "/internal/digital-listings/plan"
      }
    }
  },
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
          "loyalty.rewards.reverse",
          "waste.asset.marketplace.project",
          "waste.asset.sale.transfer",
          "commerce.pricing.merchant.evidence"
        ]
      }
    }
  },
  "pricing": {
    "merchantEvidence": {
      "qualified": true,
      "businessCallers": {
        "enabled": true, "runtimeRole": "COMMERCE",
        "callers": { "$config": "replace", "value": [
          { "tenant": "default", "principalEnterpriseCode": "default", "enterpriseCode": "GREENPERKS_RETAIL",
            "serviceId": "apiAdmin", "projectCode": "nodics.kickoff", "environmentCode": "kickoffLocal",
            "serverCode": "commerceServer", "instanceCode": "kickoff-local-commerce-1",
            "assignmentCode": "kickoff-local-commerce-runtime-deployment" },
          { "tenant": "default", "principalEnterpriseCode": "default", "enterpriseCode": "RENEWWORKS_REPAIR_REUSE",
            "serviceId": "apiAdmin", "projectCode": "nodics.kickoff", "environmentCode": "kickoffLocal",
            "serverCode": "commerceServer", "instanceCode": "kickoff-local-commerce-1",
            "assignmentCode": "kickoff-local-commerce-runtime-deployment" },
          { "tenant": "default", "principalEnterpriseCode": "default", "enterpriseCode": "LOOPCYCLE_RECYCLING",
            "serviceId": "apiAdmin", "projectCode": "nodics.kickoff", "environmentCode": "kickoffLocal",
            "serverCode": "commerceServer", "instanceCode": "kickoff-local-commerce-1",
            "assignmentCode": "kickoff-local-commerce-runtime-deployment" }
        ] }
      }
    },
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
    "runtimeRoleProfiles": { "COMMERCE": { "merchantBenefits": {
      "qualified": true,
      "pricedSource": { "qualified": true, "connectionName": "commerceServer", "allowInsecureLoopback": true }
    } } },
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
      "publish",
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
