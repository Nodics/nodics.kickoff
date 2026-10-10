/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/credit-role/headers/circaLocalDemoCreditRoleHeader @description Imports only the approved bounded human credit group through Profile. @layer data @owner circa.ewaste */
module.exports = {
  profile: {
    circaLocalDemoCreditGroupData: {
      options: { enabled: true, schemaName: "userGroup", operation: "saveAll",
        dataFilePrefix: "circaLocalDemoCreditGroupData", tenants: ["default"] },
      query: { code: "$code" },
    },
  },
};
