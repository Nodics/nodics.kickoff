/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/configurationInheritanceContract @description Protects project default activation, deployment overrides and configuration ownership. @owner nodics.kickoff */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  merge,
  loadRuntime,
  frameworkRoot,
  activeModuleNames,
  databaseConfiguration,
  searchConfiguration,
  corsPolicy,
} = require("./helpers/configuration");
const routerProperties = require(path.join(frameworkRoot, "nodics.foundation/modules/nRouter/config/properties"));
const administration = require("../modules/kickoffAdministration/config/properties");
const metadata = require("../modules/kickoffAdministration/package.json");

assert.deepEqual(metadata.nodics.owns, ["configuration", "llm"]);
assert.deepEqual(metadata.nodics.runtime, {
  router: false,
  publish: false,
  web: false,
});
assert.equal(
  metadata.nodics.extends,
  undefined,
  "Administration defaults must not activate WCMS or Commerce",
);
assert.equal(
  administration.backofficeApplicationInitialization.projectRoot,
  undefined,
);
assert.equal(
  administration.backofficeApplicationInitialization.projectCode,
  undefined,
);
for (const profile of Object.values(
  administration.backofficeApplicationInitialization.profiles,
)) {
  assert.equal(
    profile.target,
    undefined,
    "Deployment transports stay in the selected environment/server",
  );
}

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  const waste = loadRuntime(
    "wasteServer",
    environment,
    environment === "kickoffLocal"
      ? { CIRCA_EWASTE_ARRIVAL_RADIUS_METRES: "200" }
      : {},
  );
  assert.equal(
    require("../modules/circa.ewaste/config/properties").circaEWaste.journey
      .arrivalRadiusMetres.fallback,
    50,
    "Circa keeps the project default arrival radius strict unless an environment overrides it",
  );
  assert.equal(
    waste.circaEWaste.journey.arrivalRadiusMetres,
    environment === "kickoffLocal" ? 200 : 50,
    "Only local development widens Circa arrival radius for easier device testing",
  );
  assert.deepEqual(
    waste.copilot.knowledge.sourceRegistry.definitions.map((source) => ({
      code: source.code,
      paths: source.paths,
    })),
    [{ code: "circa-customer-guidance-v1", paths: ["v1/journey.md"] }],
    "The selected customer knowledge source must not inherit another source or wildcard path",
  );
  const commerce = loadRuntime("commerceServer", environment);
  assert.deepEqual(
    commerce.fulfillmentCore.customerShipping.methods.map(
      (method) => method.code,
    ),
    ["STANDARD", "STANDARD_AED"],
    "Offered shipping methods are exactly the selected customer policy",
  );
  const environmentRoot = path.join(__dirname, "../envs", environment);
  assert(
    Number(metadata.index) <
      Number(require(path.join(environmentRoot, "package.json")).index),
    "Shared defaults must load before environment overrides",
  );
  for (const entry of fs.readdirSync(environmentRoot, {
    withFileTypes: true,
  })) {
    const file = path.join(environmentRoot, entry.name, "config/properties.js");
    if (!entry.isDirectory() || !fs.existsSync(file)) continue;
    const properties = require(file);
    assert.equal(
      (properties.activeModules?.modules || []).includes(
        "kickoffAdministration",
      ),
      entry.name === "platformServer",
      "Only Platform may select administration profiles",
    );
    if (entry.name !== "platformServer") continue;
    const effective = loadRuntime(entry.name, environment);
    const consumer = require(
      path.join(
        frameworkRoot,
        "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService",
      ),
    );
    global.CONFIG = { get: (key) => effective[key] };
    const profiles = Object.fromEntries(
      Object.entries(
        effective.backofficeApplicationInitialization.profiles,
      ).map(([code, profile]) => [code, consumer.resolveProfile(profile)]),
    );
    for (const code of Object.keys(
      administration.backofficeApplicationInitialization.profiles,
    )) {
      assert.equal(profiles[code].code, code);
      assert(
        profiles[code].owner &&
          profiles[code].siteCode &&
          profiles[code].baselineCode,
      );
      assert(
        profiles[code].target?.connectionName,
        "A shared profile still requires its deployment target",
      );
    }
    assert.equal(
      effective.backofficeFunctionalModuleActivationData.modules[
        "nodics.communication"
      ],
      undefined,
      "Communication package facts come from its registered manifest",
    );
    const node = merge({}, effective, {
      backofficeApplicationInitialization: {
        profiles: { nexus: { target: { timeoutMs: 9876 } } },
      },
    });
    assert.equal(
      node.backofficeApplicationInitialization.profiles.nexus.target.timeoutMs,
      9876,
    );
    assert.deepEqual(
      node.backofficeApplicationInitialization.profiles.nexus.dataPackages,
      profiles.nexus.dataPackages,
    );
    if (environment === "kickoffLocal") {
      assert.equal(effective.localResetProvider.enabled, true);
      assert.deepEqual(effective.localResetProvider.environmentAllowlist, [
        environment,
      ]);
    } else {
      assert.equal(
        effective.localResetProvider.enabled,
        false,
        "Shared defaults must not opt Docker into local reset",
      );
    }
  }
}
assert.equal(
  require("../envs/kickoffLocal/platformServer/config/properties")
    .profileBrowserSession.refreshCookieName,
  undefined,
);
assert.equal(
  require("../envs/kickoffLocal/commerceServer/config/properties").product
    .discovery.catalogue.maximumCandidates,
  undefined,
);
const localProcessPackage = require("../envs/kickoffLocal/processServer/package.json");
assert(
  localProcessPackage.nodics.runtimeModuleRoots.includes("nodics.rulesEngine"),
  "Process must be able to discover inactive rulesApi data-release contributions without activating Rules behavior",
);
console.log(
  "Kickoff shared defaults, activation scope and deployment overlays validated",
);

