"use strict";
/** @description Docker catalogue query dimensions and currency-specific delivery choices. */
module.exports = {
  catalogue: {
    enabled: true,
    maximumCandidates: 1000,
    readPageSize: 100,
    dimensions: {
      brands: {
        paths: ["brand", "localizedAttributes.brand"],
      },
      categories: {
        paths: ["categoryCodes"],
      },
      collections: {
        paths: ["collectionCodes", "localizedAttributes.collection"],
      },
      colors: {
        paths: ["apparel.options.colourCode", "apparel.options.colorCode"],
      },
      sizes: {
        paths: ["apparel.options.sizeCode"],
      },
      availability: {
        paths: ["availability.status"],
        labels: {
          IN_STOCK: "Available",
          OUT_OF_STOCK: "Not available",
          PREORDER: "Pre-order",
        },
      },
    },
    saleCollectionCodes: ["agoraPromotion", "agoraSale"],
  },
  fulfillmentCore: {
    customerShipping: {
      methods: [
        {
          code: "STANDARD",
          label: "Standard",
          price: "0.00",
          currency: "USD",
          promise: "3-5 business days",
          requiresAddress: true,
          returnEligible: true,
        },
        {
          code: "STANDARD_AED",
          label: "Standard",
          price: "0.00",
          currency: "AED",
          promise: "3-5 business days",
          requiresAddress: true,
          returnEligible: true,
        },
      ],
    },
  },
};
