/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraData */

/** @description Agora storefront page template slots. */
module.exports = {
  record0: {
    code: 'agoraMainSlot',
    template: 'agoraStorefrontPageTemplate',
    name: 'main',
    minItems: 1,
    maxItems: 20,
    allowedComponentTypeGroups: ['agoraStorefrontDiscoveryGroup'],
    active: true
  }
};
