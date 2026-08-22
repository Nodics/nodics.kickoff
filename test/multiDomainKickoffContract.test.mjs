import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
const definitions = [
  { group: 'agora.apparel', framework: 'apparel', pack: 'agoraApparelData', prefix: 'agoraApparel', folder: 'apparel', productFile: 'agoraApparelProductData.js', profileFile: 'agoraApparelStyleData.js', catalogVersion: 'agoraApparelStaged', contentCatalog: 'agoraApparelContentCatalog', rendererKeys: ['agora.apparel.product-card', 'agora.apparel.page.home'] },
  { group: 'agora.electronics', framework: 'electronics', pack: 'agoraElectronicsData', prefix: 'agoraElectronics', folder: 'electronics', productFile: 'agoraElectronicsProductData.js', profileFile: 'agoraElectronicsSpecificationData.js', catalogVersion: 'agoraElectronicsStaged', contentCatalog: 'agoraElectronicsContentCatalog', rendererKeys: ['agora.electronics.product-card', 'agora.electronics.page.home'] },
  { group: 'agora.telco', framework: 'telco', pack: 'agoraTelcoData', prefix: 'agoraTelco', folder: 'telco', productFile: 'agoraTelcoProductData.js', profileFile: 'agoraTelcoPlanData.js', catalogVersion: 'agoraTelcoStaged', contentCatalog: 'agoraTelcoContentCatalog', rendererKeys: ['agora.telco.product-card', 'agora.telco.page.home'] }
];

const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

test('Kickoff domain groups extend reusable framework accelerators and packs remain data-only', () => {
  assert.deepEqual(require('../modules/agora.common/package.json').nodics.extends, ['nodics.commerce']);
  for (const definition of definitions) {
    const groupRoot = path.join(root, 'modules', definition.group);
    const packRoot = path.join(groupRoot, 'modules', definition.pack);
    assert.deepEqual(require(path.join(groupRoot, 'package.json')).nodics.extends, [definition.framework]);
    const metadata = require(path.join(packRoot, 'package.json')).nodics;
    assert.equal(metadata.kind, 'content-pack');
    assert.deepEqual(metadata.owns, ['configuration', 'data', 'test', 'documentation']);
    assert.equal(fs.existsSync(path.join(packRoot, 'src')), true);
    assert.deepEqual(fs.readdirSync(path.join(packRoot, 'src')).filter(name => fs.readdirSync(path.join(packRoot, 'src', name)).length), []);
  }
});

test('every domain owns distinct Product and WCMS catalogs with framework domain records', () => {
  const versions = new Set(); const contentCatalogs = new Set();
  for (const definition of definitions) {
    const dataRoot = path.join(root, 'modules', definition.group, 'modules', definition.pack, 'data', 'staged', definition.folder, 'data');
    const products = require(path.join(dataRoot, definition.productFile));
    const profiles = require(path.join(dataRoot, definition.profileFile));
    const content = require(path.join(dataRoot, `${definition.pack.replace('Data', '')}ContentCatalogData.js`));
    const site = require(path.join(dataRoot, `${definition.prefix}SiteData.js`));
    const page = require(path.join(dataRoot, `${definition.prefix}PageData.js`));
    const route = require(path.join(dataRoot, `${definition.prefix}RouteData.js`));
    const renderers = require(path.join(dataRoot, `${definition.prefix}RendererData.js`));
    assert(Object.keys(products).length >= 2);
    assert(Object.keys(profiles).length >= 2);
    Object.values(products).forEach(product => assert.equal(product.catalogVersion, definition.catalogVersion));
    versions.add(definition.catalogVersion); contentCatalogs.add(content.record0.code);
    assert.equal(site.record0.catalog, definition.contentCatalog);
    assert.equal(page.record0.cmsSite[0], site.record0.code);
    assert.equal(route.record0.site, site.record0.code);
    assert.deepEqual(Object.values(renderers).map(item => item.renderer), definition.rendererKeys);
  }
  assert.equal(versions.size, 3); assert.equal(contentCatalogs.size, 3);
});

