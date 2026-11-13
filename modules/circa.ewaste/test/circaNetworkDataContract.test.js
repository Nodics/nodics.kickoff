/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/test/circaNetworkDataContract @description Verifies collection-centre samples stay linked and split by runtime authority. @layer test @owner circa.ewaste */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const moduleRoot = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(moduleRoot, 'data/manifest.json'), 'utf8'));
const addressHeader = require('../data/sample-v001/network-addresses/headers/profile/sampleCollectionCentreAddressHeader');
const locationHeader = require('../data/sample-v001/network-locations/headers/location/sampleCollectionCentreLocationHeader');
const pointHeader = require('../data/sample-v001/network-points/headers/waste/sampleCollectionCentrePointHeader');
const addresses = require('../data/sample-v001/network-addresses/records/profile/sampleCollectionCentreAddressData');
const locations = require('../data/sample-v001/network-locations/records/location/sampleCollectionCentreLocationData');
const points = require('../data/sample-v001/network-points/records/waste/sampleCollectionCentrePointData');

function values(records) {
    return Object.keys(records).sort().map(key => records[key]);
}

assert.equal(manifest.sections['network-addresses'].destinationRole, 'PLATFORM');
assert.equal(manifest.sections['network-locations'].destinationRole, 'LOCATION');
assert.equal(manifest.sections['network-points'].destinationRole, 'WASTE');

assert.equal(addressHeader.profile.sampleCollectionCentreAddressData.options.moduleName, 'profile');
assert.equal(addressHeader.profile.sampleCollectionCentreAddressData.options.schemaName, 'address');
assert.equal(locationHeader.locationCore.sampleCollectionCentreLocationData.options.moduleName, 'locationCore');
assert.equal(locationHeader.locationCore.sampleCollectionCentreLocationData.options.schemaName, 'location');
assert.equal(pointHeader.wasteCollection.sampleCollectionCentrePointData.options.moduleName, 'wasteCollection');
assert.equal(pointHeader.wasteCollection.sampleCollectionCentrePointData.options.schemaName, 'wasteCollectionPoint');

const addressRecords = values(addresses);
const locationRecords = values(locations);
const pointRecords = values(points);
assert.equal(addressRecords.length, 17);
assert.equal(locationRecords.length, 17);
assert.equal(pointRecords.length, 17);

const addressCodes = new Set(addressRecords.map(record => record.code));
const locationCodes = new Set(locationRecords.map(record => record.code));

addressRecords.forEach(record => {
    assert.equal(record.countryCode, 'AE');
    assert.equal(typeof record.latitude, 'number');
    assert.equal(typeof record.longitude, 'number');
    assert.equal(record.tenant, undefined);
    assert.equal(Array.isArray(record.coordinates), false);
});

locationRecords.forEach(record => {
    assert.equal(record.status, 'ACTIVE');
    assert.equal(typeof record.latitude, 'number');
    assert.equal(typeof record.longitude, 'number');
    assert.equal(record.tenant, undefined);
    assert.equal(Array.isArray(record.coordinates), false);
    assert(addressCodes.has(record.addressRef.code), record.code + ' must reference a seeded Profile address');
    assert.equal(record.sourceRef.moduleName, 'wasteCollection');
    assert.equal(record.sourceRef.schemaName, 'wasteCollectionPoint');
    assert.equal(record.sourceRef.tenant, undefined);
});

pointRecords.forEach(record => {
    assert.equal(record.collectionPointType, 'E_WASTE_DROP_OFF');
    assert.equal(record.tenant, undefined);
    assert.equal(record.locationRef.moduleName, 'locationCore');
    assert.equal(record.locationRef.schemaName, 'location');
    assert(locationCodes.has(record.locationRef.code), record.code + ' must reference a seeded Location record');
    assert.equal(record.operatorEnterpriseRef.moduleName, 'profile');
    assert.equal(record.operatorEnterpriseRef.schemaName, 'enterprise');
    assert.equal(record.operatorEnterpriseRef.code, 'NODICS_WASTE_MANAGEMENT_CO');
    assert.equal(record.assetOwnerEnterpriseRef.moduleName, 'profile');
    assert.equal(record.assetOwnerEnterpriseRef.schemaName, 'enterprise');
    assert.equal(record.assetOwnerEnterpriseRef.code, 'BEAH_RECYCLING_SERVICES');
});

