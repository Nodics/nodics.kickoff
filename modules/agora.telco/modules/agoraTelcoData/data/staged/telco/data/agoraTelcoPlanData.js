/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/modules/agoraTelcoData/data/staged/telco/data/agoraTelcoPlanData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraTelcoData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = { record0: { active: true, code: 'agoraTelcoUnlimitedPostpaidPlan', tenant: 'default', productCode: 'agoraTelcoUnlimitedPostpaid', planType: 'POSTPAID', allowanceCodes: ['agoraTelcoData50GB', 'agoraTelcoVoiceUnlimited'], billingCycle: 'MONTHLY', minimumTermMonths: 12, compatibleDeviceProfileCodes: ['SMARTPHONE_5G'], simTypes: ['SIM', 'ESIM'], status: 'ACTIVE', revision: 1 }, record1: { active: true, code: 'agoraTelcoFlexiPrepaidPlan', tenant: 'default', productCode: 'agoraTelcoFlexiPrepaid', planType: 'PREPAID', allowanceCodes: ['agoraTelcoData50GB'], compatibleDeviceProfileCodes: ['SMARTPHONE_5G'], simTypes: ['SIM', 'ESIM'], status: 'ACTIVE', revision: 1 } };
