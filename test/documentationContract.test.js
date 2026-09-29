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
const recordsPath = path.join(root, 'data', manifest.contentPath, 'records/documentation');
const siteRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationSiteData')));
const pageRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationPageData')));
const routeRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationRouteData')));
const productRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationProductData')));
const navigationRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationNavigationData')));
const nodeRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationNodeData')));
const dashboardRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationDashboardData')));
const pageMetadataRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationPageMetadataData')));
const accessPolicyRecords = Object.values(require(path.join(recordsPath, 'kickoffDocumentationAccessPolicyData')));

// Kickoff's onboarding path must work both before installation and in its CMS pack.
const documentsById = new Map(catalogue.documents.map(document => [document.id, document]));
const readingPath = [
    ['kickoff.overview', 'kickoff.local-setup-to-live'],
    ['kickoff.overview', 'kickoff.local-acceptance'],
    ['kickoff.local-setup-to-live', 'kickoff.local-acceptance'],
    ['kickoff.local-acceptance', 'kickoff.local-setup-to-live'],
    ['kickoff.local-acceptance', 'kickoff.configuration-inheritance'],
    ['kickoff.local-acceptance', 'kickoff.local-publishing-operations'],
    ['kickoff.local-acceptance', 'kickoff.deployment-qualification'],
    ['kickoff.deployment-qualification', 'kickoff.local-acceptance'],
];
for (const [source, target] of readingPath) {
    assert(documentsById.get(source).relatedPages.includes(target), source + ' must link to ' + target);
    assert(pageMetadataRecords.find(page => page.documentId === source).relatedPages.includes(target),
        source + ' must publish its related-page link to ' + target);
}
const checklist = documentsById.get('kickoff.local-acceptance');
assert.strictEqual(checklist.navigationSectionCode, 'run-kickoff-locally');
assert.strictEqual(checklist.navigationGroupCode, 'acceptance-and-verification');
for (const audience of ['developer', 'administrator', 'operator', 'qa', 'architect']) {
    assert(checklist.audience.includes(audience));
}
for (const id of ['kickoff.local-setup-to-live', 'kickoff.local-acceptance', 'kickoff.deployment-qualification']) {
    assert(fs.readFileSync(path.join(root, 'README.md'), 'utf8').includes('](' + documentsById.get(id).content + ')'));
}
assert(catalogue.documents.every(document => !document.content.startsWith('docs/evidence/')),
    'Dated extraction evidence must not be presented as a current setup page');
assert(catalogue.documents.every(document => !document.sourceEvidence.includes('nodics.project.json')));

const configuration = require('./helpers/configuration');
const frameworkRoot = configuration.frameworkRoot;
const importDefaults = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/config/properties'));
const contentPackService = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/src/service/contentPack/defaultContentPackService'));
const documentationService = require(path.join(frameworkRoot, 'nodics.wcms/modules/cms/src/service/documentation/defaultCmsDocumentationGovernanceService'));
const initializationService = require(path.join(frameworkRoot, 'nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService'));
const effective = configuration.merge({}, importDefaults, projectProperties, kickoffCoreProperties);
let contentPack, release;
const previousConfig = global.CONFIG, previousNodics = global.NODICS;
try {
    global.CONFIG = { get: key => effective[key] };
    global.NODICS = { getEnvironmentPath: () => root };
    effective.data.contentPacks.enabled = true; // Isolated authorized-runtime selection for read-only inspection.
    const context = contentPackService.resolvePackContext('kickoffDocumentation');
    contentPack = context.pack;
    release = contentPackService.inspectRelease(context);
} finally {
    global.CONFIG = previousConfig;
    global.NODICS = previousNodics;
}

const documentationContract = require(path.join(frameworkRoot,
    'nodics.foundation/modules/nTooling/src/service/defaultApplicationDocumentationContractService'));
documentationContract.validateCatalogue({ ownerRoot: root, catalogue,
    requireNavigationSections: true, requireEnterpriseMetadata: true, validateContentQuality: true });
