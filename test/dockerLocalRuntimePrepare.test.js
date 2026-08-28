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
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');

function readEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return {};
    return fs.readFileSync(filePath, 'utf8').split(/\r?\n/u).reduce((env, line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return env;
        const separatorIndex = trimmed.indexOf('=');
        if (separatorIndex < 0) return env;
        const key = trimmed.slice(0, separatorIndex).trim();
        let value = trimmed.slice(separatorIndex + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        env[key] = value;
        return env;
    }, {});
}

const localEnv = Object.assign({}, readEnvFile(path.join(projectRoot, '.env')), process.env);
const frameworkRoot = path.resolve(projectRoot, localEnv.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const packageRoot = packageName => path.join(frameworkRoot, packageName);
const scenarios = [
    ['platformServer', ['nodics.platform', 'nodics.localization'], 'kickoffDockerLocalPlatform', 'PLATFORM'],
    ['wcmsStagedServer', ['nodics.wcms', 'nodics.platform'], 'kickoffDockerLocalWcmsStaged', 'WCMS_STAGED'],
    ['wcmsOnlineServer', ['nodics.wcms'], 'kickoffDockerLocalWcmsOnline', 'WCMS_ONLINE'],
    ['processServer', ['nodics.process', 'nodics.wcms'], 'kickoffDockerLocalProcess', 'PROCESS'],
    ['engagementServer', ['nodics.communication', 'nodics.engagement'], 'kickoffDockerLocalEngagement', 'ENGAGEMENT'],
    ['commerceServer', ['nodics.process', 'nodics.discovery', 'nodics.commerce', 'nodics.accelerators'], 'kickoffDockerLocalCommerce', 'COMMERCE'],
    ['commerceStagedServer', ['nodics.process', 'nodics.discovery', 'nodics.commerce', 'nodics.accelerators'], 'kickoffDockerLocalCommerceStaged', 'COMMERCE_STAGED']
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
            assert.equal(NODICS.isModuleActive('agora.apparel'), true);
        }
        if (server === 'commerceServer') {
            assert.equal(NODICS.isModuleActive('agora.apparel'), false);
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
