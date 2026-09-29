/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Nodics Kickoff documentation renderer mappings consumed by Axis. */
module.exports = {
  "record0": {
    "code": "kickoffDocumentationArticlePageType",
    "renderer": "documentation.page.article",
    "contractVersion": 0,
    "channels": [
      "web",
      "mobile-webview"
    ],
    "deprecated": false,
    "active": true
  },
  "record1": {
    "code": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "contractVersion": 0,
    "channels": [
      "web",
      "mobile-webview"
    ],
    "deprecated": false,
    "active": true
  },
  "record2": {
    "code": "kickoffDocumentationNavigationComponentType",
    "renderer": "documentation.component.navigation",
    "contractVersion": 0,
    "channels": [
      "web",
      "mobile-webview"
    ],
    "deprecated": false,
    "active": true
  }
};
