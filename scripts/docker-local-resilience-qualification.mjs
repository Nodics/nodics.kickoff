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
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @module kickoff/scripts/dockerLocalResilienceQualification @description Executes destructive, Docker-Local-only recovery evidence. */

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const generatedRoot = path.join(projectRoot, 'envs', 'kickoffDockerLocal', 'generated');
const environmentValues = Object.fromEntries(fs.readFileSync(path.join(generatedRoot, 'docker.env'), 'utf8').trim()
  .split(/\n/).map(line => { const separator = line.indexOf('='); return [line.slice(0, separator), line.slice(separator + 1)]; }));
const docker = fs.existsSync('/Applications/Docker.app/Contents/Resources/bin/docker')
  ? '/Applications/Docker.app/Contents/Resources/bin/docker' : 'docker';
const dockerEnvironment = { ...process.env, DOCKER_CONFIG: path.join(generatedRoot, 'docker-cli'),
  DOCKER_HOST: process.env.DOCKER_HOST || `unix://${path.join(process.env.HOME || '', '.docker/run/docker.sock')}` };
const evidence = [];

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { cwd: options.cwd || projectRoot, encoding: 'utf8',
    env: options.env || process.env, maxBuffer: 1024 * 1024 * 1024 });
  if (result.status !== 0) throw new Error((result.stderr || result.stdout || `${command} failed`).trim().slice(-2000));
  return result.stdout;
}
async function check(id, operation, classification = 'QUALIFIED') {
  const started = performance.now();
  try {
    const detail = await operation();
    evidence.push({ id, state: 'PASSED', classification, durationMs: Math.ceil(performance.now() - started), ...(detail || {}) });
  } catch (error) {
    evidence.push({ id, state: 'FAILED', classification, durationMs: Math.ceil(performance.now() - started), message: error.message });
  }
}
async function waitReady(port, timeoutMs = 120000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try { const response = await fetch(`http://127.0.0.1:${port}/nodics/system/v0/health/ready`); if (response.ok) return; } catch {}
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  throw new Error(`Runtime ${port} did not recover within ${timeoutMs}ms`);
}

