/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** @module nodics.kickoff/src/start-commerce-server @description Starts the full local reference Commerce graph. @layer project-runtime @owner nodics.kickoff */
const path = require('node:path');
const core = require('nodics.core');
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));
core.start(Object.freeze({
    NODICS_HOME: packageRoot('nodics.core'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([packageRoot('nodics.core'), packageRoot('nodics.process'), packageRoot('nodics.commerce'), path.resolve(__dirname, '..')]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'commerceServer'
}));
