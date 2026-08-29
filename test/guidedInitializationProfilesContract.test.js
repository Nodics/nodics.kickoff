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

console.log('Kickoff guided initialization profile contract validated');
