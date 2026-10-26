/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
// Frozen reviewed fixture, not deployed authority or configuration-derived access.
const runtimePermissions = require("./fixtures/kickoffNativeRuntimePermissions.json");

/** @module kickoff/test/commerceOwnershipEvidenceAdoption
 * @description Verifies Local exact owner selections against resolved deployment/configuration sources, not installed qualification.
 * @owner nodics.kickoff @layer test
 */
const test = require("node:test"),
  assert = require("node:assert/strict"),
  path = require("node:path");
const {
  loadRuntime,
  frameworkRoot,
  activeModuleNames,
} = require("./helpers/configuration");
const bootstrap = require(
  path.join(
    frameworkRoot,
    "nodics.platform/modules/profile/src/service/identity/defaultMandatoryIdentityBootstrapService",
  ),
);
const startup = require(
  path.join(
    frameworkRoot,
    "nodics.foundation/modules/nTooling/src/service/project/defaultProjectRuntimeStartService",
  ),
);
const selected = {
  commerce: loadRuntime("commerceServer", "kickoffLocal"),
  waste: loadRuntime("wasteServer", "kickoffLocal"),
};
const digitalOwnershipDefaults = require(path.join(frameworkRoot,
  "nodics.commerce/modules/digitalCommerce/modules/digitalCore/config/properties"))
  .digitalCore.digitalOwnership;

test("Local capability selections pass canonical project validation and remain environment role-owned", () => {
  const projectRoot = path.resolve(__dirname, "..");
  const command = require(
    path.join(
      frameworkRoot,
      "nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService",
    ),
  );
  assert.doesNotThrow(() => command.validateProject(projectRoot));
  const environment = require("../envs/kickoffLocal/config/properties");
  assert.equal(
    Object.hasOwn(
      require("../envs/kickoffLocal/commerceServer/config/properties"),
      "apiExposure",
    ),
    false,
  );
  assert.equal(
    Object.hasOwn(
      require("../envs/kickoffLocal/commerceStagedServer/config/properties"),
      "product",
    ),
    false,
  );
  assert.equal(
    environment.apiExposure.runtimeRoleProfiles.COMMERCE.categories
      .storePlacementRead.enabled,
    true,
  );
  assert.equal(
    environment.product.runtimeRoleProfiles.COMMERCE_STAGED.marketplaceAuthoring
      .storeSource.connectionName,
    "commerce",
  );
  assert.equal(
    environment.product.runtimeRoleProfiles.COMMERCE_STAGED.marketplaceAuthoring
      .intentSource.connectionName,
    "waste",
  );
});

test("Local Commerce selects reviewed sale admission separately from financial acceptance", () => {
  const p = selected.commerce,
    policy = p.digitalCore.ownershipEvidence;
  assert.equal(
    p.apiExposure.categories.commerceOwnershipEvidence.enabled,
    true,
  );
  assert.equal(policy.enabled, true);
  assert.equal(policy.runtimeRole, p.runtimeRole.code);
  assert.deepEqual(p.digitalCore.digitalOwnership, {
    ...digitalOwnershipDefaults,
    enabled: true,
    qualified: true,
    owner: {
      ...digitalOwnershipDefaults.owner,
      moduleName: "eWaste",
      connectionName: "waste",
      targetAuthority: "WASTE",
      apiPrefix: "/internal/digital-sales",
    },
  });
  assert.equal(
    selected.waste.eWaste.marketplace.digitalOwnership.enabled,
    true,
  );
  assert.equal(
    selected.waste.eWaste.marketplace.digitalOwnership.qualified,
    true,
  );
  assert.equal(policy.callers.length, 2);
  const projectCode = startup.resolveProjectCode(path.resolve(__dirname, ".."));
  for (const [serverCode, runtime, kinds] of [
    [
      "wasteServer",
      selected.waste,
      ["LISTING", "BINDING", "PURCHASE", "REFUND"],
    ],
    ["commerceServer", p, ["ADMIT_BINDING"]],
  ]) {
    const grant = policy.callers.find((item) => item.serverCode === serverCode);
    assert.deepEqual(grant, {
      tenant: runtime.defaultTenant,
      principalEnterpriseCode: runtime.defaultEnterprise,
      enterpriseCode: "GREENPERKS_ONLINE",
      serviceId: "apiAdmin",
      projectCode,
      environmentCode: "kickoffLocal",
      serverCode,
      instanceCode: runtime.runtimeIdentity.instanceCode,
      assignmentCode: bootstrap.runtimeDeploymentGrantCode(
        "kickoffLocal",
        serverCode,
      ),
      kinds,
    });
  }
  assert.deepEqual(policy.bindingAdmission, {
    enabled: true,
    moduleName: "eWaste",
    connectionName: "waste",
    targetAuthority: {
      server: "wasteServer",
      runtimeRole: selected.waste.runtimeRole,
    },
    apiName: "/internal/digital-listings/plan",
  });
});

