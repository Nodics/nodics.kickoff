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
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const projectCommandService = require('../../nodics.ai/nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService');
const environment = path.join(root, 'envs', 'kickoffDockerLocal');
const compose = fs.readFileSync(
  path.join(environment, 'docker', 'compose.yaml'),
  'utf8',
);
const runtimeProperties = fs.readFileSync(
  path.join(environment, 'config', 'runtime-properties.js'),
  'utf8',
);
const environmentProperties = fs.readFileSync(
  path.join(environment, 'config', 'properties.js'),
  'utf8',
);
const containerEnvironmentService = fs.readFileSync(
  path.join(
    root,
    '..',
    'nodics.ai',
    'nodics.foundation',
    'modules',
    'nTooling',
    'src',
    'service',
    'project',
    'defaultProjectContainerEnvironmentService.mjs',
  ),
  'utf8',
);
const containerQualificationService = fs.readFileSync(
  path.join(
    root,
    '..',
    'nodics.ai',
    'nodics.foundation',
    'modules',
    'nTooling',
    'src',
    'service',
    'project',
    'defaultProjectContainerQualificationService.mjs',
  ),
  'utf8',
);
const projectContractPath = path.join(root, 'nodics.project.json');
const environmentProfile = JSON.parse(fs.readFileSync(path.join(environment, 'nodics.environment.json'), 'utf8'));
const projectCommands = projectCommandService.defaultCommands();
const servers = [
  'platformServer',
  'wcmsStagedServer',
  'wcmsOnlineServer',
  'processServer',
  'engagementServer',
  'loyaltyServer',
  'commerceServer',
  'commerceStagedServer',
];
assert.notEqual(environment, path.join(root, 'envs', 'kickoffLocal'));
servers.forEach(server => {
  const metadata = JSON.parse(fs.readFileSync(path.join(environment, server, 'package.json'), 'utf8'));
  assert.equal(metadata.nodics.kind, 'server');
  assert(fs.existsSync(path.join(environment, server, 'config', 'properties.js')));
});
[
  'platform',
  'wcms-staged',
  'wcms-online',
  'process',
  'engagement',
  'loyalty',
  'commerce',
  'commerce-staged',
  'axis',
  'nexus',
  'mongodb',
  'redis-primary',
  'redis-replica',
  'redis-sentinel',
  'elasticsearch',
].forEach(service => {
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
assert.match(compose, /5352:4352/);
assert.match(compose, /5360:4360/);
assert.doesNotMatch(compose, /src\/start-[^"'\s]+\.js/);
for (const command of [
  'start:platform',
  'start:wcms:online',
  'start:process',
  'start:wcms:staged',
  'start:engagement',
  'start:loyalty',
  'start:commerce',
  'start:commerce:staged',
]) {
  assert.match(compose, new RegExp(`nodics-project\\.js\", \"project:run\", \"${command.replace(/:/g, ':')}\"`));
}
assert.match(compose, /docker\.elastic\.co\/elasticsearch\/elasticsearch/);
assert.match(compose, /elasticsearch-data/);
assert.match(runtimeProperties, /sentinel:\s*\{/);
assert.match(runtimeProperties, /host: 'redis-sentinel'/);
assert.match(runtimeProperties, /password: process\.env\.REDIS_PASSWORD/);
assert.match(runtimeProperties, /clientEndpoints:\s*\{/);
assert.match(runtimeProperties, /platformServer: 'http:\/\/localhost:5300\/'/);
assert.match(runtimeProperties, /loyaltyServer: 'http:\/\/localhost:5360\/'/);
assert.match(runtimeProperties, /loyaltyServer:\s*\{/);
assert.match(runtimeProperties, /database\('kickoffDockerLocalLoyalty'\)/);
assert.match(runtimeProperties, /default: endpoint\('loyalty', 4360\)/);
assert.match(environmentProperties, /'Cross-Origin-Resource-Policy': 'cross-origin'/);
assert.match(environmentProperties, /allowedOrigins: \['http:\/\/localhost:4100', 'http:\/\/127\.0\.0\.1:4100'/);
assert.equal(fs.existsSync(projectContractPath), false);
assert.equal(environmentProfile.profileCode, 'dockerLocal');
assert.equal(environmentProfile.environment, 'kickoffDockerLocal');
assert.equal(environmentProfile.bootstrapAdminPassword, 'NodicsLocal@2026');
assert.equal(projectCommands['docker-local:preflight'].command, 'project:container');
assert.equal(projectCommands['docker-local:preflight'].home, 'project');
assert.deepEqual(projectCommands['docker-local:preflight'].args, ['dockerLocal', 'preflight']);
assert.equal(environmentProfile.acceptance.urls.engagement, 'http://127.0.0.1:5340');
assert.equal(environmentProfile.acceptance.urls.loyalty, 'http://127.0.0.1:5360');
assert.equal(environmentProfile.acceptance.urls.commerceStaged, 'http://127.0.0.1:5352');
assert.match(
  containerEnvironmentService,
  /BOOTSTRAP_ADMIN_PASSWORD: process\.env\.NODICS_DOCKER_ADMIN_PASSWORD \|\| profile\.bootstrapAdminPassword/,
);
assert.match(containerEnvironmentService, /readContainerEnvironmentProfile/);
assert.match(containerQualificationService, /NODICS_ENGAGEMENT_URL: urls\.engagement/);
assert.match(containerQualificationService, /NODICS_COMMERCE_STAGED_URL: process\.env\.NODICS_COMMERCE_STAGED_URL \|\| urls\.commerceStaged/);
assert.match(containerQualificationService, /NODICS_SERVICE_API_KEY: process\.env\.NODICS_SERVICE_API_KEY \|\| values\.BOOTSTRAP_SERVICE_API_KEY/);
assert.match(containerQualificationService, /acceptance:agora-commerce-data/);
assert.match(containerQualificationService, /NODICS_STOREFRONT_COMMERCE_DATA_EXECUTE/);
assert.match(containerQualificationService, /acceptance:agora-commerce-publication/);
console.log('kickoffDockerLocal environment contract validated');
