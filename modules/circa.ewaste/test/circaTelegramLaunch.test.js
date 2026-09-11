/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module circa.ewaste/test/circaTelegramLaunch @description Proves the project host adapter delegates channel policy and origin mapping to eWaste without owning authentication. @owner circa.ewaste @layer test */
const { test, beforeEach, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const service = require("../src/service/defaultCircaTelegramLaunchService");
let calls;
beforeEach(() => {
  calls = [];
  global.SERVICE = {
    DefaultEWasteChannelAuthenticationService: {
      bootstrap: async (...args) => {
        calls.push(["bootstrap", ...args]);
        return { requiresProfileSession: true };
      },
      origin: async (...args) => {
        calls.push(["origin", ...args]);
        return { subject: "verified-id", identityLinkCode: "profile-link" };
      },
    },
  };
});
afterEach(() => {
  delete global.SERVICE;
});
test("public bootstrap delegates to eWaste with the host channel and original request", async () => {
  const request = { tenant: "t", entCode: "enterprise" };
  assert.equal(
    (await service.bootstrap("signed-proof", request)).requiresProfileSession,
    true,
  );
  assert.deepEqual(calls[0], [
    "bootstrap",
    "signed-proof",
    request,
    "TELEGRAM",
  ]);
});
test("source origin preserves trusted context and uses eWaste mapping", async () => {
  const request = {
    tenant: "t",
    authData: { principalType: "customer" },
    httpRequest: { headers: { authorization: "Bearer customer-token" } },
  };
  const result = await service.validate("signed-proof", request);
  assert.deepEqual(calls[0], ["origin", "signed-proof", request, "TELEGRAM"]);
  assert.equal(result.subject, "verified-id");
  assert.equal(result.identityLinkCode, "profile-link");
});
test("owner failure propagates without local identity fallback", async () => {
  SERVICE.DefaultEWasteChannelAuthenticationService.origin = async () => {
    throw Object.assign(new Error("Denied"), {
      code: "ERR_PROFILE_EXTERNAL_ASSERTION",
    });
  };
  await assert.rejects(service.validate("forged-proof", { tenant: "t" }), {
    code: "ERR_PROFILE_EXTERNAL_ASSERTION",
  });
});

test("application binding is supplied as an eWaste policy delta, outside unrelated domain owner ports", () => {
  const properties = require("../config/properties");
  assert.equal(properties.eWaste.channelAuthentication.enabled, true);
  assert.deepEqual(properties.eWaste.channelAuthentication.channels.TELEGRAM, {
    enabled: true,
    applicationCode: "circa.ewaste",
    seamlessSignIn: true,
  });
  assert.equal(
    properties.order.refunds.ownerPorts.eWaste.channelAuthentication,
    undefined,
  );
  assert.equal(properties.circaEWaste.telegram, undefined);
});
