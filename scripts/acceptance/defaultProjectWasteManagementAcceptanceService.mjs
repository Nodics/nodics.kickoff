#!/usr/bin/env node
/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const { readProjectEnvironmentConfiguration, projectRuntime, projectInitializationProfile } = await import((await import('node:url')).pathToFileURL(process.env.NODICS_FRAMEWORK_ROOT + '/nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs').href);

/**
 * @module kickoff/scripts/acceptance/defaultProjectWasteManagementAcceptanceService
 * @description Runs a project Waste Management acceptance journey against the project-owned Waste server composition.
 * @layer tooling
 * @owner nodics.kickoff
 */

const require = createRequire(import.meta.url);
const projectRoot = process.env.NODICS_PROJECT_ROOT || process.cwd();
const localRuntimeCredentialService = require(process.env.NODICS_FRAMEWORK_ROOT + '/nodics.foundation/modules/nTooling/src/service/project/defaultProjectLocalRuntimeCredentialService');
const environmentProfile = readProjectEnvironmentConfiguration(projectRoot, process.env.ENV || '');
const acceptanceConfig = environmentProfile.acceptance?.wasteManagement || {};
const environmentName = environmentProfile.environment;
if (/Local$/u.test(environmentName)) {
    Object.assign(process.env, localRuntimeCredentialService.mergeEnvironment(projectRoot, environmentName, process.env));
}
const runtime = projectRuntime(environmentProfile, process.env.SERVER || acceptanceConfig.server || acceptanceConfig.runtime);
const serverName = runtime.server;
const initializationProfile = projectInitializationProfile(runtime, process.env.NODICS_INITIALIZATION_PROFILE || acceptanceConfig.profileCode);
const fixedNow = new Date('2026-09-01T12:00:00.000Z');

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function objectValues(moduleExports) {
    return Object.values(moduleExports || {});
}

function resolveFrameworkRoot() {
    const configuredRoot = process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai';
    const frameworkRoot = path.resolve(projectRoot, configuredRoot);
    assert(fs.existsSync(path.join(frameworkRoot, 'nodics.foundation', 'package.json')), 'NODICS_FRAMEWORK_ROOT must point to nodics.ai');
    return frameworkRoot;
}

function requireRecords(recordsRoot, fileName) {
    return objectValues(require(path.join(recordsRoot, fileName)));
}

function assertCodes(records, expectedCodes, label) {
    const codes = new Set(records.map(record => record.code));
    expectedCodes.forEach(code => assert(codes.has(code), `${label} missing ${code}`));
}

function uniqueCodes(records) {
    return Array.from(new Set(records.map(record => record.code)));
}

function wasteConfig() {
    return CONFIG.get('waste') || {};
}

function projectOverlayConfig() {
    return wasteConfig().projectOverlay || {};
}

function tenantCode() {
    return acceptanceConfig.tenant || CONFIG.get('defaultTenant') || 'default';
}

function importAuthData() {
    return {
        permissions: ['import.core.run'],
        userGroups: ['serviceAccountUserGroup', 'adminGroup', 'employeeUserGroup', 'userGroup']
    };
}

function toPlainRecord(record) {
    if (!record) return record;
    if (typeof record.toObject === 'function') return record.toObject();
    return JSON.parse(JSON.stringify(record));
}

async function startWasteRuntime(frameworkRoot) {
    const coreRoot = path.join(frameworkRoot, 'nodics.foundation');
    const runtimeModuleRoots =
        require(path.join(projectRoot, 'envs', environmentName, serverName, 'package.json'))
            .nodics?.runtimeModuleRoots || [];
    const config = require(path.join(coreRoot, 'modules/nConfig'));
    const options = Object.freeze({
        NODICS_HOME: coreRoot,
        CUSTOM_HOME: projectRoot,
        MODULE_ROOTS: Object.freeze([
            coreRoot,
            ...runtimeModuleRoots.map(relative => path.join(frameworkRoot, relative)),
            projectRoot
        ]),
        defaultEnvironment: environmentName,
        defaultServer: serverName
    });
    await config.start(options);
    await config.initUtilities(options);
    await config.loadModules();
    await config.initEntities();
}

