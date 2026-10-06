/*
 * Copyright (c) 2026 Nodics All rights reserved.
 * This source code is licensed under the license found in the LICENSE file
 * in the root directory of this source tree.
 */

/** @module agora.apparel/test/apparelForwardRelease @description Verifies the real Apparel forward release, historical payload and corrected search binding. @layer test @owner agora.apparel */
const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const { frameworkRoot } = require('../../../test/helpers/configuration');
const release = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService'));
const dataRoot = path.resolve(__dirname, '../data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataRoot, 'manifest.json')));

test('Apparel retains 0.0.7 bytes and advances only the Commerce search header in 0.0.8', () => {
    const active = manifest.retainedRoots['sample-v003'].sections.agoraApparelCommerceCatalog;
    const retained = manifest.retainedRoots['sample-v002'];
    const previous = retained.sections.agoraApparelCommerceCatalog;
    assert.equal(previous.version, '0.0.7');
    assert.equal(active.version, '0.0.8');
    assert.equal(active.sourceRoot, 'sample-v003');
    assert.deepEqual(release.sourceRootFiles(dataRoot, 'sample-v002'), retained.files);
    assert.deepEqual([...release.validateRetainedRoots(dataRoot, manifest)], ['sample-v002', 'sample-v003', 'sample-v004']);
    const changed = [];
    for (const [file, hash] of Object.entries(previous.files)) {
        const successorFile = file.replace(/^sample-v002\//, 'sample-v003/');
        if (active.files[successorFile] !== hash) changed.push(successorFile);
    }
    assert.equal(Object.keys(active.files).length, Object.keys(previous.files).length);
    assert.deepEqual(changed, ['sample-v003/commerce/headers/commerceSearch/agoraApparelCommerceSearchHeader.js']);
    const header = require(path.join(dataRoot, changed[0]));
    const entry = header.commerceSearchCore.agoraApparelCommerceSearchRuleData;
    assert.equal(entry.options.dataFilePrefix, 'agoraApparelCommerceSearchRuleData');
    assert.equal(entry.options.schemaName, 'commerceSearchRule');
    const matches = Object.keys(active.files).filter(file => file.includes('/records/') && path.basename(file).startsWith(entry.options.dataFilePrefix));
    assert.deepEqual(matches, ['sample-v003/commerce/records/commerceSearch/agoraApparelCommerceSearchRuleData.js']);
    const oldHeader = require(path.join(dataRoot, 'sample-v002/commerce/headers/commerceSearch/agoraApparelCommerceSearchHeader.js'));
    assert.equal(oldHeader.commerceSearchCore.agoraCommerceSearchRuleData.options.dataFilePrefix, 'agoraCommerceSearchRuleData');
    assert.equal(retained.files['sample-v002/release.descriptor.json'], release.sourceRootFiles(dataRoot, 'sample-v003')['sample-v003/release.descriptor.json']);
});
