import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';
import {
  readProjectEnvironmentComposition,
  resolveDomainComposition,
} from '../../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentProfileService.mjs';

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
const definitions = [
  { group: 'agora.apparel', framework: 'apparel', pack: 'agora.apparel', prefix: 'agoraApparel', folder: 'apparel', productFile: 'agoraApparelProductData.js', profileFile: 'agoraApparelStyleData.js', catalogVersion: 'agoraApparelStaged', contentCatalog: 'agoraApparelContentCatalog', rendererKeys: ['agora.apparel.product-card', 'agora.apparel.page.home'] },
  { group: 'agora.electronics', framework: 'electronics', pack: 'agora.electronics', prefix: 'agoraElectronics', folder: 'electronics', productFile: 'agoraElectronicsProductData.js', profileFile: 'agoraElectronicsSpecificationData.js', catalogVersion: 'agoraElectronicsStaged', contentCatalog: 'agoraElectronicsContentCatalog', rendererKeys: ['agora.electronics.product-card', 'agora.electronics.page.home'] },
  { group: 'agora.telco', framework: 'telco', pack: 'agora.telco', prefix: 'agoraTelco', folder: 'telco', productFile: 'agoraTelcoProductData.js', profileFile: 'agoraTelcoPlanData.js', catalogVersion: 'agoraTelcoStaged', contentCatalog: 'agoraTelcoContentCatalog', rendererKeys: ['agora.telco.product-card', 'agora.telco.page.home'] }
];

const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

test('project configuration stays minimal while metadata, domains, and data packs remain with their owners', () => {
  const projectContractPath = path.join(root, 'nodics.project.json');
  const projectPackage = require(path.join(root, 'package.json'));
  const composition = readProjectEnvironmentComposition(root, 'kickoffLocal');
  const dataPackModules = [
    require(path.join(root, 'modules', 'nexus.web', 'data', 'manifest.json')).module,
    ...definitions.map(definition => require(path.join(root, 'modules', definition.group, 'data', 'manifest.json')).module)
  ];

  assert.equal(fs.existsSync(path.join(root, 'config', 'agora-domain-composition.js')), false);
  assert.equal(fs.existsSync(projectContractPath), false);
  assert.equal(projectPackage.name, 'nodics.kickoff');
  assert.equal(require(path.join(root, 'config', 'properties.js')).project, undefined);
  assert.equal(projectPackage.nodics.displayName, 'Nodics Kickoff');
  assert.equal(projectPackage.nodics.projectType, 'reference');
  assert.deepEqual(composition.domains, ['apparel', 'electronics', 'telco']);
  assert.deepEqual(dataPackModules, ['nexus.web', 'agora.apparel', 'agora.electronics', 'agora.telco']);
});

test('Kickoff domain groups extend reusable framework accelerators and packs remain data-only', () => {
  assert.equal(fs.existsSync(path.join(root, 'modules', 'agora.' + 'common')), false);
  for (const definition of definitions) {
    const groupRoot = path.join(root, 'modules', definition.group);
    assert.deepEqual(require(path.join(groupRoot, 'package.json')).nodics.extends, [definition.framework]);
    const metadata = require(path.join(groupRoot, 'package.json')).nodics;
    assert.equal(metadata.kind, 'content-pack');
    assert.deepEqual(metadata.owns, ['composition', 'configuration', 'data', 'test', 'documentation', 'llm']);
    assert.equal(fs.existsSync(path.join(groupRoot, 'src')), false);
  }
});

