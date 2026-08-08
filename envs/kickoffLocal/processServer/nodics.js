/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module kickoffLocal/processServer/nodics
 * @description Declares the local Process server lifecycle hooks for the Kickoff reference environment.
 * @layer environment-server
 * @owner nodics.kickoff
 * @override Customer projects may extend nodics.process through their own server modules without changing framework source.
 */
module.exports = {
    /**
     * Initializes the local Process server layer.
     *
     * @returns {Promise<boolean>} Resolves when initialization is complete.
     */
    init: function () {
        return Promise.resolve(true);
    },
    /**
     * Finalizes the local Process server layer after module loading.
     *
     * @returns {Promise<boolean>} Resolves when post-initialization is complete.
     */
    postInit: function () {
        return Promise.resolve(true);
    }
};