async function buildGeneratedPersistenceServices() {
    if (SERVICE.DefaultCacheConfigurationService &&
        typeof SERVICE.DefaultCacheConfigurationService.loadCacheConfiguration === 'function' &&
        SERVICE.DefaultCacheEngineService &&
        typeof SERVICE.DefaultCacheEngineService.buildCacheEngines === 'function') {
        await SERVICE.DefaultCacheConfigurationService.loadCacheConfiguration();
        await SERVICE.DefaultCacheEngineService.buildCacheEngines();
    }
    if (SERVICE.DefaultDatabaseConnectionHandlerService &&
        typeof SERVICE.DefaultDatabaseConnectionHandlerService.createDatabaseConnection === 'function') {
        await SERVICE.DefaultDatabaseConnectionHandlerService.createDatabaseConnection();
    }
    const rawModels = NODICS.getRawModels ? NODICS.getRawModels() : {};
    if ((!rawModels || !rawModels.default || typeof rawModels.default.getItems !== 'function') &&
        SERVICE.DefaultDatabaseConfigurationService &&
        typeof SERVICE.DefaultDatabaseConfigurationService.postInit === 'function') {
        await SERVICE.DefaultDatabaseConfigurationService.postInit();
    }
    const mergedSchema = SERVICE.DefaultFilesLoaderService.loadSchemaFiles('/src/schemas/schemas.js', null);
    SERVICE.DefaultDatabaseConfigurationService.setRawSchema(mergedSchema);
    await SERVICE.DefaultDatabaseSchemaHandlerService.buildDatabaseSchema(mergedSchema);
    const defaultEnterprise = CONFIG.get('defaultEnterprise') || 'default';
    if (NODICS.addActiveEnterprise) NODICS.addActiveEnterprise(defaultEnterprise, tenantCode());
    if (NODICS.addActiveTenant) NODICS.addActiveTenant(tenantCode());
    await SERVICE.DefaultDatabaseModelHandlerService.buildModelsForTenant(tenantCode());
    if (typeof SERVICE.DefaultDatabaseModelHandlerService.ensureGeneratedSchemaServices === 'function') {
        await SERVICE.DefaultDatabaseModelHandlerService.ensureGeneratedSchemaServices();
    }
}

function validateRuntime() {
    assert(NODICS.getSelectedEnvironmentName() === environmentName, 'Waste acceptance selected the wrong environment');
    assert(NODICS.getServerName() === serverName, 'Waste acceptance selected the wrong server');
    assert(CONFIG.get('runtimeRole').code === 'WASTE', 'Waste server must own WASTE runtime role');
    assert(CONFIG.get('servers').default.endpoint.httpPort === runtime.port, 'Waste server must use its configured acceptance endpoint');
    assert(CONFIG.get('apiExposure').categories.wasteInternal.enabled === true, 'Waste internal API exposure must be enabled');
    const requiredModules = [
        'nodics.waste',
        'wasteCore',
        'wasteMaterial',
        'wasteCollection',
        'wasteSubmission',
        'wasteVerification',
        'wasteReceipt',
        'wasteImpact',
        'wasteMovement',
        'wasteCompliance',
        'wasteApi',
        'waste',
        'eWaste'
    ];
    const overlay = projectOverlayConfig();
    if (overlay.enabled === true && overlay.module) requiredModules.push(overlay.module);
    requiredModules.forEach(moduleName => assert(NODICS.isModuleActive(moduleName) === true, `${moduleName} must be active`));
    ['nodics.loyalty', 'loyaltyCore', 'promotion', 'commerceServer', 'loyaltyServer'].forEach(moduleName => {
        assert(NODICS.isModuleActive(moduleName) === false, `${moduleName} must remain outside Waste acceptance runtime`);
    });
}

function validateInitialData(frameworkRoot) {
    const acceleratorData = validateAcceleratorInitialData(frameworkRoot);
    const overlayData = validateProjectOverlayData();
    return {
        families: acceleratorData.families.concat(overlayData.families || []),
        categories: acceleratorData.categories.concat(overlayData.categories || []),
        materials: acceleratorData.materials.concat(overlayData.materials || []),
        evidencePolicies: acceleratorData.evidencePolicies.concat(overlayData.evidencePolicies || []),
        collectionPresets: acceleratorData.collectionPresets.concat(overlayData.collectionPresets || []),
        impactMetrics: acceleratorData.impactMetrics.concat(overlayData.impactMetrics || []),
        impactProfiles: acceleratorData.impactProfiles.concat(overlayData.impactProfiles || []),
        acceptanceRules: acceleratorData.acceptanceRules.concat(overlayData.acceptanceRules || []),
        projectOverlay: overlayData.enabled ? overlayData : undefined
    };
}

