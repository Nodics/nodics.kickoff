#!/usr/bin/env node

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const framework = path.resolve(project, '../nodics.ai');
const cases = [
  'nodics.core/modules/nAuth/test/authSecurityContract.test.js',
  'nodics.core/modules/nCache/cache/test/cacheMutationSecurityContract.test.js',
  'nodics.core/modules/nData/nImport/import/test/importExportAccessPolicy.test.js',
  'nodics.core/modules/nData/nImport/import/test/remoteImportTransportGovernance.test.js',
  'nodics.platform/modules/profile/test/profileAuthenticationRouteSecurity.test.js',
  'nodics.platform/modules/backoffice/test/backofficeAdministrativeSecurityService.test.js',
  'nodics.engagement/modules/engagementApi/test/engagementApiSecurityContract.test.js',
  'nodics.core/modules/nPublish/test/publicationAuthorityContract.test.js',
  'nodics.core/modules/nPublish/test/publicationAtomicAuditContract.test.js',
];

const evidence = cases.map(file => {
  const started = performance.now();
  const result = spawnSync(process.execPath, [file], { cwd: framework, stdio: 'ignore' });
  return { file, durationMs: Math.ceil(performance.now() - started), exitCode: result.status ?? 1,
    state: result.status === 0 ? 'PASSED' : 'FAILED' };
});
console.log(JSON.stringify({ contractVersion: 1, environmentClass: 'LOCAL', kind: 'AUTOMATED_SECURITY_BOUNDARY', evidence }, null, 2));
if (evidence.some(entry => entry.state !== 'PASSED')) process.exitCode = 1;
