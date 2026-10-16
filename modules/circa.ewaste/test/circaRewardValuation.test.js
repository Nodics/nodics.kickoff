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
const valuation = require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteWeightRewardValuationService");
let policy;
beforeEach(() => {
  global.SERVICE = {
    DefaultEWasteWeightRewardValuationService: require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteWeightRewardValuationService"),
  };
  policy = { ...require("./helpers/deploymentPolicy").runtime().eWaste.rewardValuation };
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
    code: "ERR_EWASTE_VALUATION_UNAVAILABLE",
  });
});
test("Circa selects configured rates through the framework valuation owner", () => {
  const input = { asset: { metadata: { facts: { weight: 2 } } } };
  const result = valuation.assess(input);
  assert.equal(result.version, "circa-weight-rewards-v2");
  assert.equal(result.rewards[0].programCode, "circa");
  assert.equal(result.rewards[0].amount, "20.00");
  policy.pointsPerKg = 7;
  assert.equal(valuation.assess(input).rewards[0].amount, "14.00");
});
