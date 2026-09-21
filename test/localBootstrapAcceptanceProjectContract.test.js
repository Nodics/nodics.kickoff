/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module kickoff/test/localBootstrapAcceptanceProjectContract
 * @description Proves local bootstrap acceptance uses project package identity and owned defaults instead of duplicate root descriptors.
 * @layer test
 * @owner nodics.kickoff
 * @override Customer-project acceptance may add customer documentation checks through owned acceptance code or layered configuration, but must not infer capabilities from a project code.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const servicePath = path.join(__dirname, '../scripts/acceptance', "defaultProjectLocalBootstrapAcceptanceService.mjs");
const source = fs.readFileSync(servicePath, 'utf8');

assert(
  !source.includes(['isReference', 'KickoffProject'].join('')),
  'local acceptance must not branch on a hard-coded project name'
);
assert(!source.includes('axisRoot') && !source.includes('runAxisSmoke') && !source.includes('smoke:live'), 'API acceptance must not require a frontend checkout or UI tests');
assert(
  source.includes('function loadLocalBootstrapCapabilities()') &&
    !source.includes('descriptor?.acceptance?.localBootstrap'),
  'local acceptance must not load capability declarations from nodics.project.json'
);
assert(
  source.includes('function assertValidLocalBootstrapCapabilities(capabilities)') &&
    source.includes('Invalid local bootstrap capabilities'),
  'local acceptance must reject invalid capability declarations with a beginner-readable error'
);
assert(
  source.includes('const projectCode = process.env.AXIS_PROJECT || resolveProjectCode(packageDescriptor);'),
  'local acceptance must derive the project code from package.json.name'
);
assert(
  source.includes('function defaultLocalBootstrapCapabilities()') &&
    source.includes('code: "kickoffDocumentation"'),
  'reference default capabilities must preserve the declared Kickoff documentation journey'
);

assert(
  !source.includes('const profiles = [\n    { code: "frameworkdocs"') &&
    source.includes('profile.profileCode'),
  'documentation publication must use shared project-aware pack metadata'
);
assert(
  source.includes('await publishDocumentationBundles(headers);') &&
    !source.includes('documentation publication skipped: oversized documentation bundles remain Staged'),
  'fresh-schema acceptance must publish documentation packs now that CMS supports chunked site publication'
);
assert(
  source.includes("projectEndpointUrl(environmentProfile, 'locationServer')") &&
    source.includes('"start:location"'),
  'fresh-schema acceptance must include the Location runtime when the local reset provider owns Location data'
);
assert(
  source.includes('function resolveExpectedResetProviderCount(status)') &&
    !source.includes('result.providerCount !== 4'),
  'fresh-schema acceptance must verify the configured reset provider count instead of freezing a four-provider topology'
);
assert(!source.includes('isExpectedAcceptanceBackendNoise'), 'API-only acceptance must not suppress errors for removed frontend smoke tests');
assert(
  source.includes('await ensureInitializationProfileCurrent(headers, platformUrl, "localPlatformFoundation", "Platform foundation");') &&
    source.includes('await ensureInitializationProfileCurrent(headers, locationUrl, "localLocationFoundation", "Location foundation");') &&
    source.includes('await verifyLocationMapDefaults(headers);') &&
    source.includes('/nodics/import/v0/initialization-profiles') &&
    source.includes('/nodics/locationMap/v0/location/maps/configurations/effective?surfaceCode=AXIS&usageCode=COLLECTION_CENTRE_MAP'),
  'fresh-schema acceptance must install the Platform and Location foundation profiles and prove the effective Axis map configuration'
);

console.log('local bootstrap acceptance project contract passed');

// Exercise the actual API acceptance gate with supplied provider policy.
(async () => {
  const vm = require('node:vm');
  const start = source.indexOf('async function verifyLocationMapDefaults(');
  const end = source.indexOf('\nasync function publishAxisBaseline(', start);
  const baseline = { providerCode: 'MAPBOX', styleUrl: 'mapbox://styles/mapbox/streets-v12',
    fallbackProviderCode: 'OSM', fallbackPolicy: 'ALLOW_BASIC_MAP' };
  let effective = { ...baseline, configured: true, setupStatus: 'ACTIVE', publicAccessToken: 'pk.contract-fixture' };
  const gate = vm.runInNewContext('(' + source.slice(start, end).trim() + ')', {
    requestJson: async () => effective, locationUrl: 'http://localhost:4380', log: () => {} });
  await gate({});
  effective = { ...baseline, configured: false, setupStatus: 'SETUP_REQUIRED', fallbackAllowed: true,
    fallbackRenderer: { providerCode: 'OSM', rendererType: 'XYZ_TILE', tileUrlTemplate: 'https://tiles.example/{z}/{x}/{y}.png' } };
  await gate({});
  effective.fallbackAllowed = false;
  await assert.rejects(gate({}), /not effective/);
  effective.fallbackAllowed = true; effective.fallbackRenderer.tileUrlTemplate = 'http://untrusted.example';
  await assert.rejects(gate({}), /not effective/);
  delete effective.fallbackRenderer;
  await assert.rejects(gate({}), /not effective/);
  console.log('Local map acceptance preserves explicit provider and fallback policy');
})().catch(error => { console.error(error); process.exitCode = 1; });
