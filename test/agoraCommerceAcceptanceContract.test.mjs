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
const dockerScriptPath = path.join(projectRoot, "scripts/agora-commerce-docker-acceptance.mjs");
const liveQualificationPath = path.join(projectRoot, "scripts/agora-commerce-live-qualification.mjs");
const packagePath = path.join(projectRoot, "package.json");

test("Agora Commerce acceptance covers backend route surface and secured generated customer journey", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  assert.equal(pkg.scripts["acceptance:agora-commerce"], "node scripts/agora-commerce-acceptance.mjs");
  assert.match(source, /AXIS_ORIGIN/);
  assert.match(source, /portOf\(platformUrl, 4300\)/);
  assert.match(source, /portOf\(commerceUrl, 4350\)/);
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
  assert.match(source, /storefrontCustomerCredentials/);
  assert.match(source, /NODICS_STOREFRONT_CUSTOMER/);
  assert.match(source, /NODICS_STOREFRONT_SECONDARY_CUSTOMER/);
  assert.match(source, /NODICS_STOREFRONT_CUSTOMER_REGISTER/);
  assert.match(source, /storefront\.customer\.\$\{scope\.toLowerCase\(\)\}/);
  assert.match(source, /ensureStorefrontCustomer/);
  assert.match(source, /exerciseProductDiscovery/);
  assert.match(source, /SEARCH_INDEX/);
  assert.match(source, /priceRowCode/);
  assert.match(source, /warehouseCode/);
  assert.match(source, /NODICS_STOREFRONT_PRODUCT_CODE/);
  assert.match(source, /NODICS_STOREFRONT_JURISDICTION \|\| "AE"/);
  assert.doesNotMatch(source, /AGORA_CUSTOMER_LOGIN_ID|AGORA_PRODUCT_CODE|AGORA_STORE_CODE/);
  assert.match(source, /method: "PATCH"/);
  assert.match(source, /customer cart add\/update\/remove\/calculate smoke passed/);
  assert.match(source, /tok_test_storefront_4242/);
  assert.match(source, /exerciseCustomerCheckout/);
  assert.match(source, /requestType: "RETURN"/);
  assert.match(source, /requestType: "REFUND"/);
  assert.match(source, /expectReadRejected/);
  assert.match(source, /correctly rejected for non-owner/);
  assert.match(source, /customer checkout\/order\/cancellation\/return\/refund smoke passed/);
});

test("Agora Commerce Docker acceptance targets Docker Local host ports without shell-sourcing secrets", () => {
  const source = fs.readFileSync(dockerScriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  assert.equal(pkg.scripts["acceptance:agora-commerce:docker"], "node scripts/agora-commerce-docker-acceptance.mjs");
  assert.match(source, /kickoffDockerLocal/);
  assert.match(source, /NODICS_PLATFORM_URL.*5300/s);
  assert.match(source, /NODICS_COMMERCE_URL.*5350/s);
  assert.match(source, /AXIS_ORIGIN.*4100/s);
  assert.match(source, /BOOTSTRAP_ADMIN_PASSWORD/);
  assert.doesNotMatch(source, /set -a|source |\\. env/);
});

test("Agora Commerce live qualification sequences topology data publication and customer journey acceptance", () => {
  const source = fs.readFileSync(liveQualificationPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  assert.equal(pkg.scripts["qualification:agora-commerce:live"], "node scripts/agora-commerce-live-qualification.mjs");
  assert.match(source, /data folder -> Staged schemas -> Online schemas -> search indexing -> Agora frontend/);
  [
    '"topology:preflight"',
    '"test:agora-commerce"',
    '"acceptance:agora-commerce-data"',
    '"acceptance:agora-commerce-publication"',
    '"acceptance:agora-commerce"',
  ].forEach((script) => assert.match(source, new RegExp(script)));
  assert.match(source, /PASS/);
});
