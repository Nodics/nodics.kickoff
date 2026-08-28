/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation page metadata. */
module.exports = {
  "record0": {
    "code": "kickoffDocsMetadatakickoffOverview",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.overview",
    "title": "Kickoff project overview",
    "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
    "businessSummary": "Kickoff project overview explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Kickoff project overview records owning module nodics.kickoff, technical module nodics.kickoff, source path docs/pages/project-overview.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "nodics.kickoff",
    "targetPage": "kickoffDocsPagekickoffOverview",
    "targetRoute": "kickoffDocsRoutekickoffOverview",
    "articleComponent": "kickoffDocsComponentkickoffOverview",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickoffoverview",
    "headings": [
      {
        "text": "Why Kickoff exists",
        "anchor": "kickoffOverview-1-why-kickoff-exists",
        "level": 2
      },
      {
        "text": "What a new customer should learn",
        "anchor": "kickoffOverview-2-what-a-new-customer-should-learn",
        "level": 2
      },
      {
        "text": "Beginner mental model",
        "anchor": "kickoffOverview-3-beginner-mental-model",
        "level": 2
      },
      {
        "text": "What Kickoff demonstrates",
        "anchor": "kickoffOverview-4-what-kickoff-demonstrates",
        "level": 2
      },
      {
        "text": "Source map",
        "anchor": "kickoffOverview-5-source-map",
        "level": 2
      },
      {
        "text": "Runtime boundary",
        "anchor": "kickoffOverview-6-runtime-boundary",
        "level": 2
      },
      {
        "text": "First customization promise",
        "anchor": "kickoffOverview-7-first-customization-promise",
        "level": 2
      },
      {
        "text": "Beginner story",
        "anchor": "kickoffOverview-8-beginner-story",
        "level": 2
      },
      {
        "text": "First successful setup journey",
        "anchor": "kickoffOverview-9-first-successful-setup-journey",
        "level": 2
      },
      {
        "text": "Documentation boundary",
        "anchor": "kickoffOverview-10-documentation-boundary",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffOverview-11-common-mistakes",
        "level": 2
      },
      {
        "text": "How to know Kickoff is working",
        "anchor": "kickoffOverview-12-how-to-know-kickoff-is-working",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffOverview-13-verification",
        "level": 2
      },
      {
        "text": "What to read next",
        "anchor": "kickoffOverview-14-what-to-read-next",
        "level": 2
      },
      {
        "text": "Continue",
        "anchor": "kickoffOverview-15-continue",
        "level": 2
      }
    ],
    "diagrams": [
      {
        "language": "mermaid"
      },
      {
        "language": "mermaid"
      },
      {
        "language": "mermaid"
      }
    ],
    "visualAssets": [
      {
        "kind": "table"
      },
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "architecture-diagram",
      "table",
      "code-example"
    ],
    "relatedPages": [
      "kickoff.local-runtime",
      "kickoff.customization",
      "kickoff.functional-journeys"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/project-overview.md",
    "sourceChecksum": "4901c52b19aed4db1ef3f03a1d90604e57a4a7d35300d088c37e3e7d546b8f20",
    "sourceWordCount": 2071,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  },
  "record1": {
    "code": "kickoffDocsMetadatakickoffLocalRuntime",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-runtime",
    "title": "Local runtime topology",
    "summary": "Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable.",
    "businessSummary": "Local runtime topology explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local runtime topology records owning module nodics.kickoff, technical module kickoffLocal, source path docs/pages/local-runtime.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffLocalRuntime",
    "targetRoute": "kickoffDocsRoutekickoffLocalRuntime",
    "articleComponent": "kickoffDocsComponentkickoffLocalRuntime",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalruntime",
    "headings": [
      {
        "text": "What this is",
        "anchor": "kickoffLocalRuntime-1-what-this-is",
        "level": 2
      },
      {
        "text": "Servers",
        "anchor": "kickoffLocalRuntime-2-servers",
        "level": 2
      },
      {
        "text": "Start locally",
        "anchor": "kickoffLocalRuntime-3-start-locally",
        "level": 2
      },
      {
        "text": "Before starting",
        "anchor": "kickoffLocalRuntime-4-before-starting",
        "level": 2
      },
      {
        "text": "Start sequence",
        "anchor": "kickoffLocalRuntime-5-start-sequence",
        "level": 2
      },
      {
        "text": "Login and first checks",
        "anchor": "kickoffLocalRuntime-6-login-and-first-checks",
        "level": 2
      },
      {
        "text": "Fresh environment setup order",
        "anchor": "kickoffLocalRuntime-7-fresh-environment-setup-order",
        "level": 2
      },
      {
        "text": "Documentation import",
        "anchor": "kickoffLocalRuntime-8-documentation-import",
        "level": 2
      },
      {
        "text": "Troubleshooting",
        "anchor": "kickoffLocalRuntime-9-troubleshooting",
        "level": 2
      },
      {
        "text": "Production note",
        "anchor": "kickoffLocalRuntime-10-production-note",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffLocalRuntime-11-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffLocalRuntime-12-verification",
        "level": 2
      },
      {
        "text": "Continue",
        "anchor": "kickoffLocalRuntime-13-continue",
        "level": 2
      }
    ],
    "diagrams": [],
    "visualAssets": [
      {
        "kind": "table"
      },
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "troubleshooting-matrix",
      "command-example"
    ],
    "relatedPages": [
      "kickoff.overview",
      "kickoff.local-acceptance",
      "kickoff.deployment-qualification"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/local-runtime.md",
    "sourceChecksum": "a01771d3fa9f3068139eccca3bfd6718d9bf0e4a3e6957bd083289e36c6b90b6",
    "sourceWordCount": 1606,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  },
  "record2": {
    "code": "kickoffDocsMetadatakickoffLocalAcceptance",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-acceptance",
    "title": "Local acceptance checklist",
    "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
    "businessSummary": "Local acceptance checklist explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local acceptance checklist records owning module nodics.kickoff, technical module kickoffLocal, source path docs/pages/local-acceptance-checklist.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffLocalAcceptance",
    "targetRoute": "kickoffDocsRoutekickoffLocalAcceptance",
    "articleComponent": "kickoffDocsComponentkickoffLocalAcceptance",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalacceptance",
    "headings": [
      {
        "text": "What this checklist proves",
        "anchor": "kickoffLocalAcceptance-1-what-this-checklist-proves",
        "level": 2
      },
      {
        "text": "Repository layout used by the reference run",
        "anchor": "kickoffLocalAcceptance-2-repository-layout-used-by-the-reference-run",
        "level": 2
      },
      {
        "text": "Mandatory prerequisites",
        "anchor": "kickoffLocalAcceptance-3-mandatory-prerequisites",
        "level": 2
      },
      {
        "text": "Fresh schema reset",
        "anchor": "kickoffLocalAcceptance-4-fresh-schema-reset",
        "level": 2
      },
      {
        "text": "Fresh-schema user journey",
        "anchor": "kickoffLocalAcceptance-5-fresh-schema-user-journey",
        "level": 2
      },
      {
        "text": "Automated acceptance path",
        "anchor": "kickoffLocalAcceptance-6-automated-acceptance-path",
        "level": 2
      },
      {
        "text": "What the automated command proves",
        "anchor": "kickoffLocalAcceptance-7-what-the-automated-command-proves",
        "level": 3
      },
      {
        "text": "Start and stop the complete Local topology",
        "anchor": "kickoffLocalAcceptance-8-start-and-stop-the-complete-local-topology",
        "level": 2
      },
      {
        "text": "Start individual backend servers",
        "anchor": "kickoffLocalAcceptance-9-start-individual-backend-servers",
        "level": 2
      },
      {
        "text": "Start Axis",
        "anchor": "kickoffLocalAcceptance-10-start-axis",
        "level": 2
      },
      {
        "text": "Login",
        "anchor": "kickoffLocalAcceptance-11-login",
        "level": 2
      },
      {
        "text": "Import initialization data",
        "anchor": "kickoffLocalAcceptance-12-import-initialization-data",
        "level": 2
      },
      {
        "text": "Verify module registry",
        "anchor": "kickoffLocalAcceptance-13-verify-module-registry",
        "level": 2
      },
      {
        "text": "Verify documentation",
        "anchor": "kickoffLocalAcceptance-14-verify-documentation",
        "level": 2
      },
      {
        "text": "Verify application setup and Online delivery",
        "anchor": "kickoffLocalAcceptance-15-verify-application-setup-and-online-delivery",
        "level": 2
      },
      {
        "text": "Verify content and media",
        "anchor": "kickoffLocalAcceptance-16-verify-content-and-media",
        "level": 2
      },
      {
        "text": "Verify Page Designer authoring model",
        "anchor": "kickoffLocalAcceptance-17-verify-page-designer-authoring-model",
        "level": 3
      },
      {
        "text": "Verify Cron",
        "anchor": "kickoffLocalAcceptance-18-verify-cron",
        "level": 2
      },
      {
        "text": "Command-line smoke test",
        "anchor": "kickoffLocalAcceptance-19-command-line-smoke-test",
        "level": 2
      },
      {
        "text": "Troubleshooting quick map",
        "anchor": "kickoffLocalAcceptance-20-troubleshooting-quick-map",
        "level": 2
      },
      {
        "text": "Acceptance sign-off",
        "anchor": "kickoffLocalAcceptance-21-acceptance-sign-off",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffLocalAcceptance-22-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffLocalAcceptance-23-verification",
        "level": 2
      }
    ],
    "diagrams": [
      {
        "language": "mermaid"
      },
      {
        "language": "mermaid"
      }
    ],
    "visualAssets": [
      {
        "kind": "table"
      },
      {
        "kind": "table"
      },
      {
        "kind": "table"
      },
      {
        "kind": "table"
      },
      {
        "kind": "table"
      },
      {
        "kind": "table"
      },
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "diagram",
      "troubleshooting-matrix",
      "command-example"
    ],
    "relatedPages": [
      "kickoff.local-runtime",
      "kickoff.local-publishing-operations",
      "kickoff.functional-journeys"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/local-acceptance-checklist.md",
    "sourceChecksum": "472aac81eb3d7039d44f656131d423b7834679fb1c85d6ff9456fd9edfe974e9",
    "sourceWordCount": 3143,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  },
  "record3": {
    "code": "kickoffDocsMetadatakickoffLocalPublishingOperations",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-publishing-operations",
    "title": "Local publishing operations",
    "summary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
    "businessSummary": "Local publishing operations explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local publishing operations records owning module nodics.kickoff, technical module kickoffLocal, source path docs/pages/local-publishing-operations.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffLocalPublishingOperations",
    "targetRoute": "kickoffDocsRoutekickoffLocalPublishingOperations",
    "articleComponent": "kickoffDocsComponentkickoffLocalPublishingOperations",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "headings": [
      {
        "text": "Scope and authority",
        "anchor": "kickoffLocalPublishingOperations-1-scope-and-authority",
        "level": 2
      },
      {
        "text": "Preflight, start, inspect, and stop",
        "anchor": "kickoffLocalPublishingOperations-2-preflight-start-inspect-and-stop",
        "level": 2
      },
      {
        "text": "Supported initialization and release upgrade",
        "anchor": "kickoffLocalPublishingOperations-3-supported-initialization-and-release-upgrade",
        "level": 2
      },
      {
        "text": "Failure, retry, rollback, and recovery",
        "anchor": "kickoffLocalPublishingOperations-4-failure-retry-rollback-and-recovery",
        "level": 2
      },
      {
        "text": "Import, export, backup, and restore boundaries",
        "anchor": "kickoffLocalPublishingOperations-5-import-export-backup-and-restore-boundaries",
        "level": 2
      },
      {
        "text": "Observability and audit",
        "anchor": "kickoffLocalPublishingOperations-6-observability-and-audit",
        "level": 2
      },
      {
        "text": "Concurrency, retention, and cleanup",
        "anchor": "kickoffLocalPublishingOperations-7-concurrency-retention-and-cleanup",
        "level": 2
      },
      {
        "text": "Qualification and evidence",
        "anchor": "kickoffLocalPublishingOperations-8-qualification-and-evidence",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffLocalPublishingOperations-9-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffLocalPublishingOperations-10-verification",
        "level": 2
      }
    ],
    "diagrams": [],
    "visualAssets": [
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "troubleshooting-matrix",
      "code-example"
    ],
    "relatedPages": [
      "kickoff.local-acceptance",
      "kickoff.deployment-qualification"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/local-publishing-operations.md",
    "sourceChecksum": "b5f033ac7d2e6c84f91e34f5bd12e9aac824c0a52d590e65a69bbb72abac4959",
    "sourceWordCount": 1467,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  },
  "record4": {
    "code": "kickoffDocsMetadatakickoffDeploymentQualification",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.deployment-qualification",
    "title": "Deployment qualification",
    "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
    "businessSummary": "Deployment qualification explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Deployment qualification records owning module nodics.kickoff, technical module kickoffLocal, source path docs/pages/deployment-qualification.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffDeploymentQualification",
    "targetRoute": "kickoffDocsRoutekickoffDeploymentQualification",
    "articleComponent": "kickoffDocsComponentkickoffDeploymentQualification",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "headings": [
      {
        "text": "Start here",
        "anchor": "kickoffDeploymentQualification-1-start-here",
        "level": 2
      },
      {
        "text": "Fresh bootstrap is intentionally separate",
        "anchor": "kickoffDeploymentQualification-2-fresh-bootstrap-is-intentionally-separate",
        "level": 2
      },
      {
        "text": "What local evidence does and does not prove",
        "anchor": "kickoffDeploymentQualification-3-what-local-evidence-does-and-does-not-prove",
        "level": 2
      },
      {
        "text": "Production-only evidence register",
        "anchor": "kickoffDeploymentQualification-4-production-only-evidence-register",
        "level": 2
      },
      {
        "text": "Recommended execution order",
        "anchor": "kickoffDeploymentQualification-5-recommended-execution-order",
        "level": 2
      },
      {
        "text": "Failure and recovery",
        "anchor": "kickoffDeploymentQualification-6-failure-and-recovery",
        "level": 2
      },
      {
        "text": "Customization boundary",
        "anchor": "kickoffDeploymentQualification-7-customization-boundary",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffDeploymentQualification-8-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffDeploymentQualification-9-verification",
        "level": 2
      }
    ],
    "diagrams": [
      {
        "language": "mermaid"
      }
    ],
    "visualAssets": [
      {
        "kind": "table"
      },
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "diagram",
      "troubleshooting-matrix",
      "command-example"
    ],
    "relatedPages": [
      "kickoff.local-runtime",
      "kickoff.local-publishing-operations"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/deployment-qualification.md",
    "sourceChecksum": "60ba819afda6aae58f5a6b7c27bc0338cb01ac69e2a0b47cc89225776696553e",
    "sourceWordCount": 1133,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  },
  "record5": {
    "code": "kickoffDocsMetadatakickoffCustomization",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.customization",
    "title": "Customer customization guide",
    "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
    "businessSummary": "Customer customization guide explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Customer customization guide records owning module nodics.kickoff, technical module modules, source path docs/pages/customization-guide.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "modules",
    "targetPage": "kickoffDocsPagekickoffCustomization",
    "targetRoute": "kickoffDocsRoutekickoffCustomization",
    "articleComponent": "kickoffDocsComponentkickoffCustomization",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickoffcustomization",
    "headings": [
      {
        "text": "Why customization needs rules",
        "anchor": "kickoffCustomization-1-why-customization-needs-rules",
        "level": 2
      },
      {
        "text": "Customization decision tree",
        "anchor": "kickoffCustomization-2-customization-decision-tree",
        "level": 2
      },
      {
        "text": "How a developer or AI tool should think",
        "anchor": "kickoffCustomization-3-how-a-developer-or-ai-tool-should-think",
        "level": 2
      },
      {
        "text": "File placement examples",
        "anchor": "kickoffCustomization-4-file-placement-examples",
        "level": 2
      },
      {
        "text": "Configuration-first examples",
        "anchor": "kickoffCustomization-5-configuration-first-examples",
        "level": 2
      },
      {
        "text": "Safe customization model",
        "anchor": "kickoffCustomization-6-safe-customization-model",
        "level": 2
      },
      {
        "text": "Two customization types",
        "anchor": "kickoffCustomization-7-two-customization-types",
        "level": 2
      },
      {
        "text": "Code-level customization",
        "anchor": "kickoffCustomization-8-code-level-customization",
        "level": 3
      },
      {
        "text": "Axis and WCMS customization",
        "anchor": "kickoffCustomization-9-axis-and-wcms-customization",
        "level": 3
      },
      {
        "text": "Documentation customization",
        "anchor": "kickoffCustomization-10-documentation-customization",
        "level": 3
      },
      {
        "text": "What not to customize in Kickoff",
        "anchor": "kickoffCustomization-11-what-not-to-customize-in-kickoff",
        "level": 2
      },
      {
        "text": "Extension example",
        "anchor": "kickoffCustomization-12-extension-example",
        "level": 2
      },
      {
        "text": "Documentation rule",
        "anchor": "kickoffCustomization-13-documentation-rule",
        "level": 2
      },
      {
        "text": "Step-by-step: add a small project module",
        "anchor": "kickoffCustomization-14-step-by-step-add-a-small-project-module",
        "level": 2
      },
      {
        "text": "Example: adding a project service",
        "anchor": "kickoffCustomization-15-example-adding-a-project-service",
        "level": 3
      },
      {
        "text": "Step-by-step: add project documentation",
        "anchor": "kickoffCustomization-16-step-by-step-add-project-documentation",
        "level": 2
      },
      {
        "text": "DevOps and rollback notes",
        "anchor": "kickoffCustomization-17-devops-and-rollback-notes",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffCustomization-18-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffCustomization-19-verification",
        "level": 2
      },
      {
        "text": "Continue",
        "anchor": "kickoffCustomization-20-continue",
        "level": 2
      }
    ],
    "diagrams": [
      {
        "language": "mermaid"
      }
    ],
    "visualAssets": [
      {
        "kind": "table"
      },
      {
        "kind": "table"
      },
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "diagram",
      "comparison-table",
      "code-example"
    ],
    "relatedPages": [
      "kickoff.overview",
      "kickoff.local-runtime",
      "kickoff.local-acceptance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/customization-guide.md",
    "sourceChecksum": "139ace75d0b5c12699643371792aaf9de33a91c7226e0ad9e185997b8247b332",
    "sourceWordCount": 1974,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  },
  "record6": {
    "code": "kickoffDocsMetadatakickoffFunctionalJourneys",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.functional-journeys",
    "title": "Commerce and Engagement functional journeys",
    "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
    "businessSummary": "Commerce and Engagement functional journeys explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Commerce and Engagement functional journeys records owning module nodics.kickoff, technical module kickoffLocal, source path docs/pages/functional-journeys.md, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffFunctionalJourneys",
    "targetRoute": "kickoffDocsRoutekickoffFunctionalJourneys",
    "articleComponent": "kickoffDocsComponentkickoffFunctionalJourneys",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "headings": [
      {
        "text": "Understand the product journey",
        "anchor": "kickoffFunctionalJourneys-1-understand-the-product-journey",
        "level": 2
      },
      {
        "text": "Plan roles, prerequisites, and ownership",
        "anchor": "kickoffFunctionalJourneys-2-plan-roles-prerequisites-and-ownership",
        "level": 2
      },
      {
        "text": "Configure and start locally",
        "anchor": "kickoffFunctionalJourneys-3-configure-and-start-locally",
        "level": 2
      },
      {
        "text": "Operate Engagement in Axis",
        "anchor": "kickoffFunctionalJourneys-4-operate-engagement-in-axis",
        "level": 2
      },
      {
        "text": "Operate Commerce and reversals",
        "anchor": "kickoffFunctionalJourneys-5-operate-commerce-and-reversals",
        "level": 2
      },
      {
        "text": "Integrate providers safely",
        "anchor": "kickoffFunctionalJourneys-6-integrate-providers-safely",
        "level": 2
      },
      {
        "text": "Privacy, data, and recovery",
        "anchor": "kickoffFunctionalJourneys-7-privacy-data-and-recovery",
        "level": 2
      },
      {
        "text": "Observe and troubleshoot",
        "anchor": "kickoffFunctionalJourneys-8-observe-and-troubleshoot",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffFunctionalJourneys-9-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffFunctionalJourneys-10-verification",
        "level": 2
      }
    ],
    "diagrams": [],
    "visualAssets": [
      {
        "kind": "table"
      }
    ],
    "visualRequirements": [
      "table"
    ],
    "relatedPages": [
      "kickoff.overview",
      "kickoff.local-acceptance",
      "kickoff.customization"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "docs/pages/functional-journeys.md",
    "sourceChecksum": "313eaaedd4011bc5725fc6ba9c50b748376f9817bc328a4bf2d9b91912e48c55",
    "sourceWordCount": 1501,
    "audience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE",
      "SOURCE_EVIDENCE_CHANGE"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "active": true
  }
};
