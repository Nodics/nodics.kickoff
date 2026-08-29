/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation hierarchy nodes. */
module.exports = {
  "record0": {
    "code": "kickoffDocsNodeRoot",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "nodeLevel": "SECTION",
    "nodeType": "CONTAINER",
    "nodeTitle": "Nodics Kickoff Documentation",
    "nodeSummary": "Root node for customer project documentation rendered through backend-owned, Axis-manageable content-catalog records.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardProduct"
    },
    "nodeDashboard": "kickoffDocsDashboardProduct",
    "childSummaryCards": [
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
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 5,
      "pages": 8
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": true,
    "nodeIcon": "book-open",
    "nodeAudience": [
      "business",
      "architect",
      "administrator",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "kickoff",
      "customer project",
      "documentation"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record1": {
    "code": "kickoffDocsNodeSecdiscoverKickoff",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeRoot",
    "nodeLevel": "SECTION",
    "nodeType": "CONTAINER",
    "nodeTitle": "Discover Kickoff",
    "nodeSummary": "Project identity, ownership boundaries, and the business reason Kickoff exists as a reference customer workspace.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardSecdiscoverKickoff",
      "pages": [
        "kickoff.overview"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardSecdiscoverKickoff",
    "childSummaryCards": [
      {
        "code": "project-identity-and-ownership",
        "title": "Project Identity and Ownership",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Kickoff project overview",
        "targetPage": "kickoff.overview",
        "route": "/docs/nodics-kickoff"
      }
    ],
    "childStatusSummary": {
      "childCount": 1,
      "pages": 1
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "discover-kickoff",
      "Discover Kickoff"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record2": {
    "code": "kickoffDocsNodeSecrunKickoffLocally",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeRoot",
    "nodeLevel": "SECTION",
    "nodeType": "CONTAINER",
    "nodeTitle": "Run Kickoff Locally",
    "nodeSummary": "Local runtime topology, start sequence, acceptance checks, and developer/operator verification for the reference stack.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardSecrunKickoffLocally",
      "pages": [
        "kickoff.local-runtime",
        "kickoff.local-setup-to-live",
        "kickoff.local-acceptance"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardSecrunKickoffLocally",
    "childSummaryCards": [
      {
        "code": "runtime-topology",
        "title": "Runtime Topology",
        "order": 10
      },
      {
        "code": "acceptance-and-verification",
        "title": "Acceptance and Verification",
        "order": 20
      }
    ],
    "childJourneyLinks": [
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
    "childStatusSummary": {
      "childCount": 2,
      "pages": 3
    },
    "nodeOrder": 20,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "run-kickoff-locally",
      "Run Kickoff Locally"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record3": {
    "code": "kickoffDocsNodeSecpublishAndQualify",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeRoot",
    "nodeLevel": "SECTION",
    "nodeType": "CONTAINER",
    "nodeTitle": "Publish and Qualify",
    "nodeSummary": "Local publishing operations, deployment qualification evidence, recovery rules, and production-boundary discipline.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardSecpublishAndQualify",
      "pages": [
        "kickoff.local-publishing-operations",
        "kickoff.deployment-qualification"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardSecpublishAndQualify",
    "childSummaryCards": [
      {
        "code": "publishing-operations",
        "title": "Publishing Operations",
        "order": 10
      },
      {
        "code": "deployment-qualification",
        "title": "Deployment Qualification",
        "order": 20
      }
    ],
    "childJourneyLinks": [
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
    "childStatusSummary": {
      "childCount": 2,
      "pages": 2
    },
    "nodeOrder": 30,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "publish-and-qualify",
      "Publish and Qualify"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record4": {
    "code": "kickoffDocsNodeSeccustomizeCustomerProjects",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeRoot",
    "nodeLevel": "SECTION",
    "nodeType": "CONTAINER",
    "nodeTitle": "Customize Customer Projects",
    "nodeSummary": "Project-layer customization examples, configuration-first decisions, documentation placement, and rollback-safe extension guidance.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardSeccustomizeCustomerProjects",
      "pages": [
        "kickoff.customization"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardSeccustomizeCustomerProjects",
    "childSummaryCards": [
      {
        "code": "project-customization",
        "title": "Project Customization",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Customer customization guide",
        "targetPage": "kickoff.customization",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      }
    ],
    "childStatusSummary": {
      "childCount": 1,
      "pages": 1
    },
    "nodeOrder": 40,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "customize-customer-projects",
      "Customize Customer Projects"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record5": {
    "code": "kickoffDocsNodeSecfunctionalJourneys",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeRoot",
    "nodeLevel": "SECTION",
    "nodeType": "CONTAINER",
    "nodeTitle": "Functional Journeys",
    "nodeSummary": "Commerce, Engagement, provider, privacy, reversal, and operator journeys demonstrated by the reference customer project.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardSecfunctionalJourneys",
      "pages": [
        "kickoff.functional-journeys"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardSecfunctionalJourneys",
    "childSummaryCards": [
      {
        "code": "commerce-and-engagement-journeys",
        "title": "Commerce and Engagement Journeys",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Commerce and Engagement functional journeys",
        "targetPage": "kickoff.functional-journeys",
        "route": "/docs/nodics-kickoff/kickoff-functional-journeys"
      }
    ],
    "childStatusSummary": {
      "childCount": 1,
      "pages": 1
    },
    "nodeOrder": 50,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "functional-journeys",
      "Functional Journeys"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record6": {
    "code": "kickoffDocsNodeGrpdiscoverKickoffprojectIdentityAndOwnership",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSecdiscoverKickoff",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Project Identity and Ownership",
    "nodeSummary": "Business-friendly group for Project Identity and Ownership topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrpdiscoverKickoffprojectIdentityAndOwnership",
      "pages": [
        "kickoff.overview"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrpdiscoverKickoffprojectIdentityAndOwnership",
    "childSummaryCards": [
      {
        "code": "kickoff.overview",
        "title": "Kickoff project overview",
        "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Kickoff project overview",
        "targetPage": "kickoff.overview",
        "route": "/docs/nodics-kickoff"
      }
    ],
    "childStatusSummary": {
      "childCount": 1
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "kickoff",
      "reference project",
      "customer project",
      "documentation"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record7": {
    "code": "kickoffDocsNodeTopickickoffOverview",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrpdiscoverKickoffprojectIdentityAndOwnership",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Kickoff project overview",
    "nodeSummary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff",
      "documentType": "overview"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffOverview",
    "targetPage": "kickoffDocsPagekickoffOverview",
    "targetRoute": "kickoffDocsRoutekickoffOverview",
    "nodeOrder": 10,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "kickoff",
      "reference project",
      "customer project",
      "documentation"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffLocalRuntime",
      "kickoffDocsNodeTopickickoffCustomization",
      "kickoffDocsNodeTopickickoffFunctionalJourneys"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record8": {
    "code": "kickoffDocsNodeGrprunKickoffLocallyruntimeTopology",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSecrunKickoffLocally",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Runtime Topology",
    "nodeSummary": "Business-friendly group for Runtime Topology topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrprunKickoffLocallyruntimeTopology",
      "pages": [
        "kickoff.local-runtime",
        "kickoff.local-setup-to-live"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrprunKickoffLocallyruntimeTopology",
    "childSummaryCards": [
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
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Local runtime topology",
        "targetPage": "kickoff.local-runtime",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      {
        "label": "Local setup to live runbook",
        "targetPage": "kickoff.local-setup-to-live",
        "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live"
      }
    ],
    "childStatusSummary": {
      "childCount": 2
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "local runtime",
      "topology",
      "start",
      "servers"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record9": {
    "code": "kickoffDocsNodeTopickickoffLocalRuntime",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrprunKickoffLocallyruntimeTopology",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Local runtime topology",
    "nodeSummary": "Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-local-runtime",
      "documentType": "operations"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffLocalRuntime",
    "targetPage": "kickoffDocsPagekickoffLocalRuntime",
    "targetRoute": "kickoffDocsRoutekickoffLocalRuntime",
    "nodeOrder": 10,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "local runtime",
      "topology",
      "start",
      "servers"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffOverview",
      "kickoffDocsNodeTopickickoffLocalAcceptance",
      "kickoffDocsNodeTopickickoffDeploymentQualification"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record10": {
    "code": "kickoffDocsNodeTopickickoffLocalSetupToLive",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrprunKickoffLocallyruntimeTopology",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Local setup to live runbook",
    "nodeSummary": "Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live",
      "documentType": "how-to"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffLocalSetupToLive",
    "targetPage": "kickoffDocsPagekickoffLocalSetupToLive",
    "targetRoute": "kickoffDocsRoutekickoffLocalSetupToLive",
    "nodeOrder": 15,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "local setup",
      "axis login",
      "guided setup",
      "live verification",
      "screenshots"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffLocalRuntime",
      "kickoffDocsNodeTopickickoffLocalAcceptance",
      "kickoffDocsNodeTopickickoffLocalPublishingOperations"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record11": {
    "code": "kickoffDocsNodeGrprunKickoffLocallyacceptanceAndVerification",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSecrunKickoffLocally",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Acceptance and Verification",
    "nodeSummary": "Business-friendly group for Acceptance and Verification topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrprunKickoffLocallyacceptanceAndVerification",
      "pages": [
        "kickoff.local-acceptance"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrprunKickoffLocallyacceptanceAndVerification",
    "childSummaryCards": [
      {
        "code": "kickoff.local-acceptance",
        "title": "Local acceptance checklist",
        "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
        "order": 20
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Local acceptance checklist",
        "targetPage": "kickoff.local-acceptance",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      }
    ],
    "childStatusSummary": {
      "childCount": 1
    },
    "nodeOrder": 20,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "acceptance",
      "fresh local",
      "verification",
      "checklist"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record12": {
    "code": "kickoffDocsNodeTopickickoffLocalAcceptance",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrprunKickoffLocallyacceptanceAndVerification",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Local acceptance checklist",
    "nodeSummary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-local-acceptance",
      "documentType": "operations"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffLocalAcceptance",
    "targetPage": "kickoffDocsPagekickoffLocalAcceptance",
    "targetRoute": "kickoffDocsRoutekickoffLocalAcceptance",
    "nodeOrder": 20,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "acceptance",
      "fresh local",
      "verification",
      "checklist"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffLocalRuntime",
      "kickoffDocsNodeTopickickoffLocalPublishingOperations",
      "kickoffDocsNodeTopickickoffFunctionalJourneys"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record13": {
    "code": "kickoffDocsNodeGrppublishAndQualifypublishingOperations",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSecpublishAndQualify",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Publishing Operations",
    "nodeSummary": "Business-friendly group for Publishing Operations topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrppublishAndQualifypublishingOperations",
      "pages": [
        "kickoff.local-publishing-operations"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrppublishAndQualifypublishingOperations",
    "childSummaryCards": [
      {
        "code": "kickoff.local-publishing-operations",
        "title": "Local publishing operations",
        "summary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Local publishing operations",
        "targetPage": "kickoff.local-publishing-operations",
        "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations"
      }
    ],
    "childStatusSummary": {
      "childCount": 1
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "publishing",
      "staged",
      "online",
      "recovery"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record14": {
    "code": "kickoffDocsNodeTopickickoffLocalPublishingOperations",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrppublishAndQualifypublishingOperations",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Local publishing operations",
    "nodeSummary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations",
      "documentType": "operations"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffLocalPublishingOperations",
    "targetPage": "kickoffDocsPagekickoffLocalPublishingOperations",
    "targetRoute": "kickoffDocsRoutekickoffLocalPublishingOperations",
    "nodeOrder": 10,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "publishing",
      "staged",
      "online",
      "recovery"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffLocalAcceptance",
      "kickoffDocsNodeTopickickoffDeploymentQualification"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record15": {
    "code": "kickoffDocsNodeGrppublishAndQualifydeploymentQualification",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSecpublishAndQualify",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Deployment Qualification",
    "nodeSummary": "Business-friendly group for Deployment Qualification topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrppublishAndQualifydeploymentQualification",
      "pages": [
        "kickoff.deployment-qualification"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrppublishAndQualifydeploymentQualification",
    "childSummaryCards": [
      {
        "code": "kickoff.deployment-qualification",
        "title": "Deployment qualification",
        "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
        "order": 20
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Deployment qualification",
        "targetPage": "kickoff.deployment-qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      }
    ],
    "childStatusSummary": {
      "childCount": 1
    },
    "nodeOrder": 20,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "deployment",
      "qualification",
      "evidence",
      "production"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record16": {
    "code": "kickoffDocsNodeTopickickoffDeploymentQualification",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrppublishAndQualifydeploymentQualification",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Deployment qualification",
    "nodeSummary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-deployment-qualification",
      "documentType": "operations"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffDeploymentQualification",
    "targetPage": "kickoffDocsPagekickoffDeploymentQualification",
    "targetRoute": "kickoffDocsRoutekickoffDeploymentQualification",
    "nodeOrder": 20,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "deployment",
      "qualification",
      "evidence",
      "production"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffLocalRuntime",
      "kickoffDocsNodeTopickickoffLocalPublishingOperations"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record17": {
    "code": "kickoffDocsNodeGrpcustomizeCustomerProjectsprojectCustomization",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSeccustomizeCustomerProjects",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Project Customization",
    "nodeSummary": "Business-friendly group for Project Customization topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrpcustomizeCustomerProjectsprojectCustomization",
      "pages": [
        "kickoff.customization"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrpcustomizeCustomerProjectsprojectCustomization",
    "childSummaryCards": [
      {
        "code": "kickoff.customization",
        "title": "Customer customization guide",
        "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Customer customization guide",
        "targetPage": "kickoff.customization",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      }
    ],
    "childStatusSummary": {
      "childCount": 1
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "customization",
      "project module",
      "overlay",
      "configuration"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record18": {
    "code": "kickoffDocsNodeTopickickoffCustomization",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrpcustomizeCustomerProjectsprojectCustomization",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Customer customization guide",
    "nodeSummary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-customization",
      "documentType": "customization"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffCustomization",
    "targetPage": "kickoffDocsPagekickoffCustomization",
    "targetRoute": "kickoffDocsRoutekickoffCustomization",
    "nodeOrder": 10,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "customization",
      "project module",
      "overlay",
      "configuration"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffOverview",
      "kickoffDocsNodeTopickickoffLocalRuntime",
      "kickoffDocsNodeTopickickoffLocalAcceptance"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record19": {
    "code": "kickoffDocsNodeGrpfunctionalJourneyscommerceAndEngagementJourneys",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeSecfunctionalJourneys",
    "nodeLevel": "GROUP",
    "nodeType": "CONTAINER",
    "nodeTitle": "Commerce and Engagement Journeys",
    "nodeSummary": "Business-friendly group for Commerce and Engagement Journeys topics.",
    "nodeContentArea": {
      "dashboard": "kickoffDocsDashboardGrpfunctionalJourneyscommerceAndEngagementJourneys",
      "pages": [
        "kickoff.functional-journeys"
      ]
    },
    "nodeDashboard": "kickoffDocsDashboardGrpfunctionalJourneyscommerceAndEngagementJourneys",
    "childSummaryCards": [
      {
        "code": "kickoff.functional-journeys",
        "title": "Commerce and Engagement functional journeys",
        "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
        "order": 10
      }
    ],
    "childJourneyLinks": [
      {
        "label": "Commerce and Engagement functional journeys",
        "targetPage": "kickoff.functional-journeys",
        "route": "/docs/nodics-kickoff/kickoff-functional-journeys"
      }
    ],
    "childStatusSummary": {
      "childCount": 1
    },
    "nodeOrder": 10,
    "expandable": true,
    "expandedByDefault": false,
    "nodeIcon": "folder-open",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "commerce",
      "engagement",
      "customer journey",
      "provider"
    ],
    "relatedNodes": [],
    "locale": "en",
    "channel": "web",
    "active": true
  },
  "record20": {
    "code": "kickoffDocsNodeTopickickoffFunctionalJourneys",
    "product": "kickoffDocumentationProduct",
    "navigation": "kickoffDocumentationNavigationTree",
    "parentNode": "kickoffDocsNodeGrpfunctionalJourneyscommerceAndEngagementJourneys",
    "nodeLevel": "TOPIC",
    "nodeType": "PAGE",
    "nodeTitle": "Commerce and Engagement functional journeys",
    "nodeSummary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
    "nodeContentArea": {
      "route": "/docs/nodics-kickoff/kickoff-functional-journeys",
      "documentType": "how-to"
    },
    "childSummaryCards": [],
    "childJourneyLinks": [],
    "childStatusSummary": {
      "childCount": 0
    },
    "targetDocumentationPage": "kickoffDocsMetadatakickoffFunctionalJourneys",
    "targetPage": "kickoffDocsPagekickoffFunctionalJourneys",
    "targetRoute": "kickoffDocsRoutekickoffFunctionalJourneys",
    "nodeOrder": 10,
    "expandable": false,
    "expandedByDefault": false,
    "nodeIcon": "file-text",
    "nodeAudience": [
      "business-user",
      "administrator",
      "architect",
      "developer",
      "operator",
      "qa",
      "ai-tool"
    ],
    "accessPolicy": "kickoffDocsAccessPublic",
    "accessMode": "PUBLIC",
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE",
      "DASHBOARD_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "lifecycleState": "ONLINE",
    "maturityState": "IMPLEMENTED",
    "searchKeywords": [
      "commerce",
      "engagement",
      "customer journey",
      "provider"
    ],
    "relatedNodes": [
      "kickoffDocsNodeTopickickoffOverview",
      "kickoffDocsNodeTopickickoffLocalAcceptance",
      "kickoffDocsNodeTopickickoffCustomization"
    ],
    "locale": "en",
    "channel": "web",
    "active": true
  }
};
