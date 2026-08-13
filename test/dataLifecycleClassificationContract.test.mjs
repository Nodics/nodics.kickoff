/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module nodics.kickoff/test/dataLifecycleClassificationContract @description Protects complete lifecycle policy for project-owned executable data. */
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifests = ['data/manifest.json', 'envs/kickoffLocal/processServer/data/manifest.json'];
const fields = ['owningDomain', 'lifecycle', 'destinationRole', 'environmentScope', 'sensitivity',
  'versioningPolicy', 'publicationPolicy', 'initialPublicationPolicy', 'removalPolicy'];

let sections = 0;
for (const relativePath of manifests) {
  const manifest = JSON.parse(readFileSync(resolve(root, relativePath), 'utf8'));
  for (const [sectionCode, section] of Object.entries(manifest.sections || {})) {
    if (!['DATA_RELEASE', 'CONTENT_PACK'].includes(section.kind)) continue;
    const identity = `${relativePath}#${sectionCode}`;
    fields.forEach((field) => assert.notStrictEqual(section[field], undefined, `${identity} must declare ${field}`));
    assert(Array.isArray(section.environmentScope) && section.environmentScope.length > 0,
      `${identity} must declare at least one environment class`);
    if (section.lifecycle === 'PUBLISHABLE') {
      assert.match(section.destinationRole, /_STAGED$/);
      assert.strictEqual(section.publicationPolicy, 'REQUIRED');
      assert.strictEqual(section.initialPublicationPolicy, 'ADMIN_INITIATED');
    } else {
      assert.strictEqual(section.publicationPolicy, 'NONE');
      assert.strictEqual(section.initialPublicationPolicy, 'NONE');
    }
    sections += 1;
  }
}

assert.strictEqual(sections, 2, 'Kickoff executable lifecycle inventory drifted');
console.log('Kickoff data lifecycle classification contract validated');
