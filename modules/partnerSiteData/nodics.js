/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * @module partnerSiteData/nodics
 * @description Registers a later-loaded partner-owned website customization data module.
 * @layer module
 * @owner partnerSiteData
 * @override A real partner project may replace this reference module with its own later-indexed bundle.
 */
module.exports = {
    /** @returns {Promise<boolean>} Resolves when the data-only module is initialized. */
    init: function () { return Promise.resolve(true); },
    /** @returns {Promise<boolean>} Resolves after the data-only module is initialized. */
    postInit: function () { return Promise.resolve(true); }
};
