/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
const { agoraDomains } = require("../../config/properties");
const commerceSearchRuntimeModules = [
  "search",
  "elastic",
  "commerceSearchCore",
  "commerceSearch",
];
const digitalCommerceRuntimeModules = ["digitalCommerce", "digitalCore"];
const commerceAuthorityModules = [
  "apparelProduct",
  "cart",
  "checkoutCore",
  "commerceSearchCore",
  "shoppingList",
  "digitalCore",
  "discoveryConfig",
  "discoveryMapping",
  "discoveryProjection",
  "discoveryRanking",
  "discoverySource",
  "electronicsProduct",
  "fulfillmentCore",
  "inventory",
  "order",
  "paymentCore",
  "pricing",
  "product",
  "promotion",
  "store",
  "tax",
  "telcoCatalog",
  "telcoProvisioning",
  "telcoSubscription",
];
/** @module kickoffLocal/commerceServer/config/properties @description Defines isolated local Commerce coordinates. @layer environment-server-config @owner nodics.kickoff */
module.exports = {
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultCommerceOrderService",
      "DefaultProductService",
      "DefaultPaymentTransactionService",
      "DefaultCartService",
    ],
    serviceNames: [
      "DefaultApparelFitProfileService",
      "DefaultApparelSizeSystemService",
      "DefaultApparelStyleService",
      "DefaultApparelVariantProfileService",
      "DefaultCartCalculationService",
      "DefaultCartDiagnosticService",
      "DefaultCartEntryService",
      "DefaultCartService",
      "DefaultCatalogService",
      "DefaultCategoryLocalizationService",
      "DefaultCategoryService",
      "DefaultCheckoutBidService",
      "DefaultCheckoutCheckpointService",
      "DefaultCheckoutSessionService",
      "DefaultClassConfigurationService",
      "DefaultCommerceCapacityEvidenceService",
      "DefaultCommerceCompatibilityRecordService",
      "DefaultCommerceMigrationRecordService",
      "DefaultCommerceOrderEntryService",
      "DefaultCommerceOrderService",
      "DefaultCommerceRecoveryCheckpointService",
      "DefaultCommerceSearchRuleProjectionService",
      "DefaultCommerceSearchRuleService",
      "DefaultCommerceSearchRuleVersionService",
      "DefaultConfigurationActivationLogService",
      "DefaultConfigurationActivationRequestService",
      "DefaultConfigurationService",
      "DefaultConsignmentService",
      "DefaultCouponBatchService",
      "DefaultCouponService",
      "DefaultCronJobLogService",
      "DefaultCronJobService",
      "DefaultDataInstallationService",
      "DefaultDigitalDeliveryService",
      "DefaultDigitalEntitlementService",
      "DefaultDigitalProductBindingService",
      "DefaultDigitalReversalService",
      "DefaultDiscountDecisionService",
      "DefaultDiscoveryDocumentProjectionService",
      "DefaultDiscoveryFacetProfileService",
      "DefaultDiscoveryFieldMappingService",
      "DefaultDiscoveryIndexConfigurationService",
      "DefaultDiscoveryPublicationPolicyService",
      "DefaultDiscoveryQueryProfileService",
      "DefaultDiscoveryRankingActionService",
      "DefaultDiscoveryRankingProfileService",
      "DefaultDiscoverySourceMixConfigurationService",
      "DefaultDiscoverySourceProviderService",
      "DefaultElectronicsCompatibilityProfileService",
      "DefaultElectronicsDeviceIdentityPolicyService",
      "DefaultElectronicsSpecificationProfileService",
      "DefaultElectronicsWarrantyProfileService",
      "DefaultEmsFailedMessagesService",
      "DefaultEventListenerService",
      "DefaultFulfillmentExceptionService",
      "DefaultFulfillmentReturnService",
      "DefaultImportDefinitionService",
      "DefaultImportRunService",
      "DefaultIndexService",
      "DefaultIndexerLogService",
      "DefaultIndexerService",
      "DefaultInterceptorService",
      "DefaultInventoryBalanceService",
      "DefaultInventoryMovementService",
      "DefaultInventoryReservationService",
      "DefaultOrderHistoryService",
      "DefaultOrderLifecycleCheckpointService",
      "DefaultOrderLifecycleRequestService",
      "DefaultOrderLifecycleVersionService",
      "DefaultOrderReversalCalculationService",
      "DefaultPaymentInstrumentReferenceService",
      "DefaultPaymentReconciliationService",
      "DefaultPaymentTransactionEntryService",
      "DefaultPaymentTransactionService",
      "DefaultPipelineService",
      "DefaultPointOfServiceService",
      "DefaultPriceBookService",
      "DefaultPriceDecisionService",
      "DefaultPriceQuoteService",
      "DefaultPriceRowService",
      "DefaultProcessAuditEventService",
      "DefaultProcessDefinitionService",
      "DefaultProcessDefinitionVersionService",
      "DefaultProcessIncidentService",
      "DefaultProcessInstanceService",
      "DefaultProcessTaskService",
      "DefaultProcessTriggerService",
      "DefaultProductLocalizationService",
      "DefaultProductPublicationService",
      "DefaultProductSearchProjectionService",
      "DefaultProductService",
      "DefaultProductVariantLocalizationService",
      "DefaultProductVariantService",
      "DefaultPromotionBudgetLedgerService",
      "DefaultPromotionRedemptionService",
      "DefaultPromotionService",
      "DefaultPublicationAuditService",
      "DefaultPublicationRequestService",
      "DefaultReturnInspectionService",
      "DefaultReturnReceiptService",
      "DefaultRouterConfigurationService",
      "DefaultSalesChannelService",
      "DefaultSchemaAccessPolicyService",
      "DefaultSchemaConfigurationService",
      "DefaultSearchService",
      "DefaultShipmentService",
      "DefaultShoppingListEntryService",
      "DefaultShoppingListService",
      "DefaultStoreService",
      "DefaultTaxDecisionService",
      "DefaultTaxPolicyService",
      "DefaultTelcoAllowanceService",
      "DefaultTelcoNumberIntentService",
      "DefaultTelcoPlanOfferingService",
      "DefaultTelcoServiceOrderService",
      "DefaultTelcoSubscriptionService",
      "DefaultTokenService",
      "DefaultTrackingEventService",
      "DefaultValidatorService",
      "DefaultWarehouseService",
      "DefaultWarehouseTaskService",
      "DefaultWorkflow2SchemaService",
    ],
  },
  activeModules: {
    groups: [...agoraDomains.frameworkGroups],
    modules: [
      "circa.ewaste",
      "circa.ewaste",
      ...commerceSearchRuntimeModules,
      ...digitalCommerceRuntimeModules,
      ...agoraDomains.sharedModules,
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "kickoffLocal",
      "commerceServer",
    ],
  },
  runtimeRole: { code: "COMMERCE", publication: "OPERATIONAL" },
  runtimeAuthorityContexts: {
    modules: Object.fromEntries(
      commerceAuthorityModules.map((moduleName) => [
        moduleName,
        "commerce.operational",
      ]),
    ),
  },
  apiExposure: {
    categories: {
      serviceRegistry: { enabled: true },
      dataImport: { enabled: true },
      commerceCustomer: { enabled: true },
      commercePublicationIngestion: { enabled: true },
    },
  },
  search: {
    product: { options: { enabled: true, fallback: false, engine: "elastic" } },
    commerceSearchCore: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  product: {
    publication: {
      searchEnrichment: {
        domains: {
          enabled: true,
          contributors: agoraDomains.productSearchContributors,
          missingBehavior: "error",
        },
      },
    },
    discovery: {
      catalogue: {
        enabled: true,
        maximumCandidates: 1000,
        readPageSize: 100,
        dimensions: {
          brands: { paths: ["brand", "localizedAttributes.brand"] },
          categories: { paths: ["categoryCodes"] },
          collections: {
            paths: ["collectionCodes", "localizedAttributes.collection"],
          },
          colors: {
            paths: ["apparel.options.colourCode", "apparel.options.colorCode"],
          },
          sizes: { paths: ["apparel.options.sizeCode"] },
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
      mediaDeliveryBaseUrl: "http://127.0.0.1:4314/nodics/media/v0/content",
    },
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
  cart: {
    customerApi: {
      defaultStoreCode: "agoraMainStore",
      defaultChannelCode: "web",
      defaultLocale: "en",
      defaultJurisdiction: "AE",
      defaultCurrency: "AED",
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["COMMERCE"],
      initializationProfiles: {
        localCommerceFoundation: {
          enabled: true,
          label: "Local Commerce foundation",
          description:
            "Install required operational Commerce core releases for product, cart, pricing, inventory, tax, checkout, fulfillment, payment, and discovery services.",
          completionMessage:
            "The Local Commerce foundation is ready. Commerce runtime can accept governed catalogue and storefront data.",
          steps: [{ dataType: "core" }],
        },
      },
    },
  },
  database: {
    default: { mongodb: { master: { databaseName: "kickoffLocalCommerce" } } },
  },
  stripeProvider: {
    enabled: true,
    maturity: "OFFLINE_CONFORMANCE",
    sandboxOnly: true,
    liveQualified: false,
  },
  servers: {
    waste: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4370,
        httpsHost: "127.0.0.1",
        httpsPort: 4371,
      },
    },
    default: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4350,
        httpsHost: "127.0.0.1",
        httpsPort: 4351,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4350,
        httpsHost: "localhost",
        httpsPort: 4351,
      },
    },
    profile: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
    },
    backoffice: {
      remoteOnly: true,
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4300,
        httpsHost: "127.0.0.1",
        httpsPort: 4301,
      },
    },
    loyalty: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4360,
        httpsHost: "127.0.0.1",
        httpsPort: 4361,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4360,
        httpsHost: "localhost",
        httpsPort: 4361,
      },
    },
    loyaltyServer: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4360,
        httpsHost: "127.0.0.1",
        httpsPort: 4361,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4360,
        httpsHost: "localhost",
        httpsPort: 4361,
      },
    },
  },
};

/** Explicit nSearch projections included in the governed Local reset. */
module.exports.localResetProvider.searchIndexes = [
  {
    moduleName: "discoveryProjection",
    indexName: "discoveryDocumentProjection",
  },
  {
    moduleName: "product",
    indexName: "productLocalized",
  },
  {
    moduleName: "commerceSearchCore",
    indexName: "commerceSearchRuleProjection",
  },
];
