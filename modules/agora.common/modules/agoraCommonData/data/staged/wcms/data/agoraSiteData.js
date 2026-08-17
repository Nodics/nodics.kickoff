/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/data/agoraSiteData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

/** @description Agora storefront CMS Site. */
module.exports = {
  record0: {
    code: 'agoraStorefrontSite',
    name: 'Nodics Agora Storefront',
    catalog: 'agoraContentCatalog',
    active: true
  }
};
