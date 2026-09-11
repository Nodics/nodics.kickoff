/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/config/properties @description Owns Circa application identity, presentation and illustrative deployment policies over eWaste. @layer config @owner circa.ewaste @override Later project layers replace these sample values. */
module.exports = {
  circaEWaste: {
    catalogue: {
      pageSize: 12,
      maximumPageSize: 48,
      discoveryBatchSize: 100,
      maximumProducts: 2000,
    },
    journey: {
      contractVersion: 1,
      arrivalRadiusMetres: 100,
      maximumPositionAgeMs: 60000,
      maximumAccuracyMetres: 50,
      captureTimeoutMs: 12000,
      nearestCentreCount: 3,
      conversationMaximumCharacters: 1500,
      reviewAssignment: {
        queueCode: "CIRCA_EWASTE_REVIEW",
        label: "Circa review team",
      },
      depositInstruction:
        "Please place your item in the designated eWaste bin at {centreName}, following the centre's handling instructions.",
    },
    presentation: {
      brandName: "Circa",
      brandByline: "by Nodics",
      sampleMode: true,
      walletLabels: {
        points: "Reward points",
        circaCarbon: "Carbon units",
      },
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
      code: "CIRCA_EWASTE",
      enabled: true,
      displayName: "Nodics Circa eWaste",
      frontendModuleName: "nodics.circa.eWaste",
      projectModuleName: "circa.ewaste",
      requiredScenarioModules: ["eWaste", "wasteRecycling"],
      frameworkModuleName: "nodics.waste",
      backendModuleName: "eWaste",
    },
    journeys: {
      submission: {
        enabled: true,
      },
      approvedAsset: {
        enabled: true,
      },
      marketplace: {
        enabled: true,
      },
      gift: {
        enabled: true,
      },
      donation: {
        enabled: true,
      },
      couponRedemption: {
        enabled: true,
      },
      recyclingHandoff: {
        enabled: true,
      },
    },
  },
  order: {
    disputes: { enabled: true, orderCodePrefixes: ["CIRCA_ORDER_"] },
    refunds: {
      enabled: true,
      orderCodePrefixes: ["CIRCA_ORDER_"],
      defaultOwnerPort: "eWaste",
      ownerPorts: {
        eWaste: {
          moduleName: "eWaste",
          connectionName: "waste",
          targetAuthority: { runtimeRole: "WASTE" },
          apiPrefix: "/internal/order-reversals",
        },
      },
    },
  },
  promotion: { legacyTokenHashPolicies: ["TENANT_COLON_UPPERCASE_SHA256"] },
  digitalCore: {
    merchantRedemption: {
      enabled: true,
      providerService: "DefaultDigitalCommerceMerchantScreenProviderService",
    },
  },
  bidding: {
    enabled: true,
    policyVersion: "circa-digital-bids-v1",
    holdTiming: "CHECKOUT_AFTER_ACCEPTANCE",
    validitySeconds: 86400,
    amountScale: 0,
    maximumAmount: "100000",
    stores: {
      circaMainStore: {
        enterpriseCode: "default",
        currency: "POINTS",
        locale: "en",
        orderCodePrefix: "CIRCA_ORDER_BID_",
        allowOwnerReference: true,
      },
    },
  },
  cms: {
    publication: {
      baselines: {
        circa: {
          releaseCode: "circa.ewaste:content",
          releaseVersion: "0.0.9",
          dataType: "sample",
          rootType: "site",
          rootCode: "circaSite",
          sourceVersion: "0",
        },
      },
    },
  },
  backofficeApplicationInitialization: {
    profiles: {
      circa: {
        code: "circa",
        type: "STOREFRONT_DOMAIN_BUNDLE",
        owner: "circa.ewaste",
        applicationCode: "CIRCA_EWASTE",
        siteCode: "circaSite",
        baselineCode: "circa",
        presentation: {
          title: "Circa eWaste",
          kind: "PROJECT",
          category: "application",
          order: 240,
          summary:
            "Circa published customer pages and media over the eWaste accelerator.",
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
        dataPackages: [
          {
            code: "locationMap:init-v001",
            kind: "Map provider foundation",
            required: true,
            trigger: "USER",
            dataType: "init",
            targetServer: "locationServer",
            targetRuntimeRole: "LOCATION",
          },
          {
            code: "locationMap:core-map-reference",
            kind: "Map styles and layers",
            required: true,
            trigger: "USER",
            dataType: "core",
            targetServer: "locationServer",
            targetRuntimeRole: "LOCATION",
          },
          {
            code: "wasteMaterial:core-v001",
            kind: "Waste material foundation",
            required: true,
            trigger: "USER",
            dataType: "core",
            targetServer: "wasteServer",
            targetRuntimeRole: "WASTE",
          },
          {
            code: "eWaste:core-reference",
            kind: "Electronics submission presets",
            required: true,
            trigger: "USER",
            dataType: "core",
            targetServer: "wasteServer",
            targetRuntimeRole: "WASTE",
          },
          {
            code: "kickoffWaste:project-reference",
            kind: "Project collection policy",
            required: true,
            trigger: "USER",
            dataType: "core",
            targetServer: "wasteServer",
            targetRuntimeRole: "WASTE",
          },
          {
            code: "circa.ewaste:profile",
            kind: "Local sample customer profiles",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "platformServer",
            targetRuntimeRole: "PLATFORM",
          },
          {
            code: "circa.ewaste:operations",
            kind: "Local operator access",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "platformServer",
            targetRuntimeRole: "PLATFORM",
          },
          {
            code: "circa.ewaste:location",
            kind: "Collection centre locations",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "locationServer",
            targetRuntimeRole: "LOCATION",
          },
          {
            code: "circa.ewaste:waste",
            kind: "Collection centres and submission reference data",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "wasteServer",
            targetRuntimeRole: "WASTE",
          },
          {
            code: "circa.ewaste:loyalty",
            kind: "Local reward programme",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "loyaltyServer",
            targetRuntimeRole: "LOYALTY",
          },
          {
            code: "circa.ewaste:commerce",
            kind: "Circular catalogue source",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "commerceStaged",
            targetRuntimeRole: "COMMERCE_STAGED",
          },
          {
            code: "circa.ewaste:content",
            kind: "Website content",
            required: true,
            trigger: "USER",
            dataType: "sample",
            targetServer: "wcmsStaged",
            targetRuntimeRole: "WCMS_STAGED",
          },
          {
            code: "circa.ewaste:customer-workspace",
            kind: "Customer item workspace content",
            required: true,
            trigger: "USER",
            dataType: "core",
            targetServer: "wcmsStaged",
            targetRuntimeRole: "WCMS_STAGED",
          },
          {
            code: "circa.ewaste:media",
            type: "MEDIA_ASSET_MANIFEST",
            kind: "Website media",
            required: true,
            trigger: "USER",
            targetServer: "wcmsStaged",
            targetRuntimeRole: "WCMS_STAGED",
            manifestPath:
              "modules/circa.ewaste/data/sample-v001/content/assets/circa-media/assetManifest.js",
            businessPurpose: "CIRCA_SAMPLE_CONTENT",
          },
        ],
        target: {
          moduleName: "cms",
          connectionName: "wcmsStaged",
          connectionType: "abstract",
          timeoutMs: 120000,
          maxAttempts: 1,
        },
      },
    },
  },
  media: {
    customerUploads: {
      enabled: true,
    },
  },
  waste: {
    operations: {
      requireScopes: true,
      requireVerification: true,
      // Review and approval are independent grants; one employee may hold both.
      requireDifferentApprover: false,
    },
  },
  wasteImpact: {
    calculation: {
      providerService: "DefaultEWasteWarmImpactProviderService",
      failureMode: "RESULT",
      mock: {
        defaultWeightsKg: {
          default: 1,
          itemTypes: {
            SMARTPHONE: 0.2,
            MOBILE_PHONE: 0.2,
            LAPTOP: 2.5,
            COMPUTER_MONITOR: 5,
            TABLET_DEVICE: 0.6,
            DESKTOP_TOWER: 7,
            CHARGER: 0.2,
            CABLE: 0.1,
            EARPHONES: 0.1,
            POWER_BANK_DEVICE: 0.3,
            SMALL_HOME_APPLIANCE: 3,
          },
        },
        factors: {
          default: 1,
        },
        factorSetVersion: "circa-illustrative-v1",
      },
    },
  },
  eWaste: {
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
      templateCode: "WASTE_REVIEW_OUTCOME_V1",
    },
    targetAuthorities: {
      engagement: { runtimeRole: "ENGAGEMENT" },
      commerce: {
        runtimeRole: "COMMERCE",
      },
      commerceStaged: {
        runtimeRole: "COMMERCE_STAGED",
      },
      wcms: {
        runtimeRole: "WCMS_STAGED",
      },
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
      carbonRewardTypeCode: "circaCarbon",
      carbonScale: 3,
      rewardScale: 2,
      jurisdiction: "CIRCA_SAMPLE",
      saleMode: "DIGITAL_OWNERSHIP",
      couponCarbonMode: "UNCHANGED",
      autoPublishListings: true,
      listingPresentation: {
        description:
          "Local sample digital asset ownership. No physical delivery is included.",
        imageUrl: "/nodics/media/v0/content/circa-asset-laptop",
        sample: true,
        warehouseName: "Circa sample digital registry",
      },
      orderCodePrefix: "CIRCA_ORDER_",
      refundsEnabled: true,
    },
    assetCreationPolicyCode: "EWASTE_APPROVED_ASSET_STANDARD",
    applicationCode: "CIRCA_EWASTE",
    rewardValuationService: "DefaultCircaEWasteRewardValuationService",
    conversation: {
      rewardGuidance:
        "Approval rewards are added only after review. Potential CO₂e savings use the stated calculation method and assumed treatment. Carbon units are rewards, not issued carbon credits. When an asset is sold or gifted, its attached carbon moves with ownership; original approval rewards stay with the contributor.",
    },
  },
};
