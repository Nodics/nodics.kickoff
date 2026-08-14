#!/usr/bin/env node
/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const framework = path.resolve(project, '../nodics.ai');
const iterations = 25;
const maximumDurationMs = 30000;
const maximumRssGrowthBytes = 64 * 1024 * 1024;
const cases = [
  'nodics.foundation/modules/nPublish/test/publicationLifecycleService.test.js',
  'nodics.foundation/modules/nPublish/test/publicationAuditReconciliationService.test.js',
  'nodics.wcms/modules/cms/test/cmsPublicationManifestContract.test.js',
  'nodics.wcms/modules/cms/test/cmsPublicationOutboxReliability.test.js',
  'nodics.wcms/modules/cms/test/cmsPublicationWorkflowService.test.js',
  'nodics.wcms/modules/media/test/mediaPublicationTransferContract.test.js',
];

const started = performance.now();
const rssBefore = process.memoryUsage().rss;
const failures = [];
for (let iteration = 1; iteration <= iterations; iteration += 1) {
  for (const file of cases) {
    const result = spawnSync(process.execPath, [file], { cwd: framework, stdio: 'ignore' });
    if (result.status !== 0) failures.push({ iteration, file, exitCode: result.status ?? 1 });
  }
}
const durationMs = Math.ceil(performance.now() - started);
const rssGrowthBytes = Math.max(0, process.memoryUsage().rss - rssBefore);
const state = failures.length === 0 && durationMs <= maximumDurationMs && rssGrowthBytes <= maximumRssGrowthBytes ? 'PASSED' : 'FAILED';
console.log(JSON.stringify({ contractVersion: 1, environmentClass: 'LOCAL', kind: 'SUSTAINED_CONTRACT_RELIABILITY',
  iterations, executions: iterations * cases.length, durationMs, maximumDurationMs, rssGrowthBytes, maximumRssGrowthBytes,
  failures, state }, null, 2));
if (state !== 'PASSED') process.exitCode = 1;
