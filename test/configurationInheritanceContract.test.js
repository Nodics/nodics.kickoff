/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/configurationInheritanceContract @description Protects project default activation, deployment overrides and configuration ownership. @owner nodics.kickoff */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  loadRuntime,
  frameworkRoot,
  activeModuleNames,
  searchConfiguration,
  corsOrigins,
  cacheConfiguration,
  databaseConfiguration,
} = require("./helpers/configuration");
const coreProperties = require("../modules/kickoffCore/config/properties");
const metadata = require("../modules/kickoffCore/package.json");

require("node:test")(
  "Native Circa settings follow the existing runtime selections and preserve Waste-only overrides",
  () => {
    const selected = ["platformServer", "commerceServer", "commerceStagedServer", "wcmsStagedServer", "wasteServer"];
    for (const server of selected) {
      const properties = loadRuntime(server, "kickoffLocal", { CIRCA_EWASTE_ARRIVAL_RADIUS_METRES: "375" });
      assert.equal(properties.eWaste.journey.arrivalRadiusMetres, 375, server);
      assert.equal(properties.eWaste.marketplace.storeCode, "circaMainStore", server);
      assert.equal(properties.profileExternalIdentity.applications["circa.ewaste"].requireBrowserHandoff, true, server);
      assert.equal(Boolean(properties.eWaste.outcomeCommunication.detailLinks?.TELEGRAM), server === "wasteServer", server);
      assert.equal(Boolean(properties.eWaste.marketplace.digitalOwnership?.qualified), server === "wasteServer", server);
    }
    for (const server of ["processServer", "wcmsOnlineServer"]) {
      const properties = loadRuntime(server);
      assert.equal(properties.profileExternalIdentity?.applications?.["circa.ewaste"], undefined, server);
      assert.equal(properties.eWaste?.marketplace?.storeCode, undefined, server);
    }
  },
);

require("node:test")(
  "Only Waste selects the accelerator-owned impact provider chain in each Local topology",
  () => {
    const owner = require(path.join(frameworkRoot,
      "nodics.accelerators/modules/waste/modules/eWaste/config/properties"));
    const dispatcher = require(path.join(frameworkRoot,
      "nodics.waste/modules/wasteImpact/src/service/defaultWasteImpactCalculationService"));
    const profileCode = "eWasteEnvironmentalAssessment";
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const effective = loadRuntime("wasteServer", environment);
      assert.equal(effective.wasteImpact.calculation.providerProfile, profileCode);
      const previous = global.CONFIG;
      try {
        global.CONFIG = { get: (key) => effective[key] };
        const settings = dispatcher.settings();
        const expected = owner.wasteImpact.providerProfiles[profileCode];
        for (const key of Object.keys(expected)) assert.deepEqual(settings[key], expected[key]);
      } finally {
        global.CONFIG = previous;
      }
      assert.equal(effective.copilot.providers.adapters.openai.credential.mode, "SECRET_REFERENCE");
      for (const server of ["commerceServer", "commerceStagedServer", "platformServer", "wcmsStagedServer"]) {
        assert.equal(loadRuntime(server, environment).wasteImpact, undefined, server);
      }
    }
  },
);

require("node:test")(
  "Only Local Loyalty selects the approved existing Commerce reservation-decision caller",
  () => {
    const expected = [
      {
        tenant: "default",
        serviceId: "apiAdmin",
        entCode: "default",
        projectCode: "nodics.kickoff",
        environmentCode: "kickoffLocal",
        serverCode: "commerceServer",
        instanceCode: "kickoff-local-commerce-1",
        assignmentCode: "kickoff-local-commerce-runtime-deployment",
      },
    ];
    const owner = require(
      path.join(
        frameworkRoot,
        "nodics.loyalty/modules/loyaltyWallet/config/properties",
      ),
    ).loyalty.reservationDecisions;
    const selected =
      require("../envs/kickoffLocal/commerceServer/config/properties").loyalty
        .reservationDecisions;
    assert.deepEqual(owner.callers, [], "framework defaults grant no caller");
    assert.deepEqual(
      selected,
      {
        callers: { $config: "replace", value: expected },
      },
      "deployment owns only the exact caller selection, not owner defaults",
    );
    const effective = loadRuntime("commerceServer", "kickoffLocal");
    assert.deepEqual(effective.loyalty.reservationDecisions, {
      ...owner,
      callers: expected,
    });
    assert.equal(
      expected[0].instanceCode,
      require("../envs/kickoffLocal/commerceServer/package.json").nodics
        .runtimeIdentity.instanceCode,
    );
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      for (const server of [
          "commerceServer",
        "commerceStagedServer",
        "wasteServer",
        "platformServer",
      ]) {
        if (environment === "kickoffLocal" && ["loyaltyServer", "commerceServer"].includes(server))
          continue;
        assert.deepEqual(
          loadRuntime(server, environment).loyalty?.reservationDecisions
            ?.callers || [],
          [],
          environment +
            "/" +
            server +
            " must not inherit the Local caller selection",
        );
      }
    }
    assert.deepEqual(
      effective.loyalty.api.readEvidence.callers,
      [
        [
          "wasteServer",
          "GREENPERKS_ONLINE",
          "kickoff-local-waste-1",
          "kickoff-local-waste-runtime-deployment",
        ],
        [
          "commerceServer",
          "GREENPERKS_RETAIL",
          "kickoff-local-commerce-1",
          "kickoff-local-commerce-runtime-deployment",
        ],
        [
          "commerceServer",
          "GREENPERKS_ONLINE",
          "kickoff-local-commerce-1",
          "kickoff-local-commerce-runtime-deployment",
        ],
      ].map(([serverCode, enterpriseCode, instanceCode, assignmentCode]) => ({
        tenant: "default",
        principalEnterpriseCode: "default",
        enterpriseCode,
        serviceId: "apiAdmin",
        projectCode: "nodics.kickoff",
        environmentCode: "kickoffLocal",
        serverCode,
        instanceCode,
        assignmentCode,
      })),
    );
    assert.deepEqual(
      loadRuntime("loyaltyServer", "kickoffDockerLocal").loyalty.api
        .readEvidence.callers,
      [],
    );
  },
);

require("node:test")(
  "Local and Docker inherit owner precision without retired marketplace reversal selections",
  () => {
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const local = require("../envs/" + environment + "/config/properties");
      for (const server of ["commerceServer", "commerceStagedServer", "platformServer", "wasteServer", "wcmsStagedServer"]) {
        const profile = require(`../envs/${environment}/${server}/config/properties`).eWaste || local.eWaste || {};
        assert.equal(profile.catalogue, undefined);
        if (!profile.marketplace) continue;
        for (const key of [
          "rewardScale",
          "carbonScale",
          "refundsEnabled",
          "catalogueDiscovery",
          "couponCarbonMode",
          "carbonRewardTypeCode",
        ])
          assert.equal(Object.hasOwn(profile.marketplace, key), false, key);
        assert.equal(
          profile.marketplace.listingPresentation.warehouseName,
          undefined,
        );
      }
      const effective = loadRuntime("wasteServer", environment);
      for (const key of ["rewardScale", "carbonScale", "refundsEnabled"])
        assert.equal(
          Object.hasOwn(effective.eWaste.marketplace, key),
          false,
          key,
        );
    }
  },
);

require("node:test")(
  "Local Commerce explicitly enables Digital bundle listings without widening other deployments",
  () => {
    const owner = require(
      path.join(
        frameworkRoot,
        "nodics.commerce/modules/digitalCommerce/modules/digitalCore/config/properties",
      ),
    );
    assert.equal(owner.digitalCore.bundleListings.enabled, false);
    assert.equal(
      loadRuntime("commerceServer", "kickoffLocal").digitalCore.bundleListings
        .enabled,
      true,
    );
    for (const [server, environment] of [
      ["commerceStagedServer", "kickoffLocal"],
      ["commerceServer", "kickoffDockerLocal"],
      ["commerceStagedServer", "kickoffDockerLocal"],
    ]) {
      assert.equal(
        loadRuntime(server, environment).digitalCore.bundleListings.enabled,
        false,
        `${server}/${environment}`,
      );
    }
  },
);

require("node:test")(
  "Local OpenAI adopts a stable external credential through the existing owner reference",
  () => {
    const local = require("../envs/kickoffLocal/config/properties");
    assert.deepEqual(local.credentials["openai.circa"].value, {
      $config: "env",
      name: "OPENAI_API_KEY",
    });
    const variables = { OPENAI_API_KEY: "unit-only-openai-credential" };
    const first = loadRuntime("wasteServer", "kickoffLocal", variables);
    const repeated = loadRuntime("wasteServer", "kickoffLocal", variables);
    for (const properties of [first, repeated]) {
      assert.equal(
        properties.credentials["openai.circa"].value,
        variables.OPENAI_API_KEY,
      );
      assert.equal(
        properties.copilot.providers.adapters.openai.credential.secretRef,
        "credentials:openai.circa",
      );
    }
    const absent = loadRuntime("wasteServer", "kickoffLocal", {
      OPENAI_API_KEY: "",
    });
    assert.equal(absent.credentials["openai.circa"].value == null, true);
  },
);

require("node:test")(
  "Engagement resolves Profile communication destinations without widening other deployments",
  () => {
    const engagement = loadRuntime("processServer", "kickoffLocal");
    assert.equal(
      engagement.runtimeIdentity.remoteModules.includes("profile"),
      true,
    );
  },
);

require("node:test")(
  "Local Waste may prepare a verified Profile channel handoff without widening siblings",
  () => {
    assert.equal(
      loadRuntime(
        "wasteServer",
        "kickoffLocal",
      ).runtimeIdentity.remoteModules.includes("commsApi"),
      true,
    );
  },
);

