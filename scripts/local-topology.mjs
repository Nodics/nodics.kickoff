#!/usr/bin/env node

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const stateDirectory = path.join(projectRoot, 'envs', 'kickoffLocal', 'generated', 'local-topology');
const statePath = path.join(stateDirectory, 'processes.json');

/** @module kickoff/scripts/localTopology @description Safely supervises the direct-Node kickoffLocal runtime topology. */
export const backendRuntimes = Object.freeze([
  { code: 'platform', label: 'Platform', script: 'start:platform', port: 4300 },
  { code: 'wcmsOnline', label: 'WCMS Online', script: 'start:wcms:online', port: 4314 },
  { code: 'process', label: 'Process and Automation', script: 'start:process', port: 4330 },
  { code: 'wcmsStaged', label: 'WCMS Staged', script: 'start:wcms:staged', port: 4312 },
  { code: 'engagement', label: 'Engagement', script: 'start:engagement', port: 4340 },
  { code: 'commerce', label: 'Commerce', script: 'start:commerce', port: 4350 },
]);

export const frontendRuntimes = Object.freeze([
  { code: 'axis', label: 'Axis', command: 'npm', args: ['run', 'dev'], cwd: path.join(workspaceRoot, 'nodics.axis'), port: 3100, readyPath: '/' },
  { code: 'nexus', label: 'Nexus', command: 'npm', args: ['run', 'dev'], cwd: path.join(workspaceRoot, 'nodics.nexus'), port: 3200, readyPath: '/' },
]);

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const healthUrl = runtime => `http://127.0.0.1:${String(runtime.port)}${runtime.readyPath || '/nodics/system/v0/health/ready'}`;

/** Returns whether a local TCP port currently accepts connections. */
export function portListening(port) {
  return new Promise(resolve => {
    const socket = net.createConnection({ host: '127.0.0.1', port });
    const finish = value => { socket.destroy(); resolve(value); };
    socket.setTimeout(500);
    socket.once('connect', () => finish(true));
    socket.once('timeout', () => finish(false));
    socket.once('error', () => finish(false));
  });
}

/** Loads supervisor state. Missing or invalid generated state is treated as absent. */
export function readState() {
  try { return JSON.parse(fs.readFileSync(statePath, 'utf8')); } catch { return null; }
}

/** Proves that a PID still belongs to this checkout's topology supervisor. */
export function isOwnedSupervisor(state, readCommand = pid => execFileSync('ps', ['-p', String(pid), '-o', 'command='], { encoding: 'utf8' })) {
  if (!state || !Number.isInteger(state.supervisorPid) || state.projectRoot !== projectRoot) return false;
  try {
    const command = readCommand(state.supervisorPid);
    return command.includes('scripts/local-topology.mjs') && command.includes('start');
  } catch { return false; }
}

/** Returns the selected topology without allowing arbitrary command injection. */
export function selectRuntimes(includeFrontends = false) {
  return includeFrontends ? [...backendRuntimes, ...frontendRuntimes] : [...backendRuntimes];
}

async function waitUntilReady(runtime, timeoutMs = 90000) {
  const startedAt = Date.now();
  let lastError = 'not reachable';
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(healthUrl(runtime), { redirect: 'error' });
      if (response.ok) return;
      lastError = `HTTP ${String(response.status)}`;
    } catch (error) { lastError = error.message; }
    await sleep(1000);
  }
  throw new Error(`${runtime.label} readiness timed out: ${lastError}`);
}

async function inspect(runtimes) {
  const state = readState();
  const owned = isOwnedSupervisor(state);
  const entries = [];
  for (const runtime of runtimes) {
    const listening = await portListening(runtime.port);
    let ready = false;
    if (listening) {
      try { ready = (await fetch(healthUrl(runtime), { redirect: 'error' })).ok; } catch { ready = false; }
    }
    const recorded = state?.children?.find(child => child.code === runtime.code);
    entries.push({ code: runtime.code, label: runtime.label, port: runtime.port, listening, ready,
      ownership: owned && recorded ? 'THIS_SUPERVISOR' : listening ? 'EXTERNAL_OR_UNKNOWN' : 'NONE' });
  }
  return { environment: 'kickoffLocal', supervisor: owned ? 'RUNNING' : 'NOT_RUNNING', supervisorPid: owned ? state.supervisorPid : null, runtimes: entries };
}

