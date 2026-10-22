/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";

/**
 * @module agora.apparel/test/apparelStoreReferenceForwardRelease
 * @description Verifies the governed Agora Store ownership repair and its exact application selection.
 * @layer test
 * @owner agora.apparel
 */
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const moduleRoot = path.resolve(__dirname, "..");
const dataRoot = path.join(moduleRoot, "data");
const manifest = require("../data/manifest.json");
const source = require("../data/sample-v001/store/records/agoraApparelStoreData");
const header = require("../data/sample-v001/store/headers/agoraApparelStoreReferenceHeader");
const packages = require("../config/properties")
  .backofficeApplicationInitialization.runtimeRoleProfiles.PLATFORM.profiles
  .agoraapparel.dataPackages.value;
const { loadRuntime } = require("../../../test/helpers/configuration");

const checksum = (file) =>
  crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");

test("forward Store release preserves the frozen catalogue and seals exact source bytes", () => {
  const frozen = manifest.sections.agoraApparelCommerceCatalog;
  const forward = manifest.sections.agoraApparelStoreReference;

  assert.equal(frozen.version, "0.0.1");
  assert.equal(frozen.sourceRoot, "sample-v001");
  assert.equal(
    frozen.files["sample-v001/commerce/records/agoraApparelStoreData.js"],
    "fb02a783d809179fdcd2ea5a071d1b6ad7631c3ce905b2ca22cc1ebcc0c8d45c",
  );
  assert.equal(
    checksum(path.join(dataRoot, "sample-v001/commerce/records/agoraApparelStoreData.js")),
    frozen.files["sample-v001/commerce/records/agoraApparelStoreData.js"],
  );

  assert.deepEqual(
    {
      version: forward.version,
      sourceRoot: forward.sourceRoot,
      lifecycle: forward.lifecycle,
      destinationRole: forward.destinationRole,
      owningDomain: forward.owningDomain,
      selectionPolicy: forward.selectionPolicy,
      versioningPolicy: forward.versioningPolicy,
      publicationPolicy: forward.publicationPolicy,
    },
    {
      version: "0.0.2",
      sourceRoot: "sample-v001",
      lifecycle: "REFERENCE",
      destinationRole: "COMMERCE",
      owningDomain: "store",
      selectionPolicy: "EXPLICIT",
      versioningPolicy: "NONE",
      publicationPolicy: "NONE",
    },
  );
  assert.deepEqual(Object.keys(forward.files).sort(), [
    "sample-v001/store/headers/agoraApparelStoreReferenceHeader.js",
    "sample-v001/store/records/agoraApparelStoreData.js",
  ]);
  for (const [file, hash] of Object.entries(forward.files)) {
    assert.equal(checksum(path.join(dataRoot, file)), hash, file);
  }
});

test("forward Store source uses only the canonical Profile Enterprise reference", () => {
  assert.deepEqual(Object.keys(header), ["store"]);
  assert.deepEqual(header.store.agoraApparelStoreData, {
    options: {
      enabled: true,
      schemaName: "store",
      operation: "saveAll",
      dataFilePrefix: "agoraApparelStoreData",
    },
    query: { code: "$code", tenant: "$tenant" },
  });

  assert.deepEqual(Object.keys(source), ["record0"]);
  assert.equal(source.record0.code, "agoraMainStore");
  assert.equal(source.record0.tenant, "default");
  assert.deepEqual(source.record0.enterpriseRef, {
    moduleName: "profile",
    schemaName: "enterprise",
    code: "default",
  });
  assert.equal(Object.hasOwn(source.record0, "enterpriseCode"), false);
});

test("application initialization selects the Online Store repair before Staged catalogue data", () => {
  const storeIndex = packages.findIndex(
    (item) => item.code === "agora.apparel:agoraApparelStoreReference",
  );
  const catalogueIndex = packages.findIndex(
    (item) => item.code === "agora.apparel:agoraApparelCommerceCatalog",
  );
  assert(storeIndex >= 0);
  assert(storeIndex < catalogueIndex);
  assert.deepEqual(packages[storeIndex], {
    code: "agora.apparel:agoraApparelStoreReference",
    kind: "Canonical Store master",
    required: true,
    trigger: "USER",
    dataType: "sample",
    targetServer: "commerce",
    targetRuntimeRole: "COMMERCE",
  });

  const runtime = loadRuntime("commerceServer", "kickoffLocal", {
    NODICS_AGORA_DOMAINS: "apparel",
  });
  assert.deepEqual(
    runtime.data.dataReleases.contributions.filter(
      (item) => item.moduleName === "agora.apparel",
    ),
    [{
      moduleName: "agora.apparel",
      sections: [
        "agoraApparelStoreReference",
        "agoraApparelOpeningStock",
        "agoraApparelPromotionSetup",
      ],
    }],
  );
});
