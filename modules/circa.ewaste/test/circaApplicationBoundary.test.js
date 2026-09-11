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
test.afterEach(() => {
  delete global.SERVICE;
  delete global.CONFIG;
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
