"use strict";
/** @module circa.ewaste/controller/defaultCircaCatalogueController @description Maps public Circa catalogue reads through the trusted eWaste context mapper. @layer controller @owner circa.ewaste */
module.exports = {
  /** Lists Circa storefront cards; the target service cannot be supplied by callers. */
  catalogue: function (request, callback) {
    return SERVICE.DefaultEWasteRequestService.invoke(
      "catalogue",
      request,
      callback,
      "DefaultCircaCatalogueService",
    );
  },
  /** Retrieves one published product independently of catalogue pagination. */
  product: function (request, callback) {
    return SERVICE.DefaultEWasteRequestService.invoke(
      "product",
      request,
      callback,
      "DefaultCircaCatalogueService",
    );
  },
};
