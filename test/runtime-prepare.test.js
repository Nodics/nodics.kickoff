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

const projectRoot = path.resolve(__dirname, '..');
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));

const scenarios = Object.freeze([
    Object.freeze({
        server: 'commerceServer', frameworkModules: Object.freeze(['nodics.process', 'nodics.commerce']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'flowSchema', 'flowCore', 'flowApi', 'workflow',
            'nodics.process', 'store', 'product', 'pricing', 'tax', 'promotion',
            'inventory', 'baseCommerce', 'checkoutCore', 'cart', 'order',
            'checkout', 'paymentCore', 'cardPayment', 'walletPayment',
            'cashOnDeliveryPayment', 'bankTransferPayment', 'paymentMethods',
            'paymentProviderCore', 'stripeProvider', 'paypalProvider',
            'cyberSourceProvider', 'visaProvider', 'paymentProviders', 'payment',
            'fulfillmentCore', 'fulfillment', 'nodics.commerce', 'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal',
            'commerceServer'
        ]),
        verify: function () {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalCommerce');
        }
    }),
    Object.freeze({
        server: 'engagementServer', frameworkModules: Object.freeze(['nodics.communication', 'nodics.engagement']),
        expectedModules: Object.freeze(['nodics.foundation', 'publish', 'commsSchema', 'commsCore', 'commsVerification', 'localCommsProvider', 'commsApi', 'nodics.communication', 'engagementCore', 'customerReview', 'customerFeedback', 'testimonial', 'contactSubmission', 'engagementComms', 'engagementApi', 'nodics.engagement', 'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexusData', 'kickoffLocal', 'engagementServer']),
        verify: function () { assert.equal(CONFIG.get('engagement').capabilities.contactSubmission, true); assert.equal(CONFIG.get('engagement').capabilities.testimonial, true); assert.equal(CONFIG.get('engagement').capabilities.customerReview, true); assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalEngagement'); }
    }),
    Object.freeze({
        server: 'platformServer',
        frameworkModules: Object.freeze(['nodics.platform', 'nodics.localization']),
        expectedModules: Object.freeze([
            'nodics.foundation',
            'nodics.platform',
            'profile',
            'backoffice',
            'localizationCore',
            'localizationApi',
            'nodics.localization',
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'platformServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'dataImport'])
    }),
    Object.freeze({
        server: 'wcmsStagedServer',
        frameworkModules: Object.freeze(['nodics.wcms', 'nodics.platform']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'publish', 'nodics.wcms', 'media', 'cms', 'cmsStaged', 'wcms',
            'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexusData',
            'kickoffLocal', 'wcmsStagedServer'
        ]),
        expectedApiExposure: Object.freeze(['schemaWorkbench', 'schemaMaintenance', 'openApiContract', 'mediaManagement', 'dataImport', 'dataExport']),
        verify: function () {
            assert.equal(CONFIG.get('publishEnabled'), true);
            assert.equal(CONFIG.get('runtimeRole').code, 'WCMS_STAGED');
            assert.equal(CONFIG.get('cms').publication.runtimeRole, 'STAGED');
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWcmsStaged');
            assert.equal(CONFIG.get('servers').cmsOnline.abstractEndpoint.httpPort, 4314);
            assert.ok(NODICS.getRawModule('axis'), 'Axis baseline contribution owner should be discoverable');
            assert.equal(NODICS.isModuleActive('axis'), false, 'Axis backend behavior must remain inactive');
            assert.equal(NODICS.isModuleActive('nodics.platform'), false, 'Platform group must remain inactive');
        }
    }),
    Object.freeze({
        server: 'wcmsOnlineServer',
        frameworkModules: Object.freeze(['nodics.wcms']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'nodics.wcms', 'media', 'cms', 'wcms', 'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'wcmsOnlineServer'
        ]),
        verify: function () {
            assert.notEqual(CONFIG.get('publishEnabled'), true);
            assert.equal(CONFIG.get('runtimeRole').code, 'WCMS_ONLINE');
            assert.equal(CONFIG.get('cms').publication.runtimeRole, 'ONLINE');
            assert.equal(CONFIG.get('cms').publication.enabled, true);
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWcmsOnline');
            assert.equal(NODICS.isModuleActive('vDatabase'), false);
            assert.equal(NODICS.isModuleActive('vMongodb'), false);
            assert.equal(NODICS.isModuleActive('vService'), false);
            assert.equal(NODICS.isModuleActive('nexusData'), false);
        }
    }),
    Object.freeze({
        server: 'processServer',
        frameworkModules: Object.freeze(['nodics.process', 'nodics.cron', 'nodics.wcms']),
        expectedModules: Object.freeze([
            'nodics.foundation',
            'flowSchema',
            'flowCore',
            'flowApi',
            'workflow',
            'nodics.process',
            'nodics.cron',
            'cronjob',
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'processServer'
        ]),
        expectedApiExposure: Object.freeze(['processManagement']),
        verify: function () {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalProcess');
            assert.equal(CONFIG.get('database').cronjob.mongodb.master.databaseName, 'kickoffLocalCron');
            assert.ok(NODICS.getRawModule('cms'), 'CMS contribution owner should be discoverable');
            assert.equal(NODICS.isModuleActive('cms'), false, 'CMS runtime behavior must remain inactive');
            assert.equal(NODICS.isModuleActive('nodics.wcms'), false, 'WCMS group must remain inactive');
        }
    })
]);

async function prepareScenario(scenario) {
    const coreRoot = packageRoot('nodics.foundation');
    const config = require(path.join(coreRoot, 'modules/nConfig'));
    const moduleRoots = [
        coreRoot,
        ...scenario.frameworkModules.map(packageRoot),
        projectRoot
    ];

    await config.prepareStart(Object.freeze({
        NODICS_HOME: coreRoot,
        CUSTOM_HOME: projectRoot,
        MODULE_ROOTS: Object.freeze(moduleRoots),
        defaultEnvironment: 'kickoffLocal',
        defaultServer: scenario.server
    }));

    scenario.expectedModules.forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), true, `${moduleName} should be active`);
    });
    ['kickoffModules', 'kickoff.environments', 'nSetup', 'nTooling'].forEach(moduleName => {
        assert.equal(NODICS.getRawModule(moduleName), undefined, `${moduleName} must remain outside runtime discovery`);
        assert.equal(NODICS.isModuleActive(moduleName), false, `${moduleName} must remain outside runtime activation`);
    });
    assert.equal(NODICS.getServerName(), scenario.server);
    assert.equal(NODICS.getEnvironmentName(), 'nodics.kickoff');
    assert.equal(NODICS.getSelectedEnvironmentName(), 'kickoffLocal');
    const apiExposure = CONFIG.get('apiExposure') || {};
    (scenario.expectedApiExposure || []).forEach(category => {
        assert.equal(
            apiExposure.categories && apiExposure.categories[category] && apiExposure.categories[category].enabled,
            true,
            `${category} API exposure should be enabled for ${scenario.server}`
        );
    });
    if (scenario.verify) scenario.verify();
    console.log(`Kickoff ${scenario.server} preparation passed`);
}

async function main() {
    const scenarioName = process.argv[2];
    const selectedScenarios = scenarioName
        ? scenarios.filter(scenario => scenario.server === scenarioName)
        : scenarios;

    if (selectedScenarios.length === 0) {
        throw new Error(`Unknown runtime preparation scenario: ${scenarioName}`);
    }

    for (const scenario of selectedScenarios) {
        await prepareScenario(scenario);
    }
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
