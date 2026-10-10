/**
 * @module kickoffLocal/wasteServer/config/properties
 * @description Selects Local Waste composition, customer journey policy and scoped owner API access.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected owners without bypassing Profile authorization.
 */
module.exports = {
  "publish": { "setup": { "observation": { "enabled": true } } },
  "runtimePropertyGovernance": {
    "persistence": { "enabled": true }
  },
  "circaEWaste": {
    "journey": {
      "arrivalRadiusMetres": {
        "$config": "env",
        "name": "CIRCA_EWASTE_ARRIVAL_RADIUS_METRES",
        "type": "number",
        "fallback": 200
      }
    }
  },
  "identityGovernance": {
    "migration": {
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
          "profile.customer.reference.read",
          "location.location.read",
          "loyalty.wallet.open",
          "loyalty.wallet.read",
          "loyalty.rewards.earn",
          "loyalty.rewards.reverse",
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
          "commerce.digital.own.read",
          "profile.externalIdentity.prepare"
        ]
      }
    }
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "publish",
      "circa.ewaste",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nodics.waste",
      "nodics.rulesEngine",
      "rulesCore",
      "rulesDefinition",
      "rulesEvaluation",
      "rulesApi",
      "wasteCore",
      "wasteMaterial",
      "wasteCollection",
      "wasteSubmission",
      "wasteVerification",
      "wasteReceipt",
      "wasteImpact",
      "wasteReward",
      "wasteMovement",
      "wasteCompliance",
      "wasteApi",
      "waste",
      "eWaste",
      "wasteRecycling",
      "search",
      "elastic",
      "copilotPolicy",
      "copilotKnowledge",
      "copilotConversation",
      "discoverySource",
      "discoveryMapping",
      "discoveryProjection",
      "discoveryRuntime",
      "discoveryQuery",
      "discoveryConfig",
      "copilotProvider",
      "ollamaProvider",
      "openAiProvider",
      "redisCache"
    ]
  },
  "runtimeRole": {
    "code": "WASTE",
    "publication": "OPERATIONAL"
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "waste": "waste.operational"
    }
  },
  "rulesEngine": {
    "approval": {
      "processTarget": {
        "connectionName": "process"
      },
      "actionAuthority": {
        "connectionName": "process"
      }
    }
  },
  "eWaste": {
    "marketplace": {
      "digitalOwnership": {
        // Admission only; every phase retains installed owner and original financial evidence checks.
        "enabled": true,
        "qualified": true,
        "allowedServicePrincipals": { "$config": "replace", "value": ["apiAdmin"] },
        "businessCallers": { "$config": "replace", "value": [{
          "tenant": "default", "principalEnterpriseCode": "default", "enterpriseCode": "GREENPERKS_ONLINE",
          "serviceId": "apiAdmin", "projectCode": "nodics.kickoff", "environmentCode": "kickoffLocal",
          "serverCode": "commerceServer", "instanceCode": "kickoff-local-commerce-1",
          "assignmentCode": "kickoff-local-commerce-runtime-deployment",
          "permissions": ["waste.asset.marketplace.project", "waste.asset.sale.transfer"]
        }] },
        "customerEvidenceApiName": "/internal/customer-evidence",
        "targets": {
          "commerce": "COMMERCE",
          "loyalty": "LOYALTY",
          "profile": "PLATFORM"
        }
      }
    },
    "outcomeCommunication": {
      "detailLinks": {
        "IN_APP": {
          "url": "http://localhost:3600/mobile",
          "parameter": "submission"
        },
        "TELEGRAM": {
          "url": "https://t.me/nodics_ewaste_circa_local_bot",
          "parameter": "startapp"
        }
      }
    }
  },
  "waste": {
    "accelerator": {
      "enabled": true,
      "umbrella": "waste",
      "scenarioAccelerators": [
        "eWaste"
      ],
      "presetPackCodes": [
        "EWASTE_CORE_PRESETS"
      ]
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalWaste"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4370,
        "httpsPort": 4371
      }
    }
  }
};
