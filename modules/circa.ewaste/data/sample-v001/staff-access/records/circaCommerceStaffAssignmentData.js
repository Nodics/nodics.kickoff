/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/staff-access/records/circaCommerceStaffAssignmentData @description Reviewed additive roles for existing demo employees; never employee snapshots, passwords or runtime grants. @layer data @owner circa.ewaste */
module.exports = {
  "record0": {
    "code": "circa-online-administrator",
    "loginId": "online.administrator@circa.local",
    "enterpriseCode": "GREENPERKS_ONLINE",
    "roleCodes": [
      "COMMERCE_SETUP_PUBLISHER",
      "COMMERCE_AXIS_REFUND_REVIEWER"
    ],
    "groupCodes": [
      "commerceSetupPublisherUserGroup",
      "commercePublicationStarterUserGroup",
      "commerceAxisRefundReviewerUserGroup"
    ]
  },
  "record1": {
    "code": "circa-retail-administrator",
    "loginId": "retail.administrator@circa.local",
    "enterpriseCode": "GREENPERKS_RETAIL",
    "roleCodes": [
      "COMMERCE_SETUP_PUBLISHER",
      "COMMERCE_COUPON_ISSUER"
    ],
    "groupCodes": [
      "commerceSetupPublisherUserGroup",
      "commercePublicationStarterUserGroup",
      "commerceCouponIssuerUserGroup"
    ]
  },
  "record2": {
    "code": "circa-repair-administrator",
    "loginId": "repair.administrator@circa.local",
    "enterpriseCode": "RENEWWORKS_REPAIR_REUSE",
    "roleCodes": [
      "COMMERCE_SETUP_PUBLISHER",
      "COMMERCE_COUPON_ISSUER"
    ],
    "groupCodes": [
      "commerceSetupPublisherUserGroup",
      "commercePublicationStarterUserGroup",
      "commerceCouponIssuerUserGroup"
    ]
  },
  "record3": {
    "code": "circa-recycling-administrator",
    "loginId": "recycling.administrator@circa.local",
    "enterpriseCode": "LOOPCYCLE_RECYCLING",
    "roleCodes": [
      "COMMERCE_SETUP_PUBLISHER",
      "COMMERCE_COUPON_ISSUER"
    ],
    "groupCodes": [
      "commerceSetupPublisherUserGroup",
      "commercePublicationStarterUserGroup",
      "commerceCouponIssuerUserGroup"
    ]
  },
  "record4": {
    "code": "circa-retail-operator",
    "loginId": "retail.operator@circa.local",
    "enterpriseCode": "GREENPERKS_RETAIL",
    "roleCodes": [
      "MERCHANT_OPERATOR"
    ],
    "groupCodes": [
      "commerceMerchantUserGroup"
    ]
  },
  "record5": {
    "code": "circa-repair-operator",
    "loginId": "repair.operator@circa.local",
    "enterpriseCode": "RENEWWORKS_REPAIR_REUSE",
    "roleCodes": [
      "MERCHANT_OPERATOR"
    ],
    "groupCodes": [
      "commerceMerchantUserGroup"
    ]
  },
  "record6": {
    "code": "circa-recycling-operator",
    "loginId": "recycling.operator@circa.local",
    "enterpriseCode": "LOOPCYCLE_RECYCLING",
    "roleCodes": [
      "MERCHANT_OPERATOR"
    ],
    "groupCodes": [
      "commerceMerchantUserGroup"
    ]
  }
};
