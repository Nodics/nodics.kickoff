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
const toolingConfig = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/config/properties'));
const command = toolingConfig.tooling.commands['project:waste-management-acceptance'];
const backofficeDiscoveryCommand = toolingConfig.tooling.commands['project:waste-backoffice-discovery-acceptance'];

assert.match(pkg.scripts['acceptance:waste-management'], /nodics-project\.js project:run acceptance:waste-management/);
assert.match(pkg.scripts['acceptance:waste-backoffice-discovery'], /nodics-project\.js project:run acceptance:waste-backoffice-discovery/);
assert.equal(commandService.defaultCommands()['acceptance:waste-management'].command, 'project:waste-management-acceptance');
assert.equal(commandService.defaultCommands()['acceptance:waste-backoffice-discovery'].command, 'project:waste-backoffice-discovery-acceptance');
assert.equal(command.script, 'src/service/project/defaultProjectWasteManagementAcceptanceService.mjs');
assert.equal(backofficeDiscoveryCommand.script, 'src/service/project/defaultProjectWasteBackofficeDiscoveryAcceptanceService.mjs');
assert(fs.existsSync(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling', command.script)),
    'Waste Management acceptance service must be framework-owned');
assert(fs.existsSync(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling', backofficeDiscoveryCommand.script)),
    'Waste BackOffice discovery acceptance service must be framework-owned');
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