function validateAcceleratorInitialData(frameworkRoot) {
    const acceleratorRoot = path.join(frameworkRoot, 'nodics.accelerators/modules/waste/modules/eWaste');
    const recordsRoot = path.join(acceleratorRoot, 'data/core-v001/records/waste');
    const manifest = require(path.join(acceleratorRoot, 'data/manifest.json'));
    const header = require(path.join(acceleratorRoot, 'data/core-v001/headers/waste/eWastePresetHeader.js'));
    const contributionPolicy = SERVICE.DefaultWasteDataContributionPolicyService;
    const section = manifest.sections['core-reference'];
    contributionPolicy.validateManifestSection(section);
    contributionPolicy.validateHeader(header);

    const families = requireRecords(recordsRoot, 'eWasteFamilyData.js');
    const categories = requireRecords(recordsRoot, 'eWasteCategoryData.js');
    const materials = requireRecords(recordsRoot, 'eWasteMaterialTypeData.js');
    const evidencePolicies = requireRecords(recordsRoot, 'eWasteEvidencePolicyData.js');
    const collectionPresets = requireRecords(recordsRoot, 'eWasteCollectionPresetData.js');
    const impactMetrics = requireRecords(recordsRoot, 'eWasteImpactMetricData.js');
    const impactProfiles = requireRecords(recordsRoot, 'eWasteImpactProfileData.js');
    const acceptanceRules = requireRecords(recordsRoot, 'eWasteAcceptanceRuleData.js');
    families.concat(categories, materials, evidencePolicies, collectionPresets, impactMetrics, impactProfiles, acceptanceRules)
        .forEach(record => contributionPolicy.validateRecord(record, 'SCENARIO_ACCELERATOR'));

    assertCodes(families, ['ELECTRONICS', 'BATTERY'], 'Waste family data');
    assertCodes(categories, ['MOBILE_DEVICE', 'LAPTOP_COMPUTER', 'LITHIUM_BATTERY'], 'Waste category data');
    assertCodes(materials, ['CIRCUIT_BOARD', 'COPPER', 'LITHIUM_BATTERY'], 'Waste material data');
    assertCodes(evidencePolicies, ['EWASTE_STANDARD_PHOTO'], 'Waste evidence policy data');
    assertCodes(collectionPresets, ['EWASTE_DROP_OFF_STANDARD', 'EWASTE_BIN_ACCESSORY_ONLY'], 'Waste collection preset data');
    assertCodes(impactMetrics, ['EWASTE_WEIGHT_KG', 'DIVERTED_FROM_LANDFILL_KG'], 'Waste impact metric data');
    assertCodes(impactProfiles, ['EWASTE_WEIGHT_ESTIMATE'], 'Waste impact profile data');
    return { families, categories, materials, evidencePolicies, collectionPresets, impactMetrics, impactProfiles, acceptanceRules };
}

function validateProjectOverlayData() {
    const overlay = projectOverlayConfig();
    if (overlay.enabled !== true) return {};
    const moduleName = overlay.module;
    assert(moduleName, 'Waste project overlay must declare module');
    const rawModule = NODICS.getRawModule && NODICS.getRawModule(moduleName);
    const moduleRoot = rawModule && rawModule.path ? rawModule.path : path.join(projectRoot, 'modules', moduleName);
    const dataRoot = path.join(moduleRoot, 'data');
    const manifest = require(path.join(dataRoot, 'manifest.json'));
    const sectionCode = String(overlay.releaseCode || `${moduleName}:project-reference`).split(':')[1];
    const section = manifest.sections[sectionCode];
    assert(section, `Waste project overlay manifest must declare ${sectionCode}`);
    const headerFile = Object.keys(section.files || {}).find(filePath =>
        filePath.startsWith(`${section.sourceRoot}/`) &&
        filePath.includes('/headers/') &&
        filePath.endsWith('Header.js'));
    assert(headerFile, 'Waste project overlay manifest must declare a Waste import header');
    const header = require(path.join(dataRoot, headerFile));
    const contributionPolicy = SERVICE.DefaultWasteDataContributionPolicyService;
    contributionPolicy.validateManifestSection(section);
    const headerEntries = contributionPolicy.validateHeader(header);
    const recordsRoot = path.dirname(headerFile).replace(/(^|\/)headers(\/|$)/, '$1records$2');
    const recordsBySchemaName = headerEntries.reduce((result, entry) => {
        const records = requireRecords(path.join(dataRoot, recordsRoot), `${entry.options.dataFilePrefix}.js`);
        records.forEach(record => contributionPolicy.validateRecord(record, overlay.layerKind || 'PROJECT'));
        result[entry.options.schemaName] = (result[entry.options.schemaName] || []).concat(records);
        return result;
    }, {});

    assertCodes(recordsBySchemaName.wasteCategory || [], ['SMART_HOME_DEVICE'], 'Waste project category overlay data');
    assertCodes(recordsBySchemaName.wasteCollectionPreset || [], ['CIRCA_MALL_DROP_OFF'], 'Waste project collection preset overlay data');
    assertCodes(recordsBySchemaName.wasteImpactProfile || [], ['CIRCA_VERIFIED_DEVICE_RECOVERY'], 'Waste project impact profile overlay data');
    assertCodes(recordsBySchemaName.wasteCollectionAcceptanceRule || [], ['CIRCA_DROP_OFF_SMART_HOME'], 'Waste project acceptance rule overlay data');
    return {
        enabled: true,
        releaseCode: overlay.releaseCode,
        moduleName,
        families: recordsBySchemaName.wasteFamily || [],
        categories: recordsBySchemaName.wasteCategory || [],
        materials: recordsBySchemaName.wasteMaterialType || [],
        evidencePolicies: recordsBySchemaName.wasteEvidencePolicy || [],
        collectionPresets: recordsBySchemaName.wasteCollectionPreset || [],
        impactMetrics: recordsBySchemaName.wasteImpactMetric || [],
        impactProfiles: recordsBySchemaName.wasteImpactProfile || [],
        acceptanceRules: recordsBySchemaName.wasteCollectionAcceptanceRule || []
    };
}

