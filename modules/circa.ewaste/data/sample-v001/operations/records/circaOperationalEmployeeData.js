/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
/** @module circa.ewaste/data/operations/circaOperationalEmployeeData @description Supplies explicit local staff identities and Profile-owned operational scopes for Circa qualification. @layer data @owner circa.ewaste @override Replace sample identities and scope assignments in each customer project. */
module.exports = {
  "record0": {
    "code": "circa-administrator",
    "loginId": "administrator@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Enterprise administrator"
    },
    "password": {
      "loginId": "administrator@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteEnterpriseAdministratorUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  },
  "record1": {
    "code": "circa-centre-operator",
    "loginId": "centre-operator@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Centre operator"
    },
    "password": {
      "loginId": "centre-operator@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteCentreOperatorUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  },
  "record2": {
    "code": "circa-verifier",
    "loginId": "verifier@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Verifier"
    },
    "password": {
      "loginId": "verifier@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteVerifierUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  },
  "record3": {
    "code": "circa-approver",
    "loginId": "approver@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Approver"
    },
    "password": {
      "loginId": "approver@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteApproverUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  },
  "record4": {
    "code": "circa-coupon-manager",
    "loginId": "coupon-manager@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Coupon manager"
    },
    "password": {
      "loginId": "coupon-manager@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteCouponManagerUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  },
  "record5": {
    "code": "circa-marketplace-moderator",
    "loginId": "marketplace-moderator@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Marketplace moderator"
    },
    "password": {
      "loginId": "marketplace-moderator@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteMarketplaceModeratorUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  },
  "record6": {
    "code": "circa-auditor",
    "loginId": "auditor@circa.local",
    "name": {
      "firstName": "Circa",
      "lastName": "Auditor"
    },
    "password": {
      "loginId": "auditor@circa.local",
      "password": "CircaDemo!2026",
      "active": true
    },
    "principalType": "human",
    "userGroups": [
      "wasteAuditorUserGroup"
    ],
    "active": true,
    "metadata": {
      "sample": true,
      "applicationCode": "CIRCA_EWASTE"
    }
  }
};
