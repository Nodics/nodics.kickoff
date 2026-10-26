/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test @description Source-only mock sample selection and actual runtime inheritance; no installed adoption. @owner circa.ewaste @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const manifest = require("../data/manifest.json");
const root = path.resolve(__dirname, "../data");
const sample = "sample-v001/partner-reward-mock/";
const hash = file => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, file))).digest("hex");

test("E11 Local overrides only two values and inherits every mock provider default", () => {
  const local = require("../../../envs/kickoffLocal/config/properties").loyalty.partnerRewardConversion;
  const owner = require(path.join(frameworkRoot, "nodics.loyalty/modules/loyaltyWallet/config/properties")).loyalty.partnerRewardConversion;
  assert.deepEqual(local, { enabled: true, mock: { enabled: true } });
  assert.equal(owner.enabled, false);
  assert.equal(owner.mock.enabled, false);
  assert.deepEqual(loadRuntime("loyaltyServer", "kickoffLocal").loyalty.partnerRewardConversion,
    { ...owner, enabled: true, mock: { ...owner.mock, enabled: true } });
  assert.deepEqual(loadRuntime("loyaltyServer", "kickoffDockerLocal").loyalty.partnerRewardConversion, owner);
});

test("E11 sample selects only the two simulated business bindings with current hashes", () => {
  const section = manifest.sections.circaPartnerRewardMock;
  assert.equal(section.selectionPolicy, "EXPLICIT");
  assert.equal(section.kind, "DATA_RELEASE");
  assert.equal(section.dataType, "sample");
  assert.equal(section.sourceRoot, "sample-v001");
  assert.equal(section.version, "0.0.1");
  assert.equal(section.destinationRole, "LOYALTY");
  assert.equal(section.lifecycle, "REFERENCE");
  assert.equal(section.owningDomain, "loyaltyWallet");
  assert.deepEqual(section.environmentScope, ["ALL"]);
  assert.deepEqual(Object.keys(section.files).sort(), [
    sample + "headers/circaPartnerRewardMockHeader.js",
    sample + "records/circaPartnerRewardMockAccountData.js",
    sample + "records/circaPartnerRewardMockIntegrationData.js",
  ]);
  for (const [file, checksum] of Object.entries(section.files)) assert.equal(hash(file), checksum, file);
  const header = require(path.join(root, sample, "headers/circaPartnerRewardMockHeader"));
  assert.deepEqual(Object.keys(header), ["loyaltyWallet"]);
  assert.deepEqual(Object.values(header.loyaltyWallet).map(row => row.options.schemaName).sort(),
    ["loyaltyPartnerRewardAccount", "loyaltyPartnerRewardIntegration"]);
  const integration = Object.values(require(path.join(root, sample, "records/circaPartnerRewardMockIntegrationData")))[0];
  const account = Object.values(require(path.join(root, sample, "records/circaPartnerRewardMockAccountData")))[0];
  assert.equal(integration.providerKey, "mock");
  assert.deepEqual(integration.sourceRewards, [{ programCode: "circa", rewardTypeCode: "points" }]);
  assert.deepEqual(integration.rules, { simulated: true, testOnly: true });
  assert.equal(account.ownerType, "ENTERPRISE");
  assert.equal(account.ownerCode, "GREENPERKS_RETAIL");
  assert.equal(account.integrationCode, integration.code);
  assert.equal(account.partnerEnterpriseCode, "GREENPERKS_ONLINE");
  assert.equal(integration.partnerEnterpriseCode, "GREENPERKS_ONLINE");
  for (const field of ["accountReference", "verificationReference"]) assert.match(account[field], /^simulated:/);
  for (const field of ["termsReference", "providerBindingReference"]) assert.match(integration[field], /^simulated:/);
});

test("Program eligibility is source-only and excluded from the dedicated mock import", () => {
  const file = "sample-v001/loyalty/records/circaLoyaltyProgramData.js";
  const program = Object.values(require(path.join(root, file))).find(row => row.code === "circa");
  assert.deepEqual(program.partnerConversionRewardTypeCodes, ["points"]);
  assert.equal(manifest.sections.loyalty.files[file], hash(file));
  assert.equal(manifest.sections.circaPartnerRewardMock.files[file], undefined);
});

test("canonical release discovery resolves the exact E11 selector without imports", () => {
  const ew = path.join(frameworkRoot, "nodics.accelerators/modules/waste/modules/eWaste");
  const createHarness = require(path.join(ew, "test/fixtures/referenceReleaseHarness"));
  const state = createHarness({ "circa.ewaste": { name: "circa.ewaste", index: "3100.90", path: path.resolve(__dirname, "..") } });
  const releases = state.service.discoverReleases("sample");
  const matches = releases.filter(row => row.releaseCode === "circa.ewaste:circaPartnerRewardMock");
  assert.equal(matches.length, 1);
  assert.ok(!matches[0].invalidManifest);
  assert.equal(matches[0].version, "0.0.1");
  assert.equal(state.imports.length, 0);
});
