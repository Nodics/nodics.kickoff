"use strict";

/** @module circa.ewaste/service/defaultCircaCatalogueService @description Supplies customer browsing policy to the eWaste catalogue without duplicating its algorithms. @layer service @owner circa.ewaste */
module.exports = {
  /** Keeps customer limits explicit and independently overridable. */
  settings: function () {
    return {
      ...(CONFIG.get("eWaste") || {}).catalogue,
      ...(CONFIG.get("circaEWaste") || {}).catalogue,
    };
  },
  /** Composes effective domain methods with later-layer customer hooks. */
  invokeCatalogue: function (method, args) {
    const catalogue = SERVICE.DefaultEWasteCatalogueService;
    return catalogue[method].apply({ ...catalogue, ...this }, args);
  },
  /** Delegates experience while retaining customer overrides. */
  experience: function (...args) {
    return this.invokeCatalogue("experience", args);
  },
  /** Delegates fail while retaining customer overrides. */
  fail: function (...args) {
    return this.invokeCatalogue("fail", args);
  },
  /** Delegates selectors while retaining customer overrides. */
  selectors: function (...args) {
    return this.invokeCatalogue("selectors", args);
  },
  /** Delegates products while retaining customer overrides. */
  products: function (...args) {
    return this.invokeCatalogue("products", args);
  },
  /** Delegates published while retaining customer overrides. */
  published: function (...args) {
    return this.invokeCatalogue("published", args);
  },
  /** Delegates offer while retaining customer overrides. */
  offer: function (...args) {
    return this.invokeCatalogue("offer", args);
  },
  /** Delegates marketplace while retaining customer overrides. */
  marketplace: function (...args) {
    return this.invokeCatalogue("marketplace", args);
  },
  /** Delegates catalogue while retaining customer overrides. */
  catalogue: function (...args) {
    return this.invokeCatalogue("catalogue", args);
  },
  /** Delegates product while retaining customer overrides. */
  product: function (...args) {
    return this.invokeCatalogue("product", args);
  },
};
