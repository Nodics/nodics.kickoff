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

require("node:test")("WCMS Online discovers the canonical Axis composition policy without activating Axis", () => {
  const projection = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));
  const result = projection.read({ projectRoot: path.resolve(__dirname, ".."), frameworkRoot,
    environment: "kickoffLocal", server: "wcmsOnlineServer" });
  const source = require(path.join(frameworkRoot, "nodics.platform/modules/axis/config/properties"));
  assert.deepEqual(result.properties.cms.publication.baselines.axis, source.cms.publication.baselines.axis);
  assert.equal(result.properties.cms.publication.runtimeRole, "ONLINE");
  assert.equal(result.properties.cms.runtimeRoleProfiles, undefined);
  assert.equal(result.properties.axis, undefined);
  assert.equal(result.modules.includes("axis"), false);
  assert.equal(result.modules.includes("profile"), false);
  assert.deepEqual(result.properties.runtimeIdentity,
    require("../envs/kickoffLocal/wcmsOnlineServer/package.json").nodics.runtimeIdentity);
  const configuration = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService"));
  const previous = global.NODICS;
  try {
    global.NODICS = undefined;
    const offline = configuration.readDeploymentConfiguration({ projectRoot: path.resolve(__dirname, ".."), frameworkRoot,
      environmentCode: "kickoffLocal", serverCode: "wcmsOnlineServer" });
    assert.deepEqual(offline.cms.publication.baselines.axis, source.cms.publication.baselines.axis);
    const disabled = configuration.readDeploymentConfiguration({ projectRoot: path.resolve(__dirname, ".."), frameworkRoot,
      environmentCode: "kickoffLocal", serverCode: "wcmsOnlineServer",
      inheritedProperties: { cms: { publication: { baselines: { axis: {
        employeeCompositionPaths: { $config: "replace", value: [] }
      } } } } } });
    assert.deepEqual(disabled.cms.publication.baselines.axis.employeeCompositionPaths, []);
    assert.equal(global.NODICS, undefined);
  } finally { global.NODICS = previous; }
});

require("node:test")("Local private capture attestation is explicit and never follows onboarding enablement", () => {
  const selected = { NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED: "true" };
  for (const server of ["platformServer", "processServer", "commerceServer"]) {
    const policy = loadRuntime(server, "kickoffLocal", selected).log.requestPrivacy;
    assert.equal(policy.qualified, true);
    assert.equal(policy.captureMode, "disabled");
    assert.equal(loadRuntime(server, "kickoffLocal", {
      NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true",
      NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED: "false",
    }).log.requestPrivacy.qualified, false);
  }
  assert.equal(loadRuntime("platformServer", "kickoffDockerLocal", selected).log.requestPrivacy.qualified, false);
});