require("node:test")(
  "Knowledge runtimes include governance without enabling unrelated sibling runtimes",
  () => {
    const platform = loadRuntime("platformServer", "kickoffLocal");
    assert.equal(platform.dynamoEnabled, true);
    assert.equal(activeModuleNames(platform).includes("dynamo"), true);
    assert.equal(platform.runtimePropertyGovernance.persistence.enabled, true);
    for (const server of [
      "commerceServer",
      "commerceStagedServer",
      "wasteServer",
      "wcmsStagedServer",
      "wcmsOnlineServer",
      "processServer",
    ]) {
      const sibling = loadRuntime(server, "kickoffLocal");
      assert.equal(sibling.dynamoEnabled, false);
      assert.equal(
        activeModuleNames(sibling).includes("dynamo"),
        server === "wasteServer",
      );
      if (server === "wasteServer") {
        assert.equal(
          sibling.runtimePropertyGovernance.persistence.enabled,
          true,
        );
        assert.deepEqual(
          sibling.copilot.knowledge.sourceRegistry.definitions,
          [],
        );
      } else {
        assert.notEqual(
          sibling.runtimePropertyGovernance?.persistence?.enabled,
          true,
          server + " must not opt into persistence without its owner",
        );
      }
    }
    assert.equal(
      loadRuntime("platformServer", "kickoffDockerLocal").dynamoEnabled,
      false,
    );
  },
);

require("node:test")(
  "Local Copilot has a bounded Ollama-only bootstrap allocation without broad enrollment",
  () => {
    const local = loadRuntime("platformServer", "kickoffLocal").copilot
      .providers.accounting;
    const usage = require(
      path.join(
        frameworkRoot,
        "nodics.copilot/modules/copilotProviders/modules/copilotProvider/src/service/defaultCopilotUsageService",
      ),
    );
    assert.equal(usage.validate(local), local);
    assert.equal(local.tenantLimit, 100000);
    assert.deepEqual(local.enterprises, [
      {
        tenantCode: "default",
        enterpriseCode: "default",
        limit: 100000,
        adapters: ["ollama"],
        profiles: ["conversation", "structuredTool", "evaluation"],
        users: [{ principalCode: "admin", limit: 100000 }],
      },
    ]);
    assert.notEqual(
      loadRuntime("platformServer", "kickoffDockerLocal").copilot.providers
        .accounting?.enabled,
      true,
    );
  },
);

require("node:test")(
  "WCMS Online discovers the canonical Axis composition policy without activating Axis",
  () => {
    const projection = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService",
      ),
    );
    const result = projection.read({
      projectRoot: path.resolve(__dirname, ".."),
      frameworkRoot,
      environment: "kickoffLocal",
      server: "wcmsOnlineServer",
    });
    const source = require(
      path.join(
        frameworkRoot,
        "nodics.platform/modules/axis/config/properties",
      ),
    );
    assert.deepEqual(
      result.properties.cms.publication.baselines.axis,
      source.cms.publication.baselines.axis,
    );
    assert.equal(result.properties.cms.publication.runtimeRole, "ONLINE");
    assert.equal(result.properties.cms.runtimeRoleProfiles, undefined);
    assert.equal(result.properties.axis, undefined);
    assert.equal(result.modules.includes("axis"), false);
    assert.equal(result.modules.includes("profile"), false);
    assert.deepEqual(
      result.properties.runtimeIdentity,
      {
        ...require("../envs/kickoffLocal/wcmsOnlineServer/package.json").nodics.runtimeIdentity,
        projectCode: "nodics.kickoff",
        environmentCode: "kickoffLocal",
        serverCode: "wcmsOnlineServer",
      },
    );
    const configuration = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService",
      ),
    );
    const previous = global.NODICS;
    try {
      global.NODICS = undefined;
      const offline = configuration.readDeploymentConfiguration({
        projectRoot: path.resolve(__dirname, ".."),
        frameworkRoot,
        environmentCode: "kickoffLocal",
        serverCode: "wcmsOnlineServer",
      });
      assert.deepEqual(
        offline.cms.publication.baselines.axis,
        source.cms.publication.baselines.axis,
      );
      const disabled = configuration.readDeploymentConfiguration({
        projectRoot: path.resolve(__dirname, ".."),
        frameworkRoot,
        environmentCode: "kickoffLocal",
        serverCode: "wcmsOnlineServer",
        inheritedProperties: {
          cms: {
            publication: {
              baselines: {
                axis: {
                  employeeCompositionPaths: { $config: "replace", value: [] },
                },
              },
            },
          },
        },
      });
      assert.deepEqual(
        disabled.cms.publication.baselines.axis.employeeCompositionPaths,
        [],
      );
      assert.equal(global.NODICS, undefined);
    } finally {
      global.NODICS = previous;
    }
  },
);

require("node:test")(
  "Local private capture attestation is explicit and never follows onboarding enablement",
  () => {
    const selected = { NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED: "true" };
    for (const server of [
      "platformServer",
      "processServer",
      "commerceServer",
    ]) {
      const policy = loadRuntime(server, "kickoffLocal", selected).log
        .requestPrivacy;
      assert.equal(policy.qualified, true);
      assert.equal(policy.captureMode, "disabled");
      assert.equal(
        loadRuntime(server, "kickoffLocal", {
          NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true",
          NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED: "false",
        }).log.requestPrivacy.qualified,
        false,
      );
    }
    assert.equal(
      loadRuntime("platformServer", "kickoffDockerLocal", selected).log
        .requestPrivacy.qualified,
      false,
    );
  },
);

require("node:test")(
  "Local enterprise setup inspection and continuation qualifications remain independent",
  () => {
    const flags = {
      inspectionQualified: "NODICS_LOCAL_ENTERPRISE_SETUP_INSPECTION_QUALIFIED",
      privateGuardsQualified: "NODICS_LOCAL_ENTERPRISE_SETUP_PRIVACY_QUALIFIED",
      resumeQualified: "NODICS_LOCAL_ENTERPRISE_SETUP_RESUME_QUALIFIED",
    };
    const unset = Object.fromEntries(
      Object.values(flags).map((name) => [name, "false"]),
    );
    const policy = (environment) =>
      loadRuntime("platformServer", "kickoffLocal", environment)
        .enterpriseManagement.setupContinuation;
    const baseline = policy({
      ...unset,
      NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true",
    });
    for (const key of Object.keys(flags)) assert.equal(baseline[key], false);
    for (const [key, name] of Object.entries(flags)) {
      const selected = policy({ ...unset, [name]: "true" });
      for (const other of Object.keys(flags))
        assert.equal(selected[other], other === key);
    }
    const all = Object.fromEntries(
      Object.values(flags).map((name) => [name, "true"]),
    );
    const qualified = policy(all);
    for (const key of Object.keys(flags)) assert.equal(qualified[key], true);
    assert.equal(
      loadRuntime("platformServer", "kickoffLocal", all).enterpriseManagement
        .registration.enabled,
      false,
      "Setup qualification does not enable registration",
    );
    for (const server of [
      "commerceServer",
      "wasteServer",
    ]) {
      const sibling = loadRuntime(server, "kickoffLocal", all)
        .enterpriseManagement?.setupContinuation;
      for (const key of Object.keys(flags))
        assert.notEqual(sibling?.[key], true, server + ": " + key);
    }
    const docker = loadRuntime("platformServer", "kickoffDockerLocal", all)
      .enterpriseManagement.setupContinuation;
    for (const key of Object.keys(flags)) assert.equal(docker[key], false);
  },
);

