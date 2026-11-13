'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const config = require('../config/properties');

test('Circa selects only its collection-centre viewport and map reference release', () => {
    assert.deepEqual(config.locationMapConfiguration, {
        applicationOverrides: {
            CIRCA: {
                COLLECTION_CENTRE_MAP: {
                    defaultCenterLatitude: 25.2048,
                    defaultCenterLongitude: 55.2708,
                    defaultZoom: 9
                }
            }
        }
    });
    const packages = require("../../../config/circa-setup-data-packages.json");
    assert.deepEqual(packages.filter(entry => entry.code.startsWith('locationMap:')).map(entry => entry.code), ['locationMap:core-map-reference']);
});
