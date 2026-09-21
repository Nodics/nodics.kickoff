/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module kickoffLocal/loyaltyServer/config/properties @description Defines isolated local Loyalty coordinates and runtime configuration. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own database, provider, and endpoint configuration. */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-loyalty-1",
    "remoteModules": [
      "profile",
      "backoffice"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_LOYALTY_API_KEY",
      "fallback": null
    }
  },
  "localResetProvider": {
    "requiredServiceNames": [
      "DefaultLoyaltyWalletService",
      "DefaultRewardLedgerEntryService"
    ],
    "modules": {
      "import": true,
      "system": true,
      "token": true,
      "validator": true,
      "loyaltyCore": true,
      "loyaltyProgram": true,
      "loyaltyRewardType": true,
      "loyaltyWallet": true,
      "loyaltyLedger": true,
      "loyaltyRedemption": true,
      "loyaltyReservation": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
        "DefaultCatalogService",
        "DefaultClassConfigurationService",
        "DefaultConfigurationActivationLogService",
        "DefaultConfigurationActivationRequestService",
        "DefaultEmsFailedMessagesService",
        "DefaultPipelineService",
        "DefaultRouterConfigurationService",
        "DefaultSchemaAccessPolicyService",
        "DefaultSchemaConfigurationService",
        "DefaultWorkflow2SchemaService",
        "DefaultPublicationAuditService",
        "DefaultPublicationRequestService",
        "DefaultIndexService",
        "DefaultIndexerLogService",
        "DefaultIndexerService",
        "DefaultSearchService"
      ]
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
      "redisCache"
    ]
  },
  "runtimeRole": {
    "code": "LOYALTY",
    "publication": "OPERATIONAL"
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "loyalty": "loyalty.operational"
    }
  },
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localLoyaltyFoundation": {
          "enabled": true,
          "label": "Local Loyalty foundation",
          "description": "Install Loyalty core releases for wallet, reward type, wallet reward, ledger, reservation, redemption, earning, and spend-policy validation.",
          "completionMessage": "The Local Loyalty foundation is ready. Operators can validate wallets, reward balances, ledgers, reservations, and redemptions.",
          "steps": {
            "$config": "replace",
            "value": [
              {
                "dataType": "core"
              }
            ]
          }
        }
      }
    }
  },
  "loyalty": {},
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalLoyalty"
        }
      }
    },
    "loyaltyCore": {},
    "loyaltyWallet": {},
    "loyaltyRewardType": {},
    "loyaltyLedger": {},
    "loyaltyEarning": {},
    "loyaltyReservation": {},
    "loyaltyRedemption": {},
    "loyaltySpendPolicy": {}
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4360,
        "httpsPort": 4361
      }
    },
    "profile": {
      "remoteOnly": true
    },
    "backoffice": {
      "remoteOnly": true
    }
  },
  "tooling": {
    "runtime": {
      "code": "loyalty",
      "script": "start:loyalty",
      "order": 5
    }
  }
};