require("node:test")("Local enterprise setup inspection and continuation qualifications remain independent", () => {
  const flags = {
    inspectionQualified: "NODICS_LOCAL_ENTERPRISE_SETUP_INSPECTION_QUALIFIED",
    privateGuardsQualified: "NODICS_LOCAL_ENTERPRISE_SETUP_PRIVACY_QUALIFIED",
    resumeQualified: "NODICS_LOCAL_ENTERPRISE_SETUP_RESUME_QUALIFIED",
  };
  const unset = Object.fromEntries(Object.values(flags).map(name => [name, "false"]));
  const policy = environment => loadRuntime("platformServer", "kickoffLocal", environment)
    .enterpriseManagement.setupContinuation;
  const baseline = policy({ ...unset, NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true" });
  for (const key of Object.keys(flags)) assert.equal(baseline[key], false);
  for (const [key, name] of Object.entries(flags)) {
    const selected = policy({ ...unset, [name]: "true" });
    for (const other of Object.keys(flags)) assert.equal(selected[other], other === key);
  }
  const all = Object.fromEntries(Object.values(flags).map(name => [name, "true"]));
  const docker = loadRuntime("platformServer", "kickoffDockerLocal", all)
    .enterpriseManagement.setupContinuation;
  for (const key of Object.keys(flags)) assert.equal(docker[key], false);
});

require("node:test")("Local recovery API opt-in remains environment-owned and Platform-scoped", () => {
  const server = require("../envs/kickoffLocal/platformServer/config/properties");
  assert.equal(server.apiExposure, undefined);
  const enabled = { NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true" };
  const disabled = { NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "false" };
  assert.equal(loadRuntime("platformServer", "kickoffLocal", enabled).apiExposure.categories.profileEmployeeRecovery.enabled, true);
  assert.equal(loadRuntime("platformServer", "kickoffLocal", disabled).apiExposure.categories.profileEmployeeRecovery.enabled, false);
  for (const [name, environment] of [["commerceServer", "kickoffLocal"], ["platformServer", "kickoffDockerLocal"]]) {
    assert.notEqual(loadRuntime(name, environment, enabled).apiExposure?.categories?.profileEmployeeRecovery?.enabled, true);
  }
});

require("node:test")("Local read-only identity assessment does not qualify or activate identity mutations", () => {
  const selected = { NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED: "true" };
  const local = loadRuntime("platformServer", "kickoffLocal", selected);
  assert.equal(local.identityGovernance.migration.assessment.enabled, true);
  assert.equal(local.enterpriseManagement.registration.inventoryQualified, false);
  assert.equal(local.enterpriseManagement.registration.assignmentClaimIndexQualified, false);
  assert.equal(local.profileEmployeeRecovery.credentialWriteQualified, false);
  assert.equal(loadRuntime("platformServer", "kickoffLocal", {
    NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED: "false",
  }).identityGovernance.migration.assessment.enabled, false);
  assert.equal(loadRuntime("platformServer", "kickoffDockerLocal", selected)
    .identityGovernance.migration.assessment.enabled, false);
});

require("node:test")("Local bootstrap source review remains separate from registration qualification", () => {
  const flag = "NODICS_LOCAL_BOOTSTRAP_IDENTITY_REVIEW_ENABLED";
  const selected = { [flag]: "true" };
  const local = loadRuntime("platformServer", "kickoffLocal", selected);
  assert.equal(local.identityGovernance.migration.assessment.bootstrapReview.enabled, true);
  assert.equal(local.identityGovernance.migration.assessment.enabled, false);
  assert.equal(local.enterpriseManagement.registration.inventoryQualified, false);
  assert.equal(local.enterpriseManagement.registration.assignmentClaimIndexQualified, false);
  assert.equal(local.profileEmployeeRecovery.inventoryQualified, false);
  assert.equal(local.profileEmployeeRecovery.credentialWriteQualified, false);
  assert.equal(loadRuntime("platformServer", "kickoffLocal", { [flag]: "false" })
    .identityGovernance.migration.assessment.bootstrapReview.enabled, false);
  for (const [server, environment] of [["processServer", "kickoffLocal"], ["platformServer", "kickoffDockerLocal"]]) {
    assert.notEqual(loadRuntime(server, environment, selected)
      .identityGovernance?.migration?.assessment?.bootstrapReview?.enabled, true);
  }
});

require("node:test")("Local registration prerequisites require separate installed-owner attestations", () => {
  const flags = {
    inventoryQualified: "NODICS_LOCAL_REGISTRATION_INVENTORY_QUALIFIED",
    assignmentClaimIndexQualified: "NODICS_LOCAL_REGISTRATION_CLAIM_INDEX_QUALIFIED",
  };
  const unset = Object.fromEntries(Object.values(flags).map(name => [name, "false"]));
  for (const [key, flag] of Object.entries(flags)) {
    const selected = { ...unset, [flag]: "true" };
    const local = loadRuntime("platformServer", "kickoffLocal", selected);
    for (const other of Object.keys(flags))
      assert.equal(local.enterpriseManagement.registration[other], other === key);
    assert.equal(local.enterpriseManagement.registration.enabled, false);
    assert.equal(local.profileEmployeeRecovery.inventoryQualified, false);
    assert.equal(local.profileEmployeeRecovery.credentialWriteQualified, false);
    assert.equal(local.enterpriseManagement.memberships.inventoryQualified, false);
    const docker = loadRuntime("platformServer", "kickoffDockerLocal", selected);
    for (const other of Object.keys(flags))
      assert.equal(docker.enterpriseManagement.registration[other], false);
  }
});

require("node:test")("Local Platform explicitly delegates only its registration Communication operations", () => {
  const local = loadRuntime("platformServer", "kickoffLocal");
  const policy = local.identityGovernance.migration.localRuntimeDeploymentGrantPermissions;
  for (const permission of ["communication.request", "communication.verification.execute"])
    assert.equal(policy.filter(value => value === permission).length, 1);
  assert.ok(policy.includes("profile.tenant.namespace.bind"));
  assert.equal(policy.includes("communication.callback.receive"), false);
  const identity = require("../envs/kickoffLocal/platformServer/package.json").nodics.runtimeIdentity;
  assert.equal(identity.remoteModules.filter(name => name === "commsApi").length, 1);
  assert.equal(activeModuleNames(local).includes("commsApi"), false);
  assert.deepEqual(local.profileTenantProvisioning.localRuntimeRemoteModuleExtensions, ["commsApi"]);
  for (const [server, environment] of [["commerceServer", "kickoffLocal"], ["platformServer", "kickoffDockerLocal"]]) {
    const runtime = loadRuntime(server, environment);
    const permissions = runtime.identityGovernance.migration.localRuntimeDeploymentGrantPermissions;
    assert.equal(permissions.includes("communication.verification.execute"), false);
    assert.deepEqual(runtime.profileTenantProvisioning.localRuntimeRemoteModuleExtensions || [], []);
  }
});

require("node:test")("Local employee review selects only its existing Process owner declaration without qualifying Profile or other deployments", () => {
  const { moduleConfiguration } = require("./helpers/configuration");
  const local = loadRuntime("processServer", "kickoffLocal");
  const docker = loadRuntime("processServer", "kickoffDockerLocal");
  assert.equal(local.process.runtime.internalStarts.enabled, true);
  assert.deepEqual(local.process.runtime.internalStarts.allowedDefinitions, ["profileEmployeeApplicationReview"]);
  assert.equal(local.process.runtime.internalStarts.permission, "process.instance.start.internal");
  assert.equal(local.process.runtime.internalRetirements.enabled, false);
  const action = "profile.applyEmployeeApplicationDecision";
  assert.equal(local.process.actionAdapters.allowedActions.filter(key => key === action).length, 1);
  assert.equal(local.process.actionAdapters.definitions[action], undefined, "Remote owner declarations must not be copied into Process");
  assert.equal(activeModuleNames(local).includes("profile"), false);
  assert.ok(require("../envs/kickoffLocal/processServer/package.json")
    .nodics.runtimeModuleRoots.includes("nodics.platform"),
  "Remote Profile action declarations require their discovery root without activation");
  assert.equal(local.process.remoteActions.targets.profile.connectionName, "profile");
  assert.equal(moduleConfiguration(local, "profile").abstractEndpoint.httpPort, 4300);
  const declaration = require(path.join(frameworkRoot, "nodics.platform/modules/profile/config/properties"))
    .process.actionAdapters.definitions[action];
  assert.equal(declaration.remote.runtimeRole, "PLATFORM");
  assert.equal(declaration.remote.requiresCompletedTask, true);
  assert.equal(declaration.remote.apiName, "/enterprise-access/applications/process-decision");
  assert.equal(docker.process.runtime.internalStarts.enabled, false);
  assert.equal(docker.process.actionAdapters.allowedActions.includes(action), false);
  assert.equal(docker.process.remoteActions.targets.profile, undefined);
  const platform = loadRuntime("platformServer", "kickoffLocal");
  assert.equal(platform.enterpriseManagement.registration.enabled, false);
  assert.equal(platform.enterpriseManagement.registration.inventoryQualified, false);
  assert.equal(platform.enterpriseManagement.registration.assignmentClaimIndexQualified, false);
  assert.equal(platform.enterpriseManagement.applications.review.enabled, false);
  assert.equal(platform.profileEmployeeRecovery.credentialWriteQualified, false);
});

require("node:test")("Local tenant provisioning selects all consumers but exposes only the Profile owner", () => {
  const enabled = { NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "true" };
  const disabled = { NODICS_LOCAL_ENTERPRISE_ONBOARDING_ENABLED: "false" };
  for (const name of ["platformServer", "commerceServer", "processServer", "wasteServer"]) {
    const selected = loadRuntime(name, "kickoffLocal", enabled);
    assert.equal(selected.profileTenantProvisioning.enabled, true);
    assert.equal(selected.profileTenantProvisioning.allowInsecureLoopback, true);
    assert.equal(loadRuntime(name, "kickoffLocal", disabled).profileTenantProvisioning.enabled, false);
    assert.equal(selected.apiExposure?.categories?.profileTenantProvisioning?.enabled === true, name === "platformServer");
  }
  const local = loadRuntime("platformServer", "kickoffLocal", enabled);
  const docker = loadRuntime("platformServer", "kickoffDockerLocal", enabled);
  assert.equal(local.identityGovernance.migration.localRuntimeDeploymentGrantPermissions
    .filter(permission => permission === "profile.tenant.namespace.bind").length, 1);
  assert.notEqual(docker.profileTenantProvisioning?.enabled, true);
  assert.notEqual(docker.apiExposure?.categories?.profileTenantProvisioning?.enabled, true);
});

require("node:test")("Platform preparation and isolated probes retain identical environment knowledge sources", () => {
  const { execFileSync } = require("node:child_process");
  const registry = require(path.join(frameworkRoot,
    "nodics.copilot/modules/copilotKnowledge/src/service/defaultCopilotKnowledgeSourceRegistryService"));
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const variables = { NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED: "false" };
    const probe = loadRuntime("platformServer", environment, variables).copilot.knowledge.sourceRegistry;
    const expected = probe.definitions;
    const prepared = JSON.parse(execFileSync(process.execPath, ["-e", `
      const path = require('node:path');
      const options = JSON.parse(process.argv[1]);
      const prepare = require(path.join(options.frameworkRoot, 'nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs'));
      for (const server of ['commerceServer', 'wasteServer', 'platformServer']) prepare({...options, server});
      const settings = CONFIG.get('copilot').knowledge.sourceRegistry;
      process.stdout.write(JSON.stringify(settings.definitions));
    `, JSON.stringify({ projectRoot: path.resolve(__dirname, ".."), frameworkRoot, environment })], {
      encoding: "utf8", timeout: 30000,
      env: { PATH: process.env.PATH, HOME: process.env.HOME, ...variables },
    }));
    assert.deepEqual(prepared, expected, "Prepared registry must match the isolated configuration probe");
    const local = prepared.find(source => source.code === "kickoff-copilot-composition-source");
    assert.equal(Boolean(local), environment === "kickoffLocal");
    if (local) {
      assert.equal(registry.expandDefinition(local, probe).sourceType, "SOURCE_CODE");
      assert.equal(local.enabled, true);
      assert.deepEqual(local.paths, ["envs/kickoffLocal/platformServer/**/*.js"]);
    }
    assert.equal(prepared.find(source => source.code === "nodics-axis-assistant-source").enabled, false);
  }
});

require("node:test")("Local Process resolves its complete remote action inventory without activating Profile", () => {
  const { execFileSync } = require("node:child_process");
  const result = JSON.parse(execFileSync(process.execPath, ["-e", `
    const path = require("node:path");
    const options = JSON.parse(process.argv[1]);
    require(path.join(options.frameworkRoot, "nodics.foundation/modules/nTooling/test/helpers/projectRuntimePreparation.cjs"))(options);
    const registry = require(path.join(options.frameworkRoot, "nodics.process/modules/workflow/src/service/operation/defaultProcessActionAdapterRegistryService"));
    process.stdout.write(JSON.stringify({
      profileActive: NODICS.getActiveModules().includes("profile"),
      actions: registry.allowedActions().map(action => registry.actionKey(action))
    }));
  `, JSON.stringify({projectRoot: path.resolve(__dirname, ".."), frameworkRoot, environment: "kickoffLocal", server: "processServer"})], {encoding: "utf8"}));
  assert.equal(result.profileActive, false);
  assert.ok(result.actions.includes("profile.applyEmployeeApplicationDecision"));
  assert.ok(result.actions.includes("cms.applyPublicationDecision"));
});

require("node:test")("Local Waste startup selection belongs to its environment role and permits later disablement", () => {
  const bindings = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
  const loader = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService"));
  const copilot = require("../envs/kickoffLocal/config/properties").copilot;
  assert.equal(copilot.runtimeRoleProfiles.WASTE.knowledge.ingestion.ingestOnStart, true);
  assert.equal(require("../envs/kickoffLocal/wasteServer/config/properties").copilot, undefined);
  const later = bindings.merge({ copilot, runtimeRole: { code: "WASTE" } }, {
    copilot: { runtimeRoleProfiles: { WASTE: { knowledge: { ingestion: { ingestOnStart: false } } } } },
  });
  assert.equal(loader.deriveRuntimeRoleCopilot(later).copilot.knowledge.ingestion.ingestOnStart, false);
  assert.equal(loader.deriveRuntimeRoleCopilot({ copilot, runtimeRole: { code: "OTHER" } }).copilot.knowledge, undefined);
});

require("node:test")("Platform context and external knowledge are explicit deployment selections", () => {
  const bindings = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const runtime = loadRuntime("platformServer", environment, {
      NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED: "false",
      NODICS_COPILOT_AXIS_ROOT: "",
    });
    assert.equal(runtime.copilot.core.environment, environment);
    const knowledge = runtime.copilot.knowledge;
    assert.equal(knowledge.ingestion.ingestOnStart, true, "Preserve established backend startup defaults");
    const sources = knowledge.sourceRegistry.definitions;
    assert.equal(sources.some(source => source.code === "kickoff-copilot-composition-source"), environment === "kickoffLocal");
    assert(sources.filter(source => source.repository === "nodics.axis").every(source => source.enabled === false));
    assert.equal(knowledge.repositoryRoots["nodics.axis"], undefined);
    const optedIn = loadRuntime("platformServer", environment, {
      NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED: "true",
      NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED: "true",
      NODICS_COPILOT_AXIS_ROOT: "/external-knowledge-not-read/axis",
    }).copilot.knowledge;
    assert(optedIn.sourceRegistry.definitions.filter(source => source.repository === "nodics.axis").every(source => source.enabled === true));
    assert.equal(optedIn.repositoryRoots["nodics.axis"], "/external-knowledge-not-read/axis");
    const disabled = loadRuntime("platformServer", environment, {
      NODICS_COPILOT_KNOWLEDGE_ENABLED: "false",
      NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START: "false",
    }).copilot.knowledge;
    assert.equal(disabled.ingestion.enabled, false);
    assert.equal(disabled.ingestion.ingestOnStart, false);
    assert(disabled.sourceRegistry.definitions.every(source => source.enabled === false));
  }
  assert.equal(bindings.resolve(coreProperties.copilot.runtimeRoleProfiles.PLATFORM.core, {}, {
    environmentCode: "unrelatedDeployment",
  }).environment, "unrelatedDeployment");
  assert.equal(JSON.stringify(coreProperties.copilot).includes("envs/kickoffLocal"), false);
  assert.equal(require("../envs/kickoffLocal/config/properties").tooling.acceptance.browserValidation.enabled, false);
});

require("node:test")("Docker selected published ports follow server projections and allow consumer overrides", () => {
  const { loadContainer } = require("./helpers/configuration");
  const bindings = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
  const declaration = require("../envs/kickoffDockerLocal/config/properties").tooling.container;
  const effective = loadContainer();
  assert.deepEqual(effective.hostPorts, [5300, 5312, 5314, 5330, 5340, 5350, 5352, 5360, 5370, 5380]);
  assert.deepEqual(effective.qualification.runtimePorts, effective.hostPorts);
  assert.deepEqual(effective.soak.readinessPorts, effective.hostPorts);
  assert.deepEqual(effective.resilienceQualification.readyPorts, effective.hostPorts);
  assert.deepEqual(effective.qualification.readLoadPorts, [5314, 5300]);
  assert.deepEqual(effective.resilienceQualification.readLoad.ports, [5314, 5300]);
  for (const [name, selector] of Object.entries(require("../envs/kickoffDockerLocal/config/properties").tooling.acceptance.urls)) {
    const server = require(path.join(__dirname, "../envs/kickoffDockerLocal", selector.server, "config/properties"));
    const endpoint = server.servers.default.browserEndpoint;
    assert.equal(effective.acceptance.urls[name], `http://${endpoint.httpHost}:${endpoint.httpPort}`);
  }
  assert.equal(effective.qualification.networkSeparation.publicContainer, undefined);
  assert.deepEqual(effective.qualification.networkSeparation.applicationContainers, effective.qualification.hardenedContainers);
  assert.deepEqual(effective.qualification.networkSeparation.forbiddenNetworks, ["nodics-kickoff-docker-local-public"]);
  const context = { readRuntimeProperty: (server, property) => {
    assert.equal(property, "servers.default.browserEndpoint.httpPort");
    const source = require(path.join(__dirname, "../envs/kickoffDockerLocal", server, "config/properties"));
    return source.servers.default.browserEndpoint.httpPort + 1000;
  } };
  const changed = bindings.resolve({ tooling: { container: declaration } }, {}, context).tooling.container;
  assert.deepEqual(changed.hostPorts, effective.hostPorts.map(port => port + 1000));
  assert.deepEqual(changed.qualification.readLoadPorts, [6314, 6300]);
  assert.deepEqual(changed.nativeIsolationPorts, effective.nativeIsolationPorts);
  const later = bindings.merge(changed, bindings.resolve({ qualification: {
    readLoadPorts: { $config: "replace", value: [9000] },
  } }));
  assert.deepEqual(later.qualification.readLoadPorts, [9000]);
  assert.deepEqual(later.hostPorts, changed.hostPorts);
});

require("node:test")("Editorial consumes Process internal coordinates through the selected connection", () => {
  const { moduleConfiguration } = require("./helpers/configuration");
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const runtime = loadRuntime("wcmsStagedServer", environment);
    assert.equal(runtime.editorial.workflow.processBaseUrl, undefined);
    assert.equal(runtime.editorial.workflow.processConnectionName, "process");
    const peer = moduleConfiguration(runtime, runtime.editorial.workflow.processConnectionName);
    assert.equal(peer.abstractEndpoint.httpPort, 4330);
    assert.equal(peer.abstractEndpoint.httpHost, environment === "kickoffLocal" ? "localhost" : "process");
    if (environment === "kickoffDockerLocal") assert.equal(peer.browserEndpoint.httpPort, 5330);
  }
});
const administration = {
  backofficeApplicationInitialization:
    coreProperties.backofficeApplicationInitialization.runtimeRoleProfiles
      .PLATFORM,
  backofficeFunctionalModuleActivationData:
    coreProperties.backofficeFunctionalModuleActivationData.runtimeRoleProfiles
      .PLATFORM,
};

