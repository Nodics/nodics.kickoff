/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/materialValueMock @description Governed synthetic E16 fixture only; no installed effects. @owner circa.ewaste @layer data */
module.exports = {
  "circaE16Policy": {
    "active": true,
    "revision": 0,
    "synthetic": true,
    "metadata": {
      "synthetic": true,
      "scenario": "CIRCA_E16_LOCAL",
      "description": "SIMULATED test fixture; no real physical receipt or recycler payment."
    },
    "code": "circa-e16-material-policy-v001",
    "version": "0.0.1",
    "status": "ACTIVE",
    "programCode": "circa",
    "rewardTypeCode": "points",
    "currency": "AED",
    "currencyScale": 2,
    "rewardScale": 2,
    "basisScale": 0,
    "commercialModel": "CUSTOMER_SHARING",
    "contributorShare": {
      "numerator": "1",
      "denominator": "1"
    },
    "conversionRate": {
      "numerator": "1",
      "denominator": "1"
    },
    "roundingMode": "DOWN",
    "categories": {
      "SIMULATED_E16_MATERIAL": {
        "basis": "QUANTITY",
        "unitOfMeasure": "unit",
        "weight": "1"
      }
    }
  }
};
