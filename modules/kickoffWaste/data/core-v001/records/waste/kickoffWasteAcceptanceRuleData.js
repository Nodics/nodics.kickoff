/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffWaste/data/core-v001/records/waste/kickoffWasteAcceptanceRuleData @description Kickoff project acceptance-rule extension for Waste. @layer data @owner kickoffWaste */
module.exports = {
    record0: {
        code: 'KICKOFF_DROP_OFF_SMART_HOME',
        collectionPointType: 'E_WASTE_DROP_OFF',
        categoryCode: 'SMART_HOME_DEVICE',
        decision: 'ACCEPT',
        requiresPreApproval: false,
        requiresReceipt: true,
        status: 'ACTIVE',
        revision: 1,
        active: true
    }
};
