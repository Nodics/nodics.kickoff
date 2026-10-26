/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module test/localLoyaltyReadEvidenceSelection @description Source-only Local selection acceptance through the real Loyalty endpoint controller/facade and runtime guard. Generated persistence is read-only stubbed; no JWT or installed-runtime claim. @owner nodics.kickoff */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { loadRuntime } = require("./helpers/configuration");
const foundation = path.dirname(require.resolve("nodics.foundation/package.json"));
const root = path.join(path.dirname(foundation), "nodics.loyalty");
const owner = relative => require(path.join(root, relative));
owner("modules/loyaltyWallet/test/helpers/runtimeEnums")();

test("Local Commerce exact Retail/Online ledger endpoint reads retain owner/provenance guards and deny foreign environments", async t => {
  const config = loadRuntime("loyaltyServer", "kickoffLocal");
  const names = ["CONFIG", "SERVICE", "FACADE", "NODICS", "CLASSES"];
  const previous = Object.fromEntries(names.map(name => [name, Object.getOwnPropertyDescriptor(global, name)]));
  t.after(() => { for (const name of names) { if (previous[name]) Object.defineProperty(global, name, previous[name]); else delete global[name]; } });
  global.CONFIG = { get: key => config[key] };
  global.NODICS = { getSelectedEnvironmentName: () => "kickoffLocal" };
  global.CLASSES = { NodicsError: class extends Error { constructor(code, message) { super(message); this.code = code; } } };
  const authData = { tokenType: "service", principalType: "service", serviceId: "apiAdmin", principalId: "apiAdmin",
    tenant: "default", entCode: "default", runtimeInstanceId: "kickoff-local-commerce-1",
    runtimeScope: { projectCode: "nodics.kickoff", environmentCode: "kickoffLocal", serverCode: "commerceServer",
      instanceCode: "kickoff-local-commerce-1", assignmentCode: "kickoff-local-commerce-runtime-deployment" },
    modules: ["loyaltyApi"], permissions: ["loyalty.wallet.read"], userGroups: [], groups: [] };
  global.SERVICE = {
    DefaultServiceTokenService: require(path.join(foundation, "modules/nAuth/src/service/identity/defaultServiceTokenService")),
    DefaultLoyaltyAmountService: owner("modules/loyaltyCore/src/service/defaultLoyaltyAmountService"),
    DefaultLoyaltyRewardOperationService: owner("modules/loyaltyWallet/src/service/defaultLoyaltyRewardOperationService"),
    DefaultLoyaltyReadEvidenceService: owner("modules/loyaltyWallet/src/service/defaultLoyaltyReadEvidenceService"),
    DefaultLoggerService: { hasPrivateCaptureProtection: () => true },
  };
  global.FACADE = { DefaultLoyaltyInternalFacade: owner("modules/loyaltyApi/src/facade/defaultLoyaltyInternalFacade") };
  const controller = owner("modules/loyaltyApi/src/controller/defaultLoyaltyInternalController");
  const route = owner("modules/loyaltyApi/src/router/routers").loyaltyApi.internal.ledgerEvidence;
  const security = require(path.join(foundation, "modules/nRouter/src/service/request/defaultSecuredRequestPipelineService"));
  assert.equal(route.key, "/reward-ledger-evidence");
  assert.equal(route.permission, "loyalty.wallet.read");
  assert.equal(route.requestPrivacy.sensitive, true);
  assert.equal(security.hasAccessGroup({ authData, router: route }), true);
  assert.equal(security.hasAcceptedTokenType({ authData, router: route }), true);
  let partition, reads = 0;
  const ledger = { code: "capture", walletCode: "wallet", programCode: "circa", rewardTypeCode: "points", active: true,
    entryType: "CAPTURE", amount: "1.00", sourceType: "BIDDING", sourceCode: "bid", targetType: "AUCTION_ROUND", targetCode: "round",
    reservationCode: "reservation", redemptionCode: "redemption", idempotencyKey: "original:capture" };
  const wallet = { code: "wallet", ownerType: "ENTERPRISE", ownerCode: "GREENPERKS_RETAIL", active: true, status: "OPEN" };
  for (const [name, rows] of Object.entries({ DefaultRewardLedgerEntryService: [ledger], DefaultLoyaltyWalletService: [wallet] })) {
    SERVICE[name] = { get: async request => {
      reads++;
      assert.equal(request.tenant, "default"); assert.equal(request.authData.entCode, "default");
      assert.equal(request.authData.principalId, "loyaltyRewardOperationService");
      assert.equal(request.searchOptions.pageSize, 2);
      const result = rows.filter(row => Object.entries(request.query).every(([k, v]) => row[k] === v));
      return { code: "SUC_GET", result: structuredClone(result), count: result.length };
    }, save: () => assert.fail("No writes"), update: () => assert.fail("No writes") };
  }
  const call = body => controller.ledgerEvidence({ tenant: "default", enterpriseCode: "default", authData,
    httpRequest: { headers: { "x-enterprise-code": "default" }, body },
    httpResponse: { setHeader: (key, value) => { assert.equal(key, "Cache-Control"); assert.equal(value, "no-store"); } } });
  const originalAuth = structuredClone(authData);
  for (partition of ["GREENPERKS_RETAIL", "GREENPERKS_ONLINE"]) {
    wallet.ownerCode = partition;
    const payload = { enterpriseCode: partition, ownerType: "ENTERPRISE", ownerCode: partition, programCode: "circa",
      rewardTypeCode: "points", sourceType: "BIDDING", sourceCode: "bid", entryCode: "capture" };
    const before = structuredClone({ wallet, ledger });
    const result = (await call(payload)).data;
    assert.equal(result.enterpriseCode, partition); assert.equal(result.entries[0].code, "capture");
    assert.equal(result.entries[0].sourceType, "BIDDING"); assert.equal(result.entries[0].targetCode, "round");
    for (const change of [{ ownerCode: "foreign" }, { ownerType: "CUSTOMER" }, { sourceType: "PAYMENT" }, { sourceCode: "foreign" }])
      await assert.rejects(call({ ...payload, ...change }), { code: "ERR_LOYALTY_EVIDENCE_UNAVAILABLE" });
    const count = reads;
    authData.runtimeScope.environmentCode = "kickoffDockerLocal";
    await assert.rejects(call(payload), { code: "ERR_LOYALTY_EVIDENCE_UNAVAILABLE" });
    authData.runtimeScope.environmentCode = "kickoffLocal";
    await assert.rejects(call({ ...payload, enterpriseCode: "foreign" }), { code: "ERR_LOYALTY_EVIDENCE_UNAVAILABLE" });
    assert.equal(reads, count); assert.deepEqual({ wallet, ledger }, before); assert.deepEqual(authData, originalAuth);
  }
});
