/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaCatalogueBaseline @description Checks consolidated reference classification and Media identity without claiming installed publication or supply. @layer test @owner circa.ewaste */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const data = path.resolve(__dirname, "../data/sample-v001");
const rows = (name) =>
  Object.values(
    require(path.join(data, "commerce/records/circa" + name + "Data.js")),
  );
const products = rows("Product");
const localizations = rows("ProductLocalization");
const media = require("../data/sample-v001/content/assets/circa-media/assetManifest");
const assets = ["1047", "1051", "1052", "1055", "1092"].map(
  (id) => "CIRCA_ASSET_EWA-" + id,
);

test("one baseline declares all Product and localized identities without patch versions", () => {
  for (const [name, count] of [
    ["Product", 43],
    ["ProductVariant", 43],
    ["ProductLocalization", 86],
    ["ProductVariantLocalization", 86],
  ]) {
    const records = rows(name);
    assert.equal(records.length, count);
    assert.equal(new Set(records.map((row) => row.code)).size, count);
    for (const row of records) {
      assert.equal(row.versionId, undefined, row.code);
      assert.equal(row.tenant, "default");
      assert.equal(row.enterpriseCode, "GREENPERKS_ONLINE");
      assert.equal(row.revision, 1);
      if (name !== "Product")
        assert(products.some((product) => product.code === row.productCode));
    }
  }
  for (const name of ["ProductLocalization", "ProductVariantLocalization"])
    for (const product of products)
      assert.deepEqual(
        rows(name)
          .filter((row) => row.productCode === product.code)
          .map((row) => row.locale)
          .sort(),
        ["ar", "en"],
      );
});

test("five asset graphs retain ownership classification and coupons retain their own pool strategy", () => {
  assert.equal(products.filter((row) => assets.includes(row.code)).length, 5);
  for (const product of products) {
    const asset = assets.includes(product.code);
    const delivery = asset ? "DIGITAL_OWNERSHIP" : "COUPON_CODE";
    assert.equal(product.digitalDeliveryType, delivery);
    for (const name of [
      "ProductVariant",
      "ProductLocalization",
      "ProductVariantLocalization",
    ])
      for (const row of rows(name).filter(
        (row) => row.productCode === product.code,
      )) {
        assert.equal(row.attributes.productType, "DIGITAL");
        assert.equal(row.attributes.fulfillmentStrategy, "DIGITAL_COMMERCE");
        assert.equal(row.attributes.digitalDeliveryType, delivery);
        assert.equal(
          row.attributes.inventoryStrategy,
          asset ? "DIGITAL_COMMERCE" : "COUPON_CODE_POOL",
        );
        if (name === "ProductVariant")
          assert.equal(row.digitalDeliveryType, delivery);
      }
  }
  for (const row of localizations.filter((row) =>
    assets.includes(row.productCode),
  )) {
    assert.equal(
      row.attributes.carbonSettlement,
      "NO_NEW_MINT_OR_LEDGER_MOVEMENT",
    );
    assert.equal(row.attributes.saleMode, "DIGITAL_OWNERSHIP");
    assert(row.attributes.ownerCode);
  }
});

test("all Product and locale image descriptors resolve declared Media identities", () => {
  const codes = new Set(media.map((asset) => asset.mediaCode));
  for (const product of products) {
    const records = [
      product,
      ...localizations.filter((row) => row.productCode === product.code),
    ];
    for (const row of records) {
      const image = row.media.primaryImage;
      assert(codes.has(image.mediaCode), row.code);
      assert.equal(image.url, undefined);
      assert.equal(image.deliveryUrl, undefined);
      assert.equal(typeof image.altText, "string");
      assert.equal(image.mediaCode, product.media.primaryImage.mediaCode);
    }
  }
});

test("superseded shipped patch files are absent while historical evidence is retained", () => {
  for (const file of [
    "asset-classification/records/circaAssetClassificationLocalizationData.js",
    "asset-publication/records/publicationPlan.json",
    "product-media/records/circaProductMediaLocalizationData.js",
    "product-media-v002/records/circaProductMediaLocalizationData.js",
    "product-media-v003/records/circaProductMediaV003LocalizationData.js",
    "product-media-publication/records/publicationPlan.json",
    "publication/current-catalogue/records/publicationPlan.json",
    "publication/media-current-catalogue/records/publicationPlan.json",
  ])
    assert.equal(fs.existsSync(path.join(data, file)), false, file);
  assert(
    fs.existsSync(
      path.join(__dirname, "fixtures/circaAssetClassificationBaseline.json"),
    ),
  );
  assert(
    fs.existsSync(
      path.join(
        __dirname,
        "evidence/circa-native-publication-and-issuer-follow-through-2026-10-09.json",
      ),
    ),
  );
});
