/**
 * @module kickoffLocal/commerceServer/config/properties
 * @description Selects Local Commerce deployment composition, publication and scoped reward-payment authority.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected capabilities without bypassing owner authorization.
 */
const circaNative = require("../../config/circaRuntimeOverrides.json");

module.exports = {
  commercialAgreement: {
    catalogueReferences: {
      mode: "REMOTE",
    },
  },
  store: {
    placementRead: {
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
            serverCode: "commerceStagedServer",
            instanceCode: "kickoff-local-commerce-staged-1",
            assignmentCode: "kickoff-local-commerce-staged-runtime-deployment",
            placements: [
              {
                storeCode: "circaMainStore",
                enterpriseCode: "GREENPERKS_ONLINE",
              },
            ],
          },
          {
            tenant: "default",
            principalEnterpriseCode: "default",
            serviceId: "apiAdmin",
            projectCode: "nodics.kickoff",
            environmentCode: "kickoffLocal",
            serverCode: "commerceServer",
            instanceCode: "kickoff-local-commerce-1",
            assignmentCode: "kickoff-local-commerce-runtime-deployment",
            placements: [
              {
                storeCode: "agoraApparelStore",
                enterpriseCode: "default",
              },
              {
                storeCode: "circaMainStore",
                enterpriseCode: "GREENPERKS_ONLINE",
              },
            ],
          },
        ],
      },
    },
  },
  order: {
    disputes: {
      enabled: true,
      orderCodePrefixes: ["CIRCA_ORDER_"],
      storeCodes: {
        agoraApparelStore: {
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
        agoraApparelStore: {
          $config: "selected",
          name: "agora",
          field: "domains",
          includes: "apparel",
          value: true,
        },
      },
      ownerByStore: {
        agoraApparelStore: {
          $config: "selected",
          name: "agora",
          field: "domains",
          includes: "apparel",
          value: "fulfillmentCore",
        },
      },
      policyExceptions: {
        enabled: true,
        environmentNames: ["kickoffLocal"],
        approvals: [
          {
            tenant: "default",
            enterpriseCode: "GREENPERKS_ONLINE",
            ownerId: "customer@circa.local",
            orderCode: "CIRCA_ORDER_261009:GP-A01-UNUSED-REFUND:order",
            caseCode: "ORDER_REVIEW_EBAABBBC41098AF799F44B680CDDD130",
            amount: "50.00",
            currency: "POINTS",
            entitlementCode:
              "digitalEntitlement:5ea8973f942b650766948c9ef9b163fbe84a4a28",
            couponCode: "CIRCA_COUPON_GP-A01_BATCH:1",
          },
        ],
      },
    },
  },
  databaseTransactions: {
    maximumCommitTimeMs: 10000,
  },
  enterpriseResolution: {
    runtimeLookup: {
      enabled: true,
    },
  },
  publish: {
    setup: {
      observation: {
        enabled: true,
      },
    },
  },
  digitalCore: {
    couponAcquisition: {
      sourceProof: {
        enabled: true,
        callers: {
          $config: "replace",
          value: [
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_ONLINE",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "wasteServer",
              instanceCode: "kickoff-local-waste-1",
              assignmentCode: "kickoff-local-waste-runtime-deployment",
              phases: ["reserve", "consume", "release"],
            },
          ],
        },
      },
    },
    bundles: {
      carbon: {
        qualified: true,
      },
    },
    merchantRedemption: {
      enabled: true,
      storeScope: {
        enabled: true,
        qualified: true,
      },
    },
    couponReminders: {
      enabled: true,
      leadTimeSeconds: 1296000,
      sourceCallers: [
        {
          tenant: "default",
          principalEnterpriseCode: "default",
          enterpriseCode: "GREENPERKS_ONLINE",
          serviceId: "apiAdmin",
          projectCode: "nodics.kickoff",
          environmentCode: "kickoffLocal",
          serverCode: "platformServer",
          instanceCode: "kickoff-local-platform-1",
          assignmentCode: "kickoff-local-platform-runtime-deployment",
        },
      ],
      sweepCallers: [
        {
          tenant: "default",
          principalEnterpriseCode: "default",
          enterpriseCode: "GREENPERKS_ONLINE",
          serviceId: "apiAdmin",
          projectCode: "nodics.kickoff",
          environmentCode: "kickoffLocal",
          serverCode: "processServer",
          instanceCode: "kickoff-local-process-1",
          assignmentCode: "kickoff-local-process-runtime-deployment",
        },
      ],
      dispatchCallers: [
        {
          tenant: "default",
          principalEnterpriseCode: "default",
          enterpriseCode: "GREENPERKS_ONLINE",
          serviceId: "apiAdmin",
          projectCode: "nodics.kickoff",
          environmentCode: "kickoffLocal",
          serverCode: "processServer",
          instanceCode: "kickoff-local-process-1",
          assignmentCode: "kickoff-local-process-runtime-deployment",
        },
      ],
      delivery: {
        communicationConnectionName: "engagement",
        allowInsecureLoopback: true,
      },
    },
    bundleListings: {
      enabled: true,
    },
    digitalOwnership: {
      enabled: true,
      qualified: true,
      owner: {
        connectionName: "waste",
      },
    },
    ownershipEvidence: {
      enabled: true,
      callers: {
        $config: "replace",
        value: [
          {
            tenant: "default",
            principalEnterpriseCode: "default",
            enterpriseCode: "GREENPERKS_ONLINE",
            serviceId: "apiAdmin",
            projectCode: "nodics.kickoff",
            environmentCode: "kickoffLocal",
            serverCode: "wasteServer",
            instanceCode: "kickoff-local-waste-1",
            assignmentCode: "kickoff-local-waste-runtime-deployment",
            kinds: ["LISTING", "BINDING", "PURCHASE", "REFUND"],
          },
          {
            tenant: "default",
            principalEnterpriseCode: "default",
            enterpriseCode: "GREENPERKS_ONLINE",
            serviceId: "apiAdmin",
            projectCode: "nodics.kickoff",
            environmentCode: "kickoffLocal",
            serverCode: "commerceServer",
            instanceCode: "kickoff-local-commerce-1",
            assignmentCode: "kickoff-local-commerce-runtime-deployment",
            kinds: ["ADMIT_BINDING"],
          },
        ],
      },
      bindingAdmission: {
        enabled: true,
        connectionName: "waste",
        targetAuthority: {
          server: "wasteServer",

        },
      },
    },
  },
  pricing: {
    bundleListings: {
      enabled: true,
      qualified: true,
    },
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
              value: "agoraApparelStore",
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
            agoraApparelStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: ["agoraApparelRetailUsd"],
            },
          },
        },
      },
      sourceAuthority: {
        connectionName: "commerceStaged",
        callers: {
          $config: "replace",
          value: [
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceStagedServer",
              instanceCode: "kickoff-local-commerce-staged-1",
              assignmentCode:
                "kickoff-local-commerce-staged-runtime-deployment",
            },
          ],
        },
      },
    },
    merchantEvidence: {
      qualified: true,
      businessCallers: {
        enabled: true,
        callers: {
          $config: "replace",
          value: [
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_RETAIL",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceServer",
              instanceCode: "kickoff-local-commerce-1",
              assignmentCode: "kickoff-local-commerce-runtime-deployment",
            },
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "RENEWWORKS_REPAIR_REUSE",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceServer",
              instanceCode: "kickoff-local-commerce-1",
              assignmentCode: "kickoff-local-commerce-runtime-deployment",
            },
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "LOOPCYCLE_RECYCLING",
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
  },
  tax: {
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
              value: "agoraApparelStore",
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
            agoraApparelStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: ["agoraAeVatPolicy"],
            },
          },
        },
      },
      sourceAuthority: {
        connectionName: "commerceStaged",
      },
    },
  },
  inventory: {
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
              value: "agoraApparelStore",
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
            agoraApparelStore: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: ["agoraApparelWarehouse"],
            },
          },
        },
      },
      sourceAuthority: {
        connectionName: "commerceStaged",
      },
    },
  },
  promotion: {
    acquisitionReporting: {
      channelOptions: [
        {
          code: "web",
          name: "Website",
        },
      ],
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
              value: "agoraApparelStore",
            },
          ],
        },
        rootCodesByStore: {
          $config: "replace",
          value: {
            circaMainStore: [
              "CIRCA_COUPON_GP-C01_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C02_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C03_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C04_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C05_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C06_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C07_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C08_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C09_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C10_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C11_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-C12_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B01_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B02_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B03_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B04_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B05_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B06_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B07_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B08_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B09_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B10_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B11_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-B12_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A01_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A02_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A03_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A04_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A05_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A06_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A07_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A08_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A09_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A10_PROMO_L08_20261110",
              "CIRCA_COUPON_GP-A11_PROMO_L08_20261110",
              "CIRCA_COUPON_CPN-GRN-30_PROMO_L08_20261110",
              "CIRCA_COUPON_CPN-SVC-50_PROMO_L08_20261110",
              "CIRCA_COUPON_CPN-ECO-15_PROMO_L08_20261110",
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
            agoraApparelStore: {
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
      sourceAuthority: {
        connectionName: "commerceStaged",
      },
    },
  },
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
      "publish",
      "vMongodb",
      "circa.ewaste",
      "search",
      "elastic",
      "commerceSearchCore",
      "commerceSearch",
      "digitalCommerce",
      "digitalCore",
      {
        $config: "composition",
        name: "agora",
        field: "sharedModules",
        spread: true,
      },
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "redisCache",
    ],
  },
  runtimeRole: {
    code: "COMMERCE",
    publication: "OPERATIONAL",
  },
  runtimeAuthorityContexts: {
    modules: {
      apparelProduct: true,
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
      electronicsProduct: true,
      fulfillmentCore: true,
      inventory: true,
      order: true,
      paymentCore: true,
      pricing: true,
      product: true,
      promotion: true,
      store: true,
      tax: true,
      telcoCatalog: true,
      telcoProvisioning: true,
      telcoSubscription: true,
      loyalty: "loyalty.operational",
    },
    default: "commerce.operational",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalCommerce",
        },
      },
    },
    loyaltyProgram: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyRewardType: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyWallet: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyLedger: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyReservation: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyRedemption: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    "nodics.loyalty": {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyCore: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
    loyaltyApi: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalLoyalty",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4350,
        httpsPort: 4351,
      },
    },
  },
  loyalty: {
    transactions: {
      enabled: true,
    },
    reservationDecisions: {
      callers: {
        $config: "replace",
        value: [
          {
            tenant: "default",
            serviceId: "apiAdmin",
            entCode: "default",
            projectCode: "nodics.kickoff",
            environmentCode: "kickoffLocal",
            serverCode: "commerceServer",
            instanceCode: "kickoff-local-commerce-1",
            assignmentCode: "kickoff-local-commerce-runtime-deployment",
          },
        ],
      },
    },
    enterpriseTestCredits: {
      enabled: true,
      provisioningEnabled: true,
      allowedEnvironments: {
        $config: "replace",
        value: ["kickoffLocal"],
      },
    },
    sampleCredits: {
      enabled: true,
      allowedEnvironments: {
        $config: "replace",
        value: ["kickoffLocal"],
      },
      approvedSources: {
        $config: "replace",
        value: [
          {
            environmentCode: "kickoffLocal",
            enterpriseCode: "GREENPERKS_ONLINE",
            releaseCode: "circa.ewaste:circaLocalDemoCredit",
            version: "0.0.1",
            checksum:
              "991a3f063caeaef83ada14a426c824650bdc5eef9c9cb43a5872ef2545e1c1d8",
            instructionCode: "CIRCA_LOCAL_DEMO_BUYER_POINTS",
            approvalReference: "CIRCA_LOCAL_DEMO_POINT_CREDIT_20261009",
          },
          {
            environmentCode: "kickoffLocal",
            enterpriseCode: "GREENPERKS_ONLINE",
            releaseCode: "circa.ewaste:circaLocalE2ECustomerWalletCredit",
            version: "0.0.1",
            checksum:
              "639d05972d3ae328f5b0a903d7ed51b953603eb8d9fbde1ecb5ec73071bc0b90",
            instructionCode: "CIRCA_KICKOFF_LOCAL_E2E_CUSTOMER_POINTS_20261020",
            approvalReference: "CIRCA_KICKOFF_LOCAL_E2E_FUNDING_20261020",
          },
        ],
      },
    },
    api: {
      readEvidence: {
        callers: {
          $config: "replace",
          value: [
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_ONLINE",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "wasteServer",
              instanceCode: "kickoff-local-waste-1",
              assignmentCode: "kickoff-local-waste-runtime-deployment",
            },
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_RETAIL",
              serviceId: "apiAdmin",
              projectCode: "nodics.kickoff",
              environmentCode: "kickoffLocal",
              serverCode: "commerceServer",
              instanceCode: "kickoff-local-commerce-1",
              assignmentCode: "kickoff-local-commerce-runtime-deployment",
            },
            {
              tenant: "default",
              principalEnterpriseCode: "default",
              enterpriseCode: "GREENPERKS_ONLINE",
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
  },
  apiExposure: {
    categories: {
      productPublicationTarget: {
        enabled: true,
      },
      storePlacementRead: {
        enabled: true,
      },
      commerceSellerAuthorizationManagement: {
        enabled: true,
      },
      commerceMerchantPricing: {
        enabled: true,
      },
      commerceOwnershipEvidence: {
        enabled: true,
      },
      commerceCouponAcquisitionEvidence: {
        enabled: true,
      },
    },
  },
  profileExternalIdentity: circaNative.profileExternalIdentity,
  bidding: {
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
  media: {
    customerUploads: {
      enabled: true,
    },
  },
  waste: {
    operations: {
      requireScopes: true,
      requireVerification: true,
    },
  },
  eWaste: circaNative.eWaste,
  fulfillmentCore: {
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
  product: {
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
              storeCode: "agoraApparelStore",
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
  cart: {
    customerApi: {
      defaultJurisdiction: "AE",
      defaultCurrency: "AED",
    },
  },
  data: {
    dataReleases: {
      contributions: {
        $config: "keyed",
        key: "moduleName",
        entries: [
          {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: { moduleName: "agora.telco", sections: ["agoraTelcoStoreReference"] },
          },
          {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "electronics",
            value: { moduleName: "agora.electronics", sections: ["agoraElectronicsStoreReference"] },
          },
          {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "apparel",
            value: {
              moduleName: "agora.apparel",
              sections: [
                "agoraApparelStoreReference",
                "agoraApparelOpeningStock",
                "agoraApparelPromotionSetup",
              ],
            },
          },
        ],
      },
    },
  },
  stripeProvider: {
    enabled: true,
  },
};
