/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

/**
 * @module kickoff/test/agoraProductSearchPublicationContract
 * @description Verifies Agora Product seed data satisfies Product bilingual publication and nSearch projection boundaries.
 * @layer test
 * @owner agoraApparel
 */

const projectRoot = path.resolve(__dirname, '..');
const productRoot = path.resolve(projectRoot, '../nodics.ai/nodics.commerce/modules/baseCommerce/modules/product');
const agoraProductRoot = path.join(projectRoot, 'modules/agora.apparel/modules/agoraApparel/data/staged/apparel/data');

const productProperties = require(path.join(productRoot, 'config/properties'));
const pricingRoot = path.resolve(projectRoot, '../nodics.ai/nodics.commerce/modules/baseCommerce/modules/pricing');
const inventoryRoot = path.resolve(projectRoot, '../nodics.ai/nodics.commerce/modules/baseCommerce/modules/inventory');
const pricingProperties = require(path.join(pricingRoot, 'config/properties'));
const inventoryProperties = require(path.join(inventoryRoot, 'config/properties'));
const localizationPolicy = require(path.join(productRoot, 'src/service/defaultProductLocalizationPolicyService'));
const publicationPolicy = require(path.join(productRoot, 'src/service/defaultProductPublicationPolicyService'));
const projectionBuilder = require(path.join(productRoot, 'src/service/defaultProductLocalizedProjectionBuilderService'));
const searchEnrichment = require(path.join(productRoot, 'src/service/defaultProductSearchEnrichmentService'));
const searchPublication = require(path.join(productRoot, 'src/service/defaultProductSearchPublicationService'));
const indexes = require(path.join(productRoot, 'src/search/indexes'));
const customerPriceSummary = require(path.join(pricingRoot, 'src/service/defaultCustomerPriceSummaryService'));
const priceSelection = require(path.join(pricingRoot, 'src/service/defaultPriceSelectionService'));
const exactAmount = require(path.join(pricingRoot, 'src/service/defaultExactAmountService'));
const customerAvailabilitySummary = require(path.join(inventoryRoot, 'src/service/defaultCustomerAvailabilitySummaryService'));
const inventorySourcing = require(path.join(inventoryRoot, 'src/service/defaultInventorySourcingService'));
const products = require(path.join(agoraProductRoot, 'agoraApparelProductData'));
const productLocalizations = require(path.join(agoraProductRoot, 'agoraApparelProductLocalizationData'));
const categories = require(path.join(agoraProductRoot, 'agoraApparelCategoryData'));
const categoryLocalizations = require(path.join(agoraProductRoot, 'agoraApparelCategoryLocalizationData'));
const variants = require(path.join(agoraProductRoot, 'agoraApparelProductVariantData'));
const variantLocalizations = require(path.join(agoraProductRoot, 'agoraApparelProductVariantLocalizationData'));
const priceBooks = require(path.join(projectRoot, 'modules/agora.apparel/modules/agoraApparel/data/staged/apparel/data/agoraApparelPriceBookData'));
const priceRows = require(path.join(projectRoot, 'modules/agora.apparel/modules/agoraApparel/data/staged/apparel/data/agoraApparelPriceRowData'));
const inventoryBalances = require(path.join(projectRoot, 'modules/agora.apparel/modules/agoraApparel/data/staged/apparel/data/agoraApparelInventoryBalanceData'));

let persisted;
let indexed;
let updated;
let removed;

test.beforeEach(() => {
  persisted = [];
  indexed = [];
  updated = [];
  removed = [];
  global.CONFIG = {
    get: (key) => key === 'product' ? productProperties.product : key === 'pricing' ? pricingProperties.pricing : key === 'inventory' ? inventoryProperties.inventory : undefined
  };
  global.SERVICE = {
    DefaultProductLocalizationPolicyService: localizationPolicy,
    DefaultProductPublicationPolicyService: publicationPolicy,
    DefaultProductLocalizedProjectionBuilderService: projectionBuilder,
    DefaultProductSearchEnrichmentService: searchEnrichment,
    DefaultCustomerPriceSummaryService: customerPriceSummary,
    DefaultPriceSelectionService: priceSelection,
    DefaultExactAmountService: exactAmount,
    DefaultPriceBookService: { get: async () => ({ result: values(priceBooks) }) },
    DefaultPriceRowService: { get: async () => ({ result: values(priceRows) }) },
    DefaultCustomerAvailabilitySummaryService: customerAvailabilitySummary,
    DefaultInventorySourcingService: inventorySourcing,
    DefaultInventoryBalanceService: { get: async () => ({ result: values(inventoryBalances) }) },
    DefaultProductSearchProjectionService: {
      save: async (request) => persisted.push(request),
      doSave: async (request) => indexed.push(request),
      update: async (request) => updated.push(request),
      doRemoveByQuery: async (request) => removed.push(request)
    }
  };
});

