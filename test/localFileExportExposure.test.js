/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/localFileExportExposure @description Protects the exact Local export opt-in while retaining other deployment defaults. @layer test @owner nodics.kickoff */
const assert = require("node:assert/strict");
const path = require("node:path");
const { test } = require("node:test");

test("only Local WCMS Staged opts in to governed file generation", () => {
  const selected = require("../envs/kickoffLocal/wcmsStagedServer/config/properties");
  assert.equal(selected.apiExposure?.categories?.dataExport?.enabled, true);
  const { loadRuntime, frameworkRoot } = require("./helpers/configuration");
  const owner = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nExport/export/config/properties"));
  assert.equal(owner.apiExposure.categories.dataExport.enabled, false);
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    for (const server of ["platformServer", "processServer", "wcmsOnlineServer", "wcmsStagedServer", "wasteServer", "commerceStagedServer", "commerceServer"]) {
      if (environment === "kickoffLocal" && server === "wcmsStagedServer") continue;
      const override = require(path.join("..", "envs", environment, server, "config/properties"));
      assert.notEqual(override.apiExposure?.categories?.dataExport?.enabled, true);
    }
  }
  assert.equal(loadRuntime("wcmsStagedServer", "kickoffLocal").apiExposure.categories.dataExport.enabled, true);
  assert.equal(loadRuntime("wcmsStagedServer", "kickoffDockerLocal").apiExposure.categories.dataExport.enabled, false);
});
