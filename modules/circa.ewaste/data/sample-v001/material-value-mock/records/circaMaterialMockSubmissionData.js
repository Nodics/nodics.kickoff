/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/materialValueMock @description Governed synthetic E16 fixture only; no installed effects. @owner circa.ewaste @layer data */
module.exports = {
  "circaE16Submission": {
    "active": true,
    "revision": 0,
    "synthetic": true,
    "metadata": {
      "synthetic": true,
      "scenario": "CIRCA_E16_LOCAL",
      "description": "SIMULATED test fixture; no real physical receipt or recycler payment."
    },
    "code": "CIRCA_SIM_E16_SUB_V001",
    "submitterRef": {
      "module": "profile",
      "schema": "customer",
      "code": "circa-customer"
    },
    "submissionChannel": "SIMULATION",
    "submissionStatus": "SUBMITTED",
    "description": "SIMULATED E16 contribution only; no existing asset or physical submission assertion.",
    "quantity": 1,
    "sourceContext": {
      "synthetic": true,
      "scenario": "CIRCA_E16_LOCAL"
    }
  }
};
