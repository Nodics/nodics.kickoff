/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/refund-exception-role/records/circaLocalUnusedRefundExceptionGroupData @description One Local review permission; owner-pinned exceptions and ordinary financial approvals remain independent. @layer data @owner circa.ewaste */
module.exports = {
  circaLocalUnusedRefundException: {
    code: "circaLocalUnusedRefundExceptionUserGroup",
    name: "Circa Local Unused Coupon Review",
    active: true,
    parentGroups: ["employeeUserGroup"],
    permissions: ["commerce.refund.exception.adjudicate"],
  },
};
