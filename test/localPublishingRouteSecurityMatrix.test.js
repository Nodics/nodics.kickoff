/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module nodics.kickoff/test/LocalPublishingRouteSecurityMatrix
 * @description Freezes the Local browser/runtime security boundary without making Kickoff the framework security authority.
 */
const assert = require('assert');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const frameworkRoot = path.resolve(projectRoot, '..', 'nodics.ai');
const load = relative => require(path.resolve(projectRoot, relative));
const routers = require(path.resolve(frameworkRoot, 'nodics.wcms/modules/cms/src/router/routers')).cms;
const defaultHardening = require(path.resolve(frameworkRoot, 'nodics.foundation/modules/nRouter/config/properties')).httpHardening;
const helpers = require('./helpers/configuration');
const runtime = code => helpers.loadRuntime(code);
const origins = code => helpers.corsOrigins(runtime(code));
const axisOrigins = ['http://localhost:3100'];
const nexusOrigins = ['http://localhost:3200'];
const environment = helpers.corsPolicy(runtime('platformServer'));
assert.strictEqual(environment.enabled, true);
assert.strictEqual(environment.allowCredentials, true);
assert(defaultHardening.securityHeaders.headers['Content-Security-Policy'].includes("frame-ancestors 'none'"));
assert.strictEqual(defaultHardening.securityHeaders.headers['X-Content-Type-Options'], 'nosniff');
assert.strictEqual(defaultHardening.securityHeaders.headers['X-Frame-Options'], 'DENY');
assert.strictEqual(defaultHardening.securityHeaders.headers['Cache-Control'], 'no-store');
assert.strictEqual(defaultHardening.body.json.strict, true);
assert.strictEqual(defaultHardening.body.json.limit, '1mb');

for (const code of ['wcmsStagedServer', 'processServer']) {
    const resolved = origins(code);
    assert(resolved.allowedOrigins.includes(axisOrigins[0]), code + ' must accept the configured Axis origin');
    assert(!resolved.allowedOrigins.some(origin => origin.includes('127.0.0.1')));
    assert(resolved.deniedOrigins.includes(nexusOrigins[0]));
    assert(!resolved.allowedOrigins.includes(nexusOrigins[0]));
}
for (const code of ['platformServer','wcmsOnlineServer']) {
    const resolved = origins(code);
    for (const origin of axisOrigins.concat(nexusOrigins)) assert(resolved.allowedOrigins.includes(origin));
    assert(!resolved.allowedOrigins.some(origin => origin.includes('127.0.0.1')));
}

const targets = Object.values(routers.cmsPublicationTarget);
assert(targets.length >= 5);
assert(targets.every(route => route.method === 'POST'));
for (const route of targets) {
    assert.strictEqual(route.secured, true);
    assert.deepStrictEqual(route.authTokenTypes, ['service']);
    assert.strictEqual(route.apiExposure, 'moduleInternal');
    assert.strictEqual(route.permissionConfig, 'authSecurity.internalToken.routePermission');
}
assert.strictEqual(routers.cmsPublicationTarget.deployPublication.bodyParserHandler, 'cmsPublicationBodyParserHandler');
const cmsProperties = require(path.resolve(frameworkRoot, 'nodics.wcms/modules/cms/config/properties')).cms;
assert.strictEqual(cmsProperties.publication.maximumDeploymentRequestBytes, '64mb');

const profileRouters = require(path.resolve(frameworkRoot, 'nodics.platform/modules/profile/src/router/routers')).profile;
const browserRoutes = Object.values(profileRouters).flatMap(group => Object.values(group))
    .filter(route => ['/employee/browser/authenticate', '/employee/browser/restore', '/employee/browser/logout'].includes(route.key));
assert.strictEqual(browserRoutes.length, 3, 'Profile must expose the complete browser-session boundary');
assert(browserRoutes.every(route => route.method === 'POST'));

const delivery = routers.cmsDelivery;
for (const route of Object.values(delivery)) {
    assert.strictEqual(route.method, 'GET', 'Online delivery must be read-only');
    assert.notStrictEqual(route.apiExposure, 'moduleInternal');
}

console.log('Local publishing route security matrix validated');
