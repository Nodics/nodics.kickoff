/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

/**
 * @module kickoff/test/agoraProductCatalogReleaseExecutionContract
 * @description Verifies the Agora Product seed release is discoverable, Commerce-Staged gated, and executable through nImport without a live database.
 * @layer test
 * @owner agoraData
 */

const projectRoot = path.resolve(__dirname, '..');
const moduleRoot = path.join(projectRoot, 'modules/agoraData');
const dataReleaseServicePath = path.resolve(
  projectRoot,
  '../nodics.ai/nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService.js'
);

let installations;
let importRequests;
let runtimeRole;

function configureGlobals() {
  installations = [];
  importRequests = [];
  runtimeRole = { code: 'COMMERCE_STAGED', publication: 'STAGED' };

  global.CONFIG = {
    get: (key) => {
      if (key === 'data') {
        return {
          dataReleases: {
            allowedContractVersions: [1, 2],
            maximumFilesPerRelease: 50,
            maximumModulesPerRun: 5,
            allowDowngrade: false,
            destinationEnforced: true,
            allowedDestinationRoles: ['COMMERCE_STAGED'],
            environmentClass: 'LOCAL',
            types: {
              init: { enabled: true, operatorExecution: true },
              core: { enabled: true, operatorExecution: true },
              sample: { enabled: true, operatorExecution: true }
            }
          }
        };
      }
      if (key === 'defaultTenant') return 'default';
      if (key === 'runtimeRole') return runtimeRole;
      return undefined;
    }
  };
  global.NODICS = {
    getActiveModules: () => ['agoraData'],
    getRawModule: (moduleName) => moduleName === 'agoraData' ? {
      name: 'agoraData',
      path: moduleRoot,
      parent: 'kickoffModules',
      canonicalIdentity: 'kickoffModules/agoraData',
      metaData: { nodics: { displayName: 'Agora Data' } }
    } : undefined,
    getSelectedEnvironmentName: () => 'kickoffLocal'
  };
  global.SERVICE = {
    DefaultDataInstallationService: {
      get: (request) => Promise.resolve({
        result: installations.filter((item) => !request.query.code || item.code === request.query.code)
      }),
      save: (request) => {
        installations.push(request.model);
        return Promise.resolve(request.model);
      },
      update: (request) => {
        const index = installations.findIndex((item) => item.code === request.query.code);
        installations[index] = request.model;
        return Promise.resolve(request.model);
      }
    },
    DefaultImportService: {
      importSampleData: (request) => {
        importRequests.push(JSON.parse(JSON.stringify(request)));
        request.importRun = { runId: request.options.validateOnly ? 'agora-validate-run' : 'agora-install-run' };
        return Promise.resolve({ validationOnly: request.options.validateOnly });
      }
    }
  };
}

function service() {
  configureGlobals();
  delete require.cache[require.resolve(dataReleaseServicePath)];
  return require(dataReleaseServicePath);
}

test('Agora Product catalog release follows Commerce Staged nImport execution contract', async () => {
  const dataReleaseService = service();
  const releases = dataReleaseService.discoverReleases('sample');
  const release = releases.find((item) => item.releaseCode === 'agoraData:agoraProductCatalogSource');

  assert(release, 'agoraProductCatalogSource release should be discoverable');
  assert.equal(release.dataType, 'sample');
  assert.equal(release.sourceRoot, 'staged');
  assert.equal(release.lifecycle, 'PUBLISHABLE');
  assert.equal(release.destinationRole, 'COMMERCE_STAGED');
  assert.deepEqual(release.environmentScope, ['LOCAL']);
  assert.equal(release.declaredFiles.length, 7);
  assert(release.declaredFiles.every((file) => file.startsWith('staged/product/')));
  assert.equal(dataReleaseService.validateDestination(release), true);

  runtimeRole = { code: 'WCMS_STAGED', publication: 'STAGED' };
  assert.throws(() => dataReleaseService.validateDestination(release), /not permitted for runtime destination WCMS_STAGED/);
  runtimeRole = { code: 'COMMERCE_STAGED', publication: 'STAGED' };

  const releaseRequest = {
    dataType: 'sample',
    releaseCodes: ['agoraData:agoraProductCatalogSource'],
    expectedReleases: { 'agoraData:agoraProductCatalogSource': '1.0.0' }
  };
  const preflight = await dataReleaseService.preflight({ tenant: 'default', releaseRequest });

  assert.equal(preflight.data.validation.importExecuted, false);
  assert.equal(preflight.data.validation.validationOnly, true);
  assert.equal(preflight.data.releases[0].status, 'NOT_INSTALLED');
  assert.equal(importRequests.length, 0);

  const execution = await dataReleaseService.execute({ tenant: 'default', releaseRequest });

  assert.equal(execution.data.importRun.runId, 'agora-install-run');
  assert.equal(execution.data.releases[0].status, 'CURRENT');
  assert.equal(importRequests.length, 1);
  assert.deepEqual(importRequests[0].modules, ['agoraData']);
  assert.equal(importRequests[0].options.validateOnly, false);
  assert.equal(importRequests[0].dataReleasePlan[0].releaseCode, 'agoraData:agoraProductCatalogSource');
  assert.equal(importRequests[0].dataReleasePlan[0].sourceRoot, 'staged');
  assert(importRequests[0].dataReleasePlan[0].declaredFiles.every((file) => file.startsWith('staged/product/')));
  assert.equal(installations[0].code, 'kickoffLocal:default:agoraData:agoraProductCatalogSource:sample');
  assert.equal(installations[0].status, 'CURRENT');
});

test('Agora Commerce discovery releases separate Product Pricing and Inventory import plans', async () => {
  const dataReleaseService = service();
  const releases = dataReleaseService.discoverReleases('sample');
  const releaseCodes = releases.map((item) => item.releaseCode).sort();

  assert.deepEqual(releaseCodes, [
    'agoraData:agoraCommerceSearchSource',
    'agoraData:agoraDiscoveryConfigurationSource',
    'agoraData:agoraInventorySource',
    'agoraData:agoraPricingSource',
    'agoraData:agoraProductCatalogSource'
  ]);
  assert(releases.find((item) => item.releaseCode === 'agoraData:agoraProductCatalogSource').declaredFiles.every((file) => file.startsWith('staged/product/')));
  assert(releases.find((item) => item.releaseCode === 'agoraData:agoraPricingSource').declaredFiles.every((file) => file.startsWith('staged/pricing/')));
  assert(releases.find((item) => item.releaseCode === 'agoraData:agoraInventorySource').declaredFiles.every((file) => file.startsWith('staged/inventory/')));
  assert(releases.find((item) => item.releaseCode === 'agoraData:agoraCommerceSearchSource').declaredFiles.every((file) => file.startsWith('staged/commerceSearch/')));
  assert(releases.find((item) => item.releaseCode === 'agoraData:agoraDiscoveryConfigurationSource').declaredFiles.every((file) => file.startsWith('staged/discovery/')));

  const releaseRequest = {
    dataType: 'sample',
    releaseCodes,
    expectedReleases: Object.fromEntries(releaseCodes.map((code) => [code, '1.0.0']))
  };
  const execution = await dataReleaseService.execute({ tenant: 'default', releaseRequest });

  assert.equal(execution.data.releases.length, 5);
  assert.deepEqual(importRequests[0].dataReleasePlan.map((item) => item.releaseCode).sort(), releaseCodes);
  assert.equal(importRequests[0].dataReleasePlan.flatMap((item) => item.declaredFiles).length, 23);
  assert.equal(installations.length, 5);
});
