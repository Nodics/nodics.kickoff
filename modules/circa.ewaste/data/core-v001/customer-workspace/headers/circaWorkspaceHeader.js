/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/customer-workspace/circaWorkspaceHeader @description Publishes customer item workspace composition through WCMS. @owner circa.ewaste @layer data @override Customize through Staged authoring and governed publication. */
module.exports = {
  "cms": {
    "type": {
      "options": {
        "enabled": true,
        "schemaName": "cmsTypeCode",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceTypeData"
      },
      "query": {
        "code": "$code"
      }
    },
    "renderer": {
      "options": {
        "enabled": true,
        "schemaName": "cmsTypeCode2Renderer",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceRendererData"
      },
      "query": {
        "code": "$code"
      }
    },
    "group": {
      "options": {
        "enabled": true,
        "schemaName": "cmsComponentTypeGroup",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceGroupData"
      },
      "query": {
        "code": "$code"
      }
    },
    "slot": {
      "options": {
        "enabled": true,
        "schemaName": "cmsSlotDefinition",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceSlotData"
      },
      "query": {
        "code": "$code"
      }
    },
    "template": {
      "options": {
        "enabled": true,
        "schemaName": "cmsPageTemplate",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceTemplateData"
      },
      "query": {
        "code": "$code"
      }
    },
    "component": {
      "options": {
        "enabled": true,
        "schemaName": "cmsComponent",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceComponentData"
      },
      "query": {
        "code": "$code"
      }
    },
    "page": {
      "options": {
        "enabled": true,
        "schemaName": "cmsPage",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspacePageData"
      },
      "query": {
        "code": "$code"
      }
    },
    "route": {
      "options": {
        "enabled": true,
        "schemaName": "cmsPageRoute",
        "operation": "saveAll",
        "dataFilePrefix": "circaWorkspaceRouteData"
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
