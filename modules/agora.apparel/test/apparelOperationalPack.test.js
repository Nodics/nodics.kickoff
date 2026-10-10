/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
/** @module agora.apparel/test/apparelOperationalPack @description Verifies complete source coverage and explicit Online ownership of Apparel opening instructions, not live stock or campaign acceptance. @layer test @owner agora.apparel */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const test = require('node:test');
const manifest = require('../data/manifest.json');
const profile = require('../config/properties').backofficeApplicationInitialization.runtimeRoleProfiles.PLATFORM.profiles.agoraapparel;
const steps = profile.dataPackages.value;
const dataRoot = path.resolve(__dirname, '../data');

test('Apparel reviewed reversals select only the retained application Store and preserve other applications', () => {
    const { loadRuntime } = require('../../../test/helpers/configuration');
    const runtime = loadRuntime('commerceServer', 'kickoffLocal', { NODICS_AGORA_DOMAINS: 'apparel' });
    const active = runtime.order;
    assert.equal(runtime.fulfillmentCore.physicalOperations.enabled, true);
    assert.equal(runtime.fulfillmentCore.physicalOperations.evidenceMode, 'MANUAL_ATTESTATION');
    assert.equal(runtime.fulfillmentCore.carrierProvider.liveQualified, false);
    for (const kind of ['disputes', 'refunds']) {
        assert.equal(active[kind].enabled, true);
        assert.equal(active[kind].storeCodes.agoraMainStore, true);
        assert.equal(active[kind].storeCodes.agoraElectronicsStore, undefined);
        assert.equal(active[kind].storeCodes.agoraTelcoStore, undefined);
        assert(active[kind].orderCodePrefixes.includes('CIRCA_ORDER_'));
    }
    assert.equal(active.refunds.ownerByStore.agoraMainStore, 'fulfillmentCore');
    assert.equal(active.refunds.defaultOwnerPort, 'eWaste');
    for (const selection of ['none', 'electronics', 'telco']) {
        const unselected = loadRuntime('commerceServer', 'kickoffLocal', { NODICS_AGORA_DOMAINS: selection });
        const policy = unselected.order;
        assert.equal(unselected.fulfillmentCore.physicalOperations.enabled, false);
        assert.notEqual(policy.refunds.storeCodes?.agoraMainStore, true);
        assert.notEqual(policy.disputes.storeCodes?.agoraMainStore, true);
    }
});

test('governed publication plan covers all active physical and digital roots and exact financial owner sources', () => {
    const payload = require('../data/sample-v001/publication/records/publicationPlan.json');
    const products = Object.values(require('../data/sample-v001/commerce/records/agoraApparelProductData')).filter(row => row.status === 'ACTIVE');
    const productIntents = payload.items.filter(item => item.domain === 'product');
    assert.equal(payload.contractVersion, 1); assert.equal(payload.items.length, 67);
    assert.equal(productIntents.length, 61);
    assert.deepEqual(new Set(productIntents.map(item => item.rootCode)), new Set(products.map(row => row.code)));
    for (const item of productIntents) {
        assert.equal(item.input.publicationCode, item.code); assert.equal(item.sourceVersion, '1');
        assert.equal(item.input.productCode, item.rootCode); assert.equal(item.input.versionId, 0);
        assert.equal(item.input.storeCode, 'agoraMainStore');
    }
    for (const [domain, count] of [['pricing', 1], ['inventory', 1], ['tax', 1], ['promotion', 3]]) {
        const intents = payload.items.filter(item => item.domain === domain);
        assert.equal(intents.length, count);
        assert(intents.every(item => /^[a-f0-9]{64}$/.test(item.sourceVersion) && item.input.references.length &&
            item.input.references.every(ref => ref.versionId === 0)));
    }
    const step = steps.find(item => item.type === 'GOVERNED_PUBLICATIONS');
    assert.equal(step.phase, 'AFTER_PUBLICATION'); assert.equal(step.targetRuntimeRole, 'COMMERCE_STAGED');
    assert.deepEqual(step.publicationPlan, payload);
    const section = manifest.sections.agoraApparelPublicationPlan;
    assert.equal(section.selectionPolicy, 'EXPLICIT'); assert.equal(section.sourceRoot, 'sample-v001');
    for (const [file, hash] of Object.entries(section.files))
        assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(dataRoot, file))).digest('hex'), hash);
});

test('Apparel opening pack covers every active physical variant once without operational snapshots', () => {
    const variants = Object.values(require('../data/sample-v001/commerce/records/agoraApparelProductVariantData'));
    const physical = variants.filter(row => row.status === 'ACTIVE' && row.attributes?.productType !== 'DIGITAL');
    const digital = new Set(variants.filter(row => row.attributes?.productType === 'DIGITAL').map(row => row.code));
    const payload = JSON.parse(fs.readFileSync(path.join(dataRoot, 'sample-v001/operations/records/inventoryOpening.json')));
    assert.equal(payload.contractVersion, 1);
    assert(physical.length > 400);
    assert.deepEqual(new Set(payload.receipts.map(row => row.variantCode)), new Set(physical.map(row => row.code)));
    assert.equal(payload.receipts.length, physical.length);
    assert.equal(new Set(payload.receipts.map(row => row.code)).size, physical.length);
    assert.equal(new Set(payload.receipts.map(row => row.warehouseCode + ':' + row.sku)).size, physical.length);
    for (const row of payload.receipts) {
        const variant = physical.find(item => item.code === row.variantCode);
        assert.deepEqual(Object.keys(row).sort(), ['code', 'locale', 'productCode', 'quantity', 'referenceCode', 'sku', 'storeCode', 'variantCode', 'warehouseCode']);
        assert.equal(row.sku, variant.sku); assert.equal(row.productCode, variant.productCode);
        assert.equal(row.storeCode, 'agoraMainStore'); assert.equal(row.warehouseCode, 'agoraApparelWarehouse');
        assert.equal(row.quantity, '40'); assert(!digital.has(row.variantCode));
    }
});

