/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDeploymentPortability @description Checks portable pack metadata without importing or qualifying any deployment. @owner circa.ewaste @layer test */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const path = require("node:path");
const fs = require("node:fs");
const vm = require("node:vm");
const { createRequire } = require("node:module");
const manifest = require("../data/manifest.json");
const runtimeAssignments = require("../../kickoffCore/data/init-v001/runtime-assignments/records/nativeRuntimeAssignmentData");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const { parse } = createRequire(path.join(frameworkRoot, "package.json"))("acorn");
const releases = require(path.join(frameworkRoot,
  "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));

const freshCmsOwnership = {
  circaCmsComponentData: { placements: "subComponents" },
  circaCmsGroupData: {},
  circaCmsPageData: { site: true, placements: "cmsComponents" },
  circaCmsRendererData: {},
  circaCmsRouteData: { site: true },
  circaCmsSiteData: { enterpriseOnly: true },
  circaCmsSlotData: {},
  circaCmsTemplateData: {},
  circaCmsTypeData: {},
};

/** Read the hash-pinned original export before the appended fresh-ownership contribution. */
function historicalCmsRecords(file, expectedHash) {
  const source = fs.readFileSync(file, "utf8");
  const tree = parse(source, { ecmaVersion: "latest" });
  const exported = tree.body.find(statement => {
    const expression = statement.expression;
    return expression?.type === "AssignmentExpression" && expression.operator === "="
      && expression.left.type === "MemberExpression" && !expression.left.computed
      && expression.left.object.name === "module" && expression.left.property.name === "exports";
  });
  assert(exported, file + ": missing original export");
  const lineEnd = source.indexOf("\n", exported.end);
  assert(lineEnd >= 0, file + ": missing original trailing newline");
  const historicalSource = source.slice(0, lineEnd + 1);
  assert.equal(crypto.createHash("sha256").update(historicalSource).digest("hex"), expectedHash,
    file + ": original source bytes must retain their frozen hash");
  const historical = { exports: {} };
  vm.runInNewContext(historicalSource, { module: historical }, { filename: file, timeout: 1000 });
  return structuredClone(historical.exports);
}

/** Strip only reviewed field locations, after checking exact values and absence in history. */
function assertOwnershipOnlyChanges(current, historical, policy) {
  const projected = structuredClone(current);
  assert.deepEqual(Object.keys(projected), Object.keys(historical), "CMS record identities/order stay unchanged");
  const scope = { enterpriseCode: "default", catalogCode: "circaContentCatalog" };
  if (policy.site) scope.siteCode = "circaSite";
  for (const [key, record] of Object.entries(projected)) {
    const old = historical[key];
    const field = policy.enterpriseOnly ? "enterpriseCode" : "authoringScope";
    assert.equal(Object.hasOwn(old, field), false, key + ": cannot replace historical ownership");
    assert.deepEqual(record[field], policy.enterpriseOnly ? "default" : scope, key + ": exact fresh ownership");
    delete record[field];
    if (policy.placements && record[policy.placements] !== undefined) {
      assert(Array.isArray(record[policy.placements]));
      assert(Array.isArray(old[policy.placements]));
      assert.equal(record[policy.placements].length, old[policy.placements].length);
      record[policy.placements].forEach((placement, index) => {
        if (!placement || typeof placement !== "object") return;
        const oldPlacement = old[policy.placements][index];
        assert(oldPlacement && typeof oldPlacement === "object");
        assert.equal(Object.hasOwn(oldPlacement, "authoringScope"), false);
        assert.deepEqual(placement.authoringScope, scope, key + ": exact placement ownership");
        delete placement.authoringScope;
      });
    }
  }
  assert.deepEqual(projected, historical, "No business content or unreviewed ownership fields may change");
}

function assertFreshContentSuccessor(section, before, sourceRoot) {
  assert.equal(section.version, "0.0.2");
  assert.deepEqual(Object.keys(section.files).sort(), Object.keys(before.files).sort());
  const reviewed = new Set(Object.keys(freshCmsOwnership).map(name => "sample-v001/content/records/" + name + ".js"));
  for (const [file, hash] of Object.entries(before.files)) {
    if (!reviewed.has(file)) {
      assert.equal(section.files[file], hash, file + ": unreviewed files remain byte-identical");
      continue;
    }
    reviewed.delete(file);
    const absolute = path.join(sourceRoot, file);
    assertOwnershipOnlyChanges(require(absolute), historicalCmsRecords(absolute, hash),
      freshCmsOwnership[path.basename(file, ".js")]);
  }
  assert.equal(reviewed.size, 0, "Every approved CMS ownership file must retain its historical baseline");
}

test("all Circa releases remain portable with only the explicit fresh CMS content successor", () => {
  const sourceRoot = path.resolve(__dirname, "../data");
  const roots = new Map();
  for (const section of Object.values(manifest.sections)) {
    assert.deepEqual(section.environmentScope, ["ALL"]);
    if (!roots.has(section.sourceRoot)) roots.set(section.sourceRoot,
      releases.sourceRootFiles(sourceRoot, section.sourceRoot));
    for (const [file, hash] of Object.entries(section.files))
      assert.equal(roots.get(section.sourceRoot)[file], hash, file);
  }
  const before = require("./fixtures/circaPreExtractionManifest.json");
  const extracted = new Set(["waste-policy","customer-workspace","circaLocalDemoCreditStaffAssignment","circaLocalOpeningStaffAssignments","circaLocalUnusedRefundExceptionStaffAssignment","circaLocalDemoCreditRole","circaLocalOpeningRole","circaLocalUnusedRefundExceptionRole"]);
  for (const [code, section] of Object.entries(before.sections)) {
    if (extracted.has(code)) continue;
    const current = manifest.sections[code];
    assert(current, code + ": retained release must exist");
    // Historical seals do not inspect live metadata; pin its only permitted changes here.
    assert.deepEqual(current, { ...section, environmentScope: ["ALL"], selectionPolicy: "EXPLICIT",
      ...(code === "content" ? { version: "0.0.2", files: current.files } : {}) }, code);
    if (code === "content") {
      assertFreshContentSuccessor(manifest.sections.content, section, sourceRoot);
      continue;
    }
    assert.deepEqual(manifest.sections[code].files, section.files, code);
    assert.equal(manifest.sections[code].version, section.version, code);
  }
});

test("fresh CMS ownership projection rejects scope drift and unrelated business changes", () => {
  const historical = { record0: { code: "page", cmsComponents: [{ target: "component" }], properties: { title: "Original" } } };
  const scope = { enterpriseCode: "default", catalogCode: "circaContentCatalog", siteCode: "circaSite" };
  const current = structuredClone(historical);
  current.record0.authoringScope = { ...scope };
  current.record0.cmsComponents[0].authoringScope = { ...scope };
  const policy = freshCmsOwnership.circaCmsPageData;
  assertOwnershipOnlyChanges(current, historical, policy);
  for (const change of [
    rows => { delete rows.record0.authoringScope; },
    rows => { rows.record0.authoringScope.enterpriseCode = "foreign"; },
    rows => { rows.record0.authoringScope.extra = true; },
    rows => { rows.record0.cmsComponents[0].authoringScope.catalogCode = "foreign"; },
    rows => { rows.record0.properties.authoringScope = { ...scope }; },
    rows => { rows.record0.properties.title = "Changed"; },
    rows => { rows.record0.enterpriseCode = "default"; },
    rows => { delete rows.record0; },
  ]) {
    const changed = structuredClone(current);
    change(changed);
    assert.throws(() => assertOwnershipOnlyChanges(changed, historical, policy), assert.AssertionError);
  }
});

test("portable packs retain destination-role enforcement in every deployment class", t => {
  const original = global.CONFIG;
  t.after(() => { global.CONFIG = original; });
  const owner = { ...releases, configuration: () => ({ destinationEnforced: true }),
    error: (code, message) => Object.assign(new Error(message), { code }) };
  for (const environmentClass of ["LOCAL", "LOCAL_PRODUCTION_SIMULATION", "TEST", "STAGING", "PRODUCTION"]) {
    for (const section of Object.values(manifest.sections)) {
      let runtimeRole = section.destinationRole;
      global.CONFIG = { get: key => key === "environment" ? { class: environmentClass }
        : key === "runtimeRole" ? runtimeRole : undefined };
      assert.equal(owner.validateDestination(section), true);
      runtimeRole = "WRONG_OWNER";
      assert.throws(() => owner.validateDestination(section), { code: "ERR_IMP_00004" });
    }
  }
});

test("deployment bootstrap remains explicit while reviewed grants are owned by data", () => {
  const native = loadRuntime("commerceStagedServer", "kickoffLocal");
  const docker = loadRuntime("commerceStagedServer", "kickoffDockerLocal");
  assert.equal(native.identityGovernance.migration.runtimeDeploymentBootstrapEnabled, true);
  assert.equal(docker.identityGovernance.migration.runtimeDeploymentBootstrapEnabled, false);
  assert.deepEqual(native.profileTenantProvisioning.runtimeRemoteModuleExtensions, ["eWaste"]);
  assert.equal(native.profileTenantProvisioning.localRuntimeRemoteModuleExtensions, undefined);
  assert.equal(native.identityGovernance.migration.localRuntimeDeploymentGrantPermissions, undefined);
  assert.equal(native.identityGovernance.migration.runtimeDeploymentGrantPermissions, undefined);
  const assignments = runtimeAssignments.filter(row => row.runtimeScope.projectCode === "nodics.kickoff" &&
    row.runtimeScope.environmentCode === "kickoffLocal" && row.runtimeScope.serverCode === "commerceStagedServer");
  assert.equal(assignments.length, 1);
  const assignment = assignments[0];
  assert.equal(assignment.code, "kickoff-local-commerce-staged-runtime-deployment");
  assert.equal(assignment.runtimeScope.instanceCode, native.runtimeIdentity.instanceCode);
  assert.equal(assignment.principalCode, "apiAdmin");
  assert(assignment.runtimeScope.permissions.includes("waste.asset.listing.intent.read"));
  assert(assignment.runtimeScope.permissions.includes("commerce.store.read"));
  assert.equal(assignment.runtimeScope.permissions.includes("waste.asset.sale.transfer"), false);
});
