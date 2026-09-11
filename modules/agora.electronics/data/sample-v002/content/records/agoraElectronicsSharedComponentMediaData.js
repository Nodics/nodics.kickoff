/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module modules/agora.electronics/data/sample-v002/content/records/agoraElectronicsSharedComponentMediaData
 * @description Defines CMS-owned Agora component media associations used by publication to transfer storefront media.
 * @layer data
 * @owner agora.electronics
 * @override Customer projects may replace these component-media bindings with their own approved storefront assets.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agora.electronics */

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
    "agoraElectronicsHomeHeroExperience",
    "agora-owned-electronics-hero-connected-work-v2",
    "background",
    "hero-slide",
    10,
    "Agora electronics connected workspace hero v2",
  ),
  media(
    "agoraElectronicsHomeHeroExperience",
    "agora-owned-electronics-hero-device-stack-v2",
    "background",
    "hero-slide",
    20,
    "Agora electronics device stack hero v2",
  ),
  media(
    "agoraElectronicsHomeHeroExperience",
    "agora-owned-electronics-hero-smart-home-v2",
    "background",
    "hero-slide",
    30,
    "Agora electronics smart home hero v2",
  ),
  media(
    "agoraElectronicsHomeCollectionGrid",
    "agora-owned-electronics-nova-phone-v1",
    "thumbnail",
    "collection-tile",
    10,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsHomeCollectionGrid",
    "agora-owned-electronics-air-pro-laptop-v1",
    "thumbnail",
    "collection-tile",
    20,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsHomeCollectionGrid",
    "agora-owned-electronics-air-pro-laptop-v1",
    "thumbnail",
    "collection-tile",
    30,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsHomeCollectionGrid",
    "agora-owned-electronics-nova-phone-v1",
    "thumbnail",
    "collection-tile",
    40,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsHomeCollectionGrid",
    "agora-owned-electronics-air-pro-laptop-v1",
    "thumbnail",
    "collection-tile",
    50,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsHomeCollectionGrid",
    "agora-owned-electronics-nova-phone-v1",
    "thumbnail",
    "collection-tile",
    60,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsEditorialPromoGrid",
    "agora-owned-electronics-air-pro-laptop-v1",
    "background",
    "promo-tile",
    10,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsEditorialPromoGrid",
    "agora-owned-electronics-air-pro-laptop-v1",
    "background",
    "promo-tile",
    20,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsEditorialPromoGrid",
    "agora-owned-electronics-nova-phone-v1",
    "background",
    "promo-tile",
    30,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsSpecialOfferSplit",
    "agora-owned-electronics-air-pro-laptop-v1",
    "background",
    "offer-left",
    10,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsSpecialOfferSplit",
    "agora-owned-electronics-nova-phone-v1",
    "background",
    "offer-right",
    20,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsSocialGallery",
    "agora-owned-electronics-nova-phone-v1",
    "gallery",
    "social",
    10,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsSocialGallery",
    "agora-owned-electronics-air-pro-laptop-v1",
    "gallery",
    "social",
    20,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsSocialGallery",
    "agora-owned-electronics-nova-phone-v1",
    "gallery",
    "social",
    30,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsSocialGallery",
    "agora-owned-electronics-air-pro-laptop-v1",
    "gallery",
    "social",
    40,
    "Air Pro Laptop",
  ),
  media(
    "agoraElectronicsSocialGallery",
    "agora-owned-electronics-nova-phone-v1",
    "gallery",
    "social",
    50,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsCustomerTestimonials",
    "agora-owned-electronics-nova-phone-v1",
    "primary",
    "testimonial-card",
    10,
    "Nova 5G Smartphone",
  ),
  media(
    "agoraElectronicsCustomerTestimonials",
    "agora-owned-electronics-air-pro-laptop-v1",
    "primary",
    "testimonial-card",
    30,
    "Air Pro Laptop",
  ),
];

module.exports = Object.freeze(
  Object.fromEntries(entries.map((entry, index) => ["record" + index, entry])),
);
