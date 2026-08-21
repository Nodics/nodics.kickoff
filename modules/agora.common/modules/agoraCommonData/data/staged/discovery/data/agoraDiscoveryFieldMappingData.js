/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/discovery/data/agoraDiscoveryFieldMappingData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

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
      'payload.media',
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
