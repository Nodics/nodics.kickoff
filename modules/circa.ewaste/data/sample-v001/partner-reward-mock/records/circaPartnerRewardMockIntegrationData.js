/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/partnerRewardMock @description Governed simulation selection, never a qualified real GreenPerks integration. @owner circa.ewaste @layer data */
module.exports = {
  circaGreenPerksOnlineMock: {
    code: "circa-greenperks-online-mock",
    name: "SIMULATED GreenPerks Online partner rewards",
    description: "Test-only simulation; no external account or partner credit is verified.",
    active: true,
    revision: 0,
    status: "ACTIVE",
    partnerEnterpriseCode: "GREENPERKS_ONLINE",
    providerKey: "mock",
    conversionEnabled: true,
    sourceRewards: [{ programCode: "circa", rewardTypeCode: "points" }],
    termsReference: "simulated:circa-greenperks-online",
    termsRevision: "1",
    providerBindingReference: "simulated:circa-greenperks-online-mock",
    rules: { simulated: true, testOnly: true },
  },
};
