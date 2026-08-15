import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const moduleRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projectRoot = path.resolve(moduleRoot, '../..');

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(moduleRoot, relativePath), 'utf8'));
}

function walkFiles(root) {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) return walkFiles(absolute);
    return [absolute];
  });
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

async function readDataModule(relativePath) {
  const imported = await import(path.join(moduleRoot, relativePath));
  return imported.default || imported;
}

test('agoraData is a guarded content-pack with no runtime behavior ownership', () => {
  const packageJson = readJson('package.json');

  assert.equal(packageJson.name, 'agoraData');
  assert.equal(packageJson.index, '3100.23');
  assert.equal(packageJson.nodics.kind, 'content-pack');
  assert.equal(packageJson.nodics.runtimeModule, true);
  assert.equal(packageJson.nodics.loadableByNodicsModuleLoader, true);
  assert.deepEqual(packageJson.nodics.owns, ['configuration', 'data', 'test', 'documentation']);
  assert.deepEqual(packageJson.nodics.runtime, { router: false, publish: false, web: false });
});

test('agoraData manifest is contract v2 and declares WCMS plus Commerce Staged releases', () => {
  const manifest = readJson('data/manifest.json');
  const wcmsSection = manifest.sections.agoraStorefrontSite;
  const productSection = manifest.sections.agoraProductCatalogSource;
  const pricingSection = manifest.sections.agoraPricingSource;
  const inventorySection = manifest.sections.agoraInventorySource;
  const taxSection = manifest.sections.agoraTaxSource;
  const promotionSection = manifest.sections.agoraPromotionSource;
  const commerceSearchSection = manifest.sections.agoraCommerceSearchSource;
  const discoverySection = manifest.sections.agoraDiscoveryConfigurationSource;

  assert.equal(manifest.contractVersion, 2);
  assert.equal(manifest.module, 'agoraData');
  assert.deepEqual(Object.keys(manifest.sections), [
    'agoraStorefrontSite',
    'agoraProductCatalogSource',
    'agoraPricingSource',
    'agoraInventorySource',
    'agoraTaxSource',
    'agoraPromotionSource',
    'agoraCommerceSearchSource',
    'agoraDiscoveryConfigurationSource'
  ]);
  assert.equal(wcmsSection.kind, 'DATA_RELEASE');
  assert.equal(wcmsSection.dataType, 'core');
  assert.equal(wcmsSection.sourceRoot, 'staged');
  assert.equal(wcmsSection.lifecycle, 'PUBLISHABLE');
  assert.equal(wcmsSection.destinationRole, 'WCMS_STAGED');
  assert.deepEqual(wcmsSection.environmentScope, ['ALL']);
  assert.equal(wcmsSection.sensitivity, 'PUBLIC');
  assert.equal(wcmsSection.versioningPolicy, 'IMMUTABLE');
  assert.equal(wcmsSection.publicationPolicy, 'REQUIRED');
  assert.equal(wcmsSection.initialPublicationPolicy, 'ADMIN_INITIATED');
  assert.equal(wcmsSection.removalPolicy, 'UNPUBLISH_OR_RETIRE');
  assert.equal(productSection.kind, 'DATA_RELEASE');
  assert.equal(productSection.dataType, 'sample');
  assert.equal(productSection.sourceRoot, 'staged');
  assert.equal(productSection.lifecycle, 'PUBLISHABLE');
  assert.equal(productSection.destinationRole, 'COMMERCE_STAGED');
  assert.deepEqual(productSection.environmentScope, ['LOCAL']);
  assert.equal(productSection.sensitivity, 'PUBLIC');
  assert.equal(productSection.versioningPolicy, 'IMMUTABLE');
  assert.equal(productSection.publicationPolicy, 'REQUIRED');
  assert.equal(productSection.initialPublicationPolicy, 'ADMIN_INITIATED');
  assert.equal(productSection.removalPolicy, 'UNPUBLISH_OR_RETIRE');
  for (const section of [pricingSection, inventorySection, taxSection, promotionSection, commerceSearchSection, discoverySection]) {
    assert.equal(section.kind, 'DATA_RELEASE');
    assert.equal(section.dataType, 'sample');
    assert.equal(section.sourceRoot, 'staged');
    assert.equal(section.lifecycle, 'PUBLISHABLE');
    assert.equal(section.destinationRole, 'COMMERCE_STAGED');
    assert.deepEqual(section.environmentScope, ['LOCAL']);
    assert.equal(section.sensitivity, 'PUBLIC');
    assert.equal(section.versioningPolicy, 'IMMUTABLE');
    assert.equal(section.publicationPolicy, 'REQUIRED');
    assert.equal(section.initialPublicationPolicy, 'ADMIN_INITIATED');
    assert.equal(section.removalPolicy, 'UNPUBLISH_OR_RETIRE');
  }
});