test("Local deployment grants retain original scope while adding only required remote owner permissions/modules", () => {
  const inherited = runtimePermissions.loyaltyServer;
  const commercePermissions = runtimePermissions.commerceServer;
  const wastePermissions = runtimePermissions.wasteServer;
  assert.deepEqual(
    new Set(commercePermissions),
    new Set([
      ...inherited,
      "loyalty.rewards.reserve",
      "loyalty.rewards.capture",
      "loyalty.rewards.release",
      "loyalty.rewards.reverse",
      "waste.asset.marketplace.project",
      "waste.asset.sale.transfer",
      "commerce.pricing.merchant.evidence",
      "commerce.product.read",
      "commerce.store.read",
      "commerce.promotion.analytics",
      "loyalty.rewards.earn",
      "carbon.holdings.read",
      "carbon.holdings.reserve",
      "carbon.holdings.release",
      "carbon.holdings.transfer",
      "carbon.holdings.finalize",
      "profile.commerce.notification.recipient.resolve",
      "communication.request",
    ]),
  );
  // envs/kickoffLocal/wasteServer explicitly selects the bounded Profile customer
  // evidence permission; Platform admits only this Waste deployment/business.
  assert.deepEqual(
    new Set(wastePermissions),
    new Set([
      ...inherited,
      "profile.externalIdentity.prepare",
      "commerce.digital.own.read",
      "profile.customer.reference.read",
      "loyalty.rewards.earn",
      "loyalty.rewards.reverse",
      "communication.request",
      "commerce.product.read",
      "waste.impact.calculate",
    ]),
  );
  for (const permissions of [commercePermissions, wastePermissions])
    assert.equal(new Set(permissions).size, permissions.length);
  assert.deepEqual(selected.commerce.runtimeIdentity.remoteModules, [
    "profile",
    "backoffice",
    "loyaltyCore",
    "loyaltyApi",
    "wasteCore",
    "media",
    "eWaste",
    "wasteCarbon",
    "workflow",
    "commsApi",
  ]);
  assert.deepEqual(
    new Set(selected.waste.runtimeIdentity.remoteModules),
    new Set([
      "profile",
      "backoffice",
      "media",
      "cms",
      "editorial",
      "locationCore",
      "loyaltyCore",
      "loyaltyApi",
      "commerceCore",
      "engagementCore",
      "commsApi",
      "workflow",
      "digitalCore",
      "product",
      "pricing",
    ]),
  );
  assert.equal(
    selected.waste.runtimeIdentity.remoteModules.length,
    new Set(selected.waste.runtimeIdentity.remoteModules).size,
  );
  assert.equal(
    activeModuleNames(selected.commerce).includes("eWaste"),
    false,
    "Remote declaration must not activate Waste on Commerce",
  );
  assert.equal(
    activeModuleNames(selected.waste).includes("digitalCore"),
    false,
    "Remote declaration must not activate Commerce on Waste",
  );
  assert.equal(
    activeModuleNames(selected.waste).includes("commsApi"),
    false,
    "Remote declaration must not activate Communication on Waste",
  );
  assert.equal(
    activeModuleNames(selected.waste).includes("pricing"),
    false,
    "Remote declaration must not activate Pricing on Waste",
  );
  for (const server of ["commerceServer", "wasteServer"]) {
    const source = require(
      "../envs/kickoffLocal/" + server + "/config/properties",
    );
    assert.equal(
      source.identityGovernance?.migration?.runtimeDeploymentGrantPermissions,
      undefined,
    );
  }
  assert.equal(
    require("../envs/kickoffLocal/commerceServer/config/properties").digitalCore
      .ownershipEvidence.callers.$config,
    "replace",
  );
});

test("evidence policy and permissions remain confined to native Local owner deployments", () => {
  for (const [server, environment] of [
    ["commerceStagedServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"],
    ["loyaltyServer", "kickoffLocal"],
    ["commerceServer", "kickoffDockerLocal"],
    ["wasteServer", "kickoffDockerLocal"],
  ]) {
    const p = loadRuntime(server, environment);
    assert.notEqual(
      p.apiExposure.categories.commerceOwnershipEvidence?.enabled,
      true,
      server + "/" + environment,
    );
    assert.notEqual(
      p.digitalCore?.ownershipEvidence?.enabled,
      true,
      server + "/" + environment,
    );
    assert.notEqual(
      p.digitalCore?.digitalOwnership?.enabled,
      true,
      server + "/" + environment,
    );
    assert.notEqual(
      p.eWaste?.marketplace?.digitalOwnership?.enabled,
      true,
      server + "/" + environment,
    );
    const permissions =
      environment === "kickoffLocal" ? runtimePermissions[server] : [];
    assert.equal(permissions.includes("commerce.digital.own.read"), false);
    assert.equal(
      permissions.includes("waste.asset.marketplace.project"),
      false,
    );
    assert.equal(
      permissions.includes("profile.customer.reference.read"),
      false,
    );
    for (const permission of [
      "waste.asset.sale.transfer",
      "loyalty.rewards.earn",
      "loyalty.rewards.reverse",
    ])
      assert.equal(
        permissions.includes(permission),
        false,
        server + "/" + environment + ": " + permission,
      );
  }
});

