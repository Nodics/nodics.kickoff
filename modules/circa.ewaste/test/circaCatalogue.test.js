/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
"use strict";
/** @module circa.ewaste/test/circaCatalogue @description Checks reference adoption of Product browsing and eWaste Store selection, not generic catalogue algorithms. @layer test @owner circa.ewaste */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const marketplace = require(path.join(frameworkRoot,
  "nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteMarketplaceService"));
const productDefaults = require(path.join(frameworkRoot,
  "nodics.commerce/modules/baseCommerce/modules/product/config/properties")).product;

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  test(environment + " selects Circa Store while inheriting Product browse policy", async () => {
    const runtime = loadRuntime("wasteServer", environment);
    const commerce = loadRuntime("commerceServer", environment);
    assert.equal(runtime.eWaste.catalogue, undefined);
    for (const key of ["maximumPageSize", "defaultPageSize", "allowTenantQuery", "exposedSorts"]) {
      assert.deepEqual(commerce.product.discovery[key], productDefaults.discovery[key]);
    }
    assert.equal(commerce.product.discovery.catalogue.enabled, true);
    assert.equal(commerce.product.discovery.activationService, "DefaultProductPublicationTargetService");
    assert.equal(runtime.eWaste.marketplace.storeCode, "circaMainStore");
    assert.equal(runtime.eWaste.marketplace.currency, "POINTS");
    const calls = [];
    const adapter = {
      ...marketplace,
      experience: () => ({
        settings: () => runtime.eWaste,
        remote: async (...args) => { calls.push(args); return { products: [] }; },
      }),
    };
    const request = { tenant: "default" };
    await adapter.products(request, "/products/discovery", { view: "AVAILABLE_SHOP", storeCode: "untrusted" });
    const [forwarded, moduleName, connection, api, method] = calls[0];
    assert.equal(forwarded, request);
    assert.equal(moduleName, "product");
    assert.equal(connection, "commerce");
    assert.equal(method, "GET");
    const query = new URL(api, "http://owner.test").searchParams;
    assert.equal(query.get("storeCode"), "circaMainStore");
    assert.equal(query.get("locale"), runtime.eWaste.marketplace.locale);
    assert.equal(query.has("pageSize"), false);
  });
}
