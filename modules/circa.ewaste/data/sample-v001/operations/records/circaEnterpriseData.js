/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/**
 * @module circa.ewaste/data/sample-v001/operations/records/circaEnterpriseData.js
 * @description Supplies the unified Circa customer demonstration dataset through canonical owner imports.
 * @layer data
 * @owner circa.ewaste
 * @override Author a successor release for customer-specific sample data; preserve installed transactions.
 */
module.exports = {
  record0: {
    code: "CIRCA_INTEGRATED_SERVICES",
    name: "Circa Integrated Services",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. CENTRE_OPERATOR, BIN_OWNER.",
    tenant: "default",
    roleCodes: ["PROGRAM_OPERATOR", "SERVICE_PROVIDER", "ASSET_OWNER"],
    addresses: [],
    contacts: [],
  },
  record1: {
    code: "LOOPCYCLE_RECYCLING",
    name: "LoopCycle Recycling",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. RECYCLING_PARTNER.",
    tenant: "default",
    roleCodes: ["SERVICE_PROVIDER", "BUSINESS_PARTNER"],
    addresses: [],
    contacts: [],
  },
  record2: {
    code: "RENEWWORKS_REPAIR_REUSE",
    name: "RenewWorks Repair & Reuse",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. REPAIR_REUSE_PARTNER.",
    tenant: "default",
    roleCodes: ["SERVICE_PROVIDER", "BUSINESS_PARTNER"],
    addresses: [],
    contacts: [],
  },
  record3: {
    code: "LOOPLINK_LOGISTICS",
    name: "LoopLink Logistics",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. LOGISTICS_PARTNER.",
    tenant: "default",
    roleCodes: ["SERVICE_PROVIDER", "BUSINESS_PARTNER"],
    addresses: [],
    contacts: [],
  },
  record4: {
    code: "GREENPERKS_GROUP",
    name: "GreenPerks Group",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. GROUP_PARENT.",
    tenant: "default",
    roleCodes: ["BUSINESS_PARTNER"],
    addresses: [],
    contacts: [],
  },
  record5: {
    code: "GREENPERKS_ONLINE",
    name: "GreenPerks Online",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. COUPON_SELLER.",
    tenant: "default",
    roleCodes: ["MARKETPLACE_VENDOR"],
    superEnterprise: "GREENPERKS_GROUP",
    addresses: [],
    contacts: [],
  },
  record6: {
    code: "GREENPERKS_RETAIL",
    name: "GreenPerks Retail",
    active: true,
    description:
      "Fictional Circa customer demonstration participant. COUPON_ISSUER, OUTLET_OWNER.",
    tenant: "default",
    roleCodes: ["ISSUER", "BUSINESS_PARTNER"],
    superEnterprise: "GREENPERKS_GROUP",
    addresses: [],
    contacts: [],
  },
};
