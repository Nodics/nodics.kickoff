/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaMonetaryOutletProposal @description Pins proposed LOCAL business values with actual pure owner arithmetic and Cart model contracts; no import, native qualification, customer grants or journey proof. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const proposal = require("./fixtures/circaMonetaryOutletProposal.json");
const manifest = require("../data/manifest.json");
const source = Object.values(require("../data/sample-v001/commerce/records/circaPromotionData"));
const service = file => require(path.join(frameworkRoot, "nodics.commerce", file));
const exact = service("modules/baseCommerce/modules/pricing/src/service/defaultExactAmountService");
const selection = service("modules/baseCommerce/modules/pricing/src/service/defaultPriceSelectionService");
const decision = service("modules/baseCommerce/modules/pricing/src/service/defaultPricingDecisionService");
const benefit = service("modules/baseCommerce/modules/promotion/src/service/defaultPromotionMerchantBenefitService");
const tax = service("modules/baseCommerce/modules/tax/src/service/defaultTaxDecisionEngineService");
const cart = service("modules/checkout/modules/cart/src/service/defaultCartOperationService");
const routes = service("modules/checkout/modules/cart/src/router/routers").cart.customer;
const shortCode = row => row.code.replace("CIRCA_COUPON_", "").replace(/_PROMO$/, "");

test("native monetary Pricing transport resolves the declared Commerce alias without changing the logical API", t => {
  const previous = Object.fromEntries(["CONFIG", "CLASSES", "SERVICE", "NODICS", "UTILS"].map(key => [key, global[key]]));
  t.after(() => Object.assign(global, previous));
  const runtime = loadRuntime("commerceServer");
  const foundation = file => require(path.join(frameworkRoot, "nodics.foundation", file));
  const modules = { ...foundation("modules/nService/src/service/module/defaultModulesConfigurationService"), LOG: { debug() {} } };
  const router = { ...foundation("modules/nRouter/src/service/router/defaultRouterService"), LOG: { debug() {}, error() {} } };
  const transport = { ...foundation("modules/nService/src/service/module/defaultModuleService"), LOG: { debug() {} } };
  global.CONFIG = { get: key => runtime[key] };
  global.UTILS = { isBlank: value => !value || !Object.keys(value).length };
  global.NODICS = { getRawModule: name => ({ metaData: { prefix: name } }) };
  global.SERVICE = { DefaultModulesConfigurationService: modules, DefaultRouterService: router,
    DefaultLoggerService: { createLogger: () => ({ debug() {}, error() {} }) } };
  global.CLASSES = { ModuleConfiguration: foundation("modules/nService/src/lib/moduleConfiguration"),
    NodeConfiguration: foundation("modules/nService/src/lib/nodeConfiguration") };
  modules.prepareModulesConfiguration();
  const connectionName = runtime.promotion.merchantBenefits.pricedSource.connectionName;
  assert.equal(connectionName, "commerceServer");
  assert.equal(modules.isAvailableModuleConfig(connectionName), true);
  assert.equal(modules.isAvailableModuleConfig("pricing"), false);
  const request = transport.buildRequest({ moduleName: "pricing", connectionName,
    apiName: "/internal/merchant/priced-transaction", methodName: "POST", followRedirects: false,
    secureTransport: { required: true, allowInsecureLoopback: true } });
  const endpoint = new URL(request.uri);
  assert.equal(endpoint.port, "4350");
  assert.equal(endpoint.pathname, "/nodics/pricing/v0/internal/merchant/priced-transaction");
  assert.doesNotThrow(() => transport.assertSecureTransport(request));
  assert.notEqual(loadRuntime("commerceServer", "kickoffDockerLocal").promotion.merchantBenefits.pricedSource.connectionName, "commerceServer");
});

test("historical proposal remains outside import packs and preserves its original review metadata and source bytes", () => {
  assert.equal(proposal.status, "PROPOSED_LOCAL_DEMO_ONLY_REQUIRES_HUMAN_REVIEW");
  assert.equal(proposal.importable, false);
  assert.equal(proposal.operationalAuthority, false);
  assert.equal(proposal.review.approved, false);
  assert.equal(proposal.review.independentOwnerGatesWaived, false);
  assert.equal(proposal.review.customerOrProductionPolicy, false);
  const bytes = fs.readFileSync(path.join(__dirname, "..", proposal.sourceTerms.path));
  assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), proposal.sourceTerms.sha256);
  assert(!JSON.stringify(manifest).includes("circaMonetaryOutletProposal"));
  assert.equal(proposal.sourceTerms.changeExistingPackBytes, false);
  assert.equal(proposal.deferredPackLayout.newRuntimePacksWrittenByThisProposal, false);
  assert.equal(proposal.deferredPackLayout.existingStoreProfilePromotionPacksChanged, false);
  assert.equal(proposal.deferredPackLayout.existingFourPublicationPlansChanged, false);
  assert.equal(proposal.deferredPackLayout.existingSixBudgetIssuancePacksChanged, false);
});

