/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
'use strict';
/** @module nodics.kickoff/src/start-engagement-server @description Starts the local reference Engagement runtime without moving framework ownership into Kickoff. @layer project-runtime @owner nodics.kickoff @override Customer projects may compose their own Engagement topology and coordinates. */
const path = require('node:path');
const core = require('nodics.core');
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));
core.start(Object.freeze({ NODICS_HOME: packageRoot('nodics.core'), CUSTOM_HOME: path.resolve(__dirname, '..'), MODULE_ROOTS: Object.freeze([packageRoot('nodics.core'), packageRoot('nodics.communication'), packageRoot('nodics.engagement'), path.resolve(__dirname, '..')]), defaultEnvironment: 'kickoffLocal', defaultServer: 'engagementServer' }));
