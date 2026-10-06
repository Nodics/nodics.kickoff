/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/service/defaultCircaDemoCommerceImportAdmissionService @description Admits only the bounded Circa local v001 operational demo import while delegating all other Commerce owner decisions. @layer service @owner circa.ewaste */
module.exports = {
  /** Returns true only when the current runtime is explicitly scoped to local demo sample imports. */
  demoPolicy: function () {
    return (CONFIG.get("circaEWaste") || {}).demoImportAdmission || {};
  },

  /** Keeps the override narrow to the immutable Circa v001 operational fixture. */
  isCircaOperationalDemo: function (request) {
    const policy = this.demoPolicy();
    return (
      policy.enabled === true &&
      policy.qualified === true &&
      request.releaseCode === policy.releaseCode &&
      request?.destinationRole === "COMMERCE" &&
      request.lifecycle === "OPERATIONAL_VERSIONED" &&
      ((request.moduleName === "inventory" &&
        request.schemaName === "inventoryBalance") ||
        (request.moduleName === "promotion" &&
          ["coupon", "couponBatch"].includes(request.schemaName)))
    );
  },

  /** Delegates non-demo decisions back to the owning Commerce services. */
  delegate: function (request) {
    const owner =
      request?.moduleName === "inventory"
        ? SERVICE.DefaultInventoryOperationService
        : request?.moduleName === "promotion"
          ? SERVICE.DefaultPromotionOperationService
          : null;
    if (!owner || typeof owner.validateImportTarget !== "function")
      throw new Error("Commerce import admission owner is unavailable");
    return owner.validateImportTarget(request);
  },

  /** Admits only the marked Circa local demo snapshot; all ordinary imports retain Commerce owner policy. */
  validateImportTarget: function (request) {
    if (this.isCircaOperationalDemo(request)) return true;
    return this.delegate(request);
  },
};
