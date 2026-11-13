/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";

/** @description Imports Agora Telco operational selling locations. @owner agora.telco */
const entry = (schemaName, dataFilePrefix) => ({
  options: { enabled: true, schemaName, operation: "saveAll", dataFilePrefix },
  query: { code: "$code", tenant: "$tenant" },
});

module.exports = {
  store: {
    stores: entry("store", "agoraTelcoStoreData"),
    channels: entry("salesChannel", "agoraTelcoSalesChannelData"),
    points: entry("pointOfService", "agoraTelcoPointOfServiceData"),
  },
};
