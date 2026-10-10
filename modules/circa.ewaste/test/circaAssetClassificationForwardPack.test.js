/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaAssetClassificationForwardPack @description Checks exact customer successors and adoption of canonical release/version/publication owners with isolated ports, never installed or native journey proof. @layer test @owner circa.ewaste */
const test = require("node:test"), assert = require("node:assert/strict");
const fs = require("node:fs"), path = require("node:path"), crypto = require("node:crypto");
const { frameworkRoot } = require("../../../test/helpers/configuration");
const data = path.resolve(__dirname, "../data");
const manifest = require("../data/manifest.json");
const baseline = require("./fixtures/circaAssetClassificationBaseline.json");
const selection = require("./fixtures/circaAssetClassificationSetupSelection.json");
const rows = Object.values(require("../data/sample-v001/asset-classification/records/circaAssetClassificationLocalizationData"));
const previous = Object.values(require("../data/sample-v001/commerce/records/circaProductLocalizationData"));
const plan = require("../data/sample-v001/asset-publication/records/publicationPlan.json");
const header = require("../data/sample-v001/asset-classification/headers/circaAssetClassificationHeader");
const originals = require("../data/sample-v001/publication/catalogue/records/publicationPlan.json");
const rootCodes = ["1047", "1051", "1052", "1055", "1092"].map(id => "CIRCA_ASSET_EWA-" + id);
const hash = value => crypto.createHash("sha256").update(value).digest("hex");
const owner = relative => require(path.join(frameworkRoot, relative));

/** Restores process globals after isolated canonical-owner ports; never starts a runtime. */
function restoreGlobals(t) {
  const keys = ["CONFIG", "SERVICE", "NODICS", "UTILS", "CLASSES"];
  const saved = Object.fromEntries(keys.map(k => [k, global[k]]));
  t.after(() => { for (const k of keys) if (saved[k] === undefined) delete global[k]; else global[k] = saved[k]; });
}

test("all previously declared sections and installed payload bytes including original publication plans remain unchanged", () => {
  for (const [code, expected] of Object.entries(baseline.sections))
    assert.equal(hash(JSON.stringify(manifest.sections[code])), expected, code);
  for (const [file, expected] of Object.entries(baseline.files))
    assert.equal(hash(fs.readFileSync(path.join(data, file))), expected, file);
});

test("exactly ten en/ar successors add only the two canonical discriminators and preserve all other values", () => {
  assert.equal(rows.length, 10);
  assert.equal(new Set(rows.map(r => r.code)).size, 10);
  for (const productCode of rootCodes)
    assert.deepEqual(rows.filter(r => r.productCode === productCode).map(r => r.locale).sort(), ["ar", "en"]);
  for (const row of rows) {
    assert.equal(row.tenant, "default"); assert.equal(row.enterpriseCode, "GREENPERKS_ONLINE");
    const original = previous.find(r => r.code === row.code);
    assert(original); const unchanged = structuredClone(row);
    assert.equal(unchanged.attributes.digitalDeliveryType, "DIGITAL_OWNERSHIP");
    assert.equal(unchanged.attributes.inventoryStrategy, "DIGITAL_COMMERCE");
    delete unchanged.attributes.digitalDeliveryType; delete unchanged.attributes.inventoryStrategy;
    assert.deepEqual(unchanged, original, row.code);
  }
});

test("three explicit Local Staged sections have independent immutable hashes and no unrelated business targets", () => {
  const codes = ["circaAssetClassification", "circaAssetClassificationPublicationPlan", "circaCatalogueCurrentPublicationPlan"];
  for (const code of codes) {
    const section = manifest.sections[code];
    assert.equal(section.version, "0.0.1"); assert.equal(section.sourceRoot, "sample-v001");
    assert.equal(section.kind, "DATA_RELEASE"); assert.equal(section.selectionPolicy, "EXPLICIT");
    assert.equal(section.destinationRole, "COMMERCE_STAGED"); assert.deepEqual(section.environmentScope, ["LOCAL"]);
    assert.equal(section.versioningPolicy, "IMMUTABLE"); assert.equal(section.publicationPolicy, "REQUIRED");
    assert.equal(section.initialPublicationPolicy, "ADMIN_INITIATED");
    for (const [file, expected] of Object.entries(section.files))
      assert.equal(hash(fs.readFileSync(path.join(data, file))), expected, file);
  }
  assert.equal(Object.keys(manifest.sections[codes[0]].files).length, 2);
  assert.equal(Object.keys(manifest.sections[codes[1]].files).length, 1);
  assert.equal(Object.keys(manifest.sections[codes[2]].files).length, 1);
  assert.deepEqual(Object.keys(header), ["product"]);
  const entry = header.product.circaAssetClassificationLocalizationData;
  assert.equal(entry.options.schemaName, "productLocalization"); assert.equal(entry.options.operation, "saveAll");
  assert.deepEqual(entry.query, { code: "$code" });
  assert.deepEqual(Object.keys(entry.options).sort(), ["dataFilePrefix", "enabled", "operation", "schemaName"]);
});

