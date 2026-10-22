/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/product-media-v002/headers/circaProductMediaHeader @description Selects versioned Product localization Media-reference successors through deployment-owned nImport. @layer data @owner circa.ewaste */
module.exports = {
  product: {
    circaProductMediaLocalizationData: {
      options: {
        enabled: true,
        schemaName: "productLocalization",
        operation: "saveAll",
        dataFilePrefix: "circaProductMediaLocalizationData",
      },
      query: { code: "$code" },
    },
  },
};
