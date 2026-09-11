/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/customer-workspace/circaWorkspaceSlotData @description Publishes customer item workspace composition through WCMS. @owner circa.ewaste @layer data @override Customize through Staged authoring and governed publication. */
module.exports = {
  "record0": {
    "code": "circaWasteWorkspaceMain",
    "template": "circaWasteWorkspaceTemplate",
    "name": "main",
    "minItems": 1,
    "maxItems": 1,
    "allowedComponentTypeGroups": [
      "circaWasteWorkspaceComponents"
    ],
    "active": true
  }
};
