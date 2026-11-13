/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
/** @module test/nexusLocalSetupTarget @description Verifies Local Nexus setup uses the configured co-hosted Engagement runtime without changing framework or Docker defaults. @owner nodics.kickoff @layer test */
const assert = require('node:assert/strict');
const { test } = require('node:test');
const { loadRuntime } = require('./helpers/configuration');

test('Local Nexus setup targets co-hosted Engagement through its actual Process coordinates', () => {
    const local = loadRuntime('platformServer', 'kickoffLocal');
    const process = loadRuntime('processServer', 'kickoffLocal');
    const docker = loadRuntime('platformServer', 'kickoffDockerLocal');
    const source = docker.backofficeApplicationInitialization.profiles.nexus.dataPackages;
    const selected = local.backofficeApplicationInitialization.profiles.nexus.dataPackages;
    assert.equal(selected.length, source.length);
    assert.deepEqual(selected.map(step => step.code), source.map(step => step.code));
    for (let index = 0; index < selected.length; index++) {
        if (selected[index].code !== 'nexus.web:nexusEngagementOperational') {
            assert.deepEqual(selected[index], source[index]);
            continue;
        }
        assert.equal(selected[index].targetServer, 'processServer');
        assert.equal(selected[index].targetRuntimeRole, process.runtimeRole.code);
        assert.deepEqual(selected[index], { ...source[index], targetServer: 'processServer', targetRuntimeRole: 'PROCESS' });
        assert.equal(source[index].targetServer, 'engagementServer');
        assert.equal(source[index].targetRuntimeRole, 'ENGAGEMENT');
    }
    assert.equal(process.database.engagementApi.mongodb.master.databaseName, 'kickoffLocalEngagement');
});
