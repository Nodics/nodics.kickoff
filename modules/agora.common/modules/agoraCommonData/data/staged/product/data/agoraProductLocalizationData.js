/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/product/data/agoraProductLocalizationData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description English and Arabic Agora Product localization source for the first discovery slice. */
const product = (code, productCode, locale, name, slug, categoryCodes, attributes) => ({
  code,
  tenant: 'default',
  productCode,
  locale,
  name,
  description: locale === 'ar'
    ? `${name} لرحلة اكتشاف واجهة متجر نودكس أجورا المرجعية.`
    : `${name} for the Nodics Agora reference storefront discovery journey.`,
  slug,
  seo: { title: `${name} | Nodics Agora`, description: `${name} reference product` },
  attributes,
  classificationValues: { categoryCodes, storeCode: 'agoraMainStore', collection: 'agoraDiscovery' },
  mediaText: { primaryAlt: `${name} product placeholder` },
  status: 'READY',
  revision: 1,
  active: true
});

module.exports = {
  record0: product('agoraLinenWrapDress-en', 'agoraLinenWrapDress', 'en', 'Linen Wrap Dress', 'linen-wrap-dress', ['agoraNewArrivals', 'agoraWomen', 'agoraWomenDresses'], { colorFamily: 'natural', material: 'linen', audience: 'women' }),
  record1: product('agoraSatinMidiDress-en', 'agoraSatinMidiDress', 'en', 'Satin Midi Dress', 'satin-midi-dress', ['agoraNewArrivals', 'agoraWomen', 'agoraWomenDresses'], { colorFamily: 'navy', material: 'satin', audience: 'women' }),
  record2: product('agoraRibbedKnitTop-en', 'agoraRibbedKnitTop', 'en', 'Ribbed Knit Top', 'ribbed-knit-top', ['agoraWomen', 'agoraWomenTops'], { colorFamily: 'cream', material: 'cotton blend', audience: 'women' }),
  record3: product('agoraCottonPoplinShirtWomen-en', 'agoraCottonPoplinShirtWomen', 'en', 'Cotton Poplin Shirt', 'cotton-poplin-shirt-women', ['agoraWomen', 'agoraWomenTops'], { colorFamily: 'white', material: 'cotton', audience: 'women' }),
  record4: product('agoraLeatherTote-en', 'agoraLeatherTote', 'en', 'Leather Tote', 'leather-tote', ['agoraWomen', 'agoraWomenAccessories'], { colorFamily: 'tan', material: 'leather', audience: 'women' }),
  record5: product('agoraSilkScarf-en', 'agoraSilkScarf', 'en', 'Silk Scarf', 'silk-scarf', ['agoraWomen', 'agoraWomenAccessories'], { colorFamily: 'print', material: 'silk', audience: 'women' }),
  record6: product('agoraOxfordShirt-en', 'agoraOxfordShirt', 'en', 'Oxford Shirt', 'oxford-shirt', ['agoraNewArrivals', 'agoraMen', 'agoraMenShirts'], { colorFamily: 'blue', material: 'cotton', audience: 'men' }),
  record7: product('agoraLinenCampShirt-en', 'agoraLinenCampShirt', 'en', 'Linen Camp Shirt', 'linen-camp-shirt', ['agoraMen', 'agoraMenShirts'], { colorFamily: 'olive', material: 'linen', audience: 'men' }),
  record8: product('agoraTailoredChino-en', 'agoraTailoredChino', 'en', 'Tailored Chino', 'tailored-chino', ['agoraMen', 'agoraMenTrousers'], { colorFamily: 'khaki', material: 'cotton twill', audience: 'men' }),
  record9: product('agoraRelaxedTrouser-en', 'agoraRelaxedTrouser', 'en', 'Relaxed Trouser', 'relaxed-trouser', ['agoraMen', 'agoraMenTrousers'], { colorFamily: 'charcoal', material: 'wool blend', audience: 'men' }),
  record10: product('agoraCanvasBelt-en', 'agoraCanvasBelt', 'en', 'Canvas Belt', 'canvas-belt', ['agoraMen', 'agoraMenAccessories'], { colorFamily: 'black', material: 'canvas', audience: 'men' }),
  record11: product('agoraWoolCap-en', 'agoraWoolCap', 'en', 'Wool Cap', 'wool-cap', ['agoraMen', 'agoraMenAccessories'], { colorFamily: 'grey', material: 'wool', audience: 'men' }),
  record12: product('agoraLinenWrapDress-ar', 'agoraLinenWrapDress', 'ar', 'فستان كتان ملفوف', 'linen-wrap-dress', ['agoraNewArrivals', 'agoraWomen', 'agoraWomenDresses'], { colorFamily: 'natural', material: 'linen', audience: 'women' }),
  record13: product('agoraSatinMidiDress-ar', 'agoraSatinMidiDress', 'ar', 'فستان ساتان متوسط', 'satin-midi-dress', ['agoraNewArrivals', 'agoraWomen', 'agoraWomenDresses'], { colorFamily: 'navy', material: 'satin', audience: 'women' }),
  record14: product('agoraRibbedKnitTop-ar', 'agoraRibbedKnitTop', 'ar', 'بلوزة محبوكة مضلعة', 'ribbed-knit-top', ['agoraWomen', 'agoraWomenTops'], { colorFamily: 'cream', material: 'cotton blend', audience: 'women' }),
  record15: product('agoraCottonPoplinShirtWomen-ar', 'agoraCottonPoplinShirtWomen', 'ar', 'قميص بوبلين قطني', 'cotton-poplin-shirt-women', ['agoraWomen', 'agoraWomenTops'], { colorFamily: 'white', material: 'cotton', audience: 'women' }),
  record16: product('agoraLeatherTote-ar', 'agoraLeatherTote', 'ar', 'حقيبة جلدية', 'leather-tote', ['agoraWomen', 'agoraWomenAccessories'], { colorFamily: 'tan', material: 'leather', audience: 'women' }),
  record17: product('agoraSilkScarf-ar', 'agoraSilkScarf', 'ar', 'وشاح حرير', 'silk-scarf', ['agoraWomen', 'agoraWomenAccessories'], { colorFamily: 'print', material: 'silk', audience: 'women' }),
  record18: product('agoraOxfordShirt-ar', 'agoraOxfordShirt', 'ar', 'قميص أكسفورد', 'oxford-shirt', ['agoraNewArrivals', 'agoraMen', 'agoraMenShirts'], { colorFamily: 'blue', material: 'cotton', audience: 'men' }),
  record19: product('agoraLinenCampShirt-ar', 'agoraLinenCampShirt', 'ar', 'قميص كتان كاجوال', 'linen-camp-shirt', ['agoraMen', 'agoraMenShirts'], { colorFamily: 'olive', material: 'linen', audience: 'men' }),
  record20: product('agoraTailoredChino-ar', 'agoraTailoredChino', 'ar', 'بنطال تشينو مفصل', 'tailored-chino', ['agoraMen', 'agoraMenTrousers'], { colorFamily: 'khaki', material: 'cotton twill', audience: 'men' }),
  record21: product('agoraRelaxedTrouser-ar', 'agoraRelaxedTrouser', 'ar', 'بنطال مريح', 'relaxed-trouser', ['agoraMen', 'agoraMenTrousers'], { colorFamily: 'charcoal', material: 'wool blend', audience: 'men' }),
  record22: product('agoraCanvasBelt-ar', 'agoraCanvasBelt', 'ar', 'حزام قماشي', 'canvas-belt', ['agoraMen', 'agoraMenAccessories'], { colorFamily: 'black', material: 'canvas', audience: 'men' }),
  record23: product('agoraWoolCap-ar', 'agoraWoolCap', 'ar', 'قبعة صوف', 'wool-cap', ['agoraMen', 'agoraMenAccessories'], { colorFamily: 'grey', material: 'wool', audience: 'men' })
};
