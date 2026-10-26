/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** @module kickoff/test/localAuctionCheckoutContext @description Exact Local auction tax-context selection and Docker isolation. @layer test @owner nodics.kickoff */
const test=require('node:test'),assert=require('node:assert/strict'),path=require('node:path');
const {loadRuntime,frameworkRoot}=require('./helpers/configuration');
test('Local selects only approved Circa auction jurisdiction without changing shared defaults or Docker',()=>{
 const defaults=require(path.join(frameworkRoot,'nodics.commerce/modules/checkout/modules/checkoutCore/config/properties')).checkoutCore.auction;
 const local=loadRuntime('commerceServer','kickoffLocal'),docker=loadRuntime('commerceServer','kickoffDockerLocal');
 assert.deepEqual(defaults.cartContexts,{});assert.deepEqual(docker.checkoutCore.auction.cartContexts,{});
 assert.deepEqual(local.checkoutCore.auction.cartContexts,{circaMainStore:{tenant:'default',enterpriseCode:'GREENPERKS_ONLINE',currency:'POINTS',jurisdiction:'CIRCA_SAMPLE'}});
 assert.equal(local.checkoutCore.auction.purchaseValiditySeconds,defaults.purchaseValiditySeconds);
 assert.notEqual(local.cart.customerApi.defaultJurisdiction,'CIRCA_SAMPLE');
});