let backupId;
let recoveryCompleted = false;
let lifecycleAcceptanceCompleted = false;
let sentinelContinuityCompleted = false;
await check('recovery-point-objective', () => {
  const started = performance.now();
  const output = run(process.execPath, ['scripts/docker-local-resilience.mjs', 'backup']);
  const manifest = JSON.parse(output);
  backupId = manifest.backupId;
  return { measuredSeconds: Number(((performance.now() - started) / 1000).toFixed(3)),
    backupBytes: manifest.files.reduce((sum, file) => sum + file.bytes, 0),
    targetSeconds: 300, consistency: 'logical MongoDB plus Redis SAVE and media volume snapshots', backupId };
});
await check('backup-integrity', () => {
  if (!backupId) throw new Error('Backup was not created.');
  const manifest = JSON.parse(run(process.execPath, ['scripts/docker-local-resilience.mjs', 'verify', backupId]));
  if (!manifest.files.every(file => file.bytes > 0 && /^[a-f0-9]{64}$/.test(file.sha256))) throw new Error('Backup manifest is incomplete.');
  return { artifacts: manifest.files.length };
});
await check('recovery-time-objective', async () => {
  if (!backupId) throw new Error('Backup was not created.');
  const started = performance.now();
  run(process.execPath, ['scripts/docker-local.mjs', 'reset', '--confirm-destroy-docker-local-data']);
  run(process.execPath, ['scripts/docker-local-resilience.mjs', 'restore', backupId, '--confirm-replace-docker-local-data']);
  await Promise.all([5300, 5312, 5314, 5330, 5340, 5350].map(port => waitReady(port)));
  recoveryCompleted = true;
  return { measuredSeconds: Number(((performance.now() - started) / 1000).toFixed(3)), targetSeconds: 300 };
});
await check('restored-publication-and-workflow-state', () => {
  if (!recoveryCompleted) throw new Error('Skipped because recovery did not complete.');
  run(process.execPath, ['scripts/docker-local-acceptance.mjs']);
  lifecycleAcceptanceCompleted = true;
  return { verification: 'Nodics API acceptance; no direct business-data CRUD' };
});
await check('unpublished-staged-isolation', () => {
  if (!recoveryCompleted || !lifecycleAcceptanceCompleted) throw new Error('Skipped because recovered lifecycle acceptance did not complete.');
  return { verification: 'API lifecycle includes unpublished and governed-publication boundaries' };
});
await check('bounded-sustained-read-load', async () => {
  if (!recoveryCompleted) throw new Error('Skipped because recovery did not complete.');
  const total = 1000; const concurrency = 40; let next = 0; const latencies = [];
  async function worker() {
    while (next < total) {
      const index = next++; const started = performance.now();
      const port = index % 2 ? 5314 : 5300;
      const response = await fetch(`http://127.0.0.1:${port}/nodics/system/v0/health/ready`);
      if (!response.ok) throw new Error(`Read ${index} returned ${response.status}`);
      latencies.push(performance.now() - started);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  latencies.sort((a, b) => a - b);
  return { requests: total, concurrency, p95Ms: Math.ceil(latencies[Math.floor(latencies.length * 0.95)]), errors: 0 };
});
await check('redis-sentinel-promotion-observed', async () => {
  if (!backupId) throw new Error('Backup is unavailable for post-failover recovery.');
  run(docker, ['exec', '-e', `REDISCLI_AUTH=${environmentValues.REDIS_PASSWORD}`,
    'nodics-kickoff-docker-local-redis-primary-1', 'redis-cli', 'CLIENT', 'PAUSE', '20000', 'ALL'],
  { env: dockerEnvironment });
  const deadline = Date.now() + 90000; let promoted = '';
  while (Date.now() < deadline) {
    try {
      promoted = run(docker, ['exec', 'nodics-kickoff-docker-local-redis-sentinel-1', 'redis-cli', '-p', '26379', '--raw',
        'SENTINEL', 'get-master-addr-by-name', 'nodics'], { env: dockerEnvironment });
      const address = promoted.trim().split(/\s+/)[0];
      if (address && address !== 'redis-primary') {
        const replicaAddress = run(docker, ['inspect', '--format', '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}',
          'nodics-kickoff-docker-local-redis-replica-1'], { env: dockerEnvironment }).trim();
        if (address === replicaAddress) break;
      }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  const promotedAddress = promoted.trim().split(/\s+/)[0];
  const replicaAddress = run(docker, ['inspect', '--format', '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}',
    'nodics-kickoff-docker-local-redis-replica-1'], { env: dockerEnvironment }).trim();
  if (promotedAddress !== replicaAddress) throw new Error('Sentinel did not promote redis-replica within 90 seconds.');
  await Promise.all([5300, 5312, 5314, 5330, 5340, 5350].map(port => waitReady(port, 90000)));
  run(process.execPath, ['scripts/docker-local-acceptance.mjs']);
  sentinelContinuityCompleted = true;
  run(process.execPath, ['scripts/docker-local-resilience.mjs', 'restore', backupId, '--confirm-replace-docker-local-data']);
  await Promise.all([5300, 5312, 5314, 5330, 5340, 5350].map(port => waitReady(port)));
  return { promotedNode: 'redis-replica', applicationReconnect: 'PASSED', authenticationStampContinuity: 'PASSED',
    publicationLifecycleDuringPromotion: 'PASSED', recovery: 'baseline backup restored after Redis service-interruption failover simulation' };
});
await check('dependency-security-audit', () => {
  const result = spawnSync('npm', ['audit', '--omit=dev', '--json'], { cwd: projectRoot, encoding: 'utf8' });
  const report = JSON.parse(result.stdout || '{}');
  const vulnerabilities = report.metadata?.vulnerabilities || {};
  if ((vulnerabilities.critical || 0) > 0 || (vulnerabilities.high || 0) > 0) {
    throw new Error(`npm audit reports high=${vulnerabilities.high || 0}, critical=${vulnerabilities.critical || 0}`);
  }
  return { high: vulnerabilities.high || 0, critical: vulnerabilities.critical || 0 };
});
await check('axis-bundled-login-accessibility-contract', () => {
  const file = path.join(workspaceRoot, 'nodics.axis', 'src', 'initialization', 'BundledLoginPage.tsx');
  const source = fs.readFileSync(file, 'utf8');
  for (const pattern of [/component="main"/, /label="Login ID"/, /label="Password"/, /type="password"/, /type="submit"/]) {
    if (!pattern.test(source)) throw new Error(`Bundled login is missing ${pattern}`);
  }
  return { classification: 'AUTOMATED_STATIC_CONTRACT_ONLY' };
}, 'AUTOMATED_STATIC_CONTRACT_ONLY');

evidence.push({ id: 'redis-application-transparent-failover', state: sentinelContinuityCompleted ? 'PASSED' : 'FAILED',
  classification: 'LOCAL_PRODUCTION_SIMULATION', message: sentinelContinuityCompleted
    ? 'Sentinel-aware runtimes remained ready and completed authenticated publishing acceptance after replica promotion.'
    : 'Sentinel promotion continuity did not complete; no transparent-failover claim is permitted.' });
evidence.push({ id: 'independent-penetration-and-human-accessibility', state: 'EXTERNAL_EVIDENCE_REQUIRED',
  classification: 'EXTERNAL', message: 'Automation does not replace independent penetration testing or assistive-technology review.' });

const report = { contractVersion: 1, environment: 'kickoffDockerLocal', qualificationClass: 'LOCAL_RECOVERY_SIMULATION',
  generatedAt: new Date().toISOString(), evidence };
console.log(JSON.stringify(report, null, 2));
if (evidence.some(item => item.state === 'FAILED')) process.exitCode = 1;
