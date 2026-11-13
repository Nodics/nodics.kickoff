/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
/** @module circa.ewaste/test/circaApplicationBoundary @description Verifies inert Circa composition selects canonical owners and ordered setup releases without project adapters. @layer test @owner circa.ewaste */
const test = require("node:test"),
  assert = require("node:assert/strict");
const config = require("../config/properties");
const fs = require("node:fs");
const path = require("node:path");
test("Circa setup consumes the linked collection network releases in dependency order", () => {
  const contribution =
    require("../../../envs/kickoffLocal/config/properties").backofficeApplicationInitialization.profiles.circa.dataPackages;
  assert.equal(contribution.$config, "replace");
  const { loadRuntime } = require("../../../test/helpers/configuration");
  const profile = loadRuntime("platformServer", "kickoffDockerLocal").backofficeApplicationInitialization.profiles.circa;
  const dependencies = [
    ["locationType:collection-categories", "locationServer", "LOCATION", "core"],
    ["wasteCollection:collection-capabilities", "locationServer", "LOCATION", "core"],
    ["eWaste:core-reference", "wasteServer", "WASTE", "core"],
    ["eWaste:drop-off-location", "locationServer", "LOCATION", "core"],
    ["circa.ewaste:network-enterprises", "platformServer", "PLATFORM", "sample"],
    ["circa.ewaste:network-addresses", "platformServer", "PLATFORM", "sample"],
    ["circa.ewaste:network-locations", "locationServer", "LOCATION", "sample"],
    ["circa.ewaste:network-points", "wasteServer", "WASTE", "sample"],
    ["circa.ewaste:operations", "platformServer", "PLATFORM", "sample"],
  ];
  const framework = path.resolve(__dirname, "../../..", process.env.NODICS_FRAMEWORK_ROOT || "../nodics.ai");
  const service = require(path.join(framework, "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = service.preparationSteps(profile);
  let previousOrder = 0;
  for (const [code, targetServer, targetRuntimeRole, dataType] of dependencies) {
    const selectedCode = /^circa\.ewaste:network-/.test(code) ? code + "-docker" : code;
    const selected = steps.filter(step => step.code === selectedCode);
    assert.equal(selected.length, 1, code);
    const [step] = selected;
    assert.equal(step.targetServer, targetServer);
    assert.equal(step.targetRuntimeRole, targetRuntimeRole);
    assert.equal(step.dataType, dataType);
    assert.equal(step.required, true);
    assert.equal(step.trigger, "USER");
    assert(step.order > previousOrder, code);
    previousOrder = step.order;
  }
  const local = loadRuntime("platformServer").backofficeApplicationInitialization.profiles.circa;
  const localSteps = service.preparationSteps(local);
  previousOrder = 0;
  for (const [code, server, role] of dependencies) {
    const step = localSteps.find(item => item.code === code);
    assert.equal(step.targetServer, role === "LOCATION" ? "wasteServer" : server);
    assert.equal(step.targetRuntimeRole, role === "LOCATION" ? "WASTE" : role);
    assert(step.order > previousOrder, code);
    previousOrder = step.order;
  }
});
test("the single Circa demo requires identity, operations and rewards without bypassing owner admission", () => {
  const packages =
    require("../../../config/circa-setup-data-packages.json");
  for (const code of [
    "circa.ewaste:profile",
    "circa.ewaste:operations",
    "circa.ewaste:loyalty",
  ]) {
    const selected = packages.filter((item) => item.code === code);
    assert.equal(selected.length, 1);
    assert.equal(selected[0].required, true);
    assert.equal(selected[0].trigger, "USER");
  }
  for (const code of [
    "media:mediaPublicationWorkflow",
    "circa.ewaste:content",
    "circa.ewaste:customer-workspace",
    "circa.ewaste:media",
  ])
    assert.equal(packages.find((item) => item.code === code).required, true);
  const media = packages.find((item) => item.code === "circa.ewaste:media");
  assert.equal(media.manifestModule, "circa.ewaste");
  assert.match(media.manifestPath, /^data\/sample-v001\//);
  const preparation = require("../../../../nodics.ai/nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService");
  const steps = preparation.preparationSteps(require("../../../test/helpers/configuration").loadRuntime("platformServer").backofficeApplicationInitialization.profiles.circa);
  assert(steps.every((item) => item.required !== false));
  assert.equal(
    config.profileCustomerEligibility,
    undefined,
    "Publication must not enable production customer eligibility",
  );
  assert.equal(
    config.data.dataReleases.targetValidators,
    undefined,
  );
});
test("demo module contributes no executable service, controller or route", () => {
  assert.equal(fs.existsSync(path.join(__dirname, "../src")), false);
  assert.equal(config.eWaste.applicationCode, "CIRCA_EWASTE");
  assert.equal(config.eWaste.marketplace, undefined);
  assert.equal(config.eWaste.rewardValuationService, undefined);
  assert.equal(config.eWaste.presentation.brandName, "Circa");
  assert.equal(config.circaEWaste, undefined);
  assert.equal(config.wasteImpact, undefined);
});
