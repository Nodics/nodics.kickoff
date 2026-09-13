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
const environment = require(path.join(projectRoot, 'envs/kickoffLocal/nodics.environment.json'));
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
assert.deepEqual(environment.acceptance.wasteManagement, {
    environment: 'kickoffLocal',
    server: 'wasteServer',
    profileCode: 'localWasteFoundation',
    runtime: {
        label: 'Waste',
        port: 4370,
        script: 'start:waste'
    }
});
assert.deepEqual(environment.acceptance.wasteBackofficeDiscovery, {
    functionalModule: 'nodics.waste',
    providerModule: 'wasteCore',
    capabilityId: 'waste-management',
    groupId: 'sustainability-operations',
    observedServer: 'kickoffLocal:wasteServer:default',
    platform: {
        label: 'Platform',
        port: 4300,
        script: 'start:platform'
    },
    waste: {
        label: 'Waste',
        port: 4370,
        script: 'start:waste'
    }
});

console.log('Kickoff Waste Management acceptance command contract validated');
