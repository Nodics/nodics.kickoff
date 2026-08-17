/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/inventory/data/agoraWarehouseData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

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
