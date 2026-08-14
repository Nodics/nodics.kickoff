/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module wcmsStagedServer @description Composes the Local WCMS authoring and publication-source runtime. */
module.exports = {
    /** Initializes the server contribution. */
    init: function () { return Promise.resolve(true); },
    /** Completes server contribution initialization. */
    postInit: function () { return Promise.resolve(true); }
};
