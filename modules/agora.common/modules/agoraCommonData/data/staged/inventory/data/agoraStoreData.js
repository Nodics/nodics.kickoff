/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/inventory/data/agoraStoreData
 * @description Defines the Agora reference Store records required by Store Assignments and inventory/store linkage.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description Agora Store selling context used by the reference storefront and stock pickup evidence. */
module.exports = {
  record0: {
    code: 'agoraMainStore',
    tenant: 'default',
    name: 'Agora Main Store',
    status: 'ACTIVE',
    defaultCurrency: 'USD',
    defaultLocale: 'en',
    timezone: 'America/Chicago',
    revision: 1,
    active: true
  }
};
