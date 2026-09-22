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
  "communication": {
    "trustedSourceModules": [
      "eWaste"
    ],
    "providers": {
      "TELEGRAM": {
        "code": "telegram",
        "service": "DefaultTelegramCommunicationProviderService",
        "credentialReferences": [
          "telegram.bot.circa"
        ],
        "timeoutMilliseconds": 10000
      }
    },
    "templates": {
      "WASTE_REVIEW_OUTCOME_V1": {
        "code": "WASTE_REVIEW_OUTCOME_V1",
        "version": 2,
        "status": "ACTIVE",
        "purpose": "WASTE_REVIEW_OUTCOME",
        "sourceModules": [
          "eWaste"
        ],
        "channels": [
          "IN_APP",
          "TELEGRAM"
        ],
        "declaredVariables": [
          "submissionCode",
          "status",
          "comment",
          "detailUrl"
        ],
        "subjectTemplate": "Recycling review outcome",
        "bodyTemplate": "Submission {{submissionCode}}: {{status}}.\nReviewer comment: {{comment}}\nView complete item details: {{detailUrl}}"
      }
    }
  },
  "engagement": {
    "capabilities": {
      "testimonial": true,
      "customerReview": true,
      "customerFeedback": true
    }
  },
  "customerFeedback": {
    "enabled": true
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
