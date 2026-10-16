"use strict";
/** @module circa.ewaste/test/circaCatalogue @description Verifies Circa composition of owning Product/Waste reads and purchase discovery compatibility. @layer test @owner circa.ewaste */
const test = require("node:test"),
  assert = require("node:assert/strict");
const service = require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteCatalogueService"),
  config = require("./helpers/deploymentPolicy").runtime(),
  overlay = require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteMarketplaceService"),
  controller = require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/controller/defaultEWasteCatalogueController");
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
  global.CONFIG = {
    get: (key) =>
      key === "eWaste" ? { ...defaults.eWaste, ...config.eWaste, catalogue: { ...defaults.eWaste.catalogue, ...config.eWaste.catalogue } } : config[key],
  };
  global.SERVICE = {
    DefaultEWasteMarketplaceService: {
      ...require("../../../../nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteMarketplaceService"),
    },
    DefaultEWasteCatalogueService: service,
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
        const page = Number(url.searchParams.get("page"));
        const pageSize = Number(url.searchParams.get("pageSize"));
        return url.pathname === "/products/discovery"
          ? {
              products: products.slice((page - 1) * pageSize, page * pageSize),
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
test("Circa narrows only discovery hop size and inherits other catalogue limits", () => {
  setup();
  const inherited = CONFIG.get("eWaste").catalogue;
  assert.equal(config.eWaste.catalogue.discoveryBatchSize, 24);
  assert.equal(inherited.discoveryBatchSize, 24);
  assert.deepEqual(service.settings(), {
    ...inherited,
    discoveryBatchSize: 24,
  });
});
test("24-row Product hops preserve complete late-page facets, totals and sorting before display pagination", async () => {
  const products = [
    ...Array.from({ length: 58 }, (_, index) =>
      product("PHYSICAL_" + index, "PHYSICAL"),
    ),
    ...Array.from({ length: 38 }, (_, index) => {
      const row = product(
        "CPN_" + String(index + 1).padStart(2, "0"),
        "COUPON",
        index + 1,
      );
      if (index === 37) row.localizedAttributes.issuer = "Late-page issuer";
      return row;
    }),
  ];
  const calls = setup(products);
  const original = {
    tenant: "default",
    authData: { principalType: "anonymous" },
    query: {
      kind: "COUPON",
      minPoints: "35",
      sort: "POINTS_DESC",
      page: "2",
      pageSize: "2",
      storeCode: "foreign",
      discoveryBatchSize: "1000",
      maximumProducts: "1",
    },
  };
  const snapshot = structuredClone(original);
  const remote = SERVICE.DefaultEWasteExperienceService.remote;
  SERVICE.DefaultEWasteExperienceService.remote = async (context, ...args) => {
    assert.equal(context, original);
    return remote(context, ...args);
  };
  const result = await service.catalogue(original);
  assert.equal(result.total, 4);
  assert.equal(result.page, 2);
  assert.equal(result.pageSize, 2);
  assert.deepEqual(
    result.items.map((row) => row.rewardPrice),
    [36, 35],
  );
  assert.deepEqual(
    result.facets.issuers.map((row) => row.code),
    ["Late-page issuer", "Partner"],
  );
  assert.equal(
    calls.length,
    5,
    "An exact multiple requires a final empty Product page",
  );
  for (const [index, call] of calls.entries()) {
    const url = new URL(call.path, "http://owner");
    assert.equal(url.pathname, "/products/discovery");
    assert.deepEqual([...url.searchParams.keys()].sort(), [
      "locale",
      "page",
      "pageSize",
      "storeCode",
    ]);
    assert.equal(url.searchParams.get("page"), String(index + 1));
    assert.equal(url.searchParams.get("pageSize"), "24");
    assert.equal(
      url.searchParams.get("storeCode"),
      config.eWaste.marketplace.storeCode,
    );
    assert.equal(call.moduleName, "product");
    assert.equal(call.connection, "commerce");
    assert.equal(call.method, "GET");
  }
  assert.deepEqual(original, snapshot);
});
test("configured discovery completes empty, short, full and multiple pages without losing offers", async (t) => {
  for (const count of [0, 23, 24, 25, 48, 49]) {
    await t.test(String(count), async () => {
      const products = Array.from({ length: count }, (_, index) =>
        product("CPN_" + index),
      );
      const calls = setup(products);
      const result = await overlay.list(request);
      assert.equal(calls.length, Math.floor(count / 24) + 1);
      assert.deepEqual(
        result.coupons.map((row) => row.code),
        products.map((row) => row.productCode),
      );
      assert(
        calls.every(
          (call) =>
            new URL(call.path, "http://owner").searchParams.get("pageSize") ===
            "24",
        ),
      );
    });
  }
});
test("late Product failures never produce partial cards or facets and a new read can recover", async (t) => {
  for (const failure of [
    "owner-error",
    "missing-products",
    "repeated-page",
    "cancelled",
    "maximum-products",
  ]) {
    await t.test(failure, async () => {
      const products = Array.from({ length: 38 }, (_, index) =>
        product("CPN_" + index),
      );
      const calls = setup(products);
      const remote = SERVICE.DefaultEWasteExperienceService.remote;
      const ownerError = new Error("isolated late owner check failure");
      let failing = true,
        compositions = 0;
      const compose = SERVICE.DefaultEWasteMarketplaceService.catalogueOffers;
      SERVICE.DefaultEWasteMarketplaceService.catalogueOffers = function (
        ...args
      ) {
        compositions++;
        return compose.apply(this, args);
      };
      SERVICE.DefaultEWasteExperienceService.remote = async (
        context,
        ...args
      ) => {
        const result = await remote(context, ...args);
        if (
          failing &&
          new URL(args[2], "http://owner").searchParams.get("page") === "2"
        ) {
          if (failure === "owner-error") throw ownerError;
          if (failure === "missing-products") return {};
          if (failure === "repeated-page")
            return { products: products.slice(0, 24) };
        }
        return result;
      };
      const original = {
        ...request,
        ...(failure === "cancelled"
          ? { isCancelled: () => failing && calls.length > 0 }
          : {}),
      };
      const reader =
        failure === "maximum-products"
          ? {
              ...service,
              settings: () => ({ ...service.settings(), maximumProducts: 25 }),
            }
          : service;
      await assert.rejects(reader.catalogue(original), (error) => {
        if (failure === "owner-error") assert.equal(error, ownerError);
        else
          assert.equal(error.statusCode, failure === "cancelled" ? 499 : 503);
        return true;
      });
      assert.equal(
        compositions,
        0,
        "No offer composition before a complete Product read",
      );
      assert.equal(calls.length, failure === "cancelled" ? 1 : 2);
      failing = false;
      calls.length = 0;
      const recovered = await service.catalogue(original);
      assert.equal(recovered.total, 38);
      assert.equal(compositions, 1);
      assert.equal(calls.length, 2);
    });
  }
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
test("eWaste marketplace uses the same catalogue with the selected Circa deployment policy", async () => {
  setup([product("CPN_1")]);

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
      ["catalogue", "DefaultEWasteCatalogueService"],
      ["product", "DefaultEWasteCatalogueService"],
    ],
  );
});
