/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import configuration from "./helpers/configuration.js";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const frameworkRoot = configuration.frameworkRoot;
const require = createRequire(import.meta.url);
const contentPacks = require(
  path.join(
    frameworkRoot,
    "nodics.foundation/modules/nData/nImport/import/src/service/contentPack/defaultContentPackService.js",
  ),
);
const baselines = require(
  path.join(
    frameworkRoot,
    "nodics.wcms/modules/cms/src/service/publication/defaultCmsPublicationBaselineService.js",
  ),
);
const releases = [
  {
    pack: "axisDocumentation",
    file: path.join(frameworkRoot, "nodics.platform/modules/axis/data/manifest.json"),
    section: "documentation",
  },
  {
    pack: "nodicsDocumentation",
    file: path.join(frameworkRoot, "nodics.docs/data/manifest.json"),
    section: "documentation",
  },
  {
    pack: "kickoffDocumentation",
    file: path.join(projectRoot, "data/manifest.json"),
    section: "documentation",
  },
  {
    baseline: "nexus",
    file: path.join(
      frameworkRoot,
      "nodics.accelerators/modules/nexus/modules/nexus.web/data/manifest.json",
    ),
    section: "nexusCorporateSite",
  },
  {
    baseline: "axis",
    file: path.join(
      frameworkRoot,
      "nodics.platform/modules/axis/data/manifest.json",
    ),
    section: "axisBaseline",
  },
  {
    baseline: "axisassistant",
    file: path.join(
      frameworkRoot,
      "nodics.platform/modules/axis/data/manifest.json",
    ),
    section: "core-v001",
  },
  ...["apparel", "electronics", "telco"].map((domain) => ({
    baseline: "agora" + domain,
    file: path.join(
      projectRoot,
      "modules/agora." + domain + "/data/manifest.json",
    ),
    section:
      "agora" + domain[0].toUpperCase() + domain.slice(1) + "ContentCatalog",
  })),
  {
    baseline: "circa",
    file: path.join(projectRoot, "modules/circa.ewaste/data/manifest.json"),
    section: "content",
  },
];

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  const staged = configuration.loadRuntime("wcmsStagedServer", environment);
  const online = configuration.loadRuntime("wcmsOnlineServer", environment);
  assert.equal(staged.cms.publication.runtimeRole, "STAGED");
  assert.equal(online.cms.publication.runtimeRole, "ONLINE");
  assert.equal(staged.publishEnabled, true);
  assert.equal(online.publishEnabled, false);
  assert.equal(
    online.cms.publication.baselines?.kickoffdocs,
    undefined,
    "Customer documentation authoring selection must not leak into Online",
  );
  assert.notEqual(
    staged.database.default.mongodb.master.databaseName,
    online.database.default.mongodb.master.databaseName,
  );
  assert.equal(
    configuration.loadRuntime("processServer", environment).runtimeRole.code,
    "PROCESS",
  );
  assert.equal(
    staged.data.dataReleases.initializationProfiles.localWcmsFoundation.enabled,
    true,
  );
  for (const release of releases) {
    const manifest = readJson(release.file);
    const baseline = release.baseline
      ? staged.cms.publication.baselines[release.baseline]
      : Object.values(staged.cms.publication.baselines).find(
          (value) => value.contentPackCode === release.pack,
        );
    if (
      release.baseline === "axisassistant" &&
      environment === "kickoffDockerLocal"
    ) {
      assert.equal(
        baseline.releaseVersion,
        undefined,
        "Docker does not select the optional assistant release; owner registration must not qualify it",
      );
      continue;
    }
    assert.equal(
      baseline?.releaseVersion,
      manifest.sections[release.section].version,
      environment +
        " " +
        (release.pack || release.baseline) +
        " baseline must match its selected immutable release",
    );
    if (release.pack) {
      const previousConfig = global.CONFIG,
        previousNodics = global.NODICS,
        previousService = global.SERVICE;
      try {
        global.CONFIG = { get: (key) => staged[key] };
        global.SERVICE = { DefaultContentPackService: contentPacks };
        global.NODICS = {
          getEnvironmentPath: () => projectRoot,
          getNodicsHome: () => path.join(frameworkRoot, "nodics.foundation"),
        };
        // Inspect actual source files and hashes; never import or query runtime state.
        const available = contentPacks.inspectRelease(
          contentPacks.resolvePackContext(release.pack),
        );
        assert.equal(
          available.available,
          true,
          environment + " " + release.pack + " source must be available",
        );
        assert.equal(available.version, baseline.releaseVersion);
        assert.equal(available.manifest.destinationRole, "WCMS_STAGED");
        assert.equal(available.manifest.lifecycle, "PUBLISHABLE");
        assert.equal(
          available.manifest.initialPublicationPolicy,
          "ADMIN_INITIATED",
        );
        const baselineCode = Object.keys(staged.cms.publication.baselines).find(
          (code) => staged.cms.publication.baselines[code] === baseline,
        );
        assert.ok(
          available.manifest.sites.includes(
            baselines.descriptor(baselineCode).rootCode,
          ),
        );
        assert.equal(
          available.contentPath,
          path.resolve(
            path.dirname(release.file),
            available.manifest.contentPath,
          ),
          "The configured pack must resolve its current manifest-owned content root",
        );
      } finally {
        global.CONFIG = previousConfig;
        global.NODICS = previousNodics;
        global.SERVICE = previousService;
      }
    }
  }
}

console.log("Kickoff publication choices and release pins validated");
