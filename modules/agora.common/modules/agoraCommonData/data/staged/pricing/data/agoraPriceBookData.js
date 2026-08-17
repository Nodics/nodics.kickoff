/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/pricing/data/agoraPriceBookData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

/** @description Agora retail USD price book for the first discovery slice. */
module.exports = {
  record0: {
    code: 'agoraRetailUsd',
    tenant: 'default',
    currency: 'USD',
    status: 'ACTIVE',
    validFrom: '2026-01-01T00:00:00.000Z',
    revision: 1,
    active: true
  }
};
