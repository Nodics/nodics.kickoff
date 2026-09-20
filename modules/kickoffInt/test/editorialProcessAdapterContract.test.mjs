/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** Verifies the reference runtimes select the framework's remote Editorial protocol. */
import assert from "node:assert/strict";
import { test } from "node:test";
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
test("Local and Docker Process select protocol names and deployment connections", () => {
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const config = require(
      "../../../envs/" + environment + "/processServer/config/properties.js",
    );
    assert.deepEqual(config.process.actionAdapters.allowedActions.value, [
      "nodics.process.noop",
      "editorial.applyDecision",
      "editorial.publishApproved",
      "cms.applyPublicationDecision",
    ]);
    assert.equal(
      config.process.remoteActions.targets.editorial.connectionName,
      "cmsStaged",
    );
    assert.equal(config.editorialProcessAdapter, undefined);
    assert.equal(config.activeModules.modules.includes("editorial"), false);
  }
  assert.equal(
    fs.existsSync(
      new URL(
        "../src/service/defaultKickoffEditorialProcessAdapterService.js",
        import.meta.url,
      ),
    ),
    false,
  );
});
