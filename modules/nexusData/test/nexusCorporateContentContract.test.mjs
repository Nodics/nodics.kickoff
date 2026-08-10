/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const moduleRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const content = JSON.parse(await readFile(resolve(moduleRoot, 'data/core/source/content/corporate-content.json')));
const site = JSON.parse(await readFile(resolve(moduleRoot, 'data/core/source/site/corporate-site.json')));
const manifest = JSON.parse(await readFile(resolve(moduleRoot, 'data/manifest.json')));

assert.equal(site.code, 'nexusCorporateSite');
assert.equal(site.catalog, 'nexusContentCatalog');
assert.equal(content.pages.length, 14, 'Corporate release must contain the fourteen approved routes');
assert.equal(content.pages[0].components.length, 12, 'Homepage must contain the twelve approved content sections');
assert(!content.pages[0].components.includes('nexusHomePlatform'),
    'Platform Overview must remain excluded from the homepage composition');
assert(!content.pages[0].components.includes('nexusHomeDevelopers'),
    'Developer Experience must remain consolidated into GitHub on the homepage');
const carousel = content.components.find((component) => component.code === 'nexusHomeBannerCarousel');
assert(carousel, 'Homepage banner carousel must exist');
assert.equal(carousel.typeCode, 'nexusBannerCarouselType');
assert.deepEqual(carousel.subComponents.map((association) => association.target), [
    'nexusMicroservicesBanner',
    'nexusModularBanner',
    'nexusSecureBanner'
]);
assert.equal(carousel.properties.rotationIntervalMs, 10000);
const bannerSlides = content.components.filter((component) => component.typeCode === 'nexusBannerSlideType');
assert.equal(bannerSlides.length, 3, 'Carousel must contain three independently managed banner components');
bannerSlides.forEach((slide) => {
    assert(slide.properties.referenceImageCode, `${slide.code} must reference a banner image`);
    assert(slide.properties.title, `${slide.code} must define a title`);
    assert(slide.properties.heading, `${slide.code} must define a heading`);
    assert(slide.properties.subheading, `${slide.code} must define a subheading`);
    assert(slide.properties.buttons.length > 0, `${slide.code} must define buttons`);
});
assert(!JSON.stringify(content).toLowerCase().includes('wiki-home'), 'Legacy Wiki pages must not enter Nexus content');
assert.deepEqual(content.pages[0].components.slice(3, 6), ['nexusHomeProducts', 'nexusHomeTechnology', 'nexusHomeSupport'],
    'Products and Technology must follow Features before Support');
assert.deepEqual(content.pages[0].components.slice(6, 9), ['nexusHomeTestimonials', 'nexusHomeBlogs', 'nexusHomeNews'],
    'Testimonials, Blogs, and News must follow Support as one editorial sequence');
assert(content.renderers.every((entry) => /^nexus\.(page|component)\./u.test(entry.renderer)), 'Renderer keys must be logical Nexus identifiers');
assert.equal(manifest.sections.core.sites[0], site.code);
assert.equal(manifest.sections.core.accessMode, 'PUBLIC');

const check = spawnSync(process.execPath, ['scripts/generate-corporate-content.mjs', '--check'], { cwd: moduleRoot, encoding: 'utf8' });
assert.equal(check.status, 0, `${check.stdout}\n${check.stderr}`);
console.log('Nexus corporate content contract passed.');
