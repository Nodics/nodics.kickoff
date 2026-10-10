/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaStoreReferencePack @description Exercises isolated Store release selection, canonical nImport record handoff and fail-closed receipt boundaries without live persistence. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const test = require("node:test");
const path = require("node:path");
const fs = require("node:fs");
const crypto = require("node:crypto");
const framework = path.resolve(__dirname, "../../../../nodics.ai");
const importRoot = path.join(framework, "nodics.foundation/modules/nData/nImport/import");
const createPorts = require(path.join(importRoot, "test/helpers/releaseExecution"));
const moduleRoot = path.resolve(__dirname, "..");
const moduleOwner = { name: "circa.ewaste", path: moduleRoot };
const manifest = require("../data/manifest.json");
const source = require("../data/sample-v001/store/records/circaStoreData");
const sourceHeader = require("../data/sample-v001/store/headers/circaStoreReferenceHeader");
const selection = (codes = ["circa.ewaste:store"]) => ({
  tenant: "default",
  authData: { userGroups: ["commerceOperatorUserGroup"] },
  releaseRequest: { dataType: "sample", releaseCodes: codes,
    expectedReleases: Object.fromEntries(codes.map((code) => [code, "0.0.1"])) },
});
function fixture(t, options = {}) {
  const previous = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, NODICS: global.NODICS };
  t.after(() => Object.assign(global, previous));
  return createPorts({ modules: { "circa.ewaste": moduleOwner },
    runtimeRole: "COMMERCE", environment: "kickoffLocal", ...options });
}

test("Store-only v001 reference selection retains identities, hashes and required ordering", () => {
  const pack = manifest.sections.store;
  for (const [field, value] of Object.entries({ version: "0.0.1", sourceRoot: "sample-v001",
    selectionPolicy: "EXPLICIT", lifecycle: "REFERENCE", destinationRole: "COMMERCE",
    versioningPolicy: "NONE", publicationPolicy: "NONE", initialPublicationPolicy: "NONE" }))
    assert.equal(pack[field], value, field);
  assert.equal(Object.keys(pack.files).length, 2);
  for (const [file, checksum] of Object.entries(pack.files))
    assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(moduleRoot, "data", file))).digest("hex"), checksum, file);
  assert.deepEqual(Object.keys(sourceHeader), ["store"]);
  assert.deepEqual(sourceHeader.store.circaStoreData.query, { code: "$code", tenant: "$tenant" });
  assert.deepEqual(Object.values(source).map((row) => row.code), ["circaMainStore", "greenperks-cafe", "greenperks-bistro", "renewworks-repair", "loopcycle-accessories"]);
  assert.deepEqual(source.record0.enterpriseRef, { moduleName: "profile", schemaName: "enterprise", code: "GREENPERKS_ONLINE" });
  for (const row of [source.record1, source.record2]) {
    assert.equal(row.tenant, "default");
    assert.deepEqual(row.enterpriseRef, { moduleName: "profile", schemaName: "enterprise", code: "GREENPERKS_RETAIL" });
    assert.deepEqual(row.primaryLocationRef, { moduleName: "locationCore", schemaName: "location", code: row.code + "-location" });
  }
  const packages = require("../config/properties").backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  const index = packages.findIndex((pack) => pack.code === "circa.ewaste:store");
  assert(index > packages.findIndex((pack) => pack.code === "circa.ewaste:location"));
  assert(index < packages.findIndex((pack) => pack.code === "circa.ewaste:commerce"));
  assert.equal(packages[index].required, true);
  assert.equal(packages[index].trigger, "USER");
  assert.equal(packages[index].targetRuntimeRole, "COMMERCE");
  assert.equal(packages[index].phase, undefined, "Use canonical BEFORE_PUBLICATION default");
  assert.equal(manifest.sections["commerce-operational"], undefined);
  assert.equal(fs.existsSync(path.join(moduleRoot, "data/sample-v001/commerce-operational/records/circaStoreData.js")), false);
});

