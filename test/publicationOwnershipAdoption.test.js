/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoff/test/publicationOwnershipAdoption @description Checks reference selections against inherited owners without starting runtimes or replaying demos. @owner nodics.kickoff @layer test */
const test = require('node:test');
const assert = require('node:assert/strict');
const { loadRuntime, activeModuleNames } = require('./helpers/configuration');
test('native deployment inherits standard publication bindings without a customer provider registry', () => {
    const source = require('../envs/kickoffLocal/commerceStagedServer/config/properties');
    const staged = loadRuntime('commerceStagedServer');
    const online = loadRuntime('commerceServer');
    assert.equal(source.publish.providers, undefined);
    assert.equal(source.schemaPolicies, undefined);
    for (const domain of [
        'product',
        'pricing',
        'tax',
        'inventory',
        'promotion',
    ]) {
        assert(staged.publish.providers.domainAdapters[domain]);
        assert(online.publish.setup.observation.targetObservers[domain]);
        assert.equal(
            staged.publish.providers.workflowProviders[domain],
            'DefaultPublicationApprovalWorkflowService',
        );
    }
    assert.equal(activeModuleNames(staged).includes('eWaste'), false);
    assert.equal(activeModuleNames(online).includes('eWaste'), false);
    assert.equal(
        staged.product.marketplaceAuthoring.intentSource.moduleName,
        'eWaste',
    );
    assert.equal(
        staged.product.marketplaceAuthoring.intentSource.connectionName,
        'waste',
    );
    assert.equal(
        online.digitalCore.digitalOwnership.owner.apiPrefix,
        '/internal/digital-sales',
    );
    assert.equal(online.databaseTransactions.enabled, true);
    assert.equal(online.databaseTransactions.failClosed, true);
    assert.equal(
        require('../envs/kickoffLocal/commerceServer/config/properties')
            .databaseTransactions.enabled,
        undefined,
    );
});
test('Staged mechanics inherit owner defaults while qualification and destinations retain explicit selections', () => {
    const staged = loadRuntime('commerceStagedServer', 'kickoffDockerLocal');
    const media = loadRuntime('wcmsStagedServer', 'kickoffDockerLocal');
    for (const domain of ['pricing', 'tax', 'inventory', 'promotion']) {
        assert.equal(
            staged.schemaPolicies[domain].publicationVersioned
                .isVersionedEnabled,
            true,
        );
        assert.equal(
            staged[domain].publication.sourceVersioningQualified,
            false,
        );
        assert.equal(staged[domain].publication.delivery.enabled, false);
        assert.equal(staged[domain].publication.target.connectionName, null);
    }
    assert.equal(
        staged.schemaPolicies.product.catalogueVersioned.isVersionedEnabled,
        true,
    );
    assert.equal(staged.product.publication.target.connectionName, null);
    assert.equal(
        media.schemaPolicies.media.publicationVersioned.isVersionedEnabled,
        true,
    );
    const selectedMedia = require('../envs/kickoffDockerLocal/wcmsStagedServer/config/properties').media.publication;
    assert.equal(selectedMedia.versionProviderEnabled, true);
    assert.equal(media.media.publication.versionProviderEnabled, selectedMedia.versionProviderEnabled);
    assert.equal(selectedMedia.target.connectionName, 'cmsOnline');
    assert.equal(media.media.publication.target.connectionName, selectedMedia.target.connectionName);
});