// Observe the real loader: structural identities need no explicit activation entry.
// Keep this across every active server so newly added overlays inherit the rule.
const bindings = require(
  path.join(
    frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
  ),
);
const Config = require(
  path.join(frameworkRoot, "nodics.foundation/modules/nConfig/bin/config"),
);
for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  const environmentRoot = path.join(__dirname, "../envs", environment);
  const declaration = require(path.join(environmentRoot, "config/properties"));
  for (const server of fs.readdirSync(environmentRoot)) {
    const file = path.join(environmentRoot, server, "config/properties.js");
    if (!fs.existsSync(file)) continue;
    const metadata = require(
      path.join(environmentRoot, server, "package.json"),
    );
    if (metadata.nodics.retired) continue;
    const properties = require(file);
    assert(!properties.activeModules.modules.includes(server));
    assert(!properties.activeModules.modules.includes(environment));
    const effective = loadRuntime(server, environment, {
      NODICS_MONGODB_URI: "mongodb://configuration-test.invalid:27017",
      NODICS_ELASTICSEARCH_URL: "http://search-configuration-test.invalid:9200",
    });
    assert.equal(effective.database.default.mongodb.test.databaseName, "testLocal");
    const declaredDatabaseName = properties.database?.default?.mongodb?.master?.databaseName;
    if (typeof declaredDatabaseName === "string") {
      assert.equal(effective.database.default.mongodb.master.databaseName, declaredDatabaseName,
        "Explicit server database isolation must survive the framework default change");
    }
    assert(activeModuleNames(effective).includes(server));
    assert(activeModuleNames(effective).includes(environment));
    assert(!activeModuleNames(effective).includes("wcmsServerRetired"));
    if (environment === "kickoffDockerLocal") {
      assert.equal(
        effective.database.default.mongodb.master.URI,
        "mongodb://configuration-test.invalid:27017",
      );
      assert.equal(properties.database.default.mongodb.master.URI, undefined);
      const databaseModule = Object.keys(effective.database).find(
        (name) =>
          name !== "default" &&
          name !== "cronjob" &&
          activeModuleNames(effective).includes(name),
      );
      if (databaseModule) {
        const previousName =
          effective.database.default.mongodb.master.databaseName;
        effective.database.default.mongodb.master.databaseName =
          "nodeDatabaseOverride";
        assert.equal(
          databaseConfiguration(effective, databaseModule).master.databaseName,
          "nodeDatabaseOverride",
          "Participating modules must inherit later default database overrides",
        );
        effective.database.default.mongodb.master.databaseName = previousName;
      }
      for (const [name, search] of Object.entries(properties.search || {})) {
        if (
          search.options?.enabled === true &&
          activeModuleNames(effective).includes(name)
        ) {
          assert.deepEqual(
            searchConfiguration(effective, name).connection.hosts,
            ["http://search-configuration-test.invalid:9200"],
          );
        }
      }
      assert.equal(
        effective.environment.class,
        "LOCAL_PRODUCTION_SIMULATION",
      );
      assert.equal(properties.data?.dataReleases?.environmentClass, undefined);
    }
    assert.equal(declaration.httpHardening?.cors?.allowedHeaders, undefined);
    assert.equal(declaration.httpHardening?.cors?.exposedHeaders, undefined);
    assert.equal(effective.authSecurity.securityStamp.enabled, true);
    const http = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nRouter/src/service/defaultHttpHardeningService",
      ),
    );
    const cors = corsPolicy(effective);
    assert.equal(properties.httpHardening?.cors?.allowedOrigins, undefined);
    assert.equal(properties.httpHardening?.cors?.deniedOrigins, undefined);
    if (environment === "kickoffLocal") {
      assert.deepEqual(declaration.httpHardening.cors.allowedOrigins, [
        "http://localhost:3600",
      ]);
    } else {
      assert.equal(declaration.httpHardening?.cors?.allowedOrigins, undefined);
    }
    const resolvedOrigins = http.resolveCorsOrigins(cors);
    assert(resolvedOrigins.allowedOrigins.length > 0);
    const expectedOrigins = Object.values(declaration.httpHardening?.cors?.originEndpoints || routerProperties.httpHardening.cors.originEndpoints).map(endpoint => `http://localhost:${endpoint.port}`);
    assert.deepEqual(
      [
        ...new Set([
          ...resolvedOrigins.allowedOrigins,
          ...resolvedOrigins.deniedOrigins,
        ]),
      ].sort(),
      [...new Set(expectedOrigins)].sort(),
    );
    for (const origin of resolvedOrigins.deniedOrigins) {
      assert.equal(new URL(origin).hostname, "localhost");
      assert.equal(http.resolveAllowedOrigin(origin, cors), undefined);
    }
    for (const origin of resolvedOrigins.allowedOrigins) {
      const url = new URL(origin);
      assert.equal(url.hostname, "localhost");
      assert.equal(
        http.resolveAllowedOrigin(origin, cors),
        resolvedOrigins.deniedOrigins.includes(origin) ? undefined : origin,
      );
      url.hostname = "127.0.0.1";
      assert.equal(http.resolveAllowedOrigin(url.origin, cors), undefined);
      url.hostname = "172.20.10.2";
      assert.equal(http.resolveAllowedOrigin(url.origin, cors), undefined);
    }
    assert.equal(
      http.resolveAllowedOrigin("http://localhost:65534", cors),
      undefined,
    );
    const allowed = http.resolveCorsHeaderList(
      cors.allowedHeaders,
      cors.allowedHeaderOverrides,
    );
    assert(
      allowed.includes("Authorization") &&
        allowed.includes("X-Tenant-Code") &&
        allowed.includes("Tenant"),
    );
    assert(
      http
        .resolveCorsHeaderList(cors.exposedHeaders, cors.exposedHeaderOverrides)
        .includes("ETag"),
    );
  }

  // Runtime consumers resolve the actual server endpoint; tenant overrides stay independent.
  const effective = loadRuntime("wasteServer", environment);
  const registry = new Config();
  registry.setProperties(effective);
  const original = structuredClone(effective.servers.profile.endpoint);
  registry.changeTenantProperties({servers:{profile:{endpoint:{httpPort:54322}}}}, "default");
  assert.deepEqual(registry.get("servers").profile.endpoint, {...original,httpPort:54322});
  if (environment === "kickoffLocal") {
    assert.equal(declaration.search, undefined, "Local inherits the provider-owned search address");
    assert.deepEqual(searchConfiguration(effective, "wasteSubmission").connection.hosts, ["http://localhost:9200"]);
    effective.search.default.elastic.connection.hosts = ["https://search.example.test:9243"];
    assert.deepEqual(searchConfiguration(effective, "wasteSubmission").connection.hosts, ["https://search.example.test:9243"], "An intentional later deployment override must reach the consumer");
  }
  assert.equal(declaration.configurationValues, undefined);
  assert.equal(fs.existsSync(path.join(environmentRoot, "nodics.environment.json")), false);

}
console.log(
  "Kickoff minimal topology, inherited connections and endpoint overrides validated",
);

