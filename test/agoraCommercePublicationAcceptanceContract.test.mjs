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
 * @module kickoff/test/agoraCommercePublicationAcceptanceContract
 * @description Guards the live Agora Commerce Product search publication acceptance harness.
 * @layer test
 * @owner agoraCommonData
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const scriptPath = path.join(projectRoot, "..", "nodics.ai", "nodics.foundation", "modules", "nTooling", "src", "service", "project", "defaultProjectAgoraCommercePublicationAcceptanceService.mjs");
const packagePath = path.join(projectRoot, "package.json");
const projectContractPath = path.join(projectRoot, "nodics.project.json");

test("Agora Commerce publication acceptance covers operator publication operational restore and customer discovery", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectContract = JSON.parse(fs.readFileSync(projectContractPath, "utf8"));

  assert.match(pkg.scripts["acceptance:agora-commerce-publication"], /nodics-project\.js project:run acceptance:agora-commerce-publication/);
  assert.equal(projectContract.tooling.commands["acceptance:agora-commerce-publication"].command, "project:agora-commerce-publication-acceptance");
  assert.equal(projectContract.tooling.commands["acceptance:agora-commerce-publication"].home, "project");
  assert.match(source, /"\/nodics\/product\/v0\/operator\/products\/publication\/search"/);
  assert.match(source, /"\/nodics\/product\/v0\/internal\/products\/publication\/search\/restore"/);
  assert.match(source, /"\/nodics\/pricing\/v0\/internal\/pricing\/publication\/operational\/restore"/);
  assert.match(source, /"\/nodics\/inventory\/v0\/internal\/inventory\/publication\/operational\/restore"/);
  assert.match(source, /"\/nodics\/tax\/v0\/internal\/tax\/publication\/operational\/restore"/);
  assert.match(source, /"\/nodics\/product\/v0\/customer\/products\/discovery"/);
  assert.match(source, /"\/nodics\/product\/v0\/customer\/products\/\{productCode\}"/);
  assert.match(source, /catalogVersion.*\|\| "agoraStaged"/);
  assert.match(source, /storeCode.*\|\| "agoraMainStore"/);
  assert.match(source, /includeProjectionSnapshots: true/);
  assert.match(source, /restoreOperationalOnline/);
  assert.match(source, /agoraTaxPolicyData/);
  assert.match(source, /CommerceOnline/);
});

test("Agora Commerce publication acceptance rejects unsafe Product discovery fields", () => {
  const source = fs.readFileSync(scriptPath, "utf8");

  assert.match(source, /first\.sku/);
  assert.match(source, /first\.warehouseCode/);
  assert.match(source, /first\.priceRowCode/);
  assert.match(source, /detail\.sku/);
  assert.match(source, /detail\.warehouseCode/);
  assert.match(source, /detail\.priceRowCode/);
});
