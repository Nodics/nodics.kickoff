/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/capabilityAccessActivation @description Exercises registered owner defaults, receiver routing and the existing Circa setup with real nImport plans and offline receipt reads. @owner nodics.kickoff @layer test */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const { frameworkRoot } = require("./helpers/configuration");
const projectRoot = path.resolve(__dirname, "..");
const projection = require(path.join(frameworkRoot,
  "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));

// The 27 definitions deferred from Profile startup. Other existing application selections are independent.
const domains = {
  "nodics.platform": ["axis:accessGroups", "profile:enterpriseRoles"],
  "nodics.engagement": ["engagementCore:accessGroups"],
  "nodics.wcms": ["cms:accessGroups", "cms:enterpriseRoles", "cms:businessAccessGroups", "cms:businessAccessRoles"],
  "nodics.waste": ["wasteCore:accessGroups", "wasteCore:enterpriseRoles", "wasteCore:businessAccessGroups", "wasteCore:businessAccessRoles"],
  "nodics.commerce": [
    "store:accessGroups", "publish:accessGroups", "digitalCore:accessGroups", "digitalCore:enterpriseRoles",
    "product:accessGroups", "product:enterpriseRoles", "product:businessAccessGroups", "product:businessAccessRoles",
    "order:accessGroups", "order:enterpriseRoles", "order:businessAccessGroups", "order:businessAccessRoles",
    "promotion:accessGroups", "promotion:enterpriseRoles", "promotion:businessAccessGroups", "promotion:businessAccessRoles",
  ],
};
const deferred = new Set(Object.values(domains).flat());
const known = codes => codes.filter(code => deferred.has(code)).sort();

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  test(environment + " routes only observed owner selections and prepares the Circa access baseline", async () => {
    async function load(server) {
      await projection.resolve({ projectRoot, frameworkRoot, environment, server, variables: {
        NODICS_BOOTSTRAP_ADMIN_PASSWORD: "offline-fixture-admin-secret",
        NODICS_BOOTSTRAP_SERVICE_PASSWORD: "offline-fixture-service-secret",
        NODICS_API_KEY: "offline-fixture-runtime-proof",
      } });
    }
    const observed = {};
    for (const [domain, server] of [
      ["nodics.wcms", "wcmsStagedServer"], ["nodics.commerce", "commerceServer"],
      ["nodics.engagement", environment === "kickoffLocal" ? "processServer" : "engagementServer"],
      ["nodics.waste", "wasteServer"], ["nodics.platform", "platformServer"],
    ]) {
      await load(server);
      const agent = SERVICE.DefaultModuleRegistrationAgentService;
      const owners = new Set(domains[domain].map(code => code.split(":")[0]));
      observed[domain] = [];
      for (const owner of owners) {
        if (!NODICS.getActiveModules().includes(owner)) continue;
        const source = NODICS.getRawModule(owner);
        const releases = require(path.join(source.path, "data/manifest.json")).sections;
        for (const pack of agent.buildActivationDataPackages(owner, source)) {
          const section = releases[pack.code.split(":")[1]];
          if (section.selectionPolicy !== "EXPLICIT") continue;
          if (pack.required && pack.trigger === "ACTIVATION") {
            assert(deferred.has(pack.code), "unexpected optional activation: " + pack.code);
            assert.equal(pack.dataType, "init");
            assert.equal(pack.targetModule, "profile");
          }
          observed[domain].push(pack);
        }
      }
    }
    const imports = { ...SERVICE.DefaultDataReleaseService, getInstallations: async () => [], error: (code, message) => Object.assign(Error(message), { code }) };
    async function plan(codes) {
      const result = await imports.preparePlan({ tenant: "default", releaseRequest: { dataType: "init", releaseCodes: codes } });
      return result.releases.map(release => release.releaseCode);
    }
    if (environment === "kickoffLocal") assert.deepEqual(known(await plan(["profile:init-v001"])), []);
    for (const [domain, expected] of Object.entries(domains)) {
      const catalogue = SERVICE.DefaultFunctionalModuleCatalogueService;
      const record = { functionalModule: domain, activationDataPackages: observed[domain] };
      const packs = catalogue.getActivationDataPackages(domain, record)
        .filter(pack => pack.required && pack.trigger === "ACTIVATION" && pack.targetModule === "profile" && deferred.has(pack.code));
      assert(packs.length, domain);
      assert(packs.every(pack => pack.targetServer === "platformServer" && pack.dataType === "init"), domain);
      assert.deepEqual(known(await plan(packs.map(pack => pack.code))),
        [...new Set(expected.concat(domain === "nodics.engagement" ? [] : ["axis:accessGroups"]))].sort(), domain);
      const calls = [];
      const receipts = new Map();
      const activation = {
        ...catalogue,
        upsertActivationReceipt: async (_record, pack, state) => receipts.set(pack.code, state),
        runActivationDataReleaseOperation: async (mode, selection, pack) => {
          calls.push(mode);
          assert.equal(pack.targetServer, "platformServer");
          assert.equal(selection.dataType, "init");
          assert.deepEqual(selection.releaseCodes.slice().sort(), packs.map(item => item.code).sort());
          return { data: { releases: selection.releaseCodes.map(releaseCode =>
            ({ releaseCode, status: mode === "preflight" ? "NOT_INSTALLED" : "CURRENT" })) } };
        },
      };
      await activation.executeRequiredActivationData(record, {}, { tenant: "default" });
      assert.deepEqual(calls, ["preflight", "execute"]);
      assert.deepEqual([...receipts.keys()].sort(), packs.map(item => item.code).sort());
      assert([...receipts.values()].every(status => status === "IMPORTED"));
      const empty = catalogue.getActivationDataPackages(domain, { activationDataPackages: [] });
      assert(!empty.some(pack => deferred.has(pack.code)), "routing cannot invent " + domain + " source releases");
    }
    const profile = CONFIG.get("backofficeApplicationInitialization").profiles.circa;
    const steps = SERVICE.DefaultBackofficeApplicationInitializationService.preparationSteps(profile);
    const identity = steps.find(step => step.code === "circa.ewaste:operations");
    const roots = steps.filter(step => deferred.has(step.code));
    assert(roots.every(step => step.required && step.trigger === "USER" && step.phase === "BEFORE_PUBLICATION" &&
      step.targetServer === "platformServer" && step.dataType === "init" && step.order < identity.order));
    const expected = [...deferred].filter(code => code !== "engagementCore:accessGroups").sort();
    assert.deepEqual(known(await plan(roots.map(step => step.code))), expected);
    if (environment === "kickoffLocal") {
      const guided = imports.initializationProfiles().circaIdentityAuthority;
      assert.deepEqual(known(await plan(guided.steps[0].releaseCodes)), expected);
    }
  });
}
