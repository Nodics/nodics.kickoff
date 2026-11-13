/*
    Nodics - Enterprice Micro-Services Management Framework
    Copyright (c) 2026 Nodics All rights reserved.
    This software is governed by the Nodics Source-Available Commercial License.
*/
"use strict";

/** @description Verifies effective reader bindings against optional installed-source manifests, without running imports. */
const assert = require("node:assert/strict");
const path = require("node:path");
const { test } = require("node:test");
const { frameworkRoot, loadRuntime } = require("./helpers/configuration");

test("every selected documentation profile has its own reachable reader binding", () => {
  const config = loadRuntime("platformServer", "kickoffLocal");
  const modules = path.join(frameworkRoot, "nodics.platform/modules");
  const backoffice = path.join(modules, "backoffice/src/service");
  const registry = require(path.join(backoffice, "registry/defaultBackofficeRegistryService"));
  const validator = require(path.join(backoffice, "contract/defaultBackofficeContractService"));
  const catalogue = {
    backoffice: require(path.join(backoffice, "defaultBackofficeBackofficeCapabilityService")).getCapability(),
    axis: require(path.join(modules, "axis/src/service/defaultAxisBackofficeCapabilityService")).getCapability(),
  };
  global.CONFIG = { get: key => config[key] };
  global.SERVICE = { DefaultBackofficeContractService: validator };
  const profiles = require(path.join(backoffice, "defaultBackofficeApplicationInitializationService")).profiles()
    .filter(profile => profile.type === "DOCUMENTATION_BUNDLE");
  const registered = registry.buildDocumentationSources(catalogue, {});
  const sources = registry.documentationReaderSources(registered, profiles, catalogue);
  assert.equal(profiles.length, 69);
  assert.equal(sources.length, profiles.length + 1);
  assert.deepEqual(new Set(sources.filter(source => source.guide === "project").map(s => s.projectId)), new Set(["kickoff"]));
  const project = sources.find(source => source.guide === "project");
  assert.equal(project.projectLabel, "Kickoff");
  assert.deepEqual(new Set(project.channelReferences.map(ref => ref.channelId)), new Set(["circa", "agora", "nexus"]));
  for (const ref of project.channelReferences)
    assert.equal(sources.find(s => s.id === ref.sourceId)?.guide, "framework");
  const filtered = registry.documentationReaderSources(registered, profiles.filter(p => p.code !== "circadocs"), catalogue);
  assert.ok(!filtered.find(source => source.id === project.id).channelReferences.some(ref => ref.sourceId === "circadocs"));
  for (const profile of profiles) {
    const matches = sources.filter(s => s.initializationProfile === profile.code);
    assert.equal(matches.length, 1, profile.code);
    const [source] = matches;
    assert.equal(source.site, profile.siteCode);
    assert.equal(source.packCode, profile.contentPackCode);
    const pack = config.data.contentPacks.packs[source.packCode];
    assert.ok(pack, source.packCode);
    const locator = pack.source;
    const repository = locator.repositoryName === "nodics.ai" ? frameworkRoot :
      locator.repositoryName ? path.join(frameworkRoot, locator.repositoryName) : path.resolve(__dirname, "..");
    const manifestPath = path.join(repository, locator.manifestPath || "data/manifest.json");
    const section = require(manifestPath).sections[locator.manifestSection];
    const paths = Object.keys(section.generatedHashes || {}).filter(file => file.endsWith("RouteData.js"))
      .flatMap(file => Object.values(require(path.resolve(path.dirname(manifestPath), file))))
      .filter(record => record.site === source.site && record.active !== false)
      .map(record => record.path);
    assert.ok(paths.includes(source.route), profile.code + " missing landing route");
    for (const route of source.articleRoutes || []) assert.ok(paths.includes(route), route);
    for (const route of paths.filter(p => !["/docs", "/docs/framework"].includes(p)))
      assert.ok(route === source.route || route.startsWith(source.route + "/") ||
        source.articleRoutes?.includes(route), profile.code + " unreachable " + route);
  }
  const referenceTargets = ["framework", "nodics-axis", project.id, "unavailable"];
  const configuredRefs = referenceTargets.map(sourceId => ({ sourceId, channelId: "test", channelLabel: "Test" }));
  const customProject = { ...project, channelReferences: configuredRefs };
  const authorized = registry.documentationReaderSources([...registered, customProject], [], catalogue);
  assert.deepEqual(authorized.find(s => s.id === project.id).channelReferences.map(ref => ref.sourceId),
    ["framework", "nodics-axis"]);
  assert.deepEqual(registry.documentationReaderSources([], profiles, catalogue), []);
});

