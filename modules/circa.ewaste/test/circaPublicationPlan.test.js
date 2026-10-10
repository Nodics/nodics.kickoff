/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaPublicationPlan @description Verifies Circa source publication coverage and consumes canonical Product/digital owners with isolated ports; not installed activation or supply qualification. @layer test @owner circa.ewaste */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { test } = require("node:test");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
const dataRoot = path.resolve(__dirname, "../data");
const manifest = require("../data/manifest.json");
const plan = require("../data/sample-v001/publication/records/publicationPlan.json");
const rows = (name) => Object.values(require(`../data/sample-v001/commerce/records/circa${name}Data`));
const owner = (domain, service) => require(path.join(frameworkRoot,
  `nodics.commerce/modules/baseCommerce/modules/${domain}/src/service/${service}`));
const scope = { tenant: "default", enterpriseCode: "GREENPERKS_ONLINE" };

test("Circa pins every active Product and financial root exactly once in its v001 publication pack", () => {
  assert.equal(plan.contractVersion, 1);
  assert.equal(plan.items.length, 84);
  assert.equal(new Set(plan.items.map(item => item.code)).size, plan.items.length);
  const products = rows("Product").filter(row => row.status === "ACTIVE");
  const intents = plan.items.filter(item => item.domain === "product");
  assert.equal(intents.length, products.length);
  assert.equal(intents.length, 43);
  assert.deepEqual(new Set(intents.map(item => item.rootCode)), new Set(products.map(row => row.code)));
  for (const item of intents) {
    const product = products.find(row => row.code === item.rootCode);
    assert.equal(item.rootType, "product");
    assert.equal(item.sourceVersion, String(product.revision));
    assert.deepEqual(item.input, { publicationCode: item.code, productCode: product.code,
      storeCode: "circaMainStore", versionId: 0 });
  }
  for (const [domain, rootType, name] of [["pricing", "priceBook", "PriceBook"],
    ["inventory", "warehouse", "Warehouse"], ["tax", "taxPolicy", "TaxPolicy"], ["promotion", "promotion", "Promotion"]]) {
    const roots = rows(name);
    const items = plan.items.filter(item => item.domain === domain);
    assert.equal(items.length, roots.length);
    assert.deepEqual(new Set(items.map(item => item.rootCode)), new Set(roots.map(row => row.code)));
    for (const item of items) {
      const expected = [{ schema: rootType, code: item.rootCode, versionId: 0 }];
      if (domain === "pricing") expected.push(...rows("PriceRow")
        .filter(row => row.priceBookCode === item.rootCode).map(row => ({ schema: "priceRow", code: row.code, versionId: 0 })));
      expected.sort((a, b) => (a.schema + ":" + a.code).localeCompare(b.schema + ":" + b.code));
      assert.equal(item.rootType, rootType);
      assert.deepEqual(item.input, { publicationCode: item.code, rootType, rootCode: item.rootCode, references: expected });
      assert.match(item.sourceVersion, /^[a-f0-9]{64}$/);
    }
  }
  const section = manifest.sections.circaPublicationPlan;
  assert.equal(section.kind, "DATA_RELEASE");
  assert.equal(section.dataType, "sample");
  assert.equal(section.sourceRoot, "sample-v001");
  assert.equal(section.version, "0.0.1");
  assert.equal(section.destinationRole, "COMMERCE_STAGED");
  assert.equal(section.selectionPolicy, "EXPLICIT");
  assert.equal(section.versioningPolicy, "IMMUTABLE");
  assert.equal(section.publicationPolicy, "REQUIRED");
  assert.equal(section.initialPublicationPolicy, "ADMIN_INITIATED");
  assert.deepEqual(Object.keys(section.files), ["sample-v001/publication/records/publicationPlan.json"]);
  for (const [file, hash] of Object.entries(section.files))
    assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(dataRoot, file))).digest("hex"), hash);
});

