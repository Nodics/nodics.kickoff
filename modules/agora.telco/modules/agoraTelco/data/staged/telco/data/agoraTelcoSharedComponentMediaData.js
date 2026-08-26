/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/modules/agoraTelco/data/staged/telco/data/agoraTelcoSharedComponentMediaData
 * @description Defines CMS-owned Agora component media associations used by publication to transfer storefront media.
 * @layer data
 * @owner agoraTelco
 * @override Customer projects may replace these component-media bindings with their own approved storefront assets.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraTelco */

const media = function (componentCode, mediaCode, role, slot, position, altText) {
  return {
    active: true,
    code: componentCode + '-' + role + '-' + position,
    tenant: 'default',
    componentMediaCode: componentCode + '-' + role + '-' + position,
    componentCode,
    mediaCode,
    mediaType: 'IMAGE',
    role,
    slot,
    localeCode: 'en',
    position,
    altText
  };
};

const entries = [
  media('agoraTelcoHomeHeroExperience', 'agora-owned-home-hero-summer-edit', 'background', 'hero-slide', 10, 'Summer collection editorial hero'),
  media('agoraTelcoHomeHeroExperience', 'agora-owned-home-hero-signature-style', 'background', 'hero-slide', 20, 'Signature style editorial hero'),
  media('agoraTelcoHomeHeroExperience', 'agora-owned-home-hero-layered-edit', 'background', 'hero-slide', 30, 'Layered styling editorial hero'),
  media('agoraTelcoHomeCollectionGrid', 'agora-owned-collection-new-in', 'thumbnail', 'collection-tile', 10, 'New arrivals collection'),
  media('agoraTelcoHomeCollectionGrid', 'agora-owned-collection-promotion', 'thumbnail', 'collection-tile', 20, 'Promotion collection'),
  media('agoraTelcoHomeCollectionGrid', 'agora-owned-collection-clothing', 'thumbnail', 'collection-tile', 30, 'Postpaid collection'),
  media('agoraTelcoHomeCollectionGrid', 'agora-owned-collection-dresses', 'thumbnail', 'collection-tile', 40, 'Prepaid collection'),
  media('agoraTelcoHomeCollectionGrid', 'agora-owned-collection-bags', 'thumbnail', 'collection-tile', 50, 'Devices collection'),
  media('agoraTelcoHomeCollectionGrid', 'agora-owned-collection-accessories', 'thumbnail', 'collection-tile', 60, 'Accessories collection'),
  media('agoraTelcoEditorialPromoGrid', 'agora-owned-promo-capsule', 'background', 'promo-tile', 10, 'Capsule collection promotion'),
  media('agoraTelcoEditorialPromoGrid', 'agora-owned-promo-texture-edit', 'background', 'promo-tile', 20, 'Texture edit promotion'),
  media('agoraTelcoEditorialPromoGrid', 'agora-owned-promo-crossbody', 'background', 'promo-tile', 30, 'Crossbody bag promotion'),
  media('agoraTelcoSpecialOfferSplit', 'agora-owned-promo-texture-edit', 'background', 'offer-left', 10, 'Special offer texture edit'),
  media('agoraTelcoSpecialOfferSplit', 'agora-owned-collection-new-in', 'background', 'offer-right', 20, 'Special offer collection visual'),
  media('agoraTelcoSocialGallery', 'agora-owned-gallery-1', 'gallery', 'social', 10, 'Agora social gallery one'),
  media('agoraTelcoSocialGallery', 'agora-owned-gallery-2', 'gallery', 'social', 20, 'Agora social gallery two'),
  media('agoraTelcoSocialGallery', 'agora-owned-gallery-3', 'gallery', 'social', 30, 'Agora social gallery three'),
  media('agoraTelcoSocialGallery', 'agora-owned-gallery-4', 'gallery', 'social', 40, 'Agora social gallery four'),
  media('agoraTelcoSocialGallery', 'agora-owned-gallery-5', 'gallery', 'social', 50, 'Agora social gallery five'),
  media('agoraTelcoCustomerTestimonials', 'agora-owned-testimonial-sybil', 'primary', 'testimonial-card', 10, 'Customer testimonial visual'),
  media('agoraTelcoCustomerTestimonials', 'agora-owned-avatar-sybil', 'thumbnail', 'testimonial-avatar', 20, 'Customer avatar'),
  media('agoraTelcoCustomerTestimonials', 'agora-owned-testimonial-mark', 'primary', 'testimonial-card', 30, 'Customer testimonial visual'),
  media('agoraTelcoCustomerTestimonials', 'agora-owned-avatar-mark', 'thumbnail', 'testimonial-avatar', 40, 'Customer avatar')
];

module.exports = Object.freeze(Object.fromEntries(entries.map((entry, index) => ['record' + index, entry])));
