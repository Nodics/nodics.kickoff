/**
 * @module test/nativeLocalProviderIsolation
 * @description Observes native Local provider isolation through real nConfig, nCache and nSearch consumers without connecting providers or importing data.
 * @layer test
 * @owner nodics.kickoff
 */
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { createRequire } = require("node:module");
const {
  frameworkRoot,
  loadRuntime,
  cacheConfiguration,
} = require("./helpers/configuration");
const projectRoot = path.resolve(__dirname, "..");
const frameworkRequire = createRequire(
  path.join(frameworkRoot, "nodics.foundation/package.json"),
);
const merge = frameworkRequire("lodash/merge");
const prepare = require(
  path.join(
    frameworkRoot,
    "nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs",
  ),
);
const foundation = (file) =>
  require(path.join(frameworkRoot, "nodics.foundation/modules", file));
const servers = [
  "platformServer",
  "wcmsStagedServer",
  "wcmsOnlineServer",
  "processServer",
  "commerceServer",
  "commerceStagedServer",
  "engagementServer",
  "loyaltyServer",
  "locationServer",
  "wasteServer",
];
const log = { debug() {}, info() {}, warn() {}, error() {} };

test("native Local auth and Profile refresh namespaces are isolated without changing Docker defaults", async () => {
  const storage = foundation(
    "nCache/cache/src/service/config/defaultCacheConfigurationService",
  );
  for (const server of servers) {
    const properties = loadRuntime(server);
    for (const moduleName of server === "platformServer"
      ? ["auth", "profile"]
      : ["auth"]) {
      const cache = await cacheConfiguration(properties, moduleName);
      const channel = cache.channels.auth;
      assert.equal(channel.engine, "redis");
      assert.equal(channel.fallback, false);
      const engineOptions = cache.engines[channel.engine];
      assert.equal(engineOptions.options.prefix, "kickoffLocalRuntimeAuth");
      assert.equal(
        storage.createStoragePrefix({
          channel: { channelName: "auth", engineOptions },
        }),
        "auth_kickoffLocalRuntimeAuth_",
      );
    }
  }
  const docker = await cacheConfiguration(
    loadRuntime("platformServer", "kickoffDockerLocal"),
    "profile",
  );
  assert.equal(docker.engines.redis.options.prefix, "localRuntimeAuth");
});

test("native Local's real layered search loader isolates every enabled static index while retaining logical consumers", (context) => {
  const helpers = [
    "toUpperCaseFirstChar",
    "toLowerCaseFirstChar",
    "toUpperCaseEachWord",
    "toLowerCaseEachWord",
    "replaceAll",
  ];
  const prior = helpers.map((name) =>
    Object.getOwnPropertyDescriptor(String.prototype, name),
  );
  foundation("nConfig/config/prescripts").addStringCamelCaseFunction();
  context.after(() =>
    helpers.forEach((name, index) => {
      if (prior[index])
        Object.defineProperty(String.prototype, name, prior[index]);
      else delete String.prototype[name];
    }),
  );
  const files = foundation("nConfig/src/service/defaultFilesLoaderService");
  files.LOG = log;
  const schemaLoader = {
    ...foundation(
      "nSearch/search/src/service/schema/defaultSearchSchemaHandlerService",
    ),
    LOG: log,
  };
  const elasticSchema = {
    ...foundation(
      "nSearch/elastic/src/service/schema/defaultElasticSearchSchemaHandlerService",
    ),
    LOG: log,
  };
  const searchOwner = foundation(
    "nSearch/search/src/service/config/defaultSearchConfigurationService",
  );
  const overlay = require("../envs/kickoffLocal/src/search/indexes");
  for (const server of servers) {
    const runtime = prepare({
      projectRoot,
      frameworkRoot,
      environment: "kickoffLocal",
      server,
    });
    global.ENUMS = {};
    foundation("nConfig/src/service/defaultEnumService").loadEnums();
    global.UTILS = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/utils/utils",
      ),
    );
    global.CLASSES = { SearchError: Error };
    const schemas = files.loadFiles("/src/schemas/schemas.js");
    const modules = Object.fromEntries(
      runtime.modules.map((name) => [name, { rawSchema: schemas[name] || {} }]),
    );
    NODICS.setModules(modules);
    // Only persistence handles are substituted; schema/index discovery uses actual owners.
    NODICS.getModels = () => ({});
    const search = { ...searchOwner, searchSchema: {} };
    search.getTenantSearchEngine = (moduleName) => {
      if (!CONFIG.get("search")) return undefined;
      const configuration = search.getSearchConfiguration(
        moduleName,
        "default",
      );
      const options = merge(
        {},
        configuration.options,
        configuration[configuration.options.engine]?.options,
      );
      return options.enabled ? { getOptions: () => options } : undefined;
    };
    global.SERVICE = {
      DefaultFilesLoaderService: files,
      DefaultSearchConfigurationService: search,
      DefaultElasticSearchSchemaHandlerService: elasticSchema,
    };
    schemaLoader.loadSearchSchemaFromSchema(["default"]);
    schemaLoader.loadSearchSchema(["default"]);
    const selected = search.getAllRawSearchSchema();
    let count = 0;
    for (const [moduleName, tenants] of Object.entries(selected)) {
      for (const [logicalName, definition] of Object.entries(tenants.default)) {
        count++;
        assert.equal(definition.typeName, logicalName);
        assert.equal(
          definition.indexName,
          overlay[moduleName]?.[logicalName]?.indexName,
          `${server}: unexpected enabled index ${moduleName}/${logicalName}`,
        );
        assert.match(definition.indexName, /^kickofflocal_/);
        assert.equal(definition.enabled, true);
      }
    }
    const expectedCount = ["commerceServer", "commerceStagedServer"].includes(
      server,
    )
      ? 4
      : [
            "platformServer",
            "wasteServer",
            "wcmsStagedServer",
            "wcmsOnlineServer",
          ].includes(server)
        ? 1
        : 0;
    assert.equal(count, expectedCount, server);
    if (server.startsWith("wcms")) {
      assert.equal(
        CONFIG.get("wcmsExperience").projection.indexName,
        "discoveryDocumentProjection",
      );
      assert.equal(
        modules.wcmsExperience.rawSchema.cmsExperiencePlacement.search.enabled,
        false,
      );
      assert.equal(selected.wcmsExperience, undefined);
    }
  }
  prepare({
    projectRoot,
    frameworkRoot,
    environment: "kickoffDockerLocal",
    server: "commerceServer",
  });
  const dockerDefinitions = files.loadFiles("/src/search/indexes.js");
  assert.notEqual(
    dockerDefinitions.product.productLocalized.indexName,
    "kickofflocal_productlocalized",
  );
});