require("node:test")(
  "Local recovery API exposure is selected on Platform and remains opt-in",
  () => {
    const server = require("../envs/kickoffLocal/platformServer/config/properties");
    assert.deepEqual(server.apiExposure.categories.profileEmployeeRecovery.enabled, {
      $config: "env",
      name: "NODICS_LOCAL_EMPLOYEE_RECOVERY_ENABLED",
      type: "boolean",
      fallback: false,
    });
    const enabled = { NODICS_LOCAL_EMPLOYEE_RECOVERY_ENABLED: "true", NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "false" };
    const disabled = { NODICS_LOCAL_EMPLOYEE_RECOVERY_ENABLED: "false", NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true" };
    assert.equal(
      loadRuntime("platformServer", "kickoffLocal", enabled).apiExposure
        .categories.profileEmployeeRecovery.enabled,
      true,
    );
    assert.equal(
      loadRuntime("platformServer", "kickoffLocal", disabled).apiExposure
        .categories.profileEmployeeRecovery.enabled,
      false,
    );
    for (const [name, environment] of [
      ["commerceServer", "kickoffLocal"],
      ["platformServer", "kickoffDockerLocal"],
    ]) {
      assert.notEqual(
        loadRuntime(name, environment, enabled).apiExposure?.categories
          ?.profileEmployeeRecovery?.enabled,
        true,
      );
    }
  },
);

require("node:test")(
  "Local read-only identity assessment does not qualify or activate identity mutations",
  () => {
    const selected = { NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED: "true" };
    const local = loadRuntime("platformServer", "kickoffLocal", selected);
    assert.equal(local.identityGovernance.migration.assessment.enabled, true);
    assert.equal(
      local.enterpriseManagement.registration.inventoryQualified,
      false,
    );
    assert.equal(
      local.enterpriseManagement.registration.assignmentClaimIndexQualified,
      false,
    );
    assert.equal(local.profileEmployeeRecovery.credentialWriteQualified, false);
    assert.equal(
      loadRuntime("platformServer", "kickoffLocal", {
        NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED: "false",
      }).identityGovernance.migration.assessment.enabled,
      false,
    );
    assert.equal(
      loadRuntime("platformServer", "kickoffDockerLocal", selected)
        .identityGovernance.migration.assessment.enabled,
      false,
    );
  },
);

require("node:test")(
  "Local bootstrap source review remains separate from registration qualification",
  () => {
    const flag = "NODICS_LOCAL_BOOTSTRAP_IDENTITY_REVIEW_ENABLED";
    const selected = { [flag]: "true" };
    const local = loadRuntime("platformServer", "kickoffLocal", selected);
    assert.equal(
      local.identityGovernance.migration.assessment.bootstrapReview.enabled,
      true,
    );
    assert.equal(local.identityGovernance.migration.assessment.enabled, false);
    assert.equal(
      local.enterpriseManagement.registration.inventoryQualified,
      false,
    );
    assert.equal(
      local.enterpriseManagement.registration.assignmentClaimIndexQualified,
      false,
    );
    assert.equal(local.profileEmployeeRecovery.inventoryQualified, false);
    assert.equal(local.profileEmployeeRecovery.credentialWriteQualified, false);
    assert.equal(
      loadRuntime("platformServer", "kickoffLocal", { [flag]: "false" })
        .identityGovernance.migration.assessment.bootstrapReview.enabled,
      false,
    );
    for (const [server, environment] of [
      ["processServer", "kickoffLocal"],
      ["platformServer", "kickoffDockerLocal"],
    ]) {
      assert.notEqual(
        loadRuntime(server, environment, selected).identityGovernance?.migration
          ?.assessment?.bootstrapReview?.enabled,
        true,
      );
    }
  },
);

require("node:test")(
  "Local registration prerequisites require separate installed-owner attestations",
  () => {
    const flags = {
      inventoryQualified: "NODICS_LOCAL_REGISTRATION_INVENTORY_QUALIFIED",
      assignmentClaimIndexQualified:
        "NODICS_LOCAL_REGISTRATION_CLAIM_INDEX_QUALIFIED",
    };
    const unset = Object.fromEntries(
      Object.values(flags).map((name) => [name, "false"]),
    );
    for (const [key, flag] of Object.entries(flags)) {
      const selected = { ...unset, [flag]: "true" };
      const local = loadRuntime("platformServer", "kickoffLocal", selected);
      for (const other of Object.keys(flags))
        assert.equal(
          local.enterpriseManagement.registration[other],
          other === key,
        );
      assert.equal(local.enterpriseManagement.registration.enabled, false);
      assert.equal(local.profileEmployeeRecovery.inventoryQualified, false);
      assert.equal(
        local.profileEmployeeRecovery.credentialWriteQualified,
        false,
      );
      assert.equal(
        local.enterpriseManagement.memberships.inventoryQualified,
        false,
      );
      const docker = loadRuntime(
        "platformServer",
        "kickoffDockerLocal",
        selected,
      );
      for (const other of Object.keys(flags))
        assert.equal(docker.enterpriseManagement.registration[other], false);
    }
  },
);

require("node:test")(
  "Local Platform explicitly delegates only its registration Communication operations",
  () => {
    const local = loadRuntime("platformServer", "kickoffLocal");
    const identity = require("../envs/kickoffLocal/platformServer/package.json")
      .nodics.runtimeIdentity;
    assert.equal(
      identity.remoteModules.filter((name) => name === "commsApi").length,
      1,
    );
    assert.equal(activeModuleNames(local).includes("commsApi"), false);
    assert.deepEqual(
      local.profileTenantProvisioning.runtimeRemoteModuleExtensions,
      ["commsApi"],
    );
    for (const [server, environment] of [
      ["commerceServer", "kickoffLocal"],
      ["platformServer", "kickoffDockerLocal"],
    ]) {
      const runtime = loadRuntime(server, environment);
      assert.deepEqual(
        runtime.profileTenantProvisioning.runtimeRemoteModuleExtensions || [],
        [],
      );
    }
  },
);

require("node:test")(
  "Local Commerce delegates reward payment only to its remote Loyalty owner",
  () => {
    const runtime = loadRuntime("commerceServer", "kickoffLocal");
    assert.equal(
      runtime.runtimeIdentity.remoteModules.filter(
        (name) => name === "loyaltyApi",
      ).length,
      1,
    );
    assert.equal(activeModuleNames(runtime).includes("loyaltyApi"), true);
  },
);

require("node:test")(
  "Local employee review selects only its existing Process owner declaration without qualifying Profile or other deployments",
  () => {
    const { moduleConfiguration } = require("./helpers/configuration");
    const local = loadRuntime("processServer", "kickoffLocal");
    const docker = loadRuntime("processServer", "kickoffDockerLocal");
    assert.equal(local.process.runtime.internalStarts.enabled, true);
    assert.deepEqual(local.process.runtime.internalStarts.allowedDefinitions, [
      "profileEmployeeApplicationReview",
    ]);
    assert.equal(
      local.process.runtime.internalStarts.permission,
      "process.instance.start.internal",
    );
    assert.equal(local.process.runtime.internalRetirements.enabled, false);
    const action = "profile.applyEmployeeApplicationDecision";
    assert.equal(
      local.process.actionAdapters.allowedActions.filter(
        (key) => key === action,
      ).length,
      1,
    );
    assert.equal(
      local.process.actionAdapters.definitions[action],
      undefined,
      "Remote owner declarations must not be copied into Process",
    );
    assert.equal(activeModuleNames(local).includes("profile"), false);
    assert.ok(
      require("../envs/kickoffLocal/processServer/package.json").nodics.runtimeModuleRoots.includes(
        "nodics.platform",
      ),
      "Remote Profile action declarations require their discovery root without activation",
    );
    assert.equal(
      local.process.remoteActions.targets.profile.connectionName,
      "profile",
    );
    assert.equal(
      moduleConfiguration(local, "profile").abstractEndpoint.httpPort,
      4300,
    );
    const declaration = require(
      path.join(
        frameworkRoot,
        "nodics.platform/modules/profile/config/properties",
      ),
    ).process.actionAdapters.definitions[action];
    assert.equal(declaration.remote.moduleName, "profile");
    assert.deepEqual(declaration.remote.targetAuthority, { publication: "OPERATIONAL" });
    assert.equal(declaration.remote.runtimeRole, undefined);
    assert.equal(declaration.remote.requiresCompletedTask, true);
    assert.equal(
      declaration.remote.apiName,
      "/enterprise-access/applications/process-decision",
    );
    assert.equal(docker.process.runtime.internalStarts.enabled, false);
    assert.equal(
      docker.process.actionAdapters.allowedActions.includes(action),
      false,
    );
    assert.equal(docker.process.remoteActions.targets.profile, undefined);
    const platform = loadRuntime("platformServer", "kickoffLocal");
    assert.equal(platform.enterpriseManagement.registration.enabled, false);
    assert.equal(
      platform.enterpriseManagement.registration.inventoryQualified,
      false,
    );
    assert.equal(
      platform.enterpriseManagement.registration.assignmentClaimIndexQualified,
      false,
    );
    assert.equal(
      platform.enterpriseManagement.applications.review.enabled,
      false,
    );
    assert.equal(
      platform.profileEmployeeRecovery.credentialWriteQualified,
      false,
    );
  },
);

require("node:test")(
  "Local tenant provisioning selects all consumers but exposes only the Profile owner",
  () => {
    const enabled = { NODICS_LOCAL_TENANT_PROVISIONING_ENABLED: "true", NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "false" };
    const disabled = { NODICS_LOCAL_TENANT_PROVISIONING_ENABLED: "false", NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true" };
    for (const name of [
      "platformServer",
      "commerceServer",
      "processServer",
      "wasteServer",
    ]) {
      const selected = loadRuntime(name, "kickoffLocal", enabled);
      assert.equal(selected.profileTenantProvisioning.enabled, true);
      assert.equal(
        selected.profileTenantProvisioning.allowInsecureLoopback,
        true,
      );
      assert.equal(
        loadRuntime(name, "kickoffLocal", disabled).profileTenantProvisioning
          .enabled,
        false,
      );
      assert.equal(
        selected.apiExposure?.categories?.profileTenantProvisioning?.enabled ===
          true,
        name === "platformServer",
      );
    }
    const local = loadRuntime("platformServer", "kickoffLocal", enabled);
    const docker = loadRuntime("platformServer", "kickoffDockerLocal", enabled);
    assert.notEqual(
      docker.apiExposure?.categories?.profileTenantProvisioning?.enabled,
      true,
    );
  },
);

require("node:test")(
  "Platform preparation and isolated probes leave knowledge selection to runtime governance",
  () => {
    const { execFileSync } = require("node:child_process");
    const registry = require(
      path.join(
        frameworkRoot,
        "nodics.copilot/modules/copilotKnowledge/src/service/defaultCopilotKnowledgeSourceRegistryService",
      ),
    );
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const variables = { NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED: "false" };
      const probe = loadRuntime("platformServer", environment, variables)
        .copilot.knowledge.sourceRegistry;
      const expected = probe?.definitions || [];
      const prepared = JSON.parse(
        execFileSync(
          process.execPath,
          [
            "-e",
            `
      const path = require('node:path');
      const options = JSON.parse(process.argv[1]);
      const prepare = require(path.join(options.frameworkRoot, 'nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs'));
      (async () => {
      for (const server of ['commerceServer', 'wasteServer', 'platformServer']) await prepare({...options, server});
      const settings = CONFIG.get('copilot').knowledge.sourceRegistry;
      process.stdout.write(JSON.stringify(settings?.definitions || []));
      })().catch(error => { console.error(error); process.exitCode = 1; });
    `,
            JSON.stringify({
              projectRoot: path.resolve(__dirname, ".."),
              frameworkRoot,
              environment,
            }),
          ],
          {
            encoding: "utf8",
            timeout: 30000,
            env: {
              PATH: process.env.PATH,
              HOME: process.env.HOME,
              ...variables,
            },
          },
        ),
      );
      assert.deepEqual(
        prepared,
        expected,
        "Prepared registry must match the isolated configuration probe",
      );
      assert.deepEqual(
        prepared,
        [],
        "Module activation must not select knowledge sources",
      );
    }
  },
);

require("node:test")(
  "Local Process resolves its complete remote action inventory without activating Profile",
  () => {
    const { execFileSync } = require("node:child_process");
    const result = JSON.parse(
      execFileSync(
        process.execPath,
        [
          "-e",
          `
    const path = require("node:path");
    const options = JSON.parse(process.argv[1]);
    (async () => {
    await require(path.join(options.frameworkRoot, "nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs"))(options);
    const registry = require(path.join(options.frameworkRoot, "nodics.process/modules/workflow/src/service/operation/defaultProcessActionAdapterRegistryService"));
    process.stdout.write(JSON.stringify({
      profileActive: NODICS.getActiveModules().includes("profile"),
      actions: registry.allowedActions().map(action => registry.actionKey(action))
    }));
    })().catch(error => { console.error(error); process.exitCode = 1; });
  `,
          JSON.stringify({
            projectRoot: path.resolve(__dirname, ".."),
            frameworkRoot,
            environment: "kickoffLocal",
            server: "processServer",
          }),
        ],
        { encoding: "utf8" },
      ),
    );
    assert.equal(result.profileActive, false);
    assert.ok(
      result.actions.includes("profile.applyEmployeeApplicationDecision"),
    );
    assert.ok(result.actions.includes("cms.applyPublicationDecision"));
  },
);

require("node:test")("Local Waste startup selection permits later deployment disablement", () => {
  const bindings = require(path.join(frameworkRoot, "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
  const copilot = require("../envs/kickoffLocal/wasteServer/config/properties").copilot;
  assert.equal(copilot.knowledge.ingestion.ingestOnStart, true);
  assert.equal(require("../envs/kickoffLocal/config/properties").copilot, undefined);
  const later = bindings.merge({ copilot }, { copilot: { knowledge: { ingestion: { ingestOnStart: false } } } });
  assert.equal(later.copilot.knowledge.ingestion.ingestOnStart, false);
});

require("node:test")(
  "Platform context and external knowledge are explicit deployment selections",
  () => {
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const runtime = loadRuntime("platformServer", environment, {
        NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED: "false",
        NODICS_COPILOT_AXIS_ROOT: "",
      });
      assert.equal(
        runtime.copilot.core.environment,
        environment === "kickoffLocal" ? environment : undefined,
        "Inactive Docker Copilot must not acquire framework defaults through customer copies",
      );
      const knowledge = runtime.copilot.knowledge;
      assert.equal(
        knowledge.ingestion.ingestOnStart,
        true,
        "Preserve established backend startup defaults",
      );
      const sources = knowledge.sourceRegistry?.definitions || [];
      assert.deepEqual(sources, []);
      if (environment === "kickoffLocal") {
        assert.equal(knowledge.repositoryRoots.framework, frameworkRoot);
        assert.equal(
          knowledge.repositoryRoots.project,
          path.resolve(__dirname, ".."),
        );
      } else
        assert.equal(
          knowledge.repositoryRoots,
          undefined,
          "Inactive Knowledge contributes no roots",
        );
      assert.equal(knowledge.repositoryRoots?.["nodics.axis"], undefined);
      const optedIn = loadRuntime("platformServer", environment, {
        NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED: "true",
        NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED: "true",
        NODICS_COPILOT_AXIS_ROOT: "/external-knowledge-not-read/axis",
      }).copilot.knowledge;
      assert.deepEqual(
        optedIn.sourceRegistry?.definitions || [],
        [],
        "Retired source-selection environment variables cannot grant knowledge",
      );
      assert.equal(optedIn.repositoryRoots?.["nodics.axis"], undefined);
      const disabled = loadRuntime("platformServer", environment, {
        NODICS_COPILOT_KNOWLEDGE_ENABLED: "false",
        NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START: "false",
      }).copilot.knowledge;
      assert.equal(disabled.ingestion.enabled, false);
      assert.equal(disabled.ingestion.ingestOnStart, false);
      assert.deepEqual(disabled.sourceRegistry?.definitions || [], []);
    }
    const ownerCore = require(
      path.join(
        frameworkRoot,
        "nodics.copilot/modules/copilotCore/config/properties",
      ),
    ).copilot.core;
    assert.equal(
      require("../envs/kickoffLocal/platformServer/config/properties").copilot.core.environment,
      undefined,
    );
    assert.equal(
      bindings.resolve(
        bindings.merge(
          ownerCore,
          require("../envs/kickoffLocal/platformServer/config/properties").copilot.core,
        ),
        {},
        {
          environmentCode: "unrelatedDeployment",
        },
      ).environment,
      "unrelatedDeployment",
    );
    assert.equal(
      JSON.stringify(require("../envs/kickoffLocal/platformServer/config/properties").copilot).includes("envs/kickoffLocal"),
      false,
    );
    assert.equal(
      require("../envs/kickoffLocal/config/properties").tooling.acceptance.browserValidation,
      undefined,
      "The non-runtime tooling owner supplies browser-validation defaults",
    );
    const toolingOwner = require(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/config/properties"));
    assert.equal(toolingOwner.tooling.acceptance.browserValidation.enabled, false);
  },
);

require("node:test")(
  "Docker selected published ports follow server projections and allow consumer overrides",
  () => {
    const { loadContainer } = require("./helpers/configuration");
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    const declaration = require("../envs/kickoffDockerLocal/config/properties")
      .tooling.container;
    const effective = loadContainer();
    assert.deepEqual(
      effective.hostPorts,
      [5300, 5312, 5314, 5330, 5340, 5350, 5352, 5360, 5370, 5380],
    );
    assert.deepEqual(effective.qualification.runtimePorts, effective.hostPorts);
    assert.deepEqual(effective.soak.readinessPorts, effective.hostPorts);
    assert.deepEqual(
      effective.resilienceQualification.readyPorts,
      effective.hostPorts,
    );
    assert.deepEqual(effective.qualification.readLoadPorts, [5314, 5300]);
    assert.deepEqual(
      effective.resilienceQualification.readLoad.ports,
      [5314, 5300],
    );
    for (const [name, selector] of Object.entries(
      require("../envs/kickoffDockerLocal/config/properties").tooling.acceptance
        .urls,
    )) {
      const server = require(
        path.join(
          __dirname,
          "../envs/kickoffDockerLocal",
          selector.server,
          "config/properties",
        ),
      );
      const endpoint = server.servers.default.browserEndpoint;
      assert.equal(
        effective.acceptance.urls[name],
        `http://${endpoint.httpHost}:${endpoint.httpPort}`,
      );
    }
    assert.equal(
      effective.qualification.networkSeparation.publicContainer,
      undefined,
    );
    assert.deepEqual(
      effective.qualification.networkSeparation.applicationContainers,
      effective.qualification.hardenedContainers,
    );
    assert.deepEqual(
      effective.qualification.networkSeparation.forbiddenNetworks,
      ["nodics-kickoff-docker-local-public"],
    );
    const context = {
      readRuntimeProperty: (server, property) => {
        assert.equal(property, "servers.default.browserEndpoint.httpPort");
        const source = require(
          path.join(
            __dirname,
            "../envs/kickoffDockerLocal",
            server,
            "config/properties",
          ),
        );
        return source.servers.default.browserEndpoint.httpPort + 1000;
      },
    };
    const changed = bindings.resolve(
      { tooling: { container: declaration } },
      {},
      context,
    ).tooling.container;
    assert.deepEqual(
      changed.hostPorts,
      effective.hostPorts.map((port) => port + 1000),
    );
    assert.deepEqual(changed.qualification.readLoadPorts, [6314, 6300]);
    assert.deepEqual(
      changed.nativeIsolationPorts,
      effective.nativeIsolationPorts,
    );
    const later = bindings.merge(
      changed,
      bindings.resolve({
        qualification: {
          readLoadPorts: { $config: "replace", value: [9000] },
        },
      }),
    );
    assert.deepEqual(later.qualification.readLoadPorts, [9000]);
    assert.deepEqual(later.hostPorts, changed.hostPorts);
  },
);

require("node:test")(
  "Editorial consumes Process internal coordinates through the selected connection",
  () => {
    const { moduleConfiguration } = require("./helpers/configuration");
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const runtime = loadRuntime("wcmsStagedServer", environment);
      assert.equal(runtime.editorial.workflow.processBaseUrl, undefined);
      assert.equal(runtime.editorial.workflow.processConnectionName, "process");
      const peer = moduleConfiguration(
        runtime,
        runtime.editorial.workflow.processConnectionName,
      );
      assert.equal(peer.abstractEndpoint.httpPort, 4330);
      assert.equal(
        peer.abstractEndpoint.httpHost,
        environment === "kickoffLocal" ? "localhost" : "process",
      );
      if (environment === "kickoffDockerLocal")
        assert.equal(peer.browserEndpoint.httpPort, 5330);
    }
  },
);
const administration = {
  backofficeApplicationInitialization:
    coreProperties.backofficeApplicationInitialization,
  backofficeFunctionalModuleActivationData:
    coreProperties.backofficeFunctionalModuleActivationData,
};

assert.deepEqual(metadata.nodics.owns, ["configuration", "data", "llm"]);
assert.deepEqual(metadata.nodics.runtime, {
  router: false,
  publish: false,
  web: false,
});
assert.equal(
  metadata.nodics.extends,
  undefined,
  "Kickoff Core project defaults must not activate WCMS or Commerce",
);
assert.equal(
  administration.backofficeApplicationInitialization.projectRoot,
  undefined,
);
assert.equal(
  administration.backofficeApplicationInitialization.projectCode,
  undefined,
);
const initializationOwner = require(
  path.join(
    frameworkRoot,
    "nodics.platform/modules/backoffice/config/properties",
  ),
).backofficeApplicationInitialization;
assert.deepEqual(initializationOwner.projectRoot, {
  $config: "path",
  base: "project",
  relative: "",
});
assert.equal(
  initializationOwner.projectCode.$config,
  "env",
  "BackOffice owns project-context mechanics without activating runtime capabilities",
);
assert.equal(
  administration.backofficeApplicationInitialization.target.connectionName,
  "wcmsStaged",
);
for (const profile of Object.values(
  administration.backofficeApplicationInitialization.profiles,
)) {
  assert.equal(
    profile.target,
    undefined,
    "Deployment transports stay in the selected environment/server",
  );
}

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  require("node:test")(
    `${environment} Waste inherits approval and journey defaults without required customer copies`,
    () => {
      const local = require(`../envs/${environment}/config/properties`);
      const server = require(
        `../envs/${environment}/wasteServer/config/properties`,
      );
      assert.equal(
        (server.waste || local.waste).projectOverlay,
        undefined,
      );
      assert.equal(server.waste?.accelerator, undefined);

      assert.equal(
        Object.hasOwn(
          (server.waste || local.waste).operations,
          "requireDifferentApprover",
        ),
        false,
      );
      for (const role of ["COMMERCE", "WASTE"])
        assert.equal(
          Object.hasOwn((server.eWaste || local.eWaste), "journeys"),
          false,
          role + " must inherit journey inclusion",
        );

      const runtime = loadRuntime("wasteServer", environment, {});
      const modules = activeModuleNames(runtime);
      for (const owner of ["wasteCore", "eWaste"]) {
        assert(modules.includes(owner));
        assert(modules.indexOf(owner) < modules.indexOf(environment));
      }
      const defaults = require(
        path.join(
          frameworkRoot,
          "nodics.waste/modules/wasteCore/config/properties",
        ),
      ).waste.operations;
      assert.equal(
        runtime.waste.operations.requireDifferentApprover,
        defaults.requireDifferentApprover,
      );
      assert.equal(runtime.waste.operations.requireScopes, true);
      assert.equal(runtime.waste.operations.requireVerification, true);
      assert.equal(
        runtime.eWaste.journey.arrivalRadiusMetres,
        environment === "kickoffLocal" ? 200 : 50,
      );
      assert.equal(
        runtime.eWaste.journey.reviewAssignment.queueCode,
        (server.eWaste || local.eWaste).journey.reviewAssignment
          .queueCode,
      );
      assert.equal(
        runtime.eWaste.journey.depositInstruction,
        (server.eWaste || local.eWaste).journey.depositInstruction,
      );
      assert.equal(runtime.eWaste.application.enabled, true);
      if (environment === "kickoffLocal")
        assert.equal(runtime.eWaste.outcomeCommunication.enabled, true);
      assert.equal(runtime.eWaste.journeys, undefined);
      assert.equal(runtime.waste.projectOverlay, undefined);
      assert.equal(runtime.waste.accelerator, undefined);
    },
  );
}

require("node:test")(
  "Docker arrival input inherits the active owner default while Local keeps its intentional radius",
  () => {
    for (const server of ["commerceServer", "wasteServer"]) {
      const docker = require(`../envs/kickoffDockerLocal/${server}/config/properties`);
      assert.deepEqual(
        docker.eWaste.journey.arrivalRadiusMetres,
        {
          $config: "env",
          name: "CIRCA_EWASTE_ARRIVAL_RADIUS_METRES",
          type: "number",
        },
        "Docker declares only the optional deployment input, not an owner default",
      );
    }
    const { execFileSync } = require("node:child_process");
    for (const environment of ["kickoffDockerLocal", "kickoffLocal"]) {
      for (const input of [undefined, "", "125"]) {
        const result = JSON.parse(
          execFileSync(
            process.execPath,
            [
              "-e",
              `
                const path = require("node:path");
                const options = JSON.parse(process.argv[1]);
                // Change only the cached owner contribution in this isolated process.
                const owner = require(path.join(options.frameworkRoot,
                  "nodics.accelerators/modules/waste/modules/eWaste/config/properties"));
                owner.eWaste.journey.arrivalRadiusMetres = 73;
                const probe = require(path.join(options.frameworkRoot,
                  "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));
                probe.resolve(options).then(result => process.stdout.write(JSON.stringify({
                  radius: result.properties.eWaste.journey.arrivalRadiusMetres,
                  ownerActive: result.modules.includes("eWaste"),
                })));
              `,
              JSON.stringify({
                projectRoot: path.resolve(__dirname, ".."),
                frameworkRoot,
                environment,
                server: "wasteServer",
              }),
            ],
            {
              encoding: "utf8",
              timeout: 30000,
              env: {
                PATH: process.env.PATH,
                HOME: process.env.HOME,
                ...(input === undefined
                  ? {}
                  : { CIRCA_EWASTE_ARRIVAL_RADIUS_METRES: input }),
              },
            },
          ),
        );
        assert.equal(result.ownerActive, true);
        assert.equal(
          result.radius,
          input === "125" ? 125 : environment === "kickoffLocal" ? 200 : 73,
          `${environment} must preserve owner inheritance and explicit input precedence`,
        );
      }
    }
  },
);

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  const waste = loadRuntime("wasteServer", environment, {});
  assert.equal(
    require(
      path.join(
        frameworkRoot,
        "nodics.accelerators/modules/waste/modules/eWaste/config/properties",
      ),
    ).eWaste.journey.arrivalRadiusMetres,
    50,
    "The implementing framework owner provides the approved default unless a deployment overrides it",
  );
  assert.equal(
    waste.eWaste.journey.arrivalRadiusMetres,
    environment === "kickoffLocal" ? 200 : 50,
    "Only local development widens Circa arrival radius for easier device testing",
  );
  assert.equal(
    loadRuntime("wasteServer", environment, {
      CIRCA_EWASTE_ARRIVAL_RADIUS_METRES: "125",
    }).eWaste.journey.arrivalRadiusMetres,
    125,
    "Explicit deployment input overrides both Local and application defaults",
  );
  assert.deepEqual(
    waste.copilot.knowledge.sourceRegistry.definitions.map((source) => ({
      code: source.code,
      paths: source.paths,
    })),
    [],
    "Circa must not preselect or replace framework knowledge sources",
  );
  const commerce = loadRuntime("commerceServer", environment);
  const ingestion = waste.copilot.knowledge.ingestion;
  assert.equal(ingestion.ingestOnStart, environment === "kickoffLocal");
  assert.equal(ingestion.startup.environment, environment);
  assert.equal(ingestion.startup.sourceProject, null);
  assert.equal(ingestion.startup.serviceId, "copilot-knowledge-startup");
  assert.equal(ingestion.startup.failOnRejectedFiles, false);
  assert.equal(ingestion.startup.rejectionMessage, null);
  assert.equal(commerce.copilot?.knowledge?.ingestion, undefined);
  assert.deepEqual(
    commerce.fulfillmentCore.customerShipping.methods.map(
      (method) => method.code,
    ),
    ["STANDARD", "STANDARD_AED"],
    "Offered shipping methods are exactly the selected customer policy",
  );
  const environmentRoot = path.join(__dirname, "../envs", environment);
  assert(
    Number(metadata.index) >
      Number(require(path.join(environmentRoot, "package.json")).index),
    "Project-owned defaults load after environment identity and before server overrides",
  );
  for (const entry of fs.readdirSync(environmentRoot, {
    withFileTypes: true,
  })) {
    const file = path.join(environmentRoot, entry.name, "config/properties.js");
    if (!entry.isDirectory() || !fs.existsSync(file)) continue;
    const properties = require(file);
    assert.equal(
      (properties.activeModules?.modules || []).includes(
        "kickoffAdministration",
      ),
      false,
      "The synthetic kickoffAdministration module must not be selected",
    );
    if (entry.name !== "platformServer") continue;
    const effective = loadRuntime(entry.name, environment);
    const consumer = require(
      path.join(
        frameworkRoot,
        "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService",
      ),
    );
    const previousConfig = global.CONFIG;
    let profiles;
    try {
      global.CONFIG = { get: (key) => effective[key] };
      profiles = Object.fromEntries(
        Object.entries(
          effective.backofficeApplicationInitialization.profiles,
        ).map(([code, profile]) => [code, consumer.resolveProfile(profile)]),
      );
    } finally {
      global.CONFIG = previousConfig;
    }
    for (const code of Object.keys(
      administration.backofficeApplicationInitialization.profiles,
    )) {
      assert.equal(profiles[code].code, code);
      assert(
        profiles[code].owner &&
          profiles[code].siteCode &&
          profiles[code].baselineCode,
      );
      assert(
        profiles[code].target?.connectionName,
        "A shared profile still requires its deployment target",
      );
    }
    assert.equal(
      effective.backofficeFunctionalModuleActivationData.modules[
        "nodics.communication"
      ],
      undefined,
      "Communication package facts come from its registered manifest",
    );
    if (environment === "kickoffLocal") {
      assert.equal(effective.localResetProvider.enabled, true);
      assert.deepEqual(effective.localResetProvider.environmentAllowlist, [
        environment,
      ]);
    } else {
      assert.equal(
        effective.localResetProvider.enabled,
        true,
        "Docker reset enablement is environment-level, not repeated per server",
      );
      assert.deepEqual(effective.localResetProvider.environmentAllowlist, [
        environment,
      ]);
      assert.deepEqual(effective.localResetProvider.enabledRuntimeRoles, [
        "WASTE",
        "LOCATION",
      ]);
    }
  }
}
assert.equal(
  require("../envs/kickoffLocal/platformServer/config/properties")
    .profileBrowserSession,
  undefined,
);
assert.equal(
  require("../envs/kickoffLocal/config/properties").profileBrowserSession
    .allowInsecureLoopback,
  true,
);
assert.equal(
  require("../envs/kickoffLocal/commerceServer/config/properties").product?.discovery?.catalogue,
  undefined,
);
assert.equal(
  loadRuntime("commerceServer").product.discovery.catalogue.maximumCandidates,
  1000,
);
const localProcessPackage = require("../envs/kickoffLocal/processServer/package.json");
assert(
  localProcessPackage.nodics.runtimeModuleRoots.includes("nodics.rulesEngine"),
  "Process must be able to discover inactive rulesApi data-release contributions without activating Rules behavior",
);
console.log(
  "Kickoff shared defaults, activation scope and deployment overlays validated",
);

