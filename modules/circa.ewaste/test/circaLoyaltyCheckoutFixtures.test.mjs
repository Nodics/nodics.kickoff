/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module circa.ewaste/test/circaLoyaltyCheckoutFixtures @description Verifies the Circa-owned Loyalty Reward checkout selection and its effective local configuration. @owner circa.ewaste @layer test */
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL("../../..", import.meta.url));
const foundation = path.dirname(require.resolve("nodics.foundation/package.json"));
const application = require("../config/properties");
const declared = application.tooling.acceptance.circaLoyaltyRewardCheckout;
const products = Object.values(
  require("../data/sample-v001/commerce/records/circaProductData"),
);
const variants = Object.values(
  require("../data/sample-v001/commerce/records/circaProductVariantData"),
);
const prices = Object.values(
  require("../data/sample-v001/commerce/records/circaPriceRowData"),
);
test("Circa owns stable coupon, wallet and cart fixture identities only", () => {
  const original = JSON.stringify(application);
  assert.deepEqual(
    {
      customerCode: declared.customerCode,
      walletCode: declared.walletCode,
      productCode: declared.productCode,
      variantCode: declared.variantCode,
      programCode: declared.programCode,
      rewardTypeCode: declared.rewardTypeCode,
      rewardCurrency: declared.rewardCurrency,
      providerCode: declared.providerCode,
      rewardScale: declared.rewardScale,
      maximumRewardAmount: declared.maximumRewardAmount,
      cart: declared.cart,
    },
    {
      customerCode: "circa-customer",
      walletCode: "WALLET_ED16C8FCF19E1FE586E3DA5D",
      productCode: "CIRCA_COUPON_CPN-GRN-30",
      variantCode: "CIRCA_COUPON_CPN-GRN-30_VARIANT",
      programCode: "circa",
      rewardTypeCode: "points",
      rewardCurrency: "POINTS",
      providerCode: "loyalty-reward-points",
      rewardScale: 2,
      maximumRewardAmount: "14.00",
      cart: {
        storeCode: "circaMainStore",
        channelCode: "web",
        locale: "en",
        jurisdiction: "AE",
        currency: "POINTS",
      },
    },
  );
  assert.equal(declared.customer, undefined);
  assert.equal(declared.shippingAddress, undefined);
  assert.equal(JSON.stringify(application), original);
});

test("Circa fixture selects a current digital coupon with a bounded POINTS price", () => {
  const product = products.find((row) => row.code === declared.productCode);
  const variant = variants.find((row) => row.code === declared.variantCode);
  const price = prices.find(
    (row) =>
      row.productCode === declared.productCode &&
      row.currency === declared.cart.currency,
  );
  assert.equal(product?.status, "ACTIVE");
  assert.equal(product?.productType, "DIGITAL");
  assert.equal(variant?.status, "ACTIVE");
  assert.equal(variant?.productCode, declared.productCode);
  assert.equal(variant?.attributes?.inventoryStrategy, "COUPON_CODE_POOL");
  assert.equal(price?.unitAmount, "14");
  assert.equal(price?.currency, "POINTS");
  assert.ok(Number(price.unitAmount) <= Number(declared.maximumRewardAmount));
});

test("kickoffLocal Platform exposes the selected Circa fixture without replacing the legacy default", () => {
  const probe = require(
    path.join(
      foundation,
      "modules/nTooling/src/service/project/defaultProjectConfigurationProbeService",
    ),
  );
  const result = probe.read({
    projectRoot,
    environment: "kickoffLocal",
    server: "platformServer",
  });
  assert.ok(result.modules.includes("circa.ewaste"));
  const resolved = result.properties.tooling.acceptance.circaLoyaltyRewardCheckout;
  assert.deepEqual(resolved.customer, {
    email: "customer@circa.local",
    firstName: "Circa",
    lastName: "Customer",
  });
  assert.deepEqual(resolved.shippingAddress, {
    line1: "Local acceptance fixture",
    city: "Dubai",
    region: "Dubai",
    postalCode: "00000",
    country: "AE",
  });
  assert.equal(resolved.productCode, declared.productCode);
  assert.equal(resolved.walletCode, declared.walletCode);
  assert.equal(
    result.properties.tooling.acceptance.loyaltyRewardCheckout.productCode,
    "agoraStylePass5Coupon",
  );
});
