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

/** @module kickoff/scripts/dockerLocalSoakQualification @description Runs bounded mixed read and idempotent publication traffic against Docker Local. */

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const generatedRoot = path.join(projectRoot, 'envs', 'kickoffDockerLocal', 'generated');
const durationSeconds = Number(process.env.NODICS_DOCKER_SOAK_SECONDS || 1800);
const publicationIntervalSeconds = Number(process.env.NODICS_DOCKER_SOAK_PUBLICATION_INTERVAL_SECONDS || 300);
const concurrency = Number(process.env.NODICS_DOCKER_SOAK_CONCURRENCY || 12);
const requestIntervalMs = Number(process.env.NODICS_DOCKER_SOAK_REQUEST_INTERVAL_MS || 1000);
const docker = fs.existsSync('/Applications/Docker.app/Contents/Resources/bin/docker')
  ? '/Applications/Docker.app/Contents/Resources/bin/docker' : 'docker';
const dockerEnvironment = { ...process.env, DOCKER_CONFIG: path.join(generatedRoot, 'docker-cli'),
  DOCKER_HOST: process.env.DOCKER_HOST || `unix://${path.join(process.env.HOME || '', '.docker/run/docker.sock')}` };

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { cwd: projectRoot, encoding: 'utf8', env: options.env || process.env,
    maxBuffer: 1024 * 1024 * 1024 });
  if (result.status !== 0) throw new Error((result.stderr || result.stdout || `${command} failed`).slice(-2000));
  return result.stdout;
}
function percentile(values, ratio) { return values.slice().sort((a, b) => a - b)[Math.floor((values.length - 1) * ratio)] || 0; }

const startedAt = new Date();
const deadline = Date.now() + durationSeconds * 1000;
let nextPublicationAt = Date.now();
let requests = 0; let errors = 0; let publicationRuns = 0; const latencies = []; const resourceSamples = [];
const errorsByStatus = {};

async function readWorker() {
  while (Date.now() < deadline) {
    const started = performance.now();
    try {
      const ports = [5300, 5312, 5314, 5330, 5340, 5350];
      const response = await fetch(`http://127.0.0.1:${ports[requests % ports.length]}/nodics/system/v0/health/ready`);
      if (!response.ok) {
        errorsByStatus[String(response.status)] = (errorsByStatus[String(response.status)] || 0) + 1;
        throw new Error(`HTTP ${response.status}`);
      }
    } catch { errors += 1; }
    latencies.push(performance.now() - started); requests += 1;
    await new Promise(resolve => setTimeout(resolve, requestIntervalMs));
  }
}

async function controller() {
  while (Date.now() < deadline) {
    if (Date.now() >= nextPublicationAt) {
      run(process.execPath, ['scripts/docker-local-acceptance.mjs']);
      publicationRuns += 1;
      nextPublicationAt = Date.now() + publicationIntervalSeconds * 1000;
    }
    try {
      resourceSamples.push(run(docker, ['stats', '--no-stream', '--format', '{{json .}}'], { env: dockerEnvironment }).trim().split(/\n/).filter(Boolean).map(JSON.parse));
    } catch { errors += 1; }
    await new Promise(resolve => setTimeout(resolve, Math.min(30000, Math.max(1000, deadline - Date.now()))));
  }
}

await Promise.all([controller(), ...Array.from({ length: concurrency }, readWorker)]);
const report = { contractVersion: 1, environment: 'kickoffDockerLocal', qualificationClass: 'MIXED_SOAK',
  startedAt: startedAt.toISOString(), completedAt: new Date().toISOString(), durationSeconds, concurrency, requestIntervalMs,
  requests, errors, errorsByStatus, errorRate: requests ? errors / requests : 1, publicationRuns,
  latencyMs: { p50: Math.ceil(percentile(latencies, 0.5)), p95: Math.ceil(percentile(latencies, 0.95)), p99: Math.ceil(percentile(latencies, 0.99)) },
  resourceSampleCount: resourceSamples.length };
console.log(JSON.stringify(report, null, 2));
if (errors > 0 || publicationRuns < 1) process.exitCode = 1;
