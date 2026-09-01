#!/usr/bin/env node
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
const require = createRequire(import.meta.url);
const localEnv = Object.assign({}, readEnvFile(path.join(projectRoot, '.env')), process.env);
const frameworkRoot = path.resolve(projectRoot, localEnv.NODICS_FRAMEWORK_ROOT || '../nodics.ai');
const frameworkFile = relativePath => fs.readFileSync(path.join(frameworkRoot, relativePath), 'utf8');
const projectCommandService = require(path.join(frameworkRoot, 'nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService'));

const lifecycle = frameworkFile('nodics.foundation/modules/nTooling/src/service/project/defaultProjectContainerResilienceService.mjs');
const qualification = frameworkFile('nodics.foundation/modules/nTooling/src/service/project/defaultProjectContainerQualificationService.mjs');
const soak = qualification;
const frameworkQualification = frameworkFile('nodics.foundation/modules/nTooling/src/service/quality/defaultFrameworkQualificationEvidenceService.js');
const acceptance = qualification;
const bootstrapAcceptance = frameworkFile('nodics.foundation/modules/nTooling/src/service/project/defaultProjectLocalBootstrapAcceptanceService.mjs');
const backendDockerfile = fs.readFileSync(new URL('../envs/kickoffDockerLocal/docker/backend.Dockerfile', import.meta.url), 'utf8');
const dockerLocalRuntimeProperties = fs.readFileSync(new URL('../envs/kickoffDockerLocal/config/runtime-properties.js', import.meta.url), 'utf8');
const dockerLocalProfile = JSON.parse(fs.readFileSync(new URL('../envs/kickoffDockerLocal/nodics.environment.json', import.meta.url), 'utf8'));
const packageDefinition = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const projectContract = JSON.parse(fs.readFileSync(new URL('../nodics.project.json', import.meta.url), 'utf8'));
const projectCommands = projectCommandService.defaultCommands();

assert.match(lifecycle, /mongodump/);
assert.match(lifecycle, /mongorestore/);
assert.match(lifecycle, /sha256/);
assert.equal(projectContract.containerEnvironments, undefined);
assert.equal(projectContract.tooling, undefined);
assert.equal(dockerLocalProfile.resilience.restoreConfirmationToken, '--confirm-replace-docker-local-data');
assert.equal(dockerLocalProfile.resilience.volumes.mediaStaged, 'nodics-kickoff-docker-local-media-staged');
assert.equal(dockerLocalProfile.resilience.volumes.mediaOnline, 'nodics-kickoff-docker-local-media-online');
assert.match(qualification, /recovery-point-objective/);
assert.match(qualification, /recovery-time-objective/);
assert.match(qualification, /unpublished-staged-isolation/);
assert.match(acceptance, /--expect-documentation-not-installed/);
assert.match(acceptance, /--qualify-documentation-rollback/);
assert.match(bootstrapAcceptance, /optional documentation packs are NOT_INSTALLED/);
assert.match(bootstrapAcceptance, /documentation rollback to prior Online versions/);
assert.match(bootstrapAcceptance, /x-nodics-client-contract-version/);
assert.match(backendDockerfile, /rm -rf \/workspace\/nodics\.kickoff\/envs\/kickoffDockerLocal\/generated/);
assert.match(dockerLocalRuntimeProperties, /const distributedCacheModules = \['redisCache'\]/);
assert.match(dockerLocalRuntimeProperties, /activeModules: \{ groups: \[\], modules: \['cmsStaged'[\s\S]*'nexus\.web'/);
assert.doesNotMatch(dockerLocalRuntimeProperties, /partnerSiteData/);
assert.match(dockerLocalRuntimeProperties, /cache:[\s\S]*kickoffCore: distributedAuthCache/);
assert.match(dockerLocalRuntimeProperties, /channels: \{ auth: \{ enabled: true, engine: 'redis', fallback: false \} \}/);
assert.match(qualification, /redis-sentinel-promotion-observed/);
assert.match(qualification, /CLIENT', 'PAUSE'/);
assert.match(soak, /NODICS_DOCKER_SOAK_SECONDS/);
assert.match(soak, /NODICS_DOCKER_SOAK_REQUEST_INTERVAL_MS/);
assert.equal(dockerLocalProfile.soak.acceptanceCommand, 'docker-local:acceptance');
assert.match(frameworkQualification, /cmsPublicationManifestContract\.test\.js/);
assert.match(frameworkQualification, /cmsPublicationOutboxReliability\.test\.js/);
assert.match(frameworkQualification, /directBusinessDatabaseCrud: false/);
assert.match(packageDefinition.scripts['docker-local:backup'], /nodics-project\.js project:run docker-local:backup/);
assert.equal(projectCommands['docker-local:backup'].command, 'project:container-resilience');
assert.equal(projectCommands['docker-local:backup'].home, 'project');
assert.deepEqual(projectCommands['docker-local:backup'].args, ['dockerLocal', 'backup']);
assert.deepEqual(projectCommands['docker-local:verify'].args, ['dockerLocal', 'verify']);
assert.deepEqual(projectCommands['docker-local:restore'].args, ['dockerLocal', 'restore']);
assert.match(packageDefinition.scripts['docker-local:resilience'], /nodics-project\.js project:run docker-local:resilience/);
assert.equal(projectCommands['docker-local:resilience'].command, 'project:container-qualification');
assert.deepEqual(projectCommands['docker-local:resilience'].args, ['dockerLocal', 'resilience-qualification']);
assert.equal(packageDefinition.scripts['docker-local:publishing-interruption-contracts'],
  'node scripts/nodics-project.js project:run qualification:publishing-interruption-contracts');
assert.equal(projectCommands['qualification:publishing-interruption-contracts'].type, 'frameworkCommand');
assert.match(packageDefinition.scripts['docker-local:soak'], /nodics-project\.js project:run docker-local:soak/);
assert.equal(projectCommands['docker-local:soak'].command, 'project:container-qualification');
assert.deepEqual(projectCommands['docker-local:soak'].args, ['dockerLocal', 'soak']);
assert.equal(
  packageDefinition.scripts['acceptance:documentation:fresh-browser'],
  'node scripts/nodics-project.js project:run acceptance:documentation:fresh-browser'
);
assert.equal(projectCommands['acceptance:documentation:fresh-browser'].command, 'project:container-qualification');
assert.deepEqual(projectCommands['acceptance:documentation:fresh-browser'].args, [
  'dockerLocal',
  'acceptance',
  '--expect-documentation-not-installed'
]);

console.log('kickoffDockerLocal resilience contract validated');
