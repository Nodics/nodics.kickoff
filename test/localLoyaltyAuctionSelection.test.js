/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** @module kickoff/test/localLoyaltyAuctionSelection @description Verifies the deliberate Local auction enablement inherits real owner transports and preserves independent signed admission. @layer test @owner nodics.kickoff */
const test=require('node:test'),assert=require('node:assert/strict'),path=require('node:path');
const {loadRuntime,frameworkRoot}=require('./helpers/configuration');
const wallet=require(path.join(frameworkRoot,'nodics.loyalty/modules/loyaltyWallet/config/properties')).loyalty;
const service=require(path.join(frameworkRoot,'nodics.loyalty/modules/loyaltyWallet/src/service/defaultLoyaltyAuctionFundsService'));

test('Local enables auctions without copying owner defaults, routes, authority or funding',()=>{
  const selected=require('../envs/kickoffLocal/config/properties').loyalty.auctions;
  assert.deepEqual(selected,{enabled:true});
  const local=loadRuntime('loyaltyServer','kickoffLocal'),docker=loadRuntime('loyaltyServer','kickoffDockerLocal');
  assert.deepEqual(local.loyalty.auctions,{...wallet.auctions,enabled:true});
  assert.equal(wallet.auctions.enabled,false);assert.equal(docker.loyalty.auctions.enabled,false);
  assert.equal(local.loyalty.transactions.enabled,true);assert.equal(local.apiExposure.categories.loyaltyAuction.enabled,true);
  assert.equal(local.servers.commerce.endpoint.httpPort,4350);assert.equal(local.servers.commerce.remoteOnly,true);
  assert.equal(local.servers.options.endpointDefaults.httpHost,'localhost');
  assert.equal(local.loyalty.auctions.biddingEvidence.moduleName,'bidding');
  assert.equal(local.loyalty.auctions.biddingEvidence.apiName,'/auctions/funds-evidence');
  assert.equal(local.loyalty.auctions.checkoutEvidence.moduleName,'checkoutCore');
  assert.equal(local.loyalty.auctions.checkoutEvidence.apiName,'/checkout/auction-funds/evidence');
  for(const target of [local.loyalty.auctions.biddingEvidence,local.loyalty.auctions.checkoutEvidence]){
    assert.equal(target.connectionName,'commerce');assert.equal(target.targetAuthority.runtimeRole,'COMMERCE');assert.equal(target.maxAttempts,1);
  }
});

test('effective Local policy clears configuration gate but never admits missing signed context',t=>{
  const previous={CONFIG:global.CONFIG,SERVICE:global.SERVICE};t.after(()=>Object.assign(global,previous));
  const runtime=loadRuntime('loyaltyServer','kickoffLocal');
  global.CONFIG={get:key=>runtime[key]};
  global.SERVICE={DefaultLoyaltyRewardOperationService:{fail:code=>{throw Object.assign(Error(code),{code});}}};
  assert.equal(service.policy().enabled,true);
  assert.throws(()=>service.context({tenant:'default',payload:{}}),{code:'ERR_LOYALTY_AUCTION_FORBIDDEN'});
});
