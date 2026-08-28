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
 * @module kickoff/test/agoraCommerceSearchPublicationContract
 * @description Verifies Agora Commerce Search sample rules publish and reorder Product discovery cards.
 * @layer test
 * @owner agora.apparel
 */

const projectRoot = path.resolve(__dirname, '..');
const commerceSearchRoot = path.resolve(projectRoot, '../nodics.ai/nodics.commerce/modules/baseCommerce/modules/commerceSearch/modules/commerceSearchCore');
const properties = require(path.join(commerceSearchRoot, 'config/properties'));
const publication = require(path.join(commerceSearchRoot, 'src/service/defaultCommerceSearchPublicationService'));
const builder = require(path.join(commerceSearchRoot, 'src/service/defaultCommerceSearchProjectionBuilderService'));
const ranking = require(path.join(commerceSearchRoot, 'src/service/defaultCommerceSearchRankingService'));
const rules = require(path.join(projectRoot, 'modules/agora.apparel/data/sample-v001/commerce/records/commerceSearch/agoraApparelCommerceSearchRuleData'));

let persisted;
let indexed;

test.beforeEach(() => {
  persisted = [];
  indexed = [];
  global.CONFIG = { get: (key) => key === 'commerceSearch' ? properties.commerceSearch : undefined };
  global.SERVICE = {
    DefaultCommerceSearchPublicationService: publication,
    DefaultCommerceSearchProjectionBuilderService: builder,
    DefaultCommerceSearchRuleService: {
      get: async () => ({ result: Object.values(rules) })
    },
    DefaultCommerceSearchRuleProjectionService: {
      save: async (request) => persisted.push(request.model),
      doSave: async (request) => indexed.push(request),
      doSearch: async () => ({ result: indexed.map((item) => item.model) })
    }
  };
});

test('Agora Commerce Search rule publishes and ranks women category cards', async () => {
  const request = {
    tenant: 'default',
    authData: { groups: ['adminGroup'] },
    now: '2026-08-15T00:00:00.000Z'
  };
  const publishResult = await publication.publish(request, { storeCode: 'agoraMainStore', locale: 'en' });

  assert.equal(publishResult.requested, 1);
  assert.equal(publishResult.published, 1);
  assert.equal(persisted.length, 1);
  assert.equal(indexed.length, 1);
  assert.equal(indexed[0].moduleName, 'commerceSearchCore');
  assert.equal(indexed[0].indexName, 'commerceSearchRuleProjection');

  const cards = [
    { productCode: 'agoraSilkScarf' },
    { productCode: 'agoraLeatherTote' },
    { productCode: 'agoraSatinMidiDress' },
    { productCode: 'agoraLinenWrapDress' }
  ];
  const ranked = await ranking.rank({
    tenant: 'default',
    storeCode: 'agoraMainStore',
    locale: 'en',
    query: { categoryCode: 'agoraWomen' }
  }, cards);

  assert.deepEqual(ranked.map((item) => item.productCode), [
    'agoraLinenWrapDress',
    'agoraSatinMidiDress',
    'agoraLeatherTote',
    'agoraSilkScarf'
  ]);
});
