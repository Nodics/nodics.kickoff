/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module test/runtimeDeliverySchemaAdoption @description Verifies reference-runtime adoption of the Communication-owned schema, without provisioning or activating providers. @layer test @owner nodics.kickoff */
const assert = require("node:assert/strict");
const test = require("node:test");
const { loadRuntime, frameworkRoot } = require("./helpers/configuration");
const schemaOwner = require(require('node:path').join(frameworkRoot,
  'nodics.foundation/modules/nSystem/src/service/config/defaultRuntimeConfigurationSchemaService'));

test("Local Engagement adopts the delivery owner's schema without loading the Circa application", () => {
  const engagement = loadRuntime("engagementServer", "kickoffLocal", {});
  const platform = loadRuntime("platformServer", "kickoffLocal", {});
  const schema = engagement.runtimeConfigurationSchemas.telegramDelivery;
  assert.equal(schema.ownerModule, "commsCore");
  assert.equal(schema.fields[0].code, "botToken");
  assert.equal(schema.fields[0].required, true);
  assert.equal(schema.fields[0].sensitive, true);
  assert.equal(schema.fields[0].type, "string");
  assert.equal(schema.fields[0].pattern, "^\\d+:[^\\s]+$");
  const reference =
    engagement.communication.providers.TELEGRAM.credentialReferences[0];
  assert.equal(schema.fields[0].credentialReference, reference);
  assert.equal(schema.fields[0].path, undefined);
  assert.deepEqual(schemaOwner.resolveFieldPath(schema.fields[0]), ["credentials", reference, "value"]);
  assert.ok(!Object.hasOwn(schema.fields[0], 'value'), 'Schema metadata never embeds a configured credential');
  assert.equal(
    platform.runtimeConfigurationSchemas?.telegramDelivery,
    undefined,
  );
  assert.equal(
    platform.runtimeConfigurationSchemas.telegramExternalIdentity.ownerModule,
    "profile",
  );
  assert.equal(
    require("../modules/circa.ewaste/config/properties")
      .runtimeConfigurationSchemas,
    undefined,
  );
  assert.equal(
    require("../envs/kickoffLocal/engagementServer/config/properties").activeModules.modules.includes(
      "circa.ewaste",
    ),
    false,
  );
  assert.equal(
    require("../envs/kickoffLocal/config/properties")
      .runtimeConfigurationSchemas.runtimeRoleProfiles.ENGAGEMENT
      .telegramDelivery.ownerModule,
    undefined,
  );
});
