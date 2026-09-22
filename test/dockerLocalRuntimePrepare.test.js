/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");

const frameworkRoot = path.resolve(
  projectRoot,
  process.env.NODICS_FRAMEWORK_ROOT || "../nodics.ai",
);
const packageRoot = (packageName) => path.join(frameworkRoot, packageName);
const scenarios = [
  [
    "platformServer",
    ["nodics.platform", "nodics.localization"],
    "kickoffDockerLocalPlatform",
    "PLATFORM",
  ],
  [
    "wcmsStagedServer",
    ["nodics.wcms", "nodics.platform"],
    "kickoffDockerLocalWcmsStaged",
    "WCMS_STAGED",
  ],
  [
    "wcmsOnlineServer",
    ["nodics.wcms"],
    "kickoffDockerLocalWcmsOnline",
    "WCMS_ONLINE",
  ],
  [
    "processServer",
    ["nodics.process", "nodics.wcms"],
    "kickoffDockerLocalProcess",
    "PROCESS",
  ],
  [
    "engagementServer",
    ["nodics.communication", "nodics.engagement"],
    "kickoffDockerLocalEngagement",
    "ENGAGEMENT",
  ],
  [
    "commerceServer",
    ["nodics.discovery", "nodics.commerce", "nodics.accelerators"],
    "kickoffDockerLocalCommerce",
    "COMMERCE",
  ],
  [
    "commerceStagedServer",
    ["nodics.discovery", "nodics.commerce", "nodics.accelerators"],
    "kickoffDockerLocalCommerceStaged",
    "COMMERCE_STAGED",
  ],
  ["loyaltyServer", ["nodics.loyalty"], "kickoffDockerLocalLoyalty", "LOYALTY"],
  ["wasteServer", ["nodics.waste"], "kickoffDockerLocalWaste", "WASTE"],
  [
    "locationServer",
    ["nodics.location"],
    "kickoffDockerLocalLocation",
    "LOCATION",
  ],
];

async function main() {
  process.env.NODICS_MONGODB_URI =
    "mongodb://mongodb:27017/?replicaSet=nodicsDockerLocal";
  for (const [server, modules, databaseName, role] of scenarios) {
    const coreRoot = packageRoot("nodics.foundation");
    const config = require(path.join(coreRoot, "modules/nConfig"));
    const metadata = require(
      path.join(projectRoot, "envs/kickoffDockerLocal", server, "package.json"),
    ).nodics;
    const moduleRoots = metadata.runtimeModuleRoots || metadata.extends;
    for (const expected of modules) assert(moduleRoots.includes(expected));
    await config.prepareStart({
      NODICS_HOME: coreRoot,
      CUSTOM_HOME: projectRoot,
      MODULE_ROOTS: [coreRoot, ...moduleRoots.map(packageRoot), projectRoot],
      defaultEnvironment: "kickoffDockerLocal",
      defaultServer: server,
    });
    assert.equal(NODICS.isModuleActive("kickoffAdministration"), false, "Synthetic administration module must not be selected");
    assert.equal(NODICS.isModuleActive("kickoffCore"), true, "Project-owned administration defaults live in Kickoff Core");
    assert.equal(Boolean(CONFIG.get("backofficeApplicationInitialization")?.runtimeRoleProfiles), false, "BackOffice runtime-role profiles are projected out of effective config");
    assert.equal(Boolean(CONFIG.get("backofficeApplicationInitialization")?.profiles?.agoraapparel), server === "platformServer", "Shared BackOffice administration profiles must be scoped to Platform runtime role");
    assert.equal(Boolean(CONFIG.get("backofficeFunctionalModuleActivationData")?.modules?.["nodics.commerce"]), server === "platformServer", "Shared BackOffice functional activation data must be scoped to Platform runtime role");
    assert.equal(NODICS.getSelectedEnvironmentName(), "kickoffDockerLocal");
    assert.equal(NODICS.getServerName(), server);
    assert.equal(
      CONFIG.get("environment").class,
      "LOCAL_PRODUCTION_SIMULATION",
    );
    assert.equal(
      CONFIG.get("database").default.mongodb.master.databaseName,
      databaseName,
    );
    assert.equal(CONFIG.get("runtimeRole").code, role);
    if (server === "commerceStagedServer") {
      assert.equal(require("./helpers/configuration").validateDestination(CONFIG.getProperties(), "COMMERCE_STAGED"), true);
      assert.equal(NODICS.isModuleActive("agora.apparel"), true);
    }
    if (server === "commerceServer") {
      assert.equal(NODICS.isModuleActive("agora.apparel"), false);
    }
    if (server === "commerceServer" || server === "commerceStagedServer") {
      assert.equal(NODICS.isModuleActive("nodics.discovery"), true);
      for (const moduleName of ["store", "cart", "shoppingList"]) assert.equal(NODICS.isModuleActive(moduleName), true);
      assert.equal(CONFIG.get("cart").customerApi.defaultStoreCode, undefined);
      assert.equal(CONFIG.get("shoppingList").customerApi.defaultStoreCode, undefined);
      assert.equal(
        CONFIG.get("search").discoveryProjection.options.enabled,
        true,
      );
    }
    assert(
      CONFIG.get("database").default.mongodb.master.URI.includes("mongodb"),
    );
    const required = {
      platformServer: ["profile", "backoffice"],
      wcmsStagedServer: ["cms", "media", "discoveryProjection"],
      wcmsOnlineServer: ["cms", "media", "discoveryProjection"],
      processServer: ["workflow", "cronjob"],
      loyaltyServer: ["loyaltyWallet"],
      wasteServer: ["wasteSubmission"],
      locationServer: ["locationCore"],
    };
    for (const capability of required[server] ||
      (server === "engagementServer" ? ["contactSubmission"] : ["product"]))
      assert(NODICS.isModuleActive(capability));
    assert(NODICS.isModuleActive("kickoffDockerLocal"));
    assert(!NODICS.isModuleActive("kickoffLocal"));
    console.log(`kickoffDockerLocal ${server} preparation passed`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