assert.deepEqual(metadata.nodics.owns, ["configuration", "llm"]);
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
assert.deepEqual(administration.backofficeApplicationInitialization.projectRoot, {
  $config: "path",
  base: "project",
  relative: "",
});
assert.equal(
  administration.backofficeApplicationInitialization.projectCode.$config,
  "env",
  "Administration owns project setup context without activating runtime capabilities",
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
  const waste = loadRuntime(
    "wasteServer",
    environment,
    environment === "kickoffLocal"
      ? { CIRCA_EWASTE_ARRIVAL_RADIUS_METRES: "200" }
      : {},
  );
  assert.equal(
    require("../modules/circa.ewaste/config/properties").circaEWaste.journey
      .arrivalRadiusMetres.fallback,
    50,
    "Circa keeps the project default arrival radius strict unless an environment overrides it",
  );
  assert.equal(
    waste.circaEWaste.journey.arrivalRadiusMetres,
    environment === "kickoffLocal" ? 200 : 50,
    "Only local development widens Circa arrival radius for easier device testing",
  );
  assert.deepEqual(
    waste.copilot.knowledge.sourceRegistry.definitions.map((source) => ({
      code: source.code,
      paths: source.paths,
    })),
    [{ code: "circa-customer-guidance-v1", paths: ["v1/journey.md"] }],
    "The selected customer knowledge source must not inherit another source or wildcard path",
  );
  const commerce = loadRuntime("commerceServer", environment);
  const ingestion = waste.copilot.knowledge.ingestion;
  assert.equal(ingestion.ingestOnStart, environment === "kickoffLocal");
  assert.equal(ingestion.startup.environment, environment);
  assert.equal(ingestion.startup.sourceProject, "circa.ewaste");
  assert.equal(ingestion.startup.serviceId, "circa-customer-knowledge-indexer");
  assert.equal(ingestion.startup.failOnRejectedFiles, true);
  assert.equal(ingestion.startup.rejectionMessage, "CIRCA_CUSTOMER_KNOWLEDGE_REJECTED");
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
  require("../envs/kickoffLocal/commerceServer/config/properties").product,
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

const platformStartup = loadRuntime("platformServer").copilot.knowledge.ingestion;
assert.equal(platformStartup.startup.environment, "kickoffLocal");
assert.equal(platformStartup.startup.sourceProject, null);
assert.equal(platformStartup.startup.serviceId, "kickoff-local-knowledge-indexer");
assert.equal(platformStartup.startup.logSummary, true);
assert.equal(platformStartup.startup.failOnRejectedFiles, false);
assert.equal(loadRuntime("platformServer", "kickoffLocal", {
  NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START: "false",
}).copilot.knowledge.ingestion.ingestOnStart, false);
const previousService = Object.getOwnPropertyDescriptor(global, "SERVICE");
try {
  let calls = 0;
  const result = Promise.resolve(true);
  global.SERVICE = { DefaultCopilotKnowledgeRuntimeService: {
    ingestOnStart: (...args) => { assert.equal(args.length, 0); calls += 1; return result; },
  } };
  for (const server of ["platformServer", "wasteServer"]) {
    const hook = require(`../envs/kickoffLocal/${server}/nodics`);
    assert.equal(hook.postInit({ untrusted: true }), result);
  }
  assert.equal(calls, 2);
} finally {
  if (previousService) Object.defineProperty(global, "SERVICE", previousService);
  else delete global.SERVICE;
}

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
    const declaredDatabaseName = properties.database?.default?.mongodb?.master?.databaseName;
    if (typeof declaredDatabaseName === "string") {
      assert.equal(effective.database.default.mongodb.master.databaseName, declaredDatabaseName,
        "Explicit server database isolation must survive the framework default change");
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
      assert.equal(
        effective.environment.class,
        "LOCAL_PRODUCTION_SIMULATION",
      );
      assert.equal(properties.data?.dataReleases?.environmentClass, undefined);
    }
    assert.equal(declaration.httpHardening?.cors?.allowedHeaders, undefined);
    assert.equal(declaration.httpHardening?.cors?.exposedHeaders, undefined);
    assert.equal(effective.authSecurity.securityStamp.enabled, true);
    assert.equal(properties.httpHardening?.cors?.allowedOrigins, undefined);
    assert.equal(properties.httpHardening?.cors?.deniedOrigins, undefined);
    if (environment === "kickoffLocal") {
      assert(declaration.httpHardening.cors.allowedOrigins.includes("http://localhost:3600"));
      for (const origin of declaration.httpHardening.cors.allowedOrigins) {
        assert.equal(new URL(origin).origin, origin, "Deployment origins must be exact origins");
      }
    } else {
      assert.equal(declaration.httpHardening?.cors?.allowedOrigins, undefined);
    }
    const origins = corsOrigins(effective);
    for (const endpoint of Object.values(declaration.httpHardening?.cors?.originEndpoints || {})) {
      const origin = `http://localhost:${endpoint.port}`;
      assert(
        origins.allowedOrigins.includes(origin) || origins.deniedOrigins.includes(origin),
        "Each customer browser endpoint reaches the selected API composition",
      );
    }
    for (const origin of declaration.httpHardening?.cors?.allowedOrigins || []) {
      assert(origins.allowedOrigins.includes(origin) || origins.deniedOrigins.includes(origin));
    }
  }

  if (environment === "kickoffLocal") {
    assert.equal(declaration.search, undefined, "Local inherits the provider-owned search address");
  }
  assert.equal(declaration.configurationValues, undefined);
  assert.equal(fs.existsSync(path.join(environmentRoot, "nodics.environment.json")), false);

}
console.log(
  "Kickoff minimal topology, inherited connections and endpoint overrides validated",
);

