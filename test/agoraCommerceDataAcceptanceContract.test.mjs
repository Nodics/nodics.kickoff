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
 * @owner agora.apparel
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const scriptPath = path.join(
  projectRoot,
  "..",
  "nodics.ai",
  "nodics.foundation",
  "modules",
  "nTooling",
  "src",
  "service",
  "project",
  "defaultProjectAgoraCommerceDataAcceptanceService.mjs",
);
const packagePath = path.join(projectRoot, "package.json");
const projectContractPath = path.join(projectRoot, "nodics.project.json");

test("Agora Commerce data acceptance remains preflight-first with explicit install gating", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectContract = JSON.parse(fs.readFileSync(projectContractPath, "utf8"));

  assert.match(
    pkg.scripts["start:commerce:staged"],
    /nodics-project\.js project:run start:commerce:staged/,
  );
  assert.equal(projectContract.tooling.commands["start:commerce:staged"].command, "project:runtime-start");
  assert.deepEqual(projectContract.tooling.commands["start:commerce:staged"].args, ["commerceStaged"]);
  assert.match(
    pkg.scripts["acceptance:agora-commerce-data"],
    /nodics-project\.js project:run acceptance:agora-commerce-data/,
  );
  assert.equal(
    projectContract.tooling.commands["acceptance:agora-commerce-data"].command,
    "project:agora-commerce-data-acceptance",
  );
  assert.equal(projectContract.tooling.commands["acceptance:agora-commerce-data"].home, "project");
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

test("Agora Commerce data acceptance derives the selected domain release family", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  assert.match(source, /agora-domain-composition/);
  assert.match(source, /storefrontPacks\.flatMap/);
  assert.match(source, /const storefrontPacks = Object.freeze\(\[...composition.projectPacks\]\)/);
  assert.match(source, /section\.destinationRole === "COMMERCE_STAGED"/);
  assert.doesNotMatch(source, new RegExp('agora' + 'CommonData:agoraProductCatalogSource'));
});
