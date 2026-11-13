/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @module test/customerRuntimeOverrideAdoption @description Verifies customer deployment override placement without starting runtimes or resolving providers. @owner nodics.kickoff @layer test */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const root = path.resolve(__dirname, "..");
const properties = (environment, server) =>
  require(path.join(root, "envs", environment, server || "", "config/properties"));

test("Local and Docker retain their backend counts and explicit API/CORS restrictions", () => {
  for (const [environment, count] of [["kickoffLocal", 7], ["kickoffDockerLocal", 10]]) {
    const directory = path.join(root, "envs", environment);
    const servers = fs.readdirSync(directory).filter((name) => {
      const file = path.join(directory, name, "package.json");
      if (!fs.existsSync(file)) return false;
      const metadata = JSON.parse(fs.readFileSync(file, "utf8")).nodics;
      return metadata?.kind === "server" && metadata.runtimeTooling?.enabled !== false;
    });
    assert.equal(servers.length, count);
    for (const server of ["", ...servers]) {
      assert.ok(!JSON.stringify(properties(environment, server)).includes('"runtimeRoleProfiles"'), `${environment}/${server}`);
      const workflowTarget = properties(environment, server).copilot?.knowledge?.workflowRefresh?.actionAuthority;
      assert.equal(workflowTarget?.runtimeRole, undefined, `${environment}/${server}: retired Workflow role`);
      assert.equal(workflowTarget?.publication, undefined, `${environment}/${server}: inherit Workflow publication default`);
    }
    for (const server of ["processServer", "wcmsStagedServer"]) {
      assert.equal(properties(environment, server).httpHardening.cors.originEndpointOverrides.nexus, false);
    }
    const online = properties(environment, "wcmsOnlineServer").apiExposure.categories;
    for (const category of ["schemaApi", "schemaMaintenance", "dataImport", "mediaManagement"]) {
      assert.equal(online[category].enabled, false, `${environment}/${category}`);
    }
    for (const server of ["processServer", "wcmsOnlineServer"]) {
      assert.equal(properties(environment, server).apiExposure?.categories?.dataExport, undefined);
    }
    assert.deepEqual(properties(environment, "commerceServer").stripeProvider, { enabled: true });
    assert.deepEqual(properties(environment, "commerceStagedServer").stripeProvider, {
      maturity: "NOT_APPLICABLE_FOR_STAGED_CATALOG",
    });
  }
});

test("Local delivery selects only its credential override and preserves guarded onboarding", () => {
  const local = "kickoffLocal";
  const schema = properties(local, "processServer").runtimeConfigurationSchemas.telegramDelivery;
  assert.deepEqual(schema, { fields: [{ credentialReference: "telegram.bot.circa" }] });
  assert.equal(properties(local).apiExposure, undefined);
  const categories = properties(local, "platformServer").apiExposure.categories;
  for (const category of ["profileTenantProvisioning", "profileEmployeeRecovery"]) {
    assert.equal(categories[category].enabled.$config, "env");
    assert.equal(categories[category].enabled.fallback, false);
  }
});

test("customer descriptors stay module-owned while executable selections stay deployment-owned", () => {
  for (const name of ["kickoffCore", "kickoffInt", "circa.ewaste", "agora.apparel", "agora.electronics", "agora.telco"]) {
    const source = require(path.join(root, "modules", name, "config/properties"));
    assert.ok(!JSON.stringify(source).includes('"runtimeRoleProfiles"'), name);
  }
  const core = require("../modules/kickoffCore/config/properties");
  assert.equal(core.copilot, undefined);
  assert.equal(core.data?.dataReleases, undefined);
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const platform = properties(environment, "platformServer");
    assert.deepEqual(platform.copilot.workbench.target, {
      connectionName: "commerceStaged", targetAuthority: { publication: "STAGED" },
    });
    assert.equal(platform.copilot.core.environment, undefined);
    assert.equal(platform.copilot.workbench.target.productModule, undefined);
    assert.equal(platform.copilot.workbench.target.pricingModule, undefined);
    assert.equal(platform.copilot.workbench.target.connectionName, "commerceStaged");
    if (environment === "kickoffLocal") {
      assert.deepEqual(platform.data.dataReleases.initializationProfiles.localAxisIdentityDefinitions, { template: "axisAccessDefinitions" });
      assert.deepEqual(platform.data.dataReleases.initializationProfiles.localContentAccessDefinitions, { template: "axisContentAccessDefinitions" });
    } else assert.equal(platform.data.dataReleases.initializationProfiles, undefined);
    const pricing = platform.data.dataReleases.contributions.entries.find(entry => entry.moduleName === "pricing");
    assert.ok(["administrativeAuthoringPermission", "administrativePublicationPermission"].every(section => pricing.sections.includes(section)));
    assert.ok(platform.data.dataReleases.contributions.entries.every(entry =>
      typeof entry.moduleName === "string" && Array.isArray(entry.sections) && entry.sections.length > 0));
    const processContributions = properties(environment, "processServer").data.dataReleases.contributions;
    assert.equal(processContributions.$config, "keyed");
    assert.deepEqual(processContributions.entries.filter(entry => entry.moduleName === "editorial"), [{
      moduleName: "editorial", sections: { $config: "replace", value: ["editorialWorkflows"] },
    }]);
  }
});

test("Discovery sources remain available without duplicate Commerce or Waste ownership selections", () => {
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    for (const server of ["commerceServer", "commerceStagedServer"]) {
      const metadata = require(path.join(root, "envs", environment, server, "package.json")).nodics;
      assert.equal(metadata.extends.includes("nodics.discovery"), false);
      assert.ok(metadata.runtimeModuleRoots.includes("nodics.discovery"));
      assert.equal(properties(environment, server).activeModules.modules.some(name =>
        typeof name === "string" && /^discovery/.test(name)), false);
    }
    const platform = require(path.join(root, "envs", environment, "platformServer", "package.json")).nodics;
    assert.ok(platform.extends.includes("nodics.discovery"));
    const waste = properties(environment, "wasteServer").activeModules.modules;
    assert.ok(waste.includes("discoveryQuery") && waste.includes("discoveryRuntime"));
    for (const name of ["discoveryConfig", "discoverySource", "discoveryMapping", "discoveryProjection"]) {
      assert.equal(waste.includes(name), false, `${environment}/${name}`);
    }
  }
});
