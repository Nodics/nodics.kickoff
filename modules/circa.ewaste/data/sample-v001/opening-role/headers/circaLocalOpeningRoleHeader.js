/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/opening-role/headers/circaLocalOpeningRoleHeader @description Imports the bounded opening human group through Profile; no stock instruction or runtime grant. @layer data @owner circa.ewaste */
module.exports = {
  profile: {
    circaLocalOpeningGroupData: {
      options: { enabled: true, schemaName: "userGroup", operation: "saveAll",
        dataFilePrefix: "circaLocalOpeningGroupData", tenants: ["default"] },
      query: { code: "$code" },
    },
  },
};