test('every declared manifest file exists and has a matching checksum', () => {
  const manifest = readJson('data/manifest.json');

  for (const section of Object.values(manifest.sections)) {
    for (const [relativePath, expectedHash] of Object.entries(section.files || {})) {
      const absolute = path.join(moduleRoot, 'data', relativePath);
      assert.equal(fs.existsSync(absolute), true, `${relativePath} should exist`);
      assert.equal(sha256(absolute), expectedHash, `${relativePath} checksum should match`);
    }
  }
});

test('every runtime data file is declared by exactly one manifest section', () => {
  const dataRoot = path.join(moduleRoot, 'data');
  const manifest = readJson('data/manifest.json');
  const declared = new Map();
  for (const [sectionName, section] of Object.entries(manifest.sections)) {
    for (const relativePath of Object.keys(section.files || {})) {
      assert.equal(declared.has(relativePath), false, `${relativePath} should not be declared twice`);
      declared.set(relativePath, sectionName);
    }
  }
  const files = walkFiles(dataRoot)
    .map((filePath) => path.relative(dataRoot, filePath))
    .filter((relativePath) => relativePath !== 'manifest.json');

  assert.deepEqual(files.sort(), Array.from(declared.keys()).sort());
});

test('WCMS seed files stay inside the Staged content boundary', () => {
  const manifest = readJson('data/manifest.json');
  const section = manifest.sections.agoraStorefrontSite;

  assert(Object.keys(section.files).every((relativePath) => relativePath.startsWith('staged/wcms/')));

  for (const relativePath of Object.keys(section.files)) {
    const content = fs.readFileSync(path.join(moduleRoot, 'data', relativePath), 'utf8');
    assert.match(content, /@lifecycle PUBLISHABLE/);
    assert.match(content, /@destination WCMS_STAGED/);
    assert.doesNotMatch(content, /WCMS_ONLINE|COMMERCE_STAGED|ENGAGEMENT/);
  }
});

test('Product seed files stay inside the Commerce Staged Product boundary', () => {
  const manifest = readJson('data/manifest.json');
  const section = manifest.sections.agoraProductCatalogSource;

  assert(Object.keys(section.files).every((relativePath) => relativePath.startsWith('staged/product/')));

  for (const relativePath of Object.keys(section.files)) {
    const content = fs.readFileSync(path.join(moduleRoot, 'data', relativePath), 'utf8');
    assert.match(content, /@lifecycle PUBLISHABLE/);
    assert.match(content, /@destination COMMERCE_STAGED/);
    assert.doesNotMatch(content, /WCMS_STAGED|WCMS_ONLINE|ENGAGEMENT/);
  }
});

test('Pricing, Inventory, Tax and Promotion seed files stay inside Commerce Staged domain boundaries', () => {
  const manifest = readJson('data/manifest.json');
  const pricingSection = manifest.sections.agoraPricingSource;
  const inventorySection = manifest.sections.agoraInventorySource;
  const taxSection = manifest.sections.agoraTaxSource;
  const promotionSection = manifest.sections.agoraPromotionSource;

  assert(Object.keys(pricingSection.files).every((relativePath) => relativePath.startsWith('staged/pricing/')));
  assert(Object.keys(inventorySection.files).every((relativePath) => relativePath.startsWith('staged/inventory/')));
  assert(Object.keys(taxSection.files).every((relativePath) => relativePath.startsWith('staged/tax/')));
  assert(Object.keys(promotionSection.files).every((relativePath) => relativePath.startsWith('staged/promotion/')));

  for (const section of [pricingSection, inventorySection, taxSection, promotionSection]) {
    for (const relativePath of Object.keys(section.files)) {
      const content = fs.readFileSync(path.join(moduleRoot, 'data', relativePath), 'utf8');
      assert.match(content, /@lifecycle PUBLISHABLE/);
      assert.match(content, /@destination COMMERCE_STAGED/);
      assert.doesNotMatch(content, /WCMS_STAGED|WCMS_ONLINE|ENGAGEMENT/);
    }
  }
});

