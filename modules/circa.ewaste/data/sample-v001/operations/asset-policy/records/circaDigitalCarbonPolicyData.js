/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/operations/asset-policy/records/circaDigitalCarbonPolicyData @description Carries approved local-only policy source before original sale reservation; not an installed event snapshot. @layer data @owner circa.ewaste */
module.exports = {
  "record0": {
    "code": "CIRCA_LOCAL_DIGITAL_SALE_CARBON_NONE_V1",
    "name": {
      "en": "Circa local digital sale without carbon settlement"
    },
    "triggerType": "SALE",
    "settlementMode": "NONE",
    "provenanceRequired": true,
    "complianceReviewRequired": false,
    "reversalAllowed": false,
    "active": true,
    "status": "ACTIVE",
    "revision": 1,
    "metadata": {
      "localDemoOnly": true,
      "reviewProposal": "circaDemoPolicyProposal.json",
      "operationalAuthority": false
    }
  }
};