require("node:test")(
  "Redis module configuration inherits framework capability defaults and later overrides",
  async () => {
    const helper = require("./helpers/configuration");
    assert.deepEqual(
      require("../envs/kickoffLocal/config/properties").cache.default.engines.redis,
      { enabled: true },
      "Local enables Redis and inherits all unchanged provider options",
    );
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const effective = loadRuntime("commerceServer", environment);
      const baseline = await helper.cacheConfiguration(effective, "auth");
      assert.equal(baseline.engines.redis.enabled, true);
      assert.equal(baseline.engines.redis.options.prefix, "localRuntimeAuth");
      effective.cache.default.engines.redis.options.prefix = "isolatedRuntimeAuth";
      const override = await helper.cacheConfiguration(effective, "auth");
      assert.equal(override.engines.redis.options.prefix, "isolatedRuntimeAuth");
    }
    const p = loadRuntime("commerceServer", "kickoffDockerLocal");
    const inherited = await helper.cacheConfiguration(p, "auth");
    assert.equal(inherited.engines.redis.enabled, true);
    assert.equal(inherited.engines.redis.distributed, true);
    assert.equal(inherited.engines.redis.atomicConsume, true);
    p.cache.default.engines.redis.ttl = 270;
    const changed = await helper.cacheConfiguration(p, "auth");
    assert.equal(changed.engines.redis.ttl, 270);
    const redis = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nCache/redisCache/src/service/engine/defaultRedisCacheEngineService",
      ),
    );
    const selected = redis.buildSentinelOptions(changed.engines.redis.options);
    assert.equal(selected.db, 0);
    assert.equal(selected.retryStrategy(1), 250);
    assert.equal(selected.retryStrategy(100), 5000);
    assert.equal(selected.connectTimeout, 5000);
    assert.equal(selected.commandTimeout, 3000);
  },
);