require("node:test")(
  "Kickoff environments enable inherited Redis with deployment-owned isolation",
  async () => {
    assert.deepEqual(
      require("../envs/kickoffLocal/config/properties").cache.default.engines.redis,
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
        assert.deepEqual(redis.options.sentinel.endpoints, [{ host: "redis-sentinel", port: 26379 }]);
        assert.equal(redis.options.sentinel.connectTimeout, 5000);
        assert.equal(redis.options.sentinel.commandTimeout, 3000);
      }
    }
  },
);

require('node:test')('Kickoff browser endpoints reach Online and Process without Platform activation', () => {
  const local = require('../envs/kickoffLocal/config/properties');
  const docker = require('../envs/kickoffDockerLocal/config/properties');
  assert.equal(local.httpHardening?.cors?.enabled, undefined);
  assert.equal(local.httpHardening.cors.originEndpoints.agora.port, 3300);
  assert.equal(docker.httpHardening.cors.enabled, undefined);
  for (const server of ['wcmsOnlineServer', 'processServer']) {
    const effective = loadRuntime(server);
    const modules = activeModuleNames(effective);
    assert.equal(modules.includes('nodics.platform'), false);
    assert.equal(modules.includes('axis'), false);
    assert.equal(effective.httpHardening.cors.enabled, true);
    for (const [code, endpoint] of Object.entries(local.httpHardening.cors.originEndpoints)) {
      assert.deepEqual(effective.httpHardening.cors.originEndpoints[code], endpoint);
    }
  }
});

