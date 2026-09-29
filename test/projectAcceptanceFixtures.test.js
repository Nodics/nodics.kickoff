/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/projectAcceptanceFixtures @description Customer bootstrap, documentation and deployment selections only. @owner nodics.kickoff @layer test */
const assert = require('node:assert/strict');
const path = require('node:path');
const { frameworkRoot, loadRuntime, loadEnvironment } = require('./helpers/configuration');
const projectRoot = path.resolve(__dirname, '..');

for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  const selection = loadRuntime('platformServer', environment).tooling.acceptance.localBootstrap;
  assert.equal(selection.platformInitializationProfile, 'localPlatformFoundation');
  assert.equal(selection.locationInitializationProfile, 'localLocationFoundation');
  assert.equal(selection.verifyDefaultLocationMap, true);
  assert.equal(selection.publicOriginKey, 'nexus');
  assert.deepEqual(selection.applicationBundles, [
    { profileCode: 'nexus', deliveryProbe: { site: 'nexusCorporateSite', path: '/' } },
    { profileCode: 'circa', deliveryProbe: { site: 'circaSite', path: '/' } },
  ]);
  assert.deepEqual(selection.applicationUpdates, [
    { profileCode: 'nexusupdate', deliveryProbe: { site: 'nexusCorporateSite', path: '/' }, marker: 'nexus-corporate-1.0.1' },
  ]);
  assert.deepEqual(selection.requiredCapabilities, [
    'nodics.process', 'nodics.communication', 'nodics.location', 'nodics.waste',
    'nodics.loyalty', 'nodics.commerce', 'nodics.discovery',
  ]);
  assert.deepEqual(selection.rollbackDocumentationProfiles, ['frameworkdocs', 'axisdocs']);
  assert.deepEqual(selection.journeyCommands, [
    { command: 'acceptance:agora-commerce-data', args: ['--execute-install'] },
    { command: 'acceptance:agora-commerce-publication', args: ['--execute', '--approve-publications'] },
  ]);
  assert.deepEqual(selection.documentationPackCodes, ['nodicsDocumentation', 'axisDocumentation', 'kickoffDocumentation']);
  assert.deepEqual(selection.documentationPacks.kickoffDocumentation, {
    code: 'kickoffDocumentation', profileCode: 'kickoffdocs', minimumRoutes: 4,
    navigationComponent: 'kickoffDocumentationNavigation', site: 'kickoffDocumentationSite', path: '/docs/nodics-kickoff',
  });
}

const environmentTools = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs'));
const acceptance = environmentTools.projectRuntimeAcceptance(projectRoot, loadEnvironment('kickoffLocal'), { role: 'PLATFORM' });
const packs = acceptance.localBootstrap;
assert.deepEqual(packs.documentationPackCodes.map(code => packs.documentationPacks[code].path),
  ['/docs/framework', '/docs/nodics-axis', '/docs/nodics-kickoff']);
assert(acceptance.guidedInitialization.publicationProfiles.includes('agoraapparel'));
const customer = require('../modules/kickoffCore/config/properties').tooling.acceptance.localBootstrap;
assert.deepEqual(Object.keys(customer.documentationPacks), ['kickoffDocumentation']);
const staged = loadRuntime('wcmsStagedServer', 'kickoffLocal');
assert.equal(staged.cms.publication.workflow.target.connectionName, 'process');
assert.equal(staged.cms.publication.target.connectionName, 'cmsOnline');
assert.equal(staged.editorial.publication.target.moduleName, 'editorial');
const comms = loadRuntime('engagementServer', 'kickoffLocal').communication;
const provider = require(path.join(frameworkRoot, 'nodics.communication/modules/commsCore/src/service/defaultCommunicationRuntimeService')).providerPolicy(comms, 'TELEGRAM');
assert.deepEqual(provider.credentialReferences, ['telegram.bot.circa']);
console.log('Kickoff application fixtures and deployment selections validated');
