/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module locationServer/config/properties
 * @description Defines isolated local Location coordinates and runtime configuration.
 * @layer environment-server-config
 * @owner nodics.kickoff
 * @override Customer deployments provide their own location server database, provider, and endpoint configuration.
 */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-location-1",
    "remoteModules": [
      "profile",
      "backoffice"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_LOCAL_LOCATION_API_KEY",
      "fallback": null
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
  "runtimeRole": {
    "code": "LOCATION",
    "publication": "OPERATIONAL"
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
  "apiExposure": {
    "categories": {
      "dataImport": {
        "enabled": true
      }
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
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
  "location": {},
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalLocation"
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
    "default": {
      "endpoint": {
        "httpPort": 4380,
        "httpsPort": 4381
      }
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.endpoint"
      }
    },
    "commerce": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.endpoint"
      }
    },
    "waste": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.endpoint"
      }
    }
  },
  "tooling": {
    "runtime": {
      "code": "location",
      "script": "start:location",
      "dependsOn": [
        "platform"
      ],
      "order": 6
    }
  }
};
