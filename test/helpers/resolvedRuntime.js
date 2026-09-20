/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** Executes only the framework's discovery and configuration stages in an isolated acceptance process. No scripts, service startup, imports, resets or providers run. */
const fs = require('node:fs');
const path = require('node:path');
const project = path.resolve(__dirname, '../..');
const framework = path.resolve(process.env.NODICS_FRAMEWORK_ROOT || path.join(project, '../nodics.ai'));
const [server, environment, encodedVariables = '{}'] = process.argv.slice(2);
const variables = JSON.parse(encodedVariables);
process.argv = process.argv.slice(0, 2);
Object.assign(process.env, variables);
const root = path.join(framework, 'nodics.foundation/modules/nConfig');
const Nodics = require(path.join(root, 'bin/nodics'));
const Config = require(path.join(root, 'bin/config'));
const utils = require(path.join(root, 'src/utils/utils'));
const initializer = require(path.join(root, 'src/service/DefaultFrameworkInitializerService'));
const noop = { info() {}, debug() {}, warn() {}, error() {} };
initializer.LOG = noop;
utils.LOG = noop;
const metadata = JSON.parse(fs.readFileSync(path.join(project, 'envs', environment, server, 'package.json')));
const roots = [
    path.join(framework, 'nodics.foundation'),
    ...(metadata.nodics.runtimeModuleRoots || metadata.nodics.extends || []).map((name) =>
        path.join(framework, name),
    ),
    project,
];
const options = {
    NODICS_HOME: roots[0],
    CUSTOM_HOME: project,
    MODULE_ROOTS: roots,
    defaultEnvironment: environment,
    defaultServer: server,
};
global.NODICS = new Nodics();
global.CONFIG = new Config();
NODICS.LOG = noop;
CONFIG.LOG = noop;
NODICS.init(options);
utils.loadRawModuleRoots(roots);
NODICS.initEnvironment(options);
initializer.prepareOptions();
initializer.loadModuleIndex();
NODICS.setActiveModules([...NODICS.getIndexedModules().values()].map((module) => module.name));
initializer.loadModulesMetaData();
initializer.loadConfigurations();
initializer.validateResolvedConfiguration();
process.stdout.write(
    JSON.stringify({
        properties: CONFIG.getProperties(),
        modules: [...NODICS.getIndexedModules().values()].map((module) => module.name),
    }),
);
