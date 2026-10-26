'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const review = require('./fixtures/circaCouponOfferMigrationReview.json');
const promotions = Object.values(require('../data/sample-v001/commerce/records/circaPromotionData'));
const prices = Object.values(require('../data/sample-v001/commerce/records/circaPriceRowData'));
const fs = require('node:fs');
const path = require('node:path');

test('all current localized coupon promises use the approved fixed expiry', () => {
    const dir = path.join(__dirname, '../data/sample-v001/commerce/records');
    for (const name of fs.readdirSync(dir)) {
        assert.doesNotMatch(fs.readFileSync(path.join(dir, name), 'utf8'), /30 days from successful purchase|"validityDays"/, name);
    }
    const localized = Object.values(require('../data/sample-v001/commerce/records/circaProductLocalizationData'));
    const current = localized.filter(row => /Valid through 8 November/.test(JSON.stringify(row)));
    assert.equal(current.length, 70, '35 GreenPerks offers in both existing locales');
    for (const row of current) {
        assert.match(row.description, /2026-11-08T19:59:59\.999Z/);
        assert.ok(row.attributes.terms.some(term => term.includes(review.proposal.expiresAt)));
    }
});

test('all 38 current offers preserve exact reward-price and benefit mappings', () => {
    assert.equal(promotions.length, review.offerCount);
    for (const row of promotions) {
        const matches = prices.filter(price => price.productCode === row.conditions.sourceProductCode);
        assert.equal(matches.length, 1, row.code);
        assert.equal(matches[0].currency, 'POINTS');
        assert.match(matches[0].unitAmount, /^\d+(\.\d+)?$/);
        assert.ok(row.actions.benefitType || row.actions.discountType, row.code);
        assert.ok(row.conditions.storeCodes.length, row.code);
        assert.equal(row.purchasedCouponPolicy, undefined, row.code);
        assert.equal(row.couponOffer.requirements.priceRef, matches[0].code);
        assert.deepEqual(row.couponOffer.supply, {mode: 'LIMITED', quantity: 100});
        assert.equal(row.couponOffer.ownerLimit, 1);
        assert.deepEqual(row.couponOffer.expiry, {mode: 'FIXED', at: review.proposal.expiresAt});
        assert.ok(row.couponOffer.terms.length, row.code);
        assert(!JSON.stringify(row.couponOffer).includes('30 days'));
    }
});

test('approved source terms do not claim installed adoption', () => {
    assert.equal(review.importable, false);
    assert.equal(review.status, 'SOURCE_IMPLEMENTED_LIVE_ADOPTION_BLOCKED');
    assert.deepEqual(review.agreedPolicy, { expiryMode: 'FIXED', independentOfPurchaseTime: true,
        newOffersRetainLegacyPurchaseRelativeExpiry: false });
    assert.deepEqual(review.proposal, { status: 'APPROVED_LOCAL_NEW_OFFERS_ONLY', expiryDate: '2026-11-08',
        expiryTimeZone: 'Asia/Dubai', expiresAt: '2026-11-08T19:59:59.999Z', lifetimeSupply: 100, ownerLimit: 1 });
    assert.equal(new Date('2026-11-08T23:59:59.999+04:00').toISOString(), review.proposal.expiresAt);
    assert.equal(promotions.filter(row => row.validTo).length, 3);
    assert.match(review.unresolved.sourceImplementation, /semantic source identities preserved/);
    assert.match(review.unresolved.liveAdoption, /pending/);
    assert.match(review.installedAdoption, /Existing receipts retain original identities and rights/);
    assert.equal(Object.hasOwn(review, 'couponOffer'), false);
});
