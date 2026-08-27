/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/data/staged/telco/headers/agoraTelcoCatalogHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agora.telco
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const entry = (schemaName, dataFilePrefix) => ({ options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix }, query: { code: '$code', tenant: '$tenant' } });
module.exports = { product: { products: entry('product', 'agoraTelcoProductData'), localizations: entry('productLocalization', 'agoraTelcoProductLocalizationData'), variants: entry('productVariant', 'agoraTelcoProductVariantData'), variantLocalizations: entry('productVariantLocalization', 'agoraTelcoProductVariantLocalizationData') }, pricing: { books: entry('priceBook', 'agoraTelcoPriceBookData'), rows: entry('priceRow', 'agoraTelcoPriceRowData') }, inventory: { warehouses: entry('warehouse', 'agoraTelcoWarehouseData'), balances: entry('inventoryBalance', 'agoraTelcoInventoryBalanceData') }, telcoCatalog: { allowances: entry('telcoAllowance', 'agoraTelcoAllowanceData'), plans: entry('telcoPlanOffering', 'agoraTelcoPlanData') } };
