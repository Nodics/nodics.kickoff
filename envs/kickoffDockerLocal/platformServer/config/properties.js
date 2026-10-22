/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/platformServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/platformServer */
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
      "agora.apparel",
      "agora.electronics",
      "agora.telco",
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
    }
  },
  "backofficeApplicationInitialization": {
    "operatorOrigin": "http://localhost:4100"
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4300,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4301
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5300
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
  }
};
