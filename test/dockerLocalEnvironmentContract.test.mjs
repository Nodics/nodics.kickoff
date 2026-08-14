/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const environment = path.join(root, 'envs', 'kickoffDockerLocal');
const compose = fs.readFileSync(path.join(environment, 'docker', 'compose.yaml'), 'utf8');
const runtimeProperties = fs.readFileSync(path.join(environment, 'config', 'runtime-properties.js'), 'utf8');
const environmentProperties = fs.readFileSync(path.join(environment, 'config', 'properties.js'), 'utf8');
const dockerLocalScript = fs.readFileSync(path.join(root, 'scripts', 'docker-local.mjs'), 'utf8');
const servers = ['platformServer', 'wcmsStagedServer', 'wcmsOnlineServer', 'processServer', 'engagementServer', 'commerceServer'];
assert.notEqual(environment, path.join(root, 'envs', 'kickoffLocal'));
servers.forEach(server => {
  const metadata = JSON.parse(fs.readFileSync(path.join(environment, server, 'package.json'), 'utf8'));
  assert.equal(metadata.nodics.kind, 'server');
  assert(fs.existsSync(path.join(environment, server, 'config', 'properties.js')));
});
['platform', 'wcms-staged', 'wcms-online', 'process', 'engagement', 'commerce', 'axis', 'nexus', 'mongodb', 'redis-primary', 'redis-replica', 'redis-sentinel'].forEach(service => {
  assert.match(compose, new RegExp(`^  ${service}:`, 'm'));
});
assert(!compose.includes('kickoffLocalWcms'));
assert(!compose.includes('/var/run/docker.sock'));
assert(!compose.match(/password:\s+(?:nodics|admin|password|secret)/i));
assert.match(compose, /nodics-kickoff-docker-local/);
assert.match(compose, /read_only:\s*true/);
assert.match(compose, /no-new-privileges:true/);
assert.match(compose, /5312:4312/);
assert.match(compose, /5314:4314/);
assert.match(runtimeProperties, /sentinel:\s*\{/);
assert.match(runtimeProperties, /host: 'redis-sentinel'/);
assert.match(runtimeProperties, /password: process\.env\.REDIS_PASSWORD/);
assert.match(runtimeProperties, /clientEndpoints:\s*\{/);
assert.match(runtimeProperties, /platformServer: 'http:\/\/localhost:5300\/'/);
assert.match(environmentProperties, /'Cross-Origin-Resource-Policy': 'cross-origin'/);
assert.match(environmentProperties, /allowedOrigins: \['http:\/\/localhost:4100', 'http:\/\/127\.0\.0\.1:4100'/);
assert.match(dockerLocalScript, /BOOTSTRAP_ADMIN_PASSWORD: process\.env\.NODICS_DOCKER_ADMIN_PASSWORD \|\| 'NodicsLocal@2026'/);
console.log('kickoffDockerLocal environment contract validated');
