/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/materialValueMock @description Five independent simulation prerequisites through their canonical owners; no batch, wallet, ledger or grant imports. @owner circa.ewaste @layer data-header */
module.exports = {
  "wasteSubmission": {
    "circaMaterialMockSubmissionData": {
      "options": {
        "enabled": true,
        "schemaName": "wasteSubmission",
        "operation": "saveAll",
        "dataFilePrefix": "circaMaterialMockSubmissionData",
        "tenants": [
          "default"
        ]
      },
      "query": {
        "code": "$code"
      }
    }
  },
  "wasteReceipt": {
    "circaMaterialMockReceiptData": {
      "options": {
        "enabled": true,
        "schemaName": "wasteReceipt",
        "operation": "saveAll",
        "dataFilePrefix": "circaMaterialMockReceiptData",
        "tenants": [
          "default"
        ]
      },
      "query": {
        "code": "$code"
      }
    }
  },
  "wasteReward": {
    "circaMaterialMockPolicyData": {
      "options": {
        "enabled": true,
        "schemaName": "wasteMaterialValuePolicy",
        "operation": "saveAll",
        "dataFilePrefix": "circaMaterialMockPolicyData",
        "tenants": [
          "default"
        ]
      },
      "query": {
        "code": "$code"
      }
    },
    "circaMaterialMockValuationData": {
      "options": {
        "enabled": true,
        "schemaName": "wasteMaterialValueMockEvidence",
        "operation": "saveAll",
        "dataFilePrefix": "circaMaterialMockValuationData",
        "tenants": [
          "default"
        ]
      },
      "query": {
        "code": "$code"
      }
    },
    "circaMaterialMockPaymentData": {
      "options": {
        "enabled": true,
        "schemaName": "wasteMaterialValueMockEvidence",
        "operation": "saveAll",
        "dataFilePrefix": "circaMaterialMockPaymentData",
        "tenants": [
          "default"
        ]
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
