/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/circaEnterpriseRoleBaseline @description Verifies complete bounded role composition, dependency closure and additive adoption without live imports. @owner circa.ewaste @layer test */
const test = require("node:test"), assert = require("node:assert/strict"), path = require("node:path");
const baseline = require("./enterpriseRoleBaselineFixture");
const rows = Object.values(require("../data/sample-v001/staff-access/records/circaCommerceStaffAssignmentData"));
const employees = Object.values(require("../data/sample-v001/operations/records/circaOperationalEmployeeData"));
const { frameworkRoot, loadRuntime, activeModuleNames } = require("../../../test/helpers/configuration");
const required = ["loyalty.wallet.read", "loyalty.rewards.transfer", "loyalty.transfers.manage",
  "loyalty.partnerConversion.read", "loyalty.partnerConversion.execute",
  "commerce.cart.own", "commerce.checkout.place", "commerce.lifecycle.own.create", "commerce.order.own.read",
  "commerce.bid.participate", "commerce.digital.own.read", "commerce.digital.own.reveal",
  "commerce.digital.bundle.manage", "commerce.digital.bundle.configure"];

test("existing assignments contain no task-specific manager profiles while capability vocabulary remains available", () => {
  const admins = employees.filter(r => r.code.endsWith("-administrator") && r.metadata.enterpriseCode);
  assert.equal(admins.length, 7);
  for (const employee of admins) {
    const row = rows.find(r => r.code === employee.code);
    assert(row); assert.equal(row.enterpriseCode, employee.metadata.enterpriseCode);
    assert.deepEqual(row.groupCodes, [...new Set(row.roleCodes.flatMap(code => baseline.roles[code].groupCodes))]);
    const permissions = baseline.effective(row.groupCodes);
    for (const permission of required) assert(baseline.permissions[permission]?.active, "Missing owner vocabulary " + permission);
    assert(!row.roleCodes.some(code => code.endsWith("ENTERPRISE_PARTICIPANT_MANAGER")));
    assert(!row.groupCodes.includes("digitalEnterpriseSettingsUserGroup"));
    assert(!row.groupCodes.includes("loyaltyEnterprisePartnerConversionUserGroup"));
    for (const permission of permissions) assert(baseline.permissions[permission]?.active, "Unregistered " + permission);
    assert(!permissions.some(p => p.includes("*") || /testCredit|sampleCredit|runtime|\.approve$|\.activate$|import\.core/.test(p)));
    assert(!row.groupCodes.some(g => ["adminGroup", "runtimeConfigAdminUserGroup", "systemAdminGroup"].includes(g)));
    assert(!row.groupCodes.includes("loyaltyParticipantCustomerUserGroup"));
    assert.deepEqual(baseline.groups.loyaltyEnterprisePartnerConversionUserGroup.parentGroups, []);
  }
});

test("initial Enterprise admins compose existing capability groups after init90 definitions", () => {
  const groupCodes = [
    "commerceOwnEntitlementReaderUserGroup", "commerceOwnDigitalParticipantUserGroup",
    "digitalEnterpriseSettingsUserGroup", "loyaltyWalletReaderUserGroup",
    "loyaltyRewardTransferParticipantUserGroup", "loyaltyEnterpriseSettingsUserGroup",
    "loyaltyEnterprisePartnerConversionUserGroup",
  ];
  const adminCodes = ["circa-integrated-administrator", "circa-recycling-administrator",
    "circa-repair-administrator", "circa-logistics-administrator", "circa-group-administrator",
    "circa-online-administrator", "circa-retail-administrator"];
  for (const employee of employees) {
    if (adminCodes.includes(employee.code)) {
      assert.deepEqual(employee.userGroups, ["wasteEnterpriseAdministratorUserGroup", ...groupCodes]);
      const permissions = baseline.effective(employee.userGroups.filter(code => groupCodes.includes(code)));
      assert.deepEqual(permissions, required.filter(p => /^(loyalty\.|commerce\.digital\.)/.test(p)).sort());
      for (const group of groupCodes) assert.deepEqual(baseline.groups[group].parentGroups, []);
    } else {
      assert(!employee.userGroups.some(code => groupCodes.includes(code)), employee.code);
      const expected = employee.code === "circa-administrator"
        ? ["wasteEnterpriseAdministratorUserGroup", "runtimeConfigAdminUserGroup"]
        : [employee.code === "circa-online-operator" || employee.code === "circa-retail-operator"
          || employee.code === "circa-coupon-manager" ? "wasteCouponManagerUserGroup"
          : employee.code === "circa-verifier" ? "wasteVerifierUserGroup"
          : employee.code === "circa-approver" ? "wasteApproverUserGroup"
          : employee.code === "circa-marketplace-moderator" ? "wasteMarketplaceModeratorUserGroup"
          : employee.code === "circa-auditor" ? "wasteAuditorUserGroup" : "wasteCentreOperatorUserGroup"];
      assert.deepEqual(employee.userGroups, expected, employee.code);
    }
  }
  assert.equal(employees.filter(row => adminCodes.includes(row.code)).length, 7);
  const backoffice = require(path.join(baseline.roots.backoffice, "src/service/defaultBackofficeApplicationInitializationService"));
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const steps = backoffice.preparationSteps(loadRuntime("platformServer", environment).backofficeApplicationInitialization.profiles.circa);
    const identity = steps.find(step => step.code === "circa.ewaste:operations");
    const assignments = steps.find(step => step.code === "circa.ewaste:circaCommerceStaffAssignments");
    assert.equal(identity.order, 95);
    assert(identity.order < assignments.order);
    for (const code of ["digitalCore:enterpriseParticipationAccess", "loyaltyWallet:enterpriseParticipationAccess"]) {
      const definition = steps.find(step => step.code === code);
      assert.equal(definition.order, 90);
      assert.equal(definition.dataType, "init");
      assert.equal(definition.required, true);
      assert(definition.order < identity.order);
    }
  }
});