test("financial pins match real owner exact-version capture and retention with isolated source ports", async (t) => {
  const prior = { CONFIG: global.CONFIG, SERVICE: global.SERVICE, NODICS: global.NODICS, UTILS: global.UTILS };
  t.after(() => Object.assign(global, prior));
  global.CONFIG = { get: () => ({ publication: { runtimeRole: "STAGED", sourceVersioningQualified: true } }) };
  global.UTILS = { createModelName: name => name };
  for (const [domain, rootType, name] of [["pricing", "priceBook", "PriceBook"],
    ["inventory", "warehouse", "Warehouse"], ["tax", "taxPolicy", "TaxPolicy"], ["promotion", "promotion", "Promotion"]]) {
    const title = domain[0].toUpperCase() + domain.slice(1);
    const publication = owner(domain, `default${title}PublicationService`);
    const sources = { [rootType]: rows(name) };
    if (domain === "pricing") sources.priceRow = rows("PriceRow");
    const models = Object.fromEntries(Object.keys(sources).map(schema => [schema,
      { versioned: true, rawSchema: { versionedReadMode: "CURRENT" } }]));
    global.NODICS = { getModels: () => models };
    const retained = new Map();
    const persistence = {
      get: async request => ({ result: retained.has(request.query.code) ? [retained.get(request.query.code)] : [] }),
      save: async request => { retained.set(request.model.code, structuredClone(request.model)); },
      update: async () => { throw new Error("Retention must remain insert-only"); },
    };
    global.SERVICE = Object.fromEntries(["Release", "Pointer", "Receipt"].map(suffix =>
      [`Default${title}Policy${suffix}Service`, persistence]));
    for (const [schema, data] of Object.entries(sources)) {
      const serviceName = `Default${schema[0].toUpperCase() + schema.slice(1)}Service`;
      global.SERVICE[serviceName] = { get: async request => ({ result: data.map(row => ({ ...row, versionId: 0 }))
        .filter(row => Object.entries(request.query).every(([key, value]) => row[key] === value)) }) };
    }
    for (const item of plan.items.filter(item => item.domain === domain)) {
      const row = sources[rootType].find(row => row.code === item.rootCode);
      const ownerScope = { ...scope, enterpriseCode: row.enterpriseCode };
      const capture = await publication.capture(ownerScope, item.input);
      assert.equal(capture.code, item.sourceVersion);
      assert.equal(capture.rootCode, item.rootCode);
      assert.deepEqual(await publication.capture(ownerScope, item.input), capture);
      await assert.rejects(publication.capture(ownerScope, { ...item.input,
        references: item.input.references.map(ref => ({ ...ref, versionId: 1 })) }), /Exact policy version unavailable/);
    }
    assert.equal(retained.size, plan.items.filter(item => item.domain === domain).length);
  }
});

test("all Circa variants and both locales retain digital classification without manufacturing asset delivery", () => {
  const products = rows("Product"), variants = rows("ProductVariant");
  assert.equal(variants.length, 43);
  for (const variant of variants) {
    const product = products.find(row => row.code === variant.productCode);
    assert.equal(variant.productType, product.productType);
    assert.equal(variant.fulfillmentStrategy, product.fulfillmentStrategy);
    assert.equal(variant.digitalDeliveryType, product.digitalDeliveryType);
  }
  for (const name of ["ProductVariant", "ProductLocalization", "ProductVariantLocalization"]) {
    const records = rows(name);
    assert.equal(records.length, name === "ProductVariant" ? 43 : 86);
    for (const row of records) {
      const product = products.find(item => item.code === row.productCode);
      assert.equal(row.attributes.productType, "DIGITAL");
      assert.equal(row.attributes.fulfillmentStrategy, "DIGITAL_COMMERCE");
      assert.equal(row.attributes.digitalDeliveryType, product.digitalDeliveryType);
      assert.equal(row.attributes.inventoryStrategy, product.digitalDeliveryType ? "COUPON_CODE_POOL" : undefined);
    }
  }
});

