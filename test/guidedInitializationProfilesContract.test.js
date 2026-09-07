'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');

const requiredProfiles = {
  platformServer: {
    role: 'PLATFORM',
    profiles: {
      localPlatformFoundation: ['init', 'core']
    }
  },
  wcmsStagedServer: {
    role: 'WCMS_STAGED',
    profiles: {
      localWcmsFoundation: ['init', 'core'],
      localDocumentationFoundation: ['init']
    }
  },
  commerceServer: {
    role: 'COMMERCE',
    profiles: {
      localCommerceFoundation: ['core']
    }
  },
  commerceStagedServer: {
    role: 'COMMERCE_STAGED',
    profiles: {
      localCommerceStagedCatalogFoundation: ['sample']
    }
  },
  processServer: {
    role: 'PROCESS',
    profiles: {
      localProcessWorkflowFoundation: ['init']
    }
  },
  engagementServer: {
    role: 'ENGAGEMENT',
    profiles: {
      localEngagementFoundation: ['core', 'sample']
    }
  },
  loyaltyServer: {
    role: 'LOYALTY',
    profiles: {
      localLoyaltyFoundation: ['core']
    }
  },
  wasteServer: {
    role: 'WASTE',
    profiles: {
      localWasteFoundation: ['core']
    }
  },
  locationServer: {
    role: 'LOCATION',
    profiles: {
      localLocationFoundation: ['init', 'core']
    }
  }
};

const allowedDataTypes = new Set(['init', 'core', 'sample']);

function loadRuntime(server) {
  return require(path.join(projectRoot, 'envs', 'kickoffLocal', server, 'config', 'properties.js'));
}

for (const [server, expectation] of Object.entries(requiredProfiles)) {
  const runtime = loadRuntime(server);
  assert.equal(runtime.runtimeRole && runtime.runtimeRole.code, expectation.role, `${server} must own ${expectation.role}`);
  const releases = runtime.data && runtime.data.dataReleases;
  assert(releases, `${server} must declare data release policy`);
  assert.deepEqual(releases.allowedDestinationRoles, [expectation.role], `${server} profile destination must be backend-owned`);
  const profiles = releases.initializationProfiles || {};
  for (const [profileCode, dataTypes] of Object.entries(expectation.profiles)) {
    const profile = profiles[profileCode];
    assert(profile && profile.enabled === true, `${server}.${profileCode} must be enabled`);
    assert.match(profileCode, /^local[A-Z][A-Za-z0-9]+Foundation$/, `${profileCode} must follow local foundation naming`);
    assert.equal(profile.order, undefined, `${profileCode} must use module index instead of profile order`);
    assert.equal(typeof profile.label, 'string', `${profileCode} must expose a friendly label`);
    assert.equal(typeof profile.description, 'string', `${profileCode} must expose a friendly description`);
    assert.equal(typeof profile.completionMessage, 'string', `${profileCode} must expose completion guidance`);
    assert(profile.label.length > 8 && !profile.label.includes(expectation.role), `${profileCode} label must be business-friendly`);
    assert(profile.description.length > 40, `${profileCode} description must explain the operator journey`);
    assert(profile.completionMessage.length > 40, `${profileCode} completion message must explain the result`);
    assert.deepEqual(profile.steps.map(step => step.dataType), dataTypes, `${profileCode} must keep the agreed step order`);
    assert.equal(new Set(profile.steps.map(step => step.dataType)).size, profile.steps.length,
      `${profileCode} must not repeat a data type`);
    profile.steps.forEach((step) => {
      assert(allowedDataTypes.has(step.dataType), `${profileCode} uses unsupported data type ${step.dataType}`);
      if (step.releaseCodes !== undefined) {
        assert(Array.isArray(step.releaseCodes) && step.releaseCodes.length > 0,
          `${profileCode} releaseCodes must be a non-empty list when present`);
        step.releaseCodes.forEach(releaseCode =>
          assert.match(releaseCode, /^[A-Za-z][A-Za-z0-9._-]{0,127}:[A-Za-z][A-Za-z0-9_-]{0,127}$/));
      }
    });
  }
}

const commerceRuntime = loadRuntime('commerceServer');
assert.equal(commerceRuntime.servers.loyalty.endpoint.httpPort, 4360, 'commerceServer must know the Loyalty runtime endpoint');
assert.equal(commerceRuntime.servers.loyaltyServer.abstractEndpoint.httpHost, 'localhost', 'commerceServer must expose abstract Loyalty routing');

