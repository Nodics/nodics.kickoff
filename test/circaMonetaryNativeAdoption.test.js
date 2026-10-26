/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
// Frozen reviewed fixture, not deployed authority or configuration-derived access.
const runtimePermissions = require("./fixtures/kickoffNativeRuntimePermissions.json");

/** @module kickoff/test/circaMonetaryNativeAdoption @description Checks approved native admission selections, never installed financial qualification. @owner nodics.kickoff @layer test */
const test = require("node:test"), assert = require("node:assert/strict");
const { loadRuntime } = require("./helpers/configuration");
const proposal = require("../modules/circa.ewaste/test/fixtures/circaMonetaryOutletProposal.json");

test("Pricing admission retains reviewed issuer scopes without selecting integrated coupon redemption", () => {
  const p = loadRuntime("commerceServer", "kickoffLocal"), policy = p.pricing.merchantEvidence;
  assert.equal(policy.qualified, true);
  assert.equal(policy.businessCallers.enabled, true);
  assert.equal(policy.businessCallers.runtimeRole, "COMMERCE");
  assert.deepEqual(policy.businessCallers.callers.map(row => row.enterpriseCode), proposal.issuerPacks.map(row => row.issuerEnterpriseCode));
  for (const row of policy.businessCallers.callers) assert.deepEqual(row, {
    tenant: "default", principalEnterpriseCode: "default", enterpriseCode: row.enterpriseCode,
    serviceId: "apiAdmin", projectCode: "nodics.kickoff", environmentCode: "kickoffLocal", serverCode: "commerceServer",
    instanceCode: p.runtimeIdentity.instanceCode, assignmentCode: "kickoff-local-commerce-runtime-deployment"
  });
  assert.equal(p.apiExposure.categories.commerceMerchantPricing.enabled, true);
  assert.equal(p.promotion.merchantBenefits.enabled, false);
  assert.equal(p.promotion.merchantBenefits.qualified, false);
  assert.equal(p.promotion.merchantBenefits.pricedSource.qualified, false);
  assert.equal(p.promotion.merchantBenefits.pricedSource.allowInsecureLoopback, false);
  assert.equal(p.promotion.merchantBenefits.itemEvidenceMode, "VERIFIED");
  assert.equal(p.digitalCore.merchantRedemption.pricedProvider.qualified, false);
  assert.equal(p.promotion.merchantBenefits.itemEvidenceService, null);
  assert.equal(p.digitalCore.merchantRedemption.providerService, "DefaultDigitalCommerceMerchantScreenProviderService");
  assert.equal(p.databaseTransactions.enabled, true);
  assert.equal(p.databaseTransactions.failClosed, true);
});

test("monetary selection does not enable Docker or sibling owner integrations", () => {
  for (const [server, environment] of [["commerceServer", "kickoffDockerLocal"], ["commerceStagedServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"], ["wasteServer", "kickoffLocal"]]) {
    const p = loadRuntime(server, environment);
    assert.notEqual(p.pricing?.merchantEvidence?.businessCallers?.enabled, true);
    assert.notEqual(p.apiExposure.categories.commerceMerchantPricing?.enabled, true);
    assert.notEqual(p.digitalCore?.merchantRedemption?.pricedProvider?.qualified, true);
    assert.equal((environment === "kickoffLocal" ? runtimePermissions[server] : []).includes("commerce.pricing.merchant.evidence"), false);
  }
});
