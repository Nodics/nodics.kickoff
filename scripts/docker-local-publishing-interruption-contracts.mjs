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

/** @module kickoff/scripts/dockerLocalPublishingInterruptionContracts @description Qualifies publication recovery contracts without direct database mutation. */

const kickoffRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const frameworkRoot = path.resolve(kickoffRoot, '..', 'nodics.ai');
const contracts = [
  ['manifest-idempotency-and-reconciliation', 'nodics.wcms/modules/cms/test/cmsPublicationManifestContract.test.js'],
  ['outbox-lease-and-startup-recovery', 'nodics.wcms/modules/cms/test/cmsPublicationOutboxReliability.test.js'],
  ['publication-workflow-orchestration', 'nodics.wcms/modules/cms/test/cmsPublicationWorkflowService.test.js'],
  ['wcms-publication-boundary', 'nodics.wcms/modules/wcms/test/wcmsPublicationWorkflowContract.test.js'],
  ['process-decision-callback', 'nodics.process/modules/workflow/modules/flowCore/test/processPublicationDecisionCallback.test.js'],
  ['process-publication-approval', 'nodics.process/modules/workflow/modules/flowCore/test/processPublicationApprovalService.test.js'],
  ['process-runtime-reconciliation', 'nodics.process/test/processRuntimeLifecycleService.test.js'],
];

const evidence = contracts.map(([id, contract]) => {
  const started = performance.now();
  const result = spawnSync(process.execPath, [contract], { cwd: frameworkRoot, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return { id, contract, state: result.status === 0 ? 'PASSED' : 'FAILED', durationMs: Math.ceil(performance.now() - started),
    ...(result.status === 0 ? {} : { message: (result.stderr || result.stdout || 'contract failed').trim().slice(-2000) }) };
});

const report = { contractVersion: 1, environment: 'kickoffDockerLocal',
  qualificationClass: 'AUTOMATED_INTERRUPTION_AND_RECONCILIATION_CONTRACTS',
  directBusinessDatabaseCrud: false, evidence };
console.log(JSON.stringify(report, null, 2));
if (evidence.some(item => item.state !== 'PASSED')) process.exitCode = 1;