test("native asset sale grants preserve signed deployment identities and are not qualification flags", () => {
  for (const [server, runtime, additions] of [
    ["commerceServer", selected.commerce, ["waste.asset.sale.transfer"]],
    [
      "wasteServer",
      selected.waste,
      ["loyalty.rewards.earn", "loyalty.rewards.reverse"],
    ],
  ]) {
    const identity = require("../envs/kickoffLocal/" + server + "/package.json")
      .nodics.runtimeIdentity;
    assert.deepEqual(runtime.runtimeIdentity, identity);
    for (const permission of additions)
      assert.equal(
        runtimePermissions[server].filter((value) => value === permission)
          .length,
        1,
      );
  }
  assert.equal(
    runtimePermissions.commerceServer.includes("loyalty.rewards.earn"),
    true,
  );
  assert.equal(
    runtimePermissions.wasteServer.includes("waste.asset.sale.transfer"),
    false,
  );
  assert.equal(selected.commerce.digitalCore.digitalOwnership.qualified, true);
  assert.equal(
    selected.waste.eWaste.marketplace.digitalOwnership.qualified,
    true,
  );
});

test("Local Staged listing proof adds only selected intent, store and bundle publication authority", () => {
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal");
  const baseline = runtimePermissions.loyaltyServer;
  assert.deepEqual(
    new Set(runtimePermissions.commerceStagedServer),
    new Set([
      ...baseline,
      "waste.asset.listing.intent.read",
      "commerce.store.read",
      "commerce.digital.bundle.publish",
    ]),
  );
  assert.equal(
    runtimePermissions.commerceStagedServer.includes(
      "waste.asset.marketplace.project",
    ),
    false,
  );
  assert.equal(activeModuleNames(staged).includes("eWaste"), false);
  assert.deepEqual(staged.runtimeIdentity.remoteModules, [
    "profile",
    "backoffice",
    "loyaltyCore",
    "wasteCore",
    "eWaste",
    "media",
    "workflow",
  ]);
  assert.equal(
    staged.runtimeIdentity.instanceCode,
    "kickoff-local-commerce-staged-1",
  );
  assert.deepEqual(
    staged.profileTenantProvisioning.runtimeRemoteModuleExtensions,
    ["eWaste"],
  );
  const callers =
    selected.waste.eWaste.marketplace.digitalOwnership.businessCallers;
  assert.equal(callers.length, 3);
  assert.deepEqual(callers.filter(c => c.enterpriseCode === "GREENPERKS_RETAIL"), [{
    tenant: "default", principalEnterpriseCode: "default", enterpriseCode: "GREENPERKS_RETAIL",
    serviceId: "apiAdmin", projectCode: "nodics.kickoff", environmentCode: "kickoffLocal",
    serverCode: "commerceServer", instanceCode: "kickoff-local-commerce-1",
    assignmentCode: "kickoff-local-commerce-runtime-deployment", permissions: ["waste.asset.sale.transfer"],
  }]);
  assert.deepEqual(
    callers.find((c) => c.serverCode === "commerceStagedServer"),
    {
      tenant: "default",
      principalEnterpriseCode: "default",
      enterpriseCode: "GREENPERKS_ONLINE",
      serviceId: "apiAdmin",
      projectCode: "nodics.kickoff",
      environmentCode: "kickoffLocal",
      serverCode: "commerceStagedServer",
      instanceCode: "kickoff-local-commerce-staged-1",
      assignmentCode: bootstrap.runtimeDeploymentGrantCode(
        "kickoffLocal",
        "commerceStagedServer",
      ),
      permissions: ["waste.asset.listing.intent.read"],
    },
  );
  assert.deepEqual(
    callers.find((c) => c.serverCode === "commerceServer").permissions,
    ["waste.asset.marketplace.project", "waste.asset.sale.transfer"],
  );
  for (const [server, environment] of [
    ["commerceServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"],
    ["wasteServer", "kickoffLocal"],
    ["commerceStagedServer", "kickoffDockerLocal"],
  ]) {
    const p = loadRuntime(server, environment);
    assert.equal(
      (environment === "kickoffLocal"
        ? runtimePermissions[server]
        : []
      ).includes("waste.asset.listing.intent.read"),
      false,
    );
    assert.equal(
      (
        p.profileTenantProvisioning?.runtimeRemoteModuleExtensions || []
      ).includes("eWaste"),
      false,
    );
  }
});

