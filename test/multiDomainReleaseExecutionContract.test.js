'use strict';
const assert = require('node:assert/strict'); const path = require('node:path'); const test = require('node:test');
const projectRoot = path.resolve(__dirname, '..');
const { frameworkRoot } = require('./helpers/configuration');
const releaseExecution = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution'));
const modules = ['agora.apparel', 'agora.electronics', 'agora.telco'];

/** Selects actual customer modules; nImport owns the offline execution ports. */
function setup(role) {
  const state = releaseExecution({
    modules: Object.fromEntries(modules.map(name => [name, {
      name, path: path.join(projectRoot, 'modules', name), parent: 'kickoffModules',
      canonicalIdentity: name, metaData: { nodics: { displayName: name } },
    }])),
    environment: 'kickoffLocal', runtimeRole: role,
  });
  const owners = {
    COMMERCE: ['nodics.commerce/modules/baseCommerce/modules/store'],
    WCMS_STAGED: ['nodics.foundation/modules/nCatalog', ...['cms', 'media', 'wcmsExperience']
      .map(name => 'nodics.wcms/modules/' + name)],
    COMMERCE_STAGED: [
      ...['product', 'pricing', 'inventory', 'promotion', 'tax', 'commerceSearch/modules/commerceSearchCore']
        .map(name => 'nodics.commerce/modules/baseCommerce/modules/' + name),
      ...['apparel/modules/apparelProduct', 'electronics/modules/electronicsProduct', 'telco/modules/telcoCatalog']
        .map(name => 'nodics.accelerators/modules/' + name),
    ],
  };
  if (role === 'WCMS_STAGED') {
    const { CatalogType } = require(path.join(frameworkRoot, 'nodics.foundation/modules/nCatalog/src/utils/enums'));
    global.ENUMS = { CatalogType: Object.fromEntries(CatalogType.definition.map(key => [key, { key }])) };
  }
  const destinations = {};
  for (const directory of owners[role]) {
    Object.entries(require(path.join(frameworkRoot, directory, 'src/schemas/schemas')))
      .forEach(([name, rawSchema]) => { destinations[name] = { name, rawSchema }; });
  }
  const active = role === 'COMMERCE' ? [] : NODICS.getActiveModules();
  if (role === 'COMMERCE') {
    const runtime = require('./helpers/configuration').loadRuntime('commerceServer');
    state.service.configuration().contributions = runtime.data.dataReleases.contributions
      .filter(item => modules.includes(item.moduleName));
  }
  const storePath = path.join(frameworkRoot, 'nodics.commerce/modules/baseCommerce/modules/store');
  const { targetValidators } = require(path.join(storePath, 'config/properties')).data.dataReleases;
  Object.assign(state.service.configuration().targetValidators, targetValidators);
  SERVICE.DefaultModuleService = { isLocalModuleActive: name => Object.hasOwn(destinations, name) };
  SERVICE.DefaultStoreContextService = require(path.join(storePath, 'src/service/defaultStoreContextService'));
  const getModule = NODICS.getModule;
  NODICS.getModule = name => destinations[name] || getModule(name);
  NODICS.getActiveModules = () => [...active, ...Object.keys(destinations)];
  state.publication = role === 'COMMERCE' ? 'OPERATIONAL' : 'STAGED';
  return state;
}

for (const role of ['COMMERCE_STAGED', 'WCMS_STAGED']) test(`all domain ${role} release selections reach their separate import plans`, async () => {
  const { service, imports } = setup(role);
  const discovered = service.discoverReleases('sample').filter(release => release.destinationRole === role);
  // Inert publication intents are consumed by the governed profile step, not the catalog CRUD import.
  const releases = discovered.filter(release => release.releaseCode.endsWith(role === 'COMMERCE_STAGED' ? 'CommerceCatalog' : 'ContentCatalog'));
  if (role === 'COMMERCE_STAGED') {
    const intent = discovered.filter(release => release.releaseCode === 'agora.apparel:agoraApparelPublicationPlan');
    assert.equal(intent.length, 1); assert.equal(intent[0].declaredFiles.length, 1);
    assert(intent[0].declaredFiles[0].includes('/publication/records/publicationPlan.json'));
  }
  assert.equal(releases.length, 3); assert.deepEqual(new Set(releases.map(release => release.moduleName)), new Set(modules));
  releases.forEach(release => { assert.equal(service.validateDestination(release), true); assert(release.declaredFiles.length >= (role === 'COMMERCE_STAGED' ? 10 : 7)); });
  const releaseRequest = { dataType: 'sample', releaseCodes: releases.map(item => item.releaseCode), expectedReleases: Object.fromEntries(releases.map(item => [item.releaseCode, item.version])) };
  await service.execute({ tenant: 'default', releaseRequest });
  assert.deepEqual(imports.flatMap(request => request.dataReleasePlan.map(release => release.releaseCode)), releaseRequest.releaseCodes);
});