const customizationGuide = fs.readFileSync(path.join(root, 'docs/pages/customization-guide.md'), 'utf8');
assert(!customizationGuide.includes('nodics.environment.json'), 'Use existing deployment properties, not a retired descriptor');
const circaReadme = fs.readFileSync(path.join(root, 'modules/circa.ewaste/README.md'), 'utf8');
assert(circaReadme.includes('Accuracy is optional observation metadata, never an arrival gate'));
const circaContract = fs.readFileSync(path.join(root, 'modules/circa.ewaste/llm/contracts/circa-application.md'), 'utf8');
assert(circaContract.includes('It does own Circa branding'));

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
assert.equal(contentPack.presentation.title, 'Nodics Kickoff documentation');
assert.equal(projectProperties.backofficeCapabilities, undefined, 'Retired capability configuration must not duplicate CMS-owned documentation');
assert.equal(kickoffCoreProperties.backofficeCapabilities, undefined, 'Retired capability configuration must not duplicate CMS-owned documentation');
// CMS records own documentation identity/navigation; BackOffice discovers setup profiles.
assert.strictEqual(catalogue.publication.sectionCode, 'nodics-kickoff');
assert.strictEqual(catalogue.publication.routeRoot, '/docs/nodics-kickoff');
assert.strictEqual(productRecords[0].code, 'kickoffDocumentationProduct');
assert.strictEqual(productRecords[0].publicRootPath, catalogue.publication.publicRootPath);
assert.strictEqual(productRecords[0].publicRootPath, catalogue.publication.routeRoot,
    'Kickoff canonical CMS product discovery must resolve its published landing route');
assert.strictEqual(navigationRecords[0].code, 'kickoffDocumentationNavigationTree');
const landingRoute = routeRecords.find(route => route.path === catalogue.publication.routeRoot);
assert(landingRoute, 'The project documentation landing route must remain published in its CMS pack');
assert.strictEqual(landingRoute.site, 'kickoffDocumentationSite');
assert(pageRecords.some(page => page.code === landingRoute.page));

const projection = documentationService.renderProjection({
    documentation: {
        channel: 'EMPLOYEE',
        principal: { authenticated: true },
        records: {
            products: productRecords, navigation: navigationRecords, nodes: nodeRecords,
            dashboards: dashboardRecords, pages: pageMetadataRecords, accessPolicies: accessPolicyRecords
        }
    }
});
assert.strictEqual(projection.contract, 'cms.documentation.render-projection/v1');
assert.deepStrictEqual(projection.navigation.map(node => node.code), ['kickoffDocsNodeRoot']);
assert.deepStrictEqual(
    projection.pages.map(page => page.documentId).sort(),
    catalogue.documents.map(document => document.id).sort(),
    'CMS must expose every authored project document through its real access-filtered projection'
);
const projectedLinks = projection.navigation.flatMap(rootNode =>
    rootNode.children.flatMap(section => section.children));
projection.pages.forEach(page => {
    assert(projectedLinks.some(node =>
        node.targetDocumentationPage === page.code && node.targetRoute === page.targetRoute),
    page.documentId + ' must retain its CMS-owned navigation ID and route');
    assert(routeRecords.some(route => route.code === page.targetRoute && route.page === page.targetPage),
        page.documentId + ' must resolve to its generated CMS page');
});
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    const runtime = configuration.loadRuntime('platformServer', environment);
    const savedConfig = global.CONFIG;
    try {
        global.CONFIG = { get: key => runtime[key] };
        const profiles = initializationService.profiles().filter(profile => profile.code === 'kickoffdocs');
        assert.strictEqual(profiles.length, 1, environment + ' must discover exactly one project documentation profile');
        const profile = profiles[0];
        assert.strictEqual(profile.type, 'DOCUMENTATION_BUNDLE');
        assert.strictEqual(profile.owner, catalogue.pack);
        assert.strictEqual(profile.siteCode, landingRoute.site);
        assert.strictEqual(profile.contentPackCode, 'kickoffDocumentation');
        assert(profile.dataPackages.some(pack =>
            pack.code === 'kickoffDocumentation' && pack.kind === 'CONTENT_PACK' &&
            pack.classification === 'DOCUMENTATION_CONTENT_PACK' && pack.trigger === 'USER'));
        assert.strictEqual(profile.activationPolicy.approvalRequiredForOnline, true);
    } finally {
        global.CONFIG = savedConfig;
    }
}
assert.equal(productRecords[0].ownerFunctionalModule, catalogue.pack);
assert.equal(productRecords[0].site, manifest.sites[0]);

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

catalogue.documents.forEach(document => {
    assert(
        document.content.startsWith('docs/pages/'),
        document.id + ' must use the repository-owned docs source boundary'
    );
});
assert.strictEqual(
    fs.existsSync(path.join(root, 'data', manifest.contentPath, 'source/documentation')),
    false,
    'legacy documentation source must not remain under the generated data tree'
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