test("Local Staged Product intent reads reuse Waste with the exact selected Staged authority", () => {
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal");
  assert.deepEqual(staged.product.marketplaceAuthoring.intentSource, {
    moduleName: "eWaste",
    connectionName: "waste",
    connectionType: "abstract",
    runtimeRole: "WASTE",
    timeoutMs: 15000,
    allowInsecureLoopback: true,
  });
  assert.ok(
    staged.servers.waste,
    "The intent owner reuses the declared Waste connection",
  );
  assert.equal(
    staged.runtimeIdentity.instanceCode,
    "kickoff-local-commerce-staged-1",
  );
  assert.equal(activeModuleNames(staged).includes("eWaste"), false);
  assert.deepEqual(
    staged.profileTenantProvisioning.runtimeRemoteModuleExtensions,
    ["eWaste"],
  );
  const baseline = runtimePermissions.loyaltyServer;
  assert.deepEqual(
    new Set(runtimePermissions.commerceStagedServer),
    new Set([
      ...baseline,
      "waste.asset.listing.intent.read",
      "commerce.store.read",
      "commerce.digital.bundle.publish",
    ]),
  );
  for (const [server, environment] of [
    ["commerceServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"],
    ["wasteServer", "kickoffLocal"],
    ["commerceStagedServer", "kickoffDockerLocal"],
  ]) {
    const runtime = loadRuntime(server, environment);
    assert.notEqual(
      runtime.product?.marketplaceAuthoring?.intentSource?.moduleName,
      "eWaste",
    );
    assert.notEqual(
      runtime.product?.marketplaceAuthoring?.intentSource?.connectionName,
      "waste",
    );
  }
});

test("Local Staged and operational Commerce read only their approved Store placements without generic schema authority or module growth", () => {
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal"),
    online = selected.commerce;
  assert.deepEqual(staged.product.marketplaceAuthoring.storeSource, {
    moduleName: "store",
    connectionName: "commerce",
    connectionType: "abstract",
    runtimeRole: "COMMERCE",
    timeoutMs: 15000,
    allowInsecureLoopback: true,
  });
  assert.ok(staged.servers.commerce);
  assert.equal(
    activeModuleNames(staged).includes("store"),
    true,
    "Store was already in the original signed graph",
  );
  assert.deepEqual(
    staged.runtimeIdentity,
    require("../envs/kickoffLocal/commerceStagedServer/package.json").nodics
      .runtimeIdentity,
  );
  assert.equal(
    staged.runtimeIdentity.remoteModules.includes("store"),
    false,
    "Do not duplicate the existing module claim",
  );
  assert.deepEqual(
    staged.profileTenantProvisioning.runtimeRemoteModuleExtensions,
    ["eWaste"],
  );
  const permissions = runtimePermissions.commerceStagedServer;
  assert.equal(
    permissions.filter((p) => p === "commerce.store.read").length,
    1,
  );
  for (const permission of [
    "system.schema.view",
    "system.schema.manage",
    "commerce.store.write",
  ])
    assert.equal(permissions.includes(permission), false, permission);
  assert.equal(online.apiExposure.categories.storePlacementRead.enabled, true);
  assert.deepEqual(online.store.placementRead, {
    enabled: true,
    runtimeRole: "COMMERCE",
    callers: [
      {
        tenant: staged.defaultTenant,
        principalEnterpriseCode: staged.defaultEnterprise,
        serviceId: "apiAdmin",
        projectCode: startup.resolveProjectCode(path.resolve(__dirname, "..")),
        environmentCode: "kickoffLocal",
        serverCode: "commerceStagedServer",
        instanceCode: staged.runtimeIdentity.instanceCode,
        assignmentCode: bootstrap.runtimeDeploymentGrantCode(
          "kickoffLocal",
          "commerceStagedServer",
        ),
        placements: [
          { storeCode: "circaMainStore", enterpriseCode: "GREENPERKS_ONLINE" },
        ],
      },
      {
        tenant: staged.defaultTenant,
        principalEnterpriseCode: staged.defaultEnterprise,
        serviceId: "apiAdmin",
        projectCode: startup.resolveProjectCode(path.resolve(__dirname, "..")),
        environmentCode: "kickoffLocal",
        serverCode: "commerceServer",
        instanceCode: online.runtimeIdentity.instanceCode,
        assignmentCode: bootstrap.runtimeDeploymentGrantCode(
          "kickoffLocal",
          "commerceServer",
        ),
        placements: [
          { storeCode: "agoraMainStore", enterpriseCode: "default" },
          { storeCode: "circaMainStore", enterpriseCode: "GREENPERKS_ONLINE" },
        ],
      },
    ],
  });
  for (const [server, environment] of [
    ["commerceServer", "kickoffDockerLocal"],
    ["commerceStagedServer", "kickoffDockerLocal"],
    ["wasteServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"],
    ["commerceStagedServer", "kickoffLocal"],
  ]) {
    const runtime = loadRuntime(server, environment);
    assert.notEqual(
      runtime.apiExposure.categories.storePlacementRead?.enabled,
      true,
      server + "/" + environment,
    );
    assert.notEqual(
      runtime.store?.placementRead?.enabled,
      true,
      server + "/" + environment,
    );
    if (server !== "commerceStagedServer" || environment !== "kickoffLocal") {
      const directCommerceOwner =
        server === "commerceServer" && environment === "kickoffLocal";
      assert.equal(
        (environment === "kickoffLocal"
          ? runtimePermissions[server]
          : []
        ).includes("commerce.store.read"),
        directCommerceOwner,
      );
      assert.equal(
        runtime.product?.marketplaceAuthoring?.storeSource?.connectionName ??
          null,
        null,
        "A neutral Store protocol descriptor must not select a deployment connection",
      );
    }
  }
  assert.equal(
    runtimePermissions.commerceServer.includes("commerce.store.read"),
    true,
    "Cart uses the local Store owner through the exact reviewed runtime grant",
  );
});

