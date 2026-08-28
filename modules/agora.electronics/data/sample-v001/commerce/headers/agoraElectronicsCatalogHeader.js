/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.electronics/data/sample-v001/commerce/headers/agoraElectronicsCatalogHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agora.electronics
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix) => ({ options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix }, query: { code: '$code', tenant: '$tenant' } });
module.exports = { product: { products: entry('product', 'agoraElectronicsProductData'), localizations: entry('productLocalization', 'agoraElectronicsProductLocalizationData'), variants: entry('productVariant', 'agoraElectronicsProductVariantData'), variantLocalizations: entry('productVariantLocalization', 'agoraElectronicsProductVariantLocalizationData') }, pricing: { books: entry('priceBook', 'agoraElectronicsPriceBookData'), rows: entry('priceRow', 'agoraElectronicsPriceRowData') }, inventory: { warehouses: entry('warehouse', 'agoraElectronicsWarehouseData'), balances: entry('inventoryBalance', 'agoraElectronicsInventoryBalanceData') }, electronicsProduct: { specifications: entry('electronicsSpecificationProfile', 'agoraElectronicsSpecificationData') } };
