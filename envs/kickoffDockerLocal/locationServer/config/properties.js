/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares locationServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalLocation"
        }
      }
    },
    "locationCore": {},
    "locationType": {},
    "locationMap": {},
    "locationSearch": {},
    "locationDraft": {},
    "locationApproval": {},
    "locationProjection": {}
  },
  "servers": {
    "platform": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "platformServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
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
        "httpPort": 4380,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4381
      },
      "abstractEndpoint": {
        "httpHost": "location",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "location",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "circa.ewaste",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nodics.location",
      "locationCore",
      "locationType",
      "locationMap",
      "locationSearch",
      "locationDraft",
      "locationApproval",
      "locationProjection",
      "redisCache"
    ]
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "locationCore": true,
      "locationType": true,
      "locationMap": true,
      "locationSearch": true,
      "locationDraft": true,
      "locationApproval": true,
      "locationProjection": true
    },
    "default": "location.operational"
  },
  "runtimeRole": {
    "code": "LOCATION",
    "publication": "OPERATIONAL"
  },
  "apiExposure": {
    "categories": {
      "serviceRegistry": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      }
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffDockerLocal"
    ],
    "allowMissingModelServices": true,
    "requiredServiceNames": [
      "DefaultLocationMapProviderConfigurationService"
    ],
    "modules": {
      "import": true,
      "locationCore": true,
      "locationDraft": true,
      "locationMap": true,
      "locationProjection": true,
      "locationSearch": true,
      "locationType": true,
      "system": true,
      "token": true,
      "validator": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
        "DefaultLocationApprovalService",
        "DefaultEmsFailedMessagesService",
        "DefaultIndexService",
        "DefaultIndexerLogService",
        "DefaultIndexerService",
        "DefaultSearchService",
        "DefaultWorkflow2SchemaService"
      ]
    }
  },
  "data": {
    "dataReleases": {
      "contributions": {
        "$config": "replace",
        "value": [
          {
            "moduleName": "wasteCollection",
            "sections": [
              "sample-locations"
            ]
          }
        ]
      },
      "initializationProfiles": {
        "localLocationFoundation": {
          "enabled": true,
          "label": "Local Location foundation",
          "description": "Install Location reference releases for type registry, semantic places, map layers, nearby search, drafts, approval, and marker projections.",
          "completionMessage": "The Local Location foundation is ready. Operators can validate reusable places, map views, search projections, and draft approval flows.",
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
  "location": {}
};
