/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Module-owned documentation page metadata. */
module.exports = {
  "record0": {
    "code": "kickoffDocsMetadatakickoffOverview",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.overview",
    "title": "Kickoff project overview",
    "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
    "businessSummary": "Kickoff project overview explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Kickoff project overview records owning module nodics.kickoff, technical module nodics.kickoff, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
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
      "kickoff.functional-journeys",
      "kickoff.local-setup-to-live",
      "kickoff.local-acceptance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "9af3e2bba48a36783eb491aa6fae429db08b01f0838c4f4679202617c47cd2e3",
    "sourceWordCount": 2238,
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
    "active": true,
    "wordCount": 2238,
    "sourceEvidence": [
      "README.md",
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "package.json"
    ]
  },
  "record1": {
    "code": "kickoffDocsMetadatakickoffLocalRuntime",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-runtime",
    "title": "Local runtime topology",
    "summary": "Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable.",
    "businessSummary": "Local runtime topology explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local runtime topology records owning module nodics.kickoff, technical module kickoffLocal, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffLocalRuntime",
    "targetRoute": "kickoffDocsRoutekickoffLocalRuntime",
    "articleComponent": "kickoffDocsComponentkickoffLocalRuntime",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalruntime",
    "headings": [
      {
        "text": "Disposable Native Local Rebuild",
        "anchor": "kickoffLocalRuntime-1-disposable-native-local-rebuild",
        "level": 2
      },
      {
        "text": "Exact Scope And Isolation",
        "anchor": "kickoffLocalRuntime-2-exact-scope-and-isolation",
        "level": 3
      },
      {
        "text": "Stopped-Stack Sequence",
        "anchor": "kickoffLocalRuntime-3-stopped-stack-sequence",
        "level": 3
      },
      {
        "text": "Private Startup Qualification",
        "anchor": "kickoffLocalRuntime-4-private-startup-qualification",
        "level": 3
      },
      {
        "text": "Observed Recovery And Evidence Boundary",
        "anchor": "kickoffLocalRuntime-5-observed-recovery-and-evidence-boundary",
        "level": 3
      },
      {
        "text": "What this is",
        "anchor": "kickoffLocalRuntime-6-what-this-is",
        "level": 2
      },
      {
        "text": "Servers",
        "anchor": "kickoffLocalRuntime-7-servers",
        "level": 2
      },
      {
        "text": "Optional capabilities and failures",
        "anchor": "kickoffLocalRuntime-8-optional-capabilities-and-failures",
        "level": 2
      },
      {
        "text": "Start locally",
        "anchor": "kickoffLocalRuntime-9-start-locally",
        "level": 2
      },
      {
        "text": "Before starting",
        "anchor": "kickoffLocalRuntime-10-before-starting",
        "level": 2
      },
      {
        "text": "Start sequence",
        "anchor": "kickoffLocalRuntime-11-start-sequence",
        "level": 2
      },
      {
        "text": "Login and first checks",
        "anchor": "kickoffLocalRuntime-12-login-and-first-checks",
        "level": 2
      },
      {
        "text": "Fresh environment setup order",
        "anchor": "kickoffLocalRuntime-13-fresh-environment-setup-order",
        "level": 2
      },
      {
        "text": "Documentation import",
        "anchor": "kickoffLocalRuntime-14-documentation-import",
        "level": 2
      },
      {
        "text": "Troubleshooting",
        "anchor": "kickoffLocalRuntime-15-troubleshooting",
        "level": 2
      },
      {
        "text": "Production note",
        "anchor": "kickoffLocalRuntime-16-production-note",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffLocalRuntime-17-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffLocalRuntime-18-verification",
        "level": 2
      },
      {
        "text": "Continue",
        "anchor": "kickoffLocalRuntime-19-continue",
        "level": 2
      },
      {
        "text": "Local employee email: sending-runtime configuration",
        "anchor": "kickoffLocalRuntime-20-local-employee-email-sending-runtime-configuration",
        "level": 2
      },
      {
        "text": "Configure and verify this deployment",
        "anchor": "kickoffLocalRuntime-21-configure-and-verify-this-deployment",
        "level": 3
      },
      {
        "text": "Registration Prerequisites",
        "anchor": "kickoffLocalRuntime-22-registration-prerequisites",
        "level": 4
      },
      {
        "text": "Employee Review Deployment Selection",
        "anchor": "kickoffLocalRuntime-23-employee-review-deployment-selection",
        "level": 4
      },
      {
        "text": "Enterprise Setup Continuation",
        "anchor": "kickoffLocalRuntime-24-enterprise-setup-continuation",
        "level": 4
      },
      {
        "text": "Bootstrap Identity Source Review",
        "anchor": "kickoffLocalRuntime-25-bootstrap-identity-source-review",
        "level": 4
      },
      {
        "text": "Communication Qualification Without Delivery",
        "anchor": "kickoffLocalRuntime-26-communication-qualification-without-delivery",
        "level": 4
      },
      {
        "text": "Templates and responsibility boundaries",
        "anchor": "kickoffLocalRuntime-27-templates-and-responsibility-boundaries",
        "level": 3
      },
      {
        "text": "Worked configuration example and recovery",
        "anchor": "kickoffLocalRuntime-28-worked-configuration-example-and-recovery",
        "level": 3
      },
      {
        "text": "Customize and extend safely",
        "anchor": "kickoffLocalRuntime-29-customize-and-extend-safely",
        "level": 3
      }
    ],
    "diagrams": [],
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
      }
    ],
    "visualRequirements": [
      "troubleshooting-matrix",
      "command-example"
    ],
    "relatedPages": [
      "kickoff.overview",
      "kickoff.local-acceptance",
      "kickoff.deployment-qualification",
      "kickoff.local-setup-to-live"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "a4fb71873afb151ec213f8b5e7bdf4336fd21b9c58c6885d963202dd4cfe9651",
    "sourceWordCount": 5512,
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
    "active": true,
    "wordCount": 5512,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "envs/kickoffLocal/config/properties.js",
      "package.json"
    ]
  },
  "record2": {
    "code": "kickoffDocsMetadatakickoffLocalSetupToLive",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-setup-to-live",
    "title": "Local setup to live runbook",
    "summary": "Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification.",
    "businessSummary": "Local setup to live runbook explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local setup to live runbook records owning module nodics.kickoff, technical module kickoffLocal, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffLocalSetupToLive",
    "targetRoute": "kickoffDocsRoutekickoffLocalSetupToLive",
    "articleComponent": "kickoffDocsComponentkickoffLocalSetupToLive",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "headings": [
      {
        "text": "What live means",
        "anchor": "kickoffLocalSetupToLive-1-what-live-means",
        "level": 2
      },
      {
        "text": "Repository layout",
        "anchor": "kickoffLocalSetupToLive-2-repository-layout",
        "level": 2
      },
      {
        "text": "Prepare the project",
        "anchor": "kickoffLocalSetupToLive-3-prepare-the-project",
        "level": 2
      },
      {
        "text": "Start the local stack",
        "anchor": "kickoffLocalSetupToLive-4-start-the-local-stack",
        "level": 2
      },
      {
        "text": "First launch before Axis data exists",
        "anchor": "kickoffLocalSetupToLive-5-first-launch-before-axis-data-exists",
        "level": 2
      },
      {
        "text": "Open Axis",
        "anchor": "kickoffLocalSetupToLive-6-open-axis",
        "level": 2
      },
      {
        "text": "Register and activate modules",
        "anchor": "kickoffLocalSetupToLive-7-register-and-activate-modules",
        "level": 2
      },
      {
        "text": "Install release data",
        "anchor": "kickoffLocalSetupToLive-8-install-release-data",
        "level": 2
      },
      {
        "text": "Initialize applications",
        "anchor": "kickoffLocalSetupToLive-9-initialize-applications",
        "level": 2
      },
      {
        "text": "Approve and publish",
        "anchor": "kickoffLocalSetupToLive-10-approve-and-publish",
        "level": 2
      },
      {
        "text": "Publish documentation",
        "anchor": "kickoffLocalSetupToLive-11-publish-documentation",
        "level": 2
      },
      {
        "text": "Verify Nexus",
        "anchor": "kickoffLocalSetupToLive-12-verify-nexus",
        "level": 2
      },
      {
        "text": "Verify Agora Apparel",
        "anchor": "kickoffLocalSetupToLive-13-verify-agora-apparel",
        "level": 2
      },
      {
        "text": "Troubleshooting checkpoints",
        "anchor": "kickoffLocalSetupToLive-14-troubleshooting-checkpoints",
        "level": 2
      },
      {
        "text": "Screenshot maintenance rule",
        "anchor": "kickoffLocalSetupToLive-15-screenshot-maintenance-rule",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffLocalSetupToLive-16-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffLocalSetupToLive-17-verification",
        "level": 2
      },
      {
        "text": "Final proof",
        "anchor": "kickoffLocalSetupToLive-18-final-proof",
        "level": 2
      },
      {
        "text": "Exact Apparel setup and original-intent replay",
        "anchor": "kickoff-apparel-exact-setup-replay",
        "level": 2
      },
      {
        "text": "Replay after purchases without resetting stock or campaigns",
        "anchor": "kickoff-apparel-post-purchase-replay",
        "level": 2
      },
      {
        "text": "Customize the Local selection and retain honest evidence",
        "anchor": "kickoff-apparel-setup-customization",
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
        "kind": "image",
        "mediaCode": "kickoffDocsImage_852c731f7d316d83dc30316c"
      },
      {
        "kind": "image",
        "mediaCode": "kickoffDocsImage_db084e3fca2b48dd161b665e"
      },
      {
        "kind": "image",
        "mediaCode": "kickoffDocsImage_71b7abc25764fc9c4232184a"
      },
      {
        "kind": "image",
        "mediaCode": "kickoffDocsImage_ef9610558e4e57197d456639"
      },
      {
        "kind": "image",
        "mediaCode": "kickoffDocsImage_ef0282d59f58eab4596b6ebb"
      },
      {
        "kind": "image",
        "mediaCode": "kickoffDocsImage_7073a2b01464d7e66b7356f4"
      },
      {
        "kind": "image",
        "mediaCode": "kickoffDocsImage_cbf9b854bea1e3c7db786b66"
      },
      {
        "kind": "image"
      },
      {
        "kind": "image"
      },
      {
        "kind": "image"
      },
      {
        "kind": "image"
      },
      {
        "kind": "image"
      },
      {
        "kind": "image"
      },
      {
        "kind": "table",
        "title": "Area, Live condition"
      },
      {
        "kind": "table",
        "title": "Surface, URL, Purpose"
      },
      {
        "kind": "table",
        "title": "Dashboard area, What to check"
      },
      {
        "kind": "table",
        "title": "Capability group, Expected local result"
      },
      {
        "kind": "table",
        "title": "Guided profile, Why it matters"
      },
      {
        "kind": "table",
        "title": "Status, Meaning"
      },
      {
        "kind": "table",
        "title": "Area, Evidence"
      },
      {
        "kind": "table",
        "title": "Area, Evidence"
      },
      {
        "kind": "table",
        "title": "Symptom, Likely cause, Where to fix"
      },
      {
        "kind": "table",
        "title": "Exact selected package, Declared phase and target, Expected owner effect"
      },
      {
        "kind": "table",
        "title": "Scenario, Required evidence, Recovery boundary"
      }
    ],
    "visualRequirements": [
      "screenshot",
      "command-example",
      "troubleshooting-matrix",
      "diagram",
      "table"
    ],
    "relatedPages": [
      "kickoff.local-runtime",
      "kickoff.local-acceptance",
      "kickoff.local-publishing-operations",
      "accelerators.agora-apparel-product-data-authoring",
      "inventory.stock-management",
      "applications.axis-setup-error-contracts",
      "promotion.campaigns-coupon-issuance",
      "cart.customer-intent-calculation",
      "digital.purchase-delivery-reveal",
      "security.identity-access-governance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "c2fa86daf8f3d26b511d7994ce7aae31e87a9f58c2a15afc1104ff5c373a7547",
    "sourceWordCount": 3454,
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
    "active": true,
    "wordCount": 3454,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "data/docs-v001/assets/documentation/files/images/local-setup/",
      "package.json",
      "envs/kickoffLocal/config/properties.js",
      "modules/agora.apparel/config/properties.js",
      "modules/agora.apparel/data/manifest.json",
      "modules/agora.apparel/data/sample-v001/operations/records/inventoryOpening.json",
      "modules/agora.apparel/data/sample-v001/operations/records/promotionSetup.json",
      "test/evidence/native-apparel-fresh-setup-and-replay-2026-10-08.json"
    ]
  },
  "record3": {
    "code": "kickoffDocsMetadatakickoffLocalAcceptance",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-acceptance",
    "title": "Local acceptance checklist",
    "summary": "Verify Kickoff configuration, authorized Local initialization, publication and separate frontend journeys; distinguish static checks, live evidence and release gates.",
    "businessSummary": "Local acceptance checklist explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local acceptance checklist records owning module nodics.kickoff, technical module kickoffLocal, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "kickoffLocal",
    "targetPage": "kickoffDocsPagekickoffLocalAcceptance",
    "targetRoute": "kickoffDocsRoutekickoffLocalAcceptance",
    "articleComponent": "kickoffDocsComponentkickoffLocalAcceptance",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalacceptance",
    "headings": [
      {
        "text": "Choose your path",
        "anchor": "kickoffLocalAcceptance-1-choose-your-path",
        "level": 2
      },
      {
        "text": "Prerequisites and authority",
        "anchor": "kickoffLocalAcceptance-2-prerequisites-and-authority",
        "level": 2
      },
      {
        "text": "Verification without live mutation",
        "anchor": "kickoffLocalAcceptance-3-verification-without-live-mutation",
        "level": 2
      },
      {
        "text": "Start the selected local backends",
        "anchor": "kickoffLocalAcceptance-4-start-the-selected-local-backends",
        "level": 2
      },
      {
        "text": "Authorized initialization and publication",
        "anchor": "kickoffLocalAcceptance-5-authorized-initialization-and-publication",
        "level": 2
      },
      {
        "text": "Versioned domain publication qualification",
        "anchor": "kickoffLocalAcceptance-6-versioned-domain-publication-qualification",
        "level": 2
      },
      {
        "text": "Manual setup and browser verification",
        "anchor": "kickoffLocalAcceptance-7-manual-setup-and-browser-verification",
        "level": 2
      },
      {
        "text": "Record results and blockers",
        "anchor": "kickoffLocalAcceptance-8-record-results-and-blockers",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffLocalAcceptance-9-common-mistakes",
        "level": 2
      },
      {
        "text": "Sign-off and next step",
        "anchor": "kickoffLocalAcceptance-10-sign-off-and-next-step",
        "level": 2
      },
      {
        "text": "Apparel setup, purchase and replay evidence gates",
        "anchor": "kickoff-apparel-acceptance-gates",
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
        "kind": "table",
        "title": "Audience, Start here, Continue when"
      },
      {
        "kind": "table",
        "title": "Check, Required evidence"
      },
      {
        "kind": "table",
        "title": "Symptom, Check first, Next action"
      },
      {
        "kind": "table",
        "title": "Gate, Record through existing secured owners, Not sufficient"
      }
    ],
    "visualRequirements": [
      "diagram",
      "troubleshooting-matrix",
      "command-example",
      "table"
    ],
    "relatedPages": [
      "kickoff.local-runtime",
      "kickoff.local-publishing-operations",
      "kickoff.functional-journeys",
      "kickoff.local-setup-to-live",
      "kickoff.configuration-inheritance",
      "kickoff.deployment-qualification",
      "accelerators.agora-apparel-product-data-authoring",
      "inventory.stock-management",
      "applications.axis-setup-error-contracts",
      "promotion.campaigns-coupon-issuance",
      "cart.customer-intent-calculation",
      "digital.purchase-delivery-reveal",
      "security.identity-access-governance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "292a07c21a97569f218dd258c45d8565e2ad55652da2357a8e00265c89c70481",
    "sourceWordCount": 2550,
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
    "active": true,
    "wordCount": 2550,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "package.json",
      "envs/kickoffLocal/config/properties.js",
      "modules/agora.apparel/config/properties.js",
      "modules/agora.apparel/data/manifest.json",
      "modules/agora.apparel/data/sample-v001/operations/records/inventoryOpening.json",
      "modules/agora.apparel/data/sample-v001/operations/records/promotionSetup.json",
      "test/evidence/native-apparel-fresh-setup-and-replay-2026-10-08.json"
    ]
  },
  "record4": {
    "code": "kickoffDocsMetadatakickoffLocalPublishingOperations",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.local-publishing-operations",
    "title": "Local publishing operations",
    "summary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
    "businessSummary": "Local publishing operations explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Local publishing operations records owning module nodics.kickoff, technical module kickoffLocal, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
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
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "10cddfde74e14d510dabaab81e6a8fef986e2523adb3b2705c593ad10e0c9c75",
    "sourceWordCount": 1545,
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
    "active": true,
    "wordCount": 1545,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "package.json",
      "envs/kickoffLocal/config/properties.js"
    ]
  },
  "record5": {
    "code": "kickoffDocsMetadatakickoffDeploymentQualification",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.deployment-qualification",
    "title": "Deployment qualification",
    "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
    "businessSummary": "Deployment qualification explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Deployment qualification records owning module nodics.kickoff, technical module kickoffLocal, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
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
      "kickoff.local-publishing-operations",
      "kickoff.local-acceptance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "3cf2739c4487d7263ce3dac0400a6730d75462bea2604dd6aadf713861ac4f7f",
    "sourceWordCount": 1341,
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
    "active": true,
    "wordCount": 1341,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "package.json",
      "envs/kickoffLocal/config/properties.js"
    ]
  },
  "record6": {
    "code": "kickoffDocsMetadatakickoffCustomization",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.customization",
    "title": "Customer customization guide",
    "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
    "businessSummary": "Customer customization guide explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Customer customization guide records owning module nodics.kickoff, technical module modules, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
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
        "text": "Waste Management customization",
        "anchor": "kickoffCustomization-11-waste-management-customization",
        "level": 3
      },
      {
        "text": "What not to customize in Kickoff",
        "anchor": "kickoffCustomization-12-what-not-to-customize-in-kickoff",
        "level": 2
      },
      {
        "text": "Extension example",
        "anchor": "kickoffCustomization-13-extension-example",
        "level": 2
      },
      {
        "text": "Documentation rule",
        "anchor": "kickoffCustomization-14-documentation-rule",
        "level": 2
      },
      {
        "text": "Step-by-step: add a small project module",
        "anchor": "kickoffCustomization-15-step-by-step-add-a-small-project-module",
        "level": 2
      },
      {
        "text": "Example: adding a project service",
        "anchor": "kickoffCustomization-16-example-adding-a-project-service",
        "level": 3
      },
      {
        "text": "Step-by-step: add project documentation",
        "anchor": "kickoffCustomization-17-step-by-step-add-project-documentation",
        "level": 2
      },
      {
        "text": "DevOps and rollback notes",
        "anchor": "kickoffCustomization-18-devops-and-rollback-notes",
        "level": 2
      },
      {
        "text": "Common mistakes",
        "anchor": "kickoffCustomization-19-common-mistakes",
        "level": 2
      },
      {
        "text": "Verification",
        "anchor": "kickoffCustomization-20-verification",
        "level": 2
      },
      {
        "text": "Continue",
        "anchor": "kickoffCustomization-21-continue",
        "level": 2
      },
      {
        "text": "Keep configuration small",
        "anchor": "kickoffCustomization-22-keep-configuration-small",
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
      "kickoff.local-acceptance",
      "kickoff.configuration-inheritance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "f396bde957e4cb7e3ea90b3c611c04d036722d8063438b874b49f19293d45ffb",
    "sourceWordCount": 2245,
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
    "active": true,
    "wordCount": 2245,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "modules/AGENTS.md",
      "package.json"
    ]
  },
  "record7": {
    "code": "kickoffDocsMetadatakickoffConfigurationInheritance",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.configuration-inheritance",
    "title": "Keep Kickoff configuration small",
    "summary": "Inherit framework defaults, share customer administration descriptors and keep deployment choices at their owners.",
    "businessSummary": "Keep Kickoff configuration small explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Keep Kickoff configuration small records owning module nodics.kickoff, technical module modules, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
    "ownerFunctionalModule": "nodics.kickoff",
    "technicalModule": "modules",
    "targetPage": "kickoffDocsPagekickoffConfigurationInheritance",
    "targetRoute": "kickoffDocsRoutekickoffConfigurationInheritance",
    "articleComponent": "kickoffDocsComponentkickoffConfigurationInheritance",
    "template": "kickoffDocumentationArticleTemplate",
    "searchMetadata": "kickoffDocsSearchpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "headings": [
      {
        "text": "Business outcome",
        "anchor": "kickoffConfigurationInheritance-1-business-outcome",
        "level": 2
      },
      {
        "text": "Understand the ownership before editing",
        "anchor": "kickoffConfigurationInheritance-2-understand-the-ownership-before-editing",
        "level": 2
      },
      {
        "text": "Why the ordering matters",
        "anchor": "kickoffConfigurationInheritance-3-why-the-ordering-matters",
        "level": 2
      },
      {
        "text": "Start with the smallest change",
        "anchor": "kickoffConfigurationInheritance-4-start-with-the-smallest-change",
        "level": 2
      },
      {
        "text": "Customize and extend safely",
        "anchor": "kickoffConfigurationInheritance-5-customize-and-extend-safely",
        "level": 2
      },
      {
        "text": "Preserve arrays and operational safeguards",
        "anchor": "kickoffConfigurationInheritance-6-preserve-arrays-and-operational-safeguards",
        "level": 2
      },
      {
        "text": "Send store context explicitly",
        "anchor": "kickoffConfigurationInheritance-7-send-store-context-explicitly",
        "level": 2
      },
      {
        "text": "Verification before operating",
        "anchor": "kickoffConfigurationInheritance-8-verification-before-operating",
        "level": 2
      },
      {
        "text": "Common mistakes, troubleshooting and rollback",
        "anchor": "kickoffConfigurationInheritance-9-common-mistakes-troubleshooting-and-rollback",
        "level": 2
      },
      {
        "text": "Commands and capability inventories",
        "anchor": "kickoffConfigurationInheritance-10-commands-and-capability-inventories",
        "level": 2
      },
      {
        "text": "Declarative environment and runtime configuration",
        "anchor": "kickoffConfigurationInheritance-11-declarative-environment-and-runtime-configuration",
        "level": 2
      },
      {
        "text": "Inherited provider and policy defaults",
        "anchor": "kickoffConfigurationInheritance-12-inherited-provider-and-policy-defaults",
        "level": 2
      },
      {
        "text": "Credentials, initialization and runtime authentication",
        "anchor": "kickoffConfigurationInheritance-13-credentials-initialization-and-runtime-authentication",
        "level": 2
      },
      {
        "text": "Browser origins and later overrides",
        "anchor": "kickoffConfigurationInheritance-14-browser-origins-and-later-overrides",
        "level": 2
      },
      {
        "text": "Application selections and optional features",
        "anchor": "kickoffConfigurationInheritance-15-application-selections-and-optional-features",
        "level": 2
      },
      {
        "text": "Enforcement and verification",
        "anchor": "kickoffConfigurationInheritance-16-enforcement-and-verification",
        "level": 2
      },
      {
        "text": "Local extraction ownership (2026-09-28)",
        "anchor": "kickoffConfigurationInheritance-17-local-extraction-ownership-2026-09-28",
        "level": 2
      },
      {
        "text": "Nexus accelerator migration",
        "anchor": "kickoffConfigurationInheritance-18-nexus-accelerator-migration",
        "level": 2
      },
      {
        "text": "Application policy and role selection",
        "anchor": "kickoffConfigurationInheritance-19-application-policy-and-role-selection",
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
      "kickoff.customization",
      "kickoff.local-runtime"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "0c0335e43d410ce5816389293411818b63be45d5fba5d57fa30cd63d75a3745f",
    "sourceWordCount": 4244,
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
    "active": true,
    "wordCount": 4244,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "modules/kickoffCore/config/properties.js",
      "modules/kickoffCore/package.json",
      "envs/kickoffLocal/platformServer/config/properties.js",
      "envs/kickoffDockerLocal/platformServer/config/properties.js",
      "test/configurationInheritanceContract.test.js"
    ]
  },
  "record8": {
    "code": "kickoffDocsMetadatakickoffFunctionalJourneys",
    "product": "kickoffDocumentationProduct",
    "documentId": "kickoff.functional-journeys",
    "title": "Commerce and Engagement functional journeys",
    "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
    "businessSummary": "Commerce and Engagement functional journeys explains customer-project purpose, supported operations, runtime impact, and implementation handoff.",
    "technicalSummary": "Commerce and Engagement functional journeys records owning module nodics.kickoff, technical module kickoffLocal, source path data/docs-v001/records/documentation/kickoffDocumentationComponentData.js, validation, and troubleshooting evidence.",
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
      },
      {
        "text": "Purchased coupons and physical goods follow different owners",
        "anchor": "kickoff-commerce-branch-boundaries",
        "level": 2
      },
      {
        "text": "Customize and verify the branch without new authority",
        "anchor": "kickoff-commerce-branch-customization",
        "level": 2
      },
      {
        "text": "Reviewed physical reverse gates",
        "anchor": "kickoff-reviewed-physical-reverse-gates",
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
        "kind": "table",
        "title": "Journey area, Business outcome, Kickoff proves, Owning authority"
      },
      {
        "kind": "table",
        "title": "Situation, Current boundary, Next owner"
      },
      {
        "kind": "table",
        "title": "Journey, Required retained proof, Not implied"
      }
    ],
    "visualRequirements": [
      "table",
      "diagram"
    ],
    "relatedPages": [
      "kickoff.overview",
      "kickoff.local-acceptance",
      "kickoff.customization",
      "accelerators.agora-apparel-product-data-authoring",
      "inventory.stock-management",
      "applications.axis-setup-error-contracts",
      "promotion.campaigns-coupon-issuance",
      "cart.customer-intent-calculation",
      "digital.purchase-delivery-reveal",
      "security.identity-access-governance"
    ],
    "sourceRepository": "nodics.kickoff",
    "sourcePath": "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
    "sourceChecksum": "49d84a53a5734b7ef287a9c5a8cbae1fb1f5f5aa6c2127aa84e6ef6676cc03c6",
    "sourceWordCount": 2138,
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
    "active": true,
    "wordCount": 2138,
    "sourceEvidence": [
      "data/docs-v001/records/documentation/kickoffDocumentationComponentData.js",
      "package.json",
      "envs/kickoffLocal/config/properties.js",
      "modules/agora.apparel/config/properties.js",
      "modules/agora.apparel/data/manifest.json",
      "modules/agora.apparel/data/sample-v001/operations/records/inventoryOpening.json",
      "modules/agora.apparel/data/sample-v001/operations/records/promotionSetup.json",
      "test/evidence/native-apparel-fresh-setup-and-replay-2026-10-08.json",
      "../nodics.ai/nodics.commerce/modules/baseCommerce/modules/inventory/src/service/defaultInventoryPhysicalReversalService.js",
      "../nodics.ai/nodics.commerce/modules/fulfillment/modules/fulfillmentCore/src/service/defaultPhysicalOrderReversalService.js",
      "../nodics.ai/nodics.commerce/modules/checkout/modules/order/src/service/defaultOrderRefundRecoveryService.js",
      "../nodics.ai/nodics.commerce/modules/fulfillment/modules/fulfillmentCore/test/physicalOrderReversalContract.test.js"
    ]
  }
};
