/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/service/defaultCircaDemoCommerceImportAdmissionService @description Retains the Circa validator binding while delegating every Inventory and Promotion import target to its canonical owner. No demo flag grants operational admission. @layer service @owner circa.ewaste */
module.exports = {
  /** Preserves exact target metadata and owner refusals; missing owners fail closed. */
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

  /** Delegates all imports, including legacy Circa snapshots, without granting stock or issuance authority. */
  validateImportTarget: function (request) {
    return this.delegate(request);
  },
};
