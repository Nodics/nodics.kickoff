/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module kickoff/test/runtimeAssignmentDataPack @description Frozen runtime assignment sources preserve reviewed permissions and identities without runtime configuration authority. @owner kickoffCore @layer test */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { loadRuntime, activeModuleNames, frameworkRoot } = require('./helpers/configuration');
const permissions = require('./fixtures/kickoffNativeRuntimePermissions.json');
const root = path.resolve(__dirname, '../modules/kickoffCore/data');
const records = require(path.join(root, 'init-v001/runtime-assignments/records/nativeRuntimeAssignmentData'));
const section = require(path.join(root, 'manifest.json')).sections.nativeRuntimeAssignments;
const bootstrap = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/src/service/identity/defaultMandatoryIdentityBootstrapService'));
test('capability-owned explicit release freezes exact reviewed permissions, identities and module ceilings for ten native deployments', () => {
    assert.equal(require('../modules/kickoffCore/package.json').nodics.kind, 'capability');
    assert.equal(section.selectionPolicy, 'EXPLICIT'); assert.equal(section.dataType, 'init');
    assert.deepEqual(section.environmentScope, ['LOCAL']); assert.equal(section.destinationRole, 'PLATFORM');
    assert.equal(records.length, 10);
    assert.deepEqual(records.map(row => row.runtimeScope.serverCode).sort(), Object.keys(permissions).sort());
    for (const row of records) {
        const scope = row.runtimeScope, runtime = loadRuntime(scope.serverCode, 'kickoffLocal');
        assert.deepEqual(scope.permissions, permissions[scope.serverCode]);
        assert.equal(scope.instanceCode, runtime.runtimeIdentity.instanceCode);
        assert.equal(scope.projectCode, 'nodics.kickoff'); assert.equal(scope.environmentCode, 'kickoffLocal');
        assert.equal(row.code, bootstrap.runtimeDeploymentGrantCode('kickoffLocal', scope.serverCode));
        assert.equal(row.scopeCode, row.code); assert.equal(row.principalCode, 'apiAdmin');
        assert.deepEqual(scope.modules, [...new Set([...activeModuleNames(runtime), ...runtime.runtimeIdentity.remoteModules])]);
        assert.equal(runtime.identityGovernance?.migration?.runtimeDeploymentGrantPermissions, undefined);
    }
});
test('pack bytes are pinned and header delegates to the fixed Profile create-preserve owner', () => {
    for (const [file, expected] of Object.entries(section.files)) {
        const bytes = fs.readFileSync(path.join(root, file));
        assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), expected);
        assert(!bytes.toString().includes('CONFIG'));
    }
    const header = require(path.join(root, 'init-v001/runtime-assignments/headers/nativeRuntimeAssignmentHeader')).profile.nativeRuntimeAssignments;
    assert.equal(header.options.operation, 'ensureDeploymentAll');
    assert.equal(header.options.schemaName, 'principalScopeAssignment');
    assert.deepEqual(header.options.tenants, ['default']);
});

test('explicit Init seed pins the current full Profile graph including the eWaste-owned listing permission catalogue', () => {
    const profile = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/data/manifest.json')).sections['init-v001'];
    const references = profile.prerequisites.map(({ moduleName, sectionCode, version, checksum, partition }) => ({ moduleName, sectionCode, version, checksum, ...(partition ? { partition } : {}) }));
    const checksum = crypto.createHash('sha256')
        .update(Object.keys(profile.files).sort().map(file => file + ':' + profile.files[file]).join('|'))
        .update('|prerequisites:' + JSON.stringify(references)).digest('hex');
    assert.deepEqual(section.prerequisites, [{ moduleName: 'profile', sectionCode: 'init-v001', version: profile.version, checksum }]);
    assert(references.some(reference => reference.moduleName === 'eWaste' && reference.sectionCode === 'permissionCatalogue'));
});
test('runtime assignment initialization is capability-owned, role-scoped and separate from the demo; native binding remains in data', () => {
    const runtime = loadRuntime('platformServer', 'kickoffLocal');
    assert.deepEqual(runtime.data.dataReleases.initializationProfiles.nativeRuntimeAuthority.steps,
        [{ dataType: 'init', releaseCodes: ['kickoffCore:nativeRuntimeAssignments'] }]);
    assert.equal(require('../envs/kickoffLocal/platformServer/config/properties').data, undefined);
    const owner = require('../modules/kickoffCore/config/properties').data.dataReleases.runtimeRoleProfiles.PLATFORM;
    assert.equal(owner.initializationProfiles.nativeRuntimeAuthority.enabled, true);
    const docker = loadRuntime('platformServer', 'kickoffDockerLocal');
    assert.deepEqual(docker.data.dataReleases.initializationProfiles.nativeRuntimeAuthority.steps,
        runtime.data.dataReleases.initializationProfiles.nativeRuntimeAuthority.steps);
    assert(records.every(row => row.runtimeScope.environmentCode === 'kickoffLocal'));
    assert.equal(docker.runtimeIdentity, undefined, 'profile discovery does not synthesize an unconfigured deployment identity');
    assert.equal(loadRuntime('wasteServer', 'kickoffLocal').data.dataReleases.initializationProfiles.nativeRuntimeAuthority, undefined);
    const roleProfile = require('../modules/circa.ewaste/config/properties').data.dataReleases.runtimeRoleProfiles.PLATFORM;
    assert.equal(roleProfile.initializationProfiles.circaIdentityAuthority.enabled, true);
    const demo = require('../modules/circa.ewaste/data/manifest.json').sections;
    assert.equal(demo.circaEnterpriseRoles, undefined, 'Reusable roles must not be demo-owned');
    const releases = runtime.data.dataReleases.initializationProfiles.circaIdentityAuthority.steps.flatMap(step => step.releaseCodes);
    for (const owner of ['loyaltyWallet', 'import', 'inventory', 'order']) {
        assert(releases.includes(owner + ':specialAccessGroups'), owner);
        assert(releases.includes(owner + ':specialAccessRoles'), owner);
    }
    assert.equal(demo.circaLocalUnusedRefundExceptionStaffAssignment.selectionPolicy, 'EXPLICIT');
});
