/**
 * @module kickoffLocal/config/properties
 * @description Declares Local deployment selections and explicitly scoped runtime policies.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow these selections without bypassing framework qualification or authorization.
 */
module.exports = {
  // Operator-selected only after the Local console and launch capture checks.
  "log": {
    "requestPrivacy": {
      "qualified": {
        "$config": "env",
        "name": "NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED",
        "type": "boolean",
        "fallback": false
      }
    }
  },
  "pricing": {
    "runtimeRoleProfiles": {
      "COMMERCE": {
        "publication": {
          "delivery": {
            "enabled": true,
            "storeCodes": {
              "$config": "replace",
              "value": [
                "circaMainStore"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "circaPointsPriceBook"
              ]
            }
          }
        }
      }
    }
  },
  "tax": {
    "runtimeRoleProfiles": {
      "COMMERCE": {
        "publication": {
          "delivery": {
            "enabled": true,
            "storeCodes": {
              "$config": "replace",
              "value": [
                "circaMainStore"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "circaSamplePointsPolicy"
              ]
            }
          }
        }
      }
    }
  },
  "inventory": {
    "runtimeRoleProfiles": {
      "COMMERCE": {
        "publication": {
          "delivery": {
            "enabled": true,
            "storeCodes": {
              "$config": "replace",
              "value": [
                "circaMainStore"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "circaDigitalRegistry"
              ]
            }
          }
        }
      }
    }
  },
  "promotion": {
    "runtimeRoleProfiles": {
      "COMMERCE": {
        "publication": {
          "delivery": {
            "enabled": true,
            "storeCodes": {
              "$config": "replace",
              "value": [
                "circaMainStore"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "CIRCA_COUPON_CPN-ECO-15_PROMO"
              ]
            }
          }
        }
      }
    }
  },
  // Explicit Local service-grant allowlist; review inherited grant changes before extending this pin.
  "identityGovernance": {
    "migration": {
      "assessment": {
        "enabled": {
          "$config": "env",
          "name": "NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED",
          "type": "boolean",
          "fallback": false
        }
      },
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
          "commerce.product.publish"
        ]
      }
    }
  },
  "profileTenantProvisioning": {
    "enabled": {
      "$config": "env",
      "name": "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
      "type": "boolean",
      "fallback": false
    },
    "allowInsecureLoopback": true
  },
  "apiExposure": {
    "runtimeRoleProfiles": {
      "PLATFORM": {
        "categories": {
          "profileTenantProvisioning": {
            "enabled": {
              "$config": "env",
              "name": "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
              "type": "boolean",
              "fallback": false
            }
          },
          "profileEmployeeRecovery": {
            "enabled": {
              "$config": "env",
              "name": "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
              "type": "boolean",
              "fallback": false
            }
          }
        }
      },
      "COMMERCE_STAGED": {
        "categories": {
          "productPublicationSource": { "enabled": true },
          "pricingPublicationAuthoring": { "enabled": true },
          "taxPublicationAuthoring": { "enabled": true },
          "inventoryPublicationAuthoring": { "enabled": true },
          "promotionPublicationAuthoring": { "enabled": true }
        }
      },
      "COMMERCE": {
        "categories": { "productPublicationTarget": { "enabled": true } }
      }
    }
  },
  "product": {
    "runtimeRoleProfiles": {
      "COMMERCE_STAGED": {
        "publication": {
          "targetTransportProvider": "DefaultProductPublicationTransportService",
          "target": { "moduleName": "product", "connectionName": "commerce", "connectionType": "abstract", "runtimeRole": "COMMERCE" },
          "source": { "moduleName": "product", "connectionName": "commerceStaged", "connectionType": "abstract", "runtimeRole": "COMMERCE_STAGED" }
        }
      },
      "COMMERCE": {
        "discovery": {
          "activationService": "DefaultProductPublicationTargetService",
          "activationScopes": {
            "$config": "replace",
            "value": [{ "tenant": "default", "storeCode": "circaMainStore" }]
          }
        },
        "publication": {
          "targetTransportProvider": "DefaultProductPublicationTransportService",
          "target": { "moduleName": "product", "connectionName": "commerce", "connectionType": "abstract", "runtimeRole": "COMMERCE" },
          "source": { "moduleName": "product", "connectionName": "commerceStaged", "connectionType": "abstract", "runtimeRole": "COMMERCE_STAGED" }
        }
      }
    }
  },
  "process": {
    "runtimeRoleProfiles": {
      "PROCESS": {
        "definitionContributions": {
          "ownershipTransitions": [
            {
              "definitionCode": "editorialApproval",
              "mode": "RETAIN",
              "source": {
                "moduleName": "processServer",
                "releaseCode": "processServer:init-v001",
                "version": "0.0.0",
                "checksum": "0024cecb65ef2e34f3db8d314fbea6f926e3cc887fdc8c38612b3ac0fb646613"
              },
              "target": {
                "moduleName": "editorial",
                "releaseCode": "editorial:editorialWorkflows",
                "version": "1.0.0",
                "checksum": "37473f7bd84460871d92c355a7f57ca32b9b0206c6b3318445fe7fd4306ab4b1"
              },
              "publishedChecksum": "d429c6567247add99fb275466af93a33ca64e3628c6a3119c97ccc05a3b70daf"
            },
            {
              "definitionCode": "editorialPublication",
              "mode": "RETAIN",
              "source": {
                "moduleName": "processServer",
                "releaseCode": "processServer:init-v001",
                "version": "0.0.0",
                "checksum": "0024cecb65ef2e34f3db8d314fbea6f926e3cc887fdc8c38612b3ac0fb646613"
              },
              "target": {
                "moduleName": "editorial",
                "releaseCode": "editorial:editorialWorkflows",
                "version": "1.0.0",
                "checksum": "37473f7bd84460871d92c355a7f57ca32b9b0206c6b3318445fe7fd4306ab4b1"
              },
              "publishedChecksum": "f9fe1d8ab0da0acef1327c4dab32b6d2291f87e9c4486b8f9cf6af61d663c42a"
            }
          ]
        }
      }
    }
  },
  "credentials": {
    "telegram.bot.circa": {
      "value": null,
      "label": "Circa Telegram bot token",
      "status": "UNCONFIGURED",
      "secret": true,
      "credentialKind": "BOT_TOKEN"
    },
    "openai.circa": {
      "value": null,
      "label": "Circa OpenAI provider token",
      "status": "UNCONFIGURED",
      "secret": true,
      "credentialKind": "API_TOKEN"
    }
  },
  "httpHardening": {
    "cors": {
      "allowedOrigins": [
        "http://localhost:3600",
        "https://arc-orbit-organization-dodge.trycloudflare.com"
      ],
      "originEndpoints": {
        "agora": {
          "port": 3300
        },
        "agoraElectronics": {
          "port": 3400
        },
        "agoraTelco": {
          "port": 3500
        },
        "circa": {
          "port": 3600
        }
      }
    }
  },
  "profileCustomerBrowserSession": {
    "enabled": true,
    "allowInsecureLoopback": true,
    "sameSite": "Lax"
  },
  "profileBrowserSession": {
    "enabled": true,
    "allowInsecureLoopback": true,
    "sameSite": "Lax"
  },
  "authSecurity": {
    "compatibility": {
      "allowLocalBootstrapIdentity": true
    }
  },
  "cache": {
    "default": {
      "engines": {
        "redis": {
          "enabled": true,
          "options": {
            "prefix": "kickoffLocalRuntimeAuth"
          }
        }
      }
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ],
    "allowMissingModelServices": true
  },
  "backofficeLocalReset": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ]
  },
  "runtimeConfigurationSchemas": {
    "runtimeRoleProfiles": {
      "ENGAGEMENT": {
        "telegramDelivery": {
          "fields": [{
            "credentialReference": {
              "$config": "ref",
              "path": ["communication", "runtimeRoleProfiles", "ENGAGEMENT", "providers", "TELEGRAM", "credentialReferences", "0"]
            },
            "path": ["credentials", {
              "$config": "ref",
              "path": ["communication", "runtimeRoleProfiles", "ENGAGEMENT", "providers", "TELEGRAM", "credentialReferences", "0"]
            }, "value"]
          }]
        }
      }
    }
  },
  "communication": {
    "runtimeRoleProfiles": {
      "ENGAGEMENT": {
        "trustedSourceModules": [
          "eWaste"
        ],
        "providers": {
          "TELEGRAM": {
            "type": "TELEGRAM",
            "credentialReferences": [
              "telegram.bot.circa"
            ]
          }
        },
        "templates": {
          "WASTE_REVIEW_OUTCOME_V1": {
            "code": "WASTE_REVIEW_OUTCOME_V1",
            "version": 2,
            "status": "ACTIVE",
            "purpose": "WASTE_REVIEW_OUTCOME",
            "sourceModules": [
              "eWaste"
            ],
            "channels": [
              "IN_APP",
              "TELEGRAM"
            ],
            "declaredVariables": [
              "submissionCode",
              "status",
              "comment",
              "detailUrl"
            ],
            "subjectTemplate": "Recycling review outcome",
            "bodyTemplate": "Submission {{submissionCode}}: {{status}}.\nReviewer comment: {{comment}}\nView complete item details: {{detailUrl}}"
          }
        }
      }
    }
  },
  "copilot": {
    "runtimeRoleProfiles": {
      "WASTE": {
        "knowledge": {
          "ingestion": { "enabled": true, "ingestOnStart": true },
          "retrieval": { "enabled": true }
        }
      },
      "PLATFORM": {
        "providers": {
          "accounting": {
            "enabled": true,
            "tenantLimit": 100000,
            "enterprises": [
              {
                "tenantCode": "default",
                "enterpriseCode": "default",
                "limit": 100000,
                "adapters": ["ollama"],
                "profiles": ["conversation", "structuredTool", "evaluation"],
                "users": [{ "principalCode": "admin", "limit": 100000 }]
              }
            ]
          }
        },
      }
    }
  },
  "tooling": {
    "acceptance": {
      "browserValidation": {
        "enabled": false,
        "reason": "Frontend repositories own browser qualification; backend readiness uses API evidence."
      }
    }
  }
};