const platformStartup =
  loadRuntime("platformServer").copilot.knowledge.ingestion;
assert.equal(platformStartup.startup.environment, "kickoffLocal");
assert.equal(platformStartup.startup.sourceProject, null);
assert.equal(
  platformStartup.startup.serviceId,
  "kickoff-local-knowledge-indexer",
);
assert.equal(platformStartup.startup.logSummary, true);
assert.equal(platformStartup.startup.failOnRejectedFiles, false);
assert.equal(
  loadRuntime("platformServer", "kickoffLocal", {
    NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START: "false",
  }).copilot.knowledge.ingestion.ingestOnStart,
  false,
);
// Knowledge owns startup dispatch; reference no-op hooks are covered by applicationConfigurationOwnershipContract.

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  const environmentRoot = path.join(__dirname, "../envs", environment);
  const declaration = require(path.join(environmentRoot, "config/properties"));
  for (const server of fs.readdirSync(environmentRoot)) {
    const file = path.join(environmentRoot, server, "config/properties.js");
    if (!fs.existsSync(file)) continue;
    const metadata = require(
      path.join(environmentRoot, server, "package.json"),
    );
    if (metadata.nodics.retired) continue;
    const properties = require(file);
    assert(!properties.activeModules.modules.includes(server));
    assert(!properties.activeModules.modules.includes(environment));
    const effective = loadRuntime(server, environment, {
      NODICS_MONGODB_URI: "mongodb://configuration-test.invalid:27017",
      NODICS_ELASTICSEARCH_URL: "http://search-configuration-test.invalid:9200",
    });
    const declaredDatabaseName =
      properties.database?.default?.mongodb?.master?.databaseName;
    if (typeof declaredDatabaseName === "string") {
      assert.equal(
        effective.database.default.mongodb.master.databaseName,
        declaredDatabaseName,
        "Explicit server database isolation must survive the framework default change",
      );
    }
    if (environment === "kickoffDockerLocal") {
      assert.equal(
        effective.database.default.mongodb.master.URI,
        "mongodb://configuration-test.invalid:27017",
      );
      assert.equal(properties.database.default.mongodb.master.URI, undefined);
      for (const [name, search] of Object.entries(effective.search || {})) {
        if (
          search.options?.enabled === true &&
          activeModuleNames(effective).includes(name)
        ) {
          assert.deepEqual(
            searchConfiguration(effective, name).connection.hosts,
            ["http://search-configuration-test.invalid:9200"],
          );
        }
      }
      assert.equal(effective.environment.class, "LOCAL_PRODUCTION_SIMULATION");
      assert.equal(properties.data?.dataReleases?.environmentClass, undefined);
    }
    assert.equal(declaration.httpHardening?.cors?.allowedHeaders, undefined);
    assert.equal(declaration.httpHardening?.cors?.exposedHeaders, undefined);
    assert.equal(effective.authSecurity.securityStamp.enabled, true);
    assert.equal(properties.httpHardening?.cors?.allowedOrigins, undefined);
    assert.equal(properties.httpHardening?.cors?.deniedOrigins, undefined);
    if (environment === "kickoffLocal") {
      assert(
        declaration.httpHardening.cors.allowedOrigins.includes(
          "http://localhost:3600",
        ),
      );
      for (const origin of declaration.httpHardening.cors.allowedOrigins) {
        assert.equal(
          new URL(origin).origin,
          origin,
          "Deployment origins must be exact origins",
        );
      }
    } else {
      assert.equal(declaration.httpHardening?.cors?.allowedOrigins, undefined);
    }
    const origins = corsOrigins(effective);
    for (const endpoint of Object.values(
      declaration.httpHardening?.cors?.originEndpoints || {},
    )) {
      const origin = `http://localhost:${endpoint.port}`;
      assert(
        origins.allowedOrigins.includes(origin) ||
          origins.deniedOrigins.includes(origin),
        "Each customer browser endpoint reaches the selected API composition",
      );
    }
    for (const origin of declaration.httpHardening?.cors?.allowedOrigins ||
      []) {
      assert(
        origins.allowedOrigins.includes(origin) ||
          origins.deniedOrigins.includes(origin),
      );
    }
  }

  if (environment === "kickoffLocal") {
    assert.equal(
      declaration.search,
      undefined,
      "Local inherits the provider-owned search address",
    );
  }
  assert.equal(declaration.configurationValues, undefined);
  assert.equal(
    fs.existsSync(path.join(environmentRoot, "nodics.environment.json")),
    false,
  );
}
console.log(
  "Kickoff minimal topology, inherited connections and endpoint overrides validated",
);

