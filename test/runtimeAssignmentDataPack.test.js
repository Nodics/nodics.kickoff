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
const manifest = require(path.join(root, 'manifest.json'));
const section = manifest.sections.nativeRuntimeAssignments;
const recordsByCode = require(path.join(root, section.sourceRoot, 'runtime-assignments/records/nativeRuntimeAssignmentData'));
const records = Object.values(recordsByCode);
const bootstrap = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/src/service/identity/defaultMandatoryIdentityBootstrapService'));

function frameworkModuleRoots(moduleNames) {
    const roots = new Map();
    const visit = directory => {
        for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
            if (!entry.isDirectory() || ['.git', 'node_modules', 'docs', 'archived'].includes(entry.name)) continue;
            const child = path.join(directory, entry.name);
            const packageFile = path.join(child, 'package.json');
            if (fs.existsSync(packageFile)) {
                const metadata = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
                if (moduleNames.has(metadata.name)) roots.set(metadata.name, child);
            }
            visit(child);
        }
    };
    visit(frameworkRoot);
    return roots;
}
test('capability-owned explicit release freezes exact reviewed permissions, identities and module ceilings for ten native deployments', () => {
    assert.equal(require('../modules/kickoffCore/package.json').nodics.kind, 'capability');
    assert.equal(section.selectionPolicy, 'EXPLICIT'); assert.equal(section.dataType, 'init');
    assert.deepEqual(section.environmentScope, ['LOCAL']); assert.equal(section.destinationRole, 'PLATFORM');
    assert.equal(records.length, 10);
    assert.deepEqual(Object.keys(recordsByCode).sort(), records.map(row => row.code).sort());
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
    const header = require(path.join(root, section.sourceRoot, 'runtime-assignments/headers/nativeRuntimeAssignmentHeader')).profile.nativeRuntimeAssignments;
    assert.equal(header.options.operation, 'ensureDeploymentAll');
    assert.equal(header.options.schemaName, 'principalScopeAssignment');
    assert.deepEqual(header.options.tenants, ['default']);
});

