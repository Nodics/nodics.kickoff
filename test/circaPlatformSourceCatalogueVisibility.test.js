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
const { frameworkRoot, activeModuleNames, loadRuntime } = require("./helpers/configuration");

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

test("Circa preparation selects Platform access data without activating Commerce or Loyalty on Platform", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal", {});
  const preparation = platform.backofficeApplicationInitialization.profiles.circa.preparation;
  const platformSteps = preparation.prerequisites.filter(
    step => step.targetRuntimeRole === "PLATFORM" && step.targetServer === "platformServer",
  );
  const releases = platform.data.dataReleases;
  const profile = releases.initializationProfileDefaults[releases.initializationProfiles.circaIdentityAuthority.template];
  const selected = new Set([
    ...platformSteps.map(step => step.code),
    ...profile.steps.flatMap(step => step.releaseCodes),
  ]);
  const active = new Set(activeModuleNames(platform));

  for (const { moduleName, sections } of expected) {
    assert.equal(active.has(moduleName), false, moduleName);
    for (const section of sections) {
      const code = moduleName + ":" + section;
      assert(selected.has(code), "Circa preparation must select " + code);
    }
  }
});

test("native receivers discover and admit Circa Init sources and their exact prerequisites", async () => {
  const path = require("node:path");
  const projection = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));
  const platform = loadRuntime("platformServer", "kickoffLocal");
  const profile = platform.backofficeApplicationInitialization.profiles.circa;
  const backoffice = require(path.join(frameworkRoot,
    "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const steps = backoffice.preparationSteps(profile).filter(step => step.required && step.dataType === "init");
  for (const [server, role] of [["platformServer", "PLATFORM"], ["processServer", "PROCESS"]]) {
    await projection.resolve({ projectRoot: path.resolve(__dirname, ".."), frameworkRoot, environment: "kickoffLocal", server });
    const imports = SERVICE.DefaultDataReleaseService;
    const catalogue = imports.discoverReleases("init");
    const checked = new Set();
    function check(code, pin) {
      const matches = catalogue.filter(release => release.releaseCode === code);
      assert.equal(matches.length, 1, server + "/" + code);
      const [release] = matches;
      assert(!release.invalidManifest, code);
      if (pin) {
        assert.equal(release.version, pin.version, code);
        assert.equal(release.checksum, pin.checksum, code);
      }
      if (checked.has(code)) return;
      checked.add(code);
      assert.equal(imports.validateDestination(release), true, code);
      for (const prerequisite of release.prerequisites)
        check(prerequisite.moduleName + ":" + prerequisite.sectionCode, prerequisite);
    }
    const selected = steps.filter(step => step.targetRuntimeRole === role);
    assert(selected.length > 0, server);
    for (const step of selected) check(step.code);
    if (role === "PLATFORM") {
      for (const step of imports.initializationProfiles().circaIdentityAuthority.steps)
        for (const code of step.releaseCodes) check(code);
    }
  }
});
