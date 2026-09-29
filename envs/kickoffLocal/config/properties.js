module.exports = {
  "pricing": {
    "runtimeRoleProfiles": {
      "COMMERCE": {
        "publication": {
          "delivery": {
            "enabled": true,
            "storeCodes": {
              "$config": "replace",
              "value": [
                "localProductQualificationStore20260929"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "local-policy-casfixed-20260928-pricebook"
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
                "localProductQualificationStore20260929"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "local-policy-casfixed-20260928-taxpolicy"
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
                "localProductQualificationStore20260929"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "local-policy-casfixed-20260928-warehouse"
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
                "localProductQualificationStore20260929"
              ]
            },
            "rootCodes": {
              "$config": "replace",
              "value": [
                "local-policy-casfixed-20260928-promotion"
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
      "localRuntimeDeploymentGrantPermissions": {
        "$config": "replace",
        "value": [
          "auth.internal.token.read",
          "auth.internal.token.read.anyTenant",
          "profile.enterprise.search",
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
  "apiExposure": {
    "runtimeRoleProfiles": {
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
            "value": [{ "tenant": "default", "storeCode": "localProductQualificationStore20260929" }]
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
          "enabled": true
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
          "ingestion": { "ingestOnStart": true }
        }
      },
      "PLATFORM": {
        "knowledge": {
          "sourceRegistry": {
            "definitions": {
              "$config": "keyed",
              "key": "code",
              "entries": [
                {
                  "code": "kickoff-copilot-composition-source",
                  "repository": "nodics.kickoff",
                  "project": "kickoff",
                  "module": "platformServer",
                  "owner": "nodics.kickoff",
                  "version": {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KICKOFF_VERSION",
                    "fallback": {
                      "$config": "context",
                      "name": "projectVersion"
                    }
                  },
                  "paths": [
                    "envs/kickoffLocal/platformServer/**/*.js"
                  ],
                  "excludedPaths": [
                    "envs/kickoffLocal/platformServer/llm/generated"
                  ],
                  "allowedExtensions": [
                    ".js"
                  ],
                  "limits": {
                    "maximumFiles": 100,
                    "maximumFileBytes": 524288,
                    "maximumSourceBytes": 2097152
                  },
                  "tenantScopes": [
                    "default"
                  ],
                  "customerProjectScopes": [
                    "kickoff"
                  ],
                  "enabled": {
                    "$config": "all",
                    "values": [
                      {
                        "$config": "env",
                        "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      },
                      {
                        "$config": "all",
                        "values": [
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          },
                          {
                            "$config": "env",
                            "name": "NODICS_COPILOT_KICKOFF_SOURCE_CODE_ENABLED",
                            "fallback": true,
                            "type": "boolean"
                          }
                        ]
                      }
                    ]
                  },
                  "template": "employeeSource"
                }
              ]
            }
          }
        }
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
