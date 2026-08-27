/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const manifest = JSON.parse(readFileSync(resolve(root, 'data/manifest.json'), 'utf8'));
const properties = require(resolve(root, 'config/properties.js'));
const packageData = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const release = manifest.sections.partnerNexusCustomization;
const nexusRoot = resolve(root, '..', 'nexus.web');
const nexusManifest = JSON.parse(readFileSync(resolve(nexusRoot, 'data/manifest.json'), 'utf8'));
const nexusPackage = JSON.parse(readFileSync(resolve(nexusRoot, 'package.json'), 'utf8'));

assert.equal(packageData.index, '3100.72');
assert(Number(packageData.index) > Number(nexusPackage.index), 'partner module must load after the original Nexus authority');
assert.equal(release.version, '1.0.5');
assert.equal(release.destinationRole, 'WCMS_STAGED');
assert.equal(release.lifecycle, 'PUBLISHABLE');
assert.equal(release.initialPublicationPolicy, 'ADMIN_INITIATED');
assert.equal(properties.backofficeApplicationInitialization.profiles.partnernexus.owner, 'partnerSiteData');
assert.equal(properties.cms.publication.baselines.partnernexus.releaseCode,
    'partnerSiteData:partnerNexusCustomization');
assert(!JSON.stringify(nexusManifest).includes('partnerSiteData'),
    'the original Nexus release manifest must not absorb partner ownership');

for (const [path, expected] of Object.entries(release.files)) {
    const actual = createHash('sha256').update(readFileSync(resolve(root, 'data', path))).digest('hex');
    assert.equal(actual, expected, `${path} must match its immutable release checksum`);
}

const page = require(resolve(root, 'data/staged/wcms/data/partnerNexusPageData.js'));
assert.equal(page.record0.code, 'nexusHomePage');
assert.equal(page.record0.versionId, 5);
assert.match(page.record0.name, /partner-site-1\.0\.5/);

console.log('Partner website customization contract passed.');
