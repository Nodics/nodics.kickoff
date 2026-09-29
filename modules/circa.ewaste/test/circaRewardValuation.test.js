/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
/** @module circa.ewaste/test/circaRewardValuation @description Keeps customer rewards separate from WARM coefficients and issued credits, including unavailable assessments. @owner circa.ewaste @layer test */
const { test, beforeEach, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const valuation = require("../src/service/defaultCircaEWasteRewardValuationService");
let policy;
beforeEach(() => {
  global.SERVICE = {
    DefaultEWasteWeightRewardValuationService: require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteWeightRewardValuationService"),
  };
  policy = { ...require("../config/properties").circaEWaste.rewardValuation };
  global.CONFIG = { get: () => ({ rewardValuation: policy }) };
  global.CLASSES = {
    NodicsError: class extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
      }
    },
  };
});
afterEach(() => {
  delete global.SERVICE;
  delete global.CONFIG;
  delete global.CLASSES;
});
test("invalid configured rates are rejected", () => {
  policy.pointsPerKg = -1;
  assert.throws(() => valuation.assess({}), {
    code: "ERR_CIRCA_VALUATION_POLICY",
  });
});
test("Circa forwards the request, actual rates and compatibility bindings", () => {
  const request = { asset: { code: "customer-asset" } };
  const response = { selected: true };
  SERVICE.DefaultEWasteWeightRewardValuationService = { assess: (received, configured, errors) => {
    assert.equal(received, request);
    assert.equal(configured, policy);
    assert.equal(configured.version, "circa-weight-rewards-v2");
    assert.equal(configured.programCode, "circa");
    assert.equal(configured.pointsPerKg, 10);
    assert.equal(configured.carbonUnitsPerEstimatedKg, 1);
    assert.equal(configured.pointsRewardTypeCode, "points");
    assert.equal(configured.carbonRewardTypeCode, "circaCarbon");
    assert.deepEqual(errors, { policy: "ERR_CIRCA_VALUATION_POLICY", input: "ERR_CIRCA_VALUATION_INPUT" });
    return response;
  } };
  assert.equal(valuation.assess(request), response);
  policy.pointsPerKg = 7;
  SERVICE.DefaultEWasteWeightRewardValuationService.assess = (received, configured) => {
    assert.equal(received, request);
    assert.equal(configured.pointsPerKg, 7);
    return response;
  };
  assert.equal(valuation.assess(request), response);
});
