/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/asset-classification/headers/circaAssetClassificationHeader @description Selects only version-aware Product localization successors through the deployment-owned nImport boundary. @layer data @owner circa.ewaste */
module.exports = {
  product: {
    circaAssetClassificationLocalizationData: {
      options: {
        enabled: true,
        schemaName: "productLocalization",
        operation: "saveAll",
        dataFilePrefix: "circaAssetClassificationLocalizationData",
      },
      query: { code: "$code" },
    },
  },
};