test("four ordinary goods have exact issuer/outlet AED prices and isolated non-replenishing opening intentions", () => {
  const common = proposal.commonSourceValues;
  assert.equal(proposal.ownership.applicationDataModule, "circa.ewaste");
  assert.equal(common.productClass, "ORDINARY_PHYSICAL_GOOD_USING_EXISTING_DEFAULT_PATH");
  assert.equal(common.inventoryStrategy, "PHYSICAL_STOCK");
  assert.equal(common.variantLevelPricing, false);
  assert.equal(common.digitalCommerceFields, "OMIT");
  assert.equal(common.currency, "AED");
  assert.equal(common.taxRate, "0");
  assert.equal(common.openingQuantityPerSku, "100");
  assert.equal(common.replenishment, "NONE");
  assert.equal(common.migration, "NONE");
  assert.equal(common.repairOrDiagnosisServiceClaim, false);
  assert.deepEqual(proposal.outletGoods.map(row => [row.storeCode, row.issuerEnterpriseCode, row.unitAmount]), [
    ["greenperks-cafe", "GREENPERKS_RETAIL", "300.00"],
    ["greenperks-bistro", "GREENPERKS_RETAIL", "300.00"],
    ["renewworks-repair", "RENEWWORKS_REPAIR_REUSE", "100.00"],
    ["loopcycle-accessories", "LOOPCYCLE_RECYCLING", "300.00"],
  ]);
  for (const field of ["productCode", "variantCode", "sku", "priceRowCode", "warehouseCode", "openingReceiptCode"])
    assert.equal(new Set(proposal.outletGoods.map(row => row[field])).size, 4);
  for (const row of proposal.outletGoods) {
    const owner = proposal.issuerPacks.find(pack => pack.issuerEnterpriseCode === row.issuerEnterpriseCode);
    assert(owner.storeCodes.includes(row.storeCode));
    assert.deepEqual(Object.keys(row.localizedNames).sort(), ["ar", "en"]);
    assert.equal(row.localizedNames.en, row.name);
    assert.match(row.localizedNames.ar, /[\u0600-\u06ff]/);
  }
  assert.equal(proposal.issuerPacks.reduce((sum, pack) => sum + pack.uniquePublicationRoots, 0), 14);
  assert.equal(proposal.deferredPackLayout.selectionPolicy, "EXPLICIT");
  assert.equal(proposal.deferredPackLayout.version, "0.0.1");
  assert.deepEqual(proposal.deferredPackLayout.environmentScope, ["LOCAL"]);
  assert.equal(proposal.deferredPackLayout.opening.installer, "INVENTORY_OPENING_RECEIPTS");
  assert.equal(proposal.deferredPackLayout.opening.snapshotsOrBalanceResetAllowed, false);
});

