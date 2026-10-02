/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import configuration from './helpers/configuration.js';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const frameworkRoot = configuration.frameworkRoot;
const require = createRequire(import.meta.url);
const contentPacks = require(path.join(frameworkRoot,
  'nodics.foundation/modules/nData/nImport/import/src/service/contentPack/defaultContentPackService.js'));
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
    if (release.pack) {
      const previousConfig = global.CONFIG, previousNodics = global.NODICS;
      try {
        global.CONFIG = { get: key => staged[key] };
        global.NODICS = {
          getEnvironmentPath: () => projectRoot,
          getNodicsHome: () => path.join(frameworkRoot, 'nodics.foundation'),
        };
        // Inspect actual source files and hashes; never import or query runtime state.
        const available = contentPacks.inspectRelease(contentPacks.resolvePackContext(release.pack));
        assert.equal(available.available, true, environment + ' ' + release.pack + ' source must be available');
        assert.equal(available.version, baseline.releaseVersion);
        assert.equal(available.manifest.destinationRole, 'WCMS_STAGED');
        assert.equal(available.manifest.lifecycle, 'PUBLISHABLE');
        assert.equal(available.manifest.initialPublicationPolicy, 'ADMIN_INITIATED');
        assert.ok(available.manifest.sites.includes(baseline.rootCode));
        assert.equal(available.contentPath, path.resolve(path.dirname(release.file), available.manifest.contentPath),
          'The configured pack must resolve its current manifest-owned content root');
      } finally {
        global.CONFIG = previousConfig;
        global.NODICS = previousNodics;
      }
    }
  }
}

console.log('Kickoff publication choices and release pins validated');
