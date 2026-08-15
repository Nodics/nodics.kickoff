/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module agoraData/nodics
 * @description Registers the project-owned Agora content and commerce sample data pack.
 * @layer module
 * @owner agoraData
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

