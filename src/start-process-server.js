/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nodics.kickoff/src/start-process-server
 * @description Starts the local Kickoff Process server using the nodics.process functional module group.
 * @layer project-runtime
 * @owner nodics.kickoff
 * @override Customer projects may create their own process server topology while keeping Process module defaults in nodics.process.
 */
const path = require('node:path');
const core = require('nodics.core');

/**
 * Resolves an installed package root for Nodics runtime module discovery.
 *
 * @param {string} packageName Installed package name.
 * @returns {string} Absolute package root path.
 */
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));

core.start(Object.freeze({
    NODICS_HOME: packageRoot('nodics.core'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([
        packageRoot('nodics.core'),
        packageRoot('nodics.process'),
        path.resolve(__dirname, '..')
    ]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'processServer'
}));
