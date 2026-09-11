/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/router/routers @description Exposes Circa site/launch adapters and applies project arrival/guidance policy to the existing eWaste routes. @layer router @owner circa.ewaste */
module.exports = {
  eWaste: {
    experience: {
      previewArrival: {
        key: "/journey/arrival",
        method: "POST",
        secured: true,
        controller: "DefaultCircaEWasteJourneyController",
        operation: "previewArrival",
        apiExposure: "eWasteCustomer",
        authTokenTypes: ["access"],
        accessGroups: ["customerUserGroup"],
        permissionConfig: "eWaste.preparation.permission",
      },
      prepareSubmission: { controller: "DefaultCircaEWasteJourneyController" },
      replacePreparedPhoto: {
        controller: "DefaultCircaEWasteJourneyController",
      },
      arrival: {
        key: "/submissions/:code/arrival",
        method: "POST",
        secured: true,
        controller: "DefaultCircaEWasteJourneyController",
        operation: "arrival",
        apiExposure: "eWasteCustomer",
        authTokenTypes: ["access"],
        accessGroups: ["customerUserGroup"],
        permission: "waste.submission.create",
      },
      message: { controller: "DefaultCircaEWasteJourneyController" },
      createDraft: { controller: "DefaultCircaEWasteJourneyController" },
      attachPhoto: { controller: "DefaultCircaEWasteJourneyController" },
      analyzePhoto: { controller: "DefaultCircaEWasteJourneyController" },
      estimate: { controller: "DefaultCircaEWasteJourneyController" },
      confirm: { controller: "DefaultCircaEWasteJourneyController" },
    },
  },
  "circa.ewaste": {
    experience: {
      catalogue: {
        key: "/catalogue",
        method: "GET",
        secured: false,
        publicAccess: true,
        accessGroups: ["userGroup"],
        apiExposure: "circaCustomer",
        controller: "DefaultCircaCatalogueController",
        operation: "catalogue",
      },
      product: {
        key: "/catalogue/:code",
        method: "GET",
        secured: false,
        publicAccess: true,
        accessGroups: ["userGroup"],
        apiExposure: "circaCustomer",
        controller: "DefaultCircaCatalogueController",
        operation: "product",
      },
      customerGuidance: {
        key: "/customer/guidance",
        method: "POST",
        secured: true,
        accessGroups: ["customerUserGroup"],
        authTokenTypes: ["access"],
        permission: "waste.submission.create",
        controller: "DefaultCircaEWasteJourneyController",
        operation: "message",
        apiExposure: "circaCustomer",
      },
      experience: {
        key: "/experience",
        method: "GET",
        secured: false,
        publicAccess: true,
        accessGroups: ["userGroup"],
        controller: "DefaultCircaEWasteExperienceController",
        operation: "experience",
        apiExposure: "circaCustomer",
        help: {
          requestType: "public",
          message: "E-Waste experience operation.",
        },
      },
      telegramLaunch: {
        key: "/telegram/launch",
        method: "POST",
        secured: false,
        publicAccess: true,
        accessGroups: ["userGroup"],
        controller: "DefaultCircaTelegramLaunchController",
        operation: "bootstrap",
        apiExposure: "circaCustomer",
      },
      register: {
        key: "/registrations",
        method: "POST",
        secured: false,
        publicAccess: true,
        accessGroups: ["userGroup"],
        controller: "DefaultCircaEWasteExperienceController",
        operation: "register",
        apiExposure: "circaCustomer",
        help: {
          requestType: "public",
          message: "Registers a new customer through Profile.",
        },
      },
      contact: {
        key: "/contact",
        method: "POST",
        secured: false,
        publicAccess: true,
        controller: "DefaultCircaEWasteExperienceController",
        operation: "contact",
        apiExposure: "circaCustomer",
        accessGroups: ["userGroup"],
      },
    },
  },
};
