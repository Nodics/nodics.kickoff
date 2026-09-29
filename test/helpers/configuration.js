"use strict";
/** Customer fixture coordinates only; configuration consumers and loader mechanics are framework-owned. */
const path = require("node:path");
const projectRoot = path.resolve(__dirname, "../..");
const foundation = path.dirname(require.resolve("nodics.foundation/package.json"));
const frameworkRoot = process.env.NODICS_FRAMEWORK_ROOT
  ? path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT) : path.dirname(foundation);
const { createProjectConfigurationTestHarness } = require(path.join(frameworkRoot,
  "nodics.foundation/modules/nTooling/test/helpers/projectConfiguration"));
const harness = createProjectConfigurationTestHarness({ projectRoot, frameworkRoot });
module.exports = {
  ...harness,
  loadEnvironment: (environment = "kickoffLocal") => harness.loadEnvironment(environment),
  loadContainer: (environment = "dockerLocal") => harness.loadContainer(environment),
  loadRuntime: (server, environment = "kickoffLocal", variables = {}) => harness.loadRuntime(server, environment, variables),
};
