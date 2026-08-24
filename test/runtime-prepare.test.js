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
        server: 'commerceServer', frameworkModules: Object.freeze(['nodics.discovery', 'nodics.commerce', 'nodics.accelerators']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'discoveryConfig', 'discoverySource', 'discoveryMapping',
            'discoveryProjection', 'discoveryPublication', 'discoveryQuery',
            'discoveryRanking', 'discoveryRuntime', 'nodics.discovery', 'search', 'elastic', 'store',
            'product', 'pricing', 'tax', 'promotion', 'inventory',
            'commerceSearchCore', 'commerceSearch', 'baseCommerce', 'checkoutCore', 'cart', 'order',
            'checkout', 'paymentCore', 'cardPayment', 'walletPayment',
            'cashOnDeliveryPayment', 'bankTransferPayment', 'paymentMethods',
            'paymentProviderCore', 'stripeProvider', 'paypalProvider',
            'cyberSourceProvider', 'visaProvider', 'paymentProviders', 'payment',
            'fulfillmentCore', 'fulfillment', 'nodics.commerce',
            'apparelProduct', 'apparel', 'electronicsProduct', 'electronics',
            'telcoCatalog', 'telcoSubscription', 'telcoProvisioning', 'telco', 'multiDomainCommerce', 'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal',
            'commerceServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'commerceCustomer']),
        verify: function () {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalCommerce');
            assert.equal(CONFIG.get('runtimeRole').code, 'COMMERCE');
            assert.equal(CONFIG.get('search').product.options.enabled, true);
            assert.equal(CONFIG.get('search').product.options.engine, 'elastic');
            assert.equal(CONFIG.get('search').discoveryProjection.options.enabled, true);
            assert.equal(NODICS.isModuleActive('search'), true);
            assert.equal(NODICS.isModuleActive('elastic'), true);
            assert.equal(NODICS.isModuleActive('agoraCommonData'), false);
            assert.equal(NODICS.isModuleActive('workflow'), false);
        }
    }),
    Object.freeze({
        server: 'commerceStagedServer', frameworkModules: Object.freeze(['nodics.discovery', 'nodics.commerce', 'nodics.accelerators']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'discoveryConfig', 'discoverySource', 'discoveryMapping',
            'discoveryProjection', 'discoveryPublication', 'discoveryQuery',
            'discoveryRanking', 'discoveryRuntime', 'nodics.discovery', 'search', 'elastic', 'store',
            'product', 'pricing', 'tax', 'promotion', 'inventory',
            'commerceSearchCore', 'commerceSearch', 'baseCommerce', 'checkoutCore', 'cart', 'order',
            'checkout', 'paymentCore', 'cardPayment', 'walletPayment',
            'cashOnDeliveryPayment', 'bankTransferPayment', 'paymentMethods',
            'paymentProviderCore', 'stripeProvider', 'paypalProvider',
            'cyberSourceProvider', 'visaProvider', 'paymentProviders', 'payment',
            'fulfillmentCore', 'fulfillment', 'nodics.commerce',
            'apparelProduct', 'apparel', 'electronicsProduct', 'electronics',
            'telcoCatalog', 'telcoSubscription', 'telcoProvisioning', 'telco', 'multiDomainCommerce', 'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt',
            'agora.common', 'agoraCommonData', 'agora.apparel', 'agoraApparelData',
            'agora.electronics', 'agoraElectronicsData', 'agora.telco', 'agoraTelcoData', 'kickoffLocal',
            'commerceStagedServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'dataImport', 'commerceManagement']),
        verify: function () {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalCommerceStaged');
            assert.equal(CONFIG.get('runtimeRole').code, 'COMMERCE_STAGED');
            assert.equal(CONFIG.get('runtimeRole').publication, 'STAGED');
            assert.equal(CONFIG.get('search').product.options.enabled, true);
            assert.equal(CONFIG.get('search').product.options.engine, 'elastic');
            assert.equal(CONFIG.get('search').discoveryProjection.options.enabled, true);
            assert.equal(NODICS.isModuleActive('search'), true);
            assert.equal(NODICS.isModuleActive('elastic'), true);
            assert.deepEqual(CONFIG.get('data').dataReleases.allowedDestinationRoles, ['COMMERCE_STAGED']);
            assert.equal(CONFIG.get('data').dataReleases.allowedDestinationRoles.includes('WCMS_STAGED'), false);
            assert.equal(CONFIG.get('data').dataReleases.allowedDestinationRoles.includes('COMMERCE'), false);
            assert.equal(NODICS.isModuleActive('agoraCommonData'), true);
            const selected = require('../config/agora-domain-composition').resolve().domains;
            assert.equal(NODICS.isModuleActive('apparelProduct'), selected.includes('apparel'));
            assert.equal(NODICS.isModuleActive('electronicsProduct'), selected.includes('electronics') || selected.includes('telco'));
            assert.equal(NODICS.isModuleActive('telcoCatalog'), selected.includes('telco'));
            assert.equal(NODICS.isModuleActive('commerceServer'), false);
            assert.equal(NODICS.isModuleActive('workflow'), false);
        }
    }),
    Object.freeze({
        server: 'engagementServer', frameworkModules: Object.freeze(['nodics.communication', 'nodics.engagement']),
        expectedModules: Object.freeze(['nodics.foundation', 'publish', 'commsSchema', 'commsCore', 'commsVerification', 'localCommsProvider', 'commsApi', 'nodics.communication', 'engagementCore', 'customerReview', 'customerFeedback', 'testimonial', 'contactSubmission', 'engagementComms', 'engagementApi', 'nodics.engagement', 'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexusWebData', 'kickoffLocal', 'engagementServer']),
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
            'partnerSiteData',
            'kickoffLocal',
            'platformServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'dataImport']),
        verify: function () {
            assert.equal(CONFIG.get('runtimeRole').code, 'PLATFORM');
            assert.deepEqual(CONFIG.get('data').dataReleases.allowedDestinationRoles, ['PLATFORM']);
        }
    }),
    Object.freeze({
        server: 'wcmsStagedServer',
        frameworkModules: Object.freeze(['nodics.wcms', 'nodics.platform']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'publish', 'nodics.wcms', 'media', 'cms', 'cmsStaged', 'wcms',
            'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexusWebData', 'partnerSiteData',
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
            assert.equal(NODICS.isModuleActive('nexusWebData'), false);
        }
    }),
    Object.freeze({
        server: 'processServer',
        frameworkModules: Object.freeze(['nodics.process', 'nodics.wcms']),
        expectedModules: Object.freeze([
            'nodics.foundation',
            'workflow',
            'nodics.process',
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

    const selectedDomains = require('../config/agora-domain-composition').resolve().domains;
    const capabilityDomains = new Set(selectedDomains);
    if (capabilityDomains.has('telco')) capabilityDomains.add('electronics');
    const optionalFamilies = {
        apparel: ['apparelProduct', 'apparel'],
        electronics: ['electronicsProduct', 'electronics'],
        telco: ['telcoCatalog', 'telcoSubscription', 'telcoProvisioning', 'telco']
    };
    const disabledModules = Object.entries(optionalFamilies).filter(([domain]) => !capabilityDomains.has(domain)).flatMap(([, modules]) => modules);
    ['apparel', 'electronics', 'telco'].filter(domain => !selectedDomains.includes(domain)).forEach(domain => {
        disabledModules.push({ apparel: 'agoraApparelData', electronics: 'agoraElectronicsData', telco: 'agoraTelcoData' }[domain]);
    });
    if (selectedDomains.length < 2) disabledModules.push('multiDomainCommerce');
    scenario.expectedModules.filter(moduleName => !disabledModules.includes(moduleName)).forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), true, `${moduleName} should be active`);
    });
    disabledModules.forEach(moduleName => assert.equal(NODICS.isModuleActive(moduleName), false, `${moduleName} should be disabled`));
    if (scenario.server === 'commerceServer' || scenario.server === 'commerceStagedServer') {
        const contributors = CONFIG.get('product').publication.searchEnrichment.domains.contributors;
        assert.deepEqual(
            Object.keys(contributors).sort(),
            [...capabilityDomains].sort(),
            `${scenario.server} should expose exactly the selected domain search contributors`
        );
    }
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
