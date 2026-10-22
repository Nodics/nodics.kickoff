/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";

/**
 * @module agora.apparel/data/sample-v001/store/records/agoraApparelStoreData
 * @description Corrects the Agora Apparel Store master with its canonical Profile Enterprise reference.
 * @layer data
 * @owner agora.apparel
 * @override Author a later immutable release for subsequent Store master changes.
 */
module.exports = {
  record0: {
    code: "agoraMainStore",
    tenant: "default",
    name: "Agora apparel",
    status: "ACTIVE",
    defaultCurrency: "USD",
    defaultLocale: "en",
    timezone: "Asia/Dubai",
    enterpriseRef: {
      moduleName: "profile",
      schemaName: "enterprise",
      code: "default",
    },
    revision: 1,
    active: true,
  },
};
