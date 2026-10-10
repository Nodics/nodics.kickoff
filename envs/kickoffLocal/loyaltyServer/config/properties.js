/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

module.exports = {
  "databaseTransactions": { "enabled": true, "failClosed": true, "maximumCommitTimeMs": 10000 },
  "loyalty": {
    "transactions": { "enabled": true },
    "sampleCredits": {
      "enabled": true,
      "allowedEnvironments": { "$config": "replace", "value": ["kickoffLocal"] },
      "approvedSources": { "$config": "replace", "value": [{
        "environmentCode": "kickoffLocal", "enterpriseCode": "GREENPERKS_ONLINE",
        "releaseCode": "circa.ewaste:circaLocalDemoCredit", "version": "0.0.1",
        "checksum": "991a3f063caeaef83ada14a426c824650bdc5eef9c9cb43a5872ef2545e1c1d8",
        "instructionCode": "CIRCA_LOCAL_DEMO_BUYER_POINTS",
        "approvalReference": "CIRCA_LOCAL_DEMO_POINT_CREDIT_20261009"
      }] }
    },
    "api": { "readEvidence": {
    "callers": { "$config": "replace", "value": [{
      "tenant": "default", "principalEnterpriseCode": "default", "enterpriseCode": "GREENPERKS_ONLINE",
      "serviceId": "apiAdmin", "projectCode": "nodics.kickoff", "environmentCode": "kickoffLocal",
      "serverCode": "wasteServer", "instanceCode": "kickoff-local-waste-1",
      "assignmentCode": "kickoff-local-waste-runtime-deployment"
    }] }
  } } },
  "publish": { "setup": { "observation": { "enabled": true } } },
  "activeModules": {
    "groups": [],
    "modules": [
      "publish",
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
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffLocalLoyalty"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4360,
        "httpsPort": 4361
      }
    }
  }
};
