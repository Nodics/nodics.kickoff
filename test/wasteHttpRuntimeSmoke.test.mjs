/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const frameworkRoot = path.resolve(projectRoot, process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
process.chdir(projectRoot);
process.env.ENV = 'kickoffLocal';
const { assertTopologyReadiness } = await import(pathToFileURL(path.join(frameworkRoot,
  'nodics.foundation/modules/nTooling/src/service/project/defaultProjectTopologyService.mjs')));

// Live observation only. The operator owns topology startup and shutdown.
const results = await assertTopologyReadiness(['platform', 'waste']);
assert.deepEqual(results.map(result => result.code), ['platform', 'waste']);
console.log('kickoffLocal Platform/Waste supervised HTTP readiness validated');
