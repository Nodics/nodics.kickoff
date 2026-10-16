/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module kickoff/test/referenceDemoOwnership @description Pins reference demo classification and adopts the framework ownership gate without owning its rules. @layer test @owner nodics.kickoff */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const foundation = path.dirname(require.resolve('nodics.foundation/package.json'));
const audit = require(path.join(foundation, 'modules/nTooling/src/service/quality/defaultDesignPrincipleAuditService'));

test('all four reference demos remain optional data/composition under the canonical ownership gate', () => {
    for (const moduleName of ['agora.apparel', 'agora.electronics', 'agora.telco', 'circa.ewaste']) {
        const root = path.resolve(__dirname, '../modules', moduleName);
        assert.equal(require(path.join(root, 'package.json')).nodics.referenceDemo, true);
        const failures = [];
        audit.auditReferenceDemoModules(failures, root);
        assert.deepEqual(failures, [], moduleName);
    }
});

test('Apparel selects physical operations while inheriting Fulfillment evidence defaults', () => {
    const application = require('../modules/agora.apparel/config/properties');
    assert.equal(application.fulfillmentCore, undefined);
    assert.equal(application.order, undefined);
    const { loadRuntime } = require('./helpers/configuration');
    for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
        const selected = loadRuntime('commerceServer', environment, { NODICS_AGORA_DOMAINS: 'apparel' });
        assert.equal(selected.fulfillmentCore.physicalOperations.enabled, true);
        assert.equal(selected.fulfillmentCore.physicalOperations.evidenceMode, 'MANUAL_ATTESTATION');
        for (const domain of ['none', 'electronics', 'telco']) {
            const unselected = loadRuntime('commerceServer', environment, { NODICS_AGORA_DOMAINS: domain });
            assert.equal(unselected.fulfillmentCore.physicalOperations.enabled, false);
        }
    }
});
