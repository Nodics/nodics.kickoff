/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";

/** @description Imports Agora Apparel operational selling locations. @owner agora.apparel */
const entry = (schemaName, dataFilePrefix) => ({
  options: { enabled: true, schemaName, operation: "saveAll", dataFilePrefix },
  query: { code: "$code", tenant: "$tenant" },
});

module.exports = {
  store: {
    stores: entry("store", "agoraApparelStoreData"),
    channels: entry("salesChannel", "agoraApparelSalesChannelData"),
    points: entry("pointOfService", "agoraApparelPointOfServiceData"),
  },
};
