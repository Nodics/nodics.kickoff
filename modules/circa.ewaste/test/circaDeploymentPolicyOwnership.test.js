/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module circa.ewaste/test/circaDeploymentPolicyOwnership @description Verifies deployment-owned policy preserves every previously resolved runtime and leaves reference content inert. @owner circa.ewaste @layer test */
const assert = require("node:assert/strict");
const test = require("node:test");
const {
  loadRuntime,
  activeModuleNames,
  frameworkRoot,
} = require("../../../test/helpers/configuration");
const path = require("node:path");
const guidanceProfile = require(
  path.join(
    frameworkRoot,
    "nodics.copilot/modules/copilotConversation/config/properties",
  ),
).copilot.providers.profiles.customerGuidance;
const snapshots = require("./fixtures/circaResolvedDeploymentPolicyBeforeExtraction.json");
const demo = require("../config/properties");
const retiredSelectors = new Set([
  "eWaste.catalogue.discoveryBatchSize",
  "eWaste.marketplace.carbonRewardTypeCode",
  "eWaste.marketplace.carbonScale",
  "eWaste.marketplace.catalogueDiscovery",
  "eWaste.marketplace.couponCarbonMode",
  "eWaste.marketplace.listingPresentation.warehouseName",
  "eWaste.marketplace.refundsEnabled",
  "eWaste.marketplace.rewardScale",
]);
for (const snapshot of snapshots)
  test(
    snapshot.environment +
      "/" +
      snapshot.server +
      " retains exact deployment policy and sample selection",
    () => {
      const runtime = loadRuntime(snapshot.server, snapshot.environment);
      assert.equal(
        activeModuleNames(runtime).includes("circa.ewaste"),
        snapshot.selected,
      );
      for (const [selector, expected] of Object.entries(snapshot.expected)) {
        const actual =
          selector.split(".").reduce((value, key) => value?.[key], runtime) ??
          null;
        if (retiredSelectors.has(selector) || selector.startsWith("eWaste.journeys.") ||
            selector.startsWith("waste.projectOverlay.")) {
          assert.equal(actual, null, `${selector} must not restore retired configuration`);
          continue;
        }
        if (selector === "eWaste.conversation.rewardGuidance" && expected !== null) {
          const profiles = require(path.join(__dirname, "../../../envs",
            snapshot.environment, "config/properties")).eWaste.runtimeRoleProfiles;
          const selectedGuidance = profiles.COMMERCE.conversation.rewardGuidance;
          assert.equal(selectedGuidance, profiles.WASTE.conversation.rewardGuidance);
          assert.equal(actual, selectedGuidance);
          assert.match(actual, /original contributor entitlements stay with the contributor/);
          continue;
        }
        if (selector === "eWaste.journey.arrivalRadiusMetres" &&
            snapshot.environment === "kickoffDockerLocal" &&
            !activeModuleNames(runtime).includes("eWaste")) {
          assert.equal(actual, null, "Unselected owners must not acquire copied radius defaults");
          continue;
        }
        if (selector === "waste.operations.requireDifferentApprover" &&
            !activeModuleNames(runtime).includes("wasteCore")) {
          assert.equal(actual, null, "Unselected Waste Core contributes no approver default");
          continue;
        }
        if (
          selector === "eWaste.journey.arrivalRadiusMetres" &&
          expected !== null &&
          snapshot.environment === "kickoffLocal"
        ) {
          assert.equal(
            actual,
            200,
            "Reviewed native environment radius overrides the framework 50m default",
          );
          continue;
        }
        if (
          selector === "eWaste.outcomeCommunication.templateCode" &&
          !activeModuleNames(runtime).includes("eWaste")
        ) {
          assert.equal(
            actual,
            null,
            "Inactive owners contribute no template descriptor",
          );
          continue;
        }
        if (
          selector ===
            "runtimeConfigurationSchemas.telegramExternalIdentity.fields" &&
          expected !== null
        ) {
          const runtimeSchema = require(
            path.join(
              frameworkRoot,
              "nodics.foundation/modules/nSystem/src/service/config/defaultRuntimeConfigurationSchemaService",
            ),
          );
          assert.deepEqual(
            actual.map((field) => ({
              ...field,
              path: runtimeSchema.resolveFieldPath(field),
            })),
            expected,
            "Logical selectors preserve the exact effective credential path",
          );
          continue;
        }
        // The historical fixture stays frozen. This neutral owner profile is now
        // inherited by other active Conversation runtimes without enabling a provider.
        if (
          expected === null &&
          selector.startsWith("copilot.providers.profiles.customerGuidance.") &&
          activeModuleNames(runtime).includes("copilotConversation")
        ) {
          assert.deepEqual(
            actual,
            guidanceProfile[selector.split(".").at(-1)],
            selector,
          );
          continue;
        }
        assert.deepEqual(actual, expected, selector);
      }
    },
  );
test("demo composition has no operational policy, provider binding, rate or enablement definition", () => {
  assert.deepEqual(Object.keys(demo).sort(), [
    "backofficeApplicationInitialization",
    "cms",
    "data",
    "eWaste",
    "tooling",
  ]);
  assert.deepEqual(Object.keys(demo.eWaste).sort(), [
    "application",
    "applicationCode",
    "presentation",
  ]);
  assert.equal(demo.eWaste.application.enabled, undefined);
});
