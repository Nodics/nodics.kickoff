/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import test from "node:test";

/**
 * @module kickoff/test/agoraCommerceAcceptanceContract
 * @description Guards the Agora Commerce customer journey acceptance harness.
 * @layer test
 * @owner agora.apparel
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const require = createRequire(import.meta.url);
const projectCommandService = require("../../nodics.ai/nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService");
const frameworkProjectServiceRoot = path.join(projectRoot, "..", "nodics.ai", "nodics.foundation", "modules", "nTooling", "src", "service", "project");
const scriptPath = path.join(projectRoot, 'scripts/acceptance', "defaultProjectAgoraCommerceAcceptanceService.mjs");
const dockerScriptPath = path.join(projectRoot, "..", "nodics.ai", "nodics.foundation", "modules", "nTooling", "src", "service", "project", "defaultProjectContainerQualificationService.mjs");
const liveQualificationPath = path.join(projectRoot, 'scripts/acceptance', "defaultProjectAgoraCommerceLiveQualificationService.mjs");
const packagePath = path.join(projectRoot, "package.json");
const dockerLocalProfilePath = path.join(projectRoot, "envs", "kickoffDockerLocal", "nodics.environment.json");

test("Agora Commerce acceptance covers backend route surface and secured generated customer journey", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectCommands = projectCommandService.resolveCommands(projectCommandService.readManifest(projectRoot));

  assert.match(pkg.scripts["acceptance:agora-commerce"], /nodics project:run acceptance:agora-commerce/);
  assert.equal(pkg.name, "nodics.kickoff");
  assert.equal(projectCommands["acceptance:agora-commerce"].script, "scripts/acceptance/defaultProjectAgoraCommerceAcceptanceService.mjs");
  assert.equal(projectCommands["acceptance:agora-commerce"].type, "projectScript");
  assert.match(source, /AXIS_ORIGIN/);
  assert.match(source, /portOf\(platformUrl, 4300\)/);
  assert.match(source, /portOf\(commerceUrl, 4350\)/);
  [
    "\"/nodics/product/v0/products/discovery\"",
    "\"/nodics/product/v0/products/{productCode}\"",
    "\"/nodics/cart/v0/carts\"",
    "\"/nodics/checkoutCore/v0/checkouts/place\"",
    "\"/nodics/fulfillmentCore/v0/shipping/methods\"",
    "\"/nodics/fulfillmentCore/v0/returns/methods\"",
    "\"/nodics/order/v0/orders/{orderCode}\"",
    "\"/nodics/order/v0/orders\"",
    "\"/nodics/order/v0/orders/{orderCode}/lifecycle/preview\"",
    "\"/nodics/order/v0/orders/{orderCode}/lifecycle\"",
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
  const dockerLocalProfile = JSON.parse(fs.readFileSync(dockerLocalProfilePath, "utf8"));
  const projectCommands = projectCommandService.resolveCommands(projectCommandService.readManifest(projectRoot));

  assert.match(pkg.scripts["acceptance:agora-commerce:docker"], /nodics project:run acceptance:agora-commerce:docker/);
  assert.equal(projectCommands["acceptance:agora-commerce:docker"].command, "project:container-qualification");
  assert.deepEqual(projectCommands["acceptance:agora-commerce:docker"].args, ["dockerLocal", "commerce-acceptance"]);
  assert.equal(fs.existsSync(path.join(projectRoot, "nodics.project.json")), true);
  assert.equal(dockerLocalProfile.environment, "kickoffDockerLocal");
  assert.equal(dockerLocalProfile.acceptance.urls.platform, "http://127.0.0.1:5300");
  assert.equal(dockerLocalProfile.acceptance.urls.commerce, "http://127.0.0.1:5350");
  assert.equal(dockerLocalProfile.acceptance.urls.axis, "http://127.0.0.1:4100");
  assert.match(source, /BOOTSTRAP_ADMIN_PASSWORD/);
  assert.doesNotMatch(source, /set -a|(?:^|\s)source\s+\S*docker\.env|\\. env/);
});

test("Agora Commerce live qualification sequences topology data publication and customer journey acceptance", () => {
  const source = fs.readFileSync(liveQualificationPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectCommands = projectCommandService.resolveCommands(projectCommandService.readManifest(projectRoot));

  assert.match(pkg.scripts["qualification:agora-commerce:live"], /nodics project:run qualification:agora-commerce:live/);
  assert.equal(pkg.name, "nodics.kickoff");
  assert.equal(projectCommands["qualification:agora-commerce:live"].script, "scripts/acceptance/defaultProjectAgoraCommerceLiveQualificationService.mjs");
  assert.equal(projectCommands["qualification:agora-commerce:live"].type, "projectScript");
  assert.match(source, /data folder -> Staged schemas -> Online schemas -> search indexing -> Agora frontend/);
  [
    '"topology:preflight"',
    '"test:agora-commerce"',
    '"acceptance:agora-commerce-data"',
    '"acceptance:agora-commerce-publication"',
    '"acceptance:agora-commerce"',
  ].forEach((script) => assert.match(source, new RegExp(script)));
  assert.match(source, /NODICS_STOREFRONT_COMMERCE_DATA_EXECUTE: "true"/);
  assert.match(source, /PASS/);
});
