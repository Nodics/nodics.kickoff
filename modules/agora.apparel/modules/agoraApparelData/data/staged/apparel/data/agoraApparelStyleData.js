/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/modules/agoraApparelData/data/staged/apparel/data/agoraApparelStyleData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraApparelData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
    record0: { active: true, code: 'agoraApparelLinenDressStyle', tenant: 'default', productCode: 'agoraApparelLinenDress', brandCode: 'agoraAtelier', collectionCodes: ['agoraSummer'], seasonCode: 'SS26', genderAudience: ['WOMEN'], sizeSystemCode: 'ALPHA', materialComposition: [{ materialCode: 'LINEN', percentage: 100 }], careInstructions: ['COLD_WASH'], status: 'ACTIVE', revision: 1 },
    record1: { active: true, code: 'agoraApparelOxfordShirtStyle', tenant: 'default', productCode: 'agoraApparelOxfordShirt', brandCode: 'agoraAtelier', collectionCodes: ['agoraEssentials'], seasonCode: 'ALL_SEASON', genderAudience: ['MEN'], sizeSystemCode: 'ALPHA', materialComposition: [{ materialCode: 'COTTON', percentage: 100 }], careInstructions: ['MACHINE_WASH'], status: 'ACTIVE', revision: 1 }
};
