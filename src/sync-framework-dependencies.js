/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * Synchronizes local Nodics framework links from `.env`.
 *
 * Nodics Kickoff remains a standard npm project. The `.env` file only tells this
 * project where the developer has checked out the framework repository
 * locally; this script creates generated links consumed by package.json.
 */

const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const packageJsonPath = path.join(projectRoot, 'package.json');
const envPath = path.join(projectRoot, '.env');
const frameworkLinkRoot = path.join(projectRoot, '.nodics', 'framework');

function readEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return {};
    return fs.readFileSync(filePath, 'utf8').split(/\r?\n/u).reduce((env, line) => {
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

function assertFrameworkModule(frameworkRoot, moduleName) {
    const moduleRoot = path.join(frameworkRoot, moduleName);
    const modulePackage = path.join(moduleRoot, 'package.json');
    if (!fs.existsSync(modulePackage)) {
        throw new Error(
            `Cannot resolve ${moduleName}. Expected package at ${modulePackage}. ` +
            'Update NODICS_FRAMEWORK_ROOT in .env.'
        );
    }
    return moduleRoot;
}

function expectedDependencyPath(moduleName) {
    return `file:.nodics/framework/${moduleName}`;
}

function assertCommittedDependency(dependencies, moduleName) {
    const expectedPath = expectedDependencyPath(moduleName);
    if (dependencies[moduleName] !== expectedPath) {
        throw new Error(
            `Unexpected dependency path for ${moduleName}: ${dependencies[moduleName]}. ` +
            `Expected ${expectedPath}. Package dependencies must point to generated framework links.`
        );
    }
}

function replaceGeneratedLink(linkPath, targetPath) {
    if (fs.existsSync(linkPath)) {
        const linkStats = fs.lstatSync(linkPath);
        if (!linkStats.isSymbolicLink()) {
            throw new Error(
                `Refusing to replace non-symlink path: ${linkPath}. ` +
                'Remove it manually if it is safe, then rerun configure:framework.'
            );
        }
        fs.unlinkSync(linkPath);
    }
    fs.symlinkSync(targetPath, linkPath, 'dir');
}

function main() {
    const env = Object.assign({}, readEnvFile(envPath), process.env);
    const frameworkRootValue = env.NODICS_FRAMEWORK_ROOT;
    if (!frameworkRootValue) {
        throw new Error(
            'NODICS_FRAMEWORK_ROOT is not configured. Copy .env.example to .env ' +
            'and point it to the folder containing nodics.foundation, nodics.platform, ' +
            'nodics.wcms, nodics.cron, and nodics.process.'
        );
    }

    const frameworkRoot = path.resolve(projectRoot, frameworkRootValue);
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = packageJson.dependencies || {};
    const frameworkDependencies = Object.keys(dependencies).filter(name => name.startsWith('nodics.'));

    if (frameworkDependencies.length === 0) {
        throw new Error('No nodics.* dependencies found in package.json.');
    }

    fs.mkdirSync(frameworkLinkRoot, { recursive: true });

    fs.readdirSync(frameworkLinkRoot).filter(name => name.startsWith('nodics.')
        && !frameworkDependencies.includes(name)).forEach(name => {
        const stalePath = path.join(frameworkLinkRoot, name);
        const staleStats = fs.lstatSync(stalePath);
        if (!staleStats.isSymbolicLink()) {
            throw new Error(
                `Refusing to remove stale non-symlink framework path: ${stalePath}. ` +
                'Remove it manually if it is safe, then rerun configure:framework.'
            );
        }
        fs.unlinkSync(stalePath);
        console.log(`Removed stale framework link ${name}`);
    });

    frameworkDependencies.forEach(moduleName => {
        assertCommittedDependency(dependencies, moduleName);
        const moduleRoot = assertFrameworkModule(frameworkRoot, moduleName);
        const linkPath = path.join(frameworkLinkRoot, moduleName);
        replaceGeneratedLink(linkPath, moduleRoot);
        console.log(`${moduleName} -> ${moduleRoot}`);
    });

    console.log(`Linked ${frameworkDependencies.length} Nodics framework dependencies from ${frameworkRoot}`);
}

main();
