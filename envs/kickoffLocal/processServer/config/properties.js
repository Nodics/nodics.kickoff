/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module kickoffLocal/processServer/config/properties
 * @description Defines only local Process server coordinates for the Kickoff reference environment.
 * @layer environment-server-config
 * @owner nodics.kickoff
 * @override Customer projects may change local host/port/topology without copying framework Process defaults.
 */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-process-1",
    "remoteModules": [
      "profile",
      "backoffice",
      "editorial",
      "cms",
      "rulesApi"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_LOCAL_PROCESS_API_KEY",
      "fallback": null
    }
  },
  "httpHardening": {
    "cors": {
      "originEndpointOverrides": {
        "nexus": false
      }
    }
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
    "modules": {
      "cronjob": true,
      "import": true,
      "system": true,
      "token": true,
      "validator": true,
      "workflow": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
        "DefaultCatalogService",
        "DefaultEmsFailedMessagesService",
        "DefaultIndexService",
        "DefaultIndexerLogService",
        "DefaultIndexerService",
        "DefaultSearchService",
        "DefaultWorkflow2SchemaService"
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
      "kickoffInt"
    ]
  },
  "runtimeRole": {
    "code": "PROCESS",
    "publication": "OPERATIONAL"
  },
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localProcessWorkflowFoundation": {
          "enabled": true,
          "label": "Local Process and Workflow foundation",
          "description": "Install required process definitions and workflow releases used by publication approvals and governed operator tasks.",
          "completionMessage": "The Local Process and Workflow foundation is ready. Approval flows can be created for publishable data.",
          "steps": {
            "$config": "replace",
            "value": [
              {
                "dataType": "init"
              }
            ]
          }
        }
      },
      "contributions": {
        "$config": "replace",
        "value": [
          {
            "moduleName": "cms",
            "sections": [
              "cmsPublicationApproval"
            ]
          },
          {
            "moduleName": "rulesApi",
            "sections": [
              "rulesPolicyApproval"
            ]
          }
        ]
      },
      "installers": {
        "PROCESS_DEFINITION": "DefaultProcessDefinitionContributionService"
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalProcess"
        }
      }
    },
    "cronjob": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalCron"
        }
      }
    },
    "workflow": {}
  },
  "process": {
    "publicationDecisionCallback": {
      "target": {
        "connectionName": "cmsStaged"
      }
    },
    "actionAdapters": {
      "allowedActions": {
        "$config": "replace",
        "value": [
          "nodics.process.noop",
          "editorial.applyDecision",
          "editorial.publishApproved",
          "cms.applyPublicationDecision",
          "rulesApi.applyDecision"
        ]
      }
    },
    "remoteActions": {
      "targets": {
        "editorial": {
          "connectionName": "cmsStaged"
        },
        "rulesApi": {
          "connectionName": "rulesApi"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4330,
        "httpsPort": 4331
      }
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      }
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      }
    },
    "rulesApi": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.endpoint"
      }
    },

    "cmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.endpoint"
      }
    }
  },
  "tooling": {
    "runtime": {
      "code": "process",
      "script": "start:process",
      "order": 2
    }
  }
};
