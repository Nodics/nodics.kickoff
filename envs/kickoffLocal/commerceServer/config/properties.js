/**
 * @module kickoffLocal/commerceServer/config/properties
 * @description Selects Local Commerce deployment composition, publication and scoped reward-payment authority.
 * @layer config
 * @owner nodics.kickoff
 * @override Later deployment layers may narrow the selected capabilities without bypassing owner authorization.
 */
module.exports = {
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
                storeCode: "agoraMainStore",
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
    refunds: {
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
  databaseTransactions: { maximumCommitTimeMs: 10000 },
  enterpriseResolution: { runtimeLookup: { enabled: true } },
  publish: {
    setup: {
      observation: {
        enabled: true,
      },
    },
  },
  digitalCore: {
    merchantRedemption: { pricedProvider: { qualified: true } },
    bundleListings: { enabled: true },
    // Local admission for the reviewed original-sale test, not financial acceptance evidence.
    digitalOwnership: {
      enabled: true,
      qualified: true,
      owner: {
        connectionName: "waste",
        targetAuthority: "WASTE",
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
          runtimeRole: { code: "WASTE", publication: "OPERATIONAL" },
        },
      },
    },
  },
  pricing: {
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
    publication: {
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
  },
  tax: {
    publication: {
      sourceAuthority: {
        connectionName: "commerceStaged",
      },
    },
  },
  inventory: {
    publication: {
      sourceAuthority: {
        connectionName: "commerceStaged",
      },
    },
  },
  promotion: {
    runtimeRoleProfiles: {
      COMMERCE: {
        merchantBenefits: {
          qualified: true,
          pricedSource: {
            qualified: true,
            connectionName: "commerceServer",
            allowInsecureLoopback: true,
          },
        },
      },
    },
    publication: {
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
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4350,
        httpsPort: 4351,
      },
    },
  },
};