test('each application imports an independent operational Store before its Staged catalogue', async () => {
  const state = setup('COMMERCE');
  const { service, imports } = state;
  const releases = service.discoverReleases('sample').filter(item => item.releaseCode.endsWith('StoreReference'));
  assert.equal(releases.length, modules.length);
  const identities = new Set();
  for (const name of modules) {
    const release = releases.find(item => item.moduleName === name);
    assert.equal(service.validateDestination(release), true);
    state.publication = 'STAGED';
    await assert.rejects(service.validateReleaseTargets(release, 'default'));
    state.publication = 'OPERATIONAL';
    const data = path.join(projectRoot, 'modules', name, 'data');
    const manifest = require(path.join(data, 'manifest.json'));
    const section = manifest.sections[release.releaseCode.split(':')[1]];
    assert.equal(section.publicationPolicy, 'NONE');
    const files = Object.keys(section.files);
    const header = require(path.join(data, files.find(file => file.includes('/headers/'))));
    const records = {};
    for (const { options, query } of Object.values(header.store)) {
      assert.deepEqual(query, { code: '$code', tenant: '$tenant' });
      const file = files.find(file => file.endsWith('/' + options.dataFilePrefix + '.js'));
      const row = require(path.join(data, file)).record0;
      assert.equal(row.tenant, 'default');
      assert.equal(row.active, true);
      assert(!identities.has(row.code), row.code);
      identities.add(row.code);
      records[options.schemaName] = row;
    }
    const domain = name.split('.')[1];
    const prefix = 'agora' + domain[0].toUpperCase() + domain.slice(1);
    assert.equal(records.store.code, prefix + 'Store');
    assert.equal(records.salesChannel.code, prefix + 'Web');
    assert.equal(records.pointOfService.code, prefix + 'Online');
    assert.deepEqual(records.store.enterpriseRef, { moduleName: 'profile', schemaName: 'enterprise', code: 'default' });
    assert.equal(records.salesChannel.storeCode, records.store.code);
    assert.equal(records.pointOfService.storeCode, records.store.code);
    const config = require(path.join(data, '../config/properties'));
    const profile = config.backofficeApplicationInitialization.profiles[name.replace('.', '')];
    const steps = profile.dataPackages.value;
    const index = steps.findIndex(step => step.code === release.releaseCode);
    assert(index >= 0 && index < steps.findIndex(step => step.code.endsWith('CommerceCatalog')));
    assert.equal(steps[index].targetRuntimeRole, 'COMMERCE');
    assert.equal(steps[index].trigger, 'USER');
    await service.execute({ tenant: 'default', releaseRequest: { dataType: 'sample',
      releaseCodes: [release.releaseCode], expectedReleases: { [release.releaseCode]: release.version } } });
  }
  assert.equal(identities.size, 9);
  assert.deepEqual(imports.flatMap(request => request.dataReleasePlan.map(item => item.releaseCode)).sort(),
    releases.map(item => item.releaseCode).sort());
});

for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  test(environment + ' selects exactly the operational stores for each domain combination', () => {
    const { loadRuntime } = require('./helpers/configuration');
    for (const selection of ['none', 'apparel', 'electronics', 'telco', 'apparel,electronics',
      'apparel,telco', 'electronics,telco', 'all']) {
      const runtime = loadRuntime('commerceServer', environment, { NODICS_AGORA_DOMAINS: selection });
      const selected = modules.filter(name => selection === 'all' || selection.split(',').includes(name.split('.')[1]));
      const contributions = runtime.data.dataReleases.contributions.filter(item => modules.includes(item.moduleName));
      assert.deepEqual(contributions.map(item => item.moduleName).sort(), selected, selection);
      for (const item of contributions) {
        const manifest = require('../modules/' + item.moduleName + '/data/manifest.json');
        assert.deepEqual(new Set(item.sections), new Set(Object.keys(manifest.sections)
          .filter(code => manifest.sections[code].destinationRole === 'COMMERCE')));
      }
    }
  });
}

