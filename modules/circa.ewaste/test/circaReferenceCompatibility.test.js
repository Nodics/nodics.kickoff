/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/test/circaReferenceCompatibility @description Offline APP-01/02 qualification of real Circa records against the neutral eWaste candidate; no import or migration executor. @owner circa.ewaste @layer test */
const assert = require("node:assert/strict");
const test = require("node:test");
const { isDeepStrictEqual } = require("node:util");
const path = require("node:path");
const fs = require("node:fs");
const crypto = require("node:crypto");
const frameworkRoot = path.resolve(
  __dirname,
  "../../..",
  process.env.NODICS_FRAMEWORK_ROOT || "../nodics.ai",
);
const eWasteRoot = path.join(
  frameworkRoot,
  "nodics.accelerators/modules/waste/modules/eWaste",
);
const successor = {
  profiles: Object.values(
    require(
      path.join(
        eWasteRoot,
        "data/core-v001/records/waste/eWasteImpactProfileData",
      ),
    ),
  ),
  categories: Object.values(
    require(
      path.join(eWasteRoot, "data/core-v001/records/waste/eWasteCategoryData"),
    ),
  ),
  itemTypes: Object.values(
    require(
      path.join(eWasteRoot, "data/core-v001/records/waste/eWasteItemTypeData"),
    ),
  ),
};
const policy = require(
  path.join(
    frameworkRoot,
    "nodics.waste/modules/wasteCore/src/service/defaultWasteDataContributionPolicyService",
  ),
);
const dataRoot = path.resolve(__dirname, "../data");
const sample = (name) =>
  Object.values(
    require(path.join(
      ["circaWasteCategoryData", "circaWasteImpactProfileData", "circaWasteItemTypeData"].includes(name)
        ? path.join(__dirname, "fixtures/compatibility/waste")
        : path.join(dataRoot, "sample-v001/waste/records"), name)),
  );
const customerPolicy = (name) =>
  Object.values(
    require(path.join(__dirname, "fixtures/compatibility/waste-policy", name)),
  );
const reference = (name) =>
  Object.values(
    require(path.join(eWasteRoot, "test/fixtures/compatibility", name)),
  );
const contribution = (records, project = false) => ({
  moduleName: project ? "circa.ewaste" : "eWaste",
  layerKind: project ? "PROJECT" : "SCENARIO_ACCELERATOR",
  records,
});
const categories = sample("circaWasteCategoryData");
const itemTypes = sample("circaWasteItemTypeData");
const categoryPolicy = customerPolicy("circaWastePolicyCategoryData");

test("released Circa waste and policy payloads retain every manifest hash", () => {
  const manifest = require("../data/manifest.json");
  for (const name of ["waste", "waste-policy"]) {
    for (const [file, hash] of Object.entries(manifest.sections[name].files)) {
      assert.equal(
        crypto
          .createHash("sha256")
          .update(fs.readFileSync(path.join(dataRoot, file)))
          .digest("hex"),
        hash,
        file,
      );
    }
  }
});

test("actual historical taxonomy consists of 20 duplicates, four impact overrides and 28 additions", () => {
  const counts = { duplicate: 0, override: 0, addition: 0 };
  for (const [customer, defaults] of [
    [categories, reference("eWasteCategoryData")],
    [itemTypes, reference("eWasteItemTypeData")],
  ]) {
    for (const record of customer) {
      const baseline = defaults.find((item) => item.code === record.code);
      if (!baseline) {
        counts.addition++;
        assert(record.code.startsWith("CIRCA_"));
        assert.equal(record.metadata.sample, true);
        if (customer === categories) assert(record.metadata.legacySourceId);
      } else if (isDeepStrictEqual(record, baseline)) counts.duplicate++;
      else {
        counts.override++;
        assert.equal(record.impactProfileCode, "CIRCA_EWASTE_ESTIMATE");
        assert.equal(baseline.impactProfileCode, "EWASTE_BATTERY_COUNT");
        assert.deepEqual(record, {
          ...baseline,
          impactProfileCode: record.impactProfileCode,
        });
      }
    }
  }
  assert.deepEqual(counts, { duplicate: 20, override: 4, addition: 28 });
});

test("neutralization makes all 24 shared records explicit Circa compatibility overrides", () => {
  let shared = 0;
  for (const [customer, neutral] of [
    [categories, successor.categories],
    [itemTypes, successor.itemTypes],
  ]) {
    for (const record of customer) {
      const baseline = neutral.find((item) => item.code === record.code);
      if (!baseline) continue;
      shared++;
      assert.notDeepEqual(record, baseline);
      assert.deepEqual(record, {
        ...baseline,
        impactProfileCode: "CIRCA_EWASTE_ESTIMATE",
      });
    }
  }
  assert.equal(shared, 24);
});

