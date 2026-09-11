"use strict";
/** @module circa.ewaste/service/defaultEWasteMarketplaceService @description Supported Circa discovery override: all domain purchase/bid orchestration remains inherited from eWaste. @layer service @owner circa.ewaste */
module.exports = {
  /** Uses the same published, currently listed Circa offer projection as the storefront. */
  list: function (request) {
    return SERVICE.DefaultCircaCatalogueService.marketplace(request);
  },
};
