/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('assert');
const { merge } = require('./helpers/configuration');
const administration = require('../modules/kickoffAdministration/config/properties');

const localProperties = require('../envs/kickoffLocal/platformServer/config/properties');
const dockerLocalProperties = require('./helpers/configuration').loadRuntime('platformServer', 'kickoffDockerLocal');

function communicationPackages(properties) {
    return merge({}, administration, properties).backofficeFunctionalModuleActivationData.modules['nodics.communication'].dataPackages;
}

[localProperties, dockerLocalProperties].forEach(properties => {
    const packages = communicationPackages(properties);
    assert.deepStrictEqual(packages.map(item => item.code), [
        'commsCore:runtime-defaults',
        'commsCore:sample-templates'
    ]);
    assert(packages.every(item => item.targetModule === 'commsCore'));
    assert(packages.every(item => item.targetServer === 'engagementServer'));
    assert.strictEqual(packages[0].required, true);
    assert.strictEqual(packages[0].trigger, 'ACTIVATION');
    assert.strictEqual(packages[1].required, false);
    assert.strictEqual(packages[1].trigger, 'USER');
});

console.log('Kickoff communication activation-data selectors validated');
