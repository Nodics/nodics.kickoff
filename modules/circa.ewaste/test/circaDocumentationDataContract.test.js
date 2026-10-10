/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module circa.ewaste/test/circaDocumentationDataContract @description Verifies preserved Circa guides are CMS data in the initial release, without inventing publication or guide-depth qualification. @layer test @owner circa.ewaste */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { frameworkRoot } = require('../../../test/helpers/configuration');
const contract = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/defaultApplicationDocumentationContractService'));

test('Circa preserves four source-reviewed staged guides with optional import and declared graph checksums', () => {
    const root = path.join(frameworkRoot, 'nodics.accelerators/modules/waste/modules/eWaste');
    assert.equal(require('../data/manifest.json').sections.documentation, undefined);
    const section = require(path.join(root, 'data/manifest.json')).sections.referenceDocumentation;
    assert.equal(section.sourceMode, 'cms-records');
    assert.equal(section.contentPath, 'docs-v001');
    contract.validateReleaseSection(section);
    for (const [file, hash] of Object.entries(section.generatedHashes)) {
        assert.equal(contract.sha256(fs.readFileSync(path.join(root, 'data', file))), hash, file);
    }
    const catalogue = contract.readDataCatalogue(root, 'referenceDocumentation');
    assert.equal(catalogue.documents.length, 4);
    // Content validation is not editorial or publication approval.
    contract.validateDataRelease(root, 'referenceDocumentation');
    for (const document of catalogue.documents) {
        assert.equal(document.lifecycleState, 'STAGED');
        assert.equal(document.sourceOwner, 'eWaste');
        assert(document.blocks.length > 5);
        assert(document.body.length > 500);
    }
    const routes = contract.readReleaseRecords(catalogue.releaseComposition, 'Route').records;
    assert(routes.every(route => route.active === true));
    assert(catalogue.documents.some(document => document.body.includes('Documentation import receipts must remain separate from business-release receipts.')));
});

test('canonical Circa inventory separates outlet scopes, role adoption and live qualification', () => {
    const root = path.join(frameworkRoot, 'nodics.accelerators/modules/waste/modules/eWaste');
    const release = contract.readDocumentationRelease(root, 'documentation');
    const components = contract.readReleaseRecords(release, 'Component').records;
    const pages = contract.readReleaseRecords(release, 'PageMetadata').records;
    const searches = contract.readReleaseRecords(release, 'SearchMetadata').records;
    const manifest = require('../data/manifest.json');
    const inventory = components.find(row => row.properties.code === 'accelerators.circa-source-inventory').properties;
    const table = inventory.blocks.find(block => block.kind === 'table' && block.headers[0] === 'Section');
    assert.deepEqual(table.rows.map(row => row[0]).sort(), Object.keys(manifest.sections).sort());
    assert(inventory.searchText.includes(`All ${Object.keys(manifest.sections).length} current business manifest sections`));
    for (const name of ['circaLocalUnusedRefundExceptionRole', 'circaLocalUnusedRefundExceptionStaffAssignment']) {
        const section = manifest.sections[name];
        assert.deepEqual(table.rows.find(row => row[0] === name).slice(1, 4),
            [section.sourceRoot, section.version, section.destinationRole]);
        for (const file of Object.keys(section.files)) {
            assert(inventory.sourceEvidence.some(evidence => evidence.endsWith('/data/' + file)), file);
        }
    }
    for (const boundary of ['commerce.refund.exception.adjudicate', 'circa-online-administrator',
        'original unused 50-POINTS GP-A01 purchase', 'Adjudication itself moves no POINTS',
        'No new credit', 'redeemed-benefit reversal', 'Docker and other runtimes remain disabled']) {
        assert(inventory.searchText.includes(boundary), boundary);
    }
    const outlet = table.rows.find(row => row[0] === 'circaMerchantOutletAccess');
    assert.deepEqual(outlet.slice(1, 4), ['sample-v001', '0.0.1', 'PLATFORM']);
    const scopes = Object.values(require('../data/sample-v001/outlet-access/records/circaMerchantOutletScopeData'));
    const scopeTable = inventory.blocks.find(block => block.kind === 'table' && block.headers[2] === 'Exact Store scope');
    assert.deepEqual(scopeTable.rows.map(row => row.slice(1)).sort(), scopes.map(row => [row.enterpriseCode, row.scopeCode]).sort());
    const files = Object.keys(manifest.sections.circaMerchantOutletAccess.files);
    assert.equal(files.length, 2);
    for (const file of files) {
        assert(inventory.sourceEvidence.some(evidence => evidence.endsWith('/' + file)), file);
    }
    for (const boundary of ['COMMERCE_SETUP_PUBLISHER', 'COMMERCE_COUPON_ISSUER', 'MERCHANT_OPERATOR',
        'commerce.coupon.pos.redeem', 'capabilityCode digitalCore', 'no role', 'Separate human seller-consent', 'live qualification']) {
        assert(inventory.searchText.includes(boundary), boundary);
    }
    for (const component of components.filter(row => ['accelerators.circa-source-inventory', 'accelerators.circa-enterprise-reference'].includes(row.properties.code))) {
        const properties = component.properties;
        const body = '# ' + properties.title + '\n\n' + contract.documentationText(properties.blocks);
        const page = pages.find(row => row.articleComponent === component.code);
        const search = searches.find(row => row.code === page.searchMetadata);
        assert.equal(properties.source.checksum, contract.sha256(body));
        assert.equal(properties.source.wordCount, contract.countWords(body));
        assert.equal(page.sourceChecksum, properties.source.checksum);
        assert.equal(page.sourcePath, properties.source.sourcePath);
        assert.equal(page.sourceWordCount, properties.source.wordCount);
        assert.deepEqual(page.sourceEvidence, properties.sourceEvidence);
        assert.equal(search.searchText, properties.searchText);
    }
    contract.validateDataRelease(root, 'documentation');
});
