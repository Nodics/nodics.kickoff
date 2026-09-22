/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import assert from "node:assert/strict";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const envs = path.join(root, "envs");
const require = createRequire(import.meta.url);
const rootPropertiesPath = path.join(root, "config", "properties.js");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function assertNoRuntimeEndpointBindings(value, pointer, file) {
  if (!value || typeof value !== "object") return;
  if (
    value.$config === "runtime" &&
    pointer.includes("/servers/") &&
    pointer.endsWith("/endpoint")
  ) {
    assert.fail(
      `${path.relative(root, file)} repeats a peer runtime endpoint at ${pointer}; derive it from server metadata and retain only real peer policy`,
    );
  }
  for (const [key, child] of Object.entries(value)) {
    assertNoRuntimeEndpointBindings(child, `${pointer}/${key}`, file);
  }
}

function assertNoBackofficeClientEndpointRegistry(value, pointer, file) {
  if (!value || typeof value !== "object") return;
  if (pointer === "/backofficeRegistry/clientEndpoints") {
    assert.fail(
      `${path.relative(root, file)} centralizes browser endpoint ownership at ${pointer}; declare browserEndpoint on the owning runtime server`,
    );
  }
  for (const [key, child] of Object.entries(value)) {
    assertNoBackofficeClientEndpointRegistry(child, `${pointer}/${key}`, file);
  }
}

function assertNoInheritedApiExposureDuplicates(value, file) {
  if (value?.apiExposure?.categories?.serviceRegistry?.enabled === true) {
    assert.fail(
      `${path.relative(root, file)} repeats inherited serviceRegistry API exposure; nSystem owns the category default`,
    );
  }
}

function assertNoMovedOutServerProperties(value, file) {
  for (const key of [
    "runtimeIdentity",
    "localResetProvider",
    "backofficeLocalReset",
    "copilot",
    "profileExternalIdentity",
    "runtimeConfigurationSchemas",
    "profileCustomerBrowserSession",
    "profileBrowserSession",
    "defaultAuthDetail",
  ]) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      assert.fail(
        `${path.relative(root, file)} declares ${key}; move inventories and derived identity to module/env/package ownership`,
      );
    }
  }
  if (Object.prototype.hasOwnProperty.call(value, "apiExposure")) {
    assert.fail(
      `${path.relative(root, file)} declares apiExposure; use module-owned categories or runtime-role profiles`,
    );
  }
  if (value?.data?.dataReleases) {
    assert.fail(
      `${path.relative(root, file)} declares data.dataReleases; derive release profiles from module manifests or keep curated profiles at project/module ownership`,
    );
  }
  if (value?.tooling?.runtime) {
    assert.fail(
      `${path.relative(root, file)} declares tooling.runtime; server launch metadata belongs in the server package.json nodics.runtimeTooling block`,
    );
  }
  if (Object.prototype.hasOwnProperty.call(value, "search")) {
    assert.fail(
      `${path.relative(root, file)} declares search; use module/env-owned search.runtimeRoleProfiles or environment search connection overrides`,
    );
  }
  if (Object.prototype.hasOwnProperty.call(value, "publishEnabled")) {
    assert.fail(
      `${path.relative(root, file)} declares publishEnabled; derive publication activation from runtimeRole.publication`,
    );
  }
  if (Object.prototype.hasOwnProperty.call(value, "stripeProvider")) {
    assert.fail(
      `${path.relative(root, file)} declares stripeProvider; use project/module-owned runtime-role provider policy`,
    );
  }
  if (Object.prototype.hasOwnProperty.call(value, "httpHardening")) {
    assert.fail(
      `${path.relative(root, file)} declares httpHardening; keep runtime-role CORS policy in project/module profiles and deployment origins in environment config`,
    );
  }
  for (const key of ["product", "cart", "fulfillmentCore"]) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      assert.fail(
        `${path.relative(root, file)} declares ${key}; keep Commerce business behavior in project/application runtime-role profiles, not runtime server config`,
      );
    }
  }
}

function assertNoServerMediaDeliveryBaseUrl(value, pointer, file) {
  if (!value || typeof value !== "object") return;
  if (Object.prototype.hasOwnProperty.call(value, "mediaDeliveryBaseUrl")) {
    assert.fail(
      `${path.relative(root, file)} declares mediaDeliveryBaseUrl at ${pointer}; media delivery path belongs to CMS/product module defaults or derived public delivery policy, not runtime server config`,
    );
  }
  for (const [key, child] of Object.entries(value)) {
    assertNoServerMediaDeliveryBaseUrl(child, `${pointer}/${key}`, file);
  }
}

function assertNoEmptyServerConfigObjects(value, pointer, file) {
  if (!value || typeof value !== "object") return;
  if (!Array.isArray(value) && Object.keys(value).length === 0) {
    assert.fail(
      `${path.relative(root, file)} declares an empty object at ${pointer}; server config must contain only real overrides and framework/module defaults must be derived or owned by the source module`,
    );
  }
  for (const [key, child] of Object.entries(value)) {
    assertNoEmptyServerConfigObjects(child, `${pointer}/${key}`, file);
  }
}

function assertNoAuthoredRemoteOnlyPeerAliases(value, file) {
  for (const [key, server] of Object.entries(value?.servers || {})) {
    if (key === "default" || key === "options" || !server || typeof server !== "object") continue;
    if (server.remoteOnly === true && Object.keys(server).length === 1) {
      assert.fail(
        `${path.relative(root, file)} declares servers.${key}.remoteOnly only; peer runtime remoteness is derived from discovered environment topology`,
      );
    }
  }
}

for (const file of walk(envs).filter((item) => item.endsWith("/config/properties.js"))) {
  if (/\/envs\/[^/]+\/config\/properties\.js$/u.test(file)) {
    delete require.cache[file];
    const value = require(file);
    if (value?.data?.dataReleases?.runtimeRoleProfiles) {
      assert.fail(
        `${path.relative(root, file)} declares data.dataReleases.runtimeRoleProfiles; derive release profiles from module manifests or keep curated profiles at project/module ownership`,
      );
    }
  }
  if (!/\/envs\/[^/]+\/[^/]+Server\/config\/properties\.js$/u.test(file)) continue;
  delete require.cache[file];
  const value = require(file);
  assertNoRuntimeEndpointBindings(value, "", file);
  assertNoBackofficeClientEndpointRegistry(value, "", file);
  assertNoInheritedApiExposureDuplicates(value, file);
  assertNoMovedOutServerProperties(value, file);
  assertNoServerMediaDeliveryBaseUrl(value, "", file);
  assertNoEmptyServerConfigObjects(value, "", file);
  assertNoAuthoredRemoteOnlyPeerAliases(value, file);
}

delete require.cache[rootPropertiesPath];
const rootProperties = require(rootPropertiesPath);
for (const key of ["search", "stripeProvider", "httpHardening", "product", "cart", "fulfillmentCore"]) {
  assert.equal(
    Object.prototype.hasOwnProperty.call(rootProperties, key),
    false,
    `config/properties.js declares ${key}; reusable defaults belong to the owning framework/module and application policy belongs to the owning application module`,
  );
}

console.log("Kickoff server configuration ownership contract validated");
