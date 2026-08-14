/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { backendRuntimes, frontendRuntimes, isOwnedSupervisor, preflight, selectRuntimes } from '../scripts/local-topology.mjs';

assert.deepEqual(backendRuntimes.map(runtime => runtime.port), [4300, 4314, 4330, 4312, 4340, 4350]);
assert.equal(new Set(backendRuntimes.map(runtime => runtime.port)).size, backendRuntimes.length);
assert.equal(selectRuntimes(false).length, 6);
assert.equal(selectRuntimes(true).length, 8);
assert.deepEqual(frontendRuntimes.map(runtime => runtime.port), [3100, 3200]);
assert.equal(isOwnedSupervisor({ supervisorPid: 123, projectRoot: '/wrong' }, () => 'node scripts/local-topology.mjs start'), false);
assert.equal(isOwnedSupervisor({ supervisorPid: 123, projectRoot: process.cwd() }, () => 'node scripts/local-topology.mjs start'), true);
assert.equal(isOwnedSupervisor({ supervisorPid: 123, projectRoot: process.cwd() }, () => 'node unrelated.js'), false);
const supervisorSource = fs.readFileSync(new URL('../scripts/local-topology.mjs', import.meta.url), 'utf8');
assert.match(supervisorSource, /stopping the remaining topology/);
assert.match(supervisorSource, /Refusing to start because required ports are busy/);
const preflightResult = await preflight(false);
assert.equal(preflightResult.checks.some(check => check.id === 'database-authority' && check.state === 'DEFERRED_TO_RUNTIME_READINESS'), true);
assert.equal(preflightResult.checks.some(check => check.id === 'framework-root' && check.state === 'PASSED'), true);

console.log('kickoffLocal topology lifecycle contract validated');
