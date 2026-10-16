/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Nodics - governed by the repository LICENSE. */
/**
 * @module nodics.kickoff/test/cmsFreshSourceOwnership
 * @description Tests only explicitly known fresh CMS website sources, not live adoption.
 * @owner kickoff
 * @layer test
 */
const path = require("node:path");
const { frameworkRoot } = require("./helpers/configuration");
const { registerSourceOwnershipTests } = require(
  path.join(
    frameworkRoot,
    "nodics.wcms/modules/cms/test/helpers/freshSourceOwnership",
  ),
);
const repoRoot = path.resolve(__dirname, "..");
require("node:test").test(
  "fresh demo CMS ownership uses explicit successor metadata within v001",
  () => {
    const assert = require("node:assert/strict");
    for (const [owner, code] of [
      ["circa.ewaste", "content"],
      ["agora.apparel", "agoraApparelContentCatalog"],
    ]) {
      const section = require(
        path.join(repoRoot, "modules", owner, "data/manifest.json"),
      ).sections[code];
      assert.equal(section.version, "0.0.2", owner);
      assert(
        Object.keys(section.files).every((file) =>
          file.startsWith("sample-v001/"),
        ),
        owner,
      );
    }
  },
);
registerSourceOwnershipTests(repoRoot, [
  {
    header:
      "data/docs-v001/headers/kickoffDocumentationRelease002ContentPackHeader.js",
    dir: "data/docs-v001/records/documentation",
    site: "kickoffDocumentationSite",
    catalog: "documentationContentCatalog",
    prefixes: [
      "Site",
      "TypeCode",
      "Renderer",
      "Template",
      "Slot",
      "Component",
      "Page",
      "Route",
    ].map((family) => "kickoffDocumentationRelease002" + family + "Data"),
  },
  {
    header: "data/docs-v001/headers/kickoffDocumentationContentPackHeader.js",
    // Retain sealed historical bytes; authoring requires a separate forward release.
    sealedHistoricalSource: true,
    dir: "data/docs-v001/records/documentation",
    site: "kickoffDocumentationSite",
    catalog: "documentationContentCatalog",
    prefixes: [
      "kickoffDocumentationSiteData",
      "kickoffDocumentationTypeCodeData",
      "kickoffDocumentationRendererData",
      "kickoffDocumentationTemplateData",
      "kickoffDocumentationSlotData",
      "kickoffDocumentationComponentData",
      "kickoffDocumentationPageData",
      "kickoffDocumentationRouteData",
    ],
  },
  {
    header:
      "modules/circa.ewaste/data/sample-v001/content/headers/circaContentHeader.js",
    dir: "modules/circa.ewaste/data/sample-v001/content/records",
    site: "circaSite",
    catalog: "circaContentCatalog",
    prefixes: [
      "circaCmsTypeData",
      "circaCmsRendererData",
      "circaCmsGroupData",
      "circaCmsSlotData",
      "circaCmsTemplateData",
      "circaCmsSiteData",
      "circaCmsComponentData",
      "circaCmsPageData",
      "circaCmsRouteData",
    ],
  },
  {
    header:
      "modules/circa.ewaste/data/sample-v001/customer-workspace/headers/circaWorkspaceHeader.js",
    dir: "modules/circa.ewaste/data/sample-v001/customer-workspace/records",
    site: "circaSite",
    catalog: "circaContentCatalog",
    prefixes: [
      "circaWorkspaceTypeData",
      "circaWorkspaceRendererData",
      "circaWorkspaceGroupData",
      "circaWorkspaceSlotData",
      "circaWorkspaceTemplateData",
      "circaWorkspaceComponentData",
      "circaWorkspacePageData",
      "circaWorkspaceRouteData",
    ],
  },
  {
    header:
      "modules/agora.apparel/data/sample-v001/content/headers/agoraApparelContentHeader.js",
    dir: "modules/agora.apparel/data/sample-v001/content/records",
    site: "agoraApparelSite",
    catalog: "agoraApparelContentCatalog",
    readOnlyReferenceCodes: [
      "agoraOrderLifecyclePanel",
      "agoraAccountCenter",
      "agoraProductionGateSummary",
    ],
    prefixes: [
      "agoraApparelTypeCodeData",
      "agoraApparelRendererData",
      "agoraApparelSiteData",
      "agoraApparelSharedComponentData",
      "agoraApparelSharedComponentMediaData",
      "agoraApparelPageData",
      "agoraApparelRouteData",
    ],
  },
]);

