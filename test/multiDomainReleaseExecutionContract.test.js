'use strict';
const assert = require('node:assert/strict'); const path = require('node:path'); const test = require('node:test');
const projectRoot = path.resolve(__dirname, '..'); const servicePath = path.resolve(projectRoot, '../nodics.ai/nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService.js');
const modules = ['agora.apparel', 'agora.electronics', 'agora.telco'];
const roots = Object.fromEntries(modules.map(name => [name, path.join(projectRoot, 'modules', name)]));
let installations; let imports; let destination;
function setup(role) {
  installations = []; imports = []; destination = role;
  global.CONFIG = { get: key => key === 'data' ? { dataReleases: { allowedContractVersions: [2], maximumFilesPerRelease: 256, maximumModulesPerRun: 10, allowDowngrade: false, destinationEnforced: true, allowedDestinationRoles: [destination], environmentClass: 'LOCAL', types: { sample: { enabled: true, operatorExecution: true } } } } : key === 'defaultTenant' ? 'default' : key === 'runtimeRole' ? { code: destination, publication: 'STAGED' } : undefined };
  global.NODICS = { getActiveModules: () => modules, getRawModule: name => roots[name] ? { name, path: roots[name], parent: 'kickoffModules', canonicalIdentity: name, metaData: { nodics: { displayName: name } } } : undefined, getSelectedEnvironmentName: () => 'kickoffLocal' };
  global.SERVICE = { DefaultDataInstallationService: { get: request => Promise.resolve({ result: installations.filter(item => !request.query.code || item.code === request.query.code) }), save: request => { installations.push(request.model); return Promise.resolve(request.model); }, update: request => { const index = installations.findIndex(item => item.code === request.query.code); installations[index] = request.model; return Promise.resolve(request.model); } }, DefaultImportService: { importSampleData: request => { imports.push(structuredClone(request)); request.importRun = { runId: `${destination}-run-${imports.length}` }; return Promise.resolve({}); } } };
  delete require.cache[require.resolve(servicePath)]; return require(servicePath);
}

for (const role of ['COMMERCE_STAGED', 'WCMS_STAGED']) test(`all domain ${role} releases execute and re-import deterministically`, async () => {
  const service = setup(role); const releases = service.discoverReleases('sample').filter(release => release.destinationRole === role);
  assert.equal(releases.length, 3); assert.deepEqual(new Set(releases.map(release => release.moduleName)), new Set(modules));
  releases.forEach(release => { assert.equal(service.validateDestination(release), true); assert(release.declaredFiles.length >= (role === 'COMMERCE_STAGED' ? 10 : 7)); });
  const releaseRequest = { dataType: 'sample', releaseCodes: releases.map(item => item.releaseCode), expectedReleases: Object.fromEntries(releases.map(item => [item.releaseCode, item.version])) };
  const first = await service.execute({ tenant: 'default', releaseRequest });
  await assert.rejects(() => service.execute({ tenant: 'default', releaseRequest }), error => error.code === 'ERR_IMP_00003');
  assert.equal(first.data.releases.length, 3); assert.equal(installations.length, 3); assert.equal(imports.length, releases.length);
});
