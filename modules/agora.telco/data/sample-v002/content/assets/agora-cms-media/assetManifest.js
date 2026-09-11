/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module modules/agora.telco/data/sample-v002/content/assets/agora-cms-media/assetManifest
 * @description Declares agora.telco-owned Agora media assets that must be uploaded to WCMS Staged before CMS publication.
 * @layer assets
 * @owner agora.telco
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
    "agora-owned-telco-unlimited-postpaid-v1",
    "agora-owned-telco-unlimited-postpaid-v1.svg",
    "Unlimited Postpaid",
    "agoraTelcoUnlimitedPostpaid",
  ),
  productAsset(
    "agora-owned-telco-flexi-prepaid-v1",
    "agora-owned-telco-flexi-prepaid-v1.svg",
    "Flexi Prepaid",
    "agoraTelcoFlexiPrepaid",
  ),
  cmsAsset(
    "agora-owned-telco-hero-connected-plans",
    "agora-owned-telco-hero-connected-plans.svg",
    "Agora telco connected plans hero",
    "agoraTelcoHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-telco-hero-plan-finder",
    "agora-owned-telco-hero-plan-finder.svg",
    "Agora telco plan finder hero",
    "agoraTelcoHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-telco-hero-bundle-network",
    "agora-owned-telco-hero-bundle-network.svg",
    "Agora telco bundle network hero",
    "agoraTelcoHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-telco-hero-connected-plans-v2",
    "agora-owned-telco-hero-connected-plans-v2.svg",
    "Agora telco connected plans hero v2",
    "agoraTelcoHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-telco-hero-plan-finder-v2",
    "agora-owned-telco-hero-plan-finder-v2.svg",
    "Agora telco plan finder hero v2",
    "agoraTelcoHomeHeroExperience",
  ),
  cmsAsset(
    "agora-owned-telco-hero-bundle-network-v2",
    "agora-owned-telco-hero-bundle-network-v2.svg",
    "Agora telco bundle network hero v2",
    "agoraTelcoHomeHeroExperience",
  ),
]);
