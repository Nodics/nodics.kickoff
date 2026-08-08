/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module nodics.kickoff/modules/kickoffApi/nodics
 * @description Registers the kickoffApi project module lifecycle hooks.
 * @layer module
 * @owner kickoffApi
 * @override Project API behavior should be added through owned definitions and later-layer customization.
 */
module.exports = {
    init: function (options) {
        return Promise.resolve(true);
    },

    postInit: function (options) {
        return Promise.resolve(true);
    }
};
