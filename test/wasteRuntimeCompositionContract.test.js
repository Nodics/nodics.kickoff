/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');

/** @module test/wasteRuntimeCompositionContract @description Verifies Kickoff owns a separate local Waste Management server that composes framework Waste and accelerator presets. @layer test @owner nodics.kickoff */

const projectRoot = path.resolve(__dirname, '..');

const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const prepare = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs'));

const expectedWasteModules = [
    'nodics.waste',
    'wasteCore',
    'wasteMaterial',
    'wasteCollection',
    'wasteSubmission',
    'wasteVerification',
    'wasteReceipt',
    'wasteImpact',
    'wasteReward',
    'wasteMovement',
    'wasteCompliance',
    'wasteApi',
    'waste',
    'nodics.rulesEngine',
    'rulesCore',
    'rulesDefinition',
    'rulesEvaluation',
    'rulesApi',
    'eWaste',
    'circa.ewaste'
];

async function main() {
    prepare({ projectRoot, frameworkRoot, environment: 'kickoffLocal', server: 'wasteServer' });

    assert.equal(NODICS.getSelectedEnvironmentName(), 'kickoffLocal');
    assert.equal(NODICS.getServerName(), 'wasteServer');
    assert.equal(CONFIG.get('runtimeRole').code, 'WASTE');
    assert.equal(CONFIG.get('runtimeRole').publication, 'OPERATIONAL');
    assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWaste');
    assert.equal(CONFIG.get('servers').default.endpoint.httpPort, 4370);
    assert.equal(require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'WASTE'), true);
    assert.equal(CONFIG.get('apiExposure').categories.wasteInternal.enabled, true);
    assert.equal(CONFIG.get('waste').accelerator.umbrella, 'waste');
    assert.deepEqual(CONFIG.get('waste').accelerator.scenarioAccelerators, ['eWaste']);
    assert.deepEqual(CONFIG.get('waste').accelerator.presetPackCodes, ['EWASTE_CORE_PRESETS']);
    assert.equal(CONFIG.get('waste').projectOverlay.module, 'circa.ewaste');
    assert.equal(CONFIG.get('waste').projectOverlay.releaseCode, 'circa.ewaste:waste-policy');

    expectedWasteModules.forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), true, `${moduleName} should be active for wasteServer`);
    });
    ['nodics.loyalty', 'loyaltyCore', 'promotion', 'commerceServer', 'loyaltyServer'].forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), false, `${moduleName} must remain outside wasteServer`);
    });
    assert.equal(NODICS.getRawModule('nodics.accelerators'), undefined, 'Waste runtime should discover only the Waste accelerator subtree');

    // Effective schema materialization and generated services are covered by
    // Waste's independent wasteGeneratedRuntimeContract, including service-only schemas.
    const overlayManifest = require(path.join(projectRoot, 'modules/circa.ewaste/data/manifest.json'));
    assert.equal(overlayManifest.sections['waste-policy'].destinationRole, 'WASTE');
    assert.equal(overlayManifest.sections['waste-policy'].dataType, 'core');
    console.log('Kickoff kickoffLocal wasteServer runtime composition passed');
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
