/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module kickoffLocal/processServer/config/properties @description Selects Local Process deployment and explicit owner callback/start capabilities without granting authority or qualifying their callers. @owner nodics.kickoff @layer configuration */
module.exports = {
  cronjob: {
    scheduleDrafts: {
      enabled: true,
      activationEnabled: true,
      targets: [
        {
          code: "circaCouponExpiryReminder",
          label: "Existing E07 BOTH coupon reminder",
          tenantCode: "default",
          enterpriseCode: "default",
          runOnNode: "node0",
          triggerCode: "circaCouponExpiryReminderTrigger",
          expressions: ["0 0 * * * *"],
          context: {
            enterpriseCode: "GREENPERKS_ONLINE",
            entitlementCode:
              "digitalEntitlement:89b1e6eec0696d231cb391663f31b8bd143c32bc",
          },
        },
      ],
    },
  },
  publish: { setup: { observation: { enabled: true } } },
  activeModules: {
    groups: [],
    modules: [
      "publish",
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "workflow",
      "cronjob",
    ],
  },
  runtimeRole: {
    code: "PROCESS",
    publication: "OPERATIONAL",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalProcess",
        },
      },
    },
    cronjob: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalCron",
        },
      },
    },
  },
  process: {
    runtime: {
      internalStarts: {
        enabled: true,
        allowedDefinitions: {
          $config: "replace",
          value: ["profileEmployeeApplicationReview"],
        },
      },
    },
    publicationDecisionCallback: {
      target: {
        connectionName: "cmsStaged",
      },
    },
    actionAdapters: {
      allowedActions: {
        $config: "replace",
        value: [
          "nodics.process.noop",
          "editorial.applyDecision",
          "editorial.publishApproved",
          "cms.applyPublicationDecision",
          "rulesApi.applyDecision",
          "product.applyPublicationDecision",
          "pricing.applyPublicationDecision",
          "promotion.applyPublicationDecision",
          "inventory.applyPublicationDecision",
          "tax.applyPublicationDecision",
          "media.applyPublicationDecision",
          "profile.applyEmployeeApplicationDecision",
          "digitalCore.couponExpirySweep",
        ],
      },
    },
    remoteActions: {
      targets: {
        digitalCore: { connectionName: "commerce" },
        profile: { connectionName: "profile" },
        product: { connectionName: "commerceStaged" },
        pricing: { connectionName: "commerceStaged" },
        promotion: { connectionName: "commerceStaged" },
        inventory: { connectionName: "commerceStaged" },
        tax: { connectionName: "commerceStaged" },
        media: { connectionName: "cmsStaged" },
        editorial: {
          connectionName: "cmsStaged",
        },
        rulesApi: {
          connectionName: "rulesApi",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4330,
        httpsPort: 4331,
      },
    },
  },
};
