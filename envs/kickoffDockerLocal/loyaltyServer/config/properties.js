/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/loyaltyServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/loyaltyServer */
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
      "loyaltyCore",
      "loyaltyProgram",
      "loyaltyRewardType",
      "loyaltyWallet",
      "loyaltyLedger",
      "loyaltyReservation",
      "loyaltyRedemption",
      "loyaltyApi"
    ]
  },
  "runtimeRole": {
    "code": "LOYALTY",
    "publication": "OPERATIONAL"
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalLoyalty"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4360,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4361
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5360
      },
      "abstractEndpoint": {
        "httpHost": "loyalty",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "loyalty",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "loyalty": "loyalty.operational"
    }
  }
};
