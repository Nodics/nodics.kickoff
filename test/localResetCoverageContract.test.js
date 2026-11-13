/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/**
 * @module test/localResetCoverageContract
 * @description Checks that the reference topology configures the framework reset contract for every data owner.
 * @owner nodics.kickoff
 */
const assert = require("node:assert/strict");
const path = require("node:path");
const { test } = require("node:test");
const root = path.resolve(__dirname, "../envs/kickoffLocal");
const platform = require("./helpers/configuration").loadRuntime("platformServer");

test("fresh Local reset includes every declared backend runtime and clears Platform last", () => {
  const configuration = require("./helpers/configuration");
  const topology = configuration.loadEnvironment();
  const providers = platform.backofficeLocalReset.providers;
  const servers = providers.map((provider) => provider.targetAuthority.server);
  assert.equal(new Set(servers).size, servers.length);
  assert.equal(servers.at(-1), "platformServer");
  assert.equal(providers.length, topology.topology.groups.backends.length);
  for (const runtime of topology.topology.groups.backends) {
    const server = runtime.server;
    assert.ok(servers.includes(server), `${server} has no reset owner`);
    const properties = configuration.loadRuntime(server);
    const activeModules = configuration.activeModuleNames(properties);
    const selection = properties.localResetProvider.profiles[properties.runtimeRole.code];
    for (const [moduleName, enabled] of Object.entries(selection?.modules || {})) {
      if (enabled) assert.ok(activeModules.includes(moduleName), `${server}: reset inventory owner ${moduleName} must be active`);
    }
    for (const { moduleName, indexName } of selection?.searchIndexes || []) {
      assert.ok(activeModules.includes(moduleName), `${server}: reset search owner ${moduleName}/${indexName} must be active`);
    }
    const policy = configuration.resetPolicy(properties);
    assert.equal(policy.enabled, true, server);
    assert.deepEqual(policy.environmentAllowlist, ["kickoffLocal"], server);
    assert.ok(
      policy.serviceNames.length <= (policy.maximumServices || 128),
      server,
    );
    assert.equal(
      new Set(policy.serviceNames).size,
      policy.serviceNames.length,
      server,
    );
    for (const required of policy.requiredServiceNames || []) {
      assert.ok(
        policy.serviceNames.includes(required),
        `${server}: ${required} cannot be optional`,
      );
    }
    const selector = providers.find(
      (provider) => provider.targetAuthority.server === server,
    ).targetAuthority;
    assert.equal(
      selector.server,
      server,
      `${server}: reset selector must name the selected physical runtime authority`,
    );
    assert.equal(selector.runtimeRole, undefined, `${server}: retired role selector`);
    assert.equal(
      selector.publication,
      properties.runtimeRole.publication,
      `${server}: reset publication authority must match`,
    );
  }
});
