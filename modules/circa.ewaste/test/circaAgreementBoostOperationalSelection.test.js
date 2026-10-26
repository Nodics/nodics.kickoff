/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
'use strict';
/** @module circa.ewaste/test/agreementBoostSelection @description Validates Local service-package commands and their agreement-backed ranking with canonical owners; no runtime calls. @layer test @owner circa.ewaste */
const test = require('node:test'), assert = require('node:assert/strict'), path = require('node:path');
const framework = path.resolve(__dirname, '../../../../nodics.ai');
const base = path.join(framework, 'nodics.commerce/modules/baseCommerce/modules');
const selected = require('./fixtures/circaAgreementBoostOperationalSelection.json');
const prior = require('./fixtures/circaE07OperationalSelection.json');
const agreement = require(path.join(base, 'commercialAgreement/src/service/defaultCommercialAgreementOperationService'));
const product = require(path.join(base, 'product/src/service/defaultProductBusinessAuthoringService'));
const pricing = require(path.join(base, 'pricing/src/service/defaultPricingAdministrativeAuthoringService'));
const search = path.join(base, 'commerceSearch/modules/commerceSearchCore');
const benefit = require(path.join(search, 'src/service/defaultCommerceSearchBenefitService'));
const ranking = require(path.join(search, 'src/service/defaultCommerceSearchRankingService'));
const policy = require(path.join(search, 'src/service/defaultCommerceSearchPolicyService'));
const Enum = require(path.join(framework, 'nodics.foundation/modules/nConfig/bin/enum'));
let settings;
test.beforeEach(t => {
    const previous = Object.fromEntries(['CONFIG', 'SERVICE', 'NODICS', 'CLASSES', 'ENUMS'].map(k => [k, global[k]]));
    t.after(() => Object.assign(global, previous));
    settings = Object.assign({}, ...['commercialAgreement', 'product', 'pricing', 'promotion'].map(name =>
        require(path.join(base, name, 'config/properties'))), require(path.join(search, 'config/properties')));
    global.CONFIG = { get: key => settings[key] };
    global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); } } };
    global.ENUMS = Object.fromEntries(Object.entries(require(path.join(base, 'commercialAgreement/src/utils/enums')))
        .map(([name, value]) => [name, new Enum(value.definition)]));
    global.NODICS = { getModule: () => ({ rawSchema: require(path.join(base, 'product/src/schemas/schemas')).product }), isModuleActive: () => true };
    global.SERVICE = { DefaultExactAmountService: require(path.join(base, 'pricing/src/service/defaultExactAmountService')) };
});
test('two separate service packages use legitimate AED price commands and complete descriptive models', () => {
    assert.equal(selected.importable, false);
    assert.equal(selected.sourceRoot, 'sample-v001');
    assert.deepEqual(selected.records.map(r => r.agreementRecord.terms.model), ['FIXED_PRICE', 'SUBSCRIPTION']);
    for (const item of selected.records) {
        const root = product.writableModel(item.productCreate.command, true);
        assert.equal(root.productType, 'SERVICE');
        assert.equal(root.digitalDeliveryType, undefined);
        assert(!prior.records.some(row => row.productCode === root.code));
        // This synthetic version is a unit readback binding, never a live book-version claim.
        const row = pricing.model({ ...item.priceCreate.command, bookVersionId: 7 }, settings.pricing.administrativeAuthoring);
        assert.equal(row.productCode, root.code); assert.equal(row.unitAmount, '0'); assert.equal(row.currency, 'AED');
        const terms = agreement.terms(item.agreementRecord.terms);
        assert.equal(terms.packageRef.code, root.code); assert.equal(terms.priceRef.code, row.code);
        assert.equal(terms.packageRef.versionId, 0); assert.equal(terms.priceRef.versionId, 0);
        assert.deepEqual(terms.financialReferences, []); assert.equal(terms.renewal.mode, 'NONE');
        assert(prior.records.some(r => r.productCode === terms.benefits[0].productCodes[0]));
    }
});
test('package and add-on coverage produce ranking changes using current Agreement and canonical issuer membership', async () => {
    const codes = prior.records.map(row => row.productCode);
    const products = [codes[1], codes[0], 'OTHER_ISSUER_COUPON'].map(productCode =>
        ({ productCode, localizedAttributes: { digitalDeliveryType: 'COUPON_CODE' } }));
    const request = { tenant: selected.tenant, storeCode: selected.storeCode, locale: 'en',
        now: '2026-10-25T12:00:00.000Z', query: {}, authData: { tenant: selected.tenant } };
    const historicalOwner = Object.assign({}, agreement, { load: async (tenant, code, enterprise) => {
        assert.equal(tenant, selected.tenant); assert.equal(enterprise, selected.enterpriseCode);
        const item = selected.records.find(row => row.agreementRecord.code === code);
        return { versions: [{ version: 1, terms: agreement.terms(item.agreementRecord.terms) }] };
    } });
    let rules = [];
    Object.assign(SERVICE, { DefaultCommerceSearchPolicyService: policy, DefaultCommerceSearchBenefitService: benefit,
        DefaultCommercialAgreementOperationService: historicalOwner,
        DefaultPromotionOperationService: { couponIssuerMemberships: async (original, requested) => {
            assert.equal(original.authData, request.authData);
            return requested.map(productCode => ({ productCode, issuerEnterpriseCode: codes.includes(productCode) ? selected.enterpriseCode : 'OTHER' }));
        } },
        DefaultCommerceSearchRuleProjectionService: { get: async r => ({ result: rules.slice(r.searchOptions.skip, r.searchOptions.skip + r.searchOptions.pageSize) }) } });
    assert.deepEqual(await ranking.rank(request, products), products);
    const first = selected.records[0]; rules = [{ ...first.searchRule, tenant: selected.tenant, status: 'CURRENT' }];
    assert.deepEqual((await ranking.rank(request, products)).map(row => row.productCode), [codes[0], codes[1], 'OTHER_ISSUER_COUPON']);
    const second = selected.records[1]; rules.push({ ...second.searchRule, tenant: selected.tenant, status: 'CURRENT' });
    assert.deepEqual((await ranking.rank(request, products)).map(row => row.productCode), [codes[1], codes[0], 'OTHER_ISSUER_COUPON']);
    assert.deepEqual(await ranking.rank({ ...request, query: { sort: 'name-asc' } }, products), products);
    assert(products.every(row => !Object.hasOwn(row, 'benefitRef') && !Object.hasOwn(row, 'terms')));
});
