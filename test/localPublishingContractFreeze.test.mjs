/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import configuration from './helpers/configuration.js';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const frameworkRoot = configuration.frameworkRoot;
const releases = [
  { pack: 'nodicsDocumentation', file: path.join(frameworkRoot, 'nodics.docs/data/manifest.json'), section: 'documentation' },
  { pack: 'kickoffDocumentation', file: path.join(projectRoot, 'data/manifest.json'), section: 'documentation' },
  { baseline: 'nexus', file: path.join(frameworkRoot, 'nodics.accelerators/modules/nexus/modules/nexus.web/data/manifest.json'), section: 'nexusCorporateSite' },
];

for (const environment of ['kickoffLocal', 'kickoffDockerLocal']) {
  const staged = configuration.loadRuntime('wcmsStagedServer', environment);
  const online = configuration.loadRuntime('wcmsOnlineServer', environment);
  assert.equal(staged.cms.publication.runtimeRole, 'STAGED');
  assert.equal(online.cms.publication.runtimeRole, 'ONLINE');
  assert.equal(staged.publishEnabled, true);
  assert.equal(online.publishEnabled, false);
  assert.equal(online.cms.publication.baselines?.kickoffdocs, undefined,
    'Customer documentation authoring selection must not leak into Online');
  assert.notEqual(staged.database.default.mongodb.master.databaseName, online.database.default.mongodb.master.databaseName);
  assert.equal(configuration.loadRuntime('processServer', environment).runtimeRole.code, 'PROCESS');
  assert.equal(staged.data.dataReleases.initializationProfiles.localWcmsFoundation.enabled, true);
  for (const release of releases) {
    const manifest = readJson(release.file);
    const baseline = release.baseline ? staged.cms.publication.baselines[release.baseline]
      : Object.values(staged.cms.publication.baselines).find(value => value.contentPackCode === release.pack);
    assert.equal(baseline?.releaseVersion, manifest.sections[release.section].version,
      environment + ' ' + (release.pack || release.baseline) + ' baseline must match its selected immutable release');
  }
}

console.log('Kickoff publication choices and release pins validated');
