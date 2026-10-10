/**
 * @module test/circaPublicationPreparationPrerequisites
 * @description Verifies the reference deployment observes owner workflow prerequisites through layered preparation descriptors.
 * @layer test
 * @owner nodics.kickoff
 */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const { loadRuntime, frameworkRoot } = require("./helpers/configuration");
const owners = ["media", "product", "pricing", "tax", "promotion", "inventory"];
const ownerRoot = (owner) =>
  path.join(
    frameworkRoot,
    owner === "media"
      ? "nodics.wcms/modules/media"
      : `nodics.commerce/modules/baseCommerce/modules/${owner}`,
  );
for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  test(`${environment} publishes explicit Process prerequisites before Circa and Nexus preparation`, () => {
    const platform = loadRuntime("platformServer", environment, {});
    const process = loadRuntime("processServer", environment, {});
    const profiles = platform.backofficeApplicationInitialization.profiles;
    const service = require(
      path.join(
        frameworkRoot,
        "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService",
      ),
    );
    const steps = service.preparationSteps(profiles.circa);
    for (const code of ["circa.ewaste:profile", "circa.ewaste:operations", "circa.ewaste:loyalty"]) {
      assert.equal(steps.find((step) => step.code === code).required, true);
    }
    const selectedOwners =
      environment === "kickoffLocal"
        ? [...owners.slice(1), "media"]
        : ["media"];
    const contentIndex = steps.findIndex((step) => step.code === "circa.ewaste:content");
    assert(contentIndex >= 0);
    for (const owner of selectedOwners) {
      const workflowIndex = steps.findIndex((step) => step.code === `${owner}:${owner}PublicationWorkflow`);
      assert(workflowIndex >= 0 && workflowIndex < contentIndex,
        "Required Process definitions must precede website content alongside other owner prerequisites");
    }
    assert.deepEqual(
      steps
        .filter((step) => step.targetRuntimeRole === "PROCESS")
        .map((step) => step.code),
      selectedOwners.map((owner) => `${owner}:${owner}PublicationWorkflow`),
    );
    for (const owner of selectedOwners) {
      const code = `${owner}:${owner}PublicationWorkflow`;
      const step = steps.find((item) => item.code === code);
      assert.equal(step.required, true);
      assert.equal(step.dataType, "init");
      assert.equal(step.targetServer, "process");
      assert.equal(step.targetRuntimeRole, "PROCESS");
      assert.equal(step.trigger, "USER");
      const manifest = JSON.parse(
        fs.readFileSync(
          path.join(ownerRoot(owner), "data/manifest.json"),
          "utf8",
        ),
      );
      const release = manifest.sections[`${owner}PublicationWorkflow`];
      assert.equal(release.destinationRole, "PROCESS");
      assert.equal(release.selectionPolicy, "EXPLICIT");
      assert.equal(release.installer, "PROCESS_DEFINITION");
      assert(
        process.data.dataReleases.contributions.some(
          (selector) =>
            selector.moduleName === owner &&
            selector.sections.includes(`${owner}PublicationWorkflow`),
        ),
        `${code} must be declared in existing Process discovery`,
      );
      assert(
        Object.keys(release.files).every(
          (file) =>
            file.includes("/records/process/") &&
            !/grant|permission|accessGroup/i.test(file),
        ),
      );
    }
    assert.deepEqual(
      profiles.nexus.dataPackages
        .filter((step) => step.targetRuntimeRole === "PROCESS")
        .map((step) => step.code),
      ["media:mediaPublicationWorkflow"],
    );
  });
}
test("Local selected publication providers match the workflow prerequisites, not module-name inference", () => {
  const commerce = loadRuntime("commerceStagedServer", "kickoffLocal", {});
  const media = loadRuntime("wcmsStagedServer", "kickoffLocal", {});
  for (const owner of owners.filter((owner) => owner !== "media"))
    assert.equal(
      commerce.publish.providers.workflowProviders[owner],
      "DefaultPublicationApprovalWorkflowService",
    );
  assert.equal(
    media.publish.providers.workflowProviders.media,
    "DefaultPublicationApprovalWorkflowService",
  );
});

