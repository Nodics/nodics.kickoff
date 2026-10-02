/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaProfileForwardRelease @description Existing-only customer placement successor and unchanged retained source adoption. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "../data");
const manifest = require("../data/manifest.json");
const policy = require("../../../../nodics.ai/nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService");
const original = require("../data/sample-v001/profile/headers/circaProfileSampleHeader");
const current = require("../data/sample-v007/profile/headers/circaProfileSampleHeader");

test("forward Profile release retains exact historical bytes and reference lifecycle", () => {
  policy.validateRetainedRoots(root, manifest);
  const retained = manifest.retainedRoots["sample-v001"].sections.profile;
  assert.equal(retained.version, "0.0.4");
  assert.equal(Object.keys(retained.files).length, 3);
  for (const [file, checksum] of Object.entries(retained.files))
    assert.equal(
      crypto
        .createHash("sha256")
        .update(fs.readFileSync(path.join(root, file)))
        .digest("hex"),
      checksum,
      "Retained source checksum must remain unchanged",
    );
  const release = manifest.sections.profile;
  assert.equal(release.version, "0.0.5");
  assert.equal(release.sourceRoot, "sample-v007");
  assert.equal(release.selectionPolicy, "EXPLICIT");
  assert.equal(release.lifecycle, "REFERENCE");
  assert.equal(release.versioningPolicy, "NONE");
  assert.equal(release.destinationRole, "PLATFORM");
});

test("only customer signup receives approved explicit enterprise; approved record bytes remain identical", () => {
  const expected = structuredClone(original);
  expected.profile.circaCustomerData.options.enterpriseCode = "default";
  assert.deepEqual(current, expected);
  assert.equal(
    current.profile.circaAddressData.options.enterpriseCode,
    undefined,
  );
  for (const name of ["circaAddressData.js", "circaCustomerData.js"])
    assert(
      fs
        .readFileSync(path.join(root, "sample-v001/profile/records", name))
        .equals(
          fs.readFileSync(path.join(root, "sample-v007/profile/records", name)),
        ),
      "No identity, credential, consent or business data may change",
    );
  const packages = require("../config/properties")
    .backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  const selected = packages.find(
    (item) => item.code === "circa.ewaste:profile",
  );
  assert.equal(selected.targetRuntimeRole, "PLATFORM");
  assert.equal(selected.trigger, "USER");
  assert.equal(selected.required, true);
});
