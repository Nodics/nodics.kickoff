/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module circa.ewaste/test/circaRegistrationAdapter @description Proves Circa registration delegates generic account rules and identity construction to Profile. @owner circa.ewaste @layer test */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const service = require("../src/service/defaultCircaEWasteExperienceService");
test("forwards only form fields to Profile and does not normalize or generate identity locally", async () => {
  let call;
  const adapter = {
    ...service,
    remote: async (...args) => {
      call = args;
      return { registered: true };
    },
  };
  const request = {
    payload: {
      email: " USER@EXAMPLE.COM ",
      name: "Full Name",
      password: "secret-input",
      code: "attacker",
      userGroups: ["adminGroup"],
    },
  };
  assert.deepEqual(await adapter.register(request), { registered: true });
  assert.deepEqual(call.slice(1), [
    "profile",
    "profile",
    "/customer/registrations",
    "POST",
    {
      email: " USER@EXAMPLE.COM ",
      name: "Full Name",
      password: "secret-input",
    },
  ]);
});
