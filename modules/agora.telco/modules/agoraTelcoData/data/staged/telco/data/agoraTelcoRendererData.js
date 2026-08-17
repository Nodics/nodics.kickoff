/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/modules/agoraTelcoData/data/staged/telco/data/agoraTelcoRendererData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraTelcoData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @description Logical Telco renderer keys. Executable React code belongs to nodics.agora. */
module.exports = { record0: { code: 'agoraTelcoProductCardType', renderer: 'agora.telco.product-card', contractVersion: 1, channels: ['web'], deprecated: false, active: true }, record1: { code: 'agoraTelcoHomePageType', renderer: 'agora.telco.page.home', contractVersion: 1, channels: ['web'], deprecated: false, active: true } };