test("operators retain only existing merchant delegation; issuer and reviewer specializations stay bounded", () => {
  const operators = rows.filter(r => r.code.endsWith("-operator"));
  assert.equal(operators.length, 3);
  for (const row of operators) {
    assert.deepEqual(row.roleCodes, ["MERCHANT_OPERATOR"]);
    const permissions = baseline.effective(row.groupCodes);
    assert(permissions.includes("commerce.coupon.pos.redeem"));
    for (const p of required) assert(!permissions.includes(p));
  }
  for (const row of rows) {
    assert.equal(row.roleCodes.includes("PROMOTION_EDIT"), ["circa-retail-administrator", "circa-repair-administrator", "circa-recycling-administrator"].includes(row.code));
    assert.equal(row.roleCodes.includes("COMMERCE_AXIS_REFUND_REVIEWER"), row.code === "circa-online-administrator");
  }
});

test("sealed transitive dependencies install identity definitions only; no finance, credentials or scopes", () => {
  assert(baseline.releases.size > 20);
  for (const [key, release] of baseline.releases) {
    assert.equal(release.section.destinationRole, "PLATFORM", key);
    for (const file of Object.keys(release.section.files)) {
      if (key.startsWith("circa.ewaste:")) assert(file.includes("/staff-access/"));
      else assert(file.startsWith("init-v001/") && file.includes("/identity/"), key + ":" + file);
    }
  }
  const config = require("../config/properties").backofficeApplicationInitialization.profiles.circa;
  const packages = config.dataPackages.value;
  const identityIndex = packages.findIndex(p => p.code === "circa.ewaste:operations");
  const assignmentIndex = packages.findIndex(p => p.code === "circa.ewaste:circaCommerceStaffAssignments");
  assert(identityIndex >= 0 && assignmentIndex > identityIndex);
  assert.equal(packages[assignmentIndex].required, true);
  const manifest = require("../data/manifest.json");
  for (const code of ["circaRetailParticipantReadAssignment", "circaRetailParticipantTransactionAssignment", "circaRetailPromotionDraftAssignment"])
    assert.equal(manifest.sections[code], undefined, "retired narrow selections must not remain importable");
});

