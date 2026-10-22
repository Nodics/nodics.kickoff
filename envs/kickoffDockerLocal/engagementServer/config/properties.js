/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/engagementServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/engagementServer */
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
      "nexus.web",
      "commsCore",
      "commsSchema",
      "commsVerification",
      "localCommsProvider",
      "commsApi",
      "engagementCore",
      "customerReview",
      "customerFeedback",
      "testimonial",
      "contactSubmission",
      "engagementComms",
      "engagementApi"
    ]
  },
  "runtimeRole": {
    "code": "ENGAGEMENT",
    "publication": "OPERATIONAL"
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalEngagement"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4340,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4341
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5340
      },
      "abstractEndpoint": {
        "httpHost": "engagement",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "engagement",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "publish": "engagement.operational"
    }
  }
};
