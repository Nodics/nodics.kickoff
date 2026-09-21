/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module envs/kickoffLocal/platformServer/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner platformServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-platform-1",
    "remoteModules": [
      "workflow",
      "cms",
      "editorial"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_PLATFORM_API_KEY",
      "fallback": null
    }
  },
  "apiExposure": {
    "categories": {
      "dataExport": {
        "enabled": true
      },
    }
  },
  "copilot": {
    "core": {
      "customerProject": "kickoff",
      "environment": "kickoffLocal"
    },
    "api": {
      "enabled": true
    },
    "workbench": {
      "target": {
        "productModule": "product",
        "pricingModule": "pricing",
        "connectionName": "commerceStaged",
        "targetAuthority": {
          "runtimeRole": "COMMERCE_STAGED"
        }
      }
    },
    "knowledge": {
      "ingestion": {
        "enabled": {
          "$config": "env",
          "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
          "fallback": true,
          "type": "boolean"
        },
        "ingestOnStart": {
          "$config": "env",
          "name": "NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START",
          "fallback": true,
          "type": "boolean"
        },
        "indexTenant": "default"
      },
      "retrieval": {
        "enabled": {
          "$config": "env",
          "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
          "fallback": true,
          "type": "boolean"
        }
      },
      "repositoryRoots": {
        "nodics.ai": {
          "$config": "env",
          "name": "NODICS_COPILOT_NODICS_AI_ROOT",
          "fallback": {
            "$config": "path",
            "base": "framework",
            "relative": ""
          }
        },
        "nodics.kickoff": {
          "$config": "env",
          "name": "NODICS_COPILOT_KICKOFF_ROOT",
          "fallback": {
            "$config": "path",
            "base": "project",
            "relative": ""
          }
        },
        "nodics.axis": {
          "$config": "env",
          "name": "NODICS_COPILOT_AXIS_ROOT",
          "fallback": {
            "$config": "path",
            "base": {
              "$config": "ref",
              "path": [
                "copilot",
                "knowledge",
                "repositoryRoots",
                "nodics.kickoff"
              ]
            },
            "relative": "../nodics.exp/nodics.axis"
          }
        }
      },
      "sourceRegistry": {
        "definitions": {
          "$config": "replace",
          "value": [
            {
              "code": "nodics-framework-readme",
              "repository": "nodics.ai",
              "project": "nodics",
              "module": "nodics.ai",
              "owner": "nodics.ai",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                "fallback": {
                  "$config": "context",
                  "name": "frameworkVersion"
                }
              },
              "sourceType": "README",
              "classification": "INTERNAL",
              "paths": [
                "README.md",
                "**/README.md"
              ],
              "allowedChannels": [
                "EMPLOYEE"
              ],
              "requiredPermissions": [
                "copilot.knowledge.internal.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "enabled": {
                "$config": "all",
                "values": [
                  {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                    "fallback": true,
                    "type": "boolean"
                  }
                ]
              }
            },
            {
              "code": "nodics-framework-contracts",
              "repository": "nodics.ai",
              "project": "nodics",
              "module": "nodics.ai",
              "owner": "nodics.ai",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                "fallback": {
                  "$config": "context",
                  "name": "frameworkVersion"
                }
              },
              "sourceType": "AGENTS_CONTRACT",
              "classification": "RESTRICTED",
              "paths": [
                "AGENTS.md",
                "**/AGENTS.md",
                "**/llm/contracts/*.md"
              ],
              "allowedChannels": [
                "EMPLOYEE"
              ],
              "requiredPermissions": [
                "copilot.knowledge.restricted.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "enabled": {
                "$config": "all",
                "values": [
                  {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                    "fallback": true,
                    "type": "boolean"
                  }
                ]
              }
            },
            {
              "code": "nodics-axis-readme",
              "repository": "nodics.axis",
              "project": "nodics",
              "module": "nodics.axis",
              "owner": "nodics.axis",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_AXIS_VERSION",
                "fallback": "kickoff-local-development"
              },
              "sourceType": "README",
              "classification": "INTERNAL",
              "paths": [
                "README.md",
                "**/README.md"
              ],
              "allowedChannels": [
                "EMPLOYEE"
              ],
              "requiredPermissions": [
                "copilot.knowledge.internal.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "enabled": {
                "$config": "all",
                "values": [
                  {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                    "fallback": true,
                    "type": "boolean"
                  }
                ]
              }
            },
            {
              "code": "nodics-axis-contracts",
              "repository": "nodics.axis",
              "project": "nodics",
              "module": "nodics.axis",
              "owner": "nodics.axis",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_AXIS_VERSION",
                "fallback": "kickoff-local-development"
              },
              "sourceType": "AGENTS_CONTRACT",
              "classification": "RESTRICTED",
              "paths": [
                "AGENTS.md",
                "**/AGENTS.md",
                "**/llm/contracts/*.md"
              ],
              "allowedChannels": [
                "EMPLOYEE"
              ],
              "requiredPermissions": [
                "copilot.knowledge.restricted.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "enabled": {
                "$config": "all",
                "values": [
                  {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                    "fallback": true,
                    "type": "boolean"
                  }
                ]
              }
            },
            {
              "code": "kickoff-project-readme",
              "repository": "nodics.kickoff",
              "project": "kickoff",
              "module": "nodics.kickoff",
              "owner": "nodics.kickoff",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_KICKOFF_VERSION",
                "fallback": {
                  "$config": "context",
                  "name": "projectVersion"
                }
              },
              "sourceType": "CUSTOMER_PROJECT",
              "classification": "CUSTOMER",
              "paths": [
                "README.md",
                "**/README.md",
                "docs/**/*.md"
              ],
              "allowedChannels": [
                "EMPLOYEE"
              ],
              "tenantScopes": [
                "default"
              ],
              "customerProjectScopes": [
                "kickoff"
              ],
              "requiredPermissions": [
                "copilot.knowledge.customer.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "enabled": {
                "$config": "all",
                "values": [
                  {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                    "fallback": true,
                    "type": "boolean"
                  }
                ]
              }
            },
            {
              "code": "kickoff-project-contracts",
              "repository": "nodics.kickoff",
              "project": "kickoff",
              "module": "nodics.kickoff",
              "owner": "nodics.kickoff",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_KICKOFF_VERSION",
                "fallback": {
                  "$config": "context",
                  "name": "projectVersion"
                }
              },
              "sourceType": "CUSTOMER_PROJECT",
              "classification": "CUSTOMER",
              "paths": [
                "AGENTS.md",
                "**/AGENTS.md",
                "**/llm/contracts/*.md"
              ],
              "allowedChannels": [
                "EMPLOYEE"
              ],
              "tenantScopes": [
                "default"
              ],
              "customerProjectScopes": [
                "kickoff"
              ],
              "requiredPermissions": [
                "copilot.knowledge.customer.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "enabled": {
                "$config": "all",
                "values": [
                  {
                    "$config": "env",
                    "name": "NODICS_COPILOT_KNOWLEDGE_ENABLED",
                    "fallback": true,
                    "type": "boolean"
                  }
                ]
              }
            },
            {
              "code": "nodics-copilot-source",
              "repository": "nodics.ai",
              "project": "nodics",
              "module": "nodics.copilot",
              "owner": "nodics.copilot",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                "fallback": {
                  "$config": "context",
                  "name": "frameworkVersion"
                }
              },
              "sourceType": "SOURCE_CODE",
              "classification": "RESTRICTED",
              "paths": [
                "nodics.copilot/**/*.js"
              ],
              "excludedPaths": [
                "nodics.copilot/**/test",
                "nodics.copilot/**/llm/generated"
              ],
              "allowedExtensions": [
                ".js"
              ],
              "limits": {
                "maximumFiles": 400,
                "maximumFileBytes": 524288,
                "maximumSourceBytes": 8388608
              },
              "requiredPermissions": [
                "copilot.knowledge.restricted.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "allowedChannels": [
                "EMPLOYEE"
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
                        "name": "NODICS_COPILOT_FRAMEWORK_SOURCE_CODE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "code": "nodics-discovery-source",
              "repository": "nodics.ai",
              "project": "nodics",
              "module": "nodics.discovery",
              "owner": "nodics.discovery",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_NODICS_AI_VERSION",
                "fallback": {
                  "$config": "context",
                  "name": "frameworkVersion"
                }
              },
              "sourceType": "SOURCE_CODE",
              "classification": "RESTRICTED",
              "paths": [
                "nodics.discovery/**/*.js"
              ],
              "excludedPaths": [
                "nodics.discovery/**/test",
                "nodics.discovery/**/llm/generated"
              ],
              "allowedExtensions": [
                ".js"
              ],
              "limits": {
                "maximumFiles": 400,
                "maximumFileBytes": 524288,
                "maximumSourceBytes": 8388608
              },
              "requiredPermissions": [
                "copilot.knowledge.restricted.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "allowedChannels": [
                "EMPLOYEE"
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
                        "name": "NODICS_COPILOT_FRAMEWORK_SOURCE_CODE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "code": "nodics-axis-assistant-source",
              "repository": "nodics.axis",
              "project": "nodics",
              "module": "nodics.axis",
              "owner": "nodics.axis",
              "version": {
                "$config": "env",
                "name": "NODICS_COPILOT_AXIS_VERSION",
                "fallback": "kickoff-local-development"
              },
              "sourceType": "SOURCE_CODE",
              "classification": "RESTRICTED",
              "paths": [
                "src/assistant/**/*.ts",
                "src/assistant/**/*.tsx",
                "src/cms/renderers/components/assistant/**/*.tsx"
              ],
              "excludedPaths": [
                "src/**/__tests__",
                "src/**/*.test.ts",
                "src/**/*.test.tsx"
              ],
              "allowedExtensions": [
                ".ts",
                ".tsx"
              ],
              "limits": {
                "maximumFiles": 200,
                "maximumFileBytes": 524288,
                "maximumSourceBytes": 4194304
              },
              "requiredPermissions": [
                "copilot.knowledge.restricted.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "allowedChannels": [
                "EMPLOYEE"
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
                        "name": "NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED",
                        "fallback": true,
                        "type": "boolean"
                      }
                    ]
                  }
                ]
              }
            },
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
              "sourceType": "SOURCE_CODE",
              "classification": "RESTRICTED",
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
              "requiredPermissions": [
                "copilot.knowledge.restricted.read"
              ],
              "secretScanPolicy": "REQUIRED",
              "allowedChannels": [
                "EMPLOYEE"
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
              }
            }
          ]
        }
      }
    },
    "providers": {
      "enabled": true,
      "default": {
        "adapter": "ollama"
      },
      "adapters": {
        "ollama": {
          "enabled": true
        }
      }
    }
  },
  "backofficeRegistration": {
    "connectionName": "default"
  },
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true
      }
    }
  },
  "backofficeApplicationInitialization": {
    "operatorOrigin": "http://localhost:3100",
    "projectCode": {
      "$config": "env",
      "name": "NODICS_PROJECT_CODE",
      "fallback": {
        "$config": "context",
        "name": "projectCode"
      }
    },
    "projectRoot": {
      "$config": "path",
      "base": "project",
      "relative": ""
    },
    "profiles": {
      "nexus": {
        "presentation": {
          "summary": "Corporate website accelerator published from the latest qualified WCMS Staged baseline to Online.",
          "requiredServers": [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
            "Engagement"
          ],
          "requiredFunctionalModules": [
            {
              "code": "nodics.communication",
              "label": "Engagement capability"
            }
          ]
        }
      },
      "nexusupdate": {},
      "nexusecosystemrepair": {},
      "nexusincremental": {
        "code": "nexusincremental",
        "type": "WEBSITE_BUNDLE_UPDATE",
        "owner": "nexus.web",
        "applicationCode": "nexus",
        "siteCode": "nexusCorporateSite",
        "baselineCode": "nexusincremental",
        "presentation": {
          "visible": false
        }
      },
      "nexusprofessionalcopy": {
        "code": "nexusprofessionalcopy",
        "type": "WEBSITE_BUNDLE_UPDATE",
        "owner": "nexus.web",
        "applicationCode": "nexus",
        "siteCode": "nexusCorporateSite",
        "baselineCode": "nexusprofessionalcopy",
        "presentation": {
          "visible": false
        }
      },
      "agoraapparel": {},
      "agoraelectronics": {},
      "agoratelco": {},
      "frameworkdocs": {},
      "axisdocs": {},
      "kickoffdocs": {}
    },
    "target": {
      "connectionName": "wcmsStaged"
    }
  },
  "backofficeFunctionalModuleActivationData": {
    "modules": {
      "nodics.commerce": {
        "dataPackages": {
          "$config": "replace",
          "value": [{
            "code": "baseCommerce:core-reference",
            "targetModule": "baseCommerce",
            "targetServer": "commerceServer"
          }]
        }
      },
      "nodics.loyalty": {
        "dataPackages": {
          "$config": "replace",
          "value": [
            {
              "code": "loyaltyCore:core-enterprise-reference",
              "targetModule": "profile",
              "targetServer": "platformServer",
              "targetDatabase": "kickoffLocalPlatform"
            }
          ]
        }
      },
      "nodics.waste": {
        "dataPackages": {
          "$config": "replace",
          "value": [
            {
              "code": "wasteCore:core-reference",
              "targetModule": "profile",
              "targetServer": "platformServer",
              "targetDatabase": "kickoffLocalPlatform"
            },
            {
              "code": "wasteCollection:sample-profile-addresses",
              "targetModule": "profile",
              "targetServer": "platformServer",
              "targetDatabase": "kickoffLocalPlatform"
            }
          ]
        }
      }
    }
  },
  "backofficeLocalReset": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ],
    "providers": {
      "$config": "replace",
      "value": [
        {
          "code": "wcmsStaged",
          "connectionName": "wcmsStaged",
          "targetAuthority": {
            "server": "wcmsStagedServer",
            "runtimeRole": {
              "code": "WCMS_STAGED",
              "publication": "STAGED"
            }
          }
        },
        {
          "code": "wcmsOnline",
          "connectionName": "wcmsOnline",
          "targetAuthority": {
            "server": "wcmsOnlineServer",
            "runtimeRole": {
              "code": "WCMS_ONLINE",
              "publication": "ONLINE"
            }
          }
        },
        {
          "code": "process",
          "connectionName": "process",
          "targetAuthority": {
            "server": "processServer",
            "runtimeRole": {
              "code": "PROCESS",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "location",
          "connectionName": "location",
          "targetAuthority": {
            "server": "locationServer",
            "runtimeRole": {
              "code": "LOCATION",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "commerce",
          "connectionName": "commerce",
          "targetAuthority": {
            "server": "commerceServer",
            "runtimeRole": {
              "code": "COMMERCE",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "commerceStaged",
          "connectionName": "commerceStaged",
          "targetAuthority": {
            "server": "commerceStagedServer",
            "runtimeRole": {
              "code": "COMMERCE_STAGED",
              "publication": "STAGED"
            }
          }
        },
        {
          "code": "engagement",
          "connectionName": "engagement",
          "targetAuthority": {
            "server": "engagementServer",
            "runtimeRole": {
              "code": "ENGAGEMENT",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "loyalty",
          "connectionName": "loyalty",
          "targetAuthority": {
            "server": "loyaltyServer",
            "runtimeRole": {
              "code": "LOYALTY",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "waste",
          "connectionName": "waste",
          "targetAuthority": {
            "server": "wasteServer",
            "runtimeRole": {
              "code": "WASTE",
              "publication": "OPERATIONAL"
            }
          }
        },
        {
          "code": "platform",
          "connectionName": "default",
          "targetAuthority": {
            "server": "platformServer",
            "runtimeRole": {
              "code": "PLATFORM",
              "publication": "OPERATIONAL"
            }
          }
        }
      ]
    }
  },
  "localResetProvider": {
    "modules": {
      "backoffice": true,
      "import": true,
      "localizationCore": true,
      "profile": true,
      "search": true,
      "system": true,
      "token": true,
      "validator": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
        "DefaultCatalogService",
        "DefaultEmsFailedMessagesService",
        "DefaultWorkflow2SchemaService"
      ]
    },
    "searchIndexes": [
      {
        "moduleName": "discoveryProjection",
        "indexName": "discoveryDocumentProjection"
      }
    ]
  },
  "activeModules": {
    "groups": [
      "nodics.discovery",
      "nodics.copilot"
    ],
    "modules": [
      "redisCache",
      "circa.ewaste",
      "kickoffAdministration",
      "nexusCore",
      "search",
      "elastic",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "axis",
      "ollamaProvider"
    ]
  },
  "runtimeRole": {
    "code": "PLATFORM",
    "publication": "OPERATIONAL"
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalPlatform"
        }
      }
    },
    "backoffice": {},
    "localizationCore": {},
    "profile": {}
  },
  "data": {
    "dataReleases": {
      "contributions": {
        "$config": "replace",
        "value": [
          {
            "moduleName": "wasteCore",
            "sections": [
              "core-reference"
            ]
          },
          {
            "moduleName": "wasteCollection",
            "sections": [
              "sample-profile-addresses"
            ]
          },
          {
            "moduleName": "loyaltyCore",
            "sections": [
              "core-enterprise-reference"
            ]
          }
        ]
      },
      "initializationProfiles": {
        "localPlatformFoundation": {
          "enabled": true,
          "label": "Local Platform foundation",
          "description": "Install required Platform initialization and core releases for local BackOffice identity, catalogue, profile, authorization, and localization services.",
          "completionMessage": "The Local Platform foundation is ready. Operators can sign in, review module lifecycle, and manage governed platform data.",
          "steps": {
            "$config": "replace",
            "value": [
              {
                "dataType": "init"
              },
              {
                "dataType": "core"
              }
            ]
          }
        }
      }
    }
  },
  "profileExternalIdentity": {
    "enabled": true,
    // Local testing: accept signed launch proofs for 60 minutes.
    "maximumAssertionAgeSeconds": 3600,
    "applications": {
      "circa.ewaste": {
        "enabled": true,
        "provider": "TELEGRAM",
        "enterpriseCode": "default",
        "credentialReference": "telegram.bot.local",
        "requireBrowserHandoff": true
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
    "sameSite": "Lax",
    "secure": false
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4300,
        "httpsPort": 4301
      }
    }
  },
  "tooling": {
    "runtime": {
      "code": "platform",
      "script": "start:platform",
      "order": 0
    }
  }
};
