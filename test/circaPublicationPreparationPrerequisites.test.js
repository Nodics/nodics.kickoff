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
    assert.deepEqual(
      steps.slice(0, selectedOwners.length).map((step) => step.code),
      selectedOwners.map((owner) => `${owner}:${owner}PublicationWorkflow`),
    );
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
