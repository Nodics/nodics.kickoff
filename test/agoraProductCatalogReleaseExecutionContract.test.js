/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

"use strict";

const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

/**
 * @module kickoff/test/agoraProductCatalogReleaseExecutionContract
 * @description Verifies the Agora Product seed release is discoverable, Commerce-Staged gated, and executable through nImport without a live database.
 * @layer test
 * @owner agora.apparel
 */

const projectRoot = path.resolve(__dirname, "..");
const { frameworkRoot } = require('./helpers/configuration');
const moduleRoot = path.join(projectRoot, "modules/agora.apparel");
const releaseExecution = require(path.join(
  frameworkRoot, "nodics.foundation/modules/nData/nImport/import/test/helpers/releaseExecution",
));
let importRequests;

/** Supplies only Agora's real module and selected release destination to the owner harness. */
function service() {
  const fixture = releaseExecution({
    modules: { "agora.apparel": {
      name: "agora.apparel", path: moduleRoot, parent: "kickoffModules",
      canonicalIdentity: "kickoffModules/agora.apparel",
      metaData: { nodics: { displayName: "Agora Apparel" } },
    } },
    environment: "kickoffLocal",
    runtimeRole: "COMMERCE_STAGED",
  });
  importRequests = fixture.imports;
  return fixture.service;
}

test("Agora Apparel commerce catalog release follows Commerce Staged nImport execution contract", async () => {
  const dataReleaseService = service();
  const releases = dataReleaseService.discoverReleases("sample");
  const release = releases.find(
    (item) => item.releaseCode === "agora.apparel:agoraApparelCommerceCatalog",
  );

  assert(release, "agoraApparelCommerceCatalog release should be discoverable");
  assert.equal(release.dataType, "sample");
  assert.equal(release.sourceRoot, "sample-v005");
  assert.equal(release.version, "0.0.10");
  assert.equal(release.lifecycle, "PUBLISHABLE");
  assert.equal(release.destinationRole, "COMMERCE_STAGED");
  assert.deepEqual(release.environmentScope, [
    "LOCAL",
    "LOCAL_PRODUCTION_SIMULATION",
  ]);
  assert(
    release.declaredFiles.some((file) =>
      file.endsWith("agoraApparelProductData.js"),
    ),
  );
  assert(
    release.declaredFiles.some((file) =>
      file.endsWith("agoraApparelPriceRowData.js"),
    ),
  );
  assert(
    !release.declaredFiles.some((file) =>
      file.endsWith("agoraApparelInventoryBalanceData.js"),
    ),
  );
  assert(
    release.declaredFiles.some((file) =>
      file.endsWith("agoraApparelPromotionData.js"),
    ),
  );
  assert(
    !release.declaredFiles.some((file) =>
      file.endsWith("agoraApparelCouponBatchData.js"),
    ),
  );
  assert(
    !release.declaredFiles.some((file) =>
      file.endsWith("agoraApparelCouponData.js"),
    ),
  );
  assert.equal(dataReleaseService.validateDestination(release), true);

  const releaseRequest = {
    dataType: "sample",
    releaseCodes: ["agora.apparel:agoraApparelCommerceCatalog"],
    expectedReleases: {
      "agora.apparel:agoraApparelCommerceCatalog": release.version,
    },
  };
  await dataReleaseService.preflight({ tenant: "default", releaseRequest });
  await dataReleaseService.execute({
    tenant: "default",
    releaseRequest,
  });

  assert.deepEqual(importRequests[0].modules, ["agora.apparel"]);
  assert.equal(
    importRequests[0].dataReleasePlan[0].releaseCode,
    "agora.apparel:agoraApparelCommerceCatalog",
  );
  assert.equal(importRequests[0].dataReleasePlan[0].sourceRoot, "sample-v005");
  assert(
    importRequests[0].dataReleasePlan[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelProductData.js"),
    ),
  );
});

test("Agora domain Commerce releases separate each selected domain import plan", async () => {
  const dataReleaseService = service();
  const releases = dataReleaseService
    .discoverReleases("sample")
    .filter((item) => item.destinationRole === "COMMERCE_STAGED");
  const releaseCodes = releases.map((item) => item.releaseCode).sort();

  assert.deepEqual(releaseCodes, ["agora.apparel:agoraApparelCommerceCatalog"]);
  assert(
    releases[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelProductData.js"),
    ),
  );
  assert(
    releases[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelPriceBookData.js"),
    ),
  );
  assert(
    !releases[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelInventoryBalanceData.js"),
    ),
  );
  assert(
    releases[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelPromotionData.js"),
    ),
  );
  assert(
    !releases[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelCouponBatchData.js"),
    ),
  );
  assert(
    !releases[0].declaredFiles.some((file) =>
      file.endsWith("agoraApparelCouponData.js"),
    ),
  );

  const releaseRequest = {
    dataType: "sample",
    releaseCodes,
    expectedReleases: Object.fromEntries(
      releases.map((release) => [release.releaseCode, release.version]),
    ),
  };
  await dataReleaseService.execute({
    tenant: "default",
    releaseRequest,
  });

  assert.deepEqual(
    importRequests[0].dataReleasePlan.map((item) => item.releaseCode).sort(),
    releaseCodes,
  );
});
