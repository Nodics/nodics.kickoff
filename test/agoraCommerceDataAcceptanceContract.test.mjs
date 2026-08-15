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
 * @module kickoff/test/agoraCommerceDataAcceptanceContract
 * @description Guards the live Agora Commerce data acceptance harness as preflight-first and install-gated.
 * @layer test
 * @owner agoraData
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const scriptPath = path.join(projectRoot, "scripts/agora-commerce-data-acceptance.mjs");
const packagePath = path.join(projectRoot, "package.json");

test("Agora Commerce data acceptance remains preflight-first with explicit install gating", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  assert.equal(pkg.scripts["start:commerce:staged"], "node src/start-commerce-staged-server.js");
  assert.equal(pkg.scripts["acceptance:agora-commerce-data"], "node scripts/agora-commerce-data-acceptance.mjs");
  assert.match(source, /NODICS_COMMERCE_STAGED_URL \|\| "http:\/\/127\.0\.0\.1:4352"/);
  assert.match(source, /"\/nodics\/import\/v0\/sample"/);
  assert.match(source, /"\/nodics\/import\/v0\/sample\/validate"/);
  assert.match(source, /"\/nodics\/import\/v0\/sample\/install"/);
  assert.match(source, /process\.env\.NODICS_STOREFRONT_COMMERCE_DATA_EXECUTE === "true"/);
  assert.match(source, /validationOnly !== true \|\| validation\?\.importExecuted !== false/);
  assert.match(source, /install skipped; set NODICS_STOREFRONT_COMMERCE_DATA_EXECUTE=true/);
  assert.match(source, /ERR_IMP_00003/);
  assert.match(source, /install already current/);
});

test("Agora Commerce data acceptance requires the full staged release family", () => {
  const source = fs.readFileSync(scriptPath, "utf8");

  [
    "agoraData:agoraCommerceSearchSource",
    "agoraData:agoraDiscoveryConfigurationSource",
    "agoraData:agoraInventorySource",
    "agoraData:agoraPricingSource",
    "agoraData:agoraProductCatalogSource",
    "agoraData:agoraTaxSource",
  ].forEach((releaseCode) => assert.match(source, new RegExp(releaseCode)));
});
