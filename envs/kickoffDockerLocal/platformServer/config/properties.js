/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares platformServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "kickoffAdministration",
      "axis",
      "kickoffDockerLocal",
      "platformServer",
      "search",
      "elastic",
      "ollamaProvider",
      "profile",
      "backoffice",
      "localizationCore",
      "localizationApi"
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
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalPlatform"
        }
      }
    },
    "circa.ewaste": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "search": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "elastic": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "axis": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "ollamaProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "profile": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "backoffice": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "localizationCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "localizationApi": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "profileCustomerBrowserSession": {
    "enabled": true,
    "refreshCookieName": "nodics_docker_customer_refresh",
    "csrfCookieName": "nodics_docker_customer_csrf",
    "secure": false,
    "sameSite": "Lax"
  },
  "profileBrowserSession": {
    "enabled": true,
    "refreshCookieName": "nodics_docker_axis_refresh",
    "csrfCookieName": "nodics_docker_axis_csrf",
    "cookiePath": "/nodics/profile/v0/employee/browser",
    "csrfCookiePath": "/",
    "sameSite": "Lax",
    "secure": false,
    "maximumAgeSeconds": 86400
  },
  "backofficeApplicationInitialization": {
    "operatorOrigin": "http://localhost:4100",
    "profiles": {
      "nexus": {
        "presentation": {
          "summary": "Corporate website accelerator published from WCMS Staged to Online.",
          "requiredServers": [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process"
          ]
        },
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "nexusupdate": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "nexusecosystemrepair": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "agoraapparel": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "agoraelectronics": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "agoratelco": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "frameworkdocs": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "axisdocs": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      },
      "kickoffdocs": {
        "target": {
          "moduleName": "cms",
          "connectionName": "wcmsStaged",
          "connectionType": "abstract",
          "timeoutMs": 120000,
          "maxAttempts": 1
        }
      }
    }
  },
  "backofficeFunctionalModuleActivationData": {
    "modules": {
      "nodics.wcms": {
        "dataPackages": [
          {
            "code": "wcms:runtime-defaults",
            "classification": "runtime-default",
            "owner": "nodics.wcms",
            "required": true,
            "trigger": "ACTIVATION",
            "targetModule": "cms",
            "targetServer": "wcmsStagedServer",
            "targetDatabase": "kickoffDockerLocalWcmsStaged",
            "operation": "IMPORT"
          },
          {
            "code": "wcms:sample-content",
            "classification": "sample",
            "owner": "nodics.wcms",
            "required": false,
            "trigger": "USER",
            "targetModule": "cms",
            "targetServer": "wcmsStagedServer",
            "targetDatabase": "kickoffDockerLocalWcmsStaged",
            "operation": "IMPORT_SAMPLE"
          }
        ]
      },
      "nodics.commerce": {
        "dataPackages": [
          {
            "code": "baseCommerce:core-reference",
            "classification": "core",
            "owner": "nodics.commerce",
            "required": true,
            "trigger": "ACTIVATION",
            "targetModule": "commerce",
            "targetServer": "commerceServer",
            "targetDatabase": "kickoffDockerLocalCommerce",
            "operation": "IMPORT"
          },
          {
            "code": "commerce:sample-catalog",
            "classification": "sample",
            "owner": "nodics.commerce",
            "required": false,
            "trigger": "USER",
            "targetModule": "commerce",
            "targetServer": "commerceServer",
            "targetDatabase": "kickoffDockerLocalCommerce",
            "operation": "IMPORT_SAMPLE"
          }
        ]
      },
      "nodics.communication": {
        "dataPackages": [
          {
            "code": "commsCore:runtime-defaults",
            "classification": "runtime-default",
            "owner": "nodics.communication",
            "required": true,
            "trigger": "ACTIVATION",
            "targetModule": "commsCore",
            "targetServer": "engagementServer",
            "targetDatabase": "kickoffDockerLocalEngagement",
            "operation": "IMPORT"
          },
          {
            "code": "commsCore:sample-templates",
            "classification": "sample",
            "owner": "nodics.communication",
            "required": false,
            "trigger": "USER",
            "targetModule": "commsCore",
            "targetServer": "engagementServer",
            "targetDatabase": "kickoffDockerLocalEngagement",
            "operation": "IMPORT_SAMPLE"
          }
        ]
      },
      "nodics.loyalty": {
        "dataPackages": [
          {
            "code": "loyaltyCore:core-enterprise-reference",
            "classification": "core",
            "owner": "nodics.loyalty",
            "required": true,
            "trigger": "ACTIVATION",
            "targetModule": "profile",
            "targetServer": "platformServer",
            "targetDatabase": "kickoffDockerLocalPlatform",
            "operation": "IMPORT"
          }
        ]
      },
      "nodics.waste": {
        "dataPackages": [
          {
            "code": "wasteCore:core-reference",
            "classification": "core",
            "owner": "nodics.waste",
            "required": true,
            "trigger": "ACTIVATION",
            "targetModule": "profile",
            "targetServer": "platformServer",
            "targetDatabase": "kickoffDockerLocalPlatform",
            "operation": "IMPORT"
          },
          {
            "code": "wasteCollection:sample-profile-addresses",
            "classification": "sample",
            "owner": "nodics.waste",
            "required": false,
            "trigger": "USER",
            "targetModule": "profile",
            "targetServer": "platformServer",
            "targetDatabase": "kickoffDockerLocalPlatform",
            "operation": "IMPORT_SAMPLE"
          }
        ]
      }
    }
  },
  "backofficeRegistry": {
    "clientEndpoints": {
      "platform": "http://localhost:5300/",
      "platformServer": "http://localhost:5300/",
      "wcmsStaged": "http://localhost:5312/",
      "wcmsStagedServer": "http://localhost:5312/",
      "wcmsOnline": "http://localhost:5314/",
      "wcmsOnlineServer": "http://localhost:5314/",
      "process": "http://localhost:5330/",
      "processServer": "http://localhost:5330/",
      "engagement": "http://localhost:5340/",
      "engagementServer": "http://localhost:5340/",
      "loyalty": "http://localhost:5360/",
      "loyaltyServer": "http://localhost:5360/",
      "commerce": "http://localhost:5350/",
      "commerceServer": "http://localhost:5350/",
      "commerceStaged": "http://localhost:5352/",
      "commerceStagedServer": "http://localhost:5352/",
      "waste": "http://localhost:5370/",
      "wasteServer": "http://localhost:5370/",
      "location": "http://localhost:5380/",
      "locationServer": "http://localhost:5380/"
    }
  },
  "servers": {
    "wcmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStaged"
      ]
    },
    "wcmsStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStagedServer"
      ]
    },
    "cmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsStaged"
      ]
    },
    "wcmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnline"
      ]
    },
    "wcmsOnlineServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnlineServer"
      ]
    },
    "cmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsOnline"
      ]
    },
    "process": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "process"
      ]
    },
    "processServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "processServer"
      ]
    },
    "commerce": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerce"
      ]
    },
    "commerceServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceServer"
      ]
    },
    "commerceStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStaged"
      ]
    },
    "commerceStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStagedServer"
      ]
    },
    "engagement": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagement"
      ]
    },
    "engagementServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagementServer"
      ]
    },
    "loyalty": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyalty"
      ]
    },
    "loyaltyServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyaltyServer"
      ]
    },
    "waste": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "waste"
      ]
    },
    "wasteServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wasteServer"
      ]
    },
    "location": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "location"
      ]
    },
    "locationServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "locationServer"
      ]
    },
    "wcms": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcms"
      ]
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4300,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4301
      },
      "abstractEndpoint": {
        "httpHost": "platform",
        "httpPort": 4300,
        "httpsHost": "platform",
        "httpsPort": 4301
      }
    }
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "PLATFORM"
      ],
      "contributions": [
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
    }
  }
};
