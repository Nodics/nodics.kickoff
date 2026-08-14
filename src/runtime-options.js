/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const path = require('node:path');

const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));

module.exports = Object.freeze({
    NODICS_HOME: packageRoot('nodics.foundation'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([
        packageRoot('nodics.foundation'),
        packageRoot('nodics.localization'),
        packageRoot('nodics.platform'),
        path.resolve(__dirname, '..')
    ]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'platformServer'
});
