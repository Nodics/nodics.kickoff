/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module circa.ewaste/test/helpers/deploymentPolicy @description Reads the actual reference deployment policy for isolated domain tests; no runtime listeners or policy copies. @owner circa.ewaste @layer test */
const { loadRuntime } = require('../../../../test/helpers/configuration');
const cache = new Map();
module.exports = {
    runtime(server = 'wasteServer', environment = 'kickoffDockerLocal') {
        const key = environment + '/' + server;
        if (!cache.has(key)) cache.set(key, loadRuntime(server, environment));
        return structuredClone(cache.get(key));
    }
};