test("the canonical Store owner enforces the exact Local placement binding before generated reads", async () => {
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal"),
    online = selected.commerce;
  const owner = require(
    path.join(
      frameworkRoot,
      "nodics.commerce/modules/baseCommerce/modules/store/src/service/defaultStorePlacementService",
    ),
  );
  const pin = online.store.placementRead.callers.find(
    caller => caller.serverCode === "commerceStagedServer",
  );
  const auth = {
    principalType: "service",
    tenant: pin.tenant,
    entCode: pin.principalEnterpriseCode,
    serviceId: pin.serviceId,
    runtimeInstanceId: pin.instanceCode,
    permissions: ["commerce.store.read"],
    runtimeScope: Object.fromEntries(
      [
        "projectCode",
        "environmentCode",
        "serverCode",
        "instanceCode",
        "assignmentCode",
      ].map((k) => [k, pin[k]]),
    ),
  };
  const request = () => ({
    tenant: "default",
    authData: structuredClone(auth),
    router: {},
    payload: { contractVersion: 1, storeCode: "circaMainStore" },
    httpRequest: { headers: {} },
  });
  const previous = Object.fromEntries(
    ["CONFIG", "SERVICE"].map((key) => [key, global[key]]),
  );
  let reads = 0;
  global.CONFIG = { get: (key) => online[key] };
  global.SERVICE = {
    DefaultServiceTokenService: { requireRuntimePrincipal: (r) => r.authData },
    DefaultLoggerService: { hasPrivateCaptureProtection: () => true },
    DefaultIdentityGovernanceService: {
      getSystemAuthData: () => ({ isSystem: true }),
    },
    DefaultStoreService: {
      get: async (r) => {
        owner.checkPersistenceRead(r);
        reads++;
        // Explicit source fixture, not retained Store data or an installed qualification.
        return {
          code: "SUC_DBS_00000",
          count: 1,
          result: [
            {
              tenant: "default",
              code: "circaMainStore",
              active: true,
              status: "ACTIVE",
              revision: 1,
              enterpriseRef: { code: "GREENPERKS_ONLINE" },
            },
          ],
        };
      },
    },
  };
  try {
    const dto = await owner.placement(request());
    assert.equal(reads, 2);
    assert.equal(dto.store.enterpriseCode, "GREENPERKS_ONLINE");
    assert.equal(dto.store.code, "circaMainStore");
    for (const mutate of [
      (r) => {
        r.payload.storeCode = "foreignStore";
      },
      (r) => {
        r.authData.runtimeScope.serverCode = "wasteServer";
      },
      (r) => {
        r.authData.runtimeScope.assignmentCode = "foreign-assignment";
      },
      (r) => {
        r.authData.entCode = "GREENPERKS_RETAIL";
      },
      (r) => {
        r.authData.tenant = r.tenant = "foreignTenant";
      },
      (r) => {
        r.authData.permissions = [];
      },
      (r) => {
        r.authData.isSystem = true;
      },
    ]) {
      const r = request();
      mutate(r);
      await assert.rejects(owner.placement(r));
      assert.equal(
        reads,
        2,
        "Foreign caller/placement must reject before generated reads",
      );
    }
    assert.deepEqual(
      staged.runtimeIdentity,
      require("../envs/kickoffLocal/commerceStagedServer/package.json").nodics
        .runtimeIdentity,
    );
  } finally {
    for (const [key, value] of Object.entries(previous))
      if (value === undefined) delete global[key];
      else global[key] = value;
  }
});

