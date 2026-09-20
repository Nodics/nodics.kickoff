/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

const assert = require('assert');
const path = require('node:path');
const { loadRuntime, frameworkRoot } = require('./helpers/configuration');
const agent = require(path.join(frameworkRoot, 'nodics.foundation/modules/nService/src/service/module/defaultModuleRegistrationAgentService'));
const catalogue = require(path.join(frameworkRoot, 'nodics.platform/modules/backoffice/src/service/registry/defaultFunctionalModuleCatalogueService'));
for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
    const properties = loadRuntime('platformServer', environment);
    global.CONFIG = { get: key => properties[key] };
    global.NODICS = { getServerName: () => 'engagementServer' };
    const ownerPackages = agent.buildActivationDataPackages('commsCore', { path: path.join(frameworkRoot, 'nodics.communication/modules/commsCore') });
    const packages = catalogue.getActivationDataPackages('nodics.communication', { activationDataPackages: ownerPackages });
    assert.deepStrictEqual(packages.map(item => item.code).sort(), ['commsCore:runtime-defaults', 'commsCore:sample-templates']);
    assert(packages.every(item => item.targetModule === 'commsCore'));
    assert(packages.every(item => item.targetServer === 'engagementServer'));
    assert.equal(packages.find(item => item.dataType === 'core').required, true);
    assert.equal(packages.find(item => item.dataType === 'sample').trigger, 'USER');
    assert.equal(properties.backofficeFunctionalModuleActivationData.modules['nodics.communication'], undefined);
}

console.log('Kickoff communication activation-data selectors validated');
