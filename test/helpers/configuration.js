"use strict";

/** Test-only access to the configured framework's merge semantics and shared project defaults. */
const path = require("node:path");
const { createRequire } = require("node:module");
const projectRoot = path.resolve(__dirname, "../..");
const frameworkRoot = path.resolve(
  projectRoot,
  process.env.NODICS_FRAMEWORK_ROOT || "../nodics.ai",
);
const frameworkRequire = createRequire(
  path.join(frameworkRoot, "package.json"),
);
const merge = frameworkRequire("lodash/merge");
const administration = require("../../modules/kickoffAdministration/config/properties");

const runtimeGraphs = new WeakMap();

/** Evaluate an existing pure configuration consumer with isolated test globals. */
function consume(properties, modulePath, operation) {
  const previousConfig = global.CONFIG;
  const previousLodash = global._;
  try {
    global.CONFIG = { get: (key) => properties[key] };
    global._ = frameworkRequire("lodash");
    return operation(require(path.join(frameworkRoot, modulePath)));
  } finally {
    global.CONFIG = previousConfig;
    global._ = previousLodash;
  }
}

module.exports = {
  /** Resolve the selected reset inventories through the existing System owner. */
  resetPolicy: (properties) => consume(properties, 'nodics.foundation/modules/nSystem/src/service/operations/defaultLocalResetProviderService', service => service.policy()),
  /** Resolve effective module endpoints through nService without starting any client. */
  moduleConfiguration: (properties, name) => consume(properties, 'nodics.foundation/modules/nService/src/service/module/defaultModulesConfigurationService', service => {
    const previousUtils = global.UTILS;
    try { global.UTILS = {isBlank: value => !value || !Object.keys(value).length}; return service.normalizeModuleConfiguration(properties.servers[name], properties.servers.options); }
    finally { global.UTILS = previousUtils; }
  }),
  /** Read real layered environment tooling configuration without any descriptor. */
  loadEnvironment: (environment = 'kickoffLocal') => require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs')).readProjectEnvironmentConfiguration(projectRoot, environment),
  loadContainer: (environment = 'dockerLocal') => require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectContainerConfigurationService.mjs')).readContainerEnvironmentConfiguration(projectRoot, environment),
  corsPolicy: (properties) => consume(properties, 'nodics.foundation/modules/nRouter/src/service/defaultHttpHardeningService', service => service.getPolicy().cors),
  /** Resolve nRouter's actual configured origin construction and denial policy. */
  corsOrigins: (properties) =>
    consume(
      properties,
      "nodics.foundation/modules/nRouter/src/service/defaultHttpHardeningService",
      (service) => service.resolveCorsOrigins(properties.httpHardening.cors),
    ),
  /** Resolve nRouter's actual inherited CORS header policy. */
  corsHeaders: (properties, kind) =>
    consume(
      properties,
      "nodics.foundation/modules/nRouter/src/service/defaultHttpHardeningService",
      (service) =>
        service.resolveCorsHeaderList(
          properties.httpHardening.cors[kind + "Headers"],
          properties.httpHardening.cors[kind + "HeaderOverrides"],
        ),
    ),
  /** Resolve nCache's active-module engine/channel inheritance without opening clients. */
  cacheConfiguration: (properties, name) =>
    consume(
      properties,
      "nodics.foundation/modules/nCache/cache/src/service/config/defaultCacheConfigurationService",
      (service) => {
        const previous = global.NODICS;
        const isolated = { ...service, channels: {}, engines: {} };
        try {
          global.NODICS = { getModules: () => ({ [name]: { name } }) };
          return isolated.loadCacheConfiguration().then(() => ({
            channels: isolated.channels[name],
            engines: isolated.engines[name],
          }));
        } finally {
          global.NODICS = previous;
        }
      },
    ),
  /** Observe nDatabase's actual connection consumer for a module in a prepared project graph. */
  databaseConfiguration: (properties, name) =>
    consume(
      properties,
      "nodics.foundation/modules/nDatabase/database/src/service/config/defaultDatabaseConfigurationService",
      (service) => {
        const previous = global.NODICS;
        const modules = runtimeGraphs.get(properties) || [];
        try {
          global.NODICS = {
            isModuleActive: (module) => modules.includes(module),
            getModule: (module) =>
              modules.includes(module) ? { name: module } : undefined,
            getActiveTenants: () => [],
          };
          return service.getDatabaseConfiguration(name, "default");
        } finally {
          global.NODICS = previous;
        }
      },
    ),
  /** Resolve nSearch's selected engine/provider options without connecting a provider. */
  searchConfiguration: (properties, name) =>
    consume(
      properties,
      "nodics.foundation/modules/nSearch/search/src/service/config/defaultSearchConfigurationService",
      (service) => service.getSearchConfiguration(name, "default"),
    ),
  /** Apply the actual nImport destination validator, including the runtime-role default. */
  validateDestination: (properties, role) =>
    consume(
      properties,
      "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService",
      (service) =>
        ({
          ...service,
          error: (code, message) => Object.assign(new Error(message), { code }),
        }).validateDestination({
          destinationRole: role,
          environmentScope: [properties.environment.class],
        }),
    ),
  /** Resolve the existing nService authority contract for a selected module. */
  authorityContext: (properties, name) =>
    consume(
      properties,
      "nodics.foundation/modules/nService/src/service/module/defaultModuleRegistrationAgentService",
      (service) => service.getAuthorityContext(name, "testRecord", {}),
    ),
  /** Resolve project/environment/server declarations through the real nConfig loader without starting runtime resources. */
  loadRuntime: function (server, environment = "kickoffLocal", variables = {}) {
    const { execFileSync } = require("node:child_process");
    const output = execFileSync(
      process.execPath,
      [
        path.join(__dirname, "resolvedRuntime.js"),
        server,
        environment,
        JSON.stringify(variables),
      ],
      {
        env: {
          PATH: process.env.PATH,
          HOME: process.env.HOME,
          NODICS_FRAMEWORK_ROOT: frameworkRoot,
        },
        encoding: "utf8",
        maxBuffer: 16 * 1024 * 1024,
        timeout: 30000,
      },
    );
    const parsed = JSON.parse(output);
    runtimeGraphs.set(parsed.properties, parsed.modules);
    return parsed.properties;
  },
  /** Return the actual discovered and indexed graph for a loaded acceptance runtime. */
  activeModuleNames: (properties) => runtimeGraphs.get(properties) || [],
  merge,
  frameworkRoot,
  /** Compose only the selected project administration defaults for focused declaration tests. */
  inheritAdministration: function (properties) {
    return merge(
      {},
      properties.activeModules.modules.includes("kickoffAdministration")
        ? administration
        : {},
      properties,
    );
  },
};
