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
 * @description Starts the local Kickoff Business Process and Automation server using process and cron functional module groups.
 * @layer project-runtime
 * @owner nodics.kickoff
 * @override Customer projects may create their own process and automation server topology while keeping Process and Cron module defaults in their owning framework modules.
 */
const path = require('node:path');
const foundation = require('nodics.foundation');

/**
 * Resolves an installed package root for Nodics runtime module discovery.
 *
 * @param {string} packageName Installed package name.
 * @returns {string} Absolute package root path.
 */
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));

foundation.start(Object.freeze({
    NODICS_HOME: packageRoot('nodics.foundation'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([
        packageRoot('nodics.foundation'),
        packageRoot('nodics.process'),
        packageRoot('nodics.cron'),
        // Discover CMS-owned immutable Process contributions without activating
        // the WCMS runtime graph in this server.
        packageRoot('nodics.wcms'),
        path.resolve(__dirname, '..')
    ]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'processServer'
}));
