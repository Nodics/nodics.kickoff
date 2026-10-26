/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module test/circaCouponRecipientExposureSelection @description Verifies Local Platform consumes the existing private route exposure while preserving Profile permission admission. @layer test @owner nodics.kickoff */
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { loadRuntime, frameworkRoot } = require("./helpers/configuration");

test("Local Platform exposes coupon recipient route but never grants its missing permission", t => {
  const keys = ["CONFIG", "CLASSES"];
  const saved = keys.map(key => [key, Object.getOwnPropertyDescriptor(global, key)]);
  t.after(() => saved.forEach(([key, descriptor]) => descriptor
    ? Object.defineProperty(global, key, descriptor) : delete global[key]));
  const config = loadRuntime("platformServer", "kickoffLocal");
  const profile = path.join(frameworkRoot, "nodics.platform/modules/profile");
  const router = path.join(frameworkRoot, "nodics.foundation/modules/nRouter/src/service/request");
  const exposure = require(path.join(router, "defaultRequestHandlerPipelineService"));
  const secured = require(path.join(router, "defaultSecuredRequestPipelineService"));
  const route = require(path.join(profile, "src/router/routers")).profile.couponNotificationRecipients.resolve;
  assert.equal(require(path.join(profile, "config/properties")).apiExposure.categories.moduleInternal.enabled, false);
  assert.equal(config.apiExposure.categories.moduleInternal.enabled, true);
  assert.equal(require("../envs/kickoffLocal/platformServer/config/properties").apiExposure, undefined);
  assert.equal(require("../envs/kickoffLocal/config/properties").apiExposure.runtimeRoleProfiles.PLATFORM.categories.moduleInternal.enabled, true);
  const initializer = require(path.join(frameworkRoot, "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService"));
  const selection = require("../envs/kickoffLocal/config/properties").apiExposure.runtimeRoleProfiles.PLATFORM.categories.moduleInternal;
  for (const code of ["COMMERCE", "COMMERCE_STAGED", "PROCESS", "ENGAGEMENT", "WASTE", "LOYALTY", "LOCATION", "WCMS_STAGED", "WCMS_ONLINE"])
    for (const enabled of [false, true]) {
      const baseline = { runtimeRole: { code }, apiExposure: { categories: { moduleInternal: { enabled } } } };
      const selected = structuredClone(baseline);
      selected.apiExposure.runtimeRoleProfiles = { PLATFORM: { categories: { moduleInternal: selection } } };
      assert.deepEqual(initializer.deriveRuntimeRoleProfile(selected, "apiExposure"), baseline, code);
    }
  assert.notEqual(loadRuntime("platformServer", "kickoffDockerLocal").apiExposure?.categories?.moduleInternal?.enabled, true);

  global.CONFIG = { get: key => key.split(".").reduce((value, part) => value?.[part], config) };
  global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); this.code = code; } } };
  const request = { router: route, moduleName: "profile", tenant: "default", authData: {
    principalType: "service", tokenType: "service", tenant: "default", entCode: "default",
    serviceId: "apiAdmin", modules: ["profile", "digitalCore"],
    permissions: [config.profileCouponNotifications.permission],
    runtimeInstanceId: "kickoff-local-commerce-1", runtimeScope: {
      projectCode: "nodics.kickoff", environmentCode: "kickoffLocal", serverCode: "commerceServer",
      instanceCode: "kickoff-local-commerce-1", assignmentCode: "kickoff-local-commerce-runtime-deployment",
    },
  } };
  const run = (owner, method) => {
    let passed = false, failure;
    owner[method](request, {}, {
      nextSuccess: () => { passed = true; },
      error: (_request, _response, error) => { failure = error.code; },
    });
    return { passed, failure };
  };
  assert.deepEqual(run(exposure, "validateApiExposure"), { passed: true, failure: undefined });
  assert.deepEqual(run(secured, "checkAccess"), { passed: true, failure: undefined });
  request.authData.permissions = [];
  assert.deepEqual(run(exposure, "validateApiExposure"), { passed: true, failure: undefined });
  assert.deepEqual(run(secured, "checkAccess"), { passed: false, failure: "ERR_AUTH_00003" });
});
