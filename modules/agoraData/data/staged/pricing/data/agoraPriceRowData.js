/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product price rows for customer-safe discovery projection. */
const row = (code, productCode, unitAmount) => ({
  code,
  tenant: 'default',
  priceBookCode: 'agoraRetailUsd',
  productCode,
  unitAmount,
  currency: 'USD',
  minQuantity: '1',
  validFrom: '2026-01-01T00:00:00.000Z',
  revision: 1,
  active: true
});

module.exports = {
  record0: row('agoraPriceLinenWrapDress', 'agoraLinenWrapDress', '129.00'),
  record1: row('agoraPriceSatinMidiDress', 'agoraSatinMidiDress', '149.00'),
  record2: row('agoraPriceRibbedKnitTop', 'agoraRibbedKnitTop', '59.00'),
  record3: row('agoraPriceCottonPoplinShirtWomen', 'agoraCottonPoplinShirtWomen', '79.00'),
  record4: row('agoraPriceLeatherTote', 'agoraLeatherTote', '189.00'),
  record5: row('agoraPriceSilkScarf', 'agoraSilkScarf', '49.00'),
  record6: row('agoraPriceOxfordShirt', 'agoraOxfordShirt', '89.00'),
  record7: row('agoraPriceLinenCampShirt', 'agoraLinenCampShirt', '92.00'),
  record8: row('agoraPriceTailoredChino', 'agoraTailoredChino', '98.00'),
  record9: row('agoraPriceRelaxedTrouser', 'agoraRelaxedTrouser', '104.00'),
  record10: row('agoraPriceCanvasBelt', 'agoraCanvasBelt', '39.00'),
  record11: row('agoraPriceWoolCap', 'agoraWoolCap', '42.00')
};
