"use strict";
/** @module circa.ewaste/test/circaCatalogue @description Verifies Circa composition of owning Product/Waste reads and purchase discovery compatibility. @layer test @owner circa.ewaste */
const test = require("node:test"),
  assert = require("node:assert/strict");
const service = require("../src/service/defaultCircaCatalogueService"),
  config = require("../config/properties"),
  overlay = require("../src/service/defaultEWasteMarketplaceService"),
  controller = require("../src/controller/defaultCircaCatalogueController");
const product = (code, kind = "COUPON", amount = 10) => ({
  productCode: code,
  version: "v1",
  name: code,
  localizedAttributes: {
    kind,
    issuer: "Partner",
    assetCode: "ASSET_1",
    expiresAt: "2099-12-31T23:59:59Z",
  },
  price: { currency: "POINTS", unitAmount: amount },
  media: { primary: { url: "/media/published.png" } },
});
const request = { tenant: "default", query: { kind: "COUPON" } };
function setup(products = [], assets = {}) {
  const calls = [];
  const defaults = require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/config/properties");
  global.CONFIG = { get: (key) => key === "eWaste" ? { ...defaults.eWaste, ...config.eWaste } : config[key] };
  global.SERVICE = {
    DefaultEWasteCatalogueService: require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteCatalogueService"),
    DefaultEWasteMarketplaceService: require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteMarketplaceService"),
    DefaultCircaCatalogueService: service,
    DefaultEWasteExperienceService: {
      settings: () => config.eWaste,
      store: () => ({
        one: async (schema, context, code) => {
          calls.push({ schema, tenant: context.tenant, code });
          return assets[code];
        },
      }),
      remote: async (context, moduleName, connection, path, method) => {
        calls.push({
          tenant: context.tenant,
          moduleName,
          connection,
          path,
          method,
        });
        const url = new URL(path, "http://owner");
        return url.pathname === "/products/discovery"
          ? {
              products: products.slice(
                (Number(url.searchParams.get("page")) - 1) * 100,
                Number(url.searchParams.get("page")) * 100,
              ),
            }
          : {
              product: products.find(
                (value) =>
                  value.productCode ===
                  decodeURIComponent(url.pathname.split("/").pop()),
              ),
            };
      },
    },
    DefaultWasteItemDescriptorService: {
      catalogue: async () => ({}),
      describe: () => ({
        identity: { name: "Verified item" },
        classification: {
          category: { code: "LAPTOP", name: { en: "Laptops" } },
        },
        condition: { value: "USED" },
      }),
    },
  };
  return calls;
}
test.afterEach(() => {
  delete global.CONFIG;
  delete global.SERVICE;
});
test("Circa detail binds its configured store despite a caller store override", async () => {
  const calls = setup([product("CPN_105")]);
  await service.product({
    ...request,
    code: "CPN_105",
    query: {
      kind: "COUPON",
      q: "missing",
      page: "9999",
      storeCode: "otherStore",
    },
  });
  assert.equal(
    new URL(calls[0].path, "http://owner").searchParams.get("storeCode"),
    config.eWaste.marketplace.storeCode,
  );
});
test("supported overlay selects the same catalogue and leaves purchase and bid orchestration inherited", async () => {
  setup([product("CPN_1")]);
  assert.deepEqual(Object.keys(overlay), ["list"]);
  assert.deepEqual(
    await overlay.list(request),
    await service.marketplace(request),
  );
});
test("public controllers use the trusted mapper and a server-selected service", () => {
  const calls = [];
  global.SERVICE = {
    DefaultEWasteRequestService: { invoke: (...args) => calls.push(args) },
  };
  controller.catalogue(request);
  controller.product(request);
  assert.deepEqual(
    calls.map((args) => [args[0], args[3]]),
    [
      ["catalogue", "DefaultCircaCatalogueService"],
      ["product", "DefaultCircaCatalogueService"],
    ],
  );
});