test("neutral references plus explicit Circa records and final policy preserve effective objects", () => {
  for (const [customer, original, neutral, overrides] of [
    [
      categories,
      reference("eWasteCategoryData"),
      successor.categories,
      categoryPolicy,
    ],
    [itemTypes, reference("eWasteItemTypeData"), successor.itemTypes, []],
  ]) {
    const before = policy.resolveByCode([
      contribution(original),
      contribution(customer, true),
      contribution(overrides, true),
    ]);
    const after = policy.resolveByCode([
      contribution(neutral),
      contribution(customer, true),
      contribution(overrides, true),
    ]);
    assert.deepEqual(after, before);
  }
  const effective = policy.resolveByCode([
    contribution(successor.categories),
    contribution(categories, true),
    contribution(categoryPolicy, true),
  ]);
  assert.equal(Object.keys(effective).length, 25);
  assert.equal(
    effective.MOBILE_DEVICE.impactProfileCode,
    "CIRCA_VERIFIED_DEVICE_RECOVERY",
  );
  assert.equal(
    effective.SMART_HOME_DEVICE.impactProfileCode,
    "CIRCA_VERIFIED_DEVICE_RECOVERY",
  );
});

test("removing the twenty former duplicates changes installed profile selection", () => {
  const oldDefaults = reference("eWasteItemTypeData");
  const deduplicated = itemTypes.filter(
    (record) => !oldDefaults.some((item) => isDeepStrictEqual(record, item)),
  );
  const effective = policy.resolveByCode([
    contribution(successor.itemTypes),
    contribution(deduplicated, true),
  ]);
  assert.equal(
    effective.MOBILE_PHONE.impactProfileCode,
    "EWASTE_ENVIRONMENTAL_ESTIMATE",
  );
  assert.notEqual(
    effective.MOBILE_PHONE.impactProfileCode,
    itemTypes.find((record) => record.code === "MOBILE_PHONE")
      .impactProfileCode,
  );
});

test("sample replay after core policy clobbers the policy; final policy restores it without editing samples", () => {
  const wrong = policy.resolveByCode([
    contribution(successor.categories),
    contribution(categoryPolicy, true),
    contribution(categories, true),
  ]);
  assert.equal(wrong.MOBILE_DEVICE.name.en, "Mobile Device");
  assert.equal(wrong.MOBILE_DEVICE.impactProfileCode, "CIRCA_EWASTE_ESTIMATE");
  const right = policy.resolveByCode([
    contribution(successor.categories),
    contribution(categories, true),
    contribution(categoryPolicy, true),
  ]);
  assert.equal(right.MOBILE_DEVICE.name.en, "Circa Mobile Device");
  assert.equal(right.MOBILE_DEVICE.revision, 2);
  const defaults = reference("eWasteCollectionPresetData");
  const overrides = customerPolicy("circaWastePolicyCollectionPresetData");
  const presets = policy.resolveByCode([
    contribution(defaults),
    contribution(overrides, true),
  ]);
  assert(
    presets.EWASTE_DROP_OFF_STANDARD.serviceCapabilities.includes(
      "CIRCA_ONBOARDING",
    ),
  );
  assert(
    presets.CIRCA_MALL_DROP_OFF.acceptanceRuleCodes.includes(
      "CIRCA_DROP_OFF_SMART_HOME",
    ),
  );
});

test("Circa profiles retain their distinct semantics and all current taxonomy references resolve", () => {
  const profiles = policy.resolveByCode([
    contribution(successor.profiles),
    contribution(sample("circaWasteImpactProfileData"), true),
    contribution(customerPolicy("circaWastePolicyImpactProfileData"), true),
  ]);
  assert.deepEqual(profiles.CIRCA_EWASTE_ESTIMATE.metadata, {
    sample: true,
    publicClaimAllowed: false,
  });
  assert.equal(
    profiles.CIRCA_EWASTE_ESTIMATE.name.en,
    "Circa illustrative impact estimate",
  );
  assert.equal(
    profiles.EWASTE_ENVIRONMENTAL_ESTIMATE.metadata.assessmentUse,
    "ADVISORY_SUBMISSION_GATE",
  );
  assert.equal(
    profiles.CIRCA_VERIFIED_DEVICE_RECOVERY.metricRules[1].factor,
    0.72,
  );
  for (const record of [
    ...categories,
    ...itemTypes,
    ...categoryPolicy,
    ...customerPolicy("circaWastePolicyCollectionPresetData"),
  ]) {
    assert(profiles[record.impactProfileCode], record.code);
  }
  // Historical opening results are evidence, not taxonomy references to relabel.
  for (const record of sample("circaWasteImpactResultData")) {
    assert.equal(record.profileCode, "CIRCA_SAMPLE_OPENING");
    assert.equal(record.metadata.publicClaimAllowed, false);
  }
});

test("actual Circa selectors declare the owner references and keep sample imports user-triggered", () => {
  const properties = require("../config/properties");
  const foundation =
    properties.data.dataReleases.runtimeRoleProfiles.WASTE
      .initializationProfiles.localWasteFoundation.steps.value;
  assert.deepEqual(foundation[0].releaseCodes, [
    "wasteMaterial:core-v001",
    "eWaste:core-reference",
    "circa.ewaste:waste-policy",
  ]);
  const packs =
    properties.backofficeApplicationInitialization.profiles.circa.dataPackages
      .value;
  for (const code of [
    "eWaste:core-reference",
    "circa.ewaste:waste-policy",
    "circa.ewaste:waste",
  ]) {
    const pack = packs.find((item) => item.code === code);
    assert(pack, code);
    assert.equal(pack.trigger, "USER");
    assert.equal(pack.targetRuntimeRole, "WASTE");
  }
  assert.equal(
    packs.find((item) => item.code === "circa.ewaste:waste").dataType,
    "sample",
  );
});
