/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffDockerLocal @description Declares the isolated Docker Local production-simulation environment. */
module.exports = {
    /** Initializes the environment contribution without owning infrastructure lifecycle. */
    init: function () { return Promise.resolve(true); },
    /** Completes environment contribution initialization. */
    postInit: function () { return Promise.resolve(true); }
};
