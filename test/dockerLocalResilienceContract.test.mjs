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

const lifecycle = fs.readFileSync(new URL('../../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectContainerResilienceService.mjs', import.meta.url), 'utf8');
const qualification = fs.readFileSync(new URL('../../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectContainerQualificationService.mjs', import.meta.url), 'utf8');
const soak = qualification;
const frameworkQualification = fs.readFileSync(new URL('../../nodics.ai/nodics.foundation/modules/nTooling/src/service/quality/defaultFrameworkQualificationEvidenceService.js', import.meta.url), 'utf8');
const acceptance = qualification;
const bootstrapAcceptance = fs.readFileSync(new URL('../../nodics.ai/nodics.foundation/modules/nTooling/src/service/project/defaultProjectLocalBootstrapAcceptanceService.mjs', import.meta.url), 'utf8');
const packageDefinition = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const projectContract = JSON.parse(fs.readFileSync(new URL('../nodics.project.json', import.meta.url), 'utf8'));

assert.match(lifecycle, /mongodump/);
assert.match(lifecycle, /mongorestore/);
assert.match(lifecycle, /sha256/);
assert.equal(projectContract.containerEnvironments.dockerLocal.resilience.restoreConfirmationToken, '--confirm-replace-docker-local-data');
assert.equal(projectContract.containerEnvironments.dockerLocal.resilience.volumes.mediaStaged, 'nodics-kickoff-docker-local-media-staged');
assert.equal(projectContract.containerEnvironments.dockerLocal.resilience.volumes.mediaOnline, 'nodics-kickoff-docker-local-media-online');
assert.match(qualification, /recovery-point-objective/);
assert.match(qualification, /recovery-time-objective/);
assert.match(qualification, /unpublished-staged-isolation/);
assert.match(acceptance, /--expect-documentation-not-installed/);
assert.match(acceptance, /--qualify-documentation-rollback/);
assert.match(bootstrapAcceptance, /optional documentation packs are NOT_INSTALLED/);
assert.match(bootstrapAcceptance, /documentation rollback to prior Online versions/);
assert.match(qualification, /redis-sentinel-promotion-observed/);
assert.match(qualification, /CLIENT', 'PAUSE'/);
assert.match(soak, /NODICS_DOCKER_SOAK_SECONDS/);
assert.match(soak, /NODICS_DOCKER_SOAK_REQUEST_INTERVAL_MS/);
assert.equal(projectContract.containerEnvironments.dockerLocal.soak.acceptanceCommand, 'docker-local:acceptance');
assert.match(frameworkQualification, /cmsPublicationManifestContract\.test\.js/);
assert.match(frameworkQualification, /cmsPublicationOutboxReliability\.test\.js/);
assert.match(frameworkQualification, /directBusinessDatabaseCrud: false/);
assert.match(packageDefinition.scripts['docker-local:backup'], /nodics-project\.js project:run docker-local:backup/);
assert.equal(projectContract.tooling.commands['docker-local:backup'].command, 'project:container-resilience');
assert.equal(projectContract.tooling.commands['docker-local:backup'].home, 'project');
assert.deepEqual(projectContract.tooling.commands['docker-local:backup'].args, ['dockerLocal', 'backup']);
assert.deepEqual(projectContract.tooling.commands['docker-local:verify'].args, ['dockerLocal', 'verify']);
assert.deepEqual(projectContract.tooling.commands['docker-local:restore'].args, ['dockerLocal', 'restore']);
assert.match(packageDefinition.scripts['docker-local:resilience'], /nodics-project\.js project:run docker-local:resilience/);
assert.equal(projectContract.tooling.commands['docker-local:resilience'].command, 'project:container-qualification');
assert.deepEqual(projectContract.tooling.commands['docker-local:resilience'].args, ['dockerLocal', 'resilience-qualification']);
assert.equal(packageDefinition.scripts['docker-local:publishing-interruption-contracts'],
  'node .nodics/framework/nodics.foundation/modules/nTooling/bin/nodics-project.js project:run qualification:publishing-interruption-contracts');
assert.equal(projectContract.tooling.commands['qualification:publishing-interruption-contracts'].type, 'frameworkCommand');
assert.match(packageDefinition.scripts['docker-local:soak'], /nodics-project\.js project:run docker-local:soak/);
assert.equal(projectContract.tooling.commands['docker-local:soak'].command, 'project:container-qualification');
assert.deepEqual(projectContract.tooling.commands['docker-local:soak'].args, ['dockerLocal', 'soak']);

console.log('kickoffDockerLocal resilience contract validated');
