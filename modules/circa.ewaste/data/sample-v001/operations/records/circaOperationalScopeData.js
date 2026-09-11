/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
/** @module circa.ewaste/data/operations/circaOperationalScopeData @description Supplies explicit local staff identities and Profile-owned operational scopes for Circa qualification. @layer data @owner circa.ewaste @override Replace sample identities and scope assignments in each customer project. */
module.exports = {
  "record0": {
    "code": "circa-scope-administrator",
    "principalType": "human",
    "principalCode": "administrator@circa.local",
    "scopeType": "ENTERPRISE",
    "scopeCode": "default",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record1": {
    "code": "circa-scope-centre-operator",
    "principalType": "human",
    "principalCode": "centre-operator@circa.local",
    "scopeType": "BUSINESS_UNIT",
    "scopeCode": "cc-dxb-01",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record2": {
    "code": "circa-scope-verifier",
    "principalType": "human",
    "principalCode": "verifier@circa.local",
    "scopeType": "BUSINESS_UNIT",
    "scopeCode": "cc-dxb-01",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record3": {
    "code": "circa-scope-approver",
    "principalType": "human",
    "principalCode": "approver@circa.local",
    "scopeType": "BUSINESS_UNIT",
    "scopeCode": "cc-dxb-01",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record4": {
    "code": "circa-scope-coupon-manager",
    "principalType": "human",
    "principalCode": "coupon-manager@circa.local",
    "scopeType": "ENTERPRISE",
    "scopeCode": "default",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record5": {
    "code": "circa-scope-marketplace-moderator",
    "principalType": "human",
    "principalCode": "marketplace-moderator@circa.local",
    "scopeType": "ENTERPRISE",
    "scopeCode": "default",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record6": {
    "code": "circa-scope-auditor",
    "principalType": "human",
    "principalCode": "auditor@circa.local",
    "scopeType": "ENTERPRISE",
    "scopeCode": "default",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_OPERATIONAL_QUALIFICATION",
    "active": true
  },
  "record7": {
    "code": "circa-scope-platform-admin",
    "principalType": "human",
    "principalCode": "admin",
    "scopeType": "GLOBAL",
    "scopeCode": "*",
    "tenantCode": "default",
    "enterpriseCode": "default",
    "effect": "ALLOW",
    "inheritanceMode": "DIRECT",
    "status": "ACTIVE",
    "reasonCode": "CIRCA_LOCAL_PLATFORM_ADMINISTRATION",
    "active": true
  }
};