const request = {
  tenant: 'default',
  correlationId: 'corr-agora-product-search-1',
  authData: { groups: ['adminGroup'] },
  now: '2026-08-14T00:00:00.000Z'
};

function values(records) {
  return Object.values(records);
}

function byOwner(records, propertyName, ownerCode) {
  return values(records).filter((record) => record[propertyName] === ownerCode);
}

test('Agora Product seed satisfies the current Product required-locale policy', () => {
  const policy = localizationPolicy.policy();

  assert.deepEqual(policy.requiredLocales.map(localizationPolicy.canonicalize.bind(localizationPolicy)).sort(), ['ar', 'en']);

  for (const product of values(products)) {
    const result = localizationPolicy.completeness(request, byOwner(productLocalizations, 'productCode', product.code), 'product');
    assert.equal(result.complete, true);
    assert.deepEqual(result.requiredLocales.sort(), ['ar', 'en']);
  }
  for (const category of values(categories)) {
    const result = localizationPolicy.completeness(request, byOwner(categoryLocalizations, 'categoryCode', category.code), 'category');
    assert.equal(result.complete, true);
    assert.deepEqual(result.requiredLocales.sort(), ['ar', 'en']);
  }
  for (const variant of values(variants)) {
    const result = localizationPolicy.completeness(request, byOwner(variantLocalizations, 'variantCode', variant.code), 'variant');
    assert.equal(result.complete, true);
    assert.deepEqual(result.requiredLocales.sort(), ['ar', 'en']);
  }
});

test('Agora Product seed publishes customer-safe English and Arabic Product search projections', async () => {
  for (const product of values(products)) {
    const localizations = byOwner(productLocalizations, 'productCode', product.code);
    const categoryCodes = localizations.find((item) => item.locale === 'en').classificationValues.categoryCodes;
    const productVariants = values(variants).filter((item) => item.productCode === product.code);
    const variantCodes = productVariants.map((item) => item.code);

    const result = await searchPublication.publish(request, {
      product,
      localizations,
      storeCode: 'agoraMainStore',
      currency: 'AED',
      categoryCodes,
      variantCodes,
      variants: productVariants
    });

    assert.equal(result.publication.localization.complete, true);
    assert.deepEqual(result.projections.map((item) => item.locale).sort(), ['ar', 'en']);
  }

  const expectedProjectionCount = values(products).length * localizationPolicy.policy().requiredLocales.length;
  assert.equal(persisted.length, expectedProjectionCount);
  assert.equal(indexed.length, expectedProjectionCount);
  assert(indexed.every((item) => item.moduleName === 'product'));
  assert(indexed.every((item) => item.indexName === 'productLocalized'));
  assert.deepEqual(new Set(indexed.map((item) => item.searchOptions.analyzer)), new Set(['arabic', 'standard']));
  assert(indexed.every((item) => item.model.tenant === 'default'));
  assert(indexed.every((item) => item.model.storeCode === 'agoraMainStore'));
  assert(indexed.every((item) => item.model.payload.inventory === undefined));
  assert(indexed.every((item) => item.model.payload.sku === undefined));
  assert(indexed.every((item) => item.model.payload.price && item.model.payload.price.currency === 'AED'));
  assert(indexed.every((item) => item.model.payload.price.priceRowCode === undefined));
  assert(indexed.every((item) => item.model.payload.availability && item.model.payload.availability.status === 'IN_STOCK'));
  assert(indexed.every((item) => item.model.payload.availability.warehouseCode === undefined));
  assert.equal(updated.length, 0);
  assert.equal(removed.length, 0);
});

test('Product index remains provider-neutral and partitioned for customer discovery APIs', () => {
  const definition = indexes.product.productLocalized;

  assert.equal(definition.schemaName, 'productSearchProjection');
  assert.equal(definition.tenantPropertyName, 'tenant');
  assert.deepEqual(definition.partitionProperties, ['tenant', 'storeCode', 'locale']);
  assert.equal(definition.properties.payload.type, 'object');
  assert.equal(definition.properties.payload.dynamic, false);
  assert.equal(definition.properties.payload.properties.categoryCodes.type, 'keyword');
});
