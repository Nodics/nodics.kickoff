/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares engagementServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
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
      "kickoffDockerLocal",
      "engagementServer",
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
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "ENGAGEMENT"
      ],
      "contributions": []
    }
  },
  "engagement": {
    "capabilities": {
      "contactSubmission": true,
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
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalEngagement"
        }
      }
    },
    "commsCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "commsSchema": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "commsVerification": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "localCommsProvider": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "commsApi": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "engagementCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "customerReview": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "customerFeedback": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "testimonial": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "contactSubmission": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "engagementComms": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "engagementApi": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "servers": {
    "platform": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platform"
      ]
    },
    "platformServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platformServer"
      ]
    },
    "profile": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "profile"
      ]
    },
    "backoffice": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "backoffice"
      ]
    },
    "wcmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStaged"
      ]
    },
    "wcmsStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStagedServer"
      ]
    },
    "cmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsStaged"
      ]
    },
    "wcmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnline"
      ]
    },
    "wcmsOnlineServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnlineServer"
      ]
    },
    "cmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsOnline"
      ]
    },
    "process": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "process"
      ]
    },
    "processServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "processServer"
      ]
    },
    "commerce": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerce"
      ]
    },
    "commerceServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceServer"
      ]
    },
    "commerceStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStaged"
      ]
    },
    "commerceStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStagedServer"
      ]
    },
    "loyalty": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyalty"
      ]
    },
    "loyaltyServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyaltyServer"
      ]
    },
    "waste": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "waste"
      ]
    },
    "wasteServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wasteServer"
      ]
    },
    "location": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "location"
      ]
    },
    "locationServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "locationServer"
      ]
    },
    "wcms": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcms"
      ]
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4340,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4341
      },
      "abstractEndpoint": {
        "httpHost": "engagement",
        "httpPort": 4340,
        "httpsHost": "engagement",
        "httpsPort": 4341
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "publish": "engagement.operational"
    }
  }
};
