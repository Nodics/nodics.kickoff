/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

module.exports = {
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
    }
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
    }
  }
};
