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
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultContactRequestService",
      "DefaultCommsIntentService",
    ],
    serviceNames: [
      "DefaultCatalogService",
      "DefaultClassConfigurationService",
      "DefaultCommsDeliveryAttemptService",
      "DefaultCommsInboxMessageService",
      "DefaultCommsIntentService",
      "DefaultCommsSuppressionService",
      "DefaultCommsTemplateService",
      "DefaultCommsTemplateVersionService",
      "DefaultCommsVerificationChallengeService",
      "DefaultConfigurationActivationLogService",
      "DefaultConfigurationActivationRequestService",
      "DefaultConfigurationService",
      "DefaultContactAttemptService",
      "DefaultContactCorrespondenceService",
      "DefaultContactHandoffService",
      "DefaultContactRequestService",
      "DefaultContactResolutionService",
      "DefaultContactVerificationService",
      "DefaultCronJobLogService",
      "DefaultCronJobService",
      "DefaultCustomerFeedbackClassificationService",
      "DefaultCustomerFeedbackFollowUpService",
      "DefaultCustomerFeedbackHandoffService",
      "DefaultCustomerFeedbackInsightService",
      "DefaultCustomerFeedbackResolutionService",
      "DefaultCustomerFeedbackService",
      "DefaultCustomerReviewAbuseReportService",
      "DefaultCustomerReviewAcquisitionEventService",
      "DefaultCustomerReviewAggregateService",
      "DefaultCustomerReviewAppealService",
      "DefaultCustomerReviewAuthenticityEvidenceService",
      "DefaultCustomerReviewHelpfulnessService",
      "DefaultCustomerReviewMigrationService",
      "DefaultCustomerReviewModerationService",
      "DefaultCustomerReviewProjectionService",
      "DefaultCustomerReviewRequestService",
      "DefaultCustomerReviewResponseService",
      "DefaultCustomerReviewService",
      "DefaultCustomerReviewSessionService",
      "DefaultCustomerReviewSyndicationService",
      "DefaultCustomerReviewVersionService",
      "DefaultDataInstallationService",
      "DefaultEmsFailedMessagesService",
      "DefaultEngagementActivityService",
      "DefaultEngagementAssignmentService",
      "DefaultEngagementAutomationDecisionService",
      "DefaultEngagementAutomationEvaluationService",
      "DefaultEngagementBatchRunService",
      "DefaultEngagementClassificationService",
      "DefaultEngagementCompatibilityRecordService",
      "DefaultEngagementConsentService",
      "DefaultEngagementDashboardSnapshotService",
      "DefaultEngagementDeliveryAttemptService",
      "DefaultEngagementExportEvidenceService",
      "DefaultEngagementFormDefinitionService",
      "DefaultEngagementFormVersionService",
      "DefaultEngagementIntegrationReferenceService",
      "DefaultEngagementPrivacyCaseService",
      "DefaultEngagementPublicationReferenceService",
      "DefaultEngagementRecoveryCheckpointService",
      "DefaultEngagementRelationService",
      "DefaultEngagementRepairCaseService",
      "DefaultEngagementSubmissionService",
      "DefaultEngagementUnifiedQueueItemService",
      "DefaultEventListenerService",
      "DefaultImportDefinitionService",
      "DefaultImportRunService",
      "DefaultIndexService",
      "DefaultIndexerLogService",
      "DefaultIndexerService",
      "DefaultInterceptorService",
      "DefaultPipelineService",
      "DefaultProcessAuditEventService",
      "DefaultProcessDefinitionService",
      "DefaultProcessDefinitionVersionService",
      "DefaultProcessIncidentService",
      "DefaultProcessInstanceService",
      "DefaultProcessTaskService",
      "DefaultProcessTriggerService",
      "DefaultPublicationAuditService",
      "DefaultPublicationRequestService",
      "DefaultRouterConfigurationService",
      "DefaultSchemaAccessPolicyService",
      "DefaultSchemaConfigurationService",
      "DefaultSearchService",
      "DefaultTestimonialCandidateService",
      "DefaultTestimonialConsentService",
      "DefaultTestimonialProjectionService",
      "DefaultTestimonialVersionService",
      "DefaultTokenService",
      "DefaultValidatorService",
      "DefaultWorkflow2SchemaService",
    ],
  },
  activeModules: {
    groups: [],
    modules: [
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nexus.web",
      "kickoffLocal",
      "engagementServer",
    ],
  },
  runtimeRole: { code: "ENGAGEMENT", publication: "OPERATIONAL" },
  runtimeAuthorityContexts: { modules: { publish: "engagement.operational" } },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["ENGAGEMENT"],
      initializationProfiles: {
        localEngagementFoundation: {
          enabled: true,
          label: "Local Engagement foundation",
          description:
            "Install Engagement core and sample communication releases for local contact, testimonial, review, feedback, and notification validation.",
          completionMessage:
            "The Local Engagement foundation is ready. Operators can validate engagement journeys with governed templates and runtime data.",
          steps: [{ dataType: "core" }, { dataType: "sample" }],
        },
      },
    },
  },
  communication: {
    trustedSourceModules: ["eWaste"],
    providers: {
      TELEGRAM: {
        code: "telegram",
        service: "DefaultTelegramCommunicationProviderService",
        credentialReferences: ["CIRCA_TELEGRAM_BOT_TOKEN"],
        timeoutMilliseconds: 10000,
      },
    },
    templates: {
      WASTE_REVIEW_OUTCOME_V1: {
        code: "WASTE_REVIEW_OUTCOME_V1",
        version: 2,
        status: "ACTIVE",
        purpose: "WASTE_REVIEW_OUTCOME",
        sourceModules: ["eWaste"],
        channels: ["IN_APP", "TELEGRAM"],
        declaredVariables: ["submissionCode", "status", "comment", "detailUrl"],
        subjectTemplate: "Recycling review outcome",
        bodyTemplate:
          "Submission {{submissionCode}}: {{status}}.\nReviewer comment: {{comment}}\nView complete item details: {{detailUrl}}",
      },
    },
  },
  engagement: {
    capabilities: {
      contactSubmission: true,
      testimonial: true,
      customerReview: true,
      customerFeedback: true,
    },
  },
  customerFeedback: { enabled: true },
  database: {
    default: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
    commsSchema: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
    contactSubmission: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
    customerFeedback: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
    customerReview: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
    engagementCore: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
    testimonial: {
      mongodb: { master: { databaseName: "kickoffLocalEngagement" } },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4340,
        httpsHost: "127.0.0.1",
        httpsPort: 4341,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4340,
        httpsHost: "localhost",
        httpsPort: 4341,
      },
    },
    profile: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
    },
    backoffice: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
    },
    process: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4330,
        httpsHost: "127.0.0.1",
        httpsPort: 4331,
      },
    },
  },
};
