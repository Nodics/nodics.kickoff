/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDigitalBundleListingContextPack @description Pins the Circa-owned governed listing selection without moving framework defaults into Kickoff. @owner circa.ewaste @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const manifest = require("../data/manifest.json");
const header = require("../data/sample-v006/digital-listing-context/headers/circaDigitalBundleListingContextHeader");
const records = require("../data/sample-v006/digital-listing-context/records/circaDigitalBundleListingContextData");

test("Circa listing destination remains a governed customer data release", () => {
  const release = manifest.sections.circaDigitalBundleListingContexts;
  assert.equal(release.destinationRole, "COMMERCE");
  assert.equal(release.selectionPolicy, "EXPLICIT");
  assert.equal(release.sourceRoot, "sample-v006");
  assert.equal(header.digitalCore.circaDigitalBundleListingContextData.options.schemaName, "digitalBundleListingContext");
  assert.equal(header.digitalCore.circaDigitalBundleListingContextData.options.operation, "saveAll");
  assert.deepEqual(header.digitalCore.circaDigitalBundleListingContextData.query,
    { code: "$code", tenant: "$tenant", enterpriseCode: "$enterpriseCode" });
  const item = records.record0;
  assert.deepEqual(item.reward, { programCode: "circa", rewardTypeCode: "points" });
  assert.deepEqual(item.categoryCodes, ["circaAssets"]);
  assert.equal(item.enterpriseCode, "default");
  assert.equal(item.storeCode, "circaMainStore");
  assert.equal(item.priceBookCode, "circaPointsPriceBook");
  assert.equal(item.currency, "POINTS");
  assert.equal(item.status, "ACTIVE");
});
