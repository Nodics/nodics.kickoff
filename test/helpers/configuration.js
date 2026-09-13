'use strict';

/** Test-only access to the configured framework's merge semantics and shared project defaults. */
const path = require('node:path');
const { createRequire } = require('node:module');
const projectRoot = path.resolve(__dirname, '../..');
const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const frameworkRequire = createRequire(path.join(frameworkRoot, 'package.json'));
const merge = frameworkRequire('lodash/merge');
const administration = require('../../modules/kickoffAdministration/config/properties');

module.exports = {
    /** Resolve project/environment/server declarations through the real nConfig loader without starting runtime resources. */
    loadRuntime: function (server, environment = 'kickoffLocal', variables = {}) {
        const initializer = require(path.join(frameworkRoot, 'nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService'));
        const previous = global.NODICS;
        const environmentRoot = path.join(projectRoot, 'envs', environment);
        const originalContext = initializer.getPropertyBindingContext;
        try {
            global.NODICS = { getEnvironmentPath: () => projectRoot, getServerRootPath: () => environmentRoot,
                getServerPath: () => path.join(environmentRoot, server), getNodePath: () => undefined,
                getNodicsHome: () => path.join(frameworkRoot, 'nodics.foundation'),
                getEnvironmentName: () => 'nodics.kickoff', getSelectedEnvironmentName: () => environment,
                getServerName: () => server, getNodeName: () => undefined };
            initializer.getPropertyBindingContext = function(file) {
                return { ...originalContext.call(this, file), environmentVariables: variables };
            };
            return initializer.loadServerProperties();
        } finally { global.NODICS = previous; initializer.getPropertyBindingContext = originalContext; }
    },
    merge,
    frameworkRoot,
    /** Compose only the selected project administration defaults for focused declaration tests. */
    inheritAdministration: function (properties) {
        return merge({}, properties.activeModules.modules.includes('kickoffAdministration') ? administration : {}, properties);
    }
};