require("node:test")(
  "Customer domains and replacement origins follow nConfig overrides and frontend identity restrictions",
  () => {
    const helper = require("./helpers/configuration");
    const http = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nRouter/src/service/defaultHttpHardeningService",
      ),
    );
    const p = loadRuntime("processServer");
    const cors = corsPolicy(p);
    cors.originDefaults = {
      protocol: "https",
      host: "preview.customer.example",
    };
    const editor = cors.originEndpoints.axis;
    const publicSite = cors.originEndpoints.nexus;
    editor.port = 443;
    publicSite.port = 8443;
    assert.equal(
      http.resolveAllowedOrigin("https://preview.customer.example", cors),
      "https://preview.customer.example",
    );
    assert.equal(
      http.resolveAllowedOrigin("https://preview.customer.example:8443", cors),
      undefined,
    );
    assert.equal(
      http.resolveAllowedOrigin("http://localhost:3100", cors),
      undefined,
    );
    const replacement = bindings.merge(
      cors,
      bindings.resolve(
        {
          originEndpoints: {
            $config: "replace",
            value: {
              app: {
                protocol: "https",
                host: "app.customer.example",
                port: 443,
              },
            },
          },
          originEndpointOverrides: { $config: "replace", value: {} },
          allowedOrigins: { $config: "replace", value: [] },
          deniedOrigins: { $config: "replace", value: [] },
        },
        cors,
      ),
    );
    assert.deepEqual(http.resolveCorsOrigins(replacement), {
      allowedOrigins: ["https://app.customer.example"],
      deniedOrigins: [],
    });
    const empty = bindings.merge(
      replacement,
      bindings.resolve(
        { originEndpoints: { $config: "replace", value: {} } },
        replacement,
      ),
    );
    assert.deepEqual(http.resolveCorsOrigins(empty), {
      allowedOrigins: [],
      deniedOrigins: [],
    });
  },
);


