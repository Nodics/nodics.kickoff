/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/kickoffLocalFreshBootstrapContract @description Prevents project-local holds from disabling the framework-owned mandatory Init startup lifecycle. @owner nodics.kickoff */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { loadRuntime, frameworkRoot } = require("./helpers/configuration");

test("kickoffLocal inherits the framework Init startup contract for a fully fresh schema", () => {
  const owner = require(path.join(
    frameworkRoot,
    "nodics.foundation/modules/nData/nImport/import/config/properties",
  ));
  const local = require("../envs/kickoffLocal/config/properties");
  assert.equal(owner.data.dataReleases.types.init.startupExecution, true);
  assert.equal(
    local.data?.dataReleases?.types?.init?.startupExecution,
    undefined,
    "Local must not disable or copy the framework-owned Init startup default",
  );
  assert.equal(
    loadRuntime("platformServer", "kickoffLocal").data.dataReleases.types.init.startupExecution,
    true,
  );
  assert.deepEqual(
    owner.data.dataReleases.types.init.startupProfileSelections,
    [],
    "nImport must keep startup profile selection inert by default",
  );
  const platform = loadRuntime("platformServer");
  assert.deepEqual(platform.data.dataReleases.types.init.startupProfileSelections, [{
    environmentCode: "kickoffLocal", serverCode: "platformServer",
    profileCodes: ["localAxisIdentityDefinitions", "localContentAccessDefinitions"],
  }]);
  assert.deepEqual(platform.data.dataReleases.initializationProfiles.localAxisIdentityDefinitions, { template: "axisAccessDefinitions" });
  assert.deepEqual(platform.data.dataReleases.initializationProfileDefaults.axisAccessDefinitions.steps, [{
    dataType: "init", releaseCodes: ["axis:accessGroups"],
  }]);
  assert.deepEqual(platform.data.dataReleases.initializationProfiles.localContentAccessDefinitions, { template: "axisContentAccessDefinitions" });
  assert.deepEqual(platform.data.dataReleases.initializationProfileDefaults.axisContentAccessDefinitions.steps, [{
    dataType: "init", releaseCodes: ["cms:businessAccessGroups"],
  }]);
  for (const server of ["wasteServer", "processServer", "wcmsStagedServer", "wcmsOnlineServer", "commerceServer", "commerceStagedServer"])
    assert.deepEqual(loadRuntime(server).data.dataReleases.types.init.startupProfileSelections, []);

});

test("kickoffLocal intentionally seeds the stable proof used after fresh Init", () => {
  const auth = require(path.join(
    frameworkRoot,
    "nodics.foundation/modules/nAuth/config/properties",
  ));
  const local = require("../envs/kickoffLocal/config/properties");
  assert.equal(auth.bootstrapIdentity, undefined);
  assert.equal(local.bootstrapIdentity, undefined);
  assert.equal(auth.defaultAuthDetail.apiKey.name, "NODICS_API_KEY");
  const profile = require(path.join(frameworkRoot,"nodics.platform/modules/profile/config/properties"));
  assert.deepEqual(profile.bootstrapIdentity.serviceApiKey, {$config:"ref",path:"defaultAuthDetail.apiKey"});
  const effective = loadRuntime("platformServer", "kickoffLocal", {
    NODICS_API_KEY: "stable-local-runtime-proof-for-contract-check",
    NODICS_BOOTSTRAP_SERVICE_API_KEY:
      "separate-framework-provisioning-proof-for-contract-check",
  });
  assert.equal(effective.bootstrapIdentity.serviceApiKey, effective.defaultAuthDetail.apiKey);
});
