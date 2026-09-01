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

/** @module test/wasteRuntimeCompositionContract @description Verifies Kickoff owns a separate local Waste Management server that composes framework Waste and accelerator presets. @layer test @owner nodics.kickoff */

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
const wasteRoot = path.join(frameworkRoot, 'nodics.waste');
const acceleratorRoot = path.join(frameworkRoot, 'nodics.accelerators/modules/waste');
const config = require(path.join(coreRoot, 'modules/nConfig'));

const expectedWasteModules = [
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
    'eWaste',
    'kickoffWaste'
];

const expectedSchemas = {
    wasteCore: ['wasteLifecyclePolicy'],
    wasteMaterial: ['wasteFamily', 'wasteCategory', 'wasteItemType', 'wasteMaterialType', 'wasteConditionGrade', 'wasteEvidencePolicy'],
    wasteCollection: ['wasteCollectionPointType', 'wasteCollectionPoint', 'wasteCollectionAcceptanceRule', 'wasteCollectionPreset', 'wasteReceiptPolicy'],
    wasteSubmission: ['wasteSubmission', 'wasteEvidence', 'wasteMetadataSuggestion'],
    wasteVerification: ['wasteVerificationPolicy', 'wasteVerification'],
    wasteReceipt: ['wasteReceipt'],
    wasteImpact: ['wasteImpactMetric', 'wasteImpactProfile', 'wasteImpactResult'],
    wasteMovement: ['wasteBatch', 'wasteMovement'],
    wasteCompliance: ['wasteComplianceProfile', 'wasteComplianceEvidence']
};

async function main() {
    const options = Object.freeze({
        NODICS_HOME: coreRoot,
        CUSTOM_HOME: projectRoot,
        MODULE_ROOTS: Object.freeze([coreRoot, wasteRoot, acceleratorRoot, projectRoot]),
        defaultEnvironment: 'kickoffLocal',
        defaultServer: 'wasteServer'
    });

    await config.start(options);
    await config.initUtilities(options);
    await config.loadModules();
    await config.initEntities();

    assert.equal(NODICS.getSelectedEnvironmentName(), 'kickoffLocal');
    assert.equal(NODICS.getServerName(), 'wasteServer');
    assert.equal(CONFIG.get('runtimeRole').code, 'WASTE');
    assert.equal(CONFIG.get('runtimeRole').publication, 'OPERATIONAL');
    assert.equal(CONFIG.get('database').default.mongodb.master.databaseName, 'kickoffLocalWaste');
    assert.equal(CONFIG.get('servers').default.endpoint.httpPort, 4370);
    assert.deepEqual(CONFIG.get('data').dataReleases.allowedDestinationRoles, ['WASTE']);
    assert.equal(CONFIG.get('apiExposure').categories.wasteInternal.enabled, true);
    assert.equal(CONFIG.get('waste').accelerator.umbrella, 'waste');
    assert.deepEqual(CONFIG.get('waste').accelerator.scenarioAccelerators, ['eWaste']);
    assert.deepEqual(CONFIG.get('waste').accelerator.presetPackCodes, ['EWASTE_CORE_PRESETS']);
    assert.equal(CONFIG.get('waste').projectOverlay.module, 'kickoffWaste');
    assert.equal(CONFIG.get('waste').projectOverlay.releaseCode, 'kickoffWaste:project-reference');

    expectedWasteModules.forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), true, `${moduleName} should be active for wasteServer`);
    });
    ['nodics.loyalty', 'loyaltyCore', 'promotion', 'commerceServer', 'loyaltyServer'].forEach(moduleName => {
        assert.equal(NODICS.isModuleActive(moduleName), false, `${moduleName} must remain outside wasteServer`);
    });
    assert.equal(NODICS.getRawModule('nodics.accelerators'), undefined, 'Waste runtime should discover only the Waste accelerator subtree');

    assert(SERVICE.DefaultWasteDataContributionPolicyService, 'Waste data contribution policy service must load');
    assert(SERVICE.DefaultWasteAcceptancePolicyService, 'Waste acceptance policy service must load');
    assert(SERVICE.DefaultWasteSubmissionLifecycleService, 'Waste submission lifecycle service must load');
    assert(SERVICE.DefaultWasteImpactCalculationService, 'Waste impact calculation service must load');
    assert(SERVICE.DefaultWasteBackofficeCapabilityService, 'Waste BackOffice capability provider must load');
    const wasteBackofficeCapability = SERVICE.DefaultWasteBackofficeCapabilityService.getCapability();
    assert.equal(wasteBackofficeCapability.capabilityId, 'waste-management');
    assert.equal(wasteBackofficeCapability.requiredPermissions.includes('waste.backoffice.view'), true);
    assert.equal(wasteBackofficeCapability.navigation.some(item => item.id === 'waste-submissions'), true);
    assert(FACADE.DefaultWasteInternalFacade, 'Waste internal facade must load');
    assert(CONTROLLER.DefaultWasteInternalController, 'Waste internal controller must load');

    const mergedSchema = SERVICE.DefaultFilesLoaderService.loadSchemaFiles('/src/schemas/schemas.js', null);
    SERVICE.DefaultDatabaseConfigurationService.setRawSchema(mergedSchema);
    await SERVICE.DefaultDatabaseSchemaHandlerService.buildDatabaseSchema(mergedSchema);
    await SERVICE.DefaultInfraService.buildServices();

    Object.entries(expectedSchemas).forEach(([moduleName, schemaNames]) => {
        const rawSchema = NODICS.getModule(moduleName).rawSchema || {};
        schemaNames.forEach(schemaName => {
            assert(rawSchema[schemaName], `${moduleName}.${schemaName} should be materialized for wasteServer`);
            assert.equal(rawSchema[schemaName].service.enabled, true, `${moduleName}.${schemaName} should generate service capability`);
            assert.equal(rawSchema[schemaName].router.enabled, false, `${moduleName}.${schemaName} should keep generated CRUD routers disabled`);
            assert.equal(rawSchema[schemaName].definition.tenant, undefined, `${moduleName}.${schemaName} must derive tenant from runtime context`);
            assert.equal(rawSchema[schemaName].definition.enterpriseCode, undefined, `${moduleName}.${schemaName} must not store enterpriseCode`);
        });
    });

    const manifest = require(path.join(acceleratorRoot, 'modules/eWaste/data/manifest.json'));
    assert.equal(manifest.sections['core-reference'].destinationRole, 'WASTE');
    assert.equal(manifest.sections['core-reference'].dataType, 'core');
    const overlayManifest = require(path.join(projectRoot, 'modules/kickoffWaste/data/manifest.json'));
    assert.equal(overlayManifest.sections['project-reference'].destinationRole, 'WASTE');
    assert.equal(overlayManifest.sections['project-reference'].dataType, 'core');
    console.log('Kickoff kickoffLocal wasteServer runtime composition passed');
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
