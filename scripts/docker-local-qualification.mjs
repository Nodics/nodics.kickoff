#!/usr/bin/env node

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const generatedRoot = path.join(projectRoot, 'envs/kickoffDockerLocal/generated');
const docker = '/Applications/Docker.app/Contents/Resources/bin/docker';
const dockerEnvironment = { ...process.env, DOCKER_CONFIG: path.join(generatedRoot, 'docker-cli'),
  DOCKER_HOST: process.env.DOCKER_HOST || `unix://${path.join(process.env.HOME || '', '.docker/run/docker.sock')}` };
const evidence = [];

async function check(id, operation) {
  const started = performance.now();
  try {
    await operation();
    evidence.push({ id, state: 'PASSED', durationMs: Math.ceil(performance.now() - started) });
  } catch (error) {
    evidence.push({ id, state: 'FAILED', durationMs: Math.ceil(performance.now() - started), message: error.message });
  }
}

function command(commandName, arguments_, options = {}) {
  const result = spawnSync(commandName, arguments_, { cwd: projectRoot, encoding: 'utf8', env: options.env || process.env });
  if (result.status !== 0) throw new Error((result.stderr || result.stdout || `${commandName} failed`).trim().slice(0, 500));
  return result.stdout;
}

function dockerCommand(arguments_) { return command(docker, arguments_, { env: dockerEnvironment }); }
async function httpOk(url) { const response = await fetch(url); if (!response.ok) throw new Error(`${url} returned ${response.status}`); return response; }

await check('environment-contract', () => command(process.execPath, ['test/dockerLocalEnvironmentContract.test.mjs']));
await check('runtime-preparation', () => command(process.execPath, ['test/dockerLocalRuntimePrepare.test.js']));
await check('compose-validation', () => {
  const values = Object.fromEntries(fs.readFileSync(path.join(generatedRoot, 'docker.env'), 'utf8').trim().split(/\n/)
    .map(line => { const index = line.indexOf('='); return [line.slice(0, index), line.slice(index + 1)]; }));
  return command('/Applications/Docker.app/Contents/Resources/cli-plugins/docker-compose',
    ['--env-file', 'envs/kickoffDockerLocal/generated/docker.env', '--file', 'envs/kickoffDockerLocal/docker/compose.yaml', 'config', '--quiet'],
    { env: { ...process.env, ...values, NODICS_WORKSPACE_ROOT: workspaceRoot } });
});
await check('runtime-health', async () => Promise.all([
  5300, 5312, 5314, 5330, 5340, 5350
].map(port => httpOk(`http://127.0.0.1:${port}/nodics/system/v0/health/ready`))));
await check('frontend-health', async () => Promise.all([httpOk('http://127.0.0.1:4100/'), httpOk('http://127.0.0.1:4200/')]));
await check('bounded-read-load', async () => {
  const requests = Array.from({ length: 50 }, (_, index) => httpOk(`http://127.0.0.1:${index % 2 ? 5314 : 5300}/nodics/system/v0/health/ready`));
  await Promise.all(requests);
});
await check('redis-primary-replication', () => dockerCommand(['exec', 'nodics-kickoff-docker-local-redis-primary-1', 'sh', '-c',
  'redis-cli -a "$REDIS_PASSWORD" info replication 2>/dev/null | grep -q "role:master"']));
await check('redis-sentinel-topology', () => dockerCommand(['exec', 'nodics-kickoff-docker-local-redis-sentinel-1', 'sh', '-c',
  'result="$(redis-cli -p 26379 sentinel master nodics)"; printf "%s" "$result" | grep -q "flags" && printf "%s" "$result" | grep -A1 "num-slaves" | grep -q "1"']));
await check('mongodb-authenticated-replica', () => dockerCommand(['exec', 'nodics-kickoff-docker-local-mongodb-1', 'sh', '-c',
  'mongosh --quiet -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase admin --eval "if (db.adminCommand({ping:1}).ok !== 1 || rs.status().ok !== 1) quit(2)"']));
await check('container-hardening', () => {
  const names = ['platform', 'wcms-staged', 'wcms-online', 'process', 'engagement', 'commerce', 'axis', 'nexus'];
  for (const name of names) {
    const inspected = JSON.parse(dockerCommand(['inspect', `nodics-kickoff-docker-local-${name}-1`]))[0];
    if (inspected.HostConfig.ReadonlyRootfs !== true || !inspected.HostConfig.SecurityOpt?.includes('no-new-privileges:true')) {
      throw new Error(`${name} is missing read-only or no-new-privileges hardening`);
    }
  }
});
await check('network-separation', () => {
  const nexus = JSON.parse(dockerCommand(['inspect', 'nodics-kickoff-docker-local-nexus-1']))[0].NetworkSettings.Networks;
  const staged = JSON.parse(dockerCommand(['inspect', 'nodics-kickoff-docker-local-wcms-staged-1']))[0].NetworkSettings.Networks;
  if (Object.keys(nexus).some(name => name.includes('application') || name.includes('data')) || Object.keys(staged).some(name => name.includes('public'))) {
    throw new Error('public and application/data network boundaries overlap');
  }
});

console.log(JSON.stringify({ contractVersion: 1, environment: 'kickoffDockerLocal',
  qualificationClass: 'LOCAL_PRODUCTION_SIMULATION', evidence }, null, 2));
if (evidence.some(item => item.state !== 'PASSED')) process.exitCode = 1;
