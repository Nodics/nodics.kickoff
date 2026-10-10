/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/circaMonetaryNativeAdoption @description Checks approved native admission selections, never installed financial qualification. @owner nodics.kickoff @layer test */
const test = require("node:test"), assert = require("node:assert/strict");
const { loadRuntime } = require("./helpers/configuration");
const proposal = require("../modules/circa.ewaste/test/fixtures/circaMonetaryOutletProposal.json");

test("monetary admission retains the exact original Commerce runtime and three reviewed issuer scopes", () => {
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
  assert.equal(p.promotion.merchantBenefits.qualified, true);
  assert.equal(p.promotion.merchantBenefits.pricedSource.qualified, true);
  assert.equal(p.promotion.merchantBenefits.pricedSource.allowInsecureLoopback, true);
  assert.equal(p.promotion.merchantBenefits.itemEvidenceMode, "LOCAL_SIMULATION");
  assert.equal(p.digitalCore.merchantRedemption.pricedProvider.qualified, true);
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
    assert.equal(p.identityGovernance.migration.localRuntimeDeploymentGrantPermissions.includes("commerce.pricing.merchant.evidence"), false);
  }
});