function releaseCodesFromProfile(profile, dataType) {
    return (profile.steps || [])
        .filter(step => step.dataType === dataType)
        .flatMap(step => step.releases || [])
        .map(release => release.releaseCode);
}

async function installInitialDataFromProfile() {
    const profileCode = initializationProfile;
    const releaseService = SERVICE.DefaultDataReleaseService;
    assert(releaseService, 'DefaultDataReleaseService must be available for Waste initialization');
    const profileResponse = await releaseService.getInitializationProfile({ tenant: tenantCode(), profileCode });
    const profile = profileResponse.data;
    const coreReleases = (profile.steps || []).filter(step => step.dataType === 'core').flatMap(step => step.releases || []);
    assert(coreReleases.length > 0, 'Waste initialization profile must expose core releases');
    const releaseCodes = releaseCodesFromProfile(profile, 'core');
    assert(releaseCodes.includes('eWaste:core-reference'), 'Waste initialization profile must include eWaste core reference data');
    const overlay = projectOverlayConfig();
    if (overlay.enabled === true) {
        assert(releaseCodes.includes(overlay.releaseCode), 'Waste initialization profile must include project overlay data');
    }
    const execution = await releaseService.execute({
        tenant: tenantCode(),
        authData: importAuthData(),
        releaseRequest: {
            dataType: 'core',
            releaseCodes,
            expectedReleases: Object.fromEntries(coreReleases.map(release => [release.releaseCode, release.version])),
            forceCurrent: true
        }
    });
    const verifiedProfile = await releaseService.getInitializationProfile({ tenant: tenantCode(), profileCode });
    assert(verifiedProfile.data.status === 'CURRENT', 'Waste initialization profile must be CURRENT after installation');
    return {
        profileCode,
        releaseCodes,
        importRun: execution.data.importRun,
        profileStatus: verifiedProfile.data.status
    };
}

async function getPersistedRecords(serviceName, codes, label) {
    const service = SERVICE[serviceName];
    assert(service && typeof service.get === 'function', `${serviceName} must be available for ${label} persistence verification`);
    const records = [];
    for (const code of codes) {
        const response = await service.get({
            tenant: tenantCode(),
            authData: importAuthData(),
            query: { code },
            searchOptions: { pageSize: 1, pageNumber: 1 },
            options: { skipItemCache: true }
        });
        const record = response && response.result && response.result[0];
        assert(record, `${label} was not persisted: ${code}`);
        records.push(toPlainRecord(record));
    }
    return records;
}

