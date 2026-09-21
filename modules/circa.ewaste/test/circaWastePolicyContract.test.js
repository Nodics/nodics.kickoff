/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/test/circaWastePolicyContract @description Verifies Circa-owned Waste policy data extends eWaste without owning framework concerns. @layer test @owner circa.ewaste */
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '../../..');
const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const contributionPolicy = require(path.join(frameworkRoot, 'nodics.waste/modules/wasteCore/src/service/defaultWasteDataContributionPolicyService'));
const moduleRoot = path.resolve(__dirname, '..');
const dataRoot = path.join(moduleRoot, 'data');
const recordsRoot = path.join(dataRoot, 'core-v001/waste-policy/records');
const pkg = require(path.join(moduleRoot, 'package.json'));
const manifest = require(path.join(dataRoot, 'manifest.json'));
const header = require(path.join(dataRoot, 'core-v001/waste-policy/headers/circaWastePolicyHeader'));
const section = manifest.sections['waste-policy'];
const eWasteRoot = path.join(frameworkRoot, 'nodics.accelerators/modules/waste/modules/eWaste');
const eWasteCategories = Object.values(require(path.join(eWasteRoot, 'data/core-v001/records/waste/eWasteCategoryData')));
const eWastePresets = Object.values(require(path.join(eWasteRoot, 'data/core-v001/records/waste/eWasteCollectionPresetData')));
const circaCategories = Object.values(require(path.join(recordsRoot, 'circaWastePolicyCategoryData')));
const circaPresets = Object.values(require(path.join(recordsRoot, 'circaWastePolicyCollectionPresetData')));
const circaRules = Object.values(require(path.join(recordsRoot, 'circaWastePolicyAcceptanceRuleData')));
const circaImpactProfiles = Object.values(require(path.join(recordsRoot, 'circaWastePolicyImpactProfileData')));

assert.equal(pkg.nodics.kind, 'capability');
assert.equal(pkg.name, 'circa.ewaste');
assert.equal(pkg.nodics.runtime.router, true);
assert.equal(manifest.contractVersion, 2);
assert.equal(manifest.module, 'circa.ewaste');
assert.equal(section.dataType, 'core');
assert.equal(section.sourceRoot, 'core-v001');
assert.equal(contributionPolicy.validateManifestSection(section).destinationRole, 'WASTE');
assert.equal(contributionPolicy.validateHeader(header).length, 4);

Object.keys(section.files).forEach(function (relativeFilePath) {
    const absoluteFilePath = path.join(dataRoot, relativeFilePath);
    const actualHash = crypto.createHash('sha256').update(fs.readFileSync(absoluteFilePath)).digest('hex');
    assert.equal(actualHash, section.files[relativeFilePath], relativeFilePath + ' checksum must match manifest');
});

circaCategories.concat(circaPresets, circaRules, circaImpactProfiles).forEach(function (record) {
    contributionPolicy.validateRecord(record, 'PROJECT');
});

const effectiveCategories = contributionPolicy.resolveByCode([
    { moduleName: 'eWaste', layerKind: 'SCENARIO_ACCELERATOR', records: eWasteCategories },
    { moduleName: 'circa.ewaste', layerKind: 'PROJECT', records: circaCategories }
]);
const effectivePresets = contributionPolicy.resolveByCode([
    { moduleName: 'eWaste', layerKind: 'SCENARIO_ACCELERATOR', records: eWastePresets },
    { moduleName: 'circa.ewaste', layerKind: 'PROJECT', records: circaPresets }
]);

assert.equal(effectiveCategories.MOBILE_DEVICE.name.en, 'Circa Mobile Device');
assert.equal(effectiveCategories.MOBILE_DEVICE._contributionLayer, 'PROJECT');
assert.equal(effectiveCategories.SMART_HOME_DEVICE.familyCode, 'ELECTRONICS');
assert.equal(effectivePresets.EWASTE_DROP_OFF_STANDARD.name.en, 'Circa E-Waste Drop-Off');
assert(effectivePresets.EWASTE_DROP_OFF_STANDARD.acceptanceRuleCodes.includes('CIRCA_DROP_OFF_SMART_HOME'));
assert.equal(effectivePresets.CIRCA_MALL_DROP_OFF.operatingMode, 'DROP_OFF');

assert.throws(function () {
    contributionPolicy.validateRecord({ code: 'BAD_CIRCA_WASTE_REWARD', rewardFormula: { value: 10 } }, 'PROJECT');
}, function (error) {
    return error.code === 'ERR_WASTE_DATA_RECORD_FIELD';
});

console.log('Circa Waste policy contract validated');
