/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
/** @module circa.ewaste/data/operations/circaOperationsHeader @description Supplies explicit local staff identities and Profile-owned operational scopes for Circa qualification. @layer data @owner circa.ewaste @override Replace sample identities and scope assignments in each customer project. */
module.exports = {
  "profile": {
    "circaOperationalEmployeeData": {
      "options": {
        "enabled": true,
        "schemaName": "employee",
        "operation": "saveAll",
        "dataFilePrefix": "circaOperationalEmployeeData"
      },
      "query": {
        "code": "$code"
      }
    },
    "circaOperationalScopeData": {
      "options": {
        "enabled": true,
        "schemaName": "principalScopeAssignment",
        "operation": "saveAll",
        "dataFilePrefix": "circaOperationalScopeData"
      },
      "query": {
        "code": "$code"
      }
    }
  }
};