test('operational contributions use v001, explicit Online owners and the post-publication phase', () => {
    for (const sectionCode of ['agoraApparelOpeningStock', 'agoraApparelPromotionSetup']) {
        const section = manifest.sections[sectionCode];
        assert(section, sectionCode);
        assert.equal(section.kind, 'DATA_RELEASE'); assert.equal(section.dataType, 'sample');
        assert.equal(section.version, '0.0.1'); assert.equal(section.sourceRoot, 'sample-v001');
        assert.equal(section.lifecycle, 'OPERATIONAL_VERSIONED'); assert.equal(section.destinationRole, 'COMMERCE');
        assert.equal(section.selectionPolicy, 'EXPLICIT'); assert.equal(section.publicationPolicy, 'NONE');
        const step = steps.find(item => item.code === 'agora.apparel:' + sectionCode);
        assert.equal(step.required, true); assert.equal(step.phase, 'AFTER_PUBLICATION');
        assert.equal(step.targetServer, 'commerce'); assert.equal(step.targetRuntimeRole, 'COMMERCE');
        for (const [file, hash] of Object.entries(section.files)) {
            assert.match(file, /^sample-v001\/operations\/records\/.+\.json$/);
            assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(dataRoot, file))).digest('hex'), hash);
            for (const staged of ['agoraApparelCommerceCatalog', 'agoraApparelContentCatalog']) assert(!Object.hasOwn(manifest.sections[staged].files, file));
        }
    }
    assert(!steps.some(item => item.dataType === 'docs'), 'Business initialization must not require documentation');
    assert.equal(manifest.sections.agoraApparelOpeningStock.installer, 'INVENTORY_OPENING_RECEIPTS');
    assert.equal(manifest.sections.agoraApparelPromotionSetup.installer, 'PROMOTION_CAMPAIGN_ISSUANCE');
});

test('campaign instructions pin exact initial policy and bounded coupon intents without secrets or ownership', () => {
    const { frameworkRoot } = require('../../../test/helpers/configuration');
    const publication = require(path.join(frameworkRoot, 'nodics.commerce/modules/baseCommerce/modules/promotion/src/service/defaultPromotionPublicationService'));
    const rows = Object.values(require('../data/sample-v001/commerce/records/agoraApparelPromotionData'));
    const payload = JSON.parse(fs.readFileSync(path.join(dataRoot, 'sample-v001/operations/records/promotionSetup.json')));
    assert.equal(payload.campaigns.length, rows.length); assert.equal(payload.couponBatches.length, rows.length);
    assert.equal(new Set(payload.campaigns.map(item => item.promotionCode)).size, rows.length);
    for (const row of rows) {
        for (const key of ['enterpriseRef', 'issuerEnterpriseRef', 'vendorEnterpriseRef'])
            assert.deepEqual(row[key], { moduleName: 'profile', schemaName: 'enterprise', code: row.enterpriseCode });
        const campaign = payload.campaigns.find(item => item.promotionCode === row.code);
        assert(campaign); assert.equal(campaign.rootCode, row.code); assert.equal(campaign.storeCode, 'agoraMainStore');
        const policy = publication.capturePolicy('promotion', { ...row, versionId: 0 }, { tenant: row.tenant, enterpriseCode: row.enterpriseCode });
        assert.equal(campaign.policyFingerprint, publication.fingerprint(policy));
        const intent = require('../data/sample-v001/publication/records/publicationPlan.json').items
            .find(item => item.domain === 'promotion' && item.rootCode === row.code);
        assert.equal(intent.sourceVersion, publication.fingerprint({ tenant: row.tenant, enterpriseCode: row.enterpriseCode,
            rootType: 'promotion', rootCode: row.code, records: [{ schema: 'promotion', policy }] }));
        const batch = payload.couponBatches.find(item => item.promotionCode === row.code);
        assert.deepEqual(Object.keys(batch).sort(), ['batchCode', 'commandReference', 'promotionCode', 'quantity']);
        assert(Number.isSafeInteger(batch.quantity) && batch.quantity > 0 && batch.quantity <= 1000);
    }
    assert.equal(new Set(payload.couponBatches.map(item => item.batchCode)).size, rows.length);
});

test('selected Commerce composition discovers only exact operational contributions without activating the application pack', () => {
    const harness = require('../../../test/helpers/configuration');
    for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
        const apparel = harness.loadRuntime('commerceServer', environment, { NODICS_AGORA_DOMAINS: 'apparel' });
        assert(!harness.activeModuleNames(apparel).includes('agora.apparel'));
        assert.deepEqual(apparel.data.dataReleases.contributions.filter(item => item.moduleName === 'agora.apparel'), [{
            moduleName: 'agora.apparel', sections: ['agoraApparelOpeningStock', 'agoraApparelPromotionSetup']
        }]);
        const unselected = harness.loadRuntime('commerceServer', environment, { NODICS_AGORA_DOMAINS: 'electronics' });
        assert(!unselected.data.dataReleases.contributions.some(item => item.moduleName === 'agora.apparel'));
    }
});
