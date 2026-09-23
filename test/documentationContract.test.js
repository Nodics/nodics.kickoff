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
const projectProperties = require('../config/properties');
const kickoffCoreProperties = require('../modules/kickoffCore/config/properties');
const manifestEnvelope = require('../data/manifest.json');
const manifest = manifestEnvelope.sections.documentation;
const catalogue = require('../docs/catalogue.json');
const siteRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationSiteData'));
const pageRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationPageData'));
const routeRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationRouteData'));
const productRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationProductData'));
const navigationRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationNavigationData'));
const nodeRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationNodeData'));
const dashboardRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationDashboardData'));
const pageMetadataRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationPageMetadataData'));
const accessPolicyRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationAccessPolicyData'));
const publicationStateRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationPublicationStateData'));
const searchMetadataRecords = Object.values(require('../data/core-v001/records/documentation/kickoffDocumentationSearchMetadataData'));
const contentPackHeader = require('../data/core-v001/headers/kickoffDocumentationContentPackHeader');
const kickoffBackofficeCapabilityProvider = require('../modules/kickoffCore/src/service/defaultKickoffCoreBackofficeCapabilityService');
const kickoffBackofficeCapability = kickoffBackofficeCapabilityProvider.getCapability();

const configuration = require('./helpers/configuration');
const frameworkRoot = configuration.frameworkRoot;
const importDefaults = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/config/properties'));
const contentPackService = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/src/service/contentPack/defaultContentPackService'));
const backofficeContractService = require(path.join(frameworkRoot, 'nodics.platform/modules/backoffice/src/service/contract/defaultBackofficeContractService'));
const effective = configuration.merge({}, importDefaults, projectProperties, kickoffCoreProperties);
let contentPack, release;
const previousConfig = global.CONFIG, previousNodics = global.NODICS;
try {
    global.CONFIG = { get: key => effective[key] };
    global.NODICS = { getEnvironmentPath: () => root };
    assert.equal(contentPackService.resolvePackContext('kickoffDocumentation').enabled, false);
    effective.data.contentPacks.enabled = true; // Isolated authorized-runtime selection for read-only inspection.
    const context = contentPackService.resolvePackContext('kickoffDocumentation');
    contentPack = context.pack;
    release = contentPackService.inspectRelease(context);
} finally {
    global.CONFIG = previousConfig;
    global.NODICS = previousNodics;
}

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
assert.equal(release.available, true);
assert.equal(release.manifest.pack, catalogue.pack);
assert.equal(release.contentPath, path.join(root, 'data', manifest.contentPath));
assert.equal(contentPack.source.type, 'LOCAL_PROJECT');
assert.equal(contentPack.source.manifestPath, 'data/manifest.json');
assert.equal(contentPack.source.manifestSection, 'documentation');
assert.equal(contentPack.updatePolicy.sameVersionContentChange, 'REJECT');
assert.equal(contentPack.presentation.title, 'Nodics Kickoff documentation');
assert.equal(contentPack.presentation.retryAction, importDefaults.data.contentPacks.defaults.presentation.retryAction);
assert.equal(projectProperties.backofficeCapabilities, undefined, 'Retired capability configuration must not duplicate CMS-owned documentation');
assert.equal(kickoffCoreProperties.backofficeCapabilities, undefined, 'Retired capability configuration must not duplicate CMS-owned documentation');
assert.equal(backofficeContractService.validateBackofficeMetadata(kickoffBackofficeCapability), true);
assert.deepStrictEqual(
    kickoffBackofficeCapability.documentation.map(source => source.id),
    ['nodics-kickoff'],
    'Kickoff Core must expose the project documentation source to the BackOffice dashboard'
);
assert.strictEqual(kickoffBackofficeCapability.documentation[0].packCode, 'kickoffDocumentation');
assert.strictEqual(kickoffBackofficeCapability.documentation[0].initializationProfile, 'kickoffdocs');
assert.strictEqual(kickoffBackofficeCapability.documentation[0].site, 'kickoffDocumentationSite');
assert.strictEqual(kickoffBackofficeCapability.documentation[0].defaultPage, '/docs/nodics-kickoff');
assert.strictEqual(kickoffBackofficeCapability.navigation[0].id, 'documentation-nodics-kickoff');
assert.strictEqual(kickoffBackofficeCapability.navigation[0].route, '/docs/nodics-kickoff');
{
    const registered = [];
    const previousService = global.SERVICE;
    global.SERVICE = {
        DefaultModuleRegistrationAgentService: {
            registerBackofficeCapabilityProvider: function (moduleName, provider) {
                registered.push({ moduleName, provider });
                return true;
            }
        }
    };
    kickoffBackofficeCapabilityProvider.init();
    global.SERVICE = previousService;
    assert.strictEqual(registered.length, 1);
    assert.strictEqual(registered[0].moduleName, 'kickoffCore');
    assert.strictEqual(registered[0].provider, kickoffBackofficeCapabilityProvider);
}
assert.equal(productRecords[0].ownerFunctionalModule, catalogue.pack);
assert.equal(productRecords[0].site, manifest.sites[0]);

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

