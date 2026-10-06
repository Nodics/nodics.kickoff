"use strict";
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const root = path.resolve(__dirname, "..");
const { frameworkRoot: framework } = require("./helpers/configuration");
const load = (value) => require(value);
/** Resolves qualification data from each application's selected release. */
const recordsRoot = (domain, kind, folder) => {
  const dataRoot = path.join(root, "modules", `agora.${domain}`, "data");
  const prefix = "agora" + domain[0].toUpperCase() + domain.slice(1);
  const release = load(path.join(dataRoot, "manifest.json")).sections[
    prefix + kind + "Catalog"
  ];
  return path.join(dataRoot, release.sourceRoot, folder, "records");
};
const commerceRoot = (domain) => recordsRoot(domain, "Commerce", "commerce");
const contentRoot = (domain) => recordsRoot(domain, "Content", "content");
const apparelRoot = commerceRoot("apparel");
const electronicsRoot = commerceRoot("electronics");
const telcoRoot = commerceRoot("telco");
// Retained stock records are test doubles only; active catalogs never import
// live balances, which remain governed by Inventory's Online commands.
const apparelInventoryFixture = path.join(root,
  "modules/agora.apparel/data/sample-v003/commerce/records/agoraApparelInventoryBalanceData");
const electronicsInventoryFixture = path.join(root,
  "modules/agora.electronics/data/sample-v002/commerce/records/agoraElectronicsInventoryBalanceData");
const apparelValidation = load(
  path.join(
    framework,
    "nodics.accelerators/modules/apparel/modules/apparelProduct/src/service/defaultApparelProductValidationService",
  ),
);
const electronicsValidation = load(
  path.join(
    framework,
    "nodics.accelerators/modules/electronics/modules/electronicsProduct/src/service/defaultElectronicsProductValidationService",
  ),
);
const telcoValidation = load(
  path.join(
    framework,
    "nodics.accelerators/modules/telco/modules/telcoCatalog/src/service/defaultTelcoCatalogValidationService",
  ),
);
const mixedPolicy = load(
  path.join(
    framework,
    "nodics.accelerators/modules/domainCommerceCore/src/service/defaultDomainCommerceCorePolicyService",
  ),
);

global.CONFIG = {
  get: (key) =>
    key === "apparelProduct"
      ? {
          sizeSystems: ["ALPHA", "EU", "UK", "US", "AGE", "ONE_SIZE"],
          compositionTotal: 100,
        }
      : undefined,
};
const values = (object) => Object.values(object);
const checkout = (entries) =>
  mixedPolicy.compose({
    tenant: "default",
    correlationId: "qualification-correlation",
    idempotencyKey: `checkout:${entries.map((item) => item.productCode).join("+")}`,
    entries,
  });

test("Apparel search projection data supports size and colour selection through cart and order composition", () => {
  const products = values(
    load(path.join(apparelRoot, "agoraApparelProductData")),
  );
  const localizations = values(
    load(path.join(apparelRoot, "agoraApparelProductLocalizationData")),
  );
  const variants = values(
    load(path.join(apparelRoot, "agoraApparelProductVariantData")),
  );
  const variantLocalizations = values(
    load(path.join(apparelRoot, "agoraApparelProductVariantLocalizationData")),
  );
  const styles = values(load(path.join(apparelRoot, "agoraApparelStyleData")));
  const prices = values(
    load(path.join(apparelRoot, "agoraApparelPriceRowData")),
  );
  const inventory = values(
    load(apparelInventoryFixture),
  );
  const physicalProducts = products.filter(
    (product) => product.productType !== "DIGITAL",
  );
  assert(physicalProducts.length > 0);
  assert.equal(localizations.length, products.length * 2);
  assert.equal(variantLocalizations.length, variants.length * 2);
  assert.equal(styles.length, physicalProducts.length);
  assert.equal(prices.length, products.length);
  assert.equal(inventory.length, variants.length);
  assert.equal(new Set(localizations.map((item) => item.locale)).size, 2);
  assert.equal(
    prices.every((item) => item.currency === "USD"),
    true,
  );
  const productCodes = new Set(products.map((item) => item.code));
  const localizedProductCodes = new Set(
    localizations.map((item) => item.productCode),
  );
  const variantProductCodes = new Set(variants.map((item) => item.productCode));
  const styleProductCodes = new Set(styles.map((item) => item.productCode));
  const pricedProductCodes = new Set(prices.map((item) => item.productCode));
  assert.deepEqual(
    [...styleProductCodes].sort(),
    physicalProducts.map((product) => product.code).sort(),
  );
  assert.deepEqual(
    [...productCodes].filter((code) => !localizedProductCodes.has(code)),
    [],
  );
  assert.deepEqual(
    [...productCodes].filter((code) => !variantProductCodes.has(code)),
    [],
  );
  assert.deepEqual(
    [...productCodes].filter((code) => !pricedProductCodes.has(code)),
    [],
  );
  [
    "agoraLinenWrapDress",
    "agoraSatinMidiDress",
    "agoraRibbedKnitTop",
    "agoraLeatherTote",
    "agoraOxfordShirt",
  ].forEach((code) => assert(productCodes.has(code)));
  const selected =
    variants.find((item) => item.productCode === "agoraLinenWrapDress") ||
    variants[0];
  const style = styles.find(
    (item) => item.productCode === selected.productCode,
  );
  assert.equal(apparelValidation.validateStyle(style).valid, true);
  assert(selected.attributes.sizeCode);
  assert(selected.attributes.colorCode);
  const order = checkout([
    {
      domain: "apparel",
      productCode: selected.productCode,
      variantCode: selected.code,
    },
  ]);
  assert.equal(order.accepted, true);
  assert.equal(order.partitions[0].type, "PHYSICAL_ORDER");
});