test('Commerce Search seed files stay inside the Commerce Staged search boundary', () => {
  const manifest = readJson('data/manifest.json');
  const section = manifest.sections.agoraCommerceSearchSource;

  assert(Object.keys(section.files).every((relativePath) => relativePath.startsWith('staged/commerceSearch/')));

  for (const relativePath of Object.keys(section.files)) {
    const content = fs.readFileSync(path.join(moduleRoot, 'data', relativePath), 'utf8');
    assert.match(content, /@lifecycle PUBLISHABLE/);
    assert.match(content, /@destination COMMERCE_STAGED/);
    assert.doesNotMatch(content, /WCMS_STAGED|WCMS_ONLINE|ENGAGEMENT/);
  }
});

test('Discovery configuration seed files stay inside the Commerce Staged Discovery boundary', () => {
  const manifest = readJson('data/manifest.json');
  const section = manifest.sections.agoraDiscoveryConfigurationSource;

  assert(Object.keys(section.files).every((relativePath) => relativePath.startsWith('staged/discovery/')));

  for (const relativePath of Object.keys(section.files)) {
    const content = fs.readFileSync(path.join(moduleRoot, 'data', relativePath), 'utf8');
    assert.match(content, /@lifecycle PUBLISHABLE/);
    assert.match(content, /@destination COMMERCE_STAGED/);
    assert.doesNotMatch(content, /WCMS_STAGED|WCMS_ONLINE|ENGAGEMENT/);
  }
});

test('renderer values are logical keys and no executable frontend code is embedded', async () => {
  const rendererData = await import(path.join(moduleRoot, 'data/staged/wcms/data/agoraRendererData.js'));
  const componentData = await import(path.join(moduleRoot, 'data/staged/wcms/data/agoraComponentData.js'));
  const rendererValues = [
    ...Object.values(rendererData.default || rendererData).map((record) => record.renderer),
    ...Object.values(componentData.default || componentData).map((record) => record.renderer).filter(Boolean)
  ];

  for (const renderer of rendererValues) {
    assert.match(renderer, /^agora\.[a-zA-Z0-9.-]+$/);
    assert.doesNotMatch(renderer, /https?:|\/|\\|\.js|\.css|<|>/);
  }

  const combined = Object.values(componentData.default || componentData).map((record) => JSON.stringify(record)).join('\n');
  assert.doesNotMatch(combined, /<script|javascript:|onerror=|onclick=|<style|<\/style>/i);
});

