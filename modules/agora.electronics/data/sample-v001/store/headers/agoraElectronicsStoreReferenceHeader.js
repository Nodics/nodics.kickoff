/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";

/** @description Imports Agora Electronics operational selling locations. @owner agora.electronics */
const entry = (schemaName, dataFilePrefix) => ({
  options: { enabled: true, schemaName, operation: "saveAll", dataFilePrefix },
  query: { code: "$code", tenant: "$tenant" },
});

module.exports = {
  store: {
    stores: entry("store", "agoraElectronicsStoreData"),
    channels: entry("salesChannel", "agoraElectronicsSalesChannelData"),
    points: entry("pointOfService", "agoraElectronicsPointOfServiceData"),
  },
};
