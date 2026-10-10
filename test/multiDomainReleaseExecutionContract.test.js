'use strict';
const assert = require('node:assert/strict'); const path = require('node:path'); const test = require('node:test');
const projectRoot = path.resolve(__dirname, '..');
const { frameworkRoot } = require('./helpers/configuration');
const releaseExecution = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution'));
const modules = ['agora.apparel', 'agora.electronics', 'agora.telco'];

/** Selects actual customer modules; nImport owns the offline execution ports. */
function setup(role) {
  return releaseExecution({
    modules: Object.fromEntries(modules.map(name => [name, {
      name, path: path.join(projectRoot, 'modules', name), parent: 'kickoffModules',
      canonicalIdentity: name, metaData: { nodics: { displayName: name } },
    }])),
    environment: 'kickoffLocal', runtimeRole: role,
  });
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
