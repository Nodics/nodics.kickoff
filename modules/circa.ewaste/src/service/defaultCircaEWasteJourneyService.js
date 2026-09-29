/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/service/defaultCircaEWasteJourneyService @description Applies Circa policy and provenance to the reusable eWaste journey. @layer service @owner circa.ewaste @override Later customer layers may refine policy and exported hooks. */
module.exports = {
  /** Delegates project guidance without changing the journey stage. */
  message: function (request) {
    return SERVICE.DefaultCircaEWasteGuidanceService.message(request);
  },
  /** Applies intentional Circa policy over reusable journey configuration. */
  settings: function () {
    return this.invokeJourney("validateSettings", [
      {
        ...((CONFIG.get("eWaste") || {}).journey || {}),
        ...((CONFIG.get("circaEWaste") || {}).journey || {}),
      },
    ]);
  },
  /** Preserves the released application error codes. */
  errorCode: function (code) {
    return code.replace(/^ERR_EWASTE_/, "ERR_CIRCA_");
  },
  /** Retains the authenticated Circa channel origin; body claims are ignored. */
  origin: function (request) {
    return request.authData?.circaOrigin || { channel: "WEB" };
  },
  /** Calls the effective domain implementation with project hooks, without mutating shared services. */
  invokeJourney: function (method, args) {
    const journey = SERVICE.DefaultEWasteJourneyService;
    return journey[method].apply({ ...journey, ...this }, args);
  },
  /** Delegates domain while retaining later-layer member overrides. */
  domain: function (...args) {
    return this.invokeJourney("domain", args);
  },
  /** Delegates store while retaining later-layer member overrides. */
  store: function (...args) {
    return this.invokeJourney("store", args);
  },
  /** Delegates now while retaining later-layer member overrides. */
  now: function (...args) {
    return this.invokeJourney("now", args);
  },
  /** Delegates position while retaining later-layer member overrides. */
  position: function (...args) {
    return this.invokeJourney("position", args);
  },
  /** Delegates distance while retaining later-layer member overrides. */
  distance: function (...args) {
    return this.invokeJourney("distance", args);
  },
  /** Delegates centres while retaining later-layer member overrides. */
  centres: function (...args) {
    return this.invokeJourney("centres", args);
  },
  /** Delegates previewArrival while retaining later-layer member overrides. */
  previewArrival: function (...args) {
    return this.invokeJourney("previewArrival", args);
  },
  /** Delegates prepareSubmission while retaining later-layer member overrides. */
  prepareSubmission: function (...args) {
    return this.invokeJourney("prepareSubmission", args);
  },
  /** Delegates arrival while retaining later-layer member overrides. */
  arrival: function (...args) {
    return this.invokeJourney("arrival", args);
  },
  /** Delegates assertArrival while retaining later-layer member overrides. */
  assertArrival: function (...args) {
    return this.invokeJourney("assertArrival", args);
  },
  /** Delegates createDraft while retaining later-layer member overrides. */
  createDraft: function (...args) {
    return this.invokeJourney("createDraft", args);
  },
  /** Delegates attachPhoto while retaining later-layer member overrides. */
  attachPhoto: function (...args) {
    return this.invokeJourney("attachPhoto", args);
  },
  /** Delegates analyzePhoto while retaining later-layer member overrides. */
  analyzePhoto: function (...args) {
    return this.invokeJourney("analyzePhoto", args);
  },
  /** Delegates prepare while retaining later-layer member overrides. */
  prepare: function (...args) {
    return this.invokeJourney("prepare", args);
  },
  /** Delegates confirm while retaining later-layer member overrides. */
  confirm: function (...args) {
    return this.invokeJourney("confirm", args);
  },
};