async function loadPersistedInitialData(seedData) {
    const families = await getPersistedRecords('DefaultWasteFamilyService',
        uniqueCodes(seedData.families), 'Waste family data');
    const categories = await getPersistedRecords('DefaultWasteCategoryService',
        uniqueCodes(seedData.categories), 'Waste category data');
    const materials = await getPersistedRecords('DefaultWasteMaterialTypeService',
        uniqueCodes(seedData.materials), 'Waste material data');
    const evidencePolicies = await getPersistedRecords('DefaultWasteEvidencePolicyService',
        uniqueCodes(seedData.evidencePolicies), 'Waste evidence policy data');
    const collectionPresets = await getPersistedRecords('DefaultWasteCollectionPresetService',
        uniqueCodes(seedData.collectionPresets), 'Waste collection preset data');
    const impactMetrics = await getPersistedRecords('DefaultWasteImpactMetricService',
        uniqueCodes(seedData.impactMetrics), 'Waste impact metric data');
    const impactProfiles = await getPersistedRecords('DefaultWasteImpactProfileService',
        uniqueCodes(seedData.impactProfiles), 'Waste impact profile data');
    const acceptanceRules = await getPersistedRecords('DefaultWasteCollectionAcceptanceRuleService',
        uniqueCodes(seedData.acceptanceRules), 'Waste collection acceptance rule data');
    return { families, categories, materials, evidencePolicies, collectionPresets, impactMetrics, impactProfiles, acceptanceRules };
}

async function runJourney(data) {
    const collectionPreset = data.collectionPresets.find(record => record.code === 'CIRCA_MALL_DROP_OFF') ||
        data.collectionPresets.find(record => record.code === 'EWASTE_DROP_OFF_STANDARD');
    const impactProfile = data.impactProfiles.find(record => record.code === collectionPreset.impactProfileCode);
    const facts = {
        familyCode: 'ELECTRONICS',
        categoryCode: collectionPreset.code === 'CIRCA_MALL_DROP_OFF' ? 'SMART_HOME_DEVICE' : 'MOBILE_DEVICE',
        itemTypeCode: collectionPreset.code === 'CIRCA_MALL_DROP_OFF' ? 'UNKNOWN_ELECTRONIC_ITEM' : 'SMARTPHONE',
        materialTypeCodes: ['CIRCUIT_BOARD', 'COPPER', 'PLASTIC_CASING'],
        conditionGrade: 'RECYCLABLE',
        quantity: collectionPreset.code === 'CIRCA_MALL_DROP_OFF' ? 2 : 1,
        weight: collectionPreset.code === 'CIRCA_MALL_DROP_OFF' ? '3.5' : '2.5'
    };
    const collectionPoint = {
        code: 'KICKOFF_WASTE_CP_001',
        collectionPointType: collectionPreset.collectionPointType,
        receiptPolicyCode: collectionPreset.receiptPolicyCode,
        verificationPolicyCode: collectionPreset.verificationPolicyCode,
        serviceCapabilities: collectionPreset.serviceCapabilities,
        operatingStatus: 'ACTIVE',
        publicVisibility: 'PUBLIC',
        status: 'ACTIVE',
        revision: 0
    };
    const rules = data.acceptanceRules.filter(rule => collectionPreset.acceptanceRuleCodes.includes(rule.code));
    const controller = CONTROLLER.DefaultWasteInternalController;
    const accepted = await controller.collectionAcceptanceCheck({
        authData: { tenant: 'default' },
        httpRequest: {
            params: { collectionPointCode: collectionPoint.code },
            body: { collectionPoint, rules, facts },
            headers: { 'Idempotency-Key': 'waste-acceptance-check-001', 'X-Correlation-Id': 'waste-acceptance-001' }
        }
    });
    assert(accepted.data.accepted === true, 'Waste acceptance check must accept the eWaste drop-off facts');
    assert(accepted.data.requiresReceipt === true, 'Waste acceptance check must require a receipt for drop-off');

    const submitted = await controller.submitWaste({
        authData: { tenant: 'default' },
        httpRequest: {
            body: {
                code: 'KICKOFF_WASTE_SUB_001',
                categoryCode: facts.categoryCode,
                itemTypeCode: facts.itemTypeCode,
                materialTypeCodes: facts.materialTypeCodes,
                conditionGrade: facts.conditionGrade,
                quantity: facts.quantity,
                weight: facts.weight,
                preferredCollectionPointCode: collectionPoint.code
            },
            headers: { 'Idempotency-Key': 'waste-submit-001', 'X-Correlation-Id': 'waste-acceptance-001' }
        }
    });
    assert(submitted.data.submissionStatus === 'SUBMITTED', 'Waste submission must enter SUBMITTED status');
    assert(submitted.data.tenant === undefined, 'Waste submission response must not persist tenant scope');
    assert(submitted.data.rewardEligibility === undefined, 'Waste submission response must not own reward eligibility');

    const reviewed = await controller.transitionSubmission({
        httpRequest: {
            params: { submissionCode: submitted.data.code },
            body: { submission: submitted.data, targetStatus: 'UNDER_REVIEW', now: fixedNow },
            headers: { 'Idempotency-Key': 'waste-review-001', 'X-Correlation-Id': 'waste-acceptance-001' }
        }
    });
    const approved = await controller.transitionSubmission({
        httpRequest: {
            params: { submissionCode: reviewed.data.code },
            body: { submission: reviewed.data, targetStatus: 'APPROVED', now: fixedNow },
            headers: { 'Idempotency-Key': 'waste-approve-001', 'X-Correlation-Id': 'waste-acceptance-001' }
        }
    });
    assert(approved.data.submissionStatus === 'APPROVED', 'Waste submission must reach APPROVED status');

    const impact = await controller.calculateImpact({
        httpRequest: {
            body: {
                resultCode: 'KICKOFF_WASTE_IMPACT_001',
                sourceRef: { module: 'wasteSubmission', schema: 'wasteSubmission', code: approved.data.code },
                profile: impactProfile,
                facts,
                calculationStatus: 'ESTIMATED',
                now: fixedNow
            },
            headers: { 'Idempotency-Key': 'waste-impact-001', 'X-Correlation-Id': 'waste-acceptance-001' }
        }
    });
    assert(impact.data.profileCode === collectionPreset.impactProfileCode, 'Waste impact must use the selected preset profile');
    const expectedMetricValues = collectionPreset.code === 'CIRCA_MALL_DROP_OFF' ? ['3.5', '2.52'] : ['2.5', '2.5'];
    assert(JSON.stringify(impact.data.metrics.map(metric => metric.value)) === JSON.stringify(expectedMetricValues),
        'Waste impact must calculate schema-driven metric values');
    assert(impact.data.rewardFormula === undefined, 'Waste impact result must not own reward formula');
    return { accepted: accepted.data, approved: approved.data, impact: impact.data };
}

