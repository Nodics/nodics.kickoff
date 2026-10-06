/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v001/operations/records/circaOperationalEmployeeData.js
 * @description Supplies the unified Circa customer demonstration dataset through canonical owner imports.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor release for customer-specific sample data; preserve installed transactions.
 */
module.exports = {
  record0: {
    code: "circa-administrator",
    loginId: "administrator@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Enterprise administrator",
    },
    password: {
      loginId: "administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: [
      "wasteEnterpriseAdministratorUserGroup",
      "runtimeConfigAdminUserGroup",
    ],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record1: {
    code: "circa-centre-operator",
    loginId: "centre-operator@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Centre operator",
    },
    password: {
      loginId: "centre-operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCentreOperatorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record2: {
    code: "circa-verifier",
    loginId: "verifier@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Verifier",
    },
    password: {
      loginId: "verifier@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteVerifierUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record3: {
    code: "circa-approver",
    loginId: "approver@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Approver",
    },
    password: {
      loginId: "approver@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteApproverUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record4: {
    code: "circa-coupon-manager",
    loginId: "coupon-manager@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Coupon manager",
    },
    password: {
      loginId: "coupon-manager@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCouponManagerUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record5: {
    code: "circa-marketplace-moderator",
    loginId: "marketplace-moderator@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Marketplace moderator",
    },
    password: {
      loginId: "marketplace-moderator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteMarketplaceModeratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record6: {
    code: "circa-auditor",
    loginId: "auditor@circa.local",
    name: {
      firstName: "Circa",
      lastName: "Auditor",
    },
    password: {
      loginId: "auditor@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteAuditorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
    },
  },
  record7: {
    code: "circa-integrated-administrator",
    loginId: "integrated.administrator@circa.local",
    name: {
      firstName: "Circa Integrated Services",
      lastName: "Administrator",
    },
    password: {
      loginId: "integrated.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "CIRCA_INTEGRATED_SERVICES",
    },
  },
  record8: {
    code: "circa-integrated-operator",
    loginId: "integrated.operator@circa.local",
    name: {
      firstName: "Circa Integrated Services",
      lastName: "Operator",
    },
    password: {
      loginId: "integrated.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCentreOperatorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "CIRCA_INTEGRATED_SERVICES",
    },
  },
  record9: {
    code: "circa-recycling-administrator",
    loginId: "recycling.administrator@circa.local",
    name: {
      firstName: "LoopCycle Recycling",
      lastName: "Administrator",
    },
    password: {
      loginId: "recycling.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "LOOPCYCLE_RECYCLING",
    },
  },
  record10: {
    code: "circa-recycling-operator",
    loginId: "recycling.operator@circa.local",
    name: {
      firstName: "LoopCycle Recycling",
      lastName: "Operator",
    },
    password: {
      loginId: "recycling.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCentreOperatorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "LOOPCYCLE_RECYCLING",
    },
  },
  record11: {
    code: "circa-repair-administrator",
    loginId: "repair.administrator@circa.local",
    name: {
      firstName: "RenewWorks Repair & Reuse",
      lastName: "Administrator",
    },
    password: {
      loginId: "repair.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "RENEWWORKS_REPAIR_REUSE",
    },
  },
  record12: {
    code: "circa-repair-operator",
    loginId: "repair.operator@circa.local",
    name: {
      firstName: "RenewWorks Repair & Reuse",
      lastName: "Operator",
    },
    password: {
      loginId: "repair.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCentreOperatorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "RENEWWORKS_REPAIR_REUSE",
    },
  },
  record13: {
    code: "circa-logistics-administrator",
    loginId: "logistics.administrator@circa.local",
    name: {
      firstName: "LoopLink Logistics",
      lastName: "Administrator",
    },
    password: {
      loginId: "logistics.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "LOOPLINK_LOGISTICS",
    },
  },
  record14: {
    code: "circa-logistics-operator",
    loginId: "logistics.operator@circa.local",
    name: {
      firstName: "LoopLink Logistics",
      lastName: "Operator",
    },
    password: {
      loginId: "logistics.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCentreOperatorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "LOOPLINK_LOGISTICS",
    },
  },
  record15: {
    code: "circa-group-administrator",
    loginId: "group.administrator@circa.local",
    name: {
      firstName: "GreenPerks Group",
      lastName: "Administrator",
    },
    password: {
      loginId: "group.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "GREENPERKS_GROUP",
    },
  },
  record16: {
    code: "circa-group-operator",
    loginId: "group.operator@circa.local",
    name: {
      firstName: "GreenPerks Group",
      lastName: "Operator",
    },
    password: {
      loginId: "group.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCentreOperatorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "GREENPERKS_GROUP",
    },
  },
  record17: {
    code: "circa-online-administrator",
    loginId: "online.administrator@circa.local",
    name: {
      firstName: "GreenPerks Online",
      lastName: "Administrator",
    },
    password: {
      loginId: "online.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "GREENPERKS_ONLINE",
    },
  },
  record18: {
    code: "circa-online-operator",
    loginId: "online.operator@circa.local",
    name: {
      firstName: "GreenPerks Online",
      lastName: "Operator",
    },
    password: {
      loginId: "online.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCouponManagerUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "GREENPERKS_ONLINE",
    },
  },
  record19: {
    code: "circa-retail-administrator",
    loginId: "retail.administrator@circa.local",
    name: {
      firstName: "GreenPerks Retail",
      lastName: "Administrator",
    },
    password: {
      loginId: "retail.administrator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteEnterpriseAdministratorUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "GREENPERKS_RETAIL",
    },
  },
  record20: {
    code: "circa-retail-operator",
    loginId: "retail.operator@circa.local",
    name: {
      firstName: "GreenPerks Retail",
      lastName: "Operator",
    },
    password: {
      loginId: "retail.operator@circa.local",
      password: "CircaDemo!2026",
      active: true,
    },
    principalType: "human",
    userGroups: ["wasteCouponManagerUserGroup"],
    active: true,
    metadata: {
      sample: true,
      applicationCode: "CIRCA_EWASTE",
      enterpriseCode: "GREENPERKS_RETAIL",
    },
  },
};
