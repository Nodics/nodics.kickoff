/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));
const scenarios = [
    ['platformServer', ['nodics.platform', 'nodics.localization'], 'kickoffDockerLocalPlatform', 'PLATFORM'],
    ['wcmsStagedServer', ['nodics.wcms', 'nodics.platform'], 'kickoffDockerLocalWcmsStaged', 'WCMS_STAGED'],
    ['wcmsOnlineServer', ['nodics.wcms'], 'kickoffDockerLocalWcmsOnline', 'WCMS_ONLINE'],
    ['processServer', ['nodics.process', 'nodics.process', 'nodics.wcms'], 'kickoffDockerLocalProcess', 'PROCESS'],
    ['engagementServer', ['nodics.communication', 'nodics.engagement'], 'kickoffDockerLocalEngagement', 'ENGAGEMENT'],
    ['commerceServer', ['nodics.process', 'nodics.discovery', 'nodics.commerce'], 'kickoffDockerLocalCommerce', 'COMMERCE'],
    ['commerceStagedServer', ['nodics.process', 'nodics.discovery', 'nodics.commerce'], 'kickoffDockerLocalCommerceStaged', 'COMMERCE_STAGED']
];

async function main() {
    process.env.NODICS_MONGODB_URI = 'mongodb://mongodb:27017/?replicaSet=nodicsDockerLocal';
    for (const [server, modules, databaseName, role] of scenarios) {
        const coreRoot = packageRoot('nodics.foundation');
        const config = require(path.join(coreRoot, 'modules/nConfig'));
        await config.prepareStart({ NODICS_HOME: coreRoot, CUSTOM_HOME: projectRoot,
            MODULE_ROOTS: [coreRoot, ...modules.map(packageRoot), projectRoot],
            defaultEnvironment: 'kickoffDockerLocal', defaultServer: server });
        assert.equal(NODICS.getSelectedEnvironmentName(), 'kickoffDockerLocal');
        assert.equal(NODICS.getServerName(), server);
        assert.equal(CONFIG.get('environment').qualificationClass, 'LOCAL_PRODUCTION_SIMULATION');
        assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, databaseName);
        assert.equal(CONFIG.get('runtimeRole').code, role);
        if (server === 'commerceStagedServer') {
            assert.deepEqual(CONFIG.get('data').dataReleases.allowedDestinationRoles, ['COMMERCE_STAGED']);
            assert.equal(NODICS.isModuleActive('agoraCommonData'), true);
        }
        if (server === 'commerceServer') {
            assert.equal(NODICS.isModuleActive('agoraCommonData'), false);
        }
        if (server === 'commerceServer' || server === 'commerceStagedServer') {
            assert.equal(NODICS.isModuleActive('nodics.discovery'), true);
            assert.equal(CONFIG.get('search').discoveryProjection.options.enabled, true);
        }
        assert(CONFIG.get('database').default.mongodb.master.URI.includes('mongodb'));
        assert(NODICS.isModuleActive('kickoffDockerLocal'));
        assert(!NODICS.isModuleActive('kickoffLocal'));
        console.log(`kickoffDockerLocal ${server} preparation passed`);
    }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
