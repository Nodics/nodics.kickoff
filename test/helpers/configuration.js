/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module test/helpers/configuration @description Supplies Kickoff fixture coordinates to the framework-owned configuration test harness. @layer test @owner nodics.kickoff */
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
