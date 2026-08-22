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
const manifestEnvelope = require('../data/manifest.json');
const manifest = manifestEnvelope.sections.documentation;
const catalogue = require('../docs/catalogue.json');
const siteRecords = Object.values(require('../data/core/data/documentation/kickoffDocumentationSiteData'));
const pageRecords = Object.values(require('../data/core/data/documentation/kickoffDocumentationPageData'));
const routeRecords = Object.values(require('../data/core/data/documentation/kickoffDocumentationRouteData'));
const contentPackHeader = require('../data/core/headers/kickoffDocumentationContentPackHeader');

const capability = properties.backofficeCapabilities['nodics.kickoff'];
const contentPack = properties.data.contentPacks.packs.kickoffDocumentation;
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
assert.strictEqual(manifestEnvelope.contractVersion, 2);
assert.strictEqual(manifestEnvelope.module, 'nodics.kickoff');
assert.strictEqual(manifest.pack, 'nodics.kickoff');
assert.strictEqual(manifest.version, catalogue.version);
assert.strictEqual(manifest.sourceAuthority, 'docs/catalogue.json');
assert.strictEqual(manifest.installationPolicy, 'OPTIONAL_AXIS_INITIATED');
assert.deepStrictEqual(manifest.sites, ['kickoffDocumentationSite']);
assert.strictEqual(manifest.pages, catalogue.documents.length);
assert.strictEqual(contentPack.enabled, true);
assert.strictEqual(contentPack.manifestPack, 'nodics.kickoff');
assert.deepStrictEqual(contentPack.source, {
    type: 'LOCAL_PROJECT',
    contentPath: 'data/core',
    manifestPath: 'data/manifest.json',
    manifestSection: 'documentation'
});
assert.strictEqual(contentPack.updatePolicy.sameVersionContentChange, 'REJECT');
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
assert.strictEqual(navigationItem.group.order, 1600);
assert.strictEqual(navigationItem.featureState, 'ACTIVE');

const importOrder = Object.keys(contentPackHeader.cms);
assert(
    importOrder.indexOf('kickoffDocumentationTemplateData') <
        importOrder.indexOf('kickoffDocumentationSlotData'),
    'documentation templates must be imported before their dependent slot definitions'
);

const siteCodes = new Set(siteRecords.map(site => site.code));
siteRecords.forEach(site => {
    assert.strictEqual(site.catalog, 'documentationContentCatalog',
        site.code + ' must use the shared documentation content catalog');
});
pageRecords.forEach(page => {
    const pageSites = Array.isArray(page.cmsSite) ? page.cmsSite : [];
    assert(pageSites.length > 0, page.code + ' must declare CMS site ownership');
    pageSites.forEach(siteCode => assert(siteCodes.has(siteCode),
        page.code + ' references unknown CMS site ' + siteCode));
});
routeRecords.forEach(route => {
    assert(siteCodes.has(route.site), route.code + ' references unknown CMS site ' + route.site);
});

Object.entries(manifest.generatedHashes).forEach(([relativePath, hash]) => {
    assert(fs.existsSync(path.join(root, 'data', relativePath)), relativePath + ' must exist');
    assert.strictEqual(typeof hash, 'string');
    assert.strictEqual(hash.length, 64);
});

catalogue.documents.forEach(document => {
    assert(
        document.content.startsWith('docs/pages/'),
        document.id + ' must use the repository-owned docs source boundary'
    );
    assertDocumentationDepth(document);
});
assert.strictEqual(
    fs.existsSync(path.join(root, 'data/core/source/documentation')),
    false,
    'legacy documentation source must not remain under the generated data tree'
);
assert(
    fs.existsSync(path.join(root, 'modules/nexus.web/modules/nexusWebData/docs/README.md')),
    'Nexus application documentation must have a module-owned docs boundary'
);

console.log('Kickoff documentation contract validated');