assert.strictEqual(productRecords.length, 1, 'Kickoff documentation must generate one documentation product');
assert.strictEqual(productRecords[0].contentCatalog, 'documentationContentCatalog');
assert.strictEqual(productRecords[0].site, 'kickoffDocumentationSite');
assert.strictEqual(navigationRecords.length, 1, 'Kickoff documentation must generate one documentation navigation tree');
assert.strictEqual(navigationRecords[0].product, productRecords[0].code);

const nodeCodes = new Set(nodeRecords.map(node => node.code));
assert(nodeCodes.has('kickoffDocsNodeRoot'), 'Kickoff documentation must generate a root node');
assert(
    !Object.prototype.hasOwnProperty.call(nodeRecords.find(node => node.code === 'kickoffDocsNodeRoot'), 'parentNode'),
    'Root documentation nodes must omit parentNode instead of storing null for fresh-schema imports'
);
catalogue.navigationSections.forEach(section => {
    const node = nodeRecords.find(candidate =>
        candidate.nodeLevel === 'SECTION' &&
        candidate.nodeTitle === section.title &&
        candidate.parentNode === 'kickoffDocsNodeRoot'
    );
    assert(node, section.code + ' must generate a backend documentation section node');
    assert(node.nodeContentArea, section.code + ' must expose a dashboard-ready content area');
});

const metadataByDocumentId = new Map(pageMetadataRecords.map(page => [page.documentId, page]));
catalogue.documents.forEach(document => {
    const metadata = metadataByDocumentId.get(document.id);
    assert(metadata, document.id + ' must generate cmsDocumentationPage metadata');
    assert(metadata.businessSummary, document.id + ' must expose business summary metadata');
    assert(metadata.technicalSummary, document.id + ' must expose technical summary metadata');
    assert.deepStrictEqual(
        metadata.visualRequirements,
        document.visualRequirements,
        document.id + ' must preserve declared visual requirements'
    );
    assert.strictEqual(metadata.sourceRepository, 'nodics.kickoff');
    assert.strictEqual(metadata.accessMode, document.accessMode);
    const pageLinkNode = nodeRecords.find(node =>
        node.nodeLevel === 'PAGE_LINK' &&
        node.targetDocumentationPage === metadata.code &&
        node.targetPage === metadata.targetPage &&
        node.targetRoute === metadata.targetRoute
    );
    assert(pageLinkNode, document.id + ' must generate a page-link node linked to CMS page and route');
    assert(
        nodeRecords.some(node =>
            node.nodeLevel === 'SECTION' &&
            node.code === pageLinkNode.parentNode
        ),
        document.id + ' page-link node must sit directly under a documentation section'
    );
});

assert(
    nodeRecords.every(node => !['GROUP', 'SUBGROUP', 'TOPIC'].includes(node.nodeLevel)),
    'Kickoff documentation navigation must stay at two visible levels: section and page link'
);

dashboardRecords.forEach(dashboard => {
    assert(dashboard.summary, dashboard.code + ' must expose a hierarchy dashboard summary');
    assert(dashboard.contentArea, dashboard.code + ' must expose a hierarchy dashboard content area');
    assert(Array.isArray(dashboard.cards), dashboard.code + ' must expose child summary cards');
});
accessPolicyRecords.forEach(policy => {
    assert(['PUBLIC', 'AUTHENTICATED', 'ROLE_BASED'].includes(policy.accessMode));
    assert(Array.isArray(policy.lifecycleVisibility));
});
publicationStateRecords.forEach(state => {
    assert(state.checksum, state.code + ' must carry publication checksum evidence');
    assert(['DRAFT', 'STAGED', 'REVIEW_IN_PROGRESS', 'CHANGES_REQUESTED', 'APPROVED', 'REJECTED', 'ONLINE', 'ARCHIVED', 'RETIRED', 'ROLLBACK_PENDING', 'PUBLICATION_FAILED'].includes(state.lifecycleState));
    [
        'onlineVersion',
        'previousOnlineVersion',
        'submittedBy',
        'submittedAt',
        'reviewer',
        'reviewedAt',
        'approver',
        'approvedAt',
        'publisher',
        'publishedAt'
    ].forEach(field => {
        assert(
            state[field] !== null,
            state.code + ' must omit optional string field ' + field + ' instead of storing null for fresh-schema imports'
        );
    });
});
searchMetadataRecords.forEach(metadata => {
    assert(metadata.searchText, metadata.code + ' must expose current searchable text');
    assert.strictEqual(metadata.indexState, 'INDEX_READY');
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
    fs.existsSync(path.join(root, 'data/core-v001/source/documentation')),
    false,
    'legacy documentation source must not remain under the generated data tree'
);
assert(
    fs.existsSync(path.join(frameworkRoot, 'nodics.accelerators/modules/nexus/modules/nexus.web/docs/README.md')),
    'Nexus application documentation must have a module-owned docs boundary'
);

[
    'AGENTS.md',
    'README.md',
    'modules/AGENTS.md'
].forEach(relativePath => {
    const content = fs.readFileSync(path.join(root, relativePath), 'utf8');
    [
        'AI tool',
        'repository',
        'AGENTS.md'
    ].forEach(clause => {
        assert(content.includes(clause), relativePath + ' must preserve AI tool entry guidance: ' + clause);
    });
});

console.log('Kickoff documentation contract validated');
