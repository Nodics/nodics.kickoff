"use strict";

const assert = require("node:assert/strict");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const packageJson = require(path.join(projectRoot, "package.json"));
const environment = require("./helpers/configuration").loadEnvironment();
const runtime = require("./helpers/configuration").loadRuntime("wasteServer");
const serverPackage = require(
  path.join(projectRoot, "envs/kickoffLocal/wasteServer/package.json"),
);
assert(serverPackage.nodics.extends.includes("nodics.location"));
assert.equal(runtime.runtimeRole.code, "WASTE");
assert.equal(runtime.servers.default.endpoint.httpPort, 4370);
for (const name of [
  "locationCore",
  "locationType",
  "locationMap",
  "locationSearch",
  "locationDraft",
  "locationApproval",
  "locationProjection",
]) {
  assert(runtime.activeModules.modules.includes(name), name);
  assert.equal(
    runtime.database[name].mongodb.master.databaseName,
    "kickoffLocalLocation",
    name,
  );
}
assert.equal(
  runtime.database.default.mongodb.master.databaseName,
  "kickoffLocalWaste",
);
assert(
  !environment.topology.groups.backends.some(
    (item) => item.server === "locationServer",
  ),
);
console.log("Local Waste and Location topology contract passed");

/** Verifies the customer-selected Local topology without starting runtimes. */
async function verifyConsolidatedTopology() {
  const { readSelection } = await import(
    path.join(
      projectRoot,
      "../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectLocalResetMaintenanceService.mjs",
    )
  );
  const selection = await readSelection(
    { environment: "kickoffLocal", project: "nodics.kickoff" },
    projectRoot,
  );
  const expected = {
    platformServer: ["kickoffLocalPlatform"],
    wcmsStagedServer: ["kickoffLocalWcmsStaged"],
    wcmsOnlineServer: ["kickoffLocalWcmsOnline"],
    commerceStagedServer: ["kickoffLocalCommerceStaged"],
    commerceServer: ["kickoffLocalCommerce", "kickoffLocalLoyalty"],
    wasteServer: ["kickoffLocalWaste", "kickoffLocalLocation"],
    processServer: [
      "kickoffLocalProcess",
      "kickoffLocalCron",
      "kickoffLocalEngagement",
    ],
  };
  assert.equal(selection.scopes.length, 7);
  for (const scope of selection.scopes) {
    assert.deepEqual(
      [...new Set(scope.databases.map((item) => item.name))].sort(),
      expected[scope.server].slice().sort(),
      scope.server,
    );
  }
  const processScope = selection.scopes.find(
    (scope) => scope.server === "processServer",
  );
  assert.equal(
    processScope.databases.find((item) => item.moduleName === "cronjob").name,
    "kickoffLocalCron",
  );
  console.log("Seven Local runtimes and eleven database mappings verified");
}
verifyConsolidatedTopology().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Reset coordination selects each physical Local host exactly once.
for (const [environment, count] of [
  ["kickoffLocal", 7],
  ["kickoffDockerLocal", 10],
]) {
  const providers = require("./helpers/configuration").loadRuntime(
    "platformServer",
    environment,
  ).backofficeLocalReset.providers;
  assert.equal(providers.length, count);
  assert.equal(
    new Set(providers.map((provider) => provider.targetAuthority.server)).size,
    count,
  );
}
