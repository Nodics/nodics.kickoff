/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/commerceStagedServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/commerceStagedServer */
module.exports = {
  activeModules: {
    groups: [
      {
        $config: "composition",
        name: "agora",
        field: "frameworkGroups",
        spread: true,
      },
    ],
    modules: [
      "vMongodb",
      "redisCache",
      "search",
      "elastic",
      "commerceSearchCore",
      "commerceSearch",
      "digitalCommerce",
      {
        $config: "selected",
        name: "agora",
        field: "sharedModules",
        includes: "domainCommerceCore",
        value: "domainCommerceCore",
      },
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      {
        $config: "composition",
        name: "agora",
        field: "projectPacks",
        spread: true,
      },
      "digitalCore",
      {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "apparel",
        value: "apparelProduct",
      },
      "cart",
      "checkoutCore",
      "shoppingList",

      {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "electronics",
        value: "electronicsProduct",
      },
      "fulfillmentCore",
      "inventory",
      "order",
      "paymentCore",
      "pricing",
      "product",
      "promotion",
      "store",
      "tax",
      {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "telco",
        value: "telcoCatalog",
      },
      {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "telco",
        value: "telcoProvisioning",
      },
      {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "telco",
        value: "telcoSubscription",
      },
      "cardPayment",
      "walletPayment",
      "loyaltyRewardPayment",
      "cashOnDeliveryPayment",
      "bankTransferPayment",
      "paymentProviderCore",
      "stripeProvider",
      "paypalProvider",
      "cyberSourceProvider",
      "visaProvider",
      "loyaltyRewardProvider",
    ],
  },
  runtimeRole: {
    code: "COMMERCE_STAGED",
    publication: "STAGED",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffDockerLocalCommerceStaged",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpHost: "0.0.0.0",
        httpPort: 4352,
        httpsHost: "0.0.0.0",
        httpsPort: 4353,
      },
      browserEndpoint: {
        httpHost: "localhost",
        httpPort: 5352,
      },
      abstractEndpoint: {
        httpHost: "commerce-staged",
        httpPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpPort",
        },
        httpsHost: "commerce-staged",
        httpsPort: {
          $config: "ref",
          path: "servers.default.endpoint.httpsPort",
        },
      },
    },
  },
  runtimeAuthorityContexts: {
    modules: {
      apparelProduct: {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "apparel",
        value: "commerce.staged",
      },
      cart: true,
      checkoutCore: true,
      commerceSearchCore: true,
      shoppingList: true,
      digitalCore: true,
      discoveryConfig: true,
      discoveryMapping: true,
      discoveryProjection: true,
      discoveryRanking: true,
      discoverySource: true,
      electronicsProduct: {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "electronics",
        value: "commerce.staged",
      },
      fulfillmentCore: true,
      inventory: true,
      order: true,
      paymentCore: true,
      pricing: true,
      product: true,
      promotion: true,
      store: true,
      tax: true,
      telcoCatalog: {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "telco",
        value: "commerce.staged",
      },
      telcoProvisioning: {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "telco",
        value: "commerce.staged",
      },
      telcoSubscription: {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "telco",
        value: "commerce.staged",
      },
    },
    default: "commerce.staged",
  },
  product: {
    marketplaceAuthoring: {
      enabled: true,
      catalogVersion: "circaStaged",
      locales: ["en", "ar"],
    },
  },
  order: {
    disputes: {
      enabled: true,
      orderCodePrefixes: ["CIRCA_ORDER_"],
    },
    refunds: {
      enabled: true,
      orderCodePrefixes: ["CIRCA_ORDER_"],
    },
  },
  eWaste: {
    journey: {
      arrivalRadiusMetres: {
        $config: "env",
        name: "CIRCA_EWASTE_ARRIVAL_RADIUS_METRES",
        type: "number",
      },
      reviewAssignment: {
        queueCode: "CIRCA_EWASTE_REVIEW",
        label: "Circa review team",
      },
      depositInstruction:
        "Please place your item in the designated eWaste bin at {centreName}, following the centre's handling instructions.",
    },
    rewardValuation: {
      version: "circa-weight-rewards-v2",
      illustrative: true,
      programCode: "circa",
      pointsRewardTypeCode: "points",
      carbonRewardTypeCode: "circaCarbon",
      pointsPerKg: 10,
      carbonUnitsPerEstimatedKg: 1,
    },
    application: {
      enabled: true,
    },
    channelAuthentication: {
      enabled: true,
      channels: {
        TELEGRAM: {
          enabled: true,
          applicationCode: "circa.ewaste",
          seamlessSignIn: true,
        },
      },
    },
    outcomeCommunication: {
      enabled: true,
      connectionName: "engagement",
    },
    marketplace: {
      priceBookCode: "circaPointsPriceBook",
      warehouseCode: "circaDigitalRegistry",
      transferPolicyCode: "CIRCA_LOCAL_DIGITAL_OWNERSHIP_V1",
      storeCode: "circaMainStore",
      catalogVersion: "circaStaged",
      currency: "POINTS",
      programCode: "circa",
      rewardTypeCode: "points",
      jurisdiction: "CIRCA_SAMPLE",
      saleMode: "DIGITAL_OWNERSHIP",
      autoPublishListings: true,
      listingPresentation: {
        description:
          "Sample digital asset ownership. No physical delivery is included.",
        imageUrl: "/nodics/media/v0/content/circa-asset-laptop",
        sample: true,
      },
      orderCodePrefix: "CIRCA_ORDER_",
    },
    conversation: {
      rewardGuidance:
        "Approval rewards are added only after review. Potential CO₂e savings are estimates, not issued carbon credits. Certificates, rewards, material value and carbon holdings are separate. Only selected realized and available carbon credits transfer in a bundle; original contributor entitlements stay with the contributor.",
    },
  },
  stripeProvider: {
    maturity: "NOT_APPLICABLE_FOR_STAGED_CATALOG",
  },
};
