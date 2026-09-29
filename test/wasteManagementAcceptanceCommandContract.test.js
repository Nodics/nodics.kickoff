/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */


'use strict';
/** @module test/wasteManagementAcceptanceCommandContract @description Checks customer adoption of framework-owned Waste gates without copying their invariants. @layer test @owner nodics.kickoff */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const projectRoot = path.resolve(__dirname, '..');
const { frameworkRoot } = require('./helpers/configuration');
const environment = require('./helpers/configuration').loadEnvironment();
const { projectRuntime } = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs'));
const waste = projectRuntime(environment, { role: 'WASTE' });
assert.equal(waste.server, 'wasteServer');
assert.equal(waste.port, 4370);
assert(fs.existsSync(path.join(projectRoot, 'modules/circa.ewaste/data/manifest.json')), 'Customer fixtures stay customer-owned');
// Read the actual indexed nConfig graph without starting providers or building models.
const probe = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectConfigurationProbeService'));
const effective = probe.read({ projectRoot, frameworkRoot, environment: environment.environment, server: waste.server });
assert(effective.modules.includes(environment.environment), 'Selected environment must be indexed');
assert(effective.modules.includes(waste.server), 'Selected Waste server must be indexed');
assert.equal(effective.properties.runtimeRole.code, 'WASTE');
assert.equal(effective.properties.servers.default.endpoint.httpPort, waste.port);
assert.equal(effective.properties.apiExposure.categories.wasteInternal.enabled, true);
for (const name of ['nodics.waste', 'wasteCore', 'wasteMaterial', 'wasteCollection',
  'wasteSubmission', 'wasteVerification', 'wasteReceipt', 'wasteImpact',
  'wasteMovement', 'wasteCompliance', 'wasteApi', 'waste', 'eWaste', 'circa.ewaste',
  'nodics.rulesEngine', 'rulesEvaluation'])
  assert(effective.modules.includes(name), 'Required customer composition module: ' + name);
for (const name of ['nodics.loyalty', 'loyaltyCore', 'promotion', 'commerceServer', 'loyaltyServer'])
  assert(!effective.modules.includes(name), 'Excluded from this customer Waste runtime: ' + name);

const overlay = effective.properties.waste.projectOverlay;
assert.equal(overlay.enabled, true);
assert.equal(overlay.module, 'circa.ewaste');
assert.equal(overlay.releaseCode, 'circa.ewaste:waste-policy');
assert.equal(overlay.layerKind, 'PROJECT');
const tooling = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/defaultToolingCommandService'));
const modules = tooling.collectModules(projectRoot, tooling.collectModules(frameworkRoot, []));
const owners = modules.filter(module => module.name === overlay.module);
assert.equal(owners.length, 1);
const dataRoot = path.join(owners[0].path, 'data');
const section = require(path.join(dataRoot, 'manifest.json')).sections['waste-policy'];
const policy = require(path.join(frameworkRoot, 'nodics.waste/modules/wasteCore/src/service/defaultWasteDataContributionPolicyService'));
policy.validateManifestSection(section);
const headerFiles = Object.keys(section.files).filter(file => file.includes('/headers/'));
assert.equal(headerFiles.length, 1);
const entries = policy.validateHeader(require(path.join(dataRoot, headerFiles[0])));
const recordsBySchema = {};
for (const entry of entries) {
  const files = Object.keys(section.files).filter(file => file.includes('/records/') &&
    path.basename(file) === entry.options.dataFilePrefix + '.js');
  assert.equal(files.length, 1, 'One declared record file per import entry');
  const records = Object.values(require(path.join(dataRoot, files[0])));
  assert(records.length > 0);
  records.forEach(record => policy.validateRecord(record, overlay.layerKind));
  recordsBySchema[entry.options.schemaName] = (recordsBySchema[entry.options.schemaName] || []).concat(records);
}
for (const [schema, code] of [
  ['wasteCategory', 'SMART_HOME_DEVICE'],
  ['wasteCollectionPreset', 'CIRCA_MALL_DROP_OFF'],
  ['wasteImpactProfile', 'CIRCA_VERIFIED_DEVICE_RECOVERY'],
  ['wasteCollectionAcceptanceRule', 'CIRCA_DROP_OFF_SMART_HOME']
]) assert(recordsBySchema[schema]?.some(record => record.code === code), 'Customer overlay must contain ' + code);

const profile = effective.properties.data.dataReleases.initializationProfiles.localWasteFoundation;
assert.equal(profile.enabled, true);
const core = profile.steps.filter(step => step.dataType === 'core');
assert(core.length > 0);
const releases = core.flatMap(step => step.releaseCodes || []);
assert(releases.includes('eWaste:core-reference'));
assert(releases.includes(overlay.releaseCode));
console.log('Waste framework acceptance adoption validated');