assert.equal(require("../envs/kickoffLocal/config/properties").database, undefined,
  "Local must inherit MongoDB defaults instead of declaring a project-branded baseline");

require('node:test')('Local publication callback and operational Commerce activation preserve destination authority', () => {
  const processRuntime = loadRuntime('processServer');
  assert.ok(processRuntime.runtimeIdentity.remoteModules.includes('cms'));
  assert.ok(processRuntime.runtimeIdentity.remoteModules.includes('editorial'));
  assert.ok(processRuntime.runtimeIdentity.remoteModules.includes('rulesApi'));
  assert.ok(processRuntime.data.dataReleases.contributions.some(contribution =>
    contribution.moduleName === 'rulesApi' &&
    contribution.sections.includes('rulesPolicyApproval')));
  const platform = loadRuntime('platformServer');
  const pack = platform.backofficeFunctionalModuleActivationData.modules['nodics.commerce'].dataPackages.find(pack => pack.code === 'baseCommerce:core-reference');
  assert.equal(pack.targetServer, 'commerceServer');
  const target = loadRuntime(pack.targetServer);
  const manifest = require(path.join(frameworkRoot, 'nodics.commerce/modules/baseCommerce/data/manifest.json'));
  assert.equal(target.runtimeRole.code, manifest.sections['core-reference'].destinationRole);
  const rulesPack = platform.backofficeFunctionalModuleActivationData.modules['nodics.rulesEngine'].dataPackages.find(pack => pack.code === 'rulesApi:rulesPolicyApproval');
  assert.equal(rulesPack.targetServer, 'processServer');
  const rulesTarget = loadRuntime(rulesPack.targetServer);
  const rulesManifest = require(path.join(frameworkRoot, 'nodics.rulesEngine/modules/rulesApi/data/manifest.json'));
  assert.equal(rulesTarget.runtimeRole.code, rulesManifest.sections.rulesPolicyApproval.destinationRole);
});

