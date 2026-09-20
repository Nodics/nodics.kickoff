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
const { loadRuntime, activeModuleNames, frameworkRoot } = require('./helpers/configuration');
const projectRoot = path.resolve(__dirname, '..');
const acceleratorRoot = path.join(frameworkRoot, 'nodics.accelerators/modules/nexus');
const packRoot = path.join(acceleratorRoot, 'modules/nexus.web');
assert.equal(fs.existsSync(path.join(projectRoot, 'modules/nexus.web')), false, 'There must be one content owner');
const pack = require(path.join(packRoot, 'package.json'));
assert.equal(pack.name, 'nexus.web');
assert.deepEqual(pack.nodics.extends, ['nexus']);
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  const staged = loadRuntime('wcmsStagedServer', environment);
  assert(activeModuleNames(staged).includes('nexus'));
  assert(activeModuleNames(staged).includes('nexus.web'));
  assert.equal(staged.cms.publication.baselines.nexus.releaseCode, 'nexus.web:nexusCorporateSite');
  assert.equal(staged.cms.designerAuthoring.draftDefaults.siteCode, 'nexusCorporateSite');
  const platform = loadRuntime('platformServer', environment);
  assert(activeModuleNames(platform).includes('nexusCore'));
  assert.equal(activeModuleNames(platform).includes('nexus.web'), false);
  assert.equal(activeModuleNames(platform).includes('cms'), false);
  const media = platform.backofficeApplicationInitialization.profiles.nexus.dataPackages.find(step => step.type === 'MEDIA_ASSET_MANIFEST');
  assert.equal(media.manifestModule, 'nexus.web');
  assert.equal(media.manifestPath, 'data/sample-v001/content/assets/nexus-cms-media/assetManifest.js');
  assert(fs.existsSync(path.join(packRoot, media.manifestPath)));
  const engagement = loadRuntime('engagementServer', environment);
  assert(activeModuleNames(engagement).includes('nexus.web'));
  assert.equal(activeModuleNames(engagement).includes('cms'), false, 'Operational content must not activate WCMS');
  const process = loadRuntime('processServer', environment);
  assert.equal(activeModuleNames(process).includes('nexus.web'), false);
}
const commandService = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService'));
const commands = commandService.resolveCommands(commandService.readManifest(projectRoot));
assert.equal(commands['acceptance:nexus-cms-media-seed'].type, 'projectScript');
assert.equal(commands['acceptance:nexus-cms-media-seed'].script, 'scripts/acceptance/defaultProjectNexusCmsMediaSeedService.mjs');
assert.equal(require('../package.json').scripts['nexus:test'], 'nodics nexus:check');
console.log('Nexus accelerator mapping and independent runtime composition validated');
