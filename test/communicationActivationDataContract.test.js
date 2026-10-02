/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('assert');
const path = require('node:path');
const { loadRuntime, frameworkRoot } = require('./helpers/configuration');
const agent = require(path.join(frameworkRoot, 'nodics.foundation/modules/nService/src/service/module/defaultModuleRegistrationAgentService'));
const catalogue = require(path.join(frameworkRoot, 'nodics.platform/modules/backoffice/src/service/registry/defaultFunctionalModuleCatalogueService'));
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    const properties = loadRuntime('platformServer', environment);
    global.CONFIG = { get: key => properties[key] };
    global.NODICS = { getServerName: () => 'engagementServer' };
    const ownerPackages = agent.buildActivationDataPackages('commsCore', { path: path.join(frameworkRoot, 'nodics.communication/modules/commsCore') });
    const packages = catalogue.getActivationDataPackages('nodics.communication', { activationDataPackages: ownerPackages });
    assert(packages.length > 0, 'Selected environment must adopt owner activation packages');
    assert(packages.every(item => item.targetServer === 'engagementServer'));
    assert.equal(properties.backofficeFunctionalModuleActivationData.modules['nodics.communication'], undefined);
}

console.log('Kickoff communication activation-data selectors validated');

/** Project-specific SMTP adoption checks use the existing effective-runtime harness. */
const test = require('node:test');
test('Local employee email remains disabled and credential-free until explicit runtime input', () => {
    const runtime = loadRuntime('engagementServer', 'kickoffLocal', {});
    assert.equal(runtime.smtpCommsProvider.enabled, false);
    assert.equal(runtime.smtpCommsProvider.mode, 'SMTP');
    assert.equal(runtime.smtpCommsProvider.testOnly, true);
    assert.equal(runtime.smtpCommsProvider.liveQualified, false);
    assert.deepEqual(runtime.smtpCommsProvider.allowedRecipients, [
        'admin@axis-onboarding-acceptance.test', 'operator@axis-onboarding-acceptance.test',
        'applicant@axis-onboarding-acceptance.test'
    ]);
    assert.equal(runtime.runtimeConfiguration.credentials.kickoffEmployeeMail.pass, null);
    assert.equal(runtime.communication.senders.kickoffEmployeeMail.address, null);
    assert.equal(runtime.communication.providerTypes.SMTP.service, 'DefaultSmtpCommunicationProviderService');
    assert.equal(runtime.communication.providers.EMAIL.type, 'SMTP');
});
test('Local employee SMTP overrides bind in the sending runtime and inherit secure defaults', () => {
    const runtime = loadRuntime('engagementServer', 'kickoffLocal', {
        NODICS_EMPLOYEE_SMTP_ENABLED: 'true', NODICS_EMPLOYEE_EMAIL_SENDER: 'sender@example.test',
        NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT: 'recipient@example.test', NODICS_EMPLOYEE_SMTP_HOST: 'smtp.example.test',
        NODICS_EMPLOYEE_SMTP_PASSWORD: 'fixture-only-not-a-live-credential'
    });
    assert.equal(runtime.smtpCommsProvider.enabled, true);
    assert.deepEqual(runtime.smtpCommsProvider.allowedRecipients, [
        'admin@axis-onboarding-acceptance.test', 'operator@axis-onboarding-acceptance.test',
        'applicant@axis-onboarding-acceptance.test'
    ], 'An environment recipient cannot broaden the approved Local capture allowlist');
    assert.equal(runtime.smtpCommsProvider.smtp.host, 'smtp.example.test');
    assert.equal(runtime.smtpCommsProvider.smtp.port, 587);
    assert.equal(runtime.smtpCommsProvider.smtp.secure, false);
    assert.equal(runtime.smtpCommsProvider.smtp.requireTLS, true);
    assert.equal(runtime.runtimeConfiguration.credentials.kickoffEmployeeMail.user, 'sender@example.test');
});
test('Employee email binding does not spread credentials into Platform or other deployments', () => {
    const variables = { NODICS_EMPLOYEE_SMTP_ENABLED: 'true',
        NODICS_EMPLOYEE_EMAIL_SENDER: 'sender@example.test', NODICS_EMPLOYEE_SMTP_PASSWORD: 'fixture-only' };
    for (const [server, environment] of [['platformServer','kickoffLocal'], ['engagementServer','kickoffDockerLocal']]) {
        const runtime = loadRuntime(server, environment, variables);
        assert.equal(runtime.runtimeConfiguration?.credentials?.kickoffEmployeeMail, undefined);
        assert.equal(runtime.communication?.senders?.kickoffEmployeeMail, undefined);
        assert.notEqual(runtime.smtpCommsProvider?.enabled, true);
    }
});
test('Employee SMTP uses typed environment bindings and refuses malformed enablement', () => {
    assert.throws(() => loadRuntime('engagementServer','kickoffLocal', { NODICS_EMPLOYEE_SMTP_ENABLED: 'yes' }), /boolean must be true or false/);
    assert.throws(() => loadRuntime('engagementServer','kickoffLocal', { NODICS_EMPLOYEE_SMTP_PORT: 'not-a-port' }), /number must be finite/);
});
test('Implicit TLS may be explicitly selected without weakening inherited certificate policy', () => {
    const runtime = loadRuntime('engagementServer','kickoffLocal', {
        NODICS_EMPLOYEE_SMTP_PORT: '465', NODICS_EMPLOYEE_SMTP_SECURE: 'true'
    });
    assert.equal(runtime.smtpCommsProvider.smtp.port, 465);
    assert.equal(runtime.smtpCommsProvider.smtp.secure, true);
    assert.equal(runtime.smtpCommsProvider.smtp.allowInsecureLoopback, false);
    assert.equal(runtime.smtpCommsProvider.enabled, false);
});
test('Approved Local capture uses the existing SMTP owner with three recipients and loopback-only plaintext', () => {
    const runtime = loadRuntime('engagementServer', 'kickoffLocal', {
        NODICS_EMPLOYEE_SMTP_ENABLED: 'true',
        NODICS_EMPLOYEE_EMAIL_SENDER: 'noreply@nodics-local.test',
        NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT: 'admin@axis-onboarding-acceptance.test',
        NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_2: 'operator@axis-onboarding-acceptance.test',
        NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT_3: 'applicant@axis-onboarding-acceptance.test',
        NODICS_EMPLOYEE_SMTP_HOST: '127.0.0.1', NODICS_EMPLOYEE_SMTP_PORT: '2525',
        NODICS_EMPLOYEE_SMTP_SECURE: 'false', NODICS_EMPLOYEE_SMTP_REQUIRE_TLS: 'false',
        NODICS_EMPLOYEE_SMTP_ALLOW_INSECURE_LOOPBACK: 'true',
        NODICS_EMPLOYEE_SMTP_PASSWORD: 'isolated-capture-fixture-only'
    });
    assert.deepEqual(runtime.smtpCommsProvider.allowedRecipients, [
        'admin@axis-onboarding-acceptance.test', 'operator@axis-onboarding-acceptance.test',
        'applicant@axis-onboarding-acceptance.test'
    ]);
    const provider = require(path.join(frameworkRoot,
        'nodics.communication/modules/smtpCommsProvider/src/service/defaultSmtpCommunicationProviderService'));
    const options = provider.smtpOptions(runtime.smtpCommsProvider, runtime.runtimeConfiguration.credentials.kickoffEmployeeMail);
    assert.equal(options.host, '127.0.0.1');
    assert.equal(options.requireTLS, false);
    assert.equal(options.auth.user, 'noreply@nodics-local.test');
    assert.equal(options.tls.rejectUnauthorized, true);
    assert.equal(options.logger, false);
    assert.equal(options.debug, false);
    assert.throws(() => provider.smtpOptions({ ...runtime.smtpCommsProvider,
        smtp: { ...runtime.smtpCommsProvider.smtp, host: 'smtp.example.test' } }, options.auth),
        error => error.code === 'ERR_COMMS_SMTP_CONFIGURATION');
    assert.equal(runtime.communicationVerification.stored.enabled, false);
});
test('Local stored verification selects only Profile without granting qualification or sending', () => {
    const local = loadRuntime('engagementServer', 'kickoffLocal', {});
    assert.equal(local.communicationVerification.stored.enabled, false);
    assert.deepEqual(local.communicationVerification.stored.trustedSourceModules, ['profile']);
    assert.equal(local.log.requestPrivacy.qualified, false);
    const selected = loadRuntime('engagementServer', 'kickoffLocal', { NODICS_EMPLOYEE_VERIFICATION_STORE_ENABLED: 'true' });
    assert.equal(selected.communicationVerification.stored.enabled, true);
    assert.equal(selected.smtpCommsProvider.enabled, false);
    const docker = loadRuntime('engagementServer', 'kickoffDockerLocal', { NODICS_EMPLOYEE_VERIFICATION_STORE_ENABLED: 'true' });
    assert.equal(docker.communicationVerification.stored.enabled, false);
    assert.deepEqual(docker.communicationVerification.stored.trustedSourceModules, []);
});
test('Resolved Kickoff email settings are accepted by the existing provider without opening transport', async () => {
    const runtime = loadRuntime('engagementServer','kickoffLocal', {
        NODICS_EMPLOYEE_SMTP_ENABLED: 'true', NODICS_EMPLOYEE_EMAIL_SENDER: 'sender@example.test',
        NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT: 'recipient@example.test', NODICS_EMPLOYEE_SMTP_HOST: 'smtp.example.test',
        NODICS_EMPLOYEE_SMTP_PASSWORD: 'fixture-only-not-a-live-credential'
    });
    const saved = global.CONFIG;
    global.CONFIG = { get: key => runtime[key] };
    try {
        const provider = require(path.join(frameworkRoot, 'nodics.communication/modules/smtpCommsProvider/src/service/defaultSmtpCommunicationProviderService'));
        const owner = { ...provider, createSmtpTransport: () => { throw new Error('Configuration test must never send'); } };
        const health = await owner.health();
        assert.equal(health.status, 'CONFIGURED');
        assert.equal(health.transportVerified, false);
        assert.equal(health.liveQualified, false);
    } finally { global.CONFIG = saved; }
});
test('Enabling employee SMTP without required inputs does not claim readiness', async () => {
    const runtime = loadRuntime('engagementServer','kickoffLocal', { NODICS_EMPLOYEE_SMTP_ENABLED: 'true' });
    const saved = global.CONFIG;
    global.CONFIG = { get: key => runtime[key] };
    try {
        const provider = require(path.join(frameworkRoot, 'nodics.communication/modules/smtpCommsProvider/src/service/defaultSmtpCommunicationProviderService'));
        assert.equal((await provider.health()).status, 'UNCONFIGURED');
    } finally { global.CONFIG = saved; }
});
/** Actual nConfig discovery is required for resource adoption, not a duplicated path resolver. */
function employeeTemplateRuntime() {
    const probe = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectConfigurationProbeService'));
    return probe.resolve({ projectRoot: path.resolve(__dirname, '..'), frameworkRoot,
        server: 'engagementServer', environment: 'kickoffLocal' });
}
test('Local deployment adopts Profile resource defaults without activating Profile services', () => {
    const previous = { NODICS: global.NODICS, CONFIG: global.CONFIG };
    try {
        const runtime = employeeTemplateRuntime();
        const templates = require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationTemplateService'));
        const profile = require(path.join(frameworkRoot, 'nodics.platform/modules/profile/config/properties'));
        const declarations = [profile.enterpriseManagement.registration.mail, profile.profileEmployeeRecovery.mail,
            profile.profileEmployeeRecovery.confirmation, profile.enterpriseManagement.applications.review.mail];
        assert.equal(runtime.modules.includes('profile'), false);
        for (const declaration of declarations) {
            assert.equal(runtime.properties.communication.templates[declaration.templateCode], undefined);
            const template = templates.resolve({ templateCode: declaration.templateCode, channel: 'EMAIL', locale: 'en' }, runtime.properties.communication);
            assert.equal(template.purpose, declaration.purpose);
            assert.deepEqual(template.sourceModules, ['profile']);
            assert.equal(template.ownerModule, 'profile');
            assert.equal(template.status, 'ACTIVE');
            assert.ok(template.htmlTemplate.includes('<html'));
        }
        assert.deepEqual(runtime.properties.communication.trustedSourceModules, ['eWaste', 'profile']);
        assert.equal(runtime.properties.communication.templates.WASTE_REVIEW_OUTCOME_V1.version, 2);
        assert.deepEqual(runtime.properties.communication.providers.TELEGRAM.credentialReferences, ['telegram.bot.circa']);
        assert.equal(runtime.properties.smtpCommsProvider.enabled, false);
        assert.equal(profile.enterpriseManagement.registration.enabled, false);
        assert.equal(profile.profileEmployeeRecovery.enabled, false);
    } finally { Object.assign(global, previous); }
});
test('Local employee verification resources render HTML/text without credential variables', () => {
    const previous = { NODICS: global.NODICS, CONFIG: global.CONFIG };
    try {
        const runtime = employeeTemplateRuntime().properties.communication;
        const templates = require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationTemplateService'));
        for (const code of ['profile.employee.emailVerification', 'profileEmployeeRecoveryCode']) {
            const template = templates.resolve({ templateCode: code, channel: 'EMAIL', locale: 'en' }, runtime);
            const rendered = templates.render(template, { verificationCode: 'TEST-CODE', expiresAt: '2026-09-30T08:00:00Z' }, runtime);
            assert.ok(rendered.body.includes('TEST-CODE')); assert.ok(rendered.html.includes('TEST-CODE'));
            assert.throws(() => templates.render(template, { password: 'forbidden' }, runtime), /not declared/);
        }
    } finally { Object.assign(global, previous); }
});
test('Local resources retain source/purpose/channel authorization before any intent write', async () => {
    const previous = { NODICS: global.NODICS, CONFIG: global.CONFIG, SERVICE: global.SERVICE };
    try {
        employeeTemplateRuntime();
        const runtime = require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationRuntimeService'));
        global.SERVICE = {
            DefaultCommunicationCoreService: require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationCoreService')),
            DefaultCommunicationTemplateService: require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationTemplateService'))
        };
        const owner = { ...runtime, read: async () => undefined, list: async () => [],
            create: async () => { throw new Error('Must not write'); } };
        const command = { sourceModule: 'profile', sourceType: 'TEST', sourceCode: 'fixture',
            templateCode: 'profile.employee.emailVerification', recipientId: 'fixture',
            recipientAddressReference: 'recipient@example.test', purpose: 'EMPLOYEE_EMAIL_VERIFICATION',
            channel: 'EMAIL', locale: 'en', idempotencyKey: 'fixture' };
        for (const change of [{ sourceModule: 'eWaste' }, { purpose: 'OTHER' }, { channel: 'TELEGRAM' }])
            await assert.rejects(owner.request({ tenant: 'fixture' }, { ...command, ...change }), /template is unavailable/);
    } finally { Object.assign(global, previous); }
});
test('Employee resource adoption remains explicit and isolated from other deployments', () => {
    const server = require('../envs/kickoffLocal/engagementServer/config/properties');
    assert.equal(server.communication.templates, undefined);
    assert.equal(server.activeModules.compositions.employeeMail.selection, 'employee');
    assert.equal(require('../config/properties').activeModules.compositions.employeeMail.selection, 'none');
    const selected = require('../modules/kickoffCore/config/properties').communication.runtimeRoleProfiles.ENGAGEMENT.value;
    assert.equal(selected.templates, undefined);
    assert.deepEqual(selected.templateResources.modules, { profile: true });
    for (const [server, environment] of [['platformServer','kickoffLocal'], ['engagementServer','kickoffDockerLocal']]) {
        const runtime = loadRuntime(server, environment, {});
        assert.notEqual(runtime.communication?.templateResources?.modules?.profile, true);
        assert.notEqual(runtime.smtpCommsProvider?.enabled, true);
    }
});
