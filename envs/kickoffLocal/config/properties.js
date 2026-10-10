/**
 * @module kickoffLocal/config/properties
 * @description Declares Local deployment selections and explicitly scoped runtime policies.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow these selections without bypassing framework qualification or authorization.
 */
module.exports = {
  "publish": {
    "setup": {
      "observation": {
        "plans": {
          "circa-native-reviewed": {
            "moduleName": "circa.ewaste",
            "path": "config/setup-observation/circa-native-reviewed.json",
            "checksum": "8e0743a8655ef5e6b40a2ddd895d978e46817fc58276643d37a0f063765729a2",
            "revision": 4
          }
        },
        "callers": {
          "nativePlatform": {
            "tenant": "default",
            "enterpriseCode": "default",
            "serviceId": "apiAdmin",
            "projectCode": "nodics.kickoff",
            "environmentCode": "kickoffLocal",
            "serverCode": "platformServer",
            "instanceCode": "kickoff-local-platform-1",
            "assignmentCode": "kickoff-local-platform-runtime-deployment",
            "plans": [
              "circa-native-reviewed"
            ]
          }
        }
      }
    },
    "approvalWorkflow": {
      "runtimeEnterpriseScope": {
        "enabled": true,
        "enterpriseCodes": ["GREENPERKS_ONLINE", "GREENPERKS_RETAIL", "RENEWWORKS_REPAIR_REUSE", "LOOPCYCLE_RECYCLING"]
      }
    }
  },
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
                "circaMainStore",
                "greenperks-cafe", "greenperks-bistro", "renewworks-repair", "loopcycle-accessories",
                { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": "agoraMainStore" }
              ]
            },
            "rootCodesByStore": {
              "$config": "replace",
              "value": {
                "circaMainStore": ["circaPointsPriceBook"],
                "greenperks-cafe": ["circaLocalGreenPerksAed"],
                "greenperks-bistro": ["circaLocalGreenPerksAed"],
                "renewworks-repair": ["circaLocalRenewWorksAed"],
                "loopcycle-accessories": ["circaLocalLoopCycleAed"],
                "agoraMainStore": { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": ["agoraApparelRetailUsd"] }
              }
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
                "circaMainStore",
                "greenperks-cafe", "greenperks-bistro", "renewworks-repair", "loopcycle-accessories",
                { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": "agoraMainStore" }
              ]
            },
            "rootCodesByStore": {
              "$config": "replace",
              "value": {
                "circaMainStore": ["circaSamplePointsPolicy"],
                "greenperks-cafe": ["circaLocalGreenPerksZeroTax"],
                "greenperks-bistro": ["circaLocalGreenPerksZeroTax"],
                "renewworks-repair": ["circaLocalRenewWorksZeroTax"],
                "loopcycle-accessories": ["circaLocalLoopCycleZeroTax"],
                "agoraMainStore": { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": ["agoraAeVatPolicy"] }
              }
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
                "circaMainStore",
                "greenperks-cafe", "greenperks-bistro", "renewworks-repair", "loopcycle-accessories",
                { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": "agoraMainStore" }
              ]
            },
            "rootCodesByStore": {
              "$config": "replace",
              "value": {
                "circaMainStore": ["circaDigitalRegistry"],
                "greenperks-cafe": ["circaLocalCafeWarehouse"],
                "greenperks-bistro": ["circaLocalBistroWarehouse"],
                "renewworks-repair": ["circaLocalRenewWorksWarehouse"],
                "loopcycle-accessories": ["circaLocalLoopCycleWarehouse"],
                "agoraMainStore": { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": ["agoraApparelWarehouse"] }
              }
            }
          }
        }
      }
    }
  },
  "promotion": {
    // Explicitly approved native demo selection; this does not qualify real ITEM delivery or monetary benefits.
    "merchantBenefits": {
      "enabled": true,
      "itemEvidenceMode": "LOCAL_SIMULATION",
      "itemEvidenceService": "DefaultFulfillmentItemSimulationService"
    },
    "runtimeRoleProfiles": {
      "COMMERCE": {
        // Reviewed native owner prerequisites; consent/issuance still pass their installed guards.
        "sellerAuthorization": { "enabled": true, "qualified": true },
        "purchasedRights": { "enabled": true, "qualified": true },
        // Ten loopback runtimes share Platform's finite IP request budget.
        "setupPacing": { "preflightDelayMs": 1200, "issuanceDelayMs": 3600 },
        "publication": {
          "delivery": {
            "enabled": true,
            "storeCodes": {
              "$config": "replace",
              "value": [
                "circaMainStore",
                { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": "agoraMainStore" }
              ]
            },
            "rootCodesByStore": {
              "$config": "replace",
              "value": {
                "circaMainStore": [
                  "CIRCA_COUPON_GP-C01_PROMO", "CIRCA_COUPON_GP-C02_PROMO", "CIRCA_COUPON_GP-C03_PROMO",
                  "CIRCA_COUPON_GP-C04_PROMO", "CIRCA_COUPON_GP-C05_PROMO", "CIRCA_COUPON_GP-C06_PROMO",
                  "CIRCA_COUPON_GP-C07_PROMO", "CIRCA_COUPON_GP-C08_PROMO", "CIRCA_COUPON_GP-C09_PROMO",
                  "CIRCA_COUPON_GP-C10_PROMO", "CIRCA_COUPON_GP-C11_PROMO", "CIRCA_COUPON_GP-C12_PROMO",
                  "CIRCA_COUPON_GP-B01_PROMO", "CIRCA_COUPON_GP-B02_PROMO", "CIRCA_COUPON_GP-B03_PROMO",
                  "CIRCA_COUPON_GP-B04_PROMO", "CIRCA_COUPON_GP-B05_PROMO", "CIRCA_COUPON_GP-B06_PROMO",
                  "CIRCA_COUPON_GP-B07_PROMO", "CIRCA_COUPON_GP-B08_PROMO", "CIRCA_COUPON_GP-B09_PROMO",
                  "CIRCA_COUPON_GP-B10_PROMO", "CIRCA_COUPON_GP-B11_PROMO", "CIRCA_COUPON_GP-B12_PROMO",
                  "CIRCA_COUPON_GP-A01_PROMO", "CIRCA_COUPON_GP-A02_PROMO", "CIRCA_COUPON_GP-A03_PROMO",
                  "CIRCA_COUPON_GP-A04_PROMO", "CIRCA_COUPON_GP-A05_PROMO", "CIRCA_COUPON_GP-A06_PROMO",
                  "CIRCA_COUPON_GP-A07_PROMO", "CIRCA_COUPON_GP-A08_PROMO", "CIRCA_COUPON_GP-A09_PROMO",
                  "CIRCA_COUPON_GP-A10_PROMO", "CIRCA_COUPON_GP-A11_PROMO",
                  "CIRCA_COUPON_CPN-GRN-30_PROMO", "CIRCA_COUPON_CPN-SVC-50_PROMO", "CIRCA_COUPON_CPN-ECO-15_PROMO"
                ],
                "agoraMainStore": { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                  "value": ["agoraStylePass5PercentRule", "agoraCapsuleEdit10PercentRule", "agoraPrivateSale20PercentRule"] }
              }
            }
          }
        }
      }
    }
  },
  "digitalCore": {
    "runtimeRoleProfiles": {
      "COMMERCE": {
        "merchantRedemption": {
          "enabled": true,
          "storeScope": { "enabled": true, "qualified": true }
        }
      }
    }
  },
  "fulfillmentCore": {
    "itemSimulation": {
      "enabled": true,
      "environmentAllowlist": { "$config": "replace", "value": ["kickoffLocal"] }
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
        "categories": {
          "productPublicationTarget": { "enabled": true },
          "commerceSellerAuthorizationManagement": { "enabled": true },
          "commerceMerchantPricing": { "enabled": true },
          "commerceOwnershipEvidence": { "enabled": true }
        }
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
            "value": [
              { "tenant": "default", "storeCode": "circaMainStore" },
              { "tenant": "default", "storeCode": "greenperks-cafe" },
              { "tenant": "default", "storeCode": "greenperks-bistro" },
              { "tenant": "default", "storeCode": "renewworks-repair" },
              { "tenant": "default", "storeCode": "loopcycle-accessories" },
              { "$config": "selected", "name": "agora", "field": "domains", "includes": "apparel",
                "value": { "tenant": "default", "storeCode": "agoraMainStore" } },
              { "$config": "selected", "name": "agora", "field": "domains", "includes": "electronics",
                "value": { "tenant": "default", "storeCode": "agoraElectronicsStore" } },
              { "$config": "selected", "name": "agora", "field": "domains", "includes": "telco",
                "value": { "tenant": "default", "storeCode": "agoraTelcoStore" } }
            ]
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
                "version": "0.0.1",
                "checksum": "0024cecb65ef2e34f3db8d314fbea6f926e3cc887fdc8c38612b3ac0fb646613"
              },
              "target": {
                "moduleName": "editorial",
                "releaseCode": "editorial:editorialWorkflows",
                "version": "0.0.1",
                "checksum": "d754c2c3ddbe4c5188e96b329a99b8686c19cdfd994f423424ea56e4a2f84103"
              },
              "publishedChecksum": "d429c6567247add99fb275466af93a33ca64e3628c6a3119c97ccc05a3b70daf"
            },
            {
              "definitionCode": "editorialPublication",
              "mode": "RETAIN",
              "source": {
                "moduleName": "processServer",
                "releaseCode": "processServer:init-v001",
                "version": "0.0.1",
                "checksum": "0024cecb65ef2e34f3db8d314fbea6f926e3cc887fdc8c38612b3ac0fb646613"
              },
              "target": {
                "moduleName": "editorial",
                "releaseCode": "editorial:editorialWorkflows",
                "version": "0.0.1",
                "checksum": "d754c2c3ddbe4c5188e96b329a99b8686c19cdfd994f423424ea56e4a2f84103"
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
