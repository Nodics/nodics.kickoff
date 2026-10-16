/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Imports module-owned documentation Media followed by CMS records. */
module.exports = {
  "media": {
    "kickoffDocumentationRelease002MediaData": {
      "options": {
        "enabled": true,
        "schemaName": "media",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002MediaData"
      },
      "query": {
        "code": "$code"
      }
    }
  },
  "cms": {
    "kickoffDocumentationRelease002SiteData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsSite",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002SiteData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002ProductData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationProduct",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002ProductData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002AccessPolicyData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationAccessPolicy",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002AccessPolicyData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002NavigationData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationNavigation",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002NavigationData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002DashboardData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationDashboard",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002DashboardData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002LegacyNavigationCleanupData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationNode",
        "operation": "remove",
        "dataFilePrefix": "kickoffDocumentationRelease002LegacyNavigationCleanupData"
      },
      "query": {
        "product": "kickoffDocumentationRelease002Product",
        "navigation": "kickoffDocumentationRelease002NavigationTree",
        "nodeLevel": {
          "$in": [
            "GROUP",
            "SUBGROUP",
            "TOPIC"
          ]
        }
      }
    },
    "kickoffDocumentationRelease002NodeData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationNode",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002NodeData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002PageMetadataData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationPage",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002PageMetadataData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002PublicationStateData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationPublicationState",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002PublicationStateData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002SearchMetadataData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsDocumentationSearchMetadata",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002SearchMetadataData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002TypeCodeData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsTypeCode",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002TypeCodeData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002RendererData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsTypeCode2Renderer",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002RendererData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002TemplateData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsPageTemplate",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002TemplateData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002SlotData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsSlotDefinition",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002SlotData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002ComponentData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsComponent",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002ComponentData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002PageData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsPage",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002PageData"
      },
      "query": {
        "code": "$code"
      }
    },
    "kickoffDocumentationRelease002RouteData": {
      "options": {
        "enabled": true,
        "schemaName": "cmsPageRoute",
        "operation": "saveAll",
        "dataFilePrefix": "kickoffDocumentationRelease002RouteData"
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
