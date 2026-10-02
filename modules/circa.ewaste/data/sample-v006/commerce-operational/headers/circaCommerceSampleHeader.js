/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
/** @module circa.ewaste/data/commerce-operational/header @description Declares only existing approved commerce-operational source targets; execution remains governed by owner admission. @layer data-header @owner circa.ewaste */
module.exports = {
  inventory: {
    circaInventoryBalanceData: {
      options: {
        enabled: true,
        schemaName: "inventoryBalance",
        operation: "saveAll",
        dataFilePrefix: "circaInventoryBalanceData",
      },
      query: {
        code: "$code",
      },
    },
  },
  promotion: {
    circaCouponBatchData: {
      options: {
        enabled: true,
        schemaName: "couponBatch",
        operation: "saveAll",
        dataFilePrefix: "circaCouponBatchData",
      },
      query: {
        code: "$code",
      },
    },
    circaCouponData: {
      options: {
        enabled: true,
        schemaName: "coupon",
        operation: "saveAll",
        dataFilePrefix: "circaCouponData",
      },
      query: {
        code: "$code",
      },
    },
  },
};
