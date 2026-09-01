/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

/**
 * @module kickoff/test/wcmsExperienceRuntimeCompositionContract
 * @description Verifies Local WCMS runtimes activate WCMS Experience with Discovery-backed delivery.
 * @layer test
 * @owner nodics.kickoff
 */

const projectRoot = path.resolve(__dirname, '..');

const runtimeDefinitions = [
    {
        server: 'wcmsStagedServer',
        role: 'WCMS_STAGED',
        authorityContext: 'wcms.staged',
        expectedDomainPacks: true
    },
    {
        server: 'wcmsOnlineServer',
        role: 'WCMS_ONLINE',
        authorityContext: 'wcms.online',
        expectedDomainPacks: false
    }
];

const discoveryModules = [
    'discoveryConfig',
    'discoveryMapping',
    'discoveryProjection',
    'discoveryPublication',
    'discoveryQuery',
    'discoveryRanking',
    'discoveryRuntime',
    'discoverySource'
];

const loadPackage = server => require(path.join(projectRoot, 'envs/kickoffLocal', server, 'package.json'));
const loadProperties = server => require(path.join(projectRoot, 'envs/kickoffLocal', server, 'config/properties'));

test('Local WCMS runtimes load WCMS Experience through WCMS plus Discovery module groups', () => {
    for (const definition of runtimeDefinitions) {
        const packageJson = loadPackage(definition.server);
        assert.equal(packageJson.nodics.kind, 'server');
        assert.deepEqual(packageJson.nodics.extends, ['nodics.wcms', 'nodics.discovery']);

        const properties = loadProperties(definition.server);
        assert.equal(properties.runtimeRole.code, definition.role);
        assert(properties.activeModules.modules.includes('wcmsExperience'));
        assert(properties.activeModules.modules.includes('search'));
        assert(properties.activeModules.modules.includes('elastic'));
        assert.equal(properties.search.discoveryProjection.options.engine, 'elastic');
        assert.equal(properties.search.discoveryProjection.options.enabled, true);
        assert.equal(properties.search.wcmsExperience.options.engine, 'elastic');
        assert.equal(properties.search.wcmsExperience.options.enabled, true);
    }
});

test('WCMS Experience and Discovery modules execute under the correct WCMS authority context', () => {
    for (const definition of runtimeDefinitions) {
        const properties = loadProperties(definition.server);
        assert.equal(properties.runtimeAuthorityContexts.modules.wcmsExperience, definition.authorityContext);
        for (const moduleName of discoveryModules) {
            assert.equal(properties.runtimeAuthorityContexts.modules[moduleName], definition.authorityContext);
        }
    }
});

test('Staged WCMS keeps customer content packs local while Online remains delivery-only', () => {
    const staged = loadProperties('wcmsStagedServer');
    const online = loadProperties('wcmsOnlineServer');

    assert(staged.activeModules.modules.includes('agora.apparel'));
    assert(staged.activeModules.modules.includes('nexus.web'));
    assert.equal(staged.runtimeRole.publication, 'STAGED');
    assert.deepEqual(staged.data.dataReleases.allowedDestinationRoles, ['WCMS_STAGED']);

    assert.equal(online.activeModules.modules.includes('agora.apparel'), false);
    assert.equal(online.activeModules.modules.includes('nexus.web'), false);
    assert.equal(online.runtimeRole.publication, 'ONLINE');
    assert.deepEqual(online.data.dataReleases.allowedDestinationRoles, []);
});
