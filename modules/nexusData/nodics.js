/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
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
