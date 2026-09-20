/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module kickoffLocal/engagementServer/config/properties @description Enables the contact experience and local coordinates only for the reference Engagement server. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own feature, database, provider, and endpoint configuration. */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-engagement-1",
    "remoteModules": [
      "profile",
      "backoffice"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_LOCAL_ENGAGEMENT_API_KEY",
      "fallback": null
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ],
    "allowMissingModelServices": true,
    "requiredServiceNames": [
      "DefaultContactRequestService",
      "DefaultCommsIntentService"
    ],
    "modules": {
      "commsSchema": true,
      "contactSubmission": true,
      "customerFeedback": true,
      "customerReview": true,
      "engagementCore": true,
      "import": true,
      "publish": true,
      "system": true,
      "testimonial": true,
      "token": true,
      "validator": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
        "DefaultCatalogService",
        "DefaultClassConfigurationService",
        "DefaultConfigurationActivationLogService",
        "DefaultConfigurationActivationRequestService",
        "DefaultCronJobLogService",
        "DefaultCronJobService",
        "DefaultEmsFailedMessagesService",
        "DefaultIndexService",
        "DefaultIndexerLogService",
        "DefaultIndexerService",
        "DefaultPipelineService",
        "DefaultProcessAuditEventService",
        "DefaultProcessDefinitionService",
        "DefaultProcessDefinitionVersionService",
        "DefaultProcessIncidentService",
        "DefaultProcessInstanceService",
        "DefaultProcessTaskService",
        "DefaultProcessTriggerService",
        "DefaultRouterConfigurationService",
        "DefaultSchemaAccessPolicyService",
        "DefaultSchemaConfigurationService",
        "DefaultSearchService",
        "DefaultWorkflow2SchemaService"
      ]
    }
  },
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
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localEngagementFoundation": {
          "enabled": true,
          "label": "Local Engagement foundation",
          "description": "Install Engagement core and sample communication releases for local contact, testimonial, review, feedback, and notification validation.",
          "completionMessage": "The Local Engagement foundation is ready. Operators can validate engagement journeys with governed templates and runtime data.",
          "steps": {
            "$config": "replace",
            "value": [
              {
                "dataType": "core"
              },
              {
                "dataType": "sample"
              }
            ]
          }
        }
      }
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
          "CIRCA_TELEGRAM_BOT_TOKEN"
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
    },
    "commsSchema": {},
    "contactSubmission": {},
    "customerFeedback": {},
    "customerReview": {},
    "engagementCore": {},
    "testimonial": {}
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4340,
        "httpsPort": 4341
      }
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.endpoint"
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
  "tooling": {
    "runtime": {
      "code": "engagement",
      "script": "start:engagement",
      "order": 4
    }
  }
};
