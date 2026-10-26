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

test('unreleased current baseline uses only init-v001 without retained snapshots', () => {
    assert.equal(section.sourceRoot, 'init-v001');
    assert.equal(section.version, '0.0.10');
    assert.equal(manifest.retainedRoots, undefined);
    assert.deepEqual(fs.readdirSync(root).filter(name => /^init-v/.test(name)), ['init-v001']);
    for (const selected of Object.values(manifest.sections)) {
        assert.equal(selected.sourceRoot, 'init-v001');
        assert(Object.keys(selected.files).every(file => file.startsWith('init-v001/')));
    }
    const declared = Object.values(manifest.sections).flatMap(selected => Object.keys(selected.files)).sort();
    const actual = fs.readdirSync(path.join(root, 'init-v001'), { recursive: true, withFileTypes: true })
        .filter(entry => entry.isFile())
        .map(entry => path.relative(root, path.join(entry.parentPath, entry.name)).split(path.sep).join('/')).sort();
    assert.deepEqual(actual, declared, 'no unselected predecessor files may remain inside the consolidated root');
    const targets = new Set();
    for (const selected of Object.values(manifest.sections)) {
        const headerPath = Object.keys(selected.files).find(file => file.includes('/headers/'));
        const recordsPath = Object.keys(selected.files).find(file => file.includes('/records/'));
        const header = Object.values(require(path.join(root, headerPath)).profile)[0];
        for (const row of Object.values(require(path.join(root, recordsPath)))) {
            const target = 'profile:' + header.options.schemaName + ':' + row.code;
            assert(!targets.has(target), 'duplicate current section target: ' + target);
            targets.add(target);
        }
    }
    const currentPermissions = {
        commerceServer: ['commerce.store.read', 'commerce.product.read'],
        commerceStagedServer: ['commerce.digital.bundle.publish'],
        wasteServer: ['waste.impact.calculate'],
    };
    for (const [server, required] of Object.entries(currentPermissions)) {
        const row = records.find(item => item.runtimeScope.serverCode === server);
        for (const permission of required)
            assert.equal(row.runtimeScope.permissions.filter(code => code === permission).length, 1);
    }
});

