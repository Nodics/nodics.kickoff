/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Local publishing contract freeze: static, deterministic, and database-free. */
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const publishRoutes = read('nodics.ai/nodics.foundation/modules/nPublish/src/router/routers.js');
const cmsRoutes = read('nodics.ai/nodics.wcms/modules/cms/src/router/routers.js');
const staged = read('nodics.kickoff/envs/kickoffLocal/wcmsStagedServer/config/properties.js');
const online = read('nodics.kickoff/envs/kickoffLocal/wcmsOnlineServer/config/properties.js');
const process = read('nodics.kickoff/envs/kickoffLocal/processServer/config/properties.js');
const dockerLocal = read('nodics.kickoff/envs/kickoffDockerLocal/config/runtime-properties.js');
const guidedAcceptance = read('nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectGuidedInitializationAcceptanceService.mjs');

for (const permission of ['publish.operations.view', 'publish.operations.reconcile', 'publish.operations.recover']) {
  assert(publishRoutes.includes(permission), `Missing frozen nPublish permission ${permission}`);
}
for (const route of ['/publications/operations/diagnostics', '/publications/operations/reconcile',
  '/publications/operations/correlations/:correlationId', '/publications/:publicationCode/recover']) {
  assert(publishRoutes.includes(route), `Missing frozen nPublish operation route ${route}`);
}
assert(cmsRoutes.includes("authTokenTypes: ['service']"), 'Online target mutations must remain service-token-only');
assert(cmsRoutes.includes("key: '/publication/target/reconcile'"), 'Online evidence reconciliation route must remain internal and explicit');
assert(cmsRoutes.includes("permissionConfig: 'authSecurity.internalToken.routePermission'"), 'Online target permission contract must remain explicit');
assert(staged.includes("runtimeRole: 'STAGED'") && staged.includes('publishEnabled: true'), 'Staged role/versioning contract drifted');
assert(online.includes("runtimeRole: 'ONLINE'") && online.includes('publishEnabled: false'), 'Online role/versioning contract drifted');
assert(process.includes("runtimeRole: { code: 'PROCESS'"), 'Process runtime contract must remain independently composed');
assert.notStrictEqual(staged.match(/databaseName:\s*'([^']+)'/)?.[1], online.match(/databaseName:\s*'([^']+)'/)?.[1],
  'Staged and Online database identities must not converge');
assert(staged.includes('initializationProfiles') && staged.includes('localWcmsFoundation'),
  'Local WCMS Staged must retain its guided initialization profile');
assert(guidedAcceptance.includes("runtimeRole?.publication === 'STAGED'"),
  'Guided acceptance must resolve the authoring runtime by semantic publication role');
assert(guidedAcceptance.includes("runtimeRole?.publication === 'ONLINE'"),
  'Guided acceptance must resolve the delivery runtime by semantic publication role');
assert(guidedAcceptance.includes('onlineResponse.status === 403') && guidedAcceptance.includes("includes('dataImport')"),
  'Guided acceptance must prove that Online cannot execute data imports');
assert(!/mongodb|mongoose|MongoClient|deleteMany|dropDatabase/i.test(guidedAcceptance),
  'Guided acceptance must not use a database driver or direct database CRUD');

for (const documentation of [
  { packCode: 'nodicsDocumentation', manifestPath: 'nodics.ai/nodics.docs/data/manifest.json' },
  { packCode: 'kickoffDocumentation', manifestPath: 'nodics.kickoff/data/manifest.json' },
]) {
  const manifest = JSON.parse(read(documentation.manifestPath));
  const releaseVersion = manifest.sections.documentation.version;
  const descriptor = new RegExp(`contentPackCode:\\s*'${documentation.packCode}'[^}]*releaseVersion:\\s*'${releaseVersion}'`);
  assert(descriptor.test(staged), `kickoffLocal ${documentation.packCode} baseline must match its immutable manifest`);
  assert(descriptor.test(dockerLocal), `kickoffDockerLocal ${documentation.packCode} baseline must match its immutable manifest`);
}

for (const manifestPath of [
  'nodics.kickoff/modules/nexus.web/data/manifest.json',
]) {
  const manifest = JSON.parse(read(manifestPath));
  assert(manifest.contractVersion === 2, `${manifestPath} must retain contract v2`);
  const releases = Object.values(manifest.sections || {}).filter(section => section.kind === 'DATA_RELEASE');
  assert(releases.length, `${manifestPath} needs immutable releases`);
  for (const release of releases) {
    assert(release.version && release.lifecycle && release.destinationRole, `${manifestPath} release classification is incomplete`);
  }
}

console.log('Local publishing contract freeze validated');
