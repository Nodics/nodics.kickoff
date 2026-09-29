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
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nexus.web",
      "redisCache"
    ]
  },
  "runtimeRole": {
    "code": "ENGAGEMENT",
    "publication": "OPERATIONAL"
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "publish": "engagement.operational"
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalEngagement"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4340,
        "httpsPort": 4341
      }
    }
  }
};
