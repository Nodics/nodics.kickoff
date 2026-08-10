'use strict';

const path = require('node:path');

const packageRoot = packageName => path.dirname(require.resolve(packageName + '/package.json'));

module.exports = Object.freeze({
    NODICS_HOME: packageRoot('nodics.core'),
    CUSTOM_HOME: path.resolve(__dirname, '..'),
    MODULE_ROOTS: Object.freeze([
        packageRoot('nodics.core'),
        packageRoot('nodics.localization'),
        packageRoot('nodics.platform'),
        path.resolve(__dirname, '..')
    ]),
    defaultEnvironment: 'kickoffLocal',
    defaultServer: 'platformServer'
});
