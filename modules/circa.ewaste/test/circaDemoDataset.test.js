/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDemoDataset @description Checks unified demo data identity, relationships, catalogue terms, manifest integrity and setup selection. @layer test @owner circa.ewaste */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const manifest = require("../data/manifest.json");
const root = path.resolve(__dirname, "../data");

/** Loads records from the selected immutable section rather than a retired path. */
function records(section, prefix) {
  const file = Object.keys(manifest.sections[section].files).find((file) =>
    file.endsWith("/" + prefix + ".js"),
  );
  assert(file, `${section} must select ${prefix}`);
  return Object.values(require(path.join(root, file)));
}

test("all selected and retained release payloads keep their declared checksums", () => {
  const retained = Object.values(manifest.retainedRoots || {}).flatMap((root) =>
    Object.values(root.sections),
  );
  for (const section of [...Object.values(manifest.sections), ...retained]) {
    for (const [file, hash] of Object.entries(section.files)) {
      assert.equal(
        crypto
          .createHash("sha256")
          .update(fs.readFileSync(path.join(root, file)))
          .digest("hex"),
        hash,
        file,
      );
    }
  }
});

test("seven partner enterprises have two distinct directly scoped staff each and no implicit parent grants", () => {
  const enterprises = records("operations", "circaEnterpriseData");
  const staff = records("operations", "circaOperationalEmployeeData");
  const scopes = records("operations", "circaOperationalScopeData");
  assert.equal(enterprises.length, 7);
  assert.equal(new Set(enterprises.map((row) => row.code)).size, 7);
  assert.deepEqual(
    enterprises
      .filter((row) => row.superEnterprise)
      .map((row) => [row.code, row.superEnterprise]),
    [
      ["GREENPERKS_ONLINE", "GREENPERKS_GROUP"],
      ["GREENPERKS_RETAIL", "GREENPERKS_GROUP"],
    ],
  );
  for (const enterprise of enterprises) {
    assert(!enterprise.roleCodes.includes("PLATFORM_OWNER"));
    assert.equal(enterprise.administrationConsent, undefined);
    const employees = staff.filter(
      (row) => row.metadata.enterpriseCode === enterprise.code,
    );
    assert.equal(employees.length, 2);
    assert.equal(new Set(employees.map((row) => row.loginId)).size, 2);
    for (const employee of employees) {
      const grants = scopes.filter(
        (row) => row.principalCode === employee.loginId,
      );
      assert.equal(grants.length, 1);
      assert.equal(grants[0].scopeType, "ENTERPRISE");
      assert.equal(grants[0].scopeCode, enterprise.code);
      assert.equal(grants[0].inheritanceMode, "DIRECT");
    }
  }
});

test("Circa administrator can complete local demo setup and governed publication", () => {
  const staff = records("operations", "circaOperationalEmployeeData");
  const admin = staff.find(
    (row) => row.loginId === "administrator@circa.local",
  );
  assert(admin);
  assert(admin.userGroups.includes("wasteEnterpriseAdministratorUserGroup"));
  assert(admin.userGroups.includes("runtimeConfigAdminUserGroup"));
});

test("the existing three centres retain identities and use their explicit demo owner", () => {
  const centres = records("waste", "circaWasteCollectionPointData");
  const locations = records("location", "circaLocationData");
  assert.deepEqual(
    centres.map((row) => row.code),
    ["cc-dxb-01", "cc-dxb-02", "cc-dxb-03"],
  );
  for (const centre of centres) {
    assert.equal(
      centre.operatorEnterpriseRef.code,
      "CIRCA_INTEGRATED_SERVICES",
    );
    assert.equal(
      centre.assetOwnerEnterpriseRef.code,
      "CIRCA_INTEGRATED_SERVICES",
    );
    assert(locations.some((row) => row.code === centre.locationRef.code));
  }
  const outlets = records("commerce-operational", "circaStoreData").filter((row) =>
    row.code.startsWith("greenperks-"),
  );
  const addresses = records("operations", "circaOutletAddressData");
  assert.equal(outlets.length, 2);
  for (const outlet of outlets) {
    assert.equal(outlet.enterpriseRef.code, "GREENPERKS_RETAIL");
    const location = locations.find(
      (row) => row.code === outlet.primaryLocationRef.code,
    );
    assert(location);
    assert(addresses.some((row) => row.code === location.addressRef.code));
  }
});

