/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaOpeningWasteSamples @description Tests actual projected Waste schema and release admission, source seals, owner boundaries and retry using in-memory repositories. @owner circa.ewaste @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const projectRoot = path.resolve(__dirname, "../../..");
const codes = ["waste", "waste-opening-impact", "waste-opening-assets"].map(code => "circa.ewaste:" + code);

test("only native Local selects reviewed opening estimates then assets before the Circa catalogue", () => {
  const initialization = require(path.join(frameworkRoot, "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const profile = loadRuntime("platformServer", environment).backofficeApplicationInitialization.profiles.circa;
    const steps = initialization.preparationSteps(profile).sort((a, b) => a.order - b.order);
    const selected = steps.filter(step => codes.includes(step.code));
    assert.deepEqual(selected.map(step => step.code), environment === "kickoffLocal" ? codes : codes.slice(0, 1));
    if (selected.length === 3) {
      assert(selected.every(step => step.targetServer === "wasteServer" && step.required));
      assert(selected.slice(1).every(step => step.batchBoundaryBefore));
      assert(selected[2].order < steps.find(step => step.code === "circa.ewaste:commerce").order);
    }
  }
});

test("native Waste admits the real source and owner-specific opening installers recover partial progress", async () => {
  await require(path.join(frameworkRoot, "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"))
    .resolve({ frameworkRoot, projectRoot, environment: "kickoffLocal", server: "wasteServer" });
  const releases = SERVICE.DefaultDataReleaseService;
  const [base, impact, assets] = codes.map(code => releases.discoverReleases("sample").find(row => row.releaseCode === code));
  for (const release of [base, impact, assets]) assert.equal(releases.validateDestination(release), true);
  assert(!releases.releaseDestinationTargets(base).some(target => ["wasteAsset", "wasteImpactResult"].includes(target.schemaName)));
  const originals = { ...SERVICE };
  const ledger = new Map();
  for (const [schema, file] of [["wasteSubmission", "circaWasteSubmissionData"], ["wasteVerification", "circaWasteVerificationData"]])
    for (const row of Object.values(require("../data/sample-v001/waste/records/" + file))) ledger.set(schema + "/" + row.code, row);
  let attempts = 0, failureAt;
  const schemas = ["wasteSubmission", "wasteVerification", "wasteAsset", "wasteAssetOwnershipEvent", "wasteImpactResult"];
  const fakeServices = {};
  for (const schema of schemas) fakeServices["Default" + schema[0].toUpperCase() + schema.slice(1) + "Service"] = {
    async get({ query }) {
      const row = ledger.get(schema + "/" + query.code);
      return { code: "SUC_GET", count: row ? 1 : 0, result: row ? [structuredClone(row)] : [] };
    },
    async save({ model, options }) {
      attempts++;
      if (attempts === failureAt) throw Error("simulated interruption");
      const id = schema + "/" + model.code;
      assert(!ledger.has(id), id);
      if (schema === "wasteAsset") assert.equal(model.revision, undefined);
      else assert.equal(options.insertOnly, true);
      ledger.set(id, structuredClone({ ...model, revision: schema === "wasteAsset" ? 1 : model.revision }));
      return { code: "SUC_CREATE" };
    },
  };
  const absent = new Set();
  global.SERVICE = { ...originals, ...fakeServices,
    DefaultModuleService: { ...originals.DefaultModuleService, isLocalModuleActive: name => !absent.has(name) && NODICS.getActiveModules().includes(name) },
    DefaultDatabaseModelHandlerService: { inspectIndexes: async () => ({ indexes: [{ unique: true, key: { code: 1 } }] }) },
    DefaultIdentityGovernanceService: { getSystemAuthData: () => ({ principalType: "service" }) },
  };
  NODICS.getModels = owner => Object.fromEntries(Object.entries(NODICS.getModule(owner).rawSchema).map(([key, rawSchema]) =>
    [UTILS.createModelName(key), { primaryKey: "code", compareAndSetItem() {}, rawSchema }]));
  const request = contribution => ({ contribution, tenant: "default", authData: { tokenType: "access", principalType: "human",
    loginId: "reviewer", tenant: "default", entCode: "default", permissions: ["import.sample.run", "waste.review.approve"] } });
  const impactOwner = SERVICE.DefaultWasteOpeningImpactContributionService;
  const assetOwner = SERVICE.DefaultWasteOpeningAssetContributionService;
  absent.add("wasteVerification");
  await assert.rejects(assetOwner.preflightContribution(request(assets)), /co-located.*wasteVerification/);
  absent.clear();
  await assert.rejects(assetOwner.preflightContribution(request({ ...assets, checksum: "0".repeat(64) })), /reviewed Local/);
  const denied = request(assets);
  denied.authData.permissions.pop();
  await assert.rejects(assetOwner.preflightContribution(denied), /waste.review.approve/);
  const check = await impactOwner.preflightContribution(request(impact));
  assert(check.ready);
  assert.deepEqual(check.plan.requiredLocalOwners, ["wasteImpact", "wasteCore", "wasteSubmission"]);
  assert.deepEqual((await assetOwner.preflightContribution(request(assets))).plan.requiredLocalOwners,
    ["wasteCore", "wasteSubmission", "wasteVerification", "wasteImpact"]);
  assert.equal(attempts, 0);
  await assert.rejects(assetOwner.installContribution(request(assets)), /opening verification, impact/);
  assert.equal(attempts, 0);
  await impactOwner.installContribution(request(impact));
  assert.equal(attempts, 11);
  failureAt = 15;
  await assert.rejects(assetOwner.installContribution(request(assets)), /simulated interruption/);
  const progress = (await assetOwner.preflightContribution(request(assets))).plan;
  assert.equal(progress.current, 3);
  await assetOwner.installContribution(request(assets));
  assert.equal(attempts, 34);
  await assetOwner.installContribution(request(assets));
  assert.equal(attempts, 34);
  ledger.get("wasteAsset/EWA-1042").assetStatus = "TRANSFERRED";
  await assert.rejects(assetOwner.installContribution(request(assets)), /conflicts.*EWA-1042/);
  assert.equal(attempts, 34);
});
