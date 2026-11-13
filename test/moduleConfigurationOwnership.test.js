/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */
"use strict";
/** @module kickoff/test/moduleConfigurationOwnership @description Checks owner inheritance and retained project composition without introducing runtime defaults or live side effects. @layer test @owner nodics.kickoff */
const assert = require("node:assert/strict");
const test = require("node:test");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const {
  frameworkRoot,
  loadRuntime,
  activeModuleNames,
} = require("./helpers/configuration");
const binding = require(
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
const core = require("../modules/kickoffCore/config/properties");
const circa = require("../modules/circa.ewaste/config/properties");
const backoffice = require(
  path.join(
    frameworkRoot,
    "nodics.platform/modules/backoffice/config/properties",
  ),
);
const workbench = require(
  path.join(
    frameworkRoot,
    "nodics.copilot/modules/copilotWorkbench/config/properties",
  ),
);
const copilotCore = require(
  path.join(
    frameworkRoot,
    "nodics.copilot/modules/copilotCore/config/properties",
  ),
);
const knowledge = require(
  path.join(
    frameworkRoot,
    "nodics.copilot/modules/copilotKnowledge/config/properties",
  ),
);
const ewaste = require(
  path.join(
    frameworkRoot,
    "nodics.accelerators/modules/waste/modules/eWaste/config/properties",
  ),
);

test("Commerce inherits Product locales and Process inherits retry bounds without widening activation", () => {
  const product = require(
    path.join(
      frameworkRoot,
      "nodics.commerce/modules/baseCommerce/modules/product/config/properties",
    ),
  ).product;
  const workflow = require(
    path.join(
      frameworkRoot,
      "nodics.process/modules/workflow/config/properties",
    ),
  ).process;
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const source = require(`../envs/${environment}/config/properties`);
    for (const server of ["commerceServer", "commerceStagedServer"]) {
      assert.equal(require(`../envs/${environment}/${server}/config/properties`).product?.localization, undefined);
    }
    for (const server of ["commerceServer", "commerceStagedServer"]) {
      for (const selection of ["all", "none"]) {
        const runtime = loadRuntime(server, environment, {
          NODICS_AGORA_DOMAINS: selection,
        });
        assert(activeModuleNames(runtime).includes("product"));
        assert.deepEqual(runtime.product.localization, product.localization);
      }
    }

    const waste = loadRuntime("wasteServer", environment);
    assert.equal(activeModuleNames(waste).includes("product"), false);
    assert.equal(waste.product?.localization, undefined);
    assert.equal(
      waste.eWaste.outcomeCommunication.detailLinks.IN_APP.parameter,
      "submission",
    );
    const process = loadRuntime("processServer", environment);
    assert(activeModuleNames(process).includes("workflow"));
    assert.equal(
      process.process.runtime.deadLetterRequeue.maximumRequeues,
      workflow.runtime.deadLetterRequeue.maximumRequeues,
    );
    assert.equal(
      process.process.runtime.deadLetterRequeue.enabled,
      environment === "kickoffLocal",
    );
    assert.equal(
      require(`../envs/${environment}/processServer/config/properties`).process?.runtime?.deadLetterRequeue
        ?.maximumRequeues,
      undefined,
    );
  }
});

test("reference roles omit unconsumed locales and retired refund selections", () => {
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const source = require(`../envs/${environment}/config/properties`);
    assert.equal(source.order?.refunds?.defaultOwnerPort, undefined);
    for (const server of [
      "platformServer",
      "wasteServer",
      "processServer",
      "wcmsStagedServer",
      "wcmsOnlineServer",
      "locationServer",
      "loyaltyServer",
      "engagementServer",
    ]) {
      if (environment === "kickoffLocal" && ["locationServer", "loyaltyServer", "engagementServer"].includes(server)) continue;
      const runtime = loadRuntime(server, environment);
      assert.equal(activeModuleNames(runtime).includes("product"), false);
      assert.equal(runtime.product?.localization, undefined);
      assert.equal(runtime.order?.refunds?.defaultOwnerPort, undefined);
    }
    for (const server of ["commerceServer", "commerceStagedServer"]) {
      for (const selection of ["all", "none"]) {
        const runtime = loadRuntime(server, environment, {
          NODICS_AGORA_DOMAINS: selection,
        });
        assert.equal(runtime.order.refunds.defaultOwnerPort, undefined);
        assert.equal(runtime.order.refunds.ownerPorts.eWaste, undefined);
        assert.equal(
          runtime.order.refunds.ownerByStore.agoraApparelStore,
          server === "commerceServer" && selection === "all"
            ? "fulfillmentCore"
            : undefined,
        );
      }
    }
  }
});

