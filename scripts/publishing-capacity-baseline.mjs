/* Bounded, database-free Local publication capacity guard. Physical lifecycle timing is recorded by acceptance. */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const framework = path.resolve(project, '../nodics.ai');
const cases = [
  { id: 'freeze-deploy-activate-delivery-retry-rollback', file: 'nodics.wcms/modules/cms/test/cmsPublicationManifestContract.test.js', maxMs: 15000 },
  { id: 'media-promotion-retention', file: 'nodics.wcms/modules/media/test/mediaPublicationTransferContract.test.js', maxMs: 10000 },
  { id: 'transaction-response-loss', file: 'nodics.wcms/modules/cms/test/cmsPublicationTransactionReadiness.test.js', maxMs: 10000 },
  { id: 'lifecycle-retry-rollback', file: 'nodics.core/modules/nPublish/test/publicationLifecycleService.test.js', maxMs: 10000 },
];

const evidence = cases.map(entry => {
  const started = performance.now();
  const result = spawnSync(process.execPath, [entry.file], { cwd: framework, stdio: 'inherit' });
  const durationMs = Math.ceil(performance.now() - started);
  return { ...entry, durationMs, state: result.status === 0 && durationMs <= entry.maxMs ? 'PASSED' : 'FAILED', exitCode: result.status ?? 1 };
});
console.log(JSON.stringify({ contractVersion: 1, environmentClass: 'LOCAL', kind: 'BOUNDED_CONTRACT_BASELINE', evidence }, null, 2));
if (evidence.some(entry => entry.state !== 'PASSED')) process.exitCode = 1;
