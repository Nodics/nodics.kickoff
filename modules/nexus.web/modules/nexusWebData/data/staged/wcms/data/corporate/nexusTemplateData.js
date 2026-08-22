/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/nexus.web/modules/nexusWebData/data/staged/wcms/data/corporate/nexusTemplateData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner nexusWebData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexusWebData */

/** @description Nexus corporate page template. */
module.exports = {
  "record0": {
    "code": "nexusCorporatePageTemplate",
    "name": "Nodics Nexus Corporate Page",
    "renderer": "nexus.template.corporate",
    "contractVersion": 0,
    "slots": [
      "nexusCorporateMainSlot"
    ],
    "active": true
  }
};
