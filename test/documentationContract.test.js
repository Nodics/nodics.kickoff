/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const properties = require('../config/properties');
const manifest = require('../manifest/docs-content-pack.json');
const catalogue = require('../data/core/source/documentation/catalogue.json');

const capability = properties.backofficeCapabilities['nodics.kickoff'];
const source = capability.documentation[0];
const navigationItem = capability.navigation[0];

function markdownWordCount(value) {
    return (value.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu) || []).length;
}

function assertDocumentationDepth(document) {
    const body = fs.readFileSync(path.join(root, document.content), 'utf8');
    const wordCount = markdownWordCount(body);
    const sectionCount = (body.match(/^## /gm) || []).length;
    assert(
        wordCount >= 500,
        document.id + ' must stay beginner-level and detailed; found ' + wordCount + ' words'
    );
    assert(
        sectionCount >= 5,
        document.id + ' must keep clear documentation sections; found ' + sectionCount
    );
    assert(
        /^## Common mistakes\b/im.test(body),
        document.id + ' must explain common project-documentation mistakes'
    );
    assert(
        /^## Verification\b/im.test(body),
        document.id + ' must explain how to verify the documented behavior'
    );
    assert(
        /\bbeginners?\b/i.test(body) ||
        /\bdeveloper\b/i.test(body) ||
        /\bdevelopers\b/i.test(body) ||
        /\boperator\b/i.test(body),
        document.id + ' must name a clear beginner, developer, or operator audience'
    );
}

assert.strictEqual(catalogue.pack, 'nodics.kickoff');
assert.strictEqual(manifest.pack, 'nodics.kickoff');
assert.strictEqual(manifest.version, catalogue.version);
assert.strictEqual(manifest.contractVersion, 1);
assert.deepStrictEqual(manifest.sites, ['kickoffDocumentationSite']);
assert.strictEqual(manifest.pages, catalogue.documents.length);
assert.strictEqual(capability.enabled, true);
assert.deepStrictEqual(capability.roles, ['UI_COMPOSITION_PROVIDER']);
assert.strictEqual(source.id, 'nodics-kickoff');
assert.strictEqual(source.label, 'Nodics Kickoff');
assert.strictEqual(source.route, '/docs/nodics-kickoff');
assert.strictEqual(source.site, 'kickoffDocumentationSite');
assert.strictEqual(source.catalog, 'documentationContentCatalog');
assert.strictEqual(source.defaultPage, '/docs/nodics-kickoff');
assert.strictEqual(source.packCode, 'kickoffDocumentation');
assert.strictEqual(navigationItem.id, 'documentation-nodics-kickoff');
assert.strictEqual(navigationItem.parentId, 'documentation');
assert.strictEqual(navigationItem.parentModuleName, 'backoffice');
assert.strictEqual(navigationItem.label, 'Nodics Kickoff');
assert.strictEqual(navigationItem.route, '/docs/nodics-kickoff');
assert.strictEqual(navigationItem.group.id, 'documentation');
assert.strictEqual(navigationItem.featureState, 'ACTIVE');

Object.entries(manifest.generatedHashes).forEach(([relativePath, hash]) => {
    assert(fs.existsSync(path.join(root, relativePath)), relativePath + ' must exist');
    assert.strictEqual(typeof hash, 'string');
    assert.strictEqual(hash.length, 64);
});

catalogue.documents.forEach(assertDocumentationDepth);

console.log('Kickoff documentation contract validated');
