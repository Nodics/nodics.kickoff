/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
const test = require("node:test"),
  assert = require("node:assert/strict");
const service = require("../src/service/defaultCircaEWasteJourneyService");
const rawSettings = require("../config/properties").circaEWaste.journey;
const settings = {
  ...require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/config/properties").eWaste.journey,
  ...rawSettings,
  arrivalRadiusMetres: rawSettings.arrivalRadiusMetres.fallback,
};
let draft, seen, centres;
test.beforeEach(() => {
  draft = {
    code: "d1",
    revision: 1,
    submissionStatus: "DRAFT",
    submittedFacts: { quantity: 1 },
    metadata: {},
  };
  seen = [];
  centres = [
    {
      code: "c1",
      name: { en: "Centre" },
      location: { latitude: 25, longitude: 55, status: "ACTIVE" },
    },
  ];
  global.CONFIG = { get: () => ({ journey: settings }) };
  global.SERVICE = {
    DefaultEWasteJourneyService: require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteJourneyService"),
    DefaultWastePersistenceService: {
      fail: (code, message) => {
        throw Object.assign(new Error(message), { code });
      },
      revision: (d, r) => assert.equal(d.revision, r),
      update: async (schema, request, old, patch) => {
        assert.equal(draft.revision, old.revision);
        draft = { ...old, ...patch, revision: old.revision + 1 };
        return draft;
      },
    },
    DefaultEWasteExperienceService: {
      experience: async () => ({ centres }),
      readDraft: async () => draft,
      confirm: async () => {
        seen.push("confirm");
        draft = {
          ...draft,
          revision: draft.revision + 1,
          submissionStatus: "SUBMITTED",
          metadata: { ...draft.metadata, confirmationKey: "command-key" },
        };
        return draft;
      },
      attachPhoto: async () => {
        seen.push("attach");
        return draft;
      },
    },
  };
});
test.afterEach(() => {
  delete global.CONFIG;
  delete global.SERVICE;
});
const position = () => ({ latitude: 25, longitude: 55, capturedAt: Date.now() });
test("outside arrival radius returns nearest three and never opens photo", async () => {
  centres = Array.from({ length: 4 }, (_, i) => ({
    code: `c${i}`,
    name: { en: "Centre" },
    location: { latitude: 25.01 + i * 0.01, longitude: 55, status: "ACTIVE" },
  }));
  const result = await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  assert.equal(result.nextAction, "TRAVEL");
  assert.equal(result.centres.length, 3);
  assert.equal(result.draft.metadata.arrival, null);
});
test("Circa submission uses its configured review queue and deposit copy", async () => {
  await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  const result = await service.confirm({
    expectedRevision: draft.revision,
    idempotencyKey: "command-key",
  });
  assert.equal(result.metadata.reviewAssignment.status, "ASSIGNED");
  assert.equal(result.metadata.reviewAssignment.queueCode, settings.reviewAssignment.queueCode);
  assert.equal(result.metadata.reviewAssignment.label, settings.reviewAssignment.label);
  assert.equal(result.metadata.depositInstruction, settings.depositInstruction.replace("{centreName}", "Centre"));
});
test("Circa retains its configured radius and public journey errors", () => {
  assert.equal(settings.arrivalRadiusMetres, 50);
  assert.equal(settings.maximumAccuracyMetres, undefined);
  for (const code of ["POSITION_INVALID", "POSITION_STALE", "ARRIVAL_REQUIRED", "JOURNEY_UNAVAILABLE"]) {
    assert.equal(service.errorCode("ERR_EWASTE_" + code), "ERR_CIRCA_" + code);
  }
  assert.equal(service.errorCode("ERR_WASTE_REVISION_CONFLICT"), "ERR_WASTE_REVISION_CONFLICT");
});
test("Circa permits the same employee to review and approve when both permissions are granted", () => {
  const policy = require("../config/properties").waste.operations;
  assert.equal(policy.requireScopes, true);
  assert.equal(policy.requireVerification, true);
  assert.equal(policy.requireDifferentApprover, false);
});

test("impact provider and profile failures cannot silently become a ready draft", async () => {
  SERVICE.DefaultWasteSubmissionOperationService={validateFacts:async()=>{}};
  for(const code of ["ERR_WASTE_IMPACT_PROFILE_INVALID","ERR_WASTE_IMPACT_PROVIDER_UNAVAILABLE"]) {
    SERVICE.DefaultEWasteExperienceService.estimate=async()=>{throw Object.assign(Error("Impact unavailable"),{code})};
    await assert.rejects(service.prepare({expectedRevision:1}),{code});
    assert.equal(draft.revision,1);
    assert.equal(draft.metadata.estimatePending,undefined);
  }
});

test("adapter combines domain defaults with Circa policy and preserves branded origin", async () => {
  const domain = SERVICE.DefaultEWasteJourneyService;
  global.CONFIG = { get: (key) => key === "eWaste"
    ? { journey: { ...settings, arrivalRadiusMetres: 100 } }
    : { journey: { arrivalRadiusMetres: 50 } } };
  assert.equal(service.settings().arrivalRadiusMetres, 50);
  assert.equal(service.settings().maximumPositionAgeMs, settings.maximumPositionAgeMs);
  let forwarded;
  SERVICE.DefaultEWasteExperienceService.prepareSubmission = async (request) => {
    forwarded = request;
    return draft;
  };
  const origin = { channel: "TELEGRAM", applicationCode: "circa" };
  await service.prepareSubmission({ authData: { circaOrigin: origin },
    payload: { position: position(), origin: { channel: "FORGED" } } });
  assert.equal(forwarded.preparationOrigin, origin);
  assert.deepEqual(service.origin({ payload: { origin } }), { channel: "WEB" });
  assert.equal(domain.errorCode("ERR_EWASTE_POSITION_STALE"), "ERR_EWASTE_POSITION_STALE");
});