test("Staged's adopted remote extension passes the canonical original ceiling guard without active growth or snapshot rewrite", () => {
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal");
  const owner = require(
    path.join(
      frameworkRoot,
      "nodics.platform/modules/profile/src/service/enterprise/defaultEnterpriseTenantProvisioningService",
    ),
  );
  const projectCode = startup.resolveProjectCode(path.resolve(__dirname, ".."));
  const modules = [
    ...new Set([
      ...activeModuleNames(staged),
      ...staged.runtimeIdentity.remoteModules,
    ]),
  ];
  const original = modules.filter((name) => name !== "eWaste"),
    snapshot = [...original];
  const scope = {
    projectCode,
    environmentCode: "kickoffLocal",
    serverCode: "commerceStagedServer",
    instanceCode: staged.runtimeIdentity.instanceCode,
    modules,
  };
  let resolved = { properties: staged, modules: activeModuleNames(staged) };
  const previous = Object.fromEntries(
    ["SERVICE", "NODICS", "CLASSES"].map((key) => [key, global[key]]),
  );
  global.CLASSES = {
    NodicsError: class extends Error {
      constructor(code) {
        super(code);
        this.code = code;
      }
    },
  };
  global.NODICS = {
    getEnvironmentName: () => projectCode,
    getSelectedEnvironmentName: () => "kickoffLocal",
  };
  global.SERVICE = {
    DefaultMandatoryIdentityBootstrapService: {
      isRuntimeDeploymentBootstrapEnabled: () => true,
      getProjectRoot: () => path.resolve(__dirname, ".."),
      readResolvedRuntimeDeployment: (selection) => {
        assert.equal(selection.serverCode, "commerceStagedServer");
        return resolved;
      },
    },
  };
  try {
    owner.assertRuntimeRemoteModuleExtensions(scope, original);
    for (const invalid of [
      {
        properties: {
          ...staged,
          profileTenantProvisioning: { runtimeRemoteModuleExtensions: [] },
        },
        modules: resolved.modules,
      },
      { properties: staged, modules: [...resolved.modules, "eWaste"] },
      {
        properties: {
          ...staged,
          runtimeIdentity: { ...staged.runtimeIdentity, remoteModules: [] },
        },
        modules: resolved.modules,
      },
    ]) {
      resolved = invalid;
      assert.throws(
        () => owner.assertRuntimeRemoteModuleExtensions(scope, original),
        { code: "ERR_PROFILE_TENANT_PROVISIONING_HELD" },
      );
    }
    resolved = { properties: staged, modules: activeModuleNames(staged) };
    for (const invalid of [
      { ...scope, instanceCode: "different-instance" },
      { ...scope, modules: [...modules, "unapprovedModule"] },
    ])
      assert.throws(
        () => owner.assertRuntimeRemoteModuleExtensions(invalid, original),
        { code: "ERR_PROFILE_TENANT_PROVISIONING_HELD" },
      );
    assert.deepEqual(original, snapshot);
    assert.equal(
      runtimePermissions.commerceStagedServer.includes(
        "waste.asset.marketplace.project",
      ),
      false,
    );
  } finally {
    for (const [key, value] of Object.entries(previous))
      if (value === undefined) delete global[key];
      else global[key] = value;
  }
});

test("Local Waste and Commerce Product reads preserve business pins and grant no publication caller mapping", () => {
  const waste = selected.waste;
  assert.equal(waste.runtimeIdentity.instanceCode, "kickoff-local-waste-1");
  assert.deepEqual(
    waste.profileTenantProvisioning.runtimeRemoteModuleExtensions,
    ["pricing"],
  );
  assert.equal(waste.eWaste.marketplace.storeCode, "circaMainStore");
  assert.equal(waste.eWaste.marketplace.priceBookCode, "circaPointsPriceBook");
  assert.deepEqual(
    waste.publish.approvalWorkflow.runtimeEnterpriseScope.enterpriseCodes,
    [
      "GREENPERKS_ONLINE",
      "GREENPERKS_RETAIL",
      "RENEWWORKS_REPAIR_REUSE",
      "LOOPCYCLE_RECYCLING",
    ],
  );
  assert.equal(
    require("../envs/kickoffLocal/wasteServer/config/properties").eWaste
      .marketplace.listingHandoff.enabled,
    true,
    "The separately approved handoff workflow is an explicit owner selection, not inherited from read scope",
  );
  assert.equal(
    runtimePermissions.wasteServer.filter((p) => p === "commerce.product.read")
      .length,
    1,
  );
  assert.equal(
    runtimePermissions.commerceServer.filter((p) => p === "commerce.product.read")
      .length,
    1,
    "Digital listing composition has read-only Product Store placement authority",
  );
  for (const [server, environment] of [
    ["commerceStagedServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"],
    ["wasteServer", "kickoffDockerLocal"],
  ]) {
    const runtime = loadRuntime(server, environment);
    assert.equal(
      (environment === "kickoffLocal"
        ? runtimePermissions[server]
        : []
      ).includes("commerce.product.read"),
      false,
    );
    assert.equal(
      (
        runtime.profileTenantProvisioning?.runtimeRemoteModuleExtensions || []
      ).includes("pricing"),
      false,
    );
  }
});