test("35 new offers retain 12 cafe, 12 bistro, 11 either-outlet terms and original catalogue identities", () => {
  const products = records("commerce", "circaProductData");
  const variants = records("commerce", "circaProductVariantData");
  const localizations = records("commerce", "circaProductLocalizationData");
  const variantLocalizations = records(
    "commerce",
    "circaProductVariantLocalizationData",
  );
  const prices = records("commerce", "circaPriceRowData");
  const promotions = records("commerce", "circaPromotionData");
  assert.equal(products.length, 43);
  assert.equal(new Set(products.map((row) => row.code)).size, products.length);
  for (const product of products) {
    for (const locale of ["en", "ar"]) {
      assert(
        localizations.some(
          (row) => row.productCode === product.code && row.locale === locale,
        ),
        `${product.code} missing ${locale} localization`,
      );
    }
  }
  for (const variant of variants) {
    for (const locale of ["en", "ar"]) {
      assert(
        variantLocalizations.some(
          (row) => row.variantCode === variant.code && row.locale === locale,
        ),
        `${variant.code} missing ${locale} localization`,
      );
    }
  }
  const offers = products.filter((row) =>
    row.code.startsWith("CIRCA_COUPON_GP-"),
  );
  assert.equal(offers.length, 35);
  const distribution = { cafe: 0, bistro: 0, either: 0 };
  for (const offer of offers) {
    const variant = variants.find((row) => row.productCode === offer.code);
    const localized = localizations.find(
      (row) => row.productCode === offer.code && row.locale === "en",
    );
    const price = prices.find((row) => row.productCode === offer.code);
    const promotion = promotions.find(
      (row) => row.code === variant.attributes.promotionCode,
    );
    assert.equal(variant.attributes.demoPurchaseUnits, 100);
    assert.equal(variant.attributes.kind, "COUPON");
    assert.equal(
      variantLocalizations.find((row) => row.variantCode === variant.code)
        .attributes.kind,
      "COUPON",
    );
    assert.equal(price.currency, "POINTS");
    assert.equal(Number(price.unitAmount), localized.attributes.rewardPrice);
    assert.equal(promotion.purchasedCouponPolicy.validityDays, 30);
    assert.equal(
      promotion.sellerAuthorizations,
      undefined,
      "Source records cannot manufacture seller consent",
    );
    assert.equal(promotion.conditions.sourceProductCode, offer.code);
    assert.equal(promotion.issuerEnterpriseRef.code, "GREENPERKS_RETAIL");
    assert.equal(promotion.vendorEnterpriseRef.code, "GREENPERKS_ONLINE");
    const outlets = promotion.conditions.storeCodes;
    distribution[
      outlets.length === 2
        ? "either"
        : outlets[0].endsWith("cafe")
          ? "cafe"
          : "bistro"
    ]++;
  }
  assert.deepEqual(distribution, { cafe: 12, bistro: 12, either: 11 });
  assert.deepEqual(
    products
      .filter((row) => !row.code.startsWith("CIRCA_COUPON_GP-"))
      .map((row) => row.code)
      .sort(),
    [
      "CIRCA_ASSET_EWA-1047",
      "CIRCA_ASSET_EWA-1051",
      "CIRCA_ASSET_EWA-1052",
      "CIRCA_ASSET_EWA-1055",
      "CIRCA_ASSET_EWA-1092",
      "CIRCA_COUPON_CPN-ECO-15",
      "CIRCA_COUPON_CPN-GRN-30",
      "CIRCA_COUPON_CPN-SVC-50",
    ],
  );
});

test("one Circa setup requires all demo sections and retains explicit operator-triggered import", () => {
  const config = require("../config/properties");
  const packages =
    config.backofficeApplicationInitialization.profiles.circa.dataPackages
      .value;
  for (const section of [
    "profile",
    "operations",
    "location",
    "waste",
    "loyalty",
    "commerce",
    "commerce-operational",
    "content",
  ]) {
    const selected = packages.filter(
      (row) => row.code === `circa.ewaste:${section}`,
    );
    assert.equal(selected.length, 1);
    assert.equal(selected[0].required, true);
    assert.equal(selected[0].trigger, "USER");
  }
  assert.equal(
    config.circaEWaste.demoImportAdmission.releaseCode,
    "circa.ewaste:commerce-operational",
  );
  assert.equal(config.profileCustomerEligibility, undefined);
  assert.equal(config.promotion?.sellerAuthorization, undefined);
});