require("node:test")(
  "Kickoff environments enable inherited Redis with deployment-owned isolation",
  async () => {
    assert.deepEqual(
      require("../envs/kickoffLocal/config/properties").cache.default.engines
        .redis,
      { enabled: true, options: { prefix: "kickoffLocalRuntimeAuth" } },
      "Local enables Redis and overrides only its disposable deployment namespace",
    );
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const effective = loadRuntime("commerceServer", environment);
      const redis = (await cacheConfiguration(effective, "auth")).engines.redis;
      assert.equal(redis.enabled, true);
      if (environment === "kickoffLocal") {
        assert.equal(redis.options.prefix, "kickoffLocalRuntimeAuth");
        assert.equal(redis.options.host, "localhost");
        assert.equal(redis.options.port, 6379);
      }
      if (environment === "kickoffDockerLocal") {
        assert.equal(redis.options.sentinel.enabled, true);
        assert.equal(redis.options.sentinel.name, "nodics");
        assert.deepEqual(redis.options.sentinel.endpoints, [
          { host: "redis-sentinel", port: 26379 },
        ]);
        assert.equal(redis.options.sentinel.connectTimeout, 5000);
        assert.equal(redis.options.sentinel.commandTimeout, 3000);
      }
    }
  },
);

require("node:test")(
  "Kickoff browser endpoints reach Online and Process without Platform activation",
  () => {
    const local = require("../envs/kickoffLocal/config/properties");
    const docker = require("../envs/kickoffDockerLocal/config/properties");
    assert.equal(local.httpHardening?.cors?.enabled, undefined);
    assert.equal(local.httpHardening.cors.originEndpoints.agora.port, 3300);
    assert.equal(docker.httpHardening.cors.enabled, undefined);
    for (const server of ["wcmsOnlineServer", "processServer"]) {
      const effective = loadRuntime(server);
      const modules = activeModuleNames(effective);
      assert.equal(modules.includes("nodics.platform"), false);
      assert.equal(modules.includes("axis"), false);
      assert.equal(effective.httpHardening.cors.enabled, true);
      for (const [code, endpoint] of Object.entries(
        local.httpHardening.cors.originEndpoints,
      )) {
        assert.deepEqual(
          effective.httpHardening.cors.originEndpoints[code],
          endpoint,
        );
      }
    }
  },
);

