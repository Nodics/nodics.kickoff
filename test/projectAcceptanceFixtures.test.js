/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/projectAcceptanceFixtures @description Customer bootstrap, documentation and deployment selections only. @owner nodics.kickoff @layer test */
const assert = require('node:assert/strict');
const path = require('node:path');
const { frameworkRoot, loadRuntime, loadEnvironment } = require('./helpers/configuration');
const projectRoot = path.resolve(__dirname, '..');
const apparelPromotionRoots = [
  'agoraStylePass5PercentRule', 'agoraCapsuleEdit10PercentRule', 'agoraPrivateSale20PercentRule',
];
const apparelPromotions = Object.values(require('../modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelPromotionData'));
const circaPromotionRoots = ['greenperks', 'renewworks', 'loopcycle'].flatMap(issuer =>
  require('../modules/circa.ewaste/data/sample-v001/publication/' + issuer + '/records/publicationPlan.json').items.map(row => row.rootCode));
const outletProposal = require('../modules/circa.ewaste/test/fixtures/circaMonetaryOutletProposal.json');
const outletStores = outletProposal.outletGoods.map(row => row.storeCode);
const outletScopes = outletStores.map(storeCode => ({ tenant: 'default', storeCode }));
function outletRoots(domain) {
  if (domain === 'promotion') return {};
  return Object.fromEntries(outletProposal.outletGoods.map(good => {
    const issuer = outletProposal.issuerPacks.find(row => row.issuerEnterpriseCode === good.issuerEnterpriseCode);
    return [good.storeCode, [domain === 'pricing' ? issuer.priceBookCode : domain === 'tax' ? issuer.taxPolicyCode : good.warehouseCode]];
  }));
}
assert.equal(circaPromotionRoots.length, 38);
assert.equal(new Set(circaPromotionRoots).size, 38);
assert.deepEqual(apparelPromotions.filter(row => row.active === true && row.status === 'ACTIVE').map(row => row.code),
  apparelPromotionRoots, 'Selected Apparel promotion roots must match the canonical source campaigns');
for (const [domain, circaRoots, apparelRoots] of [
  ['pricing', ['circaPointsPriceBook'], ['agoraApparelRetailUsd']],
  ['inventory', ['circaDigitalRegistry'], ['agoraApparelWarehouse']],
  ['tax', ['circaSamplePointsPolicy'], ['agoraAeVatPolicy']],
  ['promotion', circaPromotionRoots, apparelPromotionRoots],
]) {
  const local = loadRuntime('commerceServer', 'kickoffLocal', { NODICS_AGORA_DOMAINS: 'apparel' })[domain].publication.delivery;
  const stores = domain === 'promotion' ? [] : outletStores, roots = outletRoots(domain);
  assert.deepEqual(local.storeCodes, ['circaMainStore', ...stores, 'agoraMainStore']);
  assert.deepEqual(local.rootCodesByStore, { circaMainStore: circaRoots, ...roots, agoraMainStore: apparelRoots });
  for (const selection of ['none', 'electronics', 'telco']) {
    const other = loadRuntime('commerceServer', 'kickoffLocal', { NODICS_AGORA_DOMAINS: selection })[domain].publication.delivery;
    assert.deepEqual(other.storeCodes, ['circaMainStore', ...stores]);
    assert.deepEqual(other.rootCodesByStore, { circaMainStore: circaRoots, ...roots });
  }
  assert.equal(loadRuntime('commerceServer', 'kickoffDockerLocal')[domain].publication.delivery.rootCodesByStore, undefined);
}
assert.deepEqual(loadRuntime('commerceServer', 'kickoffLocal').product.discovery.activationScopes, [
  { tenant: 'default', storeCode: 'circaMainStore' },
  ...outletScopes,
  { tenant: 'default', storeCode: 'agoraMainStore' },
  { tenant: 'default', storeCode: 'agoraElectronicsStore' },
  { tenant: 'default', storeCode: 'agoraTelcoStore' },
]);
assert.deepEqual(loadRuntime('commerceServer', 'kickoffLocal', { NODICS_AGORA_DOMAINS: 'apparel' }).product.discovery.activationScopes, [
  { tenant: 'default', storeCode: 'circaMainStore' },
  ...outletScopes,
  { tenant: 'default', storeCode: 'agoraMainStore' },
], 'Inactive Agora domains must not participate in activated Product delivery');
const resetProfiles = require('../modules/kickoffCore/config/properties').localResetProvider.profiles;
for (const role of ['COMMERCE', 'COMMERCE_STAGED']) {
  assert.deepEqual(resetProfiles[role].searchIndexes, [
    { moduleName: 'discoveryProjection', indexName: 'discoveryDocumentProjection' },
    { moduleName: 'product', indexName: 'productLocalized' },
    { moduleName: 'product', indexName: 'productSearchProjection' },
    { moduleName: 'commerceSearchCore', indexName: 'commerceSearchRuleProjection' },
  ], role + ' must cover all selected Commerce projections without granting physical deletion');
}

