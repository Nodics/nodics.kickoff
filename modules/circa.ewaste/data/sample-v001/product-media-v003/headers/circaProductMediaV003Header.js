/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/product-media-v003/headers/circaProductMediaV003Header @description Selects uniquely named versioned Product localization Media-reference successors through deployment-owned nImport. @layer data @owner circa.ewaste */
module.exports = {
  product: {
    circaProductMediaV003LocalizationData: {
      options: {
        enabled: true,
        schemaName: "productLocalization",
        operation: "saveAll",
        dataFilePrefix: "circaProductMediaV003LocalizationData",
      },
      query: { code: "$code" },
    },
  },
};
