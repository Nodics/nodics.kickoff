/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description English and Arabic Agora Product variant localization source for the first discovery slice. */
const variant = (code, productCode, variantCode, locale, color, size) => ({
  code,
  tenant: 'default',
  productCode,
  variantCode,
  locale,
  attributes: { color, size },
  status: 'READY',
  revision: 1,
  active: true
});

module.exports = {
  record0: variant('agoraLinenWrapDressNaturalS-en', 'agoraLinenWrapDress', 'agoraLinenWrapDressNaturalS', 'en', 'Natural', 'S'),
  record1: variant('agoraLinenWrapDressNaturalM-en', 'agoraLinenWrapDress', 'agoraLinenWrapDressNaturalM', 'en', 'Natural', 'M'),
  record2: variant('agoraSatinMidiDressNavyS-en', 'agoraSatinMidiDress', 'agoraSatinMidiDressNavyS', 'en', 'Navy', 'S'),
  record3: variant('agoraSatinMidiDressNavyM-en', 'agoraSatinMidiDress', 'agoraSatinMidiDressNavyM', 'en', 'Navy', 'M'),
  record4: variant('agoraRibbedKnitTopCreamS-en', 'agoraRibbedKnitTop', 'agoraRibbedKnitTopCreamS', 'en', 'Cream', 'S'),
  record5: variant('agoraRibbedKnitTopCreamM-en', 'agoraRibbedKnitTop', 'agoraRibbedKnitTopCreamM', 'en', 'Cream', 'M'),
  record6: variant('agoraCottonPoplinShirtWomenWhiteS-en', 'agoraCottonPoplinShirtWomen', 'agoraCottonPoplinShirtWomenWhiteS', 'en', 'White', 'S'),
  record7: variant('agoraCottonPoplinShirtWomenWhiteM-en', 'agoraCottonPoplinShirtWomen', 'agoraCottonPoplinShirtWomenWhiteM', 'en', 'White', 'M'),
  record8: variant('agoraLeatherToteTanOne-en', 'agoraLeatherTote', 'agoraLeatherToteTanOne', 'en', 'Tan', 'One size'),
  record9: variant('agoraLeatherToteBlackOne-en', 'agoraLeatherTote', 'agoraLeatherToteBlackOne', 'en', 'Black', 'One size'),
  record10: variant('agoraSilkScarfPrintOne-en', 'agoraSilkScarf', 'agoraSilkScarfPrintOne', 'en', 'Print', 'One size'),
  record11: variant('agoraSilkScarfIvoryOne-en', 'agoraSilkScarf', 'agoraSilkScarfIvoryOne', 'en', 'Ivory', 'One size'),
  record12: variant('agoraOxfordShirtBlueM-en', 'agoraOxfordShirt', 'agoraOxfordShirtBlueM', 'en', 'Blue', 'M'),
  record13: variant('agoraOxfordShirtBlueL-en', 'agoraOxfordShirt', 'agoraOxfordShirtBlueL', 'en', 'Blue', 'L'),
  record14: variant('agoraLinenCampShirtOliveM-en', 'agoraLinenCampShirt', 'agoraLinenCampShirtOliveM', 'en', 'Olive', 'M'),
  record15: variant('agoraLinenCampShirtOliveL-en', 'agoraLinenCampShirt', 'agoraLinenCampShirtOliveL', 'en', 'Olive', 'L'),
  record16: variant('agoraTailoredChinoKhaki32-en', 'agoraTailoredChino', 'agoraTailoredChinoKhaki32', 'en', 'Khaki', '32'),
  record17: variant('agoraTailoredChinoKhaki34-en', 'agoraTailoredChino', 'agoraTailoredChinoKhaki34', 'en', 'Khaki', '34'),
  record18: variant('agoraRelaxedTrouserCharcoal32-en', 'agoraRelaxedTrouser', 'agoraRelaxedTrouserCharcoal32', 'en', 'Charcoal', '32'),
  record19: variant('agoraRelaxedTrouserCharcoal34-en', 'agoraRelaxedTrouser', 'agoraRelaxedTrouserCharcoal34', 'en', 'Charcoal', '34'),
  record20: variant('agoraCanvasBeltBlackM-en', 'agoraCanvasBelt', 'agoraCanvasBeltBlackM', 'en', 'Black', 'M'),
  record21: variant('agoraCanvasBeltBlackL-en', 'agoraCanvasBelt', 'agoraCanvasBeltBlackL', 'en', 'Black', 'L'),
  record22: variant('agoraWoolCapGreyOne-en', 'agoraWoolCap', 'agoraWoolCapGreyOne', 'en', 'Grey', 'One size'),
  record23: variant('agoraWoolCapNavyOne-en', 'agoraWoolCap', 'agoraWoolCapNavyOne', 'en', 'Navy', 'One size'),
  record24: variant('agoraLinenWrapDressNaturalS-ar', 'agoraLinenWrapDress', 'agoraLinenWrapDressNaturalS', 'ar', 'طبيعي', 'S'),
  record25: variant('agoraLinenWrapDressNaturalM-ar', 'agoraLinenWrapDress', 'agoraLinenWrapDressNaturalM', 'ar', 'طبيعي', 'M'),
  record26: variant('agoraSatinMidiDressNavyS-ar', 'agoraSatinMidiDress', 'agoraSatinMidiDressNavyS', 'ar', 'كحلي', 'S'),
  record27: variant('agoraSatinMidiDressNavyM-ar', 'agoraSatinMidiDress', 'agoraSatinMidiDressNavyM', 'ar', 'كحلي', 'M'),
  record28: variant('agoraRibbedKnitTopCreamS-ar', 'agoraRibbedKnitTop', 'agoraRibbedKnitTopCreamS', 'ar', 'كريمي', 'S'),
  record29: variant('agoraRibbedKnitTopCreamM-ar', 'agoraRibbedKnitTop', 'agoraRibbedKnitTopCreamM', 'ar', 'كريمي', 'M'),
  record30: variant('agoraCottonPoplinShirtWomenWhiteS-ar', 'agoraCottonPoplinShirtWomen', 'agoraCottonPoplinShirtWomenWhiteS', 'ar', 'أبيض', 'S'),
  record31: variant('agoraCottonPoplinShirtWomenWhiteM-ar', 'agoraCottonPoplinShirtWomen', 'agoraCottonPoplinShirtWomenWhiteM', 'ar', 'أبيض', 'M'),
  record32: variant('agoraLeatherToteTanOne-ar', 'agoraLeatherTote', 'agoraLeatherToteTanOne', 'ar', 'بني فاتح', 'مقاس واحد'),
  record33: variant('agoraLeatherToteBlackOne-ar', 'agoraLeatherTote', 'agoraLeatherToteBlackOne', 'ar', 'أسود', 'مقاس واحد'),
  record34: variant('agoraSilkScarfPrintOne-ar', 'agoraSilkScarf', 'agoraSilkScarfPrintOne', 'ar', 'نقشة', 'مقاس واحد'),
  record35: variant('agoraSilkScarfIvoryOne-ar', 'agoraSilkScarf', 'agoraSilkScarfIvoryOne', 'ar', 'عاجي', 'مقاس واحد'),
  record36: variant('agoraOxfordShirtBlueM-ar', 'agoraOxfordShirt', 'agoraOxfordShirtBlueM', 'ar', 'أزرق', 'M'),
  record37: variant('agoraOxfordShirtBlueL-ar', 'agoraOxfordShirt', 'agoraOxfordShirtBlueL', 'ar', 'أزرق', 'L'),
  record38: variant('agoraLinenCampShirtOliveM-ar', 'agoraLinenCampShirt', 'agoraLinenCampShirtOliveM', 'ar', 'زيتوني', 'M'),
  record39: variant('agoraLinenCampShirtOliveL-ar', 'agoraLinenCampShirt', 'agoraLinenCampShirtOliveL', 'ar', 'زيتوني', 'L'),
  record40: variant('agoraTailoredChinoKhaki32-ar', 'agoraTailoredChino', 'agoraTailoredChinoKhaki32', 'ar', 'كاكي', '32'),
  record41: variant('agoraTailoredChinoKhaki34-ar', 'agoraTailoredChino', 'agoraTailoredChinoKhaki34', 'ar', 'كاكي', '34'),
  record42: variant('agoraRelaxedTrouserCharcoal32-ar', 'agoraRelaxedTrouser', 'agoraRelaxedTrouserCharcoal32', 'ar', 'فحمي', '32'),
  record43: variant('agoraRelaxedTrouserCharcoal34-ar', 'agoraRelaxedTrouser', 'agoraRelaxedTrouserCharcoal34', 'ar', 'فحمي', '34'),
  record44: variant('agoraCanvasBeltBlackM-ar', 'agoraCanvasBelt', 'agoraCanvasBeltBlackM', 'ar', 'أسود', 'M'),
  record45: variant('agoraCanvasBeltBlackL-ar', 'agoraCanvasBelt', 'agoraCanvasBeltBlackL', 'ar', 'أسود', 'L'),
  record46: variant('agoraWoolCapGreyOne-ar', 'agoraWoolCap', 'agoraWoolCapGreyOne', 'ar', 'رمادي', 'مقاس واحد'),
  record47: variant('agoraWoolCapNavyOne-ar', 'agoraWoolCap', 'agoraWoolCapNavyOne', 'ar', 'كحلي', 'مقاس واحد')
};