assert.equal(
  require("../envs/kickoffLocal/config/properties").database,
  undefined,
  "Local must inherit MongoDB defaults instead of declaring a project-branded baseline",
);

require("node:test")(
  "Local publication callback and operational Commerce activation preserve destination authority",
  () => {
    const processRuntime = loadRuntime("processServer");
    assert.ok(processRuntime.runtimeIdentity.remoteModules.includes("cms"));
    assert.ok(
      processRuntime.runtimeIdentity.remoteModules.includes("editorial"),
    );
    assert.ok(
      processRuntime.runtimeIdentity.remoteModules.includes("rulesApi"),
    );
    assert.ok(
      processRuntime.data.dataReleases.contributions.some(
        (contribution) =>
          contribution.moduleName === "rulesApi" &&
          contribution.sections.includes("rulesPolicyApproval"),
      ),
    );
    const platform = loadRuntime("platformServer");
    assert.equal(platform.backofficeFunctionalModuleActivationData.modules[
      "nodics.commerce"
    ].dataPackages.some(pack => pack.code === "store:core-reference"), false);
    const rulesPack = platform.backofficeFunctionalModuleActivationData.modules[
      "nodics.rulesEngine"
    ].dataPackages.find((pack) => pack.code === "rulesApi:rulesPolicyApproval");
    assert.equal(rulesPack.targetServer, "processServer");
    const rulesTarget = loadRuntime(rulesPack.targetServer);
    const rulesManifest = require(
      path.join(
        frameworkRoot,
        "nodics.rulesEngine/modules/rulesApi/data/manifest.json",
      ),
    );
    assert.equal(
      rulesTarget.runtimeRole.code,
      rulesManifest.sections.rulesPolicyApproval.destinationRole,
    );
  },
);

