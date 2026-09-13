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
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalLocation"
        }
      }
    },
    "locationCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "locationType": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "locationMap": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "locationSearch": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "locationDraft": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "locationApproval": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "locationProjection": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "servers": {
    "platform": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platform"
      ]
    },
    "platformServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platformServer"
      ]
    },
    "profile": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "profile"
      ]
    },
    "backoffice": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "backoffice"
      ]
    },
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
        "httpPort": 4380,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4381
      },
      "abstractEndpoint": {
        "httpHost": "location",
        "httpPort": 4380,
        "httpsHost": "location",
        "httpsPort": 4381
      }
    }
  },
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
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
      "kickoffDockerLocal",
      "locationServer",
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
      "locationCore": "location.operational",
      "locationType": "location.operational",
      "locationMap": "location.operational",
      "locationSearch": "location.operational",
      "locationDraft": "location.operational",
      "locationApproval": "location.operational",
      "locationProjection": "location.operational"
    }
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
      "schemaApi": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      },
      "locationInternal": {
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
    "serviceNames": [
      "DefaultLocationApprovalService",
      "DefaultEmsFailedMessagesService",
      "DefaultIndexService",
      "DefaultIndexerLogService",
      "DefaultIndexerService",
      "DefaultSearchService",
      "DefaultWorkflow2SchemaService"
    ]
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "LOCATION"
      ],
      "contributions": [
        {
          "moduleName": "wasteCollection",
          "sections": [
            "sample-locations"
          ]
        }
      ],
      "initializationProfiles": {
        "localLocationFoundation": {
          "enabled": true,
          "label": "Local Location foundation",
          "description": "Install Location reference releases for type registry, semantic places, map layers, nearby search, drafts, approval, and marker projections.",
          "completionMessage": "The Local Location foundation is ready. Operators can validate reusable places, map views, search projections, and draft approval flows.",
          "steps": [
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
  },
  "location": {
    "capabilities": {
      "semanticPlace": true,
      "typeRegistry": true,
      "mapLayers": true,
      "nearbySearch": true,
      "draftCapture": true,
      "approval": true,
      "markerProjection": true
    }
  }
};
