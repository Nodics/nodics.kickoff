/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaDemoDataset @description Checks unified demo data identity, relationships, catalogue terms, manifest integrity and setup selection. @layer test @owner circa.ewaste */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { frameworkRoot, loadRuntime } = require("../../../test/helpers/configuration");
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
    for (const [file, hash] of Object.entries(section.files || section.generatedHashes)) {
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

test("Circa administrator retains setup group assignments without granting owner admission", () => {
  const staff = records("operations", "circaOperationalEmployeeData");
  const admin = staff.find(
    (row) => row.loginId === "administrator@circa.local",
  );
  assert(admin);
  assert(admin.userGroups.includes("wasteEnterpriseAdministratorUserGroup"));
  assert(admin.userGroups.includes("runtimeConfigAdminUserGroup"));
});

test("Circa sample scopes never rewrite the framework bootstrap administrator", () => {
  const scopes = records("operations", "circaOperationalScopeData");
  assert.equal(scopes.some((scope) => scope.principalCode === "admin"), false);
  assert.equal(scopes.every((scope) => scope.principalCode.endsWith("@circa.local")), true);
});

test("predefined customer and staff personas retain distinct active identities and canonical base roles", () => {
  const customers = records("profile", "circaCustomerData");
  const staff = records("operations", "circaOperationalEmployeeData");
  const fixture = require(path.join(frameworkRoot,
    "nodics.platform/modules/profile/test/helpers/identityCatalogueFixture"));
  const participantGroups = [
    "nodics.loyalty/modules/loyaltyWallet/data/init-v004/records/identity/loyaltyParticipantUserGroupData",
    "nodics.waste/modules/wasteCarbon/data/init-v003/records/identity/wasteCarbonParticipantUserGroupData",
    "nodics.waste/modules/wasteReward/data/init-v002/records/identity/wasteMaterialValueParticipantUserGroupData",
  ].flatMap(file => Object.values(require(path.join(frameworkRoot, file))));
  const targets = Object.fromEntries(fixture.records("UserGroup").concat(participantGroups).map(row => [row.code, row]));
  const baseRoles = Object.values(require(path.join(frameworkRoot,
    "nodics.waste/modules/wasteCore/data/init-v001/records/identity/wasteCoreUserGroupData")));
  for (const group of baseRoles) {
    assert.deepEqual(group.permissions, targets[group.code].permissions);
    assert.deepEqual(group.parentGroups, targets[group.code].parentGroups);
    assert.equal(group.active, true);
  }
  assert.deepEqual(customers.map(row => row.code), ["circa-customer", "circa-seller", "circa-recipient"]);
  assert.equal(staff.length, 21);
  const identities = [...customers, ...staff];
  assert.equal(new Set(identities.map(row => row.code)).size, identities.length);
  assert.equal(new Set(identities.map(row => row.loginId)).size, identities.length);
  for (const row of identities) {
    assert.equal(row.active, true, row.code);
    assert.equal(row.principalType, customers.includes(row) ? "customer" : "human", row.code);
    assert(row.userGroups.length > 0, row.code);
    for (const group of row.userGroups) assert(targets[group], `${row.code}: unknown base group`);
  }
  for (const customer of customers) {
    assert.equal(customer.ownerType, "customer");
    assert.equal(customer.ownerId, customer.loginId);
    assert.deepEqual(customer.userGroups, ["customerUserGroup"]);
  }
  const participation = records(
    "customerParticipationAssignments",
    "circaCustomerParticipationData",
  );
  assert.deepEqual(
    participation.map((row) => row.loginId),
    customers.map((row) => row.loginId),
  );
  for (const assignment of participation) {
    assert.deepEqual(assignment.expectedGroupCodes, ["customerUserGroup"]);
    assert.deepEqual(assignment.groupCodes, [
      "loyaltyParticipantCustomerUserGroup",
      "wasteCarbonCustomerUserGroup",
      "wasteMaterialValueCustomerUserGroup",
    ]);
  }
  assert.deepEqual(targets.loyaltyParticipantCustomerUserGroup.permissions, [
    "loyalty.rewards.transfer",
    "loyalty.partnerConversion.read",
    "loyalty.partnerConversion.execute",
  ]);
  assert.deepEqual(targets.wasteCarbonCustomerUserGroup.permissions, ["carbon.holdings.read"]);
  assert.deepEqual(targets.wasteMaterialValueCustomerUserGroup.permissions, ["waste.materialValue.read"]);
  const journeys = [
    ["circa-integrated-administrator", "wasteEnterpriseAdministratorUserGroup", "waste.verification.record", "waste.review.approve"],
    ["circa-integrated-operator", "wasteCentreOperatorUserGroup", "waste.review.queue.read"],
    ["circa-verifier", "wasteVerifierUserGroup", "waste.verification.record"],
    ["circa-approver", "wasteApproverUserGroup", "waste.review.approve"],
    ["circa-auditor", "wasteAuditorUserGroup", "waste.audit.read"],
    ["circa-marketplace-moderator", "wasteMarketplaceModeratorUserGroup", "waste.marketplace.moderate"],
  ];
  for (const [code, group, ...permissions] of journeys) {
    const employee = staff.find(row => row.code === code);
    assert(employee?.userGroups.includes(group), code);
    for (const permission of permissions) assert(targets[group].permissions.includes(permission), `${code}: ${permission}`);
  }
  for (const group of ["wasteCentreOperatorUserGroup", "wasteAuditorUserGroup"])
    for (const permission of ["waste.verification.record", "waste.review.approve"])
      assert(!targets[group].permissions.includes(permission), `${group}: read-only review boundary`);
  assert(!targets.wasteVerifierUserGroup.permissions.includes("waste.review.approve"));
  assert(!targets.wasteApproverUserGroup.permissions.includes("waste.verification.record"));
});

test("canonical scope matching gives integrated administrator all 21 fixtures without widening granular reviewers", () => {
  const access = require(path.join(frameworkRoot,
    "nodics.waste/modules/wasteCore/src/service/defaultWasteOperationalAccessService"));
  const staff = records("operations", "circaOperationalEmployeeData");
  const scopes = records("operations", "circaOperationalScopeData");
  const points = records("waste", "circaWasteCollectionPointData");
  const submissions = records("waste", "circaWasteSubmissionData");
  assert.equal(scopes.length, 21);
  assert.equal(submissions.length, 21);
  for (const scope of scopes) {
    assert.equal(scope.active, true);
    assert.equal(scope.status, "ACTIVE");
    assert.equal(scope.effect, "ALLOW");
    assert.equal(scope.inheritanceMode, "DIRECT");
    assert.equal(scope.tenantCode, "default");
  }
  const visible = code => {
    const employee = staff.find(row => row.code === code);
    assert(employee, code);
    const grants = scopes.filter(scope => scope.principalCode === employee.loginId);
    assert.equal(grants.length, 1, code);
    return submissions.filter(row => points.some(point => point.code === access.pointCode(row) &&
      grants.some(scope => access.matchesPoint(scope, point, { tenant: "default" }))));
  };
  for (const code of ["circa-integrated-administrator", "circa-integrated-operator"])
    assert.deepEqual(visible(code).map(row => row.code), submissions.map(row => row.code));
  assert.equal(visible("circa-integrated-administrator").filter(row => row.submissionStatus === "SUBMITTED").length, 5);
  for (const code of ["circa-administrator", "circa-verifier", "circa-approver", "circa-auditor", "circa-marketplace-moderator"])
    assert.equal(visible(code).length, 0, `${code}: no seeded positive fixture in this scope`);
  for (const code of ["circa-centre-operator", "circa-verifier", "circa-approver"]) {
    const employee = staff.find(row => row.code === code);
    const grant = scopes.find(scope => scope.principalCode === employee.loginId);
    assert.equal(grant.scopeType, "BUSINESS_UNIT");
    assert.equal(grant.scopeCode, "WCP_SAMPLE_COLLECTION_CENTRE_YOU_AND_CO");
    assert.equal(access.matchesPoint(grant, { code: grant.scopeCode }, { tenant: "default" }), true);
    assert(points.every(point => !access.matchesPoint(grant, point, { tenant: "default" })));
  }
});

test("Local selected role dependencies are fresh and ordered while refund exception remains separately selected", t => {
  const previous = global.CONFIG;
  t.after(() => { global.CONFIG = previous; });
  const runtime = loadRuntime("platformServer", "kickoffLocal");
  global.CONFIG = { get: key => runtime[key] };
  const initialization = require(path.join(frameworkRoot,
    "nodics.platform/modules/backoffice/src/service/defaultBackofficeApplicationInitializationService"));
  const observer = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nPublish/src/service/defaultPublicationSetupObservationService"));
  const importer = require(path.join(frameworkRoot,
    "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));
  const config = runtime.backofficeApplicationInitialization;
  const profile = { ...config.profiles.circa, target: { ...config.target, ...config.profiles.circa.target } };
  const steps = initialization.preparationSteps(profile);
  const order = initialization.preparationGroups(profile, {}, steps.filter(step => step.phase === "BEFORE_PUBLICATION"))
    .flatMap(group => group.steps.map(step => step.code));
  const plan = require("../config/setup-observation/circa-native-reviewed.json");
  assert.equal(plan.profileDigest, observer.digest(profile));
  const wasteData = path.join(frameworkRoot, "nodics.waste/modules/wasteCore/data");
  const wasteManifest = require(path.join(wasteData, "manifest.json"));
  const baseRoleFile = "init-v001/records/identity/wasteCoreUserGroupData.js";
  assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(wasteData, baseRoleFile))).digest("hex"),
    wasteManifest.sections.accessGroups.files[baseRoleFile], "Waste-owned base-role dependency must remain fresh");
  const prerequisites = ["product:accessGroups", "publish:accessGroups",
    "promotion:accessGroups", "order:accessGroups",
    "circa.ewaste:profile", "circa.ewaste:operations", "circa.ewaste:circaCommerceStaffAssignments",
    "circa.ewaste:circaMerchantOutletAccess", "loyaltyWallet:specialAccessRoles",
    "circa.ewaste:circaLocalDemoCreditStaffAssignment", "inventory:specialAccessRoles",
    "circa.ewaste:circaLocalOpeningStaffAssignments"];
  for (const code of prerequisites) {
    const selected = steps.filter(step => step.code === code);
    assert.equal(selected.length, 1, code);
    const step = selected[0];
    assert.equal(step.required, true, code);
    assert.equal(step.trigger, "USER", code);
    assert.equal(step.phase, "BEFORE_PUBLICATION", code);
    assert.equal(step.targetRuntimeRole, "PLATFORM", code);
    const stage = plan.stages.find(stage => stage.code === code);
    assert(stage, code);
    assert.deepEqual(stage.descriptor, observer.stepIdentity(step));
    const [moduleName, sectionCode] = code.split(":");
    const owners = {"loyaltyWallet":"nodics.loyalty/modules/loyaltyWallet","import":"nodics.foundation/modules/nData/nImport/import","inventory":"nodics.commerce/modules/baseCommerce/modules/inventory","order":"nodics.commerce/modules/checkout/modules/order","product":"nodics.commerce/modules/baseCommerce/modules/product","publish":"nodics.foundation/modules/nPublish","promotion":"nodics.commerce/modules/baseCommerce/modules/promotion"};
    const directory = moduleName === "circa.ewaste" ? root : path.join(frameworkRoot, owners[moduleName], "data");
    const releaseManifest = require(path.join(directory, "manifest.json"));
    const section = releaseManifest.sections[sectionCode];
    const release = importer.inspectManifest({ name: moduleName }, section.dataType,
      path.join(directory, "manifest.json"), section, sectionCode, true);
    assert.equal(stage.release.checksum, release.checksum, code);
    for (const [file, checksum] of Object.entries(section.files))
      assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(directory, file))).digest("hex"), checksum, file);
  }
  const before = (dependency, dependent) => assert(order.indexOf(dependency) >= 0 &&
    order.indexOf(dependency) < order.indexOf(dependent), `${dependency} before ${dependent}`);
  for (const code of prerequisites.filter(code => ["product:accessGroups", "publish:accessGroups", "promotion:accessGroups", "order:accessGroups"].includes(code)))
    before(code, "circa.ewaste:circaCommerceStaffAssignments");
  for (const staff of ["circaCommerceStaffAssignments", "circaLocalDemoCreditStaffAssignment", "circaLocalOpeningStaffAssignments"])
    before("circa.ewaste:operations", `circa.ewaste:${staff}`);
  before("loyaltyWallet:specialAccessRoles", "circa.ewaste:circaLocalDemoCreditStaffAssignment");
  before("inventory:specialAccessRoles", "circa.ewaste:circaLocalOpeningStaffAssignments");
  for (const sectionCode of ["circaLocalUnusedRefundExceptionStaffAssignment"]) {
    const code = `circa.ewaste:${sectionCode}`;
    assert(!steps.some(step => step.code === code), `${code}: not automatically selected`);
    assert(!plan.stages.some(stage => stage.code === code), `${code}: not part of this sealed setup`);
    const section = manifest.sections[sectionCode];
    assert.equal(section.selectionPolicy, "EXPLICIT");
    assert.equal(section.destinationRole, "PLATFORM");
    assert.equal(section.lifecycle, "REFERENCE");
    assert.deepEqual(section.environmentScope, ["ALL"]);
  }
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
  const outlets = records("store", "circaStoreData").filter((row) =>
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
    "store",
    "commerce",
    "circaGreenPerksBudget",
    "circaGreenPerksIssuance",
    "circaRenewWorksBudget",
    "circaRenewWorksIssuance",
    "circaLoopCycleBudget",
    "circaLoopCycleIssuance",
    "content",
  ]) {
    const selected = packages.filter(
      (row) => row.code === `circa.ewaste:${section}`,
    );
    assert.equal(selected.length, 1);
    assert.equal(selected[0].required, true);
    assert.equal(selected[0].trigger, "USER");
  }
  assert.equal(config.circaEWaste, undefined,
    "Demo configuration must not claim stock or coupon issuance qualification");
  assert.equal(config.profileCustomerEligibility, undefined);
  assert.equal(config.promotion?.sellerAuthorization, undefined);
});
