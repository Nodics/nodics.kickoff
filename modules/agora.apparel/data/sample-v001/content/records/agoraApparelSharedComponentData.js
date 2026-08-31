/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

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
    code: 'agoraApparelGlobalHeader',
    typeCode: 'agoraHeaderType',
    renderer: 'agora.header',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      logoText: 'NODICS',
      subtitle: 'AGORA',
      rootCollectionCode: 'agoraWomen',
      navigationCode: 'agoraMainNavigation',
      searchPlaceholder: 'Search dresses, bags, shirts...',
      searchEnabled: true,
      cartPreviewEnabled: true,
      accountPreviewEnabled: true,
      wishlistPreviewEnabled: true,
      storefrontLabels: {
        quickAdd: 'Quick Add',
        quickView: 'Quick view',
        addToCart: 'Add to cart',
        buyNow: 'Buy it now',
        wishlist: 'Wishlist',
        wishlisted: 'Wishlisted',
        addToWishlist: 'Add to wishlist',
        removeFromWishlist: 'Remove from wishlist',
        compare: 'Compare',
        comparing: 'Comparing',
        removeFromCompare: 'Remove from compare',
        colors: 'Colors',
        size: 'Size',
        quantity: 'Quantity',
        availableColors: 'Available colors',
        availableSizes: 'Available sizes',
        backToListing: 'Back to listing',
        closeQuickView: 'Close',
        color: 'Color',
        description: 'Description',
        selectColorPrefix: 'Select',
        closeQuickAdd: 'Close quick add',
        decreaseQuantity: 'Decrease quantity',
        increaseQuantity: 'Increase quantity',
        viewDetailsPrefix: 'View details for',
        quickViewTitle: 'Quick View',
        recommendationsEyebrow: 'Curated recommendations',
        recommendationsHeading: 'Related pieces',
        recommendationsSummary: 'Recommendations are resolved from Commerce product relationships.',
        reviews: 'Reviews',
        shippingReturns: 'Shipping & returns',
        shippingReturnsText: 'Free shipping threshold and 14-day returns are resolved from backend policy.',
        viewFullDetails: 'View full details',
        featuredProductsAriaLabel: 'Featured products',
        bestSellingProductsAriaLabel: 'Best selling products'
      },
      utilityLinks: [
        { label: '+1 315-666-6688', path: 'tel:+13156666688' },
        { label: 'support@nodics.com', path: 'mailto:support@nodics.com' },
        { label: 'Our Store', collectionCode: 'agoraWomen' }
      ],
      preferences: [
        { label: 'USD', path: '#currency' },
        { label: 'English', path: '#language' }
      ],
      navigationItems: [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop', dropdown: true },
        { label: 'New in', collectionCode: 'agoraNewArrivals' },
        { label: 'Clothing', collectionCode: 'agoraWomenTops', dropdown: true },
        { label: 'Bags & Accessories', collectionCode: 'agoraWomenAccessories' }
      ],
      megaMenus: [
        {
          code: 'home',
          label: 'Home',
          path: '/',
          eyebrow: 'Agora storefront',
          summary: 'Return to the curated fashion commerce homepage with campaign rails, collections, service promises, and customer stories.',
          groups: [
            {
              title: 'Start here',
              summary: 'Common shopping paths for first-time visitors.',
              links: [
                { label: 'Homepage', path: '/', summary: 'Campaign-led discovery' },
                { label: 'Shop all products', path: '/shop', summary: 'Search-backed product listing' },
                { label: 'Collections', path: '/collections', summary: 'Curated edit index' }
              ]
            },
            {
              title: 'Customer journeys',
              links: [
                { label: 'New arrivals', collectionCode: 'agoraNewArrivals', summary: 'Newest products and capsule drops', badge: 'New' },
                { label: 'Sale edits', collectionCode: 'agoraPromotion', summary: 'Promoted offers and markdowns' },
                { label: 'Order support', path: '/orders', summary: 'Customer self-service support' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'This week in Agora',
              summary: 'Fresh minimal layers and neutral wardrobe updates.',
              mediaCode: 'agora-owned-home-hero-summer-edit',
              action: { label: 'Shop new arrivals', collectionCode: 'agoraNewArrivals' },
              badge: 'Editorial'
            },
            {
              title: 'Explore curated paths',
              summary: 'Browse categories, brands, and seasonal collections.',
              mediaCode: 'agora-owned-collection-clothing',
              action: { label: 'View collections', path: '/collections' },
              badge: 'CMS'
            }
          ],
          promoStripe: [
            { label: 'Free shipping threshold', path: '/shop', eyebrow: 'Service', text: 'Resolved from commerce policy', badge: 'Live' },
            { label: 'Secure checkout', path: '/checkout', eyebrow: 'Trust', text: 'Payment journey backed by Nodics', badge: 'Ready' },
            { label: 'Easy returns', path: '/orders', eyebrow: 'Care', text: 'Lifecycle service journey', badge: '14 days' }
          ]
        },
        {
          code: 'shop',
          label: 'Shop',
          path: '/shop',
          eyebrow: 'Product discovery',
          summary: 'Browse the full apparel catalogue, then refine by category, brand, collection, color, size, availability, and sale status.',
          groups: [
            {
              title: 'Shop by category',
              summary: 'Category paths open the same live listing with different search parameters.',
              links: [
                { label: 'Women', path: '/shop?category=agoraWomen', summary: 'Trending and timeless staples' },
                { label: 'Men', path: '/shop?category=agoraMen', summary: 'Classic fits and easy layers' },
                { label: 'Clothing', path: '/shop?category=agoraWomenTops', summary: 'Tops, shirts, dresses and tailoring' },
                { label: 'Bags', path: '/shop?category=agoraWomenBags', summary: 'Structured and natural textures' },
                { label: 'Accessories', path: '/shop?category=agoraAccessories', summary: 'Finishing details and seasonal pieces' }
              ]
            },
            {
              title: 'Popular filters',
              links: [
                { label: 'New arrivals', collectionCode: 'agoraNewArrivals', summary: 'Latest indexed products', badge: 'New' },
                { label: 'Best sellers', collectionCode: 'agoraBestSelling', summary: 'High-interest product edits' },
                { label: 'Sale products', collectionCode: 'agoraPromotion', summary: 'Offers and markdowns', badge: 'Offer' },
                { label: 'Neutral wardrobe', path: '/shop?collection=agoraWomen', summary: 'Soft palettes and everyday layers' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Projected products',
              summary: 'Campaign carousel products selected by business users.',
              mediaCode: 'agora-owned-product-listing-wide-hero',
              action: { label: 'Shop all', path: '/shop' },
              badge: 'Featured'
            },
            {
              title: 'Capsule offers',
              summary: 'Create promotional product paths without frontend edits.',
              mediaCode: 'agora-owned-promo-capsule',
              action: { label: 'Shop sale', collectionCode: 'agoraPromotion' },
              badge: 'Sale'
            }
          ],
          promoStripe: [
            { label: '10 products per page', path: '/shop', eyebrow: 'Listing', text: 'Pagination is configured from listing CMS data', badge: 'PLP' },
            { label: 'Compare products', path: '/shop', eyebrow: 'Tools', text: 'Card actions support compare and wishlist', badge: 'UX' },
            { label: 'Quick add', path: '/shop', eyebrow: 'Conversion', text: 'Variant-aware quick shopping flow', badge: 'Fast' }
          ]
        },
        {
          code: 'new-in',
          label: 'New in',
          collectionCode: 'agoraNewArrivals',
          eyebrow: 'Fresh arrivals',
          summary: 'New pieces for the current apparel drop, resolved through the Commerce product index.',
          groups: [
            {
              title: 'Fresh edits',
              links: [
                { label: 'All new arrivals', collectionCode: 'agoraNewArrivals', summary: 'Newest products in one listing', badge: 'New' },
                { label: 'New clothing', path: '/shop?category=agoraWomenTops&collection=agoraNewArrivals', summary: 'Fresh tops, shirts and dresses' },
                { label: 'New bags', path: '/shop?category=agoraWomenBags&collection=agoraNewArrivals', summary: 'New structured carry pieces' }
              ]
            },
            {
              title: 'Seasonal direction',
              links: [
                { label: 'Summer neutrals', collectionCode: 'agoraWomen', summary: 'Light tones and breathable shapes' },
                { label: 'Layered essentials', collectionCode: 'agoraWomenTops', summary: 'Tanks, tees and overshirts' },
                { label: 'Modern occasion', path: '/shop?category=agoraDresses', summary: 'Dresses and refined styling' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Fresh styles just in',
              summary: 'The newest apparel products for the storefront.',
              mediaCode: 'agora-owned-collection-new-in',
              action: { label: 'Shop new in', collectionCode: 'agoraNewArrivals' },
              badge: 'New'
            },
            {
              title: 'Light layers',
              summary: 'Easy capsule pieces for everyday wardrobes.',
              mediaCode: 'agora-owned-gallery-2',
              action: { label: 'Shop clothing', collectionCode: 'agoraWomenTops' }
            }
          ],
          promoStripe: [
            { label: 'Arrival spotlight', collectionCode: 'agoraNewArrivals', eyebrow: 'Drop', text: 'Business users can reorder this tile any time', badge: 'CMS' },
            { label: 'Top picks', collectionCode: 'agoraWomen', eyebrow: 'Editorial', text: 'Use curated product rails to project priority items' },
            { label: 'Back in stock', path: '/shop?availability=available', eyebrow: 'Inventory', text: 'Availability stays Commerce-owned' }
          ]
        },
        {
          code: 'clothing',
          label: 'Clothing',
          collectionCode: 'agoraWomenTops',
          eyebrow: 'Wardrobe categories',
          summary: 'Clothing paths combine category intent with live product data, variants, images, pricing, and stock.',
          groups: [
            {
              title: 'Women clothing',
              links: [
                { label: 'Tops & blouses', collectionCode: 'agoraWomenTops', summary: 'Tanks, tees, shirts and knit layers' },
                { label: 'Dresses', collectionCode: 'agoraDresses', summary: 'Soft shapes and polished details' },
                { label: 'Outerwear', path: '/shop?category=agoraOuterwear', summary: 'Trenches, blazers and lightweight layers' },
                { label: 'Pants & skirts', path: '/shop?category=agoraBottoms', summary: 'Tailored and relaxed bottoms' }
              ]
            },
            {
              title: 'Men clothing',
              links: [
                { label: 'Men shirts', path: '/shop?category=agoraMenShirts', summary: 'Oxford, linen and poplin shirting' },
                { label: 'Men trousers', path: '/shop?category=agoraMenTrousers', summary: 'Chinos and relaxed trousers' },
                { label: 'Layering pieces', path: '/shop?category=agoraMenLayers', summary: 'Comfortable everyday fits' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Elegant everyday wardrobe',
              summary: 'Clothing edits surfaced from category and collection metadata.',
              mediaCode: 'agora-owned-collection-clothing',
              action: { label: 'Shop clothing', collectionCode: 'agoraWomenTops' },
              badge: 'Category'
            },
            {
              title: 'Dresses edit',
              summary: 'Refined shapes ready for promoted merchandising.',
              mediaCode: 'agora-owned-collection-dresses',
              action: { label: 'Shop dresses', collectionCode: 'agoraDresses' }
            }
          ],
          promoStripe: [
            { label: 'Soft tailoring', collectionCode: 'agoraWomenTops', eyebrow: 'Edit', text: 'Product cards stay variant aware' },
            { label: 'Dresses under spotlight', collectionCode: 'agoraDresses', eyebrow: 'Campaign', text: 'Link directly to a collection result set' },
            { label: 'Neutral layers', path: '/shop?collection=agoraWomen', eyebrow: 'Trend', text: 'Business-defined editorial grouping' }
          ]
        },
        {
          code: 'bags-accessories',
          label: 'Bags & Accessories',
          collectionCode: 'agoraWomenAccessories',
          eyebrow: 'Finishing pieces',
          summary: 'Structured bags, natural textures, shoes, sunglasses, scarves, and accessories.',
          groups: [
            {
              title: 'Bags',
              links: [
                { label: 'All bags', collectionCode: 'agoraWomenBags', summary: 'Totes, shoulder bags and crossbody styles' },
                { label: 'Shoulder bags', path: '/shop?category=agoraWomenBags&collection=agoraShoulderBags', summary: 'Clean everyday carry' },
                { label: 'Crossbody bags', path: '/shop?category=agoraWomenBags&collection=agoraCrossbodyBags', summary: 'Compact and textured' }
              ]
            },
            {
              title: 'Accessories',
              links: [
                { label: 'All accessories', collectionCode: 'agoraWomenAccessories', summary: 'Sunglasses, scarves, hats and belts' },
                { label: 'Shoes', collectionCode: 'agoraShoes', summary: 'Minimal flats and refined footwear' },
                { label: 'Sunglasses', path: '/shop?category=agoraSunglasses', summary: 'Gold-frame and statement shapes' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Structured textures',
              summary: 'Bags and accessories that complete the look.',
              mediaCode: 'agora-owned-collection-bags',
              action: { label: 'Shop bags', collectionCode: 'agoraWomenBags' },
              badge: 'Edit'
            },
            {
              title: 'Accessory details',
              summary: 'Finish the outfit with business-curated product paths.',
              mediaCode: 'agora-owned-collection-accessories',
              action: { label: 'Shop accessories', collectionCode: 'agoraWomenAccessories' }
            }
          ],
          promoStripe: [
            { label: 'Natural texture edit', collectionCode: 'agoraWomenBags', eyebrow: 'Bags', text: 'Highlight editorial images in the menu' },
            { label: 'Accessories under 100', collectionCode: 'agoraWomenAccessories', eyebrow: 'Value', text: 'Controlled by CMS configuration' },
            { label: 'New finishing pieces', path: '/shop?category=agoraAccessories&collection=agoraNewArrivals', eyebrow: 'New', text: 'Search query driven path' }
          ]
        },
        {
          code: 'collections',
          label: 'Collections',
          path: '/collections',
          eyebrow: 'Curated paths',
          summary: 'A business-managed index of category, brand-inspired, and seasonal collection entry points.',
          groups: [
            {
              title: 'Collection index',
              links: [
                { label: 'All collections', path: '/collections', summary: 'Browse every curated path' },
                { label: 'New in', collectionCode: 'agoraNewArrivals', summary: 'Fresh styles just in' },
                { label: 'Sale', collectionCode: 'agoraPromotion', summary: 'Capsule offers and edits', badge: 'Offer' },
                { label: 'Dresses', collectionCode: 'agoraDresses', summary: 'Soft neutrals and refined shapes' }
              ]
            },
            {
              title: 'Merchandising',
              links: [
                { label: 'Business projected products', path: '/shop', summary: 'Feature carousel on listing pages' },
                { label: 'Campaign rails', path: '/', summary: 'Homepage product and editorial rails' },
                { label: 'Service promises', path: '/', summary: 'Trust content managed in CMS' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Collections you might like',
              summary: 'Curated navigation with live Commerce product resolution.',
              mediaCode: 'agora-owned-home-hero-layered-edit',
              action: { label: 'View collections', path: '/collections' },
              badge: 'Curated'
            },
            {
              title: 'Promotion collection',
              summary: 'Seasonal commercial moments with product-listing links.',
              mediaCode: 'agora-owned-collection-promotion',
              action: { label: 'Shop sale', collectionCode: 'agoraPromotion' }
            }
          ],
          promoStripe: [
            { label: 'Category path', path: '/shop?category=agoraWomenTops', eyebrow: 'Search', text: 'CMS page plus indexed products' },
            { label: 'Brand path', path: '/shop?brand=agoraAtelier', eyebrow: 'Search', text: 'Brand query landing page ready' },
            { label: 'Collection path', path: '/shop?collection=agoraWomen', eyebrow: 'Search', text: 'Collection query landing page ready' }
          ]
        },
        {
          code: 'brands',
          label: 'Brands',
          path: '/shop?brand=agoraAtelier',
          eyebrow: 'Brand stories',
          summary: 'Brand navigation lets business users promote labels or brand-inspired edits while the product grid remains search-driven.',
          groups: [
            {
              title: 'Featured brands',
              links: [
                { label: 'Agora Atelier', path: '/shop?brand=agoraAtelier', summary: 'Minimal tailoring and refined neutrals', badge: 'Featured' },
                { label: 'Nodics Studio', path: '/shop?brand=nodicsStudio', summary: 'Everyday apparel essentials' },
                { label: 'Commerce Edit', path: '/shop?brand=commerceEdit', summary: 'Accessories and seasonal pieces' }
              ]
            },
            {
              title: 'Brand-led edits',
              links: [
                { label: 'Premium neutrals', path: '/shop?brand=agoraAtelier&collection=agoraWomen', summary: 'Editorial brand mood' },
                { label: 'Modern workwear', path: '/shop?brand=nodicsStudio&category=agoraWomenTops', summary: 'Polished everyday layers' },
                { label: 'Accessory labels', path: '/shop?brand=commerceEdit&category=agoraAccessories', summary: 'Finishing details' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Brand spotlight',
              summary: 'Use CMS to project brand stories in the header.',
              mediaCode: 'agora-owned-gallery-3',
              action: { label: 'Shop Agora Atelier', path: '/shop?brand=agoraAtelier' },
              badge: 'Brand'
            },
            {
              title: 'Editorial stripe',
              summary: 'Pair brand links with richer imagery and campaign badges.',
              mediaCode: 'agora-owned-promo-texture-edit',
              action: { label: 'Shop brand edits', path: '/shop?brand=nodicsStudio' }
            }
          ],
          promoStripe: [
            { label: 'Brand query pages', path: '/shop?brand=agoraAtelier', eyebrow: 'Search', text: 'No separate frontend route required' },
            { label: 'Curated images', path: '/collections', eyebrow: 'CMS', text: 'Media and labels stay business controlled' },
            { label: 'Campaign-ready', path: '/shop?brand=commerceEdit', eyebrow: 'Launch', text: 'Reorder menu panels without code' }
          ]
        },
        {
          code: 'sale',
          label: 'Sale',
          collectionCode: 'agoraPromotion',
          badge: '20% off',
          eyebrow: 'Limited offers',
          summary: 'Promotion-led entry points for sale products, campaign edits, and business-selected merchandise.',
          groups: [
            {
              title: 'Sale paths',
              links: [
                { label: 'All sale', collectionCode: 'agoraPromotion', summary: 'All active promoted products', badge: 'Sale' },
                { label: 'Sale clothing', path: '/shop?category=agoraWomenTops&collection=agoraPromotion', summary: 'Tops, dresses and layers' },
                { label: 'Sale bags', path: '/shop?category=agoraWomenBags&collection=agoraPromotion', summary: 'Structured carry edits' }
              ]
            },
            {
              title: 'Conversion moments',
              links: [
                { label: 'Quick add products', path: '/shop', summary: 'Variant selection directly from cards' },
                { label: 'Best selling sale', collectionCode: 'agoraBestSelling', summary: 'High-interest products' },
                { label: 'Last-chance accessories', collectionCode: 'agoraWomenAccessories', summary: 'Finishing pieces with offer messaging' }
              ]
            }
          ],
          featureTiles: [
            {
              title: 'Special offer edit',
              summary: 'Promotional product paths with rich visual support.',
              mediaCode: 'agora-owned-promo-texture-edit',
              action: { label: 'Shop sale', collectionCode: 'agoraPromotion' },
              badge: 'Offer'
            },
            {
              title: 'Capsule markdowns',
              summary: 'Business can update offer labels and images any time.',
              mediaCode: 'agora-owned-promo-crossbody',
              action: { label: 'Explore offers', collectionCode: 'agoraPromotion' }
            }
          ],
          promoStripe: [
            { label: 'Promotion ready', collectionCode: 'agoraPromotion', eyebrow: 'Offer', text: 'Sale path opens product listing results', badge: 'Live' },
            { label: 'Fast purchase', path: '/shop', eyebrow: 'Quick add', text: 'Variant-aware quick shopping' },
            { label: 'Wishlist sale', path: '/shop', eyebrow: 'Retention', text: 'Wishlist and compare actions stay available' }
          ]
        }
      ]
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
        { label: 'Women', href: '/c/women' },
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
      pageSize: 10,
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
      pageSize: 10,
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
    code: 'agoraApparelHomeHeroExperience',
    typeCode: 'agoraHeroCarouselType',
    renderer: 'agora.heroCarousel',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      slides: [
        { mediaCode: 'agora-owned-home-hero-summer-edit', eyebrow: 'Summer 2026 Collection', title: 'Fresh styles for an elevated look.', primaryAction: { label: 'Explore Collection', collectionCode: 'agoraWomen' }, secondaryAction: { label: 'Shop Sale', collectionCode: 'agoraSale' } },
        { mediaCode: 'agora-owned-home-hero-signature-style', eyebrow: 'Find Your Signature Style', title: 'Curated layers, edited for everyday elegance.', primaryAction: { label: 'Shop Sale', collectionCode: 'agoraSale' }, secondaryAction: { label: 'Shop New', collectionCode: 'agoraNewArrivals' } },
        { mediaCode: 'agora-owned-home-hero-layered-edit', eyebrow: 'Mix & Match Layers', title: 'Versatile pieces for every occasion.', primaryAction: { label: 'Shop New', collectionCode: 'agoraNewArrivals' }, secondaryAction: { label: 'Explore Collection', collectionCode: 'agoraWomen' } }
      ]
    }
  },
  record31: {
    code: 'agoraApparelHomeServiceTicker',
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
    code: 'agoraApparelHomeCollectionGrid',
    typeCode: 'agoraCollectionGridType',
    renderer: 'agora.collectionGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Explore Collections',
      heading: 'Shop by collection',
      actionLabel: 'View All Collection',
      items: [
        { collectionCode: 'agoraNewArrivals', label: 'New in', itemCount: '6 items', path: '/shop?collection=agoraNewArrivals', summary: 'Fresh styles just in', mediaCode: 'agora-owned-collection-new-in' },
        { collectionCode: 'agoraSale', label: 'Sale', itemCount: '6 items', path: '/shop?collection=agoraSale', summary: 'Capsule offers and edits', mediaCode: 'agora-owned-collection-promotion' },
        { collectionCode: 'agoraWomen', label: 'Clothing', itemCount: '44 items', path: '/shop?category=agoraWomen', summary: 'Elegant everyday wardrobe', mediaCode: 'agora-owned-collection-clothing' },
        { collectionCode: 'agoraWomenDresses', label: 'Dresses', itemCount: '9 items', path: '/shop?category=agoraWomenDresses', summary: 'Soft neutrals and refined shapes', mediaCode: 'agora-owned-collection-dresses' },
        { collectionCode: 'agoraWomenBags', label: 'Bags', itemCount: '8 items', path: '/shop?category=agoraWomenBags', summary: 'Structured and natural textures', mediaCode: 'agora-owned-collection-bags' },
        { collectionCode: 'agoraWomenAccessories', label: 'Accessories', itemCount: '5 items', path: '/shop?category=agoraWomenAccessories', summary: 'Details that complete the look', mediaCode: 'agora-owned-collection-accessories' }
      ]
    }
  },
  record33: {
    code: 'agoraApparelTopPicksProductRail',
    typeCode: 'agoraProductRailType',
    renderer: 'agora.productRail',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Today’s Top Picks',
      heading: 'Fresh styles just in',
      resolverKey: 'commerce.product.discovery',
      queryIntent: 'FEATURED',
      productCodes: ['agoraLinenWrapDress', 'agoraSatinMidiDress', 'agoraRibbedKnitTop', 'agoraCottonPoplinShirtWomen', 'agoraStretchStrapTop', 'agoraRamiePocketShirt', 'agoraRattanHandleBag', 'agoraStripedKnitDress'],
      pageSize: 8
    }
  },
  record34: {
    code: 'agoraApparelEditorialPromoGrid',
    typeCode: 'agoraPromoGridType',
    renderer: 'agora.promoGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      items: [
        { title: 'Capsule Collection', summary: 'Up to 40% off', mediaCode: 'agora-owned-promo-capsule', variant: 'copy-left', action: { label: 'Shop Collection', collectionCode: 'agoraWomen' } },
        { title: 'Texture edit', summary: 'Shop the look', mediaCode: 'agora-owned-promo-texture-edit', variant: 'visual', action: { label: 'Shop Collection', collectionCode: 'agoraSale' } },
        { title: 'Crossbody Bag', summary: 'Up to 40% off', mediaCode: 'agora-owned-promo-crossbody', variant: 'copy-right', action: { label: 'Shop Collection', collectionCode: 'agoraWomenBags' } }
      ]
    }
  },
  record35: {
    code: 'agoraApparelSpecialOfferSplit',
    typeCode: 'agoraApparelSpecialOfferSplitType',
    renderer: 'agora.specialOfferSplit',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Limited edit',
      heading: 'Special Offer This Week Only',
      summary: 'Reserved for special occasions',
      leftMediaCode: 'agora-owned-promo-texture-edit',
      rightMediaCode: 'agora-owned-collection-new-in',
      action: { label: 'Explore Collection', collectionCode: 'agoraSale' }
    }
  },
  record36: {
    code: 'agoraApparelBestSellingProductRail',
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
    code: 'agoraApparelCustomerServicePromiseGrid',
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
    code: 'agoraApparelCustomerTestimonials',
    typeCode: 'agoraTestimonialGridType',
    renderer: 'agora.testimonialGrid',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Customer Say!',
      heading: 'People adore the edit',
      summary: 'Our customers love the quality, service and carefully selected seasonal pieces.',
      items: [
        { mediaCode: 'agora-owned-testimonial-sybil', avatarMediaCode: 'agora-owned-avatar-sybil', name: 'Sybil Sharp', quote: 'Fantastic shop. Great selection, fair prices, friendly staff, and excellent product quality.', product: 'Contrasting sheepskin sweatshirt' },
        { mediaCode: 'agora-owned-testimonial-mark', avatarMediaCode: 'agora-owned-avatar-mark', name: 'Mark G.', quote: 'High-quality products and excellent customer service. I always find exactly what I need.', product: 'Contrasting sheepskin sweatshirt' }
      ]
    }
  },
  record39: {
    code: 'agoraApparelSocialGallery',
    typeCode: 'agoraMediaGalleryType',
    renderer: 'agora.mediaGallery',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Shop Instagram',
      heading: 'Elevate your wardrobe with fresh finds today',
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
    code: 'agoraApparelGlobalFooterExperience',
    typeCode: 'agoraFooterType',
    renderer: 'agora.footer',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      summary: 'Nodics Agora brings fashion commerce into the Nodics experience layer with secure checkout, catalog discovery, and customer self-service.',
      contactEmail: 'nodics.framework@gmail.com',
      groups: [
        { title: 'Commerce', links: ['New in', 'Women', 'Clothing', 'Bags & Accessories'] },
        { title: 'Customer Care', links: ['Shipping', 'Returns', 'Order support', 'Wishlist'] },
        { title: 'Nodics', links: ['Nexus', 'Axis', 'Documentation', 'Contact'] }
      ],
      newsletter: { title: 'Newsletter', text: 'Sign up for curated releases and get 10% off your first purchase.', placeholder: 'Enter your e-mail...', buttonLabel: 'Subscribe' },
      copyright: '© 2026 Nodics. All rights reserved.',
      brandLabel: 'Nodics Agora',
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
        { code: 'MEDIA_RIGHTS', owner: 'nMedia + agora.apparel', status: 'RELEASE_GATE' },
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
  },
  record44: {
    code: 'agoraApparelCollectionIndexExperience',
    typeCode: 'agoraCollectionIndexType',
    renderer: 'agora.collectionIndex',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Curated Apparel Edits',
      heading: 'Collections you might like',
      summary: 'Choose a category, brand-inspired edit, or seasonal collection. Each tile opens a live Commerce listing with backend-driven products, media, pricing, variants, and availability.',
      primaryAction: { label: 'Shop all products', path: '/shop' },
      secondaryAction: { label: 'Start from featured edit', collectionCode: 'agoraWomen' },
      heroMediaCode: 'agora-owned-home-hero-layered-edit',
      highlights: [
        {
          label: 'For shoppers',
          title: 'Start with intent',
          text: 'Browse by newness, clothing, dresses, bags, or accessory edits before refining the product listing.'
        },
        {
          label: 'For business',
          title: 'Merchandise every path',
          text: 'Collection labels, counts, summaries, actions, and imagery are content-managed and ready for seasonal campaigns.'
        },
        {
          label: 'For commerce',
          title: 'Open live listings',
          text: 'Each tile lands on a search-backed listing with filters, sorting, variants, pricing, media, and availability.'
        }
      ],
      footerNote: 'Collections are not static landing pages: every edit resolves into indexed Commerce products, so business teams can curate the journey while product data remains live.'
    }
  },
  record45: {
    code: 'agoraApparelProductListingExperience',
    typeCode: 'agoraProductListingType',
    renderer: 'agora.productListing',
    accessMode: 'PUBLIC',
    active: true,
    properties: {
      eyebrow: 'Shop the edit',
      heading: 'Apparel selected for now',
      summary: 'Editorial apparel discovery with live products, refinements, sorting, and a business-curated feature carousel.',
      heroMediaCode: 'agora-owned-product-listing-wide-hero',
      primaryAction: { label: 'Shop new arrivals', collectionCode: 'agoraNewArrivals' },
      secondaryAction: { label: 'Explore collections', path: '/collections' },
      resolverKey: 'commerce.product.discovery',
      listingMode: 'SEARCH',
      pageSize: 10,
      resultLabel: 'products',
      loadMoreLabel: 'Load 10 more products',
      completeStatusLabel: 'All matching products are visible',
      projectedProducts: {
        eyebrow: 'Featured by Agora',
        heading: 'Pieces to project this week',
        summary: 'A business-curated carousel for campaign products, new arrivals, and premium edits before customers enter the full listing grid.',
        ariaLabel: 'Business projected products',
        direction: 'forward',
        pageSize: 8,
        productCodes: [
          'agoraDoubleButtonTrench',
          'agoraRamiePocketShirt',
          'agoraStretchStrapTop',
          'agoraBeltWrapDress',
          'agoraSoftShoulderBag',
          'agoraCleanLineBlazer',
          'agoraFineKnitPolo',
          'agoraNeutralShoulderBag'
        ]
      },
      toolbar: {
        ariaLabel: 'Product listing controls',
        filterLabel: 'Filters',
        saleOnlyLabel: 'Shop sale items only',
        sortLabel: 'Sort By:',
        sortAriaLabel: 'Sort products',
        layoutAriaLabel: 'Product layout',
        activeFiltersAriaLabel: 'Active filters',
        clearAllLabel: 'Clear all',
        defaultLayout: 'grid-4',
        layoutOptions: [
          { code: 'list', label: 'List view' },
          { code: 'grid-2', label: 'Two products per row' },
          { code: 'grid-3', label: 'Three products per row' },
          { code: 'grid-4', label: 'Four products per row' },
          { code: 'grid-5', label: 'Five products per row' }
        ],
        sortOptions: [
          { code: 'recommended', label: 'Best selling' },
          { code: 'name-asc', label: 'Name A-Z' },
          { code: 'price-asc', label: 'Price low to high' },
          { code: 'price-desc', label: 'Price high to low' }
        ]
      },
      filterDrawer: {
        ariaLabel: 'Product filters',
        title: 'Filters',
        closeLabel: 'Close filters',
        resetLabel: 'Reset filters',
        applyLabel: 'Apply filters',
        priceLabel: 'Price',
        minPriceLabel: 'Min',
        maxPriceLabel: 'Max',
        minPricePlaceholder: '0',
        maxPricePlaceholder: '250',
        groups: [
          { code: 'categories', label: 'Product Categories' },
          { code: 'price', label: 'Price' },
          { code: 'sizes', label: 'Size' },
          { code: 'colors', label: 'Color' },
          { code: 'brands', label: 'Brand' },
          { code: 'collections', label: 'Collection' },
          { code: 'availability', label: 'Availability' }
        ]
      },
      allowedFacets: ['category', 'brand', 'collection', 'color', 'size', 'availability'],
      allowedSorts: ['recommended', 'name-asc', 'price-asc', 'price-desc'],
      cardActions: ['QUICK_ADD', 'QUICK_VIEW', 'ADD_TO_CART', 'WISHLIST', 'COMPARE']
    }
  }
};