test("adapter uses later-loaded domain methods without changing shared service hooks", async () => {
  const domain = SERVICE.DefaultEWasteJourneyService;
  SERVICE.DefaultEWasteJourneyService = { ...domain, centres: async () => [] };
  assert.equal((await service.previewArrival({ payload: { position: position() } })).nextAction, "TRAVEL");
  assert.notEqual(domain.centres, SERVICE.DefaultEWasteJourneyService.centres);
  assert.equal(domain.origin({ authData: { circaOrigin: { channel: "TELEGRAM" } } }).channel, "WEB");
});

test("experience and validation share inherited defaults and later customer overrides", async () => {
  const experience = require("../src/service/defaultCircaEWasteExperienceService");
  const defaults = require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/config/properties").eWaste.journey;
  const customer = { ...settings };
  for (const key of ["maximumPositionAgeMs", "captureTimeoutMs", "nearestCentreCount"]) {
    assert.equal(Object.hasOwn(rawSettings, key), false);
    delete customer[key];
  }
  CONFIG.get = (key) => key === "eWaste" ? { journey: defaults } : { journey: customer };
  SERVICE.DefaultCircaEWasteJourneyService = service;
  const now = Date.now();
  const assertProjection = async () => {
    const projected = (await experience.experience({})).journey;
    const effective = service.settings();
    assert.deepEqual(projected, { ...effective, reviewAssignment: undefined });
    assert.equal(projected.contractVersion, rawSettings.contractVersion);
    assert.equal(projected.reviewAssignment, undefined);
    return projected;
  };
  const initial = await assertProjection();
  assert.equal(initial.maximumPositionAgeMs, 60000);
  assert.equal(initial.captureTimeoutMs, 12000);
  assert.equal(initial.nearestCentreCount, 3);
  assert.equal(initial.arrivalRadiusMetres, 50);
  const observation = { ...position(), capturedAt: now - 61000 };
  const before = structuredClone(draft);
  await assert.rejects(service.arrival({ expectedRevision: 1, payload: { position: observation } }),
    { code: "ERR_CIRCA_POSITION_STALE" });
  await assert.rejects(service.arrival({ expectedRevision: 1, payload: { position: { ...position(), latitude: 999 } } }),
    { code: "ERR_CIRCA_POSITION_INVALID" });
  assert.deepEqual(draft, before);
  Object.assign(customer, { maximumPositionAgeMs: 120000, captureTimeoutMs: 18000,
    nearestCentreCount: 4, arrivalRadiusMetres: 125 });
  const overridden = await assertProjection();
  assert.equal(overridden.maximumPositionAgeMs, 120000);
  assert.equal(overridden.captureTimeoutMs, 18000);
  assert.equal(overridden.nearestCentreCount, 4);
  assert.equal(overridden.arrivalRadiusMetres, 125);
  assert.equal((await service.previewArrival({ payload: { position: observation } })).nextAction, "PHOTO");
  const custom = { ...service, distance: () => 100 };
  assert.equal((await custom.previewArrival({ payload: { position: position() } })).nextAction, "PHOTO");
  customer.arrivalRadiusMetres = 50;
  assert.equal((await custom.previewArrival({ payload: { position: position() } })).nextAction, "TRAVEL");
  centres = Array.from({ length: 5 }, (_, index) => ({
    code: "far-" + index, location: { latitude: 26 + index, longitude: 55, status: "ACTIVE" },
  }));
  assert.equal((await service.previewArrival({ payload: { position: position() } })).centres.length, 4);
  customer.captureTimeoutMs = 0;
  await assert.rejects(experience.experience({}), { code: "ERR_CIRCA_JOURNEY_UNAVAILABLE" });
  assert.throws(() => service.position(position()), { code: "ERR_CIRCA_JOURNEY_UNAVAILABLE" });
  assert.equal(defaults.captureTimeoutMs, 12000);
});

test("selected Waste configuration resolves inherited journey defaults and the environment radius binding", async () => {
  const { loadRuntime, activeModuleNames } = require("../../../test/helpers/configuration");
  const experience = require("../src/service/defaultCircaEWasteExperienceService");
  SERVICE.DefaultCircaEWasteJourneyService = service;
  for (const [variables, radius] of [
    [{}, 50],
    [{ CIRCA_EWASTE_ARRIVAL_RADIUS_METRES: "125" }, 125],
  ]) {
    const properties = loadRuntime("wasteServer", "kickoffLocal", variables);
    assert(activeModuleNames(properties).includes("eWaste"));
    assert(activeModuleNames(properties).includes("circa.ewaste"));
    CONFIG.get = (key) => properties[key];
    const projected = (await experience.experience({})).journey;
    assert.equal(projected.arrivalRadiusMetres, radius);
    assert.equal(projected.maximumPositionAgeMs, 60000);
    assert.equal(projected.captureTimeoutMs, 12000);
    assert.equal(projected.nearestCentreCount, 3);
    assert.deepEqual(projected, { ...service.settings(), reviewAssignment: undefined });
    assert.equal(properties.wasteImpact.calculation.providerService, "DefaultEWasteOpenAiImpactProviderService");
    assert.deepEqual(properties.wasteImpact.calculation.fallbackProviderServices,
      ["DefaultEWasteWarmImpactProviderService"]);
  }
});