for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  const selection = loadRuntime('platformServer', environment).tooling.acceptance.localBootstrap;
  assert.equal(selection.platformInitializationProfile, 'localPlatformFoundation');
  assert.equal(selection.locationInitializationProfile, 'localLocationFoundation');
  assert.equal(selection.verifyDefaultLocationMap, true);
  assert.equal(selection.publicOriginKey, 'nexus');
  assert.deepEqual(selection.applicationBundles, [
    { profileCode: 'nexus', deliveryProbe: { site: 'nexusCorporateSite', path: '/' } },
    { profileCode: 'circa', deliveryProbe: { site: 'circaSite', path: '/' } },
  ]);
  assert.deepEqual(selection.applicationUpdates, [
    { profileCode: 'nexusupdate', deliveryProbe: { site: 'nexusCorporateSite', path: '/' }, marker: 'nexus-corporate-1.0.1' },
  ]);
  assert.deepEqual(selection.requiredCapabilities, [
    'nodics.process', 'nodics.communication', 'nodics.location', 'nodics.waste',
    'nodics.loyalty', 'nodics.commerce', 'nodics.discovery',
  ]);
  assert.deepEqual(selection.rollbackDocumentationProfiles, ['frameworkdocs', 'axisdocs']);
  assert.deepEqual(selection.journeyCommands, [
    { command: 'acceptance:agora-commerce-data', args: ['--execute-install'] },
    { command: 'acceptance:agora-commerce-publication', args: ['--execute', '--approve-publications'] },
  ]);
  assert.deepEqual(selection.documentationPackCodes, ['nodicsDocumentation', 'axisDocumentation', 'kickoffDocumentation']);
  assert.deepEqual(selection.documentationPacks.kickoffDocumentation, {
    code: 'kickoffDocumentation', profileCode: 'kickoffdocs', minimumRoutes: 4,
    navigationComponent: 'kickoffDocumentationNavigation', site: 'kickoffDocumentationSite', path: '/docs/nodics-kickoff',
  });
}

const environmentTools = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs'));
const acceptance = environmentTools.projectRuntimeAcceptance(projectRoot, loadEnvironment('kickoffLocal'), { role: 'PLATFORM' });
const packs = acceptance.localBootstrap;
assert.deepEqual(packs.documentationPackCodes.map(code => packs.documentationPacks[code].path),
  ['/docs/framework', '/docs/nodics-axis', '/docs/nodics-kickoff']);
assert(acceptance.guidedInitialization.publicationProfiles.includes('agoraapparel'));
const customer = require('../modules/kickoffCore/config/properties').tooling.acceptance.localBootstrap;
assert.deepEqual(Object.keys(customer.documentationPacks), ['kickoffDocumentation']);
const publicationCatalogs = require('../modules/kickoffCore/config/properties').tooling.acceptance.commercePublication.catalogs.value;
const apparelCatalogue = publicationCatalogs.find(catalog => catalog.includes === 'apparel').value;
const apparelProducts = Object.values(require('../modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelProductData'))
  .filter(product => product.status === 'ACTIVE' && product.active === true && product.catalogVersion === apparelCatalogue.catalogVersion);
assert.equal(apparelProducts.length, 61, 'Apparel acceptance must include all 58 physical and 3 digital products');
assert.deepEqual(apparelCatalogue.productCodes, apparelProducts.map(product => product.code),
  'The complete source catalogue, not a representative product, defines Apparel acceptance');
assert.equal(new Set(apparelCatalogue.productCodes).size, apparelProducts.length);
assert.deepEqual(apparelCatalogue.discoveryPagination, { pageSize: 24, maximumProducts: 1000 });
const targetBindings = {};
for (const catalog of publicationCatalogs) {
  for (const [domain, receipt] of Object.entries(catalog.value.publications)) {
    const prefix = 'NODICS_AGORA_' + catalog.includes.toUpperCase() + '_' + domain.toUpperCase() + '_PUBLICATION_';
    for (const [field, suffix] of Object.entries({ code: 'CODE', rootCode: 'ROOT_CODE', sourceVersion: 'SOURCE_VERSION', targetVersion: 'TARGET_VERSION' })) {
      assert.deepEqual(receipt[field], { $config: 'env', name: prefix + suffix, fallback: '' },
        catalog.includes + ':' + domain + ' must bind exact ' + field + ' without inventing evidence');
    }
    targetBindings[prefix + 'TARGET_VERSION'] = 'isolated-target-' + catalog.includes + '-' + domain;
  }
}
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  const defaults = loadRuntime('commerceStagedServer', environment).tooling.acceptance.commercePublication.catalogs;
  const customized = loadRuntime('commerceStagedServer', environment, targetBindings).tooling.acceptance.commercePublication.catalogs;
  assert.equal(defaults.length, publicationCatalogs.length);
  assert.deepEqual(defaults.find(catalog => catalog.catalogVersion === 'agoraApparelStaged').productCodes, apparelCatalogue.productCodes,
    environment + ' must retain complete Apparel acceptance coverage');
  for (let index = 0; index < defaults.length; index++) {
    for (const [domain, receipt] of Object.entries(defaults[index].publications)) {
      assert.equal(receipt.targetVersion, '', 'Absent owner evidence must remain unqualified');
      assert.equal(customized[index].publications[domain].targetVersion,
        'isolated-target-' + publicationCatalogs[index].includes + '-' + domain);
      assert.equal(customized[index].publications[domain].sourceVersion, receipt.sourceVersion,
        'Target customization must not substitute for source evidence');
    }
  }
}
const staged = loadRuntime('wcmsStagedServer', 'kickoffLocal');
assert.equal(staged.cms.publication.workflow.target.connectionName, 'process');
assert.equal(staged.cms.publication.target.connectionName, 'cmsOnline');
assert.equal(staged.editorial.publication.target.moduleName, 'editorial');
const comms = loadRuntime('engagementServer', 'kickoffLocal').communication;
const provider = require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationRuntimeService')).providerPolicy(comms, 'TELEGRAM');
assert.deepEqual(provider.credentialReferences, ['telegram.bot.circa']);
console.log('Kickoff application fixtures and deployment selections validated');