test('WCMS seed covers the implemented Agora V1 customer journey without owning runtime logic', async () => {
  const typeCodes = Object.values(await readDataModule('data/staged/wcms/data/agoraTypeCodeData.js'));
  const renderers = Object.values(await readDataModule('data/staged/wcms/data/agoraRendererData.js'));
  const components = Object.values(await readDataModule('data/staged/wcms/data/agoraComponentData.js'));
  const pages = Object.values(await readDataModule('data/staged/wcms/data/agoraPageData.js'));
  const routes = Object.values(await readDataModule('data/staged/wcms/data/agoraRouteData.js'));
  const navigations = Object.values(await readDataModule('data/staged/wcms/data/agoraNavigationData.js'));
  const typeCodeSet = new Set(typeCodes.map((record) => record.code));
  const rendererByCode = new Map(renderers.map((record) => [record.code, record.renderer]));
  const componentByCode = new Map(components.map((record) => [record.code, record]));
  const pageByCode = new Map(pages.map((record) => [record.code, record]));
  const routeByCode = new Map(routes.map((record) => [record.code, record]));
  const requiredPageTypes = [
    'agoraHomePageType',
    'agoraListingPageType',
    'agoraProductDetailPageType',
    'agoraCartPageType',
    'agoraCheckoutPageType',
    'agoraOrderConfirmationPageType',
    'agoraOrderHistoryPageType'
  ];
  const requiredJourneyPages = [
    'agoraHomePage',
    'agoraCategoryListingPage',
    'agoraSearchPage',
    'agoraProductDetailPage',
    'agoraCartPage',
    'agoraCheckoutPage',
    'agoraOrderConfirmationPage',
    'agoraOrderHistoryPage'
  ];
  const requiredRoutes = [
    '/',
    '/c/:categoryCode',
    '/search',
    '/p/:productCode',
    '/cart',
    '/checkout',
    '/order/confirmation',
    '/account/orders'
  ];
  const lifecyclePanel = componentByCode.get('agoraOrderLifecyclePanel');
  const checkoutFlow = componentByCode.get('agoraCheckoutFlow');
  const productListing = componentByCode.get('agoraCategoryListing');
  const productDetail = componentByCode.get('agoraProductDetail');
  const cartSummary = componentByCode.get('agoraCartSummary');

  for (const pageType of requiredPageTypes) {
    assert.equal(typeCodeSet.has(pageType), true, `${pageType} should be declared`);
    assert.equal(rendererByCode.has(pageType), true, `${pageType} should have a logical renderer mapping`);
  }
  for (const pageCode of requiredJourneyPages) {
    const page = pageByCode.get(pageCode);
    assert(page, `${pageCode} should be declared`);
    assert.equal(page.active, true);
    assert.equal(page.template, 'agoraStorefrontPageTemplate');
    assert(page.cmsComponents.every((component) => componentByCode.has(component.target)), `${pageCode} should reference known components`);
  }
  assert.deepEqual(routes.map((route) => route.path), requiredRoutes);
  assert.equal(routeByCode.get('agoraCheckoutRoute').accessMode, 'CUSTOMER');
  assert.equal(routeByCode.get('agoraOrderHistoryRoute').accessMode, 'CUSTOMER');
  assert.deepEqual(checkoutFlow.properties.steps, ['CUSTOMER', 'SHIPPING', 'PAYMENT', 'REVIEW']);
  assert.equal(checkoutFlow.properties.paymentCollectionMode, 'PROVIDER_TOKEN_ONLY');
  assert.deepEqual(productListing.properties.cardActions, ['QUICK_VIEW', 'ADD_TO_CART', 'WISHLIST', 'COMPARE']);
  assert.equal(productDetail.properties.includeReviews, true);
  assert.equal(productDetail.properties.supportsWishlist, true);
  assert.equal(productDetail.properties.supportsCompare, true);
  assert.equal(cartSummary.properties.promotionEstimate, 'DISPLAY_ONLY_UNTIL_BACKEND_REDEMPTION_API');
  assert.deepEqual(lifecyclePanel.properties.requestTypes, ['CANCELLATION', 'RETURN', 'REFUND']);
  assert.deepEqual(lifecyclePanel.properties.returnMethods, ['PICKUP', 'DROP_OFF', 'STORE_RETURN']);
  assert.equal(lifecyclePanel.properties.showRefundPreview, true);
  assert.equal(lifecyclePanel.properties.showReconciliationRequired, true);
  assert(navigations.some((node) => node.targetRoute === 'agoraCartRoute'));
  assert(navigations.some((node) => node.targetRoute === 'agoraOrderHistoryRoute'));
});

