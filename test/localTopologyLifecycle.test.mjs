/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { backendRuntimes, frontendRuntimes, isOwnedSupervisor, preflight, runtimeDependencyViolations, selectRuntimes } from '../../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectTopologyService.mjs';

assert.deepEqual(backendRuntimes.map(runtime => runtime.port), [4300, 4314, 4330, 4312, 4340, 4360, 4380, 4370, 4352, 4350]);
assert.equal(new Set(backendRuntimes.map(runtime => runtime.port)).size, backendRuntimes.length);
assert.equal(selectRuntimes(false).length, 10);
assert.equal(selectRuntimes(true).length, 16);
assert.deepEqual(frontendRuntimes.map(runtime => runtime.port), [3100, 3200, 3300, 3400, 3500, 3600]);
assert.equal(frontendRuntimes.find(runtime => runtime.code === 'agora')?.args.includes('3300'), true);
assert.deepEqual(backendRuntimes.find(runtime => runtime.code === 'location')?.dependsOn, ['platform']);
assert.deepEqual(backendRuntimes.find(runtime => runtime.code === 'waste')?.dependsOn, ['platform']);
assert.equal(backendRuntimes.find(runtime => runtime.code === 'platform')?.readyPath, '/nodics/system/v0/health/ready');
assert.deepEqual(backendRuntimes.find(runtime => runtime.code === 'platform')?.readinessChecks, [], 'Platform readiness must use System health without requiring optional BackOffice');
assert.deepEqual(runtimeDependencyViolations(backendRuntimes), []);
assert.equal(isOwnedSupervisor({ supervisorPid: 123, projectRoot: '/wrong' }, () => 'node defaultProjectTopologyService.mjs start'), false);
assert.equal(isOwnedSupervisor({ supervisorPid: 123, projectRoot: process.cwd() }, () => 'node defaultProjectTopologyService.mjs start'), true);
assert.equal(isOwnedSupervisor({ supervisorPid: 123, projectRoot: process.cwd() }, () => 'node unrelated.js'), false);
const supervisorSource = fs.readFileSync(new URL('../../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectTopologyService.mjs', import.meta.url), 'utf8');
assert.match(supervisorSource, /other runtimes remain running/);
assert.match(supervisorSource, /Refusing to start because required ports are busy/);
const preflightResult = await preflight(false);
assert.equal(preflightResult.checks.some(check => check.id === 'runtime-dependencies' && check.state === 'PASSED'), true);
assert.equal(preflightResult.checks.some(check => check.id === 'database-authority' && check.state === 'DEFERRED_TO_RUNTIME_READINESS'), true);
assert.equal(preflightResult.checks.some(check => check.id === 'framework-root' && check.state === 'PASSED'), true);

console.log('kickoffLocal topology lifecycle contract validated');
