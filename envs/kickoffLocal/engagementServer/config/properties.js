/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module kickoffLocal/engagementServer/config/properties
 * @description Selects customer email policy and private SMTP deployment bindings.
 * @owner nodics.kickoff
 * @layer configuration
 * @override Later deployment layers may override effective Communication keys;
 * customer message policy belongs to kickoffCore, not this server.
 */
module.exports = {
  // Sending-runtime bindings only. Missing enablement or credentials never sends mail.
  "communication": {
    "providers": { "EMAIL": { "type": "SMTP" } },
    "senders": {
      "kickoffEmployeeMail": {
        "address": { "$config": "env", "name": "NODICS_EMPLOYEE_EMAIL_SENDER", "fallback": null },
        "name": "Nodics employee access (test)"
      }
    }
  },
  "smtpCommsProvider": {
    "enabled": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_ENABLED", "type": "boolean", "fallback": false },
    "mode": "SMTP",
    "sandboxOnly": false,
    "credentialReference": "kickoffEmployeeMail",
    "senderReference": "kickoffEmployeeMail",
    "allowedRecipients": { "$config": "replace", "value": [
      "admin@axis-onboarding-acceptance.test",
      "operator@axis-onboarding-acceptance.test",
      "applicant@axis-onboarding-acceptance.test",
      "reviewer@axis-onboarding-acceptance.test",
      "reviewer2@axis-onboarding-acceptance.test",
      "reviewer3@axis-onboarding-acceptance.test"
    ] },
    "smtp": {
      "host": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_HOST" },
      "port": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_PORT", "type": "number" },
      "secure": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_SECURE", "type": "boolean" },
      "requireTLS": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_REQUIRE_TLS", "type": "boolean", "fallback": true },
      "allowInsecureLoopback": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_ALLOW_INSECURE_LOOPBACK", "type": "boolean", "fallback": false }
    }
  },
  "communicationVerification": {
    "stored": {
      "enabled": { "$config": "env", "name": "NODICS_EMPLOYEE_VERIFICATION_STORE_ENABLED", "type": "boolean", "fallback": false },
      "trustedSourceModules": { "$config": "replace", "value": ["profile"] }
    }
  },
  "runtimeConfiguration": {
    "credentials": {
      "kickoffEmployeeMail": {
        "user": { "$config": "ref", "path": "communication.senders.kickoffEmployeeMail.address" },
        "pass": { "$config": "env", "name": "NODICS_EMPLOYEE_SMTP_PASSWORD", "fallback": null }
      }
    }
  },
  "activeModules": {
    "compositions": { "employeeMail": { "selection": "employee" } },
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
