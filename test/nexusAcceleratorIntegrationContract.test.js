/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module test/nexusAcceleratorIntegrationContract @description Observes accelerator ownership and runtime isolation through nConfig without starting services or importing data. @layer test @owner nodics.kickoff */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadRuntime, activeModuleNames } = require('./helpers/configuration');
const projectRoot = path.resolve(__dirname, '..');
assert.equal(fs.existsSync(path.join(projectRoot, 'modules/nexus.web')), false, 'There must be one content owner');
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  const staged = loadRuntime('wcmsStagedServer', environment);
  assert(activeModuleNames(staged).includes('nexus'));
  assert(activeModuleNames(staged).includes('nexus.web'));
  const platform = loadRuntime('platformServer', environment);
  assert(activeModuleNames(platform).includes('nexusCore'));
  assert.equal(activeModuleNames(platform).includes('nexus.web'), false);
  assert.equal(activeModuleNames(platform).includes('cms'), false);
  const engagement = loadRuntime('engagementServer', environment);
  assert(activeModuleNames(engagement).includes('nexus.web'));
  assert.equal(activeModuleNames(engagement).includes('cms'), false, 'Operational content must not activate WCMS');
  const process = loadRuntime('processServer', environment);
  assert.equal(activeModuleNames(process).includes('nexus.web'), false);
}
console.log('Nexus accelerator mapping and independent runtime composition validated');
