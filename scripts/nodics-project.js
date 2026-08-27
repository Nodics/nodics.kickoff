#!/usr/bin/env node
/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nodics.kickoff/scripts/nodics-project
 * @description Project-local bootstrap that delegates Nodics lifecycle commands to the framework checkout declared in `.env`.
 * @layer tooling
 * @owner nodics.kickoff
 */

const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');

const projectBridgeCommands = new Set([
    'clean',
    'build',
    'release:check',
    'qualification:security-boundary',
    'qualification:publishing-capacity',
    'qualification:publishing-soak',
    'qualification:publishing-interruption-contracts',
    'project:validate',
    'project:run'
]);

function readEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return {};
    return fs.readFileSync(filePath, 'utf8')
        .split(/\r?\n/u)
        .reduce((env, line) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return env;
            const separatorIndex = trimmed.indexOf('=');
            if (separatorIndex < 0) return env;
            const key = trimmed.slice(0, separatorIndex).trim();
            let value = trimmed.slice(separatorIndex + 1).trim();
            if ((value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            env[key] = value;
            return env;
        }, {});
}

function resolveFrameworkCommand(projectRoot, environment, command) {
    const configuredRoot = environment.NODICS_FRAMEWORK_ROOT || '../nodics.ai';
    const frameworkRoot = path.resolve(projectRoot, configuredRoot);
    const binaryName = projectBridgeCommands.has(command) ? 'nodics-project.js' : 'nodics-tool.js';
    const commandPath = path.join(
        frameworkRoot,
        'nodics.foundation',
        'modules',
        'nTooling',
        'bin',
        binaryName
    );
    if (!fs.existsSync(commandPath)) {
        throw new Error(
            'Unable to resolve Nodics framework tooling. Set NODICS_FRAMEWORK_ROOT in .env ' +
            'to the nodics.ai checkout available on this machine. Expected: ' + commandPath
        );
    }
    return {frameworkRoot, commandPath};
}

function resolveProjectPathValues(projectRoot, environment) {
    const pathKeys = [
        'NODICS_REPOSITORY_BUILD_TMPDIR',
        'NODICS_TOOLING_TMPDIR'
    ];
    const resolvedEnvironment = Object.assign({}, environment);
    pathKeys.forEach(key => {
        if (resolvedEnvironment[key] && !path.isAbsolute(resolvedEnvironment[key])) {
            resolvedEnvironment[key] = path.resolve(projectRoot, resolvedEnvironment[key]);
        }
    });
    return resolvedEnvironment;
}

function main() {
    const projectRoot = path.resolve(__dirname, '..');
    const projectEnv = readEnvFile(path.join(projectRoot, '.env'));
    const environment = resolveProjectPathValues(projectRoot, Object.assign({}, projectEnv, process.env));
    const resolved = resolveFrameworkCommand(projectRoot, environment, process.argv[2] || 'help');
    const result = spawnSync(process.execPath, [resolved.commandPath].concat(process.argv.slice(2)), {
        cwd: projectRoot,
        env: Object.assign({}, environment, {
            NODICS_PROJECT_ROOT: projectRoot,
            NODICS_FRAMEWORK_ROOT: resolved.frameworkRoot
        }),
        stdio: 'inherit'
    });
    if (result.error) throw result.error;
    process.exitCode = result.status || 0;
}

try {
    main();
} catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
}