test("root config and empty extension hooks retain explicit project boundaries", () => {
  assert(
    require("../package.json")
      .scripts["test:qualification"].split(/\s+/)
      .includes("test/moduleConfigurationOwnership.test.js"),
    "Configuration ownership adoption must remain reachable through qualification",
  );
  const rootSelections = require("../config/properties");
  assert.deepEqual(Object.keys(rootSelections).sort(), ["backofficeLocalReset"]);
  assert.equal(rootSelections.activeModules, undefined);
  assert.equal(rootSelections.backofficeLocalReset.providers.$config, "replace");
  assert(rootSelections.backofficeLocalReset.providers.value.every(target =>
    target.targetAuthority?.server && target.targetAuthority?.publication),
    "Root reset entries are explicit deployment scope, never provider mechanics");
  assert.equal(rootSelections.circaLoyaltyImportTarget, undefined);
  assert.equal(rootSelections.circaLocationImportTarget, undefined);
  assert.deepEqual(require("../modules/config/properties"), {});
  const group = require("../modules/package.json").nodics;
  assert.equal(group.kind, "group");
  assert.equal(group.runtimeModule, false);
  assert.equal(group.loadableByNodicsModuleLoader, false);
  assert.deepEqual(group.runtime, {
    router: false,
    publish: false,
    web: false,
  });
  assert.deepEqual(require("../modules/kickoffApi/config/properties"), {});
  assert.deepEqual(require("../modules/kickoffInt/config/properties"), {},
    "Integration template does not duplicate the Editorial-owned workflow adapter");
  const boundaries = [
    "",
    "modules",
    ...[
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "agora.apparel",
      "agora.electronics",
      "agora.telco",
      "circa.ewaste",
    ].map((name) => "modules/" + name),
  ];
  for (const boundary of boundaries)
    for (const hook of ["prescripts", "postscripts"]) {
      assert.deepEqual(
        require(
          path.resolve(__dirname, "..", boundary, "config", hook + ".js"),
        ),
        {},
        boundary + "/" + hook,
      );
    }
});

test("project declarations omit extracted mechanics while retaining deployment and sample selections", () => {
  const platform = require("../envs/kickoffLocal/platformServer/config/properties").copilot;
  assert.equal(platform.core.environment, undefined);
  assert.equal(platform.workbench.target.productModule, undefined);
  assert.equal(platform.workbench.target.pricingModule, undefined);
  assert.equal(platform.knowledge.ingestion.indexTenant, undefined);
  assert.equal(platform.api.enabled, true);
  assert.equal(platform.workbench.target.connectionName, "commerceStaged");
  assert.equal(platform.providers.default.adapter, "ollama");
  assert.equal(
    core.backofficeApplicationInitialization
      .projectRoot,
    undefined,
  );
  assert.equal(
    core.backofficeApplicationInitialization
      .projectCode,
    undefined,
  );
  assert.equal(circa.eWaste.application.frameworkModuleName, undefined);
  assert.equal(circa.eWaste.application.backendModuleName, undefined);
  assert.deepEqual(circa.eWaste.application.requiredScenarioModules, [
    "eWaste",
    "wasteRecycling",
  ]);
  assert.equal(circa.eWaste.application.code, "CIRCA_EWASTE");
  assert.equal(circa.eWaste.presentation.brandName, "Circa");
  assert.equal(core.data?.dataReleases?.initializationProfiles?.nativeRuntimeAuthority, undefined);
  for (const [name, ownerRoot] of [
    ["backoffice", "nodics.platform/modules/backoffice"],
    ["copilotWorkbench", "nodics.copilot/modules/copilotWorkbench"],
    ["copilotCore", "nodics.copilot/modules/copilotCore"],
    ["eWaste", "nodics.accelerators/modules/waste/modules/eWaste"],
  ]) {
    const owner = require(path.join(frameworkRoot, ownerRoot, "package.json"));
    assert.equal(owner.name, name);
    assert(
      Number(owner.index) <
        Number(require("../modules/kickoffCore/package.json").index),
    );
  }
});

test("Copilot context defaults are inherited by the selected customer deployment", () => {
  for (const environmentCode of ["kickoffLocal", "kickoffDockerLocal"]) {
    const deployment = require(`../envs/${environmentCode}/platformServer/config/properties`).copilot;
    const inherited = binding.merge(copilotCore.copilot, workbench.copilot);
    const selected = binding.resolve(binding.merge(inherited, deployment), {}, { environmentCode, environmentVariables: {} });
    assert.equal(selected.core.environment, environmentCode);
    assert.equal(selected.workbench.target.productModule, "product");
    assert.equal(selected.workbench.target.pricingModule, "pricing");
    assert.equal(selected.workbench.target.connectionName, "commerceStaged");
  }
});

