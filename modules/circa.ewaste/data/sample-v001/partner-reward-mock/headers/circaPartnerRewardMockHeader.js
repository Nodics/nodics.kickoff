/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/partnerRewardMock @description Optional simulated partner bindings only; no wallet, credit or identity writes. @owner circa.ewaste @layer data-header */
module.exports = {
  loyaltyWallet: {
    circaPartnerRewardMockIntegration: {
      options: {
        enabled: true, schemaName: "loyaltyPartnerRewardIntegration", operation: "saveAll",
        dataFilePrefix: "circaPartnerRewardMockIntegrationData", tenants: ["default"],
      },
      query: { code: "$code" },
    },
    circaPartnerRewardMockAccount: {
      options: {
        enabled: true, schemaName: "loyaltyPartnerRewardAccount", operation: "saveAll",
        dataFilePrefix: "circaPartnerRewardMockAccountData", tenants: ["default"],
      },
      query: { code: "$code" },
    },
  },
};
