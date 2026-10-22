/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaProductMediaForwardRelease @description Verifies the complete Product Media-reference successor and publication selections without importing or publishing data. @layer test @owner circa.ewaste */
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const dataRoot = path.resolve(__dirname, "../data");
const manifest = require("../data/manifest.json");
const originalRows = Object.values(
  require("../data/sample-v001/commerce/records/circaProductLocalizationData"),
);
const classifiedRows = Object.values(
  require("../data/sample-v001/asset-classification/records/circaAssetClassificationLocalizationData"),
);
const successorRows = Object.values(
  require("../data/sample-v001/product-media-v003/records/circaProductMediaV003LocalizationData"),
);
const mediaAssets = require("../data/sample-v001/content/assets/circa-media/assetManifest");
const priorCurrentPlan = require("../data/sample-v008/publication/current-catalogue/records/publicationPlan.json");
const successorPlan = require("../data/sample-v001/product-media-publication/records/publicationPlan.json");
const currentPlan = require("../data/sample-v001/publication/media-current-catalogue/records/publicationPlan.json");
const header = require("../data/sample-v001/product-media-v003/headers/circaProductMediaV003Header");

const identity = (item) => [item.domain, item.rootType, item.rootCode].join(":");
const sha256 = (file) =>
  crypto.createHash("sha256").update(fs.readFileSync(path.join(dataRoot, file))).digest("hex");

test("all 43 Products receive canonical Media codes while every other effective localization value is retained", () => {
  const priorByCode = new Map(originalRows.map((row) => [row.code, structuredClone(row)]));
  for (const row of classifiedRows) priorByCode.set(row.code, structuredClone(row));
  const declaredMediaCodes = new Set(mediaAssets.map((asset) => asset.mediaCode));

  assert.equal(successorRows.length, 86);
  assert.equal(new Set(successorRows.map((row) => row.code)).size, 86);
  assert.equal(new Set(successorRows.map((row) => row.productCode)).size, 43);
  for (const productCode of new Set(successorRows.map((row) => row.productCode))) {
    assert.deepEqual(
      successorRows.filter((row) => row.productCode === productCode).map((row) => row.locale).sort(),
      ["ar", "en"],
      productCode,
    );
  }

  for (const row of successorRows) {
    const prior = priorByCode.get(row.code);
    assert(prior, row.code);
    const mediaCode = row.media?.primaryImage?.mediaCode;
    assert(mediaCode, row.code);
    assert(declaredMediaCodes.has(mediaCode), row.code + " uses undeclared Media " + mediaCode);
    assert.equal(row.media.primaryImage.url, undefined, row.code);
    assert.equal(row.media.primaryImage.deliveryUrl, undefined, row.code);
    const expected = structuredClone(prior);
    expected.versionId = prior.attributes.kind === "ASSET" ? 2 : 1;
    expected.media = {
      primaryImage: {
        mediaCode,
        altText: prior.media.primaryImage.altText,
      },
    };
    assert.deepEqual(row, expected, row.code);
  }
});

test("three explicit immutable sections seal only the successor rows and publication selections", () => {
  const expectedFiles = {
    circaProductMediaReferences: [
      "sample-v001/product-media-v003/headers/circaProductMediaV003Header.js",
      "sample-v001/product-media-v003/records/circaProductMediaV003LocalizationData.js",
    ],
    circaProductMediaPublicationPlan: [
      "sample-v001/product-media-publication/records/publicationPlan.json",
    ],
    circaCatalogueMediaCurrentPublicationPlan: [
      "sample-v001/publication/media-current-catalogue/records/publicationPlan.json",
    ],
  };
  for (const [code, files] of Object.entries(expectedFiles)) {
    const section = manifest.sections[code];
    assert(section, code);
    assert.equal(section.version, code === "circaProductMediaReferences" ? "0.0.3" : "0.0.1");
    assert.equal(section.sourceRoot, "sample-v001");
    assert.equal(section.destinationRole, "COMMERCE_STAGED");
    assert.equal(section.selectionPolicy, "EXPLICIT");
    assert.equal(section.versioningPolicy, "IMMUTABLE");
    assert.equal(section.publicationPolicy, "REQUIRED");
    assert.equal(section.initialPublicationPolicy, "ADMIN_INITIATED");
    assert.deepEqual(Object.keys(section.files), files);
    for (const file of files) assert.equal(section.files[file], sha256(file), file);
  }
  assert.deepEqual(Object.keys(header), ["product"]);
  assert.deepEqual(header.product.circaProductMediaV003LocalizationData, {
    options: {
      enabled: true,
      schemaName: "productLocalization",
      operation: "saveAll",
      dataFilePrefix: "circaProductMediaV003LocalizationData",
    },
    query: { code: "$code" },
  });
});

test("the 43-root successor plan advances each effective Product graph exactly once", () => {
  const priorProducts = priorCurrentPlan.items.filter((item) => item.domain === "product");
  const priorByIdentity = new Map(priorProducts.map((item) => [identity(item), item]));
  assert.equal(successorPlan.contractVersion, 1);
  assert.equal(successorPlan.items.length, 43);
  assert.equal(new Set(successorPlan.items.map(identity)).size, 43);
  assert.equal(new Set(successorPlan.items.map((item) => item.code)).size, 43);

  for (const item of successorPlan.items) {
    const prior = priorByIdentity.get(identity(item));
    assert(prior, item.rootCode);
    assert.equal(item.code, "circa-product-" + item.rootCode + "-media-v001");
    assert.equal(item.sourceVersion, String(Number(prior.sourceVersion) + 1));
    assert.deepEqual(item.input, {
      publicationCode: item.code,
      productCode: item.rootCode,
      storeCode: "circaMainStore",
      versionId: prior.input.versionId + 1,
    });
  }
  assert.equal(successorPlan.items.filter((item) => item.sourceVersion === "2").length, 43);
});

test("the Media-current catalogue replaces 43 Products and preserves all three non-Product roots byte-for-byte", () => {
  const replacements = new Map(successorPlan.items.map((item) => [identity(item), item]));
  assert.equal(currentPlan.contractVersion, 1);
  assert.equal(currentPlan.items.length, 46);
  assert.equal(new Set(currentPlan.items.map(identity)).size, 46);
  assert.equal(new Set(currentPlan.items.map((item) => item.code)).size, 46);

  let replaced = 0;
  let retained = 0;
  currentPlan.items.forEach((item, index) => {
    const prior = priorCurrentPlan.items[index];
    assert.equal(identity(item), identity(prior));
    if (replacements.has(identity(item))) {
      replaced += 1;
      assert.deepEqual(item, replacements.get(identity(item)));
    } else {
      retained += 1;
      assert.deepEqual(item, prior);
    }
  });
  assert.equal(replaced, 43);
  assert.equal(retained, 3);
});