test("normal selected documentation packs freeze the imported reader menu into their published page", () => {
  const runtime = loadRuntime("wcmsStagedServer", "kickoffLocal");
  global.CONFIG = { get: key => runtime[key] };
  global.NODICS = {
    getEnvironmentPath: () => path.resolve(__dirname, ".."),
    getNodicsHome: () => path.join(frameworkRoot, "nodics.foundation"),
  };
  global.SERVICE = {};
  const importer = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/contentPack/defaultContentPackService"));
  const publisher = require(path.join(frameworkRoot, "nodics.wcms/modules/cms/src/service/publication/defaultCmsPublicationManifestOrchestrationService"));
  for (const [profile, pack, guide, title, landing] of [
    ["frameworkdocs", "nodicsDocumentation", "framework", "Nodics Framework", "/docs/framework"],
    ["docs-foundation", "nodicsDocumentationFoundation", "framework", "Nodics Framework", "/docs/framework"],
    ["axisdocs", "axisDocumentation", "axis", "Nodics Axis", "/docs/nodics-axis"],
    ["kickoffdocs", "kickoffDocumentation", "project", "Kickoff", "/docs/nodics-kickoff"],
    ["circadocs", "circaDocumentation", "framework", "Nodics Framework", "/docs/circa-ewaste"],
  ]) {
    const release = importer.inspectRelease(importer.resolvePackContext(pack));
    assert.equal(release.available, true, pack);
    assert.equal(release.manifest.contentPath, "docs-v001");
    const baseline = runtime.cms.publication.baselines[profile];
    assert.equal(baseline.contentPackCode, pack);
    assert.equal(baseline.releaseVersion, release.version);
    const entries = Object.keys(release.manifest.generatedHashes);
    const records = suffix => Object.values(require(path.join(release.fileRoot, entries.find(f => f.endsWith(suffix + "Data.js")))));
    const componentFile = entries.find(f => f.endsWith("ComponentData.js"));
    const headers = entries.filter(f => f.endsWith("Header.js")).flatMap(f => Object.values(require(path.join(release.fileRoot, f)).cms || {}));
    assert.ok(headers.some(h => h.options.schemaName === "cmsComponent" && h.options.operation === "saveAll" &&
      h.options.dataFilePrefix === path.basename(componentFile, ".js")), pack);
    const route = records("Route").find(r => r.path === landing);
    const page = records("Page").find(p => p.code === route.page);
    const models = { ["cmsPage:" + page.code]: page };
    if (page.template) models["cmsPageTemplate:" + page.template] = records("Template").find(t => t.code === page.template);
    for (const item of page.cmsComponents) {
      const component = records("Component").find(c => c.code === item.target);
      models["cmsComponent:" + component.code] = component;
      models["cmsComponentDetail:" + item.target] = { ...item, source: page.code };
    }
    const snapshot = publisher.buildRouteSnapshot(models, route);
    const metadata = snapshot.page.components.find(c => c.renderer === "documentation.component.navigation").properties.readerGuide;
    assert.deepEqual([metadata.guide, metadata.label], [guide, title]);
    assert.equal(metadata.navigation.route, "/docs?guide=" + guide);
    if (guide === "project") assert.deepEqual(new Set(metadata.channelReferences.map(r => r.channelId)), new Set(["circa", "agora", "nexus"]));
  }
});
