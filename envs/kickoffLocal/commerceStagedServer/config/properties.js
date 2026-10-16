module.exports = {
  profileTenantProvisioning: {
    runtimeRemoteModuleExtensions: ["eWaste"],
  },
  publish: {
    setup: { observation: { enabled: true } },
    approvalWorkflow: {
      target: {
        connectionName: "process",
      },
    },
  },
  pricing: {
    publication: {
      sourceVersioningQualified: true,
      target: {
        connectionName: "commerce",
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
  },
  tax: {
    publication: {
      sourceVersioningQualified: true,
      target: {
        connectionName: "commerce",
      },
    },
  },
  inventory: {
    publication: {
      sourceVersioningQualified: true,
      target: {
        connectionName: "commerce",
      },
    },
  },
  promotion: {
    publication: {
      sourceVersioningQualified: true,
      target: {
        connectionName: "commerce",
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
      {
        $config: "composition",
        name: "agora",
        field: "projectPacks",
        spread: true,
      },
      "redisCache",
    ],
  },
  runtimeRole: {
    code: "COMMERCE_STAGED",
    publication: "STAGED",
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
    default: "commerce.staged",
  },
  database: {
    default: {
      mongodb: {
        master: {
          databaseName: "kickoffLocalCommerceStaged",
        },
      },
    },
  },
  servers: {
    default: {
      endpoint: {
        httpPort: 4352,
        httpsPort: 4353,
      },
    },
  },
};
