/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');

const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const packageRoot = packageName => path.join(frameworkRoot, packageName);

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
            'telcoCatalog', 'telcoSubscription', 'telcoProvisioning', 'telco', 'domainCommerceCore', 'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal',
            'commerceServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'commerceCustomer']),
        verify: function (coreRoot) {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalCommerce');
            assert.equal(CONFIG.get('runtimeRole').code, 'COMMERCE');
            assert.equal(CONFIG.get('search').product.options.enabled, true);
            assert.equal(require('./helpers/configuration').searchConfiguration(CONFIG.getProperties(), 'product').options.engine, 'elastic');
            assert.equal(CONFIG.get('search').discoveryProjection.options.enabled, true);
            assert.equal(NODICS.isModuleActive('search'), true);
            assert.equal(NODICS.isModuleActive('elastic'), true);
            assert.equal(NODICS.isModuleActive('agora.apparel'), false);
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
            'telcoCatalog', 'telcoSubscription', 'telcoProvisioning', 'telco', 'domainCommerceCore', 'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt',
            'agora.apparel', 'agora.apparel',
            'agora.electronics', 'agora.electronics', 'agora.telco', 'agora.telco', 'kickoffLocal',
            'commerceStagedServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'dataImport', 'schemaApi', 'commerceManagement']),
        verify: function (coreRoot) {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalCommerceStaged');
            assert.equal(CONFIG.get('runtimeRole').code, 'COMMERCE_STAGED');
            assert.equal(CONFIG.get('runtimeRole').publication, 'STAGED');
            assert.equal(CONFIG.get('search').product.options.enabled, true);
            assert.equal(require('./helpers/configuration').searchConfiguration(CONFIG.getProperties(), 'product').options.engine, 'elastic');
            assert.equal(CONFIG.get('search').discoveryProjection.options.enabled, true);
            assert.equal(NODICS.isModuleActive('search'), true);
            assert.equal(NODICS.isModuleActive('elastic'), true);
            assert.equal(require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'COMMERCE_STAGED'), true);
            assert.throws(() => require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'WCMS_STAGED'), /destination/);
            assert.throws(() => require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'COMMERCE'), /destination/);
            assert.equal(NODICS.isModuleActive('agora.apparel'), true);
            const selected = require(path.join(coreRoot, 'modules/nConfig/src/service/defaultConfigurationBindingService')).resolveDomainComposition(CONFIG.get('activeModules').compositions.agora).domains;
            assert.equal(NODICS.isModuleActive('apparelProduct'), selected.includes('apparel'));
            assert.equal(NODICS.isModuleActive('electronicsProduct'), selected.includes('electronics') || selected.includes('telco'));
            assert.equal(NODICS.isModuleActive('telcoCatalog'), selected.includes('telco'));
            assert.equal(NODICS.isModuleActive('commerceServer'), false);
            assert.equal(NODICS.isModuleActive('workflow'), false);
        }
    }),
    Object.freeze({
        server: 'wasteServer',
        frameworkModules: Object.freeze(require('../envs/kickoffLocal/wasteServer/package.json').nodics.runtimeModuleRoots),
        expectedModules: Object.freeze([
            'nodics.foundation',
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
            'nodics.rulesEngine',
            'rulesCore',
            'rulesDefinition',
            'rulesEvaluation',
            'rulesApi',
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'wasteServer',
            'waste',
            'eWaste',
            'circa.ewaste',
            'copilotPolicy',
            'copilotKnowledge',
            'copilotConversation',
            'copilotProvider',
            'ollamaProvider',
            'openAiProvider'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'schemaApi', 'dataImport', 'wasteInternal']),
        verify: function (coreRoot) {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWaste');
            assert.equal(CONFIG.get('runtimeRole').code, 'WASTE');
            assert.equal(require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'WASTE'), true);
            assert.equal(CONFIG.get('waste').accelerator.umbrella, 'waste');
            assert.deepEqual(CONFIG.get('waste').accelerator.scenarioAccelerators, ['eWaste']);
            assert.equal(CONFIG.get('waste').projectOverlay.module, 'circa.ewaste');
            assert.equal(NODICS.getRawModule('nodics.accelerators'), undefined);
            assert.equal(NODICS.isModuleActive('loyaltyCore'), false);
            assert.equal(NODICS.isModuleActive('promotion'), false);
        }
    }),
    Object.freeze({
        server: 'locationServer',
        frameworkModules: Object.freeze(['nodics.location']),
        expectedModules: Object.freeze([
            'nodics.foundation',
            'nodics.location',
            'locationCore',
            'locationType',
            'locationMap',
            'locationSearch',
            'locationDraft',
            'locationApproval',
            'locationProjection',
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'locationServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'schemaApi', 'dataImport', 'locationInternal']),
        verify: function (coreRoot) {
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalLocation');
            assert.equal(CONFIG.get('runtimeRole').code, 'LOCATION');
            assert.equal(require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'LOCATION'), true);
            assert.equal(NODICS.isModuleActive('locationCore'), true);
            assert.equal(CONFIG.get('servers').profile.remoteOnly, true);
            assert.equal(CONFIG.get('servers').default.endpoint.httpPort, 4380);
            assert.equal(NODICS.isModuleActive('store'), false);
            assert.equal(NODICS.isModuleActive('wasteCollection'), false);
            assert.equal(NODICS.isModuleActive('workflow'), false);
        }
    }),
    Object.freeze({
        server: 'engagementServer', frameworkModules: Object.freeze(['nodics.communication', 'nodics.engagement']),
        expectedModules: Object.freeze(['nodics.foundation', 'publish', 'commsSchema', 'commsCore', 'commsVerification', 'localCommsProvider', 'commsApi', 'nodics.communication', 'engagementCore', 'customerReview', 'customerFeedback', 'testimonial', 'contactSubmission', 'engagementComms', 'engagementApi', 'nodics.engagement', 'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexus.web', 'kickoffLocal', 'engagementServer']),
        verify: function (coreRoot) { assert.equal(CONFIG.get('engagement').capabilities.contactSubmission, true); assert.equal(CONFIG.get('engagement').capabilities.testimonial, true); assert.equal(CONFIG.get('engagement').capabilities.customerReview, true); assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalEngagement'); }
    }),
    Object.freeze({
        server: 'platformServer',
        frameworkModules: Object.freeze(['nodics.platform', 'nodics.localization', 'nodics.discovery', 'nodics.copilot']),
        expectedModules: Object.freeze([
            'nodics.foundation',
            'nodics.platform',
            'profile',
            'backoffice',
            'localizationCore',
            'localizationApi',
            'nodics.localization',
            'discoveryConfig',
            'discoverySource',
            'discoveryMapping',
            'discoveryProjection',
            'discoveryPublication',
            'discoveryQuery',
            'discoveryRanking',
            'discoveryRuntime',
            'nodics.discovery',
            'search',
            'elastic',
            'copilotCore',
            'copilotProvider',
            'mockProvider',
            'ollamaProvider',
            'openAiProvider',
            'claudeProvider',
            'geminiProvider',
            'copilotProviders',
            'copilotConversation',
            'copilotCapability',
            'copilotPolicy',
            'copilotKnowledge',
            'copilotWorkbench',
            'copilotEvaluation',
            'copilotApi',
            'nodics.copilot',
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'platformServer'
        ]),
        expectedApiExposure: Object.freeze(['serviceRegistry', 'dataImport', 'copilotApi']),
        verify: function (coreRoot) {
            assert.equal(CONFIG.get('runtimeRole').code, 'PLATFORM');
            assert.equal(require('./helpers/configuration').validateDestination(CONFIG.getProperties(), 'PLATFORM'), true);
            assert.equal(CONFIG.get('copilot').providers.default.adapter, 'ollama');
            assert.equal(CONFIG.get('copilot').conversation.storage, 'GENERATED_SERVICE');
            assert.equal(CONFIG.get('copilot').conversation.allowVolatileLocalStorage, false);
            assert.equal(CONFIG.get('search').discoveryProjection.options.enabled, true);
            assert.equal(require('./helpers/configuration').searchConfiguration(CONFIG.getProperties(), 'discoveryProjection').options.engine, 'elastic');
            const knowledgeSources = CONFIG.get('copilot').knowledge.sourceRegistry.definitions;
            assert.equal(knowledgeSources.some(source => source.sourceType === 'README'), true);
            assert.equal(knowledgeSources.some(source => source.sourceType === 'AGENTS_CONTRACT'), true);
            assert.equal(knowledgeSources.some(source => source.sourceType === 'CUSTOMER_PROJECT'), true);
            const sourceCodePartitions = knowledgeSources.filter(source => source.sourceType === 'SOURCE_CODE');
            assert.deepEqual(sourceCodePartitions.map(source => source.code), [
                'nodics-copilot-source',
                'nodics-discovery-source',
                'nodics-axis-assistant-source',
                'kickoff-copilot-composition-source'
            ]);
            assert.equal(sourceCodePartitions.every(source => source.enabled === true), true);
            assert.equal(sourceCodePartitions.every(source => source.classification === 'RESTRICTED'), true);
            assert.equal(sourceCodePartitions.every(source => source.allowedChannels.length === 1 && source.allowedChannels[0] === 'EMPLOYEE'), true);
            assert.equal(sourceCodePartitions.every(source => source.limits.maximumFiles <= 400), true);
            assert.equal(NODICS.isModuleActive('discoveryRuntime'), true);
            assert.equal(NODICS.isModuleActive('search'), true);
            assert.equal(NODICS.isModuleActive('elastic'), true);
        }
    }),
    Object.freeze({
        server: 'wcmsStagedServer',
        frameworkModules: Object.freeze(require('../envs/kickoffLocal/wcmsStagedServer/package.json').nodics.runtimeModuleRoots),
        expectedModules: Object.freeze([
            'nodics.foundation', 'publish', 'nodics.wcms', 'media', 'cms', 'cmsStaged', 'wcms',
            'axis', 'nodics.platform',
            'discoveryConfig', 'discoveryMapping', 'discoveryProjection', 'discoveryPublication',
            'discoveryQuery', 'discoveryRanking', 'discoveryRuntime', 'nodics.discovery', 'discoverySource',
            'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexus.web',
            'kickoffLocal', 'wcmsStagedServer'
        ]),
        expectedApiExposure: Object.freeze(['schemaApi', 'schemaMaintenance', 'openApiContract', 'mediaManagement', 'dataImport', 'dataExport']),
        verify: function (coreRoot) {
            assert.equal(CONFIG.get('publishEnabled'), true);
            assert.equal(CONFIG.get('runtimeRole').code, 'WCMS_STAGED');
            assert.equal(CONFIG.get('cms').publication.runtimeRole, 'STAGED');
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWcmsStaged');
            assert.equal(require('./helpers/configuration').moduleConfiguration(CONFIG.getProperties(), 'cmsOnline').abstractEndpoint.httpPort, 4314);
            assert.ok(NODICS.getRawModule('axis'), 'Axis baseline contribution owner should be discoverable');
            assert.equal(NODICS.isModuleActive('axis'), true,
                'Staged must activate the Platform-owned Axis baseline and publication services');
            for (const moduleName of ['profile', 'backoffice', 'installer', 'workflow', 'cronjob']) {
                assert.equal(NODICS.isModuleActive(moduleName), false,
                    'Staged must not activate the Platform authority: ' + moduleName);
            }
            assert.equal(CONFIG.get('servers').profile.remoteOnly, true);
            assert.equal(CONFIG.get('servers').backoffice.remoteOnly, true);
            assert.equal(CONFIG.get('servers').profile.endpoint.httpPort, 4300);
            assert.equal(CONFIG.get('servers').backoffice.endpoint.httpPort, 4300);
        }
    }),
    Object.freeze({
        server: 'wcmsOnlineServer',
        frameworkModules: Object.freeze(['nodics.wcms', 'nodics.discovery']),
        expectedModules: Object.freeze([
            'nodics.foundation', 'nodics.wcms', 'media', 'cms', 'wcms',
            'discoveryConfig', 'discoveryMapping', 'discoveryProjection', 'discoveryPublication',
            'discoveryQuery', 'discoveryRanking', 'discoveryRuntime', 'nodics.discovery', 'discoverySource',
            'nodics.kickoff',
            'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'wcmsOnlineServer'
        ]),
        verify: function (coreRoot) {
            assert.notEqual(CONFIG.get('publishEnabled'), true);
            assert.equal(CONFIG.get('runtimeRole').code, 'WCMS_ONLINE');
            assert.equal(CONFIG.get('cms').publication.runtimeRole, 'ONLINE');
            assert.equal(CONFIG.get('cms').publication.enabled, true);
            assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWcmsOnline');
            assert.equal(NODICS.isModuleActive('vDatabase'), false);
            assert.equal(NODICS.isModuleActive('vMongodb'), false);
            assert.equal(NODICS.isModuleActive('vService'), false);
            assert.equal(NODICS.isModuleActive('nexus.web'), false);
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
        verify: function (coreRoot) {
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
    // Use the deployment's declared discovery roots, including selected accelerators.
    const serverMetadata = require(path.join(projectRoot, 'envs/kickoffLocal', scenario.server, 'package.json'));
    const frameworkModules = serverMetadata.nodics.runtimeModuleRoots || scenario.frameworkModules;
    const moduleRoots = [
        coreRoot,
        ...frameworkModules.map(packageRoot),
        projectRoot
    ];

    await config.prepareStart(Object.freeze({
        NODICS_HOME: coreRoot,
        CUSTOM_HOME: projectRoot,
        MODULE_ROOTS: Object.freeze(moduleRoots),
        defaultEnvironment: 'kickoffLocal',
        defaultServer: scenario.server
    }));

    assert.equal(NODICS.isModuleActive('kickoffAdministration'), scenario.server === 'platformServer', 'Shared administration defaults must be scoped to Platform');

    const selectedDomains = require(path.join(coreRoot, 'modules/nConfig/src/service/defaultConfigurationBindingService')).resolveDomainComposition(CONFIG.get('activeModules').compositions.agora).domains;
    const capabilityDomains = new Set(selectedDomains);
    if (capabilityDomains.has('telco')) capabilityDomains.add('electronics');
    const optionalFamilies = {
        apparel: ['apparelProduct', 'apparel'],
        electronics: ['electronicsProduct', 'electronics'],
        telco: ['telcoCatalog', 'telcoSubscription', 'telcoProvisioning', 'telco']
    };
    const disabledModules = Object.entries(optionalFamilies).filter(([domain]) => !capabilityDomains.has(domain)).flatMap(([, modules]) => modules);
    ['apparel', 'electronics', 'telco'].filter(domain => !selectedDomains.includes(domain)).forEach(domain => {
        disabledModules.push({ apparel: 'agora.apparel', electronics: 'agora.electronics', telco: 'agora.telco' }[domain]);
    });
    if (selectedDomains.length < 2) disabledModules.push('domainCommerceCore');
    scenario.expectedModules.filter(moduleName => !disabledModules.includes(moduleName)).forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), true, `${moduleName} should be active`);
    });
    disabledModules.forEach(moduleName => assert.equal(NODICS.isModuleActive(moduleName), false, `${moduleName} should be disabled`));
    if (scenario.server === 'commerceServer' || scenario.server === 'commerceStagedServer') {
        for (const moduleName of ['store', 'cart', 'shoppingList']) assert.equal(NODICS.isModuleActive(moduleName), true);
        assert.equal(CONFIG.get('cart').customerApi.defaultStoreCode, undefined);
        assert.equal(CONFIG.get('shoppingList').customerApi.defaultStoreCode, undefined);
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
    if (scenario.verify) scenario.verify(coreRoot);
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