async function main() {
    const frameworkRoot = resolveFrameworkRoot();
    await startWasteRuntime(frameworkRoot);
    validateRuntime();
    await buildGeneratedPersistenceServices();
    const seedData = validateInitialData(frameworkRoot);
    const installation = await installInitialDataFromProfile();
    const data = await loadPersistedInitialData(seedData);
    const result = await runJourney(data);
    console.log(JSON.stringify({
        state: 'PASSED',
        server: serverName,
        role: CONFIG.get('runtimeRole').code,
        port: CONFIG.get('servers').default.endpoint.httpPort,
        initializedProfile: installation.profileCode,
        profileStatus: installation.profileStatus,
        releaseCodes: installation.releaseCodes,
        projectOverlay: seedData.projectOverlay && seedData.projectOverlay.releaseCode,
        importRunId: installation.importRun && installation.importRun.runId,
        persistedRecords: Object.fromEntries(Object.entries(data).map(([name, records]) => [name, records.length])),
        accepted: result.accepted.accepted,
        submissionStatus: result.approved.submissionStatus,
        impactProfileCode: result.impact.profileCode,
        metricCodes: result.impact.metrics.map(metric => metric.metricCode)
    }, null, 2));
}

async function shutdownAcceptanceRuntime() {
    if (typeof SERVICE === 'undefined') return;
    if (SERVICE.DefaultRuntimeLifecycleService &&
        typeof SERVICE.DefaultRuntimeLifecycleService.requestShutdown === 'function') {
        await SERVICE.DefaultRuntimeLifecycleService.requestShutdown({
            reason: 'waste-management-acceptance-complete',
            timeoutMs: 5000
        });
        return;
    }
    if (SERVICE.DefaultDatabaseConnectionHandlerService &&
        typeof SERVICE.DefaultDatabaseConnectionHandlerService.closeAllConnections === 'function') {
        await SERVICE.DefaultDatabaseConnectionHandlerService.closeAllConnections();
    }
}

main().then(() => shutdownAcceptanceRuntime()).catch(async error => {
    if (error && typeof error.toJson === 'function') {
        console.error(JSON.stringify(error.toJson(false), null, 2));
    } else {
        console.error(error && error.stack ? error.stack : error);
    }
    process.exitCode = 1;
    try {
        await shutdownAcceptanceRuntime();
    } catch (shutdownError) {
        console.error(shutdownError && shutdownError.stack ? shutdownError.stack : shutdownError);
    }
});
