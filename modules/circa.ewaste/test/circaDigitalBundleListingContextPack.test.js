/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDigitalBundleListingContextPack @description Pins the Circa-owned governed listing selection without moving framework defaults into Kickoff. @owner circa.ewaste @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const manifest = require("../data/manifest.json");
const header = require("../data/sample-v001/digital-listing-context/headers/circaDigitalBundleListingContextHeader");
const records = require("../data/sample-v001/digital-listing-context/records/circaDigitalBundleListingContextData");

test("Circa listing destination remains a governed customer data release", () => {
  const release = manifest.sections.circaDigitalBundleListingContexts;
  assert.equal(release.destinationRole, "COMMERCE");
  assert.equal(release.selectionPolicy, "EXPLICIT");
  assert.equal(release.sourceRoot, "sample-v001");
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

test("Retail has one explicit scoped selection and exact v001 manifest/header integrity", () => {
  const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
  const release = manifest.sections.circaDigitalBundleListingContexts;
  assert.equal(release.version, '0.0.1');
  assert.equal(release.sourceRoot, 'sample-v001');
  assert.equal(Object.keys(records).length, 2);
  const retail = records.record1;
  assert.deepEqual(retail, { ...records.record0, code: 'circa-retail-points-marketplace',
    name: 'Circa Retail circular marketplace', enterpriseCode: 'GREENPERKS_RETAIL' });
  assert.equal(new Set(Object.values(records).map(row => row.code)).size, 2);
  assert.equal(records.record0.code, 'circa-points-marketplace');
  assert.equal(records.record0.enterpriseCode, 'default');
  assert.deepEqual(header.digitalCore.circaDigitalBundleListingContextData.query,
    { code: '$code', tenant: '$tenant', enterpriseCode: '$enterpriseCode' });
  for (const [file, checksum] of Object.entries(release.files)) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.resolve(__dirname, '../data', file))).digest('hex'), checksum);
  }
});
