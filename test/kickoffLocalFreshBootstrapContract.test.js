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
  assert.deepEqual(
    loadRuntime("platformServer", "kickoffLocal").data.dataReleases.types.init.startupProfileSelections,
    [{ environmentCode: "kickoffLocal", runtimeRole: "PLATFORM", profileCodes: ["nativeRuntimeAuthority"] }],
    "Platform Local must explicitly select its reviewed runtime authority for fresh bootstrap",
  );
  assert.deepEqual(
    loadRuntime("wasteServer", "kickoffLocal").data.dataReleases.types.init.startupProfileSelections,
    [{ environmentCode: "kickoffLocal", runtimeRole: "PLATFORM", profileCodes: ["nativeRuntimeAuthority"] }],
    "all runtimes may observe the project selection while nImport admits only the exact role and environment",
  );
});

test("kickoffLocal intentionally seeds the stable proof used after fresh Init", () => {
  const auth = require(path.join(
    frameworkRoot,
    "nodics.foundation/modules/nAuth/config/properties",
  ));
  const local = require("../envs/kickoffLocal/config/properties");
  assert.equal(
    auth.bootstrapIdentity.serviceApiKey.name,
    "NODICS_BOOTSTRAP_SERVICE_API_KEY",
    "nAuth must retain the reusable provisioning-proof default binding",
  );
  assert.equal(
    auth.defaultAuthDetail.apiKey.name,
    "NODICS_API_KEY",
    "nAuth must retain the reusable current-runtime-proof default binding",
  );
  assert.equal(
    local.bootstrapIdentity.serviceApiKey.name,
    "NODICS_API_KEY",
    "Kickoff Local must select the proof used immediately after a fresh Init",
  );
  const effective = loadRuntime("platformServer", "kickoffLocal", {
    NODICS_API_KEY: "stable-local-runtime-proof-for-contract-check",
    NODICS_BOOTSTRAP_SERVICE_API_KEY:
      "separate-framework-provisioning-proof-for-contract-check",
  });
  assert.equal(effective.bootstrapIdentity.serviceApiKey, effective.defaultAuthDetail.apiKey);
});