test("real Product projections expose malformed digital metadata as unavailable while direct owner and provider refusals remain strict", async (t) => {
  const prior = { CONFIG: global.CONFIG, SERVICE: global.SERVICE };
  t.after(() => Object.assign(global, prior));
  const builder = owner("product", "defaultProductLocalizedProjectionBuilderService");
  const enrichment = owner("product", "defaultProductSearchEnrichmentService");
  const localization = owner("product", "defaultProductLocalizationPolicyService");
  const digital = require(path.join(frameworkRoot,
    "nodics.commerce/modules/digitalCommerce/modules/digitalCore/src/service/defaultDigitalCommerceCheckoutService"));
  const calls = [];
  global.CONFIG = { get: key => key === "digitalCore" ? { maximumCouponUnitsPerCheckout: 100 } :
    key === "product" ? { localization: { supportedLocales: ["en", "ar"] }, publication: { searchEnrichment: { inventory: { enabled: true } } } } : {} };
  global.SERVICE = {
    DefaultProductLocalizationPolicyService: localization,
    DefaultDigitalCommerceCheckoutService: digital,
    DefaultPromotionOperationService: { couponPoolAvailability: async request => {
      calls.push(request);
      return { available: false, inventoryStrategy: "COUPON_CODE_POOL", privateOwnerEvidence: "not-customer-data" };
    } },
    DefaultCustomerAvailabilitySummaryService: { summarize: async () => { throw new Error("Unexpected physical stock fallback"); } },
  };
  for (const locale of ["en", "ar"]) {
    const request = { ...scope, locale, storeCode: "circaMainStore" };
    const projections = rows("Product").map(product => {
      const variants = rows("ProductVariant").filter(row => row.productCode === product.code);
      return builder.build(request, { product, locale, storeCode: request.storeCode,
        localizations: rows("ProductLocalization").filter(row => row.productCode === product.code),
        variants, variantCodes: variants.map(row => row.code) });
    });
    const coupons = projections.filter(row => row.productCode.startsWith("CIRCA_COUPON_"));
    assert.equal(coupons.length, 38);
    const result = await enrichment.consumerAvailability(request, coupons);
    assert.equal(Object.keys(result).length, 38);
    for (const value of Object.values(result)) assert.deepEqual(value, { available: false, status: "OUT_OF_STOCK" });
    for (const projection of projections.filter(row => row.productCode.startsWith("CIRCA_ASSET_"))) {
      assert.deepEqual(await enrichment.consumerAvailability(request, [projection]), {
        [projection.productCode]: { available: false, status: "OUT_OF_STOCK" },
      });
      await assert.rejects(digital.availabilityFromProjection({ ...request, productCode: projection.productCode,
        quantity: "1" }, projection), error => error.code === "ERR_DIGITAL_AVAILABILITY_METADATA");
      const corrected = structuredClone(projection);
      const localized = Object.values(require("../data/sample-v001/asset-classification/records/circaAssetClassificationLocalizationData"))
        .find(row => row.productCode === projection.productCode && row.locale === locale);
      assert(localized);
      corrected.payload.localizedAttributes = structuredClone(localized.attributes);
      await assert.rejects(enrichment.consumerAvailability(request, [corrected]), error =>
        error.code !== "ERR_DIGITAL_AVAILABILITY_METADATA" && /Unsupported digital ownership availability/.test(error.message));
    }
    const projection = coupons[0];
    await assert.rejects(digital.availabilityFromProjection({ ...request, productCode: projection.productCode,
      quantity: "1", variantCode: projection.payload.variantCodes[0], sku: "foreign-sku" }, projection), /Digital Product SKU is unavailable/);
  }
  assert.equal(calls.length, 76);
  assert(calls.every(call => call.tenant === scope.tenant && call.enterpriseCode === scope.enterpriseCode &&
    call.storeCode === "circaMainStore" && call.quantity === "1"));
  const product = rows("Product").find(row => row.code.startsWith("CIRCA_COUPON_"));
  const variants = rows("ProductVariant").filter(row => row.productCode === product.code);
  const request = { ...scope, locale: "en", storeCode: "circaMainStore" };
  const projection = builder.build(request, { product, locale: "en", storeCode: request.storeCode,
    localizations: rows("ProductLocalization").filter(row => row.productCode === product.code), variants,
    variantCodes: variants.map(row => row.code) });
  for (const error of [new Error("Owner unavailable"), Object.assign(new Error("Owner authorization refused"), { code: "ERR_OWNER_SCOPE" })]) {
    SERVICE.DefaultPromotionOperationService.couponPoolAvailability = async () => { throw error; };
    await assert.rejects(enrichment.consumerAvailability(request, [projection]), actual => actual === error);
  }
});

