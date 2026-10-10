/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/operations/asset-policy/records/circaDigitalTransferPolicyData @description Carries approved local-only policy source before original sale reservation; not an installed event snapshot. @layer data @owner circa.ewaste */
module.exports = {
  "record0": {
    "code": "CIRCA_LOCAL_DIGITAL_OWNERSHIP_V1",
    "name": {
      "en": "Circa local digital ownership sale and original transfer refund"
    },
    "transferType": "SELL",
    "ownershipTransferMode": "TRANSFER_TO_COUNTERPARTY",
    "rewardTransferMode": "RETAIN_ORIGINAL_OWNER",
    "carbonTransferMode": "NONE",
    "eligibleAssetStatuses": [
      "LISTED"
    ],
    "allowSelfTransfer": false,
    "requiresOwnerApproval": true,
    "requiresCounterpartyAcceptance": false,
    "requiresReceiptConfirmation": false,
    "requiresComplianceReview": false,
    "lockRequired": true,
    "completionAssetStatus": "SOLD",
    "cancellationAssetStatus": "LISTED",
    "reversalAssetStatus": "OWNED",
    "active": true,
    "status": "ACTIVE",
    "revision": 1,
    "metadata": {
      "localDemoOnly": true,
      "reviewProposal": "circaDemoPolicyProposal.json",
      "operationalAuthority": false,
      "digitalOwnership": {
        "reservationSeconds": 600,
        "refund": "ORIGINAL_TRANSFER_REVERSAL_ONLY_BEFORE_ONWARD_TRANSFER"
      }
    }
  }
};
