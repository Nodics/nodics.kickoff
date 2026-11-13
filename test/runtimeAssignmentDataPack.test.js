/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module kickoff/test/runtimeAssignmentDataPack @description Checks the canonical Kickoff placement graph against each runtime's actual token request without installing data or starting servers. @owner kickoffCore @layer test */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const {frameworkRoot, loadRuntime, activeModuleNames} = require('./helpers/configuration');
const projectRoot = path.resolve(__dirname, '..');
const foundation = path.join(frameworkRoot, 'nodics.foundation/modules');
const probe = require(path.join(foundation, 'nConfig/src/service/defaultDeploymentConfigurationProjectionService'));
const graph = require(path.join(foundation, 'nConfig/src/service/defaultDeploymentModuleOwnershipService'));
const provider = require(path.join(foundation, 'nService/src/service/authentication/defaultInternalAuthenticationProviderService'));
test('each enabled native runtime requests its installed placement without a Kickoff grant pack', async () => {
    const sections = require('../modules/kickoffCore/data/manifest.json').sections;
    assert.equal(sections.nativeRuntimeAssignments, undefined);
    assert.equal(sections.nativeRuntimePrincipalScope, undefined);
    await probe.resolve({projectRoot, frameworkRoot, environment:'kickoffLocal', server:'platformServer'});
    const placements = graph.runtimePlacements();
    assert.equal(placements.length, 7);
    for (const placement of placements) {
        const runtime = loadRuntime(placement.serverCode);
        global.CONFIG = {get: key => runtime[key]};
        global.NODICS = {getActiveModules: () => activeModuleNames(runtime), getServerName: () => placement.serverCode,
            getSelectedEnvironmentName: () => 'kickoffLocal', getEnvironmentName: () => 'nodics.kickoff'};
        const headers = provider.buildRuntimeIdentityHeaders('default');
        assert.equal(headers['x-nodics-runtime-instance'], placement.instanceCode);
        assert.deepEqual(new Set(headers['x-nodics-modules'].split(',')), new Set(placement.modules), placement.serverCode);
    }
});
