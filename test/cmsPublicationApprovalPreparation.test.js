/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/cmsPublicationApprovalPreparation @description Exercises fresh approval discovery, the sealed CMS graph and deterministic pending-publication replay with in-memory Process persistence. @owner nodics.kickoff @layer test */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const { frameworkRoot } = require("./helpers/configuration");
const projectRoot = path.resolve(__dirname, "..");
const projection = require(path.join(frameworkRoot, "nodics.foundation/modules/nConfig/src/service/defaultDeploymentConfigurationProjectionService"));

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  test(environment + " discovers the CMS approval definition and creates one review task on replay", async () => {
    await projection.resolve({ frameworkRoot, projectRoot, environment, server: "processServer" });
    if (environment === "kickoffLocal") assert(!NODICS.getActiveModules().includes("cms"), "Native Process consumes detached CMS source");
    const installs = [];
    let version, instance, task;
    const instances = {
      get: async ({ query }) => ({ result: instance?.code === query.code ? [instance] : [] }),
      save: async ({ model }) => { assert.equal(instance, undefined); instance = structuredClone(model); return { result: instance }; },
      update: async ({ query, model }) => {
        assert(Object.entries(query).every(([k, v]) => instance[k] === v));
        Object.assign(instance, model.$set);
        return { result: { modifiedCount: 1 } };
      },
    };
    const tasks = {
      get: async ({ query }) => ({ result: task?.instanceCode === query.instanceCode ? [task] : [] }),
      save: async ({ model }) => { assert.equal(task, undefined); task = structuredClone(model); return { result: task }; },
    };
    const importer = {
      ...SERVICE.DefaultDataReleaseService,
      getInstallations: async () => [],
      execute: async function (request) {
        const plan = await this.preparePlan(request);
        assert.deepEqual(plan.releases.map(row => row.releaseCode), ["cms:cmsPublicationApproval"]);
        const [release] = plan.releases;
        assert.equal(request.releaseRequest.expectedReleases[release.releaseCode], release.version);
        assert.equal(release.installer, "PROCESS_DEFINITION");
        installs.push(release.releaseCode);
        return SERVICE.DefaultProcessDefinitionContributionService.installContribution({ ...request, contribution: release });
      },
    };
    global.SERVICE = { ...SERVICE, DefaultDataReleaseService: importer,
      DefaultModuleRegistrationAgentService: { assertModuleOperational: async owner => assert.equal(owner, "workflow") },
      DefaultProcessDefinitionService: { get: async () => ({ result: version ? [version] : [] }) },
      DefaultProcessDefinitionLifecycleService: {
        findDefinition: async () => version,
        createDefinition: async ({ processDefinition }) => { version = { ...processDefinition, status: "DRAFT" }; },
        publishDraft: async ({ definitionCode }) => {
          assert.equal(definitionCode, version.code);
          Object.assign(version, { definitionCode, status: "PUBLISHED", version: 1 });
          return { data: version };
        },
      },
      DefaultProcessInstanceService: instances, DefaultProcessTaskService: tasks,
      DefaultProcessRuntimeLifecycleService: { ...SERVICE.DefaultProcessRuntimeLifecycleService,
        resolveStartVersion: async () => { assert.equal(version.status, "PUBLISHED"); return version; },
        instanceService: () => instances, taskService: () => tasks, audit: async () => {},
      },
    };
    const service = SERVICE.DefaultProcessPublicationApprovalService;
    const request = { tenant: "default", publicationApproval: { publicationCode: "cmsBaseline_axis_0_0_1",
      publicationRevision: 3, sourceVersion: "0", siteCode: "axisCmsSite", correlationId: "offline-regression" } };
    const started = await service.start(request);
    assert.equal(started.data.instance.code, "cmsPublicationApproval-9910d27c2daac4bf49f91ca1");
    assert.equal(task.instanceCode, started.data.instance.code);
    assert.equal(task.nodeCode, "publicationReview");
    assert.equal(task.status, "OPEN");
    const replay = await service.start(request);
    assert.equal(replay.data.replay, true);
    assert.equal(replay.data.task.code, task.code);
    assert.deepEqual(installs, ["cms:cmsPublicationApproval"]);
  });
}