test("actual Pricing, exact-money, Tax and Promotion arithmetic covers all nine unchanged monetary terms", t => {
  const previous = { SERVICE: global.SERVICE, CLASSES: global.CLASSES };
  t.after(() => Object.assign(global, previous));
  global.SERVICE = { DefaultExactAmountService: exact };
  global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); this.code = code; } } };
  const terms = source.filter(row => row.actions.discountType);
  assert.equal(terms.length, 9);
  assert.deepEqual(proposal.monetaryCases.map(row => row.campaign).sort(), terms.map(shortCode).sort());
  for (const row of proposal.monetaryCases) {
    const original = terms.find(item => shortCode(item) === row.campaign);
    const good = proposal.outletGoods.find(item => item.storeCode === row.storeCode);
    const owner = proposal.issuerPacks.find(item => item.issuerEnterpriseCode === good.issuerEnterpriseCode);
    assert.equal(original.enterpriseCode, good.issuerEnterpriseCode);
    assert(original.conditions.storeCodes.includes(row.storeCode));
    assert.equal(row.minimumSubtotal, original.conditions.minimumSubtotal ?? null);
    assert.equal(row.discountType, original.actions.discountType);
    assert.equal(row.declared, original.actions.discountValue);
    assert.equal(row.cap, original.actions.maximumDiscountAmount ?? null);
    assert.equal(row.budget, original.budget.limit);
    const request = { tenant: "default", enterpriseCode: good.issuerEnterpriseCode, storeCode: good.storeCode,
      currency: "AED", productCode: good.productCode, quantity: "1", now: "2026-10-09T00:00:00.000Z" };
    const book = { ...request, code: owner.priceBookCode, status: "ACTIVE" };
    const price = { ...request, code: good.priceRowCode, priceBookCode: owner.priceBookCode,
      minQuantity: "1", unitAmount: good.unitAmount };
    const selected = selection.select(request, [book], [price], exact);
    assert.equal(selected.conflicts.length, 0);
    const priced = decision.decide(request, selected.selected, exact);
    assert.equal(priced.totalAmount, row.expectedSubtotal);
    const discount = benefit.calculate(priced.totalAmount, { percent: row.discountType === "PERCENT", declared: row.declared,
      ...(row.minimumSubtotal === null ? {} : { minimum: row.minimumSubtotal }),
      ...(row.cap === null ? {} : { cap: row.cap }) });
    assert.equal(discount, row.expectedDiscount);
    const net = exact.add(priced.totalAmount, exact.multiply(discount, "-1"));
    assert.equal(net, row.expectedNet);
    assert.equal(tax.calculate({ ...request, taxableAmount: net }, { tenant: "default", status: "ACTIVE",
      jurisdiction: "CIRCA_LOCAL_DEMO", taxCode: "LOCAL_DEMO_ZERO", rate: "0", revision: 1 }, exact).taxAmount, "0");
    assert.equal(selection.select({ ...request, enterpriseCode: "FOREIGN" }, [book], [price], exact).selected, undefined);
    assert.equal(selection.select({ ...request, currency: "POINTS" }, [book], [price], exact).selected, undefined);
    if (row.minimumSubtotal !== null)
      assert.throws(() => benefit.calculate("0", { percent: row.discountType === "PERCENT", declared: row.declared,
        minimum: row.minimumSubtotal }), { code: "ERR_PROMOTION_BENEFIT_UNCONFIRMED" });
  }
});

test("proposed Cart commands use canonical routes and safe product-priced entry models without authority fields", async t => {
  const previous = { SERVICE: global.SERVICE };
  t.after(() => Object.assign(global, previous));
  global.SERVICE = {};
  const execution = proposal.cartExecutionAfterApproval;
  assert.equal(execution.importCartOrEntrySnapshots, false);
  for (const operation of ["create", "addEntry", "calculate"]) {
    const instruction = execution[operation];
    assert.equal(instruction.method, routes[operation].method);
    assert.equal(instruction.route.replace(/\{cartCode\}/g, ":cartCode"), routes[operation].key);
    for (const field of ["enterpriseCode", "tenant", "ownerId", "authData", "subtotal", "unitAmount"])
      assert.equal(Object.hasOwn(instruction.body, field), false);
  }
  const carts = new Set();
  for (const row of proposal.monetaryCases) {
    const good = proposal.outletGoods.find(item => item.storeCode === row.storeCode);
    const cartCode = execution.create.body.cartCode.replace("{campaign}", row.campaign).replace("{runId}", "run01");
    const entryCode = execution.addEntry.body.entryCode.replace("{campaign}", row.campaign).replace("{runId}", "run01");
    assert.match(cartCode, /^[A-Za-z0-9_.-]{1,114}$/);
    assert.match(entryCode, /^[A-Za-z0-9_.:@-]{1,128}$/);
    carts.add(cartCode);
    global.SERVICE.DefaultProductDiscoveryService = { activeSelection: async () => ["isolated-projection-fixture"],
      resolveVariantSku: async request => {
        assert.equal(request.productCode, good.productCode);
        assert.equal(request.variantCode, undefined);
        assert.equal(request.sku, good.sku);
        return good.sku;
      } };
    const entry = await cart.entryModel({ tenant: "default", enterpriseCode: good.issuerEnterpriseCode,
      ownerId: "isolated-model-fixture-not-a-native-buyer", cartCode,
      payload: { entryCode, productCode: good.productCode, sku: good.sku, quantity: "1" } });
    assert.equal(entry.code, entryCode);
    assert.equal(entry.sku, good.sku);
    assert.equal(entry.variantCode, undefined);
    assert.equal(entry.priceQuoteCode, undefined);
  }
  assert.equal(carts.size, 9);
});
