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
const fs = require('node:fs');
const path = require('node:path');

/** @module test/loyaltyRuntimeCompositionContract @description Verifies the reference runtime observes the framework-owned Loyalty module and schema contracts. @layer test @owner nodics.kickoff */

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
const coreRoot = path.join(frameworkRoot, 'nodics.foundation');
const loyaltyRoot = path.join(frameworkRoot, 'nodics.loyalty');
const config = require(path.join(coreRoot, 'modules/nConfig'));

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

const expectedSchemas = {
    loyaltyCore: ['loyaltyOperationPolicy'],
    loyaltyProgram: ['loyaltyProgram'],
    loyaltyRewardType: ['loyaltyRewardType'],
    loyaltyWallet: ['loyaltyWallet', 'loyaltyWalletRewardBalance'],
    loyaltyLedger: ['rewardLedgerEntry'],
    loyaltyReservation: ['rewardReservation'],
    loyaltyRedemption: ['rewardRedemption']
};
const expectedGeneratedServices = [
    'DefaultLoyaltyOperationPolicyService',
    'DefaultLoyaltyProgramService',
    'DefaultLoyaltyRewardTypeService',
    'DefaultLoyaltyWalletService',
    'DefaultLoyaltyWalletRewardBalanceService',
    'DefaultRewardLedgerEntryService',
    'DefaultRewardReservationService',
    'DefaultRewardRedemptionService'
];

async function prepareRuntime(environment, databaseName, httpPort) {
    const options = Object.freeze({
        NODICS_HOME: coreRoot,
        CUSTOM_HOME: projectRoot,
        MODULE_ROOTS: Object.freeze([coreRoot, loyaltyRoot, projectRoot]),
        defaultEnvironment: environment,
        defaultServer: 'loyaltyServer'
    });

    await config.start(options);
    await config.initUtilities(options);
    await config.loadModules();
    await config.initEntities();

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

    assert(SERVICE.DefaultLoyaltyAmountService, 'Loyalty amount service must load');
    assert(SERVICE.DefaultLoyaltyWalletOwnerService, 'Loyalty wallet owner service must load');
    assert(SERVICE.DefaultLoyaltyLedgerPostingService, 'Loyalty ledger posting service must load');
    assert(SERVICE.DefaultLoyaltyRewardOperationService, 'Loyalty reward operation service must load');
    assert(FACADE.DefaultLoyaltyInternalFacade, 'Loyalty internal facade must load');
    assert(CONTROLLER.DefaultLoyaltyInternalController, 'Loyalty internal controller must load');

    const mergedSchema = SERVICE.DefaultFilesLoaderService.loadSchemaFiles('/src/schemas/schemas.js', null);
    SERVICE.DefaultDatabaseConfigurationService.setRawSchema(mergedSchema);
    await SERVICE.DefaultDatabaseSchemaHandlerService.buildDatabaseSchema(mergedSchema);
    await SERVICE.DefaultInfraService.buildServices();

    Object.keys(expectedSchemas).forEach(moduleName => {
        const rawSchema = NODICS.getModule(moduleName).rawSchema || {};
        expectedSchemas[moduleName].forEach(schemaName => {
            assert(rawSchema[schemaName], `${moduleName}.${schemaName} should be materialized for ${environment} loyaltyServer`);
            assert.equal(rawSchema[schemaName].service.enabled, true, `${moduleName}.${schemaName} should generate service capability`);
            assert.equal(rawSchema[schemaName].router.enabled, false, `${moduleName}.${schemaName} should keep generated CRUD routers disabled`);
            assert.equal(rawSchema[schemaName].definition.tenant, undefined, `${moduleName}.${schemaName} must derive tenant from runtime context`);
            assert.equal(rawSchema[schemaName].definition.enterpriseCode, undefined, `${moduleName}.${schemaName} must not store enterpriseCode`);
        });
    });
    expectedGeneratedServices.forEach(serviceName => {
        const generatedPath = path.join(coreRoot, 'modules/nService/src/service/gen', serviceName + '.js');
        assert(fs.existsSync(generatedPath), `${serviceName} should be generated for ${environment} loyaltyServer`);
        const generatedService = require(generatedPath);
        assert.equal(typeof generatedService.get, 'function', `${serviceName}.get should be available`);
        assert.equal(typeof generatedService.save, 'function', `${serviceName}.save should be available`);
    });

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
