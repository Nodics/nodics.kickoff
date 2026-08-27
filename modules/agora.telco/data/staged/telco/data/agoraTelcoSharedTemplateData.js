/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/data/staged/telco/data/agoraTelcoSharedTemplateData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.telco
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agora.telco */

/** @description Agora storefront page template. */
module.exports = {
  record0: {
    code: 'agoraStorefrontPageTemplate',
    name: 'Nodics Agora Storefront Page',
    renderer: 'agora.template.storefront',
    contractVersion: 0,
    slots: ['agoraMainSlot'],
    active: true
  }
};
