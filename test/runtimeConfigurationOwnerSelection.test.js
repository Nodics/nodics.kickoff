/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module test/runtimeConfigurationOwnerSelection @description Reference runtimes observe complete owner declarations and retain credential selectors only in actual consumers. @owner nodics.kickoff @layer test */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { loadRuntime, activeModuleNames, frameworkRoot } = require('./helpers/configuration');
const schemaOwner = require(path.join(frameworkRoot, 'nodics.foundation/modules/nSystem/src/service/config/defaultRuntimeConfigurationSchemaService'));
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    for (const server of ['platformServer', 'wcmsStagedServer', 'wcmsOnlineServer', 'processServer', 'wasteServer', 'commerceStagedServer', 'commerceServer']) {
        test(environment + '/' + server + ' observes only complete selected runtime configuration owners', () => {
            const runtime = loadRuntime(server, environment);
            const modules = activeModuleNames(runtime);
            const registry = runtime.runtimeConfigurationSchemas || {};
            const identity = registry.telegramExternalIdentity;
            if (modules.includes('profile')) {
                assert.equal(identity.ownerModule, 'profile');
                assert.equal(identity.fields[0].code, 'botToken');
                assert.equal(identity.fields[0].sensitive, true);
                assert.equal(identity.fields[0].credentialReference, 'telegram.bot.circa');
            } else assert.equal(identity, undefined, 'A credential selector cannot synthesize a schema for an inactive owner');
            for (const [code, schema] of Object.entries(registry)) {
                assert.ok(modules.includes(schema.ownerModule), 'Schema owner is selected in this runtime');
                assert.equal(schemaOwner.assertSchemaContract(code, schema), schema);
            }
        });
    }
}
