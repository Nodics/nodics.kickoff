/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/test/circaReferenceRelease @description Qualifies real Circa successor selection and effective records using the eWaste-owned offline harness. @owner circa.ewaste @layer test */
const assert = require("node:assert/strict");
const test = require("node:test");
const path = require("node:path");
const framework = path.resolve(
  __dirname,
  "../../..",
  process.env.NODICS_FRAMEWORK_ROOT || "../nodics.ai",
);
const ew = path.join(
  framework,
  "nodics.accelerators/modules/waste/modules/eWaste",
);
const createHarness = require(
  path.join(ew, "test/fixtures/referenceReleaseHarness"),
);
const modules = {
  eWaste: { name: "eWaste", index: "92.71", path: ew },
  "circa.ewaste": {
    name: "circa.ewaste",
    index: "3100.90",
    path: path.resolve(__dirname, ".."),
  },
};
const selection = (releaseCodes) => ({
  tenant: "default",
  releaseRequest: {
    dataType: releaseCodes.includes("circa.ewaste:waste-policy") ? "sample" : "core",
    releaseCodes,
    expectedReleases: {
      "eWaste:core-reference": "0.0.1",
      "circa.ewaste:waste-policy": "0.0.2",
    },
  },
});

test("current core discovery and exact sample versions fail closed before importing", async () => {
  const state = createHarness(modules);
  const releases = state.service.discoverReleases("core");
  assert.equal(
    releases.some((item) => item.invalidManifest),
    false,
  );
  assert.equal(
    releases.some((item) => item.releaseCode === "eWaste:core-v001"),
    false,
  );
  const stale = selection(["circa.ewaste:waste-policy"]);
  stale.releaseRequest.expectedReleases["circa.ewaste:waste-policy"] = "0.0.1";
  await assert.rejects(state.service.preflight(stale), /changed after selection/);
  await state.service.preflight(selection(["circa.ewaste:waste-policy"]));
  assert.equal(state.imports.length, 0);
});

test("reference adoption preserves customer additions and final policy without sample transaction replay", async () => {
  const state = createHarness(modules);
  const historical = {
    code: "saved-assessment",
    profileCode: "CIRCA_EWASTE_ESTIMATE",
    metrics: [{ value: "3" }],
  };
  state.models.set(
    "wasteImpactResult:saved-assessment",
    structuredClone(historical),
  );
  await state.service.execute(selection(["eWaste:core-reference"]));
  await state.service.execute(selection(["circa.ewaste:waste-policy"]));
  assert.deepEqual(
    state.imports.map((request) => request.dataReleasePlan.at(-1).releaseCode),
    ["eWaste:core-reference", "circa.ewaste:waste-policy"],
  );
  for (const [schema, filename] of [
    ["wasteCategory", "circaWasteCategoryData"],
    ["wasteItemType", "circaWasteItemTypeData"],
  ]) {
    for (const record of Object.values(
      require("./fixtures/compatibility/waste/" + filename),
    )) {
      if (!record.code.startsWith("CIRCA_")) continue;
      assert.deepEqual(
        state.models.get(schema + ":" + record.code),
        record,
        record.code,
      );
    }
  }
  for (const [schema, filename] of [
    ["wasteCategory", "eWasteCategoryData"],
    ["wasteCollectionPreset", "eWasteCollectionPresetData"],
    ["wasteCollectionAcceptanceRule", "eWasteAcceptanceRuleData"],
    ["wasteImpactProfile", "eWasteImpactProfileData"],
  ]) {
    for (const record of Object.values(
      require("../data/sample-v001/waste-policy/records/" + filename),
    )) {
      assert.deepEqual(
        state.models.get(schema + ":" + record.code),
        record,
        record.code,
      );
    }
  }
  assert.deepEqual(
    state.models.get("wasteImpactProfile:CIRCA_EWASTE_ESTIMATE"),
    require("./fixtures/compatibility/waste/circaWasteImpactProfileData")
      .record0,
  );
  assert.deepEqual(
    state.models.get("wasteImpactResult:saved-assessment"),
    historical,
  );
  assert.equal(
    state.writes.some((write) =>
      [
        "wasteSubmission",
        "wasteAsset",
        "wasteImpactResult",
        "wasteEvidence",
        "wasteVerification",
        "wasteAssetOwnershipEvent",
      ].includes(write.schema),
    ),
    false,
  );
});

test("materialized sample preserves unrelated CURRENT core records without replay", async () => {
  const state = createHarness(modules);
  await state.service.execute(selection(["eWaste:core-reference"]));
  state.models.get("wasteFamily:ELECTRONICS").name.en =
    "Operator customization";
  const writesBefore = state.writes.length;
  await state.service.execute(selection(["circa.ewaste:waste-policy"]));
  assert.equal(
    state.models.get("wasteFamily:ELECTRONICS").name.en,
    "Operator customization",
  );
  assert.equal(
    state.writes
      .slice(writesBefore)
      .some((write) => write.schema === "wasteFamily"),
    false,
  );
  assert.equal(state.models.get("wasteCategory:MOBILE_DEVICE").revision, 2);
  assert.equal(state.imports[1].dataReleasePlan.length, 1);
  assert.notEqual(state.imports[1].dataReleasePlan[0].sourceOnly, true);
});

test("materialized policy sample imports independently of historical core composition", async () => {
  const state = createHarness(modules);
  await state.service.execute(selection(["circa.ewaste:waste-policy"]));
  assert.equal(state.imports.length, 1);
  assert.equal(state.imports[0].dataReleasePlan.length, 1);
  assert.equal(state.imports[0].dataReleasePlan[0].dataType, "sample");
  for (const [schema, filename] of [
    ["wasteCategory", "eWasteCategoryData"],
    ["wasteCollectionPreset", "eWasteCollectionPresetData"],
    ["wasteCollectionAcceptanceRule", "eWasteAcceptanceRuleData"],
    ["wasteImpactProfile", "eWasteImpactProfileData"],
  ]) {
    for (const record of Object.values(require("../data/sample-v001/waste-policy/records/" + filename))) {
      assert.deepEqual(state.models.get(schema + ":" + record.code), record, record.code);
    }
  }
  assert.equal(state.writes.some(write => ["wasteFamily", "wasteSubmission", "wasteAsset", "wasteImpactResult"].includes(write.schema)), false);
});

test("the required demo pack remains explicit v001 and separate from reference datasets", () => {
  const manifest = require("../data/manifest.json");
  assert.equal(manifest.sections.waste.sourceRoot, "sample-v001");
  assert.equal(manifest.sections.waste.version, "0.0.1");
  assert.equal(manifest.sections.waste.selectionPolicy, "EXPLICIT");
  const header = require("../data/sample-v001/waste/headers/circaWasteSampleHeader");
  const targets = Object.values(header).flatMap((entries) =>
    Object.values(entries).map((entry) => entry.options.schemaName),
  );
  assert(!targets.includes("wasteCategory"));
  assert(!targets.includes("wasteItemType"));
  assert(!targets.includes("wasteImpactProfile"));
  const packs = require("../config/properties")
    .backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  assert.equal(
    packs.find((pack) => pack.code === "circa.ewaste:waste").required,
    true,
  );
});