test('explicit Init seed pins the current full Profile graph including the eWaste-owned listing permission catalogue', () => {
    const profile = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/data/manifest.json')).sections['init-v001'];
    const references = profile.prerequisites.map(({ moduleName, sectionCode, version, checksum, partition }) => ({ moduleName, sectionCode, version, checksum, ...(partition ? { partition } : {}) }));
    const checksum = crypto.createHash('sha256')
        .update(Object.keys(profile.files).sort().map(file => file + ':' + profile.files[file]).join('|'))
        .update('|prerequisites:' + JSON.stringify(references)).digest('hex');
    const principalScope = manifest.sections.nativeRuntimePrincipalScope;
    const carbonManifest = require(path.join(frameworkRoot, 'nodics.waste/modules/wasteCarbon/data/manifest.json'));
    const carbonReferences = ['permissionCatalogue', 'transferFinalizationPermission'].map(sectionCode => {
        const selected = carbonManifest.sections[sectionCode];
        return { moduleName: 'wasteCarbon', sectionCode, version: selected.version, checksum: crypto.createHash('sha256')
            .update(Object.keys(selected.files).sort().map(file => file + ':' + selected.files[file]).join('|')).digest('hex') };
    });
    assert.deepEqual(principalScope.prerequisites, [
        { moduleName: 'profile', sectionCode: 'init-v001', version: profile.version, checksum },
        ...carbonReferences,
    ]);
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
    assert.equal(scope.sourceRoot, 'init-v001');
    assert.equal(scope.version, '0.0.4');
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
    assert.equal(instruction.scopeCodes.filter(code => code === 'commerce.digital.bundle.publish').length, 1);
    assert.equal(new Set(instruction.scopeCodes).size, instruction.scopeCodes.length);
    assert.equal(instruction.code, 'apiAdmin');
    assert.equal(instruction.loginId, 'apiAdmin');
});
test('every reviewed runtime permission is defined by the selected framework identity graph', () => {
    const profile = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/data/manifest.json')).sections['init-v001'];
    const selectedReferences = [...profile.prerequisites, ...manifest.sections.nativeRuntimePrincipalScope.prerequisites
        .filter(reference => reference.moduleName !== 'profile')];
    const requiredModules = new Set(selectedReferences.map(reference => reference.moduleName));
    const moduleRoots = frameworkModuleRoots(requiredModules);
    assert.equal(moduleRoots.size, requiredModules.size, 'every selected identity owner must be discoverable');
    const catalogue = new Set();
    for (const reference of selectedReferences) {
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
    assert.deepEqual(runtime.backofficeFunctionalModuleActivationData.modules['nodics.commerce'].dataPackages,
        [{ code: 'store:core-reference', targetModule: 'store', targetServer: 'commerceServer' },
         { code: 'pricing:administrativeAuthoringPermission', targetModule: 'profile', targetServer: 'platformServer' },
         { code: 'pricing:administrativePublicationPermission', targetModule: 'profile', targetServer: 'platformServer' }]);
    assert.deepEqual(runtime.data.dataReleases.contributions.find(row => row.moduleName === 'pricing'),
        { moduleName: 'pricing', sections: ['administrativeAuthoringPermission', 'administrativePublicationPermission'] });
    assert(runtime.data.dataReleases.contributions.some(row => row.moduleName === 'product' && row.sections.includes('accessGroups')));
    const pricingRoot = path.join(frameworkRoot, 'nodics.commerce/modules/baseCommerce/modules/pricing/data');
    const pricingSection = require(path.join(pricingRoot, 'manifest.json')).sections.administrativeAuthoringPermission;
    assert.equal(pricingSection.selectionPolicy, 'EXPLICIT');
    assert.deepEqual(Object.values(require(path.join(pricingRoot, 'init-v001/records/identity/pricingAdministrativeAuthoringPermissionData'))),
        [{ code: 'commerce.pricing.write', name: 'commerce.pricing.write', active: true, ownerModule: 'pricing' }]);
    const pricingHeader = require(path.join(pricingRoot, 'init-v001/headers/identity/pricingAdministrativeAuthoringPermissionHeader')).profile.pricingAdministrativeAuthoringPermission;
    assert.equal(pricingHeader.options.schemaName, 'permission');
    assert.equal(pricingHeader.options.operation, 'ensureReferenceAll');
    const publicationSection = require(path.join(pricingRoot, 'manifest.json')).sections.administrativePublicationPermission;
    assert.equal(publicationSection.selectionPolicy, 'EXPLICIT');
    assert.equal(publicationSection.version, '0.0.1');
    assert.deepEqual(Object.values(require(path.join(pricingRoot, 'init-v001/records/identity/pricingAdministrativePublicationPermissionData'))),
        [{ code: 'commerce.pricing.publish', name: 'commerce.pricing.publish', active: true, ownerModule: 'pricing' }]);
    const publicationHeader = require(path.join(pricingRoot, 'init-v001/headers/identity/pricingAdministrativePublicationPermissionHeader')).profile.pricingAdministrativePublicationPermission;
    assert.equal(publicationHeader.options.schemaName, 'permission');
    assert.equal(publicationHeader.options.operation, 'ensureReferenceAll');
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


test('Local Commerce seller proceeds use the existing Loyalty earning permission and retain all other runtime ceilings', () => {
    const commerce = recordsByCode['kickoff-local-commerce-runtime-deployment'];
    assert.equal(commerce.principalCode, 'apiAdmin');
    assert.equal(commerce.enterpriseCode, 'default');
    assert.equal(commerce.runtimeScope.environmentCode, 'kickoffLocal');
    assert(commerce.runtimeScope.modules.includes('loyaltyApi'));
    assert.deepEqual(commerce.runtimeScope.permissions, permissions.commerceServer);
    assert.equal(commerce.runtimeScope.permissions.filter(code => code === 'loyalty.rewards.earn').length, 1);
    assert.deepEqual(records.filter(row => row.runtimeScope.permissions.includes('loyalty.rewards.earn'))
        .map(row => row.runtimeScope.serverCode).sort(), ['commerceServer', 'wasteServer']);
    for (const row of records) assert.deepEqual(row.runtimeScope.permissions, permissions[row.runtimeScope.serverCode]);
    const group = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/data/init-v001/records/identity/profileUserGroupData')).record4;
    assert(group.permissions.includes('loyalty.rewards.earn'));
    const catalogue = require(path.join(frameworkRoot, 'nodics.loyalty/modules/loyaltyLedger/data/init-v001/records/identity/loyaltyLedgerPermissionData'));
    assert(Object.values(catalogue).some(row => row.code === 'loyalty.rewards.earn' && row.ownerModule === 'loyaltyLedger'));
    const route = require(path.join(frameworkRoot, 'nodics.loyalty/modules/loyaltyApi/src/router/routers')).loyaltyApi.internal.earnRewards;
    assert.equal(route.key, '/reward-earnings');
    assert.equal(route.permission, 'loyalty.rewards.earn');
    assert.deepEqual(route.authTokenTypes, ['service']);
});

test('Local Commerce carbon transport uses the existing service assignment and exact five owner permissions', () => {
    const carbonPermissions = ['read', 'reserve', 'release', 'transfer', 'finalize'].map(action => 'carbon.holdings.' + action);
    const commerce = recordsByCode['kickoff-local-commerce-runtime-deployment'];
    assert.equal(commerce.principalType, 'service');
    assert.equal(commerce.principalCode, 'apiAdmin');
    assert.equal(commerce.runtimeScope.modules.filter(name => name === 'wasteCarbon').length, 1);
    assert.deepEqual(commerce.runtimeScope.permissions.filter(code => code.startsWith('carbon.')), carbonPermissions);
    assert.deepEqual(records.filter(row => row.runtimeScope.permissions.some(code => code.startsWith('carbon.')))
        .map(row => row.code), [commerce.code]);
    const scope = require('../modules/kickoffCore/data/init-v001/runtime-principal-scope/records/nativeRuntimePrincipalScopeData').record0;
    assert.deepEqual(scope.scopeCodes.filter(code => code.startsWith('carbon.')), carbonPermissions);
    assert.equal(scope.code, 'apiAdmin');
    const runtime = loadRuntime('commerceServer', 'kickoffLocal');
    assert(runtime.runtimeIdentity.remoteModules.includes('wasteCarbon'));
    assert(!activeModuleNames(runtime).includes('wasteCarbon'), 'Carbon remains a remote Waste owner');
});

 test('acquisition refresh analytics is confined to existing Commerce runtime authority with a canonical definition', () => {
    const permission = 'commerce.promotion.analytics';
    const commerce = recordsByCode['kickoff-local-commerce-runtime-deployment'];
    assert.equal(commerce.principalCode, 'apiAdmin');
    assert.deepEqual(records.filter(row => row.runtimeScope.permissions.includes(permission)).map(row => row.code), [commerce.code]);
    assert.equal(commerce.runtimeScope.permissions.filter(code => code === permission).length, 1);
    const scope = require('../modules/kickoffCore/data/init-v001/runtime-principal-scope/records/nativeRuntimePrincipalScopeData').record0;
    assert.equal(scope.scopeCodes.filter(code => code === permission).length, 1);
    const catalogue = require(path.join(frameworkRoot, 'nodics.commerce/modules/baseCommerce/modules/promotion/data/init-v001/records/identity/promotionPermissionData'));
    assert.deepEqual(Object.values(catalogue).filter(row => row.code === permission).map(row => [row.ownerModule, row.active]), [['promotion', true]]);
});
