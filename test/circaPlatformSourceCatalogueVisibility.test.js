/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module test/circaPlatformSourceCatalogueVisibility @description Verifies Local Platform consumes exact framework-owned Circa prerequisite sources without capability activation. @layer test @owner nodics.kickoff */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { activeModuleNames, loadRuntime } = require("./helpers/configuration");
const platformPackage = require("../envs/kickoffLocal/platformServer/package.json");
const frameworkRoot = path.resolve(__dirname, "../../nodics.ai");

const expected = [
  { moduleName: "product", sections: ["accessGroups"] },
  { moduleName: "promotion", sections: ["accessGroups"] },
  { moduleName: "order", sections: ["accessGroups"] },
  { moduleName: "inventory", sections: ["specialAccessRoles"] },
  {
    moduleName: "loyaltyWallet",
    sections: ["specialAccessRoles", "participantAccessGroups"],
  },
  {
    moduleName: "digitalCore",
    sections: ["bundleParticipantPermissions", "participantAccessGroups"],
  },
];

test("kickoffLocal Platform observes only the selected Commerce and Loyalty sources", () => {
  const local = loadRuntime("platformServer", "kickoffLocal", {});
  const docker = loadRuntime("platformServer", "kickoffDockerLocal", {});
  const localContributions = local.data.dataReleases.contributions;
  const dockerContributions = docker.data.dataReleases.contributions;

  assert(platformPackage.nodics.runtimeModuleRoots.includes("nodics.commerce"));
  for (const selector of expected) {
    assert.deepEqual(
      localContributions.find(
        (entry) => entry.moduleName === selector.moduleName,
      ),
      selector,
    );
    assert.equal(
      dockerContributions.some(
        (entry) => entry.moduleName === selector.moduleName,
      ),
      selector.moduleName === "loyaltyWallet",
      selector.moduleName,
    );
  }

  const inactive = new Set([
    "product",
    "promotion",
    "order",
    "inventory",
    "loyaltyWallet",
    "digitalCore",
  ]);
  assert.deepEqual(
    activeModuleNames(local).filter((moduleName) => inactive.has(moduleName)),
    [],
  );

  const paths = {
    product: "nodics.commerce/modules/baseCommerce/modules/product",
    promotion: "nodics.commerce/modules/baseCommerce/modules/promotion",
    order: "nodics.commerce/modules/checkout/modules/order",
    inventory: "nodics.commerce/modules/baseCommerce/modules/inventory",
    loyaltyWallet: "nodics.loyalty/modules/loyaltyWallet",
    digitalCore:
      "nodics.commerce/modules/digitalCommerce/modules/digitalCore",
  };
  const previousNodics = global.NODICS;
  const previousConfig = global.CONFIG;
  global.NODICS = {
    getActiveModules: () => [],
    getRawModule: (moduleName) =>
      paths[moduleName]
        ? {
            name: moduleName,
            path: path.join(frameworkRoot, paths[moduleName]),
            index: "1.0",
          }
        : undefined,
  };
  global.CONFIG = { get: (key) => (key === "data" ? local.data : undefined) };
  try {
    const releases = require(path.join(
      frameworkRoot,
      "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService",
    ));
    assert.deepEqual(
      releases
        .discoverReleases("init")
        .filter((release) => inactive.has(release.moduleName))
        .map((release) => ({
          code: release.releaseCode,
          version: release.version,
          destinationRole: release.destinationRole,
          invalidManifest: release.invalidManifest === true,
        })),
      [
        {
          code: "loyaltyWallet:specialAccessRoles",
          version: "0.0.3",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "product:accessGroups",
          version: "0.0.4",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "promotion:accessGroups",
          version: "0.0.4",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "order:accessGroups",
          version: "0.0.4",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "inventory:specialAccessRoles",
          version: "0.0.3",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "digitalCore:bundleParticipantPermissions",
          version: "0.0.1",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "digitalCore:participantAccessGroups",
          version: "0.0.1",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
        {
          code: "loyaltyWallet:participantAccessGroups",
          version: "0.0.1",
          destinationRole: "PLATFORM",
          invalidManifest: false,
        },
      ],
    );
  } finally {
    if (previousNodics === undefined) delete global.NODICS;
    else global.NODICS = previousNodics;
    if (previousConfig === undefined) delete global.CONFIG;
    else global.CONFIG = previousConfig;
  }
});
