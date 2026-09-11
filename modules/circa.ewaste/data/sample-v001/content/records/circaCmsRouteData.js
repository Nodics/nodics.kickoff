/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/content/circaCmsRouteData @description Defines Circa published page composition through the owning CMS schemas. @layer data @owner circa.ewaste @override Customer projects customize these content records through Staged authoring. */
module.exports = {
  record0: {
    code: "circaHomePageRoute",
    path: "/",
    page: "circaHomePage",
    site: "circaSite",
    locale: "en",
    channel: "web",
    routeType: "PAGE",
    deliveryState: "ONLINE",
    accessMode: "PUBLIC",
    active: true,
  },
  record1: {
    code: "circaPrivacyPageRoute",
    path: "/privacy",
    page: "circaPrivacyPage",
    site: "circaSite",
    locale: "en",
    channel: "web",
    routeType: "PAGE",
    deliveryState: "ONLINE",
    accessMode: "PUBLIC",
    active: true,
  },
  record2: {
    code: "circaTermsPageRoute",
    path: "/terms",
    page: "circaTermsPage",
    site: "circaSite",
    locale: "en",
    channel: "web",
    routeType: "PAGE",
    deliveryState: "ONLINE",
    accessMode: "PUBLIC",
    active: true,
  },
};
