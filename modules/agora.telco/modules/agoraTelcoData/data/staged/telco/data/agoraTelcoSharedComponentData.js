/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/data/agoraComponentData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

/** @description Agora storefront CMS components for the first discovery slice. */
module.exports = {
  record0: {
    code: 'agoraTelcoGlobalHeader',
    typeCode: 'agoraHeaderType',
    renderer: 'agora.header',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      logoText: 'Nodics Agora',
      navigationCode: 'agoraMainNavigation',
      searchEnabled: true,
      cartPreviewEnabled: true,
      accountPreviewEnabled: true
    }
  },
  record1: {
    code: 'agoraGlobalFooter',
    typeCode: 'agoraFooterType',
    renderer: 'agora.footer',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      copyrightText: 'Nodics Agora reference storefront',
      navigationCode: 'agoraFooterNavigation'
    }
  },
  record2: {
    code: 'agoraHomeHero',
    typeCode: 'agoraHeroBannerType',
    renderer: 'agora.heroBanner',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      kicker: 'Nodics Commerce',
      heading: 'Governed storefront discovery powered by Nodics.',
      body: 'Browse curated categories and product projections through customer-safe Commerce APIs.',
      primaryAction: { label: 'Browse new arrivals', href: '/c/new-arrivals' },
      secondaryAction: { label: 'Search products', href: '/search' },
      mediaReferenceCode: 'agoraHeroPlaceholder',
      imageAlt: 'Nodics Agora storefront hero placeholder'
    }
  },
  record3: {
    code: 'agoraHomeCategoryRail',
    typeCode: 'agoraCategoryRailType',
    renderer: 'agora.categoryRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Shop by category',
      resolverKey: 'commerce.category.navigation',
      fallbackItems: [
        { label: 'New arrivals', href: '/c/new-arrivals' },
        { label: 'Postpaid', href: '/c/postpaid' },
        { label: 'Men', href: '/c/men' }
      ]
    }
  },
  record4: {
    code: 'agoraHomeProductRail',
    typeCode: 'agoraProductRailType',
    renderer: 'agora.productRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Featured products',
      resolverKey: 'commerce.product.discovery',
      queryIntent: 'FEATURED',
      pageSize: 8
    }
  },
  record5: {
    code: 'agoraListingBreadcrumb',
    typeCode: 'agoraBreadcrumbType',
    renderer: 'agora.breadcrumb',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.category.breadcrumb'
    }
  },
  record6: {
    code: 'agoraCategoryListing',
    typeCode: 'agoraProductListingType',
    renderer: 'agora.productListing',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.product.discovery',
      listingMode: 'CATEGORY',
      pageSize: 12,
      allowedFacets: ['category', 'color', 'size', 'availability'],
      allowedSorts: ['relevance', 'newest', 'nameAsc'],
      cardActions: ['QUICK_VIEW', 'ADD_TO_CART', 'WISHLIST', 'COMPARE']
    }
  },
  record7: {
    code: 'agoraSearchListing',
    typeCode: 'agoraSearchListingType',
    renderer: 'agora.searchListing',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.product.discovery',
      listingMode: 'SEARCH',
      pageSize: 12,
      allowedFacets: ['category', 'color', 'size', 'availability'],
      allowedSorts: ['relevance', 'newest', 'nameAsc'],
      cardActions: ['QUICK_VIEW', 'ADD_TO_CART', 'WISHLIST', 'COMPARE']
    }
  },
  record8: {
    code: 'agoraProductDetail',
    typeCode: 'agoraProductDetailType',
    renderer: 'agora.productDetail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.product.detail',
      includeMedia: true,
      includeVariantSummary: true,
      includePrice: true,
      includeInventory: true,
      includeReviews: true,
      includePromotionBadges: true,
      supportsWishlist: true,
      supportsCompare: true
    }
  },
  record9: {
    code: 'agoraDiscoveryReadinessNote',
    typeCode: 'agoraRichTextType',
    renderer: 'agora.richText',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Agora authority boundary',
      body: 'This storefront seed renders page composition only. Product, price, inventory, cart, checkout, order and lifecycle data are resolved through backend-owned customer APIs.'
    }
  },
  record10: {
    code: 'agoraServicePromiseStrip',
    typeCode: 'agoraServicePromiseType',
    renderer: 'agora.servicePromiseStrip',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      promises: [
        { label: '14-day returns', detail: 'Eligibility is calculated by the Commerce lifecycle API.' },
        { label: 'Free shipping threshold', detail: 'Shipping methods are resolved from backend configuration.' },
        { label: 'Secure checkout', detail: 'Payment uses provider tokens only; raw card data is never collected.' },
        { label: 'Order self-service', detail: 'Cancellation, return and refund requests stay policy-governed.' }
      ]
    }
  },
  record11: {
    code: 'agoraCartSummary',
    typeCode: 'agoraCartSummaryType',
    renderer: 'agora.cartSummary',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      resolverKey: 'commerce.cart.customer',
      supportsLocalFallback: true,
      promotionEstimate: 'DISPLAY_ONLY_UNTIL_BACKEND_REDEMPTION_API',
      actions: ['UPDATE_QUANTITY', 'REMOVE_ENTRY', 'PROCEED_TO_CHECKOUT'],
      calculationRequiredBeforeCheckout: true
    }
  },
  record12: {
    code: 'agoraCheckoutFlow',
    typeCode: 'agoraCheckoutFlowType',
    renderer: 'agora.checkoutFlow',
    accessMode: 'CUSTOMER',
    active: true,
    properties: {
      resolverKey: 'commerce.checkout.customer',
      steps: ['CUSTOMER', 'SHIPPING', 'PAYMENT', 'REVIEW'],
      paymentCollectionMode: 'PROVIDER_TOKEN_ONLY',
      requiresCustomerSessionForPlacement: true
    }
  },
  record13: {
    code: 'agoraOrderConfirmation',
    typeCode: 'agoraOrderConfirmationType',
    renderer: 'agora.orderConfirmation',
    accessMode: 'CUSTOMER',
    active: true,
    properties: {
      resolverKey: 'commerce.order.customer.detail',
      showCompletedCheckoutSteps: true,
      showShippingPromise: true,
      lifecycleActions: ['CANCELLATION', 'RETURN', 'REFUND', 'EXCHANGE', 'REPLACEMENT', 'APPEAL']
    }
  },
  record14: {
    code: 'agoraOrderHistory',
    typeCode: 'agoraOrderHistoryType',
    renderer: 'agora.orderHistory',
    accessMode: 'CUSTOMER',
    active: true,
    properties: {
      resolverKey: 'commerce.order.customer.history',
      showEntries: true,
      showLifecycleRecords: true
    }
  },
  record30: {
    code: 'agoraTelcoHomeHeroExperience',
    typeCode: 'agoraHeroCarouselType',
    renderer: 'agora.heroCarousel',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      slides: [
        { mediaCode: 'agora-owned-home-hero-summer-edit', eyebrow: 'Connected Plans 2026', title: 'Flexible plans for always-on customers.', primaryAction: { label: 'Explore Collection', collectionCode: 'agoraTelcoPostpaid' }, secondaryAction: { label: 'Shop Sale', collectionCode: 'agoraSale' } },
        { mediaCode: 'agora-owned-home-hero-signature-style', eyebrow: 'Find Your Perfect Plan', title: 'Curated plans for everyday connectivity.', primaryAction: { label: 'Shop Sale', collectionCode: 'agoraSale' }, secondaryAction: { label: 'Shop New', collectionCode: 'agoraNewArrivals' } },
        { mediaCode: 'agora-owned-home-hero-layered-edit', eyebrow: 'Bundle Data, Voice & Devices', title: 'Plans, devices and bundles for every connection.', primaryAction: { label: 'Shop New', collectionCode: 'agoraNewArrivals' }, secondaryAction: { label: 'Explore Collection', collectionCode: 'agoraTelcoPostpaid' } }
      ]
    }
  },
  record31: {
    code: 'agoraTelcoHomeServiceTicker',
    typeCode: 'agoraServiceTickerType',
    renderer: 'agora.serviceTicker',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      messages: [
        { label: 'Free shipping', text: 'on qualifying orders' },
        { label: 'Easy returns', text: 'within 14 days' },
        { label: 'Secure checkout', text: 'with provider token payments' }
      ]
    }
  },
  record32: {
    code: 'agoraTelcoHomeCollectionGrid',
    typeCode: 'agoraCollectionGridType',
    renderer: 'agora.collectionGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Explore Collections',
      heading: 'Shop by connectivity need',
      actionLabel: 'View All Collection',
      items: [
        { collectionCode: 'agoraNewArrivals', label: 'New plans', summary: 'Latest plans just in', mediaCode: 'agora-owned-collection-new-in' },
        { collectionCode: 'agoraSale', label: 'Sale', summary: 'Capsule offers and edits', mediaCode: 'agora-owned-collection-promotion' },
        { collectionCode: 'agoraTelcoPostpaid', label: 'Postpaid', summary: 'Unlimited and family connectivity', mediaCode: 'agora-owned-collection-clothing' },
        { collectionCode: 'agoraTelcoPrepaid', label: 'Prepaid', summary: 'Flexible prepaid bundles', mediaCode: 'agora-owned-collection-dresses' },
        { collectionCode: 'agoraTelcoDevices', label: 'Devices', summary: 'Phones, routers and accessories', mediaCode: 'agora-owned-collection-bags' },
        { collectionCode: 'agoraTelcoAccessories', label: 'Accessories', summary: 'Details that complete the look', mediaCode: 'agora-owned-collection-accessories' }
      ]
    }
  },
  record33: {
    code: 'agoraTelcoTopPicksProductRail',
    typeCode: 'agoraProductRailType',
    renderer: 'agora.productRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Today’s Top Picks',
      heading: 'Latest plans just in',
      resolverKey: 'commerce.product.discovery',
      queryIntent: 'FEATURED',
      productCodes: ['agoraTelcoUnlimitedPostpaid', 'agoraTelcoFlexiPrepaid'],
      pageSize: 2
    }
  },
  record34: {
    code: 'agoraTelcoEditorialPromoGrid',
    typeCode: 'agoraPromoGridType',
    renderer: 'agora.promoGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      items: [
        { title: 'Plan Bundles', summary: 'Activation-week offers', mediaCode: 'agora-owned-promo-capsule', variant: 'copy-left', action: { label: 'Shop Collection', collectionCode: 'agoraTelcoPostpaid' } },
        { title: 'Texture edit', summary: 'Shop the look', mediaCode: 'agora-owned-promo-texture-edit', variant: 'visual', action: { label: 'Shop Collection', collectionCode: 'agoraSale' } },
        { title: '5G Router Bundle', summary: 'Up to 40% off', mediaCode: 'agora-owned-promo-crossbody', variant: 'copy-right', action: { label: 'Shop Collection', collectionCode: 'agoraTelcoDevices' } }
      ]
    }
  },
  record35: {
    code: 'agoraTelcoSpecialOfferSplit',
    typeCode: 'agoraTelcoSpecialOfferSplitType',
    renderer: 'agora.specialOfferSplit',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Limited edit',
      heading: 'Special Offer This Week Only',
      summary: 'Reserved for activation-week offers',
      leftMediaCode: 'agora-owned-promo-texture-edit',
      rightMediaCode: 'agora-owned-collection-new-in',
      action: { label: 'Explore Collection', collectionCode: 'agoraSale' }
    }
  },
  record36: {
    code: 'agoraTelcoBestSellingProductRail',
    typeCode: 'agoraProductRailType',
    renderer: 'agora.productRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Best Selling',
      heading: 'Browse our top trending',
      resolverKey: 'commerce.product.discovery',
      queryIntent: 'BEST_SELLING',
      productCodes: ['agoraSilkScarf', 'agoraLinenCampShirt', 'agoraTailoredChino', 'agoraRelaxedTrouser', 'agoraCanvasBelt', 'agoraWoolCap', 'agoraOxfordShirt', 'agoraLeatherTote'],
      pageSize: 8
    }
  },
  record37: {
    code: 'agoraTelcoCustomerServicePromiseGrid',
    typeCode: 'agoraServicePromiseGridType',
    renderer: 'agora.servicePromiseGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      items: [
        { label: 'Shipping', text: 'Delivery choices are calculated by Commerce.' },
        { label: 'Returns', text: 'Return eligibility is shown before submission.' },
        { label: 'Secure payments', text: 'Checkout uses safe payment provider tokens.' },
        { label: 'Order help', text: 'Customers can track order lifecycle requests.' }
      ]
    }
  },
  record38: {
    code: 'agoraTelcoCustomerTestimonials',
    typeCode: 'agoraTestimonialGridType',
    renderer: 'agora.testimonialGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Customer Say!',
      heading: 'Customers stay connected',
      summary: 'Our customers love the quality, service and carefully selected plans and devices.',
      items: [
        { mediaCode: 'agora-owned-testimonial-sybil', avatarMediaCode: 'agora-owned-avatar-sybil', name: 'Sybil Sharp', quote: 'Fantastic shop. Great selection, fair prices, friendly staff, and excellent product quality.', product: 'Unlimited Postpaid Plan' },
        { mediaCode: 'agora-owned-testimonial-mark', avatarMediaCode: 'agora-owned-avatar-mark', name: 'Mark G.', quote: 'High-quality products and excellent customer service. I always find exactly what I need.', product: 'Unlimited Postpaid Plan' }
      ]
    }
  },
  record39: {
    code: 'agoraTelcoSocialGallery',
    typeCode: 'agoraMediaGalleryType',
    renderer: 'agora.mediaGallery',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Shop Instagram',
      heading: 'Choose reliable connectivity for every moment',
      items: [
        { mediaCode: 'agora-owned-gallery-1' },
        { mediaCode: 'agora-owned-gallery-2' },
        { mediaCode: 'agora-owned-gallery-3' },
        { mediaCode: 'agora-owned-gallery-4' },
        { mediaCode: 'agora-owned-gallery-5' }
      ]
    }
  },
  record43: {
    code: 'agoraTelcoGlobalFooterExperience',
    typeCode: 'agoraFooterType',
    renderer: 'agora.footer',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      summary: 'Nodics Agora brings telco commerce into the Nodics experience layer with secure checkout, catalog discovery, and customer self-service.',
      contactEmail: 'nodics.framework@gmail.com',
      groups: [
        { title: 'Commerce', links: ['New plans', 'Postpaid', 'Prepaid', 'Devices & Accessories'] },
        { title: 'Customer Care', links: ['Shipping', 'Returns', 'Order support', 'Wishlist'] },
        { title: 'Nodics', links: ['Nexus', 'Axis', 'Documentation', 'Contact'] }
      ],
      newsletter: { title: 'Newsletter', text: 'Sign up for curated releases and get 10% off your first purchase.', placeholder: 'Enter your e-mail...', buttonLabel: 'Subscribe' },
      legalLinks: ['Privacy', 'Terms', 'Cookies']
    }
  },
  record40: {
    code: 'agoraOrderLifecyclePanel',
    typeCode: 'agoraOrderLifecycleType',
    renderer: 'agora.orderLifecycle',
    accessMode: 'CUSTOMER',
    active: true,
    properties: {
      resolverKey: 'commerce.order.lifecycle.customer',
      requestTypes: ['CANCELLATION', 'RETURN', 'REFUND', 'EXCHANGE', 'REPLACEMENT', 'APPEAL'],
      reasonSelectionRequired: true,
      itemQuantitySelectionRequired: true,
      returnMethods: ['PICKUP', 'DROP_OFF', 'STORE_RETURN'],
      refundMethods: ['ORIGINAL_PAYMENT', 'STORE_CREDIT', 'MANUAL_REVIEW'],
      showRma: true,
      showRefundPreview: true,
      showReconciliationRequired: true,
      replacementSelectionSupported: true,
      appealSupportedByPolicy: true,
      customerMilestones: [
        {
          title: 'Cancellation before fulfillment release',
          owner: 'Order + Inventory',
          visibleEvidence: ['eligibility preview', 'requested quantity', 'reservation release status']
        },
        {
          title: 'Return logistics and receipt',
          owner: 'Fulfillment',
          visibleEvidence: ['return method', 'RMA code', 'shipment or store-return tracking']
        },
        {
          title: 'Inspection and disposition',
          owner: 'Fulfillment + Inventory',
          visibleEvidence: ['inspection required', 'disposition result', 'replacement eligibility']
        },
        {
          title: 'Refund calculation and reconciliation',
          owner: 'Payment',
          visibleEvidence: ['refund preview', 'refund method', 'reconciliation-required status']
        },
        {
          title: 'Appeal and delayed-resolution review',
          owner: 'Order + Process',
          visibleEvidence: ['appeal reference', 'appeal reason', 'SLA/review state']
        }
      ],
      automationGates: [
        'Replacement stock reservation',
        'Exchange shipment creation',
        'Inspection and disposition integration',
        'Appeal SLA workflow',
        'Delayed-refund reconciliation automation'
      ],
      operatorRunbooks: [
        {
          title: 'Exchange replacement reservation',
          owner: 'Inventory + Fulfillment',
          customerVisibleState: 'Replacement selection received',
          backofficeAction: 'Reserve replacement stock and create outbound exchange shipment'
        },
        {
          title: 'Return inspection disposition',
          owner: 'Fulfillment + Inventory',
          customerVisibleState: 'Return received for inspection',
          backofficeAction: 'Record inspection result, disposition and restock/quarantine decision'
        },
        {
          title: 'Delayed refund reconciliation',
          owner: 'Payment + Order',
          customerVisibleState: 'Refund requires operator review',
          backofficeAction: 'Recalculate refund, reconcile provider evidence and publish safe customer status'
        },
        {
          title: 'Appeal SLA review',
          owner: 'Process + Order',
          customerVisibleState: 'Appeal submitted',
          backofficeAction: 'Start SLA timer, assign reviewer and capture approve/reject evidence'
        }
      ]
    }
  },
  record41: {
    code: 'agoraAccountCenter',
    typeCode: 'agoraRichTextType',
    renderer: 'agora.accountCenter',
    accessMode: 'CUSTOMER',
    active: true,
    properties: {
      heading: 'Account center',
      resolverKeys: ['profile.customer.self', 'profile.customer.addressBook', 'commerce.order.customer.history'],
      capabilities: [
        'Customer profile and session summary',
        'Address book handoff to Profile APIs',
        'Order history and lifecycle self-service',
        'Wishlist and compare synchronization'
      ],
      operationGroups: [
        {
          title: 'Profile and identity',
          resolverKeys: ['profile.customer.self'],
          actions: ['view profile summary', 'edit profile handoff', 'session refresh'],
          status: 'BACKEND_HANDOFF'
        },
        {
          title: 'Address book',
          resolverKeys: ['profile.customer.addressBook'],
          actions: ['list addresses', 'create/update address handoff', 'select checkout address'],
          status: 'BACKEND_HANDOFF'
        },
        {
          title: 'Order self-service',
          resolverKeys: ['commerce.order.customer.history', 'commerce.order.lifecycle.customer'],
          actions: ['view order history', 'preview lifecycle eligibility', 'submit lifecycle request'],
          status: 'CUSTOMER_VISIBLE'
        },
        {
          title: 'Operator-only overrides',
          resolverKeys: ['commerce.order.operator.lifecycle', 'payment.refund.reconciliation'],
          actions: ['override refund reconciliation', 'approve appeal', 'force disposition correction'],
          status: 'BACKOFFICE_ONLY'
        }
      ]
    }
  },
  record42: {
    code: 'agoraProductionGateSummary',
    typeCode: 'agoraRichTextType',
    renderer: 'agora.productionGateSummary',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      heading: 'Production release gates',
      gates: [
        { code: 'MEDIA_RIGHTS', owner: 'nMedia + agoraCommonData', status: 'RELEASE_GATE' },
        { code: 'PROMOTION_BUILDER_DEPTH', owner: 'Promotion + Axis', status: 'LOCAL_END_TO_END_COMPLETE' },
        { code: 'REVERSE_LIFECYCLE_AUTOMATION', owner: 'Order + Fulfillment + Payment + Process', status: 'LOCAL_RUNTIME_QUALIFIED' },
        { code: 'ACCOUNT_SELF_SERVICE', owner: 'Profile + Order + Agora', status: 'LOCAL_HARDENED' },
        { code: 'TEST_FOLDER_STRUCTURE', owner: 'Agora + Commerce + Axis + Kickoff', status: 'LOCAL_STABILIZED' },
        { code: 'POS_LOCAL_REFERENCE', owner: 'Inventory + Store', status: 'LOCAL_QUALIFIED' }
      ],
      parkedExternalGates: [
        {
          code: 'LIVE_PROVIDERS',
          owner: 'Commerce integration owners',
          reason: 'Parked from this thread; requires real or approved sandbox provider certification evidence.'
        }
      ],
      nonProviderImplementationBacklog: [
        'Promotion Builder has local end-to-end draft lifecycle, coupon allocation, budget ledger, analytics and approval-checklist coverage; live provider certification is separate',
        'Media rights-cleared asset intake remains an external release gate; checksum, target-usage approval, activation revision and emergency deactivation have backend coverage',
        'Customer profile, address-book and order self-service handoff is locally hardened with operator-only override separation',
        'Cancellation, return, refund, exchange, replacement and appeal automation runbooks have local and Docker runtime qualification coverage',
        'Source-owned test-folder structure is locally stabilized across Agora, Commerce, Axis and Kickoff contracts'
      ]
    }
  }
};
