/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/materialValueMock @description Governed synthetic E16 fixture only; no installed effects. @owner circa.ewaste @layer data */
module.exports = {
  "circaE16Payment": {
    "active": true,
    "revision": 0,
    "synthetic": true,
    "metadata": {
      "synthetic": true,
      "scenario": "CIRCA_E16_LOCAL",
      "description": "SIMULATED test fixture; no real physical receipt or recycler payment."
    },
    "code": "circa-e16-payment-mock-v001",
    "qualificationRef": {
      "module": "wasteReward",
      "schema": "wasteMaterialValueMockEvidence",
      "code": "circa-e16-valuation-mock-v001"
    },
    "evidence": {
      "synthetic": true,
      "kind": "payment",
      "status": "CONFIRMED",
      "batchRef": {
        "module": "wasteReward",
        "schema": "wasteMaterialValueMockEvidence",
        "code": "circa-e16-valuation-mock-v001"
      },
      "valuationRef": {
        "module": "wasteReward",
        "schema": "wasteMaterialValueMockEvidence",
        "code": "circa-e16-valuation-mock-v001"
      },
      "payerRef": {
        "module": "profile",
        "schema": "enterprise",
        "code": "GREENPERKS_RETAIL"
      },
      "payeeRef": {
        "module": "profile",
        "schema": "enterprise",
        "code": "GREENPERKS_ONLINE"
      },
      "currency": "AED",
      "amount": "1.00",
      "coverage": [
        {
          "allocationCode": "ALLOCATION_fdd35a9858187bb700c2134c56fc03ebb31ea2bc445a1e4d306e0e83e28a9bce",
          "amount": "1.00"
        }
      ]
    }
  }
};
