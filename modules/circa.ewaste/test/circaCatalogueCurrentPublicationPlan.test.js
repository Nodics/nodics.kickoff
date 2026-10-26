/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaCatalogueCurrentPublicationPlan @description Checks the effective customer catalogue against canonical setup status with isolated owner evidence ports, not native publication proof. @layer test @owner circa.ewaste */
const test = require("node:test"),
  assert = require("node:assert/strict");
const path = require("node:path"),
  fs = require("node:fs"),
  crypto = require("node:crypto");
const { frameworkRoot } = require("../../../test/helpers/configuration");
const manifest = require("../data/manifest.json");
const releasePayload = (code) =>
  require(
    path.resolve(
      __dirname,
      "../data",
      Object.keys(manifest.sections[code].files)[0],
    ),
  );
const current = releasePayload("circaCataloguePublicationPlan");
const assets = current.items.filter((item) =>
  item.rootCode.startsWith("CIRCA_ASSET_"),
);
const identity = (item) =>
  [item.domain, item.rootType, item.rootCode].join(":");

test("single v001 catalogue retains 46 roots with initial Product sealing and no successor packs", () => {
  assert.equal(current.contractVersion, 1);
  assert.equal(current.items.length, 46);
  assert.equal(assets.length, 5);
  assert.equal(new Set(current.items.map(identity)).size, 46);
  assert.equal(new Set(current.items.map((item) => item.code)).size, 46);
  assert.equal(
    current.items.filter((item) => item.domain === "product").length,
    43,
  );
  for (const item of current.items.filter(
    (item) => item.domain === "product",
  )) {
    assert.equal(item.sourceVersion, "1");
    assert.equal(item.input.versionId, 0);
    assert.equal(item.input.publicationCode, item.code);
    assert.equal(item.input.storeCode, "circaMainStore");
    assert.equal(item.code, "circa-product-" + item.rootCode + "-v001");
  }
  const section = manifest.sections.circaCataloguePublicationPlan;
  assert.equal(section.sourceRoot, "sample-v001");
  assert.equal(section.version, "0.0.1");
  const file = "sample-v001/publication/catalogue/records/publicationPlan.json";
  assert.deepEqual(Object.keys(section.files), [file]);
  assert.equal(
    section.files[file],
    crypto
      .createHash("sha256")
      .update(fs.readFileSync(path.resolve(__dirname, "../data", file)))
      .digest("hex"),
  );
});

