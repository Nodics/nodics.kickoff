/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";

/**
 * @module agora.apparel/data/sample-v001/store/headers/agoraApparelStoreReferenceHeader
 * @description Selects the Agora Apparel Store master through Store's canonical generated service.
 * @layer data-header
 * @owner agora.apparel
 */
module.exports = {
  store: {
    agoraApparelStoreData: {
      options: {
        enabled: true,
        schemaName: "store",
        operation: "saveAll",
        dataFilePrefix: "agoraApparelStoreData",
      },
      query: { code: "$code", tenant: "$tenant" },
    },
  },
};
