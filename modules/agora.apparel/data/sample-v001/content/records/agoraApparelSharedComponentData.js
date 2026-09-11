/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module modules/agora.apparel/data/sample-v001/content/records/agoraApparelSharedComponentData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agora.apparel */

/** @description Agora storefront CMS components for the first discovery slice. */
module.exports = {
  record0: {
    code: "agoraApparelGlobalHeader",
    typeCode: "agoraHeaderType",
    renderer: "agora.header",
    accessMode: "PUBLIC",
    active: true,
    properties: {
      logoText: "NODICS",
      subtitle: "AGORA",
      rootCollectionCode: "agoraWomen",
      navigationCode: "agoraMainNavigation",
      searchPlaceholder: "Search dresses, bags, shirts...",
      searchEnabled: true,
      cartPreviewEnabled: true,
      accountPreviewEnabled: true,
      wishlistPreviewEnabled: true,
      storefrontLabels: {
        quickAdd: "Quick Add",
        quickView: "Quick view",
        addToCart: "Add to cart",
        buyNow: "Buy it now",
        wishlist: "Wishlist",
        wishlisted: "Wishlisted",
        addToWishlist: "Add to wishlist",
        removeFromWishlist: "Remove from wishlist",
        compare: "Compare",
        comparing: "Comparing",
        removeFromCompare: "Remove from compare",
        colors: "Colors",
        size: "Size",
        quantity: "Quantity",
        availableColors: "Available colors",
        availableSizes: "Available sizes",
        backToListing: "Back to listing",
        closeQuickView: "Close",
        color: "Color",
        description: "Description",
        selectColorPrefix: "Select",
        closeQuickAdd: "Close quick add",
        decreaseQuantity: "Decrease quantity",
        increaseQuantity: "Increase quantity",
        viewDetailsPrefix: "View details for",
        quickViewTitle: "Quick View",
        recommendationsEyebrow: "Curated recommendations",
        recommendationsHeading: "Related pieces",
        recommendationsSummary:
          "Recommendations are resolved from Commerce product relationships.",
        reviews: "Reviews",
        shippingReturns: "Shipping & returns",
        shippingReturnsText:
          "Free shipping threshold and 14-day returns are resolved from backend policy.",
        viewFullDetails: "View full details",
        featuredProductsAriaLabel: "Featured products",
        bestSellingProductsAriaLabel: "Best selling products",
      },
      utilityLinks: [
        { label: "+1 315-666-6688", path: "tel:+13156666688" },
        { label: "support@nodics.com", path: "mailto:support@nodics.com" },
        { label: "Our Store", collectionCode: "agoraWomen" },
      ],
      preferences: [
        { label: "USD", path: "#currency" },
        { label: "English", path: "#language" },
      ],
      navigationItems: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Shop",
          path: "/shop",
          dropdown: true,
        },
        {
          label: "New in",
          collectionCode: "agoraNewArrivals",
          dropdown: true,
        },
        {
          label: "Collections",
          path: "/collections",
          dropdown: true,
        },
        {
          label: "Sale",
          collectionCode: "agoraPromotion",
          dropdown: true,
        },
      ],
      megaMenus: [
        {
          code: "home",
          label: "Home",
          path: "/",
          groups: [],
          featureTiles: [],
          promoStripe: [],
        },
        {
          code: "shop",
          label: "Shop",
          path: "/shop",
          eyebrow: "Product discovery",
          summary:
            "Find your next everyday favourite. Explore clothing, bags and finishing touches for every occasion.",
          groups: [
            {
              title: "Women clothing",
              links: [
                {
                  label: "All women",
                  path: "/shop?category=agoraWomen",
                },
                {
                  label: "Tops & blouses",
                  collectionCode: "agoraWomenTops",
                  summary: "Tanks, tees, shirts and knit layers",
                },
                {
                  label: "Dresses",
                  collectionCode: "agoraDresses",
                  summary: "Soft shapes and polished details",
                },
                {
                  label: "Outerwear",
                  path: "/shop?category=agoraOuterwear",
                  summary: "Trenches, blazers and lightweight layers",
                },
                {
                  label: "Pants & skirts",
                  path: "/shop?category=agoraBottoms",
                  summary: "Tailored and relaxed bottoms",
                },
              ],
            },
            {
              title: "Men clothing",
              links: [
                {
                  label: "All men",
                  path: "/shop?category=agoraMen",
                },
                {
                  label: "Men shirts",
                  path: "/shop?category=agoraMenShirts",
                  summary: "Oxford, linen and poplin shirting",
                },
                {
                  label: "Men trousers",
                  path: "/shop?category=agoraMenTrousers",
                  summary: "Chinos and relaxed trousers",
                },
                {
                  label: "Layering pieces",
                  path: "/shop?category=agoraMenLayers",
                  summary: "Comfortable everyday fits",
                },
              ],
            },
            {
              title: "Bags",
              links: [
                {
                  label: "All bags",
                  collectionCode: "agoraWomenBags",
                  summary: "Totes, shoulder bags and crossbody styles",
                },
                {
                  label: "Shoulder bags",
                  path: "/shop?category=agoraWomenBags&collection=agoraShoulderBags",
                  summary: "Clean everyday carry",
                },
                {
                  label: "Crossbody bags",
                  path: "/shop?category=agoraWomenBags&collection=agoraCrossbodyBags",
                  summary: "Compact and textured",
                },
              ],
            },
            {
              title: "Accessories",
              links: [
                {
                  label: "All accessories",
                  collectionCode: "agoraWomenAccessories",
                  summary: "Sunglasses, scarves, hats and belts",
                },
                {
                  label: "Shoes",
                  collectionCode: "agoraShoes",
                  summary: "Minimal flats and refined footwear",
                },
                {
                  label: "Sunglasses",
                  path: "/shop?category=agoraSunglasses",
                  summary: "Gold-frame and statement shapes",
                },
              ],
            },
          ],
          featureTiles: [
            {
              title: "Elegant everyday wardrobe",
              summary:
                "Clothing edits surfaced from category and collection metadata.",
              mediaCode: "agora-owned-collection-clothing",
              action: {
                label: "Shop clothing",
                collectionCode: "agoraWomenTops",
              },
              badge: "Category",
            },
            {
              title: "Dresses edit",
              summary: "Refined shapes ready for promoted merchandising.",
              mediaCode: "agora-owned-collection-dresses",
              action: {
                label: "Shop dresses",
                collectionCode: "agoraDresses",
              },
            },
          ],
          promoStripe: [
            {
              label: "Shop all products",
              path: "/shop",
              eyebrow: "Explore",
              text: "Discover the full collection",
            },
            {
              label: "Best sellers",
              collectionCode: "agoraBestSelling",
              eyebrow: "Favourites",
              text: "Pieces to inspire your next look",
            },
            {
              label: "New arrivals",
              collectionCode: "agoraNewArrivals",
              eyebrow: "Just in",
              text: "Meet the latest additions",
            },
          ],
        },
        {
          code: "new-in",
          label: "New in",
          collectionCode: "agoraNewArrivals",
          eyebrow: "Fresh arrivals",
          summary:
            "New pieces for the current apparel drop, resolved through the Commerce product index.",
          groups: [
            {
              title: "Fresh edits",
              links: [
                {
                  label: "All new arrivals",
                  collectionCode: "agoraNewArrivals",
                  summary: "Newest products in one listing",
                  badge: "New",
                },
                {
                  label: "New clothing",
                  path: "/shop?category=agoraWomenTops&collection=agoraNewArrivals",
                  summary: "Fresh tops, shirts and dresses",
                },
                {
                  label: "New bags",
                  path: "/shop?category=agoraWomenBags&collection=agoraNewArrivals",
                  summary: "New structured carry pieces",
                },
              ],
            },
            {
              title: "Seasonal direction",
              links: [
                {
                  label: "Summer neutrals",
                  collectionCode: "agoraWomen",
                  summary: "Light tones and breathable shapes",
                },
                {
                  label: "Layered essentials",
                  collectionCode: "agoraWomenTops",
                  summary: "Tanks, tees and overshirts",
                },
                {
                  label: "Modern occasion",
                  path: "/shop?category=agoraDresses",
                  summary: "Dresses and refined styling",
                },
              ],
            },
          ],
          featureTiles: [
            {
              title: "Fresh styles just in",
              summary: "The newest apparel products for the storefront.",
              mediaCode: "agora-owned-collection-new-in",
              action: {
                label: "Shop new in",
                collectionCode: "agoraNewArrivals",
              },
              badge: "New",
            },
            {
              title: "Light layers",
              summary: "Easy capsule pieces for everyday wardrobes.",
              mediaCode: "agora-owned-gallery-2",
              action: {
                label: "Shop clothing",
                collectionCode: "agoraWomenTops",
              },
            },
          ],
          promoStripe: [
            {
              label: "Arrival spotlight",
              collectionCode: "agoraNewArrivals",
              eyebrow: "Drop",
              text: "Business users can reorder this tile any time",
              badge: "CMS",
            },
            {
              label: "Top picks",
              collectionCode: "agoraWomen",
              eyebrow: "Editorial",
              text: "Use curated product rails to project priority items",
            },
            {
              label: "Back in stock",
              path: "/shop?availability=available",
              eyebrow: "Inventory",
              text: "Availability stays Commerce-owned",
            },
          ],
        },
        {
          code: "collections",
          label: "Collections",
          path: "/collections",
          eyebrow: "Curated paths",
          summary:
            "Discover curated edits and the brands behind your favourite pieces.",
          groups: [
            {
              title: "Collection index",
              links: [
                {
                  label: "All collections",
                  path: "/collections",
                  summary: "Browse every curated path",
                },
                {
                  label: "New in",
                  collectionCode: "agoraNewArrivals",
                  summary: "Fresh styles just in",
                },
                {
                  label: "Sale",
                  collectionCode: "agoraPromotion",
                  summary: "Capsule offers and edits",
                  badge: "Offer",
                },
                {
                  label: "Dresses",
                  collectionCode: "agoraDresses",
                  summary: "Soft neutrals and refined shapes",
                },
              ],
            },
            {
              title: "Featured brands",
              links: [
                {
                  label: "Agora Atelier",
                  path: "/shop?brand=agoraAtelier",
                  summary: "Minimal tailoring and refined neutrals",
                  badge: "Featured",
                },
                {
                  label: "Nodics Studio",
                  path: "/shop?brand=nodicsStudio",
                  summary: "Everyday apparel essentials",
                },
                {
                  label: "Commerce Edit",
                  path: "/shop?brand=commerceEdit",
                  summary: "Accessories and seasonal pieces",
                },
              ],
            },
            {
              title: "Brand-led edits",
              links: [
                {
                  label: "Premium neutrals",
                  path: "/shop?brand=agoraAtelier&collection=agoraWomen",
                  summary: "Editorial brand mood",
                },
                {
                  label: "Modern workwear",
                  path: "/shop?brand=nodicsStudio&category=agoraWomenTops",
                  summary: "Polished everyday layers",
                },
                {
                  label: "Accessory labels",
                  path: "/shop?brand=commerceEdit&category=agoraAccessories",
                  summary: "Finishing details",
                },
              ],
            },
          ],
          featureTiles: [
            {
              title: "Brand spotlight",
              summary: "Use CMS to project brand stories in the header.",
              mediaCode: "agora-owned-gallery-3",
              action: {
                label: "Shop Agora Atelier",
                path: "/shop?brand=agoraAtelier",
              },
              badge: "Brand",
            },
            {
              title: "Editorial stripe",
              summary:
                "Pair brand links with richer imagery and campaign badges.",
              mediaCode: "agora-owned-promo-texture-edit",
              action: {
                label: "Shop brand edits",
                path: "/shop?brand=nodicsStudio",
              },
            },
          ],
          promoStripe: [
            {
              label: "All collections",
              path: "/collections",
              eyebrow: "Discover",
              text: "Find an edit that feels like you",
            },
            {
              label: "New arrivals",
              collectionCode: "agoraNewArrivals",
              eyebrow: "Fresh",
              text: "The latest wardrobe additions",
            },
            {
              label: "Sale edits",
              collectionCode: "agoraPromotion",
              eyebrow: "Offers",
              text: "Explore current offers",
            },
          ],
        },
        {
          code: "sale",
          label: "Sale",
          collectionCode: "agoraPromotion",
          eyebrow: "Limited offers",
          summary:
            "Explore sale edits and digital coupon codes for your next Agora purchase.",
          groups: [
            {
              title: "Sale paths",
              links: [
                {
                  label: "All sale",
                  collectionCode: "agoraPromotion",
                  summary: "All active promoted products",
                  badge: "Sale",
                },
                {
                  label: "Sale clothing",
                  path: "/shop?category=agoraWomenTops&collection=agoraPromotion",
                  summary: "Tops, dresses and layers",
                },
                {
                  label: "Sale bags",
                  path: "/shop?category=agoraWomenBags&collection=agoraPromotion",
                  summary: "Structured carry edits",
                },
              ],
            },
            {
              title: "Digital coupons",
              links: [
                {
                  label: "Browse digital coupons",
                  collectionCode: "agoraDigitalCoupons",
                  summary: "Shop coupon codes for future orders",
                },
                {
                  label: "Style Pass 5%",
                  productCode: "agoraStylePass5Coupon",
                  summary: "Future-use Agora Apparel discount code",
                  badge: "5%",
                },
                {
                  label: "Capsule Edit 10%",
                  productCode: "agoraCapsuleEdit10Coupon",
                  summary: "Higher-value campaign coupon code",
                  badge: "10%",
                },
                {
                  label: "Private Sale 20%",
                  productCode: "agoraPrivateSale20Coupon",
                  summary: "Limited coupon-code inventory",
                  badge: "20%",
                },
              ],
            },
            {
              title: "Your coupon wallet",
              links: [
                {
                  label: "My coupon wallet",
                  path: "/coupons",
                  summary: "Reveal purchased codes securely",
                },
                {
                  label: "Use a coupon at checkout",
                  path: "/checkout",
                  summary: "Apply an owned coupon code to another cart",
                },
              ],
            },
          ],
          featureTiles: [
            {
              title: "Special offer edit",
              summary: "Promotional product paths with rich visual support.",
              mediaCode: "agora-owned-promo-texture-edit",
              action: {
                label: "Shop sale",
                collectionCode: "agoraPromotion",
              },
              badge: "Offer",
            },
            {
              title: "Capsule markdowns",
              summary: "Business can update offer labels and images any time.",
              mediaCode: "agora-owned-promo-crossbody",
              action: {
                label: "Explore offers",
                collectionCode: "agoraPromotion",
              },
            },
          ],
          promoStripe: [
            {
              label: "Shop all sale",
              collectionCode: "agoraPromotion",
              eyebrow: "Sale",
              text: "Discover current offers",
            },
            {
              label: "Digital coupons",
              collectionCode: "agoraDigitalCoupons",
              eyebrow: "Coupons",
              text: "Choose a code for a future purchase",
            },
            {
              label: "My coupon wallet",
              path: "/coupons",
              eyebrow: "Your account",
              text: "Find the codes you own",
            },
          ],
        },
      ],
      copyright: "© 2026 Nodics. All rights reserved.",
      brandLabel: "Nodics Agora",
      legalLinks: ["Privacy", "Terms", "Cookies"],
    },
  },
  record40: {
    code: "agoraOrderLifecyclePanel",
    typeCode: "agoraOrderLifecycleType",
    renderer: "agora.orderLifecycle",
    accessMode: "CUSTOMER",
    active: true,
    properties: {
      resolverKey: "commerce.order.lifecycle.customer",
      requestTypes: [
        "CANCELLATION",
        "RETURN",
        "REFUND",
        "EXCHANGE",
        "REPLACEMENT",
        "APPEAL",
      ],
      reasonSelectionRequired: true,
      itemQuantitySelectionRequired: true,
      returnMethods: ["PICKUP", "DROP_OFF", "STORE_RETURN"],
      refundMethods: ["ORIGINAL_PAYMENT", "STORE_CREDIT", "MANUAL_REVIEW"],
      showRma: true,
      showRefundPreview: true,
      showReconciliationRequired: true,
      replacementSelectionSupported: true,
      appealSupportedByPolicy: true,
      customerMilestones: [
        {
          title: "Cancellation before fulfillment release",
          owner: "Order + Inventory",
          visibleEvidence: [
            "eligibility preview",
            "requested quantity",
            "reservation release status",
          ],
        },
        {
          title: "Return logistics and receipt",
          owner: "Fulfillment",
          visibleEvidence: [
            "return method",
            "RMA code",
            "shipment or store-return tracking",
          ],
        },
        {
          title: "Inspection and disposition",
          owner: "Fulfillment + Inventory",
          visibleEvidence: [
            "inspection required",
            "disposition result",
            "replacement eligibility",
          ],
        },
        {
          title: "Refund calculation and reconciliation",
          owner: "Payment",
          visibleEvidence: [
            "refund preview",
            "refund method",
            "reconciliation-required status",
          ],
        },
        {
          title: "Appeal and delayed-resolution review",
          owner: "Order + Process",
          visibleEvidence: [
            "appeal reference",
            "appeal reason",
            "SLA/review state",
          ],
        },
      ],
      automationGates: [
        "Replacement stock reservation",
        "Exchange shipment creation",
        "Inspection and disposition integration",
        "Appeal SLA workflow",
        "Delayed-refund reconciliation automation",
      ],
      operatorRunbooks: [
        {
          title: "Exchange replacement reservation",
          owner: "Inventory + Fulfillment",
          customerVisibleState: "Replacement selection received",
          backofficeAction:
            "Reserve replacement stock and create outbound exchange shipment",
        },
        {
          title: "Return inspection disposition",
          owner: "Fulfillment + Inventory",
          customerVisibleState: "Return received for inspection",
          backofficeAction:
            "Record inspection result, disposition and restock/quarantine decision",
        },
        {
          title: "Delayed refund reconciliation",
          owner: "Payment + Order",
          customerVisibleState: "Refund requires operator review",
          backofficeAction:
            "Recalculate refund, reconcile provider evidence and publish safe customer status",
        },
        {
          title: "Appeal SLA review",
          owner: "Process + Order",
          customerVisibleState: "Appeal submitted",
          backofficeAction:
            "Start SLA timer, assign reviewer and capture approve/reject evidence",
        },
      ],
    },
  },
  record41: {
    code: "agoraAccountCenter",
    typeCode: "agoraRichTextType",
    renderer: "agora.accountCenter",
    accessMode: "CUSTOMER",
    active: true,
    properties: {
      heading: "Account center",
      resolverKeys: [
        "profile.customer.self",
        "profile.customer.addressBook",
        "commerce.order.customer.history",
      ],
      capabilities: [
        "Customer profile and session summary",
        "Address book handoff to Profile APIs",
        "Order history and lifecycle self-service",
        "Wishlist and compare synchronization",
      ],
      operationGroups: [
        {
          title: "Profile and identity",
          resolverKeys: ["profile.customer.self"],
          actions: [
            "view profile summary",
            "edit profile handoff",
            "session refresh",
          ],
          status: "BACKEND_HANDOFF",
        },
        {
          title: "Address book",
          resolverKeys: ["profile.customer.addressBook"],
          actions: [
            "list addresses",
            "create/update address handoff",
            "select checkout address",
          ],
          status: "BACKEND_HANDOFF",
        },
        {
          title: "Order self-service",
          resolverKeys: [
            "commerce.order.customer.history",
            "commerce.order.lifecycle.customer",
          ],
          actions: [
            "view order history",
            "preview lifecycle eligibility",
            "submit lifecycle request",
          ],
          status: "CUSTOMER_VISIBLE",
        },
        {
          title: "Operator-only overrides",
          resolverKeys: [
            "commerce.order.operator.lifecycle",
            "payment.refund.reconciliation",
          ],
          actions: [
            "override refund reconciliation",
            "approve appeal",
            "force disposition correction",
          ],
          status: "BACKOFFICE_ONLY",
        },
      ],
    },
  },
  record42: {
    code: "agoraProductionGateSummary",
    typeCode: "agoraRichTextType",
    renderer: "agora.productionGateSummary",
    accessMode: "PUBLIC",
    active: true,
    properties: {
      heading: "Production release gates",
      gates: [
        {
          code: "MEDIA_RIGHTS",
          owner: "nMedia + agora.apparel",
          status: "RELEASE_GATE",
        },
        {
          code: "PROMOTION_BUILDER_DEPTH",
          owner: "Promotion + Axis",
          status: "LOCAL_END_TO_END_COMPLETE",
        },
        {
          code: "REVERSE_LIFECYCLE_AUTOMATION",
          owner: "Order + Fulfillment + Payment + Process",
          status: "LOCAL_RUNTIME_QUALIFIED",
        },
        {
          code: "ACCOUNT_SELF_SERVICE",
          owner: "Profile + Order + Agora",
          status: "LOCAL_HARDENED",
        },
        {
          code: "TEST_FOLDER_STRUCTURE",
          owner: "Agora + Commerce + Axis + Kickoff",
          status: "LOCAL_STABILIZED",
        },
        {
          code: "POS_LOCAL_REFERENCE",
          owner: "Inventory + Store",
          status: "LOCAL_QUALIFIED",
        },
      ],
      parkedExternalGates: [
        {
          code: "LIVE_PROVIDERS",
          owner: "Commerce integration owners",
          reason:
            "Parked from this thread; requires real or approved sandbox provider certification evidence.",
        },
      ],
      nonProviderImplementationBacklog: [
        "Promotion Builder has local end-to-end draft lifecycle, coupon allocation, budget ledger, analytics and approval-checklist coverage; live provider certification is separate",
        "Media rights-cleared asset intake remains an external release gate; checksum, target-usage approval, activation revision and emergency deactivation have backend coverage",
        "Customer profile, address-book and order self-service handoff is locally hardened with operator-only override separation",
        "Cancellation, return, refund, exchange, replacement and appeal automation runbooks have local and Docker runtime qualification coverage",
        "Source-owned test-folder structure is locally stabilized across Agora, Commerce, Axis and Kickoff contracts",
      ],
    },
  },
  record44: {
    code: "agoraApparelCollectionIndexExperience",
    typeCode: "agoraCollectionIndexType",
    renderer: "agora.collectionIndex",
    accessMode: "PUBLIC",
    active: true,
    properties: {
      eyebrow: "Curated Apparel Edits",
      heading: "Collections you might like",
      summary:
        "Choose a category, brand-inspired edit, or seasonal collection. Each tile opens a live Commerce listing with backend-driven products, media, pricing, variants, and availability.",
      primaryAction: { label: "Shop all products", path: "/shop" },
      secondaryAction: {
        label: "Start from featured edit",
        collectionCode: "agoraWomen",
      },
      heroMediaCode: "agora-owned-home-hero-layered-edit",
      highlights: [
        {
          label: "For shoppers",
          title: "Start with intent",
          text: "Browse by newness, clothing, dresses, bags, or accessory edits before refining the product listing.",
        },
        {
          label: "For business",
          title: "Merchandise every path",
          text: "Collection labels, counts, summaries, actions, and imagery are content-managed and ready for seasonal campaigns.",
        },
        {
          label: "For commerce",
          title: "Open live listings",
          text: "Each tile lands on a search-backed listing with filters, sorting, variants, pricing, media, and availability.",
        },
      ],
      footerNote:
        "Collections are not static landing pages: every edit resolves into indexed Commerce products, so business teams can curate the journey while product data remains live.",
    },
  },
  record45: {
    code: "agoraApparelProductListingExperience",
    typeCode: "agoraProductListingType",
    renderer: "agora.productListing",
    accessMode: "PUBLIC",
    active: true,
    properties: {
      eyebrow: "Shop the edit",
      heading: "Apparel selected for now",
      summary:
        "Editorial apparel discovery with live products, refinements, sorting, and a business-curated feature carousel.",
      heroMediaCode: "agora-owned-product-listing-wide-hero",
      primaryAction: {
        label: "Shop new arrivals",
        collectionCode: "agoraNewArrivals",
      },
      secondaryAction: { label: "Explore collections", path: "/collections" },
      resolverKey: "commerce.product.discovery",
      listingMode: "SEARCH",
      pageSize: 10,
      resultLabel: "products",
      loadMoreLabel: "Load 10 more products",
      completeStatusLabel: "All matching products are visible",
      projectedProducts: {
        eyebrow: "Featured by Agora",
        heading: "Pieces to project this week",
        summary:
          "A business-curated carousel for campaign products, new arrivals, and premium edits before customers enter the full listing grid.",
        ariaLabel: "Business projected products",
        direction: "forward",
        pageSize: 8,
        productCodes: [
          "agoraDoubleButtonTrench",
          "agoraRamiePocketShirt",
          "agoraStretchStrapTop",
          "agoraBeltWrapDress",
          "agoraSoftShoulderBag",
          "agoraCleanLineBlazer",
          "agoraFineKnitPolo",
          "agoraNeutralShoulderBag",
        ],
      },
      toolbar: {
        ariaLabel: "Product listing controls",
        filterLabel: "Filters",
        saleOnlyLabel: "Shop sale items only",
        sortLabel: "Sort By:",
        sortAriaLabel: "Sort products",
        layoutAriaLabel: "Product layout",
        activeFiltersAriaLabel: "Active filters",
        clearAllLabel: "Clear all",
        defaultLayout: "grid-4",
        layoutOptions: [
          { code: "list", label: "List view" },
          { code: "grid-2", label: "Two products per row" },
          { code: "grid-3", label: "Three products per row" },
          { code: "grid-4", label: "Four products per row" },
          { code: "grid-5", label: "Five products per row" },
        ],
        sortOptions: [
          { code: "recommended", label: "Best selling" },
          { code: "name-asc", label: "Name A-Z" },
          { code: "price-asc", label: "Price low to high" },
          { code: "price-desc", label: "Price high to low" },
        ],
      },
      filterDrawer: {
        ariaLabel: "Product filters",
        title: "Filters",
        closeLabel: "Close filters",
        resetLabel: "Reset filters",
        applyLabel: "Apply filters",
        priceLabel: "Price",
        minPriceLabel: "Min",
        maxPriceLabel: "Max",
        minPricePlaceholder: "0",
        maxPricePlaceholder: "250",
        groups: [
          { code: "categories", label: "Product Categories" },
          { code: "price", label: "Price" },
          { code: "sizes", label: "Size" },
          { code: "colors", label: "Color" },
          { code: "brands", label: "Brand" },
          { code: "collections", label: "Collection" },
          { code: "availability", label: "Availability" },
        ],
      },
      allowedFacets: [
        "category",
        "brand",
        "collection",
        "color",
        "size",
        "availability",
      ],
      allowedSorts: ["recommended", "name-asc", "price-asc", "price-desc"],
      cardActions: [
        "QUICK_ADD",
        "QUICK_VIEW",
        "ADD_TO_CART",
        "WISHLIST",
        "COMPARE",
      ],
    },
  },
};
