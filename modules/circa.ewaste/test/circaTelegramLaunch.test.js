/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module circa.ewaste/test/circaTelegramLaunch @description Checks deployment channel bindings select eWaste and Profile with no project host adapter. @owner circa.ewaste @layer test */
const { test } = require("node:test");
const assert = require("node:assert/strict");
test("demo channel binding selects the eWaste and Profile owners", () => {
  const p = require("./helpers/deploymentPolicy").runtime("platformServer");
  assert.equal(p.eWaste.channelAuthentication.channels.TELEGRAM.applicationCode, "circa.ewaste");
  assert.equal(p.profileExternalIdentity.applications["circa.ewaste"].provider, "TELEGRAM");
  assert.equal(require("node:fs").existsSync(require("node:path").join(__dirname, "../src")), false);
});