test("Local listing handoff is explicitly selected only on Waste without automatic command invocation", () => {
  assert.equal(selected.waste.eWaste.marketplace.listingHandoff.enabled, true);
  for (const [server, environment] of [
    ["commerceServer", "kickoffLocal"],
    ["commerceStagedServer", "kickoffLocal"],
    ["platformServer", "kickoffLocal"],
    ["wasteServer", "kickoffDockerLocal"],
  ]) {
    const runtime = loadRuntime(server, environment);
    assert.notEqual(runtime.eWaste?.marketplace?.listingHandoff?.enabled, true);
  }
});

test("Waste's exact remote Pricing extension respects original namespace ceilings without rewriting snapshots", () => {
  const waste = selected.waste;
  const owner = require(
    path.join(
      frameworkRoot,
      "nodics.platform/modules/profile/src/service/enterprise/defaultEnterpriseTenantProvisioningService",
    ),
  );
  const modules = [
    ...new Set([
      ...activeModuleNames(waste),
      ...waste.runtimeIdentity.remoteModules,
    ]),
  ];
  const original = modules.filter((name) => name !== "pricing"),
    snapshot = [...original];
  const scope = {
    projectCode: startup.resolveProjectCode(path.resolve(__dirname, "..")),
    environmentCode: "kickoffLocal",
    serverCode: "wasteServer",
    instanceCode: waste.runtimeIdentity.instanceCode,
    modules,
  };
  let resolved = { properties: waste, modules: activeModuleNames(waste) };
  const previous = Object.fromEntries(
    ["SERVICE", "NODICS", "CLASSES"].map((key) => [key, global[key]]),
  );
  global.CLASSES = {
    NodicsError: class extends Error {
      constructor(code) {
        super(code);
        this.code = code;
      }
    },
  };
  global.NODICS = {
    getEnvironmentName: () => scope.projectCode,
    getSelectedEnvironmentName: () => "kickoffLocal",
  };
  global.SERVICE = {
    DefaultMandatoryIdentityBootstrapService: {
      isRuntimeDeploymentBootstrapEnabled: () => true,
      getProjectRoot: () => path.resolve(__dirname, ".."),
      readResolvedRuntimeDeployment: (selection) => {
        assert.equal(selection.serverCode, "wasteServer");
        return resolved;
      },
    },
  };
  try {
    owner.assertRuntimeRemoteModuleExtensions(scope, original);
    for (const invalid of [
      {
        properties: {
          ...waste,
          profileTenantProvisioning: { runtimeRemoteModuleExtensions: [] },
        },
        modules: resolved.modules,
      },
      { properties: waste, modules: [...resolved.modules, "pricing"] },
      {
        properties: {
          ...waste,
          runtimeIdentity: { ...waste.runtimeIdentity, remoteModules: [] },
        },
        modules: resolved.modules,
      },
    ]) {
      resolved = invalid;
      assert.throws(
        () => owner.assertRuntimeRemoteModuleExtensions(scope, original),
        { code: "ERR_PROFILE_TENANT_PROVISIONING_HELD" },
      );
    }
    resolved = { properties: waste, modules: activeModuleNames(waste) };
    for (const invalid of [
      { ...scope, instanceCode: "different-instance" },
      { ...scope, modules: [...modules, "unapprovedModule"] },
    ])
      assert.throws(
        () => owner.assertRuntimeRemoteModuleExtensions(invalid, original),
        { code: "ERR_PROFILE_TENANT_PROVISIONING_HELD" },
      );
    assert.deepEqual(original, snapshot);
  } finally {
    for (const [key, value] of Object.entries(previous))
      if (value === undefined) delete global[key];
      else global[key] = value;
  }
});

