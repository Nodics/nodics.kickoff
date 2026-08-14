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
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const dockerRoot = path.join(projectRoot, 'envs', 'kickoffDockerLocal', 'docker');
const composePath = path.join(dockerRoot, 'compose.yaml');
const generatedRoot = path.join(projectRoot, 'envs', 'kickoffDockerLocal', 'generated');
const environmentPath = path.join(generatedRoot, 'docker.env');
const dockerCandidates = Object.freeze([
  process.env.NODICS_DOCKER_BIN,
  '/Applications/Docker.app/Contents/Resources/bin/docker',
  'docker',
].filter(Boolean));

/** @module kickoff/scripts/dockerLocal @description Operates only the isolated kickoffDockerLocal Compose project. */

function resolveDocker() {
  for (const candidate of dockerCandidates) {
    const result = spawnSync(candidate, ['version', '--format', '{{.Server.Version}}'], { encoding: 'utf8' });
    if (result.status === 0) return candidate;
  }
  throw new Error('Docker Engine is unavailable. Start Docker Desktop or set NODICS_DOCKER_BIN.');
}

function randomSecret() {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)), value => value.toString(16).padStart(2, '0')).join('');
}

function ensureEnvironment() {
  fs.mkdirSync(generatedRoot, { recursive: true, mode: 0o700 });
  if (!fs.existsSync(environmentPath)) {
    const values = {
      COMPOSE_PROJECT_NAME: 'nodics-kickoff-docker-local',
      MONGO_ROOT_USERNAME: 'nodicsDockerRoot',
      MONGO_ROOT_PASSWORD: randomSecret(),
      MONGO_REPLICA_KEY: randomSecret() + randomSecret(),
      NODICS_DB_USERNAME: 'nodicsDockerRuntime',
      NODICS_DB_PASSWORD: randomSecret(),
      REDIS_PASSWORD: randomSecret(),
      AUTH_JWT_SECRET: randomSecret(),
      AUTH_API_KEY_PEPPER: randomSecret(),
      BOOTSTRAP_ADMIN_PASSWORD: process.env.NODICS_DOCKER_ADMIN_PASSWORD || 'NodicsLocal@2026',
      BOOTSTRAP_SERVICE_PASSWORD: randomSecret(),
      BOOTSTRAP_SERVICE_API_KEY: randomSecret(),
    };
    const content = Object.entries(values).map(([key, value]) => `${key}=${value}`).join('\n') + '\n';
    fs.writeFileSync(environmentPath, content, { mode: 0o600 });
  }
  const existing = fs.readFileSync(environmentPath, 'utf8');
  if (!/^AUTH_API_KEY_PEPPER=/m.test(existing)) {
    fs.appendFileSync(environmentPath, `AUTH_API_KEY_PEPPER=${randomSecret()}\n`, { mode: 0o600 });
  }
  if (!/^AUTH_JWT_SECRET=/m.test(existing)) {
    fs.appendFileSync(environmentPath, `AUTH_JWT_SECRET=${randomSecret()}\n`, { mode: 0o600 });
  }
  for (const key of ['BOOTSTRAP_ADMIN_PASSWORD', 'BOOTSTRAP_SERVICE_PASSWORD', 'BOOTSTRAP_SERVICE_API_KEY']) {
    const current = fs.readFileSync(environmentPath, 'utf8');
    if (!new RegExp(`^${key}=`, 'm').test(current)) fs.appendFileSync(environmentPath, `${key}=${randomSecret()}\n`, { mode: 0o600 });
  }
  if (!/^MONGO_REPLICA_KEY=/m.test(fs.readFileSync(environmentPath, 'utf8'))) {
    fs.appendFileSync(environmentPath, `MONGO_REPLICA_KEY=${randomSecret()}${randomSecret()}\n`, { mode: 0o600 });
  }
  const mongoEnvironment = fs.readFileSync(environmentPath, 'utf8');
  if (!/^NODICS_MONGODB_URI=/m.test(mongoEnvironment)) {
    const values = Object.fromEntries(mongoEnvironment.trim().split(/\n/).map(line => { const index = line.indexOf('='); return [line.slice(0, index), line.slice(index + 1)]; }));
    fs.appendFileSync(environmentPath, `NODICS_MONGODB_URI=mongodb://${values.MONGO_ROOT_USERNAME}:${values.MONGO_ROOT_PASSWORD}@mongodb:27017/?replicaSet=nodicsDockerLocal&authSource=admin\n`, { mode: 0o600 });
  }
  const effective = fs.readFileSync(environmentPath, 'utf8');
  if (!/^REDIS_URL=/m.test(effective)) {
    const password = effective.match(/^REDIS_PASSWORD=(.+)$/m)?.[1];
    if (!password) throw new Error('Docker Local Redis password is missing.');
    fs.appendFileSync(environmentPath, `REDIS_URL=redis://:${password}@redis-primary:6379\n`, { mode: 0o600 });
  }
  fs.chmodSync(environmentPath, 0o600);
}

