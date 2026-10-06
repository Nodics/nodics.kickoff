/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/agoraCommerceReleaseAdmission @description Prevents live stock and coupon snapshots from re-entering any Agora Staged catalog release. @layer test @owner nodics.kickoff */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { frameworkRoot } = require("./helpers/configuration");
const releases = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));
const inventory = require(path.join(frameworkRoot, "nodics.commerce/modules/baseCommerce/modules/inventory/src/service/defaultInventoryOperationService"));
const promotion = require(path.join(frameworkRoot, "nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionOperationService"));

for (const [application, section, version, oldRoot] of [
  ["apparel", "agoraApparelCommerceCatalog", "0.0.10", "sample-v004"],
  ["electronics", "agoraElectronicsCommerceCatalog", "0.0.4", "sample-v002"],
  ["telco", "agoraTelcoCommerceCatalog", "0.0.4", "sample-v002"],
]) test(application + " publishes catalog policy without operational records", (t) => {
  const root = path.resolve(__dirname, "../modules/agora." + application + "/data");
  const manifest = require(path.join(root, "manifest.json"));
  const active = manifest.sections[section];
  assert.equal(active.version, version);
  assert.equal(active.destinationRole, "COMMERCE_STAGED");
  assert.equal(active.lifecycle, "PUBLISHABLE");
  releases.validateRetainedRoots(root, manifest);
  assert(manifest.retainedRoots[oldRoot].sections[section]);
  const priorConfig = global.CONFIG;
  global.CONFIG = { get: (key) => key === "runtimeRole" ? { code: "COMMERCE_STAGED" } : key === "promotion" ? { publication: { runtimeRole: "STAGED" } } : undefined };
  t.after(() => { global.CONFIG = priorConfig; });
  const schemas = [];
  const matched = new Set();
  for (const file of Object.keys(active.files).filter((name) => name.includes("/headers/") && name.endsWith(".js"))) {
    const header = require(path.join(root, file));
    for (const entries of Object.values(header)) for (const entry of Object.values(entries)) {
      const schemaName = entry.options?.schemaName;
      if (!schemaName) continue;
      schemas.push(schemaName);
      assert(!["inventoryBalance", "inventoryMovement", "inventoryReservation", "coupon", "couponBatch", "couponRedemption"].includes(schemaName), schemaName);
      inventory.validateImportTarget({ schemaName, lifecycle: active.lifecycle });
      promotion.validateImportTarget({ schemaName, lifecycle: active.lifecycle });
      const files = Object.keys(active.files).filter((name) => name.includes("/records/") && path.basename(name).startsWith(entry.options.dataFilePrefix));
      assert(files.length, file);
      for (const dataFile of files) {
        matched.add(dataFile);
        if (schemaName === "promotion") promotion.validatePolicyAuthoring({models: Object.values(require(path.join(root, dataFile)))});
      }
    }
  }
  assert(schemas.includes("product"));
  assert(schemas.includes("warehouse"));
  assert.deepEqual(Object.keys(active.files).filter((name) => name.includes("/records/") && !matched.has(name)), [], "every release record file must have an import header");
  assert(!Object.keys(active.files).some((file) => /(?:Coupon(?:Batch)?|InventoryBalance)Data\.js$/.test(file)));
  assert.throws(() => inventory.validateImportTarget({schemaName: "inventoryBalance", lifecycle: "PUBLISHABLE"}), /Staged/);
});
