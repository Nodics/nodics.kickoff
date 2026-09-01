/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/headers/agoraApparelCatalogHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix) => ({ options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix }, query: { code: '$code', tenant: '$tenant' } });
module.exports = {
    product: { products: entry('product', 'agoraApparelProductData'), localizations: entry('productLocalization', 'agoraApparelProductLocalizationData'), variants: entry('productVariant', 'agoraApparelProductVariantData'), variantLocalizations: entry('productVariantLocalization', 'agoraApparelProductVariantLocalizationData') },
    pricing: { books: entry('priceBook', 'agoraApparelPriceBookData'), rows: entry('priceRow', 'agoraApparelPriceRowData') },
    promotion: { rules: entry('promotion', 'agoraApparelPromotionData'), couponBatches: entry('couponBatch', 'agoraApparelCouponBatchData'), coupons: entry('coupon', 'agoraApparelCouponData') },
    inventory: { warehouses: entry('warehouse', 'agoraApparelWarehouseData'), balances: entry('inventoryBalance', 'agoraApparelInventoryBalanceData') },
    apparelProduct: { styles: entry('apparelStyle', 'agoraApparelStyleData'), variantProfiles: entry('apparelVariantProfile', 'agoraApparelVariantProfileData') }
};
