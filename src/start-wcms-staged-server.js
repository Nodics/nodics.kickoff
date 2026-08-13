'use strict';

const path = require('node:path');
const core = require('nodics.core');
const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));

core.start(Object.freeze({
    NODICS_HOME: packageRoot('nodics.core'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([
        packageRoot('nodics.core'),
        packageRoot('nodics.wcms'),
        // Discover Platform-owned immutable Axis data without activating the
        // Platform runtime graph inside WCMS Staged.
        packageRoot('nodics.platform'),
        path.resolve(__dirname, '..')
    ]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'wcmsStagedServer'
}));