test('Product seed uses only Product-owned source schemas and expected first-slice counts', async () => {
  const header = await readDataModule('data/staged/product/headers/agoraProductCatalogHeader.js');
  const categories = await readDataModule('data/staged/product/data/agoraCategoryData.js');
  const categoryLocalizations = await readDataModule('data/staged/product/data/agoraCategoryLocalizationData.js');
  const products = await readDataModule('data/staged/product/data/agoraProductData.js');
  const productLocalizations = await readDataModule('data/staged/product/data/agoraProductLocalizationData.js');
  const variants = await readDataModule('data/staged/product/data/agoraProductVariantData.js');
  const variantLocalizations = await readDataModule('data/staged/product/data/agoraProductVariantLocalizationData.js');
  const schemaNames = Object.values(header.product).map((entry) => entry.options.schemaName).sort();

  assert.deepEqual(schemaNames, [
    'category',
    'categoryLocalization',
    'product',
    'productLocalization',
    'productVariant',
    'productVariantLocalization'
  ]);
  assert.equal(Object.keys(categories).length, 9);
  assert.equal(Object.keys(categoryLocalizations).length, 18);
  assert.equal(Object.keys(products).length, 12);
  assert.equal(Object.keys(productLocalizations).length, 24);
  assert.equal(Object.keys(variants).length, 24);
  assert.equal(Object.keys(variantLocalizations).length, 48);
  assert(Object.values(categories).every((record) => record.status === 'ACTIVE' && record.tenant === 'default'));
  assert(Object.values(products).every((record) => record.status === 'ACTIVE' && record.catalogVersion === 'agoraStaged'));
  assert(Object.values(variants).every((record) => record.status === 'ACTIVE' && record.sku.startsWith('AGORA-')));
  assert.deepEqual(new Set(Object.values(categoryLocalizations).map((record) => record.locale)), new Set(['ar', 'en']));
  assert.deepEqual(new Set(Object.values(productLocalizations).map((record) => record.locale)), new Set(['ar', 'en']));
  assert.deepEqual(new Set(Object.values(variantLocalizations).map((record) => record.locale)), new Set(['ar', 'en']));
  assert(Object.values(categoryLocalizations).every((record) => record.status === 'READY'));
  assert(Object.values(productLocalizations).every((record) => record.status === 'READY'));
  assert(Object.values(variantLocalizations).every((record) => record.status === 'READY'));
});

test('Pricing, Inventory, Tax and Promotion seed use only their owned source schemas and expected first-slice counts', async () => {
  const pricingHeader = await readDataModule('data/staged/pricing/headers/agoraPricingHeader.js');
  const inventoryHeader = await readDataModule('data/staged/inventory/headers/agoraInventoryHeader.js');
  const taxHeader = await readDataModule('data/staged/tax/headers/agoraTaxHeader.js');
  const promotionHeader = await readDataModule('data/staged/promotion/headers/agoraPromotionHeader.js');
  const priceBooks = await readDataModule('data/staged/pricing/data/agoraPriceBookData.js');
  const priceRows = await readDataModule('data/staged/pricing/data/agoraPriceRowData.js');
  const warehouses = await readDataModule('data/staged/inventory/data/agoraWarehouseData.js');
  const balances = await readDataModule('data/staged/inventory/data/agoraInventoryBalanceData.js');
  const taxPolicies = await readDataModule('data/staged/tax/data/agoraTaxPolicyData.js');
  const promotions = await readDataModule('data/staged/promotion/data/agoraPromotionData.js');

  assert.deepEqual(Object.values(pricingHeader.pricing).map((entry) => entry.options.schemaName).sort(), ['priceBook', 'priceRow']);
  assert.deepEqual(Object.values(inventoryHeader.inventory).map((entry) => entry.options.schemaName).sort(), ['inventoryBalance', 'warehouse']);
  assert.deepEqual(Object.values(taxHeader.tax).map((entry) => entry.options.schemaName).sort(), ['taxPolicy']);
  assert.deepEqual(Object.values(promotionHeader.promotion).map((entry) => entry.options.schemaName).sort(), ['promotion']);
  assert.equal(Object.keys(priceBooks).length, 1);
  assert.equal(Object.keys(priceRows).length, 12);
  assert.equal(Object.keys(warehouses).length, 1);
  assert.equal(Object.keys(balances).length, 24);
  assert.equal(Object.keys(taxPolicies).length, 1);
  assert.equal(Object.keys(promotions).length, 2);
  assert(Object.values(priceRows).every((record) => record.tenant === 'default' && record.currency === 'USD' && record.priceBookCode === 'agoraRetailUsd'));
  assert(Object.values(balances).every((record) => record.tenant === 'default' && record.warehouseCode === 'agoraMainWarehouse' && record.sku.startsWith('AGORA-')));
  assert(Object.values(taxPolicies).every((record) => record.tenant === 'default' && record.jurisdiction === 'AE' && record.status === 'ACTIVE'));
  assert(Object.values(promotions).every((record) => record.tenant === 'default' && record.status === 'ACTIVE' && record.actions.discountAmount));
  assert.deepEqual(Object.values(promotions).map((record) => record.code), ['agoraWelcome10', 'agoraBagsBundle15']);
});

