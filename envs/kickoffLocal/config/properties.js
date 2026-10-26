/**
 * @module kickoffLocal/config/properties
 * @description Declares Local deployment selections and explicitly scoped runtime policies.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow these selections without bypassing framework qualification or authorization.
 */
module.exports = {
  checkoutCore: {
    auction: {
      cartContexts: {
        circaMainStore: {
          tenant: "default",
          enterpriseCode: "GREENPERKS_ONLINE",
          currency: "POINTS",
          jurisdiction: "CIRCA_SAMPLE",
        },
      },
    },
  },
  wasteMaterialValue: {
    mock: { enabled: true },
    evidence: {
      valuationProviderService: "DefaultWasteMaterialValueMockProviderService",
      paymentProviderService: "DefaultWasteMaterialValueMockProviderService",
      allowSynthetic: true,
      qualificationRef: {
        module: "wasteReward",
        schema: "wasteMaterialValueMockEvidence",
        code: "circa-e16-valuation-mock-v001",
      },
    },
  },
  wasteCarbon: {
    mock: { enabled: true },
    evidence: {
      providerService: "DefaultWasteCarbonMockProviderService",
      allowSynthetic: true,
      qualificationRef: {
        module: "wasteCarbon",
        schema: "wasteCarbonMockEvidence",
        code: "circa-e15-carbon-mock-v001",
      },
    },
  },
  loyalty: {
    partnerRewardConversion: { enabled: true, mock: { enabled: true } },
    auctions: { enabled: true },
  },
  // Local fresh installs seed the retained runtime proof that this deployment
  // will authenticate immediately after Init. nAuth still owns both bindings;
  // other environments may provision and rotate them independently.
  bootstrapIdentity: {
    serviceApiKey: {
      $config: "env",
      name: "NODICS_API_KEY",
      fallback: null,
    },
  },
  redisLocalResetMaintenance: {
    maximumKeys: 50000,
    maximumKeyBytes: 16777216,
    maximumScanPages: 4096,
    inventoryTimeoutMs: 120000,
  },
  cart: {
    runtimeRoleProfiles: {
      COMMERCE: {
        customerApi: {
          defaultJurisdiction: "AE",
          defaultCurrency: "AED",
        },
      },
    },
  },
  order: {
    runtimeRoleProfiles: {
      COMMERCE: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
          storeCodes: {
            agoraMainStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: true,
            },
          },
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
          storeCodes: {
            agoraMainStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: true,
            },
          },
          ownerByStore: {
            agoraMainStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: "fulfillmentCore",
            },
          },
        },
      },
      COMMERCE_STAGED: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      LOCATION: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      LOYALTY: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      PLATFORM: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      WASTE: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
      WCMS_STAGED: {
        disputes: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
        refunds: {
          enabled: true,
          orderCodePrefixes: ["CIRCA_ORDER_"],
        },
      },
    },
  },
  profileExternalIdentity: {
    runtimeRoleProfiles: {
      COMMERCE: {
        enabled: true,
        applications: {
          "circa.ewaste": {
            enabled: true,
            provider: "TELEGRAM",
            enterpriseCode: "default",
            credentialReference: "telegram.bot.circa",
            requireBrowserHandoff: true,
          },
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["profileExternalIdentity", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  bidding: {
    runtimeRoleProfiles: {
      COMMERCE: {
        enabled: true,
        policyVersion: "circa-digital-bids-v1",
        amountScale: 0,
        maximumAmount: "100000",
        stores: {
          circaMainStore: {
            enterpriseCode: "GREENPERKS_ONLINE",
            currency: "POINTS",
            locale: "en",
            orderCodePrefix: "CIRCA_ORDER_BID_",
            allowOwnerReference: true,
          },
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["bidding", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  media: {
    runtimeRoleProfiles: {
      COMMERCE: {
        customerUploads: {
          enabled: true,
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["media", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  waste: {
    runtimeRoleProfiles: {
      COMMERCE: {
        operations: {
          requireScopes: true,
          requireVerification: true,
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["waste", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  wasteImpact: {
    runtimeRoleProfiles: {
      COMMERCE: {
        calculation: {
          providerService: "DefaultEWasteOpenAiImpactProviderService",
          fallbackProviderServices: {
            $config: "replace",
            value: ["DefaultEWasteWarmImpactProviderService"],
          },
          timeoutMs: 90000,
          failureMode: "RESULT",
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["wasteImpact", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  eWaste: {
    runtimeRoleProfiles: {
      COMMERCE: {
        journey: {
          arrivalRadiusMetres: {
            $config: "env",
            name: "CIRCA_EWASTE_ARRIVAL_RADIUS_METRES",
            type: "number",
            fallback: 200,
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
      COMMERCE_STAGED: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOCATION: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
      WASTE: {
        journey: {
          arrivalRadiusMetres: {
            $config: "env",
            name: "CIRCA_EWASTE_ARRIVAL_RADIUS_METRES",
            type: "number",
            fallback: 200,
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
          project: "circa.ewaste",
          adapter: "ollama",
        },
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["eWaste", "runtimeRoleProfiles", "COMMERCE"],
      },
    },
  },
  wasteSubmission: {
    runtimeRoleProfiles: {
      WASTE: {
        metadataSuggestion: {
          enabled: true,
          adapter: "openai",
        },
      },
    },
  },

  publish: {
    setup: {
      observation: {
        plans: {
          "circa-native-reviewed": {
            moduleName: "circa.ewaste",
            path: "config/setup-observation/circa-native-reviewed.json",
            checksum:
              "9340a939abfe68ce99ab635ec0ed01819c1052ebbbae4b5da7fc8fee82e43fe2",
            revision: 17,
          },
        },
        callers: {
          nativePlatform: {
            tenant: "default",
            enterpriseCode: "default",
            serviceId: "apiAdmin",
            projectCode: "nodics.kickoff",
            environmentCode: "kickoffLocal",
            serverCode: "platformServer",
            instanceCode: "kickoff-local-platform-1",
            assignmentCode: "kickoff-local-platform-runtime-deployment",
            plans: ["circa-native-reviewed"],
          },
        },
      },
    },
    approvalWorkflow: {
      runtimeEnterpriseScope: {
        enabled: true,
        enterpriseCodes: [
          "GREENPERKS_ONLINE",
          "GREENPERKS_RETAIL",
          "RENEWWORKS_REPAIR_REUSE",
          "LOOPCYCLE_RECYCLING",
        ],
      },
    },
  },
  // Operator-selected only after the Local console and launch capture checks.
  log: {
    requestPrivacy: {
      qualified: {
        $config: "env",
        name: "NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED",
        type: "boolean",
        fallback: false,
      },
    },
  },
  pricing: {
    runtimeRoleProfiles: {
      COMMERCE: {
        bundleListings: { enabled: true, qualified: true },
        publication: {
          delivery: {
            enabled: true,
            rowReleases: true,
            storeCodes: {
              $config: "replace",
              value: [
                "circaMainStore",
                "greenperks-cafe",
                "greenperks-bistro",
                "renewworks-repair",
                "loopcycle-accessories",
                {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: "agoraMainStore",
                },
              ],
            },
            rootCodesByStore: {
              $config: "replace",
              value: {
                circaMainStore: ["circaPointsPriceBook"],
                "greenperks-cafe": ["circaLocalGreenPerksAed"],
                "greenperks-bistro": ["circaLocalGreenPerksAed"],
                "renewworks-repair": ["circaLocalRenewWorksAed"],
                "loopcycle-accessories": ["circaLocalLoopCycleAed"],
                agoraMainStore: {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: ["agoraApparelRetailUsd"],
                },
              },
            },
          },
        },
      },
    },
  },
  tax: {
    runtimeRoleProfiles: {
      COMMERCE: {
        publication: {
          delivery: {
            enabled: true,
            storeCodes: {
              $config: "replace",
              value: [
                "circaMainStore",
                "greenperks-cafe",
                "greenperks-bistro",
                "renewworks-repair",
                "loopcycle-accessories",
                {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: "agoraMainStore",
                },
              ],
            },
            rootCodesByStore: {
              $config: "replace",
              value: {
                circaMainStore: ["circaSamplePointsPolicy"],
                "greenperks-cafe": ["circaLocalGreenPerksZeroTax"],
                "greenperks-bistro": ["circaLocalGreenPerksZeroTax"],
                "renewworks-repair": ["circaLocalRenewWorksZeroTax"],
                "loopcycle-accessories": ["circaLocalLoopCycleZeroTax"],
                agoraMainStore: {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: ["agoraAeVatPolicy"],
                },
              },
            },
          },
        },
      },
    },
  },
  inventory: {
    runtimeRoleProfiles: {
      COMMERCE: {
        publication: {
          delivery: {
            enabled: true,
            storeCodes: {
              $config: "replace",
              value: [
                "circaMainStore",
                "greenperks-cafe",
                "greenperks-bistro",
                "renewworks-repair",
                "loopcycle-accessories",
                {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: "agoraMainStore",
                },
              ],
            },
            rootCodesByStore: {
              $config: "replace",
              value: {
                circaMainStore: ["circaDigitalRegistry"],
                "greenperks-cafe": ["circaLocalCafeWarehouse"],
                "greenperks-bistro": ["circaLocalBistroWarehouse"],
                "renewworks-repair": ["circaLocalRenewWorksWarehouse"],
                "loopcycle-accessories": ["circaLocalLoopCycleWarehouse"],
                agoraMainStore: {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: ["agoraApparelWarehouse"],
                },
              },
            },
          },
        },
      },
    },
  },
  promotion: {
    runtimeRoleProfiles: {
      COMMERCE: {
        acquisitionReporting: {
          channelOptions: [{ code: "web", name: "Website" }],
          enabled: true,
          refresh: {
            enabled: true,
            callers: {
              $config: "replace",
              value: [
                {
                  tenant: "default",
                  principalEnterpriseCode: "default",
                  serviceId: "apiAdmin",
                  projectCode: "nodics.kickoff",
                  environmentCode: "kickoffLocal",
                  serverCode: "commerceServer",
                  instanceCode: "kickoff-local-commerce-1",
                  assignmentCode: "kickoff-local-commerce-runtime-deployment",
                },
              ],
            },
          },
        },
        legacyTokenHashPolicies: ["TENANT_COLON_UPPERCASE_SHA256"],
        sellerAuthorization: {
          enabled: true,
          qualified: true,
        },
        purchasedRights: {
          enabled: true,
          qualified: true,
        },
        setupPacing: {
          preflightDelayMs: 1200,
          issuanceDelayMs: 3600,
        },
        publication: {
          delivery: {
            enabled: true,
            storeCodes: {
              $config: "replace",
              value: [
                "circaMainStore",
                {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: "agoraMainStore",
                },
              ],
            },
            rootCodesByStore: {
              $config: "replace",
              value: {
                circaMainStore: [
                  "CIRCA_COUPON_GP-C01_PROMO",
                  "CIRCA_COUPON_GP-C02_PROMO",
                  "CIRCA_COUPON_GP-C03_PROMO",
                  "CIRCA_COUPON_GP-C04_PROMO",
                  "CIRCA_COUPON_GP-C05_PROMO",
                  "CIRCA_COUPON_GP-C06_PROMO",
                  "CIRCA_COUPON_GP-C07_PROMO",
                  "CIRCA_COUPON_GP-C08_PROMO",
                  "CIRCA_COUPON_GP-C09_PROMO",
                  "CIRCA_COUPON_GP-C10_PROMO",
                  "CIRCA_COUPON_GP-C11_PROMO",
                  "CIRCA_COUPON_GP-C12_PROMO",
                  "CIRCA_COUPON_GP-B01_PROMO",
                  "CIRCA_COUPON_GP-B02_PROMO",
                  "CIRCA_COUPON_GP-B03_PROMO",
                  "CIRCA_COUPON_GP-B04_PROMO",
                  "CIRCA_COUPON_GP-B05_PROMO",
                  "CIRCA_COUPON_GP-B06_PROMO",
                  "CIRCA_COUPON_GP-B07_PROMO",
                  "CIRCA_COUPON_GP-B08_PROMO",
                  "CIRCA_COUPON_GP-B09_PROMO",
                  "CIRCA_COUPON_GP-B10_PROMO",
                  "CIRCA_COUPON_GP-B11_PROMO",
                  "CIRCA_COUPON_GP-B12_PROMO",
                  "CIRCA_COUPON_GP-A01_PROMO",
                  "CIRCA_COUPON_GP-A02_PROMO",
                  "CIRCA_COUPON_GP-A03_PROMO",
                  "CIRCA_COUPON_GP-A04_PROMO",
                  "CIRCA_COUPON_GP-A05_PROMO",
                  "CIRCA_COUPON_GP-A06_PROMO",
                  "CIRCA_COUPON_GP-A07_PROMO",
                  "CIRCA_COUPON_GP-A08_PROMO",
                  "CIRCA_COUPON_GP-A09_PROMO",
                  "CIRCA_COUPON_GP-A10_PROMO",
                  "CIRCA_COUPON_GP-A11_PROMO",
                  "CIRCA_COUPON_GP-C01_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C02_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C03_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C04_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C05_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C06_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C07_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C08_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C09_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C10_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C11_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-C12_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B01_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B02_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B03_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B04_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B05_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B06_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B07_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B08_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B09_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B10_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B11_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-B12_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A01_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A02_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A03_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A04_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A05_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A06_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A07_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A08_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A09_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A10_PROMO_FIXED20261108",
                  "CIRCA_COUPON_GP-A11_PROMO_FIXED20261108",
                  "CIRCA_COUPON_CPN-GRN-30_PROMO_FIXED20261108",
                  "CIRCA_COUPON_CPN-SVC-50_PROMO_FIXED20261108",
                  "CIRCA_COUPON_CPN-ECO-15_PROMO_FIXED20261108",
                  "CIRCA_E07_CERTIFICATES_20261025_PROMO",
                  "CIRCA_E07_BOTH_20261025_PROMO",
                ],
                agoraMainStore: {
                  $config: "selected",
                  name: "agora",
                  field: "domains",
                  includes: "apparel",
                  value: [
                    "agoraStylePass5PercentRule",
                    "agoraCapsuleEdit10PercentRule",
                    "agoraPrivateSale20PercentRule",
                  ],
                },
              },
            },
          },
        },
      },
      COMMERCE_STAGED: {
        legacyTokenHashPolicies: ["TENANT_COLON_UPPERCASE_SHA256"],
      },
      LOCATION: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      WASTE: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["promotion", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
    },
  },
  digitalCore: {
    runtimeRoleProfiles: {
      COMMERCE: {
        couponAcquisition: { sourceProof: { enabled: true } },
        bundles: { carbon: { qualified: true } },
        merchantRedemption: {
          enabled: true,
          storeScope: {
            enabled: true,
            qualified: true,
          },
        },
      },
      COMMERCE_STAGED: {
        merchantRedemption: {
          enabled: true,
        },
      },
      LOCATION: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      LOYALTY: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      PLATFORM: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      WASTE: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: ["digitalCore", "runtimeRoleProfiles", "COMMERCE_STAGED"],
      },
    },
  },
  fulfillmentCore: {
    itemSimulation: {
      enabled: true,
      environmentAllowlist: {
        $config: "replace",
        value: ["kickoffLocal"],
      },
    },
    runtimeRoleProfiles: {
      COMMERCE: {
        customerShipping: {
          methods: {
            $config: "replace",
            value: [
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
          returnMethods: {
            $config: "replace",
            value: [
              {
                code: "PICKUP",
                label: "Pickup from address",
                requiresAddress: true,
              },
              {
                code: "DROP_OFF",
                label: "Drop off",
                requiresAddress: false,
              },
              {
                code: "STORE_RETURN",
                label: "Store return",
                requiresAddress: false,
              },
            ],
          },
        },
        physicalOperations: {
          enabled: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "apparel",
            value: true,
            otherwise: false,
          },
        },
      },
    },
  },
  // Explicit Local service-grant allowlist; review inherited grant changes before extending this pin.
  identityGovernance: {
    migration: {
      assessment: {
        enabled: {
          $config: "env",
          name: "NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED",
          type: "boolean",
          fallback: false,
        },
      },
      runtimeDeploymentBootstrapEnabled: true,
    },
  },
  profileTenantProvisioning: {
    enabled: {
      $config: "env",
      name: "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
      type: "boolean",
      fallback: false,
    },
    allowInsecureLoopback: true,
  },
  apiExposure: {
    runtimeRoleProfiles: {
      PLATFORM: {
        categories: {
          moduleInternal: { enabled: true },
          profileTenantProvisioning: {
            enabled: {
              $config: "env",
              name: "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
              type: "boolean",
              fallback: false,
            },
          },
          profileEmployeeRecovery: {
            enabled: {
              $config: "env",
              name: "NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED",
              type: "boolean",
              fallback: false,
            },
          },
        },
      },
      COMMERCE_STAGED: {
        categories: {
          productPublicationSource: { enabled: true },
          pricingPublicationAuthoring: { enabled: true },
          taxPublicationAuthoring: { enabled: true },
          inventoryPublicationAuthoring: { enabled: true },
          promotionPublicationAuthoring: { enabled: true },
        },
      },
      COMMERCE: {
        categories: {
          productPublicationTarget: { enabled: true },
          storePlacementRead: { enabled: true },
          commerceSellerAuthorizationManagement: { enabled: true },
          commerceMerchantPricing: { enabled: true },
          commerceOwnershipEvidence: { enabled: true },
          commerceCouponAcquisitionEvidence: { enabled: true },
        },
      },
    },
  },
  product: {
    runtimeRoleProfiles: {
      COMMERCE_STAGED: {
        marketplaceAuthoring: {
          enabled: true,
          catalogVersion: "circaStaged",
          locales: ["en", "ar"],
          bundlePublication: { enabled: true },
          storeSource: {
            connectionName: "commerce",
            allowInsecureLoopback: true,
          },
          intentSource: {
            connectionName: "waste",
            allowInsecureLoopback: true,
          },
        },
        publication: {
          target: {
            connectionName: "commerce",
          },
          source: {
            connectionName: "commerceStaged",
          },
        },
      },
      COMMERCE: {
        discovery: {
          activationScopes: {
            $config: "replace",
            value: [
              {
                tenant: "default",
                storeCode: "circaMainStore",
              },
              {
                tenant: "default",
                storeCode: "greenperks-cafe",
              },
              {
                tenant: "default",
                storeCode: "greenperks-bistro",
              },
              {
                tenant: "default",
                storeCode: "renewworks-repair",
              },
              {
                tenant: "default",
                storeCode: "loopcycle-accessories",
              },
              {
                $config: "selected",
                name: "agora",
                field: "domains",
                includes: "apparel",
                value: {
                  tenant: "default",
                  storeCode: "agoraMainStore",
                },
              },
              {
                $config: "selected",
                name: "agora",
                field: "domains",
                includes: "electronics",
                value: {
                  tenant: "default",
                  storeCode: "agoraElectronicsStore",
                },
              },
              {
                $config: "selected",
                name: "agora",
                field: "domains",
                includes: "telco",
                value: {
                  tenant: "default",
                  storeCode: "agoraTelcoStore",
                },
              },
            ],
          },
        },
        publication: {
          target: {
            connectionName: "commerce",
          },
          source: {
            connectionName: "commerceStaged",
          },
        },
      },
    },
  },
  process: {
    runtimeRoleProfiles: {
      PROCESS: {
        runtime: {
          deadLetterRequeue: {
            enabled: true,
          },
        },
        remoteActions: {
          runtimeEnterpriseScope: {
            enabled: true,
            enterpriseCodes: [
              "GREENPERKS_ONLINE",
              "GREENPERKS_RETAIL",
              "RENEWWORKS_REPAIR_REUSE",
              "LOOPCYCLE_RECYCLING",
            ],
          },
        },
        definitionContributions: {
          ownershipTransitions: [
            {
              definitionCode: "editorialApproval",
              mode: "RETAIN",
              source: {
                moduleName: "processServer",
                releaseCode: "processServer:init-v001",
                version: "0.0.1",
                checksum:
                  "0024cecb65ef2e34f3db8d314fbea6f926e3cc887fdc8c38612b3ac0fb646613",
              },
              target: {
                moduleName: "editorial",
                releaseCode: "editorial:editorialWorkflows",
                version: "0.0.1",
                checksum:
                  "d754c2c3ddbe4c5188e96b329a99b8686c19cdfd994f423424ea56e4a2f84103",
              },
              publishedChecksum:
                "d429c6567247add99fb275466af93a33ca64e3628c6a3119c97ccc05a3b70daf",
            },
            {
              definitionCode: "editorialPublication",
              mode: "RETAIN",
              source: {
                moduleName: "processServer",
                releaseCode: "processServer:init-v001",
                version: "0.0.1",
                checksum:
                  "0024cecb65ef2e34f3db8d314fbea6f926e3cc887fdc8c38612b3ac0fb646613",
              },
              target: {
                moduleName: "editorial",
                releaseCode: "editorial:editorialWorkflows",
                version: "0.0.1",
                checksum:
                  "d754c2c3ddbe4c5188e96b329a99b8686c19cdfd994f423424ea56e4a2f84103",
              },
              publishedChecksum:
                "f9fe1d8ab0da0acef1327c4dab32b6d2291f87e9c4486b8f9cf6af61d663c42a",
            },
          ],
        },
      },
    },
  },
  credentials: {
    runtimeRoleProfiles: {
      PLATFORM: {
        "telegram.bot.circa": {
          value: "8674791214:AAEZhgqWM8fmRvdWuBCOsx3vMEhfRjfFw3g",
          label: "Circa Telegram bot token",
          status: "CONFIGURED",
          secret: true,
          credentialKind: "BOT_TOKEN",
        },
      },
      ENGAGEMENT: {
        "telegram.bot.circa": {
          $config: "ref",
          path: [
            "credentials",
            "runtimeRoleProfiles",
            "PLATFORM",
            "telegram.bot.circa",
          ],
        },
      },
    },
    "openai.circa": {
      value: { $config: "env", name: "OPENAI_API_KEY" },
      label: "Circa OpenAI provider token",
      status: "UNCONFIGURED",
      secret: true,
      credentialKind: "API_TOKEN",
    },
  },
  httpHardening: {
    cors: {
      allowedOrigins: [
        "http://localhost:3600",
        "https://telegram-circa-local.nodics.dev",
      ],
      originEndpoints: {
        agora: {
          port: 3300,
        },
        agoraElectronics: {
          port: 3400,
        },
        agoraTelco: {
          port: 3500,
        },
        circa: {
          port: 3600,
        },
      },
    },
  },
  profileCustomerBrowserSession: {
    enabled: true,
    allowInsecureLoopback: true,
    sameSite: "Lax",
  },
  profileBrowserSession: {
    enabled: true,
    allowInsecureLoopback: true,
    sameSite: "Lax",
  },
  authSecurity: {
    compatibility: {
      allowLocalBootstrapIdentity: true,
    },
  },
  cache: {
    default: {
      engines: {
        redis: {
          enabled: true,
          options: {
            prefix: "kickoffLocalRuntimeAuth",
          },
        },
      },
    },
  },
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
  },
  backofficeLocalReset: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
  },
  runtimeConfigurationSchemas: {
    runtimeRoleProfiles: {
      ENGAGEMENT: {
        telegramDelivery: {
          fields: [
            {
              credentialReference: {
                $config: "ref",
                path: [
                  "communication",
                  "runtimeRoleProfiles",
                  "ENGAGEMENT",
                  "providers",
                  "TELEGRAM",
                  "credentialReferences",
                  "0",
                ],
              },
            },
          ],
        },
      },
      COMMERCE: {
        telegramExternalIdentity: {
          fields: [
            {
              credentialReference: "telegram.bot.circa",
            },
          ],
        },
      },
      COMMERCE_STAGED: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      LOCATION: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      LOYALTY: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      PLATFORM: {
        telegramExternalIdentity: {
          fields: [
            {
              credentialReference: "telegram.bot.circa",
            },
          ],
        },
      },
      WASTE: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
      WCMS_STAGED: {
        $config: "ref",
        path: [
          "runtimeConfigurationSchemas",
          "runtimeRoleProfiles",
          "COMMERCE",
        ],
      },
    },
  },
  communication: {
    runtimeRoleProfiles: {
      ENGAGEMENT: {
        trustedSourceModules: {
          $config: "replace",
          value: ["eWaste", "profile", "digitalCore"],
        },
        sourceEligibilityTransport: { allowInsecureLoopback: true },
        providers: {
          TELEGRAM: {
            type: "TELEGRAM",
            credentialReferences: ["telegram.bot.circa"],
          },
        },
        templateResources: {
          modules: {
            eWaste: true,
            digitalCore: true,
          },
          selections: {
            WASTE_REVIEW_OUTCOME_V1: true,
            DIGITAL_COUPON_EXPIRING_IN_APP: true,
          },
        },
      },
    },
  },
  copilot: {
    runtimeRoleProfiles: {
      WASTE: {
        providers: {
          enabled: true,
          default: {
            maximumRequestBytes: 8000000,
          },
          adapters: {
            openai: {
              enabled: true,
              credential: {
                mode: "SECRET_REFERENCE",
                secretRef: "credentials:openai.circa",
              },
              model: {
                name: "gpt-5.6-luna",
              },
              generation: {
                reasoningEffort: "none",
              },
              connection: {
                timeoutMs: 85000,
              },
            },
            ollama: {
              enabled: true,
              model: {
                name: "gemma3:4b",
              },
              generation: {
                numPredict: 1200,
              },
            },
          },
          profiles: {
            structuredTool: {
              maximumOutputTokens: 1200,
            },
          },
        },
        knowledge: {
          ingestion: {
            enabled: true,
            ingestOnStart: true,
          },
          retrieval: {
            enabled: true,
          },
        },
      },
      PLATFORM: {
        providers: {
          accounting: {
            enabled: true,
            tenantLimit: 100000,
            enterprises: [
              {
                tenantCode: "default",
                enterpriseCode: "default",
                limit: 100000,
                adapters: ["ollama"],
                profiles: ["conversation", "structuredTool", "evaluation"],
                users: [
                  {
                    principalCode: "admin",
                    limit: 100000,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  tooling: {
    acceptance: {
      guidedInitialization: {
        requestTimeoutMs: 60000,
      },
      browserValidation: {
        enabled: false,
        reason:
          "Frontend repositories own browser qualification; backend readiness uses API evidence.",
      },
    },
  },
};
