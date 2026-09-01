/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation hierarchy dashboards. */
module.exports = {
  "record0": {
    "code": "kickoffDocsDashboardProduct",
    "ownerType": "PRODUCT",
    "ownerCode": "kickoffDocumentationProduct",
    "title": "Nodics Kickoff Documentation",
    "summary": "Landing content for the Kickoff customer-reference documentation catalogue, including setup, runtime, publication, qualification, customization, and functional journeys.",
    "contentArea": {
      "intent": "Help customer teams and implementation partners choose the correct project-owned journey before opening detailed implementation pages."
    },
    "cards": [
      {
        "code": "discover-kickoff",
        "title": "Discover Kickoff",
        "summary": "Project identity, ownership boundaries, and the business reason Kickoff exists as a reference customer workspace.",
        "order": 10
      },
      {
        "code": "run-kickoff-locally",
        "title": "Run Kickoff Locally",
        "summary": "Local runtime topology, start sequence, acceptance checks, and developer/operator verification for the reference stack.",
        "order": 20
      },
      {
        "code": "publish-and-qualify",
        "title": "Publish and Qualify",
        "summary": "Local publishing operations, deployment qualification evidence, recovery rules, and production-boundary discipline.",
        "order": 30
      },
      {
        "code": "customize-customer-projects",
        "title": "Customize Customer Projects",
        "summary": "Project-layer customization examples, configuration-first decisions, documentation placement, and rollback-safe extension guidance.",
        "order": 40
      },
      {
        "code": "functional-journeys",
        "title": "Functional Journeys",
        "summary": "Commerce, Engagement, provider, privacy, reversal, and operator journeys demonstrated by the reference customer project.",
        "order": 50
      }
    ],
    "journeyLinks": [
      {
        "label": "Kickoff project overview",
        "targetPage": "kickoff.overview",
        "route": "/docs/nodics-kickoff"
      },
      {
        "label": "Local runtime topology",
        "targetPage": "kickoff.local-runtime",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      {
        "label": "Local setup to live runbook",
        "targetPage": "kickoff.local-setup-to-live",
        "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live"
      },
      {
        "label": "Local acceptance checklist",
        "targetPage": "kickoff.local-acceptance",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      },
      {
        "label": "Local publishing operations",
        "targetPage": "kickoff.local-publishing-operations",
        "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations"
      },
      {
        "label": "Deployment qualification",
        "targetPage": "kickoff.deployment-qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      }
    ],
    "statusSummary": {
      "sections": 5,
      "pages": 8,
      "lifecycleState": "ONLINE"
    },
    "product": "kickoffDocumentationProduct",
    "accessPolicy": "kickoffDocsAccessAuthenticated",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "active": true
  },
  "record1": {
    "code": "kickoffDocsDashboardSecdiscoverKickoff",
    "ownerType": "SECTION",
    "ownerCode": "kickoffDocsNodeSecdiscoverKickoff",
    "title": "Discover Kickoff",
    "summary": "Project identity, ownership boundaries, and the business reason Kickoff exists as a reference customer workspace.",
    "contentArea": {
      "businessPurpose": "Project identity, ownership boundaries, and the business reason Kickoff exists as a reference customer workspace.",
      "technicalPurpose": "Project documentation section managed as backend content-catalog data with publication lifecycle and access metadata."
    },
    "cards": [
      {
        "code": "kickoff.overview",
        "title": "Kickoff project overview",
        "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
        "order": 10
      }
    ],
    "journeyLinks": [
      {
        "label": "Kickoff project overview",
        "targetPage": "kickoff.overview",
        "route": "/docs/nodics-kickoff"
      }
    ],
    "statusSummary": {
      "pages": 1
    },
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "product": "kickoffDocumentationProduct",
    "accessPolicy": "kickoffDocsAccessPublic",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "active": true
  },
  "record2": {
    "code": "kickoffDocsDashboardSecrunKickoffLocally",
    "ownerType": "SECTION",
    "ownerCode": "kickoffDocsNodeSecrunKickoffLocally",
    "title": "Run Kickoff Locally",
    "summary": "Local runtime topology, start sequence, acceptance checks, and developer/operator verification for the reference stack.",
    "contentArea": {
      "businessPurpose": "Local runtime topology, start sequence, acceptance checks, and developer/operator verification for the reference stack.",
      "technicalPurpose": "Project documentation section managed as backend content-catalog data with publication lifecycle and access metadata."
    },
    "cards": [
      {
        "code": "kickoff.local-runtime",
        "title": "Local runtime topology",
        "summary": "Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable.",
        "order": 10
      },
      {
        "code": "kickoff.local-setup-to-live",
        "title": "Local setup to live runbook",
        "summary": "Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification.",
        "order": 15
      },
      {
        "code": "kickoff.local-acceptance",
        "title": "Local acceptance checklist",
        "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
        "order": 20
      }
    ],
    "journeyLinks": [
      {
        "label": "Local runtime topology",
        "targetPage": "kickoff.local-runtime",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      {
        "label": "Local setup to live runbook",
        "targetPage": "kickoff.local-setup-to-live",
        "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live"
      },
      {
        "label": "Local acceptance checklist",
        "targetPage": "kickoff.local-acceptance",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      }
    ],
    "statusSummary": {
      "pages": 3
    },
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "product": "kickoffDocumentationProduct",
    "accessPolicy": "kickoffDocsAccessPublic",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "active": true
  },
  "record3": {
    "code": "kickoffDocsDashboardSecpublishAndQualify",
    "ownerType": "SECTION",
    "ownerCode": "kickoffDocsNodeSecpublishAndQualify",
    "title": "Publish and Qualify",
    "summary": "Local publishing operations, deployment qualification evidence, recovery rules, and production-boundary discipline.",
    "contentArea": {
      "businessPurpose": "Local publishing operations, deployment qualification evidence, recovery rules, and production-boundary discipline.",
      "technicalPurpose": "Project documentation section managed as backend content-catalog data with publication lifecycle and access metadata."
    },
    "cards": [
      {
        "code": "kickoff.local-publishing-operations",
        "title": "Local publishing operations",
        "summary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
        "order": 10
      },
      {
        "code": "kickoff.deployment-qualification",
        "title": "Deployment qualification",
        "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
        "order": 20
      }
    ],
    "journeyLinks": [
      {
        "label": "Local publishing operations",
        "targetPage": "kickoff.local-publishing-operations",
        "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations"
      },
      {
        "label": "Deployment qualification",
        "targetPage": "kickoff.deployment-qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      }
    ],
    "statusSummary": {
      "pages": 2
    },
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "product": "kickoffDocumentationProduct",
    "accessPolicy": "kickoffDocsAccessPublic",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "active": true
  },
  "record4": {
    "code": "kickoffDocsDashboardSeccustomizeCustomerProjects",
    "ownerType": "SECTION",
    "ownerCode": "kickoffDocsNodeSeccustomizeCustomerProjects",
    "title": "Customize Customer Projects",
    "summary": "Project-layer customization examples, configuration-first decisions, documentation placement, and rollback-safe extension guidance.",
    "contentArea": {
      "businessPurpose": "Project-layer customization examples, configuration-first decisions, documentation placement, and rollback-safe extension guidance.",
      "technicalPurpose": "Project documentation section managed as backend content-catalog data with publication lifecycle and access metadata."
    },
    "cards": [
      {
        "code": "kickoff.customization",
        "title": "Customer customization guide",
        "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
        "order": 10
      }
    ],
    "journeyLinks": [
      {
        "label": "Customer customization guide",
        "targetPage": "kickoff.customization",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      }
    ],
    "statusSummary": {
      "pages": 1
    },
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "product": "kickoffDocumentationProduct",
    "accessPolicy": "kickoffDocsAccessPublic",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "active": true
  },
  "record5": {
    "code": "kickoffDocsDashboardSecfunctionalJourneys",
    "ownerType": "SECTION",
    "ownerCode": "kickoffDocsNodeSecfunctionalJourneys",
    "title": "Functional Journeys",
    "summary": "Commerce, Engagement, provider, privacy, reversal, and operator journeys demonstrated by the reference customer project.",
    "contentArea": {
      "businessPurpose": "Commerce, Engagement, provider, privacy, reversal, and operator journeys demonstrated by the reference customer project.",
      "technicalPurpose": "Project documentation section managed as backend content-catalog data with publication lifecycle and access metadata."
    },
    "cards": [
      {
        "code": "kickoff.functional-journeys",
        "title": "Commerce and Engagement functional journeys",
        "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
        "order": 10
      }
    ],
    "journeyLinks": [
      {
        "label": "Commerce and Engagement functional journeys",
        "targetPage": "kickoff.functional-journeys",
        "route": "/docs/nodics-kickoff/kickoff-functional-journeys"
      }
    ],
    "statusSummary": {
      "pages": 1
    },
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "product": "kickoffDocumentationProduct",
    "accessPolicy": "kickoffDocsAccessPublic",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "active": true
  }
};