test("canonical release discovery resolves each exact successor without dispatch and rejects Online/Docker destinations", t => {
  restoreGlobals(t);
  const ports = owner("nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution")({
    modules: { "circa.ewaste": { name: "circa.ewaste", path: path.resolve(__dirname, ".."), index: "99" } },
    runtimeRole: "COMMERCE_STAGED",
  });
  const releases = ports.service.discoverReleases("sample");
  for (const code of ["circaAssetClassification", "circaAssetClassificationPublicationPlan", "circaCatalogueCurrentPublicationPlan"]) {
    const release = releases.find(r => r.sectionCode === code);
    assert(release); assert.equal(release.invalidManifest, undefined);
    assert.equal(release.version, "0.0.1"); assert.equal(release.sourceRoot, "sample-v001");
    assert.deepEqual(release.declaredFiles, Object.keys(manifest.sections[code].files).sort());
    assert.equal(ports.service.validateDestination(release), true);
    ports.runtimeRole = "COMMERCE";
    assert.throws(() => ports.service.validateDestination(release)); ports.runtimeRole = "COMMERCE_STAGED";
    assert.throws(() => ports.service.validateDestination({ ...release, environmentScope: ["PRODUCTION"] }));
  }
  assert.equal(ports.imports.length, 0); assert.equal(ports.installations.length, 0);
});

test("nImport resolves each original localization version through its generated owner and preserves portable source values", async t => {
  restoreGlobals(t);
  const process = owner("nodics.foundation/modules/nData/nImport/import/src/service/process/model/defaultModelImportProcessService");
  const input = { tenant: "default", importRun: { dataReleases: [{ releaseCode: "circa.ewaste:circaAssetClassification", version: "0.0.1" }] },
    header: { rawSchema: { isVersionedEnabled: true }, query: header.product.circaAssetClassificationLocalizationData.query,
      options: { moduleName: "product", schemaName: "productLocalization", operation: "saveAll", userGroups: ["employeeUserGroup"] } } };
  const calls = [], copies = structuredClone(rows);
  const generated = { get: async r => { calls.push(r); return { result: [{ code: r.query.code, versionId: 4 }] }; } };
  const next = await process.reconcileContentPackVersions(input, generated, copies);
  assert.equal(calls.length, 10);
  for (let i = 0; i < next.length; i++) {
    assert.equal(next[i].versionId, 5); const portable = { ...next[i] }; delete portable.versionId;
    assert.deepEqual(portable, rows[i]); assert.equal(rows[i].versionId, undefined);
    assert.equal(calls[i].tenant, "default"); assert.deepEqual(calls[i].query, { code: rows[i].code });
    assert.deepEqual(calls[i].searchOptions, { limit: 1, sort: { versionId: -1 } });
  }
  const saves = owner("nodics.foundation/modules/nDatabase/database/src/service/procs/save/defaultModelsSaveInitializerService");
  const dispatches = [];
  global.SERVICE = { DefaultPipelineService: { start: async (name, r) => { dispatches.push({ name, r }); return { result: r.model }; } } };
  for (const model of next) await saves.saveSingleModel({ tenant: "default", authData: {}, originalQuery: { code: "$code" },
    options: { versionedImport: true }, schemaModel: { rawSchema: { isVersionedEnabled: true } } }, {}, model);
  assert.equal(dispatches.length, 10);
  assert(dispatches.every(d => d.name === "modelSaveInitializerPipeline" && d.r.query.versionId === 5));
});

test("successor publication selects only five original identities with new request codes and exact root seals", async t => {
  restoreGlobals(t);
  assert.equal(plan.contractVersion, 1); assert.equal(plan.items.length, 5);
  assert.deepEqual(plan.items.map(i => i.rootCode), rootCodes);
  const codes = new Set(originals.items.map(i => i.code));
  const provider = owner("nodics.commerce/modules/baseCommerce/modules/product/src/service/defaultProductPublicationVersionProviderService");
  const calls = [];
  global.CLASSES = { NodicsError: class extends Error {} };
  global.SERVICE = { DefaultProductGovernedPublicationService: { create: async (r, p) => { calls.push({ r, p }); return p; } } };
  for (const item of plan.items) {
    assert(!codes.has(item.code)); assert.equal(item.sourceVersion, "2");
    assert.equal(item.domain, "product"); assert.equal(item.rootType, "product");
    assert.deepEqual(item.input, { publicationCode: item.code, productCode: item.rootCode, storeCode: "circaMainStore", versionId: 1 });
    const request = { tenant: "default", enterpriseCode: "GREENPERKS_ONLINE", authData: { original: true } };
    await provider.prepareSetup(request, item); assert.equal(calls.at(-1).r, request);
    assert.throws(() => provider.prepareSetup(request, { ...item, sourceVersion: "1" }));
  }
  assert.equal(calls.length, 5);
});

test("proposed forward setup uses required BEFORE import and separate scoped AFTER governance without modifying the old plan", t => {
  restoreGlobals(t); global.CLASSES = { NodicsError: class extends Error {} };
  const initialization = owner("nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService");
  const steps = selection.steps.map((step, index) => initialization.normalizePreparationStep({ ...step,
    ...(step.type === "GOVERNED_PUBLICATIONS" ? { publicationPlan: plan } : {}) }, index));
  assert.deepEqual(steps.map(s => s.phase), ["BEFORE_PUBLICATION", "AFTER_PUBLICATION"]);
  assert(steps.every(s => s.required && s.trigger === "USER" && s.targetServer === "commerceStaged"));
  assert.equal(steps[1].operatorEnterpriseCode, "GREENPERKS_ONLINE"); assert.deepEqual(steps[1].publicationPlan, plan);
  assert.equal(selection.selectionOnly, true); assert.equal(selection.dependencies.requiredOriginalRootVersion, 1);
  assert.deepEqual(selection.firstNativeJourney, { assetCode: "EWA-1092", productCode: "CIRCA_ASSET_EWA-1092",
    sellerCode: "circa-seller", buyerCode: "circa-customer", amount: "16", currency: "POINTS" });
});