// The three cross-catalog Agora components remain read-only reference content.
// This batch does not assign them to Apparel, adopt installed content, or change
// Electronics/Telco. Current Apparel page placements do not reference them.
require("node:test").test(
  "fresh Apparel draft saves owned references while shared Agora content stays read-only",
  async () => {
    const assert = require("node:assert/strict");
    const cmsRoot = path.join(frameworkRoot, "nodics.wcms/modules/cms");
    const designer = require(
      path.join(
        cmsRoot,
        "src/service/designer/defaultCmsDesignerCompositionService",
      ),
    );
    const access = require(
      path.join(
        cmsRoot,
        "src/service/designer/defaultCmsDesignerAccessService",
      ),
    );
    const security = require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nRouter/src/service/request/defaultSecuredRequestPipelineService",
      ),
    );
    const header = require("../modules/agora.apparel/data/sample-v001/content/headers/agoraApparelContentHeader");
    const recordsDir = path.join(
      repoRoot,
      "modules/agora.apparel/data/sample-v001/content/records",
    );
    const rows = {},
      writes = [];
    for (const entry of [
      ...Object.values(header.cms),
      ...Object.values(header.catalog),
    ]) {
      const schema = entry.options.schemaName;
      const serviceName =
        "Default" + schema[0].toUpperCase() + schema.slice(1) + "Service";
      (rows[serviceName] ||= []).push(
        ...structuredClone(
          Object.values(
            require(path.join(recordsDir, entry.options.dataFilePrefix)),
          ),
        ),
      );
    }
    rows.DefaultCmsComponentDetailService = [];
    const excluded = [
      "agoraOrderLifecyclePanel",
      "agoraAccountCenter",
      "agoraProductionGateSummary",
    ];
    const sharedBefore = structuredClone(
      rows.DefaultCmsComponentService.filter((row) =>
        excluded.includes(row.code),
      ),
    );
    const old = Object.fromEntries(
      ["SERVICE", "CONFIG", "CLASSES"].map((key) => [
        key,
        Object.getOwnPropertyDescriptor(global, key),
      ]),
    );
    try {
      global.CONFIG = {
        get: (key) => (key === "runtimeRole" ? { publication: "STAGED" } : {}),
      };
      global.CLASSES = {
        NodicsError: class extends Error {
          constructor(code, message) {
            super(message);
            this.code = code;
          }
        },
      };
      global.SERVICE = {
        DefaultCmsDesignerAccessService: access,
        DefaultSecuredRequestPipelineService: security,
        DefaultIdentityGovernanceService: {
          getSystemAuthData: () => ({
            principalType: "service",
            userGroups: ["serviceAccountUserGroup"],
          }),
        },
      };
      for (const [name, data] of Object.entries(rows))
        SERVICE[name] = {
          get: async (read) => {
            read.schemaModel = { tenant: read.tenant };
            const result = data.filter((row) =>
              access.queryMatches(row, read.query),
            );
            return {
              code: "SUC_FIND_00000",
              query: read.query,
              count: result.length,
              result: structuredClone(result),
            };
          },
          save: async (write) => {
            const model = structuredClone(write.model);
            writes.push({ name, model });
            data.push(model);
            return { result: [model] };
          },
        };
      const template = rows.DefaultCmsPageTemplateService[0];
      assert.equal(
        template.authoringScope,
        undefined,
        "shared template stays global read-only metadata",
      );
      const sourcePage = rows.DefaultCmsPageService.find(
        (row) => row.code === "agoraApparelHomePage",
      );
      const components = [
        "agoraApparelGlobalHeader",
        "agoraApparelGlobalFooterExperience",
      ].map((code) =>
        rows.DefaultCmsComponentService.find((row) => row.code === code),
      );
      assert(components.every(Boolean));
      assert(
        components.every((component) =>
          sourcePage.cmsComponents.some(
            (item) => item.target === component.code,
          ),
        ),
      );
      assert(
        rows.DefaultCmsPageService.every((page) =>
          page.cmsComponents.every((item) => !excluded.includes(item.target)),
        ),
      );
      const request = (body) => ({
        tenant: "default",
        authorization: "Bearer source-test-employee",
        authData: {
          principalType: "human",
          tokenType: "access",
          loginId: "source-editor",
          tenant: "default",
          enterpriseCode: "default",
          userGroups: ["employeeUserGroup"],
          permissions: ["cms.backoffice.view", "cms.authoring.write"],
        },
        body: {
          siteCode: "agoraApparelSite",
          catalogCode: "agoraApparelContentCatalog",
          ...body,
        },
      });
      const saved = await designer.saveDraftComposition(
        request({
          templateCode: template.code,
          page: {
            code: "freshScopedApparelDraft",
            name: "Fresh scoped draft",
            typeCode: sourcePage.typeCode,
          },
          sections: [{ slot: "main", components }],
        }),
      );
      assert.equal(saved.result.status, "DRAFT_SAVED");
      assert.equal(saved.result.saved.sections.length, 2);
      assert.deepEqual(
        saved.result.saved.sections.map((item) => item.target),
        components.map((item) => item.code),
      );
      assert(
        saved.result.saved.sections.every(
          (item) => item.authoringScope.siteCode === "agoraApparelSite",
        ),
      );
      assert(
        saved.result.saved.components.every(
          (item) =>
            item.authoringScope.catalogCode === "agoraApparelContentCatalog" &&
            item.authoringScope.siteCode === undefined,
        ),
      );
      // Read references remain readable, but no generic unowned-record adoption.
      assert.deepEqual(
        (
          await designer.safeGet("DefaultCmsComponentService", request({}), {
            code: excluded[0],
          })
        )[0],
        sharedBefore[0],
      );
      const writeCount = writes.length;
      for (const record of sharedBefore) {
        await assert.rejects(
          designer.saveRecord(
            "DefaultCmsComponentService",
            request({}),
            record,
          ),
          { code: "ERR_AUTH_00003" },
        );
        await assert.rejects(
          designer.assertModelScope(
            "DefaultCmsComponentDetailService",
            request({}),
            { source: "freshScopedApparelDraft", target: record.code },
            {
              enterpriseCode: "default",
              siteCode: "agoraApparelSite",
              catalogCode: "agoraApparelContentCatalog",
            },
          ),
          { code: "ERR_AUTH_00003" },
        );
      }
      assert.equal(writes.length, writeCount);
      assert.deepEqual(
        rows.DefaultCmsComponentService.filter((row) =>
          excluded.includes(row.code),
        ),
        sharedBefore,
      );
    } finally {
      for (const [key, descriptor] of Object.entries(old)) {
        if (descriptor) Object.defineProperty(global, key, descriptor);
        else delete global[key];
      }
    }
  },
);