async function start(includeFrontends) {
  const runtimes = selectRuntimes(includeFrontends);
  const existing = readState();
  if (isOwnedSupervisor(existing)) throw new Error(`kickoffLocal topology is already supervised by PID ${String(existing.supervisorPid)}`);
  const busy = [];
  for (const runtime of runtimes) if (await portListening(runtime.port)) busy.push(`${runtime.label}:${String(runtime.port)}`);
  if (busy.length) throw new Error(`Refusing to start because required ports are busy: ${busy.join(', ')}. Run topology:status and stop the owning process explicitly.`);

  fs.mkdirSync(stateDirectory, { recursive: true });
  const children = [];
  let stopping = false;
  const persist = () => fs.writeFileSync(statePath, JSON.stringify({ contractVersion: 1, environment: 'kickoffLocal', projectRoot,
    supervisorPid: process.pid, startedAt: new Date().toISOString(), includeFrontends, children: children.map(entry => ({ code: entry.runtime.code, pid: entry.child.pid, port: entry.runtime.port })) }, null, 2) + '\n');

  const stop = async signal => {
    if (stopping) return;
    stopping = true;
    process.stdout.write(`[topology] stopping kickoffLocal after ${signal}\n`);
    for (const entry of [...children].reverse()) if (entry.child.exitCode === null) entry.child.kill('SIGTERM');
    const deadline = Date.now() + 15000;
    while (children.some(entry => entry.child.exitCode === null) && Date.now() < deadline) await sleep(250);
    for (const entry of children) if (entry.child.exitCode === null) entry.child.kill('SIGKILL');
    try { fs.unlinkSync(statePath); } catch {}
  };
  process.on('SIGINT', () => stop('SIGINT').then(() => process.exit(0)));
  process.on('SIGTERM', () => stop('SIGTERM').then(() => process.exit(0)));

  try {
    for (const runtime of runtimes) {
      const cwd = runtime.cwd || projectRoot;
      if (!fs.existsSync(path.join(cwd, 'package.json'))) throw new Error(`${runtime.label} project is unavailable at ${cwd}`);
      const command = runtime.command || 'npm';
      const args = runtime.args || ['run', runtime.script];
      const logPath = path.join(stateDirectory, `${runtime.code}.log`);
      const log = fs.openSync(logPath, 'a');
      const child = spawn(command, args, { cwd, env: process.env, stdio: ['ignore', log, log] });
      children.push({ runtime, child });
      persist();
      child.once('exit', code => {
        if (!stopping) {
          process.stderr.write(`[topology] ${runtime.label} exited unexpectedly with code ${String(code)}; stopping the remaining topology; log: ${logPath}\n`);
          stop(`${runtime.label} exit`).then(() => process.exit(code === 0 ? 1 : code || 1));
        }
      });
      await waitUntilReady(runtime);
      process.stdout.write(`[topology] READY ${runtime.label} http://127.0.0.1:${String(runtime.port)}\n`);
    }
    persist();
    process.stdout.write(`[topology] kickoffLocal is running under supervisor PID ${String(process.pid)}. Use npm run topology:stop or Ctrl+C.\n`);
    await new Promise(resolve => process.once('beforeExit', resolve));
  } catch (error) {
    await stop('startup failure');
    throw error;
  }
}

async function stop() {
  const state = readState();
  if (!state) { process.stdout.write('[topology] no generated supervisor state exists\n'); return; }
  if (!isOwnedSupervisor(state)) throw new Error('Generated state is stale or does not identify this checkout supervisor; refusing to signal any PID.');
  process.kill(state.supervisorPid, 'SIGTERM');
  const deadline = Date.now() + 20000;
  while (isOwnedSupervisor(state) && Date.now() < deadline) await sleep(250);
  if (isOwnedSupervisor(state)) throw new Error(`Supervisor PID ${String(state.supervisorPid)} did not stop within 20 seconds`);
  process.stdout.write('[topology] kickoffLocal supervisor stopped\n');
}

async function main() {
  const command = process.argv[2] || 'status';
  const includeFrontends = process.argv.includes('--include-frontends');
  if (command === 'start') return start(includeFrontends);
  if (command === 'stop') return stop();
  if (command === 'status') { console.log(JSON.stringify(await inspect(selectRuntimes(includeFrontends)), null, 2)); return; }
  throw new Error(`Unknown topology command: ${command}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(`[topology] FAIL ${error.message}`); process.exitCode = 1; });
}