/** Isolates generated publication reads and domain evidence; status itself is the real nPublish owner. */
function fixture(t) {
  const saved = {
    SERVICE: global.SERVICE,
    CONFIG: global.CONFIG,
    CLASSES: global.CLASSES,
  };
  t.after(() => {
    for (const [key, value] of Object.entries(saved))
      if (value === undefined) delete global[key];
      else global[key] = value;
  });
  const publications = [],
    targets = new Map(),
    reads = [];
  const domains = [...new Set(current.items.map((item) => item.domain))];
  const providers = Object.fromEntries(
    domains.map((domain) => [domain, "EvidenceProvider"]),
  );
  const permissions = Object.fromEntries(
    domains.map((domain) => [domain, domain + ".publish"]),
  );
  const config = {
    setup: { maximumItems: 46, maximumBytes: 100000, permissions },
    providers: {
      versionProviders: providers,
      domainAdapters: providers,
      workflowProviders: providers,
    },
  };
  global.CONFIG = {
    get: (key) =>
      key === "runtimeRole"
        ? { publication: "STAGED" }
        : key === "publish"
          ? config
          : undefined,
  };
  global.CLASSES = {
    NodicsError: class extends Error {
      constructor(code) {
        super(code);
        this.code = code;
      }
    },
  };
  const forbidden = () => {
    throw new Error("Read-only setup status must not mutate");
  };
  global.SERVICE = {
    DefaultSecuredRequestPipelineService: {
      getGrantedPermissions: (request) => request.authData.permissions,
      isPermissionGranted: (permission, granted) =>
        granted.includes(permission),
    },
    DefaultPublicationRequestService: {
      get: async (request) => {
        assert.equal(request.options.skipItemCache, true);
        reads.push(request.query.rootCode);
        return {
          result: structuredClone(
            publications.filter((row) =>
              Object.entries(request.query).every(
                ([key, value]) => row[key] === value,
              ),
            ),
          ),
        };
      },
    },
    DefaultPublicationLifecycleService: {
      validate: forbidden,
      requestApproval: forbidden,
    },
    EvidenceProvider: {
      getVersion: forbidden,
      prepareSetup: forbidden,
      validateSetup: async (row, request, item) => {
        assert.equal(row.sourceVersion, item.sourceVersion);
        assert.equal(row.tenantCode, request.tenant);
        assert.equal(row.enterpriseCode, request.enterpriseCode);
        return "target-" + item.code;
      },
      getOnlineVersion: async (row) => targets.get(identity(row)),
      isSetupReceiptCommitted: async (row, request, receipt) =>
        receipt?.committed === true,
    },
  };
  const online = (item) => {
    const version = "target-" + item.code;
    publications.push({
      ...item,
      input: undefined,
      tenantCode: "default",
      enterpriseCode: "GREENPERKS_ONLINE",
      state: "ONLINE",
      revision: 4,
      targetVersion: version,
      activationOperation: { key: "activate-" + item.code },
      auditTrail: [
        { toState: "APPROVED" },
        {
          toState: "ONLINE",
          details: {
            receipt: {
              committed: true,
              operationKey: "activate-" + item.code,
              publicationCode: item.code,
              sourceVersion: item.sourceVersion,
              targetVersion: version,
            },
          },
        },
      ],
    });
    targets.set(identity(item), version);
  };
  const request = {
    tenant: "default",
    authData: {
      tenant: "default",
      entCode: "GREENPERKS_ONLINE",
      principalId: "catalogue-reviewer",
      principalType: "human",
      tokenType: "access",
      permissions: ["publish.lifecycle.view", ...Object.values(permissions)],
    },
  };
  const service = Object.create(
    require(
      path.join(
        frameworkRoot,
        "nodics.foundation/modules/nPublish/src/service/defaultPublicationSetupService",
      ),
    ),
  );
  return {
    online,
    publications,
    targets,
    reads,
    status: (input) => service.status(request, input),
  };
}

test("five-current and 45-current partial catalogues never qualify the required full selection", async (t) => {
  const f = fixture(t);
  assets.forEach(f.online);
  const partial = await f.status(current);
  assert.equal(partial.ready, false);
  assert.equal(partial.items.length, 46);
  assert.equal(
    partial.items.filter((item) => item.status === "CURRENT").length,
    5,
  );
  assert.equal(
    partial.items.filter((item) => item.status === "NOT_REQUESTED").length,
    41,
  );
  const remaining = current.items.filter(
    (item) => !assets.some((next) => identity(next) === identity(item)),
  );
  remaining.slice(0, -1).forEach(f.online);
  const almost = await f.status(current);
  assert.equal(almost.ready, false);
  assert.equal(
    almost.items.filter((item) => item.status === "CURRENT").length,
    45,
  );
  f.online(remaining.at(-1));
  assert.equal((await f.status(current)).ready, true);
  const receipt = f.publications.at(-1).auditTrail.at(-1).details.receipt;
  receipt.committed = false;
  assert.equal((await f.status(current)).ready, false);
  assert.equal(f.reads.length, 46 * 4);
});

test("baseline readiness refuses stale target receipts without another publication", async (t) => {
  const f = fixture(t);
  current.items.forEach(f.online);
  assert.equal((await f.status(current)).ready, true);
  f.targets.set(identity(current.items[0]), "unrelated-target");
  const stale = await f.status(current);
  assert.equal(stale.ready, false);
  assert.equal(
    stale.items.filter((item) => item.status === "CURRENT").length,
    45,
  );
  assert.equal(f.publications.length, 46);
});
