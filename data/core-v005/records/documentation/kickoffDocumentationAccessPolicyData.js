/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation access policies. */
module.exports = {
  "record0": {
    "code": "kickoffDocsAccessPublic",
    "name": "Public Kickoff documentation access",
    "targetType": "PRODUCT",
    "targetCode": "kickoffDocumentationProduct",
    "accessMode": "PUBLIC",
    "publiclyAvailable": true,
    "requiresAuthentication": false,
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "lifecycleVisibility": [
      "ONLINE"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.accessPolicy.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "ACCESS_POLICY_CHANGE"
    ],
    "priority": 10,
    "active": true
  },
  "record1": {
    "code": "kickoffDocsAccessAuthenticated",
    "name": "Authenticated Kickoff documentation access",
    "targetType": "PRODUCT",
    "targetCode": "kickoffDocumentationProduct",
    "accessMode": "AUTHENTICATED",
    "publiclyAvailable": false,
    "requiresAuthentication": true,
    "allowedRoles": [],
    "allowedGroups": [],
    "allowedPermissions": [],
    "lifecycleVisibility": [
      "ONLINE"
    ],
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.accessPolicy.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "ACCESS_POLICY_CHANGE"
    ],
    "priority": 20,
    "active": true
  }
};