require("node:test")("Kickoff adopts owner transport defaults and preserves deployment policy", () => {
  const bindings = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
  const cases = [
    ["kickoffDockerLocal", "wcmsStagedServer", "cms", "nodics.wcms/modules/cms",
      { publication: { workflow: { target: { moduleName: "process", connectionType: "abstract", timeoutMs: 10000, maxAttempts: 2 } }, target: { moduleName: "cms" } } }],
    ["kickoffDockerLocal", "wcmsStagedServer", "editorial", "nodics.wcms/modules/editorial",
      { publication: { target: { moduleName: "editorial", connectionType: "abstract" } } }],
    ...["kickoffLocal", "kickoffDockerLocal"].map(environment =>
      [environment, "processServer", "process", "nodics.process/modules/workflow",
        { publicationDecisionCallback: { target: { moduleName: "cms" } } }]),
  ];
  for (const [environment, server, namespace, owner, removed] of cases) {
    const declaration = require(path.join(__dirname, "../envs", environment, server, "config/properties"));
    const defaults = require(path.join(frameworkRoot, owner, "config/properties"))[namespace];
    const current = declaration[namespace];
    const before = bindings.merge(current, removed);
    const resolve = contribution => bindings.merge(defaults, bindings.resolve(contribution, defaults));
    assert.deepEqual(resolve(current), resolve(before), environment + "/" + server + "/" + namespace);
    const effective = loadRuntime(server, environment);
    assert(activeModuleNames(effective).includes(path.basename(owner)));
    const targets = namespace === "process"
      ? ["publicationDecisionCallback.target"]
      : namespace === "cms" ? ["publication.workflow.target", "publication.target"] : ["publication.target"];
    for (const targetPath of targets) {
      const parts = targetPath.split(".");
      const read = object => parts.reduce((value, key) => value[key], object);
      const target = read(current);
      for (const key of Object.keys(read(removed))) assert.equal(target[key], undefined);
      assert.deepEqual(read(effective[namespace]), read(resolve(before)));
      assert.equal(target.connectionName,
        namespace === "process" ? "cmsStaged" : targetPath.includes("workflow") ? "process" : "cmsOnline");
      const override = {};
      let cursor = override;
      for (const key of parts) cursor = cursor[key] = {};
      cursor.timeoutMs = 43210;
      const later = bindings.merge(effective[namespace], bindings.resolve(override, effective[namespace]));
      assert.equal(read(later).timeoutMs, 43210, "Later deployment overrides remain supported");
      const changedOwner = bindings.merge(defaults, override);
      assert.equal(read(bindings.merge(changedOwner, bindings.resolve(current, changedOwner))).timeoutMs,
        43210, "Unpinned owner defaults remain adoptable");
    }
    if (namespace === "process") {
      assert.equal(current.actionAdapters.allowedActions.$config, "replace");
      assert.deepEqual(effective.process.actionAdapters.allowedActions, current.actionAdapters.allowedActions.value);
      assert.equal(current.remoteActions.targets.editorial.connectionName, "cmsStaged");
      assert.equal(current.remoteActions.targets.rulesApi.connectionName, "rulesApi");
    } else {
      assert.equal(current.publication.targetTransportProvider,
        namespace === "cms" ? "DefaultCmsPublicationModuleTransportService" : "DefaultEditorialPublicationModuleTransportService");
      assert.equal(effective[namespace].publication.targetTransportProvider, current.publication.targetTransportProvider);
      assert.equal(declaration.cms.publication.enabled, true);
      assert.equal(declaration.runtimeRole.publication, "STAGED");
    }
  }
});

