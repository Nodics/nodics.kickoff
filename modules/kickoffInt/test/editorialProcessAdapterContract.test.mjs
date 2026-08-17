/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert/strict';
import { test } from 'node:test';

const service = await import('../src/service/defaultKickoffEditorialProcessAdapterService.js');
const adapter = service.default || service;

test('Kickoff Editorial Process adapter keeps WCMS as the domain authority', () => {
  global.CONFIG = {
    get(name) {
      if (name === 'editorialProcessAdapter') {
        return { wcmsBaseUrl: 'http://127.0.0.1:4312/' };
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
  assert.equal(adapter.wcmsBaseUrl(), 'http://127.0.0.1:4312');
  assert.deepEqual(adapter.delegatedHeaders(request), {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer token',
    tenant: 'default',
    'x-enterprise-code': 'default',
  });
});
