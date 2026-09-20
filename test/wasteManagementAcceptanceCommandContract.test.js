/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

/** @module test/wasteManagementAcceptanceCommandContract @description Guards the Kickoff Waste Management acceptance command and local acceptance metadata. @layer test @owner nodics.kickoff */

const projectRoot = path.resolve(__dirname, '..');
const pkg = require(path.join(projectRoot, 'package.json'));
const environment = require('./helpers/configuration').loadEnvironment();
const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const commandService = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService'));
const commands = commandService.resolveCommands(commandService.readManifest(projectRoot));
for (const [alias, file] of [
    ['acceptance:waste-management', 'defaultProjectWasteManagementAcceptanceService.mjs'],
    ['acceptance:waste-backoffice-discovery', 'defaultProjectWasteBackofficeDiscoveryAcceptanceService.mjs']
]) {
    assert(pkg.scripts[alias].includes('nodics project:run ' + alias));
    assert.equal(commandService.defaultCommands()[alias], undefined);
    assert.equal(commands[alias].type, 'projectScript');
    assert.equal(commands[alias].script, 'scripts/acceptance/' + file);
    assert(fs.existsSync(path.join(projectRoot, commands[alias].script)));
}
const { projectRuntime, projectInitializationProfile } = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs'));
assert.equal(require('../envs/kickoffLocal/config/properties').tooling, undefined);
assert.deepEqual(environment.acceptance.wasteManagement.runtime, { role: 'WASTE' });
const waste = projectRuntime(environment, environment.acceptance.wasteManagement.runtime);
assert.equal(waste.server, 'wasteServer');
assert.equal(waste.port, 4370);
assert.equal(waste.script, 'start:waste');
assert.equal(projectInitializationProfile(waste), 'localWasteFoundation');
const discovery = environment.acceptance.wasteBackofficeDiscovery;
assert.equal(discovery.functionalModule, 'nodics.waste');
assert.equal(discovery.providerModule, 'wasteCore');
assert.equal(discovery.capabilityId, 'waste-management');
assert.equal(discovery.groupId, 'sustainability-operations');
assert.equal(discovery.observedServer, undefined);
assert.equal(projectRuntime(environment, discovery.platform).port, 4300);
assert.equal(projectRuntime(environment, discovery.waste).server, waste.server);
const docker = require('./helpers/configuration').loadEnvironment('kickoffDockerLocal');
assert.equal(projectInitializationProfile(projectRuntime(docker, docker.acceptance.wasteManagement.runtime)), 'localWasteFoundation');
assert.equal(docker.acceptance.guidedInitialization.deliveryProbe.site, 'nexusCorporateSite');
assert.equal(environment.acceptance.guidedInitialization.profileCode, undefined);
assert.equal(projectInitializationProfile(projectRuntime(environment, environment.acceptance.guidedInitialization.runtime), '', environment.acceptance.guidedInitialization.profileTemplate), 'localWcmsFoundation');

console.log('Kickoff Waste Management acceptance command contract validated');
