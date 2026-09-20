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
const loadProperties = server => require('./helpers/configuration').loadRuntime(server);

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
        assert.equal(require('./helpers/configuration').searchConfiguration(properties, 'discoveryProjection').options.engine, 'elastic');
        assert.equal(properties.search.discoveryProjection.options.enabled, true);
        assert.equal(require('./helpers/configuration').searchConfiguration(properties, 'wcmsExperience').options.engine, 'elastic');
        assert.equal(properties.search.wcmsExperience.options.enabled, true);
    }
});

test('WCMS Experience and Discovery modules execute under the correct WCMS authority context', () => {
    for (const definition of runtimeDefinitions) {
        const properties = loadProperties(definition.server);
        assert.equal(require('./helpers/configuration').authorityContext(properties, 'wcmsExperience'), definition.authorityContext);
        for (const moduleName of discoveryModules) {
            assert.equal(require('./helpers/configuration').authorityContext(properties, moduleName), definition.authorityContext);
        }
    }
});

test('Staged WCMS keeps customer content packs local while Online remains delivery-only', () => {
    const staged = loadProperties('wcmsStagedServer');
    const online = loadProperties('wcmsOnlineServer');

    assert(staged.activeModules.modules.includes('agora.apparel'));
    assert(staged.activeModules.modules.includes('nexus.web'));
    assert.equal(staged.runtimeRole.publication, 'STAGED');
    assert.equal(require('./helpers/configuration').validateDestination(staged, 'WCMS_STAGED'), true);

    assert.equal(online.activeModules.modules.includes('agora.apparel'), false);
    assert.equal(online.activeModules.modules.includes('nexus.web'), false);
    assert.equal(online.runtimeRole.publication, 'ONLINE');
    assert.deepEqual(online.data.dataReleases.allowedDestinationRoles, []);
});

// Runtime proof is deployment-owned; omission must never inherit the shared sample key.
test('All ten Local runtimes resolve distinct retained proof without sample fallback', () => {
    const helper = require('./helpers/configuration');
    const selections = [
        ['platformServer', 'NODICS_LOCAL_PLATFORM_API_KEY'],
        ['processServer', 'NODICS_LOCAL_PROCESS_API_KEY'],
        ['wcmsStagedServer', 'NODICS_LOCAL_WCMS_STAGED_API_KEY'],
        ['wcmsOnlineServer', 'NODICS_LOCAL_WCMS_ONLINE_API_KEY'],
        ['commerceServer', 'NODICS_LOCAL_COMMERCE_API_KEY'],
        ['commerceStagedServer', 'NODICS_LOCAL_COMMERCE_STAGED_API_KEY'],
        ['engagementServer', 'NODICS_LOCAL_ENGAGEMENT_API_KEY'],
        ['loyaltyServer', 'NODICS_LOCAL_LOYALTY_API_KEY'],
        ['locationServer', 'NODICS_LOCAL_LOCATION_API_KEY'],
        ['wasteServer', 'NODICS_LOCAL_WASTE_API_KEY']
    ];
    const instances = new Set();
    for (const [server, variable] of selections) {
        const missing = helper.loadRuntime(server);
        assert.equal(missing.defaultAuthDetail.apiKey, null);
        assert.equal(missing.authSecurity.securityStamp.failClosed, true);
        assert.equal(missing.authSecurity.securityStamp.cacheModuleName, 'auth');
        assert.equal(missing.cache.auth.channels.auth.engine, 'redis');
        assert.equal(missing.cache.auth.channels.auth.fallback, false);
        assert(helper.activeModuleNames(missing).includes('redisCache'));
        instances.add(missing.runtimeIdentity.instanceCode);
        const supplied = helper.loadRuntime(server, 'kickoffLocal', { [variable]: 'isolated-proof-binding-check' });
        assert.equal(supplied.defaultAuthDetail.apiKey, 'isolated-proof-binding-check');
        assert.equal(supplied.defaultAuthDetail.entCode, 'default');
    }
    assert.equal(instances.size, selections.length);
    const unselected = helper.loadRuntime('commerceServer');
    assert.equal(helper.activeModuleNames(unselected).includes('redisCache'), true);
    assert.equal(unselected.authSecurity.securityStamp.cacheModuleName, 'auth');
});
