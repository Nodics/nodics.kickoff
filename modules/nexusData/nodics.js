/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nexusData/nodics
 * @description Registers the project-owned Nexus content-pack module.
 * @layer module
 * @owner nexusData
 * @override Customer projects replace or extend records through their own later-loaded data module.
 */
module.exports = {
    /** @returns {Promise<boolean>} Resolves when the data-only module is initialized. */
    init: function () {
        return Promise.resolve(true);
    },

    /** @returns {Promise<boolean>} Resolves after the data-only module is initialized. */
    postInit: function () {
        return Promise.resolve(true);
    }
};
