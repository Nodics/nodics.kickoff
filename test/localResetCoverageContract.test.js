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
const platform = require(
  path.join(root, "platformServer/config/properties.js"),
);

test("fresh Local reset includes every declared backend runtime and clears Platform last", () => {
  const topology = require(path.join(root, "nodics.environment.json"));
  const providers = platform.backofficeLocalReset.providers;
  const servers = providers.map((provider) => provider.targetAuthority.server);
  assert.equal(new Set(servers).size, servers.length);
  assert.equal(servers.at(-1), "platformServer");
  assert.equal(providers.length, topology.topology.groups.backends.length);
  for (const runtime of topology.topology.groups.backends) {
    const server = `${runtime.code}Server`;
    assert.ok(servers.includes(server), `${server} has no reset owner`);
    const properties = require(path.join(root, server, "config/properties.js"));
    const policy = properties.localResetProvider;
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
    assert.deepEqual(
      providers.find((provider) => provider.targetAuthority.server === server)
        .targetAuthority.runtimeRole,
      properties.runtimeRole,
      server,
    );
  }
});