for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
  test(`${environment} selects only supported Circa publication and defers required operations without documentation`, () => {
    const runtime = loadRuntime("platformServer", environment, {});
    const profile = runtime.backofficeApplicationInitialization.profiles.circa;
    const moduleSteps = require("../config/properties").backofficeApplicationInitialization.profiles.circa.dataPackages.value;
    assert.deepEqual(profile.dataPackages, moduleSteps, "Deployment selection must preserve every shared package and target");
    const initialization = require(path.join(frameworkRoot,
      "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
    const prior = global.CLASSES;
    try {
      global.CLASSES = { NodicsError: class extends Error {} };
      const steps = initialization.preparationSteps(profile);
      assert(!steps.some(step => ["circa.ewaste:circaPublicationPlan", "circa.ewaste:commerce-operational"].includes(step.code)));
      // The original 84-root inventory remains independent of the new outlet packs.
      const allPublications = steps.filter(step => step.type === "GOVERNED_PUBLICATIONS" && !step.code.includes("Outlet"));
      const publications = allPublications.filter(step => step.required);
      const operations = steps.filter(step => /^circa\.ewaste:circa(GreenPerks|RenewWorks|LoopCycle)(Budget|Issuance)$/.test(step.code));
      assert.equal(operations.length, 6);
      const issuers = { GreenPerks: "GREENPERKS_RETAIL", RenewWorks: "RENEWWORKS_REPAIR_REUSE", LoopCycle: "LOOPCYCLE_RECYCLING" };
      for (const [name, enterprise] of Object.entries(issuers)) {
        for (const stage of ["Budget", "Issuance"]) {
          const step = operations.find(item => item.code === `circa.ewaste:circa${name}${stage}`);
          assert.equal(step.targetRuntimeRole, "COMMERCE");
          assert.equal(step.operatorEnterpriseCode, enterprise);
        }
      }
      if (environment === "kickoffLocal") {
        assert.equal(allPublications.length, 5);
        assert.equal(publications.length, 4);
        const optional = allPublications.filter(step => !step.required);
        assert.equal(optional.length, 1);
        assert.equal(optional[0].code, "circa.ewaste:circaAssetClassificationPublicationPlan");
        const successors = require("../data/sample-v001/asset-publication/records/publicationPlan.json");
        assert.deepEqual(optional[0].publicationPlan, successors);
        const identity = item => [item.domain, item.rootType, item.rootCode].join(":");
        const replacements = new Map(successors.items.map(item => [identity(item), item]));
        const effective = plan.items.map(item => replacements.get(identity(item)) || item);
        const selectedItems = publications.flatMap(step => step.publicationPlan.items);
        assert.equal(selectedItems.length, 84);
        assert.equal(new Set(selectedItems.map(item => item.code)).size, 84);
        assert.deepEqual(selectedItems.slice().sort((a, b) => a.code.localeCompare(b.code)),
          effective.slice().sort((a, b) => a.code.localeCompare(b.code)));
        assert(optional[0].publicationPlan.items.every(item => selectedItems.some(selected =>
          identity(selected) === identity(item) && selected.code === item.code)));
        for (const publication of publications) {
          assert.equal(publication.targetRuntimeRole, "COMMERCE_STAGED");
          assert.equal(publication.targetServer, "commerceStaged");
          const name = publication.code.match(/circa(CatalogueCurrent|GreenPerks|RenewWorks|LoopCycle)PublicationPlan$/)[1];
          assert.equal(publication.operatorEnterpriseCode, name === "CatalogueCurrent" ? "GREENPERKS_ONLINE" : issuers[name]);
          assert(steps.indexOf(publication) < steps.indexOf(operations[0]));
        }
        const ownership = steps.find(step => step.code === "circa.ewaste:circaDigitalOwnershipPolicies");
        assert.equal(ownership.targetRuntimeRole, "WASTE");
        assert.equal(ownership.phase, "BEFORE_PUBLICATION");
        assert.equal(ownership.required, true);
      } else {
        assert.equal(allPublications.length, 0, "Docker must not select a step without its owner integrations");
        assert(!steps.some(step => step.code === "circa.ewaste:circaDigitalOwnershipPolicies"));
      }
      for (const step of [...publications, ...operations]) {
        assert.equal(step.required, true);
        assert.equal(step.trigger, "USER");
        assert.equal(step.phase, "AFTER_PUBLICATION");
      }
      const groups = initialization.preparationGroups(profile, {}, operations);
      assert.equal(groups.length, 6, "Independent issuer stages must never share an installer dispatch");
      assert(groups.every(group => group.steps.length === 1));
      assert(!steps.some(step => step.dataType === "docs"));
      assert.equal(runtime.profileCustomerEligibility.enabled, false);
      assert.equal(runtime.profileCustomerEligibility.enforcementQualified, false);
      assert.equal(require("../config/properties").profileCustomerEligibility, undefined);
      assert.equal(require("../config/properties").promotion?.sellerAuthorization, undefined);
    } finally { global.CLASSES = prior; }
  });
}

test("native Local publication selection inherits all five selected owners and their Process prerequisites", () => {
  const platform = loadRuntime("platformServer", "kickoffLocal", {});
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal", {});
  const process = loadRuntime("processServer", "kickoffLocal", {});
  const prerequisites = platform.backofficeApplicationInitialization.profiles.circa.preparation.prerequisites;
  for (const domain of ["product", "pricing", "tax", "inventory", "promotion"]) {
    assert.equal(staged.publish.providers.workflowProviders[domain], "DefaultPublicationApprovalWorkflowService");
    assert(staged.publish.providers.domainAdapters[domain]);
    assert(staged.publish.providers.versionProviders[domain]);
    assert(prerequisites.some(step => step.code === `${domain}:${domain}PublicationWorkflow` && step.required === true));
    assert(process.data.dataReleases.contributions.some(item => item.moduleName === domain &&
      item.sections.includes(`${domain}PublicationWorkflow`)));
    if (domain !== "product") {
      assert.equal(staged[domain].publication.runtimeRole, "STAGED");
      assert.equal(staged[domain].publication.sourceVersioningQualified, true);
    }
  }
  const raw = require("../config/properties").backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  assert(!raw.some(step => step.type === "GOVERNED_PUBLICATIONS"), "Unselected deployments inherit no publication selection");
});
