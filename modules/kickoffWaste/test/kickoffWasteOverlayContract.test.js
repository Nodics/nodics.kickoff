/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffWaste/test/kickoffWasteOverlayContract @description Verifies Kickoff-owned Waste overlay data extends eWaste without owning framework concerns. @layer test @owner kickoffWaste */
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '../../..');
const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const contributionPolicy = require(path.join(frameworkRoot, 'nodics.waste/modules/wasteCore/src/service/defaultWasteDataContributionPolicyService'));
const moduleRoot = path.resolve(__dirname, '..');
const dataRoot = path.join(moduleRoot, 'data');
const recordsRoot = path.join(dataRoot, 'core-v001/records/waste');
const pkg = require(path.join(moduleRoot, 'package.json'));
const manifest = require(path.join(dataRoot, 'manifest.json'));
const header = require(path.join(dataRoot, 'core-v001/headers/waste/kickoffWasteOverlayHeader'));
const section = manifest.sections['project-reference'];
const eWasteRoot = path.join(frameworkRoot, 'nodics.accelerators/modules/waste/modules/eWaste');
const eWasteCategories = Object.values(require(path.join(eWasteRoot, 'data/core-v001/records/waste/eWasteCategoryData')));
const eWastePresets = Object.values(require(path.join(eWasteRoot, 'data/core-v001/records/waste/eWasteCollectionPresetData')));
const kickoffCategories = Object.values(require(path.join(recordsRoot, 'kickoffWasteCategoryData')));
const kickoffPresets = Object.values(require(path.join(recordsRoot, 'kickoffWasteCollectionPresetData')));
const kickoffRules = Object.values(require(path.join(recordsRoot, 'kickoffWasteAcceptanceRuleData')));
const kickoffImpactProfiles = Object.values(require(path.join(recordsRoot, 'kickoffWasteImpactProfileData')));

assert.equal(pkg.nodics.kind, 'capability');
assert.deepEqual(pkg.nodics.extends, ['eWaste']);
assert.equal(pkg.nodics.runtime.router, false);
assert.equal(fs.existsSync(path.join(moduleRoot, 'src')), false, 'Kickoff overlay must not copy Waste runtime source');
assert.equal(manifest.contractVersion, 2);
assert.equal(manifest.module, 'kickoffWaste');
assert.equal(section.dataType, 'core');
assert.equal(section.sourceRoot, 'core-v001');
assert.equal(contributionPolicy.validateManifestSection(section).destinationRole, 'WASTE');
assert.equal(contributionPolicy.validateHeader(header).length, 4);

Object.keys(section.files).forEach(function (relativeFilePath) {
    const absoluteFilePath = path.join(dataRoot, relativeFilePath);
    const actualHash = crypto.createHash('sha256').update(fs.readFileSync(absoluteFilePath)).digest('hex');
    assert.equal(actualHash, section.files[relativeFilePath], relativeFilePath + ' checksum must match manifest');
});

kickoffCategories.concat(kickoffPresets, kickoffRules, kickoffImpactProfiles).forEach(function (record) {
    contributionPolicy.validateRecord(record, 'PROJECT');
});

const effectiveCategories = contributionPolicy.resolveByCode([
    { moduleName: 'eWaste', layerKind: 'SCENARIO_ACCELERATOR', records: eWasteCategories },
    { moduleName: 'kickoffWaste', layerKind: 'PROJECT', records: kickoffCategories }
]);
const effectivePresets = contributionPolicy.resolveByCode([
    { moduleName: 'eWaste', layerKind: 'SCENARIO_ACCELERATOR', records: eWastePresets },
    { moduleName: 'kickoffWaste', layerKind: 'PROJECT', records: kickoffPresets }
]);

assert.equal(effectiveCategories.MOBILE_DEVICE.name.en, 'Kickoff Mobile Device');
assert.equal(effectiveCategories.MOBILE_DEVICE._contributionLayer, 'PROJECT');
assert.equal(effectiveCategories.SMART_HOME_DEVICE.familyCode, 'ELECTRONICS');
assert.equal(effectivePresets.EWASTE_DROP_OFF_STANDARD.name.en, 'Kickoff E-Waste Drop-Off');
assert(effectivePresets.EWASTE_DROP_OFF_STANDARD.acceptanceRuleCodes.includes('KICKOFF_DROP_OFF_SMART_HOME'));
assert.equal(effectivePresets.KICKOFF_MALL_DROP_OFF.operatingMode, 'DROP_OFF');

assert.throws(function () {
    contributionPolicy.validateRecord({ code: 'BAD_KICKOFF_WASTE_REWARD', rewardFormula: { value: 10 } }, 'PROJECT');
}, function (error) {
    return error.code === 'ERR_WASTE_DATA_RECORD_FIELD';
});

console.log('Kickoff Waste overlay contract validated');