test('Commerce Search seed uses only Commerce Search-owned schemas and expected first-slice rules', async () => {
  const header = await readDataModule('data/staged/commerceSearch/headers/agoraCommerceSearchHeader.js');
  const rules = await readDataModule('data/staged/commerceSearch/data/agoraCommerceSearchRuleData.js');
  const schemaNames = Object.values(header.commerceSearchCore).map((entry) => entry.options.schemaName).sort();
  const rule = rules.record0;

  assert.deepEqual(schemaNames, ['commerceSearchRule']);
  assert.equal(Object.keys(rules).length, 1);
  assert.equal(rule.tenant, 'default');
  assert.equal(rule.storeCode, 'agoraMainStore');
  assert.equal(rule.scopeType, 'CATEGORY');
  assert.equal(rule.categoryCode, 'agoraWomen');
  assert.equal(rule.status, 'APPROVED');
  assert.deepEqual(rule.actions.map((action) => action.actionType), ['PIN', 'BOOST', 'BURY']);
});

test('Discovery seed wires Product index configuration without owning Product data', async () => {
  const header = await readDataModule('data/staged/discovery/headers/agoraDiscoveryHeader.js');
  const indexConfigurations = await readDataModule('data/staged/discovery/data/agoraDiscoveryIndexConfigurationData.js');
  const fieldMappings = await readDataModule('data/staged/discovery/data/agoraDiscoveryFieldMappingData.js');
  const sourceMixes = await readDataModule('data/staged/discovery/data/agoraDiscoverySourceMixConfigurationData.js');
  const configSchemaNames = Object.values(header.discoveryConfig).map((entry) => entry.options.schemaName).sort();
  const mappingSchemaNames = Object.values(header.discoveryMapping).map((entry) => entry.options.schemaName).sort();
  const indexConfiguration = indexConfigurations.record0;
  const fieldMapping = fieldMappings.record0;
  const sourceMix = sourceMixes.record0;

  assert.deepEqual(configSchemaNames, [
    'discoveryFacetProfile',
    'discoveryIndexConfiguration',
    'discoveryPublicationPolicy',
    'discoveryQueryProfile',
    'discoveryRankingProfile',
    'discoverySourceMixConfiguration'
  ]);
  assert.deepEqual(mappingSchemaNames, ['discoveryFieldMapping']);
  assert.equal(indexConfiguration.ownerType, 'PRODUCT');
  assert.equal(indexConfiguration.indexName, 'productLocalized');
  assert.equal(indexConfiguration.sourceMixCode, 'agoraProductDiscoverySourceMix');
  assert.equal(indexConfiguration.fieldMappingCode, fieldMapping.code);
  assert.deepEqual(indexConfiguration.scope, { storeCode: 'agoraMainStore', locale: 'en' });
  assert.deepEqual(sourceMix.sources.map((source) => source.ownerModule), ['product', 'pricing', 'inventory', 'commerceSearchCore']);
  assert.deepEqual(fieldMapping.sensitiveFields, []);
});

test('seed batch has no cart or checkout import data because those remain operational APIs', () => {
  const dataFiles = walkFiles(path.join(moduleRoot, 'data')).map((filePath) => path.relative(moduleRoot, filePath));

  assert(dataFiles.every((relativePath) => !relativePath.includes('cart')));
  assert(dataFiles.every((relativePath) => !relativePath.includes('checkout')));
});

