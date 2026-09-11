/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/content/circaCmsPageData @description Defines Circa published page composition through the owning CMS schemas. @layer data @owner circa.ewaste @override Customer projects customize these content records through Staged authoring. */
module.exports = {
  record0: {
    code: "circaHomePage",
    name: "circaHomePage",
    active: true,
    cmsSite: ["circaSite"],
    typeCode: "circaPageType",
    renderer: "circa.page",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    template: "circaPageTemplate",
    cmsComponents: [
      {
        target: "circaShell",
        slot: "main",
        index: 0,
        active: true,
      },
      {
        target: "circaHero",
        slot: "main",
        index: 10,
        active: true,
      },
      {
        target: "circaWallet",
        slot: "main",
        index: 20,
        active: true,
      },
      {
        target: "circaSolution",
        slot: "main",
        index: 30,
        active: true,
      },
      {
        target: "circaAssets",
        slot: "main",
        index: 40,
        active: true,
      },
      {
        target: "circaCoupons",
        slot: "main",
        index: 50,
        active: true,
      },
      {
        target: "circaCentres",
        slot: "main",
        index: 60,
        active: true,
      },
      {
        target: "circaContact",
        slot: "main",
        index: 70,
        active: true,
      },
    ],
  },
  record1: {
    code: "circaPrivacyPage",
    name: "circaPrivacyPage",
    active: true,
    cmsSite: ["circaSite"],
    typeCode: "circaPageType",
    renderer: "circa.page",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    template: "circaPageTemplate",
    cmsComponents: [
      {
        target: "circaShell",
        slot: "main",
        index: 0,
        active: true,
      },
      {
        target: "circaPrivacy",
        slot: "main",
        index: 10,
        active: true,
      },
    ],
  },
  record2: {
    code: "circaTermsPage",
    name: "circaTermsPage",
    active: true,
    cmsSite: ["circaSite"],
    typeCode: "circaPageType",
    renderer: "circa.page",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    template: "circaPageTemplate",
    cmsComponents: [
      {
        target: "circaShell",
        slot: "main",
        index: 0,
        active: true,
      },
      {
        target: "circaTerms",
        slot: "main",
        index: 10,
        active: true,
      },
    ],
  },
};
