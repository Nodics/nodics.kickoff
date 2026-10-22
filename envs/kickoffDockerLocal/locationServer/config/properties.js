/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/locationServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/locationServer */
module.exports = {
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalLocation"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4380,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4381
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5380
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
};
