/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/data/staged/telco/data/agoraTelcoAllowanceData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.telco
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = { record0: { active: true, code: 'agoraTelco50GB', tenant: 'default', allowanceType: 'DATA', amount: '50', unit: 'GB', status: 'ACTIVE', revision: 1 }, record1: { active: true, code: 'agoraTelcoVoiceUnlimited', tenant: 'default', allowanceType: 'VOICE', amount: 'UNLIMITED', unit: 'MINUTE', status: 'ACTIVE', revision: 1 } };
