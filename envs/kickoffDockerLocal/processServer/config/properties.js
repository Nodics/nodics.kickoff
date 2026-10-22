/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/processServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/processServer */
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
      "workflow",
      "cronjob"
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
          "databaseName": "kickoffDockerLocalProcess"
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
        "httpHost": "0.0.0.0",
        "httpPort": 4330,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4331
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5330
      },
      "abstractEndpoint": {
        "httpHost": "process",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "process",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  }
};
