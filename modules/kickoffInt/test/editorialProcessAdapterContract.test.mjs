import assert from 'node:assert/strict';
import { test } from 'node:test';

const service = await import('../src/service/defaultKickoffEditorialProcessAdapterService.js');
const adapter = service.default || service;

test('Kickoff Editorial Process adapter keeps WCMS as the domain authority', () => {
  global.CONFIG = {
    get(name) {
      if (name === 'editorialProcessAdapter') {
        return { wcmsBaseUrl: 'http://127.0.0.1:4310/' };
      }
      return {};
    },
  };
  const request = {
    tenant: 'default',
    httpRequest: {
      headers: {
        authorization: 'Bearer token',
        tenant: 'default',
        'x-enterprise-code': 'default',
      },
    },
  };
  assert.equal(adapter.wcmsBaseUrl(), 'http://127.0.0.1:4310');
  assert.deepEqual(adapter.delegatedHeaders(request), {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer token',
    tenant: 'default',
    'x-enterprise-code': 'default',
  });
});
