/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';

/** @module test/configurationInheritanceContract @description Protects project default activation, deployment overrides and configuration ownership. @owner nodics.kickoff */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { merge, inheritAdministration } = require('./helpers/configuration');
const administration = require('../modules/kickoffAdministration/config/properties');
const metadata = require('../modules/kickoffAdministration/package.json');

assert.deepEqual(metadata.nodics.owns, ['configuration', 'llm']);
assert.deepEqual(metadata.nodics.runtime, {router: false, publish: false, web: false});
assert.equal(metadata.nodics.extends, undefined, 'Administration defaults must not activate WCMS or Commerce');
assert.equal(administration.backofficeApplicationInitialization.projectRoot, undefined);
assert.equal(administration.backofficeApplicationInitialization.projectCode, undefined);
for (const profile of Object.values(administration.backofficeApplicationInitialization.profiles)) {
    assert.equal(profile.target, undefined, 'Deployment transports stay in the selected environment/server');
}

for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    const environmentRoot = path.join(__dirname, '../envs', environment);
    assert(Number(metadata.index) < Number(require(path.join(environmentRoot, 'package.json')).index), 'Shared defaults must load before environment overrides');
    for (const entry of fs.readdirSync(environmentRoot, {withFileTypes: true})) {
        const file = path.join(environmentRoot, entry.name, 'config/properties.js');
        if (!entry.isDirectory() || !fs.existsSync(file)) continue;
        const properties = require(file);
        assert.equal((properties.activeModules?.modules || []).includes('kickoffAdministration'), entry.name === 'platformServer', 'Only Platform may select administration profiles');
        if (entry.name !== 'platformServer') continue;
        const effective = inheritAdministration(properties);
        const profiles = effective.backofficeApplicationInitialization.profiles;
        for (const code of Object.keys(administration.backofficeApplicationInitialization.profiles)) {
            assert.equal(profiles[code].code, code);
            assert(profiles[code].owner && profiles[code].siteCode && profiles[code].baselineCode);
            assert(profiles[code].target?.connectionName, 'A shared profile still requires its deployment target');
        }
        assert.equal(effective.backofficeFunctionalModuleActivationData.modules['nodics.communication'].dataPackages[1].trigger, 'USER');
        const node = merge({}, effective, {backofficeApplicationInitialization: {profiles: {nexus: {target: {timeoutMs: 9876}}}}});
        assert.equal(node.backofficeApplicationInitialization.profiles.nexus.target.timeoutMs, 9876);
        assert.deepEqual(node.backofficeApplicationInitialization.profiles.nexus.dataPackages, profiles.nexus.dataPackages);
        if (environment === 'kickoffLocal') {
            assert.equal(effective.localResetProvider.enabled, true);
            assert.deepEqual(effective.localResetProvider.environmentAllowlist, [environment]);
        } else {
            assert.equal(effective.localResetProvider, undefined, 'Shared defaults must not opt Docker into local reset');
        }
    }
}
assert.equal(require('../envs/kickoffLocal/platformServer/config/properties').profileBrowserSession.refreshCookieName, undefined);
assert.equal(require('../envs/kickoffLocal/commerceServer/config/properties').product.discovery.catalogue.maximumCandidates, undefined);
console.log('Kickoff shared defaults, activation scope and deployment overlays validated');
