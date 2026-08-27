/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return fs.readFileSync(filePath, 'utf8').split(/\r?\n/u).reduce((env, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return env;
    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex < 0) return env;
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
    return env;
  }, {});
}

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const localEnv = Object.assign({}, readEnvFile(path.join(projectRoot, '.env')), process.env);
const frameworkRoot = path.resolve(projectRoot, localEnv.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const qualificationService = await import(pathToFileURL(path.join(
  frameworkRoot,
  'nodics.foundation/modules/nTooling/src/service/project/defaultProjectDeploymentQualificationService.mjs'
)).href);
const {
  createQualificationPlan,
  createReport,
  executeLocalPlan,
  resolveSourceCommits,
  sanitizeStep,
} = qualificationService;

const workspace = { framework: '/framework', kickoff: '/project', axis: '/axis', nexus: '/nexus', agora: '/agora' };
const plan = createQualificationPlan({ workspace });
assert.deepStrictEqual(plan.local.map((step) => step.id), [
  'publishing-capacity-baseline',
  'publishing-sustained-reliability',
  'automated-security-boundary',
  'framework-release',
  'project-retained-acceptance',
  'axis-verification',
  'nexus-verification',
  'agora-verification',
  'redis-cache-live',
  'redis-backoffice-registry-live',
]);
assert(!plan.local.some((step) => step.destructive), 'Default qualification must be non-destructive');
assert.strictEqual(plan.external.length, 9, 'Every production-only evidence class must remain explicit');
assert(plan.external.every((gate) => gate.state === 'NOT_EXECUTED'), 'External gates must never be inferred from local evidence');

const freshPlan = createQualificationPlan({ workspace, includeFresh: true });
const fresh = freshPlan.local.find((step) => step.id === 'project-fresh-acceptance');
assert(fresh && fresh.destructive === true, 'Fresh acceptance must be explicitly marked destructive');

const sanitized = sanitizeStep(plan.local.find((step) => step.id === 'redis-cache-live'));
assert(!Object.hasOwn(sanitized, 'environment'), 'Reports must not include environment variables or provider URLs');

let callCount = 0;
const spawnOptions = [];
const results = executeLocalPlan({ local: plan.local.slice(0, 2) }, {
  spawn: (_command, _args, options) => {
    spawnOptions.push(options);
    return { status: callCount++ === 0 ? 0 : 2 };
  },
  now: (() => {
    let tick = 0;
    return () => new Date(1_000 + tick++ * 10);
  })(),
});
assert.strictEqual(results[0].state, 'PASSED');
assert.strictEqual(results[1].state, 'FAILED');
assert.strictEqual(results[1].failureCode, 'COMMAND_FAILED');
assert.deepStrictEqual(spawnOptions[0].stdio, ['ignore', 'inherit', 'inherit'],
  'Qualification children must remain non-interactive even when the parent has a terminal');

const report = createReport(plan, results, { now: () => new Date(2_000), environmentName: 'qualification' });
assert.strictEqual(report.productionApproved, false, 'Tooling must not self-approve production');
assert.strictEqual(report.summary.passed, 1);
assert.strictEqual(report.summary.failed, 1);
assert.strictEqual(report.summary.externalPending, 9);
assert.match(report.integrity.digest, /^[a-f0-9]{64}$/);
const commits = resolveSourceCommits({ framework: '/framework' }, () => ({ status: 0, stdout: 'abc123\n' }));
assert.deepStrictEqual(commits, { framework: 'abc123' });

console.log('Deployment qualification contract validated');
