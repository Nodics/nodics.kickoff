/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module nodics.kickoff/test/employeeRecoverySelection @description Checks actual independent Local recovery selection while preserving Framework qualification defaults and other deployments. @layer test @owner nodics.kickoff */
const test = require('node:test');
const assert = require('node:assert/strict');
const { loadRuntime } = require('./helpers/configuration');
test('Local recovery is independent from registration enablement and qualification', () => {
    const onboarding = loadRuntime('platformServer', 'kickoffLocal', { NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: 'true' });
    assert.equal(onboarding.profileEmployeeRecovery.enabled, false);
    assert.equal(onboarding.apiExposure.categories.profileEmployeeRecovery.enabled, false);
    const recovery = loadRuntime('platformServer', 'kickoffLocal', { NODICS_LOCAL_EMPLOYEE_RECOVERY_ENABLED: 'true' });
    assert.equal(recovery.profileEmployeeRecovery.enabled, true);
    assert.equal(recovery.apiExposure.categories.profileEmployeeRecovery.enabled, true);
    assert.equal(recovery.enterpriseManagement.registration.enabled, false);
    assert.equal(recovery.profileEmployeeRecovery.inventoryQualified, false);
    assert.equal(recovery.profileEmployeeRecovery.credentialWriteQualified, false);
    const review = loadRuntime('platformServer', 'kickoffLocal', { NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED: 'true' });
    assert.equal(review.identityGovernance.migration.assessment.enabled, true);
    assert.equal(review.profileEmployeeRecovery.inventoryQualified, false);
    assert.equal(review.profileEmployeeRecovery.credentialWriteQualified, false);

    const other = loadRuntime('platformServer', 'kickoffDockerLocal', { NODICS_LOCAL_EMPLOYEE_RECOVERY_ENABLED: 'true' });
    assert.equal(other.profileEmployeeRecovery.enabled, false);
});

test('Local tenant preparation remains independent of account entry and qualifications', () => {
    const p = loadRuntime('platformServer', 'kickoffLocal', { NODICS_LOCAL_TENANT_PROVISIONING_ENABLED: 'true' });
    assert.equal(p.profileTenantProvisioning.enabled, true);
    assert.equal(p.apiExposure.categories.profileTenantProvisioning.enabled, true);
    assert.equal(p.enterpriseManagement.registration.enabled, false);
    assert.equal(p.profileEmployeeRecovery.enabled, false);
    assert.equal(p.profileEmployeeRecovery.inventoryQualified, false);
    assert.equal(p.profileEmployeeRecovery.credentialWriteQualified, false);
    const onboarding = loadRuntime('platformServer', 'kickoffLocal', { NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: 'true' });
    assert.equal(onboarding.profileTenantProvisioning.enabled, false);
    assert.equal(onboarding.apiExposure.categories.profileTenantProvisioning.enabled, false);
});
