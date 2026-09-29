/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert/strict';
import configuration from './helpers/configuration.js';

const backendRuntimes = configuration.loadEnvironment('kickoffLocal').topology.groups.backends;

assert.deepEqual(backendRuntimes.map(runtime => runtime.port), [4300, 4314, 4330, 4312, 4340, 4360, 4380, 4370, 4352, 4350]);
assert.equal(new Set(backendRuntimes.map(runtime => runtime.port)).size, backendRuntimes.length);
assert.equal(backendRuntimes.length, 10);
for (const runtime of backendRuntimes.filter(item => item.code !== 'platform')) {
  assert.deepEqual(runtime.dependsOn, ['platform'], `${runtime.code} must wait for Platform before startup admission`);
}
assert.deepEqual(backendRuntimes.find(runtime => runtime.code === 'platform')?.readinessChecks, [{
  label: 'BackOffice public bootstrap',
  path: '/nodics/backoffice/v0/bootstrap/public',
  headers: { 'x-nodics-client-contract-version': '1' }

}], 'Platform topology readiness must include BackOffice bootstrap admission');

console.log('kickoffLocal topology choices validated');
