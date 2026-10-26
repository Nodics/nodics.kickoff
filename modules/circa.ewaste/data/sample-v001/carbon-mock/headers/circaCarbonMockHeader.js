/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/carbonMock @description Explicit synthetic evidence import; no holdings, grants or original-submission writes. @owner circa.ewaste @layer data-header */
module.exports = {
  wasteCarbon: {
    circaCarbonMockEvidence: {
      options: {
        enabled: true,
        schemaName: "wasteCarbonMockEvidence",
        operation: "saveAll",
        dataFilePrefix: "circaCarbonMockEvidenceData",
        tenants: ["default"],
      },
      query: { code: "$code" },
    },
  },
};