test("Local Pricing writer bindings retain exact qualified Staged/Online identities and deny Waste through the canonical guard", () => {
  const staged = loadRuntime("commerceStagedServer", "kickoffLocal"),
    online = selected.commerce;
  const owner = require(
    path.join(
      frameworkRoot,
      "nodics.commerce/modules/baseCommerce/modules/pricing/src/service/defaultPricingPublicationService",
    ),
  );
  const caller = (runtime, serverCode) => ({
    tenant: runtime.defaultTenant,
    principalEnterpriseCode: runtime.defaultEnterprise,
    serviceId: "apiAdmin",
    projectCode: startup.resolveProjectCode(path.resolve(__dirname, "..")),
    environmentCode: "kickoffLocal",
    serverCode,
    instanceCode: runtime.runtimeIdentity.instanceCode,
    assignmentCode: bootstrap.runtimeDeploymentGrantCode(
      "kickoffLocal",
      serverCode,
    ),
  });
  const previous = Object.fromEntries(
    ["CONFIG", "SERVICE"].map((key) => [key, global[key]]),
  );
  try {
    for (const [
      runtime,
      bindingKey,
      connectionName,
      runtimeRole,
      admittedRuntime,
      admittedServer,
      operations,
    ] of [
      [
        online,
        "sourceAuthority",
        "commerceStaged",
        "COMMERCE_STAGED",
        staged,
        "commerceStagedServer",
        ["prepare", "activate", "reconcile"],
      ],
      [
        staged,
        "target",
        "commerce",
        "COMMERCE",
        online,
        "commerceServer",
        ["authorize"],
      ],
    ]) {
      const expected = caller(admittedRuntime, admittedServer),
        binding = runtime.pricing.publication[bindingKey];
      assert.deepEqual(binding, {
        moduleName: "pricing",
        connectionName,
        connectionType: "abstract",
        runtimeRole,
        callers: [expected],
      });
      let settings = structuredClone(runtime);
      global.CONFIG = { get: (key) => settings[key] };
      global.SERVICE = {
        DefaultServiceTokenService: {
          requireRuntimePrincipal: (request, moduleName) => {
            assert.equal(moduleName, "pricing");
            return request.authData;
          },
        },
      };
      const request = (pin) => ({
        tenant: pin.tenant,
        authData: {
          principalType: "service",
          tenant: pin.tenant,
          entCode: pin.principalEnterpriseCode,
          serviceId: pin.serviceId,
          runtimeInstanceId: pin.instanceCode,
          runtimeScope: Object.fromEntries(
            [
              "projectCode",
              "environmentCode",
              "serverCode",
              "instanceCode",
              "assignmentCode",
            ].map((key) => [key, pin[key]]),
          ),
        },
      });
      for (const operation of operations) {
        const original = request(expected),
          recheck = owner.requirePublicationCaller(original, operation);
        assert.doesNotThrow(recheck);
        assert.throws(() =>
          owner.requirePublicationCaller(
            request(caller(selected.waste, "wasteServer")),
            operation,
          ),
        );
        for (const key of Object.keys(expected))
          assert.throws(
            () =>
              owner.requirePublicationCaller(
                request({ ...expected, [key]: "different" }),
                operation,
              ),
            key,
          );
        settings.pricing.publication[bindingKey].callers = [];
        assert.throws(
          recheck,
          "Equivalent transport without its writer mapping must fail closed",
        );
        settings = structuredClone(runtime);
      }
      assert.equal(
        binding.callers.some((c) => c.serverCode === "wasteServer"),
        false,
      );
    }
    for (const server of ["commerceServer", "commerceStagedServer"]) {
      const docker = loadRuntime(server, "kickoffDockerLocal");
      assert.deepEqual(docker.pricing.publication.sourceAuthority.callers, []);
      assert.deepEqual(docker.pricing.publication.target.callers, []);
    }
  } finally {
    for (const [key, value] of Object.entries(previous))
      if (value === undefined) delete global[key];
      else global[key] = value;
  }
});


test("Local Bidding Circa merchant matches canonical Store without changing Docker or other stores", () => {
  const stores = require("../modules/circa.ewaste/data/sample-v001/store/records/circaStoreData");
  const store = Object.values(stores).find(row => row.code === "circaMainStore");
  const local = selected.commerce.bidding.stores;
  const docker = loadRuntime("commerceServer", "kickoffDockerLocal").bidding.stores;
  assert.equal(store.enterpriseRef.code, "GREENPERKS_ONLINE");
  assert.equal(local.circaMainStore.enterpriseCode, store.enterpriseRef.code);
  assert.equal(docker.circaMainStore.enterpriseCode, "default");
  assert.deepEqual(local.circaMainStore, { ...docker.circaMainStore, enterpriseCode: store.enterpriseRef.code });
  const otherStores = values => Object.fromEntries(Object.entries(values).filter(([code]) => code !== "circaMainStore"));
  assert.deepEqual(otherStores(local), otherStores(docker));
});
