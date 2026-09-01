/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';

const projectRoot = path.resolve(new URL('..', import.meta.url).pathname);
const platformReadinessUrl = 'http://127.0.0.1:4300/nodics/system/v0/health/ready';
const readinessUrl = 'http://127.0.0.1:4370/nodics/system/v0/health/ready';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isPortOpen(port) {
  return new Promise(resolve => {
    const socket = net.createConnection({host: '127.0.0.1', port});
    socket.setTimeout(500);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => resolve(false));
  });
}

async function readReadiness(url) {
  const response = await fetch(url, {redirect: 'error'});
  const text = await response.text();
  let body = {};
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    body = {raw: text};
  }
  return {ok: response.ok, statusCode: response.status, body};
}

function isReady(readiness) {
  return Boolean(
    readiness.ok &&
    (
      readiness.body?.status === 'UP' ||
      readiness.body?.data?.status === 'UP' ||
      readiness.body?.ready === true ||
      readiness.body?.success === true
    )
  );
}

async function waitForReadiness(url, timeoutMs = 120000) {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const readiness = await readReadiness(url);
      if (isReady(readiness)) return readiness;
      lastError = new Error(`Readiness returned ${readiness.statusCode}: ${JSON.stringify(readiness.body)}`);
    } catch (error) {
      lastError = error;
    }
    await delay(1000);
  }
  throw lastError || new Error(`Server did not become ready at ${url}`);
}

function startRuntime(command, label, logRoot) {
  const runtimeLogDir = path.join(logRoot, label);
  fs.mkdirSync(runtimeLogDir, {recursive: true});
  const stdout = fs.openSync(path.join(runtimeLogDir, 'stdout.log'), 'w');
  const stderr = fs.openSync(path.join(runtimeLogDir, 'stderr.log'), 'w');
  const child = spawn(process.execPath, ['scripts/nodics-project.js', 'project:run', command], {
    cwd: projectRoot,
    detached: true,
    stdio: ['ignore', stdout, stderr]
  });
  return {child, stdout, stderr, label};
}

function stopRuntime(runtime) {
  fs.closeSync(runtime.stdout);
  fs.closeSync(runtime.stderr);
  if (!runtime.child.killed) {
    try {
      process.kill(-runtime.child.pid, 'SIGTERM');
    } catch {
      try { runtime.child.kill('SIGTERM'); } catch {}
    }
  }
}

async function main() {
  const startedRuntimes = [];
  const logDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kickoff-waste-http-'));
  try {
    const platformOpen = await isPortOpen(4300);
    if (platformOpen) {
      const readiness = await readReadiness(platformReadinessUrl);
      assert.equal(isReady(readiness), true, 'Port 4300 is occupied but does not expose Platform readiness');
    } else {
      startedRuntimes.push(startRuntime('start:platform', 'platform', logDir));
      await waitForReadiness(platformReadinessUrl);
    }

    const alreadyOpen = await isPortOpen(4370);
    if (alreadyOpen) {
      const readiness = await readReadiness(readinessUrl);
      assert.equal(isReady(readiness), true, 'Port 4370 is occupied but does not expose Waste readiness');
      console.log('kickoffLocal waste HTTP runtime smoke validated existing server');
      return;
    }

    startedRuntimes.push(startRuntime('start:waste', 'waste', logDir));
    const readiness = await waitForReadiness(readinessUrl);
    assert.equal(isReady(readiness), true, 'Waste server must expose a healthy readiness response');
    console.log('kickoffLocal waste HTTP runtime smoke validated started server');
  } finally {
    startedRuntimes.reverse().forEach(stopRuntime);
  }
}

await main();
