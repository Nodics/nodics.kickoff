/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module kickoffLocal/processServer/config/properties @description Selects Local Process deployment and explicit owner callback/start capabilities without granting authority or qualifying their callers. @owner nodics.kickoff @layer configuration */
module.exports = {
  // Explicit Local selection of nDatabase's existing master policy and Workflow
  // owner. Unset bindings omit these leaves, preserving inherited policy.
  commandReceipts: {
    enabled: {
      $config: "env",
      name: "NODICS_LOCAL_COMMAND_RECEIPTS_ENABLED",
      type: "boolean",
    },
    owners: {
      workflow: {
        $config: "env",
        name: "NODICS_LOCAL_WORKFLOW_RECEIPTS_ENABLED",
        type: "boolean",
      },
    },
  },
  runtimeConfigurationSchemas: {
    telegramDelivery: {
      fields: [{ credentialReference: "telegram.bot.circa" }],
    },
  },
  publish: {
    setup: {
      observation: {
        enabled: true,
      },
    },
  },
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
      "nexus.web",
    ],
    compositions: {
      employeeMail: {
        selection: "employee",
      },
    },
  },
  runtimeRole: {
    code: "PROCESS",
    publication: "OPERATIONAL",
  },
  // Explicit Local review scenario: provisioning and activation remain operator opt-ins.
  // Process metadata and the inactive Cron job are created through their owning APIs.
  cronjob: {
    scheduleDrafts: {
      enabled: {
        $config: "env",
        name: "NODICS_LOCAL_REVIEW_CRON_ENABLED",
        type: "boolean",
        fallback: false,
      },
      activationEnabled: {
        $config: "env",
        name: "NODICS_LOCAL_REVIEW_CRON_ENABLED",
        type: "boolean",
        fallback: false,
      },
      targets: [
        {
          code: "localScheduledReview",
          label: "Local scheduled review",
          tenantCode: "default",
          enterpriseCode: "default",
          runOnNode: "node0",
          triggerCode: {
            $config: "env",
            name: "NODICS_LOCAL_REVIEW_TRIGGER_CODE",
            fallback: null,
          },
          expressions: ["0 * * * * *"],
          context: { reviewPurpose: "Scheduled local review" },
        },
      ],
    },
  },
  tooling: {
    acceptance: {
      cronJobExecution: {
        contractVersion: 1,
        approvalReference: {
          $config: "env",
          name: "NODICS_LOCAL_REVIEW_APPROVAL_REFERENCE",
          fallback: null,
        },
        tenant: "default",
        runtimeEnterpriseCode: "default",
        jobCode: {
          $config: "env",
          name: "NODICS_LOCAL_REVIEW_JOB_CODE",
          fallback: null,
        },
        expectedExpression: "0 * * * * *",
      },
    },
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
    commsSchema: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    commsCore: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    commsVerification: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    localCommsProvider: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    smtpCommsProvider: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    smsCommsProvider: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    commsApi: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    "nodics.communication": {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    engagementCore: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    customerReview: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    customerFeedback: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    testimonial: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    contactSubmission: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    engagementComms: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    engagementApi: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    "nodics.engagement": {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    "nexus.web": {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
    nexus: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalEngagement",
        },
      },
    },
  },
  process: {
    runtime: {
      deadLetterRequeue: {
        enabled: true,
      },
      internalStarts: {
        enabled: true,
        allowedDefinitions: {
          $config: "replace",
          value: ["profileEmployeeApplicationReview"],
        },
      },
    },
    remoteActions: {
      runtimeEnterpriseScope: {
        enabled: true,
        enterpriseCodes: [
          "GREENPERKS_ONLINE",
          "GREENPERKS_RETAIL",
          "RENEWWORKS_REPAIR_REUSE",
          "LOOPCYCLE_RECYCLING",
        ],
      },
      targets: {
        digitalCore: {
          connectionName: "commerce",
        },
        profile: {
          connectionName: "profile",
        },
        product: {
          connectionName: "commerceStaged",
        },
        pricing: {
          connectionName: "commerceStaged",
        },
        promotion: {
          connectionName: "commerceStaged",
        },
        inventory: {
          connectionName: "commerceStaged",
        },
        tax: {
          connectionName: "commerceStaged",
        },
        media: {
          connectionName: "cmsStaged",
        },
        editorial: {
          connectionName: "cmsStaged",
        },
        rulesApi: {
          connectionName: "rulesApi",
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
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4330,
        httpsPort: 4331,
      },
    },
  },
  communication: {
    trustedSourceModules: {
      $config: "replace",
      value: ["eWaste", "profile", "digitalCore"],
    },
    sourceEligibilityTransport: {
      allowInsecureLoopback: true,
    },
    providers: {
      TELEGRAM: {
        type: "TELEGRAM",
        credentialReferences: ["telegram.bot.circa"],
      },
      EMAIL: {
        type: "SMTP",
      },
    },
    templateResources: {
      modules: {
        eWaste: true,
        digitalCore: true,
      },
      selections: {
        WASTE_REVIEW_OUTCOME_V1: true,
        DIGITAL_COUPON_EXPIRING_IN_APP: true,
      },
    },
    senders: {
      kickoffEmployeeMail: {
        address: {
          $config: "env",
          name: "NODICS_EMPLOYEE_EMAIL_SENDER",
          fallback: null,
        },
        name: "Nodics employee access (test)",
      },
    },
  },
  smtpCommsProvider: {
    enabled: {
      $config: "env",
      name: "NODICS_EMPLOYEE_SMTP_ENABLED",
      type: "boolean",
      fallback: false,
    },
    mode: "SMTP",
    sandboxOnly: false,
    credentialReference: "kickoffEmployeeMail",
    senderReference: "kickoffEmployeeMail",
    allowedRecipients: {
      $config: "replace",
      value: [
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_2" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_3" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_4" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_5" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_6" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_7" },
        { $config: "env", name: "NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_8" },
      ],
    },
    smtp: {
      host: {
        $config: "env",
        name: "NODICS_EMPLOYEE_SMTP_HOST",
      },
      port: {
        $config: "env",
        name: "NODICS_EMPLOYEE_SMTP_PORT",
        type: "number",
      },
      secure: {
        $config: "env",
        name: "NODICS_EMPLOYEE_SMTP_SECURE",
        type: "boolean",
      },
      requireTLS: {
        $config: "env",
        name: "NODICS_EMPLOYEE_SMTP_REQUIRE_TLS",
        type: "boolean",
        fallback: true,
      },
      allowInsecureLoopback: {
        $config: "env",
        name: "NODICS_EMPLOYEE_SMTP_ALLOW_INSECURE_LOOPBACK",
        type: "boolean",
        fallback: false,
      },
    },
  },
  communicationVerification: {
    stored: {
      enabled: {
        $config: "env",
        name: "NODICS_EMPLOYEE_VERIFICATION_STORE_ENABLED",
        type: "boolean",
        fallback: false,
      },
      trustedSourceModules: {
        $config: "replace",
        value: ["profile"],
      },
    },
  },
  runtimeConfiguration: {
    credentials: {
      kickoffEmployeeMail: {
        user: {
          $config: "ref",
          path: "communication.senders.kickoffEmployeeMail.address",
        },
        pass: {
          $config: "env",
          name: "NODICS_EMPLOYEE_SMTP_PASSWORD",
          fallback: null,
        },
      },
    },
  },
  runtimeAuthorityContexts: {
    modules: {
      publish: "engagement.operational",
    },
  },
  credentials: {
    "telegram.bot.circa": {
      value: { $config: "env", name: "NODICS_TELEGRAM_BOT_TOKEN", type: "string", fallback: null },
      label: "Circa Telegram bot token",
      status: "CONFIGURED",
      secret: true,
      credentialKind: "BOT_TOKEN",
    },
  },
  httpHardening: {
    cors: {
      originEndpointOverrides: {
        nexus: false,
      },
    },
  },
  engagement: {
    capabilities: {
      testimonial: true,
      customerReview: true,
      customerFeedback: true,
    },
  },
  customerFeedback: {
    enabled: true,
  },
  data: {
    dataReleases: {
      contributions: {
        $config: "keyed",
        key: "moduleName",
        entries: [
          { moduleName: "cms", sections: ["cmsPublicationApproval"] },
          { moduleName: "product", sections: ["productPublicationWorkflow"] },
          { moduleName: "pricing", sections: ["pricingPublicationWorkflow"] },
          { moduleName: "tax", sections: ["taxPublicationWorkflow"] },
          { moduleName: "promotion", sections: ["promotionPublicationWorkflow"] },
          { moduleName: "inventory", sections: ["inventoryPublicationWorkflow"] },
          { moduleName: "media", sections: ["mediaPublicationWorkflow"] },
          {
            moduleName: "editorial",
            sections: { $config: "replace", value: ["editorialWorkflows"] },
          },
          {
            moduleName: "digitalCore",
            sections: { $config: "replace", value: ["couponReminderWorkflow", "couponReminderTrigger", "couponReminderSchedule"] },
          },
        ],
      },
    },
  },
};
