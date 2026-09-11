"use strict";
/** @description Verifies published demo catalogue selling context and variant/price references. */
const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const profile = require("../envs/kickoffLocal/nodics.environment.json");
for (const domain of profile.composition.agora.domains) {
  test(`${domain.code} release has consistent enterprise, currency and sellable references`, () => {
    const dataRoot = path.resolve(
      __dirname,
      "../modules",
      domain.projectPack,
      "data",
    );
    const manifest = require(path.join(dataRoot, "manifest.json"));
    const release = manifest.sections[domain.publication.releaseCode];
    assert.equal(release.destinationRole, "COMMERCE_STAGED");
    const records = new Map();
    for (const [relative, checksum] of Object.entries(release.files)) {
      const file = path.join(dataRoot, relative);
      assert.equal(
        crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex"),
        checksum,
        relative,
      );
      if (!relative.includes("/records/")) continue;
      const values = Object.values(require(file));
      for (const record of values) {
        assert.equal(record.tenant, "default");
        assert.equal(
          record.enterpriseCode,
          "default",
          `${relative}:${record.code}`,
        );
      }
      records.set(path.basename(relative), values);
    }
    const read = (suffix) =>
      records.get(domain.publication.recordPrefix + suffix) || [];
    const store = read("StoreData.js")[0];
    assert.equal(store.code, domain.publication.storeCode);
    assert.equal(store.status, "ACTIVE");
    const books = new Map(
      read("PriceBookData.js").map((item) => [item.code, item]),
    );
    const products = new Map(
      read("ProductData.js").map((item) => [item.code, item]),
    );
    assert(products.size > 0);
    for (const row of read("PriceRowData.js")) {
      assert(products.has(row.productCode));
      assert.equal(row.currency, store.defaultCurrency);
      assert.equal(books.get(row.priceBookCode)?.currency, row.currency);
    }
    const variants = read("ProductVariantData.js");
    const skus = new Set();
    for (const variant of variants) {
      assert(products.has(variant.productCode));
      assert(variant.sku);
      assert(!skus.has(variant.sku));
      skus.add(variant.sku);
    }
    for (const balance of read("InventoryBalanceData.js"))
      assert(skus.has(balance.sku), balance.sku);
    const header = require(
      path.join(
        dataRoot,
        release.sourceRoot,
        "commerce/headers",
        domain.publication.recordPrefix + "CatalogHeader.js",
      ),
    );
    assert.equal(header.store.stores.options.schemaName, "store");
    assert.equal(header.tax.policies.options.schemaName, "taxPolicy");
  });
}
