/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora SKU balances for customer-safe availability projection. */
const balance = (index, sku, available) => ({
  code: `agoraMainWarehouse:${sku}`,
  tenant: 'default',
  warehouseCode: 'agoraMainWarehouse',
  sku,
  onHand: String(Number(available) + 2),
  reserved: '0',
  allocated: '0',
  available: String(available),
  priority: 1,
  revision: 1,
  active: true
});

module.exports = {
  record0: balance(0, 'AGORA-DRESS-LINEN-NAT-S', '8'),
  record1: balance(1, 'AGORA-DRESS-LINEN-NAT-M', '11'),
  record2: balance(2, 'AGORA-DRESS-SATIN-NAV-S', '7'),
  record3: balance(3, 'AGORA-DRESS-SATIN-NAV-M', '9'),
  record4: balance(4, 'AGORA-TOP-KNIT-CRM-S', '14'),
  record5: balance(5, 'AGORA-TOP-KNIT-CRM-M', '10'),
  record6: balance(6, 'AGORA-TOP-POPLIN-WHT-S', '12'),
  record7: balance(7, 'AGORA-TOP-POPLIN-WHT-M', '13'),
  record8: balance(8, 'AGORA-ACC-TOTE-TAN-ONE', '6'),
  record9: balance(9, 'AGORA-ACC-TOTE-BLK-ONE', '5'),
  record10: balance(10, 'AGORA-ACC-SCARF-PRT-ONE', '18'),
  record11: balance(11, 'AGORA-ACC-SCARF-IVY-ONE', '16'),
  record12: balance(12, 'AGORA-SHIRT-OXF-BLU-M', '9'),
  record13: balance(13, 'AGORA-SHIRT-OXF-BLU-L', '7'),
  record14: balance(14, 'AGORA-SHIRT-CAMP-OLV-M', '8'),
  record15: balance(15, 'AGORA-SHIRT-CAMP-OLV-L', '6'),
  record16: balance(16, 'AGORA-TROUSER-CHINO-KHK-32', '10'),
  record17: balance(17, 'AGORA-TROUSER-CHINO-KHK-34', '8'),
  record18: balance(18, 'AGORA-TROUSER-RELAX-CHR-32', '9'),
  record19: balance(19, 'AGORA-TROUSER-RELAX-CHR-34', '7'),
  record20: balance(20, 'AGORA-ACC-BELT-BLK-M', '20'),
  record21: balance(21, 'AGORA-ACC-BELT-BLK-L', '17'),
  record22: balance(22, 'AGORA-ACC-CAP-GRY-ONE', '15'),
  record23: balance(23, 'AGORA-ACC-CAP-NAV-ONE', '12')
};
