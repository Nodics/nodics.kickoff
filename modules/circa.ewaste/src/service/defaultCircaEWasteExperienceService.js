/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/service/defaultCircaEWasteExperienceService @description Composes Circa presentation and site forms over eWaste, Profile and Engagement. @layer service @owner circa.ewaste @override Later project layers customize presentation and form policy; domain state remains with its owning APIs. */
module.exports = {
  /** Reuses the eWaste transport and trusted runtime context. */
  remote: function (...args) {
    return SERVICE.DefaultEWasteExperienceService.remote(...args);
  },
  /** Reuses domain validation without defining customer-owned persistence. */
  store: function () {
    return SERVICE.DefaultEWasteExperienceService.store();
  },
  /** Adds only project-owned presentation to the reusable domain projection. */
  experience: async function (request) {
    const data =
      await SERVICE.DefaultEWasteExperienceService.experience(request);
    const settings = CONFIG.get("circaEWaste") || {};
    return Object.assign({}, data, {
      application: settings.application,
      presentation: settings.presentation || {},
      journey: Object.assign({}, settings.journey, {
        reviewAssignment: undefined,
      }),
    });
  },
  /** Adapts the Circa account form to Profile's canonical registration contract; Profile validates, normalizes and persists the account. */
  register: async function (request) {
    const payload = request.payload || {};
    return this.remote(
      request,
      "profile",
      "profile",
      "/customer/registrations",
      "POST",
      {
        email: payload.email,
        name: payload.name,
        password: payload.password,
      },
    );
  },
  /** Records a contact enquiry through Engagement and returns only acknowledged receipt. */
  contact: async function (request) {
    const p = request.payload || {};
    if (
      typeof p.name !== "string" ||
      !p.name.trim() ||
      p.name.length > 120 ||
      typeof p.email !== "string" ||
      !p.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
      typeof p.subject !== "string" ||
      !p.subject.trim() ||
      p.subject.length > 180 ||
      typeof p.message !== "string" ||
      p.message.trim().length < 10 ||
      p.message.length > 3000 ||
      typeof request.idempotencyKey !== "string"
    )
      this.store().fail(
        "ERR_CIRCA_CONTACT_INVALID",
        "Complete your name, email, subject and message",
      );
    const result = await this.remote(
      request,
      "engagement",
      "engagement",
      "/public/contact-submissions",
      "POST",
      {
        type: "ENQUIRY",
        contactEmail: p.email.trim().toLowerCase(),
        subject: p.subject.trim(),
        message: "From: " + p.name.trim() + "\n\n" + p.message.trim(),
        site: "circa",
        source: "CIRCA_CONTACT_FORM",
        idempotencyKey: request.idempotencyKey,
      },
    );
    if (!result || !result.referenceCode)
      this.store().fail(
        "ERR_CIRCA_CONTACT_UNAVAILABLE",
        "Your message was not acknowledged. Please retry with the same form.",
      );
    return {
      code: result.referenceCode,
      verificationRequired: result.verificationRequired === true,
    };
  },
};
