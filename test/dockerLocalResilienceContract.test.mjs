#!/usr/bin/env node

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import assert from 'node:assert/strict';
import fs from 'node:fs';

const lifecycle = fs.readFileSync(new URL('../scripts/docker-local-resilience.mjs', import.meta.url), 'utf8');
const qualification = fs.readFileSync(new URL('../scripts/docker-local-resilience-qualification.mjs', import.meta.url), 'utf8');
const soak = fs.readFileSync(new URL('../scripts/docker-local-soak-qualification.mjs', import.meta.url), 'utf8');
const interruption = fs.readFileSync(new URL('../scripts/docker-local-publishing-interruption-contracts.mjs', import.meta.url), 'utf8');
const packageDefinition = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

assert.match(lifecycle, /mongodump/);
assert.match(lifecycle, /mongorestore/);
assert.match(lifecycle, /sha256/);
assert.match(lifecycle, /confirm-replace-docker-local-data/);
assert.match(lifecycle, /nodics-kickoff-docker-local-media-staged/);
assert.match(lifecycle, /nodics-kickoff-docker-local-media-online/);
assert.match(qualification, /recovery-point-objective/);
assert.match(qualification, /recovery-time-objective/);
assert.match(qualification, /unpublished-staged-isolation/);
assert.match(qualification, /redis-sentinel-promotion-observed/);
assert.match(qualification, /CLIENT', 'PAUSE'/);
assert.match(soak, /NODICS_DOCKER_SOAK_SECONDS/);
assert.match(soak, /NODICS_DOCKER_SOAK_REQUEST_INTERVAL_MS/);
assert.match(soak, /docker-local-acceptance\.mjs/);
assert.match(interruption, /cmsPublicationManifestContract\.test\.js/);
assert.match(interruption, /cmsPublicationOutboxReliability\.test\.js/);
assert.match(interruption, /directBusinessDatabaseCrud: false/);
assert.equal(packageDefinition.scripts['docker-local:backup'], 'node scripts/docker-local-resilience.mjs backup');
assert.equal(packageDefinition.scripts['docker-local:resilience'], 'node scripts/docker-local-resilience-qualification.mjs');
assert.equal(packageDefinition.scripts['docker-local:publishing-interruption-contracts'],
  'node scripts/docker-local-publishing-interruption-contracts.mjs');
assert.equal(packageDefinition.scripts['docker-local:soak'], 'node scripts/docker-local-soak-qualification.mjs');

console.log('kickoffDockerLocal resilience contract validated');
