/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Bounded, database-free Local publication capacity guard. Physical lifecycle timing is recorded by acceptance. */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const framework = path.resolve(project, '../nodics.ai');
const cases = [
  { id: 'freeze-deploy-activate-delivery-retry-rollback', workloadClass: 'LARGE_CONTRACT', file: 'nodics.wcms/modules/cms/test/cmsPublicationManifestContract.test.js', maxMs: 15000 },
  { id: 'media-promotion-retention', workloadClass: 'MEDIUM_CONTRACT', file: 'nodics.wcms/modules/media/test/mediaPublicationTransferContract.test.js', maxMs: 10000 },
  { id: 'transaction-response-loss', workloadClass: 'SMALL_CONTRACT', file: 'nodics.wcms/modules/cms/test/cmsPublicationTransactionReadiness.test.js', maxMs: 10000 },
  { id: 'lifecycle-retry-rollback', workloadClass: 'MEDIUM_CONTRACT', file: 'nodics.foundation/modules/nPublish/test/publicationLifecycleService.test.js', maxMs: 10000 },
  { id: 'outbox-concurrent-delivery', workloadClass: 'MEDIUM_CONTRACT', file: 'nodics.wcms/modules/cms/test/cmsPublicationOutboxReliability.test.js', maxMs: 10000 },
  { id: 'workflow-timeout-retry-handoff', workloadClass: 'SMALL_CONTRACT', file: 'nodics.wcms/modules/cms/test/cmsPublicationWorkflowService.test.js', maxMs: 10000 },
  { id: 'operations-metrics-recovery', workloadClass: 'SMALL_CONTRACT', file: 'nodics.foundation/modules/nPublish/test/publicationOperationsService.test.js', maxMs: 10000 },
  { id: 'audit-reconciliation-concurrency', workloadClass: 'MEDIUM_CONTRACT', file: 'nodics.foundation/modules/nPublish/test/publicationAuditReconciliationService.test.js', maxMs: 10000 },
];

const evidence = cases.map(entry => {
  const started = performance.now();
  const result = spawnSync(process.execPath, [entry.file], { cwd: framework, stdio: 'inherit' });
  const durationMs = Math.ceil(performance.now() - started);
  return { ...entry, durationMs, state: result.status === 0 && durationMs <= entry.maxMs ? 'PASSED' : 'FAILED', exitCode: result.status ?? 1 };
});
console.log(JSON.stringify({ contractVersion: 1, environmentClass: 'LOCAL', kind: 'BOUNDED_CONTRACT_BASELINE', evidence }, null, 2));
if (evidence.some(entry => entry.state !== 'PASSED')) process.exitCode = 1;
