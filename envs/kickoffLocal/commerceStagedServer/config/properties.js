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
/** @module kickoffLocal/commerceStagedServer/config/properties @description Defines isolated local Commerce Staged coordinates and data-release enforcement for governed Product catalog imports. @layer environment-server-config @owner nodics.kickoff */
module.exports = {
  localResetProvider: {
    enabled: true,
    environmentAllowlist: ["kickoffLocal"],
    allowMissingModelServices: true,
    requiredServiceNames: [
      "DefaultProductService",
      "DefaultProductPublicationService",
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
      ...commerceSearchRuntimeModules,
      ...digitalCommerceRuntimeModules,
      ...agoraDomains.sharedModules,
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      ...agoraDomains.projectPacks,
      "kickoffLocal",
      "commerceStagedServer",
    ],
  },
  runtimeRole: { code: "COMMERCE_STAGED", publication: "STAGED" },
  runtimeAuthorityContexts: {
    modules: Object.fromEntries(
      commerceAuthorityModules.map((moduleName) => [
        moduleName,
        "commerce.staged",
      ]),
    ),
  },
  apiExposure: {
    categories: {
      serviceRegistry: { enabled: true },
      dataImport: { enabled: true },
      schemaWorkbench: { enabled: true },
      commerceManagement: { enabled: true },
    },
  },
  search: {
    product: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    commerceSearchCore: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
    discoveryProjection: {
      options: { enabled: true, fallback: false, engine: "elastic" },
    },
  },
  product: {
    marketplaceAuthoring: {
      enabled: true,
      catalogVersion: "circaStaged",
      locales: ["en", "ar"],
    },
    publication: {
      searchEnrichment: {
        domains: {
          enabled: true,
          contributors: agoraDomains.productSearchContributors,
          missingBehavior: "error",
        },
      },
    },
  },
  data: {
    dataReleases: {
      lifecycleMetadataRequired: true,
      destinationEnforced: true,
      environmentClass: "LOCAL",
      allowedDestinationRoles: ["COMMERCE_STAGED"],
      initializationProfiles: {
        localCommerceStagedCatalogFoundation: {
          enabled: true,
          label: "Local Commerce Staged catalog foundation",
          description:
            "Install Staged Commerce sample catalog releases for Agora storefront validation, product search, categories, prices, and inventory previews.",
          completionMessage:
            "The Local Commerce Staged catalog foundation is ready. Review catalog content in Staged before publishing qualified storefront data.",
          steps: [{ dataType: "sample" }],
        },
      },
    },
  },
  database: {
    default: {
      mongodb: { master: { databaseName: "kickoffLocalCommerceStaged" } },
    },
  },
  stripeProvider: {
    enabled: false,
    maturity: "NOT_APPLICABLE_FOR_STAGED_CATALOG",
    sandboxOnly: true,
    liveQualified: false,
  },
  servers: {
    default: {
      endpoint: {
        httpHost: "127.0.0.1",
        httpPort: 4352,
        httpsHost: "127.0.0.1",
        httpsPort: 4353,
      },
      abstractEndpoint: {
        httpHost: "localhost",
        httpPort: 4352,
        httpsHost: "localhost",
        httpsPort: 4353,
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
    commerce: {
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
