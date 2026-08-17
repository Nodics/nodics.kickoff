/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module agoraCommonData/config/properties
 * @description Reserves project-owned configuration for the Agora data pack without adding runtime behavior.
 * @layer config
 * @owner agoraCommonData
 */
module.exports = {
    agoraCommonData: {
        enabled: true,
        firstSlice: 'DISCOVERY_HOME_PLP_PDP',
        runtimeDataSectionsFrozen: false
    }
};