require("node:test")(
  "Native Product owner reads inherit transport type but retain qualified deployment selections",
  () => {
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    const owner = require(
      path.join(
        frameworkRoot,
        "nodics.commerce/modules/baseCommerce/modules/product/config/properties",
      ),
    ).product.marketplaceAuthoring;
    const local = require("../envs/kickoffLocal/commerceStagedServer/config/properties").product.marketplaceAuthoring;
    const runtime = loadRuntime("commerceStagedServer", "kickoffLocal");
    assert(activeModuleNames(runtime).includes("product"));
    assert.equal(owner.bundlePublication.enabled, false);
    assert.deepEqual(local.bundlePublication, { enabled: true });
    assert.deepEqual(runtime.product.marketplaceAuthoring.bundlePublication, {
      ...owner.bundlePublication,
      enabled: true,
    });
    assert.equal(
      loadRuntime("commerceStagedServer", "kickoffDockerLocal").product
        .marketplaceAuthoring.bundlePublication.enabled,
      false,
    );
    for (const [key, moduleName, connectionName] of [
      ["storeSource", "store", "commerce"],
      ["intentSource", "eWaste", "waste"],
    ]) {
      const selected = local[key];
      assert.deepEqual(selected, {
        connectionName,
        allowInsecureLoopback: true,
      });
      const expected = {
        ...selected,
        moduleName,
        targetAuthority: { publication: "OPERATIONAL" },
        timeoutMs: 15000,
        connectionType: "abstract",
      };
      const integration =
        key === "intentSource"
          ? require(
              path.join(
                frameworkRoot,
                "nodics.accelerators/modules/waste/modules/eWaste/config/properties",
              ),
            ).product.marketplaceAuthoring
              .intentSource
          : {};
      const inherited = bindings.merge(
        bindings.merge(owner[key], integration),
        selected,
      );
      assert.deepEqual(inherited, expected);
      assert.deepEqual(runtime.product.marketplaceAuthoring[key], expected);
      const later = {
        connectionName: "partnerOwner",
        timeoutMs: 10000,
        allowInsecureLoopback: false,
      };
      assert.deepEqual(
        bindings.merge(inherited, bindings.resolve(later, inherited)),
        { ...expected, ...later },
      );
      assert.equal(owner[key].connectionName, null);
      assert.equal(
        owner[key].moduleName,
        key === "storeSource" ? "store" : null,
      );
      assert.deepEqual(
        owner[key].targetAuthority,
        key === "storeSource" ? { publication: "OPERATIONAL" } : null,
      );
      assert.equal(owner[key].allowInsecureLoopback, false);
      const docker = loadRuntime("commerceStagedServer", "kickoffDockerLocal")
        .product.marketplaceAuthoring[key];
      assert.deepEqual(
        docker,
        owner[key],
        "Native qualification must not select Docker targets",
      );
    }
  },
);

require("node:test")(
  "Local bundle Pricing inherits owner bounds without enabling Docker",
  () => {
    const owner = require(
      path.join(
        frameworkRoot,
        "nodics.commerce/modules/baseCommerce/modules/pricing/config/properties",
      ),
    ).pricing.bundleListings;
    const local = require("../envs/kickoffLocal/commerceServer/config/properties").pricing.bundleListings;
    assert.deepEqual(local, { enabled: true, qualified: true });
    assert.equal(owner.enabled, false);
    assert.equal(owner.qualified, false);
    assert.deepEqual(
      loadRuntime("commerceServer", "kickoffLocal").pricing.bundleListings,
      { ...owner, ...local },
    );
    assert.deepEqual(
      loadRuntime("commerceServer", "kickoffDockerLocal").pricing
        .bundleListings,
      owner,
    );
  },
);

require("node:test")(
  "Local Product publication inherits neutral owner fields and retains selected authority",
  () => {
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    const loader = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService",
      ),
    );
    const ownerRoot = path.join(
      frameworkRoot,
      "nodics.commerce/modules/baseCommerce/modules/product",
    );
    const owner = require(path.join(ownerRoot, "config/properties")).product
      .publication;
    const ownerIndex = require(path.join(ownerRoot, "package.json")).index;
    const environmentIndex = require("../envs/kickoffLocal/package.json").index;
    assert.deepEqual(loader.sortModules([environmentIndex, ownerIndex]), [
      ownerIndex,
      environmentIndex,
    ]);

    for (const [server, role] of [
      ["commerceServer", "COMMERCE"],
      ["commerceStagedServer", "COMMERCE_STAGED"],
    ]) {
      const runtime = loadRuntime(server, "kickoffLocal");
      assert.ok(activeModuleNames(runtime).includes("product"));
      const declaration = require(`../envs/kickoffLocal/${server}/config/properties`).product.publication;
      assert.equal(
        runtime.product.publication.targetTransportProvider,
        "DefaultProductPublicationTransportService",
      );
      for (const [key, connectionName, runtimeRole] of [
        ["target", "commerce", "COMMERCE"],
        ["source", "commerceStaged", "COMMERCE_STAGED"],
      ]) {
        const selected = declaration[key];
        assert.deepEqual(selected, { connectionName });
        const inherited = bindings.merge(owner[key], selected);
        const before = bindings.merge(inherited, {
          moduleName: "product",
          connectionType: "abstract",
        });
        assert.deepEqual(inherited, before);
        assert.deepEqual(runtime.product.publication[key], before);
        const changedOwner = {
          ...owner[key],
          moduleName: "partnerProduct",
          connectionType: "rest",
        };
        assert.deepEqual(bindings.merge(changedOwner, selected), {
          ...changedOwner,
          ...selected,
        });
        const override = {
          connectionName: "partnerPublication",
          connectionType: "rest",
          runtimeRole: "PARTNER",
        };
        assert.deepEqual(bindings.merge(inherited, override), {
          ...before,
          ...override,
        });
        const docker = loadRuntime(server, "kickoffDockerLocal");
        assert.ok(activeModuleNames(docker).includes("product"));
        assert.equal(docker.product.publication[key].connectionName, null);
        assert.equal(
          docker.product.publication.targetTransportProvider,
          "DefaultProductPublicationTransportService",
        );
        assert.equal(
          docker.schemaPolicies.product.catalogueVersioned.isVersionedEnabled,
          docker.runtimeRole.publication === "STAGED",
        );
      }
    }
  },
);

require("node:test")(
  "Local physical search isolation inherits keyed logical identities and owner mappings",
  () => {
    const { merge } = require("./helpers/configuration");
    const loader = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService",
      ),
    );
    const files = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultFilesLoaderService",
      ),
    );
    const provider = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nSearch/elastic/src/service/schema/defaultElasticSearchSchemaHandlerService",
      ),
    );
    const overlay = require("../envs/kickoffLocal/src/search/indexes");
    const checkedOwners = [];
    for (const [server, paths] of [
      ["commerceServer", [
        "nodics.commerce/modules/baseCommerce/modules/product",
        "nodics.commerce/modules/baseCommerce/modules/commerceSearch/modules/commerceSearchCore",
      ]],
      ["platformServer", ["nodics.discovery/modules/discoveryProjection"]],
    ]) {
      const runtime = loadRuntime(server, "kickoffLocal");
      const owners = paths.map((relative) => {
        const root = path.join(frameworkRoot, relative);
        const metadata = require(path.join(root, "package.json"));
        assert.ok(activeModuleNames(runtime).includes(metadata.name));
        return { name: metadata.name, path: root, index: metadata.index };
      });
      const localMetadata = require("../envs/kickoffLocal/package.json");
      const modules = [
        ...owners,
        {
          name: localMetadata.name,
          index: localMetadata.index,
          path: path.resolve(__dirname, "../envs/kickoffLocal"),
        },
      ];
      assert.deepEqual(
        loader.sortModules(modules.map((module) => module.index)),
        modules.map((module) => module.index),
      );
      assert.ok(activeModuleNames(runtime).includes("elastic"));
      assert.equal(
        activeModuleNames(
          loadRuntime(server, "kickoffDockerLocal"),
        ).includes("kickoffLocal"),
        false,
      );
      const previous = {
        NODICS: global.NODICS,
        CONFIG: global.CONFIG,
        UTILS: global.UTILS,
      };
      try {
        global.NODICS = {
          getIndexedModules: () => modules,
          getNodicsHome: () => frameworkRoot,
        };
        global.CONFIG = { get: (key) => runtime[key] };
        global.UTILS = {
          isBlank: (value) => !value || Object.keys(value).length === 0,
        };
        const definitions = { ...files, LOG: { debug() {} } }.loadFiles(
          "/src/search/indexes.js",
        );
        for (const { name: moduleName } of owners) {
          checkedOwners.push(moduleName);
          const indexes = overlay[moduleName];
          for (const [typeName, selected] of Object.entries(indexes)) {
            assert.deepEqual(Object.keys(selected), ["indexName"]);
            const target = {
              typeName,
              properties: { code: { type: "keyword" } },
            };
            const definition = definitions[moduleName][typeName];
            const current = provider.prepareFromDefinitions(
              moduleName,
              "default",
              structuredClone(definition),
              target,
              typeName,
            );
            const before = provider.prepareFromDefinitions(
              moduleName,
              "default",
              { ...structuredClone(definition), typeName },
              target,
              typeName,
            );
            assert.deepEqual(current, before);
            assert.equal(current.typeName, typeName);
            assert.equal(current.indexName, selected.indexName);
            assert.deepEqual(current.properties.code, target.properties.code);
            if (definition.properties) {
              for (const field of Object.keys(definition.properties))
                assert.ok(current.properties[field]);
            }
            const laterDefinition = merge({}, definition, {
              indexName: "partner_" + typeName.toLowerCase(),
            });
            const later = provider.prepareFromDefinitions(
              moduleName,
              "default",
              laterDefinition,
              target,
              typeName,
            );
            assert.equal(later.typeName, typeName);
            assert.equal(later.indexName, "partner_" + typeName.toLowerCase());
            assert.deepEqual(later.properties, current.properties);
          }
        }
      } finally {
        for (const [key, value] of Object.entries(previous)) {
          if (value === undefined) delete global[key];
          else global[key] = value;
        }
      }
    }
    assert.deepEqual(checkedOwners.sort(), Object.keys(overlay).sort());
  },
);

