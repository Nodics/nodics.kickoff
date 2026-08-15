/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora warehouse source for customer-safe availability projection. */
module.exports = {
  record0: {
    code: 'agoraMainWarehouse',
    tenant: 'default',
    name: 'Agora Main Warehouse',
    status: 'ACTIVE',
    fulfillmentTypes: ['SHIP_TO_HOME', 'STORE_PICKUP'],
    storeCode: 'agoraMainStore',
    posCode: 'agoraCrystalLakePos',
    pickupEnabled: true,
    address: {
      line1: '549 Oak St',
      city: 'Crystal Lake',
      region: 'IL',
      postalCode: '60014',
      country: 'US'
    },
    operatingHours: {
      timezone: 'America/Chicago',
      mondayToFriday: '10:00-18:00',
      saturday: '10:00-16:00',
      sunday: 'CLOSED'
    },
    providerReadiness: {
      inventoryProvider: 'LOCAL_REFERENCE',
      posProvider: 'LOCAL_REFERENCE',
      certificationStatus: 'NOT_REQUIRED_FOR_LOCAL_REFERENCE'
    },
    priority: 1,
    revision: 1,
    active: true
  }
};
