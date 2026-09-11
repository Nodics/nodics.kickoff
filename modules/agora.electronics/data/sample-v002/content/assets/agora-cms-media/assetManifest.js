/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module modules/agora.electronics/data/sample-v002/content/assets/agora-cms-media/assetManifest
 * @description Declares agora.electronics-owned Agora media assets that must be uploaded to WCMS Staged before CMS publication.
 * @layer assets
 * @owner agora.electronics
 * @override Customer projects may replace these sample assets with their own approved commerce media.
 */

const cmsAsset = function (mediaCode, fileName, name, ownerCode) {
  return {
    mediaCode,
    fileName,
    name,
    ownerCode,
    folderCode: "cmsAssets",
    formatCode: "original",
    businessPurpose: "AGORA_STOREFRONT_CONTENT",
    ownerType: "CMS_COMPONENT",
    description: name + " for Agora storefront CMS delivery",
  };
};

const productAsset = function (mediaCode, fileName, name, productCode) {
  return {
    mediaCode,
    fileName,
    name,
    ownerCode: productCode,
    folderCode: "cmsAssets",
    formatCode: "original",
    businessPurpose: "AGORA_PRODUCT_PRIMARY_IMAGE",
    ownerType: "PRODUCT",
    description: name + " for Agora product discovery delivery",
  };
};

module.exports = Object.freeze([
  productAsset(
    "agora-owned-electronics-nova-phone-v1",
    "agora-owned-electronics-nova-phone-v1.svg",
    "Nova 5G Smartphone",
    "agoraElectronicsNovaPhone",
  ),
  productAsset(
    "agora-owned-electronics-air-pro-laptop-v1",
    "agora-owned-electronics-air-pro-laptop-v1.svg",
    "Air Pro Laptop",
    "agoraElectronicsAirLaptop",
  ),
  cmsAsset(
    "agora-owned-electronics-hero-connected-work",
    "agora-owned-electronics-hero-connected-work.svg",
    "Agora electronics connected workspace hero",
    "agoraElectronicsHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-electronics-hero-device-stack",
    "agora-owned-electronics-hero-device-stack.svg",
    "Agora electronics device stack hero",
    "agoraElectronicsHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-electronics-hero-smart-home",
    "agora-owned-electronics-hero-smart-home.svg",
    "Agora electronics smart home hero",
    "agoraElectronicsHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-electronics-hero-connected-work-v2",
    "agora-owned-electronics-hero-connected-work-v2.svg",
    "Agora electronics connected workspace hero v2",
    "agoraElectronicsHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-electronics-hero-device-stack-v2",
    "agora-owned-electronics-hero-device-stack-v2.svg",
    "Agora electronics device stack hero v2",
    "agoraElectronicsHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-electronics-hero-smart-home-v2",
    "agora-owned-electronics-hero-smart-home-v2.svg",
    "Agora electronics smart home hero v2",
    "agoraElectronicsHomeHeroExperience",
  ),
]);