require('node:test')('standard CORS policy reaches independent API graphs without Platform or accelerator activation', () => {
  const local = require('../envs/kickoffLocal/config/properties');
  const docker = require('../envs/kickoffDockerLocal/config/properties');
  assert.equal(local.httpHardening?.cors?.enabled, undefined);
  assert.equal(local.httpHardening?.cors?.originEndpoints, undefined);
  assert.equal(docker.httpHardening.cors.enabled, undefined);
  for (const server of ['wcmsOnlineServer', 'processServer']) {
    const effective = loadRuntime(server);
    const modules = activeModuleNames(effective);
    assert.equal(modules.includes('nodics.platform'), false);
    assert.equal(modules.includes('axis'), false);
    assert.equal(effective.httpHardening.cors.enabled, true);
    assert.deepEqual(effective.httpHardening.cors.originEndpoints, routerProperties.httpHardening.cors.originEndpoints);
    assert.equal(effective.httpHardening.cors.originEndpoints.axis.port, 3100);
  }
});

assert.equal(require("../envs/kickoffLocal/config/properties").database, undefined,
  "Local must inherit MongoDB defaults instead of declaring a project-branded baseline");

require('node:test')('Local publication callback and operational Commerce activation preserve destination authority', () => {
  const processRuntime = loadRuntime('processServer');
  assert.ok(processRuntime.runtimeIdentity.remoteModules.includes('cms'));
  assert.ok(processRuntime.runtimeIdentity.remoteModules.includes('editorial'));
  assert.ok(processRuntime.runtimeIdentity.remoteModules.includes('rulesApi'));
  assert.ok(processRuntime.data.dataReleases.contributions.some(contribution =>
    contribution.moduleName === 'rulesApi' &&
    contribution.sections.includes('rulesPolicyApproval')));
  const platform = loadRuntime('platformServer');
  const pack = platform.backofficeFunctionalModuleActivationData.modules['nodics.commerce'].dataPackages.find(pack => pack.code === 'baseCommerce:core-reference');
  assert.equal(pack.targetServer, 'commerceServer');
  const target = loadRuntime(pack.targetServer);
  const manifest = require(path.join(frameworkRoot, 'nodics.commerce/modules/baseCommerce/data/manifest.json'));
  assert.equal(target.runtimeRole.code, manifest.sections['core-reference'].destinationRole);
  const rulesPack = platform.backofficeFunctionalModuleActivationData.modules['nodics.rulesEngine'].dataPackages.find(pack => pack.code === 'rulesApi:rulesPolicyApproval');
  assert.equal(rulesPack.targetServer, 'processServer');
  const rulesTarget = loadRuntime(rulesPack.targetServer);
  const rulesManifest = require(path.join(frameworkRoot, 'nodics.rulesEngine/modules/rulesApi/data/manifest.json'));
  assert.equal(rulesTarget.runtimeRole.code, rulesManifest.sections.rulesPolicyApproval.destinationRole);
});
