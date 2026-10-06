/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
/** @module circa.ewaste/test/circaApplicationBoundary @description Verifies Circa owns site adapters and identity while preserving domain delegation and purchase compatibility. @layer test @owner circa.ewaste */
const test = require("node:test"),
  assert = require("node:assert/strict");
const config = require("../config/properties");
const routes = require("../src/router/routers");
const service = require("../src/service/defaultCircaEWasteExperienceService");
const controller = require("../src/controller/defaultCircaEWasteExperienceController");
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
test.afterEach(() => {
  delete global.SERVICE;
  delete global.CONFIG;
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
    config.data.dataReleases.targetValidators.inventory,
    "DefaultCircaDemoCommerceImportAdmissionService",
  );
});
test("the customer module owns only site adapters and preserves historical purchase keys", () => {
  assert.deepEqual(Object.keys(routes["circa.ewaste"].experience).sort(), [
    "catalogue",
    "contact",
    "customerGuidance",
    "experience",
    "product",
    "register",
    "telegramLaunch",
  ]);
  assert.equal(config.eWaste.marketplace.orderCodePrefix, "CIRCA_ORDER_");
  assert.equal(config.eWaste.applicationCode, "CIRCA_EWASTE");
  assert.equal(
    config.circaEWaste.application.projectModuleName,
    "circa.ewaste",
  );
  assert.equal(
    config.eWaste.rewardValuationService,
    "DefaultCircaEWasteRewardValuationService",
  );
});
test("Circa decorates domain data without copying domain state or behavior", async () => {
  const domain = {
    categories: [{ code: "PHONE" }],
    itemTypes: [],
    centres: [],
  };
  global.SERVICE = {
    DefaultEWasteExperienceService: { experience: async () => domain },
    DefaultCircaEWasteJourneyService: {
      settings: () => ({ arrivalRadiusMetres: 50 }),
    },
  };
  global.CONFIG = { get: (key) => config[key] };
  const result = await service.experience({});
  assert.equal(result.categories, domain.categories);
  assert.equal(result.presentation.brandName, "Circa");
  assert.equal(result.application.code, "CIRCA_EWASTE");
  assert(!("application" in domain));
});
test("project controllers delegate to the shared trusted request mapper", () => {
  let called;
  global.SERVICE = {
    DefaultEWasteRequestService: {
      invoke: (...args) => {
        called = args;
        return "mapped";
      },
    },
  };
  const request = {};
  assert.equal(controller.register(request), "mapped");
  assert.equal(called[0], "register");
  assert.equal(called[1], request);
  assert.equal(called[3], "DefaultCircaEWasteExperienceService");
});

test("Circa retains illustrative mock compatibility without implicitly selecting it", async () => {
  const calculation = config.wasteImpact.calculation;
  assert.equal(
    calculation.providerService,
    "DefaultEWasteOpenAiImpactProviderService",
  );
  assert.deepEqual(calculation.fallbackProviderServices, {
    $config: "replace",
    value: ["DefaultEWasteWarmImpactProviderService"],
  });
  assert.equal(calculation.mock.factorSetVersion, "circa-illustrative-v1");

  const {
    loadRuntime,
    frameworkRoot,
  } = require("../../../test/helpers/configuration");
  const path = require("node:path");
  const calculator = require(
    path.join(
      frameworkRoot,
      "nodics.waste/modules/wasteImpact/src/service/defaultWasteImpactCalculationService",
    ),
  );
  const properties = loadRuntime("wasteServer", "kickoffLocal");
  const effective = properties.wasteImpact.calculation;
  const chain = [
    effective.providerService,
    ...effective.fallbackProviderServices,
  ];
  assert.deepEqual(chain, [
    "DefaultEWasteOpenAiImpactProviderService",
    "DefaultEWasteWarmImpactProviderService",
  ]);
  assert.equal(chain.includes("DefaultWasteImpactMockProviderService"), false);
  assert.equal(
    effective.mock.factorSetVersion,
    calculation.mock.factorSetVersion,
  );
  assert.equal(
    effective.mock.defaultWeightsKg.default,
    calculation.mock.defaultWeightsKg.default,
  );
  assert.deepEqual(
    effective.mock.defaultWeightsKg.itemTypes,
    calculation.mock.defaultWeightsKg.itemTypes,
  );

  const calls = [];
  let mockCalls = 0;
  global.CONFIG = { get: (key) => properties[key] };
  global.SERVICE = Object.fromEntries(
    chain.map((name) => [
      name,
      {
        calculate: async () => {
          calls.push(name);
          throw new Error("Provider unavailable");
        },
      },
    ]),
  );
  SERVICE.DefaultWasteImpactMockProviderService = {
    calculate: async () => {
      mockCalls++;
      throw new Error("Inactive mock must not be invoked");
    },
  };
  const result = await calculator.calculateProvider({
    profile: { code: "CIRCA_EWASTE_ESTIMATE", revision: 1 },
    facts: { itemTypeCode: "SMARTPHONE", quantity: 1 },
  });
  assert.deepEqual(calls, chain);
  assert.equal(mockCalls, 0);
  assert.equal(result.calculationStatus, "FAILED");
  assert.deepEqual(
    result.metadata.impactProvider.attempts.map((attempt) => [
      attempt.service,
      attempt.status,
    ]),
    chain.map((name) => [name, "FAILED"]),
  );
});
