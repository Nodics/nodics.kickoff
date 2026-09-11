/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module modules/agora.telco/data/sample-v002/content/records/agoraTelcoSharedComponentMediaData
 * @description Defines CMS-owned Agora component media associations used by publication to transfer storefront media.
 * @layer data
 * @owner agora.telco
 * @override Customer projects may replace these component-media bindings with their own approved storefront assets.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agora.telco */

const media = function (
  componentCode,
  mediaCode,
  role,
  slot,
  position,
  altText,
) {
  return {
    active: true,
    code: componentCode + "-" + role + "-" + position,
    tenant: "default",
    componentMediaCode: componentCode + "-" + role + "-" + position,
    componentCode,
    mediaCode,
    mediaType: "IMAGE",
    role,
    slot,
    localeCode: "en",
    position,
    altText,
  };
};

const entries = [
  media(
    "agoraTelcoHomeHeroExperience",
    "agora-owned-telco-hero-connected-plans-v2",
    "background",
    "hero-slide",
    10,
    "Agora telco connected plans hero v2",
  ),
  media(
    "agoraTelcoHomeHeroExperience",
    "agora-owned-telco-hero-plan-finder-v2",
    "background",
    "hero-slide",
    20,
    "Agora telco plan finder hero v2",
  ),
  media(
    "agoraTelcoHomeHeroExperience",
    "agora-owned-telco-hero-bundle-network-v2",
    "background",
    "hero-slide",
    30,
    "Agora telco bundle network hero v2",
  ),
  media(
    "agoraTelcoHomeCollectionGrid",
    "agora-owned-telco-unlimited-postpaid-v1",
    "thumbnail",
    "collection-tile",
    10,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoHomeCollectionGrid",
    "agora-owned-telco-flexi-prepaid-v1",
    "thumbnail",
    "collection-tile",
    20,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoHomeCollectionGrid",
    "agora-owned-telco-flexi-prepaid-v1",
    "thumbnail",
    "collection-tile",
    30,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoHomeCollectionGrid",
    "agora-owned-telco-unlimited-postpaid-v1",
    "thumbnail",
    "collection-tile",
    40,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoHomeCollectionGrid",
    "agora-owned-telco-flexi-prepaid-v1",
    "thumbnail",
    "collection-tile",
    50,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoHomeCollectionGrid",
    "agora-owned-telco-unlimited-postpaid-v1",
    "thumbnail",
    "collection-tile",
    60,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoEditorialPromoGrid",
    "agora-owned-telco-flexi-prepaid-v1",
    "background",
    "promo-tile",
    10,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoEditorialPromoGrid",
    "agora-owned-telco-flexi-prepaid-v1",
    "background",
    "promo-tile",
    20,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoEditorialPromoGrid",
    "agora-owned-telco-unlimited-postpaid-v1",
    "background",
    "promo-tile",
    30,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoSpecialOfferSplit",
    "agora-owned-telco-flexi-prepaid-v1",
    "background",
    "offer-left",
    10,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoSpecialOfferSplit",
    "agora-owned-telco-unlimited-postpaid-v1",
    "background",
    "offer-right",
    20,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoSocialGallery",
    "agora-owned-telco-unlimited-postpaid-v1",
    "gallery",
    "social",
    10,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoSocialGallery",
    "agora-owned-telco-flexi-prepaid-v1",
    "gallery",
    "social",
    20,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoSocialGallery",
    "agora-owned-telco-unlimited-postpaid-v1",
    "gallery",
    "social",
    30,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoSocialGallery",
    "agora-owned-telco-flexi-prepaid-v1",
    "gallery",
    "social",
    40,
    "Flexi Prepaid",
  ),
  media(
    "agoraTelcoSocialGallery",
    "agora-owned-telco-unlimited-postpaid-v1",
    "gallery",
    "social",
    50,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoCustomerTestimonials",
    "agora-owned-telco-unlimited-postpaid-v1",
    "primary",
    "testimonial-card",
    10,
    "Unlimited Postpaid",
  ),
  media(
    "agoraTelcoCustomerTestimonials",
    "agora-owned-telco-flexi-prepaid-v1",
    "primary",
    "testimonial-card",
    30,
    "Flexi Prepaid",
  ),
];

module.exports = Object.freeze(
  Object.fromEntries(entries.map((entry, index) => ["record" + index, entry])),
);
