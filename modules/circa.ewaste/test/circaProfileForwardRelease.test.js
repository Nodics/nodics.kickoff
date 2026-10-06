/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaProfileForwardRelease @description Verifies the unified v001 Profile sample selector and first-start setup contract. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "../data");
const manifest = require("../data/manifest.json");
const current = require("../data/sample-v001/profile/headers/circaProfileSampleHeader");
const customers = require("../data/sample-v001/profile/records/circaCustomerData");

test("imported customers satisfy Profile self-read ownership after authentication", () => {
  for (const customer of Object.values(customers)) {
    assert.equal(customer.ownerId, customer.loginId);
    assert.equal(customer.ownerType, "customer");
    assert.equal(customer.principalType, "customer");
    assert.ok(customer.code);
  }
});

test("profile sample is selected as unified v001 first-start data", () => {
  const release = manifest.sections.profile;
  assert.equal(release.version, "0.0.1");
  assert.equal(release.sourceRoot, "sample-v001");
  assert.equal(release.selectionPolicy, "EXPLICIT");
  assert.equal(release.lifecycle, "REFERENCE");
  assert.equal(release.versioningPolicy, "NONE");
  assert.equal(release.destinationRole, "PLATFORM");
  for (const [file, checksum] of Object.entries(release.files))
    assert.equal(
      crypto
        .createHash("sha256")
        .update(fs.readFileSync(path.join(root, file)))
        .digest("hex"),
      checksum,
      file,
    );
});

test("customer sample keeps generated Profile import semantics in v001", () => {
  assert.equal(current.profile.circaCustomerData.options.operation, "saveAll");
  assert.deepEqual(current.profile.circaCustomerData.options.userGroups, [
    "adminGroup",
  ]);
  assert.equal(current.profile.circaCustomerData.query.loginId, "$loginId");
  assert.equal(
    current.profile.circaAddressData.options.enterpriseCode,
    undefined,
  );
  const packages = require("../config/properties")
    .backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  const selected = packages.find(
    (item) => item.code === "circa.ewaste:profile",
  );
  assert.equal(selected.targetRuntimeRole, "PLATFORM");
  assert.equal(selected.trigger, "USER");
  assert.equal(
    selected.required,
    true,
    "The Circa demo requires its customer identities",
  );
});
