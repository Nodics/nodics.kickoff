/* Local publishing contract freeze: static, deterministic, and database-free. */
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const publishRoutes = read('nodics.ai/nodics.core/modules/nPublish/src/router/routers.js');
const cmsRoutes = read('nodics.ai/nodics.wcms/modules/cms/src/router/routers.js');
const staged = read('nodics.kickoff/envs/kickoffLocal/wcmsStagedServer/config/properties.js');
const online = read('nodics.kickoff/envs/kickoffLocal/wcmsOnlineServer/config/properties.js');
const process = read('nodics.kickoff/envs/kickoffLocal/processServer/config/properties.js');

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

for (const manifestPath of [
  'nodics.kickoff/modules/nexusData/data/manifest.json',
  'nodics.kickoff/modules/partnerSiteData/data/manifest.json',
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
