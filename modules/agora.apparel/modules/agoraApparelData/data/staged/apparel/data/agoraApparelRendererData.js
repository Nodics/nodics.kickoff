/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/modules/agoraApparelData/data/staged/apparel/data/agoraApparelRendererData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraApparelData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @description Logical Apparel renderer keys. Executable React code belongs to nodics.agora. */
module.exports = { record0: { code: 'agoraApparelProductCardType', renderer: 'agora.apparel.product-card', contractVersion: 0, channels: ['web'], deprecated: false, active: true }, record1: { code: 'agoraApparelHomePageType', renderer: 'agora.apparel.page.home', contractVersion: 0, channels: ['web'], deprecated: false, active: true } };
