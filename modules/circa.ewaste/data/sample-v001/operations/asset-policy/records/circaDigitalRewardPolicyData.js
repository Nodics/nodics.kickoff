/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/operations/asset-policy/records/circaDigitalRewardPolicyData @description Carries approved local-only policy source before original sale reservation; not an installed event snapshot. @layer data @owner circa.ewaste */
module.exports = {
  "record0": {
    "code": "CIRCA_LOCAL_DIGITAL_SALE_REWARD_V1",
    "name": {
      "en": "Circa local captured points paid only to original seller"
    },
    "triggerType": "SALE",
    "settlementMode": "POLICY_RESOLVED",
    "walletCurrencyCode": "POINTS",
    "reversalAllowed": true,
    "active": true,
    "status": "ACTIVE",
    "revision": 1,
    "metadata": {
      "localDemoOnly": true,
      "reviewProposal": "circaDemoPolicyProposal.json",
      "operationalAuthority": false,
      "digitalOwnership": {
        "version": 1,
        "proceeds": "CAPTURED_TOTAL",
        "payee": "CURRENT_SELLER",
        "programCode": "circa",
        "rewardTypeCode": "points",
        "scale": 2
      }
    }
  }
};
