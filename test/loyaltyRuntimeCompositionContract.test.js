/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('node:assert/strict');
const childProcess = require('node:child_process');
const path = require('node:path');

/** @module test/loyaltyRuntimeCompositionContract @description Verifies the reference runtime observes the framework-owned Loyalty module and schema contracts. @layer test @owner nodics.kickoff */

const projectRoot = path.resolve(__dirname, '..');

const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const prepare = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs'));

const expectedLoyaltyModules = [
    'loyaltyCore',
    'loyaltyProgram',
    'loyaltyRewardType',
    'loyaltyWallet',
    'loyaltyLedger',
    'loyaltyReservation',
    'loyaltyRedemption',
    'loyaltyApi',
    'nodics.loyalty'
];

async function prepareRuntime(environment, databaseName, httpPort) {
    prepare({ projectRoot, frameworkRoot, environment, server: 'loyaltyServer' });

    assert.equal(NODICS.getSelectedEnvironmentName(), environment);
    assert.equal(NODICS.getServerName(), 'loyaltyServer');
    assert.equal(CONFIG.get('runtimeRole').code, 'LOYALTY');
    assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, databaseName);
    assert.equal(CONFIG.get('servers').default.endpoint.httpPort, httpPort);
    assert.equal(CONFIG.get('apiExposure').categories.loyaltyInternal.enabled, true, `${environment} loyaltyServer must expose Loyalty internal integration APIs`);
    expectedLoyaltyModules.forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), true, `${moduleName} should be active for ${environment} loyaltyServer`);
    });
    ['nodics.commerce', 'baseCommerce', 'checkout', 'payment'].forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), false, `${moduleName} must remain outside ${environment} loyaltyServer`);
    });

    // Effective schema materialization and generated get/save coverage are owned
    // by Loyalty's independent loyaltyGeneratedRuntimeContract suite.

    console.log(`Kickoff ${environment} loyaltyServer runtime composition passed`);
}

async function main() {
    if (process.argv[2] === '--scenario') {
        await prepareRuntime(process.argv[3], process.argv[4], Number(process.argv[5]));
        return;
    }

    [
        ['kickoffLocal', 'kickoffLocalLoyalty', '4360', {}],
        ['kickoffDockerLocal', 'kickoffDockerLocalLoyalty', '4360', {
            AUTH_API_KEY_PEPPER: 'loyalty-runtime-contract-api-key-pepper-0123456789abcdef',
            AUTH_JWT_SECRET: 'loyalty-runtime-contract-jwt-secret-0123456789abcdef',
            BOOTSTRAP_ADMIN_PASSWORD: 'loyaltyRuntimeContractAdminPassword',
            BOOTSTRAP_SERVICE_API_KEY: 'loyalty-runtime-contract-service-api-key-0123456789abcdef',
            BOOTSTRAP_SERVICE_PASSWORD: 'loyaltyRuntimeContractServicePassword',
            NODICS_MONGODB_URI: 'mongodb://mongodb:27017/?replicaSet=nodicsDockerLocal'
        }]
    ].forEach(([environment, databaseName, httpPort, env]) => {
        const result = childProcess.spawnSync(process.execPath, [__filename, '--scenario', environment, databaseName, httpPort], {
            cwd: projectRoot,
            env: Object.assign({}, process.env, env),
            stdio: 'inherit'
        });
        assert.equal(result.status, 0, `${environment} loyaltyServer runtime composition should pass`);
    });
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