test("real Profile adoption appends the full group union once and rejects identity, role or group drift", async t => {
  const saved = Object.fromEntries(["CONFIG", "SERVICE", "CLASSES"].map(k => [k, global[k]]));
  t.after(() => Object.assign(global, saved));
  global.CONFIG = { get: () => ({}) };
  global.CLASSES = { NodicsError: class extends Error { constructor(code) { super(code); this.code = code; } } };
  const service = require(path.join(frameworkRoot, "nodics.platform/modules/profile/src/service/employee/defaultEmployeeService"));
  const ok = result => ({code:"SUC_TEST", count:result.length, result});
  const authData = {userGroups:["original-import-owner"]};
  const instructions = rows.filter(r => r.code.endsWith("-administrator"));
  const current = new Map(instructions.map(row => [row.code, {_id:row.code, code:row.code, loginId:row.loginId, active:true,
    principalType:"human", password:"retained-digest", authVersion:4, userGroups:["retained-business-group"],
    metadata:{enterpriseCode:row.enterpriseCode}, scopes:["retained-deny"]}]));
  let writes = 0, active = true;
  const roles = structuredClone(baseline.roles);
  global.SERVICE = {
    DefaultIdentityCatalogueService:{roles:async () => roles},
    DefaultUserGroupService:{get:async r => {
      assert.equal(r.authData, authData);
      assert(r.searchOptions.pageSize > r.query.code.$in.length);
      return ok(r.query.code.$in.map(code => ({code, active})));
    }},
    DefaultEnterpriseService:{get:async r => ok([{_id:r.query.code, code:r.query.code, active:true}])}
  };
  const owner = {...service, get:async r => ok([...current.values()].filter(row => r.query.$or.some(q => Object.entries(q).every(([k,v]) => row[k] === v))).map(row => structuredClone(row))),
    update:async r => {
      assert.equal(r.authData, authData);
      const row = [...current.values()].find(row => row._id === r.query._id);
      assert.deepEqual(r.query.userGroups, row.userGroups);
      assert.equal(r.query.password, row.password); assert.equal(r.query.authVersion, row.authVersion);
      assert.deepEqual(Object.keys(r.model), ["userGroups"]);
      row.userGroups = r.model.userGroups; row.authVersion++; writes++;
      return {code:"SUC_TEST", result:{acknowledged:true, matchedCount:1}};
    }};
  const request = {tenant:"default",authData,models:instructions};
  await owner.addReferenceGroupsAll(request);
  assert.equal(writes, 7);
  await owner.addReferenceGroupsAll(request); assert.equal(writes, 7);
  for (const row of current.values()) { assert.equal(row.password, "retained-digest"); assert.deepEqual(row.scopes,["retained-deny"]); }
  active = false; await assert.rejects(owner.addReferenceGroupsAll(request)); active = true;
  const first = current.get(instructions[0].code); first.metadata.enterpriseCode = "FOREIGN";
  await assert.rejects(owner.addReferenceGroupsAll(request)); first.metadata.enterpriseCode = instructions[0].enterpriseCode;
  roles.COMMERCE_OWN_CART_PARTICIPANT.groupCodes.push("adminGroup");
  await assert.rejects(owner.addReferenceGroupsAll(request)); assert.equal(writes, 7);
});

test("actual nImport resolves the complete Init graph before the separate Sample assignment", t => {
  const saved = Object.fromEntries(["CONFIG", "NODICS", "CLASSES"].map(k => [k, global[k]]));
  t.after(() => Object.assign(global, saved));
  const config = loadRuntime("platformServer");
  global.CONFIG = {get:key => config[key]};
  global.CLASSES = {NodicsError:class extends Error {constructor(code,message) {super(message);this.code=code;}}};
  global.NODICS = {getActiveModules:() => activeModuleNames(config),
    getRawModule:name => baseline.roots[name] ? {name,path:baseline.roots[name],index:"100"} : undefined};
  const owner = require(path.join(frameworkRoot,"nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));
  const setup = require("../config/properties").backofficeApplicationInitialization.profiles.circa.dataPackages.value;
  const roots = setup.filter(p => p.order === 90).map(pack => {
    const [moduleName,sectionCode] = pack.code.split(":");
    return owner.discoverManifestRelease({moduleName,sectionCode},"init");
  });
  const plan = owner.resolvePrerequisiteReleases(roots,"init","default");
  const done = new Set();
  for (const release of plan.releases) {
    assert.equal(release.dataType,"init");
    for (const ref of release.prerequisites || []) assert(done.has(ref.moduleName+":"+ref.sectionCode));
    done.add(release.releaseCode);
  }
  assert(done.has("digitalCore:enterpriseParticipationAccess"));
  assert(done.has("loyaltyWallet:enterpriseParticipationAccess"));
  const order = plan.releases.map(release => release.releaseCode);
  assert(order.indexOf("digitalCore:enterpriseParticipationPermissions") < order.indexOf("digitalCore:enterpriseParticipationAccess"));
  for (const code of ["digitalCore:enterpriseParticipationAccess", "loyaltyWallet:enterpriseParticipationAccess"]) {
    const release = baseline.releases.get(code);
    for (const file of Object.keys(release.section.files)) assert(!file.includes("Role"), "internal groups must not introduce profile choices");
  }
  assert.throws(() => owner.discoverPrerequisite({moduleName:"digitalCore",sectionCode:"enterpriseParticipationAccess"},"sample"));
});

test("existing Enterprise administrators inherit own Carbon and material reads without customer groups or mutation grants", () => {
  const admins = employees.filter(row => row.code.endsWith('-administrator') && row.metadata.enterpriseCode);
  assert.equal(admins.length, 7);
  for (const employee of admins) {
    const effective = baseline.effective(employee.userGroups);
    assert(effective.includes('carbon.holdings.read'), employee.code);
    assert(effective.includes('waste.materialValue.read'), employee.code);
    assert(!employee.userGroups.includes('wasteCarbonCustomerUserGroup'));
    assert(!employee.userGroups.includes('wasteMaterialValueCustomerUserGroup'));
    assert(!effective.some(code => ['carbon.holdings.reserve', 'carbon.holdings.release', 'carbon.holdings.transfer',
      'carbon.holdings.finalize', 'carbon.evidence.record'].includes(code)));
  }
});
