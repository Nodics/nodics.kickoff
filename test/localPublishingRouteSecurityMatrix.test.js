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
const helpers = require('./helpers/configuration');
const runtime = code => helpers.loadRuntime(code);
const origins = code => helpers.corsOrigins(runtime(code));
const axisOrigins = ['http://localhost:3100'];
const nexusOrigins = ['http://localhost:3200'];
const environment = helpers.corsPolicy(runtime('platformServer'));
assert.strictEqual(environment.enabled, true);
assert.strictEqual(environment.allowCredentials, true);

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

console.log('Local publishing route security matrix validated');