test('domain manifests isolate Commerce and WCMS releases and verify every immutable hash', () => {
  for (const definition of definitions) {
    const packRoot = path.join(root, 'modules', definition.group, 'modules', definition.pack);
    const manifest = require(path.join(packRoot, 'data', 'manifest.json'));
    assert.equal(manifest.contractVersion, 0); assert.equal(manifest.module, definition.pack);
    const sections = Object.values(manifest.sections);
    assert.deepEqual(new Set(sections.map(section => section.destinationRole)), new Set(['COMMERCE_STAGED', 'WCMS_STAGED']));
    const wcmsSection = sections.find(section => section.destinationRole === 'WCMS_STAGED');
    const commerceSection = sections.find(section => section.destinationRole === 'COMMERCE_STAGED');
    assert(Object.keys(wcmsSection.files).some(relative => /SharedComponentData/.test(relative)),
      `${definition.pack} shared CMS component records must publish through the WCMS release`);
    assert(!Object.keys(commerceSection.files).some(relative => /SharedComponentData/.test(relative)),
      `${definition.pack} Commerce release must not own shared CMS component records`);
    for (const section of sections) for (const [relative, expected] of Object.entries(section.files)) {
      assert.equal(digest(path.join(packRoot, 'data', relative)), expected, `${definition.pack}:${relative}`);
    }
    const runtimeFiles = fs.readdirSync(path.join(packRoot, 'data', 'staged', definition.folder, 'data')).map(file => `staged/${definition.folder}/data/${file}`)
      .concat(fs.readdirSync(path.join(packRoot, 'data', 'staged', definition.folder, 'headers')).map(file => `staged/${definition.folder}/headers/${file}`)).sort();
    assert.deepEqual(sections.flatMap(section => Object.keys(section.files)).sort(), runtimeFiles);
  }
});

test('project composition selects each domain independently, together, or Commerce-only', () => {
  const composition = require('../config/agora-domain-composition');
  assert.deepEqual(composition.resolve('apparel'), { domains: ['apparel'], frameworkGroups: ['apparel'], sharedModules: [], projectPacks: ['agoraApparelData'] });
  assert.deepEqual(composition.resolve('electronics'), { domains: ['electronics'], frameworkGroups: ['electronics'], sharedModules: [], projectPacks: ['agoraElectronicsData'] });
  assert.deepEqual(composition.resolve('telco'), { domains: ['telco'], frameworkGroups: ['telco'], sharedModules: [], projectPacks: ['agoraTelcoData'] });
  assert.deepEqual(composition.resolve('commerce'), { domains: [], frameworkGroups: [], sharedModules: [], projectPacks: [] });
  assert.deepEqual(composition.resolve('all').domains, ['apparel', 'electronics', 'telco']);
  assert.deepEqual(composition.resolve('all').sharedModules, ['multiDomainCommerce']);
  assert.throws(() => composition.resolve('apparel,unknown'), /Unsupported NODICS_AGORA_DOMAINS/);
});

test('local and Docker staged runtimes consume the selected domain packs', () => {
  const localCommerce = fs.readFileSync(path.join(root, 'envs/kickoffLocal/commerceStagedServer/config/properties.js'), 'utf8');
  const localWcms = fs.readFileSync(path.join(root, 'envs/kickoffLocal/wcmsStagedServer/config/properties.js'), 'utf8');
  const docker = fs.readFileSync(path.join(root, 'envs/kickoffDockerLocal/config/runtime-properties.js'), 'utf8');
  assert.match(localCommerce, /agoraDomains\.projectPacks/); assert.match(localWcms, /agoraDomains\.projectPacks/);
  assert.equal((docker.match(/agoraDomains\.projectPacks/g) || []).length, 2);
});

test('Commerce runtime startup facts discover the accelerator package used by configured groups', () => {
  const projectContract = JSON.parse(fs.readFileSync(path.join(root, 'nodics.project.json'), 'utf8'));
  for (const serverCode of ['commerce', 'commerceStaged']) {
    assert(projectContract.runtime.servers[serverCode].moduleRoots.includes('nodics.accelerators'),
      `${serverCode} must discover nodics.accelerators`);
  }
});
