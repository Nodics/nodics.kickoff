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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2143b1dc62a2d9511926d22bdf0d4818282182f0ac4b2f0fdf392b06f693e662",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "54935ba3ecc0a6cbc12818e35d5a927eed1790cc4092f3136131ae45bba551f5",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "62665899b0a45596aa325f423a16861c0ed5dcc5c6c71a1968dad618d80ad359",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b092cba9f68e30750f83e0e9951b74c940b2bcf54000a68d3ea198e5e14ad558",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "65912e186477101a74e4f582be8143ec710e253e55c1925c687b894fc466d1f6",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a4ece6a1022e36da4f9d0555a1b140b6f57e897494cbb6d2344987bbc8d1e949",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d86c08b83ebe6944f9bec1c66a88070ec5a422d0dc439aa021e2b16850d592e3",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "dcf6474159a874abb64809180afffd1d1b296f12fc58c39768617b594167d8ba",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ad395d0fb67b4e20c1ff1f6b557485f5294aec005b3ac9b2d71c3fcf66702a65",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2c1f0fad9bcdb14b037e1d019cd04947db859e468436331db423636873375495",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6683593a018869c98497056e025235bd824eb274cc7795c2e58918fc9123b94a",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "72ce4fc59b64ea674627d6e284e45ea0bb3ab9c276fc3aac08ca4b026e6c0755",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a8896ead5515719ed341b1280168061576b3e20ad23e71f8a8d89d042e3831b4",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ddb032d5c14fbbe599d61015875d02eecbb5c733b56b6ebe819bd373a776134b",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "12bb83733d837c846c094af113564588495cb26eee542d6f6766cba91ae40832",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "fc687364a8bbef4d74d3cccd6a4ac1ce8a876328245cefc1bc308714baf8c43f",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "81542deb5e53120cafcaaa1e3372f0dea50fb97a949d30947b71858ae60c00f6",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7a8fca05186dc700695f0fd8e3bc96476f6357ed3496b7ecb7bc328bfe7a915a",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "18d4dd57c57df9f56e8beb6b0e1c40914ed469e5b875da40c027d53587042c32",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b1ff44920d796f8a58bdbff733e545f735f5a2018cc7600ad8e81a8dd194e47e",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "53b7b0e2bcd372b568e9c0d6cd2768b957a1007a1c384b1c18ac54ecead7e56e",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7b29eefae289d74beaa37b2e84325f5faf16ba4c37bba65d86669a7f4dca54d9",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "93be9ccb7d74674b0d1564ddd1b98a9c2785558581a85730dd28ec5412255530",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "174d808a6818bb1b710c42375ca7885d4de1b7d149d4b076acef0d7b9147a18a",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "506643248d287f87d38e8c5251b8a99a0820141dd1004c63a9f80d41f3454e66",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b048f88582ef88e1c3a9343438584e9e6331b2e4f16b8caaaf920e2153e88eaa",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "437e1ec309a4e01259520d14f627aed4838e3740abe69b5464d2422e0870a781",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f0e25c8cb272548fa00d62e3c48b368fb786195fefd8ac867e3f5e0f929c7a2f",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e835a45f27d7db6f5c01b2be8d2751d7ae772124a6e3bcb08a833fbdbeaae230",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6aca2b59d8ff0044561eb1a2cf42284c880ca59e07e3de712fed4145870deb85",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8a55b1146eca248e65fc9a743f77dcd935fa90367710412b742696a8bc4e10df",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "cebb2ae5ebb4b522367120ca642338aeb568f5900aa60a852c41156549a285fb",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3662c1bc793064d73ed3b1155fe104da583a00e3a3c3412a6325c8669f21d0ea",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "87cb7def2d16b707742f71d0542cb3db686a30b1cc55bc60f38e21e51760281e",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9823b1f928a5d4fa44eaed373c9d752b63ff89e3fd0c58216ee7585ce0aec014",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "dd4f9b7ee2b54c25fb75cd3ba1e33263fc27ff1fb40ae38baec690c528d411f1",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1afe77787a86ac10893c62a2c2da3bab2ffe518d018c1db62880bc3d2349fc88",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d0da2c04df1b759259e252d97101dbe8c4f33a80f99ebec20483ccc9512d53c1",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8c3e23948657427bd915cfe754f99c000037afe219ad6604c2097e9b8ea292de",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "de38c39374fb95f59c0fb765a1b94261264a0697592b5617760ed89b8b815312",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "24023701628605544918061b225f4c7e8c97921137815811631f852068462c2d",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c625d5aa67bf6dc209d981f63db54b3fe8f06e8835f9ad6a624c5bb4e4d3dd8d",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "cffa688aeeb479dea47049dc989a912f2e80da8970bae114ff2c4cede29663ec",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "843019d13c1e28a539d393161d574d73fa4e0283008cb10c615cdf1b86c78485",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f25e816ca6e56173848039259f71e5ac9b5a2ad9049f1e9f4d5951033c335686",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "683f5b5e431b15a9bdabe62ca742b3212967ca9ec2f16c41e4133468ecf4b550",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8cab9b019335cd6340a6125e5c55afd290f74c3a2e45217600e93b4b1f742edb",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "74e6cf3324b724c4345798489bc6a264deadaf963136d8d3536e2ffeb1391c78",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "cc16639ed39e4ed6ce5f13c7b594855d60f30fe7aa74763c462cd1bb56793ae2",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "44c7e5d59e5b5578c1b671c13bebe9689a2334915478d224243918436ac5aaf6",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "78781e0364b4e94d00357a8122a04022bada07051030f9f231f4a1b0c9aca486",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ae70706a6acf52783f85d590a81dfde40b020a14b35a0928495638b115396455",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0a973a33e3331b24ace907944ad9e9b05ad590e2f75bc34a06396fda37ae6c49",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8f9a1f12699c1aceb1056a02e2f5fcbf7652dce4a277b009d74eab9f9c936597",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f13edbd9f7dbcd8f102350ff88ee7ed998dbd03231c3cda4eca218271eac6542",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3c8b2c8f077b926149db46df44bb6a3fa758e30090d66e451b95f49109e31564",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f351d12b017548d8b41cbf57c7b9266888a7b229f2579943ef863dc1b6e098f2",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0fdb70d4623ae11fb03b7e8573291da4b670c38541b0c5090d207a57c142d92d",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "25502d618b09eaf2a4ab82647e4470e7b31d990170225825d77c5ec42b77de97",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8dbb2eb1c914d9a78fb59dc39f3747e209e3a49cc635f3e88fccd4ad38db1b99",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b44f093b499986543c3c9792df41934af9356642d98122bc5463f26b9e935477",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "99ed677b01c23100675ae43e602c08a1b5d8db22c8cfffa3b325142ba6813c44",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "118c7a52bbb15a72506062029a176ad94f95dd3bc1726ecaf35b0ecaca570348",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d1fa51c0a2e8dbc5bd146055919c157acb0a29f8babf6524697c7dcc63340f63",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "09e6408c9ee5d7ac4e1a0f5167ada286fc866ebed9cc8eb2599ba63604370609",
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
    "stagedVersion": "0.8.11",
    "onlineVersion": "0.8.11",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "cbd22fea96270f60db6ce6a429e9a49e5253b1dcd5e500d6f91d78b234891435",
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