const enterprises = values(require('../data/sample-v001/network-enterprises/records/profile/circaNetworkEnterpriseData'));
const scopes = values(require('../data/sample-v001/operations/records/circaOperationalScopeData'));
const enterpriseCodes = new Set(enterprises.map(record => record.code));
const locationsByCode = new Map(locationRecords.map(record => [record.code, record]));
const pointCodes = new Set(pointRecords.map(record => record.code));
assert.equal(pointCodes.size, 17);
assert.equal(addressCodes.size, 17);
assert.equal(locationCodes.size, 17);
for (const point of pointRecords) {
    const location = locationsByCode.get(point.locationRef.code);
    assert.equal(location.sourceRef.code, point.code);
    assert.equal(location.typeCode, point.collectionPointType);
    assert(enterpriseCodes.has(location.operatorEnterpriseRef.code));
    assert(enterpriseCodes.has(point.operatorEnterpriseRef.code));
    assert(enterpriseCodes.has(point.assetOwnerEnterpriseRef.code));
}
const centreScopes = scopes.filter(scope => scope.scopeType === 'BUSINESS_UNIT');
assert(centreScopes.length > 0);
for (const scope of centreScopes) assert(pointCodes.has(scope.scopeCode), scope.code);

const framework = path.resolve(__dirname, '../../..', process.env.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const vocabulary = (owner, section, schema) => {
    const data = path.join(framework, owner, 'data');
    const release = require(path.join(data, 'manifest.json')).sections[section];
    assert.equal(release.dataType, 'core');
    const files = Object.keys(release.files);
    const records = new Map();
    for (const file of files.filter(file => file.includes('/headers/'))) {
        for (const entries of Object.values(require(path.join(data, file)))) {
            for (const { options } of Object.values(entries)) {
                if (options.schemaName !== schema) continue;
                const payloads = files.filter(file => path.basename(file) === options.dataFilePrefix + '.js');
                assert.equal(payloads.length, 1, options.dataFilePrefix);
                for (const record of values(require(path.join(data, payloads[0])))) records.set(record.code, record);
            }
        }
    }
    return records;
};
const accelerator = 'nodics.accelerators/modules/waste/modules/eWaste';
const categories = vocabulary('nodics.location/modules/locationType', 'collection-categories', 'locationCategory');
const capabilities = new Map([
    ...vocabulary('nodics.waste/modules/wasteCollection', 'collection-capabilities', 'locationCapability'),
    ...vocabulary(accelerator, 'drop-off-location', 'locationCapability'),
]);
const types = vocabulary(accelerator, 'drop-off-location', 'locationType');
const pointTypes = vocabulary(accelerator, 'core-reference', 'wasteCollectionPointType');
for (const location of locationRecords) {
    const type = types.get(location.typeCode);
    assert(categories.has(location.categoryCode));
    assert.equal(type.categoryCode, location.categoryCode);
    assert.deepEqual(type.defaultCapabilityCodes, location.capabilityCodes);
    for (const code of type.defaultCapabilityCodes) assert(capabilities.has(code), code);
    const pointType = pointTypes.get(type.registrationSource.code);
    assert.equal(pointType.baseLocationCategory, location.categoryCode);
    assert.equal(pointType.locationTypeCode, location.typeCode);
}

require('node:test')('selected Circa network imports into canonical schemas with in-memory persistence', async t => {
    const createHarness = require(path.join(framework, accelerator, 'test/fixtures/referenceReleaseHarness'));
    const originalEnums = global.ENUMS;
    t.after(() => {
        if (originalEnums === undefined) delete global.ENUMS;
        else global.ENUMS = originalEnums;
    });
    const { ContactType } = require(path.join(framework, 'nodics.platform/modules/profile/src/utils/enums'));
    global.ENUMS = { ContactType: Object.fromEntries(ContactType.definition.map(key => [key, { key }])) };
    const state = createHarness({
        'circa.ewaste': { name: 'circa.ewaste', path: moduleRoot, index: '3100.90' },
        eWaste: { name: 'eWaste', path: path.join(framework, accelerator), index: '92.71' }
    }, {
        'nodics.platform': ['profile'],
        'nodics.location': ['locationCore', 'locationType'],
        'nodics.waste': ['wasteCore', 'wasteMaterial', 'wasteCollection', 'wasteVerification', 'wasteImpact']
    });
    for (const [dataType, releaseCodes] of [
        ['core', ['locationType:collection-categories', 'wasteCollection:collection-capabilities',
            'eWaste:core-reference', 'eWaste:drop-off-location']],
        ['sample', ['circa.ewaste:network-enterprises', 'circa.ewaste:network-addresses',
            'circa.ewaste:network-locations', 'circa.ewaste:network-points']]
    ]) {
        for (const code of releaseCodes) {
            const request = { tenant: 'default', releaseRequest: { dataType, releaseCodes: [code] } };
            await state.service.preflight(request);
            await state.service.execute(request);
        }
    }
    for (const point of pointRecords) {
        const installed = state.models.get('wasteCollectionPoint:' + point.code);
        const location = state.models.get('location:' + installed.locationRef.code);
        assert(state.models.has('address:' + location.addressRef.code));
        assert(state.models.has('enterprise:' + installed.operatorEnterpriseRef.code));
        assert(state.models.has('enterprise:' + installed.assetOwnerEnterpriseRef.code));
        assert(state.models.has('locationType:' + location.typeCode));
        assert(state.models.has('wasteCollectionPointType:' + installed.collectionPointType));
    }
});
