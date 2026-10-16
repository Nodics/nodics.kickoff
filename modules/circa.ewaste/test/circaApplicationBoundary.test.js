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
    config.backofficeApplicationInitialization.profiles.circa.dataPackages;
  assert.equal(contribution.$config, "replace");
  const packages = contribution.value;
  const expected = [
    ["wasteCollection:sample-profile-addresses", "platformServer", "PLATFORM"],
    ["wasteCollection:sample-locations", "locationServer", "LOCATION"],
    ["wasteCollection:sample-collection-points", "wasteServer", "WASTE"],
  ];
  const positions = expected.map(([code, targetServer, targetRuntimeRole]) => {
    const selected = packages.filter((entry) => entry.code === code);
    assert.equal(selected.length, 1, `${code} must be included exactly once`);
    assert.deepEqual(
      { ...selected[0], kind: undefined },
      {
        code,
        targetServer,
        targetRuntimeRole,
        dataType: "sample",
        required: true,
        trigger: "USER",
        kind: undefined,
      },
    );
    return packages.indexOf(selected[0]);
  });
  assert(positions[0] < positions[1] && positions[1] < positions[2]);
});
test("the single Circa demo requires identity, operations and rewards without bypassing owner admission", () => {
  const packages =
    config.backofficeApplicationInitialization.profiles.circa.dataPackages
      .value;
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
  const profile = {
    ...config.backofficeApplicationInitialization.profiles.circa,
    dataPackages: packages,
  };
  const steps = preparation.preparationSteps(profile);
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
