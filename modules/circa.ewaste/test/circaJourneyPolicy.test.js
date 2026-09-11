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
const settings = require("../config/properties").circaEWaste.journey;
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
test("location preview and rejected early creation never save a draft", async () => {
  const before = JSON.stringify(draft);
  const result = await service.previewArrival({ payload: { position: { latitude: 25, longitude: 55, accuracy: 5, capturedAt: Date.now() } } });
  assert.equal(result.draft, null); assert.equal(result.nextAction, "PHOTO");
  assert.equal(JSON.stringify(draft), before);
  await assert.rejects(service.createDraft({}), { code: "ERR_WASTE_EVIDENCE_REQUIRED" });
  assert.equal(JSON.stringify(draft), before);
});
const position = () => ({
  latitude: 25,
  longitude: 55,
  accuracy: 5,
  capturedAt: Date.now(),
});
test("grant with valid position produces direct photo continuation and persisted arrival", async () => {
  const result = await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  assert.equal(result.nextAction, "PHOTO");
  assert.equal(result.draft.metadata.arrival.collectionPointCode, "c1");
  assert.equal(result.selectedCentre.distanceMetres, 0);
});
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
test("ambiguous nearby centres require one choice; a remote choice is rejected", async () => {
  centres.push({ ...centres[0], code: "c2" });
  const result = await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  assert.equal(result.nextAction, "CHOOSE_CENTRE");
  await assert.rejects(
    service.arrival({
      expectedRevision: 2,
      payload: { position: position(), collectionPointCode: "other" },
    }),
    { code: "ERR_CIRCA_ARRIVAL_REQUIRED" },
  );
});
test("missing accuracy, stale/future observations and claimed arrival cannot bypass validation", async () => {
  for (const [bad, code] of [
    [{ ...position(), accuracy: null }, "ERR_CIRCA_POSITION_ACCURACY_REQUIRED"],
    [{ ...position(), accuracy: -1 }, "ERR_CIRCA_POSITION_ACCURACY_REQUIRED"],
    [{ ...position(), accuracy: 51 }, "ERR_CIRCA_POSITION_IMPRECISE"],
    [{ ...position(), capturedAt: Date.now() - 61000 }, "ERR_CIRCA_POSITION_STALE"],
    [{ ...position(), capturedAt: Date.now() + 10000 }, "ERR_CIRCA_POSITION_STALE"],
    [{ ...position(), latitude: 999 }, "ERR_CIRCA_POSITION_INVALID"],
  ])
    await assert.rejects(
      service.arrival({
        expectedRevision: 1,
        payload: { position: bad, arrived: true },
      }),
      { code },
    );
  await assert.rejects(service.attachPhoto({}), {
    code: "ERR_CIRCA_ARRIVAL_REQUIRED",
  });
  assert.equal(seen.length, 0);
});
test("submission rechecks current centre state and never trusts the stored distance", async () => {
  await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  centres = [];
  await assert.rejects(
    service.confirm({
      expectedRevision: draft.revision,
      idempotencyKey: "command-key",
    }),
    { code: "ERR_CIRCA_ARRIVAL_REQUIRED" },
  );
  assert(!seen.includes("confirm"));
});
test("successful submission records queue handoff and replay does not submit twice", async () => {
  await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  let result = await service.confirm({
    expectedRevision: draft.revision,
    idempotencyKey: "command-key",
  });
  assert.equal(result.metadata.reviewAssignment.status, "ASSIGNED");
  assert.match(result.metadata.depositInstruction, /Centre/);
  result = await service.confirm({
    expectedRevision: draft.revision,
    idempotencyKey: "command-key",
  });
  assert.equal(seen.filter((x) => x === "confirm").length, 1);
});
test("radius is inclusive without rounding and policy can be customized", async () => {
  const own = { ...service, distance: () => 100 };
  assert.equal(
    (
      await own.arrival({
        expectedRevision: 1,
        payload: { position: position() },
      })
    ).nextAction,
    "PHOTO",
  );
  const outside = { ...service, distance: () => 100.00001 };
  assert.equal(
    (
      await outside.arrival({
        expectedRevision: 2,
        payload: { position: position() },
      })
    ).nextAction,
    "TRAVEL",
  );
  global.CONFIG = {
    get: () => ({ journey: { ...settings, arrivalRadiusMetres: 120 } }),
  };
  assert.equal(
    (
      await outside.arrival({
        expectedRevision: 3,
        payload: { position: position() },
      })
    ).nextAction,
    "PHOTO",
  );
});

test("invalid deployment policy fails closed instead of accepting unchecked location", () => {
  global.CONFIG = {
    get: () => ({ journey: { ...settings, maximumAccuracyMetres: undefined } }),
  };
  assert.throws(() => service.position(position()), {
    code: "ERR_CIRCA_JOURNEY_UNAVAILABLE",
  });
});

test("unavailable or inactive Location projection cannot be replaced by copied centre coordinates", async () => {
  centres = [
    { code: "c1", latitude: 25, longitude: 55 },
    {
      code: "c2",
      location: { latitude: 25, longitude: 55, status: "INACTIVE" },
    },
  ];
  const result = await service.arrival({
    expectedRevision: 1,
    payload: { position: position() },
  });
  assert.equal(result.nextAction, "TRAVEL");
  assert.equal(result.centres.length, 0);
  assert.equal(result.draft.metadata.arrival, null);
});

test("rejected desktop accuracy preserves the saved photo and a fresh precise retry resumes", async () => {
  draft.evidenceRefs = [{ code: "existing-photo" }];
  const before = JSON.stringify(draft);
  await assert.rejects(service.arrival({ expectedRevision: 1, payload: { position: { ...position(), accuracy: null } } }), { code: "ERR_CIRCA_POSITION_ACCURACY_REQUIRED" });
  assert.equal(JSON.stringify(draft), before);
  const result = await service.arrival({ expectedRevision: 1, payload: { position: { ...position(), accuracy: 50 } } });
  assert.equal(result.nextAction, "PHOTO");
  assert.deepEqual(result.draft.evidenceRefs, [{ code: "existing-photo" }]);
  assert.equal(seen.length, 0);
});

test("Circa permits the same employee to review and approve when both permissions are granted", () => {
  const policy = require("../config/properties").waste.operations;
  assert.equal(policy.requireScopes, true);
  assert.equal(policy.requireVerification, true);
  assert.equal(policy.requireDifferentApprover, false);
});
