/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation navigation catalogue metadata. */
module.exports = {
  "record0": {
    "code": "kickoffDocumentationNavigationTree",
    "product": "kickoffDocumentationProduct",
    "name": "Nodics Kickoff Documentation Navigation",
    "renderer": "documentation.component.navigation",
    "searchLabel": "Search Kickoff documentation",
    "searchPlaceholder": "Search setup, runtime, modules, and customization",
    "emptyMessage": "No Kickoff documentation matches your search.",
    "expandable": true,
    "accessMode": "PUBLIC",
    "lifecycleState": "ONLINE",
    "managedInAxis": true,
    "axisAuthoringPermissions": [
      "documentation.navigation.update"
    ],
    "workflowRequired": true,
    "workflowTriggers": [
      "NAVIGATION_CHANGE"
    ],
    "active": true
  }
};
