/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** @module circa.ewaste/test/circaRewardCouponAcceptance
 * @description Checks nonimportable Circa selectors and canonical redemption admission without live requests.
 * @layer test @owner circa.ewaste
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { frameworkRoot } = require('../../../test/helpers/configuration');
const fixture = require('./fixtures/circaRewardCouponAcceptance.json');
const rows = name => Object.values(require('../data/sample-v001/commerce/records/' + name));
const owner = () => import(pathToFileURL(path.join(frameworkRoot,
    'nodics.commerce/modules/checkout/modules/checkoutCore/src/service/acceptance/defaultCouponJourneyHttpAcceptanceService.mjs')).href);

test('minimal reward purchase selects actual customer, wallet, Product, price and issuer ITEM terms', () => {
    const p = fixture.purchase, c = fixture.redemption.selection.cases[0];
    const customer = Object.values(require('../data/sample-v001/profile/records/circaCustomerData'))
        .find(row => row.code === p.walletOwner.ownerCode);
    const wallet = Object.values(require('../data/sample-v001/loyalty/records/circaLoyaltyWalletData'))
        .find(row => row.code === p.payment.walletCode);
    assert.equal(p.customer.ownerId, customer.ownerId);
    assert.notEqual(p.customer.ownerId, wallet.ownerCode);
    assert.equal(wallet.ownerCode, p.walletOwner.ownerCode);
    assert.equal(wallet.ownerType, p.walletOwner.ownerType);
    const product = rows('circaProductData').find(row => row.code === p.entry.productCode);
    const variant = rows('circaProductVariantData').find(row => row.sku === p.entry.sku);
    const price = rows('circaPriceRowData').find(row => row.productCode === product.code);
    const campaign = rows('circaPromotionData').find(row => row.code === c.promotionCode);
    assert.equal(product.enterpriseCode, p.customer.enterpriseCode);
    assert.equal(variant.productCode, product.code);
    assert.equal(variant.attributes.promotionCode, campaign.code);
    assert.equal(price.unitAmount, p.expectedTotal);
    assert.equal(price.currency, p.payment.rewardCurrency);
    assert.equal(p.expectedTotal, '50');
    assert.deepEqual(p.certificateCodes, []);
    assert.equal(c.productCode, product.code);
    assert.equal(c.sku, variant.sku);
    assert.equal(c.issuerEnterpriseCode, campaign.enterpriseCode);
    assert.equal(fixture.redemption.selection.staff.enterpriseCode, campaign.enterpriseCode);
    assert(campaign.conditions.storeCodes.includes(c.outletStoreCode));
    assert.deepEqual(c.benefit.items, campaign.actions.items);
    assert.equal(c.benefit.sourceStage, 'SIMULATED_ITEMS');
});

test('fixture is nonimportable, does not fabricate receipts, and cannot activate the three-case suite', () => {
    assert.equal(fixture.importable, false);
    assert.equal(fixture.operationalAuthority, false);
    assert.equal(fixture.runtimeConfigurationChanged, false);
    assert.equal(fixture.purchase.threeCaseAcquisitionProfile, false);
    const s = fixture.redemption.selection;
    assert.equal(s.approvalReference, null);
    assert.equal(s.runCode, null);
    for (const key of ['orderCode', 'cartCode', 'entryCode', 'merchantReceiptReference']) assert.equal(s.cases[0][key], null);
    assert(!JSON.stringify(require('../data/manifest.json')).includes('circaRewardCouponAcceptance'));
    assert.equal(require('../config/properties').tooling.acceptance.circaRewardCouponRedemption, undefined);
});

test('canonical redemption rejects unbound receipts before HTTP or checkpoint effects', async () => {
    const service = await owner();
    const options = { execute: true, selection: structuredClone(fixture.redemption.selection),
        baseUrl: 'http://127.0.0.1:1', fetch: () => assert.fail('No HTTP allowed'),
        saveCheckpoint: () => assert.fail('No checkpoint allowed') };
    await assert.rejects(service.runStaffCouponRedemptionAcceptance(options),
        { code: 'REVIEWED_LOCAL_COUPON_ACCEPTANCE_SELECTION_REQUIRED' });
    options.selection.approvalReference = 'ISOLATED_TEST_ONLY';
    options.selection.runCode = 'isolated-test';
    await assert.rejects(service.runStaffCouponRedemptionAcceptance(options),
        { code: 'REVIEWED_COUPON_REDEMPTION_CASE_REQUIRED' });
});

test('bound isolated selection reaches the canonical owner transport without a copied runner', async () => {
    const service = await owner(), selection = structuredClone(fixture.redemption.selection);
    selection.approvalReference = 'ISOLATED_TEST_ONLY';
    selection.runCode = 'isolated-test';
    Object.assign(selection.cases[0], { orderCode: 'isolated-order', cartCode: 'isolated-cart',
        entryCode: 'isolated-entry', merchantReceiptReference: 'SIM:ISOLATED_TEST_ONLY' });
    let calls = 0;
    const result = await service.runStaffCouponRedemptionAcceptance({ execute: true, selection,
        baseUrl: 'http://127.0.0.1:1', sessions: {
            customer: { authorization: 'Bearer ISOLATED_TEST_ONLY', enterpriseCode: selection.customer.enterpriseCode },
            staff: { authorization: 'Bearer ISOLATED_TEST_ONLY', enterpriseCode: selection.staff.enterpriseCode }
        }, saveCheckpoint: async () => {},
        fetch: async () => { calls += 1; throw new Error('ISOLATED_TRANSPORT_STOP'); } });
    assert.equal(calls, 1);
    assert.equal(result.state, 'RECOVERY_REQUIRED');
});

test('current Circa campaigns do not supply certificate or combined coupon-offer requirements', () => {
    const offers = rows('circaPromotionData').filter(row => ['CERTIFICATES', 'BOTH'].includes(row.couponOffer?.requirements?.type));
    assert.deepEqual(offers, []);
    const assets = Object.values(require('../data/sample-v001/waste/records/circaWasteAssetData'));
    assert(assets.some(row => row.digitalOwnerRef?.code === 'circa-customer'));
    // Source ownership alone is not current certificate eligibility or availability evidence.
});