test('WCMS Staged local runtimes activate agoraData for import discovery', () => {
  const localConfig = fs.readFileSync(path.join(projectRoot, 'envs/kickoffLocal/wcmsStagedServer/config/properties.js'), 'utf8');
  const dockerConfig = fs.readFileSync(path.join(projectRoot, 'envs/kickoffDockerLocal/config/runtime-properties.js'), 'utf8');

  assert.match(localConfig, /'agoraData'/);
  assert.match(dockerConfig, /'agoraData'/);
  assert.match(localConfig, /allowedDestinationRoles:\s*\['WCMS_STAGED'\]/);
  assert.match(dockerConfig, /dataReleases\(\['WCMS_STAGED'\]/);
});

test('Commerce Staged local runtimes activate agoraData for Product import discovery', () => {
  const localConfig = fs.readFileSync(path.join(projectRoot, 'envs/kickoffLocal/commerceStagedServer/config/properties.js'), 'utf8');
  const dockerConfig = fs.readFileSync(path.join(projectRoot, 'envs/kickoffDockerLocal/config/runtime-properties.js'), 'utf8');

  assert.match(localConfig, /'agoraData'/);
  assert.match(dockerConfig, /'agoraData'/);
  assert.match(localConfig, /runtimeRole:\s*\{\s*code:\s*'COMMERCE_STAGED'/);
  assert.match(localConfig, /allowedDestinationRoles:\s*\['COMMERCE_STAGED'\]/);
  assert.match(dockerConfig, /commerceStagedServer:\s*\{/);
  assert.match(dockerConfig, /dataReleases\(\['COMMERCE_STAGED'\]\)/);
});

test('expected Product discovery projections are test-only and customer-safe', async () => {
  const manifest = readJson('data/manifest.json');
  const projection = await readDataModule('test/expectedOnlineProjections/agoraProductDiscoveryProjectionData.js');
  const manifestFiles = Object.values(manifest.sections).flatMap((section) => Object.keys(section.files || {}));

  assert(manifestFiles.every((relativePath) => !relativePath.includes('expectedOnlineProjections')));
  assert.equal(projection.metadata.manifestImportable, false);
  assert.equal(projection.metadata.indexBoundary, 'productSearchProjection -> nSearch -> elastic');
  assert.equal(projection.sampleCards.length, 2);
  for (const card of projection.sampleCards) {
    assert.deepEqual(Object.keys(card).sort(), projection.cardFields.sort());
    for (const excludedField of projection.excludedFields) {
      assert.equal(Object.prototype.hasOwnProperty.call(card, excludedField), false);
    }
  }
});

test('Product, Pricing and Inventory seeds compose customer-safe discovery cards for PLP/PDP/cart handoff', async () => {
  const products = Object.values(await readDataModule('data/staged/product/data/agoraProductData.js'));
  const productLocalizations = Object.values(await readDataModule('data/staged/product/data/agoraProductLocalizationData.js'));
  const categories = Object.values(await readDataModule('data/staged/product/data/agoraCategoryData.js'));
  const variants = Object.values(await readDataModule('data/staged/product/data/agoraProductVariantData.js'));
  const priceRows = Object.values(await readDataModule('data/staged/pricing/data/agoraPriceRowData.js'));
  const balances = Object.values(await readDataModule('data/staged/inventory/data/agoraInventoryBalanceData.js'));
  const expectedProjection = await readDataModule('test/expectedOnlineProjections/agoraProductDiscoveryProjectionData.js');
  const categoryCodes = new Set(categories.map((category) => category.code));
  const variantsByProduct = Map.groupBy(variants, (variant) => variant.productCode);
  const priceByProduct = new Map(priceRows.map((row) => [row.productCode, row]));
  const balanceBySku = new Map(balances.map((balance) => [balance.sku, balance]));
  const englishLocalizations = productLocalizations.filter((localization) => localization.locale === 'en');

  assert.equal(englishLocalizations.length, products.length);

  const cards = products.map((product) => {
    const localization = englishLocalizations.find((item) => item.productCode === product.code);
    const productVariants = variantsByProduct.get(product.code) || [];
    const price = priceByProduct.get(product.code);
    const inStock = productVariants.some((variant) => Number(balanceBySku.get(variant.sku)?.available || 0) > 0);

    assert(localization, `${product.code} should have an English localization`);
    assert(price, `${product.code} should have a USD price row`);
    assert(productVariants.length > 0, `${product.code} should have at least one active variant`);
    assert(localization.classificationValues.categoryCodes.every((code) => categoryCodes.has(code)), `${product.code} should reference active categories only`);
    assert(productVariants.every((variant) => balanceBySku.has(variant.sku)), `${product.code} variants should have inventory balances`);

    return {
      productCode: product.code,
      slug: localization.slug,
      name: localization.name,
      summary: localization.description,
      categoryCodes: localization.classificationValues.categoryCodes,
      variantCodes: productVariants.map((variant) => variant.code),
      localizedAttributes: localization.attributes,
      price: { currency: price.currency, unitAmount: price.unitAmount },
      availability: { available: inStock, status: inStock ? 'IN_STOCK' : 'OUT_OF_STOCK' },
      seo: localization.seo
    };
  });

  assert.equal(cards.length, 12);
  assert(cards.every((card) => card.price.currency === 'USD'));
  assert(cards.every((card) => card.availability.status === 'IN_STOCK'));
  assert(cards.every((card) => card.variantCodes.length === 2));
  assert(cards.every((card) => !Object.prototype.hasOwnProperty.call(card, 'sku')));
  assert(cards.every((card) => !Object.prototype.hasOwnProperty.call(card, 'warehouseCode')));
  assert(cards.every((card) => !Object.prototype.hasOwnProperty.call(card.price, 'priceRowCode')));

  for (const expectedCard of expectedProjection.sampleCards) {
    const card = cards.find((item) => item.productCode === expectedCard.productCode);
    assert.deepEqual(card, expectedCard);
  }
});

test('Discovery source mix publishes Product with Pricing, Inventory and Commerce Search as supporting sources', async () => {
  const indexConfigurations = await readDataModule('data/staged/discovery/data/agoraDiscoveryIndexConfigurationData.js');
  const publicationPolicies = await readDataModule('data/staged/discovery/data/agoraDiscoveryPublicationPolicyData.js');
  const sourceMixes = await readDataModule('data/staged/discovery/data/agoraDiscoverySourceMixConfigurationData.js');
  const commerceSearchRules = await readDataModule('data/staged/commerceSearch/data/agoraCommerceSearchRuleData.js');
  const indexConfiguration = indexConfigurations.record0;
  const publicationPolicy = publicationPolicies.record0;
  const sourceMix = sourceMixes.record0;
  const sourceModules = sourceMix.sources.map((source) => source.ownerModule);

  assert.equal(indexConfiguration.indexName, 'productLocalized');
  assert.equal(indexConfiguration.aliasName, 'agoraProductDiscovery');
  assert.equal(indexConfiguration.publicationPolicyCode, publicationPolicy.code);
  assert.equal(publicationPolicy.sourceStatus, 'ACTIVE');
  assert.equal(publicationPolicy.targetStatus, 'CURRENT');
  assert.deepEqual(sourceModules, ['product', 'pricing', 'inventory', 'commerceSearchCore']);
  assert.equal(sourceMix.sources.find((source) => source.ownerModule === 'product').required, true);
  assert.equal(sourceMix.sources.find((source) => source.ownerModule === 'pricing').required, false);
  assert.equal(sourceMix.sources.find((source) => source.ownerModule === 'inventory').required, false);
  assert.equal(commerceSearchRules.record0.categoryCode, 'agoraWomen');
  assert.deepEqual(commerceSearchRules.record0.actions.map((action) => action.actionType), ['PIN', 'BOOST', 'BURY']);
});

test('runtime release files contain no reference-site dependency or secret-looking values', () => {
  const searchableFiles = walkFiles(moduleRoot).filter((filePath) => {
    const relativePath = path.relative(moduleRoot, filePath);
    return (
      relativePath === 'package.json' ||
      relativePath === 'nodics.js' ||
      relativePath.startsWith('config' + path.sep) ||
      relativePath.startsWith('data' + path.sep)
    );
  });
  const combined = searchableFiles.map((filePath) => fs.readFileSync(filePath, 'utf8')).join('\n');

  assert.equal(/themesflat|modave|home-fashion-eleganceNest|product-detail\.html/i.test(combined), false);
  assert.equal(/api[_-]?key|secret|password|private[_-]?key|bearer\s+[a-z0-9._-]+/i.test(combined), false);
});
