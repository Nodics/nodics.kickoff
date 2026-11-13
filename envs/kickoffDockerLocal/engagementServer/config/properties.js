/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module envs/kickoffDockerLocal/engagementServer/config/properties @description Declares intentional deployment overrides; reusable definitions and defaults remain with implementing framework modules. @layer config @owner envs/kickoffDockerLocal/engagementServer */
module.exports = {
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "nexus.web",
      "commsCore",
      "commsSchema",
      "commsVerification",
      "localCommsProvider",
      "commsApi",
      "engagementCore",
      "customerReview",
      "customerFeedback",
      "testimonial",
      "contactSubmission",
      "engagementComms",
      "engagementApi",
    ],
  },
  "runtimeRole": {
    "code": "ENGAGEMENT",
    "publication": "OPERATIONAL",
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalEngagement",
        },
      },
    },
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4340,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4341,
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5340,
      },
      "abstractEndpoint": {
        "httpHost": "engagement",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort",
        },
        "httpsHost": "engagement",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort",
        },
      },
    },
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "publish": "engagement.operational",
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
  engagement: {
    capabilities: {
      testimonial: true,
      customerReview: true,
      customerFeedback: true,
    },
  },
  customerFeedback: {
    enabled: true,
  },
};
