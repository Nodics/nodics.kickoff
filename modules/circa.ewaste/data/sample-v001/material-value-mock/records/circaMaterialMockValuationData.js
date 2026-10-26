/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/materialValueMock @description Governed synthetic E16 fixture only; no installed effects. @owner circa.ewaste @layer data */
module.exports = {
  "circaE16Valuation": {
    "active": true,
    "revision": 0,
    "synthetic": true,
    "metadata": {
      "synthetic": true,
      "scenario": "CIRCA_E16_LOCAL",
      "description": "SIMULATED test fixture; no real physical receipt or recycler payment."
    },
    "code": "circa-e16-valuation-mock-v001",
    "qualificationRef": {
      "module": "wasteReward",
      "schema": "wasteMaterialValueMockEvidence",
      "code": "circa-e16-valuation-mock-v001"
    },
    "evidence": {
      "synthetic": true,
      "kind": "valuation",
      "status": "CONFIRMED",
      "batchRef": {
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
      "confirmedValue": "1.00",
      "policyRef": {
        "module": "wasteReward",
        "schema": "wasteMaterialValuePolicy",
        "code": "circa-e16-material-policy-v001"
      },
      "contributions": [
        {
          "contributionRef": {
            "module": "wasteSubmission",
            "schema": "wasteSubmission",
            "code": "CIRCA_SIM_E16_SUB_V001"
          },
          "receiptRef": {
            "module": "wasteReceipt",
            "schema": "wasteReceipt",
            "code": "CIRCA_SIM_E16_RECEIPT_V001"
          }
        }
      ]
    }
  }
};