test("canonical release dispatch composes actual Store records and forwards only caller groups", async (t) => {
  const writes = [];
  const descriptor = Object.getOwnPropertyDescriptor(String.prototype, "toUpperCaseFirstChar");
  t.after(() => { if (descriptor) Object.defineProperty(String.prototype, "toUpperCaseFirstChar", descriptor);
    else delete String.prototype.toUpperCaseFirstChar; });
  String.prototype.toUpperCaseFirstChar = function () { return this.charAt(0).toUpperCase() + this.slice(1); };
  const ports = fixture(t, { onImport: async (request) => {
    assert.equal(request.dataReleasePlan.length, 1);
    const plan = request.dataReleasePlan[0];
    assert.equal(plan.releaseCode, "circa.ewaste:store");
    assert.deepEqual(plan.declaredFiles.slice().sort(), Object.keys(manifest.sections.store.files).sort());
    const files = plan.declaredFiles.map((file) => path.join(moduleRoot, "data", file));
    const input = { tenant: request.tenant, authData: request.authData,
      modules: ["circa.ewaste"], dataReleasePlan: request.dataReleasePlan, inputPath: { dataType: "sample" },
      data: { headerFiles: { circaStoreReferenceHeader_js: files.filter((file) => file.includes("/headers/")) },
        dataFiles: { circaStoreData_js: files.filter((file) => file.includes("/records/")) } } };
    const initializer = { ...require(path.join(importRoot, "src/service/system/defaultSystemDataImportInitializerService")), LOG: { debug() {} } };
    const next = { nextSuccess() {} };
    initializer.buildHeaderInstances(input, {}, next);
    initializer.resolveFileType(input, {}, next);
    initializer.assignDataFilesToHeader(input, {}, next);
    assert.deepEqual(Object.keys(input.data.headers), ["store:circaStoreData"]);
    const header = input.data.headers["store:circaStoreData"];
    assert.equal(header.options.moduleName, "store");
    assert.equal(header.options.owningModule, "store");
    assert.deepEqual(header.options.userGroups, ["commerceOperatorUserGroup"]);
    assert.equal(header.options.enterpriseCode, undefined);
    assert.equal(header.options.insertOnly, undefined, "Store managed concurrency does not support generic insert-only");
    assert.deepEqual(header.sourceRoots, [path.join(moduleRoot, "data/sample-v001")]);
    const dataset = header.dataFiles.circaStoreData_js;
    const processor = require(path.join(importRoot, "../jsImport/src/service/init/defaultJsFileDataProcessService"));
    const records = await processor.handleFiles({}, {}, dataset.selectionFiles.slice());
    assert.deepEqual(records, source);
    const modelProcessor = require(path.join(importRoot, "src/service/process/model/defaultModelImportProcessService"));
    header.rawSchema = require(path.join(framework, "nodics.commerce/modules/baseCommerce/modules/store/src/schemas/schemas")).store;
    await modelProcessor.insertLocalSchemaModel({ ...input, header }, Object.values(records));
  } });
  SERVICE.DefaultImportUtilityService = require(path.join(importRoot, "src/service/import/defaultImportUtilityService"));
  NODICS.getIndexedModules = () => new Map([[0, moduleOwner]]);
  NODICS.isModuleActive = () => true;
  SERVICE.DefaultStoreService = { saveAll: async (request) => {
    writes.push(structuredClone(request)); return { result: request.models };
  } };
  const checked = await ports.service.preflight(selection());
  assert.equal(checked.data.validation.ready, true);
  assert.equal(ports.imports.length, 0);
  assert.equal(ports.installations.length, 0);
  await ports.service.execute(selection());
  assert.equal(writes.length, 1);
  assert.equal(writes[0].tenant, "default");
  assert.deepEqual(writes[0].authData, { userGroups: ["commerceOperatorUserGroup"] });
  assert.deepEqual(writes[0].query, { code: "$code", tenant: "$tenant" });
  assert.deepEqual(writes[0].models, Object.values(source));
  assert.equal(sourceHeader.store.circaStoreData.options.userGroups, undefined, "Source exports are not mutated");
  assert.equal(ports.installations.length, 1);
  assert.equal(ports.installations[0].status, "CURRENT");
  await assert.rejects(() => ports.service.execute(selection()), /already current/);
  assert.equal(writes.length, 1, "CURRENT receipt must not replay Store writes");
  assert.equal(ports.imports.length, 1);
});

test("wrong destination and stale selected version refuse before Store dispatch or claims", async (t) => {
  const ports = fixture(t);
  ports.runtimeRole = "COMMERCE_STAGED";
  await assert.rejects(() => ports.service.execute(selection()), /destination|runtime role/i);
  ports.runtimeRole = "COMMERCE";
  const stale = selection(); stale.releaseRequest.expectedReleases["circa.ewaste:store"] = "0.0.2";
  await assert.rejects(() => ports.service.execute(stale), /changed after selection/);
  assert.equal(ports.imports.length, 0);
  assert.equal(ports.installations.length, 0);
});

