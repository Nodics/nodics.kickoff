/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaCommerceForwardRelease @description Verifies the unified v001 Commerce selector and canonical owner refusal of legacy operational snapshots before dispatch. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const dataRoot = path.resolve(__dirname, "../data");
const framework = path.resolve(__dirname, "../../../../nodics.ai");
const manifest = require("../data/manifest.json");
const hash = (value) => crypto.createHash("sha256").update(value).digest("hex");
const header = require("../data/sample-v001/commerce/headers/circaCommerceCatalogHeader");
const targets = (value) =>
  Object.values(value)
    .flatMap(Object.values)
    .map((entry) => entry.options.schemaName);

test("commerce catalogue is selected as unified v001 first-start data", () => {
  const current = manifest.sections.commerce;
  const productConfig = require("../config/properties").product;
  assert.equal(current.version, "0.0.1");
  assert.equal(current.sourceRoot, "sample-v001");
  assert.equal(current.selectionPolicy, "EXPLICIT");
  assert.equal(current.destinationRole, "COMMERCE_STAGED");
  assert.equal(current.versioningPolicy, "IMMUTABLE");
  for (const [file, checksum] of Object.entries(current.files))
    assert.equal(
      hash(fs.readFileSync(path.join(dataRoot, file))),
      checksum,
      file,
    );
  const schemas = targets(header);
  for (const schema of ["coupon", "couponBatch", "inventoryBalance", "store"])
    assert(!schemas.includes(schema));
  assert(schemas.includes("promotion"));
  assert(schemas.includes("warehouse"));
  assert.equal(manifest.sections["commerce-operational"], undefined);
  assert(Object.values(manifest.sections).some(section => section.installer === "PROMOTION_CAMPAIGN_ISSUANCE"));
  assert.deepEqual(productConfig.localization.requiredLocales, ["en"]);
  assert(productConfig.localization.supportedLocales.includes("ar"));
});

test("retired snapshot targets remain refused by canonical owners regardless of demo flags", async (t) => {
  const prior = { SERVICE: global.SERVICE, CONFIG: global.CONFIG };
  t.after(() => Object.assign(global, prior));
  global.CONFIG = { get: () => ({ publication: { runtimeRole: "ONLINE", delivery: { enabled: true } },
    sellerAuthorization: { enabled: true, qualified: true } }) };
  global.SERVICE = {
    DefaultInventoryOperationService: require(path.join(framework, "nodics.commerce/modules/baseCommerce/modules/inventory/src/service/defaultInventoryOperationService")),
    DefaultPromotionOperationService: require(path.join(framework, "nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionOperationService")),
  };
  const adapter = require("../src/service/defaultCircaDemoCommerceImportAdmissionService");
  for (const [moduleName, schemaName, refusal] of [
    ["inventory", "inventoryBalance", /stock snapshots require governed Inventory operations/],
    ["promotion", "couponBatch", /coupon snapshots require governed issuance/],
    ["promotion", "coupon", /coupon snapshots require governed issuance/],
  ]) assert.throws(() => adapter.validateImportTarget({
    releaseCode: "circa.ewaste:commerce-operational", moduleName, schemaName, operation: "saveAll",
    destinationRole: "COMMERCE", lifecycle: "OPERATIONAL_VERSIONED",
    enabled: true, qualified: true,
  }), refusal);
});

test("the compatibility validator preserves canonical decisions and fails closed when unavailable", async (t) => {
  const prior = global.SERVICE;
  t.after(() => { global.SERVICE = prior; });
  const adapter = require("../src/service/defaultCircaDemoCommerceImportAdmissionService");
  for (const [moduleName, ownerName] of [
    ["inventory", "DefaultInventoryOperationService"],
    ["promotion", "DefaultPromotionOperationService"],
  ]) {
    const request = { moduleName, schemaName: "owner-selected-target", releaseCode: "circa.ewaste:commerce-operational" };
    const refusal = new Error("Synthetic canonical refusal");
    global.SERVICE = { [ownerName]: { validateImportTarget: function (actual) {
      assert.equal(actual, request, "Target metadata must not be rewritten");
      assert.equal(this, SERVICE[ownerName]);
      return true;
    } } };
    assert.equal(adapter.validateImportTarget(request), true);
    SERVICE[ownerName].validateImportTarget = () => false;
    assert.equal(adapter.validateImportTarget(request), false);
    SERVICE[ownerName].validateImportTarget = async () => { throw refusal; };
    await assert.rejects(() => adapter.validateImportTarget(request), (error) => error === refusal);
    delete SERVICE[ownerName];
    assert.throws(() => adapter.validateImportTarget(request), /owner is unavailable/);
    SERVICE[ownerName] = {};
    assert.throws(() => adapter.validateImportTarget(request), /owner is unavailable/);
  }
  assert.throws(() => adapter.validateImportTarget({ moduleName: "unknown" }), /owner is unavailable/);
});
