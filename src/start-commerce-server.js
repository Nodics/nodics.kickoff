/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** @module nodics.kickoff/src/start-commerce-server @description Starts the full local reference Commerce graph. @layer project-runtime @owner nodics.kickoff */
const path = require('node:path');
const foundation = require('nodics.foundation');
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));
foundation.start(Object.freeze({
    NODICS_HOME: packageRoot('nodics.foundation'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([packageRoot('nodics.foundation'), packageRoot('nodics.process'), packageRoot('nodics.commerce'), path.resolve(__dirname, '..')]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'commerceServer'
}));
