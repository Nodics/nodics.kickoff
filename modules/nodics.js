/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module nodics.kickoff/modules/nodics
 * @description Preserves the standard module-group shape for non-runtime tooling.
 * @layer module
 * @owner kickoffModules
 * @override This structural group is never loaded; project behavior belongs in child modules.
 */
module.exports = {
    init: function (options) {
        return Promise.resolve(true);
    },

    postInit: function (options) {
        return Promise.resolve(true);
    }
};
