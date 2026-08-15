/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @description Test-only customer-safe Product discovery projection expectations for Agora. Not runtime-importable data. */
module.exports = {
  metadata: {
    source: 'agoraData',
    journey: 'Home -> PLP/Search -> PDP',
    indexBoundary: 'productSearchProjection -> nSearch -> elastic',
    customerApiBoundary: 'Product Discovery/PDP API',
    manifestImportable: false
  },
  cardFields: [
    'productCode',
    'slug',
    'name',
    'summary',
    'categoryCodes',
    'variantCodes',
    'localizedAttributes',
    'price',
    'availability',
    'seo'
  ],
  excludedFields: [
    'rawElasticQuery',
    'indexName',
    'sku',
    'supplierCost',
    'privateInventoryLedger',
    'warehouseCode',
    'priceRowCode',
    'paymentProviderConfig',
    'unpublishedDraft',
    'operatorAudit'
  ],
  sampleCards: [
    {
      productCode: 'agoraLinenWrapDress',
      slug: 'linen-wrap-dress',
      name: 'Linen Wrap Dress',
      summary: 'Linen Wrap Dress for the Nodics Agora reference storefront discovery journey.',
      categoryCodes: ['agoraNewArrivals', 'agoraWomen', 'agoraWomenDresses'],
      variantCodes: ['agoraLinenWrapDressNaturalS', 'agoraLinenWrapDressNaturalM'],
      localizedAttributes: { colorFamily: 'natural', material: 'linen', audience: 'women' },
      price: { currency: 'USD', unitAmount: '129.00' },
      availability: { available: true, status: 'IN_STOCK' },
      seo: { title: 'Linen Wrap Dress | Nodics Agora', description: 'Linen Wrap Dress reference product' }
    },
    {
      productCode: 'agoraOxfordShirt',
      slug: 'oxford-shirt',
      name: 'Oxford Shirt',
      summary: 'Oxford Shirt for the Nodics Agora reference storefront discovery journey.',
      categoryCodes: ['agoraNewArrivals', 'agoraMen', 'agoraMenShirts'],
      variantCodes: ['agoraOxfordShirtBlueM', 'agoraOxfordShirtBlueL'],
      localizedAttributes: { colorFamily: 'blue', material: 'cotton', audience: 'men' },
      price: { currency: 'USD', unitAmount: '89.00' },
      availability: { available: true, status: 'IN_STOCK' },
      seo: { title: 'Oxford Shirt | Nodics Agora', description: 'Oxford Shirt reference product' }
    }
  ]
};
