/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/product/data/agoraProductVariantData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description Agora Product variant identity source for the first discovery slice. */
const variant = (code, productCode, sku, colorCode, sizeCode) => ({
  code,
  tenant: 'default',
  productCode,
  sku,
  attributes: { colorCode, sizeCode },
  status: 'ACTIVE',
  revision: 1,
  active: true
});

module.exports = {
  record0: variant('agoraLinenWrapDressNaturalS', 'agoraLinenWrapDress', 'AGORA-DRESS-LINEN-NAT-S', 'natural', 'S'),
  record1: variant('agoraLinenWrapDressNaturalM', 'agoraLinenWrapDress', 'AGORA-DRESS-LINEN-NAT-M', 'natural', 'M'),
  record2: variant('agoraSatinMidiDressNavyS', 'agoraSatinMidiDress', 'AGORA-DRESS-SATIN-NAV-S', 'navy', 'S'),
  record3: variant('agoraSatinMidiDressNavyM', 'agoraSatinMidiDress', 'AGORA-DRESS-SATIN-NAV-M', 'navy', 'M'),
  record4: variant('agoraRibbedKnitTopCreamS', 'agoraRibbedKnitTop', 'AGORA-TOP-KNIT-CRM-S', 'cream', 'S'),
  record5: variant('agoraRibbedKnitTopCreamM', 'agoraRibbedKnitTop', 'AGORA-TOP-KNIT-CRM-M', 'cream', 'M'),
  record6: variant('agoraCottonPoplinShirtWomenWhiteS', 'agoraCottonPoplinShirtWomen', 'AGORA-TOP-POPLIN-WHT-S', 'white', 'S'),
  record7: variant('agoraCottonPoplinShirtWomenWhiteM', 'agoraCottonPoplinShirtWomen', 'AGORA-TOP-POPLIN-WHT-M', 'white', 'M'),
  record8: variant('agoraLeatherToteTanOne', 'agoraLeatherTote', 'AGORA-ACC-TOTE-TAN-ONE', 'tan', 'ONE'),
  record9: variant('agoraLeatherToteBlackOne', 'agoraLeatherTote', 'AGORA-ACC-TOTE-BLK-ONE', 'black', 'ONE'),
  record10: variant('agoraSilkScarfPrintOne', 'agoraSilkScarf', 'AGORA-ACC-SCARF-PRT-ONE', 'print', 'ONE'),
  record11: variant('agoraSilkScarfIvoryOne', 'agoraSilkScarf', 'AGORA-ACC-SCARF-IVY-ONE', 'ivory', 'ONE'),
  record12: variant('agoraOxfordShirtBlueM', 'agoraOxfordShirt', 'AGORA-SHIRT-OXF-BLU-M', 'blue', 'M'),
  record13: variant('agoraOxfordShirtBlueL', 'agoraOxfordShirt', 'AGORA-SHIRT-OXF-BLU-L', 'blue', 'L'),
  record14: variant('agoraLinenCampShirtOliveM', 'agoraLinenCampShirt', 'AGORA-SHIRT-CAMP-OLV-M', 'olive', 'M'),
  record15: variant('agoraLinenCampShirtOliveL', 'agoraLinenCampShirt', 'AGORA-SHIRT-CAMP-OLV-L', 'olive', 'L'),
  record16: variant('agoraTailoredChinoKhaki32', 'agoraTailoredChino', 'AGORA-TROUSER-CHINO-KHK-32', 'khaki', '32'),
  record17: variant('agoraTailoredChinoKhaki34', 'agoraTailoredChino', 'AGORA-TROUSER-CHINO-KHK-34', 'khaki', '34'),
  record18: variant('agoraRelaxedTrouserCharcoal32', 'agoraRelaxedTrouser', 'AGORA-TROUSER-RELAX-CHR-32', 'charcoal', '32'),
  record19: variant('agoraRelaxedTrouserCharcoal34', 'agoraRelaxedTrouser', 'AGORA-TROUSER-RELAX-CHR-34', 'charcoal', '34'),
  record20: variant('agoraCanvasBeltBlackM', 'agoraCanvasBelt', 'AGORA-ACC-BELT-BLK-M', 'black', 'M'),
  record21: variant('agoraCanvasBeltBlackL', 'agoraCanvasBelt', 'AGORA-ACC-BELT-BLK-L', 'black', 'L'),
  record22: variant('agoraWoolCapGreyOne', 'agoraWoolCap', 'AGORA-ACC-CAP-GRY-ONE', 'grey', 'ONE'),
  record23: variant('agoraWoolCapNavyOne', 'agoraWoolCap', 'AGORA-ACC-CAP-NAV-ONE', 'navy', 'ONE')
};
