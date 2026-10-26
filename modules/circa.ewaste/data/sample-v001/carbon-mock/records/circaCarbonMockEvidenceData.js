/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/carbonMock @description Synthetic E15 scenario; REALIZED and ELIGIBLE describe simulation only, never registry credits. @owner circa.ewaste @layer data */
module.exports = {
  circaE15CarbonMock: {
    code: "circa-e15-carbon-mock-v001",
    name: "SIMULATED Circa E15 carbon evidence",
    description: "Synthetic test quantity, not an impact estimate, registry issuance or tradable credit.",
    active: true,
    revision: 0,
    synthetic: true,
    qualificationRef: {
      module: "wasteCarbon",
      schema: "wasteCarbonMockEvidence",
      code: "circa-e15-carbon-mock-v001",
    },
    evidence: {
      synthetic: true,
      programRef: {
        module: "wasteCarbon",
        schema: "wasteCarbonMockEvidence",
        code: "circa-e15-carbon-mock-v001",
      },
      state: "REALIZED",
      eligibility: "ELIGIBLE",
      scale: 2,
      unitOfMeasure: "tCO2e",
      issuedQuantity: "1.00",
      allocations: [{
        code: "circa-e15-original-contributor",
        kind: "CONTRIBUTOR",
        ownerRef: { module: "profile", schema: "customer", code: "circa-customer" },
        quantity: "1.00",
        contributionRef: { module: "wasteSubmission", schema: "wasteSubmission", code: "CIRCA_SUB_EWA-1042" },
      }],
    },
  },
};
