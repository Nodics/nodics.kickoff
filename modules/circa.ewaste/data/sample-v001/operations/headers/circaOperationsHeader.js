/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v001/operations/headers/circaOperationsHeader.js
 * @description Supplies the unified Circa customer demonstration dataset through canonical owner imports.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor release for customer-specific sample data; preserve installed transactions.
 */
module.exports = {
  profile: {
    circaOutletAddressData: {
      options: {
        enabled: true,
        schemaName: "address",
        operation: "saveAll",
        dataFilePrefix: "circaOutletAddressData",
      },
      query: {
        code: "$code",
      },
    },
    circaEnterpriseData: {
      options: {
        enabled: true,
        schemaName: "enterprise",
        operation: "saveAll",
        tenants: ["default"],
        dataFilePrefix: "circaEnterpriseData",
      },
      query: {
        code: "$code",
      },
    },
    circaOperationalEmployeeData: {
      options: {
        enabled: true,
        schemaName: "employee",
        operation: "saveAll",
        dataFilePrefix: "circaOperationalEmployeeData",
      },
      query: {
        code: "$code",
        loginId: "$loginId",
      },
    },
    circaOperationalScopeData: {
      options: {
        enabled: true,
        schemaName: "principalScopeAssignment",
        operation: "saveAll",
        dataFilePrefix: "circaOperationalScopeData",
      },
      query: {
        code: "$code",
      },
    },
  },
};