test("native Circa preparation selects additive staff access without credential-bearing operations replay", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal", {});
  const docker = loadRuntime("platformServer", "kickoffDockerLocal", {});
  const service = require(path.join(frameworkRoot, "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = service.preparationSteps(platform.backofficeApplicationInitialization.profiles.circa);
  const dockerSteps = service.preparationSteps(docker.backofficeApplicationInitialization.profiles.circa);
  for (const [code, dataType] of [["profile:commerceSetupPublisherRole", "core"], ["profile:commercePublicationStarterRole", "core"], ["profile:commerceCouponIssuerRole", "core"], ["profile:commerceAxisRefundReviewerRole", "core"], ["circa.ewaste:circaMerchantOutletAccess", "sample"], ["circa.ewaste:circaCommerceStaffAssignments", "sample"]]) {
    const step = steps.find(row => row.code === code);
    assert(step, code);
    assert.equal(step.required, true);
    assert.equal(step.phase, "BEFORE_PUBLICATION");
    assert.equal(step.trigger, "USER");
    assert.equal(step.dataType, dataType);
    assert.equal(step.targetRuntimeRole, "PLATFORM");
    assert.equal(dockerSteps.some(row => row.code === code), false);
  }
  assert.equal(steps.some(row => row.code === "profile:commerceRefundReviewerRole"), false,
    "Axis reviewer includes its own permissions and needs no second HTTP role pack");
});

test("fresh preparation separates dependent staff and classification batches after their source imports", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal", {});
  const profile = platform.backofficeApplicationInitialization.profiles.circa;
  const service = require(path.join(frameworkRoot, "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = service.preparationSteps(profile)
    .filter(step => step.phase === "BEFORE_PUBLICATION");
  const sorted = steps.slice().sort((a, b) => a.order - b.order);
  const groups = service.preparationGroups(profile, { authData: { principalId: "reviewed-operator" } }, steps);
  for (const [dependent, prerequisites] of [
    ["circa.ewaste:circaCommerceStaffAssignments", [
      "circa.ewaste:operations", "profile:commerceSetupPublisherRole",
      "profile:commercePublicationStarterRole", "profile:commerceCouponIssuerRole",
      "profile:commerceAxisRefundReviewerRole",
    ]],
    ["circa.ewaste:circaAssetClassification", ["circa.ewaste:commerce"]],
  ]) {
    const position = sorted.findIndex(step => step.code === dependent);
    const groupIndex = groups.findIndex(group => group.steps.some(step => step.code === dependent));
    assert(position >= 0 && groupIndex >= 0, dependent);
    assert.deepEqual(groups[groupIndex].steps.map(step => step.code), [dependent],
      "dependent import is isolated from nImport intra-batch release sorting");
    for (const prerequisite of prerequisites) {
      const prerequisitePosition = sorted.findIndex(step => step.code === prerequisite);
      const prerequisiteGroup = groups.findIndex(group => group.steps.some(step => step.code === prerequisite));
      assert(prerequisitePosition >= 0 && prerequisitePosition < position, prerequisite);
      assert(prerequisiteGroup >= 0 && prerequisiteGroup < groupIndex, prerequisite);
    }
  }
});

test("required current catalogue supersedes only five original intents without duplicate mandatory versions", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal", {});
  const service = require(path.join(frameworkRoot, "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = service.preparationSteps(platform.backofficeApplicationInitialization.profiles.circa);
  const base = path.resolve(__dirname, "../modules/circa.ewaste/data/sample-v001");
  const original = require(path.join(base, "publication/catalogue/records/publicationPlan.json"));
  const corrected = require(path.join(base, "asset-publication/records/publicationPlan.json"));
  const required = steps.filter(step => step.required && step.type === "GOVERNED_PUBLICATIONS");
  const current = required.find(step => step.code === "circa.ewaste:circaCatalogueCurrentPublicationPlan");
  assert(current);
  assert.equal(current.operatorEnterpriseCode, "GREENPERKS_ONLINE");
  assert.equal(current.publicationPlan.items.length, 46);
  assert.equal(required.length, 7);
  assert.equal(required.flatMap(step => step.publicationPlan.items).length, 98);
  const outletPlans = ["greenperks", "renewworks", "loopcycle"].map(issuer =>
    require(path.join(base, "merchant-outlets", issuer, "publication/records/publicationPlan.json")));
  for (const plan of outletPlans) {
    assert(required.some(step => JSON.stringify(step.publicationPlan) === JSON.stringify(plan)));
  }
  assert.equal(steps.some(step => step.code === "circa.ewaste:circaCataloguePublicationPlan"), false);
  const changed = current.publicationPlan.items.filter(item =>
    JSON.stringify(item) !== JSON.stringify(original.items.find(row => row.rootCode === item.rootCode)));
  assert.equal(changed.length, 5);
  assert.deepEqual(changed, corrected.items);
  assert(changed.every(item => item.sourceVersion === "2" && item.input.versionId === 1));
  const optional = steps.find(step => step.code === "circa.ewaste:circaAssetClassificationPublicationPlan");
  assert.equal(optional.required, false);
  assert.equal(optional.operatorEnterpriseCode, "GREENPERKS_ONLINE");
  assert.equal(optional.phase, "AFTER_PUBLICATION");
});