function compose(arguments_, options = {}) {
  ensureEnvironment();
  const isolatedDockerConfig = path.join(generatedRoot, 'docker-cli');
  fs.mkdirSync(isolatedDockerConfig, { recursive: true, mode: 0o700 });
  const desktopPluginRoot = '/Applications/Docker.app/Contents/Resources/cli-plugins';
  fs.writeFileSync(path.join(isolatedDockerConfig, 'config.json'), JSON.stringify({
    cliPluginsExtraDirs: fs.existsSync(desktopPluginRoot) ? [desktopPluginRoot] : []
  }, null, 2) + '\n', { mode: 0o600 });
  const docker = resolveDocker();
  const desktopCompose = '/Applications/Docker.app/Contents/Resources/cli-plugins/docker-compose';
  const command = fs.existsSync(desktopCompose) ? desktopCompose : docker;
  const args = fs.existsSync(desktopCompose)
    ? ['--env-file', environmentPath, '--file', composePath, ...arguments_]
    : ['compose', '--env-file', environmentPath, '--file', composePath, ...arguments_];
  const result = spawnSync(command, args, {
    cwd: workspaceRoot,
    encoding: options.capture ? 'utf8' : undefined,
    stdio: options.capture ? 'pipe' : 'inherit',
    env: { ...process.env, NODICS_WORKSPACE_ROOT: workspaceRoot, DOCKER_CONFIG: isolatedDockerConfig,
      DOCKER_HOST: process.env.DOCKER_HOST || `unix://${path.join(process.env.HOME || '', '.docker/run/docker.sock')}` },
  });
  if (result.status !== 0) throw new Error(`Docker Compose failed with exit code ${String(result.status ?? 1)}`);
  return result.stdout || '';
}

function portAvailable(port) {
  return new Promise(resolve => {
    const socket = net.createConnection({ host: '127.0.0.1', port });
    const finish = value => { socket.destroy(); resolve(value); };
    socket.setTimeout(300);
    socket.once('connect', () => finish(false));
    socket.once('timeout', () => finish(true));
    socket.once('error', () => finish(true));
  });
}

async function preflight() {
  ensureEnvironment();
  const docker = resolveDocker();
  const ports = [4100, 4200, 5300, 5312, 5314, 5330, 5340, 5350];
  const checks = [{ id: 'docker-engine', state: 'PASSED', binary: docker },
    { id: 'compose-contract', state: fs.existsSync(composePath) ? 'PASSED' : 'FAILED', path: composePath }];
  for (const port of ports) checks.push({ id: `host-port:${String(port)}`, state: await portAvailable(port) ? 'AVAILABLE' : 'BUSY' });
  checks.push({ id: 'native-local-isolation', state: ports.every(port => ![3100, 3200, 4300, 4312, 4314, 4330, 4340, 4350].includes(port)) ? 'PASSED' : 'FAILED' });
  const result = { contractVersion: 1, environment: 'kickoffDockerLocal', qualificationClass: 'LOCAL_PRODUCTION_SIMULATION', checks };
  console.log(JSON.stringify(result, null, 2));
  if (checks.some(check => ['FAILED', 'BUSY'].includes(check.state))) process.exitCode = 1;
}

async function main() {
  const command = process.argv[2] || 'status';
  const commandArguments = process.argv.slice(3).filter(argument => argument !== '--');
  if (command === 'preflight') return preflight();
  if (command === 'build') return compose(['build', ...commandArguments]);
  if (command === 'start') { await preflight(); if (process.exitCode) return; return compose(['up', '--detach', '--wait']); }
  if (command === 'status') return compose(['ps']);
  if (command === 'logs') return compose(['logs', '--tail', '200', ...commandArguments]);
  if (command === 'stop') return compose(['down', '--remove-orphans']);
  if (command === 'reset') {
    if (!process.argv.includes('--confirm-destroy-docker-local-data')) throw new Error('Docker Local reset requires --confirm-destroy-docker-local-data.');
    return compose(['down', '--volumes', '--remove-orphans']);
  }
  throw new Error(`Unknown Docker Local command: ${command}`);
}

main().catch(error => { console.error(`[docker-local] FAIL ${error.message}`); process.exitCode = 1; });
