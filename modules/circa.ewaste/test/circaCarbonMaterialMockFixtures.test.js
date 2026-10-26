/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test @description Source fixture and isolated owner-contract checks; no live storage, authentication or earning. @owner circa.ewaste @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const manifest = require("../data/manifest.json");
const root = path.resolve(__dirname, "../data");
const ownerRoot = path.join(frameworkRoot, "nodics.waste/modules/wasteReward");
const ref = (module, schema, code) => ({ module, schema, code });
const load = name => Object.values(require(path.join(root, "sample-v001/material-value-mock/records", name)))[0];

test("E15/E16 are separate explicit Local v001 sections with exact source hashes and record counts", () => {
  for (const [key, pack, count] of [["circaCarbonMock", "carbon-mock", 1], ["circaMaterialValueMock", "material-value-mock", 5]]) {
    const section = manifest.sections[key];
    assert.equal(section.selectionPolicy, "EXPLICIT");
    assert.deepEqual(section.environmentScope, ["LOCAL"]);
    assert.equal(section.sourceRoot, "sample-v001");
    assert.equal(section.version, "0.0.1");
    assert.equal(section.destinationRole, "WASTE");
    assert.equal(section.dataType, "sample");
    assert.equal(Object.keys(section.files).length, count + 1);
    let records = 0;
    for (const [file, hash] of Object.entries(section.files)) {
      assert.ok(file.startsWith(`sample-v001/${pack}/`));
      assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(root, file))).digest("hex"), hash, file);
      if (file.includes("/records/")) for (const row of Object.values(require(path.join(root, file)))) {
        records++;
        assert.equal(row.synthetic, true);
        if (row.evidence) assert.equal(row.evidence.synthetic, true);
      }
    }
    assert.equal(records, count);
  }
});

test("Local opts into owner mock providers; Docker inherits disabled defaults", () => {
  for (const [namespace, module] of [["wasteCarbon", "wasteCarbon"], ["wasteMaterialValue", "wasteReward"]]) {
    const defaults = require(path.join(frameworkRoot, `nodics.waste/modules/${module}/config/properties`))[namespace];
    const override = require("../../../envs/kickoffLocal/config/properties")[namespace];
    assert.deepEqual(Object.keys(override).sort(), ["evidence", "mock"]);
    assert.deepEqual(loadRuntime("wasteServer", "kickoffLocal")[namespace], {
      ...defaults, ...override, evidence: { ...defaults.evidence, ...override.evidence }
    });
    assert.deepEqual(loadRuntime("wasteServer", "kickoffDockerLocal")[namespace], defaults);
    assert.equal(defaults.mock.enabled, false);
    assert.equal(defaults.evidence.allowSynthetic, false);
  }
});

test("canonical discovery finds both sections; headers dispatch only the six prerequisite records", () => {
  const createHarness = require(path.join(frameworkRoot, "nodics.accelerators/modules/waste/modules/eWaste/test/fixtures/referenceReleaseHarness"));
  const state = createHarness({ "circa.ewaste": { name: "circa.ewaste", index: "3100.90", path: path.resolve(__dirname, "..") } });
  const releases = state.service.discoverReleases("sample");
  for (const key of ["circaCarbonMock", "circaMaterialValueMock"]) {
    const matches = releases.filter(row => row.releaseCode === `circa.ewaste:${key}`);
    assert.equal(matches.length, 1);
    assert.ok(!matches[0].invalidManifest);
    const section = manifest.sections[key];
    const headers = Object.keys(section.files).filter(file => file.includes("/headers/"));
    const schemas = [];
    for (const header of headers) for (const [module, entries] of Object.entries(require(path.join(root, header)))) {
      for (const { options, query } of Object.values(entries)) {
        assert.equal(options.operation, "saveAll");
        assert.deepEqual(options.tenants, ["default"]);
        assert.deepEqual(query, { code: "$code" });
        const files = Object.keys(section.files).filter(file => file.endsWith(`/records/${options.dataFilePrefix}.js`));
        assert.equal(files.length, 1);
        schemas.push(`${module}/${options.schemaName}`);
      }
    }
    assert.deepEqual(schemas.sort(), (key === "circaCarbonMock" ? ["wasteCarbon/wasteCarbonMockEvidence"] : [
      "wasteSubmission/wasteSubmission", "wasteReceipt/wasteReceipt", "wasteReward/wasteMaterialValuePolicy",
      "wasteReward/wasteMaterialValueMockEvidence", "wasteReward/wasteMaterialValueMockEvidence"
    ]).sort());
  }
  assert.equal(state.imports.length, 0);
});

