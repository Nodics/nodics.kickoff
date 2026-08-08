/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module nodics.kickoff/modules/kickoffCore/nodics
 * @description Registers the kickoffCore project module lifecycle hooks.
 * @layer module
 * @owner kickoffCore
 * @override Project behavior should be added through owned definitions and later-layer customization.
 */
module.exports = {
    init: function (options) {
        return Promise.resolve(true);
    },

    postInit: function (options) {
        return Promise.resolve(true);
    }
};
