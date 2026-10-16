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
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b1b9558b96092289d3b775d49f9bd0d4f3e50df477cfe9b20f76c51f43047caf",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record1": {
    "code": "kickoffDocsPublicationnavigationkickoffdocumentationnavigationtree",
    "targetType": "NAVIGATION",
    "targetCode": "kickoffDocumentationNavigationTree",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f35da336047dfeb6f9da0d73cf62fdf320e55af028de986300995f53795cc327",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record2": {
    "code": "kickoffDocsPublicationaccesspolicykickoffdocsaccesspublic",
    "targetType": "ACCESS_POLICY",
    "targetCode": "kickoffDocsAccessPublic",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1a066c4303f549a32c930a6ed1285585aaccad31540a8954e5f45724ec6130ac",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record3": {
    "code": "kickoffDocsPublicationaccesspolicykickoffdocsaccessauthenticated",
    "targetType": "ACCESS_POLICY",
    "targetCode": "kickoffDocsAccessAuthenticated",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e94a1d7023ea400b8c38700589d0d4a51e596734f32f5ccc9eadb394bd8cc706",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record4": {
    "code": "kickoffDocsPublicationnodekickoffdocsnoderoot",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeRoot",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c6886b5ae9deb58b27b64306ed0c94706a57a2238cd2bc629b5edd06fe1de613",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record5": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecdiscoverkickoff",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecdiscoverKickoff",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "56f75ac86185f22cda1bb24ffbf513e0cfbb6e15ca6db4eaab35672a68c88e30",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record6": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecrunkickofflocally",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecrunKickoffLocally",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ad9715d90820d81d335db3f6f2898720e91fb94231e499175a7e016ce7118554",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record7": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecpublishandqualify",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecpublishAndQualify",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "351e5cc7e4733fdfd0d1f51944f5c1a043acf29bfb07da2ba746aa3fdfa43c44",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record8": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodeseccustomizecustomerprojects",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSeccustomizeCustomerProjects",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b4711acd91631dc74687e65c230513bd1f7e170395845786e81ce59ff7fc9abb",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record9": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodesecfunctionaljourneys",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodeSecfunctionalJourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "fb983f324272fc1421b4de0b348d5fb0e7fc0c71ad317b36e5552e077701bd8f",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record10": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffoverview",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffOverview",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3fd5be9ea85db1be8093bf0fed4a7c3133bbc44b6fc1123f4c3c8525de7d36e1",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record11": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalruntime",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalRuntime",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b3a1c1d8619c1781ac43fc473b98d8be00201669c464eb9587ade2ddbabf4cd3",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record12": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalsetuptolive",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalSetupToLive",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0b0021e221acb1f2f24024de16d31cce86f5a1b5ba16f626a8473d63d0ec24b2",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record13": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalacceptance",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalAcceptance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2f9a6baa3e904f0c7835121e344095c77d9c3787a84076b7ad085bd981446278",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record14": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffLocalPublishingOperations",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f21fa72d8f82bc978af9bae8fe1ae1f7ef6bf61d27c6900ebfcc72891f37942b",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record15": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffdeploymentqualification",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffDeploymentQualification",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "4f2b7019995da0eed685ef966f3cffe2c20e1d67c07ea60fdd89b8745bceb9cf",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record16": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffcustomization",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffCustomization",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ff2b378fba3db08bdc71b0738991db76a56da383f3752e8b0042980142aefb6d",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record17": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickoffconfigurationinheritance",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffConfigurationInheritance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "bb285c36f9acb4de3b12f103b6d13e1957df01edb8c4ca95421fb8488b48dd0e",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record18": {
    "code": "kickoffDocsPublicationnodekickoffdocsnodepagekickofffunctionaljourneys",
    "targetType": "NODE",
    "targetCode": "kickoffDocsNodePagekickoffFunctionalJourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "f70f72af94501fc863490ab7f7485372cb005352f094d76598307f94413f4848",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record19": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardproduct",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardProduct",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "33da97e3271f687c6ccd2e9897b6ce1275ff049bc5b588abda7c15e298a0ac50",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record20": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecdiscoverKickoff",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b4f77df3505c104cdbb27c40b6fc5a7a5399e3728ea80d90ef9c9df9440e4d2c",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record21": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecrunkickofflocally",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecrunKickoffLocally",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8fc044d0822d79ed7910366220d10bff558714002b0ea09be4baf553dbcc9c77",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record22": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecpublishandqualify",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecpublishAndQualify",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a45393af965a9b8df8257b813f87822d1dd07b46f59050a52113a9440e7e2d23",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record23": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSeccustomizeCustomerProjects",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "14ca56adafbf7d138a5792ea20cdc5254cd7f5a8d6e027affc028ce48976223a",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record24": {
    "code": "kickoffDocsPublicationdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "targetType": "DASHBOARD",
    "targetCode": "kickoffDocsDashboardSecfunctionalJourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9c7a04ef8383fa4153eb584b43c75fc5be1f3f720dd3eb7a5deffa1a09df6687",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record25": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffoverview",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffOverview",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9af3e2bba48a36783eb491aa6fae429db08b01f0838c4f4679202617c47cd2e3",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record26": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalruntime",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalRuntime",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a4fb71873afb151ec213f8b5e7bdf4336fd21b9c58c6885d963202dd4cfe9651",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record27": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalsetuptolive",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalSetupToLive",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c2fa86daf8f3d26b511d7994ce7aae31e87a9f58c2a15afc1104ff5c373a7547",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record28": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalacceptance",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalAcceptance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "292a07c21a97569f218dd258c45d8565e2ad55652da2357a8e00265c89c70481",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record29": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffLocalPublishingOperations",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "10cddfde74e14d510dabaab81e6a8fef986e2523adb3b2705c593ad10e0c9c75",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record30": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffdeploymentqualification",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffDeploymentQualification",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "3cf2739c4487d7263ce3dac0400a6730d75462bea2604dd6aadf713861ac4f7f",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record31": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffcustomization",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffCustomization",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "69fcf5f21e8272822363f45f55edbba344f44aca23264ffd4e9279be25945356",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record32": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffConfigurationInheritance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "444281d613b8141f1c140ab97de15ca782a96cd33a81888c1726d4d924cfd48f",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record33": {
    "code": "kickoffDocsPublicationpagekickoffdocsmetadatakickofffunctionaljourneys",
    "targetType": "PAGE",
    "targetCode": "kickoffDocsMetadatakickoffFunctionalJourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "49d84a53a5734b7ef287a9c5a8cbae1fb1f5f5aa6c2127aa84e6ef6676cc03c6",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record34": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchproductkickoffdocumentationproduct",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchproductkickoffdocumentationproduct",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "eb2f2244ac89d639cfaf4ba400e350b8722d02df8ac6ea9fd508befbe8fc7d6c",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record35": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnavigationkickoffdocumentationnavigationtree",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnavigationkickoffdocumentationnavigationtree",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7ef28aa9cd0e187542276a3f00ee47e028bd54c9c1dfbf11cf4727f893f27d31",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record36": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnoderoot",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnoderoot",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7c671126e6fc29d75c359202efd16b051f5c70417ac784e8de0f17f6caa36712",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record37": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecdiscoverkickoff",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecdiscoverkickoff",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0cb93472a2c7aa41acc2bfe3d0dfaa9ed6ea03fbaaa7d6721cd377776ebbd269",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record38": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecrunkickofflocally",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecrunkickofflocally",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ed91bdbe9f2ec3c1b15bc7e200e52ad714e2e39bc96b243dee7454227207ba1c",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record39": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecpublishandqualify",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecpublishandqualify",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "dc4c26e88e941a10d28eb10ea1d23f066f301b4b5b616187b0382c9caaf39dcf",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record40": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodeseccustomizecustomerprojects",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodeseccustomizecustomerprojects",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ed0aee2370f25895ea1acc2909a8e2caae1ae42e5ee362515372ca2d66c7e34a",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record41": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodesecfunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodesecfunctionaljourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "611e02e5652ccb299732c3152fa56da8cc61e955a1e10bd9738da911ff326fd9",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record42": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffoverview",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffoverview",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "0c9f4db27e15ea97498a1e9dd871497545d3d29abad3b715378df19a4b401e24",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record43": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalruntime",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalruntime",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "515d120f4427d63c35331b09642cdc9a9d4b26b945fe3f6f99a435faa76f000f",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record44": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalsetuptolive",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalsetuptolive",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c6b5709bcb7cacffe3c5c1671b1284809eae63d846f9433c70a571c88e2416f5",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record45": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalacceptance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalacceptance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1c47db3865d9b5b0f80f398252ed4b6284cfc018bcd26e6b29481381fe9de67d",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record46": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofflocalpublishingoperations",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "c311780a920b0f91e9cbf8beb2390617534d00d72f4dcff55052ee22bd2f60f0",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record47": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffdeploymentqualification",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffdeploymentqualification",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1aa9acc856ea2df2bbb011922b5cfd9380aa8737bc9ae2b6cf5bba85b5c5badd",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record48": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffcustomization",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffcustomization",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "8378676ff1a713de9bc84162d16be214ca1ea00c4ca92d63d408ca8a90f676f0",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record49": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickoffconfigurationinheritance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickoffconfigurationinheritance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "a6e47f855ba4f7f7ca413dcdfd4b911baa77b592c11e08c1e93856ed88886891",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record50": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchnodekickoffdocsnodepagekickofffunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchnodekickoffdocsnodepagekickofffunctionaljourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1c90f1ba8d048b34b1497b1509c3f09b4854a8bd7a27b3fc105a087df8bfc8af",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record51": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardproduct",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardproduct",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "865d4ec071aa47336b3008ab9a96d9726d0af13b914f44bee0f7172d0182727c",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record52": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecdiscoverkickoff",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "291d77ae0249a0a86b5fcfab565c900fce5fa9502c42976dcd85fccb39e8994f",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record53": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecrunkickofflocally",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecrunkickofflocally",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "1b67f856a0643932ea9ccb49ee6c0c49795483e9f65f642054f15fa9d4bcc0d1",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record54": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecpublishandqualify",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecpublishandqualify",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e7e2e3acd4854410a3bff8cdd24eb9514d93b911cc51a23133941e9c0eb96750",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record55": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardseccustomizecustomerprojects",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "e29823fd06f700e9d05ac0df4631dacb6b20dbd468e81c5780a5d3f855d8d35b",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record56": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchdashboardkickoffdocsdashboardsecfunctionaljourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "69ba1a80ab1a2a19af4475cfb61af4a32673a9cbeec9adf98701e5f66cc66ee1",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record57": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffoverview",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffoverview",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "7736078ae7b90bdf17208ac630449c07dc878e5f8ad3dd488b3dcb40174b736a",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record58": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalruntime",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalruntime",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "80af3d9c86296ac001e885d9902768074229b1b94203c0d91e01ad4a4c6ec0cd",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record59": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalsetuptolive",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "ba3994b2dee4c25bbc9e217fa00e437db7fc7717f41288b273b4e3af7bd73618",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record60": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalacceptance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalacceptance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "30412712e25259d61ad078de81bf9c8bbe082f06f5c9aef9e274da4f2455dda1",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record61": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofflocalpublishingoperations",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "9ca37bdda5fae11ace4990850bbef17a3d4d544c4dd7b6439a07073665519070",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record62": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffdeploymentqualification",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d46aac619592425e8e05ba9942dda5d32e6c2dc8a7e7e632320ed4f55adc0379",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record63": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffcustomization",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffcustomization",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "d8ae454891842e8e03db5194ccb8cb3d86a77fe1f8da9f16acc2cda099dbe80b",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record64": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickoffconfigurationinheritance",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "2ccb0a6d08cbced556aee5fd3647500e5fd85668a6f36c86957e9d43d684ad93",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  },
  "record65": {
    "code": "kickoffDocsPublicationsearchmetadatakickoffdocssearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "targetType": "SEARCH_METADATA",
    "targetCode": "kickoffDocsSearchpagekickoffdocsmetadatakickofffunctionaljourneys",
    "lifecycleState": "STAGED",
    "publicationCode": "kickoffDocumentation",
    "workflowReference": "kickoffDocumentationReviewWorkflow",
    "stagedVersion": "0.0.2",
    "validationResult": {
      "generated": true,
      "sourceAuthority": "data/docs-v001/records/documentation",
      "publicationPath": "STAGED_REVIEW_APPROVAL_ONLINE",
      "publicVisibleOnlyWhenOnlineAndPublic": true
    },
    "checksum": "b33603abe564b7ddcc579142b5cf45b16a77ee3bc5cd1c7be21bb82f5f9d5377",
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
    "author": "nodics.kickoff.generator",
    "auditTrail": [],
    "active": true
  }
};