require("node:test")("Docker Commerce inherits schema participation for each Agora selection", () => {
  const bindings = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService"));
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
    telco: ["electronicsProduct", "telcoCatalog", "telcoProvisioning", "telcoSubscription"],
  };
  for (const server of ["commerceServer", "commerceStagedServer"]) {
    const declaration = require(path.join(__dirname, "../envs/kickoffDockerLocal", server, "config/properties"));
    const before = structuredClone(declaration.database);
    for (const [name, [field, includes]] of Object.entries(participants)) {
      assert.equal(declaration.database[name], undefined);
      before[name] = { $config: "selected", name: "agora", field, includes };
    }
    for (const selection of ["all", "none", "apparel", "electronics", "telco"]) {
      const variables = {
        NODICS_AGORA_DOMAINS: selection,
        NODICS_MONGODB_URI: "mongodb://cfg04.invalid:27017",
      };
      const context = { environmentVariables: variables };
      assert.deepEqual(
        bindings.resolve({ database: before }, coreProperties, context),
        bindings.resolve({ database: declaration.database }, coreProperties, context),
        server + "/" + selection + " preserves resolved database contribution",
      );
      const effective = loadRuntime(server, "kickoffDockerLocal", variables);
      const modules = activeModuleNames(effective);
      for (const name of Object.keys(participants)) {
        const selected = expectedParticipants[selection].includes(name);
        assert.equal(modules.includes(name), selected, server + "/" + selection + "/" + name);
        if (!selected) {
          assert.equal(effective.database[name], undefined);
          continue;
        }
        assert.ok(effective.database[name], name + " gets schema-derived participation");
        const consumer = databaseConfiguration(effective, name);
        assert.equal(consumer.master.URI, variables.NODICS_MONGODB_URI);
        assert.equal(consumer.master.databaseName, declaration.database.default.mongodb.master.databaseName);
        effective.database[name] = { mongodb: { master: { databaseName: "cfg04LaterOverride" } } };
        assert.equal(databaseConfiguration(effective, name).master.databaseName, "cfg04LaterOverride");
        assert.equal(effective.database.default.mongodb.master.databaseName,
          declaration.database.default.mongodb.master.databaseName);
      }
    }
  }
});
