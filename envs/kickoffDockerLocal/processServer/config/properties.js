/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares processServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
  "httpHardening": {
    "cors": {
      "allowedOrigins": [
        "http://localhost:4100",
        "http://127.0.0.1:4100"
      ],
      "deniedOrigins": [
        "http://localhost:4200",
        "http://127.0.0.1:4200"
      ]
    }
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "kickoffDockerLocal",
      "processServer",
      "workflow",
      "cronjob"
    ]
  },
  "runtimeRole": {
    "code": "PROCESS",
    "publication": "OPERATIONAL"
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "PROCESS"
      ],
      "contributions": [
        {
          "moduleName": "cms",
          "sections": [
            "cmsPublicationApproval"
          ]
        }
      ],
      "installers": {
        "PROCESS_DEFINITION": "DefaultProcessDefinitionContributionService"
      }
    }
  },
  "apiExposure": {
    "categories": {
      "serviceRegistry": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      },
      "dataExport": {
        "enabled": false
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalProcess"
        }
      }
    },
    "cronjob": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "workflow": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "process": {
    "publicationDecisionCallback": {
      "target": {
        "moduleName": "cms",
        "connectionName": "cmsStaged",
        "connectionType": "abstract",
        "timeoutMs": 10000,
        "maxAttempts": 2
      }
    },
    "actionAdapters": {
      "allowedActions": [
        {
          "moduleName": "nodics.process",
          "operation": "noop",
          "description": "Safe no-op adapter for framework smoke tests and beginner demos"
        },
        {
          "moduleName": "editorial",
          "operation": "applyDecision",
          "service": "DefaultKickoffEditorialProcessAdapterService",
          "method": "applyDecision",
          "description": "Delegates Editorial approval decisions to WCMS"
        },
        {
          "moduleName": "editorial",
          "operation": "publishApproved",
          "service": "DefaultKickoffEditorialProcessAdapterService",
          "method": "publishApproved",
          "description": "Delegates approved Editorial publication to WCMS"
        },
        {
          "moduleName": "cms",
          "operation": "applyPublicationDecision",
          "service": "DefaultProcessPublicationDecisionCallbackService",
          "method": "applyPublicationDecision",
          "description": "Returns publication decisions to WCMS Staged"
        }
      ]
    }
  },
  "editorialProcessAdapter": {
    "wcmsBaseUrl": "http://wcms-staged:4312"
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
        "httpPort": 4330,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4331
      },
      "abstractEndpoint": {
        "httpHost": "process",
        "httpPort": 4330,
        "httpsHost": "process",
        "httpsPort": 4331
      }
    }
  }
};