test("Electronics fixtures compose specifications compatibility price inventory and checkout", () => {
  const products = values(
    load(path.join(electronicsRoot, "agoraElectronicsProductData")),
  );
  const specs = values(
    load(path.join(electronicsRoot, "agoraElectronicsSpecificationData")),
  );
  const prices = values(
    load(path.join(electronicsRoot, "agoraElectronicsPriceRowData")),
  );
  const inventory = values(
    load(electronicsInventoryFixture),
  );
  assert.equal(
    electronicsValidation.validateSpecification(specs[0]).valid,
    true,
  );
  assert.equal(
    electronicsValidation.compatible({ network: "5G" }, specs[0].specifications)
      .compatible,
    true,
  );
  assert.equal(
    prices.find((item) => item.productCode === products[0].code).currency,
    "AED",
  );
  assert(Number(inventory[0].available) > 0);
  assert.equal(
    checkout([{ domain: "electronics", productCode: products[0].code }])
      .accepted,
    true,
  );
});

test("Telco plan fixtures validate and compose with the selected Electronics device", () => {
  const plans = values(load(path.join(telcoRoot, "agoraTelcoPlanData")));
  const allowances = values(
    load(path.join(telcoRoot, "agoraTelcoAllowanceData")),
  );
  const device = values(
    load(path.join(electronicsRoot, "agoraElectronicsProductData")),
  )[0];
  assert.equal(telcoValidation.validate(plans[0], allowances).valid, true);
  const split = checkout([
    { domain: "electronics", productCode: device.code },
    {
      domain: "telco",
      productCode: plans[0].productCode,
      deviceProductCode: device.code,
      recurringCharge: {
        currency: "AED",
        minorUnits: 25000,
        cycle: "MONTH",
        intervalCount: 1,
      },
    },
  ]);
  assert.deepEqual(
    split.partitions.map((item) => item.type),
    ["PHYSICAL_ORDER", "TELCO_SERVICE_ORDER"],
  );
});

test("mixed Apparel and Electronics fixtures compose one physical order", () => {
  const apparel = values(
    load(path.join(apparelRoot, "agoraApparelProductData")),
  )[0];
  const electronics = values(
    load(path.join(electronicsRoot, "agoraElectronicsProductData")),
  )[0];
  const physical = checkout([
    { domain: "apparel", productCode: apparel.code },
    { domain: "electronics", productCode: electronics.code },
  ]);
  assert.deepEqual(physical.partitions, [
    { type: "PHYSICAL_ORDER", entries: [apparel.code, electronics.code] },
  ]);
});

test("domain page fixtures preserve renderer identity when copied with edited names", () => {
  for (const [domain, title] of [
    ["apparel", "Apparel"],
    ["electronics", "Electronics"],
    ["telco", "Telco"],
  ]) {
    const source = values(
      load(path.join(contentRoot(domain), `agora${title}PageData`)),
    )[0];
    const staged = {
      ...source,
      name: `${source.name} Updated`,
      publicationStatus: "STAGED",
    };
    const online = { ...staged, publicationStatus: "ONLINE" };
    assert.equal(online.renderer, `agora.${domain}.page.home`);
    assert.match(online.name, /Updated$/);
  }
});
