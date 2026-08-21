/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/test/expectedOnlineProjections/agoraProductDiscoveryProjectionData
 * @description Defines expected Kickoff Online projection fixtures for acceptance validation.
 * @layer test
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @description Test-only customer-safe Product discovery projection expectations for Agora. Not runtime-importable data. */
module.exports = {
  metadata: {
    source: 'agoraCommonData',
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
      summary: 'Linen blend linen wrap dress designed for modern everyday styling.',
      categoryCodes: ['agoraWomen', 'agoraWomenDresses'],
      variantCodes: ['agoraLinenWrapDressIvoryS', 'agoraLinenWrapDressIvoryM', 'agoraLinenWrapDressIvoryL', 'agoraLinenWrapDressIvoryXL', 'agoraLinenWrapDressBlackS', 'agoraLinenWrapDressBlackM', 'agoraLinenWrapDressBlackL', 'agoraLinenWrapDressBlackXL'],
      localizedAttributes: { brand: 'Nodics Studio', collection: 'Apparel', colorFamily: 'neutral', material: 'Linen blend', audience: 'women', colorOptions: [{ code: 'ivory', label: 'Ivory', family: 'neutral', hex: '#f4efe4' }, { code: 'black', label: 'Black', family: 'black', hex: '#211f1a' }], sizeOptions: ['S', 'M', 'L', 'XL'] },
      price: { currency: 'USD', unitAmount: '129' },
      availability: { available: true, status: 'IN_STOCK' },
      seo: { title: 'Linen Wrap Dress', description: 'Linen Wrap Dress from Nodics Studio', keywords: ['Linen Wrap Dress', 'Nodics Studio', 'Linen blend', 'women'] }
    },
    {
      productCode: 'agoraOxfordShirt',
      slug: 'oxford-shirt',
      name: 'Oxford Shirt',
      summary: 'Oxford cotton oxford shirt designed for modern everyday styling.',
      categoryCodes: ['agoraMen', 'agoraMenShirts'],
      variantCodes: ['agoraOxfordShirtIvoryS', 'agoraOxfordShirtIvoryM', 'agoraOxfordShirtIvoryL', 'agoraOxfordShirtIvoryXL', 'agoraOxfordShirtBlackS', 'agoraOxfordShirtBlackM', 'agoraOxfordShirtBlackL', 'agoraOxfordShirtBlackXL'],
      localizedAttributes: { brand: 'Nodics Menswear', collection: 'Apparel', colorFamily: 'neutral', material: 'Oxford cotton', audience: 'men', colorOptions: [{ code: 'ivory', label: 'Ivory', family: 'neutral', hex: '#f4efe4' }, { code: 'black', label: 'Black', family: 'black', hex: '#211f1a' }], sizeOptions: ['S', 'M', 'L', 'XL'] },
      price: { currency: 'USD', unitAmount: '89' },
      availability: { available: true, status: 'IN_STOCK' },
      seo: { title: 'Oxford Shirt', description: 'Oxford Shirt from Nodics Menswear', keywords: ['Oxford Shirt', 'Nodics Menswear', 'Oxford cotton', 'men'] }
    }
  ]
};