test("E15 preserves original contribution and qualification; permanent runner accepts plan without HTTP", async () => {
  const row = require("../data/sample-v001/carbon-mock/records/circaCarbonMockEvidenceData").circaE15CarbonMock;
  assert.deepEqual(row.qualificationRef, require("../../../envs/kickoffLocal/config/properties").wasteCarbon.evidence.qualificationRef);
  const allocation = row.evidence.allocations[0];
  assert.deepEqual(allocation.ownerRef, ref("profile", "customer", "circa-customer"));
  assert.deepEqual(allocation.contributionRef, ref("wasteSubmission", "wasteSubmission", "CIRCA_SUB_EWA-1042"));
  const hash = crypto.createHash("sha256").update(JSON.stringify(["wasteCarbon", "wasteCarbonMockEvidence", row.code])).digest("hex");
  const { run } = await import(path.join(frameworkRoot, "nodics.waste/modules/wasteCarbon/src/service/acceptance/defaultWasteCarbonHttpAcceptanceService.mjs"));
  const result = await run({ selection: {
    contractVersion: 1, approvalReference: "source-test-only", environmentCode: "kickoffLocal",
    localDemo: true, isolatedPartition: true, baseUrl: "http://127.0.0.1:4370", tenant: "default", enterpriseCode: "default", runCode: "circa-e15-source-test",
    evidenceRef: row.qualificationRef, lotCode: "CARBON_" + hash, ownerRef: allocation.ownerRef,
    recipientRef: ref("profile", "enterprise", "GREENPERKS_RETAIL"), contributionRef: allocation.contributionRef,
    allocationCode: allocation.code, allocationQuantity: allocation.quantity, issuedQuantity: row.evidence.issuedQuantity,
    quantity: "0.25", unitOfMeasure: row.evidence.unitOfMeasure, scale: row.evidence.scale,
    manifestRef: { ...row.qualificationRef, revision: 0 }
  }, fetch() { throw new Error("No network permitted"); } });
  assert.deepEqual(result, { state: "PLANNED", synthetic: true, liveEffects: false });
});

test("E16 source rows satisfy owner allocation and payment coverage without any earning", async () => {
  const prior = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, ENUMS: global.ENUMS };
  try {
    require(path.join(ownerRoot, "test/runtimeEnums"))();
    const f = require(path.join(ownerRoot, "test/repositoryFixture")).create([
      "wasteSubmission", "wasteReceipt", "wasteAsset", "wasteMaterialValuePolicy", "wasteMaterialValueMockEvidence",
      "wasteMaterialValueBatch", "wasteMaterialValueContributionClaim", "wasteMaterialValuePaymentClaim"
    ]);
    const assessment = require(path.join(ownerRoot, "src/service/defaultWasteMaterialValueAssessmentService"));
    const provider = require(path.join(ownerRoot, "src/service/defaultWasteMaterialValueMockProviderService"));
    const settlement = require(path.join(ownerRoot, "src/service/defaultWasteMaterialValueSettlementService"));
    global.CONFIG = { get: key => key === "wasteMaterialValue" ? require("../../../envs/kickoffLocal/config/properties").wasteMaterialValue : undefined };
    global.SERVICE = { ...f.services, DefaultWasteMaterialValueAssessmentService: assessment, DefaultWasteMaterialValueMockProviderService: provider };
    const rows = [
      ["wasteSubmission", load("circaMaterialMockSubmissionData")],
      ["wasteReceipt", load("circaMaterialMockReceiptData")],
      ["wasteMaterialValuePolicy", load("circaMaterialMockPolicyData")],
      ["wasteMaterialValueMockEvidence", load("circaMaterialMockValuationData")],
      ["wasteMaterialValueMockEvidence", load("circaMaterialMockPaymentData")]
    ];
    for (const [schema, row] of rows) {
      assert.equal(row.metadata.synthetic, true);
      const ownerModule = schema === "wasteSubmission" ? "wasteSubmission" : schema === "wasteReceipt" ? "wasteReceipt" : "wasteReward";
      const definition = require(path.join(frameworkRoot, `nodics.waste/modules/${ownerModule}/src/schemas/schemas`))[ownerModule][schema].definition;
      for (const [field, property] of Object.entries(definition)) if (property.required) assert.notEqual(row[field], undefined, `${schema}.${field}`);
      f.put(schema, row, "default");
    }
    const submission = rows[0][1], receipt = rows[1][1], valuation = rows[3][1], payment = rows[4][1];
    assert.notEqual(submission.code, "CIRCA_SUB_EWA-1042");
    assert.equal(receipt.submissionCode, submission.code);
    assert.equal(receipt.receivedFacts.synthetic, true);
    // Authority exists only inside the owner's isolated test repository harness.
    const request = { tenant: "default", authData: { tenant: "default", principalType: "service", loginId: "unit-test-only", permissions: ["waste.materialValue.assess"] }, payload: { evidenceRef: ref("wasteReward", "wasteMaterialValueMockEvidence", valuation.code) } };
    const batch = await assessment.assess(request);
    assert.equal(batch.synthetic, true);
    assert.equal(batch.allocations.length, 1);
    const allocation = batch.allocations[0];
    assert.deepEqual(allocation.ownerRef, ref("profile", "customer", "circa-customer"));
    assert.equal(allocation.attributedValue, "1.00");
    assert.equal(allocation.beneficiaryValue, "1.00");
    assert.equal(allocation.rewardAmount, "1.00");
    assert.equal(batch.currency, "AED");
    assert.equal(batch.policy.programCode, "circa");
    assert.equal(batch.policy.rewardTypeCode, "points");
    const validated = await settlement.payment({ ...request, payload: { paymentEvidenceRef: ref("wasteReward", "wasteMaterialValueMockEvidence", payment.code) } }, batch, allocation);
    assert.equal(validated.synthetic, true);
    assert.equal(validated.coverage[0].allocationCode, allocation.code);
    assert.deepEqual(batch.releases, []);
    assert.ok(f.calls.every(call => ["wasteMaterialValueBatch", "wasteMaterialValueContributionClaim"].includes(call.schema)));
  } finally {
    for (const [key, value] of Object.entries(prior)) if (value === undefined) delete global[key]; else global[key] = value;
  }
});