require("node:test")(
  "Publication bridge mechanics inherit without selecting deployment authority",
  () => {
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    const owner = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nPublish/config/properties",
      ),
    ).publish;
    for (const server of ["commerceStagedServer", "wcmsStagedServer"]) {
      const declaration = require(
        path.join(
          __dirname,
          "../envs/kickoffLocal",
          server,
          "config/properties",
        ),
      );
      const selected = declaration.publish.approvalWorkflow.target;
      assert.deepEqual(selected, { connectionName: "process" });
      const inherited = bindings.merge(owner.approvalWorkflow.target, selected);
      assert.deepEqual(inherited, {
        connectionName: "process",
        connectionType: "abstract",
        targetAuthority: { publication: "OPERATIONAL" },
      });
      const effective = loadRuntime(server, "kickoffLocal");
      assert(activeModuleNames(effective).includes("publish"));
      assert.deepEqual(effective.publish.approvalWorkflow.target, inherited);
      assert.equal(declaration.publish.providers, undefined);
      for (const domain of server === "commerceStagedServer"
        ? ["product", "pricing", "inventory", "tax", "promotion"]
        : ["media"]) {
        assert.equal(
          effective.publish.providers.workflowProviders[domain],
          "DefaultPublicationApprovalWorkflowService",
          server +
            ": selected Staged role inherits the owner's provider registration",
        );
      }
      const override = {
        connectionName: "partnerProcess",
        connectionType: "rest",
        timeoutMs: 43210,
      };
      const later = bindings.merge(
        inherited,
        bindings.resolve(override, inherited),
      );
      assert.deepEqual(later, { ...inherited, ...override });
      const changedOwner = {
        ...owner.approvalWorkflow.target,
        connectionType: "rest",
      };
      assert.equal(
        bindings.merge(changedOwner, selected).connectionType,
        "rest",
        "The customer no longer pins the inherited transport type",
      );
    }
    for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
      const unselected = loadRuntime("wcmsOnlineServer", environment).publish;
      assert.equal(unselected.approvalWorkflow.target.connectionName, null);
      assert.notEqual(
        unselected.providers.workflowProviders.media,
        "DefaultPublicationApprovalWorkflowService",
      );
    }
  },
);

require("node:test")(
  "Kickoff adopts owner transport defaults and preserves deployment policy",
  () => {
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    const cases = [
      [
        "kickoffDockerLocal",
        "wcmsStagedServer",
        "cms",
        "nodics.wcms/modules/cms",
        {
          publication: {
            workflow: {
              target: {
                moduleName: "workflow",
                connectionType: "abstract",
                timeoutMs: 10000,
                maxAttempts: 2,
              },
            },
            target: { moduleName: "cms" },
          },
        },
      ],
      [
        "kickoffDockerLocal",
        "wcmsStagedServer",
        "editorial",
        "nodics.wcms/modules/editorial",
        {
          publication: {
            target: { moduleName: "editorial", connectionType: "abstract" },
          },
        },
      ],
      ...["kickoffLocal", "kickoffDockerLocal"].map((environment) => [
        environment,
        "processServer",
        "process",
        "nodics.process/modules/workflow",
        { publicationDecisionCallback: { target: { moduleName: "cms" } } },
      ]),
    ];
    for (const [environment, server, namespace, owner, removed] of cases) {
      const declaration = require(
        path.join(
          __dirname,
          "../envs",
          environment,
          server,
          "config/properties",
        ),
      );
      const defaults = require(
        path.join(frameworkRoot, owner, "config/properties"),
      )[namespace];
      const current = declaration[namespace];
      const before = bindings.merge(current, removed);
      const resolve = (contribution) =>
        bindings.merge(defaults, bindings.resolve(contribution, defaults));
      assert.deepEqual(
        resolve(current),
        resolve(before),
        environment + "/" + server + "/" + namespace,
      );
      const effective = loadRuntime(server, environment);
      assert(activeModuleNames(effective).includes(path.basename(owner)));
      const targets =
        namespace === "process"
          ? ["publicationDecisionCallback.target"]
          : namespace === "cms"
            ? ["publication.workflow.target", "publication.target"]
            : ["publication.target"];
      for (const targetPath of targets) {
        const parts = targetPath.split(".");
        const read = (object) =>
          parts.reduce((value, key) => value[key], object);
        const target = read(current);
        for (const key of Object.keys(read(removed)))
          assert.equal(target[key], undefined);
        assert.deepEqual(read(effective[namespace]), read(resolve(before)));
        assert.equal(
          target.connectionName,
          namespace === "process"
            ? "cmsStaged"
            : targetPath.includes("workflow")
              ? "process"
              : "cmsOnline",
        );
        const override = {};
        let cursor = override;
        for (const key of parts) cursor = cursor[key] = {};
        cursor.timeoutMs = 43210;
        const later = bindings.merge(
          effective[namespace],
          bindings.resolve(override, effective[namespace]),
        );
        assert.equal(
          read(later).timeoutMs,
          43210,
          "Later deployment overrides remain supported",
        );
        const changedOwner = bindings.merge(defaults, override);
        assert.equal(
          read(
            bindings.merge(
              changedOwner,
              bindings.resolve(current, changedOwner),
            ),
          ).timeoutMs,
          43210,
          "Unpinned owner defaults remain adoptable",
        );
      }
      if (namespace === "process") {
        assert.equal(current.actionAdapters.allowedActions.$config, "replace");
        assert.deepEqual(
          effective.process.actionAdapters.allowedActions,
          current.actionAdapters.allowedActions.value,
        );
        assert.equal(
          current.remoteActions.targets.editorial.connectionName,
          "cmsStaged",
        );
        assert.equal(
          current.remoteActions.targets.rulesApi.connectionName,
          "rulesApi",
        );
      } else {
        assert.equal(current.publication.targetTransportProvider, undefined);
        assert.equal(
          effective[namespace].publication.targetTransportProvider,
          namespace === "cms"
            ? "DefaultCmsPublicationModuleTransportService"
            : "DefaultEditorialPublicationModuleTransportService",
        );
        assert.equal(declaration.cms.publication.enabled, true);
        assert.equal(declaration.runtimeRole.publication, "STAGED");
      }
    }
  },
);

require("node:test")(
  "Docker Commerce inherits schema participation for each Agora selection",
  () => {
    const bindings = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService",
      ),
    );
    const participants = {
      domainCommerceCore: ["sharedModules", "domainCommerceCore"],
      apparelProduct: ["domains", "apparel"],
      electronicsProduct: ["domains", "electronics"],
      telcoCatalog: ["domains", "telco"],
      telcoProvisioning: ["domains", "telco"],
      telcoSubscription: ["domains", "telco"],
    };
    const expectedParticipants = {
      all: Object.keys(participants),
      none: [],
      apparel: ["apparelProduct"],
      electronics: ["electronicsProduct"],
      telco: [
        "electronicsProduct",
        "telcoCatalog",
        "telcoProvisioning",
        "telcoSubscription",
      ],
    };
    for (const server of ["commerceServer", "commerceStagedServer"]) {
      const declaration = require(
        path.join(
          __dirname,
          "../envs/kickoffDockerLocal",
          server,
          "config/properties",
        ),
      );
      const before = structuredClone(declaration.database);
      for (const [name, [field, includes]] of Object.entries(participants)) {
        assert.equal(declaration.database[name], undefined);
        before[name] = { $config: "selected", name: "agora", field, includes };
      }
      for (const selection of [
        "all",
        "none",
        "apparel",
        "electronics",
        "telco",
      ]) {
        const variables = {
          NODICS_AGORA_DOMAINS: selection,
          NODICS_MONGODB_URI: "mongodb://cfg04.invalid:27017",
        };
        const context = { environmentVariables: variables };
        assert.deepEqual(
          bindings.resolve({ database: before }, coreProperties, context),
          bindings.resolve(
            { database: declaration.database },
            coreProperties,
            context,
          ),
          server +
            "/" +
            selection +
            " preserves resolved database contribution",
        );
        const effective = loadRuntime(server, "kickoffDockerLocal", variables);
        const modules = activeModuleNames(effective);
        for (const name of Object.keys(participants)) {
          const selected = expectedParticipants[selection].includes(name);
          assert.equal(
            modules.includes(name),
            selected,
            server + "/" + selection + "/" + name,
          );
          if (!selected) {
            assert.equal(effective.database[name], undefined);
            continue;
          }
          assert.ok(
            effective.database[name],
            name + " gets schema-derived participation",
          );
          const consumer = databaseConfiguration(effective, name);
          assert.equal(consumer.master.URI, variables.NODICS_MONGODB_URI);
          assert.equal(
            consumer.master.databaseName,
            declaration.database.default.mongodb.master.databaseName,
          );
          effective.database[name] = {
            mongodb: { master: { databaseName: "cfg04LaterOverride" } },
          };
          assert.equal(
            databaseConfiguration(effective, name).master.databaseName,
            "cfg04LaterOverride",
          );
          assert.equal(
            effective.database.default.mongodb.master.databaseName,
            declaration.database.default.mongodb.master.databaseName,
          );
        }
      }
    }
  },
);
