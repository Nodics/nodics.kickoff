/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaCommerceForwardRelease @description Verifies the unified v001 Commerce demo selector and local-demo operational admission. @layer test @owner circa.ewaste */
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
const operationalHeader = require("../data/sample-v001/commerce-operational/headers/circaCommerceSampleHeader");
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
  const catalogueHeaderPath = Object.keys(current.files).find((file) =>
    file.includes("/headers/"),
  );
  const operationalHeaderPath = Object.keys(
    manifest.sections["commerce-operational"].files,
  ).find((file) => file.includes("/headers/"));
  assert.notEqual(
    path.basename(catalogueHeaderPath),
    path.basename(operationalHeaderPath),
  );
  assert.deepEqual(productConfig.localization.requiredLocales, ["en"]);
  assert(productConfig.localization.supportedLocales.includes("ar"));
});

test("the demo requires operational readiness while preserving owner admission", async () => {
  const packs = require("../config/properties")
    .backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  assert.equal(
    packs.find((p) => p.code === "circa.ewaste:commerce").targetRuntimeRole,
    "COMMERCE_STAGED",
  );
  const ops = packs.find((p) => p.code === "circa.ewaste:commerce-operational");
  assert.equal(ops.required, true);
  assert.equal(ops.trigger, "USER");
  assert.equal(ops.targetRuntimeRole, "COMMERCE");
  assert.equal(
    manifest.sections["commerce-operational"].sourceRoot,
    "sample-v001",
  );
  assert.equal(manifest.sections["commerce-operational"].version, "0.0.1");
  assert.equal(
    manifest.sections["commerce-operational"].selectionPolicy,
    "EXPLICIT",
  );
  assert.equal(
    manifest.sections["commerce-operational"].versioningPolicy,
    "IMMUTABLE",
  );
  assert.equal(
    manifest.sections["commerce-operational"].publicationPolicy,
    "NONE",
  );
  assert.deepEqual(targets(operationalHeader).sort(), [
    "coupon",
    "couponBatch",
    "inventoryBalance",
    "store",
  ]);
  for (const definition of Object.values(operationalHeader).flatMap(
    Object.values,
  ))
    assert.equal(definition.options.indexName, undefined);
  const ports = require(
    path.join(
      framework,
      "nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution",
    ),
  )({
    modules: {
      "circa.ewaste": {
        name: "circa.ewaste",
        path: path.resolve(__dirname, ".."),
      },
    },
    runtimeRole: "COMMERCE",
  });
  CONFIG.get("data").dataReleases.targetValidators = {
    inventory: "DefaultCircaDemoCommerceImportAdmissionService",
    promotion: "DefaultCircaDemoCommerceImportAdmissionService",
  };
  const originalGet = CONFIG.get;
  CONFIG.get = (key) =>
    key === "circaEWaste"
      ? require("../config/properties").circaEWaste
      : originalGet(key);
  SERVICE.DefaultInventoryOperationService = require(
    path.join(
      framework,
      "nodics.commerce/modules/baseCommerce/modules/inventory/src/service/defaultInventoryOperationService",
    ),
  );
  SERVICE.DefaultPromotionOperationService = require(
    path.join(
      framework,
      "nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionOperationService",
    ),
  );
  SERVICE.DefaultCircaDemoCommerceImportAdmissionService = require("../src/service/defaultCircaDemoCommerceImportAdmissionService");
  await ports.service.preflight({
    tenant: "default",
    releaseRequest: {
      dataType: "sample",
      releaseCodes: ["circa.ewaste:commerce-operational"],
    },
  });
  assert.equal(ports.imports.length, 0);
  assert.equal(ports.installations.length, 0);
});