test('approved source successors preserve frozen predecessor authority', () => {
    assert.equal(section.sourceRoot, 'init-v007');
    assert.equal(section.version, '0.0.9');
    const retainedV6 = manifest.retainedRoots['init-v006'];
    const predecessorV6 = retainedV6.sections.nativeRuntimeAssignments;
    assert.equal(predecessorV6.sourceRoot, 'init-v006');
    assert.equal(predecessorV6.version, '0.0.7');
    assert.deepEqual(predecessorV6.files, retainedV6.files);
    const retainedV4 = manifest.retainedRoots['init-v004'];
    const predecessorV4 = retainedV4.sections.nativeRuntimeAssignments;
    assert.equal(predecessorV4.sourceRoot, 'init-v004');
    assert.equal(predecessorV4.version, '0.0.6');
    assert.deepEqual(predecessorV4.files, retainedV4.files);
    const retainedV3 = manifest.retainedRoots['init-v003'];
    const predecessorV3 = retainedV3.sections.nativeRuntimeAssignments;
    assert.equal(predecessorV3.sourceRoot, 'init-v003');
    assert.equal(predecessorV3.version, '0.0.4');
    assert.deepEqual(predecessorV3.files, retainedV3.files);
    const retainedV2 = manifest.retainedRoots['init-v002'];
    const predecessorV2 = retainedV2.sections.nativeRuntimeAssignments;
    assert.equal(predecessorV2.sourceRoot, 'init-v002');
    assert.equal(predecessorV2.version, '0.0.3');
    assert.deepEqual(predecessorV2.files, retainedV2.files);
    const retained = manifest.retainedRoots['init-v001'];
    const predecessorV1 = retained.sections.nativeRuntimeAssignments;
    assert.equal(predecessorV1.sourceRoot, 'init-v001');
    assert.equal(predecessorV1.version, '0.0.2');
    const originalFiles = {
        'init-v001/runtime-assignments/headers/nativeRuntimeAssignmentHeader.js': 'c3e662c47750a0897bbeebe98c288ee09c740aea95768b135e04aed25e5916c7',
        'init-v001/runtime-assignments/records/nativeRuntimeAssignmentData.js': 'd6621d1c423351be49ea67415f2ffc1870e97f38fced277336286cd55e26c9fc',
    };
    assert.deepEqual(predecessorV1.files, originalFiles);
    assert.deepEqual(retained.files, originalFiles);
    for (const [file, expected] of Object.entries(originalFiles)) {
        assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex'), expected);
    }
    assert.deepEqual(section, {
        ...predecessorV6,
        sourceRoot: 'init-v007',
        version: '0.0.9',
        description: section.description,
        files: section.files,
        prerequisites: section.prerequisites,
    }, 'selection and ownership policy remain unchanged while the framework identity graph advances');
    const original = require(path.join(root, 'init-v001/runtime-assignments/records/nativeRuntimeAssignmentData'));
    const version2 = Object.values(require(path.join(root, 'init-v002/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const additions = {
        commerceServer: 'commercialAgreement',
        commerceStagedServer: 'commercialAgreement',
        wasteServer: 'wasteCarbon',
    };
    const restored = JSON.parse(JSON.stringify(version2));
    let count = 0;
    for (const row of restored) {
        const added = additions[row.runtimeScope.serverCode];
        if (!added) continue;
        assert.equal(row.runtimeScope.environmentCode, 'kickoffLocal');
        assert.equal(row.runtimeScope.modules.filter(name => name === added).length, 1);
        row.runtimeScope.modules.splice(row.runtimeScope.modules.indexOf(added), 1);
        count += 1;
    }
    assert.equal(count, 3);
    assert.deepEqual(restored, original, 'all identities, permissions, other coordinates and original module ordering are preserved');
});

test('reviewed 0.0.4 assignment adds only the Store placement permission required by Commerce Cart', () => {
    const predecessor = Object.values(require(path.join(root, 'init-v002/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const version3 = Object.values(require(path.join(root, 'init-v003/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const restored = JSON.parse(JSON.stringify(version3));
    const commerce = restored.find(row => row.runtimeScope.serverCode === 'commerceServer');
    assert(commerce);
    assert.equal(commerce.runtimeScope.permissions.filter(code => code === 'commerce.store.read').length, 1);
    commerce.runtimeScope.permissions.splice(commerce.runtimeScope.permissions.indexOf('commerce.store.read'), 1);
    assert.deepEqual(restored, predecessor, 'no identity, module, coordinate or other permission changes are admitted');
    for (const row of version3.filter(item => item.runtimeScope.serverCode !== 'commerceServer')) {
        assert.deepEqual(row, predecessor.find(item => item.code === row.code));
    }
});

test('reviewed 0.0.6 assignment adds only the Waste impact calculation permission', () => {
    const predecessor = Object.values(require(path.join(root, 'init-v003/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const version4 = Object.values(require(path.join(root, 'init-v004/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const restored = JSON.parse(JSON.stringify(version4));
    const waste = restored.find(row => row.runtimeScope.serverCode === 'wasteServer');
    assert(waste);
    assert.equal(waste.runtimeScope.permissions.filter(code => code === 'waste.impact.calculate').length, 1);
    waste.runtimeScope.permissions.splice(waste.runtimeScope.permissions.indexOf('waste.impact.calculate'), 1);
    assert.deepEqual(restored, predecessor, 'no identity, module, coordinate or other permission changes are admitted');
    const commerce = version4.find(row => row.runtimeScope.serverCode === 'commerceServer');
    assert.equal(commerce.runtimeScope.permissions.filter(code => code === 'commerce.store.read').length, 1,
        'the previously reviewed Commerce Store placement authority is retained');
});

test('reviewed 0.0.7 assignment adds only Product read required by Digital listing composition', () => {
    const predecessor = Object.values(require(path.join(root, 'init-v004/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const restored = JSON.parse(JSON.stringify(Object.values(require(path.join(root, 'init-v006/runtime-assignments/records/nativeRuntimeAssignmentData')))));
    const commerce = restored.find(row => row.runtimeScope.serverCode === 'commerceServer');
    assert(commerce);
    assert.equal(commerce.runtimeScope.permissions.filter(code => code === 'commerce.product.read').length, 1);
    commerce.runtimeScope.permissions.splice(commerce.runtimeScope.permissions.indexOf('commerce.product.read'), 1);
    assert.deepEqual(restored, predecessor, 'no identity, module, coordinate or other permission changes are admitted');
});

test('current reviewed assignment adds only Digital proof permission required by Product Staged publication', () => {
    const predecessor = Object.values(require(path.join(root, 'init-v006/runtime-assignments/records/nativeRuntimeAssignmentData')));
    const restored = JSON.parse(JSON.stringify(records));
    const staged = restored.find(row => row.runtimeScope.serverCode === 'commerceStagedServer');
    assert(staged);
    assert.equal(staged.runtimeScope.permissions.filter(code => code === 'commerce.digital.bundle.publish').length, 1);
    staged.runtimeScope.permissions.splice(staged.runtimeScope.permissions.indexOf('commerce.digital.bundle.publish'), 1);
    assert.deepEqual(restored, predecessor, 'no identity, module, coordinate or other permission changes are admitted');
});

test('explicit Init seed pins the current full Profile graph including the eWaste-owned listing permission catalogue', () => {
    const profile = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/data/manifest.json')).sections['init-v001'];
    const references = profile.prerequisites.map(({ moduleName, sectionCode, version, checksum, partition }) => ({ moduleName, sectionCode, version, checksum, ...(partition ? { partition } : {}) }));
    const checksum = crypto.createHash('sha256')
        .update(Object.keys(profile.files).sort().map(file => file + ':' + profile.files[file]).join('|'))
        .update('|prerequisites:' + JSON.stringify(references)).digest('hex');
    const principalScope = manifest.sections.nativeRuntimePrincipalScope;
    const principalScopeChecksum = crypto.createHash('sha256')
        .update(Object.keys(principalScope.files).sort().map(file => file + ':' + principalScope.files[file]).join('|'))
        .update('|prerequisites:' + JSON.stringify(principalScope.prerequisites)).digest('hex');
    assert.deepEqual(section.prerequisites, [
        { moduleName: 'profile', sectionCode: 'init-v001', version: profile.version, checksum },
        { moduleName: 'kickoffCore', sectionCode: 'nativeRuntimePrincipalScope',
            version: principalScope.version, checksum: principalScopeChecksum },
    ]);
    assert(references.some(reference => reference.moduleName === 'eWaste' && reference.sectionCode === 'permissionCatalogue'));
});
test('project-owned principal scope adopts only the exact permissions missing from the framework service group', () => {
    const scope = manifest.sections.nativeRuntimePrincipalScope;
    assert.equal(scope.sourceRoot, 'init-v008');
    assert.equal(scope.version, '0.0.3');
    assert.equal(scope.selectionPolicy, 'EXPLICIT');
    assert.deepEqual(scope.environmentScope, ['LOCAL']);
    const header = require(path.join(root, scope.sourceRoot,
        'runtime-principal-scope/headers/nativeRuntimePrincipalScopeHeader')).profile.nativeRuntimePrincipalScope;
    assert.equal(header.options.schemaName, 'employee');
    assert.equal(header.options.operation, 'adoptRuntimeServiceScopesAll');
    const instruction = require(path.join(root, scope.sourceRoot,
        'runtime-principal-scope/records/nativeRuntimePrincipalScopeData')).record0;
    const serviceGroup = require(path.join(frameworkRoot,
        'nodics.platform/modules/profile/data/init-v001/records/identity/profileUserGroupData')).record4;
    const granted = [...new Set(records.flatMap(row => row.runtimeScope.permissions))];
    const missingFromGroup = granted.filter(permission =>
        !serviceGroup.permissions.includes(permission) && !instruction.expectedScopeCodes.includes(permission));
    const adopted = instruction.scopeCodes.filter(permission => !instruction.expectedScopeCodes.includes(permission));
    assert.deepEqual(adopted.sort(), missingFromGroup.sort());
    assert(granted.every(permission => serviceGroup.permissions.includes(permission) || instruction.scopeCodes.includes(permission)));
    for (const [file, expected] of Object.entries(scope.files)) {
        assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex'), expected);
    }
    const predecessor = require(path.join(root, 'init-v005/runtime-principal-scope/records/nativeRuntimePrincipalScopeData')).record0;
    const successor = require(path.join(root, 'init-v008/runtime-principal-scope/records/nativeRuntimePrincipalScopeData')).record0;
    const restored = structuredClone(successor);
    assert.equal(restored.scopeCodes.filter(code => code === 'commerce.digital.bundle.publish').length, 1);
    restored.scopeCodes.splice(restored.scopeCodes.indexOf('commerce.digital.bundle.publish'), 1);
    assert.deepEqual(restored, predecessor, 'the principal successor admits only the selected Digital proof permission');
});
test('every reviewed runtime permission is defined by the selected framework identity graph', () => {
    const profile = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/data/manifest.json')).sections['init-v001'];
    const requiredModules = new Set(profile.prerequisites.map(reference => reference.moduleName));
    const moduleRoots = frameworkModuleRoots(requiredModules);
    assert.equal(moduleRoots.size, requiredModules.size, 'every selected identity owner must be discoverable');
    const catalogue = new Set();
    for (const reference of profile.prerequisites) {
        const moduleRoot = moduleRoots.get(reference.moduleName);
        const manifest = require(path.join(moduleRoot, 'data/manifest.json'));
        const selected = manifest.sections[reference.sectionCode];
        assert(selected, reference.moduleName + ':' + reference.sectionCode);
        for (const file of Object.keys(selected.files || {}).filter(value => /records\/.*permission.*Data\.js$/i.test(value))) {
            for (const row of Object.values(require(path.join(moduleRoot, 'data', file)))) {
                if (row && typeof row.code === 'string') catalogue.add(row.code);
            }
        }
    }
    const granted = [...new Set(records.flatMap(row => row.runtimeScope.permissions))].sort();
    assert.deepEqual(granted.filter(permission => !catalogue.has(permission)), []);
});
test('runtime assignment initialization is capability-owned, role-scoped and separate from the demo; native binding remains in data', () => {
    const runtime = loadRuntime('platformServer', 'kickoffLocal');
    assert.deepEqual(runtime.data.dataReleases.initializationProfiles.nativeRuntimeAuthority.steps,
        [{ dataType: 'init', releaseCodes: ['kickoffCore:nativeRuntimeAssignments'] }]);
    const platform = require('../envs/kickoffLocal/platformServer/config/properties');
    assert.equal(platform.data, undefined, 'the runtime must not copy release policy or profile definitions');
    const selection = require('../modules/kickoffCore/config/properties').data.dataReleases.types.init.startupProfileSelections;
    assert.deepEqual(selection.value, [{ environmentCode: 'kickoffLocal', runtimeRole: 'PLATFORM',
        profileCodes: ['nativeRuntimeAuthority'] }]);
    const owner = require('../modules/kickoffCore/config/properties').data.dataReleases.runtimeRoleProfiles.PLATFORM;
    assert.equal(owner.initializationProfiles.nativeRuntimeAuthority.enabled, true);
    const docker = loadRuntime('platformServer', 'kickoffDockerLocal');
    assert.deepEqual(docker.data.dataReleases.initializationProfiles.nativeRuntimeAuthority.steps,
        runtime.data.dataReleases.initializationProfiles.nativeRuntimeAuthority.steps);
    assert(records.every(row => row.runtimeScope.environmentCode === 'kickoffLocal'));
    assert.equal(docker.runtimeIdentity, undefined, 'profile discovery does not synthesize an unconfigured deployment identity');
    assert.equal(loadRuntime('wasteServer', 'kickoffLocal').data.dataReleases.initializationProfiles.nativeRuntimeAuthority, undefined);
    assert.deepEqual(loadRuntime('wasteServer', 'kickoffLocal').data.dataReleases.types.init.startupProfileSelections,
        selection.value);
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
