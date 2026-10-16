/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module circa.ewaste/test/circaResolvedComposition @description Protects resolved deployment choices while reusable protocol metadata moves to framework owners. @owner circa.ewaste @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const {
  loadRuntime,
  activeModuleNames,
  frameworkRoot,
} = require("../../../test/helpers/configuration");
const snapshots = require("./fixtures/circaResolvedCompositionBeforeMetadataExtraction.json");
const get = (value, selector) =>
  selector.split(".").reduce((item, key) => item?.[key], value) ?? null;

for (const snapshot of snapshots)
  test(
    snapshot.environment +
      "/" +
      snapshot.server +
      " preserves effective identity, delivery and customer choices",
    () => {
      const runtime = loadRuntime(snapshot.server, snapshot.environment);
      const modules = activeModuleNames(runtime);
      for (const [selector, original] of Object.entries(snapshot.expected)) {
        let expected = structuredClone(original);
        if (
          selector === "eWaste.journey" &&
          expected &&
          snapshot.environment === "kickoffLocal"
        ) {
          expected.arrivalRadiusMetres = 200;
        }
        // Protocol metadata is now present only where its implementing owner is loaded.
        if (
          !modules.includes("eWaste") &&
          selector === "eWaste.targetAuthorities"
        )
          expected = null;
        if (
          !modules.includes("eWaste") &&
          selector === "eWaste.outcomeCommunication"
        )
          delete expected.templateCode;
        if (!modules.includes("eWaste") && selector === "eWaste.journey") {
          delete expected.contractVersion;
          delete expected.conversationMaximumCharacters;
        }
        if (!modules.includes("order") && selector === "order.refunds")
          delete expected.ownerPorts;
        if (selector === "eWaste.rewardValuationService") {
          assert.equal(
            get(runtime, selector),
            null,
            "Unused service-selection metadata is removed, not activated",
          );
        } else assert.deepEqual(get(runtime, selector), expected, selector);
      }
      const schema =
        runtime.runtimeConfigurationSchemas?.telegramExternalIdentity;
      if (!modules.includes("profile"))
        return assert.equal(schema.ownerModule, undefined);
      assert.equal(schema.ownerModule, "profile");
      assert.equal(schema.fields[0].credentialReference, "telegram.bot.circa");
      assert.equal(
        schema.fields[0].path,
        undefined,
        "The wrapper path is derived by nSystem",
      );
      const runtimeSchema = require(
        path.join(
          frameworkRoot,
          "nodics.foundation/modules/nSystem/src/service/config/defaultRuntimeConfigurationSchemaService",
        ),
      );
      assert.deepEqual(runtimeSchema.resolveFieldPath(schema.fields[0]), [
        "credentials",
        "telegram.bot.circa",
        "value",
      ]);
    },
  );

test("owner-only configuration contains no application identity and leaves external identity disabled", () => {
  const profile = require(
    path.join(
      frameworkRoot,
      "nodics.platform/modules/profile/config/properties",
    ),
  );
  const owner = require(
    path.join(
      frameworkRoot,
      "nodics.accelerators/modules/waste/modules/eWaste/config/properties",
    ),
  );
  const demo = require("../config/properties");
  assert.equal(profile.profileExternalIdentity.enabled, false);
  assert.deepEqual(profile.profileExternalIdentity.applications, {});
  assert.equal(
    profile.runtimeConfigurationSchemas.telegramExternalIdentity.fields[0]
      .credentialReference,
    "telegram.bot.identity",
  );
  assert.doesNotMatch(
    JSON.stringify([
      profile.runtimeConfigurationSchemas.telegramExternalIdentity,
      owner,
    ]),
    /circa|greenperks|renewworks|loopcycle/i,
  );
  const order = require(
    path.join(
      frameworkRoot,
      "nodics.commerce/modules/checkout/modules/order/config/properties",
    ),
  );
  assert.equal(order.order.refunds.enabled, false);
  assert.equal(demo.runtimeConfigurationSchemas, undefined);
  assert.equal(demo.order, undefined);
  assert.equal(demo.eWaste.targetAuthorities, undefined);
});
