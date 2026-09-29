module.exports = {
  "publish": {
    "providers": {
      "domainAdapters": {
        "product": "DefaultProductPublicationAdapterService",
        "pricing": "DefaultPricingPublicationService",
        "tax": "DefaultTaxPublicationService",
        "inventory": "DefaultInventoryPublicationService",
        "promotion": "DefaultPromotionPublicationService"
      },
      "versionProviders": {
        "product": "DefaultProductPublicationVersionProviderService",
        "pricing": "DefaultPricingPublicationService",
        "tax": "DefaultTaxPublicationService",
        "inventory": "DefaultInventoryPublicationService",
        "promotion": "DefaultPromotionPublicationService"
      },
      "workflowProviders": {
        "product": "DefaultPublicationApprovalWorkflowService",
        "pricing": "DefaultPublicationApprovalWorkflowService",
        "tax": "DefaultPublicationApprovalWorkflowService",
        "inventory": "DefaultPublicationApprovalWorkflowService",
        "promotion": "DefaultPublicationApprovalWorkflowService"
      }
    },
    "approvalWorkflow": {
      "target": {
        "connectionName": "process",
        "connectionType": "abstract",
        "runtimeRole": "PROCESS"
      }
    }
  },
  "pricing": {
    "publication": {
      "runtimeRole": "STAGED",
      "sourceVersioningQualified": true,
      "targetTransportProvider": "DefaultPricingPublicationTransportService",
      "target": {
        "moduleName": "pricing",
        "connectionName": "commerce",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE"
      }
    }
  },
  "tax": {
    "publication": {
      "runtimeRole": "STAGED",
      "sourceVersioningQualified": true,
      "targetTransportProvider": "DefaultTaxPublicationTransportService",
      "target": {
        "moduleName": "tax",
        "connectionName": "commerce",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE"
      }
    }
  },
  "inventory": {
    "publication": {
      "runtimeRole": "STAGED",
      "sourceVersioningQualified": true,
      "targetTransportProvider": "DefaultInventoryPublicationTransportService",
      "target": {
        "moduleName": "inventory",
        "connectionName": "commerce",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE"
      }
    }
  },
  "promotion": {
    "publication": {
      "runtimeRole": "STAGED",
      "sourceVersioningQualified": true,
      "targetTransportProvider": "DefaultPromotionPublicationTransportService",
      "target": {
        "moduleName": "promotion",
        "connectionName": "commerce",
        "connectionType": "abstract",
        "runtimeRole": "COMMERCE"
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
  "schemaPolicies": {
    "pricing": {
      "publicationVersioned": { "isVersionedEnabled": true, "versionedReadMode": "CURRENT" }
    },
    "tax": {
      "publicationVersioned": { "isVersionedEnabled": true, "versionedReadMode": "CURRENT" }
    },
    "inventory": {
      "publicationVersioned": { "isVersionedEnabled": true, "versionedReadMode": "CURRENT" }
    },
    "promotion": {
      "publicationVersioned": { "isVersionedEnabled": true, "versionedReadMode": "CURRENT" }
    },
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
    "default": "commerce.staged"
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
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4352,
        "httpsPort": 4353
      }
    }
  }
};
