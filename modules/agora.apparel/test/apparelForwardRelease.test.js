/*
 * Copyright (c) 2026 Nodics All rights reserved.
 * This source code is licensed under the license found in the LICENSE file
 * in the root directory of this source tree.
 */

/** @module agora.apparel/test/apparelForwardRelease @description Verifies the consolidated prerelease baseline preserves the corrected Commerce search binding and declared record bytes. @layer test @owner agora.apparel */
const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const dataRoot = path.resolve(__dirname, '../data');
const manifest = require('../data/manifest.json');

test('unreleased Apparel baseline retains the current Commerce search binding in v001', () => {
    const active = manifest.sections.agoraApparelCommerceCatalog;
    assert.equal(active.version, '0.0.1');
    assert.equal(active.sourceRoot, 'sample-v001');
    assert.equal(manifest.retainedRoots, undefined);
    for (const [file, hash] of Object.entries(active.files)) {
        assert(file.startsWith('sample-v001/'));
        assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(dataRoot, file))).digest('hex'), hash);
    }
    const header = require('../data/sample-v001/commerce/headers/commerceSearch/agoraApparelCommerceSearchHeader');
    const entry = header.commerceSearchCore.agoraApparelCommerceSearchRuleData;
    assert.equal(entry.options.dataFilePrefix, 'agoraApparelCommerceSearchRuleData');
    assert.equal(entry.options.schemaName, 'commerceSearchRule');
    const matches = Object.keys(active.files).filter(file => file.includes('/records/') && path.basename(file).startsWith(entry.options.dataFilePrefix));
    assert.deepEqual(matches, ['sample-v001/commerce/records/commerceSearch/agoraApparelCommerceSearchRuleData.js']);
});
