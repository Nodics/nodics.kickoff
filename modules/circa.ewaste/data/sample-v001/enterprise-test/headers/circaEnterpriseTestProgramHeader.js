/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/enterpriseTestProgram @description Conditionally selects the existing Local program's test reward type without replaying program data. @owner circa.ewaste @layer data */
module.exports = {
  loyaltyProgram: {
    circaEnterpriseTestProgram: {
      options: {
        enabled: true,
        schemaName: "loyaltyProgram",
        operation: "update",
        dataFilePrefix: "circaEnterpriseTestProgramData",
        tenants: ["default"],
      },
      query: {
        code: "$code",
        revision: 1,
        status: "ACTIVE",
        active: true,
        earningEnabled: true,
        defaultRewardTypeCode: "points",
        $or: [
          { testCreditRewardTypeCodes: { $exists: false } },
          { testCreditRewardTypeCodes: ["points"] },
        ],
      },
    },
  },
};