test('selected Staged receivers admit Agora and Circa sources through their actual materialized owners', async () => {
  const projection = require(path.join(frameworkRoot,
    'nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService'));
  for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    for (const server of ['wcmsStagedServer', 'commerceStagedServer']) {
      await projection.resolve({ projectRoot, frameworkRoot, environment, server });
      const imports = SERVICE.DefaultDataReleaseService;
      const codes = server === 'commerceStagedServer' ? ['circa.ewaste:commerce'] : [
        'circa.ewaste:content', 'circa.ewaste:customer-workspace',
        'agora.apparel:agoraApparelContentCatalog', 'agora.electronics:agoraElectronicsContentCatalog',
        'agora.telco:agoraTelcoContentCatalog',
      ];
      const catalogue = imports.discoverReleases('sample');
      for (const code of codes) {
        const matches = catalogue.filter(item => item.releaseCode === code);
        assert.equal(matches.length, 1, environment + '/' + code);
        const [release] = matches;
        assert.equal(release.invalidManifest, undefined);
        assert.equal(imports.validateDestination(release), true, code);
        assert.equal(await imports.validateReleaseTargets(release, 'default'), true, code);
        if (code === 'circa.ewaste:content') {
          assert(NODICS.getActiveModules().includes('catalog'));
          assert.equal(NODICS.getModule('catalog').rawSchema.catalog.model, true);
          const targets = imports.releaseDestinationTargets(release);
          assert(targets.some(target => target.moduleName === 'catalog' && target.schemaName === 'catalog'));
        }
      }
      if (server === 'wcmsStagedServer') {
        const cms = NODICS.getModule('cms').rawSchema;
        assert.equal(SERVICE.DefaultSchemaAuthoringPolicyService.describe(cms.cmsPage).authoringAllowed, false);
        for (const name of ['cmsPublicationManifest', 'cmsOnlinePublicationPointer', 'cmsPublicationDeploymentReceipt'])
          assert.equal(cms[name].dataRelease?.stagedSourceOperation, undefined);
      }
    }
  }
});

test('fresh WCMS Staged waits for application initialization to install website content', async () => {
  const projection = require(path.join(frameworkRoot,
    'nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService'));
  for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    const offline = releaseExecution({ modules: {}, environment });
    const { DefaultDataInstallationService, DefaultImportService } = SERVICE;
    await projection.resolve({ projectRoot, frameworkRoot, environment, server: 'wcmsStagedServer' });
    // Use the selected receiver and real release service with in-memory receipts and import dispatch.
    Object.assign(SERVICE, { DefaultDataInstallationService, DefaultImportService });
    const imports = SERVICE.DefaultDataReleaseService;
    const request = { tenant: 'default', modules: ['axis', 'cms', 'catalog'] };
    const startup = await imports.installStartupReleases(request);
    assert.deepEqual(startup, { skipped: true, reason: 'NO_INIT_RELEASES' });
    assert.equal(offline.imports.length, 0);
    const descriptor = CONFIG.get('cms').publication.baselines.axis;
    const axis = await imports.execute({ tenant: 'default', releaseRequest: {
      dataType: descriptor.dataType || 'init', releaseCodes: [descriptor.releaseCode],
      expectedReleases: { [descriptor.releaseCode]: descriptor.releaseVersion },
    } });
    assert.deepEqual(axis.data.releases.map(row => row.releaseCode), ['axis:axisBaseline']);
    assert.deepEqual(await imports.installStartupReleases(request), startup);
    const cms = await imports.preparePlan({ tenant: 'default', releaseRequest: {
      dataType: 'init', releaseCodes: ['cms:init-v001'],
    } });
    assert.deepEqual(cms.releases.map(row => row.releaseCode), ['catalog:init-v001', 'cms:init-v001']);
    const core = await imports.execute({ tenant: 'default', releaseRequest: {
      dataType: 'core', releaseCodes: ['axis:core-v001'],
    } });
    assert.deepEqual(core.data.releases.map(row => row.releaseCode), ['axis:core-v001']);
    assert.equal(offline.imports.length, 2);
    for (const [moduleName, sectionCode, type] of [
      ['axis', 'axisBaseline', 'init'], ['cms', 'init-v001', 'init'], ['axis', 'core-v001', 'core'],
    ]) {
      const release = imports.discoverManifestRelease({ moduleName, sectionCode }, type);
      assert.equal(release.selectionPolicy, type === 'core' ? 'DEFAULT' : 'EXPLICIT');
      assert.equal(release.lifecycle, 'PUBLISHABLE');
      assert.equal(release.initialPublicationPolicy, 'ADMIN_INITIATED');
    }
  }
});