test("BackOffice context bindings retain customer descriptor ownership", () => {
  for (const projectCode of ["nodics.kickoff", "example.independent"]) {
    const context = { projectCode, roots: { project: path.resolve("/workspace", projectCode) }, environmentVariables: {} };
    const selected = binding.resolve(binding.merge(backoffice.backofficeApplicationInitialization,
      core.backofficeApplicationInitialization), {}, context);
    assert.equal(selected.projectCode, projectCode);
    assert.equal(selected.projectRoot, context.roots.project);
    assert.equal(selected.profiles.kickoffdocs.owner, "nodics.kickoff");
  }
});

test("reference publication catalogue inherits the existing Product pagination consumer without changing its requests", async () => {
  const consumer = await import(
    pathToFileURL(
      path.join(
        frameworkRoot,
        "nodics.commerce/modules/baseCommerce/modules/product/src/service/acceptance/defaultCommercePublicationAcceptanceService.mjs",
      ),
    ).href
  );
  const catalog =
    core.tooling.acceptance.commercePublication.catalogs.value.find(
      (item) => item.includes === "apparel",
    ).value;
  assert.equal(catalog.discoveryPagination, undefined);
  const observe = async (selection) => {
    const requests = [];
    await consumer.readCommercePublicationCatalogue(
      selection,
      async (role, url) => {
        requests.push({ role, url });
        return {
          products: [],
          total: 0,
          discovery: { source: "SEARCH_INDEX" },
        };
      },
      {},
    );
    return requests;
  };
  assert.deepEqual(
    await observe(catalog),
    await observe({
      ...catalog,
      discoveryPagination: { pageSize: 24, maximumProducts: 1000 },
    }),
  );
  const [customized] = await observe({
    ...catalog,
    discoveryPagination: { pageSize: 12, maximumProducts: 1000 },
  });
  assert.equal(
    new URL("https://example.invalid" + customized.url).searchParams.get(
      "pageSize",
    ),
    "12",
  );
});

test("Local Enterprise test funding overrides only the selected Loyalty deployment", () => {
  const local = loadRuntime("commerceServer", "kickoffLocal").loyalty.enterpriseTestCredits;
  const docker = loadRuntime("loyaltyServer", "kickoffDockerLocal").loyalty.enterpriseTestCredits;
  assert.equal(local.enabled, true);
  assert.equal(local.provisioningEnabled, true);
  assert.deepEqual(local.allowedEnvironments, ["kickoffLocal"]);
  assert.equal(docker.enabled, false);
  assert.equal(docker.provisioningEnabled, false);
  assert.deepEqual(docker.allowedEnvironments, []);
  for (const key of ["maximumReasonLength", "platformAdministratorEvidencePath"]) {
    assert.equal(local[key], docker[key], key);
  }
  const selected = require("../envs/kickoffLocal/commerceServer/config/properties.js")
    .loyalty.enterpriseTestCredits;
  assert.deepEqual(Object.keys(selected).sort(),
    ["allowedEnvironments", "enabled", "provisioningEnabled"]);
});

test("final integration: active owner graph supplies defaults for Native and Docker without widening optional capabilities", () => {
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const platform = loadRuntime("platformServer", environment);
    const active = activeModuleNames(platform);
    assert(active.includes("backoffice"));
    for (const owner of [
      "copilotCore",
      "copilotWorkbench",
      "copilotKnowledge",
    ]) {
      assert.equal(
        active.includes(owner),
        environment === "kickoffLocal",
        owner,
      );
    }
    assert.equal(
      platform.backofficeApplicationInitialization.projectRoot,
      path.resolve(__dirname, ".."),
    );
    assert.equal(
      platform.backofficeApplicationInitialization.projectCode,
      require("../package.json").name,
    );
    const native = environment === "kickoffLocal";
    assert.equal(
      platform.copilot.core.environment,
      native ? environment : undefined,
    );
    assert.equal(
      platform.copilot.workbench?.target?.productModule,
      native ? "product" : undefined,
    );
    assert.equal(
      platform.copilot.workbench?.target?.pricingModule,
      native ? "pricing" : undefined,
    );
    assert.equal(
      platform.copilot.knowledge.ingestion.indexTenant,
      native ? "default" : undefined,
    );
    const waste = loadRuntime("wasteServer", environment);
    assert(activeModuleNames(waste).includes("eWaste"));
    assert.equal(
      waste.eWaste.application.backendModuleName,
      ewaste.eWaste.application.backendModuleName,
    );
    assert.equal(
      waste.eWaste.application.frameworkModuleName,
      ewaste.eWaste.application.frameworkModuleName,
    );
    assert.deepEqual(
      waste.eWaste.application.requiredScenarioModules,
      circa.eWaste.application.requiredScenarioModules,
    );
  }
});
