/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaCommerceForwardRelease @description Proves unchanged historical scope, existing-only policy/operational separation and backend-gated explicit setup. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { isDeepStrictEqual } = require("node:util");
const dataRoot = path.resolve(__dirname, "../data");
const framework = path.resolve(__dirname, "../../../../nodics.ai");
const manifest = require("../data/manifest.json");
const releaseService = require(
  path.join(
    framework,
    "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService",
  ),
);
const hash = (value) => crypto.createHash("sha256").update(value).digest("hex");
const headers = (sequence) =>
  require(
    "../data/" +
      sequence +
      "/" +
      (sequence === "sample-v005"
        ? "commerce-policy"
        : "commerce-operational") +
      "/headers/circaCommerceSampleHeader",
  );
const targets = (header) =>
  Object.values(header)
    .flatMap(Object.values)
    .map((h) => h.options.schemaName);

test("retained 0.0.4 keeps all original hashes and active policy successor excludes operational targets", () => {
  releaseService.validateRetainedRoots(dataRoot, manifest);
  const retained = manifest.retainedRoots["sample-v001"].sections.commerce;
  assert.equal(retained.version, "0.0.4");
  assert.equal(retained.destinationRole, "COMMERCE_STAGED");
  assert.equal(retained.versioningPolicy, "IMMUTABLE");
  assert.equal(Object.keys(retained.files).length, 16);
  for (const [file, checksum] of Object.entries(retained.files))
    assert.equal(
      hash(fs.readFileSync(path.join(dataRoot, file))),
      checksum,
      "Historical source must remain unchanged",
    );
  const current = manifest.sections.commerce;
  assert.equal(current.version, "0.0.5");
  assert.equal(current.sourceRoot, "sample-v005");
  assert.equal(current.selectionPolicy, "EXPLICIT");
  const schemas = targets(headers("sample-v005"));
  for (const schema of ["coupon", "couponBatch", "inventoryBalance"])
    assert(!schemas.includes(schema));
  assert(schemas.includes("promotion"));
  assert(schemas.includes("warehouse"));
});

test("forward source preserves every approved record except excluded promotion consumption", () => {
  for (const [sequence, directory] of [
    ["sample-v005", "commerce-policy"],
    ["sample-v006", "commerce-operational"],
  ]) {
    for (const header of Object.values(headers(sequence)).flatMap(
      Object.values,
    )) {
      const file = header.options.dataFilePrefix;
      const previous = structuredClone(
        require("../data/sample-v001/commerce/records/" + file),
      );
      const current = require(
        "../data/" + sequence + "/" + directory + "/records/" + file,
      );
      if (header.options.schemaName === "promotion")
        for (const row of Object.values(previous)) {
          if (row.budget) delete row.budget.spent;
        }
      assert(
        isDeepStrictEqual(previous, current),
        "No new identity, code, quantity or business term may be invented",
      );
    }
  }
});

test("setup explicitly selects policy while operational pack is optional, immutable and owner-gated", async () => {
  const packs = require("../config/properties")
    .backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  assert.equal(
    packs.find((p) => p.code === "circa.ewaste:commerce").targetRuntimeRole,
    "COMMERCE_STAGED",
  );
  const ops = packs.find((p) => p.code === "circa.ewaste:commerce-operational");
  assert.equal(ops.required, false);
  assert.equal(ops.trigger, "USER");
  assert.equal(ops.targetRuntimeRole, "COMMERCE");
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
  assert.deepEqual(targets(headers("sample-v006")).sort(), [
    "coupon",
    "couponBatch",
    "inventoryBalance",
  ]);
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
    inventory: "DefaultInventoryOperationService",
    promotion: "DefaultPromotionOperationService",
  };
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
  await assert.rejects(
    ports.service.preflight({
      tenant: "default",
      releaseRequest: {
        dataType: "sample",
        releaseCodes: ["circa.ewaste:commerce-operational"],
      },
    }),
    /violates owner runtime policy/,
  );
  assert.equal(ports.imports.length, 0);
  assert.equal(ports.installations.length, 0);
});
