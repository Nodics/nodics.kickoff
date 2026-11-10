/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module nodics.kickoff/modules/kickoffCore/config/properties
 * @description Selects Kickoff project data and composition extensions; reusable defaults remain Framework-owned.
 * @layer config
 * @owner kickoffCore
 * @override Later customer layers override actual project selections through normal configuration layering.
 */
module.exports = {
  tooling: {
    acceptance: {
      // Apparel journey and composition-selected catalog fixtures remain customer-owned.
      // Publication evidence has no fallback: nImport release versions are not nPublish receipts.
      commerceJourney: {
        $config: "selected",
        name: "agora",
        field: "domains",
        includes: "apparel",
        value: {
          productCode: "agoraLinenWrapDress",
          variantCode: "agoraLinenWrapDressIvoryS",
          secondaryProductCode: "agoraOxfordShirt",
          secondaryVariantCode: "agoraOxfordShirtIvoryM",
          categoryCode: "agoraWomen",
          storeCode: "agoraApparelStore",
          locale: "en",
          channelCode: "agoraApparelWeb",
          jurisdiction: "AE",
          currency: "USD",
          providerToken: {
            $config: "env",
            name: "NODICS_STOREFRONT_PROVIDER_TOKEN",
            fallback: "tok_test_storefront_4242",
          },
          shippingAddress: {
            line1: "549 Oak St",
            city: "Crystal Lake",
            region: "IL",
            postalCode: "60014",
            country: "US",
          },
          shippingMethod: "STANDARD",
          paymentMethod: "CARD",
        },
        otherwise: {},
      },
      commercePublication: {
        catalogs: {
          $config: "replace",
          value: [
            {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "apparel",
              value: {
                catalogVersion: "agoraApparelStaged",
                storeCode: "agoraApparelStore",
                locale: "en",
                productCodes: [
                  "agoraLinenWrapDress",
                  "agoraSatinMidiDress",
                  "agoraRibbedKnitTop",
                  "agoraCottonPoplinShirtWomen",
                  "agoraLeatherTote",
                  "agoraSilkScarf",
                  "agoraOxfordShirt",
                  "agoraLinenCampShirt",
                  "agoraTailoredChino",
                  "agoraRelaxedTrouser",
                  "agoraCanvasBelt",
                  "agoraWoolCap",
                  "agoraStretchStrapTop",
                  "agoraRamiePocketShirt",
                  "agoraRattanHandleBag",
                  "agoraStripedKnitDress",
                  "agoraBeltWrapDress",
                  "agoraDoubleButtonTrench",
                  "agoraButtonedCottonShirt",
                  "agoraLayeredTankTop",
                  "agoraPleatedKnitDress",
                  "agoraMinimalSlipDress",
                  "agoraCollarKnitCardigan",
                  "agoraSoftShoulderBag",
                  "agoraSummerKnitVest",
                  "agoraTailoredSleevelessTop",
                  "agoraWideLegLinenPant",
                  "agoraTexturedCrossbodyBag",
                  "agoraMinimalBalletFlat",
                  "agoraOpenWeaveCardigan",
                  "agoraRefinedShortSleeveDress",
                  "agoraGoldFrameSunglasses",
                  "agoraSoftRibbedDress",
                  "agoraRelaxedCottonTee",
                  "agoraCompactCrossbody",
                  "agoraSculptedHoopEarrings",
                  "agoraEverydayColumnDress",
                  "agoraSheerRamieShirt",
                  "agoraFineKnitPolo",
                  "agoraNaturalCanvasTote",
                  "agoraLuxeWrapTop",
                  "agoraPearlTrimCardigan",
                  "agoraBiasCutMidiSkirt",
                  "agoraTexturedKnitPullover",
                  "agoraPolishedMiniBag",
                  "agoraCleanLineBlazer",
                  "agoraSoftLinenShort",
                  "agoraClassicDenimShirt",
                  "agoraOvershirtJacket",
                  "agoraSlimCottonTrouser",
                  "agoraRelaxedPoloShirt",
                  "agoraWashedChoreJacket",
                  "agoraEverydayCrewNeck",
                  "agoraUtilityCargoTrouser",
                  "agoraLeatherCardHolder",
                  "agoraSignatureSunglasses",
                  "agoraNeutralShoulderBag",
                  "agoraModernKnitSet",
                  "agoraStylePass5Coupon",
                  "agoraCapsuleEdit10Coupon",
                  "agoraPrivateSale20Coupon",
                ],
                mediaModules: ["agora.apparel"],
                publications: {
                  product: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRODUCT_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  pricing: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRICING_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRICING_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRICING_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PRICING_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  promotion: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_PROMOTION_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  inventory: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_INVENTORY_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  tax: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_TAX_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_TAX_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_TAX_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_TAX_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  media: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_APPAREL_MEDIA_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                },
              },
            },
            {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "electronics",
              value: {
                catalogVersion: "agoraElectronicsStaged",
                storeCode: "agoraElectronicsStore",
                locale: "en",
                productCodes: ["agoraElectronicsNovaPhone"],
                mediaModules: ["agora.electronics"],
                publications: {
                  product: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRODUCT_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  pricing: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PRICING_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  promotion: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_PROMOTION_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  inventory: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_INVENTORY_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  tax: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_TAX_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  media: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_ELECTRONICS_MEDIA_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                },
              },
            },
            {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "telco",
              value: {
                catalogVersion: "agoraTelcoStaged",
                storeCode: "agoraTelcoStore",
                locale: "en",
                productCodes: ["agoraTelcoUnlimitedPostpaid"],
                mediaModules: ["agora.telco"],
                publications: {
                  product: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRODUCT_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  pricing: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRICING_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRICING_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRICING_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PRICING_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  promotion: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_PROMOTION_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  inventory: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_INVENTORY_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  tax: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_TAX_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_TAX_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_TAX_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_TAX_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                  media: {
                    code: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_MEDIA_PUBLICATION_CODE",
                      fallback: "",
                    },
                    rootCode: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_MEDIA_PUBLICATION_ROOT_CODE",
                      fallback: "",
                    },
                    sourceVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_MEDIA_PUBLICATION_SOURCE_VERSION",
                      fallback: "",
                    },
                    targetVersion: {
                      $config: "env",
                      name: "NODICS_AGORA_TELCO_MEDIA_PUBLICATION_TARGET_VERSION",
                      fallback: "",
                    },
                  },
                },
              },
            },
          ],
        },
      },
      commerceLive: {
        releaseModules: {
          $config: "replace",
          value: ["agora.apparel", "agora.electronics", "agora.telco"],
        },
      },
      editorialLive: {
        siteCode: "nexusCorporateSite",
        contributionCode: "editorial:editorialWorkflows",
      },
      localBootstrap: {
        publicOriginKey: "nexus",
        platformInitializationProfile: "localPlatformFoundation",
        locationInitializationProfile: "localLocationFoundation",
        verifyDefaultLocationMap: true,
        requiredCapabilities: {
          $config: "replace",
          value: [
            "nodics.process",
            "nodics.communication",
            "nodics.location",
            "nodics.waste",
            "nodics.loyalty",
            "nodics.commerce",
            "nodics.discovery",
          ],
        },
        applicationBundles: {
          $config: "replace",
          value: [
            {
              profileCode: "nexus",
              deliveryProbe: { site: "nexusCorporateSite", path: "/" },
            },
            {
              profileCode: "circa",
              deliveryProbe: { site: "circaSite", path: "/" },
            },
          ],
        },
        applicationUpdates: {
          $config: "replace",
          value: [],
        },
        rollbackDocumentationProfiles: {
          $config: "replace",
          value: ["frameworkdocs", "axisdocs"],
        },
        journeyCommands: {
          $config: "replace",
          value: [
            {
              command: "acceptance:agora-commerce-data",
              args: ["--execute-install"],
            },
            {
              command: "acceptance:agora-commerce-publication",
              args: ["--execute", "--approve-publications"],
            },
          ],
        },
        documentationPackCodes: {
          $config: "replace",
          value: [
            "nodicsDocumentation",
            "axisDocumentation",
            "kickoffDocumentation",
          ],
        },
        documentationPacks: {
          kickoffDocumentation: {
            code: "kickoffDocumentation",
            profileCode: "kickoffdocs",
            minimumRoutes: 4,
            navigationComponent: "kickoffDocumentationNavigation",
            site: "kickoffDocumentationSite",
            path: "/docs/nodics-kickoff",
          },
        },
      },
      guidedInitialization: {
        publicationProfiles: {
          $config: "replace",
          value: [
            "nexus",
            "circa",
            "agoraapparel",
            "agoraelectronics",
            "agoratelco",
          ],
        },
      },
    },
  },
  data: {
    contentPacks: {
      packs: {
        kickoffDocumentation: {
          source: {
            manifestSection: "documentation",
          },
          presentation: {
            title: "Nodics Kickoff documentation",
          },
        },
      },
    },

  },
  activeModules: {
    compositions: {
      agora: {
        environmentVariable: "NODICS_AGORA_DOMAINS",
        selection: "all",
        domains: [
          {
            code: "apparel",
            frameworkGroup: "apparel",
            projectPack: "agora.apparel",
            publication: {
              storeCode: "agoraApparelStore",
              catalogVersion: "agoraApparelStaged",
              releaseCode: "agoraApparelCommerceCatalog",
              recordPrefix: "agoraApparel",
            },
          },
          {
            code: "electronics",
            frameworkGroup: "electronics",
            projectPack: "agora.electronics",
            publication: {
              storeCode: "agoraElectronicsStore",
              catalogVersion: "agoraElectronicsStaged",
              releaseCode: "agoraElectronicsCommerceCatalog",
              recordPrefix: "agoraElectronics",
            },
          },
          {
            code: "telco",
            frameworkGroup: "telco",
            projectPack: "agora.telco",
            publication: {
              storeCode: "agoraTelcoStore",
              catalogVersion: "agoraTelcoStaged",
              releaseCode: "agoraTelcoCommerceCatalog",
              recordPrefix: "agoraTelco",
            },
          },
        ],
        sharedModules: [
          {
            module: "domainCommerceCore",
            minSelectedDomains: 2,
          },
        ],
        emptySelections: ["none", "commerce"],
      },
    },
  },
  localResetProvider: {
    // Required services are deployment completeness assertions. Explicit services
    // below are residual models outside selected owner inventories, not defaults.
    // Preserve this exact destructive scope; discovery must never expand it.
    profiles: {
      PLATFORM: {
        modules: {
          backoffice: true,
          import: true,
          localizationCore: true,
          profile: true,
          search: true,
          system: true,
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultEmsFailedMessagesService",
            "DefaultWorkflow2SchemaService",
          ],
        },
        searchIndexes: [
          {
            moduleName: "discoveryProjection",
            indexName: "discoveryDocumentProjection",
          },
        ],
      },
      WCMS_STAGED: {
        requiredServiceNames: [
          "DefaultCmsDocumentationAccessPolicyService",
          "DefaultCmsDocumentationDashboardService",
          "DefaultCmsDocumentationNavigationService",
          "DefaultCmsDocumentationNodeService",
          "DefaultCmsDocumentationPageService",
          "DefaultCmsDocumentationProductService",
          "DefaultCmsDocumentationPublicationStateService",
          "DefaultCmsDocumentationSearchMetadataService",
        ],
        modules: {
          cms: true,
          editorial: true,
          import: true,
          media: true,
          publish: true,
          search: true,
          system: true,
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultEmsFailedMessagesService",
            "DefaultWorkflow2SchemaService",
          ],
        },
        searchIndexes: [
          {
            moduleName: "discoveryProjection",
            indexName: "discoveryDocumentProjection",
          },
        ],
      },
      WCMS_ONLINE: {
        requiredServiceNames: [
          "DefaultCmsDocumentationAccessPolicyService",
          "DefaultCmsDocumentationDashboardService",
          "DefaultCmsDocumentationNavigationService",
          "DefaultCmsDocumentationNodeService",
          "DefaultCmsDocumentationPageService",
          "DefaultCmsDocumentationProductService",
          "DefaultCmsDocumentationPublicationStateService",
          "DefaultCmsDocumentationSearchMetadataService",
        ],
        modules: {
          cms: true,
          editorial: true,
          import: true,
          media: true,
          publish: true,
          search: true,
          system: true,
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultEmsFailedMessagesService",
            "DefaultWorkflow2SchemaService",
          ],
        },
        searchIndexes: [
          {
            moduleName: "discoveryProjection",
            indexName: "discoveryDocumentProjection",
          },
        ],
      },
      PROCESS: {
        modules: {
          cronjob: true,
          import: true,
          system: true,
          token: true,
          validator: true,
          workflow: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultEmsFailedMessagesService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultSearchService",
            "DefaultWorkflow2SchemaService",
          ],
        },
      },
      ENGAGEMENT: {
        requiredServiceNames: [
          "DefaultContactRequestService",
          "DefaultCommsIntentService",
        ],
        modules: {
          commsSchema: true,
          contactSubmission: true,
          customerFeedback: true,
          customerReview: true,
          engagementCore: true,
          import: true,
          publish: true,
          system: true,
          testimonial: true,
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultCronJobLogService",
            "DefaultCronJobService",
            "DefaultEmsFailedMessagesService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultPipelineService",
            "DefaultProcessAuditEventService",
            "DefaultProcessDefinitionService",
            "DefaultProcessDefinitionVersionService",
            "DefaultProcessIncidentService",
            "DefaultProcessInstanceService",
            "DefaultProcessTaskService",
            "DefaultProcessTriggerService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultSearchService",
            "DefaultWorkflow2SchemaService",
          ],
        },
      },
      COMMERCE: {
        requiredServiceNames: [
          "DefaultCommerceOrderService",
          "DefaultProductService",
          "DefaultPaymentTransactionService",
          "DefaultCartService",
        ],
        modules: {
          apparelProduct: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "apparel",
            value: true,
            otherwise: false,
          },
          bidding: true,
          cart: true,
          checkoutCore: true,
          commerceSearchCore: true,
          digitalCore: true,
          electronicsProduct: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "electronics",
            value: true,
            otherwise: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "telco",
              value: true,
              otherwise: false,
            },
          },
          fulfillmentCore: true,
          import: true,
          inventory: true,
          order: true,
          paymentCore: true,
          pricing: true,
          product: true,
          promotion: true,
          search: true,
          shoppingList: true,
          store: true,
          system: true,
          tax: true,
          telcoCatalog: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: true,
            otherwise: false,
          },
          telcoProvisioning: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: true,
            otherwise: false,
          },
          telcoSubscription: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: true,
            otherwise: false,
          },
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultCronJobLogService",
            "DefaultCronJobService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultProcessAuditEventService",
            "DefaultProcessDefinitionService",
            "DefaultProcessDefinitionVersionService",
            "DefaultProcessIncidentService",
            "DefaultProcessInstanceService",
            "DefaultProcessTaskService",
            "DefaultProcessTriggerService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService",
          ],
        },
        searchIndexes: [
          {
            moduleName: "product",
            indexName: "productLocalized",
          },
          {
            moduleName: "product",
            indexName: "productSearchProjection",
          },
          {
            moduleName: "commerceSearchCore",
            indexName: "commerceSearchRuleProjection",
          },
        ],
      },
      COMMERCE_STAGED: {
        requiredServiceNames: [
          "DefaultProductService",
          "DefaultProductPublicationService",
        ],
        modules: {
          apparelProduct: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "apparel",
            value: true,
            otherwise: false,
          },
          bidding: true,
          cart: true,
          checkoutCore: true,
          commerceSearchCore: true,
          digitalCore: true,
          electronicsProduct: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "electronics",
            value: true,
            otherwise: {
              $config: "selected",
              name: "agora",
              field: "domains",
              includes: "telco",
              value: true,
              otherwise: false,
            },
          },
          fulfillmentCore: true,
          import: true,
          inventory: true,
          order: true,
          paymentCore: true,
          pricing: true,
          product: true,
          promotion: true,
          search: true,
          shoppingList: true,
          store: true,
          system: true,
          tax: true,
          telcoCatalog: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: true,
            otherwise: false,
          },
          telcoProvisioning: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: true,
            otherwise: false,
          },
          telcoSubscription: {
            $config: "selected",
            name: "agora",
            field: "domains",
            includes: "telco",
            value: true,
            otherwise: false,
          },
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService",
          ],
        },
        searchIndexes: [
          {
            moduleName: "product",
            indexName: "productLocalized",
          },
          {
            moduleName: "product",
            indexName: "productSearchProjection",
          },
          {
            moduleName: "commerceSearchCore",
            indexName: "commerceSearchRuleProjection",
          },
        ],
      },
      LOYALTY: {
        requiredServiceNames: [
          "DefaultLoyaltyWalletService",
          "DefaultRewardLedgerEntryService",
        ],
        modules: {
          import: true,
          system: true,
          token: true,
          validator: true,
          loyaltyCore: true,
          loyaltyProgram: true,
          loyaltyRewardType: true,
          loyaltyWallet: true,
          loyaltyLedger: true,
          loyaltyRedemption: true,
          loyaltyReservation: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultSearchService",
          ],
        },
      },
      WASTE: {
        requiredServiceNames: [
          "DefaultWasteSubmissionService",
          "DefaultWasteAssetService",
          "DefaultWasteImpactResultService",
          "DefaultWasteRewardAssessmentService",
        ],
        modules: {
          import: true,
          search: true,
          system: true,
          token: true,
          validator: true,
          wasteCollection: true,
          wasteCompliance: true,
          wasteCore: true,
          wasteImpact: true,
          wasteReward: true,
          wasteMaterial: true,
          wasteMovement: true,
          wasteReceipt: true,
          wasteSubmission: true,
          wasteVerification: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultCatalogService",
            "DefaultClassConfigurationService",
            "DefaultConfigurationActivationLogService",
            "DefaultConfigurationActivationRequestService",
            "DefaultEmsFailedMessagesService",
            "DefaultPipelineService",
            "DefaultPublicationAuditService",
            "DefaultPublicationRequestService",
            "DefaultRouterConfigurationService",
            "DefaultSchemaAccessPolicyService",
            "DefaultSchemaConfigurationService",
            "DefaultWorkflow2SchemaService",
          ],
        },
        searchIndexes: [
          {
            moduleName: "discoveryProjection",
            indexName: "discoveryDocumentProjection",
          },
        ],
      },
      LOCATION: {
        requiredServiceNames: [
          "DefaultLocationMapProviderConfigurationService",
        ],
        modules: {
          import: true,
          locationCore: true,
          locationDraft: true,
          locationMap: true,
          locationProjection: true,
          locationSearch: true,
          locationType: true,
          system: true,
          token: true,
          validator: true,
        },
        serviceNames: {
          $config: "replace",
          value: [
            "DefaultLocationApprovalService",
            "DefaultEmsFailedMessagesService",
            "DefaultIndexService",
            "DefaultIndexerLogService",
            "DefaultIndexerService",
            "DefaultSearchService",
            "DefaultWorkflow2SchemaService",
          ],
        },
      },
    },
  },
  backofficeApplicationInitialization: {
    target: {
      connectionName: "wcmsStaged",
    },
    profiles: {
      frameworkdocs: {
        enabled: true,
      },
      axisdocs: {
        enabled: true,
      },
      kickoffdocs: {
        code: "kickoffdocs",
        reader: {
          route: "/docs/nodics-kickoff",
          guide: "project",
          projectId: "kickoff",
          projectLabel: "Kickoff",
          channelReferences: [
            { channelId: "circa", channelLabel: "Circa", sourceId: "circadocs" },
            { channelId: "agora", channelLabel: "Agora", sourceId: "docs-apparelproduct" },
            { channelId: "agora", channelLabel: "Agora", sourceId: "docs-electronicsproduct" },
            { channelId: "agora", channelLabel: "Agora", sourceId: "docs-telcosubscription" },
            { channelId: "nexus", channelLabel: "Nexus", sourceId: "docs-nexus-web" },
          ],
        },
        type: "DOCUMENTATION_BUNDLE",
        owner: "nodics.kickoff",
        applicationCode: "axis",
        siteCode: "kickoffDocumentationSite",
        baselineCode: "kickoffdocs",
        contentPackCode: "kickoffDocumentation",
        presentation: {
          title: "Nodics Kickoff Documentation",
          kind: "DOCUMENTATION",
          category: "documentation",
          order: 500,
          summary:
            "Reference-project documentation content pack and Online delivery profile.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
          ],
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
      },
    },
  },
  backofficeFunctionalModuleActivationData: {
    modules: {
      "nodics.waste": {
        dataPackages: { $config: "keyed", key: "code", entries: [{"code":"wasteCore:enterpriseRoles","targetServer":"platformServer"},{"code":"wasteCore:businessAccessRoles","targetServer":"platformServer"}] },
      },
      "nodics.engagement": {
        dataPackages: { $config: "keyed", key: "code", entries: [{"code":"engagementCore:accessGroups","targetServer":"platformServer"}] },
      },
      "nodics.wcms": {
        dataPackages: {
          $config: "keyed",
          key: "code",
          entries: [
            ...[{"code":"cms:accessGroups","targetServer":"platformServer"},{"code":"cms:enterpriseRoles","targetServer":"platformServer"},{"code":"cms:businessAccessRoles","targetServer":"platformServer"}],
            { code: "editorial:editorialWorkflows", targetModule: "workflow", targetServer: "processServer" },
          ],
        },
      },
      "nodics.commerce": {
        dataPackages: {
          $config: "keyed",
          key: "code",
          entries: [
            ...[{"code":"store:accessGroups","targetServer":"platformServer"},{"code":"product:enterpriseRoles","targetServer":"platformServer"},{"code":"product:businessAccessRoles","targetServer":"platformServer"},{"code":"promotion:enterpriseRoles","targetServer":"platformServer"},{"code":"promotion:businessAccessRoles","targetServer":"platformServer"},{"code":"order:enterpriseRoles","targetServer":"platformServer"},{"code":"order:businessAccessRoles","targetServer":"platformServer"},{"code":"digitalCore:enterpriseRoles","targetServer":"platformServer"}],
            {
              code: "pricing:administrativeAuthoringPermission",
              targetModule: "profile",
              targetServer: "platformServer",
            },
            {
              code: "pricing:administrativePublicationPermission",
              targetModule: "profile",
              targetServer: "platformServer",
            },
          ],
        },
      },
      "nodics.rulesEngine": {
        dataPackages: {
          $config: "replace",
          value: [
            {
              code: "rulesApi:rulesPolicyApproval",
              targetModule: "workflow",
              targetServer: "processServer",
            },
          ],
        },
      },

    },
  },
};