test("same-version installed checksum drift is rejected without receipt rewriting", async (t) => {
  const ports = fixture(t);
  await ports.service.execute(selection());
  ports.installations[0].checksum = "previous-installed-bytes";
  const historical = structuredClone(ports.installations);
  await assert.rejects(() => ports.service.execute(selection()), /content changed without a version change/);
  assert.deepEqual(ports.installations, historical);
  assert.equal(ports.imports.length, 1);
});

test("owner failure cannot produce a CURRENT Store receipt", async (t) => {
  const ports = fixture(t, { onImport: async () => { throw new Error("Isolated Store persistence refusal"); } });
  await assert.rejects(() => ports.service.execute(selection()), /Store persistence refusal/);
  assert.equal(ports.installations.length, 1);
  assert.equal(ports.installations[0].status, "FAILED");
});

test("selecting retired snapshot release with Stores rejects the whole plan before either dispatch", async (t) => {
  const ports = fixture(t);
  CONFIG.get("data").dataReleases.targetValidators = {
    inventory: "DefaultInventoryOperationService", promotion: "DefaultPromotionOperationService",
  };
  SERVICE.DefaultInventoryOperationService = require(path.join(framework, "nodics.commerce/modules/baseCommerce/modules/inventory/src/service/defaultInventoryOperationService"));
  SERVICE.DefaultPromotionOperationService = require(path.join(framework, "nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionOperationService"));
  for (const operation of ["preflight", "execute"])
    await assert.rejects(() => ports.service[operation](selection(["circa.ewaste:store", "circa.ewaste:commerce-operational"])), /Requested data release is unavailable/);
  assert.equal(ports.imports.length, 0);
  assert.equal(ports.installations.length, 0);
});

test("canonical accelerator guides resolve the Store move and retain matching search and source metadata", () => {
  const root = path.join(framework, "nodics.accelerators/modules/waste/modules/eWaste");
  const contract = require(path.join(framework, "nodics.foundation/modules/nTooling/src/service/defaultApplicationDocumentationContractService"));
  const release = contract.readDocumentationRelease(root, "documentation");
  const components = contract.readReleaseRecords(release, "Component").records;
  const metadata = contract.readReleaseRecords(release, "PageMetadata").records;
  const searches = contract.readReleaseRecords(release, "SearchMetadata").records;
  const oldPath = "sample-v001/commerce-operational/records/circaStoreData.js";
  for (const family of [components, metadata, searches]) assert(!JSON.stringify(family).includes(oldPath));
  const affected = components.filter((row) => Array.isArray(row.properties?.sourceEvidence) &&
    row.properties.sourceEvidence.some((file) => file.includes("sample-v001/store/records/circaStoreData.js")));
  assert.equal(affected.length, 5);
  for (const component of affected) {
    const properties = component.properties;
    for (const file of properties.sourceEvidence.filter((file) => file.includes("sample-v001/store/")))
      assert(fs.existsSync(path.resolve(root, file)), file);
    const page = metadata.find((row) => row.articleComponent === component.code);
    const search = searches.find((row) => row.code === page.searchMetadata);
    const body = "# " + properties.title + "\n\n" + contract.documentationText(properties.blocks);
    assert.equal(properties.source.checksum, contract.sha256(body));
    assert.equal(page.sourceChecksum, properties.source.checksum);
    assert.equal(page.wordCount, properties.source.wordCount);
    assert.deepEqual(page.sourceEvidence, properties.sourceEvidence);
    assert.equal(properties.searchText, properties.title + " " + properties.summary + " " + body);
    assert.equal(search.searchText, properties.searchText);
  }
  const inventory = Object.values(components).find((row) => row.properties.code === "accelerators.circa-source-inventory");
  const table = inventory.properties.blocks.find((block) => block.kind === "table" && block.headers[0] === "Section");
  assert.deepEqual(table.rows.map((row) => row[0]).sort(), Object.keys(manifest.sections).sort());
  const page = metadata.find(row => row.articleComponent === inventory.code);
  assert.equal(page.sourcePath, inventory.properties.source.sourcePath);
  assert.equal(page.sourceWordCount, inventory.properties.source.wordCount);
  for (const name of ["circaLocalUnusedRefundExceptionRole", "circaLocalUnusedRefundExceptionStaffAssignment"])
    assert(searches.find(row => row.code === page.searchMetadata).searchText.includes("circa.ewaste:" + name), name);
  const article = Object.values(components).find((row) => row.properties.code === "accelerators.circa-catalogue-reference");
  for (const boundary of ["circa.ewaste:store", "insertOnly", "CURRENT", "GREENPERKS_ONLINE"])
    assert(article.properties.searchText.includes(boundary), boundary);
});