const platformRuntime = loadRuntime('platformServer');
const platformServerPackage = require(path.join(projectRoot, 'envs', 'kickoffLocal', 'platformServer', 'package.json'));
assert.deepEqual(
  platformServerPackage.nodics.runtimeModuleRoots,
  ['nodics.platform', 'nodics.localization', 'nodics.discovery', 'nodics.copilot', 'nodics.waste', 'nodics.loyalty'],
  'platformServer must discover capability-owned Platform-targeted data contributions without activating optional runtime modules'
);
assert.equal(platformRuntime.servers.loyalty.endpoint.httpPort, 4360, 'platformServer must publish the Loyalty runtime endpoint');
assert.equal(platformRuntime.servers.loyaltyServer.abstractEndpoint.httpPort, 4360, 'platformServer must publish abstract Loyalty routing');
assert.deepEqual(
  platformRuntime.data.dataReleases.contributions,
  [
    { moduleName: 'wasteCore', sections: ['core-reference'] },
    { moduleName: 'wasteCollection', sections: ['sample-profile-addresses'] },
    { moduleName: 'loyaltyCore', sections: ['core-enterprise-reference'] }
  ],
  'platformServer must expose capability-owned Profile and collection-centre address samples as Platform-targeted contributions'
);
assert.equal(platformRuntime.activeModules.modules.includes('wasteCollection'), false,
  'platformServer must not activate Waste modules while discovering their data contributions');
assert.equal(platformRuntime.activeModules.modules.includes('loyaltyCore'), false,
  'platformServer must not activate Loyalty modules while discovering their data contributions');
assert.deepEqual(
  platformRuntime.backofficeFunctionalModuleActivationData.modules['nodics.loyalty'].dataPackages,
  [
    { code: 'loyaltyCore:core-enterprise-reference', classification: 'core', owner: 'nodics.loyalty', required: true, trigger: 'ACTIVATION', targetModule: 'profile', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT' }
  ],
  'Loyalty activation must import its Profile enterprise seed only when the capability is activated'
);
assert.deepEqual(
  platformRuntime.backofficeFunctionalModuleActivationData.modules['nodics.waste'].dependencies,
  ['nodics.location'],
  'Waste activation must declare its Location dependency for collection-centre demos'
);
assert.deepEqual(
  platformRuntime.backofficeFunctionalModuleActivationData.modules['nodics.waste'].dataPackages,
  [
    { code: 'wasteCore:core-reference', classification: 'core', owner: 'nodics.waste', required: true, trigger: 'ACTIVATION', targetModule: 'profile', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT' },
    { code: 'wasteCollection:sample-profile-addresses', classification: 'sample', owner: 'nodics.waste', required: false, trigger: 'USER', targetModule: 'profile', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT_SAMPLE' }
  ],
  'Waste activation must import Waste-owned Profile enterprise data without activating Waste technical modules in Platform'
);

const loyaltyRuntime = loadRuntime('loyaltyServer');
assert.equal(loyaltyRuntime.servers.commerce.endpoint.httpPort, 4350, 'loyaltyServer must know the Commerce runtime endpoint');
assert.equal(loyaltyRuntime.loyalty.capabilities.ledger, true, 'loyaltyServer must enable ledger capability');
assert.equal(loyaltyRuntime.loyalty.capabilities.reservation, true, 'loyaltyServer must enable reservation capability');

const wasteRuntime = loadRuntime('wasteServer');
const kickoffWasteProperties = require(path.join(projectRoot, 'modules', 'kickoffWaste', 'config', 'properties.js'));
assert.equal(wasteRuntime.servers.default.endpoint.httpPort, 4370, 'wasteServer must own the Waste runtime endpoint');
assert.equal(wasteRuntime.apiExposure.categories.schemaWorkbench.enabled, true, 'wasteServer must expose Schema Workbench for standalone BackOffice inspection');
assert.equal(wasteRuntime.waste.accelerator.umbrella, 'waste', 'wasteServer must compose the Waste accelerator umbrella');
assert.deepEqual(wasteRuntime.waste.accelerator.scenarioAccelerators, ['eWaste'], 'wasteServer must compose the initial eWaste scenario accelerator');
assert.deepEqual(
  wasteRuntime.data.dataReleases.initializationProfiles.localWasteFoundation.steps[0].releaseCodes,
  ['eWaste:core-reference', 'kickoffWaste:project-reference'],
  'wasteServer must install accelerator data and the Kickoff project overlay explicitly'
);

const locationRuntime = loadRuntime('locationServer');
assert.equal(locationRuntime.servers.default.endpoint.httpPort, 4380, 'locationServer must own the Location runtime endpoint');
assert.equal(locationRuntime.servers.profile.remoteOnly, true, 'locationServer must reach Profile remotely through topology');
assert.equal(locationRuntime.apiExposure.categories.schemaWorkbench.enabled, true, 'locationServer must expose Schema Workbench for standalone BackOffice inspection');
assert.equal(locationRuntime.location.capabilities.semanticPlace, true, 'locationServer must enable semantic place capability');
assert.deepEqual(
  locationRuntime.data.dataReleases.contributions,
  [{ moduleName: 'wasteCollection', sections: ['sample-locations'] }],
  'locationServer must expose Waste-owned collection-centre location samples as Location-targeted contributions'
);
assert.equal(kickoffWasteProperties.waste.projectOverlay.releaseCode, 'kickoffWaste:project-reference');

console.log('Kickoff guided initialization profile contract validated');
