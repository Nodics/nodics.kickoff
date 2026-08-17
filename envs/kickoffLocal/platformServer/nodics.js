/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffLocal/platformServer/nodics
 * @description Defines Kickoff project-owned module lifecycle hooks for this boundary.
 * @layer module
 * @owner platformServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */
module.exports = {
    /**
     * Initializes this Kickoff lifecycle boundary.
     *
     * @param {Object} options Optional lifecycle context.
     * @returns {Promise<boolean>} Resolves true when no boundary-specific startup behavior is required.
     */
    init: function (options) {
        return Promise.resolve(true);
    },

    /**
     * Runs post-initialization for this Kickoff lifecycle boundary.
     *
     * @param {Object} options Optional lifecycle context.
     * @returns {Promise<boolean>} Resolves true when no boundary-specific post-start behavior is required.
     */
    postInit: function (options) {
        return Promise.resolve(true);
    }
};
