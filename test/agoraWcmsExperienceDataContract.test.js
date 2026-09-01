/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

/**
 * @module kickoff/test/agoraWcmsExperienceDataContract
 * @description Verifies Agora Apparel owns customer-specific CMS Experience placement seed data.
 * @layer test
 * @owner agora.apparel
 */

const projectRoot = path.resolve(__dirname, '..');
const recordsRoot = path.join(projectRoot, 'modules/agora.apparel/data/sample-v001/content/records');
const header = require(path.join(projectRoot, 'modules/agora.apparel/data/sample-v001/content/headers/agoraApparelContentHeader'));
const manifest = require(path.join(projectRoot, 'modules/agora.apparel/data/manifest.json'));
const components = require(path.join(recordsRoot, 'agoraApparelSharedComponentData'));
const placements = require(path.join(recordsRoot, 'agoraApparelExperiencePlacementData'));
const resolver = require(path.resolve(projectRoot, '../nodics.ai/nodics.wcms/modules/wcmsExperience/src/service/defaultWcmsExperienceResolverService'));
const projection = require(path.resolve(projectRoot, '../nodics.ai/nodics.wcms/modules/wcmsExperience/src/service/defaultWcmsExperienceProjectionService'));

const placementValues = Object.values(placements);
const componentCodes = new Set(Object.values(components).map(component => component.code));

test('Agora Apparel content release imports CMS Experience placements through wcmsExperience schema ownership', () => {
    assert.equal(header.wcmsExperience.experiencePlacements.options.schemaName, 'cmsExperiencePlacement');
    assert.equal(header.wcmsExperience.experiencePlacements.options.dataFilePrefix, 'agoraApparelExperiencePlacementData');
    assert.equal(
        Object.hasOwn(manifest.sections.agoraApparelContentCatalog.files, 'sample-v001/content/records/agoraApparelExperiencePlacementData.js'),
        true
    );
});

test('Agora Apparel experience placements target real CMS components and remain project-owned data', () => {
    assert(placementValues.length >= 5);
    for (const placement of placementValues) {
        assert.equal(placement.site, 'agoraApparelSite');
        assert.equal(placement.channel, 'web');
        assert.equal(placement.publicationStatus, 'STAGED');
        assert.equal(placement.deliveryStatus, 'ACTIVE');
        assert.equal(componentCodes.has(placement.component), true, `${placement.code} must target an existing CMS component`);
        assert.match(placement.release, /^agora\.apparel:agoraApparelContentCatalog:/);
        assert.match(placement.indexVersion, /^agora-apparel-wcms-experience-/);
    }
});

test('Agora Apparel first slice covers default, collection, category, collection-index, and carousel journeys', () => {
    assert(placementValues.some(item => item.pageType === 'PRODUCT_LISTING' && item.targetType === 'DEFAULT' && item.slot === 'hero'));
    assert(placementValues.some(item => item.pageType === 'PRODUCT_LISTING' && item.targetType === 'COLLECTION' && item.targetCode === 'agoraNewArrivals'));
    assert(placementValues.some(item => item.pageType === 'PRODUCT_LISTING' && item.targetType === 'CATEGORY' && item.targetCode === 'agoraWomen'));
    assert(placementValues.some(item => item.pageType === 'COLLECTION_INDEX' && item.targetType === 'DEFAULT' && item.slot === 'hero'));
    assert(placementValues.some(item => item.pageType === 'PRODUCT_LISTING' && item.slot === 'featuredCarousel'));
});

test('Agora Apparel seeded placements resolve targeted hero while preserving fallback carousel slot', async () => {
    global.CONFIG = {
        get: key => key === 'wcmsExperience' ? {
            enabled: true,
            resolver: {
                fallbackTargetType: 'DEFAULT',
                fallbackTargetCode: '*',
                defaultLocale: 'en',
                defaultChannel: 'web',
                defaultDevice: 'desktop'
            },
            fixturePlacements: placementValues
        } : undefined
    };
    global.SERVICE = { DefaultWcmsExperienceProjectionService: projection };

    const resolved = await resolver.resolve({ experience: {
        site: 'agoraApparelSite',
        pageType: 'PRODUCT_LISTING',
        targetType: 'COLLECTION',
        targetCode: 'agoraNewArrivals',
        previewMode: true
    } });

    assert.equal(resolved.diagnostics.matched, true);
    assert.equal(resolved.diagnostics.fallbackUsed, false);
    assert.equal(resolved.slots.hero[0].placementCode, 'agoraApparelShopNewArrivalsHeroPlacement');
    assert.equal(resolved.slots.hero[0].properties.heading, 'Fresh styles just in');
    assert.equal(resolved.slots.featuredCarousel[0].placementCode, 'agoraApparelShopProjectedProductsPlacement');
});
