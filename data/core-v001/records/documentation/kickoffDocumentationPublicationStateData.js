/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation publication state metadata. */
module.exports = {
  "record0": {
    "code": "kickoffDocsPublicationproductkickoffdocumentationproduct",
    "targetType": "PRODUCT",
    "targetCode": "kickoffDocumentationProduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7d613d0495d7b936dbeadd56553582b010a4bb55227dd60b4b2d2a17dc0250fc",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.draft.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "CONTENT_CHANGE",
      "ACCESS_POLICY_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record1": {
    "code": "kickoffDocsPublicationnavigationkickoffdocumentationnavigationtree",
    "targetType": "NAVIGATION",
    "targetCode": "kickoffDocumentationNavigationTree",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d34909989d523b49dfff259f4940c3c99b3200104f8531f3b327bc9ad5811f7b",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record2": {
    "code": "kickoffDocsPublicationaccesspolicykickoffdocsaccesspublic",
    "targetType": "ACCESS_POLICY",
    "targetCode": "kickoffDocsAccessPublic",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f8ecd0c4ace21137cdd69f55fca8f3ab8251b3a8d64124ef84246ec89a9bec5a",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.accessPolicy.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "ACCESS_POLICY_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record3": {
    "code": "kickoffDocsPublicationaccesspolicykickoffdocsaccessauthenticated",
    "targetType": "ACCESS_POLICY",
    "targetCode": "kickoffDocsAccessAuthenticated",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1ca6509fbd0669102e175bdb75ded1a83ed68d2b3de8d367938707e59bae6195",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.accessPolicy.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "ACCESS_POLICY_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record4": {
    "code": "kickoffDocsPublicationnodekickoffdocsnoderoot",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeRoot",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6361b2ec7e94ee1a77b6a024886bafb5346649023384186139c1f3dbf55dd4bd",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record5": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecdiscoverkickoff",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecdiscoverKickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e0cd0db9c16bf1a41be6325d11b56b4ffd1da615e631640c5dae25c631b8be66",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record6": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecrunkickofflocally",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecrunKickoffLocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "5cf213ad548d7e9c1ee6f45efbc43a08b785cbae369c6c8b93203a6bcd444d2e",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record7": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecpublishandqualify",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecpublishAndQualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "95ddbc6ceece59935c57d737759e28c1bee45c275f1106180e83375c726a123d",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record8": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodeseccustomizecustomerprojects",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSeccustomizeCustomerProjects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7d4f64e177ebde050476fc6d9afebaa1ea9a3ade2edc12a97182ed8d2e9963da",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record9": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecfunctionaljourneys",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecfunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0f58c9a0cbe093168ed7f89605a0f02c0a527e66d4075eeabb0e82999122d5c2",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record10": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffoverview",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffOverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "fc05a79ca07a9350ef282eabf8c93c22ed77f67dcff17e4a8effa10255a6b9ab",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record11": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalruntime",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalRuntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "42c1eb9271a5b587bfd4a86d63d699ab3edf8a13b4dc2a1b9ab2cfa51f9a8e59",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record12": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalsetuptolive",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalSetupToLive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1f9a5ec3bb88dee8c79688bf3e2cada89c25e724ab3857e76f1414ba5859cc5a",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record13": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalacceptance",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalAcceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "327020a63f40aa3493dc2d2e46c17cddd782af8fca53fc77f1ea0b5d216bef23",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record14": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalPublishingOperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "747118f3316b89c2d3a03c188f0d6e4bfc1fe210740f91ecb9bb8415bd7fc13e",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record15": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffdeploymentqualification",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffDeploymentQualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c92ff8ebb6690bc6736f95668dfc3868197bd2ff937f209447afa2bf056907de",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record16": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffcustomization",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffCustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "fddabcb2fa2450f0f0bd30e548dbced2b542eefe3f80ad5668b2ecdabe9fca9e",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record17": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofffunctionaljourneys",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffFunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d16b6010c73e2e683be47faf6715ebc47838c7a20ce1a0764ac75c58ed45f5d0",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record18": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardproduct",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardProduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ab649ef2fa4dba6b35d2dcff4b80ee8fc26017e6895604870065d078c3dc35e4",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record19": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecdiscoverKickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8142103952ed47e97b71e89cca5d9bacab317488e22356473142d6de66f86f0b",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record20": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecrunkickofflocally",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecrunKickoffLocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "abab4c197a62e1ec6b247dae10483f075ce0415188a6f7a2b57dd21d8b607e52",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record21": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecpublishandqualify",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecpublishAndQualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9949c88ef11aabad5bae9b86c578eedaf18357e5931e54348427679f2437683c",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record22": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSeccustomizeCustomerProjects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "94109a94e02f58e54d582942d5e7a8b7dcfdbc33c14922bc1a72f682562a71a1",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record23": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecfunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f00cdfc6d80be6910f6f36e400ab804a158a5ae87456656e6ad22065153a591b",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.dashboard.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "DASHBOARD_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record24": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffoverview",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffOverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0e68f6a16fcacfb0fcb5d5bbb795834558b093303d023cf8acc9b3532f0751b8",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record25": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalruntime",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalRuntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1b2b7def96885c97428b9d90335aab75be4a62f9b20f90d9535cc6f924ce4ac9",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record26": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalsetuptolive",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalSetupToLive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a93d262d2926828b1a27c5626e4d678dd1af9430c7db00856ea2ee36ab98dc9b",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record27": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalacceptance",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalAcceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "51984db4cc92969772b7f8ee0d35040c13691e9633676f1c9cf62531fa706ed4",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record28": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalPublishingOperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7b4bed8bf462faba64964209a3b63d0e3283857c736197fdee92e354de5c76bb",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record29": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffdeploymentqualification",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffDeploymentQualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "169f360bc133cb807b041a8c2aea8f14cf4cea22a8e4fe95b9edfcaadddaab1b",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record30": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffcustomization",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffCustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8565eb757fbeef5527b53a22480cc02eb27b69e70391327bacf6d52ba771389e",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record31": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofffunctionaljourneys",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffFunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e1a870f8f6f404589b9590c63560ecc6900147b766ac43fa090cf3726e3fc7f4",
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
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record32": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchproductkickoffdocumentationproduct",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchproductkickoffdocumentationproduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6ed29ce8f45de97e3b891067c4c5274c1754630f248a23ace4238a6577a2c663",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record33": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnavigationkickoffdocumentationnavigationtree",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnavigationkickoffdocumentationnavigationtree",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "30e3692929bd051287fe61803df35b073fe15cb10723171473546e25aac4aaf6",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record34": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnoderoot",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnoderoot",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "58df0537ce1c0ff6ce8127cb93f17826a8c00b5eaa5da57929ec7ce619506e19",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record35": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecdiscoverkickoff",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecdiscoverkickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "83a11789c430b25026348532059a236ce95cfd4518128ca113f9a371033ddbdd",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record36": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecrunkickofflocally",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecrunkickofflocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ce7c7f15dcd25d2b5b4177efe23350580177e91124a5de3faa3e67c1022a1797",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record37": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecpublishandqualify",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecpublishandqualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "18af64efd638aecbb8cad9fed02e82cb11a6384d19e0b36a54ae0523d716681e",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record38": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodeseccustomizecustomerprojects",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodeseccustomizecustomerprojects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9e69063f8125a531b7f114cb79c2ad36b5770d512fc0e932d3d13ab34b3f4b48",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record39": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecfunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecfunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "84218a810d3c01f8b928b5437e7fa86f531b1d90b22db3911e4d28dbbcabec81",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record40": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffoverview",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffoverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e1a98883a58670d67f3ba959da90d5030cb4a4a765a0dbb0d9dd311ad8592d75",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record41": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalruntime",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalruntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "5ccebfb07586794193214f5a9319a0fe5d836ae0c15b63e289cf5f85deca275a",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record42": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalsetuptolive",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalsetuptolive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ecbd76ce5d719152339926dedf3f74fe871e0fa7a8dae606780e1d867aeff3ec",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record43": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalacceptance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalacceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "10bc52d5aa89bf2509700ba12656c3cc6334c2dbe5b47bdc1425580aa1b4f7e2",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record44": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7ab5e17b82f0fa997c7a3e3bebfc4a76cc47ffcc5a57f0a49d766ca34bf76ecc",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record45": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffdeploymentqualification",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffdeploymentqualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "95c89b5c84eb94ff849ec052c98de916f11a1beb87f4e0bfc2fbf05bb2aa8492",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record46": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffcustomization",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffcustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "38b89e24a0dd86ffa6570a5e288f0813e240baf37b063ffb800251bbcbd56052",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record47": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofffunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofffunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ddb143334d0daad092221eddb02cf63e5e1db246b8576781b7a6c62efdb8bc16",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record48": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardproduct",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardproduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "388e24dfb13beec9ccd105111b83866d76ca34a3f4797e8946a08d4987b644a4",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record49": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "00fac5064b0ae0a9b11cab5e296c3ff7ef8a88af4082d11a8b5569bc6eea0090",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record50": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecrunkickofflocally",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecrunkickofflocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8d0cab54f985b839d79c59a9b62d70363bfcc4195a8a71d879d43a8d0496458b",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record51": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecpublishandqualify",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecpublishandqualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1e3e6e10596b48dac4220a86fb6c2967f29d8c6007b7c1772364f0d75787d59b",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record52": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "64ab7d9055f1a2e513412708ff501dfe3368f4c1762f9b9f36558072c8189970",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record53": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7cf4135f270693639c61ca14ae47eea8f6ae3aa1ec8291985551aed32a1b2419",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record54": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffoverview",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffoverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2c96f39be3cb32510db5436c301525e4214f2a672e8273f7cfb85f29de8e2b88",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record55": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalruntime",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalruntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e6ab2f0364ddf5f21935c74ef0caf4a8f5a04128d11bb4e5f8afaed67d7386d3",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record56": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a19ba882881c515b6b9ae2f496ff9f1dde30826019a4951283d6f2bb525ea249",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record57": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalacceptance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalacceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9df40db7b1f8127777c0ef26fe924824528d1236f3495c4c52535a714a497c75",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record58": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "22d4875852f6b7b27eae0b02de2d5468e14b87cf049716ec4d699da521a2a4d4",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record59": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "70c34666c2c93512f173718b56e3093ec9edb07d24ba35e1833d19369b854f31",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record60": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffcustomization",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffcustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3ab4f58228e449e9847b0c6200a92eb4dda13bc69e3d6113e68d799029d53c03",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record61": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "nexusVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "af84a1ef9989cac469307eb211fa13d25c2f7fdaa571507b55ba98a1f63e36f7",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.search.preview"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "SEARCH_METADATA_CHANGE"
    ],
    "decisionPolicy": {
      "reviewPermission": "documentation.review",
      "approvePermission": "documentation.approve",
      "publishPermission": "documentation.publish",
      "permissionEnforced": true,
      "adminOverrideAudited": true
    },
    "actor": "nodics.kickoff.generator",
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  }
};
