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
 * @owner agoraApparel
 */

const projectRoot = path.resolve(__dirname, '..');
const moduleRoot = path.join(projectRoot, 'modules/agora.apparel/modules/agoraApparel');
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
            maximumModulesPerRun: 10,
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
    getActiveModules: () => ['agoraApparel'],
    getRawModule: (moduleName) => moduleName === 'agoraApparel' ? {
      name: 'agoraApparel',
      path: moduleRoot,
      parent: 'kickoffModules',
      canonicalIdentity: 'kickoffModules/agoraApparel',
      metaData: { nodics: { displayName: 'Agora Apparel' } }
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

test('Agora Apparel commerce catalog release follows Commerce Staged nImport execution contract', async () => {
  const dataReleaseService = service();
  const releases = dataReleaseService.discoverReleases('sample');
  const release = releases.find((item) => item.releaseCode === 'agoraApparel:agoraApparelCommerceCatalog');

  assert(release, 'agoraApparelCommerceCatalog release should be discoverable');
  assert.equal(release.dataType, 'sample');
  assert.equal(release.sourceRoot, 'staged');
  assert.equal(release.lifecycle, 'PUBLISHABLE');
  assert.equal(release.destinationRole, 'COMMERCE_STAGED');
  assert.deepEqual(release.environmentScope, ['LOCAL', 'LOCAL_PRODUCTION_SIMULATION']);
  assert(release.declaredFiles.some((file) => file.endsWith('agoraApparelProductData.js')));
  assert(release.declaredFiles.some((file) => file.endsWith('agoraApparelPriceRowData.js')));
  assert(release.declaredFiles.some((file) => file.endsWith('agoraApparelInventoryBalanceData.js')));
  assert.equal(dataReleaseService.validateDestination(release), true);

  runtimeRole = { code: 'WCMS_STAGED', publication: 'STAGED' };
  assert.throws(() => dataReleaseService.validateDestination(release), /not permitted for runtime destination WCMS_STAGED/);
  runtimeRole = { code: 'COMMERCE_STAGED', publication: 'STAGED' };

  const releaseRequest = {
    dataType: 'sample',
    releaseCodes: ['agoraApparel:agoraApparelCommerceCatalog'],
    expectedReleases: { 'agoraApparel:agoraApparelCommerceCatalog': release.version }
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
  assert.deepEqual(importRequests[0].modules, ['agoraApparel']);
  assert.equal(importRequests[0].options.validateOnly, false);
  assert.equal(importRequests[0].dataReleasePlan[0].releaseCode, 'agoraApparel:agoraApparelCommerceCatalog');
  assert.equal(importRequests[0].dataReleasePlan[0].sourceRoot, 'staged');
  assert(importRequests[0].dataReleasePlan[0].declaredFiles.some((file) => file.endsWith('agoraApparelProductData.js')));
  assert.equal(installations[0].code, 'kickoffLocal:default:agoraApparel:agoraApparelCommerceCatalog:sample');
  assert.equal(installations[0].status, 'CURRENT');
});

test('Agora domain Commerce releases separate each selected domain import plan', async () => {
  const dataReleaseService = service();
  const releases = dataReleaseService.discoverReleases('sample').filter((item) => item.destinationRole === 'COMMERCE_STAGED');
  const releaseCodes = releases.map((item) => item.releaseCode).sort();

  assert.deepEqual(releaseCodes, [
    'agoraApparel:agoraApparelCommerceCatalog'
  ]);
  assert(releases[0].declaredFiles.some((file) => file.endsWith('agoraApparelProductData.js')));
  assert(releases[0].declaredFiles.some((file) => file.endsWith('agoraApparelPriceBookData.js')));
  assert(releases[0].declaredFiles.some((file) => file.endsWith('agoraApparelInventoryBalanceData.js')));

  const releaseRequest = {
    dataType: 'sample',
    releaseCodes,
    expectedReleases: Object.fromEntries(releases.map((release) => [release.releaseCode, release.version]))
  };
  const execution = await dataReleaseService.execute({ tenant: 'default', releaseRequest });

  assert.equal(execution.data.releases.length, 1);
  assert.deepEqual(importRequests[0].dataReleasePlan.map((item) => item.releaseCode).sort(), releaseCodes);
  assert.equal(installations.length, 1);
});
