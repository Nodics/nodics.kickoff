'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const packageJson = require(path.join(projectRoot, 'package.json'));
const environment = require(path.join(projectRoot, 'envs', 'kickoffLocal', 'nodics.environment.json'));
const runtime = require(path.join(projectRoot, 'envs', 'kickoffLocal', 'locationServer', 'config', 'properties.js'));
const serverPackage = require(path.join(projectRoot, 'envs', 'kickoffLocal', 'locationServer', 'package.json'));

assert.match(packageJson.scripts['start:location'], /nodics-project\.js project:run start:location/);
assert.strictEqual(serverPackage.name, 'locationServer');
assert.deepStrictEqual(serverPackage.nodics.extends, ['nodics.location']);
assert.deepStrictEqual(serverPackage.nodics.runtimeModuleRoots, ['nodics.location', 'nodics.waste']);
assert.deepStrictEqual(serverPackage.nodics.owns, ['composition', 'configuration', 'llm']);

const topologyRuntime = environment.topology.groups.backends.find(item => item.code === 'location');
assert(topologyRuntime, 'kickoffLocal topology must declare location runtime');
assert.strictEqual(topologyRuntime.script, 'start:location');
assert.strictEqual(topologyRuntime.port, 4380);

assert.strictEqual(runtime.runtimeRole.code, 'LOCATION');
assert.strictEqual(runtime.runtimeRole.publication, 'OPERATIONAL');
assert.strictEqual(runtime.apiExposure.categories.schemaWorkbench.enabled, true);
assert.deepStrictEqual(runtime.data.dataReleases.allowedDestinationRoles, ['LOCATION']);
assert.deepStrictEqual(runtime.data.dataReleases.contributions, [
    { moduleName: 'wasteCollection', sections: ['sample-locations'] }
]);
assert.strictEqual(runtime.database.default.mongodb.master.databaseName, 'kickoffLocalLocation');
assert.strictEqual(runtime.servers.default.endpoint.httpPort, 4380);
assert.strictEqual(runtime.servers.profile.remoteOnly, true);
assert.strictEqual(runtime.servers.backoffice.remoteOnly, true);
assert.strictEqual(runtime.servers.process.endpoint.httpPort, 4330);
assert.strictEqual(runtime.servers.commerce.endpoint.httpPort, 4350);
assert.strictEqual(runtime.servers.waste.endpoint.httpPort, 4370);

[
    'nodics.location',
    'locationCore',
    'locationType',
    'locationMap',
    'locationSearch',
    'locationDraft',
    'locationApproval',
    'locationProjection'
].forEach(moduleName => assert(runtime.activeModules.modules.includes(moduleName), moduleName + ' must be active in locationServer'));

assert(!runtime.activeModules.modules.includes('store'), 'locationServer must not activate Commerce Store directly');
assert(!runtime.activeModules.modules.includes('wasteCollection'), 'locationServer must not activate Waste Collection directly');

console.log('kickoffLocal locationServer topology contract passed');
