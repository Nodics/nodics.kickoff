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
 * @owner agoraCommonData
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const frameworkProjectServiceRoot = path.join(projectRoot, "..", "nodics.ai", "nodics.foundation", "modules", "nTooling", "src", "service", "project");
const scriptPath = path.join(frameworkProjectServiceRoot, "defaultProjectAgoraCommerceAcceptanceService.mjs");
const dockerScriptPath = path.join(projectRoot, "..", "nodics.ai", "nodics.foundation", "modules", "nTooling", "src", "service", "project", "defaultProjectContainerQualificationService.mjs");
const liveQualificationPath = path.join(frameworkProjectServiceRoot, "defaultProjectAgoraCommerceLiveQualificationService.mjs");
const packagePath = path.join(projectRoot, "package.json");
const projectContractPath = path.join(projectRoot, "nodics.project.json");

test("Agora Commerce acceptance covers backend route surface and secured generated customer journey", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectContract = JSON.parse(fs.readFileSync(projectContractPath, "utf8"));

  assert.match(pkg.scripts["acceptance:agora-commerce"], /nodics-project\.js project:run acceptance:agora-commerce/);
  assert.equal(projectContract.tooling.commands["acceptance:agora-commerce"].command, "project:agora-commerce-acceptance");
  assert.equal(projectContract.tooling.commands["acceptance:agora-commerce"].home, "project");
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
  assert.match(source, /requireAutomationStep/);
  assert.match(source, /reservation-release/);
  assert.match(source, /return-logistics/);
  assert.match(source, /inspection-disposition/);
  assert.match(source, /refund-reconciliation/);
  assert.match(source, /replacement-reservation/);
  assert.match(source, /exchange-shipment/);
  assert.match(source, /appeal-sla-review/);
  assert.match(source, /requestType: "RETURN"/);
  assert.match(source, /requestType: "REFUND"/);
  assert.match(source, /requestType: "EXCHANGE"/);
  assert.match(source, /requestType: "APPEAL"/);
  assert.match(source, /expectReadRejected/);
  assert.match(source, /correctly rejected for non-owner/);
  assert.match(source, /customer checkout\/order\/cancellation\/return\/refund\/exchange\/appeal smoke passed/);
});

test("Agora Commerce Docker acceptance targets Docker Local host ports without shell-sourcing secrets", () => {
  const source = fs.readFileSync(dockerScriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectContract = JSON.parse(fs.readFileSync(projectContractPath, "utf8"));

  assert.match(pkg.scripts["acceptance:agora-commerce:docker"], /nodics-project\.js project:run acceptance:agora-commerce:docker/);
  assert.equal(projectContract.tooling.commands["acceptance:agora-commerce:docker"].command, "project:container-qualification");
  assert.deepEqual(projectContract.tooling.commands["acceptance:agora-commerce:docker"].args, ["dockerLocal", "commerce-acceptance"]);
  assert.equal(projectContract.containerEnvironments.dockerLocal.environment, "kickoffDockerLocal");
  assert.equal(projectContract.containerEnvironments.dockerLocal.acceptance.urls.platform, "http://127.0.0.1:5300");
  assert.equal(projectContract.containerEnvironments.dockerLocal.acceptance.urls.commerce, "http://127.0.0.1:5350");
  assert.equal(projectContract.containerEnvironments.dockerLocal.acceptance.urls.axis, "http://127.0.0.1:4100");
  assert.match(source, /BOOTSTRAP_ADMIN_PASSWORD/);
  assert.doesNotMatch(source, /set -a|(?:^|\s)source\s+\S*docker\.env|\\. env/);
});

test("Agora Commerce live qualification sequences topology data publication and customer journey acceptance", () => {
  const source = fs.readFileSync(liveQualificationPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectContract = JSON.parse(fs.readFileSync(projectContractPath, "utf8"));

  assert.match(pkg.scripts["qualification:agora-commerce:live"], /nodics-project\.js project:run qualification:agora-commerce:live/);
  assert.equal(projectContract.tooling.commands["qualification:agora-commerce:live"].command, "project:agora-commerce-live-qualification");
  assert.equal(projectContract.tooling.commands["qualification:agora-commerce:live"].home, "project");
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
