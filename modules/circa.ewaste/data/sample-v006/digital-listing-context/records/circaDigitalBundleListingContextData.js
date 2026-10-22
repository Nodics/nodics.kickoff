/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v006/digital-listing-context/records/circaDigitalBundleListingContextData
 * @description Selects the existing Circa Store, category, price book and reward unit for participant bundles.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor sample release instead of changing an installed business selection.
 */
module.exports = {
  record0: {
    tenant: "default",
    enterpriseCode: "default",
    code: "circa-points-marketplace",
    name: "Circa circular marketplace",
    status: "ACTIVE",
    revision: 1,
    active: true,
    storeCode: "circaMainStore",
    categoryCodes: ["circaAssets"],
    currency: "POINTS",
    priceBookCode: "circaPointsPriceBook",
    reward: {
      programCode: "circa",
      rewardTypeCode: "points",
    },
  },
};
