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
      "nexusCore",
      "axis",
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
          "databaseName": "kickoffDockerLocalPlatform"
        }
      }
    },
    "circa.ewaste": {},
    "search": {},
    "elastic": {},
    "axis": {},
    "ollamaProvider": {},
    "profile": {},
    "backoffice": {},
    "localizationCore": {},
    "localizationApi": {}
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
    "sameSite": "Lax",
    "secure": false
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
        }
      },
      "nexusupdate": {},
      "nexusecosystemrepair": {},
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
      "nodics.loyalty": {
        "dataPackages": {
          "$config": "replace",
          "value": [
            {
              "code": "loyaltyCore:core-enterprise-reference",
              "targetModule": "profile",
              "targetServer": "platformServer",
              "targetDatabase": "kickoffDockerLocalPlatform"
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
              "targetDatabase": "kickoffDockerLocalPlatform"
            },
            {
              "code": "wasteCollection:sample-profile-addresses",
              "targetModule": "profile",
              "targetServer": "platformServer",
              "targetDatabase": "kickoffDockerLocalPlatform"
            }
          ]
        }
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
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnlineServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "processServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerce": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagement": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagementServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyalty": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyaltyServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "waste": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wasteServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "location": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "locationServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcms": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
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
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "platform",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
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
      }
    }
  },
  "apiExposure": {
    "categories": {
      "dataImport": {
        "enabled": true
      }
    }
  }
};
