/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

/**
 * @module kickoff/test/agoraCommerceAcceptanceContract
 * @description Guards the Agora Commerce customer journey acceptance harness.
 * @layer test
 * @owner agoraData
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const scriptPath = path.join(projectRoot, "scripts/agora-commerce-acceptance.mjs");
const packagePath = path.join(projectRoot, "package.json");

test("Agora Commerce acceptance covers backend route surface and authenticated customer journey when credentials exist", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  assert.equal(pkg.scripts["acceptance:agora-commerce"], "node scripts/agora-commerce-acceptance.mjs");
  [
    "\"/nodics/product/v0/customer/products/discovery\"",
    "\"/nodics/product/v0/customer/products/{productCode}\"",
    "\"/nodics/cart/v0/customer/carts\"",
    "\"/nodics/checkoutCore/v0/customer/checkouts/place\"",
    "\"/nodics/fulfillmentCore/v0/customer/shipping/methods\"",
    "\"/nodics/fulfillmentCore/v0/customer/returns/methods\"",
    "\"/nodics/order/v0/customer/orders/{orderCode}\"",
    "\"/nodics/order/v0/customer/orders\"",
    "\"/nodics/order/v0/customer/orders/{orderCode}/lifecycle/preview\"",
    "\"/nodics/order/v0/customer/orders/{orderCode}/lifecycle\"",
  ].forEach((route) => assert.match(source, new RegExp(route.replace(/[{}]/g, "\\$&"))));
  assert.match(source, /NODICS_STOREFRONT_CUSTOMER_LOGIN_ID/);
  assert.match(source, /NODICS_STOREFRONT_CUSTOMER_REGISTER/);
  assert.match(source, /exerciseProductDiscovery/);
  assert.match(source, /SEARCH_INDEX/);
  assert.match(source, /NODICS_STOREFRONT_PRODUCT_CODE/);
  assert.doesNotMatch(source, /AGORA_CUSTOMER_LOGIN_ID|AGORA_PRODUCT_CODE|AGORA_STORE_CODE/);
  assert.match(source, /tok_storefront_4242/);
  assert.match(source, /exerciseCustomerCheckout/);
  assert.match(source, /requestType: "RETURN"/);
  assert.match(source, /customer checkout\/order\/lifecycle smoke passed/);
});
