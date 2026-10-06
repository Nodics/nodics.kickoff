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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "359cbfbb9a7a9bdc13d499ba69ce7fb16b52d56a4cc2ffc08fd4a2108f4fca9e",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1bf6f47bde982a43bca5e6678102911252baee175bee4a0038c9eb078212c7ef",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "96b302eb151018b7c826b7c6ebb19cdc15c0d9a6be73a7c06c44b822fefdf494",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f674c225f0e2d8f5bbd51c01344017371e3c40e7e1595c5fbf67dac7a5caa716",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "772bebdbdaef4b9c11a935425978cf1ae3bb365d301d6d71cc990a2ab648aab2",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4c9847800bdf8e7ebf0ac46f8e31649129cf76229abbcc207852af8595a68c59",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "5f20f64cd73bcc2e8184d4929b1078f82d874d959ea422ef0937e486eddd1cf0",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f628585249a9e70e8b505a797a48fa7bca66e009c38060d6de000ba027f476d3",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2563b07e2f571cfc3b96573b7ff617d51e7b6cfba9412d7a444331a669ddaf8e",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "764714c1aa009659aabcb3480470ab18864ebc1f60306e06761bfb0fb3d5b047",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a220de23125c29611a2c6df2cbeb5a1d692ae6783566b3cc32b49cbb2fc33a6f",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f5f82f498269e9cf9a5564e3d8b5a960fd32ca8fd75eb39d3a59769516075c48",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b5138ef2b70fe0c86d6812b3116fd2546a805ad12a2213e0a7716ff3d1f40ea2",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "670f19b8b5d7ff4419d2bb62d056b0261bdc10202e19984d02959183509cb63a",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "65137e14bdeaaa503828e5d503cf1e303b20bd4b13032a49622d2a33c3f66fa5",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7a13584ff586c3d36204d194cbf8939aed16ee337f8fa57adc4fe2070ccda8a4",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ce039c469dfb9e4c8ddedeb43f122d1bdb76a284f65054ca70cff86a85667e86",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ca77484a08d605b602281cc7b3195f41fb0ef57d5ded5d448df6565e9347990e",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "bf5f452d29b5b44f28604dfd974f1b343d221ea750ec064e1ab8941c103a10fd",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ade8aeaec23dff7730945a1a0bb3d3324a9e44c167c8331de8ff79a1bacbb2f3",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "68c231328d4fdb39a1d56ef779921ef19686415b0458bccfd8b8c982a9dd6d78",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ada794aa2e43f772fcf6375b63bbb24f898ab1737bd2c1a95067f4cdfee4983b",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "314f170b326a44cb769661212d0fd82d174f4c75e5fc8a2595cc7b37caa66b49",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ea9f5fd754b42fd5cb73acdd454df9c9ba0c0c591a382284758b7adac59bfe65",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "07fc868440f6b5a63f9dc7624629dea76fcc4903a70fbc9ae7b768b85a0ac949",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b8fd458269ce15e0da69ab9e5128de14c9314b3e8722656df1f4f13730433e33",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "17c78286f4be8bdd925a80b649265384a2f37a9bec536cb675ea1285bc62ab83",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "616f9c77fa28c2acc8cd9d8e145214c0bb8a2781984be643dcff91949febc7d8",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c329a14d32f3f5f4c14ea2581c849fe25dafb3087b06ad13cf7d73e285582373",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c6f3fe36c9a27992e655e5abd00e9ed9731ab6352fd3b38608d335eacc5e09ea",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "13f01799b28cbd8fd63ce078ac026736139fda2c683ad01d483e4428c5b83bd7",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "857d264a943d50980f36041bc62c49601dc7f0c3b89b9ff7f5e30f26c84181c2",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1b5584e302cf70592f72ea71c0de565a8fe428428c199863081c262c8f9b0517",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f570af167ebf13a24daa39f94e9ed810e5a3fd6563f60e34b33737e7412de50b",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b44648496a5a5bffd542affca52ce162202d1abc1d1976595bbc72df67f7c30a",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9d3a66bc4a8a281e295380c7f4fd57dea252be7f4179111a50ea2f7fcb9b57aa",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "6e111e207f195925d856debe7e93c602fb37d14671bddf088767252cfc96dc7c",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e270521d07278d8a0d0bd60adb693d0ba43b38a07cbfe3cf06c5aeed3a674e07",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "242c5e322bbc4cb6238dfc68a1f973b41914d6bf4616b4eb1453faf014de7cda",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "5b7f51c2f84062276a4f245dea37dd06e9db921b8f672120ac0b45ac20635aef",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d99c280a795d3d99d1f5833683ce25ef323428c008cf3e4bb84aa8c9f6332632",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a275c7acea05f02a574ccfbdf0940112f31dcfcef1c7cc98d98badffa27f8d9c",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "187013fe3b01bfb16f3bc31d8c6f49be42db5120bc9e21f67e1c4326e3d809dd",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "55928cddd201d58e6a1928d994f9c7a657d65311e0767a588f135a46992b469f",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "78c3214950be9523935910a200adb5cfc1dbbf06e09ad96e8f79cc5943d9e79e",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "607c9fca80d7edb312af0111cc08a4fea4d2c493fd286ca7ab626d4d3042b50f",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c123e5b3ef4600423dd90eef890fd508a4ef8a66a0b51214b2318acc1b8ba636",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a2b3f488c0bf48794936111d4f709f5f3b3aa3517655727823108795e35650e0",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e014235240731d72a3b5c9489caecb49e44c160dc4e654345350886c3ca1cb51",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2b14c77013f0c0114451f7f2a74dd5de97d16c3b72254a3426e704cda62a9211",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e6e9a2fe7952726aebbf6d1459c7ebd6d781eedbe1f1012dc505e90666ed16db",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a4809d41341fab78ac7f2f0b34047e14921a6ded58c926f7168c9cac49735630",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "81477268291a5ea240f9601ea570fb9372149e98d2e125ce41f8f9e18b2638c9",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8e2b3ba4013e77583c5ed7fff6ba45452e714cc490de3405014803d166bde483",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "16b08fb31b2635c8f659bbb698370c48bc389c22b705b38fc025c1c3ebf4dd76",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "aa91c709c2e5c446b0e249d2b862a8c7f74bec5b851835e3aea009eb814cbb48",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e6ec60a6a9c6cc5596a6422df13b3cc7bf55bd74284eb8f34de1a9e5363cd6a4",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8e2a1461c34302f95b85b4314d2f15971422156ccc1d93891eabb3531ea47885",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "5ebff980e3a11c09b8bf059ed78370c08f3b6960fe854f8b0fdad5ee267f53e6",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "92de216cbb204815a648404e2ae9301b8453bdc3faaf839bc61e35ed65687bed",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9b7e2593d3c79f98e282acb2a96f1facc3247538183c52a7be54e0c256c5ef2c",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "99b3f8f0ae1d96bc7a041c672ef6af222bd6c8c61bf54d25eb16e3f607145a99",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "db9b1e3b76c57722490245d47bfde4a731d4290c241657dcb8897d5189b604d0",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7453e5c5494f66f3204e06d7cabe45100783d44a9cb6d80aed1065a830c342a9",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3874b40626f02c7601fe0fc58443a8ea2e977f34239f3280e20ba3e159e284e9",
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
    "stagedVersion": "0.8.10",
    "onlineVersion": "0.8.10",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "docs/catalogue.json",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "949d7eed4fa00d6964b7cfb624b92001850a356754f053527f95aff255f1c048",
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
