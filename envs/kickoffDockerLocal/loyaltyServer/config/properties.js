/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares loyaltyServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
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
      "kickoffDockerLocal",
      "loyaltyServer",
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
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "LOYALTY"
      ],
      "contributions": []
    }
  },
  "apiExposure": {
    "categories": {
      "serviceRegistry": {
        "enabled": true
      },
      "dataImport": {
        "enabled": true
      },
      "loyaltyInternal": {
        "enabled": true
      }
    }
  },
  "loyalty": {
    "capabilities": {
      "wallet": true,
      "rewardType": true,
      "walletReward": true,
      "ledger": true,
      "earning": true,
      "reservation": true,
      "redemption": true,
      "spendPolicy": true
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": "kickoffDockerLocalLoyalty"
        }
      }
    },
    "circa.ewaste": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyCore": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyProgram": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyRewardType": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyWallet": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyLedger": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyReservation": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyRedemption": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "loyaltyApi": {
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
    "engagement": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagement"
      ]
    },
    "engagementServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagementServer"
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
        "httpPort": 4360,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4361
      },
      "abstractEndpoint": {
        "httpHost": "loyalty",
        "httpPort": 4360,
        "httpsHost": "loyalty",
        "httpsPort": 4361
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "loyalty": "loyalty.operational"
    }
  }
};
