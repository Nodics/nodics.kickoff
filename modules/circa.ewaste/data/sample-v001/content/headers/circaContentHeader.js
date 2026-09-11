/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/content/circaContentHeader @description Defines Circa published page composition through the owning CMS schemas. @layer data @owner circa.ewaste @override Customer projects customize these content records through Staged authoring. */
module.exports = {
  catalog: {
    catalog: {
      options: {
        enabled: true,
        schemaName: "catalog",
        operation: "saveAll",
        dataFilePrefix: "circaContentCatalogData",
      },
      query: {
        code: "$code",
      },
    },
  },
  cms: {
    type: {
      options: {
        enabled: true,
        schemaName: "cmsTypeCode",
        operation: "saveAll",
        dataFilePrefix: "circaCmsTypeData",
      },
      query: {
        code: "$code",
      },
    },
    renderer: {
      options: {
        enabled: true,
        schemaName: "cmsTypeCode2Renderer",
        operation: "saveAll",
        dataFilePrefix: "circaCmsRendererData",
      },
      query: {
        code: "$code",
      },
    },
    group: {
      options: {
        enabled: true,
        schemaName: "cmsComponentTypeGroup",
        operation: "saveAll",
        dataFilePrefix: "circaCmsGroupData",
      },
      query: {
        code: "$code",
      },
    },
    slot: {
      options: {
        enabled: true,
        schemaName: "cmsSlotDefinition",
        operation: "saveAll",
        dataFilePrefix: "circaCmsSlotData",
      },
      query: {
        code: "$code",
      },
    },
    template: {
      options: {
        enabled: true,
        schemaName: "cmsPageTemplate",
        operation: "saveAll",
        dataFilePrefix: "circaCmsTemplateData",
      },
      query: {
        code: "$code",
      },
    },
    site: {
      options: {
        enabled: true,
        schemaName: "cmsSite",
        operation: "saveAll",
        dataFilePrefix: "circaCmsSiteData",
      },
      query: {
        code: "$code",
      },
    },
    component: {
      options: {
        enabled: true,
        schemaName: "cmsComponent",
        operation: "saveAll",
        dataFilePrefix: "circaCmsComponentData",
      },
      query: {
        code: "$code",
      },
    },
    page: {
      options: {
        enabled: true,
        schemaName: "cmsPage",
        operation: "saveAll",
        dataFilePrefix: "circaCmsPageData",
      },
      query: {
        code: "$code",
      },
    },
    route: {
      options: {
        enabled: true,
        schemaName: "cmsPageRoute",
        operation: "saveAll",
        dataFilePrefix: "circaCmsRouteData",
      },
      query: {
        code: "$code",
      },
    },
  },
};
