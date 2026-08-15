/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora storefront page template. */
module.exports = {
  record0: {
    code: 'agoraStorefrontPageTemplate',
    name: 'Nodics Agora Storefront Page',
    renderer: 'agora.template.storefront',
    contractVersion: 1,
    slots: ['agoraMainSlot'],
    active: true
  }
};