test('every domain owns distinct Product and WCMS catalogs with framework domain records', () => {
  const versions = new Set(); const contentCatalogs = new Set();
  for (const definition of definitions) {
    const commerceRoot = path.join(root, 'modules', definition.group, 'data', 'sample-v001', 'commerce', 'records');
    const contentRoot = path.join(root, 'modules', definition.group, 'data', 'sample-v001', 'content', 'records');
    const products = require(path.join(commerceRoot, definition.productFile));
    const profiles = require(path.join(commerceRoot, definition.profileFile));
    const content = require(path.join(contentRoot, `${definition.prefix}ContentCatalogData.js`));
    const site = require(path.join(contentRoot, `${definition.prefix}SiteData.js`));
    const page = require(path.join(contentRoot, `${definition.prefix}PageData.js`));
    const route = require(path.join(contentRoot, `${definition.prefix}RouteData.js`));
    const renderers = require(path.join(contentRoot, `${definition.prefix}RendererData.js`));
    const media = require(path.join(contentRoot, `${definition.prefix}SharedMediaData.js`));
    const mediaReferences = require(path.join(contentRoot, `${definition.prefix}SharedMediaReferenceData.js`));
    const mediaAssetManifest = require(path.join(root, 'modules', definition.group, 'data', 'sample-v001', 'content', 'assets', 'agora-cms-media', 'assetManifest.js'));
    const mediaCodes = new Set(mediaAssetManifest.map(asset => asset.mediaCode));
    assert(Object.keys(products).length >= 2);
    assert(Object.keys(profiles).length >= 2);
    Object.values(products).forEach(product => assert.equal(product.catalogVersion, definition.catalogVersion));
    assert.equal(Object.keys(media).length, mediaAssetManifest.length);
    Object.values(media).forEach(item => {
      assert.equal(mediaCodes.has(item.code), true);
      assert.match(item.asset.sourceFile, /^content\/assets\/agora-cms-media\/files\/[A-Za-z0-9._-]+$/);
      assert.equal(fs.existsSync(path.join(root, 'modules', definition.group, 'data', 'sample-v001', item.asset.sourceFile)), true);
    });
    Object.values(mediaReferences).forEach(reference => assert.equal(mediaCodes.has(reference.mediaCode), true));
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
    const packRoot = path.join(root, 'modules', definition.group);
    const manifest = require(path.join(packRoot, 'data', 'manifest.json'));
    assert.equal(manifest.contractVersion, 2); assert.equal(manifest.module, definition.pack);
    const sections = Object.values(manifest.sections);
    assert.deepEqual(new Set(sections.map(section => section.destinationRole)), new Set(['COMMERCE_STAGED', 'WCMS_STAGED']));
    const wcmsSection = sections.find(section => section.destinationRole === 'WCMS_STAGED');
    const commerceSection = sections.find(section => section.destinationRole === 'COMMERCE_STAGED');
    assert(Object.keys(wcmsSection.files).some(relative => /SharedComponentData/.test(relative)),
      `${definition.pack} shared CMS component records must publish through the WCMS release`);
    assert(Object.keys(wcmsSection.files).some(relative => /SharedMediaData/.test(relative)),
      `${definition.pack} WCMS release must create media objects before component-media bindings`);
    assert(!Object.keys(commerceSection.files).some(relative => /SharedComponentData/.test(relative)),
      `${definition.pack} Commerce release must not own shared CMS component records`);
    for (const section of sections) for (const [relative, expected] of Object.entries(section.files)) {
      assert.equal(digest(path.join(packRoot, 'data', relative)), expected, `${definition.pack}:${relative}`);
    }
    const stagedRoot = path.join(packRoot, 'data', 'sample-v001');
    const runtimeFiles = [];
    const collect = dir => fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
      const child = path.join(dir, entry.name);
      if (entry.isDirectory()) collect(child);
      else runtimeFiles.push(path.relative(path.join(packRoot, 'data'), child));
    });
    collect(stagedRoot);
    runtimeFiles.sort();
    assert.deepEqual(sections.flatMap(section => Object.keys(section.files)).sort(), runtimeFiles);
  }
});

test('environment composition selects each domain independently, together, or Commerce-only', () => {
  const profile = require(path.join(root, 'envs', 'kickoffLocal', 'nodics.environment.json'));
  const composition = profile.composition.agora;
  assert.deepEqual(resolveDomainComposition(composition, 'apparel'), { domains: ['apparel'], frameworkGroups: ['apparel'], sharedModules: [], projectPacks: ['agora.apparel'], productSearchContributors: { apparel: { serviceName: 'DefaultApparelProductSearchEnrichmentService', required: true } } });
  assert.deepEqual(resolveDomainComposition(composition, 'electronics'), { domains: ['electronics'], frameworkGroups: ['electronics'], sharedModules: [], projectPacks: ['agora.electronics'], productSearchContributors: { electronics: { serviceName: 'DefaultElectronicsProductSearchEnrichmentService', required: true } } });
  assert.deepEqual(resolveDomainComposition(composition, 'telco'), { domains: ['telco'], frameworkGroups: ['telco'], sharedModules: [], projectPacks: ['agora.telco'], productSearchContributors: { electronics: { serviceName: 'DefaultElectronicsProductSearchEnrichmentService', required: true }, telco: { serviceName: 'DefaultTelcoProductSearchEnrichmentService', required: true } } });
  assert.deepEqual(resolveDomainComposition(composition, 'commerce'), { domains: [], frameworkGroups: [], sharedModules: [], projectPacks: [], productSearchContributors: {} });
  assert.deepEqual(resolveDomainComposition(composition, 'all').domains, ['apparel', 'electronics', 'telco']);
  assert.deepEqual(resolveDomainComposition(composition, 'all').sharedModules, ['domainCommerceCore']);
  assert.throws(() => resolveDomainComposition(composition, 'apparel,unknown'), /Unsupported domain composition selection/);
});

test('local and Docker staged runtimes consume the selected domain packs', () => {
  const localCommerce = fs.readFileSync(path.join(root, 'envs/kickoffLocal/commerceStagedServer/config/properties.js'), 'utf8');
  const localWcms = fs.readFileSync(path.join(root, 'envs/kickoffLocal/wcmsStagedServer/config/properties.js'), 'utf8');
  const docker = fs.readFileSync(path.join(root, 'envs/kickoffDockerLocal/config/runtime-properties.js'), 'utf8');
  assert.match(localCommerce, /agoraDomains\.projectPacks/); assert.match(localWcms, /agoraDomains\.projectPacks/);
  assert.equal((docker.match(/agoraDomains\.projectPacks/g) || []).length, 2);
});

test('Commerce server packages declare the accelerator package used by configured groups', () => {
  for (const serverCode of ['commerce', 'commerceStaged']) {
    const serverPackage = require(path.join(root, 'envs', 'kickoffLocal', `${serverCode}Server`, 'package.json'));
    assert(serverPackage.nodics.extends.includes('nodics.accelerators'),
      `${serverCode} must discover nodics.accelerators`);
  }
});
