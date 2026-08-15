/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Agora Product Discovery field mapping for safe indexed fields. */
module.exports = {
  record0: {
    code: 'agoraProductDiscoveryFieldMapping',
    tenant: 'default',
    ownerType: 'PRODUCT',
    searchableFields: [
      { source: 'productLocalization.name', target: 'payload.name', analyzer: 'standard', boost: 5 },
      { source: 'productLocalization.description', target: 'payload.description', analyzer: 'standard', boost: 2 },
      { source: 'product.categoryCodes', target: 'payload.categoryCodes', analyzer: 'keyword', boost: 3 }
    ],
    filterableFields: [
      { source: 'product.categoryCodes', target: 'payload.categoryCodes', type: 'keyword' },
      { source: 'inventory.status', target: 'payload.availability.status', type: 'keyword' },
      { source: 'pricing.unitAmount', target: 'payload.price.unitAmount', type: 'number' }
    ],
    sortableFields: [
      { source: 'productLocalization.name', target: 'payload.name', type: 'keyword' },
      { source: 'pricing.unitAmount', target: 'payload.price.unitAmount', type: 'number' }
    ],
    displayFields: [
      'payload.productCode',
      'payload.name',
      'payload.summary',
      'payload.image',
      'payload.price',
      'payload.availability'
    ],
    sensitiveFields: [],
    analyzers: {
      defaultText: 'standard',
      exactCode: 'keyword'
    },
    status: 'CURRENT',
    revision: 1,
    active: true
  }
};
