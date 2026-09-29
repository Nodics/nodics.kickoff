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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "760b193e0193f182975cebcf103059bee59f6ef86549ed5129b0e0c0d2bd3a3b",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9e9ede49b6b8f35846102922cd0a15523c6ea58297b99b52af74848c4884a802",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7ed18a4b682daf9af928d40945972941ed33446fc96c6092dc6dd20a2525c1ee",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "03b4d2b24c0fc192d2c71437607591a290b8dfbc2083be3d950a838d2c332eee",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9437f0927bb02b276dcc306fd56a045e7fd60a1895c521d5a60f08d5ca0a0dbe",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "aa50d271f9ad84d89bda1387ffc503480e558591608d03302a0363a34ae9e17b",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2997925989a690981fd565b85a2eff4654f55e4933c4f87f8382221f794a9fe3",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4fbd83ed363015a6249ab2804c01c4d86c48e0112662f7362fc8697b70c3a877",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f923ee92f738019a7609c4890702d5c540a60a8d99bf18cd1c1772b861392a45",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6e2c2447a2a5065475fe2c876c7ce2f1f2ed978eb9fb9c42e75fe75e10d0ba6d",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7ce7fe927e82fdca363419732d6e93ea78308f54c3cdbc544e94ae3467fd562e",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "049dafb93f224a411ec20aaf76b629c3f86a3dee81c127d93bd0c331bd2c0c22",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "eeb10f108e17a81534c070308414c8bde6bdb0e35379a506ea1326d637c56ac3",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4e409f7a1ba36067ccbf1fd2fa9e33d0f37c0c612e4f96b098906302c6460222",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "794a869e5bf756e073e456c36af526b12a8d468d8c40699905ff0533c3d1aeb1",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8f0a890c9e373595e91098f8a81230ddc4979abc0610815313cd1fa8bee79932",
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
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1c7ed887019fc42240deafd7ba31ad291fc0dba697e23de6556a05bfd3269959",
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
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffconfigurationinheritance",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffConfigurationInheritance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "15c309a2a3df41fa5882e5d94cfe2a0c252bf3c0abed93fd2633ca439614807b",
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
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofffunctionaljourneys",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffFunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f736fbfb0f1a49f200b1f42fbff467af23de85f32be774b7bcc72438665a032e",
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
  "record19": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardproduct",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardProduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b206c99e7611c994427cd5e5fa2b76bc7e6e2df7a958d2d21f80852037e47cdd",
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
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecdiscoverKickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9cf36dd20b30a195540fb4056c55dc8e21b4af6eebf7f33970b621441e43e9c3",
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
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecrunkickofflocally",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecrunKickoffLocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "23367396ddf9ce3596cbc8a32a3e06973d6c8745d22358137a0f80ff88c5a369",
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
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecpublishandqualify",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecpublishAndQualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "821b68dc77ed4d0d69b82a7cbc0e64395e79b823e6905e5ea15f18ba39c0ab27",
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
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSeccustomizeCustomerProjects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8af5a039f8155831d810901bd93cceef23a359697da955a2e8783baaa3c2201a",
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
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecfunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f306e1111ec4bb208d27ae53e5fafc40ab5da0bd92515f8781b3f841bb0c2b99",
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
  "record25": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffoverview",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffOverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "08e982c40663bb8a113727d3e634633c3479e890d0bfb414da5d30108da1d92f",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalruntime",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalRuntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d554764245619f6edf4d5d6b77c8dd56c5ed6fc7ebd07a7e8289b6f197708176",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalsetuptolive",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalSetupToLive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "06989ce3907166cb29c68d1b6aaac3de73a6d155dc5db2ab7b28b96bdd05caf2",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalacceptance",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalAcceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "54f8153d2f28ef5eb42a3590716fb681436487711a46a80281b13e0d649bf6c3",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalPublishingOperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1af8b0c2e117b09a4670d5b8e57f711d26267f59f7e148a46119cd0aad1d1b47",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffdeploymentqualification",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffDeploymentQualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "555faba6d06802efb7eb82083d221fa10307080c45da5c6bb39bac4894b23702",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffcustomization",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffCustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8533c58e318097c1fb8d51ea2e6150fff611a06a6c6adf3197b96c061eb28fac",
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
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffConfigurationInheritance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ed882cf4184e70af1891c49b1ee8c61296c7a9831fd73a807be705395aaad7b7",
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
  "record33": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofffunctionaljourneys",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffFunctionalJourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f36c4956b0e6b209d38509f46515e7de406b3780b7140a32bbf64724edc800a7",
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
  "record34": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchproductkickoffdocumentationproduct",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchproductkickoffdocumentationproduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c731ba9b64a8d145c9213f4c1b36a46b47b6c6a38ca1797191c3a4cd05f4db19",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnavigationkickoffdocumentationnavigationtree",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnavigationkickoffdocumentationnavigationtree",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "bc80638d1977eabff378ac0d7a89e22a316147f55b6446811d05195d380ce864",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnoderoot",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnoderoot",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6ec8803ea2c638b0e6d89e71bfabbf514b2074d7213fa9d11ea4f11bfcc9e15f",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecdiscoverkickoff",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecdiscoverkickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f4f3884af90c7f0e2b2e1c08de1c985250c804882a4d2f723ea0073447e25f96",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecrunkickofflocally",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecrunkickofflocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4309e57e7f3581cc8556e94acb9314356a781f7e1f8e6b7a219ba044b4d4bcd4",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecpublishandqualify",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecpublishandqualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1adb945130371cf661531723c5b9378c450407b7df8c265f43a3fdf7ad1cfd2f",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodeseccustomizecustomerprojects",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodeseccustomizecustomerprojects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f292c444643ea842ba7a26df0a1206130ff64b82d4544275e64f91809b500595",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecfunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecfunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e869acf9094782afbcc8076314961fe36e6e250362f74d8820e38f03b45ca515",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffoverview",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffoverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4af442f113db83f55f5d37714ef206373cf7985703f3a4dcae20e951b8f3d29e",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalruntime",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalruntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "90acdb4eace0a338cb17c08b4512e7451be1a73f29f4023c121fcb47abea885b",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalsetuptolive",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalsetuptolive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "accc44fa19b354079ddf23f895f57bc79f0dcc67ea536a99d72700123e4a504b",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalacceptance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalacceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "bb5816e8fffabc88c7a3aa2a240dbcf18cf799a7c8e36aa08b35eec553a129d8",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "dbf557e8f544316ec4ee1278ce3896f19c68fa5195d36a4b8e94f3c91ca1124e",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffdeploymentqualification",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffdeploymentqualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e500820e7e9165958ac2fa296ad0a3104ea98043d4acb747df6e2dd7d2e2ce15",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffcustomization",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffcustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "719103388f5435a3fc780486e5f70efc394f8830c105104f590fe646cb0bbac3",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffconfigurationinheritance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffconfigurationinheritance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "60f59686e2af44699f97724364858aa115b225a3612145122573a34fadb5253c",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofffunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofffunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "32f916aa73001c27811b914d2d3b603d8256ce0b7d2420691909cee5b5518893",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardproduct",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardproduct",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1c2c5d7fbece8409b851bf31a99b2f304af1d6446befe3366e38ac79d4434c43",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1f13343df3a25b9b8b894a17665e8c3df48e6de238f1442ee70804a36a87d96f",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecrunkickofflocally",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecrunkickofflocally",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3dd563f436b6efd1cd9cbdb47c7366c06637c98ac6d459158438f00df3deb310",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecpublishandqualify",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecpublishandqualify",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "22a0907bdec59295c2bf37ed992eda10c7d01971e4c38926534787227e28e170",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "44263579b12519df44b9c23f5bf34da1f411fa0095d245fda5b68622953be408",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f0c8773d4823f618aa7addb09d1f23029f10975a50097e595dd8fe7ca0947e4f",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffoverview",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffoverview",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8a89339551d841e57e64875cae4cf1f4213b6bb7a0985d325adff28ae8fe6733",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalruntime",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalruntime",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4e7df69825b5e68bd9356b376eba22dd873db46547ebc66f185a0043a34ed8a3",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b561216c63aa87711d7565c0f233039d259ea46439dd9bfd33a30d132218e6f1",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalacceptance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalacceptance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "75f8aa7c46de0fe99bc47f78f2644e15b4553db54ed71dfacf1f002dfacb7487",
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
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "54646a809c93c971fcedaa5251fb3e1e8a6e21c26445ce9beecc372413325921",
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
  "record62": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c31c678455bf0476e4ca2d3543b787562ac0d8b44827ad26e90ef3f608a2344d",
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
  "record63": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffcustomization",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffcustomization",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "124a6434dd0628c54a4e1c048dd8f015b77afe60c1018e588a0871d9c1e8f672",
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
  "record64": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7611f14c39c99cfecf922570fdc5f5ea28da4c581b1a101bdb6fb2babc7e5ef8",
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
  "record65": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "lifecycleState": "ONLINE",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.8.5",
    "onlineVersion": "0.8.5",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ca68ec5d0f8019df227bf95dac4db3cc5064ff71a27072c7ffd9c2da7ce88878",
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
