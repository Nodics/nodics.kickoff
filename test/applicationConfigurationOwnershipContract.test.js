/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/applicationConfigurationOwnershipContract @description Verifies customer application selections, policy and deployment bindings without starting listeners. @owner nodics.kickoff */
const assert = require("node:assert/strict");
const test = require("node:test");
const { loadRuntime, activeModuleNames, corsOrigins } = require("./helpers/configuration");

test("Local communication policy is role-scoped without activating Circa on Engagement", () => {
  const local = loadRuntime("engagementServer");
  const expected = require("../envs/kickoffLocal/config/properties")
    .communication.runtimeRoleProfiles.ENGAGEMENT;
  assert.deepEqual(local.communication.templates.WASTE_REVIEW_OUTCOME_V1,
    expected.templates.WASTE_REVIEW_OUTCOME_V1);
  assert.deepEqual(local.communication.trustedSourceModules, ["eWaste"]);
  assert.deepEqual(local.communication.providers.TELEGRAM.credentialReferences, ["telegram.bot.circa"]);
  for (const name of ["circa.ewaste", "eWaste", "wasteCore"]) {
    assert.equal(activeModuleNames(local).includes(name), false);
  }
  for (const [server, environment] of [["platformServer", "kickoffLocal"],
    ["engagementServer", "kickoffDockerLocal"]]) {
    const runtime = loadRuntime(server, environment);
    assert.equal(runtime.communication?.templates?.WASTE_REVIEW_OUTCOME_V1, undefined);
  }
});

test("Customer Engagement opt-ins apply only to the selected role and allow later disablement", () => {
  const path = require("node:path");
  const { frameworkRoot } = require("./helpers/configuration");
  const binding = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
  const loader = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService"));
  const core = require("../modules/kickoffCore/config/properties");
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const runtime = loadRuntime("engagementServer", environment);
    for (const capability of ["testimonial", "customerReview", "customerFeedback"]) {
      assert.equal(runtime.engagement.capabilities[capability], true);
    }
    assert.equal(runtime.customerFeedback.enabled, true);
    assert.equal(require(`../envs/${environment}/engagementServer/config/properties`).engagement, undefined);
  }
  const policy = { engagement: core.engagement, customerFeedback: core.customerFeedback };
  const unrelated = loader.deriveRuntimeRoleCapabilityProfiles({ ...policy, runtimeRole: { code: "OTHER" } });
  assert.equal(unrelated.engagement.capabilities, undefined);
  assert.equal(unrelated.customerFeedback.enabled, undefined);
  const later = binding.merge(policy, {
    engagement: { runtimeRoleProfiles: { ENGAGEMENT: { capabilities: { customerFeedback: false } } } },
    customerFeedback: { runtimeRoleProfiles: { ENGAGEMENT: { enabled: false } } },
  });
  const disabled = loader.deriveRuntimeRoleCapabilityProfiles({ ...later, runtimeRole: { code: "ENGAGEMENT" } });
  assert.equal(disabled.engagement.capabilities.customerFeedback, false);
  assert.equal(disabled.customerFeedback.enabled, false);
});

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  test(`${environment}: application baselines follow selection and consuming role`, () => {
    for (const selection of ["all", "none", "apparel", "electronics", "telco"]) {
      const staged = loadRuntime("wcmsStagedServer", environment, { NODICS_AGORA_DOMAINS: selection });
      for (const domain of ["apparel", "electronics", "telco"]) {
        const code = `agora${domain}`;
        const selected = selection === "all" || selection === domain;
        assert.equal(Boolean(staged.cms.publication.baselines[code]), selected);
        if (selected) {
          const owner = require(`../modules/agora.${domain}/config/properties`);
          assert.deepEqual(staged.cms.publication.baselines[code], owner.cms.runtimeRoleProfiles.WCMS_STAGED.publication.baselines[code]);
          const profile = owner.backofficeApplicationInitialization.runtimeRoleProfiles.PLATFORM.profiles[code];
          assert.equal(profile.presentation.category, "application");
          assert.equal(profile.presentation.activationPolicy.approvalRequiredForOnline, true);
          assert.equal(profile.presentation.activationPolicy.requiredDataTrigger, "USER");
        }
      }
    }
    const platform = loadRuntime("platformServer", environment);
    assert.equal(platform.cms.publication.baselines.agoraapparel, undefined);
  });

  test(`${environment}: Waste policy stays role-scoped and transport stays deployment-owned`, () => {
    const waste = loadRuntime("wasteServer", environment);
    assert.equal(waste.wasteSubmission.metadataSuggestion.enabled, true);
    assert.equal(waste.wasteSubmission.metadataSuggestion.adapter, "openai");
    assert.equal(waste.eWaste.conversation.project, "circa.ewaste");
    assert.equal(waste.eWaste.conversation.adapter, "ollama");
    assert(waste.circaEWaste.journey.arrivalRadiusMetres > 0);
    assert.equal(waste.eWaste.outcomeCommunication.detailLinks.IN_APP.url,
      environment === "kickoffLocal" ? "http://localhost:3600/mobile" : "http://localhost:6600/mobile");
    const commerce = loadRuntime("commerceServer", environment);
    assert.equal(commerce.eWaste.conversation.project, undefined);
    assert.equal(activeModuleNames(commerce).includes("eWaste"), false);
    assert.deepEqual(commerce.order.refunds.ownerPorts.eWaste, {
      moduleName: "eWaste", connectionName: "waste", targetAuthority: { runtimeRole: "WASTE" }, apiPrefix: "/internal/order-reversals",
    });
    assert.equal(commerce.bidding.holdTiming, "CHECKOUT_AFTER_ACCEPTANCE");
    assert.equal(commerce.bidding.validitySeconds, 86400);
    assert.equal(commerce.digitalCore.merchantRedemption.enabled, true);
    assert.equal(commerce.digitalCore.merchantRedemption.providerService, "DefaultDigitalCommerceMerchantScreenProviderService");
  });

  test(`${environment}: customer CORS survives an unselected application graph`, () => {
    const runtime = loadRuntime("wcmsOnlineServer", environment, { NODICS_AGORA_DOMAINS: "none" });
    assert.equal(activeModuleNames(runtime).includes("agora.apparel"), false);
    const origins = corsOrigins(runtime);
    const port = environment === "kickoffLocal" ? 3300 : 6300;
    assert(origins.allowedOrigins.includes(`http://localhost:${port}`) || origins.deniedOrigins.includes(`http://localhost:${port}`));
  });
}
