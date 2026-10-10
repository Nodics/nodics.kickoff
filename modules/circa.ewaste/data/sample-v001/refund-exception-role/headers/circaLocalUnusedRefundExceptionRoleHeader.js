/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/refund-exception-role/headers/circaLocalUnusedRefundExceptionRoleHeader @description Installs the explicitly selected Local human adjudication group through Profile. @layer data @owner circa.ewaste */
module.exports = {
  profile: {
    circaLocalUnusedRefundExceptionGroupData: {
      options: { enabled: true, schemaName: "userGroup", operation: "saveAll",
        dataFilePrefix: "circaLocalUnusedRefundExceptionGroupData", tenants: ["default"] },
      query: { code: "$code" },
    },
  },
};
